# S7 · Finalize

> The rule document owns the procedure and the runner reads it at execution time. This stage does not stop on failure.

- Headline number: try/continue
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s7/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s7/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Where the finishing work lives. And here, *failure does not stop the run* — the opposite of every stage before it.**

Once every case is in the sheet, this stage **tidies the tab up for the people who will use it.** It marks how far each case can be trusted, writes the questions for the planners in a column of their own, and files the results in a few other places.

## Six jobs, in a fixed order

| Order | Job |
|---|---|
| 1 | **Confidence scores** — rate how solid each case's basis is and attach it as a note |
| 2 | **Dashboard** — wire this tab into the summary tab that gathers results from every case tab |
| 3 | **Project info block** — at the top right of the tab: owners, a link to the spec, result counts |
| 4 | **Questions for the planners** — written in their own column, **minus** any whose answer was already found |
| 5 | **Document upload** — the analysis documents go to the shared drive (new files only) |
| 6 | **Link to the knowledge notes** — this feature's analysis gets linked into the internal knowledge notes |

When all six are done, "done" is written to the status record.

Older write-ups also listed **the kickoff notice** and **releasing the run lock** (the "something is running right now" flag) here. Neither happens here any more (as of September 2026): the notice goes out once, when the first stage starts, and the lock is dropped by the pipeline itself at the moment the whole run exits.

**All of it is "the real work is done, now tidy up."**

## "Failure does not stop it" — the opposite of the earlier stages

The earlier stages **stop when a gate is not cleared.** This one is the reverse.

| | Earlier stages | This one |
|---|---|---|
| One item fails | **Everything halts** | **The rest continue** |
| At the end | Pass or halt | **Reports "partially failed"** |

Why inverted: **the real work is already finished.**

If the dashboard update fails, there is no reason not to fill in the planners' question column. **They are unrelated.** Built like the earlier stages, **one dashboard failure stops the other five.**

It does not fail quietly, though. A failed job gets a ✗ and a reason in the completion report, and if something a person really has to see — the scores, the question column — goes missing entirely, a warning line is pinned to **the very top** of the report.

> **Separate what must block from what only needs reporting.** Block everything and nothing ever finishes.

## Confidence gets stamped here — without asking an AI

Every case gets **a score from 0 to 100 for how solid its basis is.** That score is called **confidence.**

It is not a model's opinion. It comes from **a fixed set of scoring rules** that count the traces the earlier stages left behind, so running the same sheet twice gives the same scores.

**Only low scores get a colour** — yellow for 50–69, red for under 50. And since September 2026, **every case gets a note.** The note reads in this order.

| Note, in order | What it says |
|---|---|
| ① Score and grade | How many points |
| ② Why this case exists | Which section and which sentence of the spec it came from |
| ③ For QA | What to check first when testing — only on cases that lost points |
| ④ Why points were lost | The deductions — only on cases that lost points |

② is the new part. "Why is this case even here?" comes up for cases that lost no points just as much as for the ones that did. Back when only coloured cases got a note, the healthy ones had nowhere to answer it. So the two were split: **a note on everything, colour only where attention is needed.**

And the purpose is **not hiding that some cases are not at 100.** A table where everything looks identical **tells you nothing about where to be suspicious.**

## Questions for the planners get a column of their own

Writing cases, you hit spots where **the spec simply has no answer.** Those don't get mixed into the cases. They go into a **question column** on the right of the tab, from row 12 downward.

Mix them in and **who has to do what becomes invisible.** In a column of their own, **the planner only has to read that column.**

Requests for **test data** — the props a test needs, such as items or accounts — are **not written automatically.** That was a decision made by a person in July 2026. They can be asked for separately, and then they land in the same column; the notice lines at the end of the completion report say how.

## And the questions have quality standards too

Let questions be free-form and you get this:

**A bad question:** *Please confirm the item upgrade behaviour.*

The reader **does not know what to answer.** And even when an answer comes, **you still cannot write the case.**

