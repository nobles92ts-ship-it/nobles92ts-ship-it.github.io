# dsh-anchored-standard

> Installing it was flatly impossible — my harness has no hook that can take context away. The worse part was that I already owned the tool to measure this, and hadn't run it in 24 days.

- Headline number: 4 takeaways → 0 · 24 days unrun
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/dsh-anchored-standard/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/dsh-anchored-standard/index.md
- Repository: https://github.com/xiaobright/dsh-anchored-standard
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A bundle claiming that if you strip almost everything out of an AI's opening moment, its answers improve. I rejected it — not because it is bad but because my setup has no screw holes to mount it on. And the worse part was on my side.**

> **[도판]** This is not a thing that adds features. It is one condition that narrows the first request's surface, varied seven ways.
>
> This preset cuts the session in two. On the first request it narrows the tools to two and empties the auto-injected context; the moment a first tool call or a first reply lands in the durable session event log it promotes and opens a small resident catalogue. When compaction ends the epoch is bumped and the session falls back to a second first request. Seven modes are variations on those same two halves.

## The claim — "the first sentence sets the rest"

When you speak to an AI, things ride along invisibly with every request: the list of available tools, the rules, whatever it has been told to remember.

The claim:

> **Load too much into the first request and the AI starts its first sentence under that weight, scattered. Empty the first request alone and everything after it changes.**

So **just once**, at the start, it cuts the tool list to two and blanks the automatic context. From the second turn it puts everything back.

The idea is reasonable. **Whether it is true is the question.**

## The headline scores were refuted mostly by the author

The bundle advertises **scores of 98 and 99** on an evaluation set, against 91–92 for the control.

**In the same table, in the same document**, the default preset that does not use this bundle sits at **99 and 96.**

So **the boast is contradicted by its own table.**

There is also an independent reproduction: **85–90** across three operating systems over 11 runs. The capability difference came to **+3.3 points, with an error range of −2.6 to +9.3.**

That last line is the one that matters. **When the error range contains zero, "no difference" remains on the table.** You cannot say *3.3 points better.*

## There are no screw holes in my setup

This is the actual rejection.

This bundle is a device for **taking context away.** To use it, the program I work in has to have **a place to say "leave it out this time."**

**Mine has no such place.** Adding is possible; removing is not.

You cannot drive a screw into a wall without a hole. That comes before good or bad.

## But while I was there I counted my own

I do not know whether *more riding along is worse* is true, but I was curious **how much rides along on my side.**

| Loaded automatically, every time | Characters |
|---|---|
| 20 global rules | 24,407 |
| Memory index | 19,124 |
| Working instructions | 2,669 |
| Blurbs for 99 tools | 23,671 |
| **Total** | **69,871** |

Seventy thousand characters, **before I have said anything.**

## And then the worst fact surfaced

The most expensive part of this piece. And it is **about me**, not the target.

My configuration folder is itself **the result of copying someone else's bundle wholesale at some point.** At that time I also brought across **a measurement tool for exactly this question — how much rides along.**

**It had not run once in 24 days.**

So **I already owned the instrument and had never switched it on.** Which is why I had to count by hand this time.

## How "four things learned" became zero

I first wrote down **four things worth taking.** Checked one at a time, all four were deleted.

| What I wrote down | On checking |
|---|---|
| Make the safety default to stopping | **The failure mode named does not exist in my code.** The two real holes were **already written in my documents** |
| A corrected calculation | The 37× inflation is real, but **the tool never ran**, so **zero judgements were misled by it** |
| Build a portability checker | **A broader check already existed in mine** |
| Declare permissions per tool | **One of the two places already had it**; the other is covered by **a human approval step upstream** |

All four were **either already there or not applicable to my environment.**

## And this was the third round

To the question *should I import someone else's bundle wholesale*, **I have already given the same answer twice.** This was the third.

Three times, the same conclusion — **there is almost nothing to take.**

So I marked it **do not propose again.** More stars, more modes: **it does not change the fact that there is nowhere to install it.**

## What I did not do

Stated plainly.

**I did not measure whether my 70,000 characters actually degrade the first answer.**

Measuring requires **comparing with it removed against with it present**, and **with no way to remove it there is no control group.**

