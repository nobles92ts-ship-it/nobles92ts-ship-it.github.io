# Spec

> The rules have to fit one screen, and the undecided part has to be written down. The most important section in a spec is the unsettled one.

- Headline number: 2 conditions
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/future-2/spec/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/future-2/spec/index.md
- ⚠ Canonical lives elsewhere: https://nobles92ts-ship-it.github.io/en/built/moon-studio/future-1/spec/
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**An empty slot. What is written here is only "what has to exist before this slot counts as filled."**

## What travels 1 — "the rules have to fit one screen"

A rule paid for on the wuxia game.

Scatter numbers and rules **across several files** and this happens:

> **Seen separately each one looks plausible, so the fact that the whole is wrong stays invisible.**

Say file A holds *attack power 10*, file B holds *enemy health 500* and file C holds *combat time limit 30 seconds.*

Each number is fine on its own. Together, **you can never finish in time.**

**On one screen it is wrong at a glance.** Scattered, **you have to open all three and do arithmetic.** Nobody does.

> **The canonical version has to be one table that fits on one screen.**

## What travels 2 — no "not yet decided" section, no spec

This matters more.

Writing a spec, you write down **what has been decided.** Obviously. **You do not write what has not been decided** — which also seems obvious, since there is nothing to write.

Leave it out and this happens:

| | Result |
|---|---|
| Undecided things **left unwritten** | A reader takes them as **"presumably settled"** |
| The builder | **Puts in any value and carries on** |
| Later | **"Who decided this?" — nobody knows** |

And at some point that value becomes **"the way it has always been."**

**Write "not yet decided" and none of that happens.** The builder **asks, or marks it as provisional** and moves on.

> **The most important section in a spec is the unsettled one.** That is where the accident will be.

## What has to be re-decided — every value

The structure carries over and **not one number does.**

That sounds obvious and in practice **last game's numbers get carried over constantly.** *It was 10 last time, so 10.*

**That 10 was derived against the other numbers in the last game.** The new game does not have that context.

**A familiar number is not a correct number.**

## The detailed record starts here

> ⚠ **This is the same text as [Spec for Future game 1](/en/built/moon-studio/future-1/spec/index.md).** There is not yet any basis on which the two slots differ, so I have not invented a difference.

An empty slot. What's written here is only **what has to exist before this slot counts as filled.**

## What travels 1 — the canonical version is one table on one screen

From [the wuxia game's spec](/en/built/moon-studio/wuxia/spec/index.md). Scatter the rules across three asset files and **each one looks plausible in isolation, which hides the fact that the whole is wrong.**

Splitting files is an editing convenience; the design judgement is only possible on one screen. At runtime the table gets poured in as data.

## What travels 2 — no "not yet decided" section, no spec

**Fail to record what's undecided and it looks decided.**

The wuxia source marks **11** items as needing a decision, unfixed, or on hold. The most valuable of them is **a bug deliberately left alone** — the counter window can't follow a telegraph that changes mid-run — and the source records the condition for revisiting it: "when balancing work that actually adjusts telegraph length at runtime comes up."

**A hold with no condition sends you back to the same investigation six months later.** So this slot's requirement isn't "nothing is undecided" — it's **"every undecided item carries its resume condition."**

## What has to be re-decided — every value

Only the **form** travels. Neither 2.4 seconds nor 60% is a number for the next game.
