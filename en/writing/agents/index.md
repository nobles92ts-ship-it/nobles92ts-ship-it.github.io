# Running agents

> The other side — loops, guards, and the things I decided not to automate.

- Headline number: 2 posts
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/agents/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/agents/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The side where you give an AI work. Run it unattended and the accidents arrive *quietly*.**

## How the accidents arrive

Leave an AI running with nobody watching and when something goes wrong, **it does not arrive as a red error.**

> **It arrives as an empty success.**

It says *complete* and **nothing actually happened.** The error log is clean and the result screen looks normal.

Then, **days later**, someone notices *hang on, that never happened.*

## Which is why the concern here is not "make it smarter"

Building AI automation, the instinct is **to make it better at the job.** The concern here is different.

> **Make failure *look like* failure.**

Coming first, before doing well, is **being visibly wrong when it is wrong.** Wrong and invisible means **there is no way to know whether it is doing well at all.**

## But the other side exists too

What if, to be safe, **it stops and asks every time?**

| | Result |
|---|---|
| Asks about everything | **Spends a person's whole day and buys nothing** |
| Asks about nothing | **Quiet failures** |

Both are bad. So the actual work is **deciding where to stop and where to carry on.**

And that line is usually **"is it reversible."** Reversible, carry on. Not reversible, stop.

## Written

| Piece | What the problem is |
|---|---|
| **An agent is quiet when it fails** | What catches **a failure that ended in success** |
| **Unattended regression comes from recovery structure, not speed** | **How it survives** when nobody is watching |

## Not written yet

- **How many times the approval gate has actually fired** — I am not counting
- How to separate, in the report, **passing by pressing roughly** from **passing by pressing precisely**
- **What to set the retry ceiling to**, and **what to leave behind when it is reached**

## The detailed record starts here

Run an agent unattended and the accidents are rarely loud. They don't arrive as exceptions; they arrive as **empty successes.**

So what this category cares about isn't making them smarter, it's **making failure look like failure.** And the opposite edge of that — stop and ask every time you want to be safe, and you spend a person's whole day and buy nothing.

## Written

| Post | The problem |
|---|---|
| [Agents are quiet when they fail](/en/writing/agents/silent-success/index.md) | What catches a failure that exited with code 0 |
| [Unattended regression is built by recovery, not speed](/en/writing/agents/unattended-regression/index.md) | How a loop survives when nobody is watching |

## Not written yet

- How often the approval gates actually fire — I'm not counting
- How to separate a precise tap from a rough fallback tap in the report
- Where to set the retry ceiling, and what to leave behind when it's reached
- Why I keep forgetting to carry a guard learned in one repository into the one next to it

## The rule for this category

**The boundary of automation is drawn on whether it can be undone, not on what's possible.** Draw it on capability and it keeps sliding, and the ground it slid over goes unwatched until something breaks.

And **when it's ambiguous or something fails, the default is not to act.** That one line decides where to go in a situation the list doesn't cover.
