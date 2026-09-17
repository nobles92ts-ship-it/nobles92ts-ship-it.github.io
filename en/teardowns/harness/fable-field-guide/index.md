# A field guide to Fable

> Someone from the company that built the model, explaining how to use it. Which makes the six techniques trustworthy and the closing claim the least trustworthy part.

- Headline number: 6 techniques · 3 new
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/fable-field-guide/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/fable-field-guide/index.md
- Source (Source video): https://www.youtube.com/watch?v=SNb2CFrUcs8
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Someone from the company that *built* the model, explaining how to *use* it. Which splits the talk's credibility in two — the six techniques are trustworthy and the closing claim is the least trustworthy part of it.**

> **[도판]** What reaches the prompt is usually the top-left box alone. Getting the other three out is what the talk is about.
>
> The Unknown Matrix, splitting what you know and don't know into four quadrants: things you know you want, things you know you haven't looked into, things too obvious to write down, and things you never considered at all.

## The premise — "the bottleneck is me, not the model"

It opens on this line:

> **What limits you is not the model's ability but your ability to find what you do not know you do not know.**

To follow that you have to see that **there are two kinds of not-knowing.**

| Kind | What |
|---|---|
| **Knowing you don't know** | You know you don't know this part — **you can look it up** |
| **Not knowing you don't know** | You don't know it exists — **it never occurs to you to look** |

The second is the problem. Asking an AI requires **knowing what to ask**, and if you do not know it exists, you do not ask.

So the whole back half of the talk is **methods for using the model to surface what you do not know you do not know.**

## Six techniques — three of which I was already doing

| Technique | What you actually say |
|---|---|
| **Blind-spot pass** | *I know nothing about this area. Find the things I **wouldn't know I don't know*** |
| **Several rough options** | *I have no eye for this. Give me **four completely different directions** on one page — I'll react* |
| **Interview me** | ***One question at a time.** Ask the ones whose answers change the structure first* |
| **Point at a reference** | *This thing's behaviour is exactly what I want. Read it and rebuild the same semantics* |
| **Log the deviations** | *When something pushes you off the plan, **take the conservative option, write it down, and keep going*** |
| **Quiz me** | *I want to know whether I understood this change. **Build me a quiz I have to pass*** |

## The three that were new

**One — "a third road that leaves a trace without stopping."**

When an AI hits an unexpected situation mid-task it normally does one of two things.

| Usual | The problem |
|---|---|
| **Stop and ask** | You are away, and it sits still for hours |
| **Decide and continue** | Later, **you cannot tell where it diverged** |

The third road: **take the conservative option, write down where you deviated, and continue.**

Not stopping means progress; writing it down means **later you only have to read those lines.**

**Two — "I take a quiz before merging."**

The freshest idea here.

A check normally asks **whether the code is right.** This asks **whether I understood it.**

When an AI writes your code it is easy to **pass it through without having understood it** — it works. And later, when it needs changing, **it is code you do not know.**

So it **has the AI examine you.** Fail it and it is not yet time to merge.

**Three — "sweep for blind spots *before* reading."**

Normally you look for what you missed **after** reading the code. This inverts it and sweeps **before going in.**

Being told *this part is a complicated dead end* and *look at the history here first* before you start **changes the order in which you read.**

## But the closing section is the weakest part

At the end comes the claim **"trade-offs are not real."**

Instead of weighing priorities and picking one thing over another, **just do all of it and let reality show you the trade-off.** Good, fast and cheap all at once, it says.

The grounds are **one item**: **"I built this presentation deck in four hours the night before."**

That is weak grounds because **a slide deck is cheap to get wrong.** If it fails you redo it.

Where trade-offs actually bite is **where reversal is expensive** — a structure decided wrongly, a data migration done wrongly. **Whether "just do all of it" holds there cannot be established by this evidence.**

And this is **a self-report about their own product**, which is a different category from the six techniques above.

## Which is why credibility splits inside one talk

| Part | Why it is or is not trustworthy |
|---|---|
| **The six techniques** | **The area the builder knows best.** Nobody knows how to handle their model better than they do |
| **The closing claim** | **A self-assessment of their own product**, on a single piece of evidence |

**The same person, the same talk, expert in one part and interested party in another.** They have to be read separately.

## In fairness — the least saleable part was the most credible

Part three of the talk is not about gains but **about loss.**

> **Work that took weeks takes hours. How can you not smile, and how can you not nearly weep.**

They loved the feel of writing code by hand and **say they cannot go back.**

