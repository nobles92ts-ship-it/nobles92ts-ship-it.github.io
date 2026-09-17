# Frame budget

> Almost all the cost is frames — and the budget triples while the length grows sixtyfold.

- Headline number: 100 max
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/watch/budget/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/watch/budget/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Almost all the cost is in frames. And the budget triples while the video length grows sixtyfold.**

## The cost structure is very simple

| What | Cost |
|---|---|
| **The transcript** (speech as text) | **A few thousand units even for ten minutes** — effectively free |
| **Frames** | **All of it** |

In numbers: 80 frames costs **50,000 to 80,000 units.** **More than ten times the transcript.**

And **doubling the resolution multiplies the per-frame cost by roughly four.**

## So there is a ceiling

**100 frames total, at most 2 per second.** Within that, the budget is allocated by length.

## And here is the problem — "budget triples, length grows sixtyfold"

Why the ceiling is hard.

| | A 1-minute video | A 60-minute video |
|---|---|---|
| Length | 1× | **60×** |
| Frames available | A few | **100 (the ceiling)** |

**Length grows sixtyfold and the budget does not.** Which makes long videos **progressively sparser.** Sixty minutes across 100 frames is **one frame every 36 seconds.**

At one frame every 36 seconds **you see almost nothing.**

## "Surely the transcript is enough" — I thought so too

Transcripts are cheap and frames are expensive, so why not use transcripts only.

**It does not work.**

A presenter points at the screen and says **"if you look at this value here."** The transcript keeps **that sentence only.** **Where "here" is and what "this value" was do not survive.**

Game footage is worse. **Almost nothing is said and the screen does all the work.** The transcript is empty.

> **A transcript holds what was said; frames hold what was shown. Building requires the second.**

## Which is why long videos get cut

This is the tool's answer.

**Looking at a chosen stretch densely beats sweeping an hour sparsely, almost always.**

Name a stretch and **the whole budget goes there.**

| Approach | Result |
|---|---|
| 60 minutes across 100 frames | **One frame every 36 seconds** — you see almost nothing |
| **2:15 to 2:45 at 3 per second** | **90 frames in those 30 seconds** — nearly every movement is caught |

The same 100 frames, and **where they are spent changes everything.**

And usually **what I want is not the whole thing but one moment** — *how did they do that effect.*

## The same video is never watched twice

A follow-up question **within the same conversation does not re-run it.**

The frames and the transcript are **already in front of it**, and pulling them again is **paying the same cost twice.**

Without this, **"look at that scene again" costs a full second run.**

## The resolution stays where it is

The default is low. **Doubling it multiplies per-frame cost by about four**, making **80 frames cost 200,000–300,000 units.**

And usually **more frames buys more than more pixels.** Blurry still shows **the order of the actions**; too few frames means **not seeing the action at all.**

> **[도판]** Left is the budget; right is how many frames per second that budget actually buys. The left side triples while the right side drops to a seventeenth.
>
> Frame budget and effective frame rate by video length. The budget grows only about threefold, from 30 frames at 30 seconds to 100 frames at 30 minutes, while length grows sixtyfold, so the effective rate collapses from 1 frame per second to 0.06.

## The detailed record starts here

The cost structure is simple. A transcript for a ten-minute video costs a few thousand tokens. **The frames are everything** — 80 of them at 512px wide runs 50–80k tokens, and raising the resolution to 1024 roughly quadruples the per-frame cost.

So there is a ceiling: **100 frames total, 2 fps.** Within that, the budget is allocated by duration.

The problem is visible there. **The budget grows about threefold, from 30 frames to 100. The length grows sixtyfold.** Hand it a thirty-minute video whole and you are looking at **one frame every eighteen seconds.** Everything in between is known only from the transcript.

## Even with a transcript, you need the frames

"Wouldn't the transcript be enough?" was my own first thought too. Transcripts are cheap and frames are expensive.

It isn't enough. **Too much never gets said out loud.** Screen layout, which button sits where, which way a graph bends, what actually moves in the demo — the presenter says "as you can see here" and moves on. What survives in the transcript is the word "here."

And for someone watching in order to build, **the "here" is usually the part that matters.** So the frames get bought, expensive as they are.

## Which is why long videos get cut

Sampling a long video sparsely is almost always worse than **sampling the part you need densely.** Name a range and the whole budget goes inside it — 2:15 to 2:45 at 3 fps puts 90 frames into those thirty seconds.

Same 90 frames, sixtyfold difference in coverage. Spread across thirty minutes it's one frame every twenty seconds; concentrated into thirty seconds it's three per second.

So a long video gets a question first: **which part.** The most wasteful tokens are the ones burnt before deciding that. And past ten minutes a warning prints, which the answer is required to repeat — because **having sampled sparsely is itself part of the result.**

## The same video is never watched twice

A follow-up question in the same session **does not re-run anything.** The frames and transcript are already in context; extracting them again is paying the same cost twice.

There's a reason that has to be written down as a rule. From the calling side, "new question, new run" feels natural — so leave it unsaid and the second question spends another 80k tokens.

## The resolution stays where it is

The default is 512px wide. At 1024 the per-frame token cost roughly quadruples, which puts **80 frames at 200–300k tokens.**

There is exactly one case worth raising it for: needing to read small text on screen. And even then, only **that range** goes up. Full-length high resolution makes the entire budget design meaningless.
