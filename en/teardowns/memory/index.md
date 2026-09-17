# Context and memory

> What goes up to the model and what stays outside. Across all eleven, not one line of code crossed over — only rules did.

- Headline number: 11 written · 0 code
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Eleven pieces about what to show an AI and what to keep out of its sight. Across all eleven, not one line of code crossed over.**

## First — why decide what to keep out

When you give an AI a job, **telling it everything you know feels like it should help.** It's the opposite.

There is a ceiling on how much an AI can read at once. Call that ceiling a desk. Pile every document onto the desk and **you can no longer find the one page you need.** A wide desk is not the goal; **a desk holding only what's needed right now** is.

So the real question is not *how do I make it remember more* but **what goes on the desk and what stays in the drawer.** All eleven pieces are about that.

## Not one line of code crossed, and everything that did was a rule

Tally what moved into my work:

| Kind of thing that transferred | Count |
|---|---|
| Program code | **0** |
| Rules, habits, placement | all of it |

The reason is that **the answer to this problem lives inside my own data.**

Someone else's organising tool is shaped to **someone else's data.** Mine is shaped differently. Take the whole tool and it doesn't fit; the only portable thing is **a way of measuring.**

## And this shelf found more holes in my own work than any other

Least taken, most gained. **Seven of the eleven found a defect while I was holding someone else's ruler against my own thing.**

That is the real value here. Not learning the good thing — **measuring your own thing by someone else's standard makes the invisible visible.**

## Most of what crossed was "when" and "where," not "what"

At three pieces I read it as *code doesn't cross.* At eight, a sharper sentence appeared.

The shape of the things I took:

- *Score a new tool **in the same turn** you build it* ← **when**
- *One source of material lives in **exactly one place*** ← **where**
- *Things that don't classify go in **a holding pen*** ← **where**

Not what to build but **when to do it and where to put it.** Those are habits rather than tools, so they port cleanly.

## The most valuable thing was agreement reached from different grounds

One piece stood out.

Five organising principles from a video **matched conclusions I had reached separately.** And **not one of the reasons overlapped.**

- Their reason: **complexity exhausts people and they stop using it**
- My reason: **if the path is tied to the classification, changing the classification breaks everything**

Completely different routes, same destination. **That raises the odds the destination is right.**

Same reason, same conclusion is just hearing one thing twice. **Different reasons converging is much stronger evidence.**

## And the most dangerous verdict on this shelf was "I already have that"

It is the verdict I reach most often here. The ninth piece shook the verdict itself.

**When I say I already have that, what did I check it against?** Mostly **memory.** I had not opened the thing.

So I split it into three layers.

| Layer | What to ask | How to check |
|---|---|---|
| 1 | **Do I have it** | Does the file exist |
| 2 | **Does it run** | Press it — does output appear |
| 3 | **Have I ever switched it on** | **Is there a last-run date** |

Stop at layer 1 and the answer is *yes.* The ninth piece **failed at layer 2** (present, not running); the tenth **failed at layer 3** (running, but not switched on once in 24 days).

**Three completely different states, all covered by the same sentence.**

## Last — sources with nothing to teach still pay

Something worth noting. **The ninth and tenth pieces both had almost nothing to teach.**

Precisely because there was nothing to learn, **I filled the comparison table to the end**, and filling it **exposed the blanks on my side.**

→ **When you use someone else's thing as a ruler, the ruler does not have to be excellent. It only has to have markings.**

## The detailed record starts here

Things about what gets sent up to the model and what stays outside it: context compression, retrieval without vectors, second brains — and **arranging a repository so that both people and agents can read it.**

That last one looks out of place at first. Karrot SEED is a design system, and what actually came out of it wasn't a component but **the way its documents were laid out.** The test for this bucket isn't what the subject is; it's whether it's about **deciding what a machine gets to read.**

## Eleven, and not one line of code crossed over

| Subject | What came across | Shape |
|---|---|---|
| [Headroom](/en/teardowns/memory/headroom/index.md) | Attach a confidence interval and a label to anything unmeasured | one convention |
| [Karrot SEED](/en/teardowns/memory/karrot-seed/index.md) | Auto-run the build when the source changes · a verification reminder at session end | two hooks |
| [RAG without a vector DB](/en/teardowns/memory/rag-without-vectors/index.md) | Cutting the problem along a scale axis and drawing the boundary | one structure |
| [A second-brain workshop](/en/teardowns/memory/second-brain-course/index.md) | Score a new skill **within the same turn** it was written | one timing rule |
| [Graph engineering](/en/teardowns/memory/graph-engineering/index.md) | Three review lenses in parallel — 9.9 minutes a run | one wiring change |
| [An LLM wiki in Obsidian](/en/teardowns/memory/llm-wiki-obsidian/index.md) | One item exactly one place · log model access | two hygiene rules |
| [A second-brain interview](/en/teardowns/memory/second-brain-interview/index.md) | "Context before automation" — many tools, thin criteria | one attitude |
| [A file management system](/en/teardowns/memory/file-management/index.md) | A home for the unclassifiable · cap the index | two rules, two corrections |
| [A second brain in four steps](/en/teardowns/memory/second-brain-4steps/index.md) | Nothing did — instead **it found an empty cell of mine** | one adoption, one confirmed defect |
| [dsh-anchored-standard](/en/teardowns/memory/dsh-anchored-standard/index.md) | Nothing did — **there was no hook to install it into** | one rejection, 24 days unrun confirmed |
| [public-apis](/en/teardowns/memory/public-apis/index.md) | Put a cheap check ahead of an expensive one and **the expensive one looks like it runs while never running** | one trap, one confirmed defect |

