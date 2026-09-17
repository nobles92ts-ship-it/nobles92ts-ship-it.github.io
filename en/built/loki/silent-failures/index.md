# Silent failures

> Almost every bug this project produced returned success and did nothing.

- Headline number: 0 errors
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/loki/silent-failures/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/loki/silent-failures/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Collecting the bugs this project produced, nearly all of them were the same shape — returning success while doing nothing.**

> **[도판]** Failures that throw are easy. This program's failures returned success and did nothing.
>
> Two paths leave a bug. The ordinary failure throws, leaves a stack trace, and gets noticed. This project's failures return success, hand back an empty result, and leave clean logs, so they go undetected for weeks.

## Two kinds of failure

| Kind | What happens | Fixing it |
|---|---|---|
| **Loud** | A red error appears and it stops | **Easy** — it tells you where |
| **Quiet** | **It says "done" and nothing happened** | **Hard** |

Nearly every bug here was **the second kind.**

## Why that is hard

A loud failure **does not need finding.** The program tells you first.

A quiet one **tells nobody.**

- Error log: **clean**
- Screen: **"complete"**
- Reality: **nothing occurred**

So it surfaces **days later** as *hang on, that never happened.* And by then nobody knows since when.

## The three someone else sent were the same shape

A person using this sent me three problems **with diagnoses and fixes attached.**

**All three were quiet failures.**

Someone working alone finds it hard to see the pattern in their own bugs. **Three of the same shape arriving from outside made it certain it was not coincidence.**

## One thing learned — "read the structure, not the string"

One command had stopped working.

The cause was **reading the reply as a *string*.** Something like *if this word appears, it succeeded.*

But **change the phrasing slightly and that word is absent.** Then a success reads as a failure, or the reverse.

I changed it to **read the structure** — not prose but **data in a fixed shape.**

And having fixed it, **a capability appeared for free.** Reading the structure meant **the other information inside it became usable too.**

→ **Converting a string read into a structure read tends to add something while you are in there.**

## And the one that alarmed me most — "the liveness check could kill it"

This happened while building the watchdog.

I needed code to check whether the worker process **was still alive.** There is a widely used idiom, so I used it.

The principle: **send a signal that does nothing** and if there is a response, it is alive. In the environment it comes from, that really does nothing. **It only asks whether the thing exists.**

**In my environment that operation behaves differently.**

**The code asking whether it was alive could kill it in the asking.**

That is a nasty class of bug. **The act of observing changes the subject.** Which produces *I checked and it was dead* — when **not checking might have left it alive.**

→ What I took: **a widely used idiom can do something different in a different environment.** *Everyone does it this way* is not grounds — **you have to ask in which environment everyone does it.**

## And I gave up on one piece of automatic detection

Written down honestly.

There is one failure mode I **could not find a reliable automatic signal for.** Every candidate signal **also fired in normal operation.**

So rather than ship a detector that cries wolf, **I left that one to a person and wrote down that I had.** **A detector nobody trusts is worse than no detector.**

## And the tests themselves were editing live state

The last thing that surfaced.

Some tests were **touching real state while they ran.** So a test run **changed the thing it was testing.**

Which makes the result unusable — **you cannot tell whether the next run failed because of the code or because the previous test moved something.**

## So the line this project leaves

> **Zero errors does not mean it is clean. It can mean nobody has looked yet.**

## The detailed record starts here

Lining up the bugs collected while bolting features on, **almost all of them had the same shape.**

## Returning success while doing nothing

Someone running a fork sent three issues with diagnoses and patches attached, and all three were exactly this.

**Decimal places** — Slack's history API, given a timestamp with more than six decimals, doesn't error. It returns **`ok: true` and an empty list.** Python's `time.time()` usually gives seven. So reading channel context ran on empty history for weeks. Auditing every call site, this was **the only place** passing a float through — and that one place silently disabled an entire feature.

**Deny beats allow** — the [guest fence](/en/built/loki/permissions/index.md) blanket-denies other drives, so if the work folder lives on one of them, **every allowlisted path dies.** The only message you get is "permission denied," which reads like a broken allowlist rather than a broken fence.

**Aliases that save and never fire** — the name-collision check hardcoded the shipped command names, so plugin commands were invisible to it. Saving succeeds. Calling it does nothing.

## Read the structure, not the string

This one started as a broken command and ended as a new feature.

A human typing `!usage` into the Slack composer worked fine. But when **a session on another machine sent it through the connector**, every command missed. Slack appends an attribution to the end of the message text — on the same line, no newline.

The symptom split two ways. Anchored commands failed to match at all and **leaked through to the model** (which duly replied "there's no such command"), while looser ones matched with **contaminated arguments.**

My first move was to strip that phrase. **Wrong approach — the attribution is translated into the workspace language.** Korean, English, Japanese all arrive differently. Matching on words breaks the moment someone runs it in another locale.

The answer wasn't in the string but in **the structure Slack already handed over.** The attribution isn't mixed into the body; it's a separate trailing block, and the human's own text stays intact next to it. And **a human physically cannot produce that block from the composer** — which means there are no false positives, by construction.

Here's the feature that came out of the fix. A session on another machine posts to Slack **as me**, and the Loki on this PC runs it and replies in the thread. Because it's a human account rather than a bot, no second Slack app is required.

## A liveness check can kill the thing it checks

While building the watchdog, I wrote the worker-alive check as `os.kill(pid, 0)`. On Unix that's the idiom — signal 0 sends nothing and only asks whether the process exists.

**Windows Python implements that as process termination.** Signal 0 included. The liveness check kills the worker.

Replaced with a read-only query. There was one more trap in the same family: a restart once raced the five-minute watchdog and left **three workers** attached. Three sockets on one token means events get split. But the health check reads a single recorded pid, so it **reports everything normal.**

Detection now goes by **process lineage, not count.** Counting can't work here: the launch method legitimately produces a parent and a child, so neither "two is wrong" nor "it must be one" holds.

## I gave up on one piece of automatic detection

I tried twice to automatically detect "this conversation is spinning in place" and wire it into [the nudges](/en/built/loki/commands/index.md). Both attempts failed. They measured lexical novelty.

The reason for rejecting it wasn't a tuning failure — it was **the measurement itself.** The novelty range of a conversation that's genuinely progressing **overlaps** with the range of one restating the same deadlock in new words. No threshold separates them.

The reason is structural. "A new question on the same topic" and "the same deadlock, rephrased" **use the same words.** Tuning a threshold until three examples pass is overfitting, not evidence.

So I went instead to **things that need to understand nothing** — a per-hour request cap, a cost ceiling, an explicit command to end a conversation. The cost figure was already arriving in the response and being thrown away.

## The tests were editing live state

Burned twice by the same class. Each module **binds its state path at import time**, so unless the test setup blocks them one by one, live files get edited.

The actual incident: an adapter test flowed a channel message through, that **wrote to the live state file**, and a warning I had just built silently switched off in production. **Every test passed.**

Now all seventeen state paths get redirected wholesale. And **adding a new state file means adding it to that list** — this is the kind of thing the person who built it forgets, not the next person.
