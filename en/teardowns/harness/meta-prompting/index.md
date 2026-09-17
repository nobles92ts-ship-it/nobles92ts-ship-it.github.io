# Meta-prompting

> Don't write a good prompt — hand over all the raw material and let the AI carve it down. Nowhere in the three steps is the result measured.

- Headline number: 3 steps · 0 gates
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/meta-prompting/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/meta-prompting/index.md
- Source (Source video): https://www.youtube.com/watch?v=J3BbFNYHvZM
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**"Don't try to write a good prompt — hand over all the raw material and let the AI carve it down." The method holds. Nowhere in its three steps is there a place where the result gets measured.**

> **[도판]** Three steps, zero gates. The important thing in this diagram is not the boxes but what isn't between them.
>
> A three-step pipeline. Dump context unrefined, make the AI ask back and carve to fit the execution environment, then have a human revise with domain knowledge and paste into a fresh window. No step measures the result.

## What the method is

Normally you write:

> **"Build me X."**

This method writes:

> **"I'm going to build X. First, write me the *instruction* that should be handed over for it."**

So **the thing you would say to the AI is itself produced by the AI.**

## The best explanation — "expand first, then cut"

The core idea: do not try to land it right first time. **Blow it up large, then carve it down.**

The analogy for why was good.

> **Not being able to write long is the beginner's problem. The hard thing is cutting a long piece down to its core.**

And the evidence attached: **school sets a minimum word count and university sets a maximum.** Which of those is harder is the whole point.

It holds in practice too. Write to 4,000 characters from the start and **what did not occur to you never gets in.** Expand then carve and **far more detail survives inside the same 4,000.**

## But there is no place in the three steps where anything is measured

The subject of the piece.

When cutting there is a criterion: **"could the AI work this out without being told?"** If so, cut it.

The criterion itself is clear. **The problem is that nothing is checked after cutting.**

| Situation | Can you tell |
|---|---|
| Cut something and the result was good | **Was it fine to cut, or were you lucky — indistinguishable** |
| To find out | You would have to **run the cut and uncut versions and compare** |
| Is that comparison in the video | **No** |

So the method sits at **"I tried it and it seemed better."** That does not make it a bad method — it means **there is not yet evidence that it is good.**

That is what matters most in the diagram: **there are three boxes and nothing between the boxes.**

## Held against mine — the first two I already had, in code

My pipeline actually works that way. It takes the source specification **whole, unprocessed**, and the next stage **cuts out only what is needed.** The shape of the procedure is the same.

**With one difference.**

| | This video | Mine |
|---|---|---|
| Who cuts | **The AI** | **Code** |
| What was cut and why | **Varies each time** | **Reproducible** |

That difference is large. When the AI cuts, **the same input can be cut differently each run.** Then when a result is poor, **you cannot separate whether the cutting or something else caused it.**

When code cuts, **it cuts identically every time, and you can go back and see what was removed.**

## What I actually took was not the procedure but one sentence

The three-step procedure was already in place, so there was nothing to take.

What stayed was **one line the speaker tossed off in passing.**

> **Look at the three questions the AI asks back and you know how thin your information was.**

That matters because **it redefines the purpose of "have the AI ask questions."**

Normally you do it **so the AI understands better.** The real value is not **the answers** but **the questions themselves.** **What it chooses to ask shows you where the holes in your own explanation are.**

So I adopted it as **a step to run once before feeding a specification into the pipeline.**

## What this piece cost me

> **The value of a methodology talk is in its side effects, not its procedure.**

The three-step procedure was something I already did. What remained was **one line the speaker did not consider the point.**

Which means **you must not read a source like this in summary.** A summary keeps the procedure, and **the tossed-off line is the first thing a summary cuts.**

## The detailed record starts here

**The method is right, and nowhere in its three steps is there a place that measures whether the prompt it produced is any good.** A sixteen-minute video lays out one person's meta-prompting style — **don't try to write a good prompt; hand the AI every scrap of raw material and let it do the carving.** Half concept, half live demo. What I actually took from it was not the procedure but **one sentence about what the question-eliciting step is really for**, and what I couldn't take was **any evidence that the method pays off.**

## What the video says

**The definition is one line — have the AI produce the prompt you'll feed to the AI.** Not *"build me X"* but *"I'm going to build X; write me an optimised prompt worth feeding to an AI."*

