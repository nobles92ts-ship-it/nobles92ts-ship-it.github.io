# MOON Studio

> A one-person game studio built with AI. In v3, one director coordinates each game, each feature has an owner, and an independent verifier checks the integrated build.

- Headline number: v3 · feature owners
- Status: wip
- Rendered page: https://aitryed.com/en/built/moon-studio/
- Other language: https://aitryed.com/ko/built/moon-studio/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**MOON Studio is where I set the direction and build games with AI.** The current production process is v3. One owner carries a feature through implementation, and a different agent checks the result.

> **[도판]** The director coordinates the game. Making a feature and judging the integrated result belong to different agents.
>
> MOON Studio v3: the director turns requests into scoped cards, owners implement them, the director integrates their branches, and an independent verifier judges the integrated build. The creator decides taste, balance application, and release.

## I describe the change and the director scopes the work

A request such as “make the battle easier to follow” needs observable changes. The director reads the code and turns it into cards with boundaries and acceptance conditions. An owner handles the design details, code, data, and tests within that card.

**Each game has one main director session.** Claude or Codex can hold that role, with the board and cards providing continuity. Reducing the messages I have to relay between sessions is one of the goals.

## Building and judging belong to different agents

An owner's passing tests do not finish the process. After the director integrates the branches, an independent verifier launches that build and tries to break it. Checks that could not run keep their reasons.

Art follows the same distinction. For Kkaeal, Art01 handles characters and motion; Art02 handles skills, effects, and presentation. The director integrates their deliveries. **Having an image file and seeing it work in the game require separate checks.**

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

## v3 assigns responsibility by feature

The production process changed on 2026-10-08. Planning, development, and QA had previously exchanged documents and messages across separate sessions. The default structure now has **one director per game, one owner per card, and a verifier separate from the maker**.

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
