# S3 · Writing

> Code builds the structure; the LLM writes only sentences. Those sentences carry several prohibitions.

- Headline number: 25-row chunks
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s3/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s3/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Code builds the table's skeleton and the AI writes only the words in each cell. And those words carry several prohibitions.**

Once written, the sentences go through a code check, and only the rows that fail are sent back to be rewritten.

## The order of work

1. **Code** builds the row skeleton — how many rows, the numbering, which column holds what
2. **Cut into blocks of 25** and hand them to **four AIs at a time** — to fill in sentences only
3. **Code** merges them back
4. **Code** inspects the wording — only the rows that fail go back to the AI

## Why they are split

The same reason as before. **Row count, numbering, column layout and category boundaries are all decided by code.**

The AI writes **only the sentence in each row.**

Which means **however many AIs share the work, the output reads as one set.** The skeleton was already fixed.

## Blocks of 25, four written at once

Ask for everything in one go and **quality falls off toward the end.** It forgets the rules it applied at the start.

Hand it over in blocks and each one sees only 25 rows, so **the quality holds to the end.** And because blocks never need to know about each other, they can be written **at the same time.** Since August 2026, **four run at once**; when all four are done, the next four start.

| | One after another | Four at once |
|---|---|---|
| Time per block | 135.5 s on average | 131.3 s on average |
| A 300-case run | about 41 min (est.) | about 13 min (est.) |

Running four together **did not slow any single block down.** One unusually slow block was left out of that average. The 300-case row is an estimate scaled up from the measured block times.

**Five or more has never been measured**, so it stays at four. Call too many AIs at once and they can all hit the service's rate limit together, so the number does not go up until someone measures it.

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

There is also an **order** for when two values both seem to fit. If the feature has not been built yet, the note is *to be implemented later* — not *needs confirmation from the spec* — even when the spec never says what the result should be.

Until it is built, the only possible answer is *it will be decided when it is built*, and the tester has no screen to check anyway. In one August 2026 run, **74 of the 104** rows marked *needs confirmation* turned out to be features that simply did not exist yet: a stack of questions nobody could answer.

## Finished sentences get inspected, and only failing rows are rewritten

The prohibitions above are **not just written down.** Once the sentences are merged, **code inspects them** — the wording inspection. It looks for:

- words like *properly* or *without issue*, **which two people could judge differently**
- anything in the notes column **that is not one of the five allowed values**
- **internal markers** from the build process that leaked into a sentence
- cells that start with **a symbol the sheet would read as a formula** (`=`, `+`, `@` and so on)

When something is caught, the AI gets **a list of which row broke which rule** and rewrites **only those rows.** Then the inspection runs again, **up to three times.** The merge itself checks the sentence column first, and anything caught there gets up to two rewrites.

But if a rewrite **does not bring the count down**, the remaining rounds are not spent. It **stops at once and calls a person.** A count that will not drop is read as **two rules colliding**, not as a clumsy AI, and more rounds will not untangle that.

## Hand over half the list and the other half never gets fixed

It was not always three rounds. Before 25 August 2026 there was **exactly one rewrite**, and if anything survived it, the run stopped.

On top of that, the list handed to the AI **was cut off at 30 entries.** Here is what that did one day:

| What | Rows |
|---|---|
| Caught by the inspection | 49 |
| Actually passed to the AI | 30 |
| Never given a chance | 19 — and the run died |

So **any run with more than 30 violations was built to stop, every time.** The AI did not fail to fix those rows; **it was never told about them.**

Two things changed: the whole list now goes through uncut, and the rewrite can repeat. Alongside came **the stop-when-it-will-not-drop rule** above, because more rounds alone just burn time on a problem they cannot solve.

> **When you ask for fixes, hand over everything that needs fixing.**

## It no longer needs one particular tool to run

This page used to say: *this stage needs **a particular tool that drives several workers at once.** There is no alternative path, so without it the stage simply stops.*

**That is no longer true.** The standard path does not use that tool at all. It calls the AI **through short command-line calls** (`claude -p`), one per block, and code checks whatever comes back. The *four at once* above works this way.

The tool is now used only **when a person drives the stages by hand, one at a time.** Without it, only that manual route is blocked, and the answer is not to drive by hand but to run the standard path. The tool's own manual dropped the old sentence in September 2026. The rules the AI receives are pulled straight out of that tool's script files, so **either route hands the AI the same rules.**

It cost something to learn. A similar stale sentence (*running unattended end to end is still on the roadmap*) meant that in July 2026 **a run that could have finished by itself was driven by hand from start to finish** — 2 hours 23 minutes. This page was repeating the old sentence too.

