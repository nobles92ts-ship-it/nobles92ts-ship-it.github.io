# Cross-session messaging

> The mechanism the video dug up doesn't exist on my OS. The capability I actually wanted was already on, and the real failure mode was misdelivery, not security.

- Headline number: 0 sockets · already live
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/session-messaging/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/session-messaging/index.md
- Source (Source video): https://www.instagram.com/reels/DbxtPGODv9k/
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A two-minute video showing that AI sessions can now message each other. Follow its instructions on my machine and you fail, guaranteed. Meanwhile the capability I actually wanted was already on, and checking it overturned my verdict twice.**

> **[도판]** No registry, no auth layer. Everything is delegated to directory listing and OS permissions.
>
> The mechanism the video uncovered. One socket directory becomes the session list, and there are four design decisions: filenames are process IDs, permissions are owner-only, no new protocol was invented, and feature availability is visible through socket existence.

## What the video did well — it dug through files instead of quoting an announcement

Start with the good part.

It did not confirm the new capability **from a company announcement.** It **went digging through the machine** and found **a new folder had appeared.**

And it **ran a control.** It shows that the folder is **empty on the previous version.** Which proves the folder is genuinely new in this one.

The method is worth copying — **confirm by trace, not by claim.**

## But something critical was missing

The folder path it shows exists **only on certain operating systems.** Windows has no such path.

And the video **never once says which operating system it was recorded on.**

So **anyone on Windows who follows "open a terminal and type this" fails, 100% of the time.** And they will not know why — **they were told to look at a folder that does not exist.**

→ What I took: **an explanation with an unstated premise manufactures "what did I do wrong" in everyone outside that premise.** They blame themselves for the failure.

## I measured it on my own machine

Rather than assert *Windows does not have this*, I checked.

Windows uses **a different kind of channel** in place of that path. So I **queried all 600 of them.**

| Measured | Result |
|---|---|
| Is the capability compiled into the program | **Yes** (the string appears three times) |
| Does the version clear the threshold | **Yes** |
| Channels actually present | **0** |

So I wrote the conclusion as **"not observed on this machine on this date"** rather than **"impossible on Windows, forever."**

Those are different sentences. The first is **a claim I cannot verify**; the second is **something I actually measured.**

## But what I wanted was already working

Here the piece turns.

My interest in the capability came from wanting **to hand work to another session.** Checking, **that was already happening by another route.**

The new channel the video dug up does not appear here, and **what I wanted was already in hand.**

## And my verdict flipped twice

**First error — "a sleeping session cannot be woken."**

I wrote: *AI sessions go to sleep once they finish answering, so the real gap is the trigger.*

I thought about how to check it. **Looking at "was the message delivered" is not enough** — delivered while asleep is useless. You have to look at **"did it act."**

So I did this: **told the other session to create a file, and checked for the file myself.** I ignored what it said in reply. **Only the trace of the action.**

Result: **with no human involvement, a sleeping session woke by itself and acted.**

The verdict flipped, and in that moment **something I was about to build became unnecessary.**

## So here is what I decided not to build

| What I was going to build | Verdict | Why |
|---|---|---|
| **A message board** for sessions | **Not built** | **Push works — why build a board to poll** |
| **A polling watcher** | **Not built** | Same |
| Reproduce the video's steps | **Not done** | It does not appear on my machine |
| Handovers **through existing tools** | **Adopted immediately** | **Nothing to build** |

That last row is the result of the investigation. **Zero things built and three things not built.**

## And one new worry opened

One thing remains.

Sessions being able to message each other also means **another session can send instructions to mine.**

The receiving side needs **something that does not accept just anything**, and checking, that **is not enforced by code — its behaviour is not guaranteed to reproduce.**

So it goes on **the list of safety boundaries to settle.** Not a conclusion — **an open item.**

## The detailed record starts here

**Following this video's instructions fails unconditionally on my machine — and that is only where this starts.** A 1 minute 53 second reel digs the cross-session messaging mechanism of Claude Code out of the filesystem itself. One socket directory doubles as the session list, which is a genuinely clean find. **But the video never once says which OS it was filmed on, and that path does not exist on Windows.** I enumerated all 600 named pipes and found zero session sockets. Meanwhile the thing I actually wanted — **sessions talking to each other, and reading another session's log** — was already live on this machine, and finding that out **overturned my own judgement twice.**

## What the video claims

**That Claude Code v2.1.224 opened direct messaging between sessions**, and that the claim was verified **by digging through the filesystem rather than reading an announcement.** The screen starts at `ls -la /tmp/`, finds `/tmp/cc-socks/`, shows three sockets, points out that permissions are owner-only, and then **contrasts against version 2.1.223, where the socket count is zero.**

