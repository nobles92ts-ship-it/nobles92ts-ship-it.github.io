# tc-team

> Feed it a spec, get test cases. The LLM only writes sentences; deterministic code owns every structure and gate. It can also hand them to an AI as a document bundle.

- Headline number: S0–S7
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/index.md
- Repository: https://github.com/nobles92ts-ship-it/AI_GAME_QA_TestCase
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Feed it a specification and test cases fill a spreadsheet. The point is not "the AI writes them" — anyone can do that badly. The point is *what the AI was not given.***

## First — what a test case is

Build a game or an app and **someone has to confirm it works.** *Have a look and see if it's fine* is not a confirmation. **What to press and what should appear** has to be written down first.

That written line is a test case. Roughly:

| Field | Content |
|---|---|
| **What** | Item upgrade |
| **How** | Press upgrade with no upgrade stones |
| **Then** | *Insufficient materials* appears and the upgrade does not happen |

Dozens of these get written per feature. **By hand it is slow, and things get missed as you go.**

This tool **fills that table from a specification.**

Since October 2026 it can also hand the same cases to **an AI, as documents it reads and then tests from.** The section *The AI edition* below covers it.

## The point is not "the AI writes them"

This is what the tool actually is.

**Ask an AI to write test cases and it will.** Anyone can. The problem is **the output differs every time.**

- Today numbering starts at 1, tomorrow at 0
- Some days six columns, some days seven
- Feed the same specification twice and **the results differ**

So the roles were split.

| Who | Owns |
|---|---|
| **Code** (a fixed program) | **Order, the table skeleton, numbering, formatting, the coverage ledger, writing to the sheet** |
| **The AI** | **Sentences, design judgement, findings, verdicts** |

So **the AI writes only the words and the code holds the shape.**

Why: **at first the AI drove everything, and as it went it drifted out of the rules it had itself set.** Around row 30 the formatting has changed. Not malice — **that is simply its nature.**

**When the code holds the shape, there is nothing to drift out of.**

## Eight stages

| Stage | What it does | Owner |
|---|---|---|
| **0** | Gather the source, lock out concurrent runs, **self-check the input** | Code |
| **1** | Read the spec and build **the design skeleton** — the seat that gets the strongest AI | AI |
| **2** | **Inspect** whether the design can be expanded | Code |
| **3** | Build the skeleton → **split the sentence-writing four ways** → merge | Code + AI |
| **4** | **Review adversarially**, judge, record coverage | AI |
| **5** | Apply fixes + **four inspections** — if a rule is uncovered, an AI gets one try at filling it | Code + AI |
| **6** | **Write to the real sheet** | Code |
| **7** | Finalise, **a trust score on every row**, dashboard | Code |

Stage 0 is prepared separately; **stages 1 to 7 then run to the end from a single command.** One "starting on this" notice goes to an internal channel when it begins.

## What defines its character — "it stops when it cannot pass"

This tool **does not "do its best and continue."**

There are checkpoints, and **failing one means stopping and calling a person.** Whatever it can fix by itself, it tries a few times first.

| Checkpoint | If it catches |
|---|---|
| Input check | Re-gather once; failing again, **do not start at all** |
| Design inspection | **Stop** — a person fixes the design, and the run picks up from there |
| Merge comparison | **Only the mismatched chunk** re-runs |
| Wording inspection | Tries up to three times to fix **vague phrasing** itself; stops if it isn't shrinking |
| Applying a fix | **Rejection is correct behaviour** — if the target does not match expectation, it is not edited and the run stops |
| Duplicate inspection | Stops if two cases are word-for-word identical |
| Coverage inspection | **If a rule is uncovered**, an AI gets one try at filling it; still uncovered, it stops |

The "applying a fix" row matters. **Opening something to fix it and finding the content is not as expected means not fixing it and stopping.** Someone may have edited it in between. **Rejection is not a fault, it is correct operation.**

That character has a price. Counting back through the logs in September 2026: **of 38 end-to-end runs, 13 (34%) stopped at least once and needed a person to carry on.** Better than quietly shipping a wrong table — but it is not yet a tool that simply does everything for you.

## Review is adversarial, not collaborative

Finished cases are read **by several viewpoints at once** — one for structure, one for quality, one comparing against the source.

And **they cannot see each other's results.**

That is deliberate. **Seeing each other makes opinions converge, and converged opinions miss the same things together.** Three looking separately catch three different things.

