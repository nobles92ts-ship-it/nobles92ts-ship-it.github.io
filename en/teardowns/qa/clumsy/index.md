# clumsy

> A free Windows tool that makes your own internet connection worse on purpose. I opened it to test how a PC game copes with drops and lag, and read all 2,709 lines. The verdict is adopt — and the lesson is that I had already analysed it in August and run it zero times, twice over (2026-10-02).

- Headline number: 2.5 kept · 0 runs
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/qa/clumsy/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/qa/clumsy/index.md
- Repository: https://github.com/jagt/clumsy
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**clumsy is a free program that deliberately makes a Windows PC's internet connection worse. I opened it to check whether the PC game I test holds up when the connection drops or lags. The verdict is "use it" — but the real story is elsewhere: I had already analysed the same repo in August, and neither time did I actually run it.**

> **[도판]** A Windows driver does the catching; clumsy is the console sitting on top of it. That is why nothing outside this PC is within reach.
>
> Parcels the game trades with its server pass the WinDivert hook in the Windows network path. The hook picks up parcels that match the filter and hands them to the clumsy console, which delays, drops, cuts or speed-caps them and sends them on. Parcels that don't match pass untouched. You switch it on from the window or with one command line. It only catches what this PC itself sends and receives; other devices are out of reach.

## First — what does "making the internet worse" mean?

Data doesn't cross the internet in one piece. It gets **cut into dozens of small parcels**, and each parcel is called a packet. A game trades dozens of them with its server every second.

clumsy stands at the PC's front door and catches those parcels. Then it mistreats them the way you tell it to.

| You ask it to | Picture it as | In a game you see |
|---|---|---|
| **Delay** | parcels held at the door for a moment | high ping — you press, it reacts late |
| **Drop a few** | a few parcels thrown in the bin | your character snaps from place to place |
| **Drop everything** | the door shut | the server connection is gone |
| **Cap the speed** | only so much allowed through at once | long loading |

There are eight of these in all, counting shuffling the order, duplicating, corrupting and forcibly closing a connection. The game keeps running the whole time; you only change numbers in a window.

## Why bother — a forced quit never walks the reconnect path

A lot of game QA is checking whether the data is still right after you drop out and come back. The usual way is to kill the game and start it again.

But a forced quit kills the game itself, and that is not what players live through. **Their game stays up while the line goes dead.** The game then takes a path of its own — notice the drop, try to reconnect, show the reconnect prompt — and a forced quit never sets foot on it.

Pulling the network cable works too. Your chat and your remote session die with it, though. clumsy can block **only the parcels headed for the game server**, and that is the whole reason to use it.

## Reading the source turned up four things the docs don't say

clumsy is 2,709 lines of C, small enough to read end to end. Four things came out that the docs either leave out or get wrong.

1. **Delay moves in 40 ms steps.** An inner clock ticks every 40 ms, so asking for 100 ms gets you anywhere between 100 and 140. That is fine for telling "a bit laggy" from "very laggy". It is useless for measuring milliseconds.
2. **A round trip pays twice.** The same delay lands on parcels going out and coming back, so to raise ping by 300 you type 150.
3. **From the command line it needs an admin window.** In an ordinary one it simply closes, without a single error message.
4. **Press Stop before you close it.** Close the window, or let the timer run out, and the parcels it was holding get thrown away instead of sent.

## Against my setup — it fits the PC game and never reaches the phone

clumsy only catches what **that PC itself sends and receives.** So it works as-is for the PC client and not at all for testing on a real phone, whose parcels never pass through the PC.

There was already a slot waiting for it. Skimming thirty test-design documents produced by my TC pipeline, I found "network blocking tool" written 24 times and "inject delay" 38 times where the reproduction method goes. Not once was an actual tool named. My [TC pipeline](/en/built/tc-team/index.md) drops any case it has no way to reproduce, so clumsy is the name that fills that gap.

## And then it turned out to be my second look

I only found out when I went to file the report. **I had analysed the same repo on 18 August**, with the same verdict — yes for the PC, no for phones.

The first search missed it for a dull reason. The old report is an HTML file, and I had left HTML out of the search.

What stung more came after that. In six weeks I never ran it once, and the August report's note — "the one-minute check comes first" — was still sitting there, untouched.

