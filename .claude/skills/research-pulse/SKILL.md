---
name: research-pulse
description: The weekly research sweep for a brand - new Reddit threads, competitor ads, popping social content, fresh reviews and ad comments. Appends everything to research/raw/ by source and writes a dated pulse brief with idea sparks. Use when the user wants a research pulse or weekly research, or when a brand's newest pulse is 7+ days old.
---

# /research-pulse

Initial research is a snapshot; the market keeps moving. The pulse keeps the workspace on top of the niche - new threads, new ads, new complaints, new trends - week after week, without redoing the research. Every pulse compounds: raw material lands in `research/raw/`, the brief lands in `research/pulses/`, and the good sparks land on the Idea Bank wall.

## Workflow

1. **Which brand?** Ask if not obvious (offer "all brands" if several exist). Read the brand's `CONTEXT.md`, `research/market-research.md` (know the niche, the avatars, the competitors by name), `research/raw/README.md` (the source lenses), and the NEWEST brief in `research/pulses/` - never re-report what the last pulse already covered.

2. **The sweep.** Use the tools from `SETUP.md` - Scrapling for Reddit and review sites, Apify for social comments and the Meta Ad Library, built-in search for everything else. Cover, since the last pulse:
   - **Reddit & forums** - new threads in the niche's subreddits: fresh pains, failed solutions, product mentions, shifts in how people talk.
   - **Competitor ads** - what launched, and what has been RUNNING LONGEST since last check (long-running = working; a long-runner is teardown material for `/watch-video`).
   - **Social** - posts and comments popping in the niche: formats, angles, and trends the market is rewarding right now.
   - **Reviews** - fresh reviews, ours AND competitors', read with different eyes:
     - *ours* → emotional responses that could become a headline or an angle
     - *competitors'* → what people dislike, and how we position against it
   - **Ad comments** - same two lenses: our ads' comments for reactions, objections, and reusable lines; competitor ads' comments for the pushback and excitement that reveal gaps.

3. **File the raw.** Append findings to the matching `research/raw/<source>/` folder as `DD-MM-YYYY_<topic>.md` files - quotes verbatim, a link on everything. Raw is never rewritten, only added to. Standout verbatims also get promoted to `research/voice_of_customer.md` in their category (and a line already in the bank that shows up again gets its recurrence bumped - (x2), (x3)...); the phrase bank stays alive or it dies.

4. **Write the brief** to `research/pulses/pulse_DD-MM-YYYY.md`:
   - **New this week** - what the sweep found, in bullets, with sources.
   - **What actually matters** - the 2-3 signals worth acting on, and why.
   - **Idea sparks** - 2-3 concrete ad angles born from this week's findings, each naming the avatar and desire it hits. Offer them for the Idea Bank - the user picks, never auto-add.
   - **Synthesis check** - does anything this week contradict or outgrow `market-research.md`, `avatars.md`, or `desires.md`? If yes, say exactly what and offer the update. If no, say so in one line.

5. **Scope discipline.** A pulse is a sweep, not a re-research - aim for focused, high-signal, done in one sitting. If the sweep uncovers something big (a new competitor, a market shift), the pulse FLAGS it and recommends the deeper dig; it does not become the dig.

## The on-open rule

Whenever work starts on a brand whose newest `pulses/` file is 7+ days old (or that has none), mention it and offer to run the pulse. Same mechanic as the testing-timer check - the workspace keeps its own calendar.

Close the loop: flag anything clunky, offer to sharpen this skill.
