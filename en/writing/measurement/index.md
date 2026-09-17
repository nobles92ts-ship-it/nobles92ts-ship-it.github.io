# Measurement

> Where the time actually went, and how to keep estimates and measurements apart. And the work of deciding what to compare a number against.

- Headline number: 1 post
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/measurement/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/measurement/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Measuring is not the hard part. The hard part is *deciding what to compare the number against*.**

## Measuring is easy

Scripts count correctly and logs record correctly. **"It took N seconds" and "there were N of them" simply come out.**

## And one number on its own says nothing

Say you have **twelve seconds.** **Is that good or bad?**

You cannot tell. **Without something to compare it to there is no judgement.**

| Compared against | Then twelve seconds is |
|---|---|
| It used to be thirty | **An improvement** |
| It used to be three | **A regression** |
| There is no prior record | **You cannot say anything** |

## And this is where things go quietly wrong

The core of this section.

With nothing to compare against, **the number always takes your side.**

Meaning: measure only your own thing with no control, and **you are the one interpreting what comes out.** And people interpret in favour of what they built. Not deliberately — **that is simply how it works.**

> **A number with nothing to compare it to is a number nobody has ever argued with.** And a number nobody has argued with is weak evidence.

## Keeping estimates and measurements apart

The other subject here.

Some values **cannot be measured.** No instrument, no way to build a control, or the cost is prohibitive.

Two options then.

| | Result |
|---|---|
| **Leave it out** | The slot stays empty → **nobody fills it later** |
| **Write it, *labelled* an estimate** | Usable, **and the reader knows it is an estimate** |

The second is right, with one condition attached.

## The rule for this section

> **Write down that a value could not be measured, and write down *how it could be*.**

Without the how, **it stays an estimate forever.** There is no route up.

Worse comes next. **Given time, the "estimate" label falls off and it reads as measured.** It gets cited, re-cited, and becomes a fact.

**A promotion path is what lets a number eventually become real.**

## Written

| Piece | What the problem is |
|---|---|
| **The arithmetic was right all four times** | **Why a verdict flips even when the calculation is correct** |

## The detailed record starts here

Measuring is not the hard part. Scripts count correctly and logs record correctly.

The hard part is **deciding what to compare the number against.** And that is where it goes quietly wrong — with nothing to compare against, a number always takes my side, and a number that takes your side has never been refuted.

## Written

| Post | The problem |
|---|---|
| [All four times, the numbers were right](/en/writing/measurement/baselines/index.md) | Why a verdict reverses while the arithmetic stays correct |

## Not written yet

- What changes once the holdout actually runs — right now only the method is written down
- Whether a number measured once and a number measured repeatedly belong in the same table
- What has to be quoted alongside a figure somebody else published

## The rule for this category

**If a number couldn't be measured, say so — and write down how to promote it to measured.** Attach the label without the promotion path and the value stays an estimate forever; and given enough time the label falls off and it starts reading like a measurement.
