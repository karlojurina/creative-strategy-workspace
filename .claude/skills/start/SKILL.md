---
name: start
description: The onboarding flow for a fresh workspace. Interviews the new owner, personalizes CLAUDE.md around them, walks through tool setup with live verification, then hands off to /new-brand. Use when the user types "start" or /start, or clearly just opened this workspace for the first time.
---

# /start

The first thing a new owner of this workspace runs. Four phases: learn who they are, write it into the workspace, set up their tools, onboard their first brand. Be warm and use zero jargon - assume they have never touched a terminal before today.

If this workspace was already onboarded (CLAUDE.md has a filled "Who runs this workspace" section), say so and offer the phases individually: redo the interview, set up or verify tools, or jump straight to `/new-brand`.

## The opening move - set the scene

Before any questions, one short message showing exactly what this onboarding is:

```
PHASE 1  The interview     ~20 min · 12 questions · talk, don't type
PHASE 2  Write it in       the workspace learns who you are
PHASE 3  Tools, verified   ~10 min · set up + TEST your research tools
PHASE 4  Hand-off          your first brand
```

One line under it: they can stop anytime and type `start` later to pick up where they left off.

**At every phase transition, show this same visual again** - ✓ on finished phases, `->` pointing at the one starting - plus one sentence on what happens next. Never start a new phase silently.

## Phase 1 - The interview

Open with one line on why: the more Claude knows about them, the more every future session feels like working with someone who already knows them - that context lives in this workspace permanently. Recommend a speech-to-text tool (like Wisprflow) - talking through answers is much faster than typing them.

Ask ONE question at a time. WAIT for every answer. Never answer for them. React to what they say like a person, not a form.

1. What's your name, and where are you from?
2. How familiar are you with AI - ChatGPT, Claude, any of it? And is this your first time inside something like VS Code and Claude Code? **Calibrate everything from this answer onward**: a beginner gets every term explained before it is used and smaller steps; a power user gets less hand-holding and more speed. Apply it immediately, in this very conversation, so they feel the difference.
3. What's your experience with marketing and ads so far - complete beginner, run some ads, or been in it a while? (Whatever the answer, no judgment - the workspace meets you where you are.)
4. What are you here to do - make ads for brands on the Ad Bounty program, for your own brand, or for a client?
5. What platforms and tools do you use every day? (Ad platforms, design tools, comms tools, AI tools, project management, spreadsheets - anything you have open on a regular basis.)
6. What do you actually produce - ad creatives, briefs, landing pages, reports, scripts, strategies? And roughly how many of each in a typical week?
7. Walk me through your actual workflow - how do you go from "task assigned" to "task done"? Where does the work start, what tools touch it, who reviews it, where does it ship?
8. What's the repetitive stuff you do over and over? (These are the candidates for skills and automations later - capture them well.)
9. What's the hard stuff - what slows you down, what do you procrastinate on, where do you get stuck?
10. What's your zone of expertise - the specific area where you're strongest, the thing people come to you for?
11. What does winning look like for you in the next 90 days - and what's the bigger thing you're working toward this year and beyond? (Honest, not impressive.)
12. Anything else Claude should know about you or how to talk to you? (Tone, language, pet peeves, what motivates you.)

**Adapt to who they are:** if the early answers show a complete beginner with no work routine yet, don't interrogate a workflow that doesn't exist - compress questions 5-10 into what their days actually look like, what they've made before, and where they get stuck, then move on. The interview should feel like being understood, never like filling out a form.

## Phase 2 - Write it in

1. Create `about-me.md` at the workspace root with everything from the interview, organized: who they are, experience, what they're working on, the 90-day goal, how they work and learn, how to communicate with them.
2. Add a short **"## Who runs this workspace"** section near the top of `CLAUDE.md` (right after the intro): 3-5 lines - name, experience level, what they're working on, their goal, one line on how to talk to them - plus a pointer to `about-me.md` for the full picture. CLAUDE.md is always loaded, so this is what makes every future session personal.
3. Add an `about-me.md` row to the map table in CLAUDE.md (the maps stay true).
4. Show them both additions and let them correct anything. Their file, their words.

## Phase 3 - Tools, one at a time, verified

Now work through the tools interactively - never dump all the instructions at once. For each: one plain sentence on what it unlocks, ask if they want it now or later, then do as much as possible FOR them and VERIFY it actually works before moving to the next. Only Scrapling and Apify are strongly recommended before the first brand; everything else can wait.

**Scrapling (free - deep research access):**
- Run `pip install "scrapling[fetchers]"`, then `scrapling install`. Warn them before the second command: it downloads a stealth browser, a few hundred MB, takes a few minutes.
- Verify: fetch a Reddit page with `StealthyFetcher` and confirm a 200 comes back. Plain `Fetcher` gets blocked by Reddit - stealth mode is the one that matters.

**Apify (social media comments - free tier to start):**
- Have them create a free account at apify.com (the free plan includes monthly usage credit - enough for real research).
- Have them copy their API token from Console -> Settings -> API & Integrations.
- Store it in their shell environment as `APIFY_TOKEN` - do this for them (edit the right shell profile for their OS), then confirm it loads in a fresh shell.
- Verify: call `https://api.apify.com/v2/users/me` with the token and confirm their username comes back.
- If a run ever fails later, know the two billing errors: `not-enough-usage-to-run-paid-actor` means the credit is drained; `Monthly usage hard limit exceeded` means the self-set cap under Billing -> Limits needs raising.

**Gemini API (video understanding):** setup steps are being finalized - if `SETUP.md` does not have them yet, say it is coming and move on gracefully.

**Optional upgrades (Meta Ads Manager, ad spy tools):** name them in one line each, say they can come later, do not set them up now.

## Phase 4 - Hand-off

Tell them the workspace is theirs now. Point them at `MANIFESTO.md` as the one thing to actually sit down and read - it is how we make ads, and every skill in here obeys it. Then ask: ready to onboard your first brand? If yes, run `/new-brand`. If not, walk them through the map in `CLAUDE.md` in three sentences and end warmly.

Close the loop: if any step of this onboarding was confusing or broke, note it and offer to sharpen this skill so the next person never hits it.
