# I did not touch the threshold

> One run, 126 cases, one failure. I knew how to make it pass, and didn't.

- Headline number: 1 failure
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/verdicts/threshold/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/verdicts/threshold/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**126 cases in one run, one failure. I knew how to make that one pass, and I did not.**

## The situation

One automated run. **One failure out of 126.**

And **I knew how to turn it green.** Loosen the judgement threshold slightly and it passes. One line.

**I did not.** This is that piece.

## Why not

Loosening the threshold **does not only pass that case.** **Everything else using that threshold loosens with it.**

| | If I change it |
|---|---|
| The one failure today | **Passes** |
| **Everything currently passing** | **Passes more easily** — a real problem would no longer be caught |

So the trade is **manufacturing several invisible holes to remove one visible failure.**

And those holes **produce no symptoms at all** today. Everything is green.

## But why is it a temptation

Honestly: **I wanted to.**

A screen with one failure and a screen with everything passing **look completely different.** And **one line closes that gap.**

And you can attach **a perfectly plausible reason** — *maybe the threshold was too strict.* **And it might even be true** — which is what makes this hard.

One question settles it.

> **Did the grounds for changing this threshold exist *before* I met this case?**

They did not. They were **grounds that appeared after meeting it.** Which makes them not grounds but **an excuse.**

## Why there are five verdicts

This run used **five verdicts, not two.**

With two boxes everything ambiguous slides into one. With five, **the ambiguous ones sit in their own place.**

And in their own place they can be **counted later** — *how many were unverifiable* becomes an answerable question.

## The diagnosis I got wrong

I also got a diagnosis wrong in this run.

I first read the cause of the failure one way, and **checking, it was something else.** And that difference **changed the prescription completely.**

So that misdiagnosis is written into the piece too. **Record only the verdicts you got right and you make the same misdiagnosis next time.**

## So what stays

> **If it was possible to turn it green, write down that it was possible.**

Without that, the piece is **a boast about being honest.** With the method on the page, **a reader can recognise the same temptation in their own situation.**

## The detailed record starts here

126 cases, start to finish. 937 seconds. One failure.

I knew how to make that one pass. Widen the verdict window from 30 seconds to 60. One line.

## Why there are five verdicts

With only PASS and FAIL, automation lies. Cases the machine isn't sure about have nowhere to go, so they get pushed into one of the two — and the one they get pushed into is usually PASS.

So there are five. PASS and FAIL only when a log anchor lets the machine be certain. EVIDENCE when the screen was captured but nothing can be concluded. SKIP when the case never ran. NA when it's out of scope.

| Verdict | Count |
|---|---|
| EVIDENCE | 66 |
| SKIP | 39 |
| PASS | 16 |
| NA | 4 |
| FAIL | 1 |

The largest block is EVIDENCE, at 66. That means the machine decided on its own for fewer than half the cases — and not hiding that number is the whole point of splitting the verdicts up.

## The one failure

Two consecutive cases were judging the same action against the same log anchor. The first waited 30 seconds; the anchor arrived after that and was caught inside the second case's window.

The event fired normally. The first window simply missed it. Four other cases with the same title all passed in this run, and in the previous run the anchor arrived inside 30 seconds and this case passed too.

Which is to say the result is decided by timing.

> Widen the window and this run goes green. The cause stays exactly where it was, and the next run wobbles in the same place.

The structural problem is a duplicated anchor. The fix is to give the first case an anchor of its own, or merge the two — and either way the expected values have to be confirmed first. This run closed carrying one failure.

## The diagnosis I got wrong

Nine of the 39 skips reported as "tap target unmapped." I wrote that filling in the coordinates would recover them. **I called it the cheapest coverage I could buy.**

Wrong. Filling them in recovers nothing.

Dumping all 7,455 widgets showed the targets existed and were named. What blocked them wasn't coordinates — it was reach. One ancestor container was not visible, so the entire left HUD stayed folded, and it never opened once during the run.

| Of 72 in-game dumps | Appeared |
|---|---|
| Right HUD | 72 |
| Left HUD | 0 |

Adding coordinates only changes the skip reason from "unmapped" to "action failed." Growing coverage needs a route to that screen, not a mapping.

One string dragged the entire diagnosis in the wrong direction. A reason string isn't log decoration — it's the interface a person reads to decide what to do next.

## Where the time went

Of 937 seconds, 302 (32.3%) were bridge round trips. Of those, dumping the widget tree alone accounted for 186 seconds — 19.8% of the whole run.

That's what happens when every judgment pulls the entire tree. A call that asks for only the widgets in question would cut it. By how much, I don't know until I measure before and after against the same set of cases.

Until I saw these numbers I assumed shader compilation was the bottleneck.

## Verdict

The one failure was not a product defect. And I still didn't turn it green.

Being able to write both of those sentences at once is why the verdicts are split five ways and why the reason strings get written down.
