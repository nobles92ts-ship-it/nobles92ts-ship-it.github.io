# Loki

> Chat with your own PC. A local Slack agent running on your Claude Code subscription — no API key.

- Headline number: Slack
- Rendered page: https://aitryed.com/en/built/loki/
- Other language: https://aitryed.com/ko/built/loki/index.md
- Repository: https://github.com/nobles92ts-ship-it/loki-agent
- Site guide for agents: https://aitryed.com/en/llms.txt

---

Loki is a local Slack agent that puts my own PC into the work messenger as if it were a person. Say something there and the PC under my desk does the work, and it works from my phone, from anywhere.

## Send a message and the computer at home does the job

Send it a message and the computer at home actually carries out the work, then sends the result back through the messenger. Think of texting an errand to an assistant at my desk. That assistant sits at my computer. It sees my files and runs my programs.

## A flat monthly fee makes leaving it on all day painless

Attaching an AI to a program normally means paying per use. Every check costs something even when nothing is happening, so leaving it on all day is a liability.

Loki runs on top of the subscription I already pay for, so there is no additional charge. Asking it to check things often costs nothing extra, which makes an agent that stays on all day realistic. A billing structure made that possible, more than any feature.

| | Pay per use | Loki |
|---|---|---|
| Leave it running all day | A liability | No issue |
| Have it check things often | Costs each time | Just do it |
| Extra charge | By usage | None |

## It suits jobs that take hours

Its best use is work that outlives the conversation. I send "run this job" from my phone, put the phone away and do something else, and hours later the report lands in that thread.

The PC does the work and the messenger is just a handle. Where I am does not matter, as long as I did not shut the machine down on my way out.

## The source is published

The source is open for anyone to look at. Something did come of that: a person using it found a bug and sent it back with the diagnosis and the fix attached.

## Written up in four parts

The architecture part covers swapping both the messenger and the AI while keeping one core. Commands asks how much a chat box can do. Permissions and guards is about letting other people use something that can touch my whole machine. Silent failures covers the bugs, and almost every one was "returned success and did nothing."

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
