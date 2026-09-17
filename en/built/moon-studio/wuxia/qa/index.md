# QA

> What a passing test isn't looking at. When zero means two different things, the test passes a broken build.

- Headline number: wiring gate
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/wuxia/qa/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/wuxia/qa/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**What a passing test is *not* looking at. When zero means two different things, the test passes a broken build.**

## One — "the check passed" is not "it works"

The first thing learned.

**Building without errors** and **running correctly** are different.

| | What it guarantees |
|---|---|
| Passes with no errors | **The syntax is valid** |
| Actually running it | **It behaves as intended** |

And **no errors feels like everything is done**, because the light is green.

**Code that does nothing at all never errors.**

## Two — "when zero means two things, the test passes a broken build"

The most valuable line on this page.

A result comes back as **zero.** Two possibilities.

| What is true | On screen |
|---|---|
| **Checked, nothing wrong** | **0** |
| **The check itself did not run** | **0** |

**They look identical, and both look like good news.**

So when the checker breaks, **it reads as "everything passed."** That is the worst case — **a fault read as a pass.**

They have to be split.

- **"0 findings (12 checks ran)"** ← checked, nothing found
- **"did not run"** ← not zero

## Three — "let the *test* state the reason for isolation, not a comment"

Sometimes a test is switched off for a while. And the reason usually goes **in a comment.**

> `// off for now, not implemented yet`

The problem: **nobody reads comments, and nobody switches it back on when the implementation lands.** Months later **nobody knows why it is off.**

So instead of switching it off, **it is marked "expected to fail."** Then **when the implementation lands and it starts passing, that raises an alert.**

> **Switching it off makes it silent. Marking it "failure is expected" makes it tell you when it gets fixed.**

## Four — "check that the thing you turned off still runs"

The counterpart to the above.

Turn something off and **you can no longer distinguish "not running because it is off" from "genuinely broken."**

So **a separate check runs it with the switch on.** Switched on it should run. If it does not, **that is a fault unrelated to the switch.**

## Five — "judge on the result, not the state"

The same point as the client page.

Judging on *if this value looks like this, it succeeded* **misses the cases where the value is right and nothing actually happened.**

**Judge on results** — was something actually created, did something actually change.

## Six — "having measured does not vouch for the environment you measured in"

The one that hurt most.

I **actually measured** a number. So I trusted it.

But **the game was not in a normal state while I measured.** A defect in the resolution path meant **phantom hits were mixed in**, which **inflated the number 3.5×.**

And fixing that defect made the game **impossible to clear** — without those phantom hits **it had always been unbeatable at that difficulty.**

So **the measurement was correct and what it was measuring was wrong.**

> **"I measured it" does not vouch for "it is right." Whether the environment was sound while measuring has to be checked too.**

And the prescription learned: **when you fix a resolution or damage path, re-measure every constant derived from it.**

## Why do it here

Last note.

Verification stories like these are **also my day-job stories.** And the day job **cannot be written about in detail.**

This game is mine, so **every place I got it wrong and how can be written down.**

**You need something you can break in public to write about breaking things.**

## The detailed record starts here

The only QA target I fully own. Which makes it the place I can experiment freely on **what tests miss** — and what comes out of here goes back into the work pipelines.

## A green harness is not proof of function

A test harness running in editor mode is fast and convenient. And it **hides runtime wiring holes completely.**

The function runs. The class is correct. But if the reference is empty in the scene, nothing happens in the game. The harness cannot see it — **because it constructs its own objects to test against.**

It leaked exactly like this once. A guard read `if the reference exists and is active, let it through` — and in the scene that reference was never connected. Which makes the condition permanently false, so **the guard is skipped every time.** It compiles, it passes code review, and it throws no runtime exception. It simply doesn't run.

**Code review only looks at `.cs`.** So there's a separate gate that reads the references saved in the scene. It doesn't ask whether the code is right; it asks whether **the wiring exists.** The worst leaks are **partial** — the same reference connected on one component and forgotten on another.

## When zero means two different things, the test passes a broken build

The most valuable rule this project produced.

To check the counter system worked, I tested "damage is zero when blocked." It passed.

But **"zero because it was blocked" and "zero because it was out of range" are not distinguished.** With the block feature completely dead, that test still goes green whenever the attack happens to miss.

How it surfaced is the interesting part. A wrong-lineage response should take 60% damage, and that case **failed with `damage 0.0 (expected 13.2)`.** A wrong answer taking zero means nobody was being hit at all — and in that moment, **the correct-answer case's pass was revealed as false.**

So the order changed. **Before measuring the block, establish that you actually get hit when you don't block.** Only once that passes does the zero in the block test mean anything.

## Let the test state the reason for isolation, not a comment

Removing something to measure is common. "Take the shield off and measure raw damage."

When you do, **keep a check that verifies what the shield normally does.** If that behaviour ever disappears, that check fails first and tells you **the premise of your isolation has collapsed.**

Write "shield removed here" in a comment and nothing happens. The premise can change quietly and the comment stays exactly where it was.

## Check that the thing you turned off still runs

Setting up a harness to measure boss patterns, **the autonomous AI contaminated the measurement.** The moment my injected attack finished, the boss started its own next attack and reopened the counter window.

So the harness default became **autonomous behaviour disabled.** That much is the obvious prescription.

The problem is what comes next. Turn it off and nobody ever checks whether that autonomous behaviour **works in the first place.** Everything passes while, in the actual game, the boss stands there doing nothing.

So **"does the thing we turned off actually run" gets its own check.** Same logic as the isolation rule, and forgotten far more often.

## Judge on the result, not the state

Measuring telegraph timing, I first watched when the state flag changed. Wrong.

**A telegraph can finish without the attack going out.** Range or state checks can cancel it. Watch the flag and you get "telegraph complete" while the player is never hit.

So the criterion moved to **when the player actually takes damage** — an externally observable result rather than internal state. Same reason different defect types get different verdicts: visual defects get photographed, behavioural defects get run, and only structural defects get judged statically.

**Never report "fixed" from having read the file.** Confirming the code changed and confirming the game changed are different acts.

## Having measured does not vouch for the environment you measured in

The last one is the scariest.

A balance constant was measurement-based. "We actually measured it," so nobody questioned it.

But there was a defect in the hit-resolution path, and **fixing that defect made the target impossible to clear.** Re-measuring showed that the numbers taken while the defect existed had been **inflating the metric 3.5×** — phantom resolutions were padding the kill count.

So there's a rule now. **Fix a defect in a resolution or damage path and every balance constant derived from that path gets re-measured.** And the method for measuring it goes in a comment next to the constant.

"We measured it" must never become a shield. **A measurement measures the environment it was taken in, too.**

## Why do it here

Try a technique on somebody else's project and you can't show the result. Here you can.

I use it as **the place where the verification method itself gets verified** — what does this harness fail to see, is there a case that clears this gate and still breaks. Both "zero means two things" and "measurement doesn't vouch for its environment" came out of here and went on to change how I think at work.
