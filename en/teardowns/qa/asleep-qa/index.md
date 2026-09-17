# Asleep's QA automation

> Ten of the eleven decisions I had already arrived at. The value wasn't transfer — it was independent confirmation.

- Headline number: 1 of 11
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/qa/asleep-qa/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/qa/asleep-qa/index.md
- Source (source, 1 of 8): https://brunch.co.kr/@jiwonleeqa/394
- Source (on simultaneous control): https://brunch.co.kr/@jiwonleeqa/398
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Eight pieces written over a year and a half by a solo QA at another company. I held eleven of their decisions against my own. Ten of them I had already arrived at.**

That sounds like nothing gained. It was the opposite. **The value of this piece is not the one new thing — it is the ten that overlapped.** Why, below.

> **[도판]** What makes this series unusual isn't the techniques, it's the subject. When the subject is hard, tool choice stops being taste and becomes a constraint.
>
> What's under test for a sleep-measurement app isn't a screen transition but an entire night. A microphone collects breathing sounds and uploads every 30 seconds, a server analyses asynchronously every five minutes, results return by callback, and a report only exists once the session ends. Four constraints bite at once.

## What they build is unusually hard to test

The product is **a sleep-measurement app.** It listens to your breathing while you sleep and judges your sleep state.

Here is why that's hard to test.

| An ordinary app | A sleep app |
|---|---|
| Press, see the result | **Result eight hours later** |
| Wrong shows on screen | **Wrong looks fine on screen** |
| Try again immediately | **Trying again costs another night** |

And the data is human breathing, so it **cannot leave the company.** That condition drives the tooling — **they are not picking what's convenient, they are picking from a very short list of what's allowed.**

## What they called the core, I missed on the first read

This is where I went wrong.

There are two ways to use many devices at once. The names are close enough to blur, and **they behave completely differently.**

| | Split the work up | **Press the same thing at once** |
|---|---|---|
| Five devices do | **Five different** tests | **One identical action, simultaneously** |
| Why | Finish sooner | **To eyeball the differences between models** |
| Hardest part | Keeping devices from interfering | **Pressing "the same button" on five devices** |

That last line is the core. When screen sizes differ, **the same button sits in a different place on each device.** Drive by coordinates — *"300 from the left, 500 from the top"* — and it lands on one device and misses on the rest.

The fix is to abandon coordinates. **Find "the button labelled OK" and press that**, and position stops mattering.

## One thing is missing from all eight pieces

Stated plainly: **there is no "so how many defects did it catch."**

The account of building the automation is detailed. **A number for what the automation actually found appears nowhere in eight pieces.**

This gap is common. Building automation is visible and worth showing; **"did it work" is hard to measure and often unflattering**, so it drops out. I try to fill that slot deliberately in my own writing.

## Why the ten overlaps are the real return

Back to the opening.

I hold a set of decisions arrived at over a long time. **Keep the data in-house. Stop on failure, always. Run unattended at night. Target by screen element, not coordinate.**

The problem with those decisions was that **I made them alone, with no way to check them.** The sample was me.

Then someone I've never met, at another company, building a different product, **had landed on the same conclusions independently.** One became two.

Even with only one technique transferred, **that is worth more.** New techniques are optional; *am I going the right way* is a question that never stops needing an answer.

## And writing this piece overturned my verdict twice

The part that stung.

**First.** I wrote that I had learned a device for detecting a silently dropped connection. Then I opened my own code — **it was already there.** I had mistaken **a document saying I should do it** for **having done it.**

**Second.** So I moved to close the piece with *nothing new learned.* But the excerpt I had read was thin, and **I had skipped entirely the section the author called the core.** I reopened it.

The two errors point opposite ways — **one overvalued my own work, one undervalued theirs.** And both only surfaced **on reopening the source.**

## The detailed record starts here

**Exactly one technique transferred.** Pulling eleven design decisions from eighteen months of writing by the sole QA engineer at a sleep-tech company and holding them against mine, **ten were places I had already reached.** The one remaining is this page's harvest — but **the real return of this investigation wasn't that one thing. It was that under the same constraints, someone else independently reached the same decisions.** And getting to that verdict, **my own conclusion was overturned twice.**

## Who built it

**The sole QA engineer at a company making a sleep-measurement app.** Eight posts between January 2025 and August 2026, at very different levels — one on career motivation, one on post-deploy monitoring, one on code standards for large-scale automation, one debugging a memory collapse during a 24-hour run, one on building an on-premise device farm, and a retrospective on their own QA platform.

