# Is it broken, or not there yet?

> In version documentation, half the feature description is wrong within six months. The date it appeared never is. And the date is usually what a verdict needs.

- Headline number: when
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/verdicts/version-docs/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/verdicts/version-docs/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Seeing something not work, how do you decide whether it is *broken* or *not built yet*. The answer turned out to be in the version documentation.**

## The problem

Testing, you find something that does not work. **It can be two things.**

| Possibility | Then |
|---|---|
| **A defect** | It has to be fixed → file it, assign someone |
| **A feature not built yet** | **There is nothing to fix** → filing it is a nuisance |

**From the outside they look identical.** Both are *I pressed it and nothing happened.*

And getting it wrong is expensive. File an unbuilt feature as a defect and **a developer spends time confirming "that feature does not exist."**

## So where do the grounds come from

You look at the specification. But a specification records **what will be built**, not **whether it was.**

So you look at **the version documentation (the changelog).**

## But half of that is wrong too

The heart of this piece.

Split what is in a changelog into two kinds.

| What | After six months |
|---|---|
| **Feature descriptions** (*this behaves like so*) | **About half are wrong** — it changed afterwards |
| **When it appeared** (*this landed in version X*) | **Never wrong** — the past does not change |

And **what a verdict needs is usually the second.**

I am not asking *how should this behave now.* I am asking **is this feature even in this build.**

> **Descriptions go stale and dates do not. And what separates a defect from an unbuilt feature is the date.**

## Which is why the newest document does not supersede the old one

The consequence.

You normally read **only the latest document.** Latest should be most accurate.

But **the latest document usually does not say when something arrived.** It describes the present state only.

**When it arrived exists only in the document from that time.** So **old documents must not be thrown away.**

| | How it behaves now | When it arrived |
|---|---|---|
| The latest document | **Present** | Usually absent |
| **The document from that time** | Stale | **Present** |

## The honest limit

This method has a hole.

**Some things go in without being recorded.** Small changes often leave no entry.

So the method is **"if it is written, it is certain; if it is not, I do not know."** **Not "not written, therefore absent."**

Keeping that distinction matters. **Using an absent record as evidence of absence is a mistake.**

## The detailed record starts here

Engine manuals and release notes are **the fastest-rotting material there is.** Six months in, half of it is wrong — APIs renamed, behaviour changed, things removed.

One thing doesn't rot. **When it appeared.**

## This isn't trivia, it's grounds for a verdict

The reason "added in 6.4" matters in QA is that when something won't reproduce, **that single line is what decides whether it's a defect.**

One symptom can mean two things.

- Something that should work doesn't → **a defect**
- This version doesn't have it yet → **not a defect**

You cannot tell them apart by looking. On screen they are both "it doesn't work." Logs don't help either — a feature that isn't there doesn't throw, it just does nothing.

So when something won't reproduce, **suspect the version first.** Skip that order and you end up filing a bug report against a feature that does not exist, which is the kind of false positive that costs a developer's time.

The reverse holds too. **When something was removed** doesn't rot either. Not knowing "removed in 5.8" means never finding out why something that worked fine has stopped.

## The newest document does not supersede the old one

This is the counter-intuitive part. We assume the latest document is a superset of the older ones, and **for date information it is the opposite.**

Once a feature settles in, notes like "available from 6.4" **quietly disappear** from the documentation. A new reader doesn't need them. So three years on, the docs read as though the feature was always there.

The only thing that still carries that marker is **the release note from the time.** Throw it away for being stale and it cannot be recovered.

Which means this class of material isn't something you "update to the latest" — it's something you **accumulate.** You go to the current manual for current behaviour and to the old release note for the date. The two documents do different jobs.

## The honest limit

**I am not yet running this as a ledger.**

The links are collected, but I have never built the table that maps "the version our build uses" against "when each feature appeared." Right now I look it up each time something fails to reproduce.

If the judgement in this piece is right, the next step is obvious — build that table, and **write the version condition into the test case when it is authored.** Recording it up front is cheaper than looking it up at verdict time.

I haven't done it. So this is a judgement, not a report of work.
