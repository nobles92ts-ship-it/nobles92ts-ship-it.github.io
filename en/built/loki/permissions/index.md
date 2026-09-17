# Permissions and guards

> Opening an agent with shell access on your own PC to other people. And stopping is a feature.

- Headline number: 3 tiers
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/loki/permissions/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/loki/permissions/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**How to open something that can touch your whole machine to other people. And stopping is a feature.**

## The problem first — this is a dangerous object

This thing can **run commands on my computer.** Read files, write files, start programs.

Opening it through a messenger means **anyone in that messenger can talk to my computer.**

Right now that is only my two machines. **The fact that it is structurally true does not change.** So what comes next matters.

## Three tiers

| Tier | From where | What they can do |
|---|---|---|
| **Owner** (me) | Anywhere | **Everything** |
| **Org member** | Designated channels | **Named folders only, read-only** |
| **Guest** | Invited channels | **Allowlisted folders only.** Running commands **blocked** |

## The most important line — "deny reads and they read with the shell"

The most valuable thing on this page.

Say I restrict **file reading** for guests. But **I leave command execution open.**

What happens: **they read the file with a command.**

*Open this file* is blocked, and *run this command* reaches **the same file.** **Blocking one road is pointless when the destination is reachable another way.**

> **If even one indirect route stays open, blocking the direct one means nothing.**

So the guest tier also blocks **command execution, tool execution and spawning sub-tasks.** **All three are "reading by another road."**

That is invisible taken one at a time. *Files are blocked, so we are fine.* It becomes visible **only by counting how many roads reach that destination.**

## An org is one file

**One file, one org.** It holds all of this:

- Who the members are
- Which channels it binds to
- **Which folders they can read**
- **Which commands they can use**
- How many times per hour

They are in one file so that **it can be seen at a glance.** Scatter the settings and **you cannot answer "what can this person do right now."**

## Editing the settings gets reverted and reported

If someone edits the settings file directly, it is **reverted, and the owner is told.**

**Revert and report** rather than **block** matters. Blocking alone **leaves no record that someone tried.**

## And stopping is a feature

The last part defines what this thing is.

Resuming a long job, it **shows the options and what each costs, and stops.** It runs when I approve.

And **everything that leaves the machine** works that way.

| What | Automatic up to | Human from |
|---|---|---|
| Publishing a piece | **The draft** | Posting |
| Pushing code | **Tidying and checks** | Pushing |
| Filing a ticket | **The draft** | Filing |

All of them **finish the preparation and stop.**

One reason: **things that are hard to reverse and things that are easy to reverse have to be handled differently.** Reading a file wrongly can be redone; **anything that has left cannot be taken back.**

So the goal of automation here is **not "do the whole thing alone" but "have everything ready up to the point where a person decides."**

## The detailed record starts here

An agent with shell access on your own PC is a different risk class from a chatbot. Which is why the longest part wasn't the agent loop — it was the **guards**.

| Tier | Where | What they get |
|---|---|---|
| **Owner** | DM · every channel | Everything — shell, files, skills |
| **Org member** | Bound channels | Only the folders named in that org's file, read-only |
| **Guest** | Invited channels | Only allowlisted folders. `Bash` and `Skill` blocked |

## Deny reads and they read with the shell

Blocking `Bash` in the guest tier **is the important half.** Lock file reads and leave the shell open, and they read files with the shell. Skill execution and sub-task spawning are blocked for the same reason — **one open indirect path makes closing the direct path meaningless.**

There was a practical trap here. The deny rules grow to **468 entries.** Passed on the command line, that hits the shell's command-length limit and **nothing runs at all.** The error is a single line about the command being too long, which makes the cause hard to find. They go through a settings file now.

And an empty manifest means **deny everything, not allow everything.** If someone empties the file by accident, locking is better than opening.

## An org is one file

**One file, one org.** Members, bound channels, readable folders, permitted commands, and an hourly cap all live in it.

Resolution order is fixed — owner, then explicit member, then channel binding, then unaffiliated. Orgs are isolated from each other, and org files are read-only.

They're files because **you have to be able to open one and look.** If permission state only exists in a database or a command history, answering "what can this person see right now" means running a tool. With a file you just read it.

## Credentials get reverted, and reported

Editing the config file directly gets **reverted, with a notification to the owner.**

Because a half-applied credential change is worse than none. An agent running half-switched blurs which account did what.

I got caught by this guard myself. I put a token in by hand, saw it gone later, and **misdiagnosed it as "the save failed," losing an hour.** The revert sends a notification and I hadn't looked at it. Confusion caused by the guard working correctly — so now "if it vanished, check the alert first" is step one.

## Stopping is a feature

When resuming a long pipeline from a thread, Loki **shows the options and what each one costs, then stops.** Nothing runs until it's approved.

Two properties matter here.

**The gate never calls the brain.** So it keeps working even when the subscription quota is exhausted. Being unable to confirm a resume in the exact situation where quota is why you can't resume would be blocked twice over.

**The pending state lives on disk.** The first version held it in memory for fifteen minutes, and the very first real use broke it — asked at 15:27, answered at 16:53. Eighty-six minutes. The expired confirmation leaked quietly into the model, and **the model invented an answer: "shall I run it manually?"**

Fifteen minutes wasn't wrong for being short. **Resuming is something you do after waiting for a quota reset**, so a lifetime measured in minutes never matched reality — and it had to survive a worker restart.

The risk of a stale answer isn't handled with a clock. When the answer arrives, the options are **recomputed and compared against what was originally asked** — and if they differ, it asks again instead of running. Expired ones aren't dropped silently either; they're reported as expired.

## Anything that leaves the machine

Publishing, pushing, filing tickets. All of it **prepares automatically, then stops and waits for a human.**

One criterion: **does a trace end up outside this machine?** Editing a file is reversible; a published post can be deleted, but somebody has already seen it.
