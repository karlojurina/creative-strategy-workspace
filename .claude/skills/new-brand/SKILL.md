---
name: new-brand
description: Onboard a new brand and run the entire initial-research pipeline end to end - pull in everything the user has, generate market research, the user immerses in it, build the avatar doc and desire doc, and assemble the growth guide. NOT done until the growth guide is built. Use when the user wants to start working with a new brand, or types /new-brand.
---

# /new-brand

This is the big one. It takes a brand from nothing to ready-for-creative-strategy, running the whole initial-research pipeline in order, with the user in the loop at every checkpoint. You are NOT finished until the growth guide is built.

Read `MANIFESTO.md` and `CLAUDE.md` before you start. Two rules hold the whole way through:

1. **The user does the thinking.** You hunt, gather, and draft. They study, confirm, and decide. Never rush them past a checkpoint.
2. **Teach as you go** (CLAUDE.md behavior #5). Every phase opens with what is about to happen, why it matters, what it produces, and where that file lands - then a "ready?" before anything runs. A student should be able to say at any moment what is happening and why.

## The road ahead - show this first, and at every transition

Open the skill with this map (not a one-line list), then re-show it at every phase change with ✓ on finished phases and `->` on the one starting:

```
PHASE 1  Pull in everything   you name the brand, drop in what you already have
                              -> brands/<brand>/  (a fresh folder from the template)

PHASE 2  Market research      Claude mines the web, reviews, Reddit, social - every claim linked
                              -> research/market-research.md (the full doc)
                              -> research/market-research-summary.md (the 15-page read)
                              -> research/voice_of_customer.md (the customer's exact words)

PHASE 3  Immerse              YOU read it, listen to it, let it sink in - no AI here
                              -> the understanding moves into your head

PHASE 4  Avatars              who buys, as real profiles, in their own words
                              -> research/avatars.md

PHASE 5  Desires              what they already want, that the product can channel
                              -> research/desires.md

PHASE 6  Growth guide         the idea bank + the board that tracks every ad to its learning
                              -> growth-guide.md   ...and the brand is ready for creative strategy
```

Under the map, one sentence: the research takes a while (it is the deepest step), and the skill stops at every phase for them.

## The transition template

Every phase boundary uses the same shape, in the user's register:

> **What's next:** one line on what Claude is about to do.
> **Why:** one line on why this exists and what it feeds.
> **What you'll get, and where:** the file, named.
> **Ready?** - and WAIT for the answer.

## Phase 1 - Pull in everything they have

Do NOT interrogate them about the brand's positioning, customer, or competitors - all of that gets discovered in research. This phase is just: name it, and gather what already exists. Say that out loud - it is why you are not asking a hundred questions.

1. Ask one question: **what's the brand, and what's the website?** (name + URL)
2. Scaffold the folder. Explain in plain terms first: this makes a fresh copy of the blank brand template and names it - a "slug" is just the folder-friendly version of the name (e.g. "Dog Friendly Co" becomes `dog-friendly`).
   - Run `cp -R brands/_TEMPLATE brands/<slug>` (never touch `_TEMPLATE`).
   - Replace `<Brand Name>` in `CONTEXT.md`, `growth-guide.md`, and `learnings/learnings.md`.
3. Prompt the user to drop in EVERYTHING they already have for this brand, and say what each one is for:
   - existing market research documents -> `research/`
   - review exports (Shopify, Amazon, wherever) -> `research/` (the single richest source of customer language)
   - customer surveys -> `research/`
   - any other data (past ad transcripts, brand guidelines, decks) -> `research/`
   - the brand's footage and content: have them download it into `content/`, so the workspace can watch and search it later (see `SETUP.md` for the Gemini setup)
   Reading some of these takes a helper tool (a spreadsheet export needs a small Python package, for example). If one is needed: say what and why BEFORE installing it, then confirm it worked.
4. Write the brand name, website, and a list of what they dropped in (and what is missing) into `CONTEXT.md`. Show them.

## Phase 2 - Market research

Transition first (the template above): Claude is about to build the research document - the foundation of every ad for this brand - by mining the web, the reviews they dropped in, Reddit, and social media, linking every claim so they can check it. It produces the full document, a summary they can actually read in one sitting, and the phrase bank of the customer's exact words. It takes a while. Ready?

Then run the `/market-research` skill (`.claude/skills/market-research/SKILL.md`) - its full method is inside the skill. When it is done, lead with what they got and where: the three files, named, with the summary called out as the one to open first. Then stop. Do not steamroll into the next phase.

## Phase 3 - Immerse (a real checkpoint, no AI)

This phase belongs entirely to the user, and the skill has to make that feel important, not like a formality. The manifesto is clear: the understanding has to live in their head, not the model's - and this is the moment it moves there. Explain that, then hand them the ritual:

1. **Read the summary end to end** (`research/market-research-summary.md`). Not skim - read. Then open the full document and read the sections the summary made them curious about.
2. **Listen to it.** Go to notebooklm.google.com, create a new notebook, upload the full `market-research.md` (or paste it in), and generate the Audio Overview - two AI hosts discussing THEIR market for an hour-plus. Play it on a walk, before sleep, in the car. It is a different way in, and ideas show up while listening. (No workspace connection exists for this - it is a manual step, and worth it.)
3. **Write down three things** that surprised them, and one idea they got. They can tell Claude, or jot them anywhere.

Then wait. When they come back, ask what stood out - and USE it: what surprised them says a lot about which avatars and desires will matter, and it carries into Phase 4.

## Phase 4 - Avatars

Transition first: an avatar is a real profile of one kind of buyer - who they are, what they fear, what they've tried, what they want and would never say out loud - written in the buyer's own words from the research. Claude will propose the avatars it sees in the research; the user picks, renames, and cuts - their call. The doc lands at `research/avatars.md`, and the avatar names go straight into the growth guide, because every ad concept from now on is aimed at exactly one of them. Ready?

Then run the `/avatars` skill (`.claude/skills/avatars/SKILL.md`). After the user confirms the list, do not just start building - explain what happens now in two lines (full profiles for each, built from real quotes, including what their feed looks like so ads can match it), then build.

## Phase 5 - Desires

Transition first: desires are what this market already wants - you never create desire, you channel it (manifesto). Claude will pull the desires it sees in the research, in first-person customer language, and the user confirms them. The doc lands at `research/desires.md`, and the desires go into the growth guide too: every concept card names the one avatar and the one desire it is built on. Ready?

Then run the `/desires` skill (`.claude/skills/desires/SKILL.md`).

## Phase 6 - Growth guide

Transition first: the growth guide is the heartbeat of the brand - the idea bank (every raw idea, dated) plus the board that tracks each concept from idea to briefing to testing to its learning and verdict. It lives at `growth-guide.md`, and the visual app reads and writes that same file. Ready?

Then run the `/growth-guide` skill (`.claude/skills/growth-guide/SKILL.md`): finalize `brands/<slug>/growth-guide.md` - brand name in the title, the Avatars and Desires sections filled verbatim from the two docs - and walk the user through the status flow (`concepts -> briefing -> editing -> testing -> learnings -> done`), the date stamps, the 5-7 day testing timer, and the four verdicts (only a breakthrough counts as a winner). No concept is ever done without a verdict and a learning.

## Done - and light the first spark

When the growth guide is built, the brand is set up and initial research is complete. Say so, and show the map one last time with every phase checked.

Before you sign off, propose **three idea sparks** - three concrete ad angles pulled straight from the research (name the avatar and desire each one hits, one line each). These are offers, not decisions: the user picks the ones that grab them, rejects the rest, and can rewrite any of them in their own words. Whatever they choose lands in the growth guide's Idea Bank with today's date; never add one they did not choose. The point is that the wall never starts blank - but the ideas on it are theirs.

Then tell the user they are ready to start creative strategy: drop ideas into the Idea Bank just by asking ("add X to the idea bank"), write copy with `/video-copy` and `/static-copy`, and run the visual guide with `node growth-guide-app/server.js`.

## Before you finish - close the loop

If any phase was clunky, a prompt underperformed, or a checkpoint felt awkward, say so and offer to improve this skill or the prompt it used. Every run should leave the pipeline a little sharper.
