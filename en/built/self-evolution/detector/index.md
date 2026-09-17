# The detector

> The thing built to detect death false-positived first. And the first full run changed nothing.

- Headline number: 1 false positive
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/self-evolution/detector/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/self-evolution/detector/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Half the plan was deleted and four things kept — of which *one* was newly built. And it false-positived the moment it existed.**

## Of the four kept, one was new

| Kept | Newly built |
|---|---|
| Always load the index, fetch the body on demand | **Already had it** |
| Append at the end of a task, unprocessed | **Already had it** |
| Weekly human-approved consolidation | **Already had it** |
| **The detector** | **This one only** |

**Only one thing being new** is the best outcome of this project. The original plan was much larger, and **split apart, most of it already existed.**

## Why only the detector

The reason the previous device could stay dead for months was **one thing.**

> **Nothing happened when there was no output.**

Absent is silent. So the only thing genuinely needed was **something that tells you it is absent.**

The rest was already running. **The missing piece was an eye to check that it runs.**

## And it false-positived immediately

The detector's rule was **"alarm if the last consolidation was more than ten days ago."**

**It alarmed the moment it was built.**

Checking, **it was a false positive.** Consolidation was overdue, and **the capture step upstream was running fine.**

## Why it got it wrong — it looked at one thing

A late consolidation has **two completely different causes.**

| Consolidation overdue | Capture | The real state |
|---|---|---|
| Yes | **Zero** | **A real problem** — no material arriving |
| Yes | **Alive** | **Not a problem** — material accumulating, tidying deferred |

The second row is **simply me being busy.** The material is safe. It can be done later.

**Looking only at "consolidation is overdue" makes the two look identical.**

## So it was changed to look at both

| Consolidation overdue | Capture | Verdict |
|---|---|---|
| Yes | **Zero** | **⚠ Alarm** |
| Yes | Alive | **ℹ Gentle suggestion** |
| No | — | **Silent** |

The middle row is the point. **A suggestion, not an alarm.** As an alarm it **fires often, and frequent alarms get ignored** — and then **the real one gets ignored with them.**

> **Alarms have to be spent sparingly. An alarm that fires often is the same as one switched off.**

## And the first full run changed nothing

The first time this loop ran end to end, **there was nothing to fix.**

Zero index mismatches, zero missing records. It updated a marker and finished.

That is recorded deliberately, because **"a run that changed nothing" is not a failure.**

A checking device **is supposed to find nothing, most of the time.** Finding something every time would be the strange outcome.

But the human instinct on finding nothing is **"is this thing even working?"** So **the fact that the first full run returned zero was written down** — **so that later, when someone asks whether it is broken because it has never fired, there is an answer.**

## The detailed record starts here

Half the plan got deleted and four things survived — and of those, **exactly one was newly built: the detector.**

The other three were existing things tidied up: index always-injected with bodies on demand, appending unprocessed at session end, weekly human-gated consolidation. Only the detector was a part that hadn't existed.

## Why this one and nothing else

There's one reason the previous machine could stay dead for months. **Producing nothing had no consequence.**

If the distiller doesn't run, the instinct file just doesn't appear — and sessions run fine without it. A failure with no cost persists, and a persistent failure eventually looks like the normal state.

So the detector's job is **to create a consequence.** Do nothing and a notification arrives.

## The detector false-positived first

It fired an alarm almost immediately. Its criterion was "last consolidation more than ten days ago" — but during those ten days **capture had been working fine.**

Consolidation being late and learning having stopped are not the same condition. Consolidation is tidying; information keeps arriving whether or not it happens. One criterion couldn't separate the two.

So it got a second: **the number of memories updated in the last seven days.**

| Consolidation late | Capture | Verdict |
|---|---|---|
| Yes | **zero** | ⚠ Stalled |
| Yes | alive | ℹ Mild suggestion |
| No | — | Silent |

**Both axes have to be bad** before it alarms. If capture is alive, it downgrades.

The lesson: **the detector's false positive was a metric problem, not a detector problem.** "Time since last consolidation" was chosen because it's easy to measure — and it's a case where the easy-to-measure value isn't the one you wanted. I wanted "has learning stopped"; I was measuring "has tidying happened."

A detector that cries wolf **stops being read after a single false alarm.** That can be worse than being dead — a dead thing eventually gets caught, while an ignored one keeps running and stays useless.

## The first full run changed nothing

The first time it ran end to end: zero index mismatches, zero missed captures. Nothing to fix, so it updated the marker and stopped.

**If continuous capture is working, consolidation coming back as a no-op is the correct outcome.**

Had I not written that down in advance, I would have read it as "the loop does nothing" and built something else. Which is exactly the trap this project fell into the first time — **reading "nothing happened" as a malfunction and adding parts to fix it.**

So writing down the no-op as an expected result is part of the design. Fail to record what success looks like and you will misread success as failure.
