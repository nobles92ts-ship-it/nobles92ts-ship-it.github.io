# MOON Studio

> A one-person AI-assisted studio combining a director, feature owners, fresh verifiers, and persistent art sessions. Records the installed handoff guard, its isolated checks, and the pending game rollout.

- Headline number: v3 · coordination guard
- Status: wip
- Rendered page: https://aitryed.com/en/built/moon-studio/
- Other language: https://aitryed.com/ko/built/moon-studio/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**MOON Studio is where I set the direction and build games with AI.** The current production process is v3. One owner carries a feature through implementation, and a different agent checks the result.

**The improvement focuses on making delegated work traceable and preventing overlap.** Art retains its independent sessions, development uses owners assigned to cards, and a fresh verifier judges the result. Persistent development or QA coordinators are added one role at a time only after a real bottleneck is identified.

On 2026-10-19 I installed shared operating rules and a local guard. Its 30 isolated tests passed. Adoption by the running game and actual delivery between sessions remain unconfirmed.

> **[도판]** The v3 role structure stays in place. Handoffs, version references, and resource reservations are strengthened; persistent development and QA coordinators are conditional.
>
> The baseline hybrid structure has one director per game, owners assigned to cards, fresh verifiers of the integrated build, and persistent Art01 and Art02 sessions. The director owns assignments, the current board, integration, and closure. Additional development or QA coordinators require a demonstrated bottleneck. Installing rules and the guard does not establish game adoption.

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

The new local guard records reservations, acknowledgment, and result receipts, and checks registered resource conflicts. Existing subagents, art handoffs, and the bridge still carry the work. When acknowledgment is missing, the director checks the existing execution before notifying the same request again. An automatic monitoring and notification service has not been built.

> **[도판]** The guard's submit records evidence; finish releases resources after execution ends. A separate verifier checks the integrated build before the director closes the board.
>
> The workflow is reserve and dispatch, acknowledge, work, submit, independently verify, and close the board. Duplicate reservations return the existing execution. After submission, finish releases resources only after actual execution has stopped; it does not establish a product pass. Failed checks return for repair and publication requires separate approval.

The guard applies to participants sharing the same local state on one PC. Unregistered executions and other PCs remain outside it. Existing game runners and screen locks are still required.

## Public releases and development builds have different states

I checked the public release and local production records on 2026-10-26.

| Project | What it explores | Confirmed state |
|---|---|---|
| **[Kkaeal](/en/built/moon-studio/pixling/index.md)** | Desktop creature collecting and raising | Public release v0.2.5 (2026-10-28), after v0.2.4 (2026-10-27), v0.2.3 (2026-10-26), v0.2.2 (2026-10-26), v0.2.1 (2026-10-24) and v0.2.0 (2026-10-23); v0.1.7 was folded into v0.2.0 without its own release |
| **MukGeom** | Drawing grid patterns to counter an opponent's martial forms | Local prototype and design records |
| **ManInJeok** | Fighting crowds using the same wuxia design family | Local prototype and design records |
| **[Wuxia Unity prototype](/en/built/moon-studio/wuxia/index.md)** | The original design and implementation of 44 forms and 26 artifacts | Retained reference and earlier experiments |

MukGeom and ManInJeok share design material, but the former focuses on reading an opponent and the latter on using forms among a crowd. Shared material can produce different games. This website update does not release new game binaries.

## The detailed record starts here

## Add a persistent coordinator only for a demonstrated bottleneck

The first published extension proposed persistent development and QA coordinators together. An adversarial review found that feature owners, fresh verifiers, and independent art sessions already formed a hybrid system. Adding more coordinators could duplicate the director's explanations and progress tracking, so the baseline roles stay in place.

If dependency management or reconstructing QA history becomes a real bottleneck, pilot that role alone. First identify which repeated work the director will stop doing. A coordinator preserves state and evidence; it does not replace a fresh judgment of the integrated build.

Art01 and Art02 retain independent sessions for long production work. A short investigation or lookup of an existing result does not require a persistent session.

## Responsibilities need explicit state ownership

The director owns assignments, receipt and progress tracking, missing-response follow-up, cross-task conflicts, and board closure. **The current board has one writer.** Read its latest handover declaration, current cards, and baseline first. Historical director declarations do not confer current authority.

