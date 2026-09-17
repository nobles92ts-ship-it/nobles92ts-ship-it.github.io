# World

> When the setting is decoration, the systems are left as bare numbers. Here factions become collectibles and identity becomes a stat.

- Headline number: 7 categories
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/wuxia/world/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/wuxia/world/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**When the setting is decoration, the systems are left as bare numbers. Here factions become collectibles and identity becomes a stat.**

## The problem — a setting that floats free

Build a world for a game and this is the easy outcome:

| | The setting | The actual game |
|---|---|---|
| What exists | Seven factions, a system of standing, a history | **You hit enemies and gain levels** |
| The connection | **None** | |

At which point the setting is **nice to read and optional.** And in practice nobody reads it.

So this game **decided first what each element of the setting *becomes* in the systems.**

## The seven factions are a supply line, not a backdrop

There are seven factions, and **what each one supplies** is fixed.

Which turns a faction from **lore into a list.** Once *this art comes only from that faction* holds, the player **has a reason to get involved with them.**

> **Attach a setting element to something obtainable and a reason to read it appears.**

## Identity is not lore, it is a 0–100 number

The cleanest connection here.

In wuxia, standing matters — orthodox or heterodox, a great house or nobody.

Normally that lives **only in the story.** The dialogue changes slightly.

Here it is **a number between 0 and 100.** Which gives:

| When the number is | What changes |
|---|---|
| High | Some places open, others close |
| Low | The reverse |
| **According to your actions** | **It moves** |

The moment it is a number it becomes **something you can gate on and something a player can manage.** *My standing is at this level, so I cannot do that* becomes a real thought.

## Chapters hold the unlocks

Each chapter of the story **holds what it opens up.**

Which makes **advancing the story and the game widening the same act.**

Separate them and **skipping the story still advances the game**, at which point **most players skip the story.**

## Not yet decided

The last section of this page is **"not yet decided."** That it exists matters.

**The most dangerous thing in a spec is a place that is undecided and looks decided.** A reader **assumes it is settled and builds on top.**

**Writing it down prevents that.**

## The detailed record starts here

The central martial world, the imperial court, and the lands beyond. A hundred years ago the **Rebellion of the Five Heavenly Kings** split it into many powers, and martial arts divide into external, internal and mind disciplines.

What follows is the world and story part of [the design document](/spec/wuxia-gdd.html). The tables are carried over verbatim.

## The seven factions are a supply line, not a backdrop

| Category | Representative powers | Character |
|---|---|---|
| ① Orthodox | The Alliance (ten sects) + five great houses | Profess chivalry, fight internally for power |
| ② Unorthodox | Poison valley, black-serpent gang, forest bandits | Poison, assassination, contract work |
| ③ Heterodox | Three demonic sects | Energy-draining, revenants, fanaticism |
| ④ Beyond the frontier | North sea, southern poison valley, western esoterics, the eastern isles | Ice arts, gu poison, diamond body, swordsmanship |
| ⑤ Imperial court | Embroidered guard, the two directorates, palace army | Directly imperial — **where the protagonist comes from** |
| ⑥ Merchant houses | Three great houses and the escort agencies | The economy and the information network |
| ⑦ Underworld · neutral | Beggars' guild, physicians, hermits | Information, healing, wild cards |

In a setting document that table gets read once and forgotten. **Here the 26 factions become 26 bosses, and killing a boss seals an animal spirit into one of the [26 artifacts](/en/built/moon-studio/wuxia/spec/index.md).** Delete a faction and a collectible disappears; add one and a boss and an artifact arrive with it.

The same holds for the four schools. Blade, Fist, Dao and Step are factions in the setting **and the four lineages of the form system at the same time**, and they can't be chosen until chapter 3 ends. Which means **the world gates the build.**

## Identity isn't lore, it's a 0–100 stat

The protagonist is the fourteenth prince, born with a rare unblocked meridian body. **Four people** know who he is: himself, the emperor, and two allies.

This is where lore crosses into machinery — there is an **identity exposure variable, 0 to 100.** Being hidden is a value rather than a sentence, so pursuers attach as it rises and fall away as it drops.

| | Who |
|---|---|
| Hostile | The heterodox shadow corps · the empress's faction · the directorate · the poison valley |
| Protective | Two court allies · the embroidered guard |

**Leave "a prince in hiding" as atmosphere and nothing happens.** Make it a value and the player has something to manage; give them something to manage and what they do in a town changes. The crossing from setting into system is exactly here.

## Chapters hold the unlocks

Three acts — escape and the first artifact (Ch. 1–2), the pursuers' identity and the choice of school (Ch. 3–4), and the return to the palace with three branching endings (Ch. 5).

| Chapter | Region | Boss | Artifact | Unlocks |
|---|---|---|---|---|
| 1 · Leaving the palace | Palace → bamboo forest → village | Serpent gang master | Black serpent | Patterns 一 · 丨 |
| 2 · Luoyang | Inn, city | Blood-hand elder | Nine-tailed fox | Patterns ㄴ · Z, exposure stat |
| 3 · Poison valley | Fog gorge | Poison empress | Serpent | Pattern ○, **school choice** |
| 4 · North sea | Snow peaks, ice cliffs | Snow demon | Snow leopard | Pattern X, a clue to his body |
| 5 · The court | Black desert → palace | Blood heaven emperor | Bat + union | Pattern △, identity revealed |

The rightmost column is the point. **What a chapter pays out is a pattern, not a stat.** A new pattern opens four more forms — four lineages times one new stroke. What [Design](/en/built/moon-studio/wuxia/design/index.md) settled as "raise difficulty by information, not by numbers" reappears here as progression.

And **the identity reveal is pinned to the last chapter.** The thing that became a stat above finishes in the same place the story does.

## Not yet decided

- **The detailed story isn't here.** Three acts and the chapter table are settled; dialogue trees and branch conditions live in a separate document
- **The heterodox line is "a proposal for review — not an implementation."** Its subtitle says so, and the scope of its arts and the switching policy remain among the 11 undecided items in [Spec](/en/built/moon-studio/wuxia/spec/index.md)
- **The side chapters have boss and artifact names only** — hawk, crow, lion. Where they attach is undecided

A setting document is easy to make thick. **What's kept on this page is only what actually reaches a system; the rest isn't a setting yet, it's notes.**
