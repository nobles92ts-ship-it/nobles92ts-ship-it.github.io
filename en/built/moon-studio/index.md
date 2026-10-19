# MOON Studio

> A one-person AI-assisted studio, its current v3 process, and a collaboration proposal for larger games. The director owns the workflow, owners deliver evidence, and verifiers judge results.

- Headline number: v3 · collaboration plan
- Status: wip
- Rendered page: https://aitryed.com/en/built/moon-studio/
- Other language: https://aitryed.com/ko/built/moon-studio/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**MOON Studio is where I set the direction and build games with AI.** The current production process is v3. One owner carries a feature through implementation, and a different agent checks the result.

**The next proposal gives development, QA, and art persistent sessions on larger games.** The director retains responsibility for the overall workflow. The proposed changes below are a published design, not a claim that the production rollout is complete.

> **[도판]** This extends v3 with persistent specialists. Ownership of the overall state stays with the director; rollout has not yet been validated.
>
> Proposed structure for larger games: one director owns scope, handoffs, the current board, and closure. Persistent development, QA, and art sessions retain their specialties. Owners submit evidence, a verifier judges it, and the director closes the work. This is a design proposal.

## I describe the change and the director scopes the work

A request such as “make the battle easier to follow” needs observable changes. The director reads the code and turns it into cards with boundaries and acceptance conditions. An owner handles the design details, code, data, and tests within that card.

**Each game has one main director session.** Claude or Codex can hold that role, with the board and cards providing continuity. Reducing the messages I have to relay between sessions is one of the goals.

## Building and judging belong to different agents

An owner's passing tests do not finish the process. After the director integrates the branches, an independent verifier launches that build and tries to break it. Checks that could not run keep their reasons.

Art follows the same distinction. For Kkaeal, Art01 handles characters and motion; Art02 handles skills, effects, and presentation. The director integrates their deliveries. **Having an image file and seeing it work in the game require separate checks.**

## The director owns the overall workflow

Once work spans sessions, someone has to track who received it and whether it really finished. The roles should remove the messages I have to relay myself.

| Role | Responsibility | Output |
|---|---|---|
| **Director** | Assign, track receipt and progress, resolve conflicts | Update the board from verification evidence |
| **Owner** | Confirm scope, implement, report progress and blockers | Submit the target version, results, and evidence |
| **Verifier** | Independently check acceptance conditions | Supported pass, failure, or unexecuted findings |

**An owner's “finished” means submitted.** The director closes the work after the required verification. That does not let the director turn a failed check into a pass.

## Separate sessions need traceable handoffs

Receipt tracking and missing-response notifications should be handled by tooling, leaving exceptions to the director. Repeating a notification must not execute the job twice. File ownership and access to the same screen also need coordination.

> **[도판]** An owner saying “finished” submits work for verification. The director closes it only after the required checks.
>
> Proposed work states: dispatched, acknowledged, working, submitted, verifying, and closed. A missing acknowledgment triggers investigation and notification, a duplicate must not repeat execution, and failed verification returns the work for repair. Closing work does not publish a release.

These are the proposed responsibilities and handoff rules. Automated receipts and notifications have not yet been implemented and validated as part of this rollout.

## Public releases and development builds have different states

I checked the public release and local production records on 2026-10-19.

| Project | What it explores | Confirmed state |
|---|---|---|
| **[Kkaeal](/en/built/moon-studio/pixling/index.md)** | Desktop creature collecting and raising | Public release v0.1.6; local v0.1.7 build and v0.2.0 test build tracked separately |
| **MukGeom** | Drawing grid patterns to counter an opponent's martial forms | Local prototype and design records |
| **ManInJeok** | Fighting crowds using the same wuxia design family | Local prototype and design records |
| **[Wuxia Unity prototype](/en/built/moon-studio/wuxia/index.md)** | The original design and implementation of 44 forms and 26 artifacts | Retained reference and earlier experiments |

MukGeom and ManInJeok share design material, but the former focuses on reading an opponent and the latter on using forms among a crowd. Shared material can produce different games. This website update does not release new game binaries.

## The detailed record starts here

## The proposal gives larger games persistent specialists

The current v3 feature owners and independent checks remain. The extension would add dedicated sessions where development and QA span multiple batches. Alongside Art01 and Art02, the proposed pilot is **director, dedicated development, dedicated QA, and art**.

Development would retain implementation context and coordinate feature owners. QA would retain baseline versions, reproductions, verification history, and outstanding checks. Judgment by an agent separate from the maker remains necessary. A persistent specialist does not have to perform every task personally, and its previous conclusions cannot replace checking a new build.