So the conclusion is not *there is no problem* but **cannot be measured.** Those are entirely different. And I do not judge my own environment on somebody's nine runs.

## The detailed record starts here

**Rejected. But the grounds were not "it isn't good" — they were "there is nowhere to mount it."** This preset bundle takes the **first model request** of a session, cuts the tool catalogue down to two, empties the auto-injected context wholesale, and thereby fixes the register the model opens its first sentence in. It sits on the same axis as [Headroom](/en/teardowns/memory/headroom/index.md) — the context budget — one instalment later. The headline 98/99 is **refuted by the author's own README**: the same table lists the official Minimal preset at 99 and 96. Independent replications landed at 85–90 across three operating systems and eleven runs, and the capability gap came out at +3.3 points with a 95% confidence interval of [−2.6, +9.3], which contains zero. And the most expensive fact in this piece was not about the target but about me — <strong>my own `~/.claude` is itself a wholesale copy of somebody else's preset bundle</strong>, and the measurement skill I picked up in that same transplant **specifically to measure this problem has not run once in 24 days.**

## What it is

**Seven preset directories that plug into a coding-agent harness called DeepSeek Harness (DSH).** Not a model, not a library — a filter that hooks into the middle of a prompt-assembly pipeline. Installation means copying a directory **wholesale** under `.agent-presets/<id>/`, so it cannot own a `node_modules`; zero third-party dependencies is not an aesthetic here, it is the consequence of that constraint.

The operating rule is one line. **Cut the session in two.** On request #1 it intercepts the `system-prompt/assemble` waterfall, filters the assembled tool array down to two — a shell and an editor — and strips out every auto-injected context source — the instruction digest, the skill catalogue, the clock, the hooks. The gate opens the moment a first tool call or a first reply lands in the session event log.

```js
if (status.promoted) {
  const keep = new Set([...bootstrapTools, ...RESIDENT_DISCOVERY_TOOLS, ...unlockedFor(...)]);
  return keepTools(assembled, keep, false);
}
```

The part worth noting is that the promotion decision is **derived from durable session events rather than process memory** — the stage survives a resume. And even after promotion it does not pour out the whole catalogue; heavy tools are unlocked only after a search tool has been used once.

| Item | Measured (2026-08-22) |
|---|---|
| Scale | 126 tracked files · 94 `.mjs` · 1,282KB |
| Commits | **all 56 inside four days** (08-14 → 08-17) · 0 tags · 0 releases |
| Stars / forks / contributors | 3,696 / 111 / 13 people |
| Tests | `node --test` **205 passing** (763ms) · self-containment check exits 0 |
| Docs | README 38.8KB + Chinese 35.6KB + handover 16.4KB |
| Licence | effectively MIT — but GitHub classifies it as `NOASSERTION` |

The seven are not seven feature sets. They are **the same two halves, varied**.

| Mode | What it changes |
|---|---|
| **preset** | The two-stage anchor itself. Everything else forks from here |
| zero-anchored · whoami | Inserts one synthetic anchor turn carrying zero tools |
| **eternal-minimal** | Removes promotion entirely. Other tools run through a shell gateway |
| wire-think-standard | `tool_choice:"none"` on the wire — visible but not callable |
| combo-anchored | Think/act split + a deliberation-depth gate + an instruction drip |
| **prefab** | Zero model calls. Replays a pre-rolled session transcript as injection |

⚠ **Count the files literally and you will read this thing at three times its real size.** Most of the `.mjs` inside the mode directories are **generated artifacts** copied from one `shared/` tree and committed. The actual shared code is 2,940 lines, and the tests, at 3,105 lines, outweigh it.

## What is well made isn't the anchor — it's the posture toward failure

The value worth reading is not the anchoring idea itself, but how the author handled the problems that came from bolting that idea onto somebody else's harness.

