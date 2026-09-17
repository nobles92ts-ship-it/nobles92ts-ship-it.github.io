# Timing

> I measured where the three minutes go, leg by leg. Actual work was 14% of it.

- Headline number: 14%
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/claude-bus/timing/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/claude-bus/timing/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**I measured where the three minutes actually go. My own code accounted for 14% of it.**

## Before measuring, I did not know

I knew it took three minutes. **I did not know where.**

The instinct is **to suspect your own code first.** *Did I write something inefficient?* So **I measured.**

## The result

| Where | Time | Share |
|---|---|---|
| Sender → receiver (crossing + poll interval) | 46s | 24% |
| **Actual work** | **27s** | **14%** |
| **Receiver → sender (crossing)** | **118s** | **62%** |
| **Round trip** | **191s** | |

A second measurement gave 133s. **Two to three minutes is the right figure.**

## The bottleneck was not my code

**Work is 14%.** The other 86% is **files crossing.**

And within that, **the return leg alone is 62%.**

The outbound is 46s and the return is 118s. **Same distance, more than twice as long.**

## Which makes it a choice, not a tuning problem

The conclusion of the measurement.

However fast I make my code, **the maximum I can remove is 27 seconds.** Reduce it to zero and **164 seconds remain.**

> **If you need seconds, do not use this channel. That is not a tuning problem, it is having picked the wrong channel.**

That conclusion does not appear without measuring. Unmeasured, **you spend days on "let me optimise a bit more"** — and days of work move only inside those 27 seconds.

## And what the slowness bought

**It arrives even when the other side is asleep.**

A messenger is fast and **requires the other side to be awake.** This is slow and **the watcher keeps looking, so it wakes itself.**

Which means the two are **not competitors.** They belong in different places.

| What you need | Which channel |
|---|---|
| Back and forth right now | **A messenger** |
| **Handing a job to a sleeping machine** | **This bus** |

*Three whole minutes* reads as a flaw — until **the comparison is not a messenger but "nothing happens until morning."** Against that, three minutes is very fast.

## The detailed record starts here

I knew it was slow when I built it. **Where** it was slow I did not know until I measured.

## Broken out by leg

| Leg | Time | Share |
|---|---|---|
| sender → receiver (propagation + poll wait) | 46s | 24% |
| **actually doing the work** | **27s** | **14%** |
| receiver → sender (propagation) | 118s | 62% |
| **round trip** | **191s** | |

A second round trip measured 133s. **Two to three minutes is the honest number.**

## The bottleneck wasn't my code

Only 14% is work. The rest is a file crossing, and **the return leg alone eats 62%.**

The conclusion is the whole point of this page. **Shortening the poll interval will not turn this into seconds.**

Work out what dropping the poll from 60 seconds to 10 would do. The first leg loses its poll wait, so it drops maybe 20–30 seconds, and **the round trip goes from 191s to the 160s.** Six times more diligent code, buying 15%.

The return propagation that eats 62% isn't something I can touch. It's the sync tool noticing a file changed and pushing it to the peer, and that's decided by the tool's configuration and the network.

## So it's a choice, not a tuning problem

**If you need seconds, this is the wrong channel.** That's a channel-selection problem, not a tuning problem.

This conclusion matters because before measuring I believed the exact opposite. "The poll is a minute, so that must be what's slow" is the natural guess — and had I acted on it, I'd have **spent time on an optimisation with no effect** and then been baffled that it was still three minutes.

That's where breaking a measurement into segments earns its keep. The total alone gets you as far as "it's slow." **Splitting it gets you to "the reason is outside my code."**

## What it bought instead

In exchange for being slow, this channel has one thing. **It arrives even when the other side is asleep.**

A file placed in the sync folder crosses when the peer machine wakes, and the watcher picks it up. A chat app just accumulates messages while the recipient is off; here, **it proceeds automatically the moment they come back.**

Three minutes was the price for that. And that is [the entire reason](/en/built/claude-bus/index.md) this tool exists.
