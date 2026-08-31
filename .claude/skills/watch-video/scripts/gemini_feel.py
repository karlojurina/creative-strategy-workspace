#!/usr/bin/env python3
"""Layer 3 of the /watch-video pipeline: subjective feel analysis via Gemini.

Gemini ingests video with synced audio natively, so it can judge what frames
cannot: pacing feel, music mood, sound design, energy arc, momentum.

Usage:
  python3 gemini_feel.py <video-file-or-youtube-url> [custom prompt]

Needs GEMINI_API_KEY in the environment (get one at https://aistudio.google.com/apikey,
then: echo 'export GEMINI_API_KEY=...' >> ~/.zshrc). Optional: GEMINI_MODEL
(default gemini-2.5-flash). Stdlib only.
"""
import json
import mimetypes
import os
import sys
import time
import urllib.error
import urllib.request

BASE = "https://generativelanguage.googleapis.com"

DEFAULT_PROMPT = """You are the eyes and ears of an ads strategist analyzing this video. \
Frames and transcript are handled elsewhere - your job is ONLY what requires watching \
motion and hearing audio in sync. Report with timestamps:

1. ENERGY ARC: how the energy moves start to finish (calm/urgent/building/sagging), \
where it peaks, where it dips.
2. PACING FEEL: where the edit feels fast or slow regardless of literal cut count. \
Does it ever drag? Where would a viewer's thumb start moving?
3. MUSIC: genre, mood, volume relative to voice, any drops/risers/switches and what \
they coincide with.
4. SOUND DESIGN: SFX, whooshes, UI sounds, silence used deliberately.
5. DELIVERY: the speaker's emotional register and how it shifts (if there is a speaker).
6. GRAB/LOSE MOMENTS: the 2-3 moments most likely to hold attention and the 2-3 most \
likely to lose it, and why.
7. VERDICT: one short paragraph - what is this edit doing to the viewer, mechanically?

Be specific and concrete. No praise, no hedging. This is for learnings, not a review."""


def api(req, timeout=300):
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = resp.read().decode()
            return (json.loads(body) if body.strip() else {}), dict(resp.headers)
    except urllib.error.HTTPError as e:
        sys.exit(f"Gemini API error {e.code}: {e.read().decode()[:800]}")


def upload_file(path, key):
    size = os.path.getsize(path)
    mime = mimetypes.guess_type(path)[0] or "video/mp4"
    start = urllib.request.Request(
        f"{BASE}/upload/v1beta/files?key={key}",
        data=json.dumps({"file": {"display_name": os.path.basename(path)}}).encode(),
        headers={
            "X-Goog-Upload-Protocol": "resumable",
            "X-Goog-Upload-Command": "start",
            "X-Goog-Upload-Header-Content-Length": str(size),
            "X-Goog-Upload-Header-Content-Type": mime,
            "Content-Type": "application/json",
        },
        method="POST",
    )
    _, headers = api(start, timeout=60)
    upload_url = headers.get("X-Goog-Upload-URL") or headers.get("x-goog-upload-url")
    if not upload_url:
        sys.exit("no upload URL returned by Files API")
    with open(path, "rb") as f:
        data = f.read()
    finalize = urllib.request.Request(
        upload_url,
        data=data,
        headers={"X-Goog-Upload-Command": "upload, finalize",
                 "X-Goog-Upload-Offset": "0"},
        method="POST",
    )
    info, _ = api(finalize, timeout=600)
    file = info["file"]
    while file.get("state") == "PROCESSING":
        print("...processing upload", file=sys.stderr)
        time.sleep(4)
        file, _ = api(urllib.request.Request(f"{BASE}/v1beta/{file['name']}?key={key}"),
                      timeout=60)
    if file.get("state") != "ACTIVE":
        sys.exit(f"uploaded file never became ACTIVE: {file.get('state')}")
    return file["uri"], mime


def main():
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        sys.exit("GEMINI_API_KEY not set.\n"
                 "1. Create a key: https://aistudio.google.com/apikey\n"
                 "2. echo 'export GEMINI_API_KEY=YOUR_KEY' >> ~/.zshrc\n"
                 "3. Restart the session and rerun.")
    if len(sys.argv) < 2:
        sys.exit("usage: gemini_feel.py <video-file-or-youtube-url> [custom prompt]")
    target = sys.argv[1]
    prompt = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_PROMPT
    model = os.environ.get("GEMINI_MODEL", "gemini-2.5-flash")

    if target.startswith("http") and ("youtube.com" in target or "youtu.be" in target):
        file_part = {"file_data": {"file_uri": target}}  # YouTube URLs pass directly
    else:
        uri, mime = upload_file(target, key)
        file_part = {"file_data": {"mime_type": mime, "file_uri": uri}}

    body = {"contents": [{"parts": [file_part, {"text": prompt}]}]}
    req = urllib.request.Request(
        f"{BASE}/v1beta/models/{model}:generateContent?key={key}",
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    out, _ = api(req)
    print(out["candidates"][0]["content"]["parts"][0]["text"])


if __name__ == "__main__":
    main()
