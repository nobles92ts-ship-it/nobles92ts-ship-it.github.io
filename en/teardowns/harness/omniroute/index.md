# OmniRoute

> I didn't skip this 41,856-star gateway over performance. Its tier 1 is my own subscription accounts, disguised and sent upstream.

- Headline number: 7 techniques → 0
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/omniroute/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/omniroute/index.md
- Repository: https://github.com/diegosouzapw/OmniRoute
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A gateway that bundles 291 AI services behind one counter. It is well built, there were seven things worth learning, and I rejected all seven. The reason is not performance — it is what it puts on the wire.**

> **[도판]** Walking down the tiers in order is a clean structure. The problem is what sits in the first position.
>
> The path a single request takes. Thirty-three IDEs point at one local proxy, which routes through twelve compression engines and then tries tiers one through four in order. Tier one is subscription accounts, and that is why this tool is unusable here.

## What it does

AI services each have **their own way of being called.** Using several means writing to several shapes.

This sits in between and **makes them all callable the same way.** And when one is unavailable it **falls through to the next automatically.**

41,856 likes, 210,000 installs a month. The scale is real.

| | Count |
|---|---|
| Source files | **11,091** |
| Test files | 4,240 |
| Docs | 1,460 — but **1,215 are translations into 43 languages**, so about 245 originals |

I call out the last row because **"1,460 documents" reads six times larger than it is.** Subtract the translations to see the real size.

## The genuinely good part — "a failure is not one thing"

Technically this is very well done. **Failure is split into three layers.**

| Layer | What it cuts off | The analogy |
|---|---|---|
| 1 | **The whole provider**, briefly | The shop is closed |
| 2 | **One key** only | That one clerk is on break |
| 3 | **One model** only | That one menu item is sold out |

Why that is good: *an error occurred* is not one kind of event. **The provider's servers being down** and **one of my keys hitting its quota** are entirely different, and without layers **both become "failure"** and the healthy remainder gets cut off too.

The recovery is good too. It does not reopen all at once — **it backs off 60, then 30, then 15 seconds and sends half the traffic first.** Check it survived, then send the rest.

## But all three headline numbers failed

**"89.2% average token savings"** is the flagship. The formula:

```
1 − (1−0.80) × (1−0.46) = 0.892
```

One multiplication. And it holds **only on one assumption** — that **the two compressors eat different redundancy.**

They overlap. One reduces repeated structure, the other reduces verbosity in prose, and **some of it is reduced twice.**

And **the repository contains no data measuring that independence.**

→ What I took: **multiplying two improvements together is only valid if they do not overlap.** Multiply without measuring and the number inflates.

## So why I rejected all seven

The heart of it. **Structure, not performance.**

This tool tries destinations **in order**, and **the first slot is my own paid subscription.**

That by itself is unremarkable. The problem is **how it gets there.**

A subscription is **granted for use through the vendor's own client.** Another program using it gets blocked. This tool **disguises itself as the official client** to get through.

And here is the decisive part: **the repository itself models "permanent account ban" not as an accident but as a routine occurrence.** It sells **a screen for detecting whether you have been banned** as a product feature.

Which makes a ban **not an exception but a premise.**

## And I will not take pieces either

*Then take only the good parts* is the obvious move. I did not.

The boundary was drawn **around the repository, not around fragments.**

Because taking a fragment means **reading, understanding and porting it**, and doing that requires **judging, every time, which fragment is safe.** And the price of a wrong judgement is **an account ban.**

**When the cost of judging exceeds the gain, the line belongs around the whole thing.**

So it is marked **do not propose again** — to stop a future me from reopening it on the strength of this document.

## In fairness

Running it down alone would be wrong. **This repository does dangerous things and documents the danger openly.**

There are **15 security documents**, with separate coverage of data-egress policy, error sanitising, supply chain and incident response. **Far better than hiding it.**

One thing stated clearly:

> **Documenting the danger does not mean it can be adopted. Knowing a risk and the risk going away are different events.**

## The detailed record starts here

**There were seven things worth learning from this design, and I adopted none of them.** OmniRoute bundles 291 AI providers behind a single local endpoint. 41,856 stars, 211,769 npm downloads a month. But the **first tier it routes to is my own Claude Code and Codex subscription accounts**, and the way it gets them there is **TLS fingerprint spoofing and client-name obfuscation**. The repository itself models "permanent account suspension" **not as an exception but as a normal operating state**, and ships ban detection as a product feature.

## What it actually is

**An OpenAI-compatible proxy that runs on your own machine.** `npm i -g omniroute` opens `localhost:20128/v1`, and every IDE and CLI points at that one address. Behind it a router picks a provider, and when one fails it drops to the next. Three things are on the box — **four-tier automatic fallback, twelve-engine token compression, three-layer resilience.**

The scale is real. This is not a repository that filled in a catalogue.

