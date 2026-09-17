# eli5 — a plugin with zero lines of code

> One instruction turned into a plugin — explain it to me like I am five. Opened up, it is three files, 865 bytes, zero lines of executable code — and in 21 days I called it exactly once.

- Headline number: 865 bytes · 1 run
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/eli5/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/eli5/index.md
- Repository: https://github.com/anthropics/claude-plugins-community
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Throw it something you don't know and it explains it again for someone who knows nothing of the field. The name `eli5` is short for *explain like I'm 5*.**

It is not a program you install on a computer. Think of it as **a note left for the AI assistant I already use, saying "answer like this from now on."** The note contains one sentence, and that one sentence changes the eye level of every answer.

> **[도판]** What this tool sells is not accuracy but a lower doorstep — letting someone who knows nothing get past the first page.
>
> How eli5 works. On the left you ask a one-line question about something you do not understand; passing through eli5 in the middle; on the right an HTML page comes out with big visuals and few words. The answer arrives as a picture, not as paragraphs.

## The difference between a hard answer and an easy one is not knowledge — it is the starting point

The same question has two answers. One is written **in the language people who already know use**; the other is written so that **someone who knows nothing can follow from the first line.** Both are correct. What differs is where they start.

- The hard answer **assumes you know the terms.** One unknown word and everything after it is inaudible.
- The easy answer **unpacks a term before using it**, leans on things you already know, and moves one step at a time.

All this tool does is move that starting point. It does not add new knowledge — **it makes the same knowledge get said again from where a newcomer stands.**

## What installs is not a program but three sheets of paper, weighing about one text message

Opened up: three files, **865 bytes** in total. That is hard to picture — it is about the size of a short text message. A single photograph is typically thousands of times bigger.

And of the three, **not one line of executable code.** All three are paper with words on them.

| What is in it | What it does |
|---|---|
| A note of instruction | *Explain as if to someone who knows nothing* — effectively the entire product |
| A name tag | Who made it and which version |
| One line of usage | A single example |

Normally "installing a tool" implies **something new starts running.** What increased here is **one sentence of instruction that the AI reads.**

## The trigger is decided by prose, not a person

This is the most instructive part of the plugin.

Normally I have to call it by hand — type `/eli5 what is DNS`. But the note carries a second condition. **"When a person asks for a simple explanation, answer this way even if they do not call you by name."**

So the switch is **a sentence, not a button.** Say *explain that simply* and the AI reads the condition and answers in this mode on its own.

## And yet in three weeks I used it exactly once

This is the real content of the piece.

Three weeks after installing it, I swept my entire working history and counted.

- The tool's name appears in **944 records.**
- The number of times I actually called it: **once.**

The gap between 944 and 1 exists because **the two count different things.** 944 is not usage — it is the mark left by **the blurb on that note being loaded automatically every time I start the AI.** It loads whether I use it or not.

And that one invocation was *let's see what this produces.* **I was not using the tool, I was looking at it.**

| | Over three weeks |
|---|---|
| Cost paid | **944 times** (loaded automatically, every session) |
| Benefit collected | **0 times** (never actually used) |

## The tool is not at fault — the thought of calling it never arrived

My first reaction was *I installed something useless.* On a second look, no. The thing was fine. **In the moments when an explanation was needed, its name simply never surfaced.**

There are three boxes between owning something and using it.

1. Did I install it
2. **Did the thought of calling it arrive**
3. Did I switch it on

I did 1 and never did 3, and the blockage was at 2. And **2 cannot be solved from the tool's side however well it is built** — it happens inside a person's head.

## So I kept it and changed how it gets called

Two options: delete it, or make it fire without being called.

Deleting was not the answer, because **the cost was already being paid** — that one line loads every time until it is deleted. Not using it means **paying the cost and collecting nothing.**

So I went the other way and added a line to my standing rules — **when asked to explain something, answer in this mode without being called by name.** The switch was **taken out of my memory and bolted onto the rules.**

## What I still do not know

Left here honestly.

- **The effect of the change is unmeasured.** I changed the rule today, so there are zero days of comparison. A fair comparison needs the same 21 days that came before.
- **"Once" is a floor, not an exact figure.** Cases where I asked for the same thing in a sentence without naming the tool are not caught by this method.
- **I did not judge the quality of the output.** This piece is not a record about whether the tool is good — it is a record about **the fact that I did not use it.**

