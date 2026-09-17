# Prime Agent

> I read the code and came away with four techniques. The best of them was something I'd written down myself five days earlier.

- Headline number: top find was a rediscovery
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/prime-agent/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/prime-agent/index.md
- Repository: https://github.com/PrimeIntellect-ai/prime-agent
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A coding tool that claims to improve itself. I rejected it. The part that hurt was not the target — it was that the thing I ranked as my best takeaway was a sentence I had written down myself five days earlier.**

> **[도판]** An open-source coding and research CLI from a distributed-training startup. 350k lines of source, three months old, eight releases in nine days.
>
> How Prime Agent is structured. A TypeScript host manages a daemon and session workers, and the model's only real tool is IPython. File editing, shell, skill invocation and spawning subagents all happen as Python calls inside it.

## Where it claims to differ

It competes for the same slot as the AI coding tool I use, with one different premise.

Normally **every conversation starts fresh.** What you did yesterday continues only because it was written to a file.

This one claims **the session stays alive and the AI edits its own configuration as it goes** — writing down *that approach did not work, try this next time.*

## The best design decision — "spawn a child and never wait for it"

The most impressive thing technically.

When an AI delegates to a sub-worker, it normally **waits for the answer.** It does nothing in the meantime.

This one **forbids that outright.** The call that spawns a worker **never returns a result.** It hands back a receipt and ends. The result arrives later, as a file or a message.

That makes **"stuck waiting" structurally impossible.** There is no way to wait.

The method is what I liked. Rather than writing *please do not wait*, **they removed the road on which waiting is possible.**

## But the evidence for the claim is not about coding

**"The AI improves itself"** is the banner. I followed the sources.

| Source cited | What it was validated on |
|---|---|
| The self-improvement paper | **Pokémon** |
| Another source | Long-document and research tasks for a small model |
| **Coding benchmark results** | **Zero in the repository** |

It is a coding tool with **no material validating it on coding.**

Doing well on Pokémon does not guarantee doing well on code. **The claim and the evidence are in different domains.**

## Two decisive reasons to reject

**One — the core does not run.** This AI has **exactly one tool** available to it, and **the code that launches that one is broken.** Install it the long way around and the core still does not run.

**Two — there are zero approval gates.** My safety principle is **when it is ambiguous or it fails, the default is not to act**, and I keep a graded list of things **a human must approve.**

This thing **executes all of that without asking.** Head-on collision.

## And the part that hurt — the best takeaway was a rediscovery

Four techniques came home. The one I ranked first was:

> **If the artefact did not change, do not re-run the verification.**

A good rule. **And it was already in a report I had written about the same target five days earlier** — complete with **where to apply it and when to revisit.**

Worse: **I had gathered every past analysis link into a searchable index.** And **I did not open it.**

So: **I built the thing that makes it findable, and did not look.**

## And in the same investigation, two verdicts about myself flipped

While this research ran, **two judgements I had made about my own setup** turned out to be wrong. Things I had written down as *already doing this* were not, **on opening them.**

The same mistake appears in other pieces — **mistaking written guidance for implemented state.**

## What came home, and with what conditions

| What | Verdict |
|---|---|
| Give memory **history and a way to roll back** | **Taken** — right now a badly merged memory has nothing to roll back to. ⚠ Excluding **anything that applies automatically** |
| A **size ceiling** on the always-loaded index | Parked — revisit when the index passes a threshold |
| Derive output length from the model | Parked — revisit **the first time output is observed truncating on a large input** |

## The rule that stays

> **What a blog says, what the code says, and what my own environment measures are three different answers.**

The three gave three different conclusions here. **And the later ones were right.**

## The detailed record starts here

**The tool was rejected; four techniques came home. And the best of those four was a rediscovery.** The sentence I ranked first today **was already in my own report on the same subject from five days before, with the application sites and the resume condition already written out.** I have a searchable index of everything I've collected, and I didn't open it. In the same investigation, **two verdicts I'd made about myself were overturned.**

## What the thing actually is

**An agent CLI aiming at the same slot as Claude Code or Codex CLI**, with one different design premise.

> Don't give the model a tool list. **Give it one Python interpreter and let it write the rest as code.**

So the only tool the model sees is `ipython`. Reading a file, editing one, running a shell command, spawning a child agent — all of it happens as Python calls inside that. **Python state — variables, imports, functions, parsed results — survives across tool calls and context compaction.**

Two headline claims, each with its own source paper.

| | What | Source |
|---|---|---|
| **Recursive language model** | A **persistent REPL** where context is a variable and tools and subagents are function calls | company blog |
| **Continual harness** | Prompts, memories, skills and subagent specs held as persistent state that the agent **updates itself through small, evidence-backed edits** | a paper |

The scale: 14,647 stars, 1,528 forks, **three months old**, MIT. About 350,000 lines of source with 420 test files and 156,000 lines of test — 45% of the whole. Eight releases shipped in nine days.

There are conditions attached to that health. **545 open issues**, and skimming the titles they cluster overwhelmingly around daemon and worker lifecycle bugs — wedged daemons, in-flight operations dropped during worker adoption, supervisor restarts racing a dying worker, kernel execution with no timeout. And one file runs 11,288 lines. **The bus factor is 2** — 68% of the last fifty commits came from two people.

