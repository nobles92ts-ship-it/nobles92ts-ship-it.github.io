# A second-brain workshop

> Seven of the eight curriculum slots were already covered. Then I ran the deck's own skill scorecard over my 99 skills and two real defects fell out.

- Headline number: 0 takeaways · 2 defects
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/second-brain-course/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/second-brain-course/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A half-day workshop deck that teaches non-developers to set an AI up as a second brain. There was almost nothing to learn — and then I ran its own scorecard over my setup and two real defects fell out.**

> **[도판]** Turn a curriculum into a comparison table and "nothing to learn" stops being an impression and becomes a number. It also shows you where the one gap is.
>
> The eight slots of the half-day curriculum held against the current state of my setup. Seven slots are already strictly better so the net gain is zero, and only the Google integration slot is left even slightly open.

## What it is

A 40-page deck for **people who do not write code.** The goal is to have them set an AI tool up as a personal knowledge store in half a day.

One thing it does well: its **twelve practice prompts** are tagged three ways — **copy this verbatim / substitute your own value / judge this case by case.** The place beginners get stuck most is **"am I supposed to use this as-is or change it,"** and that is pre-sorted.

## The best explanation in it — a brain-cell budget

It explains the ceiling on how much an AI can hold like this:

> **You have 100 brain cells. Spend 70 remembering and you have 30 left to think with. It is not getting stupider — there is no room.**

So it says: **when free space drops below 20%, close the conversation and start a new one, no exceptions.** And it specifies **keeping the remaining amount visible on screen** as a habit.

That is a good rule. I was already doing it.

## But the number beside it cannot be quoted

The same passage adds: **"80 spent in conversation folds down to 3 in a document."**

That number is unusable, because **how much folds depends entirely on the kind of content.**

| Kind of content | How much it folds |
|---|---|
| Notes that are mostly *we decided X* | **A lot** |
| Code, tables, coordinates | **Barely at all** |

*Fold at 20%* is a valid rule. **Only the multiple is unusable.**

## Seven of the eight curriculum slots were already covered

Matching the curriculum against my setup: **seven of eight were already there**, mostly in a further-developed form.

That was not wasted effort. **Filling the comparison table to the end produced something else.**

## Running its scorecard over my 99 tools — two defects

The deck ships **a six-item scorecard for grading a tool you built yourself.**

I ran it over **all 99 of mine.**

**Defect one — one tool was missing its description block entirely.**

My tools carry **a name and a blurb** at the top. The AI reads that to decide *I should use this one now.*

One QA-side tool **started straight into the body with that block absent** — 560 lines of it.

What that causes: **call it by its exact name and it works; speak naturally and it never fires.** The AI has nowhere to read what the thing is for.

**This defect leaves no mark on any screen.** No error. It simply does not switch on.

The fix was small — **add two lines, name and blurb**, and leave the 560 lines untouched.

**Defect two — sixteen had grown too long.**

One scorecard item said *split anything over 500 lines.* Counting: **sixteen were over.**

## And then I broke my own adoption

The part that paid.

I adopted *score it immediately after building it.* But something was off: **I already owned three checking tools.** So why had they not caught the above?

Because **all three are the kind you have to run by hand.** And from the day the defect appeared until this sweep, **nobody ran them.**

→ So what I actually gained was **not a tool but a moment.** The tool existed; **the occasion to call it did not.**

> **When you build a new tool, score it before that task closes.**

## What I rejected and why

**A numbered folder scheme** — looks good, rejected. Adopting it requires **rewriting every path at once**, and I have been burnt before by **relative paths breaking during exactly that kind of move.** **The cost exceeds the gain.**

With a condition attached: **when I start a new workspace from blank, I apply it then.** Moving is expensive; starting that way is free.

**Calendar and mail integration** — parked. The connection does not exist, so it is not possible now. **Revisit when actually needed.**

## The detailed record starts here

**I found two of my own defects in a course that had nothing to teach me.** It is a 40-page half-day workshop deck that gets non-developers to set Claude Code up as a "second brain". Counting the curriculum against my setup, **seven of the eight slots were already strictly better.** But the deck carries a **six-item skill self-scorecard**, and running that over my 99 skills turned up **one skill with no description at all** — so it can never fire from natural speech — **and sixteen over 500 lines.** And **one of the course's rules was refuted in my environment.**

## What it is

**A half-day offline workshop deck for non-developers.** It leads with *"no design sense and no programming knowledge required"* and breaks twelve practice prompts into **copy-paste units**, each tagged: paste as-is, substitute your own value, or judge for yourself.

**The central metaphor is a new hire.** Today you got one, and **what you teach it stays in files and compounds.** So even the closing demo is modest — *"read the calendar and make this week's page in the notes app"*, **one line joining two tools in order.**

