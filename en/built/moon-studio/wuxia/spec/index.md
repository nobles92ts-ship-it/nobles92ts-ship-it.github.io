# Spec

> The rules from the design page as actual artifact — four lineages, the matchup cycle, three verdict constants, real telegraph durations.

- Headline number: one page
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/wuxia/spec/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/wuxia/spec/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The rules from the design page as an actual artifact. Except that opening the project to fill this page showed the spec was *two months* behind the game.**

## First — the document and the data had drifted apart

I opened the project to fill this page from primary sources. This came out.

| | What the spec says | The actual game |
|---|---|---|
| Number of techniques | **28** | **44** |
| How you pick a lineage | **Z·X·C·V keys** | **Mouse + 1·2·3·Shift** |

**Anyone who read the spec and built from it would be describing a game that does not exist.**

And this is ordinary. **The code keeps changing while the documents do not.** Nobody is lazy — **fixing a document has no effect in the moment**, so it slips.

## So I set a rule

> **When the document and the data disagree, *the data* is canonical.**

Simple reasoning. **The data is what is actually running**; the document is **what somebody said they would do.**

And I fixed a **priority** for repairs.

| Category | Treatment |
|---|---|
| 11 current-spec documents | **Fix** |
| **3 externally published statements** (store copy and so on) | **Most urgent** |
| **Historical records** | **Do not fix** |

Why the second is most urgent: **it is wrong information already outside.** I can look at an internal document and think *ah, that is stale*; **someone outside reads it as fact.**

The third matters too. **Past retrospectives and records of the time do not get fixed.** They are **a record of what I thought then**, and fixing them **stops them being records.**

## And I misdiagnosed the fix

The most expensive part of this page.

In the corrected revision I wrote: **"the keys changed from Z·X·C·V to Q·W·A·S."**

**Wrong.**

There were **three layers**, and I had **put values from different layers side by side and called it a change.**

| Layer | Value | Where the canonical version is |
|---|---|---|
| **What a person presses** | Mouse + **1·2·3·Shift** | The control hints |
| **What the data calls them** | **Q·W·A·S** | The column names in the data file |
| **A discarded old design** | Z·X·C·V | The old spec |

**Q·W·A·S is not a key a person presses — it is the name used inside the data.** The actual keys are the number row.

So: **I read a data file and took it for input keys.**

→ What I took: **the same name can mean different things in different layers.** And **calling something "changed" from one layer alone makes the corrected document a new error.**

I went to fix something and **nearly planted another.**

## And below are the settled values

The detailed record below carries **the values actually present in the code and data** — four lineages and the matchup cycle, three verdict constants, telegraph durations.

**None of them invented; all pulled from the real thing.** After what happened above, **they now come from the data, not the documents.**

## The detailed record starts here

Where [Design](/en/built/moon-studio/wuxia/design/index.md) is *why it was decided that way*, this is **what was decided.** Every value below is one that actually sits in the design docs and the code.

## First — the document and the data had drifted two months apart

Opening the repository to fill this page with the real thing turned up something else: **the design doc was two months behind the game.**

| | Design doc | Actual data / code |
|---|---|---|
| Number of forms | 28 (7 patterns × 4) | **44** (11 patterns × 4) |
| Lineage select | Four strike keys | **Mouse + 1 / 2 / 3 / Shift** |

The GDD is dated 12 June; the form data 12 August. The four added patterns are `ㄱ` `N` `ㄷ` `◇`. Only the 26 artifacts agreed across doc, data and assets.

**So the document got fixed — [GDD v0.6](/spec/wuxia-gdd.html).** The dead control scheme is gone, the matrix was re-derived from the CSV, and the counter system built after v0.5 went in as a new §9.4.

Publishing it unchanged as evidence was the other option, and it was the wrong one. Embalming an outdated document means the next person implements it. So there's a rule now.

> **When the design changes, the design document changes in the same piece of work. What's been dropped gets deleted, not kept.**

## And then I misdiagnosed the fix

The first cut of v0.6 said: **"the strike keys changed from one four-key layout to another."** That was wrong.

I read `enum SkillKey { Q, W, A, S }` in the code and concluded those were the keys. **They aren't keys — they're the names the four lineages carry in data.** The real input was recorded elsewhere.

| Layer | Value | Canonical source |
|---|---|---|
| What the player presses | Draw with the mouse, pick lineage with **1 · 2 · 3 · Shift** | `Doors.InputHint` |
| What the data calls it | `SkillKey.Q / W / A / S` | `enum SkillKey`, CSV `Key` column |
| Dropped old design | The v0.5 four-key strike layout | GDD v0.5 |

So "document says X, code says Y" wasn't a drift at all — it was **two different layers set against each other.** A drift existed, but not the one I named it.

**The worst part is that the warning was already there.** Line 51 of `PROJECT_LOG` says exactly this:

> This isn't "the document says one thing and the code another" — it is two different layers being set against each other.

I read that paragraph and **quoted its second sentence while dropping its first**, because the second one fit the story I was telling. The refutation was inside the same paragraph and I didn't see it.

So §8.5 now carries one more rule: **write the actual input when describing controls in a test case or a bug report, and the identifier when pointing at data.** Mix them and the same misdiagnosis comes back.

Then, having fixed it, I swept the whole docs folder. **It wasn't one document — it was 21 files and 172 occurrences.**

