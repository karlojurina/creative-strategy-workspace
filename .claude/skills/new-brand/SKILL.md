---
name: new-brand
description: Onboard a new brand and run the entire initial-research pipeline end to end - pull in everything the user has, generate market research, build the avatar doc and desire doc, and assemble the growth guide. NOT done until the growth guide is built. Use when the user wants to start working with a new brand, or types /new-brand.
---

# /new-brand

This is the big one. It takes a brand from nothing to ready-for-creative-strategy, running the whole initial-research pipeline in order, with the user in the loop at every checkpoint. You are NOT finished until the growth guide is built.

```
1. Pull in everything     2. Market research     3. Study (checkpoint)
4. Avatars -> avatar doc   5. Desires -> desire doc   6. Growth guide -> DONE
```

Read `MANIFESTO.md` and `CLAUDE.md` before you start. The rule that holds the whole way through: **the user does the thinking.** You hunt, gather, and draft. They study, confirm, and decide. Never rush them past a checkpoint.

## Phase 1 - Pull in everything they have
Do NOT interrogate them about the brand's positioning, customer, or competitors - all of that gets discovered in research. This phase is just: name it, and gather what already exists.

1. Ask one question: **what's the brand, and what's the website?** (name + URL)
2. Scaffold the folder (in plain terms, this makes a fresh copy of the blank brand template and names it):
   - Make a kebab-case slug (e.g. "Dog Friendly Co" becomes `dog-friendly`).
   - Run `cp -R brands/_TEMPLATE brands/<slug>` (never touch `_TEMPLATE`).
   - Replace `<Brand Name>` in `CONTEXT.md`, `growth-guide.md`, and `learnings/learnings.md`.
3. Prompt the user to drop in EVERYTHING they already have for this brand:
   - existing market research documents -> `research/`
   - review exports (Shopify, Amazon, wherever) -> `research/`
   - customer surveys -> `research/`
   - any other data (past ad transcripts, brand guidelines, decks) -> `research/`
   - the brand's footage and content: have them download it into `content/`, so the workspace can watch and search it later (see `SETUP.md` for the Gemini setup)
4. Write the brand name, website, and a list of what they dropped in (and what is missing) into `CONTEXT.md`.

## Phase 2 - Market research
Run the `/market-research` skill (`.claude/skills/market-research/SKILL.md`) - its full method is inside the skill, and it saves to `brands/<slug>/research/market-research.md`. When it is done, tell the user it is ready to review, and stop. Do not steamroll into the next phase.

## Phase 3 - Study (a real checkpoint)
Tell the user to actually read the research document before going further. This is not optional - the manifesto is clear that the understanding has to live in their head, not the model's. Wait for them to come back before continuing.

## Phase 4 - Avatars
Run the `/avatars` skill (`.claude/skills/avatars/SKILL.md`): identify at least 5 avatars from the research, present them for the user to confirm or adjust (their call, not yours), then run the avatar prompt and save the avatar doc to `brands/<slug>/research/avatars.md`. This feeds the growth guide.

## Phase 5 - Desires
Run the `/desires` skill (`.claude/skills/desires/SKILL.md`): identify at least 10 mass desires from the research, present them for confirmation, then run the desires prompt and save the desire doc to `brands/<slug>/research/desires.md`. This also feeds the growth guide.

## Phase 6 - Growth guide
Run the `/growth-guide` skill (`.claude/skills/growth-guide/SKILL.md`): finalize `brands/<slug>/growth-guide.md` - brand name in the title, the Avatars and Desires sections filled verbatim from the two docs - and walk the user through the status flow (`concepts -> briefing -> editing -> testing -> learnings -> done`), the date stamps, the 5-7 day testing timer, and the four verdicts (only a breakthrough counts as a winner). No concept is ever done without a verdict and a learning.

## Done - and light the first spark
When the growth guide is built, the brand is set up and initial research is complete.

Before you sign off, propose **three idea sparks** - three concrete ad angles pulled straight from the research (name the avatar and desire each one hits, one line each). These are offers, not decisions: the user picks the ones that grab them, rejects the rest, and can rewrite any of them in their own words. Whatever they choose lands in the growth guide's Idea Bank with today's date; never add one they did not choose. The point is that the wall never starts blank - but the ideas on it are theirs.

Then tell the user they are ready to start creative strategy: drop ideas into the Idea Bank just by asking ("add X to the idea bank"), write copy with `/video-copy` and `/static-copy`, and run the visual guide with `node growth-guide-app/server.js`.

## Before you finish - close the loop
If any phase was clunky, a prompt underperformed, or a checkpoint felt awkward, say so and offer to improve this skill or the prompt it used. Every run should leave the pipeline a little sharper.
