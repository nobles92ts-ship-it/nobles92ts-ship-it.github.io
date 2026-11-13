# terminal-mac — a virtual Mac inside your Mac, driven by an AI

> An open-source tool that boots a virtual Mac inside a Mac and lets an AI look at its screen, click and type. The messaging design held up when I read the code, but the author has not run it live either. I did not install it; it stays a candidate to try once on a MacBook.

- Headline number: candidate · 0 runs
- Rendered page: https://aitryed.com/en/teardowns/harness/terminal-mac/
- Other language: https://aitryed.com/ko/teardowns/harness/terminal-mac/index.md
- Repository: https://github.com/govijr/terminal-mac
- Source (Validation status (VALIDATION.md, written by the author)): https://github.com/govijr/terminal-mac/blob/main/docs/VALIDATION.md
- Source (Agent usage guide (AGENT.md)): https://github.com/govijr/terminal-mac/blob/main/docs/AGENT.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**terminal-mac is an open-source program that starts a «second Mac» inside your Mac, then lets an AI watch that Mac's screen, click, and type.** Your real mouse and keyboard stay untouched. The AI only works the Mac in the box.

I opened it because of my game's Mac build. A Mac user reported that dragging the downloaded file into the Applications folder gave a «damaged» warning and the game would not open. I use a Windows PC, so I cannot run a Mac myself. I reproduced it by running commands, with no screen, on a free cloud Mac. To follow the user's actual drag-and-drop by eye, I need a screen.

## Think of a glass box with a computer inside

Picture a computer sealed in a glass box. The AI stands outside, looks through the glass, and uses a remote: «press here», «type this».

Whatever happens inside the box stays inside. Delete files, install something odd — your real computer is unaffected. That is why this setup is comfortable for handing tests to an AI.

## The remote works by passing notes through a mailbox, not over a wire

The most striking design choice is how commands travel. Usually two computers are joined by a network connection, and one side opens a «door» to listen. This program opens no such door.

Instead the two machines share **one folder**. The outside drops a note that says «click here». A helper app inside the box reads the note, does it, and drops a reply note in the same folder. It is a mailbox.

> **[도판]** The AI's commands reach the virtual Mac as notes in a shared folder, not through a network door. The checks applied when a note is read are the safety mechanism.
>
> How terminal-mac is built. On the left, the real MacBook: the AI asks terminal-mac. In the middle, a shared folder where one request note and one reply note pass at a time. On the right, a helper app inside the virtual Mac reads the note, then takes a screenshot or clicks and types. No dedicated network listener is opened.

Reading a note comes with many checks. A shortcut file is refused. A file above the size limit is refused. A name in the wrong shape is refused. The code treats the inside of the box as the untrusted side.

## A ten-day-old project with 2,677 stars — and no record of a live run

The repository was created on 2026-11-03, so it is under two weeks old. It has 2,677 stars and 189 forks. Interest arrived very fast.

The author's own validation file, though, splits things in two.

| | What the author wrote |
|---|---|
| **Checked** | It builds, 14 input-handling tests pass, and the signatures verify |
| **Not yet done** | Installing a virtual Mac, taking a screenshot, clicking — marked «live guest acceptance (not yet completed)» |

**Stars are not evidence that it «worked when switched on».** The author says so openly. The last lines of the validation file say none of the screen-capture or input behavior should be described as live-verified until that list is done. This piece stays on the same side of that line.

## What fits our Mac checks, and what snags

| | Fits | Snags |
|---|---|---|
| Screen | It captures the virtual Mac's screen for the AI to read | An open issue reports screenshots failing on a newer guest |
| Control | Click, drag, scroll, typing and key presses exist | An open issue reports Cmd+A and Cmd+V chords doing nothing in input fields |
| Safety | It never touches the real mouse or clipboard, and networking can be switched off | The default lets the virtual Mac reach the internet, so it is not a sandbox for hostile files |
| Setup | A MacBook is enough | A person must create an account inside the virtual Mac and click two permissions, once |

The biggest gap: the usage guide says **there is no command to push a file into the virtual Mac, and none to run a terminal command.** To get my game's installer inside, the remaining route is downloading it from within the virtual Mac's own internet connection. That is the same route a real user takes, so it might even suit the reproduction. I have not tried it.

## Verdict — not installed; a candidate to try once on a MacBook

As of this writing I have neither installed nor run it. It needs an Apple-silicon Mac, and my PC runs Windows. So every judgment here comes from **reading the code and documents**. There is not one number from a run.

Even so, here is the call. Not rejected: **a candidate to switch on once, when a MacBook is at hand.** One check comes before installing. The latest release that the install command fetches may not yet contain the three security fixes merged on 11-09, so I look for a newer release first. Three pass criteria:

1. When the game's installer is dragged across in the virtual Mac, does the same «damaged» warning from the report appear?
2. Do Cmd-key chords actually reach the app through the AI's input? If the open issue's symptom shows up, I drop this use.
3. After closing and reopening the virtual Mac, are the account and permissions still there?

## The detailed record starts here

Everything below is what I checked by opening the repository. Here is what I read.

| Read | Size |
|---|---|
| Swift sources (host app, core module, screen module) | 22 files, 2,916 lines together |
| Guest-side C code | 1 file |
| Test code | 5 files (the author reports 14 tests passing) |
| Documents | README, validation status, agent usage guide, release procedure |
| History | 39 commits, 10 merged outside contributions, 5 open issues (titles only) |

