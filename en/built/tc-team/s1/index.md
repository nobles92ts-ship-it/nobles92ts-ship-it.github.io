# S1 · Design

> Pulling a design skeleton out of the spec. Deciding the taxonomy is the same act as deciding the automation setup.

- Headline number: LLM
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s1/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s1/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The stage that reads the specification and pulls out a design skeleton. It carries more judgement than any of the other seven, which is why it is the only one using a stronger model.**

## What this stage produces — two documents

It does not turn the specification straight into a table. **Two documents come first.**

| Document | What |
|---|---|
| **Analysis** | Organises the specification and pulls out **candidates for what needs confirming** |
| **Design** | **Expands those candidates into categories and cases** |

Why not do it in one pass: **"what needs confirming" and "how should it be grouped" are different jobs.** Mixed together, **you end up only picking out the things that group nicely.**

## The most valuable rule — "a taxonomy is not organisation, it is a setup hierarchy"

The line this stage is worth.

Test cases are usually grouped **by subject** — *upgrade-related*, *shop-related*. It looks tidy.

But grouped that way **the actual testing is painful.**

Because testing needs **props**. To test upgrading you need an item to upgrade and materials to spend. And **getting the props ready is what takes the time.**

| Grouped by | When you run it |
|---|---|
| **Subject** | Props are jumbled → **reset the setup for every case** |
| **Props** | Set up once and **run several in a row** |

So this tool groups **by "things needing the same props."** It looks less tidy and **runs far faster.**

> **Deciding the taxonomy is the same act as deciding how the testing will be set up.**

## No case gets built on data that does not exist

A case has to name items **by their real names** — not *some item* but *Upgrade Stone (Medium)*.

Those names are not in the specification; they are in **the game's data tables.**

So just before the design step, those tables are swept into **a dictionary of real names** and handed to the AI.

Without it: **the AI invents plausible names.** Something like *Stone of Enhancement* — **an item that does not exist in the game.** And that only surfaces **when someone tries to run the test.**

## Two inspections, because the two failures are different

After design there is an inspection. **There was one at first, and it burned me.**

Things go missing in **two different ways.**

| Inspection | Compares | Catches |
|---|---|---|
| **Upper** | Specification ↔ analysis candidates | **Omission** — it never became a candidate |
| **Lower** | Analysis candidates ↔ design cases | **Compression** — it was a candidate and **never got expanded** |

The difference matters.

**Omission** is having skipped a whole paragraph of the specification. **Compression** is having seen it, recorded it as a candidate, and then **flattened it into one line while expanding.**

**Only the lower inspection and omissions slip through; only the upper and compressions do.** And from the outside both just look like **"not many cases came out."**

## Coming back has to be free

Sometimes a later stage blocks and returns here. If **redesigning from scratch** were required, **time and money would be spent again.**

So **if the design content is unchanged, this stage is skipped entirely.** Its content is fingerprinted and compared.

That is what makes **going back a usable option.** When going back is expensive, **blocking makes you push forward instead of returning.**

## The detailed record starts here

Reads the raw spec and produces two documents: an **analysis**, which organises the source and extracts test candidates, and a **design**, which expands those candidates into a taxonomy tree and cases.

This is **where the most judgement lives** in the pipeline, and the only stage that runs on a larger model.

## The taxonomy isn't organisation — it's a setup hierarchy

This is the most important rule in the stage.

> The taxonomy is not a plain feature grouping. It is **the precondition hierarchy of the automated test.** Each level expresses a **setup step** leading up to the moment the reproduction steps run.

It isn't grouped for human readability — **the automation code maps directly onto that hierarchy.** The top level says which screen or mode you have to be in; the middle level says what has to be prepared once you're there.

Which means splitting the taxonomy by feature name makes the automation **set up from scratch for every case.** Things that share a preparation state end up scattered across different branches, so there is no way to build that state once and reuse it.

Not putting actions, conditions, or results in a category name follows from the same thing. A leaf name has to describe **the state you've arrived at**; what you then do is the case's job to say.

## No case gets built on data that doesn't exist

Reproduction steps need real item names, and those names live in the game's data tables. So just before design runs, the tables are scanned and a **real-name dictionary** is handed to the designer.

The reason it happens exactly here is that **this is where the sentences are born.** An expression created in the design document flows unchanged through writing, review, and into the sheet. Fixing it downstream means fixing it in three places after it has already spread.

Three rules ride along with it.

- **Examples are chosen only from the dictionary.** Never write an item name from memory or inference. A plausible fake name embedded in a case costs whoever runs it the time spent hunting for it.
- **If the name alone doesn't identify it, the identifier goes alongside.** When several things share a name, the name isn't information.
- **A case built on a combination that doesn't exist in the data is not deleted — it becomes a question.** The absence may itself be a gap in the spec. Delete it and the question disappears with it.

Behaviour on blank data is excluded from the candidates too. **Not filled in yet and deliberately empty are different things**, and building a case on the first one makes that case meaningless the moment the data is filled.

## Omission and compression are different failures

Design is followed by a review, and that gate is **split in two.** Running only one of them burned me for a while.

| Gate | What it compares | The failure it catches |
|---|---|---|
| Upstream | spec → analysis candidates | **Omission** — never became a candidate at all |
| Downstream | analysis candidates → design cases | **Compression** — a candidate exists but was never expanded |

Here's what happens with only one. **The downstream gate passes an upstream omission.** Anything the analysis missed is absent from the design too, so it scores as "the design expanded the analysis faithfully." A 100% expansion rate is not 100% coverage.

And the downstream gate can't just report a percentage. **Every candidate gets a row saying where it went** — expanded, silently dropped, or legitimately excluded. An exclusion **with no stated reason counts as a drop.**

Boundary values are 100%, no exceptions. If min-1, min, max, or max+1 isn't split into its own case, that's a failure on the spot. Finding a combined notation like `≤N / >N` sends it straight back.

## Coming back has to be free

If the design hash is unchanged, the whole stage is skipped. The point is not to re-run design when a later gate sends you back.

Without that, every gate failure means **re-running the most expensive stage.** If a pipeline is built on the assumption that you will come back, coming back has to be cheap.
