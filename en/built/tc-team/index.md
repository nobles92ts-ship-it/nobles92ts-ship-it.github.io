# tc-team

> Feed it a spec, get test cases. The LLM only writes sentences; deterministic code owns every structure and gate.

- Headline number: S0–S7
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/index.md
- Repository: https://github.com/nobles92ts-ship-it/AI_GAME_QA_TestCase
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Feed it a specification and test cases fill a spreadsheet. The point is not "the AI writes them" — anyone can do that badly. The point is *what the AI was not given.***

## First — what a test case is

Build a game or an app and **someone has to confirm it works.** *Have a look and see if it's fine* is not a confirmation. **What to press and what should appear** has to be written down first.

That written line is a test case. Roughly:

| Field | Content |
|---|---|
| **What** | Item upgrade |
| **How** | Press upgrade with no upgrade stones |
| **Then** | *Insufficient materials* appears and the upgrade does not happen |

Dozens of these get written per feature. **By hand it is slow, and things get missed as you go.**

This tool **fills that table from a specification.**

## The point is not "the AI writes them"

This is what the tool actually is.

**Ask an AI to write test cases and it will.** Anyone can. The problem is **the output differs every time.**

- Today numbering starts at 1, tomorrow at 0
- Some days six columns, some days seven
- Feed the same specification twice and **the results differ**

So the roles were split.

| Who | Owns |
|---|---|
| **Code** (a fixed program) | **Order, the table skeleton, numbering, formatting, the coverage ledger, writing to the sheet** |
| **The AI** | **Sentences, design judgement, findings, verdicts** |

So **the AI writes only the words and the code holds the shape.**

Why: **at first the AI drove everything, and as it went it drifted out of the rules it had itself set.** Around row 30 the formatting has changed. Not malice — **that is simply its nature.**

**When the code holds the shape, there is nothing to drift out of.**

## Eight stages

| Stage | What it does | Owner |
|---|---|---|
| **0** | Gather the source, lock out concurrent runs, **self-check the input** | Code |
| **1** | Read the spec and build **the design skeleton** | AI |
| **2** | **Inspect** whether the design can be expanded | Code |
| **3** | Build the skeleton → **split the sentence-writing across several** → merge | Code + AI |
| **4** | **Review adversarially**, judge, record coverage | AI |
| **5** | Apply fixes + **four inspections** | Code |
| **6** | **Write to the real sheet** | Code |
| **7** | Finalise, dashboard, notify | Code |

## What defines its character — "it stops when it cannot pass"

This tool **does not "do its best and continue."**

There are checkpoints, and **failing one means stopping or going back.**

| Checkpoint | If it catches |
|---|---|
| Input check | Re-gather once; failing again, **do not start at all** |
| Design inspection | **Return to stage 1** and fix |
| Merge comparison | **Only the mismatched chunk** re-runs |
| Applying a fix | **Rejection is correct behaviour** — if the target does not match expectation, it is not edited |
| Wording inspection | Blocks **vague phrasing** |
| Duplicate inspection | Identical cases must be merged |
| Coverage inspection | **If a rule is uncovered**, add rows and repeat |

The fourth row matters. **Opening something to fix it and finding the content is not as expected means not fixing it and stopping.** Someone may have edited it in between. **Rejection is not a fault, it is correct operation.**

## Review is adversarial, not collaborative

Finished cases are read **by several viewpoints at once** — one for structure, one for quality, one comparing against the source.

And **they cannot see each other's results.**

That is deliberate. **Seeing each other makes opinions converge, and converged opinions miss the same things together.** Three looking separately catch three different things.

## Two lessons that cost something — "do not join by number"

The one that hurt.

There is a ledger tracking coverage, and at first it pointed **by case number** — *rule 3 is covered by case 7.*

Then **inserting one row pushes every number below it down.** Seven becomes eight. The ledger still says seven, and **seven is now a different case.**

I first tried **recomputing the numbers.** **Wrong.** With several insertions the arithmetic stops holding.

Now it **joins by content, not number** — a combination of category, verification stage and reproduction steps.

> **Position changes; content does not.**

## An honest limit

**A thin specification produces thin output.**

This tool **does not invent specification that is not there.** Where there is no basis it **marks "needs confirmation from the spec" and moves on** rather than writing a case.

I think that is right — **an invented case becomes "where did this come from" later, and by then nobody knows.**

But **in an organisation with thin specifications the volume comes out lower than expected.** That is the material's fault rather than the tool's, and **to the person using it the disappointment is identical.**

## Things that were rejected

The version history is largely **a list of things that looked like progress and were not.** **More was removed than added.**

> **[도판]** Black cells are deterministic code; orange cells are the model. Only S3 crosses both lanes — code builds the skeleton, the model fills in prose, code merges it back. Triangles are gates: fail one and the run stops there.
>
> Eight stages S0 to S7 split across a code lane and an LLM lane. Code owns S0, S2, S5, S6 and S7; the LLM owns S1 and S4; S3 crosses both lanes. Gates sit at S0, S2, S3 and S5.

