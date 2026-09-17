# DeepSeek Harness

> I set out to harvest five techniques from a 181,214-star repo, and every one of them died on two skills I had installed and never once run.

- Headline number: 5 harvests → 0
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/deepseek-harness/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/deepseek-harness/index.md
- Repository: https://github.com/deepseek-ai/deepseek-harness
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A large repository with 181,000 likes. I set out to harvest five techniques and all five died — and three of them died on two tools I had installed and never once switched on.**

> **[도판]** "Plugin tree" does not show you this. Splitting a capability into three is what this thing actually is.
>
> How dsh boots. A base bundle plants 78 rows at once, and on top of it a profile bundle, a home patch and a launch-time overlay each overwrite in turn. The rows that result form capability seams, and a capability counts as a seam only when it has a row defining the interface, a row implementing it, and a tool row the model sees. So swapping the one implementation row makes the rest move with it.

## What it is — not a program but a parts list

An AI coding tool is normally built as **one program.**

This is different. It is built as **a list of rows, every one of which can be swapped.**

Which AI to use, which tools to grant it, how to record history — **even the way the AI loops** is **one row in the list.** Swap the row and the behaviour changes.

Booting is not *run the code in order* but **stack the configuration rows.** A base bundle lays down 78 rows, a chosen bundle stacks on top, a personal patch overrides, and finally a per-run overlay overrides that.

And the good part: **when it overrides it does not merge, it replaces wholesale.** So **no half-blended state exists.** Every row came from **exactly one place.**

## The most useful rule — "a capability needs all three roles"

The most valuable thing here was not a program but **a rule about the unit of division.**

Adding a new capability counts as **one piece only when three parts are present.**

| Part | What |
|---|---|
| **Definition** | Declaring the shape of the capability |
| **Provision** | The part that actually does the work |
| **Consumption** | Wiring it so the AI can call it |

Have one and **it does not count as a piece.**

Why that matters: **the most common accident is building something and never wiring it up.** The thing exists and nobody can call it. Framed this way, **that state is structurally classified as incomplete.**

## And the configuration records its own provenance

Dump the merged configuration and **each section carries a comment saying which layer it came from and which layer overrode it.**

In a layered configuration the most frequent question is **"why is this value like this,"** and here **the configuration itself holds the answer.**

## But it would not install

I typed the first line of the README exactly.

**Three hundred seconds of silence, then it died.**

I found the one workaround and installed it. **It crashed on first run.**

## And all five harvests died

The subject of the piece. **Three of the five died for the same reason.**

Held against my environment, **I already had the same thing.** And it sat **inside two tools.**

And those two tools — **were installed and had never once been executed.**

The other two collapsed from *harvest a technique* into **"change two lines in my own code."**

## So what was missing was not a tool but a run history

To summarise:

| | What I thought | Actually |
|---|---|---|
| What is missing | **The technique is missing** | The technique is present |
| What is genuinely missing | — | **I have never switched it on** |

This is the recurring conclusion on this shelf. **"Absent" and "present but never switched on" are entirely different states**, and **a listing of files makes them look identical.**

And **a tool never switched on produces the same outcome as one that does not exist.** It is worse in one respect: **it makes you believe you have it.**

## How to read the popularity numbers

**181,000 likes** is a big number. Reading the neighbouring numbers changes the picture.

| Measured | Value | What it means |
|---|---|---|
| Likes | 181,214 | **Nine days after going public** |
| People actually watching it | 792 | **0.44% of the likes** |
| Issues and pull requests | **Both closed** | No channel for outside participation |
| Formal releases | **0** (all pre-release) | No compatibility promise |
| Contribution concentration | One person at **40.1%** | Effectively made by a few |

The gap between 181,000 likes and 792 watchers is what tells you the character of this repository. **Many people have heard of it and few are using it.**

And **zero formal releases** means **breaking compatibility tomorrow would not be a broken promise.** Not a state to put into working use.

## And a trap in the licence

The repository itself is permissive. But **some features pull in third-party components under different terms.**

**Reading only the label on the front of the warehouse misses it.** You have to look at **what actually comes along at install time.**

## The detailed record starts here

**I tried to harvest five techniques, and all five died.** DeepSeek Harness (`dsh`) takes a coding agent apart entirely and rebuilds it as **a list of rows in a config file**. The model adapter, the tool registry, the session log, even the agent loop itself — each is swapped by editing one row. The design is real. But when I held the harvest up against my own setup, three of the five collapsed against **two skills already sitting in `~/.claude` that had never once been executed**, and the other two folded from "import a technique" into "edit two lines". What I was missing was not a tool but **a record of running one**. As a bonus, the install command on the first line of the README sat silent for 300 seconds on this machine and then died (EXIT=124), and the only workaround crashed on first run.



## This is not a product, it is a swappable list of rows