What the three find goes to **a single judging AI**, which argues each point and throws out the misfires. The survivors are never fixed by the AI directly — they are written down as **a fix plan that code can apply**, and stage 5's code does the actual editing.

## Five things that changed in September — the tool keeps getting fixed in use

On 24 September 2026 the whole tool got a check-up. It turned up 50 candidate defects, and for each one a different AI was asked to argue it away. Here is what changed as a result.

| What | In plain terms |
|---|---|
| **The strongest AI does the design** (24 Sep) | Stage 1 design takes 64% of a run's time, so that is where quality differs most. Design alone goes to Claude Opus 5.5. In a side-by-side test it did better on two features out of three |
| **Ask the internal wiki first** | Anything the spec left unanswered — marked "needs confirmation" — gets looked up in the company wiki and data tables first. If an answer turns up, that question comes off the list sent to the planners |
| **Rules inside tables, one row at a time** (25 Sep) | **Tables** in a spec were not fully making it into the rule ledger. A fifth of the table rows were outside it, and the check still passed with "nothing missing." What isn't in the ledger can't be missed, as far as the check can tell |
| **Resuming keeps the fixes** (25 Sep) | Stop a run midway and resume it, and the stage-4 review's fixes were **silently thrown away.** On the surface the run finished normally |
| **The working AIs are isolated** (25 Sep) | Every AI called up for a stage was carrying my personal settings, plugins and memory with it. Through that gap the design AI once wrote files straight into my Drive and deleted them (110 copies it had made itself; nothing that already existed was lost). Now each one carries **only the tools its stage needs** |

The last row started as a cost saving. Measured on the same spec with isolation on and off, the money came to **a little over 7%** (only two pairs, so not settled). The real gain was elsewhere: the number of times something **unrelated to the job** — a summary of some other task, say — got slipped into the first instruction an AI received was **0 out of 23 with isolation on, and 23 out of 23 with it off.**

## Two lessons that cost something — "do not join by number"

The one that hurt.

There is a ledger tracking coverage, and at first it pointed **by case number** — *rule 3 is covered by case 7.*

Then **inserting one row pushes every number below it down.** Seven becomes eight. The ledger still says seven, and **seven is now a different case.**

I first tried **recomputing the numbers.** **Wrong.** With several insertions the arithmetic stops holding.

Now it **joins by content, not number** — a combination of category, verification stage and reproduction steps.

> **Position changes; content does not.**

## The AI edition — same engine, one more exit

In October 2026 I added **tc-team-ai**. It takes the test cases the same engine produces and, instead of a spreadsheet for people, hands them over as **a bundle of documents an AI reads and then checks the game with.** A spec is all it needs.

| | For people | For an AI |
|---|---|---|
| Input | Spec + a Google Sheet | **The spec alone** |
| Stages | 0 to 7 | 0 to 5 — stages 6 and 7, which write the sheet, are skipped |
| Output | A table in the sheet | A bundle — run rules, cases, the original spec, an empty results table |

The reason for a separate edition is simple. **People and AIs read the same line differently.** A tester who reads *press upgrade with no upgrade stones* knows how to empty out the stones and where on the screen to look. An AI fills those gaps with guesses, and wanders off.

So each line gets four fields attached.

| Field | For the example above |
|---|---|
| **Precondition** — what must already be true | A character holding no upgrade stones |
| **Action** — what to do | Press upgrade |
| **Expectation** — what should appear | *Insufficient materials* shows and nothing is upgraded |
| **Observation** — what to judge by | The message, and whether the upgrade level stayed put |

An AI does the splitting, which makes the frightening part **meaning that shifts on the way.** Zero gets copied down as one, or *does not open* flips to *opens*, and the AI checks the wrong thing and writes PASS. Code stands guard here too: it checks that the original's numbers, English names and quoted text survive into the four fields and that a negative has not flipped, and a case that fails twice ships as the original line alone.

**The original line is always the truth; the four fields are a reading aid.** The run rules at the front of the bundle say the same.

The rules the AI must follow travel in the same place. No PASS and no FAIL without evidence — a screenshot path, a log line, a database value. And **behaviour the spec never decided must not be logged as a bug.** Those cases leave already flagged *verdict on hold*; the AI writes BLOCKED (spec) instead of FAIL and notes what it actually saw.

On 8 October I ran one internal spec all the way through. It produced 106 cases, every one of them split and passed the check, and 15 were on hold. It took 1 hour 38 minutes, 81 of them in design; the splitting took a little over six.

