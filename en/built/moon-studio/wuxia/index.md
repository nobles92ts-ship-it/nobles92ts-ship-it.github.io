# Wuxia Unity prototype

> Design, implementation, and verification records from the Unity prototype with 44 forms and 26 artifacts. Its design also informed MukGeom and ManInJeok.

- Headline number: 44 forms
- Status: wip
- Rendered page: https://aitryed.com/en/built/moon-studio/wuxia/
- Other language: https://aitryed.com/ko/built/moon-studio/wuxia/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

The Wuxia Unity prototype is the first test build of a wuxia game won by reading an opponent's patterns. These records cover the design of 44 forms and 26 artifacts, the problems met during implementation, and how the game was verified.

The design later informed the 2D MukGeom and crowd-combat ManInJeok prototypes. The Unity measurements and combat rules below belong to the original prototype; they are not current measurements of those two games. See [MOON Studio v3](/en/built/moon-studio/index.md) for the current production process.

## You read the telegraph and pick the counter

Most action games reward fast reactions. The enemy attacks, you dodge or block, and with practice your hands get quicker and you win more.

Here, just before an enemy attacks, a telegraph appears showing what kind of attack it is. You read it and pick the matching counter. Pick the right kind and you take zero damage, the enemy freezes for 1.6 seconds, and you return double damage. Pick the wrong kind and only 60% of the hit lands; do nothing and all of it lands.

Choosing right wins almost for free, and choosing wrong costs you. That gap is the heart of the design.

## What grows is what you know

The thing a player builds up in this game is knowledge of the enemy's patterns. A new enemy is unknown, so you learn by taking hits. By the second meeting you know the pattern and rarely get touched.

That makes meeting the same enemy again the fun part. You get battered at first, and once you know the pattern you turn everything aside cleanly. The scale is 44 techniques and 26 artifacts.

## Written up in six parts

It is one project, but each part has a completely different problem, and mixed into one piece nothing survives.

Design asks how to turn "win by reading the pattern" into a rule. Spec holds the rules as they actually are, with the values as decided. World covers where factions, identity and story become systems. Client looks at where the code handling time and hit resolution leaks, Art at why the real bottleneck for a solo builder is not code, and QA at what a passing test is not looking at.

## This game is where the teardowns land

The rules I take away from opening other people's work land here. Take things apart only and it ends at "nice"; attach it to something and you find out whether it is actually usable.

Attached to a real game, most of it does not fit, and that fact goes back into the teardown piece.

## Not yet

The game has never been playtested. The rules above are verified only as far as whether the design holds together, and nobody has yet looked at whether it is fun.

The 60% figure for a wrong pick is not a measured number either. It came from the requirement that a wrong pick must differ from a clean hit, and once measured it will change.

## The detailed record starts here

This article and its six subject pages preserve **the Unity prototype's records**. They are neither the current production organization nor current performance measurements for MukGeom or ManInJeok. The original remains a design reference and rollback path.

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
