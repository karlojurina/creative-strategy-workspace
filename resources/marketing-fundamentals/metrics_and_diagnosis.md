# Metrics & Diagnosis - Reading the Ad Account

The numbers, what counts as good, and how the machine that spends your ads actually works. This doc covers the instruments; the verdicts and the five-scenario diagnostic (what to DO about the numbers) live in the [learnings playbook](../learnings-playbook.md).

## The structure: campaign > ad set > ads

Inside the ads manager: a **campaign** holds **ad sets**, and each ad set holds **ads**. A batch of ads (four hook variations of one ad - see [../copywriting/hooks.md](../copywriting/hooks.md)) runs as one ad set.

**ABO vs CBO:** ABO sets a budget per ad set; CBO hands ONE daily budget to the whole campaign and Meta's algorithm decides, every day, which ads get the money. No human in the loop, no favoritism - if the ad is good, Meta feeds it. The house stance: **we simply trust the machine and focus on creating better ads** - CBO.

**Creative is the new targeting.** Targeting settings go broad; the ad itself does the targeting. What the ad looks like and what it talks about tells Meta who it's for, and the algorithm finds them. Making the creative unmistakably for one person IS the media buying now.

## The metric funnel

Read them in order - each metric hands the viewer to the next one:

| Metric | Formula | Benchmark | Notes |
|--------|---------|-----------|-------|
| **Spend** | - | - | The prerequisite: no spend = no data. Spend is unpredictable - an ad can sit at $5 for five days and explode on day six. **Watch the trend, not the moment** |
| **CPM** | (spend / people reached) x 1000 | Market-dependent | US costs more than Croatia; Q4 CPMs spike everywhere |
| **Hook rate** | watched past 3s / served x 100 | **40-50% good, 60-70% crazy** | THE trap: higher hook rate does not mean a better ad - a hook can capture the WRONG audience. 20-30% hook-rate ads can still rip |
| **Hold rate** | watched 15s+ / to the end | Format-dependent | The retention read - where the script leaks (see [../copywriting/retention.md](../copywriting/retention.md)) |
| **CTR** | clicks / impressions | **~3-4% is pretty good** | The ad made them want to know more |
| **CVR** | purchases / landing page visits | **~1.8-3% average** | Business-dependent; the page's job as much as the ad's |
| **CPA** | spend / purchases | Brand's unit economics | Targets range wildly ($1.20 to $250+) - always relative to what a customer is worth |
| **ROAS** | revenue / spend | Brand's KPI target | The number the brand actually lives on |

Soft metrics (hook rate, hold rate, CTR) tell you WHERE an ad leaks; hard metrics (CPA, ROAS) tell you IF it works. Never confuse the two - winning ads with ordinary soft metrics exist (CarePod's winner had nothing-special hook rates and printed anyway, because the message hit the right audience).

## From numbers to verdicts

After the first week of testing, every ad gets one of the four verdicts (loser / kpi winner / spend winner / breakthrough) based on spend share and ROAS - the definitions, the five scenarios after launch, and the fix for each live in the [learnings playbook](../learnings-playbook.md). What to build after the verdict: the [iteration playbook](../iteration-playbook.md). The two lines to keep in your head while reading any account:

- **Meta decides what gets spent - your job is to give it something worth spending on.**
- **Watch the trend, not the moment.**
