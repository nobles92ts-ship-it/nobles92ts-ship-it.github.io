# The screen

> Numbers alone aren't enough. How the number was arrived at, and what you can do about it, have to be right there.

- Headline number: always on top
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/qa-widget/screen/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/qa-widget/screen/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Something that shows numbers must not show *only* numbers. How the number was reached, and what you can do about it, have to sit beside it.**

## What it looks like

A small panel. Dark, **always on top**, draggable, **refreshing itself every five minutes.**

It pulls once on launch and a timer runs from there.

Three decisions went into it.

## Decision one — what was excluded from the denominator goes on screen

Computing progress means **excluding items that cannot be tested yet.** Otherwise progress never reaches 100%.

That much is obvious. **What follows is this widget's decision.**

> **The fact that they were excluded is written on the widget, in one line.**

Why: **without it, the number becomes untrustworthy.**

| | What a person sees | What they think |
|---|---|---|
| Just *84%* | 84% | **"84% of what, exactly?"** |
| **"84% (12 excluded)"** | 84% plus the basis | **Understood immediately** |

A bare number makes you **suspect it every time you look**, and suspicion ends in **not looking.** **One line removes the suspicion.**

## Decision two — it is not only for looking at

Under the numbers are **three buttons.**

| Button | What it does |
|---|---|
| Republish the report | Push the latest report again |
| Send a notification | Tell the team |
| **Leave a comment** | Note it right there |

Why buttons: **looking at a number usually produces something to do.**

Without them it goes: see the number → **"I should share this"** → open another window → find the address → … and **something interrupts and it is forgotten.**

**Looking and doing in the same place** keeps that flow unbroken.

> **Anything that shows you information should also hold the things you will want to do about it.**

## Decision three — always on top

It sounds minor and it defines the thing.

Covered by another window, **it eventually goes unseen.** At which point it is the web dashboard again.

Always-on-top is **slightly annoying and guaranteed to be seen.** And since **being seen is this thing's only reason to exist**, that trade is correct.

To reduce the annoyance it is **draggable.** Push it into a corner when it is in the way — **when moving is easier than closing, people do not close it.**

## The detailed record starts here

One small panel. Dark theme, always on top, draggable, refreshing itself every five minutes. It pulls once on launch and then the timer takes over.

Three decisions live in it.

## The reasoning goes on the screen

N/A cases are excluded from the progress denominator. And the fact that they are excluded is **written on the widget, in one line.**

Leave it off and someone asks why the denominator shrank since yesterday, and answering that costs far more than the line does. Worse, the person who had to ask reads that number **half-doubting it** from then on.

**A tool that shows numbers has to show how the numbers were arrived at** alongside them. It's the most common dashboard failure: the arithmetic is right, the method is invisible, and the reader carries their own version of the arithmetic in their head — and stops trusting the tool the moment the two disagree.

## It isn't only for looking at

There are three buttons under the numbers — **redeploy the report, send the notification, write a comment.**

The comment box is there for a reason. When you're looking at the widget and think "that needs another look," having to open a different window means it doesn't get done. **Split the place you look from the place you act and half of it leaks out in between.**

Same reason the report deploys from here. The person who knows the results just changed should already be sitting in front of the button that publishes them. "Saw the result → open another tab → find the deploy tool → run it" is four steps, and four-step jobs get postponed.

## Where the ugliness was accepted

It's WinForms. Rounded corners drawn by hand, separators drawn by hand, buttons built by hand — all things a web version would have given me in thirty minutes.

I took this route anyway because **a web version goes behind a browser tab.** The single design goal of this tool is "visible whether or not you meant to look," and living in a browser fails that goal from the start.

When a technology choice fights the goal, the goal wins. The price is a screen that looks like 2009.
