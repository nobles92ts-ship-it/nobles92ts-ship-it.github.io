# Unattended regression is built by recovery, not speed

> A real device ran 300 cycles overnight with nobody watching. What made it finish was not fast code but knowing how to cut things off.

- Headline number: one night, 300 cycles held
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/agents/unattended-regression/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/agents/unattended-regression/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A real device ran 300 cycles overnight with nobody watching. What made it finish was not fast code but *knowing how to cut things off*.**

## What "unattended" means

Set it going at night and the result has to be there in the morning.

Most automation **cannot run all night.** It stops somewhere. And once stopped it **stands there until morning.**

| | Result |
|---|---|
| Stops at 2am | **Six hours wasted.** Discovered in the morning |
| Runs to the end, leaving a list of failures | **Read the list in the morning** |

What makes that difference is the subject of this piece.

## The answer — not speed, but cutting off

The intuitive answer is **make it faster.** It is not.

> **What decides it is how far a failure spreads.**

| When a failure | Result |
|---|---|
| **Spreads to everything** | The night ends there |
| **Stays inside that one thing** | **The rest keeps running** |

And the same verdict came out of [building the loop itself](/en/built/android-qa/loop/index.md) — what produced a full run there was not throughput but the structure that pens a failure in. **Double the performance and the night still ends in the same place if the stopping point is unchanged.**

## "Waiting is worse than failing"

The most important line.

A failure **is recorded and can be read in the morning.** Waiting **leaves nothing.**

Stand six hours on *awaiting response* and what you see in the morning is **"still in progress."** Neither failed nor succeeded. **There is no way to know what happened that night.**

So **every waiting point carries "wait only this long."** Past it, **record a failure and move on.**

**A recorded failure is information; waiting leaves nothing at all.**

## The subject of a failure is fixed in advance

Another device.

The case list being run is **one already confirmed to pass in full.** Which narrows the suspects to one the moment anything fails — the product cleared yesterday, so what is left is my side.

[The loop write-up calls that a free oracle](/en/built/android-qa/loop/index.md), because nothing had to be built to make the judgement: **choosing what to run produced the judgement as a side effect.**

So opening the list in the morning does not involve **working through "is this the product or me" case by case.**

## "A wrong tap" and "a wrong verdict" cost different amounts

Hence splitting the evidence.

| | When wrong | By what |
|---|---|---|
| **Tapping** | **Tap again** — cheap | Looking at the screen |
| **Judging** | **A wrong result enters the record** — expensive | **Reading the logs** |

Different costs mean **they must not share evidence.** Tapping can be approximate; judging must be exact.

## And "one battery point" was a pass condition

Small and interesting.

Running all night requires **the device to still be alive in the morning.** Measuring the overnight battery drain gave **one percentage point.**

That became **one of the pass conditions for unattended operation.** However well it runs, **if the battery dies before morning it is not unattended.**

## What unattended repetition produces is accumulation, not discovery

The last insight.

Something that never appeared in one run **appeared across 300.** That is **not the automation being clever.**

**Rare events require many runs to appear once.** What the automation does is **run many times**, not find things well.

Worth separating because **"our automation caught a bug" and "we ran it a lot and it surfaced" lead to different next actions.** The first means make the automation smarter; the second means **run it more.**

## What I could not do — and why the list matters

The detailed record below lists **eight things I could not do.** One line from it:

> **Half of that list is "I did not measure it," not "I measured it and it was fine."**

Because the most dangerous sentence in unattended regression is **"nothing has gone wrong so far."**

Nothing going wrong could mean **it is fine** or **nobody is looking.** And **unless the unmeasured places are named and recorded, that silence accumulates as if it were evidence.**

One in particular: **visual bugs are still invisible.** That is the price of putting the verdict in the logs. **A broken screen still passes if the logs look normal.** That slot belongs to a person, and **the larger the unattended surface grows, the blurrier that person's portion becomes.**

