# Frame budget

> Almost all the cost is frames — and the budget triples while the length grows sixtyfold.

- Headline number: 100 max
- Status: wip
- Rendered page: https://aitryed.com/en/built/watch/budget/
- Other language: https://aitryed.com/ko/built/watch/budget/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

The cost of /watch looking at a video sits almost entirely in frames, the screen captures it takes. The frame budget triples while video length grows sixtyfold, and this page is about how that gap is handled.

## Nearly all the cost is in frames

The transcript, which is the speech written out as text, costs a few thousand units even for ten minutes, so it is effectively free. Pulling 80 frames costs 50,000 to 80,000 units, more than ten times the transcript. Doubling the resolution multiplies the per-frame cost by roughly four.

So there is a ceiling: 100 frames in total, at most 2 per second, shared out by the video's length.

## The budget triples and the length grows sixtyfold

Compare a 1-minute video with a 60-minute one. Length differs by 60 times, but the frames available top out at 100. Long videos get progressively sparser, and 60 minutes across 100 frames is one frame every 36 seconds. At that rate you see almost nothing.

## I assumed the transcript would be enough, at first

Transcripts are cheap and frames are expensive, so using transcripts only looked like the answer. It does not work. A presenter points at the screen and says <strong>"if you look at this value here"</strong>, and the transcript keeps only that sentence. Where "here" is and what "this value" was do not survive.

Game footage is worse. Almost nothing is said and the screen does all the work, so the transcript is empty. A transcript holds what was said and frames hold what was shown, and building needs the second.

## So long videos get cut

The tool's answer is to name a stretch. Looking at a chosen stretch densely beats sweeping an hour sparsely almost every time, and once a stretch is named the whole budget goes there.

Take a 60-minute video. Spread across 100 frames it gives one frame every 36 seconds, which shows you almost nothing. Name just 2:15 to 2:45 and 60 frames land in those 30 seconds, 2 per second (the ceiling), so nearly every movement is caught. The frame count is lower, yet where the frames are spent changes everything.

Usually what I want is not the whole video anyway but one moment, like "how did they do that effect".

## The same video is never run twice

A follow-up question within the same conversation does not re-run the video. The frames and the transcript are already in front of the AI, and pulling them again would pay the same cost twice. Without this rule, "look at that scene again" costs a full second run.

## The resolution stays where it is

The default is low. Doubling it multiplies per-frame cost by about four, so 80 frames would cost 200,000 to 300,000 units. More frames usually buy more than more pixels do. A blurry still shows the order of the actions, while too few frames means not seeing the action at all.

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

Sampling a long video sparsely is almost always worse than **sampling the part you need densely.** Name a range and the whole budget goes inside it — ask for 2:15 to 2:45 and 60 frames land in those thirty seconds. Two per second is a ceiling hard-coded in the script (ask for more with `--fps` and it gets cut back to 2), so sixty is the most a thirty-second range can get.

Same 60 frames, sixtyfold difference in coverage. Spread across thirty minutes it's one frame every thirty seconds; concentrated into thirty seconds it's two per second.

So a long video gets a question first: **which part.** The most wasteful tokens are the ones burnt before deciding that. And past ten minutes a warning prints, which the answer is required to repeat — because **having sampled sparsely is itself part of the result.**

## The same video is never watched twice

A follow-up question in the same session **does not re-run anything.** The frames and transcript are already in context; extracting them again is paying the same cost twice.

There's a reason that has to be written down as a rule. From the calling side, "new question, new run" feels natural — so leave it unsaid and the second question spends another 80k tokens.

## The resolution stays where it is

The default is 512px wide. At 1024 the per-frame token cost roughly quadruples, which puts **80 frames at 200–300k tokens.**

There is exactly one case worth raising it for: needing to read small text on screen. And even then, only **that range** goes up. Full-length high resolution makes the entire budget design meaningless.