**All rules, hooks, structures and wiring. Zero code ported.** Context problems mostly don't yield to someone else's code — the answer lives in the shape of your own data, so the only transferable part is the ruler.

## And this bucket found the most holes in my own work

Seven pieces used somebody else's principle as a ruler and produced a number.

- Of **1,021 markdown files in my vault, 47 (4.6%) have front matter** — so when retrieval fails there, the cause is likely empty metadata, not a missing tool
- Cache reuse 92.5–96.3%, uncached input 1.8–2.0 tokens per call — **the compression tool had nothing left to compress**
- Of seven techniques I'd written down as harvested, five died **the moment I opened my own `settings.json`** — already there, or a false lead
- A full scan of 99 skills found **one with no description at all**, so it never fires from natural speech, plus sixteen over 500 lines
- Across 52 run logs, **the feature a video called "the heart" met its trigger condition once**
- Running the autonomous-accumulation track for real: **zero items, zero files, zero observer hooks** — it was only installed
- Opening the API catalogue I built a month ago: **liveness was measured on 300 of its 1,791 rows (17%)**

The third stung most. It was the kind of error no amount of careful reading of the repo would ever catch.

## The second axis — what crossed was "when" and "where"

At three pieces only one line showed: no code crosses. Six more, and **a more accurate sentence appeared — most of what crossed was not "what" but "when" and "where."**

From the workshop deck what I got wasn't a new inspection tool but **when to run the inspection.** From the graph piece it wasn't a new stage but **when to run existing stages together.** From the file-management piece it wasn't a new folder layout but **where to put things that don't classify.** **All of it moved the timing and the location of something I already had.**

I have almost never gained a new part from someone else in this bucket. What I gained was **judgement about when and where to use my own parts.**

## The third axis — the most valuable thing was agreement from different grounds

The file-management piece is the extreme case. That video **matched a design I had built separately on five conclusions**, and **not one of the reasons overlapped** — his was *"make it complicated and people run away"*, mine was *"a path that depends on a taxonomy breaks."* **Reach the same point down different roads and the odds that the point is right go up.**

The reverse also showed up. The same technique was **harmless on one side and fatal on the other** — numbering folders is fine on ID-based storage and not on path-based storage. Stopping at *"it works for them, not for me"* would have left a preference; **asking why it splits produced a rule.**

## The fourth axis — "I already have this" is the most dangerous verdict

The ninth piece shook the three axes above. The verdict I reach most often in this bucket is **"I'm already doing that"** — and **I had never once asked what I was reaching it with.**

Comparing the autonomous-accumulation step, I wrote **equivalent** on the grounds that it was installed. Pressing it for real gave **zero items, zero files, zero observer hooks.** It isn't that promotion was zero — **there was no observation, so there was nothing to promote.**

**Possession is not operation.** And it doesn't stop at that cell — **all four "equivalent" verdicts in that table were judged on installation.** The other three are unpressed, and until then they are **ledger entries.**

This axis meshes directly with the conclusion in [agent harnesses](/en/teardowns/harness/index.md). The sentence that came up most often over there was *"I already had this"* — and **the method for checking whether that sentence is true came from here.**

## The tenth dug the fourth axis one layer deeper — "never switched on"

The ninth was **material with almost nothing to teach**, which is precisely why I filled the comparison table to the end — and an empty cell fell out of it. **Material with nothing to take still earns its keep**: when you borrow someone's ruler, the ruler doesn't have to be excellent. The tenth proved it again.

If the ninth found **possession is not operation**, [the tenth](/en/teardowns/memory/dsh-anchored-standard/index.md) opened the cell below it. **Possession is not a record of running.**

That piece went in to tear down someone's preset for shrinking the context budget. The investigation stopped before any adoption verdict — **my harness has no hook that *subtracts* injection at the first request of a session.** With nowhere to install it, the answer is neither adopt nor reject but **not applicable.**

Something worse surfaced in the same spot. I had brought in a measurement skill half a year ago **for exactly this purpose**, and **it had not run once in the 24 days since it was installed.** Zero outputs; the command meant to back it was never even written. And on the same day, [the investigation on the harness side](/en/teardowns/harness/deepseek-harness/index.md) **pointed at the same skill without knowing about this one.**

So the fourth axis grows a floor:

| Layer | What to ask |
|---|---|
| 1 | Do I have it — **is it installed** |
| 2 | Does it work — **press it, does output come out** (the ninth) |
| 3 | **Has it ever been switched on** — is there a last-run date (the tenth) |

Write "I already have this" off layer 1 alone and **you conclude you should go buy the thing that is already in the warehouse.** That is the verdict this bucket reaches most often.

**One more line.** This piece also confirmed that my own setup **is itself a wholesale copy of someone else's preset bundle** — over half the skills, most of the rules, ten of the hooks came from there, and exactly two hooks are mine. I went to appraise someone's preset and confirmed I was already sitting on one. **And the ruler I picked up to measure it with was still in its wrapper, 24 days on.**