**This is where "do not join by number" bit a second time.** The bundle tells each case which rule of the spec it came from. That lives in the stage-4 ledger, whose numbers come from before stage 5 renumbers everything — so the join goes by sentence instead.

Except **the same sentence can sit in two places**: the smoke checklist at the front and the main body, an overlap the design allows on purpose. 29 of 65 past runs had pairs like that. Now the side the ledger was pointing at (smoke or body) is tried first, and if that still leaves more than one candidate, **the link is left off and counted.** A blank is better than a wrong source.

**What it cannot do yet.**

- **No AI has taken one of these bundles and actually tested a game with it.** The results table is empty. Only the producing side has been verified.
- **How to set up a state is not in the bundle.** Cheats, test accounts, where the logs live — that differs from game to game, so the project has to supply it. Without it, the case stays BLOCKED (environment).
- **Some shifts get past the check.** A negative that was never in the original, or a condition slipped in without a number, looks just like ordinary rewording. Korean also has a short way of writing *not*; drop that one and it passes. The *nothing is upgraded* above is phrased exactly that way in the Korean original. That is why the original stays the truth.

## An honest limit

**A thin specification produces thin output.**

This tool **does not invent specification that is not there.** Where there is no basis it **marks "needs confirmation from the spec" and moves on** rather than writing a case.

I think that is right — **an invented case becomes "where did this come from" later, and by then nobody knows.**

But **in an organisation with thin specifications the volume comes out lower than expected.** That is the material's fault rather than the tool's, and **to the person using it the disappointment is identical.**

**It is slow.** One feature end to end takes **1 hour 36 minutes** at the median, and 64% of that is design. Split the runs at 27 August and the median design pass went from **41 to 67 minutes**. Design moved to a stronger AI that day, but whether that is why it slowed down has not been measured separately.

**Some things are not fixed yet.** Two that the September check-up found and that are waiting their turn:

- **Re-run it from the same folder and it treats last time's tab as its own, wipes it and writes afresh.** If someone recorded test results in that tab in between, those can go with it. It happens because "is this our tab?" is decided by a marker file on my machine, not by the sheet.
- **It leaves a file saying "every inspection passed," but no code ever checks it.** Resume from a later stage and stage 5's inspections can be skipped. The documentation said "no marker means the stage runs again"; the code was not keeping that promise.

## Things that were rejected

The version history is largely **a list of things that looked like progress and were not.** **More was removed than added.**

> **[도판]** Black cells are deterministic code; orange cells are the model. Only S3 crosses both lanes — code builds the skeleton, the model fills in prose, code merges it back. Triangles are gates: fail one and the run stops there.
>
> Eight stages S0 to S7 split across a code lane and an LLM lane. Code owns S0, S2, S5, S6 and S7; the LLM owns S1 and S4; S3 crosses both lanes. Gates sit at S0, S2, S3 and S5.

## The detailed record starts here

Point it at a spec document and it fills a live spreadsheet tab with a test-case set. After a preparation step that fetches the source (S0), one invocation runs it to the end, unattended.

The interesting part isn't "an LLM writes test cases." Anyone can do that badly. The interesting part is **the split**.

> **Two lanes — the LLM owns sentences and judgment; deterministic code owns structure and fact.**

## Why split at all

Early on the model drove the whole pipeline. It drifted.

Row counts changed between stages, coverage quietly dropped, and **two runs never produced the same shape.** Models are excellent at approximately right. They cannot be used for same-input-same-output.

The fix wasn't better prompting. It was **confiscation.**

| Owner | What it holds |
|---|---|
| Deterministic code | stage order, row skeleton, numbering, formatting, merging, coverage ledger, sheet writes |
| LLM | design judgment, sentences, review findings, verdicts |

## Eight stages

| Stage | Job | Owner |
|---|---|---|
| **S0** | fetch source, take the run lock, self-check the input | code |
| [**S1**](/en/built/tc-team/s1/index.md) | analyse the spec → design skeleton | LLM |
| [**S2**](/en/built/tc-team/s2/index.md) | design isolation gate + source slicing | code |
| [**S3**](/en/built/tc-team/s3/index.md) | build skeleton → fan out for prose → merge | code + LLM |
| [**S4**](/en/built/tc-team/s4/index.md) | adversarial review, verdicts, coverage ledger | LLM |
| [**S5**](/en/built/tc-team/s5/index.md) | apply fixes + four gates | code (LLM only for stitching uncovered rules) |
| [**S6**](/en/built/tc-team/s6/index.md) | write to the live sheet | code |
| [**S7**](/en/built/tc-team/s7/index.md) | finalise, confidence, dashboard | code |

