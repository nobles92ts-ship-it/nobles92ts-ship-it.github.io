# Four plugins

> A 44-second recommendation reel. Two of the four I had already taken apart and rejected, and the counterexample sat inside the maker's own benchmark table.

- Headline number: 2 of 4 already rejected
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/four-plugins/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/four-plugins/index.md
- Source (Source video): https://www.instagram.com/reel/DbBVXkoPA1l/
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A 44-second reel recommending "four free plugins that permanently fix your AI usage limits." Two of the four I had already taken apart and rejected, and the counterexample sat inside the maker's own table.**

> **[도판]** Four recommendations, three axes. Only one of them asks how much you are spending; the other three make you spend less.
>
> The four tools introduced in 44 seconds. Proxy compression, graph navigation and output shortening are all reduction tools; only the fourth measures. And two of the four I had already taken apart and rejected.

## First — this is not a recommendation, it is a lead magnet

Worth seeing the structure before the content.

It shows four tools **in passing** across 44 seconds and ends with: **"comment 'Plugin' and I'll send them to you."**

Things the video does not contain:

| Missing |
|---|
| How to install |
| How to configure |
| **How to check it actually worked** |
| **An address you could get them from** |

The last row is the point. **Withholding the address is not an oversight, it is the design.** The comments are the objective.

Knowing that, the rest reads differently. **The purpose of the video is not to inform, it is to collect comments.**

## The four

| Tool | What it does |
|---|---|
| First | Sits between the AI and your tool and **reduces what gets sent** |
| Second | Indexes your codebase into **a relationship map** |
| Third | A dashboard showing **how much you have used** |
| Fourth | Settings that make the AI **answer more briefly** |

Look at the axes and there are **three, not four.** And **only the third measures usage; the other three reduce it.** Different in kind.

## Two of them I had already rejected

**The first tool** I had opened separately and closed out. The conclusion then was **not "compression is bad" but "my workload has nothing to compress"** — grounded in two measurements of my own environment.

This video **does not touch the target problem at all.** It **shows who wrapped what.** *Does it help in my case* is never raised.

**The fourth** likewise. When I took it apart, **the headline number collapsed once recomputed using their own stated definition.**

So **two of four had answers before the video started.**

## And the counterexample sat inside the promotional material

The most valuable part of this piece.

The fourth tool sells **"shorter output means lower usage."** That sounds obviously true.

But reading the **performance comparison table the maker published alongside it** to the end, **the counterexample is in there.** Under some conditions, **making it shorter increased usage.**

**A counterexample surviving in a table made by the seller** is the most honest thing in that table. And **you only see it if you read to the end.**

→ What I took:

> **You rarely need to hunt for critical articles to find a refutation. Read the promotional material to the end and it is usually in there.**

Marketing is on the front page and limits are on the back. People read the front page.

## And one metric in that table could not even be read

To add: of the four metrics in that comparison table, **one had its bar rendered only halfway**, so the value is unreadable.

So I **neither cite nor rebut that one.** A value you cannot read is not evidence.

## My verdict

| Tool | Verdict | Grounds |
|---|---|---|
| First | **Stays closed** | Nothing to compress here. **This video adds no new evidence** |
| Fourth | **Stays rejected** | The headline number collapses on their own definition |
| Second | **Unexamined, low priority** | I already use a tool on the same axis |

## What this piece cost me

**The worth of a recommendation list is decided by what the recommender did not measure.**

This video **showed** four tools and **measured** none of them. And the unmeasured space was exactly **where I already had answers.**

**Four tools in 44 seconds is 11 seconds each.** Eleven seconds fits *this exists*; it does not fit *is this right for you*.

## The detailed record starts here

**What a recommendation list is worth is decided by what the recommender didn't measure.** A 44-second reel skims through *"four free plugins that fix your usage limits for good."* **Two of the four I had already taken apart and rejected on my own**, and more importantly, **the counterexample to "terser output means fewer tokens" was sitting inside the benchmark table the maker shipped alongside it.** One of the four metrics rendered only half a bar and couldn't be read at all.