**`dsh` is an open-source agent harness from DeepSeek.** What actually runs is a "plugin tree", and booting is not calling code in order but **stacking config rows**. A base bundle plants 78 rows at once, the bundle the profile picked lands on top, a patch left in the home directory covers that, and finally the overlay handed in at launch covers everything. A patch names a row by id and **does not merge the config — it replaces the row whole.** There is no half-mixed state.

At the centre of the runtime rules sits one more invariant. <strong>"What the model sees is what was recorded"</strong> — everything that reaches a model request must be reconstructible from an append-only session log, and the runtime enforces that. Forking, resuming, transcripts and telemetry all derive from this single stream.

| Item | Measured 2026-08-22 |
|---|---|
| Scale | 7,903 files · 26MB of TypeScript · **227** pnpm workspaces (50 groups) |
| Source vs. tests | src 1,389 files 10.53MB ↔ tests 909 files **12.56MB** — by bytes, the tests are bigger |
| Popularity | ★**181,214** · 19,815 forks — public since 2026-08-13, so **that is nine days** |
| Engagement | 792 watchers (0.44% of stars) · Issues and PRs **both closed** · 3,894 discussions |
| Contribution | 13,145 commits · the top contributor alone is **40.1%** · top three 61.1% |
| Releases | 4, **all rc** · 0 stable tags · session format version 0 (no compatibility promise) |
| Licence | MIT — except the subagent backend pulls in a **non-permissive SDK** |

**Thirteen thousand commits in nine public days.** The dates on the decision records reach back two months — this was built privately for a long time and then published history and all. One thing here cost me something to learn: **181,214 stars and "proven software" are different axes.** When watchers are 0.44% of stars and both Issues and PRs are shut, that 181,214 is a bookmark count, not a usage count.

**And the number moved while I was writing it down.** My collector caught 170,925 at 07:11 on 08-20; the morning I started the teardown it was 181,170; filling the table above it was 181,214; writing this paragraph it is **181,723**. That is **+10,798 in two days**, and **+553** in the hours it took to write this. So read the ★ in that table as **a timestamp, not a value**. This repository demonstrated for me why not using stars as evidence isn't a preference.

## A capability is a seam only when all three roles are present

The most valuable rule in this repository is not the plugin system but **the unit it slices a capability into**.

| Technique | What |
|---|---|
| **Three roles enforced per seam** | A capability needs all three roles — the **definition** declaring the interface, the **provider** implementing it, and the **consumer** using it (usually the tool the model sees). The rules state flatly that one role alone is not a seam, and the package name is the role |
| **Provenance comments on rows** | Dump the merged config and each span carries `# == which layer, patched by which layer`. The config writes down for itself which layer wrote last |
| **What is off stays in place** | A profile does not delete the base's row; it covers it with `disabled: true`. "Absent" and "switched off" stay distinguishable |
| **Code Mode** | The whole tool schema is folded down to a single `run_code` for the model, and sub-calls run inside the program. Each sub-call is recorded, but only the tidied outer result enters model history |
| **Docs generated, then re-verified** | Catalogues and module graphs are generated from code, and the same script is run again with `--check` to see whether it matches the committed bytes |
| **Decision records managed by path** | When a status changes, the folder moves (proposed/implemented/rejected/archived). A central index file is **forbidden** |

**Two of these — provenance comments and disabled rows — I would never have seen by reading the code.** They only came into view once I actually booted it and took a dump.

## What broke — the first line of the README does not hold right now

**Install it the way the docs tell you and it does not install.** In an isolated folder I ran `npm install @deepseek-ai/dsh` with a 300-second limit, and it sat silent with a **0-byte log file** until it timed out (EXIT=124). Add `--legacy-peer-deps` to the same command and it finishes in 30 seconds — meaning the cause is not the network but backtracking through the peer dependency graph. Install it for real and you get 430 packages, 260MB — and the first run dies with `ERR_MODULE_NOT_FOUND`. The boot-glue package declares exactly one `dependencies` entry and puts **all nine packages boot cannot start without into `peerDependencies`**, and that flag is precisely the one that does not install peers.

There is an irony here. **The rule I praised above — a seam needs all three roles — shipped from the published packages with the definition role missing.** The rule is enforced inside the repository only; nothing hangs it on the publish pipeline.

The three headline claims checked out like this.

- **"Fail-closed process isolation" is a file-write fence.** The repo's own documentation says <strong>"file effects are the whole of the policy vocabulary"</strong>, and the actual profiles carry no network-blocking argument. In the default mode a sandboxed tool can read `~/.ssh` and ship it out over an unrestricted network.
- **"What the model sees is what was recorded" only guarantees the write side.** After an interrupted turn the writer restarts sequence numbers from a stale counter, the log becomes unreadable whole, and in one report **127 events actually vanished.** Because the log is the only original, one writer bug destroys a whole session — this is the price of a single-source design, realised.
- **Some of the 39 gates are not wired into any CI at all.** And the unwired ones are red on the default branch right now. The number 39 meant "these exist", not "these run".