**A good question** is **one line of question plus one line of reason** per cell (since September 2026).

<div class="ex">
<div class="o"><b>GOOD</b><p>If an upgrade fails at level 10, does it drop to level 9 or stay where it is?<br>We need to know which outcome is correct before we can check what happens on a failure.</p></div>
</div>

The difference:

| | The bad one | The good one |
|---|---|---|
| Options | None | **Answerable by picking one of two** |
| Why it is asked | Unknown | **Stated in one line** |
| When the answer arrives | **You have to ask again** | **You can write the case immediately** |

Three kinds of question **never go up at all.**

| Kept off the list | Why |
|---|---|
| Things we'd know if we had read further | That's our job, not the planner's |
| Things the documents already answer | One "that's already written down" and the whole list stops being trusted |
| Things whose answer wouldn't unblock any test | Placeholder values, image file paths, a one-character naming choice — the case can be written without them |

The third kind was added in September 2026. A person trimmed the question lists for two features by hand — from 53 down to 34, cutting 36% — and every question cut was one where the case could be written without the answer. So it came down to a single test: **"Without this answer, can the case not be written right now?"** If it can, the question stays off.

**Questions that are easy to answer get answered sooner.** And cases only fill once the answers arrive.

## Questions already answered are removed before a person sees them

After the questions are drafted, they get filtered once more, **right before** they go into the column. Each question is put, word for word, to **the internal wiki**; if an answer comes back, that question **comes out of the column** (since September 2026).

It used to leave the question in and tack on a tag like "the wiki says this." But to the planner that tag was our bookkeeping, not something they needed. **If there's nothing to ask, don't ask.**

**An honest limit** — the filter can be wrong. If finding a related rule is enough for it to decide "answered," a question that really needed asking **disappears without a sound.** So removed questions are kept separately with the reason, and the completion report says "N questions removed" so that **a person skims them once.**

## The results get linked into the internal knowledge notes

Last of all, **the spec analysis** produced by this run is linked into the internal knowledge notes. Those notes are one page per spec, so someone looking up the feature later finds the analysis in the same place.

**It links rather than copies.** The note gets **a single reference line** — "show this part of that analysis here." Edit the original and the note changes with it; there are no copies to drift apart.

The match is made on the spec's **page number**, not its name — names keep missing each other over a space or an underscore. If no matching note exists, **it skips and records why.** That is not counted as a failure of the test-case work.

It runs last because the analysis has to be final before the place it links to can be trusted.

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

Confidence stamping, dashboard refresh, project metadata, planning-question labelling (including filtering out questions already answered), document upload, and embedding into the knowledge notes. The wrap-up work lives here. The order, set by the rule document, is FINAL-0 → 1 → 2 → 5 → 3 → 7 (as of September 2026). The kickoff notice belongs to S1, and the run lock is released by the full-chain script's exit hook (`trap EXIT`). The last thing S7 does is write `done` to the state file.

## The code does not own the procedure

The order of operations and the wording of the notices live in **a rule document, which the runner reads at execution time and carries out.** The procedure is not written down a second time in code.

The reason is that there are two entry paths — me calling it from a session, and a remote call from Slack. Bake the procedure into code and the two paths drift apart quietly. **A procedure that only gets fixed on one side is the dangerous kind.**

The same goes for the panel text stamped into the sheet. The script reads it from the rule document when it runs, so changing the wording never means opening code.

## Confidence is judged here — with no model involved

Every case gets a 0–100 score for **how solid its basis is.** Colour goes only on grade C (50–69) and D (under 50); since 10 September 2026 **every row** gets a note, ordered score and grade → why this case exists (the source section, quoting the spec) → notes for QA → deductions, with the last two only on rows that lost points.

The point is that **no LLM is called here at all.**

The judgement was already made upstream. The design tags, the cross-reference record, and the coverage gate left traces behind, and this stage merely **aggregates them deterministically and transcribes.** Had it been built to ask a model "is this case trustworthy?" at the end, running the same sheet twice would have produced different scores.

