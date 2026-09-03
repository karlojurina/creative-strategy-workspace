---
name: start
description: The onboarding flow for a fresh workspace. Interviews the new owner, personalizes CLAUDE.md around them, walks through tool setup with live verification, then hands off to /new-brand. Use when the user types "start" or /start, or clearly just opened this workspace for the first time.
---

# /start

The first thing a new owner of this workspace runs. Four phases: learn who they are, write it into the workspace, set up their tools, onboard their first brand. Be warm and use zero jargon - assume they have never touched a terminal before today.

**This onboarding teaches as it goes** (CLAUDE.md behavior #5): every phase opens with what is about to happen and why, every term gets defined the first time it appears, nothing runs or installs without a heads-up, and every message is formatted for someone reading a screen for the first time - short paragraphs, line breaks, a small map when there is structure to show. If a message is getting long, split it and check in.

If this workspace was already onboarded (CLAUDE.md has a filled "Who runs this workspace" section), say so and offer the phases individually: redo the interview, set up or verify tools, or jump straight to `/new-brand`.

## The opening move - set the scene

Before any questions, one short message showing exactly what this onboarding is:

```
PHASE 1  The interview     ~20 min · 11 questions · you talk, Claude listens
PHASE 2  Write it in       Claude writes what it learned into the workspace
PHASE 3  Tools, verified   ~10 min · give the workspace its senses, test each one
PHASE 4  Hand-off          the tour, then your first brand
```

Two lines under it: they can stop anytime and type `start` later to pick up where they left off - and one honest heads-up that along the way Claude may need to install a small helper tool or two (it will always say what and why first, and ask).

**At every phase transition, show this same visual again** - ✓ on finished phases, `->` pointing at the one starting - plus a short paragraph on what happens next and why. Never start a new phase silently.

## Phase 1 - The interview

Open with one line on why: the more Claude knows about them, the more every future session feels like working with someone who already knows them - that context lives in this workspace permanently. Recommend a speech-to-text tool (like Wisprflow) - talking through answers is much faster than typing them.

Ask ONE question at a time. WAIT for every answer. Never answer for them. React to what they say like a person, not a form.

1. What's your name, and where are you from?
2. How familiar are you with AI - ChatGPT, Claude, any of it? And is this your first time inside something like VS Code and Claude Code? **Calibrate everything from this answer onward**: a beginner gets every term explained before it is used and smaller steps; a power user gets less hand-holding and more speed. Apply it immediately, in this very conversation, so they feel the difference.
3. What's your experience with marketing and ads so far - complete beginner, run some ads, or been in it a while? (Whatever the answer, no judgment - the workspace meets you where you are.)
4. What are you here to do - make ads for brands on the Ad Bounty program, for your own brand, or for a client?
5. What platforms and tools do you use every day? (Ad platforms, design tools, comms tools, AI tools, project management, spreadsheets - anything you have open on a regular basis.)
6. What do you actually produce - ad creatives, briefs, landing pages, reports, scripts, strategies? And roughly how many of each in a typical week?
7. What's the repetitive stuff you do over and over? (These are the candidates for skills and automations later - capture them well.)
8. What's the hard stuff - what slows you down, what do you procrastinate on, where do you get stuck?
9. What's your zone of expertise - the specific area where you're strongest, the thing people come to you for?
10. What does winning look like for you in the next 90 days - and what's the bigger thing you're working toward this year and beyond? (Honest, not impressive.)
11. Anything else Claude should know about you or how to talk to you? (Tone, language, pet peeves, what motivates you.)

**Adapt to who they are:** if the early answers show a complete beginner with no work routine yet, don't interrogate work habits that don't exist - compress questions 5-9 into what their days actually look like, what they've made before, and where they get stuck, then move on. The interview should feel like being understood, never like filling out a form.

## Phase 2 - Write it in

This phase is a teaching moment as much as a step. Open it with the point, in plain words, before writing anything:

> You're done typing. From here on, this is how the workspace works: you talk, Claude does the work, and the result lands as a file on your machine. Right now Claude is going to write everything it just learned about you into a file called `about-me.md`, and add a short section about you to `CLAUDE.md` - the one file Claude reads at the start of every session. That's what makes every future session personal: the workspace remembers you, because it's written down.

Then, with their OK:

1. Create `about-me.md` at the workspace root with everything from the interview, organized: who they are, experience, what they're working on, the 90-day goal, how they work and learn, how to communicate with them.
2. Add a short **"## Who runs this workspace"** section near the top of `CLAUDE.md` (right after the intro): 3-5 lines - name, experience level, what they're working on, their goal, one line on how to talk to them - plus a pointer to `about-me.md` for the full picture.
3. Add an `about-me.md` row to the map table in CLAUDE.md (the maps stay true).
4. Show them both additions, name the two files and where they live, and let them correct anything. Their file, their words. Close the phase by connecting it forward: every skill from here on works the same way - it explains, it does the work, and the output is a file they can open.

## Phase 3 - Tools, one at a time, verified

**Do not start this phase silently, and do not start it with a command.** Open with a brief that makes a complete beginner comfortable with what is about to happen - roughly this shape, in their register:

> Next, we give the workspace its senses. Out of the box Claude can read, write, and search the web. The tools below let it reach places plain web search can't, and let it watch videos. Three words first:
>
> - **API key** - a password that lets your workspace use an outside service on your behalf.
> - **Connector** - a pre-built plug you switch on once (like connecting Google Drive).
> - **MCP** - a plug that gives Claude a new ability inside this workspace. You'll see the word; you never have to touch one directly.
>
> Here's what we're setting up and what each one gives you:
>
> ```
> Scrapling         free       reads sites that block bots: Reddit at depth, review sites
> Apify             free tier  reads Instagram, TikTok, and X comments - real customer talk
> Google Workspace  free       Claude reads your Docs and Sheets, writes research as a Doc
> Video tools       free-ish   yt-dlp + ffmpeg + a Gemini key = Claude's EYES:
>                              it can actually watch an ad and tell you what it saw
> ```
>
> For each one I'll say what it is, ask if you want it now, do the work, and then TEST it in front of you so you know it works. If something needs installing, I'll tell you before I do it. Ready?

Then work through the tools interactively - never dump all the instructions at once. For each: one plain sentence on what it unlocks, ask if they want it now or later, **check whether it is already installed before installing anything**, announce any install before running it (what + why, one line), do as much as possible FOR them, and VERIFY it actually works before moving to the next. Only Scrapling and Apify are strongly recommended before the first brand; everything else can wait.

**Scrapling (free - deep research access):**
- Check first: `python3 -c "import scrapling"` or `which scrapling`. If either works, say so, skip the install, and go straight to the test.
- On a Mac, plain `pip install` fails with an "externally-managed-environment" error - Mac's Python refuses to install tools globally. The fix is a private folder just for this workspace's tools. Explain that in one line, then run:
  ```
  python3 -m venv ~/.cs-tools
  ~/.cs-tools/bin/pip install "scrapling[fetchers]"
  ~/.cs-tools/bin/scrapling install
  ```
  (On Windows, plain `pip install "scrapling[fetchers]"` then `scrapling install` is fine.) Warn them before the last command: it downloads a stealth browser, a few hundred MB, takes a few minutes.
- Verify: fetch a Reddit page with `StealthyFetcher` (using `~/.cs-tools/bin/python` when installed that way) and confirm a 200 comes back. Plain `Fetcher` gets blocked by Reddit - stealth mode is the one that matters. Tell them what the test just proved.

**Apify (social media comments - free tier to start):**
- Have them create a free account at apify.com (the free plan includes monthly usage credit - enough for real research).
- Have them copy their API token from Console -> Settings -> API & Integrations.
- Store it in their shell environment as `APIFY_TOKEN` - explain what "shell environment" means (a place on their machine where keys live so tools can find them), then do it for them (edit the right shell profile for their OS), and confirm it loads in a fresh shell.
- Verify: call `https://api.apify.com/v2/users/me` with the token and confirm their username comes back.
- If a run ever fails later, know the two billing errors: `not-enough-usage-to-run-paid-actor` means the credit is drained; `Monthly usage hard limit exceeded` means the self-set cap under Billing -> Limits needs raising.

**Google Workspace (Docs & Sheets):** explain what it unlocks (share research as Docs, read briefs people send, pull numbers from Sheets), then walk them through connecting it: claude.ai → Settings → Connectors → Google Drive, authorize, done - it works inside Claude Code automatically. Verify: list their recent Drive files and name one back to them.

**The video tools (yt-dlp + ffmpeg + Gemini) - powers `/watch-video`:** explain what it unlocks in the plainest terms: this is how Claude gets eyes. yt-dlp downloads the video, ffmpeg cuts it into frames, and the Gemini key lets a model that can see and hear watch the whole thing - so Claude can tear down a competitor's winning ad or study their own ads for learnings. Check what is already installed, then install what is missing (`brew install yt-dlp ffmpeg` on Mac, winget equivalents on Windows - announce first), have them grab a free Gemini API key at aistudio.google.com/apikey, store it as `GEMINI_API_KEY` in their shell environment. Verify: `yt-dlp --version` and `ffmpeg -version` both answer, and a tiny Gemini API call returns OK. If they skip the key, `/watch-video` still works minus the feel layer - say so and move on.

**Optional upgrades (Meta Ads Manager, ad spy tools):** name them in one line each, say they can come later, do not set them up now.

Close the phase with a two-line recap of what the workspace can now do that it couldn't an hour ago.

## Phase 4 - Hand-off: the tour, then the first brand

Tell them the workspace is theirs now, then give the tour. **The tour is not a paragraph.** It is 2-3 short messages, each with a check-in, built for someone who has never seen a workspace like this:

**Message 1 - the shape of the place.** A folder map, then one line per item:

```
your-workspace/
├── CLAUDE.md        the map - Claude reads it at the start of EVERY session
├── MANIFESTO.md     how we make ads - the one file to actually sit and read
├── SETUP.md         the tools you just set up, as a reference
├── about-me.md      you
├── brands/          one folder per brand - all your real work lives here
├── resources/       the knowledge base Claude reads from (playbooks, guides)
└── growth-guide-app/  the visual board over your brands
```

**Message 2 - how work actually happens.** Explain the loop in their words: everything happens inside a brand folder; `/new-brand` builds one from scratch (research, avatars, desires, the growth guide); the growth guide is the idea bank plus the board that tracks every ad from idea to learning; the app (`node growth-guide-app/server.js`) is the same files as a visual board. Then the skills, one line each with what it needs and why:

```
/new-brand        builds a brand from nothing - research, avatars, desires, growth guide
/market-research  the deep research doc (uses Scrapling + Apify to reach real customer talk)
/avatars          who buys, as real profiles       /desires   what they want, in their words
/growth-guide     the idea bank + pipeline
/video-copy       a first-draft video script       /static-copy   first-draft static copy
/watch-video      Claude watches a video (needs the Gemini key - that's its eyes)
/research-pulse   the weekly sweep for what's new in the niche
```

And the two rules that matter most: ideas need no skill (say "add X to the idea bank for Y" and it's filed), and every draft a skill writes is a starting point THEY assemble - never a finished ad.

**Message 3 - what happens next.** Before running `/new-brand`, explain what it will do in three lines (gather what they have -> research -> they study it -> avatars -> desires -> growth guide), how long the research takes, and that it stops at every checkpoint for them. Then ask: ready to onboard your first brand? If yes, run `/new-brand`. If not, end warmly with the one thing to do next (read the manifesto) and how to come back (`/new-brand` whenever).

Close the loop: if any step of this onboarding was confusing or broke, note it and offer to sharpen this skill so the next person never hits it.