There is a twist. **Nothing brand new appeared.** The message-sending tool itself had existed for 145 days, used for resuming subagents; what 2.1.224 opened was **reach** — what only reached inside a subagent now reaches an independent session. *"The boundary moved, not the feature"* is an accurate framing. That same tool is independently present in this session's tool list right now.

The official text shown on screen:

> When a change in one session breaks what another is building on, Claude can warn that session before you notice.

And the reason it didn't work before, quoted from the issue — *"Sessions are completely isolated, even when running on the same machine working on the same codebase."*

## What broke when I checked

**The fatal omission is the platform.** The video presents `/tmp/cc-socks` with no preamble and **never says macOS or Linux.** Windows has no `/tmp`, and when Node listens on a path it produces a named pipe, not a file. Anyone on Windows who follows *"open a terminal and run `ls /tmp/cc-socks`"* **fails unconditionally.**

**Both date calculations are off by one day.** 144 days written as 145, 139 written as 140. It looks like inclusive counting and it changes nothing. But for content whose whole pitch is *"I measured this myself,"* **it stands as an accuracy sample.**

**The weakest link is "and across machines."** The video asserts this on a slide only. Unix domain sockets are local-only, so remote requires a different mechanism — and **that mechanism is never shown.** The official doc URL, the issue's real state, and whether the release notes mention this at all were all screen captures I never checked against primary sources. Any quotation should stop there.

> **[도판]** The left column is the video's procedure; the right is what it produced here. Below is the path that already existed, unrelated to any of it.
>
> Measurements on my machine. The video's procedure reproduced as zero sockets even though the feature code is in the binary. Meanwhile the capability I wanted was already on by another route, and messaging a sleeping session woke it with no human involvement.

## Held against my own machine

**The feature code ships in the Windows build but never surfaces at runtime.** The session-listing tool's string appears three times inside the executable, and the CLI version clears the gate (2.1.226). Yet with two of those CLI processes running, **both socket and pipe counts were zero.** Properly qualified: this is not *"Windows will never do this"* but *"not observable on this machine on this date."*

**And the question I asked already had an answer.** I had asked *"can sessions talk to each other, like watching a live log?"* — and that capability lives not in sockets but in **five session-management tools in the desktop app.** They list other sessions, **read another session's transcript directly**, full-text search every session's body, and deliver a message into another session. That is a step above tailing a log file — **it reads the conversation itself, not a log of it.**

## Verdict — and I was wrong twice

**First wrong call: "you can't wake a sleeping session."** Having read the tool description, I wrote *"a Claude session sleeps once its turn ends, so the real gap is a trigger."* To check, I used an out-of-band oracle — since what matters is not whether it was *delivered* but whether it *ran*, I told the target session to write a file and then verified that file myself. The result: **the idle session woke itself and executed, with zero human involvement.** The call flipped. **There is no reason to build a polling noticeboard when push works.**

**Second wrong call: "messages arrive disguised as human input."** I wrote that this made it an injection channel. Opening the receiving session's raw transcript, they arrive **in an envelope that names the sending session's ID and title.** They do land as a user turn, but **the origin is labelled** — which is how the receiver correctly determined *"this came from another session, not from chat."*

**Two things I didn't expect came out of it.** The receiving session complied and then set its own gate — it wrote the local temp file without fuss, but **stopped and required human approval for anything outbound.** It graded by risk. The direction is right, but ⚠ **this is a model's judgement, not a boundary enforced in code** — another session might simply comply.

**The second one matters more. This channel's real failure mode is misdelivery, not security.** The receiving session caught two errors in my own message — I had the date off by a day, and **I named the reply target using a wrong memory of my own session's title.** Followed literally, the reply would have gone to the wrong session. **A sender can misidentify itself**, and without verification on the receiving end that would have shipped.

| Option | Call |
|---|---|
| Hand off between sessions using the existing tools | **Adopt now.** Zero build cost |
| Build a dedicated file bus for sessions | **Reject.** Four channels already exist and push works |
| Polling daemon · always-on unattended loop | **Reject.** No reason to poll what pushes |
| Reproduce the video's procedure | **Reject.** It never surfaces at runtime |
| Add inbound cross-session instructions to the safety boundary | **New, needs review.** The receiver's gate isn't enforced in code |

**If one lesson survives this page: a judgement formed from reading a tool description gets overturned by a single measurement.** It happened twice here. And leaving the overturned calls on the page, rather than deleting them, is what stops the same assumption being made again at the same spot.
