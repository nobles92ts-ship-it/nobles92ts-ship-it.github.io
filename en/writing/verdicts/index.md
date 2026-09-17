# Verdicts

> The space between PASS and FAIL — what counts as evidence, and how much a machine may decide alone.

- Headline number: 5 posts
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/verdicts/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/verdicts/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Twelve years in QA, and the hard part was never finding bugs. It was *deciding what to call the thing you found*.**

## First — why a verdict is hard work

Run a test and you have to record the result. Normally you write **pass or fail.**

The problem is **how often it is neither.**

| What is actually true | Where does it go |
|---|---|
| It works, but something looks off | **?** |
| Could not set up the conditions, so never tried it | **?** |
| The spec does not say, so I cannot tell if it is right | **?** |
| The feature is not built yet | **?** |

**None of those four is a pass or a fail.**

## And with only two boxes, automation lies

The heart of this section.

With two boxes, **the ambiguous ones get pushed into one of them.** And **the one they get pushed into is almost always "pass."**

Because **writing failure brings someone to look.** Writing pass brings nobody. **From the recorder's point of view, pass is much easier.**

Over time:

> **The pass rate is high, and a good share of those passes are "never actually checked." And the table cannot tell you which.**

## So the pieces here are about adding boxes

The five pieces here are all about **what counts as evidence, and how far a machine may decide alone.**

| Piece | What the problem is |
|---|---|
| **I did not touch the threshold** | **Knowing how to turn it green and not doing it** |
| Is it broken, or not there yet? | **Where do you get the grounds** for separating a defect from an unbuilt feature |
| "Probably right" is not a verdict | What happens when **evidence is not graded** |
| The 53 orphans were a false alarm | What happens when **you trust a checker's alarm** and act on it |
| The new install looked like the culprit | What happens when **you name a suspect before measuring the timeline** |

## The rule for this section

> **If I know a way to change the result and make it pass, I write down that I *did not use it*.**

Otherwise the piece becomes **a boast.** A piece ending in *I was honest* **helps nobody's next verdict.**

**What was possible has to be on the page** so a reader can recognise the same temptation in their own situation.

## Not written yet

- **How many kinds of verdict to split into** — too many and nobody picks; too few and you get the problem above
- **How the failure reason you write changes what the next person does**

## The detailed record starts here

In twelve years of QA the hard part was never finding the bug. It was **deciding what to call the thing I found.**

Give automation only PASS and FAIL and it will lie to you. Cases you aren't sure about have nowhere to go, so they get pushed into one of the two — and the one they get pushed into is usually PASS.

## Written

| Piece | The problem it has |
|---|---|
| [I didn't touch the threshold](/en/writing/verdicts/threshold/index.md) | The case where you could turn it green and don't |
| [Broken, or not there yet?](/en/writing/verdicts/version-docs/index.md) | Where the grounds for that distinction come from |
| ["Probably right" is not a verdict](/en/writing/verdicts/evidence-grades/index.md) | What happens when you never grade what counts as evidence |
| [The 53 orphans were a false alarm](/en/writing/verdicts/false-alarm/index.md) | What happens when you trust an alert and repair what it points at |
| [The newest install looked like the culprit](/en/writing/verdicts/new-install-suspect/index.md) | What happens when a suspect is written down as the culprit before the ordering is measured |

## Not written yet

- How many verdicts a suite actually needs
- How a failure-reason string changes what the next person does

## The rule for this category

**If you know how to make it pass, say that you knew — and that you didn't do it.** Otherwise the piece becomes a boast, and a boast helps nobody make the next call.
