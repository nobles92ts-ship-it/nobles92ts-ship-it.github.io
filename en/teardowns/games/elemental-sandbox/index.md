# Elemental Sandbox

> The effects are the least valuable part. One rule came across — record dimensionless, resolve dimensions every frame.

- Headline number: 1 rule → 43 places
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/games/elemental-sandbox/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/games/elemental-sandbox/index.md
- Repository: https://github.com/achrefelouafi/LinearAbiltyCastingThreeJS
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A playground for building the flashy effects in a game where you can watch them and adjust the numbers at the same time. I took zero lines of code from it, and one sentence that sent me to 43 places in my own project.**

When fire bursts or lightning strikes in a game, that's an "effect." Anyone who builds them fights the same problem: **it's over in half a second, so you cannot see what's wrong with it.**

What this person built is not a game. No enemies, no health. It is **a workshop where the effect freezes mid-flight and you adjust its size and speed while looking at the frozen frame.**

> **[도판]** Every structural choice in this repository comes from one requirement — freeze an effect mid-flight and fix its silhouette, palette and timing while looking at the still.
>
> Editing while paused works because three things hold at once: one settings object is the sole owner of state, instances remember only ratios and a seed, and pausing is a zero-length frame rather than a stopped loop.

## Why adjusting numbers on a frozen frame is hard

That may not sound impressive. Here is an analogy.

Say you photographed a firework. The photo is still, so you can look at it. **Now make that firework twice as big.** You can't. You have to fire another one.

Most game code works exactly like that. Pause it and **you can look but not change**; to change anything you restart from the top. So "what if it were a bit bigger" a hundred times means a hundred restarts.

In this workshop, **raising the size while paused makes it bigger right there.** No restart.

## That works because it refuses to remember numbers

This is the core, and it is everything I took.

Say one ice spike is on screen. Normally you build it like this:

- **The usual way**: the spike remembers its own size — *"I am 3 metres."*
- **This workshop**: the spike remembers **only a ratio** — *"I sit at 30% along the line."*

The difference shows when you change total length to 10 metres in the settings.

| | Remembered "3 metres" | Remembered "30% along" |
|---|---|---|
| Change the setting | Still 3 metres. Doesn't follow | **Recomputes against the new length** |
| To fix it | Rebuild from scratch | It just changes |

So **no real length, time or angle is stored at all** — they are recomputed from the settings on every frame. The one real value it does store is *when it was born*, and that is not a dimension but **an event**, so it never needs to change.

## I didn't trust the docs — I ran it

I cloned it and ran it locally. One thing got in the way: **if the window wasn't on screen it drew no frames**, so capture kept failing. I worked around it by calling the draw loop directly, one fixed step at a time.

That let me hold the clock exactly still, and this came out:

| | Elapsed | Height | Tilt |
|---|---:|---:|---:|
| Before | 13.95 | 3.1 | 0.42 |
| After | **13.95 (identical)** | **7.44** | **0.97** |

Not one tick of time passed and the shape changed. **The claim, confirmed with my own eyes.**

## Then I held that ruler against my code and found 43 places facing the wrong way

This was the part that stung.

I took the sentence — **"don't store real sizes, store ratios"** — and swept my own project. **43 places were built exactly backwards.**

This is why taking other people's work apart pays. The sentence itself matters less than the fact that **the sentence becomes a ruler that measures your own thing.**

## I didn't take the code — the spec doesn't match

If it's that good, why not port it? Because I can't.

Legally the licence is permissive. The obstacle is **technical spec**. This runs in a browser in three dimensions; what I build runs elsewhere in two. **Different engine, different dimensionality.** There is no slot for the part.

## One more thing this person did well — they wrote down what they hadn't done

The last thing I took isn't technique, it's **posture**.

They put two things in the repository alongside the code:

1. **Four reference images they were aiming at** — a record of *what this was tuned against*
2. **Seven "known rough edges"** — the weaknesses of their own work, written by them first

The second is rare. Most people show only what went well. **Writing the weaknesses first means nobody gets misled.** I write mine the same way.

## The detailed record starts here

**Not one line of effect code came over, and one sentence decided the character of 43 places in my own code.** The showy part of this repository is web-only and doesn't reach my engine. What crossed is a single rule: **"an instance remembers only a seed and ratios; metres, seconds and radians are recomputed from settings every frame."** Holding that up against my project — **it was built exactly the opposite way.**



## What was built

**A skillshot-effect playground that runs in a browser.** A character stands on a floor; press a key and a ground reticle tracks the mouse; click and it fires. **It isn't a game — no enemies, no health.** The single purpose is **"look at the effect and turn the numbers."**

