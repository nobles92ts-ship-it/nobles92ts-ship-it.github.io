# S6 · Writing the sheet

> The live sheet gets touched exactly once and read back afterwards. The questions left behind have standards too.

- Headline number: touched once
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s6/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s6/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**This is the first and last time the real spreadsheet gets touched. And after writing, it reads it back.**

## Why exactly once

The five stages before this **all run on files on my own machine.** The real sheet is never touched.

Three reasons.

| Reason | |
|---|---|
| **It has to be reversible** | A local file that goes wrong gets deleted. **A real sheet has already been seen by other people** |
| **Half-finished states should not be visible** | Someone seeing work in progress **mistakes an incomplete thing for the result** |
| **Mistakes stay in one place** | One place that writes means one place an accident can happen |

## An ownership marker buys idempotence

When a tab is created, **a marker saying we made it** goes in alongside.

So a re-run **splits three ways.**

| Situation | What happens |
|---|---|
| The tab is absent | Create it |
| Present **with our marker** | **Overwrite** — it is ours |
| Present **without our marker** | **Do not touch** — someone else made it |

The third row matters. **Overwriting a tab someone made by hand destroys their work.** And **that cannot be undone.**

With no marker, **the default is "unknown, so leave it alone."**

## Write, then read it back

It does not stop at writing. **It reads back and compares against what it intended to write.**

Because **"sent" and "arrived" are different.** It may have been truncated; only part may have landed. **And from the sending side it all looks like success.**

One more thing gets checked: **errors the sheet produced while evaluating what it received.**

Those are not problems with what was sent. **The sheet takes the values and computes**, so **it was fine leaving and broken on arrival.** Only a read-back sees it.

## And the sheet holds more than cases

Two things get **their own columns.**

| What | Why separate |
|---|---|
| **Questions for the person who wrote the spec** | Places where no case can be written without an answer |
| **Test data to request** | Places that cannot be run without the props |

Mixing these into the cases makes **who has to do what invisible.** In their own columns, **the spec author reads their column and the data owner reads theirs.**

## And the questions have quality standards too

The best part of this stage.

Let questions be free-form and you get this:

**A bad question:** *Please confirm the upgrade behaviour.*

The reader **does not know what to answer.** And even when an answer comes, **you still cannot write the case.**

**A good question:** *On failure at +10, does it drop to +9 or stay? Neither is stated in section 3.2 of the spec.*

The difference:

| | The bad one | The good one |
|---|---|---|
| Options | None | **Answerable by picking one of two** |
| Where the problem is | Unknown | **Points at the location in the spec** |
| When the answer arrives | **You have to ask again** | **You can write the case immediately** |

So the question text carries rules too. **Questions that are easy to answer get answered sooner.** And cases only fill once the answers arrive.

## The detailed record starts here

This is the first and last time the live spreadsheet is touched. Every earlier stage runs on local files.

## Idempotence is bought with an ownership marker

Creating a tab leaves a marker saying we made it. So a re-run branches three ways.

- No tab → create one
- **Ours → clear and rewrite** — run it any number of times, same result
- Somebody else's tab → don't touch it; create a new one with a suffix

And **under no circumstances is any tab other than the target touched.** A live sheet is a document holding other people's work alongside mine. One wrong deletion there has no undo.

## Write, then read it back

It doesn't finish on write. It re-dumps and confirms a zero diff, then separately checks for `#ERROR!` values the sheet produced by evaluation.

**Because what you wrote and what is displayed can differ.** A spreadsheet sometimes interprets cell contents as a formula, so the transfer succeeds while the screen shows an error. Trusting the success response alone means never seeing it.

Reading it back costs one call. Skipping that one call means handing over a broken tab believing it is finished.

## The questions left behind have standards too

The sheet doesn't only carry cases. **Things to ask the spec author** and **test data to request** get their own columns. And those sentences have rules.

**Write them as questions.** "Value undecided" gets read by nobody. It has to be a sentence the recipient can answer as written.

**When asking for a number, supply a candidate.**

<div class="ex">
<div class="x"><b>BAD</b><p>Maximum inventory slot count undecided</p></div>
<div class="o"><b>GOOD</b><p>How many inventory slots is the maximum? Is it 500?</p></div>
</div>

An open question doesn't get answered. Attach a value — even a guess — and it becomes **answerable with a yes or no**, and that is when answers start arriving. Candidates come from the data tables, a similar system, or an existing case, and **a guess is written so it reads as a guess.**

Two prohibitions go with it.

- **Our own work defects never go in this column.** Turning "I didn't analyse this properly" into a question for the spec author is the worst version of it.
- **Never ask something already answered.** Ask about what's written in the spec and, from then on, nobody looks at this column.

The second one matters most. The value of a question list is not its length but its **hit rate.** One "that's in the document" and the credibility of the whole list is gone.
