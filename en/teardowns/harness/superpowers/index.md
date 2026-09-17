# obra/superpowers

> I didn't adopt the framework. But the real output of this teardown wasn't a takeaway — it was watching two of my own conclusions collapse under the method the project itself prescribes.

- Headline number: 3 takeaways → 1
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/superpowers/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/superpowers/index.md
- Repository: https://github.com/obra/superpowers
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A development methodology plus a library of tools for AI coding. 272,000 likes in ten months. I did not adopt the framework — and the reason this piece is worth keeping is what came next: applying the project's own prescribed method to the project itself collapsed two of my three takeaways.**

> **[도판]** Counting the fourteen skills tells you nothing about this thing. The wiring that makes them fire is the product.
>
> The real body of this project is not the skill documents but the three layers of wiring that make skills fire on their own. A session-start hook injects a bootstrap every session, one extension-less file acts as both batch script and shell script, and the injected text declares that the agent has no choice. What that wiring turns on is a flow that interrogates the design, splits it into tasks, and spawns a fresh agent per task.

## What it does

Say *let's build this* and it **stops you jumping straight to code.** Instead:

1. **Interrogate** you until what is being built is settled
2. Break it into a plan
3. **Spawn a fresh AI per task** to build and review

And this **fires on its own.** You do not have to say *now do that stage.* **That wiring is what this thing actually is** — counting fourteen tools does not show it.

## The most instructive part — "judge without stopping"

The hardest problem in running an AI unattended: **what to do when something ambiguous comes up.**

| The common answers | The problem |
|---|---|
| **Stop and ask** | You are away, so it **sits still all night** |
| **Decide and carry on** | Later, **nobody knows why it did that** |

This repository's answer:

> **Judge and keep going. But record what was decided, why, and what it costs if that judgement is wrong.**

And it **restricts genuine stopping to four cases** — **irreversible actions, security, side effects outside the workspace, and when every path is guesswork.**

Everything else is judged and carried. So **it runs all night and makes progress, and in the morning you can read what it decided.**

## And the paired rule — gather all of it at the end

There is a companion rule. **Before wiping the workspace, every recorded judgement is collected into a section of the final report.**

The grounds:

> **A judgement that dies with the ledger is a decision made in secret.**

Recording is not enough. **If the record is deleted along with the workspace, it is the same as never recording it.**

## Another — "a cap on fixing, and a circuit breaker"

When a review raises something, you fix it. But **you cannot fix forever.**

This caps it at **five rounds per task**, and changes who does the fixing along the way.

| Round | Who fixes | Why |
|---|---|---|
| 1–3 | **The original builder continues** | **They know their own code** |
| 4–5 | **A stronger model, a fresh builder** | Three failures means **the eyes need to change** |
| After | **A circuit breaker drops** | Item by item: hold, or minimal fix |

**A fourth attempt by the same person after three failures is usually pointless.** That is written into the rules.

## And "do not hand the reviewer the answer"

Small and important.

Putting **"do not flag this"** into a reviewer's instructions makes the reviewer **stop thinking there.**

Even where it looks like a false positive, **the reviewer raises it and the judgement happens at the next stage.** **The filtering seat and the judging seat are separated.**

## One measurement worth having — "pasted things follow you forever"

The most striking number they measured.

When handing off work, **pasting the content in** means it **stays loaded until the session ends.** It is re-read every turn.

One measured handoff was **42,000 characters**, of which **99% was pasted past history.**

→ Hence the rule: **do not paste, pass a file.** A file is **read only when needed.**

## And another — "the cheap model can cost more"

A paradoxical measurement.

| | Unit price | Actual total |
|---|---|---|
| The expensive model | High | **Finishes in fewer exchanges** |
| **The cheap model** | Low | **Takes 2–3× the exchanges, costing more overall** |

**Look at the total, not the unit price.**

And there is a second trap: **omit the model on a task and it inherits the most expensive one.** A rule written to save money **is silently voided the moment somebody forgets to fill in a field.**

## But the method this repository taught collapsed my takeaways

The subject of the piece.

In the first pass I wrote down **three things to take.**

And the repository's own documents contain **a prescribed way to verify things.** I turned that method **on the repository itself.**

**Two of the three lost their grounds.**

One line was decisive. Their own rule says:

> **If the control does not exhibit the failure, stop there.**

Which means **to claim this is better you must first show it is worse without it.** Two of my takeaways failed that condition — **I was measuring only my own thing, with no control.**

**And measuring only your own thing confirms what you already believed.**

So **I stopped there.** Three became one.

## But what actually changed was not that one

The most important part.

