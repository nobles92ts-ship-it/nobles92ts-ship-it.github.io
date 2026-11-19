# Self-evolution loop

> A cron job that reads what I learned this week and rewrites its own memory. With a human gate.

- Headline number: weekly
- Status: wip
- Rendered page: https://aitryed.com/en/built/self-evolution/
- Other language: https://aitryed.com/ko/built/self-evolution/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

The self-evolution loop is a cron job that runs every Thursday morning, reads what I learned that week, and proposes how to rewrite my memory file. After posting the proposal it stops and waits for me.

## What a memory file is

When I give an AI work, I keep the things it needs to know in a file so I do not have to re-explain the background each time. This project is like this; in this situation, do that. The file loads automatically into every task.

## Memory only grows

Learn something new and it gets added. Nothing ever shrinks. Wrong entries stay, and so do entries that have gone unused for months.

As time passes the memory file gets larger, so what loads each time gets larger too, until it is too big to be read properly. Memory that only grows ends up as memory that is not read. That makes this loop's job closer to keeping the file small enough to still be loaded than to learning more.

## What it does each week

On Thursday morning it does four things in order. It reads that week's work records and works out what changed. Then it proposes edits to the memory file: merge these two, this one is now wrong, this one has gone unused for months, this one is new. Finally it stops and waits.

## The stop is the whole design

Version one applied its proposals automatically, and that was the mistake. The reason is a little subtle: the most recent note is not necessarily the most complete one.

Automatic merging chose the latest. That latest note was a single line written in a hurry, and underneath it sat an older, much fuller version. The fuller one was quietly discarded, and I found out much later.

## A human sits on the deleting

Getting an addition wrong hurts less, because it leaves one useless entry. Deleting cannot be undone, and it takes time to notice that something is gone, since you do not know until you need it. So the loop proposes and stops.

## Written up in three parts

The story from this loop is split into three pieces. The dead-channel piece covers how the sophisticated channel had quietly died and how my own diagnosis was wrong in two places. The four-tempos piece concludes that treating learning as one block was the real cause of the over-design. The detector piece is about the tool built to detect that death, which produced a false positive first.

## The detailed record starts here

Every Thursday morning it reads the week's sessions, works out what changed, and proposes edits to the memory files that get loaded into every future session — merge these two, this one is now wrong, this one has not been used in months, this is new.

Then it stops and waits for me.

## The gate is the design

Version one merged automatically. That was the mistake, and the reason was subtle: **the most recently written note is not the most complete one.** Automatic merge kept picking recency and quietly threw away the fuller version underneath.

Nothing about that failure produces an error. The file is still valid, the session still runs, and the thing you lost is something you no longer remember having written. That is the whole argument for the gate.

## Written up in three parts

| | The problem |
|---|---|
| [The dead channel](/en/built/self-evolution/dead-channel/index.md) | The sophisticated one died quietly — and my diagnosis was wrong in two places |
| [Four tempos](/en/built/self-evolution/tempo/index.md) | Treating learning as one block was the real cause of the over-design |
| [The detector](/en/built/self-evolution/detector/index.md) | The thing built to detect death false-positived first |

## What it protects against

Memory that only grows is memory that stops being read. The job of this loop is less "learn more" than **"stay small enough to still be loaded"** — deletions matter as much as additions, which is exactly the kind of judgement I do not want happening unattended.
