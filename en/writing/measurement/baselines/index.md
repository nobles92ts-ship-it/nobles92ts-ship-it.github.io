# All four times, the numbers were right

> Measurement usually goes wrong somewhere other than the arithmetic. I was wrong four times, the arithmetic was right every time, and what was wrong was what I measured against.

- Headline number: 4 baselines
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/measurement/baselines/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/measurement/baselines/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The arithmetic was right all four times. And all four times the verdict flipped.**

## How correct arithmetic produces a wrong verdict

I did not miscount. **The addition and subtraction were exact.**

Every flip came from **what the number was compared against.**

A number alone says nothing. **"Twelve seconds" is neither good nor bad.** It needs a comparison to mean anything.

And **pick the wrong comparison and however exact the arithmetic, the conclusion is wrong.**

## The ways a comparison goes wrong

Patterns from the four cases:

| How it breaks | Example |
|---|---|
| **No comparison at all** | *Ours is faster* — than what? |
| **The two sides measured different things** | One includes setup time, the other does not |
| **The environment differed while measuring** | One ran with a warm cache, the other cold |
| **The improvement came from elsewhere** | Changed the tool and **changed the hardware at the same time** |

**None of the four involves arithmetic.** And **none of the four is visible from the numbers.**

## The most common one — measuring only your own thing

The recurring theme of this section.

With no control, **you interpret whatever comes out.** And interpretation leans toward **what you already believed.**

> **Measure only your own thing with no control and you confirm what you already believed.**

Not dishonesty. **When a number is ambiguous a person chooses how to read it, and the choice is unconscious.**

## So the prescription

**Deliberately keep a control that receives no treatment.**

Introducing automation, **deliberately run 10% the old way.** That produces **a comparison value from the same period under the same conditions.**

It looks like a loss — 10% does not get the improvement. Without that 10%, **you never find out whether the other 90% genuinely improved.**

## And an estimate is labelled as one

Some values cannot be measured. Then this is written:

| What goes down |
|---|
| The estimate |
| **The error range** |
| **The label "estimate"** |
| **What would make it a measurement** |

The last line matters. Without it the value **stays an estimate forever**, and given time **the label falls off and it reads as fact.**

## The line this piece leaves

> **The arithmetic being exact and the verdict being right are different things. All four times, the arithmetic was exact.**

## The detailed record starts here

Measurement usually goes wrong somewhere other than the arithmetic.

Four of my verdicts reversed over the last few months, and **all four times the arithmetic was right.** The scripts counted correctly and the logs recorded correctly. What was wrong was **what I measured against.**

## Without a control, measurement confirms what you already believe

I picked up a criterion from someone else's rule set — *match the form to the failure* — and ran it over my own rule documents. Prohibitions outnumbered recipes by **12.6 to 28.6 times**, with recipes at effectively 0%. I wrote *"my corpus is abnormal"* and adopted it as the top item.

Their own rule already said what to do here.

> Always include a no-guidance control. If the control doesn't exhibit the failure, there is nothing to fix — stop, and don't author the guidance.

My control was the reference implementation. I ran the same script over it. **The reference implementation as a whole came out at 26.6×, and the document making the argument sat at 18.5×.** Mine were less skewed.

The numbers were right from the start. **There was no baseline.** And with no baseline, I reached a conclusion anyway.

## Ask whether there is anything to improve before asking how much

Evaluating a context-compression layer, I set out to measure what adopting it would gain. First I measured my own side. Cache reuse **92.5–96.3%**, uncached input **1.8–2.0 tokens per call.**

There was nothing left for compression to compress. The tool wasn't bad — **there was no problem on my side.**

Ask *"how much does this improve things"* first and it always looks like an improvement. The order has to flip — **is there anything to improve.**

## Totals hide the cause

One run of 126 cases took 937 seconds. I believed shader compilation was the bottleneck.

Instrumenting each segment gave a different picture.

| Segment | Time | Share |
|---|---|---|
| Bridge round trips | 302s | 32.3% |
| └ one tree dump inside that | 186s | **19.8%** |

It fetches the whole tree every time it makes a call. Shaders weren't even near the top.

**A total conceals the cause.** Until I measured segment by segment my guess had nothing behind it — and I didn't know it had nothing behind it.

## Counting inventory is not measuring

Holding my own operation against someone else's four-rung ladder, I wrote **equivalent** into four cells. The baseline behind all four was **whether it was installed**.

The arithmetic was right here too. Measured with an instrument that asks "is this installed", those four cells genuinely are equivalent, and I applied that instrument correctly. What was wrong was **the instrument** — I judged "it runs" with a tool that measures "it exists".

Pressing the last cell for real returned [no items, no files, no observer hooks](/en/teardowns/memory/second-brain-4steps/index.md). **Possession is not operation.** And unless the instrument changes, the other three cells stay exactly as they are — never pressed, still written down as equivalent. **A value read off the wrong instrument is wrong in the same direction whether you read four cells or forty.**

## Which is why unmeasured numbers get a label

That is how the convention came about. Anything I can't measure is published as **an estimate with an interval and an `[estimated]` label**, and to promote it to measured, **10% is held back untouched.**

One recent adoption sits in exactly that state. Declaring a quality bar in one word inside a prompt — the output does look better, but whether that came from **the word or from the other conditions was never separated.** With a sample of one there is no interval to give.

So it is adopted, labelled `[estimated]`, and the promotion path is written next to it — build **10% of future reports without that sentence** and compare.

## What I didn't do

**I have never once run the holdout.** Writing the method down and having measured it are different things. One of the five sections above is still `[estimated]`, and it went into this piece in that state.

And **I never finished applying the control rule to myself.** One of four "equivalent" cells has been pressed. The other three are still ledger entries as I write this.

## Verdict

The four misjudgements share something. **In every one, my own numbers came out well, and there was nothing to compare them against.**

A control, the baseline before it, segment decomposition, and pressing the button. Four names for one job — **making a place where an answer different from the one I already believe can appear.** Without that place, measurement becomes a confirmation step, and confirmation steps have never once been wrong.
