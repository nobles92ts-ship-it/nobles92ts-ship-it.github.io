# S2 · Isolation gate

> Code re-reads the design to decide whether it can be expanded at all, and plants the anchors for traceability.

- Headline number: deterministic
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s2/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s2/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Before expanding anything, code re-reads the design and asks whether it can be expanded at all. And it plants the reference points that later prove nothing was missed.**

## Two jobs

| What | Why |
|---|---|
| **Decide whether the design can be expanded** | Starting from an unexpandable design wastes everything after it |
| **Split the specification into rules** | The reference points for counting coverage later |

And unlike the previous stage, **both are done by code**, not the AI.

## "Stop it before you build it"

The inspection returns **one of exactly three answers** — **expandable, defective, error.**

Defective **returns to the previous stage** for repair. And **the number of round trips is counted.** Uncounted, **it could ping-pong forever.**

There is no *ambiguous, so proceed anyway.* That is this tool's character — **stopping early is cheaper than repairing late.**

## "It was inspected already — why again"

The previous stage already inspected the design. This inspects again. **It looks redundant and is not.**

| | Previous inspection | This one |
|---|---|---|
| By whom | **The AI** | **Code** |
| Asks | **Is this design good** | **Is it in a shape that can be expanded** |
| Nature of the answer | Judgement | **Mechanical decision** |

Different in kind. The AI asks **is this design sound**; the code asks **are the required fields filled in.**

And **a design the AI called good can still have empty fields.** Excellent content, wrong form. **A person reading it does not see that; a machine does.**

## And the reference points get planted here

The second job. The source specification is **split into sections and rules.**

That list of rules becomes **the left-hand column of the ledger** later.

| Rule in the spec | Which case verifies it |
|---|---|
| *Upgrading is blocked without materials* | 7, 12 |
| *Above +10, failure reduces the level* | 23 |
| ***An upgrade ticket is consumed even on failure*** | **(empty)** ← this is what gets caught |

**An empty row** trips a later stage. Cases get added to fill it.

Why this has to happen **here**: build the reference points afterwards and **you build them from the cases that exist.** At which point **you cannot count what is missing** — no case, no rule counted.

**The standard has to exist before the result.** Build the standard from the result and everything passes, always.

## The detailed record starts here

Two jobs. Decide whether the design can be expanded, and cut the raw spec into rules. Unlike the previous stage, **both are code.**

## Stop it before you build it

The design gate answers exactly three ways: expandable, defective, error. Defective sends it back for a repair loop, and the attempt count is tracked so it can't ping-pong forever.

Without this gate, a defective design produces several hundred rows and the review stage discovers it afterwards. **Rows built from a wrong design are cheaper to throw away than to fix.** So the check happens before they exist.

## This is not reading the same document twice

The previous stage already reviewed the design once. It gets read again here. That looks like duplication. It isn't.

**The earlier review was read by an LLM. This one is read by code.**

They fail to see different things. An LLM reads meaning and routinely lets format violations through; code catches format exactly and cannot see "does this case make sense" at all. So it is **two different kinds of eye on the same document**, not the same check run twice.

There's a reason the machine gate sits second, too. Put it first and the LLM writes to pass the gate — you get documents with correct shape and empty content.

## The ledger's anchors get planted here

The slicer cuts the raw spec into sections and rules. That rule list later becomes the **left-hand column of the coverage ledger** — "which case verifies this rule from the spec?"

Traceability is not something you bolt on at the end; it has to be **planted here.** Add it later and you have to re-count how many rules the spec contained, and that number comes out different for every person who counts. Counting once, on the first read of the source, is the only version that reproduces.

And the denominator has to be fixed **first** for "we covered everything" to mean anything later. Count the denominator afterwards and you only ever count what you covered.