| Kind | What happens to it |
|---|---|
| 11 live specs (UI mockup, data sheet, faction tree…) | Get fixed |
| **3 public-facing copy files** (store page and campaign) | **Most urgent** |
| 7 historical records (logs, QA reports) | **Left alone** — they're true as of their date; editing them damages the record |

The middle row was the one that stung. The store copy still named keys the game no longer has. Left alone, the game ships on one scheme while the storefront tells buyers another — **the drift walks past the internal docs and out to customers.** Those three were updated the same day and re-scanned clean.

**"The design doc says so" is not evidence.** The data is the game and the document follows it — but building solo, the only person who updates the follower is me, so it drifts quietly. This page **records the data side whenever the two disagree.**

## Four lineages, each beating exactly one

Four schools — **Blade (劍門) · Fist (拳門) · Dao (道門) · Step (步門)**. Despite the name, the Dao school carries the palm (掌) lineage.

```
Step → Blade → Fist → Palm → Step        (arrow = beats)
```

**There are four things to learn, not sixteen.** And each relation carries a one-line reason, held as a string in the code.

| Counter | Reason |
|---|---|
| Step beats Blade | A sword has to reach you to cut you. It cannot cut a shadow |
| Blade beats Fist | The point arrives before the fist does |
| Fist beats Palm | Palm force isn't dodged, it's pierced |
| Palm beats Step | Palm force is a plane. There is nowhere to retreat to |

The reason column isn't decoration. **A matchup table without reasons has to be reopened every time; with reasons, you hear it once.**

And **no new vocabulary was invented.** The player already picks a lineage and draws a stroke to produce a form. Putting enemy forms on that same axis made countering **an input they already know** — no new button, no new rule.

## The verdict splits three ways, and the middle row is the point

```csharp
ClashResult.Broken → ScaleDamage = 0f    // countered = 0 damage taken
WrongDoorDamageScale             = 0.6f  // wrong lineage = 60%
BreakCounterScale                = 2.0f  // countering deals 2× back
BreakStunSeconds                 = 1.6f  // countering stuns for 1.6s
```

Answer with the right lineage and you take nothing, plus **1.6 seconds of stun and double damage back.** Wrong lineage takes 60%; no response takes a clean hit.

**The middle row is the whole table.** Make a wrong answer identical to no answer and nobody ever tries — and with no attempts there is no chance to learn the matchups at all. A wrong answer doesn't close the window either: while the telegraph runs, you can try again.

## The telegraphs were measured, not guessed

One boss — the Black Serpent Chief — and his eight forms are the canonical set.

| Phase | Forms | Lineage | Telegraph | Damage |
|---|---|---|---:|---:|
| 1 | two openers | Blade | 1.10 · 1.30 | 22 · 25 |
| 2 | three | Fist, Palm, Step | 0.90 · 1.50 · 0.80 | 28 · 30 · 18 |
| 3 | two | Palm, Step | 1.40 · 0.95 | 34 · 26 |
| Ultimate | **one** | Blade | **2.40** | **55** |

Standard forms run **0.80–1.50 seconds** (mean 1.14); the ultimate is roughly double at **2.40**. It arrives **once every 22 seconds**, in phase 3 only, at 2.2× power.

The ultimate is long for a reason. **Kill someone in 0.5 seconds and they say "I never saw it"; give them 2.4 and they say "I saw it and still didn't react."** Only the second makes anyone play differently next time.

## It's only a martial art if it's rare

| Rank | Forms |
|---|---|
| Levy | none — conscripts. They carry a blade, they never learned one |
| Soldier | none — trained, but no forms |
| Captain | **one signature form** (of three: Blade, Fist, Palm) |
| Boss | a set per phase, plus an ultimate |

Forty enemies charging in with forty name-cards is not information, it's **noise.**

A captain's form comes from **its own instance identity, not a random roll.** Re-rolled each spawn, nobody could learn "that one glows red." The three captains on screen differ from each other, and each keeps its own form to the end.

## Labels for the boss, colour for the battlefield

A boss fight is one-on-one, so there's time to read a label. A battlefield isn't. So on the battlefield **the body glows in the lineage colour** — red is Fist, and Fist is broken by Blade. Nothing to read; you just see it.

For colour-blind support, not only hue but **value** is separated: Blade pale blue-white → Fist red → Palm gold → Step dark green. All of it within the three-layer value structure in [Art](/en/built/moon-studio/wuxia/art/index.md).

## Not yet decided — 11 items

The most important section in a spec. Fail to record what's undecided and it looks decided. The source marks **11** items as needing a decision, unfixed, or on hold; five touch the form system directly.

- **Scope of the heterodox school's arts** — the source labels this "most important." Add a few, overwrite existing forms, or build a wholly separate set: undecided
- **Orthodox ↔ heterodox switching** — free, reversible at a cost, or one-way
- **How much weight the heterodox line carries** — a build option or a narrative branch
- **What gets implemented first** — three arts, or one movement art as a proof of concept
- **A telegraph-window mismatch** — the counter window computes its end time once, at the start, so lengthening a telegraph mid-run closes the counter window early. **Deliberately left unfixed**, with the resume condition written down: "when balancing work that actually adjusts telegraph length at runtime comes up"

That last one is the most honest line in the spec. A known bug, left alone on purpose, **with the condition for revisiting it recorded.** And the heterodox document carries its own subtitle: *a proposal for review — not an implementation.*
