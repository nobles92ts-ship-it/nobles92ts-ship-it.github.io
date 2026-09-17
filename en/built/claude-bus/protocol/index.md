# Protocol

> Conflict copies never appear because every folder has exactly one writer.

- Headline number: 1 writer
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/claude-bus/protocol/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/claude-bus/protocol/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Both sides use one folder and no conflict copies appear. The answer is that **every folder has exactly one writer**.**

## Why conflict copies happen

Anyone who has used an auto-syncing folder has seen **"some file (conflicted copy)"** appear.

There is one cause. **Two machines edited the same file at the same time.**

| Machine A | Machine B | Result |
|---|---|---|
| Edits a file | Edits the same file | **The sync tool cannot tell which is right** → it keeps both |

Then **a person has to choose which is current.** No automation survives that.

## So the situation was made impossible

Not handled — **prevented.** The folders were split so that **each one has exactly one writer.**

| Folder | **Who writes** | Who reads |
|---|---|---|
| Inbox | **The senders** | The owner |
| Outbox | **The owner only** | The people who sent |
| Log | **The owner only** | Anyone |

**With one writer, "edited at the same time" cannot occur.**

Many readers cause no conflict. Reading changes nothing.

> **Making a conflict impossible is far cheaper than handling one well.**

## A half-written file must not cross

The second problem.

Writing a file takes time. And the sync tool **can spot the file mid-write.** Then **a half-written file crosses** and the receiver breaks reading it.

The fix is simple.

1. Write the whole thing under **a temporary name** the sync tool ignores
2. Once complete, **rename it**

Renaming is **instantaneous.** So at the moment the sync tool notices the file, **it is already complete.**

## The id is the filename

Small and convenient.

A request's identifier is **the same as its filename**, and **the sender's name is inside it.**

So **just looking at the folder** tells you who sent what. No need to open anything.

## Telling silence apart from "working on it"

The hardest problem with this approach.

A messenger **shows you an error when there is an error.** Here it is different.

> **An asynchronous channel does not fail with an error — it fails with silence.**

And **silence is indistinguishable from "still working."** Both look like nothing happening.

| What is true | What you see |
|---|---|
| Working hard | **Nothing arrives** |
| **The watcher died** | **Nothing arrives** |
| It could not read the file | **Nothing arrives** |

So it **acknowledges first.** Before the work finishes it sends **"received, starting."**

Which splits silence in two — **silence after an acknowledgement** (working) and **silence with no acknowledgement** (something broke).

## The bug — "the front of the queue blocks the back forever"

What this piece cost.

There was code limiting how many items to process at once. *No more than five at a time.*

But that limit sat **before the step that filters out already-answered requests.**

What happens:

1. Read the requests from the folder
2. **Cut to five first** ← the problem
3. Filter out the ones already answered
4. **Nothing left** → nothing gets processed

With five already-answered requests at the front, **new requests behind them never get a turn.** Cut five and they all filter out.

**And no error appears.** It quietly does nothing.

The fix was **swapping the order** — **filter, then cut.**

→ **The same two operations in the other order give a completely different result, and the difference never appears on screen.**

## The detailed record starts here

Two files is the whole thing. One request, one response. A few conventions sit on top.

## Every folder has exactly one writer

Two-way sync produces conflict copies when **two machines edit the same file.** So the folders are split such that the situation cannot arise.

| Folder | Written by | Read by |
|---|---|---|
| `<peer>/inbox` | the senders | the peer |
| `<peer>/outbox` | the peer only | the senders |
| `<peer>/log` | the peer only | anyone |

**No file is ever edited by two machines.** So there is no conflict-resolution logic — not because conflicts don't happen, but because **the structure makes them impossible.**

The folder name names **the side that executes**. `home/inbox` is what the home machine runs. I originally named them by sender and found it confusing, so I flipped it — looking at a file, **the question you have is "who runs this," not "who sent it."**

## Half-written files are never replicated

A file is written under a temporary name and then renamed. By the time the sync tool sees it, **it's already complete.**

Skip this and half-written JSON crosses over, and the far side fails parsing it. And that failure **barely reproduces** — it only happens when file size and sync timing line up.

## The id is the filename

The request id always equals the filename, and it **carries the sender's name inside it.**

So two machines writing into the same inbox never collide on names. And the file listing alone tells you who sent what and when — **the directory listing is the log.**

The alternative was a separate id with sequential filenames, but then you have to open a file to know what it is.

## Telling silence apart from "working on it"

An async channel doesn't fail with an error. It fails with **silence**, and silence is indistinguishable from still working.

So the watcher writes `running` **the instant it claims a job**, and overwrites it when finished.

That one line is what separates **"not seen yet" from "being worked on."** It changes the question you ask when no answer comes: the first means suspect the sync, the second means just wait.

## The bug: head-of-line starvation

The code that capped how many jobs to handle per tick ran **before** the filter that removes already-answered requests.

So if three finished-but-uncleared requests sat at the head of the queue, **new work was never picked up at all.** No error. The watcher kept ticking. The logs looked fine.

The smoke test caught it because the fourth job went unprocessed. The first three all passed — **three jobs would have shipped it.**

It surfaced on the fourth because the cap happened to be three, and that was luck. With a cap of ten it would have surfaced on the eleventh, and **there is no reason to throw eleven jobs at a smoke test.**
