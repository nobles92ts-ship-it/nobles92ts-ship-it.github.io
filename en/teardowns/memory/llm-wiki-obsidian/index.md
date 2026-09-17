# An LLM wiki in Obsidian

> I went looking for structure and came back with two hygiene rules. My layers were already finer than the video's, and the thing I wanted most I put on hold.

- Headline number: 4 overlap · 2 new
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/llm-wiki-obsidian/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/llm-wiki-obsidian/index.md
- Source (Source video): https://www.youtube.com/watch?v=ttrnbB_9LZI
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Someone put their company's knowledge in one place and pointed an AI at it. I went looking for structure and came back with two housekeeping rules instead.**

> **[도판]** The three motions on top matter more than the three layers. Whether the last one — inspect — exists is what separates setups.
>
> The three layers of an LLM wiki. Source material is preserved untouched, derived knowledge the model has read and organised accumulates in the wiki, and operating rules sit in their own layer. Three motions run on top of that: collect, query and inspect.

## The problem they solved — re-explaining the same background every time

A familiar friction with AI: **every new conversation starts with the background again.**

*Our company builds this, this project is at that stage, these are the rules…* — repeated each time. It adds up.

Their answer: **organise it once into a library and point the AI at the library.**

The line that carries it:

> **Stop re-entering knowledge. Compile it once and let it accumulate.**

## The library has three shelves

| Shelf | What goes on it |
|---|---|
| **Raw material** | Documents received, recordings, meeting notes — untouched |
| **Digested knowledge** | What was made from reading them |
| **Rules** | The agreements about how to file things |

Keeping the raw material matters. **Summarise it wrong and the original is still there to redo it from.**

## Five operating rules — this is the real subject

These were worth more than the structure.

| Rule | What accident it prevents |
|---|---|
| **Only finished things go in** | Drafts mixed in and **you no longer know what to trust** |
| **One source lives in exactly one place** | Multiple copies and **you cannot tell which is current** |
| **Unsure goes in the holding pen** | Hesitating over where to file it and **never filing it at all** |
| **Move, don't delete** | Deleting something you need later |
| **Log who accessed what** | You can trace what the AI based an answer on |

The third is unusually practical. It is **a rule that lets you defer a decision.** Once *I don't know where this goes, so it goes here* is allowed, **nothing gets dropped on the floor.**

## The most practical feature — record yourself working and get a manual

The technically interesting part.

Record your screen while doing a task and it captures **what you clicked and what the screen looked like**, and assembles **a written manual.**

Answering *how do I do this* normally means writing the manual separately. Here **you do the task once while recording and you are done.**

## But held against mine, my structure was ahead

Stated plainly:

| | Their setup | Mine |
|---|---|---|
| Shelves | 3 | **4** — split finer |
| Overnight tidy-up | Yes | Yes, **plus a human approval step** |
| Relationship view | Yes | **Already built** |

On structure alone, **there was nothing to learn.**

## And closing there would have cost me two rules

The part this piece paid for.

My structure was ahead and **my operating rules were behind.** Two of the five in the table above were missing from my setup.

- **One source, one place** — I removed duplicates after the fact. I had no rule preventing them appearing
- **Logging AI access** — with several paths sharing one configuration, I had no way to know what read what

→ What I took: **someone being ahead of you and behind you are mixed together in the same source.** Look only at where they are behind, close the book on *nothing to learn here*, and you lose everything on the other side.

## The thing I wanted most, I put on hold

The recording-to-manual feature was the one I wanted. **I did not take it.**

One reason: **I have hit that friction zero times.**

Take everything that looks good and **you accumulate machinery you never use.** So it is parked with a condition.

> **Reopen when I am actually blocked because a procedure was never written down.**

## What I will not cite

**None of this video's numbers.** There are no measured values. *Faster* and *easier* appear, with no statement of what was measured or how.

## The detailed record starts here

**I went for the structure and came away with two hygiene rules.** A 25-minute video shows a published structure — the **LLM wiki** — implemented in Obsidian with Claude Code. Source material, wiki and rules in **three layers**, building a company brain the model reads and organises itself. Held against mine, **my layers were already finer**, and my nightly check was already running with a human approval gate on top. What actually remained was **not structure but two operating rules**, and the one I wanted most I put **on hold.**