## The four most interesting design decisions

**It spawns children and never waits.** The call that spawns a subagent **never returns the child's answer.** It returns a handle immediately and that's it; results arrive only as messages or files. **It structurally forbids a parent from blocking on a child.**

**Memory has scope, version and rollback.** Each harness entry carries `version`, `created_at`, `source` and `scope`, and the default scope is **session-local**. Promotion to global happens only for "a stable lesson that outlives the session," and during local refinement **global entries are read-only** — proposing an edit to one is forbidden outright. Refinement history is written to a file, so **any change can be reverted by id.**

**The always-loaded overview has a cap.** However many harness entries exist, the system prompt carries only **six per kind, 180 characters of content, five history items**, with the rest represented as `+N more`. The prompt says so explicitly: *"this is a summary, not a full account. Use it as a routing hint and read the original when you need it."*

**The output budget is derived from the model, not a constant.** `Math.min(model.maxTokens, 32_000)`. The reason is in a source comment, and it's a good one — **as the harness grows the input grows, and a constant output ceiling silently truncates exactly the largest and most important multi-edit proposals.**

## What broke — four places

**① The claim that a coding agent improves itself has no coding evidence.** The self-improvement paper was **validated on Pokémon**, and the REPL blog covers long-context and research tasks on a single small model. And the **repository contains zero coding benchmarks.** There's a domain gap between the claim and its evidence.

**② It looks like an independent project and is a hard fork of another one.** The internal package names are the upstream project's, verbatim, and the README admits it. 32 modules are original and **15 were removed from upstream.**

**③ Among those 15 is the trust-and-approval layer.** Searching the whole repository for approval identifiers returns **zero.** **Python written by the model executes with the user's privileges, with no approval step.** The bundled sandbox example wraps the shell tool — and as shown above, **the default runtime's only tool isn't the shell, it's IPython.** The sandbox doesn't cover the actual execution path.

**④ The Windows kernel bootstrap is broken at the code level.**

```js
const python = path.join(venv, "bin", "python");   // on Windows it's venv\Scripts\python.exe
```

**There's already a platform branch higher up the same file** — only the interpreter path is hardcoded POSIX. The official install script also gates on the operating system.

## Held against my environment — the tool is rejected

Two things decide it. **The agent's only tool is IPython, and the path that starts that kernel is broken in code** — a workaround install still leaves the core function dead. And **zero approval gates collides head-on with my own safety boundary**: everything I've graded as "human approval only" becomes an unapproved execution target.

The resume condition is on the record too — **① the interpreter path is fixed and ② the approval layer is restored, or a sandbox covering the real execution path ships by default.** Either one alone doesn't reopen it.

⚠ Honestly stated: **this is a static code reading, not an actual install.** The reason for not running it holds up, though — attaching an agent with zero approval gates is itself a violation of my own rules, and the installer refuses the platform anyway.

## So what came home — and why the best of it was a rediscovery

**First place: don't re-run a verification when the artifact hasn't changed.**

When a quality gate fails in autonomous mode, it snapshots the state of the working directory. On the next attempt, **if the snapshot is identical it doesn't run the gate at all** and only increments the failure count. That structurally eliminates the classic autonomous-loop waste — re-running the same test when nothing was fixed — and makes the retry ceiling count **only attempts where something actually changed.**

**And that sentence was already in my report from five days earlier.** That one analysed the same subject from its blog and threads, named two application sites in my pipelines, and wrote down the resume condition. **What I actually gained today isn't the verdict — it's the fact that five days passed and I still hadn't wired it in.**

> I have an index of everything I've collected, made searchable, and I didn't open it. **Build the tool and never open it and you repeat yourself exactly the same.**

The other three landed like this.

| Harvest | Verdict |
|---|---|
| Attach history and rollback to memory | **Adopted** — right now nothing in any file lets me undo a bad merge. But **automatic application is excluded** |
| Cap the always-loaded overview | On hold — resume when the index passes a set size |
| Derive the output budget from the model | On hold — needs checking first. Resume the moment truncated output is observed once on a large input |

## Today corrected five days ago, twice

> **[도판]** Reading the blog, reading the code, and measuring my own setup each gave a different answer.
>
> The same subject read three different ways. Reading only the blog and threads, reading the code directly, and measuring my own environment each produced a different conclusion.

**Correction one.** My stack comparison had recorded a certain learning system as "already have it." Measuring it: **zero stored entries, zero hooks wired — an empty shell.** The premise that self-correction ran on two channels collapsed; one channel actually runs.

**Correction two.** The source describes its improvement loop as *"evidence-backed rather than arbitrary."* Reading the code, the recorded 'outcome' field is **the model's own advance prediction.** The evidence persists; the outcome doesn't. **Half true.**

Put the two together and something larger falls out. **My learning loop and this repository's learning loop share the same decisive flaw — nobody measures whether the change helped.** Their structure is more sophisticated than mine (scope, version, rollback, caps), and they handle that flaw worse: storing a prediction in the outcome field means **the loop can't even tell that it's open.**

## The rule that stays

> Reading the blog and threads, reading the code, **and measuring your own environment** each give a different answer.

Skip the third and you end up **delivering "we already have this" against an empty shell.** That is literally what happened on this page.
