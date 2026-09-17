# "Probably right" is not a verdict

> Answering the same question with "probably right" or with "right" didn't come down to how hard I worked at it.

- Headline number: 6 grades of evidence
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/verdicts/evidence-grades/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/verdicts/evidence-grades/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Whether I answer the same question with "probably right" or with "right" did not come down to *how hard I worked at it*.**

## What decided it

**Where I was allowed to look.**

Say you want to confirm a game's drop rate matches what was advertised.

| Method | Time | The answer you get |
|---|---|---|
| **Pull hundreds of times and count** | Days | **"Probably right"** |
| **Query the configured value** | **5 seconds** | **"Right"** |

The lower row is not just faster. **The *kind* of answer differs.**

The upper stays an **estimate** however long you run it. A million pulls still carries *probably*. The lower is **certain after one look.**

> **Working harder does not turn an estimate into a certainty. The vantage point has to change.**

## So I graded evidence

And then **re-measured my own past verdicts** with that ruler.

Without grades, **every basis carries the same weight.** *The documentation said so* and *I queried it myself* land on the same line.

## The place I got it wrong most was documentation

What the measurement showed.

**Verdicts resting on documentation were overturned most often.**

The reason is the same as elsewhere — **a document is "we will" and code is "we do."** And building drives them apart.

So documentation was **demoted to low-grade evidence.** Better than nothing, and **not enough on its own.**

## And I docked self-reports twice

The lowest grade is **a self-report** — what the maker says about their own thing.

Docked twice means **lowered once, and then lowered again.**

| Why |
|---|
| The maker **has reasons to see their own work favourably** |
| And **things they never measured get written as "presumably"** |

This is different from lying. **It is simply how people are.** Which makes the right prescription **lowering the grade, not questioning the motive.**

## The most important line — "evidence that isn't there looks like evidence unless you count it"

The most valuable part of this piece.

Writing a verdict, you list **the bases you have.** Obviously. There is nothing to write about ones you do not have.

And then:

> **Three bases listed reads as "three whole bases." "There is no fourth" is invisible.**

Especially **when the missing one is the most important.** The others are present, so **it looks sufficient.**

So **"what I tried to confirm and could not"** goes on the page too. Then a reader **knows where the gaps are.**

## What I did not do

There is a gap in this piece as well.

**The grading scale is my own.** I have never compared it against a scale someone else uses. So **the grounds for the scale itself are still weak.**

## The detailed record starts here

There are two ways to answer the same question. *"It's probably right"* and *"it's right."*

I saw in somebody else's talk that the difference between them isn't effort.

## One query beats hundreds of pulls

The job is confirming that a gacha rate matches the design. Without access, that meant **pulling hundreds of times and estimating the rate from the sample.** Once read access existed, it meant **reading the source in five seconds with one query.**

It didn't get faster. **The grade of the evidence changed** — [a sample moved to a direct read](/en/teardowns/qa/qa-infrastructure/index.md), which on this table is a jump of several rows. And the verdict changes with it: one form can only ever reach *probably*, the other settles the question.

And what made that difference wasn't a tool, it was **access.**

## I graded them and held my own verdicts against it

| Grade | What | How far it lets you speak |
|---|---|---|
| 1 | read the source directly | right / wrong |
| 2 | deterministic code checks it — size, count, hash | present / absent |
| 3 | a log anchor | happened / didn't |
| 4 | screen captures | a person has to look |
| 5 | sample statistics | probably |
| 6 | somebody's self-report · a document's prose | **not evidence** |

The table isn't novel. What earned its keep was counting **what grade the evidence I actually used was.**

## The place I got it wrong most was documentation

I summarised an MMO server repository from the README alone. Opening the code showed **two things wrong, pointing in opposite directions** — I claimed a feature that doesn't exist and denied a privilege that does.

**What was wrong was not the document but the grade I handed it.** That file [stated plainly what it was and how far it had been built](/en/teardowns/games/openmmo/index.md). All I did was **seat it in grade 1** — and ungraded, grade 6 takes that seat without resistance.

There was a worse one. Benchmarking an action game, I **remembered** that the reward for a perfect dodge was slow motion, and on the strength of that memory I was about to build a prerequisite. Cross-checking the sources showed the actual reward is a resource gain and **slow motion was confirmed nowhere.**

**Memory isn't on the table at all.**

## I treated a self-report as evidence twice

One agent browser leads with *"first place on agent benchmarks"*, and that number was **posted to their own repository under their own scoring setup.** No third party has reproduced it.

Another framework has a policy of *"we don't change it without evidence"* — and **that evidence lives in a separate repository**, so it can be neither verified nor refuted.

**Both claims may well be true.** They are still grade 6, and **you don't decide an adoption on grade 6.**

## Evidence that isn't there looks like evidence unless you count it

One talk runs 31 minutes, and **with no captions I reconstructed it from slides alone.** [Only half of it was analysable](/en/teardowns/qa/qa-infrastructure/index.md), and the missing half was the answers. What survived is **a list of questions**, and a list of questions is not a finding.

Write only the summary without recording the gap, and later, when that page gets cited for something, **the hole is invisible.** Which is why that piece opens with *"this piece has to start by admitting its evidence is thin."*

## What I didn't do

**Nothing enforces the grades.** Right now I hold to them by hand while writing. My automated pipelines do leave grounds behind for every ruling, but **they never record what grade those grounds are.** Leaving a record and grading it are different jobs.

And ⚠ **there are almost certainly places where I still use grade 5 as if it were grade 1.** This piece records the three I found; it isn't a full audit.

## Verdict

Skip the grading and **you end up making the strongest verdicts on the weakest evidence.** And the reason that's comfortable is obvious — **grade 6 is the easiest to get.** A README takes thirty seconds, somebody else's number can just be copied down, and pulling up my own memory costs nothing at all.

Grade 1 usually requires **being granted access.** Which means the real problem in this category isn't verdict technique but **what I am allowed to open.** The gacha case was exactly that story.