(As of September 2026) the kickoff notice goes out once when S1 starts, not at S7, and the run lock is released by the chain itself on exit.

S1 through S7 are written up individually. Each stage cost something to learn, and a table row doesn't hold it.

S3 shows the architecture best. **Code builds the skeleton first**, cuts it into 25-row chunks, lets the model fill in only the prose, and code merges the results back. On merge it checks index, echo, hash and count — so if the model shifted a row or touched somebody else's, **only that chunk re-runs.** Every other chunk's work survives.

## Gates — it stops rather than continues

This is what defines the tool's character. **It does not "carry on doing its best."**

| Gate | Stage | On failure |
|---|---|---|
| input self-check | S0 | one refetch → still bad, **refuse to start** |
| design gate | S2 | design defect → **halt**; a person fixes the design and resumes |
| merge verification | S3 | re-run only the mismatched chunk |
| content gate | S3 · S5 | vague phrasing, unsupported deferrals — up to three automatic correction rounds at S3, halt if they stop shrinking · halt straight away at S5 |
| apply before-mismatch | S5 | **rejection is correct behaviour** — the apply fails and the run halts (no automatic regeneration of the plan) |
| duplicate gate | S5 | halt when cases with an identical reproduction step (column F) remain |
| traceability | S5 | uncovered rule → one LLM stitching round → still uncovered, halt |

(As of September 2026, unattended chain.) Early on, a design defect looped back to S1; that round trip now survives only in the fallback procedure where a person drives the stages by hand.

The before-mismatch gate matters most. Before applying a fix it asks **"is the place I'm about to edit still what I read?"** and refuses if not. A mismatch means a human touched the sheet or an earlier stage shifted — and pushing through would overwrite the wrong row.

Halts that call for a person are collapsed into one kind — an integrity violation, exit 14 — and automatic retries run before it. The other exits are expired auth (10), retry limit (13), quota (15) and anything else (1). Everything else completes unattended.

How often it actually halts was measured by going back through the logs in the 24 September 2026 audit: **13 of 38 full-chain runs (34%) stopped at least once and were resumed.** The same audit put the median full run at 96 minutes, 64% of it in S1.

## Review is adversarial, not collaborative

Generated cases are read by **several lenses in parallel** — structure, quality, and comparison against the source. They cannot see each other's findings. If they could, they would converge, and convergence means missing the same things together.

A separate judge cross-examines the findings, drops the false positives, and produces a fix plan **in a form a machine can apply.** Surviving findings are applied by code. Nobody asks the model to please go fix it.

The same stage builds the coverage ledger: each rule extracted from the spec is mapped to the cases that cover it, and anything uncovered gets a row stitched in at S5.

## The sheet is touched exactly once

S6 writes the test-case body to the live spreadsheet **one time** (S7 then adds confidence notes and a panel to the same tab), and decides by ownership marker.

- Our tab → wipe and rewrite in full (idempotent)
- Somebody else's tab → don't touch it; create a `_v2`–`_v9` alongside
- Every other tab → off limits, unconditionally

Run it five times and the result is identical, and it never overwrites a tab somebody else made. For automation that runs next to humans, those two properties come before everything else.

⚠ (24 September 2026 audit, not yet fixed) The ownership marker lives in a **local file**, not in the sheet, so a re-run from the same folder always rules the tab "ours." Anything a person wrote into that tab in between can be wiped with it.

## The AI edition never touches a sheet