The order runs: open the workspace → number the folders → write a working manual → push it → attach the notes app → **build one skill** → connect the account.

⚠ **The original is an offline handout, so there is no link.** I also never obtained the distributed workspace archive, so **the files it supposedly contains were never verified.** The deck's own summary is the only evidence.

## The techniques — two of eight were good

**It explains context as a budget of brain cells.** *"Of 100 cells, spend 70 on remembering and you have 30 left to think with — it isn't getting dumber, there is no room."* So at 20% remaining you fold everything into a document and open a new conversation. **It even prescribes keeping the remaining budget visible in the terminal.**

**The new-hire framing has four clauses.** ⓐ you being faster at first is normal ⓑ it doesn't quit, so it compounds ⓒ **"I can't do that" is half bluff — push** ⓓ don't start it on slide decks. The last one gets its own section: **start it on a deck and it's used once; start it on a document and you use it again.**

**Two things here are worth real money.**

- **Have it score itself against the official guide immediately after building a skill.** The six-item checklist is in the deck, right after the principle *"anything you'll ask twice becomes a skill."*
- **Place the procedure document as a teaching assistant in advance.** Put the integration guide in the workspace and open with *"walk me through this guide, one step at a time."* The deck nails it down: **"the thing you are learning today is that file."**

And three unsticking tricks — **paste the whole error and keep talking until it clears**, **push back on "I can't"**, and **screenshot the screen and drag it in**. The last works especially well on console screens whose UI keeps changing.

## What broke

**The compression ratio is a metaphor, not a measurement.** *"Eighty spent in conversation folds to three in a document"* varies enormously by document type. Decision-heavy meeting notes really do fold, but **code, tables and coordinates barely fold at all.** The *"wrap up at 20%"* rule holds; **the multiplier must not be quoted.**

**The naming rule was refuted in my environment.** The deck insists *"skill names use lowercase, digits and hyphens only"*, but scanning all 99 of mine found **nine with non-Latin or uppercase names**, and **every one of them registers and fires normally.** It has promoted a **recommended convention in the official docs into "break this and it dies."**

**The bracket incident is right in principle and unreproduced in frequency.** *"One unquoted bracket voids the whole config"* — true under the YAML spec, so the warning stands. But **the pattern appeared zero times across my 99.** It may be specific to the instructor's setup.

**And the longest stretch rots the fastest.** Nearly half the deck is a ten-step screenshot walk-through of account integration, and **that console UI changes often.** The deck admits it — *"this tool is still young and the commands keep changing."* What lasts is not the procedure but the two techniques: **ask the model when you get stuck, and keep the procedure document as an assistant.** For the record, **the whole deck assumes a different operating system**, so the shortcuts and paths differ from mine throughout.

> **[도판]** In one table, someone else's defect criteria caught my defects and revealed that one of those criteria was wrong.
>
> The result of applying the course's six-item self-scorecard across all 99 of my skills. Two items produced defects, and I rejected the naming-rule item outright because the rule itself was refuted.

## Held against my own setup — two defects

**One I will fix.** A QA-side skill starts straight into its body **with no header block at all** (560 lines). So the skill list shows **its title in place of a description**, and while calling it by name works, **it never fires from natural speech.** A sibling skill has a healthy header, which made the comparison unambiguous. The fix is **adding a name and a blurb only**, leaving the 560 lines alone.

**One I will merely know about.** Of the sixteen over 500 lines, **most came from outside.** They are upstream, not mine, so **splitting them collides at the next sync.** Only the ones I wrote are candidates, and not now.

## Verdict

| What | Verdict |
|---|---|
| **Self-score right after building** | **adopt.** The tool already exists; the net gain is a **timing rule** — score it **within the same turn** the skill is written |
| Procedure doc as assistant | **already doing it.** It runs as my handoff-document pattern |
| Wrap up at 20% remaining | **already doing it.** A dedicated skill, retro files, a weekly cron |
| Numbered folder scheme | **rejected.** It needs a bulk path rewrite, and a past reorganisation broke relative paths. **Cost > benefit**<br>Reopens: when digging a new workspace from scratch |
| Calendar and mail | **hold.** Sheets and drive work; these two have no connection<br>Reopens: when calendar or mail **actually becomes** something to automate |

**I attacked my one adoption.** Three inspection skills already exist — why didn't they catch that defect? **Because all three are run on demand** — a human has to start them. And nobody did, from the moment the defect appeared until this scan. **So the net gain wasn't a new tool; it was "when does it run."**

**The lesson I paid for here: a checklist earns its keep even in material you already know.** Seven of the eight slots were already covered, and it wasn't counting the seven that found anything — **it was the ruler used to count the eight.** And ⚠ **when you borrow someone's ruler, check the markings too** — I rejected one of the six items, and without measuring it I would have pointlessly renamed nine skills that work.