| Part | Measured |
|---|---|
| Source | 11,091 files total — `.ts` 7,133 · `.tsx` 1,023 |
| Tests | 4,240 files — unit 3,991 / integration 124 / e2e 42 |
| Docs | 1,460 files, but **1,215 of those are translations into 43 languages**, so ~245 originals |
| Distribution | npm global · Docker · Electron · Termux · PWA |
| Machine interfaces | MCP 104 tools / 31 scopes · A2A · REST · webhooks · 80+ CLI commands |

211,769 npm downloads a month, 288 versions in six months. **This thing genuinely runs.**

## The techniques — this part is genuinely good

**It refuses to treat failure as one thing.** The same "error" is split three ways. **L1, the circuit breaker,** cuts a whole provider (only on 408 and 5xx, then half-opens a probe after 60/30/15 seconds). **L2, cooldown,** rests a single key (5-second base with exponential backoff, honouring `Retry-After` on 429). **L3, lockout,** locks a single model. When something breaks, **which layer died is a distinct answer.**

**And it keeps a category for failures you must not retry.** From the docs: *"terminal states (banned, expired, credits exhausted) are for the operator; they are not cooldown material."* Failures that cannot recover never enter the retry queue — they go to a human.

The other five. **Changelog fragments** — every PR adds one new `changelog.d/<issue>-<slug>.md`, merged at release time. Nobody edits the same file, so **merge conflicts are structurally zero.** **Five nightly CI jobs** — mutation testing, property-based, OpenAPI schema fuzzing, resilience, LLM security. **A discipline of publishing the method next to the number** — the headline sits beside its dedup rule, its re-audit cadence, and the line *"these numbers move in both directions."* **Wrapping the tool in 45 skills.** **A preservation engine** — a layer in front of all twelve compressors that protects code, URLs and JSON byte-for-byte.

## What broke when I checked

**"89.2% average token savings" is one multiplication.** The formula is `1 − (1−0.80) × (1−0.46)`, which is only true **if the two compressors eat different redundancy.** In practice the first strips structural repetition in tool output and the second strips lexical redundancy in prose — they overlap. **The repository contains no measurement of that independence.**

**"291 providers · 25,000+ tests" doesn't survive arithmetic.** Counting the test files, the round-trip categories are e2e 42 and integration 124. A test that actually exercised all 291 providers cannot exist. Most of them are **catalogue entries, not verified paths.**

**"500+ contributors" paged out to 368.** The API cap is 500, so it wasn't truncated. And of 6,225 commits, **3,822 (61%) belong to one person**; second place has 216. Tenth on the contributor list is `Antigravity Assistant` with 45 commits, and one week peaks at 572 commits — 80 a day. **A large share of these commits is machine-written.**

> **[도판]** Verifying numbers and deciding adoption are separate axes. This repository failed on both, for unrelated reasons.
>
> Re-counting the three headline numbers. The 89.2 percent saving holds only under an unmeasured independence assumption, provider verification amounts to 166 round-trip tests, and the 500-plus contributor count paged out to 368.

## Why all of it was rejected

**What blocked this was structure, not performance.** Four things stacked up.

- **Routing around subscriptions is tier 1.** A zero-width joiner (U+200D) is inserted after the first letter of each client name. The stated purpose in the docs is *"so upstream filters cannot grep it."* Another module imitates a Firefox TLS fingerprint exactly; a third reconstructs requests to be *"indistinguishable from official CLI traffic."* **The same document opens by saying it is "not for ToS violation"** — the disclaimer and the code disagree.
- **Bans are treated as a constant.** There is a feature that scans upstream responses for `suspended` and `deactivated` and drops that connection to a permanent banned state, with a settings card in the dashboard. **Ban detection as a product feature means bans are not exceptional.**
- **It installs a root CA into the OS trust store.** Around 60 files of local HTTPS decryption. It ships disabled and the repo warns about it, but **that is a security-approval question, not a personal call.**
- **Both safety nets fail quietly.** PII masking is *"fail-open; exceptions never block traffic"* — if the masker throws, the raw text goes out. The audit log *"swallows failures silently."* **A log whose gaps are invisible cannot be used as evidence.**

**And I rejected the seven techniques along with the tool.** That is the judgement this page paid for. Three-layer failure isolation and the terminal-state split both fit my overnight QA loop exactly — but **harvesting good pieces is itself what keeps a repository open in front of you.** To port a piece you keep referring to the original, and referring to it slides into "surely this much is fine on my own machine." **The boundary belonged at the repository, not at the piece.**

## Verdict

| Item | Call |
|---|---|
| Adopt the tool | **Blocked.** Not worth revisiting |
| Harvest the 7 techniques | **All rejected.** Not even piecemeal |
| Re-propose | **No.** This document is not grounds for another attempt |
| Reopen when | Only if I explicitly pull this repository back out |

**In fairness, this repository does dangerous things and documents the danger rather than hiding it.** Fifteen security documents — egress policy, error sanitisation, supply chain, incident response, each its own file. That is better than the alternative. But **disclosing a risk is not the same as removing one.**

One last note on health. 61% of commits from one person, one npm maintainer — **bus factor of one.** 288 versions in six months is 1.5 releases every two days, which makes regression risk structural. 41,856 stars do not cover either of those.
