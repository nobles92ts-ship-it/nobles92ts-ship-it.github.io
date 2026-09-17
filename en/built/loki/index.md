# Loki

> Chat with your own PC. A local Slack agent running on your Claude Code subscription — no API key.

- Headline number: Slack
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/loki/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/loki/index.md
- Repository: https://github.com/nobles92ts-ship-it/loki-agent
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Say something in a messenger and the PC under my desk does the work. It works from my phone, from anywhere.**

## What it is

I put **my own PC into the work messenger as if it were a person.**

Send it a message and **the computer at home actually does the work**, then sends the result back through the messenger.

Think of it as **texting instructions to an assistant sitting at my desk.** The assistant is at my computer, so it can see my files and run my programs.

## The decisive design — "it runs on a flat monthly fee"

This is why the thing is viable at all.

Attaching an AI to a program normally means **paying per use.** Which makes leaving it on all day a liability — **every check costs something even when nothing is happening.**

This is different. **It runs on top of the subscription I already pay for.** No additional charge.

| | Pay per use | This |
|---|---|---|
| Leave it running all day | **A liability** | **No issue** |
| Have it check things often | Costs each time | **Just do it** |

**The point where leaving an agent on all day becomes realistic** is here. Not a feature — **a billing structure made this possible.**

## What it is actually used for — "work that outlives the conversation"

Its best use is **jobs that take hours.**

For instance:

1. Send **"run this job"** from my phone
2. Put the phone away and do something else
3. **Hours later, the report lands in that thread**

**The PC does the work and the messenger is just a handle.** So it does not matter where I am, as long as I did not shut the machine down.

## It is published

The source is open for anyone to look at.

And something actually came of that — **someone using it found a bug and sent it back with the diagnosis and the fix attached.**

## Written up in four parts

| | What the problem is |
|---|---|
| **Architecture** | Swapping both the messenger and the AI while **keeping one core** |
| **Commands** | How much you can ask for through a chat box |
| **Permissions and guards** | Opening **something that can touch my whole machine** to other people |
| **Silent failures** | Almost every bug here was **"returned success and did nothing"** |

The last one is the most expensive story this project produced.

## The detailed record starts here

Mention it in Slack and it does the thing on the machine sitting under your desk. Discord runs on the same core.

No API key. It runs on a Claude Code subscription, which means the cost model is a flat monthly fee instead of per-token billing — the difference that makes leaving an agent running all day actually viable. It's a public repo, and someone running a fork once sent me three bugs with diagnoses and patches attached.

## Written up in four parts

| | The problem |
|---|---|
| [Architecture](/en/built/loki/architecture/index.md) | Swapping both the platform and the brain while keeping one core |
| [Commands](/en/built/loki/commands/index.md) | How much you can actually ask for through a chat box |
| [Permissions and guards](/en/built/loki/permissions/index.md) | Opening an agent with shell access on your own PC to other people |
| [Silent failures](/en/built/loki/silent-failures/index.md) | Almost every bug returned success and did nothing |

## What it's actually used for

Long-running pipelines that outlive a chat session. Kick off a [test-case run](/en/built/tc-team/index.md) from a phone, get the report back in the thread hours later. The PC does the work; Slack is just the handle.

And one more — a session on another machine posts to Slack as me, and the Loki on this PC runs it. That story lives under [silent failures](/en/built/loki/silent-failures/index.md), because **it's a feature that came out of fixing a bug.**