## The detailed record starts here

Point it at a spec document and it fills a live spreadsheet tab with a test-case set. Start to finish, one invocation, unattended.

The interesting part isn't "an LLM writes test cases." Anyone can do that badly. The interesting part is **the split**.

> **Two lanes — the LLM owns sentences and judgment; deterministic code owns structure and fact.**

## Why split at all

Early on the model drove the whole pipeline. It drifted.

Row counts changed between stages, coverage quietly dropped, and **two runs never produced the same shape.** Models are excellent at approximately right. They cannot be used for same-input-same-output.

The fix wasn't better prompting. It was **confiscation.**

| Owner | What it holds |
|---|---|
| Deterministic code | stage order, row skeleton, numbering, formatting, merging, coverage ledger, sheet writes |
| LLM | design judgment, sentences, review findings, verdicts |

## Eight stages

| Stage | Job | Owner |
|---|---|---|
| **S0** | fetch source, take the run lock, self-check the input | code |
| [**S1**](/en/built/tc-team/s1/index.md) | analyse the spec → design skeleton | LLM |
| [**S2**](/en/built/tc-team/s2/index.md) | design isolation gate + source slicing | code |
| [**S3**](/en/built/tc-team/s3/index.md) | build skeleton → fan out for prose → merge | code + LLM |
| [**S4**](/en/built/tc-team/s4/index.md) | adversarial review, verdicts, coverage ledger | LLM |
| [**S5**](/en/built/tc-team/s5/index.md) | apply fixes + four gates | code |
| [**S6**](/en/built/tc-team/s6/index.md) | write to the live sheet | code |
| [**S7**](/en/built/tc-team/s7/index.md) | finalise, dashboard, notify | code |

S1 through S7 are written up individually. Each stage cost something to learn, and a table row doesn't hold it.

S3 shows the architecture best. **Code builds the skeleton first**, cuts it into 25-row chunks, lets the model fill in only the prose, and code merges the results back. On merge it checks index, echo, hash and count — so if the model shifted a row or touched somebody else's, **only that chunk re-runs.** Every other chunk's work survives.

## Gates — it stops rather than continues

This is what defines the tool's character. **It does not "carry on doing its best."**

| Gate | Stage | On failure |
|---|---|---|
| input self-check | S0 | one refetch → still bad, **refuse to start** |
| design gate | S2 | design defect → loop back to S1 |
| merge verification | S3 | re-run only the mismatched chunk |
| apply before-mismatch | S5 | **rejection is correct behaviour** — regenerate the fix plan |
| content gate | S5 | block vague phrasing and unsupported deferrals |
| duplicate gate | S5 | force a merge when identical cases remain |
| traceability | S5 | uncovered rule → stitch in a row, reapply |

The before-mismatch gate matters most. Before applying a fix it asks **"is the place I'm about to edit still what I read?"** and refuses if not. A mismatch means a human touched the sheet or an earlier stage shifted — and pushing through would overwrite the wrong row.

There is exactly one place the run halts: an integrity violation. Everything else completes unattended.

## Review is adversarial, not collaborative

Generated cases are read by **several lenses in parallel** — structure, quality, and comparison against the source. They cannot see each other's findings. If they could, they would converge, and convergence means missing the same things together.

A separate judge cross-examines the findings, drops the false positives, and produces a fix plan **in a form a machine can apply.** Surviving findings are applied by code. Nobody asks the model to please go fix it.

The same stage builds the coverage ledger: each rule extracted from the spec is mapped to the cases that cover it, and anything uncovered gets a row stitched in at S5.

## The sheet is touched exactly once

S6 contacts the live spreadsheet **one time**, and decides by ownership marker.

- Our tab → wipe and rewrite in full (idempotent)
- Somebody else's tab → don't touch it; create a `_v2` alongside
- Every other tab → off limits, unconditionally

Run it five times and the result is identical, and it never overwrites another person's work. For automation that runs next to humans, those two properties come before everything else.

## Two lessons that cost something

**Inserting a row renumbers everything below it.** The coverage ledger points at cases by number, so stitching in a row makes the whole ledger stale. My first instinct was to remap arithmetically. Wrong. It now joins **by content, not position** — category, verification stage, and the reproduction step. Positions move; content doesn't.

**Hand-driving costs half the clock.** I once ran the stages manually one at a time. Wall clock was 2h23m; **the machine actually worked for 1h12m.** The rest was the pipeline waiting for me to type the next command. That number is the reason unattended completion exists.

## Things that were rejected

The version history is mostly a list of **things that looked like progress and weren't.**

Vocabulary-based progress detection — rejected after two measurements. Unifying the thresholds — rejected. The confidence heatmap ended up as **pure deterministic output with zero model calls**, after the model-scored version failed to reproduce.

Every rejection got a written resume condition. Without one you re-propose the same idea six months later.

## An honest limit

A thin spec produces thin output. This tool **will not invent design that isn't there** — with no basis for a case, it flags "needs spec clarification" and moves on. I think that's correct, but in an organisation where specs are thin it yields less than people expect.