Owners acknowledge receipt and scope, then work or explain what blocks them. Their results identify the build changed and the checks performed. A verifier compares that result with the approved conditions. The director records closure after reading the judgment and any outstanding requirements.

The updated template calls for folding old board history into linked records at a safe batch boundary. This update did not reorganize the running game's board. Decisions about taste, applying balance changes, and publishing releases stay with me.

## Prevent duplicate execution as well as lost requests

Each card pins its identity, revision, attempt, actor, director epoch, and source, asset, and acceptance-condition digests. Reserve write scopes and a unique result path before writing. Start one worker only when a reservation authorizes a new execution. An existing reservation calls for inspection or resumption.

**Another notification is not another execution.** An unknown execution state must not be bypassed with a new attempt or a different state directory. A cancellation request does not release resources; actual termination must be confirmed. Finished-attempt receipts remain available to distinguish delayed results and reused output paths.

Digest comparison checks the contract envelope. The actual source, assets, original acceptance conditions, truth of the report, and independence of the verifier need separate checks. The guard does not enforce OS permissions or intercept direct file writes.

## Resource limits span sessions

Feature owners are capped at four across all sessions of one project. Unity code work has one slot across registered projects on the same PC. Screen checks, long CPU tests, performance measurements, and batch renders also reserve resources in the shared local state.

Screen checks exclude CPU tests, performance measurements, and renders. Performance measurements exclude other heavy work. The one-slot caps for CPU tests and rendering are conservative choices, not measured optima. Nested workers and higher effort settings are subject to the same policy.

## Installation checks do not establish game adoption

The update changed 12 existing files and added five across shared rules, role definitions, templates, the guard, and the Codex entry point. In fake projects with isolated state, **30 guard tests passed**, with **89.07% combined statement and branch coverage**. Calling guidance was also checked through 17 CLI calls and 33 assertions in isolation.

These figures do not measure actual session transport or game quality. A handoff asks the running game's current director to reread the rules and introduce new cards at a safe batch boundary. Receipt and adoption remain unconfirmed. Ten transport acceptance scenarios, including delivery, omission, duplicates, and resumption, remain unexecuted. This change did not rerun game regression tests.

## Evaluate the split through cost and escaped defects

Separate sessions can retain specialist context and keep long execution logs out of the director's conversation. Total tokens need separate accounting: repeated project reading, communication, and review add cost. More sessions alone do not establish a saving.

The next two batches should record completion time with human and resource waits separated, rework, escaped defects, missed receipts, duplicate executions, and repeated explanations. Compare available usage across the director, workers, coordination, and retries. Missing usage leaves token savings undetermined. This remains a measurement plan.

## v3 assigns responsibility by feature

The production process changed on 2026-10-08. Planning, development, and QA had previously exchanged documents and messages across separate sessions. The current v3 structure has **one director per game, one owner per card, and a verifier separate from the maker**. The October 19 update strengthens handoffs, duplicate prevention, and resource management around that structure.

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

Since 2026-10-28 Kkaeal's public download repository points to v0.2.5. On 2026-10-27 it pointed to v0.2.4, on 2026-10-26 it pointed to v0.2.3 and v0.2.2, on 2026-10-24 to v0.2.1, on 2026-10-23 to v0.2.0, and before that to v0.1.6, while the local board separately recorded a v0.1.7 build and the development and verification of a v0.2.0 test build. The download version has not been raised merely because newer code or a test build exists.

Applying balance changes and publishing a release are separate decisions too. The production process retains a human release gate; completing a local build does not automatically publish it.

## The document tree is a reading structure

Design, specification, world, implementation, art, and QA under a game's address organize the **records for a reader**. They do not imply a permanent session for every discipline. The Unity prototype pages preserve the measurements and lessons from that version.

[Future game 1](/en/built/moon-studio/future-1/index.md) and [Future game 2](/en/built/moon-studio/future-2/index.md) are reserved document slots, excluded from counts of real or active games. Tower defence, the water-flow puzzle, and course work also remain experiment and learning records rather than current releases.

## A changed process is not yet a measured speedup

v3 aims to reduce handoff costs and messages that I have to relay. This update records installed rules and the guard's isolated checks. Their effect on live game production, total tokens, and finished quality has not been measured.

The studio is also a test bench where I can break my own work in public. Keeping implementation, verification, and unfinished work distinct is what makes those experiments useful to the next project.