> **[도판]** One device, one build, one night. The variance across multiple nights and multiple devices was never measured.
>
> An anatomy of one night. 300 cycles ran unattended across 9 hours 57 minutes and cycle wall-clock ranged from a minimum of 98.8 seconds through a median of 111.5 to a maximum of 161.8. The finish conditions were zero failures, zero crashes, all 26 verification points holding across every cycle, and a battery drop from 96 to 95 percent. The maximum is 1.45 times the median, and what produced the finish was not speed but the swing failing to spread into the next cycle.

## The detailed record starts here

What made the overnight automation work was not fast code but **knowing how to cut things off**. One real device on a USB cable ran **300 cycles across 9 hours 57 minutes** unattended, with zero failures and zero crashes, and three parts made that finish possible — a recovery ladder that keeps a failure local, a cutoff so nothing waits forever, and putting the verdict in the logs rather than in pixels. Cycle wall-clock had a median of 111.5s but swung as high as 161.8s (**1.45× the median**), and it still finished, not because it was fast but because **the swing did not spread sideways**. The battery went from 96% to 95%, a net drop of one point — if drain outruns charging, no amount of correct code makes an overnight run possible, so that figure is not a performance metric but a **pass condition**. And what the unattended run actually produced was not a discovery. In **147 of 300 cycles (49%)** the same warning appeared in the log; it had been there the whole time and nobody had ever counted it. **Frequency is a kind of evidence a human cannot produce.** Finally, how long this asset survives came down to what the cases depend on — 126 written for the real device came back to life on a PC build once only the transport layer was swapped, and that was not good design but the fact that the device vocabulary lived in **exactly one bottom layer**. Half of that was luck.

## Questions this answers

