# QA

> If you can't say in one sentence what a pass means, the test isn't verification yet.

- Headline number: 2 conditions
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/future-2/qa/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/future-2/qa/index.md
- ⚠ Canonical lives elsewhere: https://nobles92ts-ship-it.github.io/en/built/moon-studio/future-1/qa/
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**An empty slot. What is written here is only "what has to exist before this slot counts as filled."**

## The condition — "say in one sentence what a pass means"

The acceptance condition for this slot.

> **If you cannot say in one sentence what it means when a test passes, that is not verification yet.**

*100 tests passing* sounds good, and **if you cannot say what it guarantees, it means nothing.**

## What travels 1 — "zero must not mean two things"

Paid for in practice.

Say a result comes back as **zero.** It can be either of two things.

| What is true | On screen |
|---|---|
| **Checked, nothing wrong** | **0** |
| **The check never ran** | **0** |

**They look identical. And both look like good news.**

This is the most dangerous kind of illusion. **A fault reads as a pass.**

They have to be separated.

- Checked and clean → **"0 findings (12 checks ran)"**
- The check did not run → **"did not run"** — not zero

> **"None" and "not counted" have to be different values.**

## What travels 2 — "no errors" is not "it works"

The second lesson.

**Building without errors** and **actually running correctly** are different things.

| | What it guarantees |
|---|---|
| **Builds without errors** | **The syntax is valid** |
| **Running it** | **It behaves as intended** |

Mistaking the first for the second happens often, **especially because no errors feels like everything is done.**

And **writing code that does nothing at all, without error, is very easy.**

> **A static pass means "it did not break," not "it runs."**

## What has to be re-decided — "what counts as a defect"

This **differs per game.**

The same phenomenon is **a bug in one game and a feature in another.**

| Phenomenon | In this game |
|---|---|
| The character passes through a wall | Usually a bug / **a feature where phasing is a mechanic** |
| An enemy suddenly stops | Usually a bug / **a feature if it is a stagger animation** |
| The screen freezes briefly | Usually a bug / **a feature if it is hit-stop** |

So **without deciding what counts as a defect first**, the tests will **report correct behaviour as bugs** or **wave real bugs through.**

And **that is the design's decision to make, not the test's.**

## The detailed record starts here

> ⚠ **This is the same text as [QA for Future game 1](/en/built/moon-studio/future-1/qa/index.md).** There is not yet any basis on which the two slots differ, so I have not invented a difference.

An empty slot. What's written here is only **what has to exist before this slot counts as filled.**

## What travels 1 — zero must not mean two things

From [the wuxia game's QA](/en/built/moon-studio/wuxia/qa/index.md), and the one thing from this studio that actually crossed into the pipelines at work.

When "found nothing" and "had nothing to look at" come out as the same zero, **the test passes a broken build.** Emit the counted value and the population size separately, and make a population of zero raise a configuration error rather than a pass.

## What travels 2 — a static pass is not proof it runs

Reading a file and reporting "fixed" doesn't count. Picture defects get judged by capturing the screen; behaviour defects by actually running it. There was a case where **the harness passed while the scene wiring was empty** and the real thing never ran.

## What has to be re-decided — what counts as a defect

In the wuxia game, "there's no time to read the telegraph" is a defect. In another game that could be the intent. **The definition of a defect changes per game, so the pass criterion gets written in one sentence before anything else.**
