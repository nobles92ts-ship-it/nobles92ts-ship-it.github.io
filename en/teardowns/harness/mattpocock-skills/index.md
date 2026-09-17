# mattpocock/skills

> I didn't take the 35 skills. I took the one document that defines how to use them — and measured against it, 1 of my 96 skills passed.

- Headline number: 1 of 96
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/mattpocock-skills/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/mattpocock-skills/index.md
- Repository: https://github.com/mattpocock/skills
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A well-known developer published their entire AI setup. I did not install it — and the reason is a document inside that repository. Instead I used that one document as a ruler on my own 96 tools, and one passed.**

> **[도판]** Matt Pocock publishing his own agent directory wholesale. It also ships as a plugin on the official marketplace.
>
> Thirty-five skills split across five maturity buckets, of which only the two promoted buckets, twenty-five skills, ship as a plugin. There are two distribution paths: a read-only subscription that auto-updates, and copied files you own — and installing both gives you every skill twice.

## What it sells

**A bundle of 35 commands** you can give an AI.

What is distinctive is **how it introduces itself.** Not *we will manage everything for you* but **"we will not take your way of working away from you."** It names its competitors directly.

## The diagnosis is good

It sorts the problems with having an AI write code into four.

| Problem | Why |
|---|---|
| **It doesn't build what you wanted** | **Nobody knows precisely what they want** |
| **It gets too verbose** | Not knowing your team's shorthand, **it uses twenty words where one would do** |
| **The code doesn't run** | With no way to check, **it is flying blind** |
| **It turns into a mess** | When AI speeds up coding, **the rate of decay speeds up too** |

The last row is the good one. **Speeding up does not speed up only the good parts.**

## But I did not install it — because of this repository's own logic

The interesting part.

The repository carries **one doctrine document.** It says: **minimise what is loaded all the time.**

And **installing this repository loads 25 tool descriptions into every conversation, automatically.**

So **installing it makes you do the thing it tells you not to do.**

I did not install it. **Following this repository's logic led to not installing this repository.**

## What I took instead — "there are two kinds of load"

The only thing I actually took, and it was worth more than the 35 commands.

Attaching tools to an AI creates **two different burdens**, and they normally get thought about as one.

| Burden | Who carries it | What to do about it |
|---|---|---|
| **The machine's** | Every line loaded automatically. **Loaded every turn whether used or not** | **Minimise** |
| **The person's** | Having to remember what exists and when to reach for it | ⚠ **Do not minimise** |

The second row is the point. **Reducing the human burden is not the goal.**

Because **a person knowing "in this situation I use that" is itself the index.** Try to remove it by making everything fire automatically and **the machine's burden explodes.**

**Merge the two into "reduce the burden" and you aim the wrong way.**

## Measured with that ruler — 1 of 96

I ran my 96 tools against that standard.

**One had a properly stated trigger condition.**

The other 95 had none, or one too vague to act on, which meant **20,672 characters of description were loading into every conversation.** Used or not.

That is **the cost side** of the *installed and never switched on* theme on this shelf. **You pay whether you switch it on or not.**

## And one more — how to define "done"

When you give an AI a job and **it cannot tell done from not-done**, it **finishes before it is finished.** And once it tilts toward *done*, it keeps sliding that way.

A completion criterion needs two properties.

**One — a sharp boundary.**

*Reached understanding* has **no boundary.** Nobody knows where understanding begins. So the AI **declares arrival anywhere.**

**Two — the demand has to compel.**

This contrast was the good part.

| Write it this way | Effect |
|---|---|
| *Produce a list of changes* | **Does not compel thoroughness** — produce a list and you are done |
| **"Every modified item must be explained"** | **Compels it** — one omission and the condition is unmet |

The two sentences look similar and **their compelling force is entirely different.** The first demands **an action**; the second demands **a state.** A state is what makes omissions visible.

## Summary — not 35 things, one sheet

| What | Taken |
|---|---|
| The 35 commands | **No** — installing breaks the repository's own rule |
| **The doctrine document** | **Yes** |

And that one sheet **flagged 95 of my 96.**

**You can decline someone's tools and still take their ruler.** And sometimes the ruler is worth more than the tools.

## The detailed record starts here

**I didn't install it — because of the repository's own argument.** Installing the plugin puts 25 skill descriptions resident in context every turn, which is precisely what this repository tells you not to do. Instead I **used its doctrine document as a ruler and measured my own 96 skills.** That measurement is this page: **one had the invocation axis set**, and the other 95 descriptions — 20,672 characters — load on every single turn.



## What the repository sells

**A bundle of slash commands.** But the selling point is that it is **not** a framework that owns your process. The README names its competitors directly.

> Those approaches help by owning the process for you. In doing so they **take away control and make bugs in the process itself hard to fix.** These skills are designed to be small, easy to fix, and composable.

And it doesn't enumerate skills. It **organises itself around four ways agents commonly fail, with a prescription attached to each.**

| Failure mode | Diagnosis | Prescription |
|---|---|---|
| **It builds the wrong thing** | *"Nobody knows exactly what they want"* — the communication gap between a person and an agent | An interrogation session |
| **It's far too verbose** | With no project jargon, it writes twenty words where one would do | A shared vocabulary doc + domain modelling |
| **The code doesn't run** | No feedback loop. Without types, a browser or automated tests, it's flying blind | TDD · bug diagnosis |
| **It built a ball of mud** | An agent accelerating coding **accelerates software entropy with it** | Codebase design |

The example under the second one is blunt. **BEFORE:** "the problem that happens when a lesson inside a section inside a course gets 'materialised' — given a place on the filesystem" → **AFTER:** "there's a problem in the materialisation cascade." And it justifies this **on token logic rather than taste**: a shared language means fewer tokens spent on thinking.