**It matters that they tried to stay on the cloud first.** A cloud device farm's beta failed during an audio-injection trial, and the vendor's proposed fix was **downgrading to a framework version that had been end-of-life for five years.** They pushed back — that version predates the shift from synchronous to asynchronous architecture — and it eventually worked on the current release. **Even so, the way audio injection works turned out to be wrong for validating this product, and mobile left the cloud.**

**And the author's conclusion is honest.** Having argued a cloud vendor down and won, it ends on **"for most people, cloud is the right answer."** On-premise is a good direction only when a special requirement can't be met in the cloud and can be designed well as hub-and-node. **Writing that declines to generalise its own choice is rare.**

## The core is simultaneous control — not parallel execution

Conflate the two and you misread the whole series. They're **completely different axes**, and the one the author calls the core is the second.

| | Parallel execution | **Simultaneous control** |
|---|---|---|
| What N devices do | different tests each | **the same action, at once** |
| Purpose | throughput, overnight sweeps | compare behaviour across models by eye |
| Hardest part | session collisions, dirty device state | **pressing the same button** |
| Solution | hub scans free nodes and queues | target **the real on-screen element**, not coordinates |

The author defines simultaneous control as **"not a convenience feature but the feature that changes how much verification one QA engineer can carry."** Checking twelve configurations one device at a time means repeating every action once per device; **simultaneous control deletes the repetition — two devices or ten take about the same time.**

**Two conditions had to hold.**

- **Accuracy** — ratio-computed coordinates drift with each model's margins and status-bar height, **missing by over 100px on the same screen.** So targeting moved to finding the actual element
- **Latency** — if one device lags, the whole set feels out of step. So they bypassed the standard framework for a direct device connection, and measured **14 ms for a screen tap and 4–7 ms for a keystroke over wireless**

**And the best-formed number in the whole series happens to sit here.** It states its conditions ("measured over wireless") and separates the two operations.

## What broke — there is no defect-detection data

One gap runs through all eight posts.

> A device farm, a platform, a natural-language verification engine, 900 of their own tests — and **nowhere is there a number for "we caught N defects that manual testing would have missed."**

Everything is evaluated on **whether it runs**, and nothing on **whether it finds.** **That is precisely where automation most commonly fails.**

The rest, on the record. **"Recovers within 45 seconds" can't be verified** — the detection mechanism isn't described, so it's likely **a configured timeout rather than a measured recovery latency.** In which case 45 seconds is a parameter, not an achievement. **"900 of our own tests" is a vanity metric** — no coverage, no defect count, and **since the same person wrote both the platform and its tests, it's a self-referential oracle that replicates its own blind spots.**

**Zero evidence on the most fragile component** also stands out. Unattended natural-language scenario verification is the most brittle part of the platform, and there isn't a line on accuracy, flakiness, or behaviour under ambiguity.

And the memory-collapse post is **half an expansion of a wrong hypothesis.** The three-layer timeout material is useful knowledge but wasn't the cause; the actual fix was one line — **write recording segments straight to disk instead of accumulating them in the heap.** And raising every timeout to 30 hours **switched off the hang detector.** Justified for a 24-hour test, but as a standing default it removes any way to **distinguish a stalled session from a long one.**

## One thing came across

> **[도판]** Few techniques transferring and the investigation being wasted are two different statements. The overlapping ten are this page's real return.
>
> Of eleven design decisions, ten were places I had already reached, and only the one that didn't overlap actually transferred.

The one that came across:

> **Count the devices that failed element lookup and got tapped by coordinate instead — and show that count immediately.**

I have the coordinate fallback. I don't have **the counter.** So a tap that hit its target precisely and **a tap that missed the element and got approximated by coordinates are recorded as the same PASS.**

**There are two kinds of PASS and the report records one.** The fallback path is exactly where the next build breaks quietly, and **without a count you won't see it growing.**

## And I corrected myself twice

**First.** I recorded silent-connection detection as a new harvest. Wrong — opening my own code, **it was already there.** A separate axis tracking screen change, wired to a staged recovery. **I had mistaken a written operating rule for an implemented one**, which is the identical error I made in [Prime Agent](/en/teardowns/harness/prime-agent/index.md).

**Second.** So I tried to close at "zero new adoptions," and **that was wrong too.** The section the author himself calls the core hadn't made it into my initial extract, and **the one adoption above was sitting in it.**

> **A thin extract changes the conclusion wholesale.**

## Verdict

**One technique transferred.** The real value of this investigation was elsewhere.

Under the same constraints — **one QA engineer, real devices, long sessions, unattended regression** — **someone else independently reached the same decisions.** On-premise, fail-closed on live by default, unattended regression, element-based targeting. Those were conclusions I'd arrived at alone, which meant **a sample size of one. Now it's two.**

Few techniques transferring and the investigation being wasted are **two different statements.**