The takeaway count is one. **What this analysis actually changed was finding and closing holes in two of my other pipelines.**

Not something taken from someone else, but **something that surfaced while measuring my own thing by their standard.**

The recurring conclusion on this shelf shows up again: **counting a teardown's value by the number of things taken loses half of it.**

## Why I did not adopt the framework

My pipeline **already had the same machinery** — model per stage, retry ceilings, machine-judged gates, resuming from where it stopped. And **some of mine is more refined.**

For reference the always-on cost is **about 1,511 tokens** — small (0.76% of the budget). **I did not reject it over cost.**

## The detailed record starts here

**I rejected the framework wholesale.** My test-case pipeline already has the same machinery — per-stage model selection, retry ceilings, deterministic gates, hash-based resume — and in places it is more precise. That much is an ordinary conclusion. **What makes this one worth writing is what came next:** I had listed three things to take away, then applied the project's own verification method **to the project itself**, and the ground under two of them disappeared. One survived. And yet the thing this teardown actually changed wasn't that one — it was **finding and closing a hole in two of my other pipelines.**

## What it is

**A development methodology for coding agents, plus a library of fourteen skills.** Say *"let's build X"* and it doesn't jump to code — it interrogates the design into a spec, splits that into a plan, then **spawns a fresh agent per task** to implement and review. Thirteen agent hosts are supported.

**The substance isn't the skill documents, it's the wiring.** A session-start hook injects 63 lines of preamble into every session, and those lines declare *"if there is a 1% chance a skill applies you MUST invoke it / you do not have a choice / you cannot rationalize your way out"* — followed immediately by **a twelve-row table of rebuttals to rationalizations.**

| | Measured 2026-08-15 |
|---|---|
| Scale | 272,335 stars · 24,345 forks · **in ten months** |
| Licence / deps | MIT · **zero external packages** (the "zero dependency" claim checks out in code) |
| Contributors | 523 commits by one person, 79 by the next — **bus factor 1** |
| Pull requests | 167 merged / 943 closed unmerged / 182 open |
| Standing context cost | **≈1,511 tokens** (0.76% of 200k) |
| Cost when invoked | the largest single skill is ≈8,084 tokens |

## The techniques worth reading

The controller machinery is where the value is. It reads like **a document written by someone who has already hit every problem that comes with running agents unattended.**

| Technique | What it says |
|---|---|
| **Rule, don't stall** | A running plan does not wait for a human. Conflicts, ambiguity and ceiling breaches get ruled on and recorded as `decision — why — cost if wrong`. Only four things stop it: **irreversible actions, security, side effects outside the workspace, and a plan where every path is a guess** |
| **Roll every ruling up** | Before the workspace is deleted, every ruling line is collected into one section of the final report. *"A ruling that dies with the ledger is a decision made in secret"* |
| **Fix-loop ceiling + breaker** | Five rounds per task. Rounds 1–3 **resume the original implementer** (it knows its own code); 4–5 use a higher tier and a fresh one. After that the breaker trips and each item is parked or minimally ruled |
| **Reviewers may not be pre-judged** | If a reviewer prompt contains *"don't flag this"*, it halts there. Even if you think it's a false positive, let the reviewer raise it and rule in the loop |
| **Hand artifacts over as files** | Pasted text stays in context to the end of the session and is re-read every turn. One measured dispatch was 42k characters, **99% of it pasted history** |
| **Omit the model and you inherit the priciest one** | Leave the model out of a dispatch and it inherits the session's, silently voiding your cost rules. At the same time, **turn count beats unit price** — the cheapest model burns 2–3× the turns and costs more overall |

**And the star of this piece is in the skill-authoring methodology** — *match the form to the failure*. Classify the baseline failure **before** writing any guidance, because a form that is bulletproof against one failure backfires measurably against another.

| Baseline failure | Right form | Wrong form |
|---|---|---|
| Breaks a rule knowingly | prohibition + rebuttal table | soft advice |
| **Complies, but the output shape is wrong** | **a positive recipe** — state what the output is, in order | a list of prohibitions |
| Omits required elements | required slots in a template | prose reminders near the template |
| Should vary by condition | conditionals on observable predicates | absolute rule plus exceptions |

## What broke — two of the four criticisms were themselves wrong

**Quoting the community criticism as-is would have been a mistake.**

