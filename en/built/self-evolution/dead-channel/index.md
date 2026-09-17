# The dead channel

> The sophisticated one had been dead for months — and the document diagnosing it was wrong in two places.

- Headline number: 20.6MB
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/self-evolution/dead-channel/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/self-evolution/dead-channel/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**There was already a device for the same purpose. It was more sophisticated. And it had been *quietly dead* — for months, with nobody noticing.**

## What was there

Before this loop there was another device for the same job. **And it was better designed.**

1. **Observe automatically while working** and accumulate
2. **Distil patterns** out of what accumulates into "instincts"
3. Those instincts inform later work

**Entirely automatic.** No human action required.

## What I found on opening it

| Part | State |
|---|---|
| 1 (observing) | **127 files, 20.6MB accumulated** |
| **2 (distilling)** | **Never ran** |
| 3 (instincts) | **Zero** |

**The front half ran hard and the back half never ran at all.**

And **nobody noticed for months.**

## Why nobody noticed — "because no error occurred"

The core of this piece.

**Had an error occurred** there would have been red text, and I would have seen it.

**No error occurred.** It simply **did not run.** And **not running looks exactly like running well** — both are silent.

## "Automatic things die" sounds backwards, and the mechanism is simple

*Automatic means less to forget, so surely it lasts longer.* The opposite.

| | Manual | Automatic |
|---|---|---|
| When it does not run | **I know I did not do it** | **Nothing happens at all** |
| When there is no output | **I notice** | **I assume that is normal** |

Manual work **announces its own absence.** Automatic work **does not.** It is automatic, so I had stopped paying attention.

> **Automation is built so you do not have to pay attention — which also means it is built so you will not notice when it dies.**

## And my own diagnosis was wrong in two places

I put the design document describing the problem through **an adversarial review**, and **two of the things I had written down as problems were not true.**

Finding something dead pushes you to **write down why it died quickly.** And that explanation gets filled in with **whatever sounds plausible, unverified.**

**The excitement of finding the fault lowers the accuracy of diagnosing it.**

## And 20.6MB was syncing to a cloud backup

The most alarming part.

The observer stored **what was read, what was fetched and what tools returned — verbatim.**

| What was absent |
|---|
| **No separation by provenance** |
| **No masking of secrets** |

And those 20.6MB were **quietly syncing to a cloud backup.**

Three things compound badly.

1. **Stored verbatim** — nobody knows what is in it
2. **Unused** — since step 2 never ran, it **only accumulated**
3. **Leaving the machine** — via backup

So **data nobody uses, unfiltered, was leaving the machine.**

*Collected to use and never used* had become **not merely waste but a risk.**

→ What I took: **when you build something that collects, decide what happens if it goes unused before you decide what it collects.**

> **[도판]** The top one was fully automatic, so nobody ever looked at it. The bottom one needed hands, so it stayed in view.
>
> Two channels compared. The fully automatic, sophisticated observation pipeline accumulated 127 files and 20.6MB but its distiller never ran, so it died quietly with zero instincts. The simple hand-written memory files are injected into every session and are still running.

## The detailed record starts here

Before designing this loop I already had a machine for the same job: a pipeline that observed sessions automatically, accumulated them, and distilled patterns out into "instincts." Fully automatic via hooks, and carefully designed.

When I opened it up, **127 files and 20.6MB of observations had piled up, and the distiller had never run once.** Zero instincts. Nobody noticed for months — because nothing errored.

The thing running well right next to it was far simpler: memory files written by hand. Injected into every session, actually read, and corrected by me when wrong.

That inverted the lesson. **It died because it was fully automatic, and the other lived because it took effort.** My original plan was written on exactly the opposite lesson — revive the dead one, then stack more automation on top.

## Why automatic things die

"It died because it was automatic" sounds backwards, but the mechanism is simple.

**Anything automated drops out of the observed set.** Things that need hands come into view every time you put hands on them. I write the memory files myself, so I know immediately when I stop. The observation hook ran on its own, so **there was no way to know it had stopped.**

And the structure had **no consequence for producing nothing.** If the distiller doesn't run, the instinct file just doesn't appear — and sessions run fine without it. A failure with no cost is a failure that persists.

## My initial diagnosis was wrong in two places

I put the design doc through an adversarial review, and two of the problems I had written down turned out not to be true.

- **"Observations aren't accumulating"** → wrong. 20.6MB were sitting right there. The real cause wasn't a failing hook, it was **a distiller that never ran.** I had been pointing at entirely the wrong repair.
- **"The always-injected index is 3–4KB"** → wrong. Measured again, it was **16.8KB — 4.2× over budget.** The bodies, 98 files, came to 370KB, which is physically impossible to always inject, and the on-demand retrieval was never wired up at all.

A plan built on the wrong cause fixes the wrong thing, no matter how carefully it's designed. **Those two corrections deleted half the plan.**

The lesson: when diagnosing your own system, the dangerous part isn't what you don't know — it's **what you think you know.** I had "observations aren't accumulating" as a premise without ever having measured it.

## And that 20.6MB was syncing to backup

The observation hook captured whatever was read, fetched, or returned by a tool — **verbatim.** No source tagging, no secret masking. And all 20.6MB of it was quietly syncing to cloud backup.

"Only after human approval, and exclude anything from outside" was written plainly in the design doc. **The code enforcing it was zero lines.**

A rule that exists only in the document isn't a rule. And this case is worse than most, because **nobody was reading it, so there wasn't even a violation** — violating a rule requires knowing it, and code doesn't know rules.

The cleanup was simple: turn off two dead hooks, delete the 20.6MB and 127 empty shells, run a secret scan. The scan came back at zero — but **that was luck, not design.**
