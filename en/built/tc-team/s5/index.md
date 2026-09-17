# S5 · Apply

> Applies the fix plan and clears four gates. This is the stage where rejection is correct behaviour.

- Headline number: 4 gates
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s5/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s5/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Applies the fix plan for real and clears four inspections. This is the stage where *rejection* is correct behaviour.**

## What "rejection is correct behaviour" means

The line that defines this stage.

A fix plan arrives carrying **"this row currently reads like this"** — the present value. And before applying, **it checks whether that is actually so.**

**If it does not match, it does not apply. It rejects.**

| Situation | What happens |
|---|---|
| The current value matches the plan | Fix it |
| **The current value differs** | **Do not fix. Reject** |

Why that matters: **the content may have changed between the plan being made and the fix being applied.** Then **you fix the wrong thing.**

Say the plan is *in row 7, change "it fails" to "a failure message appears."* If rows shifted in the meantime and **row 7 is now a different case**, applying it **damages a case that was fine.**

So **a rejection is not a fault, it is a safety catch.** When one occurs, **the fix plan is regenerated.**

## Four inspections, each looking at something different

| Inspection | Looks for | If it catches |
|---|---|---|
| **Wording** | Vague phrasing, **delegating to someone else without basis** | Fix and repeat |
| **Duplicates** | Rows with **identical expected results** | Merge, or state the difference |
| **Coverage** | **Rules the ledger shows uncovered** | Add rows to fill, then repeat |
| **Grouping** | The same category **sitting apart** | Gathered automatically |

## Why the duplicate check blocks only exact matches

A good judgement call.

It blocks **only exact matches** and **leaves similar ones alone.**

Because **once code starts cutting on "similar," legitimately similar cases die too.**

These two are similar:

- *Fails when materials are **one short***
- *Fails when there are **none at all***

To a machine they are nearly identical sentences. But **they are two different situations that both need checking.** Boundary values and zero break differently.

So **judging similarity is the AI's job in the previous stage, and code looks only for exact matches.**

> **You have to separate what a machine can judge from what it must not.**

## What this stage cost — "numbers change, content does not"

When uncovered rules remain, **rows get added to fill them.**

But **inserting a row pushes every number below it down.**

Which makes the numbers in the ledger built earlier **stale all at once.** It recorded *rule 3 is covered by case 7*, and **case 7 is now case 8.**

I first tried **recomputing the numbers.** **Wrong.** With several insertions in mixed order the arithmetic stops holding.

Now it **joins by content, not number** — a combination of category, verification stage and reproduction steps.

> **Position changes; content does not.**

## Passing is recorded as a file

Clear all four and **it drops a completion marker file.**

And **if that file is absent, this stage runs again.**

Why a file rather than memory: **it has to be possible to stop halfway and resume.** Memory disappears when the process ends; **a file stays.**

So **nothing has to be asked about where it got to.** The file exists, so it happened; it does not, so it did not.

## The detailed record starts here

Applies the fix plan from the previous stage, repairs group boundaries, and has to clear four gates before moving on. All code.

## Rejection is correct behaviour

A fix plan carries a "before" value — what the row currently says. If that doesn't match, the applier **refuses rather than applies.**

Rejection isn't a malfunction. It means **the content changed in the meantime**, and regenerating the plan beats laying a stale edit over a moved target. A missing anchor, or a collision with another edit, gets refused the same way.

Read as a "success rate," this makes you want to loosen the gate. The number worth watching isn't the success rate — it's **how many mismatches the rejections caught.**

There is no judgement in the application itself. It executes the prescription written upstream, and **if it can't do what the prescription says, it doesn't do anything** — there is deliberately no path where it improvises something similar.

## Four gates, each looking at something different

| Gate | What it looks at | If it trips |
|---|---|---|
| Content | Abstract phrasing, unfounded deferral | Fix and re-run |
| Duplication | Rows whose expected results are identical | Merge, or state the differing condition |
| Traceability | Rules left uncovered in the ledger | Patch in new rows and re-apply |
| Grouping | Same category split apart | Repaired automatically |

The duplication gate blocks **exact matches only** and lets similar ones through, because similarity is the upstream judge's call. Once code starts cutting on a similarity score, legitimately similar cases die with the rest.

## Numbers change; content doesn't

Uncovered rules get patched by inserting new rows. But **the moment a row is inserted, every number below it shifts.** The ledger built upstream goes stale on the spot.

Remapping those numbers arithmetically is forbidden. The join is done **on content** — major category, minor category, verification stage, and expected result, all of them.

Minor category plus expected result isn't enough. Inside one spec an earlier section routinely restates a later one, so those two alone attach to the wrong row. Matching on a substring of the expected result is banned too — if another row carries the same phrase, it wins.

When in doubt, **rebuilding the ledger against the finalised sheet** is the safer move. It costs less than forcing a stale ledger to line up.

## Passing is recorded as a file

Clear all four and a completion marker file gets written. **If that file is absent, this stage runs again.**

That's what makes resuming from the middle possible. An exit code dies with the process; a file doesn't. In a pipeline running unattended, writing it to disk is the only way to know "this much is done."
