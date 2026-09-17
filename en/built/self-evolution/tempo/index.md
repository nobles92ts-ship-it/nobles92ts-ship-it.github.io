# Four tempos

> Treating learning as one block and automating the whole block was the real cause of the over-design.

- Headline number: 4 tempos
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/self-evolution/tempo/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/self-evolution/tempo/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The real reason the original plan was over-designed: I treated "learning" as one block and tried to automate the block.**

## Split apart, there were four tempos

Read *learn and apply it* as one thing and you build **one automation.**

Split apart, there were **four, and they behave completely differently.**

| Tempo | When | How automatic | Why |
|---|---|---|---|
| **Capture** (writing it down) | Continuously, during work | **By hand** | **The only door new information comes through** |
| **Consolidate** (merge and delete) | Weekly | **Human approval** | **Deleting is a judgement** |
| **Apply** (read and use) | Every task | **Fully automatic** | **No judgement, so it is safe** |
| **Watch** (is it dead) | Weekly | **Fully automatic** | **Changes nothing, only reports** |

**All four tolerate different amounts of automation.** Treated as one block, you end up **matching the most dangerous, or matching the safest.** Both are wrong.

## Why capture is not automated

It is the one you most want to automate. Summarise at the end of each task and drop it into memory.

But it is **the only door through which new information arrives.**

Automate the summarising and **the AI picks what looks important.** And its criteria **are not mine.**

| | What an auto-summary keeps | What I want kept |
|---|---|---|
| What went well | **Keeps it well** | Not very important |
| **Why I got something wrong** | **Rarely kept** | **The most important** |
| Decisions not taken | Not kept | **Important** |

**"Why I did *not* do this"** never survives an automatic summary. It did not happen, so it is not in the record. **And that is what I need most later.**

> **When there is only one door, what you let through it determines everything downstream.**

## Why only consolidation carries a gate

It is the only one of the four with a human on it. Because **it deletes.**

| | If it goes wrong |
|---|---|
| Apply (reading) | **Nothing changes** |
| Watch (alerting) | **One false alarm** |
| **Consolidate (merge and delete)** | **Cannot be undone** |

And **noticing a deletion takes time.** You do not know until you need it.

## Why apply is fully automatic

The inverse: **zero judgement.** It **reads settled memory and loads it.**

Nothing to choose, nothing to delete. **There is no room to be wrong.**

**A place with no judgement is safe to automate.** And usually those are the places that run most often.

## And why the watcher is also fully automatic

It **changes nothing and only reports.**

That is the condition for safety. **Automation that fixes is dangerous; automation that reports is safe.**

A false alarm costs **one check.** A wrong fix costs **undoing the fix.**

## In summary

What was wrong with the original plan: **seeing four things as one and trying to make all of it automatic.**

Which puts **the deletion judgement on automatic too.** That is the accident in the previous piece.

**Split apart, each one has its own right answer.** Before splitting there was only **the wrong question — "automatic or manual."**

## The detailed record starts here

This is the real reason the original plan was over-designed. **It treated "learning" as one thing and tried to automate the whole thing.**

Split apart, there are four tempos, and how much automation each can take is different in every case.

| Tempo | When | Automation | Why |
|---|---|---|---|
| **Capture** | continuously, in-session | by hand | The only point where new information enters |
| **Consolidate** | weekly | human-approved | It involves deciding what to delete |
| **Apply** | every session | fully automatic | Safe because no judgement is involved |
| **Watch** | weekly | fully automatic | Changes nothing, only reports |

**The human only has to hold the places where judgement lives.** The other three can be automatic without dying quietly — because the fourth one is watching.

## Why capture isn't automated

It's the place you most want to automate. Summarise at the end of every session and drop it into memory.

That isn't what happens. When a session ends, **candidate notes are appended unprocessed.** No summarising, no judging. No model is called, so the cost is zero.

The reason is the lesson from [the dead channel](/en/built/self-evolution/dead-channel/index.md). Make capture an automatic summary and **nobody ever looks at what the summary left out.** And that only surfaces months later, when the thing you needed isn't there.

In the current structure, summarising happens when I write the memory. It takes hands, so it stays in view.

## Why only consolidation has a gate

Of the four, exactly one has an approval gate. The other three don't.

The criterion is **reversibility.**

- Capture only appends, so deleting undoes it
- Apply is a read; it changes nothing
- Watch only sends a notification
- **Consolidation deletes.** And a deleted note has no way back

Deciding what to delete is a judgement, and it's the kind of judgement where **there is no way to learn it was wrong.** So that's the one a human looks at.

## Why apply is fully automatic

Injecting memory into every session is automatic, because there's no judgement in it — files get read and inserted, and what gets inserted was already decided.

There's a lesson in that. **"Can this be automated" is decided by whether judgement is involved, not by frequency.** Apply runs dozens of times a day and is fully automatic; consolidation runs weekly and has a gate. Wanting to automate the frequent thing is natural, but frequency isn't the criterion.

## The watcher is what protects the other three

The watcher fixes nothing. It **reads and reports.**

But its existence is what lets the other three be automatic. The reason the previous machine could stay dead for months was that producing nothing had no consequence, and the watcher plugs exactly that hole.

Multi-machine handling lives here too. It's registered on both machines but **only runs on the designated one.** Otherwise the same notification arrives twice, and a notification that arrives twice quickly becomes one nobody reads.