## What it is

**A case study of actually running a published structure.** The core proposition is one line on a slide — *"don't re-enter knowledge each time; compile it once and keep accumulating."* Instead of handing over material again and again, **you attach the model to a hub you built once.**

**He calls it a library and divides the space into five.** Workshop / library / personal vault / conversation channels / manual archive. **Work happens in the workshop, memory lives in the library, personal things in the vault** — and **only reviewed, finalised material moves into the library.** It has been running two or three months.

Five operating principles.

| Rule | What it means |
|---|---|
| **Finalised only** | Work in progress never enters the library |
| **One item, exactly one place** | No duplicates |
| **Unsure → inbox** | Defer the judgement, accept it now → auto-sorted overnight |
| **Move instead of delete** | Old things go to legacy, not to the bin |
| **Log the access** | Which model looked at what, and when, goes into a log file |

**A hygiene check runs at 3:15am and a weekly report lands on Monday.** But **the supervision is human** — the automatic check proposes improvements and a person reads them.

## The most practical technique was the recording

**It generates work manuals automatically from screen recordings.** A browser extension he wrote records a task while **capturing clicks, screenshots and narration**, then turns it into a markdown manual. The output is one document plus an image folder, and handing that folder over with *"add this to the wiki"* means **the original is preserved in the source layer and a separate derived page appears.**

The use case is clear — **onboarding, delegation, handover.** From then on, a request like *"summarise monthly revenue"* comes back **with wiki context and sources folded in.**

## What broke

**The structure isn't new, and the video doesn't hide that.** The three layers come straight from a published concept, credited up front. The value here is **not the concept but two months of operating notes.**

**There are no verifiable numbers, though.** Nothing measures how much better things got with the wiki attached, or how much hallucination dropped. *"Fewer hallucinations, higher accuracy"* is an opening-slide claim **with nothing behind it.**

**And the back half is a product pitch.** He launches his own app and points at a course — not a flaw, but **you have to read the operating-notes part and the promotional part separately.**

> **[도판]** Four overlapping rows doesn't mean there was nothing to learn. It means the place to look got narrower.
>
> The video's structure held against mine. Layers, nightly checks, graph view and a hub all already exist and mine are finer. Of the three that remained, two hygiene rules were adopted and the screen-recording manual was put on hold.

## Held against my own setup

**My layers were already split finer.** Where the video splits into three I use four, and my nightly check runs **with a human approval gate behind the automatic proposal.** The graph visualisation was already built too.

**So what remained wasn't structure, it was two rules.**

**One — one item, exactly one place.** My vault already has a recorded problem: **the same content stubbed out in several places.** *"When unsure, put it in the inbox and sort later"* prevents the problem from occurring at all — **it defers the judgement without multiplying the locations.**

**Two — the access log.** Right now **my main session, my scheduled runs and my messaging worker share one config folder.** Nothing records who read or changed what, so when something drifts, **finding the culprit costs time.** One log file covers it.

**Three — the screen-recording manual is on hold.** It was the thing I wanted most, and auto-documenting QA reproduction steps with clicks and screenshots sounded immediately usable. But **this is an item I already evaluated once and deferred.** The reason not to push it still holds — **nothing is actually blocked today by reproduction steps going unwritten.** With a friction sample of zero, bringing in a tool leaves you with only the cost of maintaining it.

## Verdict

| What | Verdict |
|---|---|
| **One item one place · unsure → inbox** | **adopt.** Prevents duplicates instead of catching them afterwards |
| **Model access log** | **adopt.** Needed now that several paths share one config |
| Screen recording → manual | **still on hold.** Friction sample of zero<br>Reopens: when something is **actually** blocked by an unwritten reproduction step |
| Three-layer structure | **already have it.** Split into four |
| Nightly check · graph view · hub | **already have it** |
| Citing its numbers | ⛔ **don't.** Nothing here was measured |

**The lesson I paid for here: where someone is ahead of you and where they are behind sit inside the same material.** My structure was ahead; **my operating rules were behind.** Look only at the structure, close it with *"I have all this already"*, and both rules are gone.

And ⚠ **the thing you want most is not the thing you need most.** The screen-recording manual was the most impressive part of this video, and **my friction sample was zero.** Fail to separate impression from need and the tools simply multiply.
