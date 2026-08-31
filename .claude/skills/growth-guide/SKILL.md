---
name: growth-guide
description: Finalize a brand's growth guide - the idea bank + concept pipeline that tracks every ad from idea to learning. Runs standalone, and is also Phase 6 of /new-brand. Use when the user wants to set up the growth guide or types /growth-guide.
---

# /growth-guide

Finalize the growth guide for a brand. The scaffold already lives in `brands/<slug>/growth-guide.md` (copied from `_TEMPLATE`) - this skill wires it to the brand and walks the user through how it works.

1. Read `MANIFESTO.md`, plus the brand's `research/avatars.md` and `research/desires.md`. If either is missing, point the user to `/avatars` or `/desires` first.
2. Finalize `brands/<slug>/growth-guide.md`: brand name in the title (`# Growth Guide - <Name>`), the Avatars section listing every avatar exactly as named in the avatar doc, the Desires section listing every desire from the desire doc, Idea Bank and Concepts sections intact, card-format comment present. The app builds its dropdowns from the Avatars and Desires sections, so keep the names verbatim.
3. Walk the user through it once, briefly: the status flow (`concepts -> briefing -> editing -> testing -> learnings -> done`), date stamps on every move, the 5-7 day testing timer, the four verdicts (`loser / kpi winner / spend winner / breakthrough` - only a breakthrough counts as a winner), and the rule that no concept is done without a verdict and a learning that also lands in the learnings doc.
4. Offer to open the visual app: `node growth-guide-app/server.js` from the workspace root starts it at http://localhost:4400 - it reads and writes this exact file (plus the research and learnings docs on its Home tab), so the file and the app can never disagree.
5. Declare initial research complete: the brand is ready for creative strategy - drop ideas into the Idea Bank just by asking, write copy with `/video-copy` and `/static-copy`.

Close the loop: flag anything clunky, offer to sharpen this skill.
