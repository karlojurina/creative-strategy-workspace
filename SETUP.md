# Setup: Connectors, APIs & MCPs

Most of this workspace runs on its own. A couple of extra tools make it far more powerful. This page explains what they are and which ones to set up. You set these up once and forget about them.

## First, the words

- **API** - a key that lets your workspace talk to an outside tool.
- **MCP** - a plug that connects your workspace to a live service.
- **Connector** - a pre-built plug you just switch on.

Do not overthink it. These are just ways to give your workspace more senses and more reach.

## Core (set these up to run the fundamentals)

- **Web research - nothing to set up.** Claude Code searches the web and reads pages out of the box. That covers most of what market research needs: review pages, Reddit threads, forums, articles, competitor sites.
- **Gemini API** - lets Claude watch and understand video. This powers two things: searching the footage in a brand's `content/` folder ("do I have a clip for this hook?"), and breaking down finished ads when you do learnings.

## Optional upgrades (add when you are ready)

Keep it simple to start. When you want more, you can bolt on:

- **agent-reach (free scraper - the default)** - the built-in web search cannot read X, Reddit threads at depth, or YouTube comments. agent-reach is a free open-source CLI that can (`pip install agent-reach`, then `agent-reach install`; reading X needs a one-time cookie export from your own logged-in browser). Zero API fees. When research needs a platform, this is the first tool Claude reaches for.
- **Apify (paid scraper - where agent-reach can't reach)** - TikTok and Instagram comment mining at real depth, heavy review exports. Has a free tier to start, and going deeper is not expensive - if the research matters, pay to win.
- **Meta Ads Manager** - pull your real ad performance data straight into the workspace.
- **Ad spy tools** (Atria and others) - deeper competitor ad research.
- Anything else you want. The workspace is yours to upgrade.

---

*Step-by-step setup instructions for each tool land here as we finalize which ones to use.*
