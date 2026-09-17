# Architecture

> The widget does not fetch anything. It reads one file and draws it.

- Headline number: one file
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/qa-widget/architecture/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/qa-widget/architecture/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The widget does not fetch anything. It reads one file and draws it. A *different* program writes that file.**

## Two pieces

| Who | What it does |
|---|---|
| **The collector** | Sweeps the sheets and the issue list and **writes one file** |
| **The widget** | **Reads that file and draws** |

**The widget never makes a remote call.**

## Reason one — a frozen window gets closed

Remote calls take **seconds.** More when the server is slow.

If the widget fetched directly, **the window would freeze for that time.** No dragging, no buttons.

**And people close a frozen window.** Closed once, it does not get reopened.

The reason this widget exists is **being always on screen**, and **closed, it has no reason to exist.**

> **Something that must always be visible must never freeze.**

## Reason two — failure leaves the previous values

This matters more.

| | If the widget fetched | Reading a file |
|---|---|---|
| Fetch succeeds | New values | New values |
| **Fetch fails** | **Blank, or an error** | **The previous values, intact** |

Previous values are good because **yesterday's number beats no number.**

And **a blank screen cannot separate two things.**

- There is no data yet
- **There is data and it could not be fetched**

With previous values present you can **judge from the refresh timestamp** — *hold on, that has not moved in three hours.*

## A milestone is configuration, not code

This project **repeats the same work every cycle.** At which point **there must be nothing to edit.**

So everything that differs per cycle was **pulled out into configuration entries.**

| Moved to configuration |
|---|
| Which sheet to read |
| The report address |
| The cycle name |
| Where to send notifications |
| The deploy folder |
| Where the template lives |

With that, **starting a new cycle requires no opening of code.** A few configuration lines change.

Why that matters: **opening code leads to touching other things**, and then **something that worked last cycle breaks.** And that shows up **much later.**

> **For work that repeats on a cycle, the goal is not opening the code when it repeats.**

## The detailed record starts here

That's the core of the structure. The widget **reads one file and draws it.** A separate script walks the sheets and the issue tracker and writes that file.

## A frozen UI gets closed

The first reason for the split. A remote query takes seconds, and if the window locks up during them, **people close the widget.**

So the refresh is fired asynchronously and **a timer checks for completion.** The window keeps moving; values change late when they arrive late.

This isn't performance tuning, it's **survival.** The only value this tool has is that it stays on screen — and if freezing makes someone close it, that value goes to zero. A five-second stall is equivalent to deleting a feature.

## Failure leaves the previous values

The second reason. When the fetch script fails, the widget **still holds the previous values.**

A slightly stale number beats a blank panel or a row of zeroes. Zero is **a lie**; a stale number is **an old truth.**

This works precisely because the widget doesn't fetch. Had it called the APIs directly, a failure would mean the display collapses. Reading a file means an un-refreshed file simply shows yesterday's numbers.

Which then makes **"how old is this" important.** So the refresh timestamp is on screen.

## A milestone is configuration, not code

Rolling to a new milestone had to require no code changes. So everything that differs per milestone became a config key — sheet identifier, report URL, sprint name, notification channel, deploy folder, template path.

Opening a new milestone means **copying a template and filling in the values**, and a separate desktop shortcut appears for it. There is one copy of the code.

One thing mattered here. **Put the milestone in a code constant and you can never look at a previous one.** Reasons to revisit an old milestone's results keep appearing long after it ends, and with a constant that means reverting code each time. Now it's a double-click on a shortcut.
