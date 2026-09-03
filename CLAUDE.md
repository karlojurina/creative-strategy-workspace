# Creative Strategy Workspace

This is your creative strategy workspace. It is where you research brands, come up with ad ideas, write copy and scripts, brief editors, and learn from every ad you run - all in one place, with AI doing the grunt work while you do the thinking.

You run this inside Claude Code (in VS Code). To use a skill, type its slash command (like `/new-brand`). Claude reads the instructions in that skill and executes them.

**First time here? Just type `start`.** It interviews you so this workspace knows who it belongs to, sets up your tools one by one, and takes you to your first brand.

## How we work here (read this first)

**1. The manifesto is law.** Before you make a single ad, read [MANIFESTO.md](MANIFESTO.md). It is how we make ads - the principles from Eugene Schwartz and years in the trenches. Every skill in here reads it first. When in doubt, the manifesto wins.

**2. You do the thinking. AI does the grunt work.** This workspace will never make you a marketer on its own. It hands you building blocks - research, claims, drafts - and you assemble the ad yourself. Whenever you have an idea, you have to explain it: what it is, why you want to do it, and how you would execute it. If you cannot explain it, it is not ready. Never ship a raw AI draft - take it out, assemble it, look at it with fresh eyes. The most prepared, most knowledgeable marketer wins, and that has to be you, not the AI.

**3. Close the loop every session.** At the end of a working session, look for one thing that could make this workspace or a skill better, and improve it. Every session, the workspace should get a little sharper. You just approve the change. This is the exact same feedback loop you run on your ads - here you run it on your tools. And whenever you start working on a brand, run two checks: (a) the growth guide - any concept sitting in TESTING for 5 to 7+ days gets moved to LEARNINGS (stamp the date), and you prompt the user to pull the learnings; (b) the pulse - if the brand's newest `research/pulses/` brief is 7+ days old (or missing), offer to run `/research-pulse`.

**4. The maps stay true.** The workspace is built in three layers:

```
CLAUDE.md        -> the map (always loaded, routes to the right place)
CONTEXT.md       -> the local guide (one per zone: every brand, the resources KB)
Skills           -> the workflows (loaded only when invoked)
```

Context lives at the right level: true for the whole workspace goes in this CLAUDE.md, true for one brand goes in that brand's CONTEXT.md, true for one workflow goes in the skill. When you work on a brand, Claude reads this map plus that brand's CONTEXT.md - everything else stays available but not active. And whenever the territory changes - a folder created, a doc added, scope shifted, something learned about the brand - the affected maps get updated in the same action. Claude maintains this automatically. A map that lies is worse than no map.

The pattern also scales: if you ever add a whole new area of work to this workspace, it gets its own folder, its own CONTEXT.md, and a row in the map below - same three layers, one level deeper. But be honest with yourself before you do: new zones are usually shiny-object distractions. The money is in the brands.

**5. Teach as you go.** Most people using this workspace are beginners, and a beginner who cannot tell what is happening stops trusting the tool. So Claude never just does things. It explains, asks, then does:

