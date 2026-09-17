# Wuxia game (working title)

> An action RPG won by reading the enemy's pattern rather than out-reflexing it. The only slot in the studio still moving.

- Headline number: 44 forms
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/wuxia/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/wuxia/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**An action game won by *reading the enemy's pattern* rather than out-reflexing it. The only slot in the studio still moving.**

## The one thing at the centre

Most action games are won by **reacting fast.** The enemy attacks, you dodge or block. **Practise, your hands get quicker, you win.**

This is different.

Just before an enemy attacks, **a telegraph appears showing what *kind* of attack it is.** You read it and **pick the matching counter.**

| What you picked | Result |
|---|---|
| **The right kind** | **Zero damage** + the enemy is **frozen for 1.6s** + **double** damage returned |
| The wrong kind | **Only 60%** lands |
| Nothing | **All of it lands** |

The gap between the first two rows is large. **Pick right and you win almost for free; pick wrong and you lose ground.**

## So what the player accumulates is knowledge, not reflexes

That is the whole design.

| | A typical action game | This one |
|---|---|---|
| What grows | **Reaction speed** | **What you know** |
| How you get stronger | Practice makes your hands faster | **You come to know the enemy's patterns** |
| A new enemy | Hard | **Unknown → you learn by taking hits** |
| The second meeting | A bit better | **Knowing it, you barely get hit** |

Which makes **meeting the same enemy again the fun part.** You get battered, then once you know the pattern **you turn everything aside cleanly.**

Scale: **44 techniques, 26 artefacts.**

## Written up in six parts

One project, and each part has a completely different problem. **Mixed into one piece nothing survives.**

| Part | What the problem is |
|---|---|
| **Design** | Turning *win by reading the pattern* **into a rule** |
| **Spec** | The artifact of those rules — **the actual values** |
| **World** | Where factions, identity and story **become systems** |
| **Client** | Where the code handling **time and hit resolution** leaks |
| **Art** | **The real bottleneck building solo is not code** |
| **QA** | **What a passing test is *not* looking at** |

## This game is where the teardowns land

The rules I take away from opening other people's work **land here.**

Take things apart only and it ends at *nice.* **It has to be attached to something before you learn whether it is actually usable.**

And attaching it, **most of it does not fit.** That fact goes back into the teardown piece.

## Not yet

Written down honestly.

**It has never been playtested.**

The rules above are all verified **only as far as "does the design hold together."** **Whether it is fun, nobody has looked at.**

And **the "60% on a wrong pick"** is not a measured number either. It came from **"it has to differ from a clean hit."** Measured, it will change.

## The detailed record starts here

Unity 6 · URP · toon shading. **Forty-four forms and twenty-six artifacts.** You win by **reading the enemy's pattern**, not by reacting faster.

When an enemy starts a form, a telegraph appears. Read its lineage, answer with the countering one, and you take **zero damage while the enemy is stunned for 1.6 seconds and takes double back.** The wrong lineage takes 60%; no response takes a clean hit. So what the player accumulates in this game is not reaction speed — it's **knowledge.**

## Six parts

One project, but the problems differ by part. Mixed into one piece, none of them survives.

| Part | The problem it has |
|---|---|
| [Design](/en/built/moon-studio/wuxia/design/index.md) | Turning "win by reading the pattern" into an actual rule |
| [Spec](/en/built/moon-studio/wuxia/spec/index.md) | The rule itself — one page of the form system |
| [World](/en/built/moon-studio/wuxia/world/index.md) | Where factions, identity and chapters cross into systems |
| [Client](/en/built/moon-studio/wuxia/client/index.md) | Where code handling time and hit resolution leaks |
| [Art](/en/built/moon-studio/wuxia/art/index.md) | Building solo, the real bottleneck isn't code |
| [QA](/en/built/moon-studio/wuxia/qa/index.md) | What a passing test isn't looking at |

**Client** is here and absent from the two empty slots — that part only exists where there is code. And one more: **spec is split from design.** Design is *why it was decided that way*; spec is *what was decided.* Keep them in one document and the reasoning gets interleaved with the rules — so when a single value changes later, nothing tells you what else has to be read.

## This game is where the teardowns land

The rules that come out of [Teardowns](/en/teardowns/) need somewhere to land, and this is it.

The Elemental Sandbox teardown produced exactly one rule worth taking: **record dimensionless, resolve every frame.** Measuring this project then found **43 `WaitForSeconds` calls against 22 fraction loops** — built precisely the wrong way round.

Telegraph duration is this game's difficulty dial, so that means **turning the dial doesn't reach any telegraph currently in motion.** The way the game gets balanced was blocked at the mechanism level.

The mark it left is still visible in [Spec](/en/built/moon-studio/wuxia/spec/index.md). The counter window computes its end time once, when it opens, so **lengthening a telegraph mid-run closes the counter window early.** It was left unfixed on purpose, with the condition for revisiting it written down: "when balancing work that actually adjusts telegraph length at runtime comes up."

That loop — take something apart, measure my own thing, change it, show the diff — is the part of this site I actually care about. Teardowns alone are commentary; measurements alone are bragging.

## Not yet

It has never been playtested. Everything above is verified only as far as **does the design hold together**; **is it fun** has not been looked at by anyone. The 60% figure for a wrong answer comes from "it must differ from a clean hit," not from a measurement.
