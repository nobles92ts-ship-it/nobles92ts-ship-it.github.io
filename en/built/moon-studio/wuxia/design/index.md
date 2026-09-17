# Design

> Turn "win by reading the pattern" into a rule and telegraph duration becomes the only dial you have.

- Headline number: 44 forms
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/wuxia/design/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/wuxia/design/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Turning "win by reading the pattern" into an actual rule. Turned, it left exactly one dial.**

## First — "there has to be something to read"

To build **a game about reading patterns**, there has to be **something readable on screen.**

That sounds obvious and it is easy to miss. An enemy that simply swings **gives you nothing to read.** Only something to react to.

So **a telegraph appears just before the attack**, and it says **what kind of attack is coming.**

## And there turned out to be only one dial

The most important finding in the design.

To make *read and respond* easier or harder, what do you turn? It feels like several things. **There was one.**

> **How long the telegraph stays up.**

| Telegraph duration | Result |
|---|---|
| **Long** | Room to look, think and choose → **easy** |
| **Short** | Your hand has to move on sight → **hard** |
| **Too short** | **Unreadable** → it stops being this game |

That last row matters. **Make it too short and "a game about reading" becomes "a game about reacting."** The difficulty does not merely rise — **the genre changes.**

So raising difficulty has to **touch something else instead of shrinking the telegraph** — more pattern types, or mixing them.

## "Giving skills" and "giving a martial art" are different

Another place the design split.

| | Skills | A martial art |
|---|---|---|
| Acquiring one gives you | **More options** | **More *kinds* of situation you can handle** |
| How you use it | One more button | **More situations you can answer** |
| If you never use it | You just do not | **You cannot answer that pattern** |

This game is the second. Learning something new **does not add a button, it adds "I can now turn this pattern aside."**

Which makes **acquisition the same thing as the solution.** An enemy you could not beat **is beaten by learning a new art.**

## Don't invent new vocabulary

Small and important.

Building a game makes you **want to invent terms** — good ones that fit the world.

But every new term is **one more thing the player has to memorise.** And this is **already a game with a lot to memorise** — memorising patterns is the point.

So **the system-side vocabulary is kept as small as possible.** The memorisation budget **goes to the patterns.**

## The middle row is what teaches

My favourite decision.

The outcome of a response is **three-way, not two.**

| Outcome | What |
|---|---|
| Picked right | **Perfect block and counter** |
| **Picked wrong** | **Only 60% lands** ← the middle row |
| Did nothing | **All of it lands** |

Why the middle row is needed: **you have to be able to tell a wrong attempt from no attempt.**

If a wrong pick took full damage, the player **would stop acting whenever unsure.** The outcome is the same either way.

With the middle row, **trying while unsure is the better play.** **And trying is how you learn.**

> **There has to be a slightly better outcome for being wrong, or people do not try, and not trying means not learning.**

## Give it to everyone and it means nothing

The last rule.

Build something good and **you want to attach it to every enemy.** Do that and **it stops being special.**

If a telegraph appears on every attack, players **stop looking at telegraphs.** Something always present becomes background.

**Some attacks have to have no telegraph for the telegraphed ones to read as a signal.**

## The detailed record starts here

Forty-four forms and twenty-six artifacts. One pillar: **you do not win on reflexes.**

## There has to be something to read

Combat you win by reading patterns sounds simple, but turning it into a rule produces one hard requirement: **every threatening move an enemy makes must telegraph.**

Without a telegraph, all that's left is reaction speed, which is the exact opposite of the point. So a telegraph is not presentation — it is a **rule.** An enemy without one is a design violation.

And once telegraphs are a rule, **telegraph duration becomes the difficulty dial.** Making something harder means shortening the time available to read it, not making it hit harder. That version is more honest: the player knows why they lost.

Ultimate attacks get especially long telegraphs, because getting hit has to be **the result of a choice, not an accident.** Kill someone in 0.5 seconds and they say "I never saw it"; give them 2.4 seconds and they say "I saw it and still didn't react." **Only the second one makes anyone play differently next time.**

That decision sends its bill straight to [the client](/en/built/moon-studio/wuxia/client/index.md). Telegraph duration has to be adjustable in real time, and the first version of the code could not do it.

## Giving an enemy skills is not giving it a martial art

I lost a lot of time here. Giving an enemy several attacks and **giving it a martial art** are different things.

A martial art needs three things — **a name, a lineage, and a counter.**

A wuxia fight has three beats: ① one side throws a form → ② the other **recognises what it is** → ③ answers with the counter-form. Usually ① isn't even there. **If an enemy attack is called "wide horizontal slash," that is not a name — it is a description of the animation**, and with nothing to recognise, ② never happens.

## Don't invent new vocabulary

The biggest temptation when designing a counter system is **inventing a separate matchup table for enemies.** Don't. It doubles what there is to learn, and then neither half gets learned.

**Stand the enemies on the axis the player already uses.** If the player picks between four lineages, put the enemy's forms in those same four. Then countering is **an input they already know**, with no new button and no new rule.

Matchups run as an **N-cycle**. If each lineage beats exactly one and loses to exactly one, there are N things to memorise instead of N². Three checks: nothing beats itself, the counter mapping is one-to-one, and following it N times returns you to the start.

And **every matchup carries a one-line reason** — "footwork beats blade: a sword has to reach you to cut you." A matchup table without reasons has to be kept open on a second screen. With reasons, you hear it once.

**Counters are never hidden.** Hide them and it stops being a puzzle and becomes a memory test. Good action is hard *after* you've been told — knowing the answer and switching lineage within 0.9 seconds are completely different problems.

## The middle row is what teaches

The verdict splits three ways.

| Response | Result |
|---|---|
| Correct lineage | Fully negated |
| **Wrong lineage** | **60% damage** |
| No response | Clean hit |

The middle row is the whole point of this table. **Make a wrong answer identical to no answer and nobody ever tries — and with no attempts, there is no opportunity to learn the matchups at all.** People have to feel that being wrong is still better before they try again.

The reverse is also wrong: a wrong answer must not close the window. If the telegraph is still running, **they have to be able to try again.**

## Give it to everyone and it means nothing

Hand forms to every enemy and it stops being a system. Forty enemies charging in with forty name-cards is **background, not information.**

So a rarity ladder protects it — trash mobs get none, captains get one signature form, bosses get a set plus an ultimate.

How it's read changes with the situation too. **Text for one-on-one, colour for a crowd.** A boss fight leaves you time to read a label; a battlefield doesn't. In a crowd the body glows in its lineage colour — nothing to read, you just see it. For colour-blind support you have to separate not just hue but **value**, and that's [an art problem](/en/built/moon-studio/wuxia/art/index.md).

Per-enemy form assignment uses **the instance's own identity, not a random roll.** Re-rolled on each call, nobody can ever learn "that one glows red." The three captains on screen differ from each other, and each one keeps its own forms to the end.

## What gets collected, and on what basis

There's one criterion for collecting references. **"That was fun" doesn't qualify.**

What qualifies is: **has this game already solved a problem I currently can't?** I needed combat you win by reading, so I collected that lineage, and it became the twenty-eight forms.

And **where it applies gets written down at collection time.** Skip that and in six months you no longer know why you saved it. A reference that's only a link isn't material — it's weight.
