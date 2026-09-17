# Client

> The places handling time and hit resolution leaked. Every one of them failed quietly, without throwing.

- Headline number: Unity 6
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/wuxia/client/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/wuxia/client/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The places where handling time and hit resolution leaked. Every one of them was wrong *quietly*, without throwing.**

## What they have in common

Not one of the bugs collected here **produced an error message.**

All of them **ran and returned the wrong value.** So each was found **only after something looked wrong on screen.**

## One — "store ratios, not numbers"

A rule taken from someone else's work, and **43 places in my code were built backwards.**

The problem: if one effect remembers **"I am 3 metres"**, then changing the overall scale in the settings later **leaves that 3 metres behind.**

So it now **stores only a ratio and recomputes the real size every frame.**

## Two — "touch time and three places leak"

Action games have effects that **briefly slow time.** Touch time and **unexpected things slow with it.**

| Things that must not slow | If they do |
|---|---|
| **Screen effects** | The presentation drags and looks wrong |
| **UI animation** | Menus feel sluggish |
| **Input handling** | **It feels like the controls stopped responding** |

The third is the worst. It reads **not as "the game is odd" but as "my input isn't landing"** — the most infuriating kind.

So **what is affected by time and what is not is now split explicitly.**

## Three — "blocking one place blocks half"

A guard placed **in one location** turned out to block **half.**

Because **there were two routes in.** I had put a door on one.

A common mistake: **the moment you believe you have blocked it, you stop counting the other roads.**

> **Before blocking, count how many roads reach the place you are blocking.**

## Four — "blocked, and hit anyway"

The most confusing bug.

On screen it **clearly blocked.** And **damage went through.**

The cause: **the moment of judgement and the moment of display were different.** The screen said *blocked*, and **the resolution had already finished before that.**

This kind is nasty because **the player experiences it as "this game's hit detection is broken."** And **that is inexplicable until you find it.**

## Five — "do not reuse a signal"

You build one signal meaning *something happened* and **want to reuse it in several places.** It is convenient.

And then **later you cannot tell why that signal arrived.** There are several senders.

So **similar-looking signals are kept separate.** Slightly more of them, in exchange for **traceability.**

## Six — "switched on" is not "alive"

The last one and the one with the most in it.

To check whether an object **was still running**, I checked **whether it was switched on.** Plausible.

These are different.

| State | Switched on | Actually running |
|---|---|---|
| Normal | **Yes** | Yes |
| **Finished and not cleaned up** | **Yes** | **No** |
| Not started | Yes | No |

**"Switched on" stays yes for quite a while.** So judging on it **counts finished things as alive.**

> **"Does it exist" and "is it working" are different questions.** And in most systems the first is much easier to check, so it is the one you reach for.

## The detailed record starts here

Unity 6, URP. What's written here isn't about the framework — it's **the places handling time and hit resolution actually leaked.** They have one thing in common: none of them throws.

## Record dimensionless, resolve every frame

Telegraph duration has to be adjustable in real time, and the first version instead **took a fixed value once and waited on it.** Measured: 43 places doing that against 22 resolving per frame.

The cause isn't "there's no live editor." It's **when the dimension gets frozen.** The single line `yield return new WaitForSeconds(x)` freezes x at that moment. After that you can pause the game and drag the inspector all you like — the value is already copied inside the coroutine.

<div class="ex">
<div class="x"><b>BAD — this one line freezes x</b>
<p class="m">yield return new WaitForSeconds(x);</p></div>
<div class="o"><b>GOOD — x is re-read every frame</b>
<p class="m">float t0 = Time.time;
while (Time.time - t0 &lt; x) yield return null;</p></div>
</div>

The second one re-reads x every frame. So a telegraph already in flight changes **where it stands.**

A `const float` is **worse** than freezing it in a coroutine. The coroutine at least picks up the change on the next play; a constant requires a rebuild. Presentation durations go in fields, no exceptions.

When there's more than one segment, they share one start time. Give a fade and a flash their own start times and, when the total duration changes mid-run, **the two segments no longer sum to the total** — meaning the telegraph and the actual hit come apart. Compute one progress value per frame and slice the segments out of it.

## Touch time and three places leak

Adding hit-stop and slow motion produced three of them on the same day.

| Symptom | Cause |
|---|---|
| At 0.3× speed a 3-second wait **actually takes 10** | The wait follows game time |
| Change scenes mid-slow and **the scale stays pinned at 0.3** | It exits without passing through the restore |
| **A hitbox fires after death** | Died during a charge wait → the wait completed and ran anyway |

The third is the nastiest. A coroutine doesn't know whether the object that started it is still alive. So now every `yield` is followed by asking again.

All three **throw nothing.** The game just freezes, or a dead enemy hits you, or a wait takes three times as long.

## A guard in `Update()` only blocks half of it

For stretches where input must not be accepted — a pause, a cutscene — I added a guard, checked inside `Update()`.

**It blocked about half.**

`Update()` stops when the time scale does, but **input-action callbacks, event callbacks, and anything on unscaled time keep running.** You end up in a state where the picture is frozen and input still lands.

**"Stopped" is not one thing.** Time stopping, the frame loop stopping, and input not arriving are three different switches. A guard has to sit **on the same layer** as the thing it's blocking.

## Blocked, and hit anyway

This came out of the counter system, and it's the bug I learned the most from.

When a form got countered, I removed that pending hit **from the list immediately.** It looked clean. But later, when damage resolution asked "was this attack blocked?", the entry wasn't in the list, so **it came back as `none`** — and none reads as "not blocked," so the clean hit went straight through.

The fix was **to mark rather than remove.** The block is recorded as a result, and cleanup happens at consumption time. Then even if the caller forgets its early return, the damage comes out as zero — **blocked twice over.**

The lesson: **"handled, so delete it" is only correct when nobody is going to ask about it later.**

## Don't reuse a signal

The counter-success signal was routed through the existing "attack animation" event. It was already there, so it was convenient.

That event **also fires on basic attacks.** The result: mashing left-click broke enemy forms. Regardless of lineage, regardless of timing.

Now there's a dedicated event with its firing point pinned to **one place — immediately after a form successfully starts.** Saving one signal made an entire system meaningless.

## `activeSelf` does not mean "alive"

Object pooling burned me twice.

**Returning to the pool fires no physics callback.** `SetActive(false)` sends it back without triggering `OnTriggerExit`, so a returned object stays on the "currently inside my range" roster. Respawn that same instance across the map and **you get hit from there.**

**Death doesn't switch it off immediately, because of game feel.** While the death animation plays, `activeSelf` is still true — so a scanner that only checks that treats **a corpse as a valid target.**

Both point the same way. Stop using `activeSelf` as a synonym for alive — put actual health or a death flag in the condition, and re-verify position when the roster is consumed. Better to build so that **it holds regardless of what the contamination source is.**
