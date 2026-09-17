# Headroom

> It started as an adoption review. Measuring my own environment, the thing this tool would shrink didn't exist.

- Headline number: verdict reversed twice
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/headroom/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/headroom/index.md
- Repository: https://github.com/headroomlabs-ai/headroom
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A tool that shrinks what you send an AI so the bill goes down. I opened it as an adoption review, measured my own environment, and found there was nothing for it to shrink. Getting there overturned my own verdict twice.**

> **[도판]** Four ways to attach it: library, proxy, agent wrapper, MCP server. Python and Rust, Apache-2.0, local-first.
>
> A layer that sits between the agent and the LLM provider. It routes content to different compressors by type, and passes source code and retrieved documents through uncompressed. Originals stay local so the model can retrieve them again.

## What problem it claims to solve

Every time you give an AI a job, **you pay by the character you send.** And a lot of what gets sent is filler — log dumps, search results, file contents.

This tool **sits in between, just before the send, summarises the bulky part and forwards the smaller version.** It advertises **60–95% reduction.**

## But ask what that 60–95% measured

Here is why you cannot take a headline number at face value.

| What you are sending | Actual reduction |
|---|---|
| Machine-generated tabular data | **60–95%** ← the headline |
| Programming work | **15–20%** |
| **Source code itself** | **0%** — it is not touched at all |

The last row matters. **Code is passed through by design**, because shrinking it and breaking it is unacceptable. Most of my work is code, which leaves the tool with almost nothing to do.

Worth adding: **the official limitations document is unusually honest.** It is a far better source than the marketing copy.

## Someone measured it for real and the bill went up 7×

There is a write-up where someone attached and detached it on live traffic **with the invoices included.** The only variable was whether the tool was in the path.

| | Cost |
|---|---|
| Direct | **$0.46** |
| Through the tool | **$3.19 (6.9×)** |

**Installed to save money, it cost seven times as much.**

The cause was not *compression failed.* Something else broke. These AI services offer **a discount for sending the same content again**, and the tool in the middle **altered the content slightly every time**, so **the discount evaporated entirely.**

→ What I took: **a device that saves in one place and breaks another is a net loss.** And that loss is **invisible until you look at the invoice.**

## And then my own analysis broke

The most valuable part of this piece.

Re-reading my first pass, **not one thing in it was something I had measured.** It was all **read off the vendor's documents and someone else's report.**

So I was writing **a critique of claims whose evidence could not be reproduced, built on top of someone else's unreproduced claims.**

I was diagnosing a disease I had myself.

## So I measured, and that ended the investigation

In the third pass I measured my own environment.

| Measured | Result |
|---|---|
| **Repeat-content discount rate** | **92.5–96.3%** |
| Do large payloads flow through | **Barely any** |

The first row settled it. **I was already receiving 92–96% off.** The tool's main benefit exists where you are not getting that discount, and **for me there was never a slot for it.**

And there were no large payloads either. **No point installing a shrinker when there is nothing to shrink.**

## Verdict — zero tools, zero techniques, one rule

What I took is **one line.**

> **Ask what a headline number measured before anything else. And do not decide on adoption before measuring your own environment.**

Passes one and two were built entirely on someone else's numbers. **One number of my own ended the investigation.**

## The detailed record starts here

**No tool came in, no technique came in, and what stayed is one convention.** The headline "60–95% compression" is measured on JSON arrays; coding work sits at 15–20%, and **source code isn't a compression target at all** — it's passed through by design. Then, measuring my own environment, **cache reuse was already at 92.5–96.3%**, leaving no room for this tool's main benefit, and **there was no large payload anywhere on the LLM path to compress.** This investigation only ended after the verdict reversed twice.



## What the tool does

**A layer that sits between the agent and the LLM and routes outgoing context to different compressors by content type.** Tool output, logs, retrieval results, files.

The smartest thing in the design is that **it's reversible.** It compresses but keeps the original cached locally, and if the model decides it needs the original it pulls it back through a retrieval tool. That's what makes lossiness survivable.

There are four ways to attach it, and they differ sharply.

| Mode | Character |
|---|---|
| Library | Inserted directly into your code. Maximum control |
| **Proxy** | Zero code changes. But **all traffic passes through it → a single point of failure** |
| Agent wrapper | Starts the proxy and injects the config in one command |
| MCP server | Called only when needed. **The safest place to start** |

63,331 stars against 4,807 forks, six months old. **A 13-to-1 fork ratio** means people are actually cloning and using it, not just watching. That said, 592 open issues with only 115 labelled means **triage isn't keeping up with intake.**

## The gap between the headline and my actual work

**The official limitations document is unexpectedly honest** — a far more reliable source than the README.

