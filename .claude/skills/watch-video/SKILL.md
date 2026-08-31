---
name: watch-video
description: Watch and analyze any video the user drops (Instagram/TikTok/YouTube link or local file) - download, frames, transcript, pacing metrics, Gemini feel pass. Use whenever the user shares a video link or file and wants it understood, analyzed, or torn down for ad learnings, or types /watch-video.
---

# /watch-video

Turn any video into something Claude has actually watched: visuals (frames), words (transcript), numbers (pacing + audio energy), and feel (Gemini). Works for Instagram reels, TikToks, YouTube, and local files. This is how you tear down a competitor's winner before imitating it, and how you study your own finished ads when pulling learnings.

Needs the video tools from `SETUP.md` (yt-dlp + ffmpeg, and the Gemini API key for the feel layer). If they are missing, offer to set them up first - it is two commands.

## Usage

```
/watch-video <url-or-file>              -> quick understand
/watch-video <url-or-file> teardown     -> full 3-layer ad analysis, saved as a doc
```

Also trigger without the slash command whenever the user drops a video link/file and asks to watch, understand, analyze, or do learnings on it.

## Two modes

| Mode | When | Layers | Output |
|------|------|--------|--------|
| **Quick** (default) | "What is this video?" / context for a task | Transcript + sampled frames | Answer in chat |
| **Teardown** | Ad analysis, competitor research, learnings | All 3 layers | Analysis doc saved to the brand |

## Process

### Step 1: Acquire

Work in a temp folder. For local files, use the path directly. For URLs:

```
yt-dlp -o "video.%(ext)s" --write-info-json --write-auto-subs --write-subs "<url>"
```

TikTok, YouTube, and public IG reels work directly. Login-gated Instagram reels fail with "empty media response" / "login required" - offer the two fixes: (a) export their own IG cookies once to `~/ig_cookies.txt` (the "Get cookies.txt LOCALLY" browser extension, logged into Instagram, Export), then add `--cookies ~/ig_cookies.txt` - all gated reels work from then on; or (b) download the video manually and drop the file in. Everything downstream runs identically on a local file.

Read the info JSON for title, uploader, duration, caption.

### Step 2: Transcript (words)

Use the subtitle file yt-dlp downloaded if one exists (clean out timestamps and duplicates). If there are no subtitles, get the transcript from Gemini:

```
python3 .claude/skills/watch-video/scripts/gemini_feel.py video.mp4 "Transcribe everything spoken in this video with timestamps. Include text overlays shown on screen, marked as [TEXT]."
```

### Step 3: Frames (visuals)

```
ffmpeg -i video.mp4 -vf "fps=1/2,scale=800:-1" -q:v 3 frames/f%03d.jpg -loglevel error
```

Read the frames as images. Sample every 2nd-4th frame first, then read densely where content changes. For a key moment (the hook, a transition), re-extract that section at higher density:

```
ffmpeg -ss <start> -t <secs> -i video.mp4 -vf "fps=4,scale=800:-1" -q:v 3 hook/h%03d.jpg
```

### Step 4: Pacing metrics (numbers) - teardown mode

```
python3 .claude/skills/watch-video/scripts/video_pacing.py video.mp4 [threshold]
```

Gives cuts/min, shot lengths, hook cut density, edit rhythm per 10s, audio energy curve, loudest/quietest moments.

**Threshold guide:** 0.3 default (full-frame hard cuts). If it reports 0 cuts but the frames clearly show scene changes, the changes are partial-frame (screen recordings, split layouts, static talking head) - rerun at 0.05-0.1 and sanity-check the timestamps against the frames.

### Step 5: Feel pass (Gemini) - teardown mode

```
python3 .claude/skills/watch-video/scripts/gemini_feel.py video.mp4
```

The default prompt covers: energy arc, pacing feel, music, sound design, delivery, grab/lose moments, verdict. Pass a custom prompt as the second argument when the question is specific. YouTube URLs can be passed directly (no download needed for this layer).

**If GEMINI_API_KEY is missing:** run the other layers, note that the feel layer was skipped, and point at the setup in `SETUP.md`. Don't block on it.

### Step 6: Synthesize

Combine all layers into one read. Frames tell you WHAT is shown, the transcript WHAT is said, the pacing numbers HOW it's built, Gemini HOW it feels. Where Gemini's read conflicts with the hard numbers, trust the numbers and say so.

**Teardown doc format** - save to `brands/<slug>/research/teardowns/<video-slug>.md` (ask which brand it belongs to if unclear):

- Source, creator, duration, captured DD-MM-YYYY
- Hook (first 3s: visual + spoken + cut density)
- Structure breakdown with timestamps
- Pacing report (paste the script output)
- Feel summary (Gemini, marked as skipped if no key)
- Full transcript
- LEARNINGS: 3-7 specific, stealable observations. "Fast hook" is useless; "3 cuts in the first 2.5s, text overlay restates the spoken hook" is a learning. If one of them sparks an ad idea, offer to drop it into the brand's Idea Bank.

### Step 7: Clean up

Delete the temp folder after findings are saved. Never leave a teardown only in chat - the doc is the deliverable.

## Quality check

- [ ] Did I actually read frames (not just the transcript)? Visual claims must come from frames.
- [ ] Do the cut timestamps make sense against what the frames show? (Wrong threshold = garbage numbers.)
- [ ] Teardown doc saved to the brand, temp files deleted?
- [ ] Learnings specific enough to act on?

Close the loop: flag anything clunky, offer to sharpen this skill.
