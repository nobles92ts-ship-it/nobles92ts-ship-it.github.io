# ECC

> I took apart the upstream of my own configuration. What was worth taking wasn't a feature but a measurement — and that measuring tool wouldn't run here.

- Headline number: 1 of 285
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/ecc/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/ecc/index.md
- Repository: https://github.com/affaan-m/ECC
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A repository that calls itself an operating system for AI coding. It advertises 285 tools. Opened up, most of them are documents, and what I actually took was one thing.**

> **[도판]** The most distinctive design. Every hook goes through one bootstrap, and whether it runs is decided by matching its tag against the active profile.
>
> How ECC's hooks work. On every tool call an obfuscated one-liner scans the home directory to locate the install, delegates to a bootstrap, and a dispatcher decides whether to run each hook by matching its strength tag against the profile the user selected.

## The pitch

The argument is:

> **Stop rebuilding your development process into every prompt. Install it once and make it the AI's default character.**

The premise is sound. Repeating the same explanation is waste.

The scale:

| | Count |
|---|---|
| Tools (skills) | **285** |
| Specialist agents | 68 |
| Rule files | 122 |
| **Total files** | **3,458 · 88MB** |

## But "285" is a document count, not a tool count

The first finding.

I opened the headline techniques **file by file.** Four of the flagship ones are **each a single document with zero lines of executable code.**

More decisively, the code samples inside those documents are **not code that runs.** They illustrate *you would do it roughly like this*; they are not working parts.

**73% of all files being markdown** bears this out.

→ To be clear: **this is not a criticism of documents.** But *285 tools* gets heard as **285 things that run**, and what is there is **285 explanatory documents.** Those are worth different amounts.

## The single best page in it — five ways a loop breaks

Documents are not worthless. The best thing in this repository is one page listing **five ways telling an AI "keep going until it works" goes wrong.**

| How it breaks | Why |
|---|---|
| The goal is **an unjudgeable slogan** | *Manage it well* has no end state, so **it loops forever burning money** |
| **It verifies itself** | Ask *does this look fine* and it **says yes confidently and stops** |
| **Only "all tests pass" as the condition** | The worst one — **the AI deletes the tests.** Deleted tests all pass |
| Expecting it to ask midway | **It does not ask; it carries a wrong answer to the end** |
| Bloated instructions, stale memory | **The faster it loops, the more wrongly** |

The third is frightening. A person reads *make all the tests pass* as *fix it properly*; **a machine reads the word "pass."** If deleting is easier than fixing, it deletes.

Hence the prescription: **pair the finishing condition with a line that must not be crossed.**

## Another good one — "ask someone with no memory"

A way of reviewing twice where **the second review goes to a fresh AI that knows nothing.**

The reasoning is good. Ask the same AI again and **it is dragged along by the judgement it just made.** Having said *fine* once, it says fine again.

And this sentence is attached:

> **An issue only one side caught is still a real issue. What the other side missed is precisely why this method exists.**

Meaning that when two reviewers disagree, the rule is **not "disagreement, so hold" but "if one saw it, it is real."** That is a decision rule worth using as-is.

## Held against mine, six of seven were already there

I matched the seven flagship techniques one to one against my setup. **Six were already present, and generally in a stronger form** — because mine are **running code rather than documents.**

## The one genuine gap — measuring whether the AI kept the rules I wrote

Exactly one thing I did not have.

I have written down a lot of rules. And **I had never measured whether the AI actually followed them.** Having written them and having them observed are different things, and I had no instrument for the gap.

This repository had that instrument, **in the one place where executable code existed.**

## So I ran it — and it did not run

I did not trust the docs; I executed it. **It died in four places.**

| Symptom | Cause |
|---|---|
| Korean text garbled | **No encoding specified** when reading files |
| Could not find the executable | Not searching for the extension Windows appends |
| Output written to the wrong path | **Another operating system's path hard-coded** |
| Garbled on write too | Same cause as above |

All four are **Windows-only failures.** The author had only ever run it elsewhere.

## Verdict — not taking anything is the result

| What | Verdict |
|---|---|
| The 285 tools | **Not taken** — mostly documents, and what I need is already here |
| **Managing a guard by *strength grade* rather than on/off** | **Taken** — it names precisely the problem of having nothing between on and off |
| The rule-compliance measurement tool | **Parked** — repaired as far as running; confirmation outstanding |

