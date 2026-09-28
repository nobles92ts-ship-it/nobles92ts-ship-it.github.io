# S1 · Design

> Pulling a design skeleton out of the spec. Deciding the taxonomy is the same act as deciding the automation setup.

- Headline number: LLM
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s1/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s1/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The stage that reads the specification and pulls out a design skeleton — the list of what needs checking and how to group it. It carries more judgement than any of the other seven and takes the longest, so this is where the strongest model works — and even inside this stage, only in the seat that draws up the design.**

## What this stage produces — two documents

It does not turn the specification straight into a table. **Two documents come first.**

| Document | What |
|---|---|
| **Analysis** | Organises the specification and pulls out **candidates for what needs confirming** |
| **Design** | **Expands those candidates into categories and cases** |

Why not do it in one pass: **"what needs confirming" and "how should it be grouped" are different jobs.** Mixed together, **you end up only picking out the things that group nicely.**

## The most valuable rule — "a taxonomy is not organisation, it is a setup hierarchy"

The line this stage is worth.

Test cases are usually grouped **by subject** — *upgrade-related*, *shop-related*. It looks tidy.

But grouped that way **the actual testing is painful.**

Because testing needs **props**. To test upgrading you need an item to upgrade and materials to spend. And **getting the props ready is what takes the time.**

| Grouped by | When you run it |
|---|---|
| **Subject** | Props are jumbled → **reset the setup for every case** |
| **Props** | Set up once and **run several in a row** |

So this tool groups **by "things needing the same props."** It looks less tidy and **runs far faster.**

> **Deciding the taxonomy is the same act as deciding how the testing will be set up.**

## No case gets built on data that does not exist

A case has to name items **by their real names** — not *some item* but *Upgrade Stone (Medium)*.

Those names are not in the specification; they are in **the game's data tables.**

So just before the design step, those tables are swept into **a dictionary of real names** and handed to the AI.

Without it: **the AI invents plausible names.** Something like *Stone of Enhancement* — **an item that does not exist in the game.** And that only surfaces **when someone tries to run the test.**

## Design gets more to read than the one specification

The preparation step just before this one (stage 0) gathers a few extra things for design to work from.

| Extra material | Why it is there |
|---|---|
| **Pages the specification links to** — one hop out, five at most (since August 2026) | Questions were going to the spec author whose answers sat one link away |
| **Several specifications merged into one file**, when more than one is handed over (since September 2026) | Kept separate, the second document silently falls out and no inspection notices. Once merged, the second document alone turned up 70 things to check |
| **Other systems this feature touches, as candidates** (since September 2026) | Read off the map of which internal wiki pages link to which, so the places where this feature meets another one are not missed |

One line holds. **A linked page only fills gaps**; a feature that appears only there does not get pulled into this round's scope. The link map is right roughly seven times in ten (measured at about 71%), so nothing from it is accepted automatically — design uses a candidate only when the specification's own text backs it up.

## Two inspections, because the two failures are different

After design there is an inspection. **There was one at first, and it burned me.**

Things go missing in **two different ways.**

| Inspection | Compares | Catches |
|---|---|---|
| **Upper** | Specification ↔ analysis candidates | **Omission** — it never became a candidate |
| **Lower** | Analysis candidates ↔ design cases | **Compression** — it was a candidate and **never got expanded** |

The difference matters.

**Omission** is having skipped a whole paragraph of the specification. **Compression** is having seen it, recorded it as a candidate, and then **flattened it into one line while expanding.**

**Only the lower inspection and omissions slip through; only the upper and compressions do.** And from the outside both just look like **"not many cases came out."**

The design review now checks sixteen items in all (as of September 2026). These two inspections are two of them, and boundary values — just below the minimum, the minimum, the maximum, just above it — **fail on the spot if even one is missing.**

## A question whose answer already exists never reaches the spec author

Design keeps running into things the specification alone does not settle — *what is the maximum for this value?* Rather than guess, it leaves a **"needs spec confirmation" question**: the list that eventually goes to the person who wrote the spec.

