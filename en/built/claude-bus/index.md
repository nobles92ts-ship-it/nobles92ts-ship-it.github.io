# claude-bus

> Leave a job on the office PC; a fresh session on the home PC picks it up. One shared folder, no server.

- Headline number: 2 machines
- Rendered page: https://aitryed.com/en/built/claude-bus/
- Other language: https://aitryed.com/ko/built/claude-bus/index.md
- Repository: https://github.com/nobles92ts-ship-it/claude-bus
- Site guide for agents: https://aitryed.com/en/llms.txt

---

claude-bus is a small tool that lets the office PC hand a job to the home PC and have it done there. There is no server and no port, just one shared folder.

## How it runs

The two computers share a folder that syncs itself: a file dropped in on one side shows up on the other.

The office PC drops a file in that folder saying "do this." A watcher on the home PC checks the folder every minute, and when it finds the file it starts a fresh session, does the work, and puts the result back in the same folder. The office PC then reads it.

There is no server, no port and no login. The bus sits on top of a folder sync that was already running.

> **[도판]** No server, no port, no auth. It drops a file into a sync folder that was already running. Slow — but it does the one thing a chat app can't: wake a machine that's asleep.
>
> The office machine drops a request file into a shared folder. A watcher on the home machine picks it up within a minute, spawns a fresh session, and returns a response file to the same folder. Round trip 133 to 191 seconds.

## It was not built to move files

This is the part people misread most often. Files inside a syncing folder are already on both machines, so there would be no reason to build a bus just to send one.

What it buys is the machine itself. Programs installed only on the home PC, a game project that lives only there, and hardware plugged into it can't be reached by moving files. So the job is sent over and done there.

## Why build a slow channel on purpose

A round trip takes two to three minutes, far slower than a messenger that takes seconds.

Still, there is one thing a messenger cannot do. It needs the other side to be awake; if that PC is asleep, the messages pile up and someone has to read them in the morning. Here the watcher keeps looking at the folder, so when a file lands the sleeping side wakes itself and gets to work. It is slow, but it arrives with nobody there.

## Written up in three parts

The write-up comes in three pieces. [Protocol](/en/built/claude-bus/protocol/index.md) covers why no conflict copies appear when both sides share one folder. [Timing](/en/built/claude-bus/timing/index.md) is about measuring where the three minutes go and finding it was not my code. [Safety](/en/built/claude-bus/safety/index.md) looks at what stands between somebody else's instruction and my machine.

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
