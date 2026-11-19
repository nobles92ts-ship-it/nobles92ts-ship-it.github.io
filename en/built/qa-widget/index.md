# QA widget

> A small panel pinned to the corner of the screen. KPIs and progress, with the report one click away.

- Headline number: always visible
- Rendered page: https://aitryed.com/en/built/qa-widget/
- Other language: https://aitryed.com/ko/built/qa-widget/index.md
- Repository: https://github.com/nobles92ts-ship-it/qa-dashboard-widget
- Site guide for agents: https://aitryed.com/en/llms.txt

---

The QA widget is a small panel that stays on screen all the time. Test results and progress refresh by themselves every five minutes.

## Why it is not a web dashboard

Dashboards usually end up as web pages: prettier, bigger, with room for more features. They share one fatal weakness, though. You have to go and look, and nobody goes.

It tends to play out the same way. On the day it ships everyone opens it and says it looks nice. A week later people check it now and then, and by two weeks the tab is closed. After a month the numbers have gone stale and nobody knows.

That last stage is the worst. A wrong number sits there, nobody looks, so nobody fixes it.

## Built so you do not have to go

The widget is pinned to the top right of the desktop. Turn the computer on and it is there. There is no trip to make; not looking would take effort.

## Written up in three parts

The story splits into three write-ups. The screen part covers why something that shows numbers must not show only numbers. The architecture part covers why the widget must not fetch anything itself, and the delivery part covers why putting a tool on someone else's machine was harder than building it.

## The cost

To be plain about it, the widget runs on Windows only and looks like it was made in 2009. Both are true.

Even so, it has been on my screen every working day since I built it, which none of the prettier dashboards I have made ever managed. A dashboard that looks good and goes unopened loses to an ugly one that is seen daily.

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
