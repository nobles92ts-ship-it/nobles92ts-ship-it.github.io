# An adb-based game QA server

> A game screen exposes no UI tree. So it's driven by sight, and judged by logs. What the log cannot decide, an AI judge reads from screenshots.

- Headline number: 300 cycles
- Status: wip
- Rendered page: https://aitryed.com/en/built/android-qa/
- Other language: https://aitryed.com/ko/built/android-qa/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

The adb-based game QA server is a program that checks a game automatically, with a real phone plugged in over USB and nobody watching. I built it myself because the off-the-shelf automation tools cannot work on a game screen.

## A game screen gives automation tools no names to grab

An ordinary app puts every part of its screen on display with a name attached. There really is a thing labelled "Login button," so an automation tool can find it by name and press it, even when the screen size differs or the position moves.

A game paints the whole screen as a single picture. Anything that looks like a button is just paint, so searching for the Login button turns up nothing. To a stock tool the screen looks like an empty room, and there is nothing to press.

## Press by looking at the screen, judge by reading the log

So the work is split in two. Where to press is decided by looking at a picture of the screen and working out the position. Whether the press worked is decided by reading what the game wrote down.

Moving the verdict off the pixels and onto the log was the biggest single improvement in this project. Why is explained in the piece below.

Some things never reach the log, though. "What is visible on screen" is one of them. Since 2026-09 an AI judge has handled those checks in place of a person: it judges the screenshot, and rules re-check its evidence.

## Scale

It is written in Python, with 22 capabilities and 353 checks around them (104 at first). It runs with a real phone attached over USB or Wi-Fi, and the current test list has 248 cases. It has run 300 cycles overnight, unattended.

## Written up in four parts

The first part covers driving and judging: how you press a screen with no handles, and what decides the result. The second covers the unattended loop, meaning what has to be true for a run nobody is watching. The third is what came out, which includes the overnight result and the first problem that was not my automation's fault. The last covers the photo judge, and what it takes to trust an AI's verdict on a screen the log cannot decide.

## The same cases against a PC build

The case list was written for phones, but the PC build of the same game also had to be checked. The controls are completely different even though the game is the same, and what needs confirming is identical. How that gap was bridged is written up too.

## The detailed record starts here

A custom MCP server that verifies Android game builds unattended. Python, 22 tools, 104 unit tests (353 as of 2026-09), driving a real handset over USB (as of 2026-09 wireless adb is the default, and a scheduled task reconnects it every minute if it drops).

I built it because off-the-shelf Android automation couldn't be used. There's one reason for that.

## A game screen has no handles

A normal app exposes an accessibility tree. Ask for "the login button" by name and the tooling finds it and taps it.

**A game draws the entire screen into a single native surface.** Dump the tree and you get an empty shell — no buttons, no text, no coordinates. Only pixels.

Everything an off-the-shelf tool assumes is absent, so driving and judging both had to be rebuilt.

## Written up in four parts

| | The problem |
|---|---|
| [Driving and judging](/en/built/android-qa/driving/index.md) | How to tap a screen with no handles, and what decides the result |
| [The unattended loop](/en/built/android-qa/loop/index.md) | What a run nobody is watching actually requires |
| [What came out](/en/built/android-qa/findings/index.md) | An overnight run, and the first thing that wasn't an automation defect |
| [The photo judge](/en/built/android-qa/judge/index.md) | What decides a screen the log cannot, and what re-checks that verdict (added 2026-09) |

## The same cases against a PC build

The case set was written for handsets, but the same game's PC build needed verifying too.

Rather than rewrite 126 cases, I **swapped the transport layer.** Where the harness expected `adb`, I put a file bridge — same command surface, different thing on the other end.

It worked because the cases never cared about Android. They cared about *tap here, wait, check this appeared.* Device dependence lived in exactly one layer at the bottom, and replacing that layer kept the whole library. Full run: 126 cases, 937 seconds.
