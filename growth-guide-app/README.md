# Growth Guide app

The visual layer over your growth guides. It does not own any data - it reads and writes the markdown files in `brands/<brand>/` directly, so what you see in the app and what Claude sees in the files is always the same thing.

## Run it

From the workspace root:

```
node growth-guide-app/server.js
```

It opens at http://localhost:4400 (and opens your browser on Mac). Stop it with Ctrl+C. No installs needed - it runs on the same Node that Claude Code already uses.

## What maps to what

| In the app | On disk |
|------------|---------|
| Home tab documents | `research/market-research.md`, `research/avatars.md`, `research/desires.md`, `learnings/learnings.md` (read-only render) |
| Home tab, "The library" section | the reference layer of `resources/` - the two playbooks, marketing fundamentals, and the copywriting guides (read-only render; new .md files in those folders appear automatically) |
| Idea Bank, Board, Results, card edits | `brands/<brand>/growth-guide.md` (read AND write) |
| Sticky-note positions | `brands/<brand>/.growth-guide-ui.json` (app layout only - never edit by hand, safe to delete) |
| Marking a verdict with a learning | appends the learning to `learnings/learnings.md` (once per card) |

Every change in the app saves to the file instantly. If Claude edits a file while the app is open, click back into the app window - it re-reads the files on focus.

- New brands appear automatically once `brands/<slug>/growth-guide.md` exists (that is what `/new-brand` creates).
- The file format is documented in `brands/_TEMPLATE/growth-guide.md` - keep the field lines as formatted and the app parses everything, including multi-line memos and learnings.
