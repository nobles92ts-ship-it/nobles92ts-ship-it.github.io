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

## A broken design stops the run and calls a person

The inspection returns **one of exactly three answers** — **expandable, defective, error.**

Defective means **the run stops right there.** Running unattended, it does not walk itself back to the previous stage to repair anything; it leaves a *design needs fixing* flag and waits. Once a person has fixed the design, the run **picks up again from this stage.**

This page used to say *it goes back to the previous stage for repair and counts the round trips.* Opening the code showed that belongs to the backup procedure, not the normal run.

| Who is driving | When the design is defective |
|---|---|
| **The unattended run** (the normal case) | Stops and waits for a person |
| **A person stepping through the stages by hand** (backup procedure) | Goes back a stage to repair, counting round trips |

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

The second job. The source specification is **split into sections and rules.** Since late September 2026 a table can also contribute **a whole row as a single rule** — the next section explains why.

That list of rules becomes **the left-hand column of the ledger** later.

| Rule in the spec | Which case verifies it |
|---|---|
| *Upgrading is blocked without materials* | 7, 12 |
| *Above +10, failure reduces the level* | 23 |
| ***An upgrade ticket is consumed even on failure*** | **(empty)** ← this is what gets caught |

**An empty row** trips a later stage. Cases get added to fill it.

Why this has to happen **here**: build the reference points afterwards and **you build them from the cases that exist.** At which point **you cannot count what is missing** — no case, no rule counted.

**The standard has to exist before the result.** Build the standard from the result and everything passes, always.

## With the wrong denominator, 100% is a lie

In *how many out of how many were covered*, the second number — **the denominator** — is the rule list this stage produces. That list had a hole in it.

Tables used to be cut **cell by cell**, and **short cells were thrown away**: a lone number, a single *O* or *X*. When every cell in a row was like that, the row **never made it into the ledger at all.**

Looking back over 39 runs, **one table data row in five (20%)** — 295 of 1,473 — sat outside the ledger. And yet **all 42 runs passed with "0 uncovered".** A rule that was never listed cannot be counted as missed. In one specification, only **25 of the 53 items** listed in its table had their names in the ledger.

| | Before | From 25 Sep 2026 |
|---|---|---|
| A table row whose cells are all short | No rules → absent from the ledger | **The whole row becomes one rule** (header: value, bundled) |
| The same 42 runs' source, re-cut | 5,868 rules | **6,090 rules** |
| Table rows with no rule at all | 604 | **355** |

That specification now has all 53 items in the ledger. The 355 rows left over were classed as rows meant to be skipped — change history, blank rows, repeated headers and the like. (The re-cut counts all 1,919 table rows across the 42 runs, so it is not the same tally as the earlier 295 of 1,473.)

What this one cost to learn: **"100% covered" is only as good as its denominator.** The check asks whether anything *on the list* went uncovered; it cannot see **what never made the list.** Which is how the light stayed green for 42 runs in a row with nobody noticing.

Not everything is fixed. **Lists indented three or more levels deep** and **running prose that isn't a list** still don't get cut into rules.

## The detailed record starts here

Two jobs. Decide whether the design can be expanded, and cut the raw spec into rules. Unlike the previous stage, **both are code.**

## Stop it before you build it

The design gate answers exactly three ways: expandable, defective, error. Defective makes the unattended chain stop with exit 14 and wait for a person (as of 2026-09 — the log asks for the design to be fixed in a session). Sending it back for a repair loop and tracking the attempt count so it can't ping-pong forever belongs to the manual fallback, in which someone steps through the stages one at a time; the chain code has no such counter.

Without this gate, a defective design produces several hundred rows and the review stage discovers it afterwards. **Rows built from a wrong design are cheaper to throw away than to fix.** So the check happens before they exist.

## This is not reading the same document twice

The previous stage already reviewed the design once. It gets read again here. That looks like duplication. It isn't.

**The earlier review was read by an LLM. This one is read by code.**

They fail to see different things. An LLM reads meaning and routinely lets format violations through; code catches format exactly and cannot see "does this case make sense" at all. So it is **two different kinds of eye on the same document**, not the same check run twice.

There's a reason the machine gate sits second, too. Put it first and the LLM writes to pass the gate — you get documents with correct shape and empty content.

## The ledger's anchors get planted here

The slicer cuts the raw spec into sections and rules. That rule list later becomes the **left-hand column of the coverage ledger** — "which case verifies this rule from the spec?"

Since 2026-09-25, a table row that yields no cell rules becomes **one row-level rule** (`from:"table-row"`, header:value pairs bundled), and cell rules carry their row as context (`row`). Before that, tables were cut cell by cell with short and non-Korean cells discarded; the 2026-09-24 audit found 20.0% of table data rows across the current 39 runs (295/1,473) outside the ledger, while all 42 runs passed with "0 uncovered". Re-slicing the 42 runs' source after the fix: rules 5,868 → 6,090, zero-rule rows 604 → 355 (the remainder being deliberate exclusions such as change history, empty rows and repeated headers). Lists nested three or more levels deep and non-list prose are still not extracted as rules.

Traceability is not something you bolt on at the end; it has to be **planted here.** Add it later and you have to re-count how many rules the spec contained, and that number comes out different for every person who counts. Counting once, on the first read of the source, is the only version that reproduces.

And the denominator has to be fixed **first** for "we covered everything" to mean anything later. Count the denominator afterwards and you only ever count what you covered.