A small wording fix should not activate every session. Resuming an existing worker may be enough. The decision depends on continuing independent work and context worth retaining.

## Responsibilities need explicit state ownership

The director would own assignments, receipt and progress tracking, missing-response follow-up, cross-task conflicts, and board closure. **The current board has one writer.** Development, QA, and art should not maintain competing versions of overall progress.

Owners acknowledge receipt and scope, then work or explain what blocks them. Their results identify the build changed and the checks performed. A verifier compares that result with the approved conditions. The director records closure after reading the judgment and any outstanding requirements.

Development can delegate within its assigned scope, while the director resolves conflicts across specialties and shared resources. Decisions about taste, applying balance changes, and publishing releases stay with me.

## Prevent duplicate execution as well as lost requests

Each request needs a stable identity and revision. Successful transport, acknowledgment by the worker, submission, and a passing check represent different states. Missing acknowledgment prompts the director to check whether work is already running before notifying the same request again.

**Another notification is not another execution.** A worker that already received a request returns its current state. Receiving the same result twice must not increase the completed-work count. After an interruption, cards and result records supply the recovery state rather than conversational memory alone.

The source, assets, and approved acceptance conditions must identify the same target build. A pass on another version cannot close the current work. Failed verification returns for repair; an unexecuted check remains unexecuted.

## Evaluate the split through cost and escaped defects

Separate sessions can retain specialist context and keep long execution logs out of the director's conversation. Total tokens need separate accounting: repeated project reading, communication, and review add cost. More sessions alone do not establish a saving.

A pilot over roughly two batches would compare verification time, rework, and defects found afterward alongside missed receipts, duplicate executions, repeated explanations, and total usage. This is an evaluation plan. This website update did not implement the orchestration or rerun the game's regression suite.

## v3 assigns responsibility by feature

The production process changed on 2026-10-08. Planning, development, and QA had previously exchanged documents and messages across separate sessions. The current v3 structure has **one director per game, one owner per card, and a verifier separate from the maker**. The dedicated development and QA sessions are a proposed extension.

| Concern | Earlier process | v3 |
|---|---|---|
| Unit of responsibility | Discipline and session | One observable feature |
| Current progress | Messages and handoff documents | A current board plus cards, results, and verification records |
| Feature responsibility | Design, code, and images passed between disciplines | An owner handles the card's design details, code, data, and headless tests |

The director resolves overlapping file and function ownership before work starts. Independent tasks can run together, while Unity code work and tests that use the screen have shared resources that constrain concurrency.

## Headless tests run during implementation and screen checks follow integration

Owners write and run headless tests while implementing. A verifier checks the integrated batch on screen. Initial verification, milestones, and checks after packaging cover the wider build; a repair can be rechecked against the changed area and the preceding failures.

**Product defects, test-tool problems, known issues, and unexecuted checks retain different states.** The verifier records reproduction steps and judgments without editing the code. Repairs return to the responsible owner.

The packaged executable is checked again. Correct source code alone does not establish that the file someone receives behaves correctly.

## Art retains continuity and integration retains an owner

For Kkaeal, Art01 handles character animation, movement, and arena artwork. Art02 handles skills, effects, and presentation artwork. Unfamiliar work starts with a small pilot before expanding. Art delivers to staging, and the director installs it into the build being checked.

Since 2026-10-16, some work has also used Claude for the draft and Codex for the main production and finishing pass. Lighter work can stay with one tool. **The delivery and review responsibilities matter more than the tool names.** I make the final decisions about taste and finish.

## The version being built can differ from the version being downloaded

Kkaeal's public download repository points to v0.1.6. Its local board separately records a v0.1.7 build and development and verification of a v0.2.0 test build. The download version has not been raised merely because newer code or a test build exists.

Applying balance changes and publishing a release are separate decisions too. The production process retains a human release gate; completing a local build does not automatically publish it.

## The document tree is a reading structure

Design, specification, world, implementation, art, and QA under a game's address organize the **records for a reader**. They do not imply a permanent session for every discipline. The Unity prototype pages preserve the measurements and lessons from that version.

[Future game 1](/en/built/moon-studio/future-1/index.md) and [Future game 2](/en/built/moon-studio/future-2/index.md) are reserved document slots, excluded from counts of real or active games. Tower defence, the water-flow puzzle, and course work also remain experiment and learning records rather than current releases.

## A changed process is not yet a measured speedup

v3 aims to reduce handoff costs and messages that I have to relay. This update checks the operating rules, current board, and public release. It does not provide a new controlled measurement of the speed difference.

The studio is also a test bench where I can break my own work in public. Keeping implementation, verification, and unfinished work distinct is what makes those experiments useful to the next project.
