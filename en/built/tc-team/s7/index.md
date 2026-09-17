# S7 · Finalize

> The rule document owns the procedure and the runner reads it at execution time. This stage does not stop on failure.

- Headline number: try/continue
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s7/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s7/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Where the finishing work lives. And here, *failure does not stop the run* — the opposite of every stage before it.**

## What happens here

Stamping confidence, updating the dashboard, filling in project information, labelling, uploading documents, sending notifications, releasing the lock.

**All of it is "the real work is done, now tidy up."**

## "Failure does not stop it" — the opposite of the earlier stages

The earlier stages **stop when a gate is not cleared.** This one is the reverse.

| | Earlier stages | This one |
|---|---|---|
| One item fails | **Everything halts** | **The rest continue** |
| At the end | Pass or halt | **Reports "partially failed"** |

Why inverted: **the real work is already finished.**

If sending a notification fails, there is no reason not to update the dashboard. **They are unrelated.** Built like the earlier stages, **one notification stops the other six.**

> **Separate what must block from what only needs reporting.** Block everything and nothing ever finishes.

## Confidence gets stamped here

Every case gets **a score from 0 to 100 for how solid its basis is.**

Low scores **show as a colour in the sheet.** The note carries three things.

| What goes in the note |
|---|
| **The score** |
| **Why it was reduced** |
| **Where in the specification to look** |

The third is the crucial one. **A low score alone does not tell anyone what to do about it.** Pointing at where to look is what makes a person able to act.

And the purpose is **not hiding that some cases are not at 100.** A table where everything looks identical **tells you nothing about where to be suspicious.**

## The code does not own the procedure

An unusual design choice here.

**The order and the wording live in the rule document, and the runner reads it at execution time.** **The procedure is not written down again inside the code.**

Why: **a procedure in two places will diverge.**

| | Result |
|---|---|
| Written in the document **and** in the code | A day comes when only one is updated, **and from then they differ** |
| **Written in the document, read by the code** | **They cannot diverge** |

And changing the procedure **does not require touching code.** Edit one line of the document and the next run reflects it.

## It advises; it does not execute

At the end, **one line each of optional follow-up** appears — attach images, set up test data.

**It advises and does not act.**

Same reason as before: **doing something nobody asked for is not convenient, it is alarming.** Especially **anything hard to reverse.**

It tells you **what it could have done and did not**, and **whether to do it is a person's call.**

## The detailed record starts here

Confidence stamping, dashboard refresh, project metadata, labelling, document upload, notifications, releasing the run lock. The wrap-up work lives here.

## The code does not own the procedure

The order of operations and the wording of the notices live in **a rule document, which the runner reads at execution time and carries out.** The procedure is not written down a second time in code.

The reason is that there are two entry paths — me calling it from a session, and a remote call from Slack. Bake the procedure into code and the two paths drift apart quietly. **A procedure that only gets fixed on one side is the dangerous kind.**

The same goes for the panel text stamped into the sheet. The script reads it from the rule document when it runs, so changing the wording never means opening code.

## Confidence is not judged here

Every case gets a 0–100 score for **how solid its basis is.** Low scores show as colour in the sheet, and a note carries the score, **why points were deducted, and where in the spec to look.**

The point is that **no LLM is called here at all.**

The judgement was already made upstream. The design tags, the cross-reference record, and the coverage gate left traces behind, and this stage merely **aggregates them deterministically and transcribes.** Had it been built to ask a model "is this case trustworthy?" at the end, running the same sheet twice would have produced different scores.

Idempotence rules ride along: every run resets the colouring and re-stamps, and it only touches notes carrying **its own signature.** So a note somebody wrote by hand never gets erased.

## Failure here does not stop the run

Every earlier stage halts if it can't clear its gate. This one is the opposite — one failed item doesn't stop the rest, and the exit code reports "partially failed."

**Because the test cases are already in the sheet.** Failing the whole run because a dashboard refresh failed records work that actually succeeded as a failure.

But it **must be written into the report.** An unattended run finishes on green lights regardless of quality. The completion report is the only observation window there is, so staying quiet here means that run passes with nobody having looked at it.

Which is why the required contents of that report are pinned down — confidence distribution, output sizes, the list of what review deleted or changed, and the linked-document collection result. That last one: **if it's zero, it says "no references."** Saying nothing and saying there were none are different.

## It advises; it doesn't execute

At the very end, optional follow-up work gets a one-line notice each — whether to run image matching, whether to set up test data.

**It advises and does not execute.** Whether those are needed is a judgement for a person at that moment, not something the pipeline should bolt on by itself. The more unattended a thing runs, **the more precisely you have to decide in advance where it stops.**

Then it releases the run lock. It releases it on abort paths too — leave it held and a finished run still looks "in progress," and the next person can't edit.
