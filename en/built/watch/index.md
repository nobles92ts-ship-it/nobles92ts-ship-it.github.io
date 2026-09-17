# /watch

> Hand it a video and you get back a buildable design spec, not a summary.

- Headline number: video → spec
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/watch/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/watch/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Hand it a video URL and what comes back is not a summary but *a spec you can build from*.**

## How it runs

Give it an address and it:

1. Fetches the video
2. Pulls frames **at a rate matched to how fast the content moves** — sparse where it is static, dense where it changes
3. Gets **a transcript** from the captions — and if there are none, **transcribes the audio**
4. **Merges frames and transcript into one readable thing**

## The first version was useless

Stated plainly. The first build produced **a summary.**

A summary tells you **what happened.** That is what someone who is *not going to watch it* needs.

But I watch a video **in order to build something.** For that, a summary **carries nothing.**

| | What a summary gives | What I need |
|---|---|---|
| Content | *They explained the combat system* | ***There is one health bar and two people push it*** |
| Can I use it | **No** | **I can build that** |

So I **dropped summaries and made it produce a spec** — what does what, what the numbers are, what sits where on screen.

> **The same video gives two different artefacts depending on whether you ask "what was it about" or "how was it built."**

## Three problems

| | What the problem is |
|---|---|
| **Frame budget** | **Almost all the cost is in frames**, and video length grows without limit |
| **Transcript** | Having captions and not having them are **entirely different routes** |
| **Boundary and failure** | **A tool handling other people's videos** — what leaves the machine |

## Where it goes

**Sixteen runs so far.** The output goes to two places.

- **The analysis archive** on this site
- **The game project** — specs pulled out of someone's talk get implemented and tested there

The second is why the tool exists. **Watching a video and thinking *nice* leaves nothing.** It has to come out as a spec before there is a next step.

## The detailed record starts here

Give it a URL and it fetches the video, samples frames at a rate matched to how fast the content moves, pulls the transcript from captions — or transcribes it directly when there are none — and hands the whole thing over as one readable object.

## The first version was useless

It produced summaries. A summary tells you **what happened.** For someone watching in order to build something, that is worth nothing.

The fix was to ask what the video *demands*. Not "what is this about" but **"what would I have to build to produce this behaviour"** — mechanisms, state transitions, failure cases, the parts the presenter skipped. The output changed from a description into an input.

That one line determines the whole design. If you're producing a description, a transcript alone would do. **Producing a spec means you have to see the screen** — and the moment you look at the screen, the cost problem starts.

## Three problems

| | The problem |
|---|---|
| [Frame budget](/en/built/watch/budget/index.md) | Almost all the cost is frames, and video length grows without limit |
| [Transcript](/en/built/watch/transcript/index.md) | Having captions and not having them are entirely different paths |
| [Boundary and failure](/en/built/watch/boundary/index.md) | What a tool handling other people's videos sends outside |

## Where it goes

Sixteen so far, flowing to two places: this site's analysis archive, and [the game project](/en/built/moon-studio/index.md) — a spec pulled out of somebody else's talk gets implemented and tested there.

The loop is the point. Watch, extract, build, break.