> **A sentence that says "it can't" does not delete itself when the facts change.**

One principle from the old version still stands: **do not do it differently and call it the same.** Stopping when the inspection count will not drop is that same principle.

## The detailed record starts here

Code deterministically builds a row skeleton from the design document, chunks of 25 rows get their sentences filled in parallel, and code merges the result back.

## Why structure and sentences are split

Row count, numbering, column layout, group boundaries — all decided by code. The LLM writes **only the sentence in each row.**

Split that way, an LLM dropping a row or shifting the order gets caught at the merge, because the merger cross-checks index, source echo, hash, and count. It isn't checking the sentence. It's checking that **the sentence is in the right place.**

Chunks know nothing about each other. So when one chunk drifts, **only that chunk re-runs**, and every other result stays valid. That property is what made unattended completion possible — if one wobbling chunk in a 200-row run meant re-running the whole thing, a run nobody is watching would not be a workable idea.

Chunk independence also buys speed. Since 2026-08-19 the full chain launches chunks in waves of **four at once** — four go out, and the next four wait until all of them are back. There is no unlimited fan-out because that spikes the rate limit. Measurements exist only for concurrency 1 through 4. The measurement write-up first recommended 3, but its reason — "+13.2% latency at 4" — traced to one 13-row outlier chunk (213 s). Drop that one and the per-chunk average at 4 is 131.3 s, below the sequential baseline of 135.5 s. Scaled to 300 cases, 40 min 46 s sequential becomes 13 min 08 s at 4 `[estimated]`. The setting caps at 8, which is the edge of "measure up to here", not a recommendation; 5 and above stay off until someone measures them.

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

The values also have a precedence (rule dated 2026-08-07). If the target is slated for later implementation, it gets to-be-implemented even when the spec gives no expected value — not needs-spec-confirmation. Something not yet built may or may not show up, and both are normal, so the question has no answer and the tester has no build to verify against. In the run that prompted the rule, 74 of 104 needs-spec-confirmation rows were features slated for later. The "removed, no longer used" kind does not qualify: that is not future work but something that must not appear, and it can be verified today.

## The post-merge check runs in rounds, not once

The merger first checks the reproduction-step column for content violations. A hit sends the violation list to a fixer agent (a short `claude -p` call) that rewrites **only those rows' sentences**, and the merge runs again. Up to 2 rounds; anything left after that is an integrity stop.

Next comes the wording inspection (content_gate): abstract phrasing (`properly`, `without issue` and the like), the notes whitelist, platform values, unsupported deferrals ("per the policy" and the like — blocked unless the notes say needs-spec-confirmation), leaked internal markers (`⚠`), and a leading special character in a cell (`=` `+` `@` `'` — the sheet swallows it as a formula or literal marker and the stored value no longer matches the source). Hits go through the same fixer in rounds: 3 by default, configurable up to 5.

There is **stall detection.** If the violation count does not drop from the previous round, it stops right there without spending the remaining rounds, treating it as a rule conflict and handing it to a person. If the count cannot be parsed, stall detection is not silently switched off: it logs a warning and carries on under the round cap alone.

Before 2026-08-25 this was one shot. After a single fix, any remaining violation stopped the run, and the wording inspection truncated its detail list at 30 entries. Together that meant **every run with more than 30 violations stopped, structurally, 100% of the time.** In the real incident, 30 of 49 violations reached the fixer and the other 19 never got a chance, so the run died. The truncation came out and the rounds went in. The fixer hint has its own byte cap (200,000 by default), and going over it logs a warning instead of trimming quietly, because a trimmed violation never gets fixed.

## No pretending when the tool is missing

**(Correction, as of 2026-09.)** This section originally opened with "This stage and the next require a multi-agent orchestration tool. There is no fallback path." **There is one, and it is the standard path.** The unattended full chain never calls that tool. It extracts the prose rules from the tool's workflow files at runtime (zero copies), runs the chunks as short `run-agent.sh` (`claude -p`) calls, and hands the results to deterministic checks. The tool is needed only by the manual fallback, where a person drives the stages by hand. The manual's "Workflow-only, no bundled alternative" was retired on 2026-09-04 as a stale claim, and this page had been repeating it.

So when the tool isn't there, **only the manual fallback is blocked.** Don't drive by hand; run the standard path in one line — earlier outputs are preserved, so it can re-enter here. A stale sentence of the same kind ("a fully unattended driver is on the roadmap", retired 2026-07-31) once led to an entire run being driven by hand (2 h 23 min wall clock). The principle that carrying on while imitating a capability you don't have is the worst option still holds — the wording inspection stopping with rounds left when it stalls is the same principle.
