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

- **Scrapling (free scraper - the default)** - some of the best voice-of-customer sources block the built-in web tools (Reddit threads, many review sites). Scrapling is a free, open-source stealth scraper that gets through. Two commands, one time: `pip install "scrapling[fetchers]"` then `scrapling install` (downloads its browser - a few hundred MB). After that, Claude drives it directly whenever research hits a wall.
- **Apify (paid scraper - where Scrapling can't reach)** - X, TikTok, and Instagram comment mining (those need logged-in access). Start on the free tier; going deeper is not expensive - if the research matters, pay to win.
- **Meta Ads Manager** - pull your real ad performance data straight into the workspace.
- **Ad spy tools** (Atria and others) - deeper competitor ad research.
- Anything else you want. The workspace is yours to upgrade.

---

*Step-by-step setup instructions for each tool land here as we finalize which ones to use.*
