# QA automation

> This is my day job. It also yields the least — because I'm usually already standing in the same place.

- Headline number: 5 written · 4.5 techniques
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/qa/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/qa/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**This is my day job. It is also the shelf that has taught me the least — and that turns out not to be a bad thing.**

First, what "QA automation" is.

When you build a game or an app, someone has to **press everything and check it works.** Press a button, see if the right screen comes up, confirm the value landed. A person doing that by hand is QA. **Getting a machine to do the pressing** is QA automation.

There are five pieces here, each one someone else's automation, opened up.

## My own field, and the smallest harvest — which is not a complaint

Across five pieces, the techniques that actually moved into my work number **4.5**. Fewer than any other shelf.

My first thought was *I must be reading them badly.* That wasn't it. **Hold the same problem long enough and everyone arrives at similar answers.**

Put it this way: when there are only a few routes up a mountain, the person who climbed first and the person who climbed later meet at the same places. At that point the finding is not *nothing to learn* — it is **my route was right.**

## Why the research still pays when nothing transfers

This is the important part of the shelf. Two different kinds of return came out.

**One — a conclusion I held alone became a conclusion held by two.** Some judgements I had made on my own, with **no way to know whether they were right.** Then someone I have never met, at a different company, **had arrived independently at exactly the same answer.** A sample of one became a sample of two. Even with zero techniques transferred, that is worth a lot.

**Two — someone else's principle became a ruler for my own thing.** In one piece the transferable technique count was **zero.** But taking the principle they had set and measuring my code against it, I found **a defence I had built was not wired into any actual run.** Nothing learned, and something to fix.

## "Already there" did not always mean the same thing

At two pieces I read it as one thing: *I already arrived at this.* At four, **two different states** were hiding under that phrase. Having arrived at the same answer and **having written the answer down without ever doing it** are not the same.

And I was caught by the second one — **something I believed I had done turned out to be something I had written down as intending to do.**

## One permission that changed the nature of the evidence

There is a harvest here that isn't a technique.

Checking whether a game's drop rate matches what was advertised used to mean **pulling hundreds of times and doing statistics.** Slow, and the answer comes out as *probably right*.

When access to the underlying data arrived, the same check became **one query, five seconds.** And the answer stopped being *probably* and became **certain.**

→ What I took: **it wasn't a faster tool. The vantage point changed, and that changed the kind of evidence available.**

## In the fifth, I went to judge a detector and got caught by it

The first four were other people's talks and articles. The fifth was **the first time I pulled someone's code and ran it against my own data.**

I went to test whether their detector caught what it claimed. **Run against my data, it flagged a pile of things that were fine.** Not because the tool is bad — because it was **the wrong tool for the place I meant to put it.** Without measuring, it would have come straight in.

## The detailed record starts here

Where other people's test automation gets taken apart: device farms, unattended regression on real hardware, game autoplay tools, agent-driven test platforms.

**It's my day job and it yields the least.** Across five pieces, 4.5 techniques transferred. Not because the teardowns were bad — because enough years under the same constraints tend to land you in the same place already.

## Which changes what this bucket is worth

| Subject | Techniques | What actually stayed |
|---|---|---|
| [Asleep's QA automation](/en/teardowns/qa/asleep-qa/index.md) | **1** of 11 | That under the same constraints **someone else arrived independently at the same decisions** |
| [Toss Nebula](/en/teardowns/qa/toss-nebula/index.md) | **0** | Using their principle as a ruler showed that **my own gateway exists twice** |
| [An autoplay test tool](/en/teardowns/qa/autoplay-test-tool/index.md) | **2** of 4 | Catch being stuck as **a contradiction in the data**, and clear false positives with **an AND over two timers** |
| [A talk on QA infrastructure](/en/teardowns/qa/qa-infrastructure/index.md) | **0** | Not a tool but a case where **the character of the evidence** is decided by access |
| [watermarks-remover](/en/teardowns/qa/watermarks-remover/index.md) | **1.5** of 4 | Measure a detector's false-positive rate **on your own corpus** before adopting it — and on the corpus it will actually run against |

An investigation that yields nothing isn't wasted. Asleep **turned a set of conclusions with a sample size of one into two** — on-prem, fail-closed on live, unattended regression, element-based targeting. Nebula handed over zero techniques and instead surfaced that **the official gateway's defences aren't wired into the path a real run takes.**

## And in both of the early ones, my own verdict got overturned

Asleep took two corrections. I wrote down "silence detection is a new harvest," then deleted it because **it was already in my code**; then tried to close at "zero new," and found that **my excerpt had been too thin** — the section the author calls the core wasn't in it at all.

Nebula lost the only harvest in its first draft. I'd adopted an in-device controller on the strength of a real measurement — `uiautomator dump` at 2,350 ms — and then found **that call appears zero times in my pipeline.** A game client draws the whole screen into one native surface, so there is no accessibility tree to dump.

> The measurement was right and the target was wrong. Before benchmarking anything, check **whether the call actually happens in my run.**

## At four pieces, "already there" split into two meanings

At two I read it as one thing — *"I've already reached the same conclusion."* At four, **two different things turned out to be mixed together inside that.**

**One is genuinely the same place** — ten of Asleep's eleven decisions were that. **The other looked like the same place and was one layer shallower.** The autoplay piece was that. I was also judging when a bot is stuck, and I wasn't wrong, **I had simply never separated the layer that produces candidates from the layer that removes false positives.**

**You cannot tell these two apart without opening the thing**, because both look like *"we already do that."* The moment I split the layers, **the cause of my false positives acquired a name** — *"a normal state where it stopped on purpose."*

## And this bucket holds one harvest that isn't a tool

The infrastructure talk yielded zero techniques and left **one case: verifying gacha probability.** What used to be hundreds of pulls and **a statistical estimate** became **one query in five seconds** once read access existed — and **the character of the evidence changed from estimate to certainty.**

It didn't get faster. **What counts as evidence** changed. It goes straight into [the writing about verdicts](/en/writing/verdicts/index.md), which makes it **the only harvest from this bucket that turns into prose.**

## The fifth was this bucket's first repository, and I went to judge a detector and got caught by it

The first four were all somebody's talk or article. [watermarks-remover](/en/teardowns/qa/watermarks-remover/index.md) is **the first piece here where I read code**, which let me do the one thing only that allows — run someone else's detector **against my own data.**

The result was the most expensive thing this bucket has produced. **A metric built to separate AI writing flagged, on its first outing, something a human wrote — me.** Sentence-length coefficient of variation across 98 long pieces on this site sits at a comfortable median of 0.668; move it to the drafts from the channel where the rule would actually live, and one in six falls under the threshold — **and that one was already published.**

> Measure a false-positive rate **in the wrong place** and the rate itself is a lie. Calibrate on long-form, apply to short-form, and you are worse off than before you measured.

Read as QA this is a familiar failure: **test data that doesn't match the production distribution.** Except this time I was the one who chose the test data. The Nebula piece taught me to ask *"does this call actually happen in my runs"*; this was **the hole one seat over** — the call does happen, but the sample I measured came from somewhere else.
