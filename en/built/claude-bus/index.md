# claude-bus

> Leave a job on the office PC; a fresh session on the home PC picks it up. One shared folder, no server.

- Headline number: 2 machines
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/claude-bus/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/claude-bus/index.md
- Repository: https://github.com/nobles92ts-ship-it/claude-bus
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Give the office PC a job and the home PC does it. No server, no ports — **one folder** is the whole thing.**

## How it runs

Two computers **share one folder** (the kind that syncs itself).

1. The office PC drops **a file saying "do this"** into the folder
2. A watcher on the home PC, **checking the folder every minute**, finds it
3. The home PC **starts a fresh session** and does the work
4. It puts the result **back into the same folder**
5. The office PC reads it

**No server, no ports, no login.** It was **laid on top of** a folder sync that was already running.

> **[도판]** No server, no port, no auth. It drops a file into a sync folder that was already running. Slow — but it does the one thing a chat app can't: wake a machine that's asleep.
>
> The office machine drops a request file into a shared folder. A watcher on the home machine picks it up within a minute, spawns a fresh session, and returns a response file to the same folder. Round trip 133 to 191 seconds.

## It was not built to move files

The most misread part.

Files inside a syncing folder are **already on both machines.** There would be no reason to build this to send a file.

**What it buys is not the file, it is the machine.**

There are things only the home PC has — programs installed only there, a game project only there, hardware attached to it. **Moving files does not get you those.**

So **the job is sent over so it can be done there.**

## Why build a slow channel on purpose

A round trip takes **two to three minutes.** A messenger takes seconds. **Far slower.**

There is one thing a messenger cannot do.

| | A messenger | This bus |
|---|---|---|
| Speed | **Seconds** | 2–3 minutes |
| If the other machine **is asleep** | **Messages just pile up** | **It wakes it and runs the job** |

A messenger requires **the other side to be awake.** Asleep, the messages accumulate and someone has to read them in the morning.

Here **the watcher keeps looking at the folder**, so when a file lands **the sleeping side wakes itself** and works.

> **Slow, but it arrives with nobody there.**

## Written up in three parts

| | What the problem is |
|---|---|
| **Protocol** | Both sides share one folder — **why no conflict copies appear** |
| **Timing** | I measured where the three minutes go — **it was not my code** |
| **Safety** | **What stands between somebody else's instruction and my machine** |

## The detailed record starts here

Two machines share one folder. One side drops a JSON file, a watcher on the other side picks it up within a minute, spawns a fresh session, and puts the result back in the same folder. No server, no port, no auth — it rides on a sync folder that was already running.

## It buys you the machine, not the files

Everything under the synced folder is already on both machines. **You don't need a bus to move files.**

What a bus buys you is **the other machine itself**.

- Hardware only it has — a GPU, an attached device, a game client
- A network only it can reach
- Software only it has installed

## Why build a slow channel on purpose

A chat app moves in seconds. But if the other machine is asleep, messages just pile up. This bus takes three minutes and **wakes the sleeper.**

Waking and speed are different axes. When people pick a channel they only look at the second one.

## Written up in three parts

| | The problem |
|---|---|
| [Protocol](/en/built/claude-bus/protocol/index.md) | Making conflict copies impossible in a two-way sync folder |
| [Timing](/en/built/claude-bus/timing/index.md) | Measured where the three minutes go — it wasn't my code |
| [Safety](/en/built/claude-bus/safety/index.md) | What stands between somebody else's instruction and my machine |