- **A unified injection gate — close two paths instead of enumerating sources.** Rather than listing sources in a denylist, the assembly path empties the context array whole, and the pre-step waterfall takes the message batch that step claimed as a baseline and **default-denies every addition that isn't in it** — *"so that sources which don't exist yet are covered too."*
- **The compaction epoch — admitting there is a "second first request."** Compaction rewrites the surface the model sees. So promotion state is not a boolean but a `(boundary, promoted)` pair, and only a promotion that came after the compaction-end event's sequence number counts.
- **Anchor mass — count only the slice that comes back.** By the serialization rules, only the reasoning of messages that contain a tool call returns on the next request. So the scorer computes its register metrics **only over the slice that actually returns** — *"a number measured over the whole reasoning overestimates the anchor the clone really receives."*
- **Using the deny channel as a return path for results.** `eternal-minimal` intercepts shell commands and runs the real tool, but at the pre-dispatch stage the only sanctioned channel that can substitute a result is **deny**. So even successful results come back as refusals, and the first line states in plain prose that the command ran and its output follows, so the model reads it as output rather than an error.

The one I paid for is the fifth. **The failure philosophy is deliberately split in two** — a decorative filter that fails degrades to "expose the full catalogue" and warns exactly once, while a bad configuration throws immediately at mount time and an unknown config key is refused outright. *"We don't throw because a bootstrap tool went missing — a composition drift must not brick every request in the session."* **Filters fail open, configuration fails closed** — repositories that hold that distinction consistently in code are rare.

## The headline scores were refuted mostly by the author himself

**Target's claim**: on a particular evaluation set the anchored family scored 98, 99 and 99, against a control at 91 and 92.

Those numbers collapse three ways.

- **Those three runs are not what the current code scores.** One issue compared the commit of the day against a frozen snapshot and established that those runs used a different first-request surface plus a full dump on promotion, and **the author acknowledged it with a provenance note in the README**.
- **The same README holds the decisive blow.** Lines 114–115 record the **official Minimal preset at 99 and 96**. Install no plugin at all, run stock upstream, and it is 98.7 against 97.5 — inside observation noise.
- **Both independent replications failed.** Three operating systems and eleven runs produced 85–90, and a 3×3 randomised block replication produced **+3.3 points with a 95% CI of [−2.6, +9.3]**, containing zero, with a within-preset run-to-run standard deviation of 2.98 points — three times noisier than the ~1 point the README's two runs imply.

**What held is worth recording too.** "The first-request tool schema sets the trajectory" came out stronger — in the same independent replication, the 26-tool condition produced let-me counts of 144–241 and the 2-tool condition produced we counts of 155–289, a **complete 9/9 separation with zero overlap**. But other reports deny any correlation between trajectory and score, and an arm that swapped a single instruction line back to stock **did 35% less work and scored indistinguishably**.

**From an adoption standpoint, though, the real problem was not performance but the rate of decay.** This preset is a snapshot of upstream rc.5, and upstream has shipped four releases since. rc.6 neutered the search tool in the unlock chain, and **rc.8 shipped a persistent Windows PowerShell in the official Minimal by default, voiding the "byte-identical to official Minimal" reason for existing** — and it changed the session storage format incompatibly, when every piece of state in this design derives from that store. On top of that, **0 tags, 0 releases, version pinning plus wholesale directory copying** means nobody can tell which snapshot their own copy is, and the most destructive report of all — "the session stops responding entirely" — came out of exactly this structure. Two more layers sit above it: a controlled experiment reports that the single instruction line the preset injects after promotion undoes the trajectory it worked to establish, and prefab never runs its seed at all on the "set as default mode" path.

**In fairness, the code hygiene is real.** All 205 tests pass and the self-containment check catches drift with exit 1. What collapsed is not the code — it is **the numbers that code produced and the ground that code stands on**.

> **[도판]** The trajectory split replicated. The score gain did not. Selling those two as one package is this repository's weak point.
>
> Re-checking the three headline numbers. The 98 versus 99 versus 99 result was corrected by the author himself as not being the current build, the same README lists the official Minimal at 99 and 96, and only the claim that the first-request tool schema sets the trajectory held. Yet the capability gap is plus 3.3 points with a 95 percent confidence interval running from minus 2.6 to plus 9.3, which contains zero.

## My harness has no screw holes to mount this on

**First I counted, in my own environment, the very thing the target names as the anchor-breaker.**

| Injected into every session's first request | Measured characters |
|---|---|
| 20 global rules | 24,407 |
| Auto memory index | 19,124 |
| Global instructions | 2,669 |
| Description front matter of 99 skills | 23,671 |
| **Total** | **69,871 characters** |

I cannot give a point estimate in tokens — the text mixes Korean and English and I have no access to the tokenizer — so I record it only as a range: **30k–48k tokens [estimated]**.

