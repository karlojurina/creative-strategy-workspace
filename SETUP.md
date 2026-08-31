# Setup: Connectors, APIs & MCPs

**You don't have to do any of this manually.** Type `start` in Claude Code and it walks you through setup step by step, does most of it for you, and verifies every tool actually works. This page is the reference behind that flow.

## First, the words

- **API** - a key that lets your workspace talk to an outside tool.
- **MCP** - a plug that connects your workspace to a live service.
- **Connector** - a pre-built plug you just switch on.

Do not overthink it. These are just ways to give your workspace more senses and more reach.

## Core (set these up to run the fundamentals)

- **Web research - nothing to set up.** Claude Code searches the web and reads pages out of the box. That covers most of what market research needs: review pages, forums, articles, competitor sites.
- **Gemini API** - lets Claude watch and understand video. This powers two things: searching the footage in a brand's `content/` folder ("do I have a clip for this hook?"), and breaking down finished ads when you do learnings. *(Step-by-step instructions land here as we finalize them.)*

## The scrapers (how research reaches the places search can't)

The best voice-of-customer lives behind walls the built-in web tools can't pass - Reddit threads, review sites that block bots, social media comments. Two tools cover all of it:

### Scrapling (free - the default)

An open-source stealth scraper. Gets through Reddit's and most review sites' anti-bot walls.

```
pip install "scrapling[fetchers]"
scrapling install
```

The second command downloads its stealth browser (a few hundred MB, one time). After that, Claude drives it directly whenever research hits a wall. One thing to know: plain HTTP mode gets blocked by Reddit - the stealth mode (`StealthyFetcher`) is the one that works, and it needs that browser download.

### Apify (social media comments - free tier to start)

For what no honest scraper reaches without logged-in access: X, TikTok, and Instagram comments.

1. Create a free account at [apify.com](https://apify.com) - the free plan includes monthly usage credit, enough for real research.
2. Copy your API token: Console → Settings → API & Integrations.
3. Store it in your shell environment as `APIFY_TOKEN` (ask Claude to do this for you - it knows where it goes on your system).

Claude then runs scrapes through Apify's actors (pre-built scrapers in their store) - for example, an Instagram profile scrape to find posts, then a comment scrape on those posts. Start on the free tier; going deeper is not expensive - if the research matters, pay to win.

**If a run fails**, the error tells you which billing gate you hit: `not-enough-usage-to-run-paid-actor` means your credit is used up; `Monthly usage hard limit exceeded` means your self-set spending cap (Console → Billing → Limits) needs raising.

## Optional upgrades (add when you are ready)

- **Meta Ads Manager** - pull your real ad performance data straight into the workspace.
- **Ad spy tools** (Atria and others) - deeper competitor ad research.
- Anything else you want. The workspace is yours to upgrade.
