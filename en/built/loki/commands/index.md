# Commands

> How much you can ask for through a chat box — and the two that changed how it feels.

- Headline number: 11 of them
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/loki/commands/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/loki/commands/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**How much you can ask for through a chat box. Eleven capabilities, and two of them changed how the thing feels to use.**

## What it can do

| What | It does |
|---|---|
| **Conversation** | Talk to it and it answers |
| **Long jobs** | Kick off an hours-long job and **progress flows into the thread** |
| **Scheduling** | Daily, weekly, once. **Survives a reboot without forgetting** |
| **Goal nudges** | **Prompts you first** about stale goals |
| **Swap the AI** | Change which AI answers |
| **Checklists** | **Tick one and everyone sees it** |
| **Org settings** | Who can use what |
| **Auto-listen** | In designated places it answers **without being named** |
| **Add a capability** | One file, one command |
| **Self-watch** | **Revives itself within five minutes if it dies** |
| **Usage** | 90 days of statistics |

## The first thing that changed the feel — "carry on today's conversation from yesterday"

Something was odd at first. **Threaded replies continued fine, and direct messages started fresh every time.**

Tracing it: the key identifying a conversation was **the unique ID of a single message.**

Replies **share the original message's ID**, so they continue. A new direct message gets **a new ID every time.** Hence **a new conversation, every time.**

**Not being able to carry yesterday's conversation into today** is a bigger inconvenience than it sounds — the background has to be re-explained each time.

The key changed, and **direct messages now continue.**

## The second — "why the checklist is hand-built"

Slack already has checkboxes. I built my own anyway.

One reason:

> **Slack's native checkbox is per-viewer, so nobody else can see what I ticked.**

Fine alone. **Working through one list with several people it is fatal** — nobody knows how far anyone has got, so the list means nothing.

So I built one where **ticking is reflected for everyone looking.**

→ **A built-in feature existing does not mean you can use it.** The question is not *does it exist* but **does it hold up in my situation.**

## The nudge feature uses one noun in two directions

The goal-minding feature performs **two different actions under one name.**

| Direction | What | Side effects |
|---|---|---|
| **Pull** | I ask, and it produces a suggestion | **None** |
| **Push** | It **messages me first** | Yes — so it has **a cooldown** |

The cooldown exists for a reason. **A feature that speaks first becomes nagging if built badly.** And once it is nagging, **people switch it off.**

So **once it prompts, it stays quiet for a while.**

## And what it does not record

Usage records are kept for 90 days, and **conversation content is not written down.**

What is kept: **when, who, how long.**

That matters because **records are hard to delete later.** *Keep everything now and tidy it up later* mostly never gets tidied. **Not recording it in the first place is the only reliable method.**

## The detailed record starts here

| What | Command | What it does |
|---|---|---|
| Conversation | — | DMs carry over; threads are separate from each other. A channel top-level message gets no session |
| Long jobs | `!jobs` `!cancel` `!stop` | Two at once, same thread in order. A pipeline running for hours streams progress into the thread |
| Scheduling | `!schedule` | Daily, weekly, or once. After a reboot, recurring rolls forward and one-shots fire immediately |
| Goals · nudges | `!goal` `!nudge` | Stale goals (72h), three consecutive failures for the same reason, chosen brain unreachable |
| Swap the brain | `!provider` | Spawns a CLI that's already logged in on this PC |
| Checklists | `!check` | Click to check; it syncs for everyone looking at it |
| Orgs | `!org` | One file, one org — members, channels, readable folders, permitted commands, hourly cap |
| Auto-listen | `!listen` `!exit` | Inside a designated zone it answers without being mentioned |
| Plugins | — | One file in `plugins/` is one command |
| Watchdog | `doctor` | Revives it within five minutes. A stopped heartbeat counts as death too |
| Usage | `!usage` | 90 days of it. Metadata only — conversation bodies are never written down |

## Where a session is anchored

Originally the session key was **the message's own identifier.** So threads worked while **a top-level DM started a fresh conversation every time** — meaning you couldn't pick up yesterday's thread today.

Now it splits three ways.

- **DM** — carries over, expiring after an idle period
- **Thread** — its own, never mixed with another thread
- **Channel top-level** — no session

The last one isn't a feature, it's a **defence.** Several people use a channel, and attaching a session there means **somebody else's conversation joins my context.** One convenience given up to close that path entirely.

There was a trap attached. Unless the job queue's serialisation key also becomes the session key, **two DMs arriving back to back resume the same session concurrently.** The moment you make sessions continuous, the queue has to be fixed alongside.

## Why the checklist is hand-built

Slack has checkboxes natively, and I built my own anyway. One reason: **native checkboxes are per-user input, so they don't sync.** What I check nobody else can see.

So it works by re-rendering the button labels wholesale. When anyone clicks, the message itself updates, so **everyone looking at it sees the same state.**

It toggles by text too, for situations where clicking isn't possible.

## Watching a goal versus telling you about it

Nudges use one concept in two directions. **Pull** builds suggested prompts with no side effects; **push** waits out a cooldown and DMs you.

The three watchers were chosen on one criterion — **they must need to understand nothing.**

- A goal hasn't moved in 72 hours
- Three consecutive failures for the same reason
- The selected brain can't respond

All three are decided by counting. The approach of reading the conversation and judging "this is going in circles" was [rejected](/en/built/loki/silent-failures/index.md).

## Usage keeps metadata only

Ninety days of records, and **no conversation bodies.** When, who, how long.

Good for privacy and **bad for audit.** It cannot answer "what instruction was given then." That's a trade-off, and being a personal tool, I took the first one. Deploying to a team would mean reversing it.