And the headline claim was true. **"All generated in code"** — cloning and checking exhaustively, there are ten binaries and **not one of them is for an effect.** No sprite sheets, no flipbooks, no effect textures.

| What | How it's made |
|---|---|
| Ice crystals | procedural geometry |
| Lightning | **one** ribbon strip placed by a vertex shader |
| Meteor | a sphere carved into fracture faces on the CPU |
| Beam | a parametric tube drawn three times at three radii |
| Reticles, scorch marks, lava cracks | all distance-field + noise shaders |
| Smoke, embers, debris | GPU particles — silhouettes procedural too |

It has **two** runtime dependencies. And the repository was **five days old, 18 commits, one contributor.**

## Why the sliders work while paused

Because the three things in the diagram hold at once, and the second is the heart of it. **What a single ice spike remembers contains no metres, no radians, no seconds.** Its position along the line is a ratio, its lateral offset is a ratio, and the rest is a handful of random numbers. **The one real unit it stores is its time of birth** — because that's an event, not a dimension.

So every frame, `update()` multiplies those out against the settings object again. **Pull the height slider and an ice field already standing grows.**

**The handling of values that can't be expressed that way is good too.** Four parameters — facet count, bend and the like — **can't be expressed as position and scale multiplication** and have to be baked into geometry, which normally makes them "constants that need a restart." The author hashes just those four into a string key, **rebuilds wholesale only when it changes, and carries the instance's seed and birth time across** — new shape, same identity.

And the reasoning is in a comment. **"A crystal is 108 triangles; rebuilding is cheaper than approximating."** A case of something that was "too expensive" **being opened up by actually measuring the cost.**

## I ran it myself

Rather than trusting the docs I cloned it and ran it locally. Capture kept failing because the browser doesn't paint when its window isn't on screen — so **I called the frame loop directly at a fixed step instead.** The side effect was **a deterministic timestep**, which made the following check possible.

I fired the ice ability, advanced 54 frames, paused, and — **without letting a single tick of time pass** — changed three settings values and drew three more frames.

| | elapsed | height | lean |
|---|---:|---:|---:|
| BEFORE | 13.95 | 3.1 | 0.42 |
| AFTER | **13.95 (identical)** | **7.44** | **0.97** |

**The claim held.** With elapsed time exactly equal, **crystals already standing grew taller and leaned further out.** The smoke column, the snow particles and the character pose are pixel-identical — **the simulation didn't re-run; the same instant was re-interpreted at new dimensions.** Draw calls matched too, 115 in both frames.

**And measurement diverged from self-reporting.** Idle draw calls matched at 32, but **with the ice field standing mine ran 95–115 against a self-reported ~69.** A difference in capture timing and resolution — **the self-reported figure can't be quoted as-is.** The slider count came out at 918 against a claimed 938, off by 20.

## Then I held it against my own code

> **[도판]** One sentence came across, and it pointed at 43 places.
>
> Counting every place my project handles time: 43 freeze the value at start, and 22 re-read it every frame.

The rule that transferred is this one.

> **An ability instance remembers only a seed and ratios. Metres, seconds and radians are recomputed from settings every frame.**

My wuxia game project is built **exactly the opposite way.** When a boss produces a form, **the telegraph duration freezes the moment the coroutine starts.** Changing that duration mid-play **never reaches a telegraph already running.**

Counted across the project: **43 places freeze at start, 22 re-read every frame.**

**Not one line of effect code came over, and yet the character of 43 places in my code got decided.** That's the kind of return to expect from this bucket.

## Read the licence in two places

**Porting the code is rejected.** Legally it's free, but web shaders and a 3D-plane assumption mean **there's nothing to move into my 2D pipeline.**

And **taking it wholesale is risky.** The same repository declares a permissive licence in its licence file and **says something different in the README — "provided as-is for the purposes of this project."** The bundled character models and environment probe are only noted as **retaining their original licences.**

**Treat it as a textbook, not a dependency.** A five-day-old repository with one contributor. Game repos are short-lived, which makes that distinction matter more here than anywhere else.

## One last thing this repository did well

**It ships four reference stills in the repository root** — a record of what it was tuned against. And the README lists **seven "known rough edges" the author wrote about their own work**: alignment artifacts, the flat-floor assumption, an empty pass.

The most portable techniques here are **dimensionless recording, the zero-length frame, and that last one** — because they're **design rules independent of engine and language.** The rest is work you only have to do because the engine is manual, and **its value collapses in an environment where the engine already does it for you.**
