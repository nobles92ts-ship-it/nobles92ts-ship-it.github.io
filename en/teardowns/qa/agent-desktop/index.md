# agent-desktop

> A tool that lets an AI read and operate desktop programs through the parts list the operating system already keeps, not through screenshots. I read the docs and code, then tried it briefly on my PC. Reading worked; sharing the PC with a person went unproven, so I removed it.

- Headline number: on hold · tried, removed
- Rendered page: https://aitryed.com/en/teardowns/qa/agent-desktop/
- Other language: https://aitryed.com/ko/teardowns/qa/agent-desktop/index.md
- Repository: https://github.com/vercel-labs/agent-desktop
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**agent-desktop is a command-line tool that lets an AI read a desktop program as a list of parts it can operate, not as a picture, and then press those parts.** Vercel Labs makes it. It is written in Rust, runs on macOS, Windows and Linux, is licensed Apache-2.0, and had 7,061 stars on 2026-11-02.

The body of this write-up comes from reading the repository's docs and implementation files. Later the same day I installed it and tried it briefly, and **that review sits [at the very end](#i-ran-it-reading-worked-sharing-did-not).**

## It reads a parts list instead of looking at the screen

Every program on Windows or macOS has a second description the OS keeps for it: a list saying which things on screen are buttons, text fields and menus. It exists for screen readers used by blind people, and it is called the accessibility tree because windows hold menus and menus hold items, like branches.

agent-desktop dumps that list as JSON for the AI. Each part gets a numbered tag (a ref) such as `@s8f3k2p9:e8`, and the AI presses by quoting the tag.

| | Screenshot approach | This tool |
|---|---|---|
| What the AI receives | A picture | Text with each part's name, kind and tag |
| How it presses | Guesses coordinates in the picture | Quotes a tag and asks the OS to act |
| A window is covered | It may click the covering window | By default it neither moves the pointer nor takes focus |
| Where it struggles | Resolution and theme changes | Programs that publish no list |

## One turn is look, press, look again

```bash
agent-desktop snapshot --app Finder -i      # parts list with tags
agent-desktop click @s8f3k2p9:e8            # press that tag
agent-desktop snapshot --app Finder -i      # look again to check
```

The tool supplies eyes and hands only. The calling AI decides what to do next, and the repository's own guide (AGENTS.md) says no model is embedded in the tool.

## It refuses a stale tag on purpose

This was the design that stood out. A tag belongs to the snapshot it came from. The snapshot's name (`s8f3k2p9`) is part of the tag, and a bare `@e8` is rejected with `INVALID_ARGS`. Once the screen changes, the part a tag pointed to may be gone, so the tool answers `STALE_REF` (out of date) or `AMBIGUOUS_TARGET` (more than one match) and tells the AI to look again.

Think of a restaurant. Calling "guest number 3" gets the wrong person once the room has turned over. Calling "number 3 on the 7 p.m. list" lets the host say the list is out of date and nobody stands up.

## It cannot see programs that publish no list