> **[도판]** The install measurement and the harvest verdict are different axes. Adoption was blocked by the install; the harvest was blocked by my own store.
>
> The result of measuring the install three ways, and the verdict on five harvest candidates. Following the docs gives 300 seconds of silence and a timeout, the community workaround installs but crashes on first run, and installing the missing dependencies by hand exits cleanly in 884 milliseconds. Of the five harvest candidates two were cut down and three rejected, leaving nothing.

## Booting it anyway was worth something

**After installing the missing dependencies by hand, I dumped the merged config.** 503 lines · **135 rows** · **25** of them `disabled: true` · 24 provenance comments splitting three ways (written by base / base overwritten by the profile / newly written by the profile). You cannot see this by reading the code. **The web profile does not delete the base's rows; it leaves them in place and switches them off** — 25 rows out of 135.

Held against my own side, the picture was exactly inverted. The agents under `~/.claude` have 46 active ones scattered among 24 `.bak*` files and 7 in `archive/`, so **you cannot count the active ones from the file listing alone.** "Switched off" is split across two mechanisms: renaming the extension, and moving the folder.

And I weighed my always-on instruction stack for the first time — 20 rules plus the index memory plus the descriptions of 99 skills comes to **roughly 27,244 tokens**. ⚠ That is an estimate from a character-count heuristic rather than a real tokeniser, so **assume ±30%**. Not one of those pieces has a switch.

## What killed all five harvests was sitting in my own store

In the stage where I break my own verdict, five candidates fell one after another.

- **Merged-config dump → cut down.** Half the output — the size inventory — is already done by the `context-budget` skill. The other half aimed at an incident that was already closed: a config import being **ignored without a single warning** depending on which folder it sat in, so the same file came out as 50,000 tokens in one place and 0 in another. That was measured, checked exhaustively, and written into a standing decision. I was proposing an approximating script to replace a measurement I had already taken.
- **Regeneration verification gate → cut down.** The hole was real but the technique was oversized. The target repo splits generation from verification because CI must not write to the repository — my site's `scripts/deploy.mjs` **already writes freely.** What is needed here is not verification but regeneration, and calling the generator in two lines before the build ends it.
- **`disabled` row convention → rejected.** The `config-gc` skill already carries a **soft delete → trash folder → reason log** convention. Adding one more manifest on top would mean inventing **a fourth convention** in the name of fixing convention sprawl.
- **Dependency-declaration guard → rejected.** The publish checklist already has two items of the same family, and decisively, **none of the repos I publish is an npm package.** It was not "free because it takes ten minutes" — it was free because the benefit is zero.
- **Rule profiles → rejected.** The ladder for narrowing scope is already canonical in my memory, and it is already measured that a global rule propagates all the way into child sessions, so **there is physically no way to switch one off.** Filing this as "on hold" would just bring the same proposal back in six months.

**Both skills that killed three of the five had zero execution history.** `context-budget` leaves no trace beyond a one-line note about where it came from, and `config-gc` — the log file and the trash folder it instructs you to create — **neither of them exists.** It has never run.

⚠ The worse part is that this is not the first time. The last line of [the ECC teardown](/en/teardowns/harness/ecc/index.md) read <strong>"two tools for trimming context, installed six months ago and never once run — running them is what this investigation left as first priority."</strong> **The same two tools.** I wrote "first priority", never ran them, and then tore apart another repository to fill the same gap.

## Verdict — and where I was wrong

| Item | Call |
|---|---|
| Adopt the tool | **Rejected.** Both install paths are blocked, 0 stable releases, Issues and PRs shut |
| The five harvests | **0 adopted.** 3 rejected · 2 cut down to "run what I already own" |
| Reopen when | ① at least one stable tag ② it installs in under five minutes with no flags and `--help` exits cleanly ③ Issues or PRs open — **all three** before I measure again |
| And even then | A real quality comparison needs an API key. If key issuance is not approved, re-evaluation is permanently rejected |

⚠ **My first-pass verdict was wrong twice.** I first wrote "there is no CLI, only a web UI" — in fact the CLI is the product launcher and `web` is a subcommand of it. I had transcribed the community's complaint that "there is no TUI" as "there is no CLI". And I coined the name "fail-closed process isolation" myself, when the reality is a file-write fence. **Get the name wrong and the name contaminates the next verdict** — that was the slide straight into "there is a sandbox, so I can treat it as a trust boundary".

**What I did not do, on the record.** First, **I could not measure whether this harness makes outcomes better.** The project's own benchmark document contains no numbers at all, running it needs an API key, and creating accounts is on my prohibited list. Second, the install measurement was taken on one rc version on one Windows machine, so it does not generalise to other environments. Third, for the session-log corruption I only confirmed someone else's report against the code; I did not reproduce it. Fourth, the 27,244-token instruction stack is an estimate.

**What cost me something in this teardown is not a technique but a method for gap analysis — measure only "what do I have" and never "have I ever switched it on", and you conclude that you should go out and buy what is already in your store.** Of the four tasks this investigation actually produced, not one came from dsh. Two are five-line edits to my own site scripts, and the other two are **running a skill I installed six months ago, once.**