→ What I learned: **a second analysis didn't move the verdict at all. The only thing that could have was a five-minute measurement.** Before reopening a subject, I should have checked whether I'd done the "next step" I wrote down last time.

## What comes next — in order, this time

| Step | What | Time |
|---|---|---|
| 1 | Switch on the game engine's own network simulation from the console | 1 min · nothing to install |
| 2 | Download clumsy on the work PC and check it with ping | 5 min |
| 3 | Reproduce one real test case with clumsy | about 30 min |

If step 1 works, lag testing on the game side is covered and clumsy becomes the tool for full disconnects only. If antivirus blocks it at step 2, that is where it stops. I won't loosen security settings to run it.

## The detailed record starts here

**The verdict is a conditional adopt on the PC side, and the event in this piece is that the same verdict already existed from August.** clumsy is a C program that puts one GUI window on top of WinDivert, a Windows kernel driver. It catches packets that match a filter, then delays, drops, duplicates, reorders, corrupts, resets or throttles them before re-injecting them. It dates from 2013, has 6,251 stars, and master hasn't moved since January 2022. I opened it as a way to reproduce dropped- and lagging-connection edge cases on a PC game client without touching the app.

## What it is — a 2,709-line packet console

| Item | Measured (2026-10-02) |
|---|---|
| Size | 14 C files, **2,709 lines** · 6,251 stars · 620 forks |
| Activity | last master commit 2022-01-12 · latest release 0.3 (2023-10-21) |
| Builds | 0.3 ships as **three variants, a, b and c**, each with a differently signed WinDivert driver. win64 downloads: a 400,186 · b 12,811 · c 18,856 |
| Dependencies | bundles WinDivert 2.2.0 (upstream is at 2.2.2) · IUP for the GUI |
| Licence | MIT. GitHub shows NOASSERTION, apparently because of a prose line at the top of the LICENSE file |
| Open issues + PRs | 131 |

## How it works — two threads and a 40 ms clock

Two threads share the work. One receives packets with `WinDivertRecv`, appends each to a list, runs all eight modules over it and sends whatever survives. The other repeats that step **every 40 ms** (`CLOCK_WAITMS 40`). A held packet is released only when the next packet arrives or that clock ticks.

