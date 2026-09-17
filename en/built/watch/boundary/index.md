# Boundary and failure

> A tool handling other people's videos states what leaves the machine. And when something can't be done, it says so.

- Headline number: nothing leaves
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/watch/boundary/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/watch/boundary/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A tool that handles other people's videos, so "what leaves this machine" matters as much as the feature list. Which is why it is written into the documentation.**

## Why write this down

This tool works on **videos other people made.** Which raises an obvious question:

> **If I run this, what leaves my computer?**

Leave that answerable **only by reading the code** and in practice nobody knows. So it is **stated explicitly in the documentation.**

## What leaves and what does not

| | State |
|---|---|
| **The video itself** | **Never uploaded anywhere** |
| Audio | **Only when captions are absent.** And **re-encoded at reduced quality** |
| Platform logins | **None** — no cookies, no posting, no subscribing |
| Keys | **Never mixed between providers** — one provider's key never goes to another's address |
| Keys in records | **Never written** — the leak path is **not built at all** |
| Files left behind | **Nothing outside the working folder.** It is cleaned up afterwards |

## Two rows that matter most

**"It does not log in"** — that is a feature given up. Logging in would allow private videos. It would also create **a path through which things could happen under my account.**

So it takes **only what is public, by public means.**

**"Keys are never written to records"** — practically the most important line.

The common way keys leak is **not hacking but logs.** Debugging something, you say *let me dump the whole state*, and **the key gets dumped with it.** Then that log gets pasted somewhere.

**Not writing it makes that accident structurally impossible.**

## Setup is checked every time, and stays quiet when it passes

Every run **checks first that the required tools are installed.**

And **when they all are, it says nothing** and proceeds.

Small and important. Print *check complete, all normal* every time and **people stop reading that line.** And then **they do not read it on the day something is actually wrong either.**

> **It has to be quiet when things are fine for the alarm to be heard.**

## When it cannot, it says it cannot

One rule in failure handling: **it does not retry repeatedly.**

Because **repeated retries turn a failure into slowness.**

| | What the user sees |
|---|---|
| Fail and say so | **"It didn't work"** — they try something else |
| Quietly retry ten times | **"Why is this taking so long"** — they wait |

And after ten failures **you get the same result, ten times slower.** The waiting is pure loss.

## The long-video warning goes *into the result*

The best design decision on this page.

Past ten minutes, **a warning appears saying the sampling is sparse.** That warning is **written into the answer**, not only into the run log.

The difference is large.

| Where it is written | Result |
|---|---|
| The run log only | **Nobody reads it.** Whoever uses this analysis later **never knows a warning existed** |
| **Inside the answer** | **Anyone reading the analysis sees it** |

An analysis result **walks around on its own.** Days later someone may judge from it alone, or pass it on. At that moment **"this was sampled sparsely" has to travel with it.**

**A caveat is needed at reading time, not at writing time.** Which means it has to live inside the artefact.

## The detailed record starts here

This tool handles videos other people made. That makes "what leaves this machine" as important as the feature list.

So the boundary is written down explicitly, where you can read it without reading the code.

## What leaves, and what doesn't

- **The video itself is never uploaded anywhere.** The only thing that leaves is audio, and only when captions are missing — re-encoded to mono 16 kHz at that.
- **It never logs into any platform account.** No session cookies, no posting, no subscriptions. Public things, fetched the public way.
- **Keys never cross providers.** One provider's key never travels to another's endpoint.
- **Keys are never written to logs, output, or files.** The path by which they could leak simply isn't built.
- **Nothing persists outside the working directory and the config file.** The working directory gets cleaned up at the end.

The list looks long, but **holding one rule makes the rest follow** — send outside only the minimum required. Had the design been "upload the whole video and let a service analyse it," all five lines above would be meaningless.

## Setup is checked every time, and stays quiet when it passes

Every invocation checks that the required tools are installed. When they all are, it **says nothing** and gets on with it.

There's one reason to check up front. **Dying halfway through, without the tool, is the worst outcome.** The video is already downloaded and the frames extracted, and if it stops at transcription, that time and disk are simply gone. Thirty seconds of checking, and not starting, is far cheaper.

And when the check fails it doesn't just error — it **prints the install commands.** If a person has to leave and go searching at that point, that session usually doesn't come back. "What's missing" and "how to get it" have to be on the same screen.

## When it can't, it says it can't

There's one rule in failure handling: **no retry loops.**

- **Login-required videos** — say so and stop. No working around it.
- **Region-locked** — same. No hunting for another route.
- **Download failure** — show the underlying tool's error verbatim. Don't summarise or smooth it.

Handle those three as "that failed, try another way" and the tool changes character. **A tool that only sees what was made accessible** and a tool that gets past access controls are different things, and I only meant to build the first.

The reason errors aren't smoothed is the same. The original message contains *why* it failed; compress it into "could not fetch the video" and **what to do next disappears with it.**

## The long-video warning goes into the result

Past ten minutes a warning fires about sparse sampling. That warning doesn't just go to a log — it's **repeated in the answer.**

A sparsely sampled result and a densely sampled one have different reliability, and both are written with the same confidence. So **attaching how densely it was actually sampled** is the minimum honesty this tool can manage.

Same reason a missing transcript is recorded as "none." It's the thing this site keeps coming back to: **an omission you don't write down doesn't become undone — it becomes invisible.**
