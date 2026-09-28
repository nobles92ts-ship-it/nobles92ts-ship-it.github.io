# S5 · Apply

> Applies the fix plan and clears four gates. This is the stage where rejection is correct behaviour.

- Headline number: 4 gates
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s5/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s5/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**S5 takes the fix plan left by the previous stage (the S4 review), applies it for real to the table of test cases, and puts the result through four inspections.**

A test case is one line of checking: *do this, then confirm that happens.* The fix plan is a list of edits — *in case N, change this cell to that.* An inspection is a mechanical check that code runs over the table before it goes anywhere near the sheet.

When something trips, it mostly doesn't patch itself and carry on — **it stops and calls a person.** That is why this is the stage where *rejection* is correct behaviour.

## What "rejection is correct behaviour" means

The line that defines this stage.

A fix plan arrives carrying **"this row currently reads like this"** — the present value. And before applying, **it checks whether that is actually so.**

**If it does not match, it does not apply. It rejects.**

| Situation | What happens |
|---|---|
| The current value matches the plan | Fix it |
| **The current value differs** | **Do not fix. Reject — the run stops** |
| The edit would produce a line the pre-write check will block | Skip that one edit, keep the original wording, carry on |

Why that matters: **the content may have changed between the plan being made and the fix being applied.** Then **you fix the wrong thing.**

Say the plan is *in row 7, change "it fails" to "a failure message appears."* If rows shifted in the meantime and **row 7 is now a different case**, applying it **damages a case that was fine.**

So **a rejection is not a fault, it is a safety catch.** Stopping was chosen over overwriting the wrong row.

In an unattended run, a rejection **ends the run as a failure, right there.** Nothing regenerates the plan on its own — a person looks at it and rebuilds the plan.

There is one exception, since September 2026: a reviewer's edit that would turn a line into something **the next stage's pre-write check will refuse.** That single edit stays unapplied, the original wording is kept, and the run goes on. The edits left out are listed in the completion report.

## Two of the four inspections stop the run outright

There are four, and each looks at something different. They don't follow the familiar *catch it, fix it, run again* — mostly, **they stop and call a person.**

| Inspection | Looks for | If it catches |
|---|---|---|
| **Wording** | Vague phrasing, **delegating to someone else without basis** | **Stops and calls a person** |
| **Duplicates** | Rows whose **whole case line is identical, character for character** | **Stops and calls a person** |
| **Coverage** | **Rules the ledger shows uncovered** | An AI adds rows, **exactly once** → if gaps remain, stops |
| **Grouping** | The same category **sitting apart** | Code gathers them automatically |

The "ledger" is a table recording, for every rule in the spec, *which case checks this rule.*

Filling coverage gaps is the only place an AI takes part here. The AI writes the new rows' sentences; code checks that they fit the format and puts them into the table. If gaps are still open after that one round, there is no second round.

## Why the duplicate check blocks only exact matches

A good judgement call.

It blocks **only exact matches** and **leaves similar ones alone.** What it compares is the whole case line — the sentence stating what to do and what to confirm.

Because **once code starts cutting on "similar," legitimately similar cases die too.**

These two are similar:

- *Fails when materials are **one short***
- *Fails when there are **none at all***

To a machine they are nearly identical sentences. But **they are two different situations that both need checking.** Boundary values and zero break differently.

So **judging similarity is the AI's job in the previous stage, and code looks only for exact matches.**

> **You have to separate what a machine can judge from what it must not.**

## When a duplicate turns up, read the pre-review wording before deleting anything

Two identical lines — delete one, surely. But first you have to ask **how they became identical.**

The review (S4) sharpens vague wording, and sometimes it **takes the precondition in the sentence along with it.** Take these two:

- *If the connection drops **right after the materials go in**, confirm they come back*
- *If the connection drops **just before the result appears**, confirm they come back*

Strip the bold part and the two lines match exactly. Originally they were **two situations that differ in when the connection dropped.** Delete one and the case that checked one of those moments is gone.

On 4 September 2026, five distinct cases collapsed this way into two "duplicate" pairs. Since then the order is fixed:

| The pre-review wording was | Do this |
|---|---|
| Different | Don't delete — **put the stripped precondition back** |
| Already the same | A real duplicate — merge, or spell out the difference |

**One thing is still open.** After the single gap-filling round, the duplicate check **is not run again.** So a row the AI added, identical to one already there, has gone all the way to the sheet as a matching pair.

## What this stage cost — "numbers change, content does not"

When uncovered rules remain, **rows get added to fill them.**

But **inserting a row pushes every number below it down.**

Which makes the numbers in the ledger built earlier **stale all at once.** It recorded *rule 3 is covered by case 7*, and **case 7 is now case 8.**

I first tried **recomputing the numbers.** **Wrong.** With several insertions in mixed order the arithmetic stops holding.

Now it **joins by content, not number** — a combination of major category, minor category, verification stage and the full case line.

> **Position changes; content does not.**

## Resuming used to drop the review's edits without a sound — that hole is closed

Each time this stage applies an edit, it writes **"this one is applied"** into a separate record. That record exists so the same edit never lands twice.

And each time this stage starts, it rebuilds the final table **from scratch, out of the pre-review original.**

Those two together leave a hole. Resume after a halt **with the previous attempt's record still on disk**, and:

