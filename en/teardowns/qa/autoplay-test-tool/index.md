# An autoplay test tool

> A bot that walks the map measuring performance. It detects being stuck as a contradiction in the data and clears false positives with two timers — both better than mine.

- Headline number: 2 of 4 techniques
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/qa/autoplay-test-tool/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/qa/autoplay-test-tool/index.md
- Source (Source video): https://www.youtube.com/watch?v=EDarROsi23w
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A bot that lives inside the game and measures performance with nobody watching. I do the same thing — and these people had stacked one more layer on top.**

> **[도판]** Only two constraints, and the whole design comes out of them. The philosophy didn't come first; the constraints did.
>
> Two constraints determined the whole design. There are about thirty graphics option combinations so hand measurement is impossible, and consoles cannot take external automation tools so it had to ship inside the game package. That is why it is designed to keep collecting data without stopping rather than to reproduce anything perfectly.

## Why a bot — because a person cannot walk the same line 30 times

To check whether a game stutters you have to **walk the same stretch at the same speed** and count how many frames get drawn.

The problem is there are **30 graphics settings.** Every change means measuring 30 times, and **each one has to be walked identically.** A person's gait varies, which makes **the comparison itself invalid.**

It's like stepping onto a scale in a different posture each time. Numbers come out; nothing can be compared.

So they built a bot. A bot **walks the same path at the same speed, every time.**

## I was already doing this — with a different way of judging

My job is also to release a bot into a map and **find where it gets wedged.** The judgement differed.

**My method**: *if position hasn't changed for N seconds, it's stuck.*

Simple and mostly right. It has a large hole: **deliberate stops count as stuck.** Waiting on dialogue, waiting for a door — all false positives.

## Their method — watch for "what it says and what it does disagreeing"

Here is the thing I took. They don't look at position alone, they look at **two things together.**

| Watched | Meaning |
|---|---|
| **Is it pushing to move** | Is the bot feeding a forward input |
| **Is it actually moving** | Is position actually changing |

And only when **those two disagree** does it become a stuck candidate.

- No push, no movement → **normal** (waiting)
- **Push, no movement** → **stuck candidate**

It is the difference between a car with the accelerator down that won't go, and a car that is parked. **Looking only at position, the two are identical.**

## Then one more layer — "two clocks must both ring"

A candidate is not yet a verdict. **Two separate clocks run.**

| Clock | Measures | Threshold |
|---|---|---|
| First | Time spent pushing without moving | 1.5s |
| Second | Time spent with distance-to-target not shrinking | 1.2s |

**Both must ring** to confirm. One alone is ignored.

Because each can ring during normal play: spinning on the spot rings the first, detouring rings the second. **Both ringing at once is rare in normal play.**

→ So **one layer produces candidates and the other clears false ones.** I had those two mashed into a single layer.

## And it tries three different ways before giving up on a route

I didn't take this, but it's well made.

1. Find a route **the usual way**
2. Failing that, **mark the frequently-wedging stretch as off-limits** and search again
3. Failing that, **ignore all elevation change** and prefer flat ground
4. All three fail — **teleport**

The last step is the good one. Rather than grinding on perfection they **decided in advance what "give up" does.** The purpose of this tool is **measuring performance**, not pathfinding, and the worst possible outcome is standing still all night stuck on a route.

## Two numbers I won't quote

**"1.5s and 1.2s"** — not used as-is. **The talk gives no reason for those values.** My bot speed and map scale differ, so **I have to measure my own.** Carry someone else's number without its basis and when it's wrong you won't know why.

**"48.9% performance improvement"** — this one is off-limits. That number was produced by **the optimisation work**, not by this tool. The tool only made it measurable. **Building a good ruler did not make anyone thinner.**

## What this piece cost me

**Even when you're already solving the same problem, the extra layer someone else stacked is visible.**

Judging stuck-ness by time wasn't wrong. I simply **hadn't separated the layer that produces candidates from the layer that clears false ones.** The moment I split them, **the cause of my false positives acquired a name** — *a deliberate, legitimate stop.*

Named things can be fixed. Unnamed ones stay as *it flags odd things sometimes.*

## The detailed record starts here

**Here was a better way to do something I already do.** A talk about building an **embedded unattended autoplay performance-test tool** for a console game. Measuring thirty graphics option combinations by hand on every build is impossible, so **a bot walks the map and measures performance itself.** I also turn bots loose on maps — and **their way of deciding a bot is stuck was more accurate than mine.** The difference is a few lines of code.

## What they built

**An unattended test bot that ships inside the game package.** Performance work is a loop of *"measure → change → measure again under the same conditions"*, and it doesn't work without **someone willing to recreate the same conditions thirty times.** So the bot does it.

**The console dictated the design.** On PC you attach a script from outside; **a console won't allow an external tool, for security and certification reasons.** So the automation has to live **inside the game**, and that premise decides everything after it.