*One out of 285* looks thin. That is the conclusion of the piece.

**The bigger someone's warehouse, the easier it is to slide past on "surely more is better."** Until you open each one and hold it against your own, you cannot tell whether 285 is 285 of anything.

## The detailed record starts here

**Out of a repository with 285 skills, exactly one thing got adopted.** The QA and loop techniques it advertises I already had, arrived at independently and mostly in stronger form. The one axis I genuinely lacked was **a tool that measures whether an agent actually followed the rules I wrote** — and **that tool wouldn't run in my environment.** The leading hypothesis for why is a failure mode this repository itself warns about.



## What the repository is

**Everything Claude Code — it presents itself as an "operating system" for agent harnesses.** The pitch: stop rebuilding your development process on every prompt, and **install it once so that it becomes how the agent works.**

The loop it hardcodes:

```
plan → test → implement → review → verify → remember → improve
```

Its slogan is **"Optimize the context window. Persist everything else."** — put as little as possible in context and push state down into files, hooks and memory. That slogan comes back to bite it later on this page.

| | Measured |
|---|---|
| Skills | **285** |
| Agents | 68 — review, build repair, architecture |
| Rule files | 122 — 24 language groups × 5 fixed types |
| Total | **3,458 files · 88 MB** (73% markdown, 492 JS, 63 Python) |
| Licence | MIT |

**It matters to me for a specific reason: this repository is the upstream of my own `~/.claude`.** I copied it out as files six months ago, and **there is no auto-update.** So this wasn't browsing someone else's repo — it was **opening the original of something I already run, and measuring the drift for the first time.**

## Six named techniques — and the single most valuable page in the repo

| Technique | What | Executable code |
|---|---|---|
| **Santa Method** | *"Make a list, check it twice."* Two independent reviewers, and **both must pass** to ship. On failure, fix and **re-review with a fresh agent that has no memory** (to break anchoring); after three rounds, escalate to a human | none |
| **loop-design-check** | A judgement-only skill you run before building a loop. **A step-zero veto gate**, plus five collapse modes | none |
| **skill-comply** | **Measures** whether skills and rules are actually followed. Derives expected behaviour from the docs, runs it under three pressure levels, and traces the tool calls | **yes** |
| click-path-audit | For bugs where each function works and the combination breaks. Traces call order and state reads/writes | none |
| delivery-gate | A stop hook that blocks session end using deterministic checks only | yes |
| agent-sort | Sorts skills and rules per repo into daily and library buckets | none |

The reasoning behind Santa Method is good — **"an issue only one of them caught is still a real issue. The other one's blind spot is the whole reason this method exists."**

But the most valuable thing here isn't a skill. It's **the five collapse modes that loop-design-check tabulates.**

| # | How it breaks | Antibody |
|---|---|---|
| 1 | The goal is a correct-sounding slogan ("manage it well") → **nothing can adjudicate it** → it runs forever burning money | Replace it with an outcome a machine can judge |
| 2 | Verification is "look at whether it seems fine" → the agent **confidently says it's fine and stops** | Separate the judge from the defendant. External comparison plus exit codes |
| 3 | **(worst)** Gate only on "all tests pass" → **the agent deletes the tests** | Set the completion condition and the boundary condition together |
| 4 | Expecting to be asked mid-run → **it never asks and drives a wrong answer to the end** | Finish every clarification before departure |
| 5 | Bloated instructions plus stale memory → **the faster the loop, the more wrong it gets** | Layered memory plus periodic linting |

Numbers 3 and 5 come back later on this page.

## What broke — "285 skills" is a document count, not a tool count

Opening the advertised techniques file by file: **Santa Method, agent-sort, click-path-audit and loop-design-check are each one document with zero executable code.** The Python inside Santa Method is **pseudocode** — `fix_agent.execute(...)` and the like. The fact that 73% of all files are markdown supports this.

So it's **a collection of prompt patterns, not a framework.** The parts with real code are skill-comply and delivery-gate.

**The hook bootstrap is a supply-chain surface.** Install the plugin and every Bash, Edit and Write call runs an obfuscated one-liner that loads code from a path discovered by scanning your home directory. It works — but **one bad hook blocks tool use itself.**

**And the repository violates its own rule.** All 285 skill descriptions sit resident in context, which is precisely what collapse mode 5 above warns against: *bloated instructions mean the faster the loop, the more wrong it gets.* Which is why ECC also **ships tools for trimming itself.**

