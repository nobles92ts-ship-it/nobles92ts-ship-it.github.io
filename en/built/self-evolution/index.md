# Self-evolution loop

> A cron job that reads what I learned this week and rewrites its own memory. With a human gate.

- Headline number: weekly
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/self-evolution/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/self-evolution/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Every Thursday morning it reads what I learned that week and *proposes* how to rewrite my memory file. Then it stops and waits for me.**

## First — what a memory file is

When I give an AI work, I keep the things it needs to know in a file so **I do not re-explain the background each time.** *This project is like this. In this situation, do that.*

That file **loads automatically into every task.**

## Which creates an obvious problem

Memory **keeps growing.** Learn something and it gets added.

**It does not shrink.** Wrong entries are not removed. Entries unused for months are not removed.

So:

| As time passes | |
|---|---|
| The memory file | **Gets larger** |
| What loads every time | **Gets larger** |
| **Eventually** | **Too large to be read** |

> **Memory that only grows ends up being memory that is not read.**

Which makes this loop's job closer to **"keep it small enough to still be loaded"** than **"learn more."**

## What it does weekly

Thursday morning:

1. Reads that week's work records
2. Works out what changed
3. **Proposes edits to the memory file** — *merge these two. This is now wrong. This has gone unused for months. This is new.*
4. **Stops and waits**

## Step 4 is the whole design

Version one **merged automatically.** **That was the mistake, and the reason is subtle.**

> **The most *recent* note is not the most *complete* note.**

Automatic merging **chose the latest.** And the latest was a one-line note written in a hurry, **with a much fuller version underneath it.**

**It was quietly discarded.** And **I found out much later.**

## Which is why a human sits on the deleting

**Getting an addition wrong hurts less.** One useless entry exists.

**Deleting cannot be undone.** And **noticing something is gone takes time** — you do not know until you need it.

So this loop **proposes and stops.**

## Written up in three parts

| | What the problem is |
|---|---|
| **The dead channel** | **The sophisticated one had quietly died**, and the document diagnosing it was wrong in two places |
| **Four tempos** | Treating learning as **one block** was the real cause of the over-design |
| **The detector** | The thing built to detect death **false-positived first** |

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
