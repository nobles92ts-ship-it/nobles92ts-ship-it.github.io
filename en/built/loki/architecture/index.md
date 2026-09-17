# Architecture

> The platform swaps and the brain swaps, but the core is one thing — with a human-held line in between.

- Headline number: 1 adapter
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/loki/architecture/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/loki/architecture/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The messenger swaps out and the AI swaps out, and the body in the middle stays one thing. With one line in between that a human holds.**

> **[도판]** The platform is only a handle; everything past the adapter is shared. Adding Discord meant writing exactly one new adapter.
>
> Messages from Slack and Discord pass through an adapter, cross a trust boundary, go through the job queue and sessions to a brain CLI, and execute shell, files and skills on my PC.

## What "swaps out" means

This thing is built so **both ends can change.**

| End | What can change |
|---|---|
| **Front** | Slack, Discord, any other messenger |
| **Back** | Which AI does the answering |

And **the middle is one thing.** So adding Discord meant **writing one connector.** Everything else was reused.

## A connector has four obligations and no more

To attach a new messenger you have to do **four things.**

| Obligation | What |
|---|---|
| **Normalise what comes in** | Every messenger shapes messages differently |
| **Decide permission** | Is this person allowed to ask for this |
| **Hand it to the job runner** | To where the work happens |
| **Return the answer** | To where it came from |

**Four and no more** matters. Long obligation lists make every new messenger painful, and painful means **you never add one.**

## Swapping the AI works unusually

Normally you **get a key from the AI vendor** and paste it in. Then you pay per use.

This is different. **It runs a program already installed and signed in on this machine.**

The program I use every day is already there and already authenticated, so **it just calls that.**

| | The key approach | This one |
|---|---|---|
| Signing in | Issue a separate key | **Use what is already signed in** |
| Billing | Per use | **Inside the monthly fee** |
| Where it works | Anywhere | **Only on that machine** |

The last row is the price. **This approach is tied to my PC.** Since the whole thing is *give my PC a job*, that constraint never bit.

## And this is where it cost something — "a provider closed, suddenly"

One of the AI providers in use **closed its doors to personal accounts.** Not just the free tier — **the paid subscription went too.**

What makes that frightening is **it was not my fault and there was nothing I could have done.** One day it simply stops.

Which taught this:

> **Making it swappable is not for convenience. It is so that the thing survives one side dying.**

Had it been welded to that provider, **the whole thing would have died that day.** Because it swaps, **one connector was replaced and it carried on.**

Structure like that **looks like waste most of the time.** If you never swap, it is machinery you did not need. **It repays everything the one time you need it.**

## The detailed record starts here

## An adapter has four obligations

A platform adapter owes exactly four things — **normalize what came in, decide authorization, hand it to a job, return the answer.**

Past that, the core has no idea whether it's talking to Slack or Discord. Which is why adding Discord meant writing one adapter.

Four is the number that matters. Three and authorization leaks into the core; five and something platform-specific seeps in. **A boundary must be neither wide nor narrow, and its width is set by how many things genuinely differ per platform.**

Adding Discord surfaced one porting bug. The org system was checking user identifiers with **a regex hardcoded to Slack's format**, and it rejected every one of Discord's numeric identifiers. A place where the platform had seeped into a core I believed was platform-neutral.

## The brain swaps too

The CLI that produces responses is swappable. The method is unusual: **it spawns a CLI that is already logged in on this PC.**

So whichever one you pick, **the billing stays flat-rate.** Plugging in API keys would mean the cost model changes every time you switch providers; calling a logged-in CLI means that person's subscription just applies.

Sessions are **filed per provider**, because a session identifier is a receipt from that agent's own store and mixing them is meaningless. Switch back and forth and both conversations survive.

There's one exception: **guest requests, and anything from the owner outside a DM, always go to the default brain.** The permission rules are a file in that CLI's format, and the others can't carry them. If the safety mechanism can't follow, neither should the switch.

## What a dead provider taught

One provider closed off personal accounts — free tier and paid subscription alike.

The symptom was nasty. **Login succeeds, and the first request dies.** So it reads as "I configured it, why doesn't it work."

Filling that gap with a successor CLI meant stepping on three more traps.

- **An argument that looks like the stdin idiom discarded stdin.** Passing a `-p -` shape made it take `-` as the prompt string and ignore standard input. A greeting came back.
- **A dead conversation id wasn't an error.** It warns, self-recovers into a new conversation, and hands back a new id. So what was needed wasn't retry logic but **code that saves the returned id.**
- **Installation put PATH only in the registry.** An already-running worker can't see that. Without a fallback path you get "I installed it and nothing happened."

All three belong to the [silent failure](/en/built/loki/silent-failures/index.md) family. Not one of them throws.
