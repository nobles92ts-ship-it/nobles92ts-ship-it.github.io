# A talk on QA infrastructure

> There were no captions, so I reconstructed it from slides alone. Even carrying that gap, one thing survived — and it wasn't about tools, it was about the definition of evidence.

- Headline number: 0 captions · slides only
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/qa/qa-infrastructure/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/qa/qa-infrastructure/index.md
- Source (Source video): https://www.youtube.com/watch?v=10ZbeMZ0nOU
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A 31-minute talk from another company's QA team. The audio didn't come across, so I reconstructed it from slides alone. That has to be said before anything else.**

> **[도판]** The order of the three steps is the argument. You don't bring in tools first; you go access → infrastructure → AI.
>
> The argument of the talk. Access is earned by proving need, infrastructure is not a list of tools but the foundation that makes work observable, and AI sits on top of that in that order. And this analysis was reconstructed from slides without captions.

## First — the evidence here is thin

Normally you lead with the good part. Here I have to lead with **what is missing.**

It is a 31-minute talk and **there were no captions.** So I pieced it together from the slides on screen. What that loses:

- Everything the speaker **actually said**
- Any **elaboration** not written on a slide
- **Fourteen minutes of Q&A** — the questions were on screen, **the answers were audio and did not come across**

That last one hurts. **I know what the audience wanted to ask and not what the speaker answered.** Fourteen of thirty-one minutes are blank.

Leave that unsaid and write only a summary, and **later, when I cite this page for something, the hole is invisible.** So it goes at the top.

## The talk's starting point — "QA means testing" is what boxes it in

The speaker's premise:

Ask what QA does and most people answer **"the person who tests."** That definition is narrow enough that **it prevents work that ought to happen.**

The essence they named: **confirming the thing was built the way it was meant to be.** The means might be pressing buttons; it might be querying the data directly. **The problem is when the means becomes the purpose.**

## One case carries the whole talk — drop rates

The best part, and the only thing I took.

Say a game states **"1% chance of the good item."** **How do you confirm it is 1%?**

| | By pressing | By looking at the source |
|---|---|---|
| How | Pull hundreds of times and count | Query the configured value |
| Time | Hours to days | **5 seconds** |
| The answer | **"Probably 1%"** | **"1%"** |

The bottom row is the point. **It is not only faster — the nature of the answer changed.** An estimate became a certainty.

And what produced that change was not a tool but **the vantage point.** However good your automation, **counting from outside stays estimation forever.**

→ Hence the talk's ordering: **access, then infrastructure, then AI.** The tools do not come first.

## Held against mine — one thing I had already arrived at

The talk argues **capture the evidence at the same moment you file the bug.** Chase screenshot, log and device info separately and **you skip it because it is tedious.**

I had landed there too. My automation **records evidence at the instant it makes a judgement**, and images and video — **which cannot be regenerated** — are stored separately.

Identical premise: **if it is tedious, it gets dropped.**

## What I will not cite

There were numbers in the talk. **I cite none of them.** They are **slide phrasing**, with **no statement of how they were computed.** A number without a method cannot be checked by copying it.

## When I would reopen this

Recovering the 14 minutes **probably would not change the verdict.** So it stays parked.

One condition to reopen: **when I actually have to negotiate access or build these layers myself.** Then their ordering becomes a real reference.

## What this piece cost me — and it is on my side, not theirs

**A source with a gap has to be read with the gap counted first.**

Thin sources are not unreadable. But **write only the summary without recording what is missing** and later that summary **walks around on its own carrying a confidence it never earned.**

## The detailed record starts here

**This piece has to start by admitting its evidence is thin.** It is a 31-minute talk **with no captions, so I reconstructed it from the on-screen slides alone.** What the speaker actually said, every aside, and fourteen minutes of Q&A answers are **all missing.** Even carrying that gap, one thing survived — and it was **not a story about tools but about what counts as evidence.**

## What the talk says

**It opens by pushing back on a narrow definition.** The perception that *"QA means testing"* is what confines QA's role. The essence of verification is confirming *"was this built the way it was designed"* — not looking at any particular tool.

**Then it turns to access.** Every time he requested database or build-system access he got back **"why does QA need that data?"** The conclusion: **access is not given, it is earned by proving "this way I can test faster, more accurately, more completely."**

