# Making games

> Different engine, different dimensions, different licence — not one line of code crosses. What crosses is a rule that shrinks to one sentence.

- Headline number: 5 written · 0 code
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/games/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/games/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**This shelf holds what I found when I opened up other people's games, game-making tools, and game research. Five pieces so far.**

One thing up front. "Taking something apart" usually implies **copying the good bits over**. Here that almost never works.

## Game parts don't fit my machine

Think of car parts. However good someone else's car is, **if the engine spec is different, that part will not go into mine.**

Games are the same. The tool I build in and the tool they built in are different. They are in three dimensions and I am in two. Some carry a **"not for commercial use"** condition. And some have **nothing to download at all** — pictures and a description, no program.

So across five pieces, the amount of code that crossed into my own work is **zero lines**.

## What does cross is a sentence

Something else comes over instead. **Not a part — a rule.**

From one piece the takeaway was a single sentence: *don't nail numbers into the code.* That one sentence pointed at **43 places in my own project.**

Parts don't fit because specs differ. **"Build it this way or you'll pay later" has no spec.**

So the pieces here read better as **"what rule can I learn"** than **"what can I copy."**

## Once, the research deleted an item from my build list

Looking things up before building can feel like a detour. I got the opposite once.

I believed a certain game rewarded a certain move with **a slow-motion effect**. So my build list said **"need a time-scaling system first"** — I couldn't add the reward without it.

Checking the actual sources: the reward was **a different kind of reward entirely**, and the slow-motion **appeared in no source at all.**

One item disappeared from the list. **Not building something is also an outcome** — it just never shows up in a tally of things built.

## The detailed record starts here

Where game work gets taken apart: effect sandboxes, MMO servers, 3D asset generation, the combat design of shipped action games.

Here **the code almost never crosses.** Web GLSL doesn't move to Unity; a Three.js 3D plane doesn't move to 2D URP. So this bucket gets read differently from the start — not for an implementation, but for **a rule that shrinks to one sentence.**

## One, and that sentence pointed at 43 places in my own code

[Elemental Sandbox](/en/teardowns/games/elemental-sandbox/index.md) yielded exactly this:

> An ability instance remembers only a seed and ratios. Metres, seconds and radians are recomputed from settings every frame.

That's why the sliders keep working while the game is paused. No dimension is frozen into the instance, so changing a value mid-flight is simply re-read on the next frame.

My Unity project was built the exact opposite way. `yield return new WaitForSeconds(pattern.telegraphTime)` freezes the telegraph duration the moment the coroutine starts, so changing the value mid-play never reaches a telegraph already running. Counted across the project: **43 uses of `WaitForSeconds` against 22 fraction loops.**

**Not one line of effect code came over, and yet the character of 43 places in my code got decided.** That's the kind of return to expect from this bucket.

## Read the licence in two places

The same repository declared MIT in LICENSE and, in the README, said something else: "provided as-is for the purposes of this project." At the time of reading it was five days old with one contributor.

**Treat it as a textbook, not a dependency.** Game repos are short-lived, which makes that distinction matter more here than anywhere else.

## At five pieces, there were four reasons the code doesn't cross

At one piece I read it as *"different engine."* At five, **the place it gets blocked was different every time.**

| Subject | Where it got blocked | What was left |
|---|---|---|
| [Elemental Sandbox](/en/teardowns/games/elemental-sandbox/index.md) | different engine, different dimensions | the rule **don't freeze dimensions** — it pointed at 43 places in my code |
| [OpenMMO](/en/teardowns/games/openmmo/index.md) | **the licence is non-commercial** | the idea of sharing one body of code across runtimes |
| [Hunyuan3D-WorldClaw](/en/teardowns/games/worldclaw/index.md) | **there is no code at all** | intermediates in an inspectable form · parameterise as a sum of named variables |
| [Dynasty Warriors Origins](/en/teardowns/games/dynasty-warriors-origins/index.md) | a shipped game, so there is no code | duels as a **shared see-saw gauge** · morale as the deciding statistic for AI combat |
| [Recent Unity releases](/en/teardowns/games/unity-releases/index.md) | it's release notes, not code | **never upgrade a moving version mid-development** |

**Four different blockers and the same outcome** — every one of them shrank to a sentence. Which means this bucket should be read not as *"the code won't come across"* but as **"I go there looking for a sentence in the first place."**

## And once, the research deleted an item from the build list

The Dynasty Warriors piece did that. I believed the reward for a perfect dodge was slow motion, so I concluded **a time-scale arbiter had to be built first** — and cross-checking the sources showed the actual reward is **a resource gain**, with slow motion **confirmed nowhere.** A prerequisite vanished whole.

**Count the value of benchmarking only as "N things to take" and this line goes missing.** Something you no longer have to build is a result too, and it's the kind that never lands on a list — so **it disappears unless you count it deliberately.**

The making side lives in [MOON Studio](/en/built/moon-studio/index.md). This is **the record of taking other people's games apart**; that is what came of it.
