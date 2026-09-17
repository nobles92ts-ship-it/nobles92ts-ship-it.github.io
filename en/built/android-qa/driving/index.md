# Driving and judging

> Driving happens by sight; judging happens by log. Moving the verdict off the pixels was the biggest improvement.

- Headline number: RPC > screen
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/android-qa/driving/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/android-qa/driving/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A game screen has no handles, so it gets pressed by sight, like a person. But trying to *judge* by sight as well was badly wrong. Moving the verdict off the pixels and onto the log was this project's biggest improvement.**

> **[도판]** Driving happens by sight; judging happens by log. Judging by vision was the biggest mistake in this project.
>
> Two paths leave the device. The upper drive path goes screenshot to vision to coordinate tap. The lower verdict path reads the engine's file log for RPCs and state transitions. A dashed line marks the abandoned original path from vision to verdict.

## Pressing has to be done by sight

With no named parts on screen, it **takes a picture, decides "there," and presses.** The same as a person.

There is no alternative. **For driving, sight is still the only method.**

## But judging cannot be done that way

At first it was. Press, then **confirm from a picture that the screen changed.**

**That was the single most wrong call in this project.**

## Why judging by screen fails — it cannot separate two things

The screen shows **only the outcome.** Which makes these two **look identical.**

| What is actually true | On screen |
|---|---|
| **It was processed correctly** | Moves to the next screen |
| **Processing failed and the screen moved anyway** | **The same next screen** |

And the reverse also happens.

| What is actually true | On screen |
|---|---|
| **It worked**, but the animation is slow | **Looks like a failure** |
| A real failure | Does not change |

So **the same screen can mean different things, and the same thing can look different on screen.**

## So I moved to reading logs — and I had declared that impossible

Where this cost something.

I first concluded **"logs cannot tell me the game's internal state."** My grounds were that **the standard logging channel was blocked.**

But that was **one channel being blocked**, not the absence of logs. Through another channel, **everything the game exchanged with its server** was being recorded.

That contains far more than the screen ever shows — **what was requested, what the server answered, success or failure.**

**Better evidence than the screen was available the whole time**, and I had **taken one blocked door as proof there were none.**

## So the structure now

| Step | By what |
|---|---|
| **Pressing** | The screen (no alternative) |
| **First choice for judging** | **The record of traffic with the server** |
| **Second** | Other records the game leaves |
| **Last resort** | The screen |

The screen was not discarded. **It moved to the bottom of the list.**

## Where it still bites

Written down honestly. Four things remain.

**One — "stopping with nothing happening" does not show up in an error counter.**

Errors can be counted. But sometimes **nothing fails and it simply stops.** Nothing failed, so the counter reads zero.

So **how much the screen changes** is measured separately, and **when it stops changing it attempts staged recovery** before cutting the run.

**Two — a picture has to be taken *before* the first press.** A freshly started process has no screen-scale information until one capture fills it in.

**Three — restarting re-exposes old records.** So **the records have to be cleared and read from the start.** Otherwise **last night's result gets read as tonight's.**

**Four — the first screen can only be measured from a truly fresh state.** Auto-login runs straight through on a remembered account, so **seeing what a first-time user sees** requires wiping the app data and starting again.

## The detailed record starts here

With no handles on the screen, the path has to look like this.



## The best improvement was moving the verdict

I started out certain that logs couldn't tell me anything about game state, because the standard log channel was suppressed.

**Wrong.** Only that one channel was suppressed. **The engine writes its own file log on the device, and it contains the full state-machine transitions and every RPC sent and received.**

That set the evidence order.

> **Received RPC > state transition > screen**

## Why the screen comes last

Pixels cannot separate two things.

- **A loading spinner from a frozen frame** — both are "a picture that's animating"
- **Two states that render identically** — a screen showing a request in flight and one that already failed and returned can look the same

Logs separate them. If there's a record of the request going out and a record of the response arriving, **the state is determined regardless of what's on screen.**

And only after the verdict moved from pixels to logs did **unattended long runs become possible.** Vision-based judging calls a human on an ambiguous screen — and unattended, there is nobody to call.

## Vision stayed on the driving side

Removing it from judging didn't mean discarding it. **Driving still has nothing but vision.**

It's the only way to know where a button is. But driving and judging have different requirements.

- **Driving recovers from being wrong.** Tap the wrong place and the screen doesn't change; noticing that, it looks again.
- **Judging becomes the result when it's wrong.** A case wrongly marked PASS is never revisited.

So **vision sits where being wrong is survivable, and logs sit where it isn't.** Using one tool for both purposes while demanding different reliability from each doesn't hold up.

## Where it still bites

- **A silent freeze doesn't trip the error counter.** Nothing fails; it just stops. So screen-change magnitude is tracked as its own axis, with staged recovery and a hard cut when nothing moves
- **Capture before you tap** — a fresh process has no screen-scale state yet
- After a restart, the previous session's log resurfaces before rotation. Delete it and read from offset zero
- The auto-connect chain runs straight through on remembered credentials, so first-screen cases are only measurable from a cleared-data cold boot