They built four pieces — **pathing, combat, mission matching and architecture.**

| Piece | What it solves |
|---|---|
| **Pathing** | the bot losing its way or wedging itself in complex levels |
| **Combat** | target scanning eating frame time when dozens of monsters arrive |
| **Mission matching** | typos in hand-entered data breaking the match |
| **Architecture** | one stalled component halting the whole thing |

## The technique — being stuck as a contradiction in the data

**Pathing has three fallbacks.** ① standard path search → ② raise the cost of link segments known to snag to infinity and go around → ③ exclude all links and height changes, prefer flat ground. **If all three fail, teleport.**

**But the best part is how it detects being stuck.** The path search said *"passable"* and the character is actually wedged in a gap — that gets caught as **a contradiction between two values.**

- **There is acceleration** — movement input is still being applied. **The bot is trying to go.**
- **Planar speed is under 10cm/s** — it isn't actually going anywhere.

**Both true at once is physically contradictory**, and that is what being stuck looks like.

**And they add another layer here.** Teleporting immediately produces false positives — **a normal state where the character stopped on purpose** to use a skill or interact gets read as stuck. So it is only confirmed by **an AND gate over two timers.**

| Timer | What it measures | Threshold |
|---|---|---|
| Time accumulated with input but no motion | acceleration present + speed <10cm/s | **1.5s** |
| Time accumulated with no reduction in distance | walking on the spot against a wall | **1.2s** |

**Only the moment both cross is real.** One piece of simple logic removed an entire body of path-detour code.

The other two are practical too. **Combat runs a full scan only when the cache is empty** and refreshes just the nearest K afterwards — exploiting the fact that monsters come to you. **Mission matching uses edit distance instead of string equality**, treating 75% similarity as the same type. It exists to stop **one typo in hand-entered data from throwing the bot off its mission.**

## What broke

> **[도판]** The contradiction check and the AND gate are not solving the same problem. One produces candidates; the other removes false positives.
>
> The stuck-detection structure compared with mine. A contradiction between two values produces a candidate and an AND over two timers confirms it. My side judges on time alone, so a normal deliberate stop gets counted as stuck.

**Attaching numbers is this talk's strength.** It presents an optimisation case as **render-thread time down 48.9% on average and 42.6% at the 95th percentile**, and states that **the tool's own overhead peaks at 1.1ms per frame** against a 2ms target. **Measuring how much your measuring instrument disturbs the thing it measures, and publishing that too, is rare.**

**It also states its own limit** — **visual bugs are out of reach.** Performance comes out as numbers, but *"does the screen look wrong"* is invisible to a bot.

⚠ **But 48.9% is the effect of the optimisation work, not of the tool.** The tool **measured** that effect. Fuse the two in a citation and it becomes an overstatement.

⚠ **And the 1.5s and 1.2s thresholds have nothing behind them.** How they were chosen, and what false positives looked like at other values, is not in the talk. **These are numbers to re-measure in my environment, not to carry over.**

## Held against my own setup

**I also turn bots loose on maps to find places you fall through while walking.** But I was judging stuck **on time alone** — *"position unchanged for N seconds means stuck"*. Which means **I count normal deliberate stops as stuck.**

**The contradiction check is what my side lacked.** *"The input to move is there but nothing moves"* is **a signal position alone can never produce.** An unchanged position could be stuck or could be standing still — **look at the input alongside it and the two separate.**

**The AND gate is the layer after that.** A contradiction can still be momentary, so it is only confirmed **when both clocks cross together.** Mine has one layer, which means **candidate and confirmation were the same judgement.**

**Combat caching and mission matching don't fit my situation.** My bot doesn't fight, and there is nowhere I match mission names as strings.

## Verdict

| What | Verdict |
|---|---|
| **Contradiction check — read input and reality together** | **adopt.** A signal position alone cannot produce |
| **AND gate over timers to clear false positives** | **adopt.** Splits candidate from confirmation into layers |
| Three-stage path fallback | **hold.** My levels aren't complex enough to need it |
| Combat K-caching · edit-distance matching | **not applicable.** I don't have those problems |
| **The 1.5s and 1.2s thresholds** | ⚠ **not used as-is.** The talk gives no grounds — I re-measure in my environment |
| Citing the 48.9% | ⛔ **don't.** That's the optimisation's effect, not the tool's |

**The lesson I paid for here: even when you are already solving the same problem, you can see the extra layer someone else has stacked.** I was judging stuck by time, and that isn't wrong. It is only that **I never split the layer that produces candidates from the layer that removes false positives.** The moment I split them, **the cause of my false positives acquired a name** — *"a normal state where it stopped on purpose."*

And ⚠ **the habit of measuring how much your tool disturbs its subject** is worth taking wholesale. My own QA automation runs inside the game and can slow the game down, and **I have never measured that.**
