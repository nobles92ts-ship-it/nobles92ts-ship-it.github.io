# The unattended loop

> Assume the product passes everything and every FAIL becomes an automation defect. A free oracle.

- Headline number: 9h57m
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/android-qa/loop/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/android-qa/loop/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**What has to be true for a run nobody is watching. The approach here is unusual — it runs only cases already confirmed to pass. Which means every failure has exactly one suspect.**

## A free oracle

The hardest problem in building automation is **"something failed and I cannot tell whether it is the product or my automation."**

Separating those requires a person to look. **At which point it is not unattended.**

Here that problem was **removed at the start.**

> **Run only the case list already confirmed to pass in full.**

Which gives:

| Result | What it means |
|---|---|
| Pass | Normal |
| **Fail** | **My automation, without exception** |

**The suspect is fixed without anyone looking.** I called it a free oracle — nothing had to be built to make the judgement; **one premise does the job.**

## The convergence condition is written first

The second-hardest problem with unattended runs is **knowing when to stop.**

Leave it undefined and **it runs forever.** Or **a person stops it when it seems to be going well enough** — and then there is no record of when that was or what state it was in.

So it was written before starting.

> **Every item passes by machine judgement, zero items unjudgeable. Twice in a row.**

**Twice in a row** matters. **One good run can be luck.**

## Overnight

**300 cycles, 9 hours 57 minutes, unattended, zero failures, zero crashes.**

## But these numbers must not be quoted as performance

⚠ Stated plainly.

Numbers like *seconds per step* fall out of this, and **quoting them as performance would be wrong.**

They contain **waits I inserted myself.** *Hold three seconds here* is my code. That is **not the product being slow, it is me making it wait.**

**A number mixing my waits with the product's time is a measure of neither.**

## What made it unattended was recovery structure, not speed

The conclusion.

The secret to running all night without stopping sounds like it should be **making it fast.** It was not. What decided it was **how far a failure spreads.**

| | Result |
|---|---|
| One failure **stops everything** | Stops at 2am, eight hours wasted |
| One failure is **recorded and the run continues** | **Finishes, and in the morning you read the failures** |

So **making failures local** is the condition for unattended operation.

And that has **nothing to do with speed.** Slow but never stopping is unattended; fast but stopping once ends the night.

## The detailed record starts here

The loop's design is a little unusual. It runs **a case set the build is already known to pass in full.**

## A free oracle

Which licenses one premise:

> If the product is ALL PASS, then every FAIL the automation produces is **a defect in the automation itself.**

It's grading the automation against an answer key. The hardest question when building an automation tool is **"is this failure the product's problem or mine?"** — and that question disappears entirely.

The cycle: run, diagnose, fix, write down what was learned, run again.

**Re-running without diagnosing is forbidden.** Without that rule "let's just try it again" becomes the default, and then an intermittently passing case never gets fixed while still moving the statistics.

## The convergence condition is written first

When it ends was decided up front — **every case machine-judged PASS, zero BLOCKED, two cycles running.**

Two consecutive cycles is the part that matters. Passing everything once can be luck, and in an unattended loop **repetition is the only thing that separates luck from stability.**

And without writing it down, it never ends. There's always a little more to fix in automation, so with no exit condition it continues indefinitely under "not perfect yet."

## Overnight

**300 cycles · 9 hours 57 minutes · unattended · zero failures · zero crashes.**

All 26 verification points held every cycle. Median cycle 111.5 seconds (min 98.8, max 161.8). The battery went from 96% to 95%.

The battery is worth recording. It runs tethered over USB, and **if drain outpaces charge, an overnight run simply isn't possible.** One percent means it could go for days.

## These numbers must not be quoted as performance

⚠ **The per-stage timings must not be quoted as performance figures.** They contain fixed waits from my own scripts.

"3.2 seconds for a screen transition" isn't product performance if two of those seconds are a `sleep` I put there. About the only segment readable as genuine product loading is the world-entry transition, and **turning load time into a real metric needs separate instrumentation.**

Not writing that distinction down is how you end up fooled by your own numbers six months later. And worse is what happens after you show them to someone else — **a number, once quoted, travels with its caveats stripped off.**

## Unattended requires failures to stay local

What made a full unattended run possible wasn't performance, it was the **recovery structure.**

The silent freeze was the hardest. It stops without anything failing, so the error counter never sees it. So **screen-change magnitude became its own axis** — no change triggers staged recovery attempts, and failing those, a hard cut.

Cutting matters. In a run nobody is watching, **waiting forever is worse than failing.** A failure lands in the log and moves to the next case; a wait does nothing all night and is still there in the morning.
