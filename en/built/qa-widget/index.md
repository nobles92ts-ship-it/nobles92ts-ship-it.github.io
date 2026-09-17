# QA widget

> A small panel pinned to the corner of the screen. KPIs and progress, with the report one click away.

- Headline number: always visible
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/qa-widget/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/qa-widget/index.md
- Repository: https://github.com/nobles92ts-ship-it/qa-dashboard-widget
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A small panel that is *always* on screen. Test results and progress, refreshed every five minutes on its own.**

## Why not a web dashboard

This is the entire thing.

Build a dashboard and you normally build **a web page.** Prettier, bigger, room for more features.

Web dashboards have one fatal weakness.

> **You have to *go* and look. And nobody goes.**

In practice:

| When | What happens |
|---|---|
| The day it ships | Everyone opens it. *Nice* |
| A week later | Occasionally |
| **Two weeks later** | **The tab is closed** |
| A month later | **The numbers have gone stale and nobody knows** |

The last row is the worst. **A wrong number is sitting there and nobody looks, so nobody fixes it.**

## So it was built so you do not have to go

This widget is **pinned to the top right of the desktop.** Turn the computer on and it is there.

**No going required. Not looking takes effort.**

## Written up in three parts

| | What the problem is |
|---|---|
| **The screen** | **Why something that shows numbers must not show *only* numbers** |
| **Architecture** | **Why the widget must not fetch anything** |
| **Delivery** | **Putting it on someone else's machine was harder than building it** |

## The cost

Stated plainly.

- It runs **on Windows only**
- It **looks like it was made in 2009**

**Both are true.**

And since it was built it has been **on my screen every working day.** None of the prettier dashboards I have made managed that.

> **Ugly and seen daily beats beautiful and never opened.**

## The detailed record starts here

Test results, progress, how far the current run has got. Pinned to the top-right of the desktop, refreshing itself every five minutes.

## Why not a web dashboard

A dashboard is somewhere you have to **go**, and nobody goes. Two weeks after you build it the tab is closed, the numbers are stale, and nobody knows.

Something already on screen gets read without anyone deciding to read it. That is the entire design rationale, and it is why this is a PowerShell WinForms panel instead of a proper web app — **the ugly technology choice was the one that stays in front of a person.**

## Written up in three parts

| | The problem |
|---|---|
| [The screen](/en/built/qa-widget/screen/index.md) | Why a thing that shows numbers must not only show numbers |
| [Architecture](/en/built/qa-widget/architecture/index.md) | Why the widget must not fetch anything |
| [Delivery](/en/built/qa-widget/delivery/index.md) | Putting a tool on somebody else's machine is harder than the code |

## The cost

It is Windows-only and looks like it was built in 2009. Both true. And it has been on screen every working day since I made it, which no dashboard I have ever built managed.
