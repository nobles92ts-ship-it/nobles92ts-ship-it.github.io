# What came out

> The first thing that wasn't an automation defect. And it isn't something to brag about.

- Headline number: 147 / 300
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/android-qa/findings/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/android-qa/findings/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The result of 300 overnight cycles. Nearly everything caught was my own automation's fault — and one thing was not. And that one is not something to brag about.**

## Most of it was my fault, and that is correct

This loop runs **only cases already confirmed to pass.** So the premise is that **a failure is my fault.**

Across 300 cycles that is what happened. **The problems were on my side.**

**Which is the premise working as designed.**

## But one thing the premise could not explain

Across 300 cycles, **the same warning appeared in the logs 147 times — nearly half of them.**

It said: **"a graphics setting is written clearly in the configuration file and is not being applied."**

That is not something my automation produced. **The game raised it itself.**

Tracing it: **that value was never the kind of thing a configuration file can change.** Being present in the file makes it look changeable; it is actually decided elsewhere.

So **the configuration file says it can and it cannot.**

## And this is not a brag

The most important passage here.

*Our automation caught a product defect* reads well. Honestly: **the automation was not clever enough to catch it.**

What happened is **it appeared 147 times, so it caught my eye.** Appearing once, I would have missed it.

| | Actually |
|---|---|
| What the automation did | **It ran a lot** |
| What the automation did **not** do | **It never treated that warning as a criterion** |

My criteria list at the time **had no entry for counting repeated warnings.** So the automation **walked past that warning 147 times**, and I found it while reading logs.

**Write down something you found by luck as skill and the next time it is missed, nobody knows why.**

## So what changed

This, rather than the finding, is the actual result.

One criterion was added: **count warnings that repeat in the logs.**

Now **three appearances is enough — not 147.** It no longer depends on luck.

→ **Turning something caught once by chance into a criterion is what makes it a thing that actually catches.** Otherwise it stays *we got lucky that time.*

## The detailed record starts here

Across 300 cycles, nearly everything caught was a defect in the automation itself. [Given the premise](/en/built/android-qa/loop/index.md), that's correct.

One thing wasn't explained by that premise.

## The first thing that wasn't an automation defect

In **147 of the 300 cycles — nearly half — the same warning appeared in the log.** A graphics option was written plainly in the config file and wasn't being applied. The cause: that value was never the kind of variable a config file can set in the first place.

There's something to be careful about here.

> **This is not confirmed as a product defect.** It may well be intended. That call belongs to the people who built it. Only one thing is certain: **it isn't an automation defect.**

The distinction matters because of the premise above. I had been fixing automation on the assumption that the product passes everything — and this was the first signal that premise couldn't explain. But jumping straight to "I found a product bug" would mean applying a standard of evidence to my automation that I refuse to apply to the product.

## And this isn't a brag

Honestly: **the automation wasn't clever enough to catch this.**

The warning was there the whole time, all 300 times. Nobody was looking at it. What unattended repetition did was not discovery — it was **accumulation.** One run makes it a single log line you scroll past. Three hundred runs make it 49%, and 49% is hard to scroll past.

**Frequency is a kind of evidence people can't count by hand.** Run it ten times by hand and see the same warning in five of them and it stays at "that shows up sometimes." 147 out of 300 is a different kind of fact.

What this loop is genuinely good at isn't finding new things. It's **making already-visible things too large to ignore.**

## So what changed

Since that finding, there's one more thing in the verdict set: **counting repeated warnings in the log.**

It used to look at pass and fail per case, and nothing else. Now the end of a run also emits **a frequency table by warning type** — which warning appeared in what percentage of cycles.

This earns its keep because it **puts in front of a human exactly what the automation can't judge.** A machine can't decide "is this warning a problem." It can decide "this warning appears in 49% of runs," and a person looking at that number can.

The table prints even on an all-PASS run. It's the only window into **what was accumulating behind the green lights.**