Quite often, though, the answer **is already written down** — on another internal wiki page, or in the game's data tables (spreadsheets). From the author's side those are *it's right there* questions.

So before any question goes out, **it gets looked up once.** Internally the searchable index of the wiki is nicknamed the "second brain", so this step is called the *brain cross-check*. Each lookup ends in one of four ways.

| Result | Meaning | What happens to the question |
|---|---|---|
| **Answered** | The value itself was found in the wiki or a data table | Goes into the cases; **the question is dropped** |
| **Located** | Where it lives is known, but the value could not be read | Sent with *look here* attached |
| **Discovered** | The search turned up a rule the spec left out | Becomes a case candidate, and a question too |
| **Kept** | Nothing found, or not sure | Sent as it was |

Data tables joined the search in September 2026. Specifications tend to push their numbers out into spreadsheets, so a wiki-only lookup **could never close a question whose answer lived in a spreadsheet.** A spreadsheet only counts as *answered* when its file, sheet and column are on the registered list **and the actual cell was read.**

One principle governs it: **when in doubt, change nothing.** A single wrong *answered* costs more than ten unnecessary questions.

The honest limit remains. **An overconfident cross-check makes questions vanish without a sound.** Drop a question on the strength of a wrong answer and the author never sees it. So every dropped question is logged separately, and if there is even one, the completion report carries a note asking someone to look over what was removed.

The cross-check is an optional switch, and the public version ships with it **off** — whoever downloads it has no such index.

## The strongest model sits only where the design is drawn up

AI models come in grades. A stronger one thinks harder, and is **slower and more expensive** for it.

This stage holds several jobs: drawing up the design, reviewing it, cross-checking against the wiki, fixing what the review flags. Since September 2026 the strongest model has **two seats only.**

| Seat | Model |
|---|---|
| **Drawing up the design** | Strongest, with thinking turned all the way up |
| **Redrawing it when the review says the analysis missed part of the spec** | Strongest |
| Review · wiki cross-check · ordinary fixes | One grade down |

Before switching, the old and new models were set against each other on three features. Two graders — two different AI models — scored the designs blind, not knowing which model wrote which. **On two features out of three, both graders preferred the new model;** on the third, both preferred the old one.

It was not free. Design time went up **38%** and the amount written went up 49%. Twice in four runs **a reply was cut off** at the per-reply length limit; both times the model picked up in its next request and finished on its own. One setting line switches back to the old model if it turns out to be a problem.

## Two-thirds of a run's time is spent here

A full run from start to finish takes **96 minutes** at the median — line the runs up by duration and take the middle one. **64% of that is this stage.**

Volume tells the same story. Of all the separate AI calls in a run, the costliest is this stage's designer: about 40% of everything the AI writes in a run comes from that one seat.

And it is getting slower. Since late August 2026 (the 27th) the stage's median went from **41 to 67 minutes.** A proposal to split analysis and design into two separate calls is on the review list — nothing more yet. **This is still unfixed.**

## "Skip it if the design hasn't changed" was a promise only the docs made

Sometimes a later stage blocks and the run has to go again. Asking for the design a second time means **paying for the most expensive hour twice.**

So the plan was this: fingerprint the design, and **if the fingerprint matches, skip the stage entirely.** The operating manual says exactly that. Going back has to be cheap, or a blocked run gets **forced forward instead of sent back.**

When an audit actually opened the code, though, **nothing compared the fingerprints.**

| What the manual says | What the code does |
|---|---|
| Matching fingerprint → skipped **automatically** | Computes the fingerprint and logs it, nothing more · skipping takes **a person telling it to start at stage 2** |

Trust the manual and re-run, and the design gets done again. **A document's promise and the code can drift apart, and neither makes a sound when they do** — that is what this one cost. The promise has not been moved into code yet.

## The detailed record starts here

