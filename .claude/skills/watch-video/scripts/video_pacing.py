#!/usr/bin/env python3
"""Layer 2 of the /watch-video pipeline: objective pacing + audio energy metrics.

Usage: python3 video_pacing.py <video-file> [scene-threshold]

Outputs a compact pacing report:
- duration, cut count, cuts/min, avg shot length
- shot-length timeline in 10s buckets (where the edit speeds up / slows down)
- cut density in the first 3s vs the rest (hook pacing)
- audio loudness curve in 5s buckets + loudest/quietest moments

Scene threshold: 0.3 default. Lower (0.2) catches softer transitions,
higher (0.4) only hard cuts. Stdlib only, needs ffmpeg + ffprobe on PATH.
"""
import json
import re
import subprocess
import sys


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def get_duration(path):
    r = run(["ffprobe", "-v", "quiet", "-print_format", "json",
             "-show_format", path])
    return float(json.loads(r.stdout)["format"]["duration"])


def detect_cuts(path, threshold):
    # metadata=print logs on stderr; parse both streams to be safe
    r = run(["ffmpeg", "-i", path, "-vf",
             f"select='gt(scene,{threshold})',metadata=print",
             "-an", "-f", "null", "-"])
    cuts = []
    t = None
    for line in (r.stdout + r.stderr).splitlines():
        m = re.search(r"pts_time:([\d.]+)", line)
        if m:
            t = float(m.group(1))
        m = re.search(r"lavfi\.scene_score=([\d.]+)", line)
        if m and t is not None:
            cuts.append((t, float(m.group(1))))
            t = None
    return cuts


def loudness_curve(path):
    """EBU R128 momentary loudness, sampled every 100ms (printed on stderr)."""
    r = run(["ffmpeg", "-i", path, "-af", "ebur128=peak=none", "-f", "null", "-"])
    points = []
    for line in r.stderr.splitlines():
        m = re.search(r"t:\s*([\d.]+)\s+.*M:\s*(-?[\d.]+)", line)
        if m:
            lufs = float(m.group(2))
            if lufs > -70:  # ignore silence/initialization
                points.append((float(m.group(1)), lufs))
    return points


def bucket(values, size):
    out = {}
    for t, v in values:
        out.setdefault(int(t // size) * size, []).append(v)
    return {k: sum(v) / len(v) for k, v in sorted(out.items())}


def bar(value, lo, hi, width=30):
    if hi == lo:
        return ""
    return "#" * max(1, int((value - lo) / (hi - lo) * width))


def main():
    path = sys.argv[1]
    threshold = float(sys.argv[2]) if len(sys.argv) > 2 else 0.3
    dur = get_duration(path)
    cuts = detect_cuts(path, threshold)
    cut_times = [t for t, _ in cuts]

    print(f"=== PACING REPORT: {path} ===")
    print(f"duration: {dur:.1f}s | scene threshold: {threshold}")
    print(f"cuts detected: {len(cuts)} | cuts/min: {len(cuts) / dur * 60:.1f}")

    # shot lengths
    bounds = [0.0] + cut_times + [dur]
    shots = [(bounds[i], bounds[i + 1] - bounds[i]) for i in range(len(bounds) - 1)]
    lengths = [s for _, s in shots]
    if cuts:
        print(f"avg shot length: {sum(lengths) / len(lengths):.2f}s | "
              f"shortest: {min(lengths):.2f}s | longest: {max(lengths):.2f}s")
        first3 = len([t for t in cut_times if t <= 3.0])
        print(f"hook: {first3} cut(s) in first 3s")
        print("\n--- cuts per 10s bucket (edit rhythm) ---")
        density = bucket([(t, 1.0) for t in cut_times], 10)
        counts = {k: len([t for t in cut_times if k <= t < k + 10])
                  for k in range(0, int(dur) + 1, 10)}
        mx = max(counts.values()) or 1
        for k, n in counts.items():
            print(f"{k:>4}-{k + 10:<4}s  {n:>2} cuts  {bar(n, 0, mx)}")
        print("\n--- cut timestamps (s) ---")
        print(", ".join(f"{t:.1f}" for t in cut_times))
    else:
        print("no cuts above threshold (single continuous shot at this sensitivity)")

    # loudness
    points = loudness_curve(path)
    if points:
        buckets = bucket(points, 5)
        lo, hi = min(buckets.values()), max(buckets.values())
        print("\n--- audio energy per 5s (momentary LUFS, higher = louder) ---")
        for k, v in buckets.items():
            print(f"{k:>4}-{k + 5:<4}s  {v:>6.1f}  {bar(v, lo - 1, hi)}")
        peak_t, peak_v = max(points, key=lambda p: p[1])
        quiet_t, quiet_v = min(points, key=lambda p: p[1])
        print(f"loudest moment: {peak_t:.1f}s ({peak_v:.1f} LUFS) | "
              f"quietest: {quiet_t:.1f}s ({quiet_v:.1f} LUFS)")
    else:
        print("\nno audio track or no loudness data")


if __name__ == "__main__":
    main()
