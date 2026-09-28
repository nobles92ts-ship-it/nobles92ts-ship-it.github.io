# S6 · Writing the sheet

> The finished case body goes into the live sheet once and is read back afterwards. The "is this tab ours?" check still has one unfixed hole.

- Headline number: body written once
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s6/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s6/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**This stage copies the finished test cases into a real spreadsheet tab. The case body is written here exactly once, and then read back and compared.**

A test case is one line of a checklist: "do this, and that should happen." The earlier stages build the whole checklist; this one copies it into a single tab of a **Google Sheet** — an online table that many people look at together.

## The case body is written exactly once

The five stages before this **all run on files on my own machine.** The real sheet is never touched.

Three reasons.

| Reason | |
|---|---|
| **It has to be reversible** | A local file that goes wrong gets deleted. **A real sheet has already been seen by other people** |
| **Half-finished states should not be visible** | Someone seeing work in progress **mistakes an incomplete thing for the result** |
| **Mistakes stay in one place** | One place that writes means one place an accident can happen |

"Once" covers **the case body** only. The very next stage comes back into the same tab and **adds** a few things on top. It never rewrites the body text.

| Who | What it puts in this tab |
|---|---|
| **This stage (S6)** | The case body — categories, reproduction steps, platform, remarks |
| **The next stage (S7)** | A colour and a note (the score) on each case number, an info block on the right, a column of questions for the planners |

Since September 2026 each case row has **eleven columns**. A **link column** was added then — a home for bug numbers and reference-image addresses, which this stage leaves empty. The column that says "normal / negative / edge" is **hidden**, because it isn't something a person needs to read; the value stays, and later stages compute with it.

## Whether a tab is "ours" is decided by a note on my machine

When a tab is created, **a note saying "we made this tab"** is left behind. That note is not in the sheet. It is **a small file in the working folder on my machine.**

So a re-run **splits three ways.**

| Situation | What happens |
|---|---|
| The tab is absent | Create it |
| Present, **and our note is in the working folder** | **Wipe and rewrite** — it is ours |
| Present, **with no note of ours** | **Leave it alone** — make a new tab with `_v2`, `_v3` … `_v9` on the end |

The third row matters. **Overwriting a tab someone made by hand destroys their work.** And **that cannot be undone.**

With no note, **the default is "unknown, so leave it alone."**

## A hole not yet fixed: "ours" switches on too easily

The second row has a hole in it. Whether a tab is ours is not decided by **looking inside the tab** — only by **whether the note file exists in the working folder.** So a re-run from the same folder **always** calls the tab ours, deletes it, and writes it again.

The trouble is that in the meantime **a person may have typed test results into that tab.** Deleting the tab deletes those too.

A September 2026 audit found **six** of these rewrites. Whether any real results were lost in them **has not been checked yet.** The fix — compare run numbers properly, or refuse to write when the result columns already hold values — is written up in the audit report but is not in the code yet.

> The promise "never overwrite other people's work" currently holds only for **tabs somebody else made.** **What a person wrote inside one of our tabs** is not protected yet.

## Write, then read it back

It does not stop at writing. **It reads back and compares against what it intended to write.**

Because **"sent" and "arrived" are different.** It may have been truncated; only part may have landed. **And from the sending side it all looks like success.**

One more thing gets checked: **errors the sheet produced while evaluating what it received.**

Those are not problems with what was sent. **The sheet takes the values and computes**, so **it was fine leaving and broken on arrival.** Only a read-back sees it.

The column of questions for the planners, and the standards those questions must meet, belong to the next stage, so they now live on [S7 · Finalize](/en/built/tc-team/s7/index.md).

## The detailed record starts here

This is where the TC body is written to the live spreadsheet, and it is the only time the body is written (as of September 2026, S7 comes back afterwards to add confidence colours and notes, the right-hand panel and the planning-question column, but leaves the body alone). Every earlier stage runs on local files.

## Idempotence is bought with an ownership marker

Creating a tab leaves a marker saying we made it. The marker is not in the sheet — it is `owner_marker.json` in the local working folder (as of September 2026). So a re-run branches three ways.

- No tab → create one
- **Ours → clear and rewrite** — run it any number of times, same result
- Somebody else's tab → don't touch it; create a new one with a suffix (`_v2`–`_v9`)

And **under no circumstances is any tab other than the target touched.** A live sheet is a document holding other people's work alongside mine. One wrong deletion there has no undo.

**The second branch has a defect, though (unfixed as of September 2026).** The run id is read out of the marker and then compared against that same marker, so as long as the file exists the comparison can only come out true. A re-run in the same folder therefore always treats the tab as owned, deletes it, and recreates it. Any manual QA results someone entered in between go with it. The 24 September 2026 audit counted six such rewrites; whether anything was actually lost was not established. The remedy — a real run-id comparison, or refusing when the result columns already carry progress values — exists only in the audit document, not yet in code.

## Write, then read it back

It doesn't finish on write. It re-dumps and confirms a zero diff, then separately checks for `#ERROR!` values the sheet produced by evaluation.

**Because what you wrote and what is displayed can differ.** A spreadsheet sometimes interprets cell contents as a formula, so the transfer succeeds while the screen shows an error. Trusting the success response alone means never seeing it.

Reading it back costs one call. Skipping that one call means handing over a broken tab believing it is finished.

The planning-question column and the rules for its sentences are written by S7 (FINAL-5), not S6, so that section moved to [S7 · Finalize](/en/built/tc-team/s7/index.md) (as of September 2026).