- **Before every step:** what is about to happen, why it matters, what it produces, and where that lands in the workspace (name the file). Then ask before proceeding - a simple "ready?" is enough. Never start a phase silently.
- **Define every term the first time it shows up** - API key, connector, MCP, slug, verdict. One plain sentence, in context, then move on.
- **Announce before installing anything.** If a step needs a helper tool (a Python package to read a spreadsheet, a scraper's browser), say what it is and why in one line BEFORE installing, and confirm it landed after. Nothing gets installed silently.
- **Format for a beginner reading a screen:** short paragraphs, a line break between ideas, a small ASCII map whenever you explain a structure or a sequence, bold on the words that matter. Never a wall of text - when a message would run long, split it and check in.
- **Lead with what the student gets,** not with what Claude did. "Your avatar doc is ready at research/avatars.md - seven profiles, each built from real quotes" beats a log of steps.

Every skill inherits this. When a skill's own instructions and this behavior disagree about how to talk to the user, this behavior wins.

## The map

| Where | What |
|-------|------|
| [MANIFESTO.md](MANIFESTO.md) | How we make ads. The source of truth. Read first. |
| `about-me.md` | Who runs this workspace - created by `/start`, read whenever personalization matters. |
| [SETUP.md](SETUP.md) | The connectors, APIs, and MCPs to set up, plus optional upgrades. |
| `brands/` | One folder per brand you work with. `/new-brand` creates them from `_TEMPLATE`. |
| `growth-guide-app/` | The visual growth guide (kanban, idea wall, results, analytics; its Home tab also renders the brand's docs plus the playbooks and copywriting guides for reading while you work). Start it with `node growth-guide-app/server.js` - it reads and writes the same markdown files, so the app and the files never disagree. |
| `resources/` | The knowledge base every skill pulls from - marketing fundamentals, Breakthrough Advertising, the copywriting guides, real winning-ad case studies, the learnings + iteration playbooks, plus a few grab-and-use prompts (comment miner, idea generators). |
| `.claude/skills/` | Your tools. See below. |

## Your skills

| Skill | What it does |
|-------|-------------|
| `/start` | First-run onboarding: interviews you, personalizes this file around you, sets up and verifies your tools, then hands you to `/new-brand`. |
| `/new-brand` | The big one. Runs the whole initial-research pipeline end to end: pull in everything -> research -> avatars -> desires -> growth guide. Done only when the growth guide is built. It runs the four skills below in order; you can also run any of them on their own. |
| `/market-research` | Generate the market research document for a brand from its website + everything in `research/`. |
| `/avatars` | Identify the brand's avatars from the research and write the avatar doc. |
| `/desires` | Identify the brand's mass desires from the research and write the desire doc. |
| `/growth-guide` | Finalize the brand's growth guide - the idea bank + concept pipeline that tracks every ad from idea to learning. |
| `/video-copy` | Write a first-draft video ad script from your research and chosen claims. |
| `/watch-video` | Claude actually watches a video (link or file): frames, transcript, pacing, feel. Quick answers, or full teardown docs saved to the brand. |
| `/research-pulse` | The weekly sweep: new Reddit threads, competitor ads, popping content, fresh reviews and comments. Raw findings filed by source, a dated brief with idea sparks. |
| `/static-copy` | Write first-draft static ad copy from your research and chosen claims. |

Every draft-writing skill reads the manifesto and the brand's research first, and hands you a draft to take out and assemble yourself. None of them ship a finished ad.

**Ideas need no skill.** Just say "add [idea] to the idea bank for [brand]" and Claude appends it to the Idea Bank section of that brand's `growth-guide.md` as `- DD-MM-YYYY · <the idea>`. The thinking gate comes at promotion: an idea only becomes a concept card with its memo (what / why / how) filled in - by you.

## Each brand's folder

```
brands/<brand>/
├── CONTEXT.md        the brand basics (from /new-brand)
├── research/
│   ├── market-research.md · avatars.md · desires.md   the synthesis docs (the canon)
│   ├── market-research-summary.md   the 15-20 page read - open this one first
│   ├── voice_of_customer.md   the phrase bank: verbatim customer language by
│   │                 category (pains, outcomes, objections, jargon...) - every
│   │                 copy skill drafts from it
│   ├── raw/          the append-forever layer: reviews, ad comments (ours vs
│   │                 competitors - different lenses), reddit, social, surveys
│   └── pulses/       the weekly /research-pulse briefs, week by week
├── content/          the brand's existing footage and assets
├── ads/              finished ads you have made (for learnings)
├── learnings/        the living learnings knowledge base + call transcripts (compounds over time)
├── growth-guide.md   your idea bank + concept tracker
├── scripts/          video ad scripts
├── copy/             static ad copy
└── briefs/           the briefs you assemble (in Milanote, then stored here)
```

## Naming

- Folders: kebab-case (`dog-friendly`, `keeps`)
- Docs: snake_case.md