## The detailed record starts here

**"Explain it to me like I'm five" — that one instruction, turned into a tool.** The name `eli5` is short for *explain like I'm 5*. Throw it a topic you know nothing about — "what is DNS", "how does this pipeline run" — and it explains it again **for someone who knows nothing of the field**: unpacking each term before using it, leaning on things you already know.

Delivering that explanation as **a single HTML page with big visuals and very few words**, rather than as a block of prose, is the form this tool picked. **Being easy is the goal; the picture is the means** — invert the two and you get difficult material drawn as a diagram. Installing it is one plugin added to Claude Code.

So I opened up what actually gets installed. **Three files, 865 bytes, not one line of executable code.** What stood out after that was not the thing itself but my own record of using it — in 21 days, **its name rode along in 944 of my session logs and it actually ran once.**



## What it actually is

**What gets installed is one skill, and inside it is one sentence.** The package holds this and nothing more.

| File | Size | Contents |
|---|---|---|
| `skills/eli5/SKILL.md` | 331 bytes | name and blurb, a heading, **one sentence of instruction**, `Topic: $ARGUMENTS` |
| `.claude-plugin/plugin.json` | 328 bytes | name, version `1.0.0`, author, MIT, five keywords |
| `README.md` | 206 bytes | one example (`/eli5 how does DNS work`) and what comes out |

The instruction reads: *explain this to someone who knows nothing about it, as an HTML page with big pictures and very few words.* That is the tool. It ships from `anthropics/claude-plugins-community`, listed under `category: learning`.

## The wiring is a blurb, not code

**Even the trigger is prose.** The skill's `description` states two conditions — *when the user types `/eli5 <topic>`, or asks for a dead-simple picture explainer.* The first is a person calling it by hand. **The second says: fire even when nobody calls you.**

That is the most useful thing in the package. It is the exact inverse of [the teardown where a rule lived only in a README and had zero runtime effect](/en/teardowns/harness/ip-as-logo-skill/index.md). There, a well-written rule sat **where nothing reads it** and died. Here, one sentence sits **where it does get read** and lives. What transfers is not the quality of the sentence but its **location**.

## What the teardown found — 944 mentions, one run

I swept the full session history (2,293 `.jsonl` files). **The string `/eli5` appears in 944 of them.** That is not evidence of use — it is the mark left by the skill blurb being **loaded into every session automatically**. Real invocations are recorded differently (a `<command-name>` marker). Counting those: **1**.

And that one run said *"show me what this produces."* **I was looking at the tool, not using it.**

> **[도판]** Between installed and used there is one more box: did it occur to me to call it.
>
> A comparison over 21 days. 944 session logs carried the plugin name, while the actual run count was 1, and that run was a check of what it produces rather than real use.

**The method matters here.** 944 is a ceiling, not usage. The run count of 1 is a floor — asking for the same thing in plain words, without the slash, does not get caught this way. **The two numbers are not measuring the same thing**, which is why reading it as "used 944 times" gets it exactly backwards.

## Held against my own setup — so today I made it standing

The verdict is **adopt**. Not because the tool is good. The diagnosis came first: **the cost of calling it was higher than the benefit.**

- One run in 21 days. Not because the thing is weak, but because its name never surfaced at the moment an explanation was needed.
- So I changed how it gets called — **asking for an explanation now triggers this style without anyone typing the slash.** One line in my standing rules.
- The cost was already sunk. That blurb loads every session anyway. **Leave it unused and you pay the cost and get nothing back.**

[Across the twenty teardowns in this section](/en/teardowns/harness/index.md) the recurring verdict has been "I already had it." This time the diagnosis landed on something **I installed myself, 21 days ago.** Not someone else's warehouse. Mine.

## What I did not do

- **The standing version has zero days of data.** I changed it today, so there is nothing to compare against. A fair comparison needs another 21 days.
- **I could not separate plain-language calls from slash calls.** That is why the run count of 1 is a floor.
- **I did not judge the output quality.** I saw one page come out; I never built the same explanation both ways and compared them. This teardown is a record of not using something, not a verdict on its worth.