- [How long can a real device run unattended](#ten-unattended-hours-were-built-by-recovery-not-by-speed)
- [Can an Android device run overnight on a cable with nobody watching](#one-battery-point-is-the-pass-condition-for-running-unattended)
- [A game client exposes no UI tree — how do you drive it](#a-wrong-tap-and-a-wrong-verdict-cost-different-amounts--so-i-split-the-evidence)
- [What does it mean to put the verdict in the logs](#a-wrong-tap-and-a-wrong-verdict-cost-different-amounts--so-i-split-the-evidence)
- [What happens if an overnight regression stalls halfway](#waiting-is-worse-than-failing-when-nobody-is-watching)
- [How do I tell whether a FAIL is the product or my automation](#grade-against-an-answer-key-and-every-failure-gets-a-subject)
- [What can you actually find by running all night](#what-unattended-repetition-produces-is-accumulation-not-discovery)
- [Can device test cases be reused on a PC build](#the-device-dependency-lived-in-exactly-one-bottom-layer)
- [What does unattended regression fail to see](#what-i-could-not-do)

How to locate a bottleneck when a run is slow is in [all four times the numbers were right](/en/writing/measurement/baselines/index.md), and where a result goes when it is neither PASS nor FAIL is in [the threshold piece](/en/writing/verdicts/threshold/index.md). This piece covers only what sits between them — **how a loop survives when nobody is looking.**



## Ten unattended hours were built by recovery, not by speed

One real device on a USB cable ran **300 cycles across 9 hours 57 minutes** with nobody present. Zero failures, zero crashes, and all 26 verification points per cycle held across every one of the 300. These 300 cycles are **a smoke run taken after convergence** — the loop that fixed the automation was a separate thing, and this night was run only after that loop reached two consecutive clean passes.

The number worth looking at here is not the total duration but **the spread**. Cycle wall-clock had a median of 111.5s, a minimum of 98.8s and a maximum of 161.8s. **The maximum is 1.45× the median.** In a ten-hour unattended run some cycles took nearly half again as long as others, and with a real device that swing cannot be removed — the hardware warms up, the server slows for a moment, a load spikes once.

Read that spread as something to optimise and you would go work on performance: get the cycle from 111s down to 90s. But **what produced the finish was not that work — it was the recovery ladder that kept the spread from reaching the next cycle.** One 161.8s cycle happened and the next one started again at 111s. Had a stretched cycle contaminated the state the following one inherited, that contamination would have compounded across 300 rounds and stopped somewhere.

The arithmetic makes it plainer. Cut the cycle by 20% and a ten-hour night becomes eight. Not a bad improvement. But if the structure is one where **a single failure eats the next five cycles**, three such incidents in a night burn fifteen cycles and at some point the loop simply cannot come back. The first improvement makes the night **shorter**; the second makes the night **end**. Unattended work needs the second, and doing only the first gives you a fast loop that is dead by morning.

One clarification. These 300 cycles are **a run taken after the automation was already fixed.** The fixing is not inside this number, and that loop is covered further down. So "zero failures" here does not mean the automation was robust to begin with — it means this is a measurement taken after it became robust.

**The lesson that cost something here is that the metric for unattended work is not the average.** What matters is not "how many seconds is a cycle" but **"how many cycles does one failure eat."** Those are different jobs, and taking them in the wrong order produces a loop that is quick and never finishes.

## One battery point is the pass condition for running unattended

After 9 hours 57 minutes unattended on a USB cable, the battery had gone from **96% to 95%** — a net drop of one point. The measurement resolution is a single whole percent, so the figure itself is coarse, but this one line decides whether an overnight run is possible at all, before any software metric gets a say.

The reason is simple. On a cable, charging and drain happen at once, and **if drain outruns charging the overnight run is impossible**, full stop. However correct the code and however dense the recovery ladder, a device that is off in the morning makes that night worth zero. So this is not a performance metric but a **pass condition** — not a number that is nice to beat, but one that renders everything else moot when missed.

No document told me to measure this. Automation writing measures pass rates and durations, while **the first failure mode of an overnight run is "the device was off."** That is a power-budget problem, not a code defect, and it appears nowhere in the software metrics. The report says "run aborted" and nothing more; why it aborted requires picking the hardware up.

The figure's coarseness has to be stated too. With one whole percent of resolution, 96 → 95 means the **true drop could be 0.01 points or 1.99**. So you cannot step from here to "then it could run for days" — at 1.99 the balance flips somewhere around twenty hours. All this piece can claim is that **one ten-hour night fit inside the power budget.**

**The lesson that cost something here is that this value cannot be recovered afterwards.** Unless the battery is recorded at **both** the start and the end, the next morning it is gone for good — no amount of log-digging recovers last night's 11pm battery level. That is why an unattended run needs its own list of "things to capture before starting", and that list is not code but **preparation for the run itself.**

## A wrong tap and a wrong verdict cost different amounts — so I split the evidence

This screen offers nothing to grab. The client paints the whole thing onto one native surface, so pulling an accessibility tree gives back **nothing usable: no button names, no text, no coordinates**. So [the only driving path is screenshot → vision → coordinate tap](/en/built/android-qa/driving/index.md), and since that path's accuracy cannot be trusted, it is built to **look again whenever a tap fails to change the screen**.

The problem appears when the same tool is used for the verdict too. That is what I did first, and it was the single most wrong call in the project. **A wrong tap and a wrong verdict cost different amounts.** A wrong tap recovers — the screen fails to change, so it looks again. The cost is one retry, absorbed inside that cycle. A wrong verdict **becomes the result.** There is no point to roll back to, and the number is already in the report you read in the morning. Worse, the error is biased in one direction — vision looking at an ambiguous screen tends to lean **toward pass**, so one more green light quietly appears.

With a human present this difference never surfaces, because when something is ambiguous a person looks at the screen and decides. **Unattended, that person does not exist.** Which turns "where does the verdict live" from an accuracy improvement into the question of **whether unattended operation is possible at all.**

> **[도판]** Drive by eye, judge by log. Without that split, long unattended runs do not hold.
>
> A comparison of what happens after a wrong tap versus after a wrong verdict. A wrong tap leaves the screen unchanged, the system looks again, and it recovers, so the cost is one retry. A wrong verdict becomes the result, lands in the report, and there is no point to roll back to. That is why the evidence priority puts received RPC and state transitions above the screen.

The evidence priority was fixed as **«received RPC > state transition > screen»**. The first two were available purely because my initial assertion was wrong. I had written down that "logs cannot tell me the internal state", when **the only closed channel was standard output.** The file the engine drops inside the device held every state transition and every RPC exchange, and opening that file once was the cheapest improvement this project ever got.

The same ordering was needed when evaluating other people's techniques. A device farm's screen dump measured at 2,350ms looked worth harvesting, until [a full code sweep found zero calls to it in my pipeline](/en/teardowns/qa/toss-nebula/index.md). With no accessibility tree on this screen there was nothing for a 10× speedup to act on. And that fact was already written in my own project documentation — reading someone else's benchmark took longer than opening one page of my own.

The driving side has its own cost. Tapping by coordinate means **a precise hit and a rough one are recorded as the same pass.** The screen changed, so the loop moves on and a green light lands in the report. I currently have no counter separating the two, so I could not tell you whether fallback taps are increasing. That is not something moving the verdict to logs solved — it is **a problem still sitting on the driving side.**

## Waiting is worse than failing when nobody is watching

The most expensive state in an unattended run is not failure. It is **stopping and waiting.** A failed case leaves a record and the loop moves on, so the rest of the night survives. A waiting loop does not advance a single step until morning, and ten hours produce nothing. The same ten hours, and one yields something partial while the other yields nothing at all.

**Symptomless stalls** were the hardest part. No exception is raised, no verdict is wrong, and the loop simply stands still. Anything that counts errors cannot see this — there is nothing to count in the first place, and making the counter more sophisticated changes nothing. So [detection was hung on whether the screen changes rather than on failure counts](/en/built/android-qa/loop/index.md), and when nothing changes for a while, recovery is attempted in stages and finally **cut off**. The moment it is cut, the state converts from "waiting" to "failing" — and failing is a state the loop knows how to handle.

Building this made one thing clear. **A recovery ladder and a cutoff have to exist together.** Recovery without a cutoff turns the recovery attempts themselves into a new infinite wait; a cutoff without recovery ends the night over one flickering frame. That is why the stages are split three ways — try the cheap things first, and if none of them takes, abandon that cycle and move on.

> **[도판]** Reducing failures and eliminating waits pull in opposite directions. Raise the timeout and failures fall while waits rise.
>
> A comparison of the three states an unattended run can be in. A failure increments the error counter, leaves a log, and moves to the next case. A wait sits with the counter at zero, doing nothing until morning. A cutoff is detected by the screen-change axis, tries staged recovery, and severs. Only the middle state has an error counter of zero, which is why counting errors never catches it.

A counterexample turned up in someone else's retrospective. [Every timeout was raised to 30 hours in order to run a 24-hour test](/en/teardowns/qa/asleep-qa/index.md), which is **switching the stall detector off.** Justified for that one test, but as a standing default it removes any means of telling "a stalled session" from "a long session".

The same shape exists outside device runs. **This is a different system** — in my own working harness, [when a companion app is off while its permission hook stays live](/en/teardowns/harness/clawd-on-desk/index.md), a "tool use was rejected" appears when I rejected nothing. There is no permission hook in a device run, but the character is identical: **the symptom is quiet, so it can waste an entire unattended run.**

**The lesson that cost something here is that the detection axis has to be separated.** "Reduce failures" and "eliminate waits" pull in opposite directions; raising the timeout lowers failures and raises waits, and unattended that trade is a loss. And a symptomless stall has zero errors, so **an error-counting axis will never catch it.** How expensive a run that exits 0 having done nothing really is, is covered in [the scariest thing in unattended regression](/en/writing/agents/silent-success/index.md).

## Grade against an answer key and every failure gets a subject

The subject of this section is not the overnight 300 cycles but **the loop before it, which repeatedly ran a 126-case sheet and fixed the automation.** The two loops are different.

That loop had an unusual design. The build under test was run against **a case set already confirmed to pass in full.** That establishes a premise — **if the product passes everything, every FAIL the automation produces is the automation's own defect.** The single hardest question in building this kind of tool is whether a given failure belongs to the product or to me, and [grading against a key you already know removes that question entirely](/en/built/android-qa/loop/index.md).

Why that question is expensive becomes obvious once you have paid it. Suspect the product and you have to reproduce across builds; suspect yourself and you have to take the script apart. **Not knowing which means doing both**, and usually it means doing both and finishing neither. Making the answer key known in advance deletes the fork — every FAIL has "me" as its subject from the start.

It is not free, of course. In this arrangement **product defects cannot be found.** Full passing is the premise, so anything newly wrong on the product side is out of view by definition, and the only output of this loop is "how much sturdier the automation got". So this is not regression testing but **the automation's own exam**, and mixing the two purposes into one run makes the subject of a FAIL blurry again.

The cycle protocol was fixed too: run → diagnose → fix → write it in the ledger → run again. **Re-running without diagnosing is forbidden.** Without that one line, "let's just run it once more" becomes the thing your hand reaches for, and then a case that passes intermittently gets counted in the pass rate without ever being touched. The number improves and the automation does not.

The stop condition was written before starting — **full machine-verdict pass, zero blocked, twice in a row.** The overnight 300 cycles are a run taken **after** this loop converged, which is why the failures are zero. Read the two numbers as belonging to the same loop and they contradict.

**The lesson that cost something here is that the stop condition has to be written before starting.** Without it there is no ending — there is always a bit more to fix, so with no criterion it continues forever as "not perfect yet". **Twice in a row** was added for the same reason. A single full pass and a stable loop look identical, and **repetition is the only thing that separates them.**

## What unattended repetition produces is accumulation, not discovery

The one thing from that night that was **not** an automation defect was not found because the automation was clever. **The signal had been there all along; repetition simply grew it to a size that could not be ignored.**

[In 147 of one night's 300 cycles, the same warning sat in the log](/en/built/android-qa/findings/index.md) — a render setting specified plainly in a file yet not actually taking effect. It is not a new warning. It was there all 300 times, and in any single cycle it is one line that the eye slides past. Only once it took the shape of **147/300** did it become impossible to ignore.

This is what unattended repetition actually produces. **The automation did not see something it previously could not.** The verdict logic did not and still does not know how to look at this warning. The only thing that changed is that the same signal was collected 300 times, and collecting is the part a human cannot do — running it by hand 300 times means sitting there for ten hours, and sitting there means not reading 300 logs.

What matters here is that the **sample**, not the ratio, does the work. Run it ten times by hand and see it five times and the ratio is identically half. But that stays "happens sometimes" and calls for no action. The same half, as 147/300, becomes **something you can file a bug report from.** Identical ratio, and only one of them prompts behaviour; what made the difference was not insight but repeat count.

> **[도판]** Frequency is a kind of evidence a human cannot produce. Ten runs and five sightings is an impression, not data.
>
> A comparison of frequency accumulation. Running by hand ten times and seeing it five is dismissed as happening sometimes, but 147 out of 300 is a different kind of fact. Both ratios are nearly half; the sample size differs by thirty times. Frequency is a kind of evidence a human cannot produce.

After this, one verdict item was added. **Every run now emits a frequency table by warning type.** The important part is that this table **emits on fully passing runs too.** It is the only window into what was piling up behind an all-green run, and unless it is decoupled from pass/fail nobody looks at it on the nights that pass. Opening logs only on nights that failed is a natural habit, but **this kind of signal accumulates precisely on the nights that succeed.**

**The lesson that cost something here surfaced only after the frequency table existed.** What became countable was the frequency; **the starting point is still uncountable** — nobody knows when this signal began. Whether it was in the first night's logs, or in the build before, there is no way to check. Which is why stopping one step short mattered here: this is not a confirmed product defect, only **"not an automation defect."**

## The device dependency lived in exactly one bottom layer

**The number in this section comes from a run of the same case set on a PC build.** 126 cases written for the real device had to move to another platform, and rather than rewriting them [only the transport layer was swapped](/en/built/android-qa/index.md) — a file bridge was slotted into the place where the harness expected device commands, leaving the command surface untouched. The result was a full 126-case run on the PC build finishing in **937 seconds**.

It worked not because the design was good but **because the cases were never interested in the device.** All a case knows is «tap here, wait, check that this appeared», and nothing in that sentence mentions Android. The word "device" existed in exactly one bottom passage, and changing only that brought all 126 above it across untouched.

But this result must not be read as "portable design". Count what actually lives in that layer and the answer appears — what is there is **one channel that sends and receives device commands**, and it was concentrated in one layer because there was never another option. With no way to grab the screen, driving narrowed to a single coordinate tap, and a narrow surface is easy to swap. This is **portability produced by constraint**, not portability I designed.

The comparison makes it clear. Had this been an app with a proper accessibility tree, the cases would obviously have used it — "tap the button named Confirm" beats "tap (620, 880)" in every respect. And at that moment each case takes on that platform's vocabulary, and porting becomes **not a one-layer swap but 126 rewrites**. The reason that did not happen here is not restraint on my part but that **there was no vocabulary available in the first place.**

**The lesson that cost something here is that this success cannot be used as grounds.** The device vocabulary living in one layer was half luck, and **there is no reason to expect the same luck on the next platform.** What this port does offer is not a design principle but **one checklist item**: open the case bodies and count how many platform-specific words are in them, and you get a rough read on how much of that set survives a move. In this set the count was zero.

## What I could not do

- **Per-step timings cannot be cited as performance figures.** [The loop page records why](/en/built/android-qa/loop/index.md) — in short, those numbers carry product time and my own waits together, undivided. Separating them needs its own instrumentation, which I have not added. So no figure in this piece can be read as "the product takes N seconds".
- **The continuous-run limit of the battery was never measured.** A one-point drop is the same size as the measurement resolution, so the true value could be 0.01 or 1.99 points. A single step cannot support a multiplier, so "could run for days" does not appear in this piece. There is a promotion path — **record the battery in mAh rather than percent and the next night measures it.**
- **I am not counting the coordinate-fallback rate.** I learned this gap [from someone else's device farm putting that count on screen](/en/teardowns/qa/asleep-qa/index.md) — my report has no such column. Without it, **a green light getting worse still reads as a green light.** For unattended regression that is the worst kind of missing gauge.
- **I have never measured how much the automation disturbs its subject.** I have seen work that publishes its own observer overhead alongside its numbers; I have no such value at all. So I also do not know how much of this piece's cycle distribution is the automation's own weight.
- **Visual bugs are still invisible.** That is the price of putting the verdict in the logs. A broken texture or a missing effect still passes as long as the state transitions and RPC look right. That part belongs to a human, and the larger the unattended surface grows, the blurrier that human's remit becomes.
- **Thresholds were never re-measured.** A few frame and load thresholds I saw in someone else's talk were tagged by the source itself as needing re-measurement, so they are not cited here — and I have not measured them on my side either.
- **The sample is one night.** 300 cycles is the distribution of one device, one build, one night. Variance across nights and devices was never measured, so I cannot say whether "max is 1.45× median" is a property of this night or of this setup.
- **Half of this list is "not measured, so unknown" — not "measured and fine."** The most dangerous sentence in unattended regression is **"nothing has gone wrong so far"**, and unless the unmeasured spots are named and left on the page, that sentence accumulates as if it were evidence.
