# OpenMMO

> An MMORPG one developer took all the way to live service. Opening the code showed my README-based summary was wrong in two places.

- Headline number: 2 corrections to my own summary
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/games/openmmo/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/games/openmmo/index.md
- Repository: https://github.com/Julian-adv/OpenMMO
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**One person, working with AI, built an online game that actually runs and took it to live service. The most valuable finding in this piece is not that game — it is my own mistake.**

Start with the scale. One developer, **347 days**, **116,000 lines** of code. And of 1,163 code changes, **71% carry a signature saying "worked on this with AI."**

> **[도판]** The pitch is "agents play like humans". The structure that makes it possible is this crate sharing.
>
> The real architectural invention here is shipping one Rust crate to three runtimes at once. The shared crate holds message definitions, pathfinding and world generation, and the server, the agent process and the browser all use it.

## Why "an online game, alone" is hard

Plenty of people build games alone. **Games where many people connect at once** are a different animal.

A single-player game only has to be self-consistent inside one computer. An online game needs **dozens of screens telling the same story at the same moment.** Where I saw you standing, you have to be. What I handed you has to arrive. And it all has to stay consistent when someone's connection drops and comes back.

The world here is **32 square kilometres** — over **260,000 tiles**.

## And my summary of it was wrong in two places

This is the actual subject of the piece.

I first wrote a summary **having read only the front-page description.** Then I opened the code. **Two things were not as described.**

**Wrong thing one — "the AI plays like a human" is not what happens.** The marketing reads as though AI characters play under the same rules as people. In the code, the AI side holds **several privileges of its own**.

| What the AI character gets | What that means |
|---|---|
| Doesn't collide with walls | It passes through what stops a person |
| Paid daily | It is handed what a person must earn |
| Can force a trade window open | For a person, the other side must accept |

So they are **not playing on equal terms — they are playing with an advantage.**

## I learned more from that mistake than from the repository

I was wrong twice, and **wrong in both directions.** Some parts I wrote up as more impressive than reality, others as less.

So I wrote a rule:

> **A description document is the plan. The code is the state. Don't read a plan as a state.**

The author didn't lie. Descriptions are mostly **written before the building and rarely updated after.** Documents and code drifting apart is the natural condition, and **the reader has to price that in.**

## One structure worth stealing — "two places share one brain"

There is a technical takeaway.

A classic failure when putting AI characters in a game: **the game and the AI controller each run their own calculation and disagree.** The game says *blocked*, the AI says *walkable*, and the AI character shudders against a wall forever.

This developer made disagreement **structurally impossible**. The judging code exists **once**, and both sides call it. One copy cannot contradict itself.

I took the concept but did not build it — **the work costs more than it returns for me right now.**

## The code can't come across

The licence says **"not for commercial use."** So copying code was never an option. I looked at structure only.

## Last — the qualifier that must ride along with an impressive number

"71% of commits co-authored with AI" and "zero instances of the dangerous pattern" are striking numbers. But **reading them as "this is what using AI gets you" is wrong.**

Most people using the same tools do not produce those numbers. What produced them was not the tool but **the discipline this person imposed on themselves.** Cite the numbers with that attached, or don't cite them.

## The detailed record starts here

**The most valuable result in this piece isn't about the repository, it's about my summary of it.** A Rust + Svelte MMORPG **built by one developer, largely by prompting, and taken to live service.** 116,000 lines, 1,163 commits, 347 days, and **71% of commits carry an AI co-author trailer.** But the summary I wrote from the README before opening the code was **wrong on two counts** — and correcting them taught me more than the repository did.

## What it is

**An MMORPG one developer built over 347 days and actually runs in production.** Rust on the server, Svelte and WebGPU-only on the client, and a **binary** protocol rather than JSON. The world is 32km² across 262,144 tiles.

**The quality indicators are striking.** **Zero `unwrap`, zero `unsafe`** in the server code. 270 tests. **825 of 1,163 commits (71%) carry an AI co-author trailer**, and the substance of this repository is that the result still holds that much discipline.

⚠ **The licence is non-commercial.** Commercial use is out, and **borrowing code is not allowed.** Design reference only.

## What broke — my summary was wrong twice

**Correction 1 — "the model connects and plays over a tool protocol" is not true.**

Two related crates appear in the dependency declaration. But **searching the entire source gives zero usages.** **It compiles and never runs a line.** The related port in the config example is commented out, and **the config struct has no such field at all.** The tool list in the docs is **a design sketch**, and the same document marks it **"priority 4, not started."**

**The actual interface is far simpler** — a JSON action schema with seven entries (speak, attack, move, revive, propose trade, open trade window, wait). The model picks one of them.

**Correction 2 — "the server can't tell humans from agents" is the exact opposite of true.**

There is a dedicated authentication message, and the result is **branded permanently onto the session as one boolean flag.** That flag then **changes the game's rules in at least six places.**

| Where | Effect | Character |
|---|---|---|
| Collision | agents **skip it** — effectively walking through walls | **privilege** |
| Daily wage | only agents receive gold | **privilege** |
| Trade window | only agents can force a trade window onto someone's screen | **privilege** |
| Trade proposals | proposals from humans are refused | restriction |
| Monster spawning | spawning is suppressed near agents | optimisation |

**Half of it is right** — the transport layer really is the same. Same port, same frames, same messages, same pathfinding code. **But the other half of "no privileged API" was sitting inside one boolean.**

> **[도판]** The two corrections point opposite ways. Wrong in one direction is a bias; wrong in both is simply not having looked.
>
> The summary written from the README compared with what opening the code showed. Both corrections point in opposite directions: one claimed a feature that doesn't exist, the other denied a privilege that does.

**What matters is that the README didn't lie.** The document said it was **a design document**, and the not-started marker was inside the same file. **I read a design document as a status report.** And I stretched *"the transport layer is the same"* into *"the rules are the same."*

**That the two point in opposite directions matters diagnostically.** Wrong in one direction would be expectation bias; **claiming what isn't there and denying what is** means I simply **never opened it.**

## Held against my own setup

**I can't take the code** — the licence is non-commercial, so **borrowing is out.** Design only.

**The most instructive part is the crate sharing.** Pathfinding and world generation **run from the same code across server, bot and browser.** In my QA automation, the logic the bot judges with and the logic the game runs are **separate** — which is exactly how you get *"the bot thought it was passable and the game blocked it."* **Make it one body of code and that class of mismatch cannot occur.**

⚠ But **it doesn't transfer directly.** The game engine and the bot's runtime differ, and unifying them means changing the game side. **Cost exceeds benefit.**

**The combination of 71% AI co-authorship and zero `unwrap`** also stays with me. It is a counterexample to *"AI-written code is lower quality"* — but ⚠ **this is the product of one developer's discipline, not a property of the tool.** Same tool, different person, different numbers.

## Verdict

| What | Verdict |
|---|---|
| Borrowing code | ⛔ **not allowed.** The licence is non-commercial |
| **One body of code across runtimes** | **concept adopted.** It blocks bot/game verdict mismatch at the source<br>⚠ applying it now is cost > benefit |
| **"Never read a design document as status"** | **adopt — as a rule.** I got it wrong twice here |
| 71% AI co-authorship · zero `unwrap` | **qualify when citing.** That number came from a person's discipline, not a tool |

**The lesson I paid for here: a summary written from documentation flips when you open the code.** And it flips **in both directions.**

And ⚠ **it is better to keep a wrong summary as a correction than to delete it.** Delete it and the record reads *"I knew this correctly all along"*, when in fact **I held two wrong beliefs right up until I opened the code.** Next time I am about to judge from a README, this record is what stops me.