The license is MIT. The first commit is 11-02, and all three releases came out on 11-03 alone (v0.2.0-4, 5, 6). The latest commit is 11-10. Releases are signed with the author's own self-made identity and are not notarized by Apple.

## The mailbox is all about its reading rules

The core file is `Mailbox.swift`, 105 lines. Host and guest exchange `request-<id>.json` and `reply-<id>.json` through a shared folder called `control`. Here is what I confirmed by reading it.

- **Writing:** a file is created under a temporary name, then renamed to «publish» it. The reader can never see a half-written file.
- **Reading:** symbolic links are not opened. A file that is not a regular file, has more than one name, or exceeds the limit is refused. The limits are 1 MiB for reads and 262,144 bytes for requests.
- **Name check:** a request whose file-name id differs from the id inside the file is dropped.
- **Batching:** expired requests are dropped, and at most 32 are taken at once.
- **Waiting:** a reply is polled every 2 ms, backing off by 1.5× up to 25 ms. On timeout it tells you whether the request was never picked up or was picked up without an answer.

Frames sent by the guest are not trusted either. `FrameDecoder.swift` caps width and height at 8,192, stops decompression when the output would exceed the expected size, and reads a PNG's dimensions before drawing it. An outside contributor found this and it was merged on 11-09 (PR 13). The latest release tag does not contain the file.

## The eyes and hands are a helper app inside the guest

- **Eyes:** Apple's screen-capture framework (ScreenCaptureKit) takes the screenshot, so the guest must grant «Screen Recording».
- **Hands:** mouse, scroll and keyboard events are created at the operating-system level, so «Accessibility» permission is needed.
- **Typing:** the clipboard is not used. Each character is sent as a Unicode event, so the host clipboard is not altered, as the author explains.
- **Guard against running it on the host by mistake:** the helper refuses to run unless the hardware model name starts with `VirtualMac`. The author calls this accident prevention, not a security boundary.

## Sharing and networking — only two things are open

In `VirtualMachine.swift` the virtual Mac gets two shared folders: `control` (read-write, the mailbox) and `tools` (read-only, holds the helper app). The home folder, clipboard, microphone and camera are not connected.

Networking defaults to NAT. The virtual Mac can reach the internet, and the README itself warns that it may reach other devices on the local network. `--offline` attaches no network device at all. A user-space networking option (gvproxy) came from an outside contributor, to keep DNS working under VPNs.

## Security fixes arrived first, within days

Three of the ten merged outside contributions are security-flavored: filtering terminal control characters out of error text from the guest (PR 12), the frame-size limits above (PR 13), and checking that the helper's self-update has the same signature as the running helper (PR 14).

That history reads two ways. One is that many eyes patch holes quickly. The other is that **the holes existed**.

I also checked one thing directly. The «latest release» the install command downloads is v0.2.0-6, published on 11-03. In that tag's source, `FrameDecoder.swift` does not exist. The three fixes above were merged on 11-09, so **as far as the source shows, they are not in the installer yet.** The mailbox read checks are in that tag. I did not open the executable inside the release file; this comes from comparing the tag's source with merge dates.

## Three of the five open issues aim at our use

Titles only. I did not open the bodies.

| Issue | Symptom in the title | Why it matters for us |
|---|---|---|
| #4 | Cmd+A, Cmd+V and Backspace do nothing in input fields | Tests that need key chords beyond drag-and-drop could be blocked |
| #6 | Screenshot fails with «No guest display» on a newer guest | If the eyes are blocked, nothing else works |
| #19 | Helper cannot find the logged-in session, and stops responding when a heavy app launches | An install test is precisely launching a heavy app |

## Verdict table

| Option | Verdict | Gain | Cost to adopt | Cost to undo | Confidence |
|---|---|---|---|---|---|
| Install on a MacBook and switch it on once | Candidate (not done) | Opens a way to test while watching the screen [estimated] | One manual setup (account, two permissions) plus MacBook time [estimated] | Delete the install folder and the virtual disk; the README says the disk is 64 GiB logical but sparse | Low — the author has no live run either |
| Keep the current way (free cloud Mac runner, remote commands on the MacBook) | Continue | No screen, but it already works | 0 | 0 | High — it reproduced this very report |

«[estimated]» marks a figure I could not measure yet.

## What I did not do

- **Run it.** No install, no virtual Mac, no screen capture. It needs an Apple-silicon Mac, and this PC runs Windows.
- **Read the issues.** I read only the titles of the 5 open issues. I did not check whether #4, #6 and #19 still happen on the current version.
- **Inspect the executable in the release.** I did not download and open it. «The security fixes are not in yet» is a source-and-date comparison.
- **Audit security.** I read the mailbox and the frame-reading code, not the whole program. The install instructions are a one-line command that downloads and runs a script, so read that script before installing (it does verify a checksum).
- **Compare alternatives.** I know rented Macs and cloud remote screens by name only.

## The sentence that stays

**To control something, build a mailbox instead of opening a door.** This tool solves the communication an AI needs to operate another computer with notes in a shared folder rather than a network listener. With no open door there is no door to defend. What remains is the reading rules — refuse links, cap sizes, check names — and they become the entire security story.

Some of my own tools also pass results through file notes. Whether the reading side there applies the same checks is a new item on my list from this piece.
