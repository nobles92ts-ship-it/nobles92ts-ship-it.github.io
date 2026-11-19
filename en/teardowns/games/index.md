# Making games

> Seven investigations into games and their tools. Code adoption, executed checks, and proposed integrations are recorded separately.

- Headline number: 7 pieces · 0 code
- Rendered page: https://aitryed.com/en/teardowns/games/
- Other language: https://aitryed.com/ko/teardowns/games/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

"Making games" collects seven pieces where I opened up other people's games, game-making tools, and game research. Taking something apart usually implies copying the good bits over, and with games that almost never worked.

## Game parts don't fit my machine

Think of car parts. However good someone else's car is, a part built to a different engine spec will not go into mine. Games are the same: the tool I build in differs from the one they built in, they work in three dimensions and I work in two, some carry a "not for commercial use" condition, and some have nothing to download at all, only pictures and a description.

Across the first five pieces, zero lines of code crossed into my own work. The sixth, Unreal Engine Skills, has not been installed either; I only ran its project-detection script in temporary folders.

## What does cross is a rule

What comes over instead is a rule. From one piece the takeaway was a single sentence, "don't nail numbers into the code," and that sentence pointed at 43 places in my own project. Parts fail because their specs differ, but "build it this way or you'll pay later" has no spec. The pieces here read better as a search for rules to learn than for things to copy.

## Once, the research deleted an item from my build list

Looking things up before building can feel like a detour, and once it turned out the other way. I believed a certain game rewarded a certain move with a slow-motion effect, so my build list said I needed a time-scaling system first. Checking the actual sources showed the reward was a different kind entirely, and the slow motion appeared in none of them. One item vanished from the list. Not building something counts as an outcome too.

## The sixth piece examines the connection to a game-making tool

[Unreal Engine Skills](/en/teardowns/games/unreal-engine-skills/index.md) guides Claude through working inside Unreal Editor. Where the first five asked whether parts could move across, this one asks where the instructions meet executable engine tools. I ran the startup script and did not verify an editor connection. The account separates what I read, what I ran, and what is still open.

## The seventh piece is a downloader for reference videos

[yoinks](/en/teardowns/games/yoinks/index.md) is a terminal tool that saves a video link as a file. I did not take its code. On a real video I confirmed that the size shown on screen differed from the file it actually downloads, and I wrote that lesson into my own script.

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

## The first five pieces exposed four barriers to moving code

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

## Inspecting the connection layer does not complete an integration

The sixth piece, [Unreal Engine Skills](/en/teardowns/games/unreal-engine-skills/index.md), contains instructions rather than the engine's tool implementation. I found three skills and exercised the hook: four conditions completed and two timed out. **Editor connectivity and game QA remain unverified.** Alongside compatibility and licensing, this shelf now records the boundary between receiving a tool and proving it can perform a live request.