`tc-team-ai` shipped in v4.3.6 on 9 October 2026 ([release notes](https://github.com/nobles92ts-ship-it/AI_GAME_QA_TestCase/releases/tag/v4.3.6)). There is still one engine. Called as `run_pipeline_full.sh --no-sheet`, the chain ends at the S5 final set and never runs S6 or S7; S1 runs with `--local`, which skips the kickoff notice. That calling it without the flag leaves the stage order as it was is pinned by a test with a `--sheet-id` control run. The edition is chosen at install time with `--mode human|ai|both`, and the default, `human`, installs exactly what it used to.

Three steps follow S5.

| Step | Owner | Job |
|---|---|---|
| rewrite | LLM | 25-row chunks, four in parallel, two attempts per chunk; one reproduction step becomes precondition / action / expectation / observation |
| preservation gate | code | numbers (dropped or added), English identifiers, quoted and symbol strings, negation, share of content words kept; fail twice → ship the original only |
| export | code | recompute confidence without a sheet using the same core, and write the bundle |

Each split is stored with the sentence it was made from. Rebuild the final set so that a sentence changes, and the export throws that split away. Shipping the bare original beats pinning a stale aid to the wrong case.

The bundle is four files: `INDEX.md` (run rules, run order, open questions for the planners, excluded rules), `cases/NN_<screen>.md` (one block per case — the original, the four fields, the verdict flag, up to three source rules, confidence; the smoke set comes first), `spec.md` (the spec, section by section) and `results.md`, the table an AI fills in, which a re-export never wipes.

There are four verdicts — PASS, FAIL, BLOCKED, N/A — and a PASS or FAIL with an empty evidence cell breaks the rules. Behaviour the spec leaves open is `BLOCKED(기획)` ("spec"), and FAIL is forbidden there. The test environment — cheats, accounts, logs — stays outside the bundle: the project supplies it in a document such as `QA_ENV.md`, and without one the case is `BLOCKED(환경)` ("environment"). tc-team knows *what* to check. *How to reach that state* differs per game.

One real run (8 October 2026, one internal spec): 106 cases, 15 screen groups, 15 on hold, 106 split, 0 shipped as the original only. Of 98 minutes on the wall clock, S1 took 81 and the rewrite 386 seconds. The eight cases bounced on the first attempt all had an empty action field; the second attempt filled them.

**Rules are joined by sentence — and a sentence can exist twice.** The S4 coverage ledger is numbered before S5 inserts, deletes and renumbers rows, so the final row is found through the ledger row's sentence (S4's edit if it made one, otherwise the original). The catch is that the duplicate gate looks at the QA body and the smoke set separately, so one sentence surviving in both is allowed by design. 29 of 65 internal runs had such pairs, 91 in all. By sentence alone, those links do not resolve to one row.

Now the row in the ledger row's own scope (smoke or QA) is preferred, and whatever is still ambiguous is left out and counted as `rule_links_unmapped`. Against the 5,568 links in the 22 runs that kept an S4 ledger, sentence-only resolves 5,511 and scope-first resolves 5,547; where both resolve a link, they never pick different rows. The other 21 point at sentences the final set no longer has.

**"Could not read anything" and "rejected everything" leave the same bundle.** If the executor never runs, every case ships as the original and the bundle looks like a clean finish. So a run that read zero outputs stops with exit 12 and says which case it was — no output file (executor, model name, network) or a file that is not JSON (format). Reproduced in review with a fake executor that wraps its JSON in a code fence, the first message sent you to check the network while the file sat there intact.

Not done yet:

- **Zero results from an AI actually running QA from a bundle.** `results.md` is empty; only the producing side is verified.
- **The gate has three blind spots.** A positive flipped into a negative and a condition added without a number are indistinguishable from ordinary rewording — the gate's own header says so. And (found 9 October 2026, not yet fixed) negation is only recognised when the sentence ends in Korean's long negative form (`~않는지` / `~없는지`), so a dropped short form (`안 ~는지`) passes. In 13,366 internal final rows that short form appears 33 times (a regex estimate).
- **The 0.6 content-word threshold was never measured.** In the one real run no case failed on content, so there is no distribution to judge it against yet.
- **The Drive upload is blocked by instruction, not by code.** The design agent is only told to skip it, so the completion report checks separately that its link list is empty.

## Two lessons that cost something

**Inserting a row renumbers everything below it.** The coverage ledger points at cases by number, so stitching in a row makes the whole ledger stale. My first instinct was to remap arithmetically. Wrong. It now joins **by content, not position** — category, verification stage, and the reproduction step. Positions move; content doesn't.

**Hand-driving costs half the clock.** I once ran the stages manually one at a time. Wall clock was 2h23m; **the machine actually worked for 1h12m.** The rest was the pipeline waiting for me to type the next command. That number is the reason unattended completion exists.

## Things that were rejected

The version history is mostly a list of **things that looked like progress and weren't.**

Vocabulary-based progress detection — rejected after two measurements. Unifying the thresholds — rejected. The confidence heatmap ended up as **pure deterministic output with zero model calls**, after the model-scored version failed to reproduce.

Every rejection got a written resume condition. Without one you re-propose the same idea six months later.

## An honest limit

A thin spec produces thin output. This tool **will not invent design that isn't there** — with no basis for a case, it flags "needs spec clarification" and moves on. I think that's correct, but in an organisation where specs are thin it yields less than people expect.