Reads the raw spec and produces two documents: an **analysis**, which organises the source and extracts test candidates, and a **design**, which expands those candidates into a taxonomy tree and cases.

This is **where the most judgement lives** in the pipeline, and so it runs on a larger model. Since 2026-09-24, though, only two seats inside the stage get it — the designer (STEP 1) and the design repair when the analysis has gaps (STEP 3) run on `claude-opus-5-5` at effort max, while review, cross-check and ordinary design repair run on `claude-sonnet-5` (owner's decision). Rolling back is one environment variable (`TCTEAM_OPUS_MODEL`).

## The taxonomy isn't organisation — it's a setup hierarchy

This is the most important rule in the stage.

> The taxonomy is not a plain feature grouping. It is **the precondition hierarchy of the automated test.** Each level expresses a **setup step** leading up to the moment the reproduction steps run.

It isn't grouped for human readability — **the automation code maps directly onto that hierarchy.** The top level says which screen or mode you have to be in; the middle level says what has to be prepared once you're there.

Which means splitting the taxonomy by feature name makes the automation **set up from scratch for every case.** Things that share a preparation state end up scattered across different branches, so there is no way to build that state once and reuse it.

Not putting actions, conditions, or results in a category name follows from the same thing. A leaf name has to describe **the state you've arrived at**; what you then do is the case's job to say.

## No case gets built on data that doesn't exist

Reproduction steps need real item names, and those names live in the game's data tables. So just before design runs, the tables are scanned and a **real-name dictionary** is handed to the designer.

The reason it happens exactly here is that **this is where the sentences are born.** An expression created in the design document flows unchanged through writing, review, and into the sheet. Fixing it downstream means fixing it in three places after it has already spread.

Three rules ride along with it.

- **Examples are chosen only from the dictionary.** Never write an item name from memory or inference. A plausible fake name embedded in a case costs whoever runs it the time spent hunting for it.
- **If the name alone doesn't identify it, the identifier goes alongside.** When several things share a name, the name isn't information.
- **A case built on a combination that doesn't exist in the data is not deleted — it becomes a question.** The absence may itself be a gap in the spec. Delete it and the question disappears with it.

Behaviour on blank data is excluded from the candidates too. **Not filled in yet and deliberately empty are different things**, and building a case on the first one makes that case meaningless the moment the data is filled.

## Omission and compression are different failures

Design is followed by a review, and that gate is **split in two.** Running only one of them burned me for a while. (As of 2026-09 the review has items C-01 to C-16; the upstream gate below is C-13 and the downstream one C-12.)

| Gate | What it compares | The failure it catches |
|---|---|---|
| Upstream | spec → analysis candidates | **Omission** — never became a candidate at all |
| Downstream | analysis candidates → design cases | **Compression** — a candidate exists but was never expanded |

Here's what happens with only one. **The downstream gate passes an upstream omission.** Anything the analysis missed is absent from the design too, so it scores as "the design expanded the analysis faithfully." A 100% expansion rate is not 100% coverage.

And the downstream gate can't just report a percentage. **Every candidate gets a row saying where it went** — expanded, silently dropped, or legitimately excluded. An exclusion **with no stated reason counts as a drop.**

Boundary values are 100%, no exceptions. If min-1, min, max, or max+1 isn't split into its own case, that's a failure on the spot. Finding a combined notation like `≤N / >N` sends it straight back.

## Coming back has to be free

If the design hash is unchanged, the whole stage is skipped — that was the intent, and the operating manual still says so. The point is not to re-run design when a later gate sends you back. **The chain code has no such comparison** (as of 2026-09). The design gate (`lib/design_gate.js`) computes the hash and logs it, and skipping S1 takes a person passing `--start-from s2`. Where the hash actually does work is the opposite direction: if the design changed and a run tries to carry on with the old skeleton, the skeleton converter blocks it.

Without that, every gate failure means **re-running the most expensive stage.** If a pipeline is built on the assumption that you will come back, coming back has to be cheap.