**What held up, on the record.** Every health claim was true — MIT, 11 CI workflows, 248 test files, supply-chain monitoring, a commit on the day I looked. **"285 skills" matched a directory count exactly**, with no inflation.

## Held against mine, one by one — one of seven

> **[도판]** Compared technique by technique, not by skill count. Most of the advertised techniques I already had, independently, in a stronger form.
>
> The upstream's 285 skills and my 102 overlap at 60. From the non-overlapping upstream side I shortlisted seven and adopted one — and that one wouldn't run in my environment.

- **Santa Method → rejected.** The adversarial review in my own pipeline is the superset. Not two reviewers but **three lenses in parallel with an adjudicator that rebuts them**, and the final gate is **deterministic code**, not an LLM verdict. The rubber-stamping failure Santa worries about is structurally impossible there
- **loop-design-check → checklist only.** I already had its three core ideas: a **free oracle** (a build that passes on product criteria is the answer key, so every failure is an automation defect), a **negative trial** (evaluate the rule against the wrong screen too, and reject it if it matches anywhere), and a **record / judge / diff split** that makes re-adjudication cost nothing
- **click-path-audit → procedure only.** The patterns assume the web and don't fit, but **the procedure — trace call order, trace which call reverts which state** — ports to a game engine
- **delivery-gate → rejected.** It duplicates a weekly human-approval gate and collides with my fail-closed principle
- **agent-sort → rejected.** **Two tools already do this job and I've run neither.** A third isn't a solution, it's a deferral

**Which leaves the one real gap — skill-comply.** Everything I have checks **artifacts**: whether the docs match reality, whether the canonical copy has drifted, whether cases meet the format. **There is nothing that measures whether an agent followed the rules**, and I have never once measured compliance across my eighteen rule files.

## So I ran it — and it failed

Being the one real gap, I ran it rather than trusting the docs. Every prerequisite was already in place.

**First, four Windows blockers, found and fixed.**

| Symptom | Root cause |
|---|---|
| Decode failure on Korean documents | File reads specify no encoding → Windows uses the legacy code page |
| Executable not found | `claude` is actually a `.CMD`, and process creation doesn't do extension resolution |
| Output written to the wrong path | A Unix temp path hardcoded |
| Decode failure on the write side | Temp-file writes also specify no encoding |

All four are **still present upstream.** On Windows with non-ASCII content it dies on the first line. After the fix, all 33 unit tests still pass.

**Then the actual measurement failed on all four combinations.** The diagnosis:

```
prompt_len = 2396   ← template substitution fine. Nothing to do with argument limits
stdout_len = 34     ← the response is abnormally short
actual      = "How can I help you? (current working directory: …"
```

**A 2.4 KB instruction gets ignored wholesale and a conversational greeting comes back.** Parsing that greeting as YAML yields a string, and pulling a field out of a string is where it dies.

**Established: the failure is in the contract layer, not encoding.** The prompt assembles intact, the exit code is clean, and the promised format simply doesn't arrive.

**Not established: why it's ignored.** The leading hypothesis is that **the subprocess inherits the global instructions and hooks wholesale, burying the embedded instruction.** An isolated-environment test was invalidated by an authentication problem, so this stays an estimate.

## Verdict — not taking anything is the result

| | |
|---|---|
| The strength-tier idea for hooks | **Adopted** — it names exactly what's wrong with binary on/off |
| skill-comply | **On hold** — the tool is repaired; what remains is one confirmation of the hypothesis |
| The five collapse modes | **Adopted as a checklist** — run against the next loop I design |
| Santa · delivery-gate · agent-sort · full install | ⛔ **Rejected** — each with its resume condition written down |

**That there was almost nothing to take is itself the finding.** My review chain and my unattended-loop conventions had **independently reinvented the upstream's headline techniques, in stronger form.**

And the last layer is the one that stung. **The one real gap was a measurement, not a feature — and the tool that measures it probably tripped over my own context bloat.** Which is the thing this repository puts on its banner (*"optimize the context window"*), the thing it can't obey itself, and the thing it names as collapse mode 5. **The same disease, three layers deep.**

The prescription is already in my hands: two tools for trimming context, installed six months ago and **never once run.** Running them is what this investigation left as first priority.