The repository states this limit itself. A screen with no accessibility tree is invisible to it, and web pages are out of scope; it points to a sibling tool, agent-browser, for those. The game screens I work with do not publish such a list (my Android QA tool's own instructions assume so), and that limit nearly decided my verdict.

## For my work the game screens block it, so I am holding

I want to automate two kinds of screens. One is ordinary Windows programs; the other is games. For the first, I already have a skill built on a UI Automation tool (pywinauto), so this tool adds little. For the second there is no tree, so this tool sees nothing.

The verdict is therefore **on hold**. It is not a rejection because the two principles below earn their keep; resume conditions are at the end.

## The detailed record starts here

I based the analysis on `main` at [commit 9eb9b29](https://github.com/vercel-labs/agent-desktop/commit/9eb9b296192fcb70bda25e918cd6dd66abfa3d0d), read on 2026-11-02. The latest release is `v1.0.2` (2026-10-30). **At this stage I did not install, build or run anything.** I read README, AGENTS.md, CONCEPTS.md, CHANGELOG.md, the benchmark note, two lesson documents and two implementation files.

## The repository is eight months old and effectively one person's project

| Item | Value |
|---|---|
| Created · last push | 2026-02-19 · 2026-11-01 |
| Stars · forks | 7,061 · 518 |
| Open issues | 41 (the API's `open_issues_count` says 102, which includes pull requests) |
| Contributors | Top is `lahfir` with 214; next are bots (`github-actions` 43, `detail-app` 26) and `ctate` 14 |
| Releases | 10-18 `v0.10.1`, 10-25 `v0.11.1`, 10-27 `v1.0.0`, 10-28 `v1.0.1`, 10-30 `v1.0.2` |
| Files | 3,682. Core 642, Linux 1,029, Windows 449, macOS 287, FFI 195 (tests included) |

**Linux only arrived in 1.0.0** (CHANGELOG). Five releases in two weeks means fast movement, and it also means the contract is still setting. `v0.10.0` raised the C library's major version to 5, removed seventeen functions and broke the tag format.

## The core knows no operating system

AGENTS.md calls this structure non-negotiable. The core crate (`crates/core`) owns a `PlatformAdapter` trait and every shared type; the macOS, Windows and Linux crates only implement it. CI fails if the core imports a platform crate, and `cargo tree -p agent-desktop-core` must name none. Every trait method defaults to `not_supported`, so an adapter fills in only what its platform can do.

Command handling is plain. There is no command trait or registry: one `match` in `dispatch()` calls each command's `execute()`, and `batch` goes through the same `dispatch()`. **With a single path, no entrance bypasses the policy check.**

## The command count matched the README

The README claims 60 command names and 56 operational ones. I counted the table: 6 + 16 + 10 + 12 + 4 + 3 + 1 + 3 + 5 = 60. The other four (`key-down`, `key-up`, `mouse-down`, `mouse-up`) refuse to run until a daemon can release a held key, as the docs explain. AGENTS.md says a test (`doc_literal_drift_tests.rs`) fails when these numbers drift; I did not run it.

## It does not turn "could not read" into "not there"

I picked one headline claim and followed it into the code: **the tool does not act on a candidate whose identity it could not confirm.** CONCEPTS.md splits every property into `Known`, `Absent` and `Unknown` and warns against merging a failed read into "absent", because one negation turns "cannot tell" into "definitely not".

In code, [`resolve_errors.rs`](https://github.com/vercel-labs/agent-desktop/blob/9eb9b296192fcb70bda25e918cd6dd66abfa3d0d/crates/core/src/refs/resolve_errors.rs) keeps that promise. When a candidate cannot be read it does not return "no match". It returns `ErrorCode::Timeout` stamped `complete: false`, `retryable: true` and a not-delivered marker. Docs and code said the same thing.

## "It answered success" is not "it changed"

The most valuable lesson file was [the AT-SPI write one](https://github.com/vercel-labs/agent-desktop/blob/9eb9b296192fcb70bda25e918cd6dd66abfa3d0d/docs/solutions/runtime-errors/an-atspi-write-that-returns-success-has-not-changed-anything.md). On Linux, asking a text field to take text can answer success while nothing changes, depending on the toolkit (destroyed widgets, read-only fields, Firefox inputs). The opposite also happens: a call answers failure and lands later, when a stopped app resumes.

The fix is one line. **Judge by a read taken after the write, not by the reply.** If the value is unchanged the result is `write_ignored`; if it cannot be read, the result honestly stays `delivered_unverified`. Password fields are never read back, and error messages replace their text with `[withheld]`.

## Its own numbers come from synthetic data

The benchmark note states its limits. It compares an old and a new locator path on fabricated Chromium and Electron trees (31 runs, median and 95th percentile), and says measuring real apps such as Slack needs a permission and belongs to a separate integration suite. The README carries no boastful speed or accuracy figures, which I liked. The cost is that I have no number for how fast it is on real apps.

## Cautions are written down before you start

The README opens with a warning: snapshots, clipboard reads and screenshots can hold private content, so keep them out of public logs. macOS needs an accessibility grant; Windows needs none for apps at your terminal's integrity level. Linux differs between X11 and Wayland (mouse input only on X11 with `--headed`).

## Verdict table

Cells I could not measure carry an estimate marked `[estimated]`.

| Technique | Verdict | Gain | Adoption cost | Cost to undo | Confidence |
|---|---|---|---|---|---|
| Use the tool itself for my Windows program automation | **On hold** | Small; a skill for the same job exists | Half a day to install and test (2 to 6 hours, 95% CI) `[estimated]` | Cheap (`npm` uninstall) | Low; one short trial only |
| Bind a tag to the observation it came from | **Adopt (principle)** | Stops presses on stale coordinates | Low; record the screenshot number with each call `[estimated]` | Cheap | Medium |
| Record a failed read separately from "absent" | **Adopt (principle)** | Keeps a check that never ran from looking like a pass | Low | Cheap | High; confirmed in code |
| Judge a write by reading afterwards | **Already have it** | None | None | None | Same grain as my rule: aim by screen, judge by log |

## The principle that remains

**A number is valid only at the moment you looked.** The tool enforces this in grammar by putting the snapshot's name inside the tag. My side has a flow that guesses coordinates from a screenshot and presses; those coordinates should always belong to the screen just seen, but I do not tie them to it in any record. It touches my Android QA tool's tap and swipe calls, and the fix is not adopting this tool but logging the screenshot number with each call.

## Resume conditions

- A Windows program I automate produces a real mis-press on a stale element.
- My game screens start publishing an accessibility tree.
- Speed or accuracy figures measured on real apps are published.

## What I did not do

- During the analysis I did not install or run it, so those findings rest on docs and code. What happened when I ran it is in the review below.
- During the analysis I did not open the Windows adapter (`crates/windows`); the two implementation files I read are in the core. For the review I read only the code that launches the on-screen pointer.
- I did not read the history of reverted commits or closed issues, and I cannot say whether an eight-month-old repo has enough of it to interpret.

## I ran it: reading worked, sharing did not

On 2026-11-02 I installed `v1.0.2` from npm on a Windows 11 PC and spent a few hours with it. I wanted one answer. **Can an AI operate this PC separately while I keep working on it?** I could not show that it can, and I removed the tool when I finished.

| Trial | Result |
|---|---|
| Reading a work launcher window | Good. About 1.2 seconds for 207 entries, including button states, checkboxes and field values |
| My screen during reads | Over four reads, neither the pointer position nor the front window moved |
| Dropdowns | None of the 8 reported its selected value |
| Pressing 7 + 8 = in Calculator | All four signals were delivered, yet the answer was not 15 |
| On-screen pointer | Stayed hidden on the npm build; appeared from a renamed copy of the same file |

### A covered window took the press, then jumped forward

Calculator sat behind other windows and still received 7 and +, while the real pointer stayed put. That matched the docs. Around the press of 8, though, Calculator came to the front, and I did not find out why.

The answer came out as `1/7 + 8`, with a `1/x` I never sent. Calculator's shortcut for `1/x` is the `R` key, so my own typing may have landed there. I stopped before a retest could separate the causes, which leaves this as a guess.

### The on-screen pointer is a drawing, not a second mouse

In a demo, a pointer moving apart from yours looks like an extra input device. It is a picture on a transparent window, and buttons are pressed by accessibility signals. Typed text is real keystrokes aimed at the front window according to the docs, so that part collides with me by design.

I also found why the pointer stayed hidden. The code draws it only when the executable is named `agent-desktop`, and npm installs `agent-desktop-win32-x64.exe`. The enable command still answers success and quietly returns `rendered: false`. I have not reported this upstream.

### My biggest mistake was where I tested

I left the trial to an AI, and it opened a window and pressed buttons on the screen I was working on. A test of whether we could share the PC became the interruption itself. It felt like losing control, so I stopped it partway through. A sharing test belongs off your working screen, or at a time set aside for it.

### The verdict stays on hold

**This tool reads ordinary programs and presses their buttons from behind. It does not let two parties split one computer.** One active screen has one input path, and patching the tool would not change that. If I only need reading again, reinstalling costs little.

Some things remain unknown. I never read a game editor or a PC game window, and one trial says little about how reliable signal presses are. The reason the window jumped forward and the source of that `1/x` both stay unconfirmed.