**It defines infrastructure as a capability, not a tool list** — *"the groundwork that makes development activity observable, understandable and visible."* And it insists **the point is not any single tool but the accumulation of what gets built that way.**

**Asked what he would build first if he started over, he picks bug-report infrastructure.** The reasoning is exact — of the test cycle (prepare cases → execute → **report bugs** → fix), **reporting is the only point that touches the outside world**, and **even a veteran spends 5–10 minutes** on logs, reproduction screenshots and duplicate checks, **so it gets skipped when people can't be bothered.** The answer is a tool that **collects video, logs and screenshots on one hotkey.**

**The closing is actionable** — *"this coming Monday, ask for one read permission."*

## The technique — one case carries the whole talk

**The gacha probability case.**

**Before:** pull hundreds of times and **estimate the rate statistically.** That is *"checking by feel."*
**After:** once the source probability data could be **queried in five seconds**, **the nature of the verification changed.**

**The point is that this is not a story about tools.** For the same question (*"is the rate correct"*), **what counts as evidence** changed. A sample of hundreds gets you as far as *"it's probably right."* Reading the source is **right or wrong.** **One access grant changes the character of the verdict.**

> **[도판]** This one case carries the whole talk. And the evidence for that case is a single slide.
>
> The gacha probability case. Estimating a rate from hundreds of pulls became a five-second query against the source, and the nature of the evidence changed with it. It went from estimate to certainty rather than merely getting faster.

## What broke — count the gap first

**Only half of it is analysable.** Of 31 minutes, sixteen are the talk and **fourteen are Q&A** — where **only the question text survives on slides and the answers were spoken.** So **I know what the audience wanted to know and not what the speaker said.**

The question list alone is worth reading — *"how do you handle someone who won't accept that you need access"*, *"where do you reallocate the time AI saves"*, *"which layer do you build first in practice."* **All of them are places this talk opens and never closes.** There were answers, and they aren't in my analysis.

**And there is not a single measured number.** *"5–10 minutes"*, *"five seconds"*, *"hundreds of pulls"* — all slide phrasing, **with no account of how any of it was measured.** This was never a measurement report; it is **experience sharing**, so that isn't a flaw. But **cite the argument and leave the numbers behind.**

⚠ **There is a way to close the gap** — attach a transcript and analyse it again. The reason I didn't is simple: **what I would get from this talk was already settled at one idea.** Restoring fourteen minutes of answers didn't look likely to change that verdict. ⚠ **That is an estimate, and it may be wrong.**

## Held against my own setup

**I am already headed that way on bug-report infrastructure.** Automated runs leave their own evidence at the moment of the verdict, and images and video are stored separately because they can't be regenerated. It shares its premise with the talk's *"one hotkey, collect everything"* — **what is tedious gets skipped.**

**"Without infrastructure there is no context to give the AI" also matches my experience.** The things I built that actually earned their keep did so **not because the model was clever but because there was something to read.**

**But the biggest thing left is the gacha case.** I am writing separately about [what counts as evidence](/en/writing/verdicts/index.md), and **this case is the best example that writing has.** For one question, **whether you answer with an estimate or a certainty is decided by access, not by tools.**

## Verdict

| What | Verdict |
|---|---|
| **Access decides the character of evidence** | **adopt — as an example.** It goes straight into the writing about verdicts |
| Collect evidence at report time | **already doing it.** Same premise |
| "No infrastructure, no context for AI" | **agreed.** But my experience is the grounds, not this talk |
| Citing its numbers | ⛔ **don't.** All slide phrasing, with no method behind it |
| Re-analysis | **hold.** Restoring the answers looks unlikely to move the verdict<br>Reopens: when negotiating access or ordering the build layers becomes **actual work** |

**The lesson I paid for here is on my side, not the material's — material with a gap has to be read with the gap counted first.** Fourteen of 31 minutes never arrived, and writing only the summary without recording that means **the hole is invisible later, when I cite this page for something.**

And ⚠ **"re-analysis probably wouldn't change the verdict" is my estimate.** I did not verify it. I write it down here because **if this verdict later turns out to be wrong, there has to be a record of where it went wrong.**
