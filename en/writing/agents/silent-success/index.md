# Agents are quiet when they fail

> Running one unattended, the frightening thing isn't a wrong answer. A wrong answer is visible when you read it. The frightening thing is exit code 0.

- Headline number: 88.3 minutes lost
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/agents/silent-success/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/agents/silent-success/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Give an AI a job and failure arrives *quietly*. The exit code is 0 and the screen looks normal.**

## Two kinds of failure

| Kind | What happens | Finding it |
|---|---|---|
| **Loud** | An error appears and it stops | **Easy** |
| **Quiet** | **It says "complete" and nothing happened** | **Hard** |

AI automation fails **mostly the second way.**

## Why

An AI **does not stop when blocked — it finds another route.** That is its strength and simultaneously the problem.

Cannot find a file: **hand-written code raises an error and stops.** An AI **finds "a similar file" and proceeds with that**, or **does nothing and says "complete."**

**Neither raises an error.** And **both are wrong results.**

## So what catches it

The subject of the piece. You need **machinery that does not believe the claim of success.**

| What to look at | Why |
|---|---|
| **The artefact, not the claim** | Did a file actually appear, did a value actually change |
| **Separate "0 findings" from "did not check"** | Both display as zero |
| **Count repeated warnings** | Missed once, **147 times gets caught** |
| **Flag runs that changed *nothing*** | Could be normal, could be broken — they must be distinguishable |

The first row is the important one. **Look at traces, not words.**

In practice: **tell it to create a file, then look for the file myself.** What it said in reply is not read. **Only the trace of the action.**

## And "zero errors" is not read as good news

> **Zero errors does not mean it is clean. It can mean nobody has looked yet.**

Especially **when a newly built checker reports zero.** Zero because it is good, or zero because it looked at nothing — indistinguishable.

So **I deliberately introduce something wrong and check that it gets caught.** If it does not, **that checker has not earned the right to report zero.**

## But there is the other side too

Fear quiet failure enough and you want **to make it ask a person every time.**

At which point **it is not automation.** And **asking too often means people approve without reading**, which is the same as never asking.

So stopping is **restricted to things that cannot be undone.** Everything else **is judged, recorded and continued.**

## The detailed record starts here

Running one unattended, the frightening thing isn't a wrong answer. A wrong answer is visible when you read it.

The frightening thing is **exit code 0**.

## How I lost 88.3 minutes

I asked for 83 rows in one shot. The model spent **exactly all of its output ceiling** on thinking. The retry turn burned it the same way.

And then it exited cleanly. No exception, no empty-file warning. The pipeline moved to the next stage. **A measured 88.3 minutes gone.**

The failure didn't arrive as an exception. It arrived as **an empty success.** That is when chunking and gates got added to this pipeline.

## Use a reviewer as a gate and that slot is empty

Much later, reading *"don't trust an agent's success report"* in someone else's rule set, I looked again at two sibling pipelines.

The [game QA server](/en/built/android-qa/index.md) and the [game studio](/en/built/moon-studio/index.md) were gating every stage transition on **another agent's review verdict.** A search for any point that deterministically checks the artifact exists, or that its size is right, returned **zero.**

The same accident there plays out like this.

| Stage | What happens |
|---|---|
| Design | the artifact gets truncated. **Exit code 0** |
| Write | it takes truncated input as if it were whole |
| Review | it passes, **never knowing the original was cut** |

If the reviewer can't see the original, **the review is a rubber stamp.** And here the reviewer has no way to see the original — it believes what it was handed is all there was.

## A gate should look at facts, not judgements

I added handoff gates to both. They look at three things. **Is the size above the floor. Does the reference count match. Are there truncation marks.**

Not *"does this look right"* but *"does this file exist."* Facts rather than judgement, so no second model is needed.

All ten failure cases caught, all twelve healthy cases passed. Zero false positives.

**Where you have to ask a model and where code has to check are different places.** The first pipeline paid to learn that line, and **the lesson never travelled to its siblings.** What one repository learns does not cross into the one beside it on its own.

## And yet stopping has a cost too

There is a failure on the other side. Ask a human whenever anything is ambiguous and the agent is safe, and it buys nothing.

> A wrong ruling is rework a person can see and undo. But a session left standing on a question spends that person's entire day and buys nothing.

So it **rules, and leaves a record.** It decides at the ambiguous point instead of stopping, then writes it down as three fields: `decision — why — cost if wrong`. And **when the work finishes, all those lines get collected into one section of the report.**

The point isn't the recording, it's the **collecting.** Rulings were already being left everywhere — in intermediate result files, in review documents, in comments. But scattered rulings never reach a person. *"Leave a record of your rulings"* isn't the rule that earns its keep; **"before you delete anything, gather them into one section"** is.

## What I still don't hand over

The boundary is drawn on **whether it can be undone.** Not on what is possible.

| Item | Automatic | After approval |
|---|---|---|
| Bug reports | extract, draft, prepare attachments | the actual filing |
| Public posts | write it, run the publish check | posting |
| Repository push | staging, security scan, commit prep | push, release |
| Refresh runs | detect source changes, summarise them | running the refresh chain |

All four share a shape. **Preparation and detection are automatic, then a notification, then approval, then it resumes from where it stopped.** Without approval nothing executes.

**When it's ambiguous or something fails, the default is not to act.** That one sentence matters more than the table above it — it decides which way to go in a situation the table doesn't cover.

## What I didn't do

**The gates only look at whether the artifact exists and what shape it is.** Whether the contents are correct is still checked by a person or another model. They catch a truncated file; **they cannot catch a plausibly wrong one.**

And **I am not counting how often the approval gates actually fire.** If they never fire, the boundary is drawn in the wrong place; if they fire every time, automating was pointless. I am operating without knowing which.

## Verdict

The hard part of running agents unattended was never making them smarter. It was **making failure look like failure.**

A failure that exited with code 0, a review that became a rubber stamp, rulings that scattered and vanished. All three are cases where **nobody could see that there was no result.** And the fix was the same all three times — **leave a fact, not a judgement, somewhere a person is guaranteed to look.**