> **[도판]** The same tool ranges from 100% to 0% depending on content type. Which row you're on is the entire adoption decision.
>
> Compression by content type. Arrays of JSON objects run 86 to 100 percent, structured logs 82 to 95, long agent conversations 56 to 81, prose 43 to 46, while source code and retrieved documents are passed through untouched and short conversations median 4.8 percent.

**Passing code through isn't a bug, it's the intent.** There is a code compressor, but three safety layers keep it from firing in practice — short spans are skipped silently, **the code in recent messages is never touched**, and if the last user message contains words like "analyse," "review," "fix" or "debug" it **protects the code in the entire conversation.**

Which means **a "read this code and fix it" session compresses almost nothing.** The docs say so themselves. It's the right default — and it's exactly where **the gap between the headline number and real coding work opens up.**

## What broke — compression was 0% and the bill went up 7×

A third party ran a controlled A/B on real traffic and attached the billing receipt. The only variable was whether the proxy was in the path.

| | uncached input per call | total cost |
|---|---:|---:|
| Direct | ~2 | $0.46 |
| **Through the proxy** | **~3,000** | **$3.19 (6.9×)** |

**And in the same report, the savings rate was 0.00% on all seven runs.** Compression never fired at all, and the bill was still 7×. So **the cause isn't over-compression, it's plumbing.**

The mechanism: **a prompt cache is only reused when the leading bytes are byte-identical.** Change that prefix every turn and instead of reading the cache you write it again each time — and **writing costs more than reading, so the "saving" becomes a surcharge.**

There's a worse detail. **The proxy's own logs were reporting cache hits as true.** The bill and the dashboard were pointing in opposite directions.

⚠ **Even so, "confirmed loss" is wrong.** That measurement came from one version, a cache defect was closed afterwards, and **nobody has re-measured the current one.** The accurate state is **"neither benefit nor loss has been measured"** — and blurring that distinction isn't allowed.

**There's a finding in the opposite direction too.** Reading the compression engine's source, **there is no randomness in it at all** — same input, same output. The unseeded randomness that caused trouble is **in the benchmark harness, not the engine.** Fail to separate those two and it reads as "the engine can't be trusted either."

## And then my own first pass broke

This is the most valuable part of the investigation. **The first pass measured nothing.** It read the repository's own documents and a third-party issue report and relayed them. **I was criticising claims with no reproduction while standing on claims with no reproduction.**

- **I named the wrong mechanism.** "Re-serialisation breaks the cache" was my inference — and that defect had been **closed 18 days before the reporter's version.** I attached a plausible mechanism without verifying it, which is **the same class of mistake I was accusing the repository of**
- **I presented "2–7×" as the current state.** One version, one report, and I put the magnitude in the conclusion
- **"Two people confirmed it" was a confirmation of different symptoms.** I made the evidence look thicker than it was
- **I used issue counts as a scare.** Strip duplicates, hearsay and test reports and two families actually applied
- ⚠**I applied scepticism to one side only.** I discounted the vendor's flattering table for having no reproduction, then **quoted the same vendor's unflattering figure at face value.** Same source; both deserve the same doubt

The last one stung most. **The moment you pick which side to doubt, you've already picked the conclusion.**

## Measurement ended the investigation

Passes one and two were entirely other people's numbers. On the third I measured my own environment, and **the reason to evaluate this tool disappeared.**

**The cache was already at ceiling.** Session logs record cache reads, writes and uncached input per call — **the receipts from past runs were already on disk; nothing had to be re-run.**

| Session | Calls | uncached in / call | Reuse |
|---|---:|---:|---:|
| Main | 116 | **1.8** | 92.5% |
| Large (119 MB) | 5,388 | 300.7 | 95.9% |
| Three subagents | 98–121 | **2.0** | 96.0–96.3% |

The controlled experiment above cited **~2 tokens per call as its "normal" baseline. Mine is also ~2.** There is nothing for cache alignment to gain, and the item I'd written down as "first priority, biggest win" **was already satisfied.**

**And there was no target to compress.** Large logs and data files exist — but **code condenses all of them before they go up.** There is no point on the LLM path where a large payload enters.

## Verdict — 0 tools, 0 techniques, 1 convention

Neither adoption nor technique harvest. **One convention was adopted.**

> **Don't invent values you can't measure.** Attach a confidence interval and an `[estimated]` label to estimates, and to actually measure, **hold back 10% as an untouched control.**

That this convention came from *this* repository is the irony. It **ships a design for reporting counterfactual savings honestly, confidence intervals and all** — while its own headline table has no reproduction and its dashboard pointed the opposite way from the bill. **Having a measurement design and applying it to your own banner are two different things** — and the first draft of this analysis fell into exactly the same trap.

**The resume condition is on the record.** When a point appears where a large payload goes into an LLM whole, or when someone re-measures the current version. **A rejection with no condition makes you repeat the same investigation six months later.**