**Then I hit the mount point.** My configuration exposes exactly six wireable hook events, and **not one of them** corresponds to the assembly waterfall, the pre-step message batch, or the request payload that the target intercepts. The session-start hook can **only add context, never remove it.** This is not a porting-difficulty problem; the transplant does not exist as an operation.

**What came next was more deflating.** "A small resident catalogue plus discovery-gated unlocking" is something the harness I use already does natively — roughly 40 tools always exposed, some 250 lazily loaded. The condition the target reproduces with seven plugins and 2,940 lines is my default. **Benefit: zero.**

I still wrote down four takeaways on the first pass. The adversarial pass **took all four down.**

| First-pass takeaway | Call | Why |
|---|---|---|
| Make the safety guard fail-closed | **hold** | The failure mode I named does not hold given the lock-creation code. The two real holes (the matcher only catches one edit tool · releasing the lock ≠ ending the run) are already settled in writing |
| Fix the "count only the returning slice" formula | **absorbed** | The 37.6× overcount reproduced, but the tool had never run once, so **it had misled zero decisions** |
| Add a portability lint | **rejected** | A broader scan already existed inside my publishing skill. The file I meant to make canonical did not even contain that pattern |
| Pilot per-skill tool declarations | **deleted** | One of the two target sites already had a declaration, and the other is covered by a human approval gate one layer up |

**What the four share is the lesson of this piece — none of them were gaps from "the technique was missing," they were gaps from "I never ran what I already had."** I had written that I used somebody else's repository as a ruler and found four defects of my own. In fact I had **just not opened my own drawer.**

## Verdict — what this investigation actually found lay outside the target

| Item | Call | Why · what would reopen it |
|---|---|---|
| Adopt or port the presets | ⛔ **rejected** | No mount point. Reopen when a hook appears that can **remove** context at the assembly stage |
| Two-stage catalogue | **already have it** | My harness does it natively. Benefit zero |
| Individual modes (prefab · eternal-minimal · wire-think) | ⛔ **rejected** | They use the same mount point as the main body |
| The four takeaways | **zero** | See the table above |
| Re-proposing | **not allowed** | More stars or more modes will not change the fact that it cannot be installed |

**And this was the third round.** To the question "should I adopt somebody else's preset bundle wholesale," I have already given the same answer twice — the selective transplant from [ECC](/en/teardowns/harness/ecc/index.md), and, two weeks later, a precise re-analysis whose conclusion was *"there was almost nothing to take."*

**The most expensive fact this investigation surfaced was not about the target.** My own `~/.claude` is itself a wholesale file copy of somebody else's preset bundle. 55 of 98 skills, 14 rules and 10 of 12 hooks came from there; exactly two hooks are mine. And **in that same transplant I picked up a context-budget measurement skill specifically to measure this problem.**

- Installed 07-29 → today 08-22, **0 runs in 24 days**
- The slash command meant to drive it **was never created at all** (verified across all 37 commands)
- The formula **overcounts skill overhead by 37.6×** — it counts all 890,428 characters of skill documentation, when the actual standing exposure is 23,671 characters of description front matter, 2.7% of that

And I had written in the same note that *"bloated standing context is the one item I never manage to keep."*

## What I didn't do

⚠ **I did not measure whether my 69,871 standing characters actually degrade the first response.** With no hook that can remove them, **I have no way to build a control arm.** That is "not measurable," not "no problem here." I will not use the target's n=9 evidence to render a verdict on my own environment.

⚠ I also do not know whether the target is genuinely bad. What I established is only that **its numbers are unverified** and that **it cannot be installed in my environment**; whether it earns its keep for someone running DSH is outside this investigation's range.

There are three reopening conditions. ① A hook opens that can **remove** context or the tool catalogue at the assembly stage. ② A head-to-head against the official stock preset comes in at n≥20 per cell with the confidence interval's lower bound above zero. ③ An untreated holdout becomes available so I can build a control arm on my side.

**The lesson I paid for here is not a technique but an order of operations — while I opened a third stranger's preset for shrinking context, the instrument for measuring what to shrink was already in my drawer, sitting idle for 24 days with its scale off by a factor of 37.6.** Collecting tools and measuring with them are different jobs, and the first keeps pushing the second back.
