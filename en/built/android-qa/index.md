# An adb-based game QA server

> A game screen exposes no UI tree. So it's driven by sight, and judged by logs. What the log cannot decide, an AI judge reads from screenshots.

- Headline number: 300 cycles
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/android-qa/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/android-qa/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A program that checks a game automatically, with a real phone plugged in over USB and nobody watching. I built it myself because the off-the-shelf automation tools will not work here.**

## Why the off-the-shelf tools do not work — a game screen has no handles

This is where the project starts. Understand this part and the rest follows.

**An ordinary app** puts things on screen **each carrying a name.** There really is a thing labelled *Login button*.

So an automation tool can say **"press the Login button."** It finds it by name and presses it. The screen size can differ, the position can move, and it still finds it.

**A game is different.** A game paints **the whole screen as a single picture.** Things that look like buttons are **just paint.**

| | An ordinary app | A game |
|---|---|---|
| How the screen is built | Named parts | **One picture** |
| Search for *the Login button* | It finds it | **Nothing there** |

So a stock tool looking at a game screen **sees an empty room.** There is nothing to press.

## So the method changed — "drive by sight, judge by log"

One line runs through the whole project.

| What | How |
|---|---|
| **Pressing** | **Look at a picture of the screen** and work out where to press |
| **Judging whether it worked** | **Read what the game wrote down** |
| **What the log cannot decide** | **An AI judges the screenshot**, and rules re-check its evidence (from 2026-09) |

Splitting those two is the core. And **moving the verdict off the pixels and onto the log** was this project's single biggest improvement. Why, in the piece below.

Some things never reach the log, though — "what is visible on screen" is one of them. Since 2026-09 those cases are judged by the **photo judge** instead of a person.

## Scale

Written in Python, 22 capabilities, with 353 checks around it now (104 at first). It runs with a real phone attached over USB or Wi-Fi, and the current test list has 248 cases.

It has run **300 cycles** overnight, unattended.

## Written up in four parts

| | What the problem is |
|---|---|
| **Driving and judging** | How do you press a screen with no handles, and what decides the result |
| **The unattended loop** | What has to be true for a run nobody is watching |
| **What came out** | The overnight result — and **the first thing that wasn't my automation's fault** |
| **The photo judge** | What it takes to trust an AI's verdict on a screen the log cannot decide |

## And the same cases against a PC build

The case list was written for phones, but **the PC build of the same game** also had to be checked.

The same game **controls completely differently.** And **what needs confirming is identical.** How that gap was bridged is written up too.

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