| Module | Does | Seen in the source |
|---|---|---|
| Lag | fixed delay, 0–15,000 ms | **one value** for both directions (#172). At 2,000 held packets it flushes 800 at once |
| Drop | per-packet random discard | probability stored as an integer from 0 to 10000 (0.01% steps); independent trials, so no bursty loss |
| Throttle | holds a time window, then releases it all at once | with "Drop Throttled" the whole batch is discarded — the only way it imitates bursty loss |
| Duplicate · OOD | 2–50 copies · pushes a packet up to 10 steps back | — |
| Tamper | flips payload bits | checksum recompute is on by default, so corrupted data reaches the app |
| Reset | sets the TCP RST flag | only when a TCP header exists — no effect on UDP |
| Bandwidth | KB/s cap | **drops the excess** rather than queueing it; inbound and outbound **share one meter** (`rateStats`) |

## Design decisions — and the conditions they rest on

| Decision | Holds only if |
|---|---|
| Intercept at the OS with a kernel driver | you have admin rights, the driver signature passes and security software doesn't block it. The layer is `WINDIVERT_LAYER_NETWORK`, so it **only sees this PC's own traffic** |
| Choose targets with a filter language | you know the server's IP and port. That layer carries no process information, so **you cannot filter by program name** |
| Run one clock at 40 ms | sparse traffic arrives 0–40 ms later per direction than asked. Harmless for 100 ms-scale tests of feel |
| CLI pushes `--key value` into a global store that each module reads | without admin, the silent branch of `tryElevate` **exits with no message**, and the runas relaunch doesn't pass the arguments on |

## What breaking it showed — five places where docs and code part

1. **Delay accuracy.** Issue #87 (open) reports an 80 ms gap between consecutive requests at a delay of zero — 40 ms each way — and spikes to 50 ms at a setting of 1 ms. That lines up exactly with the 40 ms clock, so I record these numbers as settings and never quote them as measured round-trip time.
2. **Shutdown path.** When `--timeout` expires or the window is closed, control goes `IUP_CLOSE` → `cleanup()`, and `divertStop()` is never called. The filter vanishes with the process, but the packets Lag was holding vanish too instead of being sent. Only the Stop button closes the modules and flushes them.
3. **Silent CLI exit.** Issue #141, "closes instantly when given options", looks like that silent branch at work (an inference — I didn't run it to confirm).
4. **Doc drift.** The wiki gives the delay range as 0–3,000; the code accepts up to 15,000. `--timeout` and `--duplicate-count` aren't in the wiki at all (#189).
5. **Environment.** Antivirus flags the 0.3 zip as `Trojan:Script/Ulthar.A!ml` (#187, November 2025, open) · driver signature errors (#84) · slowness that lingers after closing, fixed by a reboot (#31) · one blue-screen report (#107) · no remote control or hotkey (#1, open since 2013).

> **[도판]** Two teardowns of the same subject left every item in the same box. Only a measurement can move one.
>
> The verdict split into three boxes. Use it: cutting off one server completely, delay in steps of 100 ms or more, and auto-recovery with timeout, on the PC game with test accounts only. Parked: force-closing TCP connections, and random loss or speed caps, to be revisited once there is a pass mark. Can't use it: traffic on a real phone and millisecond-level measurement. The verdict matches August; analysed twice, run zero times.

## Against my setup — 62 empty slots, and alternatives that overlap

I test two things: a PC client and real Android phones. clumsy only reaches the first.

The PC side had empty slots. Across thirty test-design documents from my TC pipeline, the reproduction-method column said "network blocking tool" 24 times, "inject delay" 38 times and "airplane mode" 5 times, never naming a tool (grep, 2026-10-02). The pipeline writes concurrency and race cases **only when there is a means to reproduce them**, and parks the rest under "needs a reproduction method". One working tool brings those parked cases back.

Three alternatives overlap with it.

| Alternative | Relation to clumsy |
|---|---|
| Force-quit the process, then reconnect | **Complements it rather than replacing it.** The client dies, so it never runs "detect drop → reconnect → reconnect prompt" |
| The engine's own network emulation (e.g. Unreal Engine's `NetEmulation.PktLag`) | **Overlaps on game-channel delay and loss.** It needs no driver or admin and is more precise, but it covers only the game channel, isn't in shipping builds, and makes a clean full disconnect awkward |
| Pulling the cable | takes chat and remote sessions down too, and is impossible on a PC you only reach remotely |

In August I found the engine's packet-simulation names in the debug symbols of an internal build and wrote that the feature had very likely been compiled in. Nobody has since spent the one minute it takes to type the command into the console.

## Takeaways and verdict

| Technique | Verdict |
|---|---|
| Server-IP filter + Drop 100% = cut off that server only | ✅ **Adopt** — the reproduction method for PC disconnect cases |
| Lag of 100 ms or more | ✅ **Conditional (0.5)** — if the engine's own emulation works, that comes first. Record values as settings only |
| `--timeout N` | ✅ **Adopt** — repeatable N-second drops, and a safety line so I can't strand myself on a remote PC |
| Reset (TCP RST) | ⏸ **Parked** — I don't yet know which connections are TCP |
| Random loss · bandwidth | ⏸ **Parked** — the loss pattern differs from a real line, and there's no pass mark |
| Real Android phones | ⛔ **Rejected** — their traffic never passes through the PC. The hotspot fork (`abaza121/clumsy-hotspot`) catches phones but loses the PC itself |

Undoing it costs essentially nothing, since one press of Stop ends it, so even at medium confidence the right move is to try. I'm fixing the stop signal in advance as well: if all three variants are blocked by signing or antivirus, that is the end of it — no exclusions, and no switching off signature checks.

## What I didn't do

- **Zero real runs.** It needs a kernel driver, so once again I didn't run it. Every number above was read from the source and the issues.
- **Zero checks of the engine's built-in emulation** — a one-minute job, outstanding since August.
- **No check of the work security policy.** Whether antivirus blocks it only shows once it's downloaded.
- **Still nothing for the phone side.**

**The lesson that cost something here is about order.** I analysed the same subject twice and the verdict didn't change by a word; what changed was a longer list of recipes and four more pitfalls dug out of the source. The one thing that could have moved the verdict was a five-minute measurement, and both times it stayed "next time". And the second analysis only began because **I had left HTML out of the search** — the price of calling something absent after looking in one place.