Idempotence rules ride along: every run resets the colouring and re-stamps, and it only touches notes carrying **its own signature.** So a note somebody wrote by hand never gets erased.

## Failure here does not stop the run

Every earlier stage halts if it can't clear its gate. This one is the opposite — one failed item doesn't stop the rest, and the exit code reports "partially failed" (0 = every step succeeded · 20 = some steps failed · 1 = bad arguments).

**Because the test cases are already in the sheet.** Failing the whole run because a dashboard refresh failed records work that actually succeeded as a failure.

But it **must be written into the report.** An unattended run finishes on green lights regardless of quality. The completion report is the only observation window there is, so staying quiet here means that run passes with nobody having looked at it.

Which is why the required contents of that report are pinned down (items ① to ⑩ as of September 2026; there is no ⑦) — the split of cross-reference outcomes across four branches (apply · location only · newly discovered · keep), the silent-miss banner, the confidence distribution, output sizes, the paired record of the two cross-reference deductions (no definition in the wiki either · location known but value unread) together with the list of what review deleted or changed (**including edits refused** as regressions), the linked-document collection result, how many "keep" items the linked documents turned into apply or locate, the image-marker audit, and the questions dropped from the planning-question column. For the linked documents: **if it's zero, it says "no references."** Saying nothing and saying there were none are different.

## The questions left behind have standards too

(Moved here from the S6 page in September 2026 — this column is written by FINAL-5 here, not by S6.)

The sheet doesn't only carry cases. **Things to ask the spec author** get their own columns — a header cell in column M, the items listed down column N, starting at row 12 (as of September 2026). **Test data requests** are not written automatically, by a decision made on 27 July 2026; FINAL-6 only mentions them. And those sentences have rules.

**Write them as questions.** "Value undecided" gets read by nobody. It has to be a sentence the recipient can answer as written. A cell holds **one line of question and one line of reason** and nothing more (11 September 2026) — no cross-reference evidence or source tags from our side.

**When asking for a number, supply a candidate.**

<div class="ex">
<div class="x"><b>BAD</b><p>Maximum inventory slot count undecided</p></div>
<div class="o"><b>GOOD</b><p>How many inventory slots is the maximum? Is it 500?</p></div>
</div>

An open question doesn't get answered. Attach a value — even a guess — and it becomes **answerable with a yes or no**, and that is when answers start arriving. Candidates come from the data tables, a similar system, or an existing case, and **a guess is written so it reads as a guess.**

Three prohibitions go with it (the third was added on 3 September 2026).

- **Our own work defects never go in this column.** Turning "I didn't analyse this properly" into a question for the spec author is the worst version of it.
- **Never ask something already answered.** Ask about what's written in the spec and, from then on, nobody looks at this column.
- **Never ask something whose answer wouldn't unblock a test.** Placeholder values, resource paths, a one-character naming difference — the happy-path case can be written without knowing them. A planner's budget for answers is finite, and the longer the list, the deeper the questions that matter get buried.

The second one matters most. The value of a question list is not its length but its **hit rate.** One "that's in the document" and the credibility of the whole list is gone.

Which is why there is one last net. The question sentences 5a wrote are checked verbatim against the internal wiki index, and **any question that finds its answer is dropped just before 5b writes the column** (11 September 2026, when tagging gave way to filtering). Dropped questions are kept in a separate file with their evidence, and the count goes into the completion report — this is the spot where an overconfident match makes a question vanish quietly.

## It advises; it doesn't execute

At the very end, optional follow-up work gets a one-line notice each — whether to run image matching, whether to set up test data.

**It advises and does not execute.** Whether those are needed is a judgement for a person at that moment, not something the pipeline should bolt on by itself. The more unattended a thing runs, **the more precisely you have to decide in advance where it stops.**

The run lock is held by the run as a whole, not by this stage, and an exit hook drops it whether the run finishes or aborts (as of September 2026). Leave it held and a finished run still looks "in progress," and the next person can't edit.