And **three things to get right.**

- **Elicit questions.** Don't stop at *"write me a prompt"*; append *"if you need more context to write a good prompt, ask me."*
- **State success criteria.** Not *"make me an awesome landing page"* but *"the core value has to be visible in the first mobile viewport, and every button and form has to actually work."*
- **Convert for the execution environment.** Each destination tool needs something different — **stop conditions** for one, **constraints** for another, framing and lighting and camera for image generation, source standards and verification method for research.

**Naming the antipattern was the good part.** Going straight in with *"I'm building a CRM, write me a meta-prompt"* leaves you **trapped inside a frame the AI invented on its own.** Nothing of yours went in, so nothing of yours comes out, and once a frame sets you only ever edit within it.

**One practical tip landed.** If you have requests from a meeting, **paste them verbatim rather than tidying them up.** The moment you refine, only as much as you understood survives.

## The technique — why expand first, then cut

**Writing 4,000 characters from the start preserves far less detail than expanding fully and then carving down to 4,000.** The presenter's analogy is exact — **not being able to write long is the beginner's problem; the hard part is cutting a long piece down to its points.** It's why school sets minimum word counts and university sets maximums.

**And then you start in a fresh window.** *"Every LLM is at its best early, when the least context is loaded."* There's no reason to drag along the debris accumulated while building the prompt.

**The reason the front end matters more on long jobs is stated too.** If you're going to burn tokens on something that runs for days, **starting in the wrong direction costs proportionally more.**

> **[도판]** The rule for what to cut is clear. There is simply no way to confirm the cut was right.
>
> What actually got cut in the compression step and what stayed. The single criterion is whether the AI can decide it dynamically without being told, and that criterion cannot be verified after the fact.

## What broke when I checked

**The compression criterion can't be verified after the fact.** *"Can the AI decide this dynamically without it being in the prompt?"* is a clear rule to apply, but **when you cut something and the result comes out fine, nothing distinguishes "safe to cut" from "got lucky."** You'd have to run the same request with and without, and the video contains no such comparison.

**And the payoff has never been measured.** Nowhere in sixteen minutes is there a figure for whether this beats not doing it, or by how much. The presenter closes by saying *"even having done all this, I'm not sure it's worth teaching"* — and **that honesty is what raises my confidence in the material.** It's a style share, not a product.

**The most valuable sentence is about a side effect, not the procedure.** Having asked for questions, no prompt came back — a flood of questions did, and the presenter calls that *"already a huge success."* Then **only three get answered and the rest are delegated.** The line that follows is the core of the video.

> Looking at just questions 1, 2 and 3, you can see how thin my original information was.

**The real body of the question-eliciting step isn't a better prompt — it's showing me where the holes in my own context are.** That is a diagnostic instrument, not a prompting trick.

⚠ Though **delegating everything makes it pointless.** The presenter warns about this: hand it all over and the reason for running the procedure disappears.

## Held against my own setup

**Steps ① and ② I already had, in code.** My pipeline drops the source spec in whole and unrefined, then a deterministic stage cuts it to what's needed. The shape is the same — **except the thing doing the carving is code rather than an LLM**, so what got cut and why is reproducible.

**Step ③ I hold more strongly.** Reviewing the artifact doesn't end at a human edit; it's a gate. That is precisely the slot missing from these three steps.

**The one thing I didn't have is single.** I have always used *"ask me questions"* **to get better output**, never **to see what I left out.** Same sentence, different purpose, and you read the answer differently.

## Verdict

| What | Call |
|---|---|
| **Question-eliciting as a context-hole diagnostic** | **Adopt.** There's a slot for it before a spec goes in |
| **Expand first, then cut** | **Already doing it.** Difference is that code does my carving, so it reproduces |
| **Start in a fresh window** | **Already doing it.** The stated reason is worth keeping |
| Adopt the three-step procedure wholesale | **Unnecessary.** ①② exist and ③ is stronger on my side |

**The lesson this piece paid for: methodology videos are worth something for their side effects, not their procedures.** The three steps were things I was already doing. What survived was one line thrown out in passing — *"three questions in, you can see how thin my information was."*

And **a method with no place to measure gets neither better nor worse.** Whether this pays off is currently unknowable, and finding out means running the same request both ways. The presenter ending on *"I'm not sure"* is, for that reason, an accurate self-assessment.