**Someone on the selling side talking about what their product took away is rare.** And it is **the least saleable passage in the talk.**

Which makes it **the most credible.** It is not a line said to sell anything.

## The detailed record starts here

**Trust splits two ways inside the same talk.** It is someone from the company that built the model explaining how to use it, so **the six techniques are exactly the territory the makers know best** and they hold up. The closing part's *"tradeoffs are not real"* is **a self-report about their own product**, and its entire evidence is *"I built this deck in four hours the night before."* Three of the six techniques turned out to be things I already do under other names, and **three I didn't.**

## What the talk says

**The premise is one line — the bottleneck is not the model but my own ability to match map to territory and find my unknowns.** So the whole back half is about **using the model itself to surface them.**

⚠ A limit first. **I watched from 9:34 onward, out of 18 minutes.** The first half is outside this document, and everything below rests only on the back half.

The six techniques:

| Technique | Which box | What it actually asks for |
|---|---|---|
| **Blindspot pass** | Unknown unknowns | *"I don't know this module at all. Do a blindspot pass, find the relevant unknown unknowns, and help me prompt better"* → it sweeps the module and flags gotchas like **"this is a complicated dead end"** or **"go look at the history"** |
| **Brainstorms & prototypes** | Unknown knowns | *"I have no visual sense. Build one page holding four completely different design directions — so I can react to them"* |
| **Interviews** | What I failed to state | *"Interview me about the ambiguous parts, one question at a time — prioritise questions whose answer would change the architecture"* |
| **References** | Known unknowns | *"This behaviour in this library is exactly what I want. Read it and reimplement the same semantics on our side"* |
| **Implementation notes** | What surfaced mid-run | *"Keep a notes file. When an edge case pulls you off plan, **take the conservative option, record it under Deviations, and keep going**"* |
| **Quizzes** | My own comprehension | *"I want to check I understood this change. Build a report of context, intuition and what was done — plus **a quiz at the bottom I have to pass**"* |

**The fourth is especially good.** *"The best way to give a map is to give another map"* — the language and system don't have to match. Want a React component? Hand over an HTML mockup as the map.

## Three already, three new

> **[도판]** Three of six already being familiar isn't bad news. It means two different routes arrived at the same place.
>
> Verdict on the six techniques. Brainstorms, interviews and references were things I already did under other names; the blindspot pass, implementation notes and quizzes were new.

**The fifth is the big one.** *"When an edge case pulls you off plan, take the conservative option, record it under Deviations, and keep going"* — one line that **leaves a trace without stopping.** Until now I had two modes: stop and ask (slow), or proceed and lose the reason later. **There was a third.**

**The sixth I also didn't do.** The idea of being **quizzed by the model** on *"did I understand this?"* after the work is done hadn't occurred to me. Code review looks at the code, not at my comprehension.

**The first is familiar in shape but different in timing.** Going into unfamiliar code, I asked questions **after reading**. I have never asked **for the traps before going in.**

## What broke when I checked

**The closing part is the weakest.** *"Tradeoffs are not real"* — instead of prioritising this over that, **do all of it and let reality show you the tradeoff.** Good, fast and cheap: pick three.

**There is exactly one piece of evidence** — the slide deck built in four hours the night before. A deck is **cheap to redo and nearly free to get wrong.** The things I work on differ from that by orders of magnitude in failure cost. **What holds for one class of artifact cannot generalise to "tradeoffs are gone."**

**And this talk comes from the company that built the model.** That is not a flaw so much as **a reading instruction** — the six techniques are the territory the makers know best and carry high trust; product-effect claims carry the least. **Trust has to be divided inside a single source.**

## Verdict

| What | Call |
|---|---|
| **⑤ Deviations log** | **Adopt.** The third path: leave a trace without stopping |
| **⑥ Self-quiz before merge** | **Adopt.** A slot that measures my understanding, not the code |
| **① Blindspot pass** | **Adopt.** Before going in, not after reading |
| ②③④ | **Already doing.** Two routes arrived at the same place |
| "Tradeoffs are not real" | **On hold.** Evidenced by one low-stakes artifact |

**One thing deserves fairness.** Part three of the talk is not about gains but about **loss.** *"You do in hours what might have taken weeks — how can you not laugh, how can you not almost cry?"* He loved the feeling of turning a codebase over in his head and says he can't go back. **It is unusual for someone on the selling side to talk about what their product took away** — and that passage, being the least saleable part of the talk, is the part I trust most.
