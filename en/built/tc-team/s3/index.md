# S3 · Writing

> Code builds the structure; the LLM writes only sentences. Those sentences carry several prohibitions.

- Headline number: 25-row chunks
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s3/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s3/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Code builds the table's skeleton and the AI writes only the words in each cell. And those words carry several prohibitions.**

## The order of work

1. **Code** builds the row skeleton — how many rows, the numbering, which column holds what
2. **Cut into blocks of 25** and hand them to several AIs — to fill in sentences only
3. **Code** merges them back

## Why they are split

The same reason as before. **Row count, numbering, column layout and category boundaries are all decided by code.**

The AI writes **only the sentence in each row.**

Which means **however many AIs share the work, the output reads as one set.** The skeleton was already fixed.

## Why blocks of 25

Ask for everything in one go and **quality falls off toward the end.** It forgets the rules it applied at the start.

Cut it up and run **several in parallel**, and each one sees only 25 rows, so **the quality holds to the end.** And it is **faster.**

## Prohibition one — an "or" means it is not one case

The most frequently triggered rule.

**Bad:** *the upgrade fails if materials are insufficient **or** the level is too low.*

Why that is bad: **there are two things to confirm inside one row.**

Run it and this happens:

| What happened | This case is |
|---|---|
| Confirmed failure on insufficient materials | **Marked as passed** |
| Never tried the level condition | **And it is still marked passed** |

**Half confirmed, recorded as fully confirmed.** And later, **if the level side breaks, this case still says it passes.**

So **an "or" splits the case.**

## Prohibition two — it has to read like a sentence a person wrote

**Data-table names, internal variable names and developer codes** may not be the subject or the verb.

**Bad:** *`ITEM_ENHANCE_FAIL_TYPE_2` is returned.*

Why: **the person running this case has no idea what that is.** They have to go ask a developer, at which point the test does not run.

**Good:** *the upgrade fails and the item remains unchanged.*

**Confirmation happens on the screen**, and internal names do not appear on screens.

## Prohibition three — the notes column is not a notepad

The notes column accepts **exactly five values.**

| Allowed |
|---|
| (blank) |
| To be implemented later |
| Low implementation priority |
| **Needs confirmation from the spec** |
| A confirmed specification error |

Leave it free-form and **everyone writes it differently, and later you cannot count it.**

Answering *how many need spec confirmation* requires **fixed values.** With *needs confirmation*, *spec query* and *ask the PM* mixed together, **there is nothing to count.**

> **Anything you will count later has to be chosen from a list, from the start.**

## And when the tool is missing, it does not pretend

This stage and the next **require a tool that drives several workers at once.** There is no alternative path.

So **when that tool is absent, it simply stops.**

It was not built to *do it sequentially if the tool is missing.* That **produces output of a different quality, and the difference is not recorded in the output.** Later it becomes *why is this table like this*, with no answer.

**Saying you cannot is better than doing it differently and calling it the same.**

## The detailed record starts here

Code deterministically builds a row skeleton from the design document, chunks of 25 rows get their sentences filled in parallel, and code merges the result back.

## Why structure and sentences are split

Row count, numbering, column layout, group boundaries — all decided by code. The LLM writes **only the sentence in each row.**

Split that way, an LLM dropping a row or shifting the order gets caught at the merge, because the merger cross-checks index, source echo, hash, and count. It isn't checking the sentence. It's checking that **the sentence is in the right place.**

Chunks know nothing about each other. So when one chunk drifts, **only that chunk re-runs**, and every other result stays valid. That property is what made unattended completion possible — if one wobbling chunk in a 200-row run meant re-running the whole thing, a run nobody is watching would not be a workable idea.

## An "or" means it isn't one case

The most frequently tripped of the prohibitions on the expected-result column.

**One case = one precondition + one action + one expected result.** The moment an "or" appears, it isn't one case.

- **Branching result** — "a loading screen or an error notice appears"
- **Branching precondition** — "with none owned, or one owned"
- **Branching action** — "when a tab is selected or a material is registered"

Two ways out. If the spec settles which one it is, **split into two cases.** If it doesn't, don't split — **leave it marked as needing spec confirmation.** Pick one arbitrarily and that decision is recorded nowhere.

There's exactly one exception: a single result that **enumerates permitted states** — "exists as either confirmed or pending, and nothing else." The result there is one thing ("consistency holds") and the states are its condition. But only when **that enumeration is settled in the spec.**

## It has to read like a sentence a person wrote

The second prohibition. **Table names, enum type names, and internal decision variables never appear as the subject or verb of the sentence.**

Functional QA does not go digging through table structures. Put an identifier in the subject position and the reader **cannot tell what behaviour is being described.**

<div class="ex">
<div class="x"><b>BAD — the identifier is the subject</b>
<p>Verify visibility condition type enums 0–6 each apply correctly and the decision is processed properly per type</p></div>
<div class="o"><b>GOOD — human-language subject, identifier in parentheses only when needed</b>
<p>Verify that when the visibility condition is 'level reached', it shows once the level is met and stays hidden until then <em>(condition = level reached)</em></p></div>
</div>

Enumerated values don't get bundled into one case either. `0–6 each` is not one case — it's seven, or a few representative ones.

Abstract phrasing is caught by a banned-word list: `works normally`, `correctly`, `naturally`, `without issue`, `appropriately`. An expected result carrying one of those **carries no guarantee that two people would judge it the same way.** It has to be a screen change, a numeric change, or a state change.

## The notes column is not a notepad

Third. The notes column accepts **exactly five values**: empty, to-be-implemented, low implementation priority, needs spec confirmation, and a confirmed spec-bug note.

Leave it unlocked and design-stage tags leak straight through — boundary-value markers, concurrency, session. Those mean something to the person who built it and are **noise to everyone reading the sheet.**

Each value also fixes the result columns automatically. To-be-implemented forces N/A; low priority stays not-run. Mixing those two skews the statistics — absent from the build and deferred by choice are not the same thing.

## No pretending when the tool is missing

This stage and the next require a multi-agent orchestration tool. There is no fallback path.

So when the tool isn't there, it **stops immediately and reports that fact.** Earlier outputs are preserved, so once the tool is available it resumes from here. Carrying on while imitating a capability you don't have is the worst option available.