## What the video recommends

**It is a lead magnet, not an installation guide.** Four tools skim past in 44 seconds and it ends on *"comment 'plugin' below and I'll send them to you directly."* **No install steps, no configuration, no verification, and no distribution links** — the format is built that way.

The four:

| Tool | What it does | Confirmed on screen |
|---|---|---|
| **Headroom** | A local proxy that sits between the agent and the model | `headroom wrap claude` starts a local proxy and **swaps the base-URL environment variable**, then restarts Claude Code |
| **Graphify** | Indexes the codebase as a knowledge graph | `graphify path "A" "B"` → a 3-hop path plus **"zero files opened"** |
| **CodeBurn** | Token and cost dashboard by model and by day | 7 days: $1,497.53 · 17,277 calls · 2,204 sessions · 100% cache hit |
| **Ponytail** | A single skill file that shortens output | 73k stars · works with 16 agents · MIT |

**The transcript adds one thing.** Graphify's purpose is not caching but **avoiding re-navigation** — *"so it doesn't need to reread everything every single time you send a message."* And Ponytail's claim carries a condition: *"cutting your usage by over 50% without losing any accuracy at all."* **Lossless is part of the claim.**

## What broke when I checked

> **[도판]** This table was made by the side selling the tools. That the 107% survived in it is the most honest thing about it.
>
> The benchmark table shipped by the maker. Lines of code and cost went down, but the caveman row's token count rose to 107 percent of baseline — a counterexample to the idea that terser output always means fewer tokens.

**Told to write less, it spent more.** The `caveman` row cuts lines of code to 80% but its **token count is 107%.** A style that compresses output made the total larger. The table doesn't say why, but an instruction to be terse can lengthen the prompt or trigger retries and land exactly here. **What matters is that this counterexample is in the maker's own table** — and the video never mentions it.

**And one of the four metrics is simply unreadable.** The time row's bars rendered partially. In content that puts a benchmark on screen, **a metric you cannot read is itself information.**

Everything else is self-reported. 73k stars, #1 trending, *"100% safe"* — **none of it is verifiable from inside the video.**

## Held against my own setup — two already had answers

**Headroom is one I took apart and closed out separately.** The conclusion then was not *"compression is bad"* but **"my workload has no target to compress,"** on the back of two measurements. [That piece](/en/teardowns/memory/headroom/index.md) records it. This video doesn't touch the target problem — **it only shows how someone else wrapped it.**

**Ponytail is the same.** [Rejected wholesale, one line kept](/en/teardowns/harness/ponytail/index.md). And that page found something relevant here — the repo's headline *"−54% code"* **recomputes to −35.4% under the report's own stated definition**, and there was no correctness gate to begin with.

**Headroom also touches the trust boundary.** Every prompt goes through a local proxy by **swapping the base API URL environment variable.** Fine for a personal experiment; where work code passes through, **that is the kind of change that needs a code audit first.**

**The Graphify axis already overlaps.** A code-graph navigation tool is already attached here, so **I can test whether that axis pays off without adopting anything new.**

## Verdict

| Tool | Call | Grounds |
|---|---|---|
| Headroom | **Stays closed** | No target. This video adds no new evidence |
| Ponytail | **Stays rejected** | The headline number collapses under the repo's own definition |
| Graphify | **Unreviewed · low priority** | Already running a tool on the same axis |
| CodeBurn | **Interested** | The only one of the four that measures. But I've only seen its report, not checked it |

**What survives this piece isn't a tool — it's a way of reading.** I could only tell that two of four were already rejected **because I had taken those two apart myself.** Without that, I would have installed all four inside 44 seconds.

**And the place to find a counterexample is usually not a critique — it's the promotional material itself.** This table was built by the side selling the tools, and `107%` is still sitting in it, unerased. **That one number carries more information than the 44 seconds around it.**