It has **207,586 stars** and three contributors. Two hundred thousand at six months old is the author's newsletter audience, not code scrutiny. That said **17,928 forks** puts it at 11.6 to 1 — far healthier than [Odysseus](/en/teardowns/harness/odysseus/index.md) at 450 to 1, meaning people genuinely use it.

## What actually came across — the two loads

The value isn't the 35 skills. It's **the one doctrine document that defines how to use them.** Its opening sentence states the target precisely.

> The same levers make each of them predictable — getting the agent to **walk the same process** on every run, not to produce the same output.

Its central claim is that **cost comes in two kinds.**

| Load | Who bears it | Treatment |
|---|---|---|
| **Context load** | The machine — every resident line. It spends tokens and attention every turn whether it fires or not | **Minimise** |
| **Cognitive load** | The person — knowing what exists and when to reach for it. The human acts as the index | ⚠**Do not minimise** |

The second is the counterintuitive one. **A person's cognitive load isn't a cost to be eliminated, it's the price of their agency.** Keep it where judgement matters; remove it only where it doesn't.

Three working rules follow.

**Progressive disclosure is a variance lever, not a token optimisation.** Leave reference material inline that should have been disclosed and it buries the steps, turning whether attention lands on a given step into **a coin flip.** That's a variance problem, not a readability one.

**Steering by prohibition pulls the thing in.** The forbidden behaviour enters the context and becomes *more* accessible — *"don't think of an elephant,"* and now there's nothing but elephant. Negation is a weak modifier, so a strongly activated concept tramples it and **the prohibition reads half as an instruction.** State the positive goal instead, and never name the forbidden side.

**Hunt for no-ops.** An instruction the model already follows by default costs load and says nothing. The test is **"does behaviour change against the default"** — and it's a model question, not a reader question. So when two people argue about whether something is a no-op, they're disagreeing about the default, and **that gets settled by running the document, not by debating it.**

## A completion criterion has two properties

If an agent can't tell "done" from "not done," you get **premature completion** — it finishes before it's finished, and attention slides toward "done."

| Property | What |
|---|---|
| **Clarity** | A fuzzy boundary ("reached an understanding") invites premature completion. Sharpen the boundary first |
| **Demand** | **"Every modified model will be explained" forces thoroughness; "make a list of the changes" doesn't** |

The strongest criteria are **checkable and exhaustive** at once. Demand rarely appears as its own step — it hides inside the phrasing.

## Measured — 1 of 96

> **[도판]** Having read the doctrine, I held the ruler up. As measured: 102 folders, 96 skill documents.
>
> My 96 skills drawn as 96 squares. Exactly one has the invocation axis set; the other 95 descriptions load on every turn.

The repository's only classification axis is **user-invoked versus model-invoked.** One question decides it — **"is it useful for the model to reach for this on its own?"**

| | Model-invoked (default) | User-invoked |
|---|---|---|
| Description | For the model — rich trigger phrasing | For a person — one line read off a slash menu |
| Load | Permanent context load ↔ discoverability | **Zero context load** ↔ cognitive load |
| Reach | Model or person — model-invoked **includes** human access | People only |

**The sharpest example turned up in my own set.** One skill's description says, of itself: *"explicit invocation only — do not stop the user with comprehension questions during ordinary work."*

**The policy is declared in prose, and the flag the harness actually enforces isn't set.** Read on Matt's axis, that's **a user-invoked skill shipped as model-invoked** — left reachable by the model, with "don't reach for this" written in the body. It is **exactly the negation failure mode** described above. One flag replaces that whole paragraph.

⚠ Applying it to all 96 would be wrong. Many of mine **must** stay model-invoked — the pipeline skills an orchestrator calls, for instance. **The value of the axis isn't conversion; it's passing all 96 through that question once**, and checking first whether an agent or hook calls the skill before setting the flag.

## What I didn't take, and why

**Installing the plugin: rejected.** All four reasons are measured.

- **It adds 25 descriptions to resident context.** Stacking that onto an environment already loading 95 unbounded is **a direct violation of the author's own doctrine**
- **Duplication** — TDD, code review, handoff and research all already exist on my side in the same role
- **Mismatched premises** — most of the engineering skills require wiring to a particular issue tracker, and my actual tools have no adapter
- **Language** — the descriptions are in English, so model-invocation hit rate on Korean phrasing is lower than my existing skills'

**Three disciplines came across instead.** Keeping a folder that pins down "we don't do this" **with the reason** (my own rejection list currently survives as abbreviations, with the *why* missing). Splitting review into two axes while **forbidding merge and re-ranking** (so a formatting note can't mask a coverage gap). And asking every question you can ask right now **in one round with a recommendation attached to each**, rather than one at a time.

One line attached to that last one is good: **"finding facts is my job and never the user's. Don't ask the user something I could look up. The decisions are theirs."**

## There are things not to copy, too

**This repository has no tests.** Automated verification amounts to plugin-manifest validation; the quality of the skill bodies rests on the author checking by hand. There's a doctrine that says *settle it by running the document* — and **that run isn't in CI.** On this axis my side is ahead: two linters that compare documents against reality run mechanically.

**The claim not to own your process has counterexamples.** Several of the top engineering skills prescribe issue-tracker schemas, label vocabulary and document placement in some detail. Against the competitors the README attacks, that's **a difference of degree, not kind.** What's genuinely "small and composable" is the productivity bucket and the interrogation family.

And the examples are all web and TypeScript. **What travels is the vocabulary and the discipline, not the examples.**