- **"Installing it costs 22k tokens permanently"** — **stale.** That issue is eight months old. Measuring the current version directly, **the standing cost is 1,511 tokens.** Reading the hook code, it injects exactly one file. **Cite a criticism without pinning the version and the citation itself becomes the error.**
- **"Commits have collapsed lately"** — **my own misread.** Weekly commits read `4,1,0,1`, which looks like stagnation. But **main is the release branch here** and every PR targets the dev branch, where activity is dense. **Judge activity without looking at the branch layout and you will be wrong.**
- **"272k stars with 0.38% watchers is abnormal"** — **normal for the cohort.** Contemporary AI-tooling repositories all sit around 0.6%. A low watch ratio isn't a manipulation signal, it's what **bookmark-stars** look like.
- **"A 69% reduction with no regression was rejected"** — true, but **consistent with stated policy**: *"content that shapes behaviour is code."*

**Three real weaknesses survive the adversarial pass.** Bus factor 1. A backlog of 334 with an 85% rejection rate — and **the open issues point at logic defects inside the methodology**, not wiring bugs. And ⚠ **the reproduction path for the performance claims lives outside the repository** — *"we don't change it without evidence"* is the policy, but that evidence sits in a separate org, so **the claims can be neither verified nor refuted.**

## Held against my own setup — and my verdict flipped

I took *match the form to the failure* and ran it over my own rule documents. **Prohibitions outnumbered recipes 12.6 to 28.6 times over, with recipes at effectively 0%.** So I wrote *"my corpus is abnormal"* and adopted it as the top item.

**Then I found that the project's own rule already decided how to handle this.**

> Always include a no-guidance control. If the control doesn't exhibit the failure, there is nothing to fix — stop, and don't author the guidance.

**My control is the reference implementation.** I ran the same script over it.

> **[도판]** The first pass wasn't wrong about the numbers. It was wrong to measure only my side and call it abnormal.
>
> Prohibition to recipe ratios measured the same way across the reference implementation and my own rule documents. The reference implementation as a whole sits at 26.6 times, and the very document making the argument sits at 18.5. My corpora range from 12.6 to 23.0, meaning mine are less skewed, which is why my first-pass verdict collapsed.

## Verdict

| Item | Pass 1 → 2 | Why · what would reopen it |
|---|---|---|
| Match the form to the failure | **adopt → hold** | The reference is more skewed. Reopen when **a concrete shape failure is actually observed**, and then only for that one rule |
| **Roll every ruling up** | **adopt, held** | Attacked and didn't break. Nothing equivalent existed, and the cost is one section in a report |
| Add a no-guidance control arm | **adopt → hold** | ⚠ Both target tools have **never actually been run**. Attaching an arm to something never run is debt, not cost. Reopen on the first real run |
| Adopt the framework | **rejected, still** | The reasoning changed — below |

⚠ **I withdrew one of my rejection grounds.** In the first pass I wrote that the hard approval gate *"collides head-on with my no-auto-plan-mode rule and I can't turn it off"* — but **the project states plainly in its closing section that user instructions take precedence over skills.** My phrasing was an exaggeration.

**The conclusion stands, on different grounds.** The precedence sentence is **the last of 63 lines**; everything above it says *"you do not have a choice, this is non-negotiable."* And **two of the project's own measured findings aim squarely at that structure** — *"a description that summarises the workflow makes the agent follow the description instead of the body"*, and *"exemption clauses don't scope."* **That precedence line is exactly such an exemption clause.**

## But what actually changed wasn't a takeaway

**I re-read my own pipelines through the lens of "don't trust an agent's success report."**

The [test-case pipeline](/en/built/tc-team/index.md) was already covered — deterministic code checks size, reference counts and truncation right after writing, and blocks the start when they disagree. **Its two siblings were not.** In the [game QA server](/en/built/android-qa/index.md) and the [game studio](/en/built/moon-studio/index.md), every stage transition is gated by **another agent's review verdict**, and a search for any deterministic check that the artifact exists returned zero.

**This failure has already happened here once.** An attempt to generate 83 rows in one shot burned the output ceiling, exited with status 0, and cost a measured 88.3 minutes — which is why the test-case pipeline grew chunking and gates. ⚠ **That lesson never travelled to the siblings.** Lose a design artifact the same way and the next stage takes truncated input, and the review after it passes without knowing the original was cut. **Status code 0, so nothing stops.**

I added handoff gates to both. All 10 failure cases caught, all 12 healthy cases passed, zero false positives.

**The lesson I paid for here isn't a technique, it's an order of operations — measure only your own side and the number confirms what you already believed.** That is exactly how my top-ranked item got built, and it only collapsed once I turned the project's own method back on the project.

And ⚠ **a teardown pays off even when nothing comes across.** The real takeaway count is one. What this investigation left behind was **gates on two other pipelines.** I borrowed the lens, not the tool.
