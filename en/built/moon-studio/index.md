# MOON Studio

> A one-person + AI game studio. Every game gets a slot; exactly one slot currently has anything in it.

- Headline number: 5 games
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**I build alone and the AI writes most of the code. That is what this game studio is.**

## A studio is not one game

The most important decision here.

Building alone, you normally arrange the folders and the rules **around the one game.** It looks obvious. **It is the only thing being built.**

And then **the day a second game arrives, all of it has to be rebuilt.**

So **every game gets a slot** from the start, and **inside each slot the work splits four ways** — design, spec, art, verification.

| Slot | What | State |
|---|---|---|
| **Wuxia game** (working title) | A pattern-reading action RPG | **Main · in progress** |
| Future game 1 | **Does not exist yet** | Empty |
| Future game 2 | **Does not exist yet** | Empty |

## Why the empty slots are built first

*Why make a slot for a game that does not exist.*

Because **an empty slot makes an assumption visible.**

With one slot, **the assumption "there is one game" seeps into the code everywhere.** And **it is invisible** — with only one, nothing goes wrong.

With three slots standing there, **that assumption breaks immediately.** You start asking **"could this setting differ per game?"** — **now.**

> **An empty slot is not waste. It is an assumption made visible.**

## Started and stopped — these get no slot

There are things worked on besides the three above. **They deliberately get no slot.**

Because **a slot makes them look "in progress."** In fact they are **things that stopped because there was no reason to carry on.**

| Project | How far | Why it stopped |
|---|---|---|
| Wuxia world (working title) | Skeleton complete | **The main project changed** before playtesting |
| Tower defence | Wave design and balance verified | **Building it was the point, and that was achieved** |
| Water-flow puzzle | 100 levels, all verified solvable | Same as above |
| Following a beginner course | In progress | **It is for learning, so it has no end** |

Look at rows two and three — **they stopped because the purpose was met.** Those are not failures.

**Writing down why each stopped matters.** Without it, they all get remembered later as **"the failed ones."** They are nothing alike.

## Why this is public

Not because it is finished.

> **Because it is the only build I can break in public.**

My day-job output belongs to a company, so **I cannot write about it in detail.** What broke and how, where I was wrong — none of it can be written.

This game is mine, so **all of it can be written.** What broke, what I judged wrongly, what I deleted.

**You need something you can take apart in public before you can write about taking things apart.**

## The detailed record starts here

Built solo, with most of the code written by AI. That's the studio.

A studio is not one game. So **every game gets its own slot, and each slot is divided into design, spec, art and QA.** One slot currently has anything in it.

The parts don't come in the same number for every game. The wuxia game has one more — **Client** — and that's correct: **a client part exists only where there is code.** Put one under a game that doesn't exist and it isn't empty, it's a lie.

| Slot | What it is | State |
|---|---|---|
| **[Wuxia game](/en/built/moon-studio/wuxia/index.md)** (working title) | Pattern-form action RPG. Unity 6 · URP · toon shading | **Focus · in progress** |
| [Future game 1](/en/built/moon-studio/future-1/index.md) | Doesn't exist yet | Empty slot |
| [Future game 2](/en/built/moon-studio/future-2/index.md) | Doesn't exist yet | Empty slot |

## Why the empty slots are built first

Shape a studio around one game and **the day a second one arrives, all of it gets rebuilt.**

This site did exactly that. Design, spec, client, art and QA hung directly off MOON Studio. It read fine — but that layout had baked **the assumption of a single game** into the folder structure rather than into a sentence. The moment there are two games, every address changes and every link anyone made from outside dies with it.

So the level got built while there is still only one game. **An empty slot isn't waste; it's an assumption made visible.** An empty slot tells anyone "nothing here yet." No slot at all reads as "this studio has one game" — and that was the false one.

The empty slots carry design, spec, art and QA too. Each one records, in a line, **which of the lessons paid for in the wuxia game can actually travel** to the next one.

## Started and stopped

Other things got built besides those three. They don't get slots. **They stopped because there was no reason to keep going** — a slot would make them look active.

| Project | How far | Why it stopped |
|---|---|---|
| Wuxia *jianghu* (working title) | Skeleton done | The focus shifted before playtesting |
| Tower defence | Wave design and balance verification, full run | Building one was the point, and that was achieved |
| Water-flow puzzle | 100 levels, every one verified solvable by solver | Same |
| Course port | In progress | It's for learning, so there's no finish line |

Leaving them visibly unfinished seems more honest than presenting them as though they were finished.

## Why this is here

Not because it is finished. Because it is **the one build I can break in public.**

Everything else I test belongs to somebody else. The findings are real, the numbers are real, and none of it can leave the building. This one is mine, which makes it the place where a technique gets to be shown rather than described.

So the studio is a hobby and **a test bench** at the same time. Verification methods get broken here first, and only the survivors go into the pipelines at work. Things like "when zero means two different things, the test passes a broken build" crossed over that way.