1. the table being rebuilt is the pre-review original,
2. the record says "already applied",
3. so the edit is **skipped.**

What comes out is a table in which the review's corrections have **slid back to the pre-review wording.** Rows added to fill coverage gaps drop out as well. It is like starting the soup over in a clean pot, glancing at last time's checklist, seeing *salt ✓*, and leaving the salt out.

**No error shows up anywhere.** The run exits normally and the row count is right. The only signal was a "skipped" count in the log. In August, four cells the review had corrected did reach the sheet in their pre-review wording; in early September, **a run nearly finished 266 rows cleanly with all 94 corrected cells reverted.**

It was fixed on 24–25 September 2026. Now this stage **empties the previous record first** when it starts, then writes a fresh one. The ledger is also reset to what the review stage just produced before anything else happens.

Here is how to tell it worked:

> **applied + rejected = edits in the plan · skipped = 0**

A skipped count above zero isn't success — it means the record was contaminated. That formula is not an automatic inspection yet, though; **a person checks it against the log.**

## The completion marker gets written, but nothing checks it yet

Clear all four and **it drops a completion marker file.**

The idea was: on resuming after a halt, **if the file is there this stage is done, and if not, it runs again.** Memory disappears when the process ends; a file stays.

Then a review in September 2026 found **no code anywhere that checks whether the file exists.** It is written, and nobody reads it.

So resuming from the sheet-writing stage (S6) or the wrap-up stage (S7) carries on **without asking** whether this stage's inspections passed. A table that never cleared them can slip through that way. Not fixed yet.

> **Leaving a marker and checking the marker are two separate jobs.** For a while, this page itself said "if it is absent, the stage runs again."

## The detailed record starts here

Applies the fix plan from the previous stage, repairs group boundaries, and has to clear four gates before moving on. Applying and checking are all code — except the sentences in rows added to seal uncovered rules, which an AI (the sealing agent) writes and code validates and applies (as of 2026-09).

## Rejection is correct behaviour

A fix plan carries a "before" value — what the row currently says. If that doesn't match, the applier **refuses rather than applies.**

Rejection isn't a malfunction. It means **the content changed in the meantime**, and regenerating the plan beats laying a stale edit over a moved target. A missing anchor, or a collision with another edit, gets refused the same way.

In the unattended chain a rejection is a failed run (as of 2026-09). The applier exits 6, the chain ends there, and nothing regenerates the plan automatically. The one exception is the pre-write regression refusal added on 2026-09-21: an edit that would **newly** create a blocking violation for S6's pre-write check is left unapplied, the original text stays, and the run continues (exit code unchanged; the refused list goes to the log and the completion report).

Read as a "success rate," this makes you want to loosen the gate. The number worth watching isn't the success rate — it's **how many mismatches the rejections caught.**

There is no judgement in the application itself. It executes the prescription written upstream, and **if it can't do what the prescription says, it doesn't do anything** — there is deliberately no path where it improvises something similar.

## Four gates, each looking at something different

| Gate | What it looks at | If it trips (as of 2026-09, unattended) |
|---|---|---|
| Content | Abstract phrasing, unfounded deferral | Run stops for a human (exit 14) |
| Duplication | Rows whose F column (the full one-sentence reproduction step) is identical | Run stops for a human — merge, or state the differing condition |
| Traceability | Rules left uncovered in the ledger | An AI sealing agent writes add_row patches for one round only; code validates and applies them. Anything still uncovered stops the run |
| Grouping | Same category split apart | Repaired automatically |

The duplication gate blocks **exact F-column matches only** and lets similar ones through, because similarity is the upstream judge's call. Once code starts cutting on a similarity score, legitimately similar cases die with the rest.

When it trips, compare the F column in the pre-S4 snapshot before deleting anything. If the originals differed, S4 manufactured the duplicate by stripping a timing or precondition prefix while fixing abstract wording — so don't delete; restore the prefix (rule since 2026-09-04). One limit: the duplication gate isn't re-run after the sealing round, and an identical pair — a sealed row and an existing one — has reached the sheet (unfixed).

## Numbers change; content doesn't

Uncovered rules get patched by inserting new rows. But **the moment a row is inserted, every number below it shifts.** The ledger built upstream goes stale on the spot.

Remapping those numbers arithmetically is forbidden. The join is done **on content** — major category, minor category, verification stage, and the F column (the full one-sentence reproduction step), all of them.

Minor category plus F column isn't enough. Inside one spec an earlier section routinely restates a later one, so those two alone attach to the wrong row. Matching on a substring of the F column is banned too — if another row carries the same phrase, it wins.

When in doubt, **rebuilding the ledger against the finalised sheet** is the safer move. It costs less than forcing a stale ledger to line up.

## Passing is recorded as a file

Clear all four and a completion marker file gets written. The design intent was: **if that file is absent, this stage runs again.**

But no code checks whether the file exists (as of 2026-09) — the only place it appears in the chain is the line that creates it. So resuming from S6 or S7 skips the S5 gates without looking at the marker (flagged in the 2026-09-24 review, unfixed). The paragraph below still holds as intent; until something reads the file, it is a promise rather than a mechanism.

That's what makes resuming from the middle possible. An exit code dies with the process; a file doesn't. In a pipeline running unattended, writing it to disk is the only way to know "this much is done."
