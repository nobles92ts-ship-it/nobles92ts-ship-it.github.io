# The photo judge

> When the log cannot decide a case, a screenshot does. Code-level rules re-check every verdict, and a model from another company takes a second look.

- Headline number: 0 false passes
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/android-qa/judge/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/android-qa/judge/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The photo judge is a program that reads the screenshots my automated checks leave behind and writes one of four verdicts for each test case — pass, fail, can't judge, or not applicable.** I built it for the cases the game's own logs cannot decide, so that nobody has to page through the photos by hand.

> **[도판]** How the photo judge runs. An AI judges, code-level rules re-check the evidence behind each verdict, and only the verdicts nobody would look at again get a second look from another model.
>
> Screenshots from cases the log could not decide pass through five stages in order. The screenshots go to the judge, an AI, together with the criterion and the taps that were made; the judge returns one of four verdicts plus the photo it cites. Rule gates check five things, such as whether the judge really opened that photo, and can lower the verdict. The second eye re-checks only passes and not-applicable verdicts with another model, and where it disagrees a person sees that case first in the report.

## More cases than you would expect cannot be decided from the log

This QA server decides results from **what the game writes to its log** ([Driving and judging](/en/built/android-qa/driving/index.md)). Whether a login worked is right there in the traffic with the server.

But the test list also carries items like these:

| Test case | Can the log decide it? |
|---|---|
| Can you log in? | Yes — the exchange with the server is logged |
| Is there a name on the left, a character in the middle and a list on the right? | No — what is *visible* is in no log |

Cases like the second one used to end with a photo and a person paging through it. The first day the judge ran, 171 such cases came with 193 photos to look at.

## I don't take the AI's word for it — rules check every answer

An AI is good at producing a plausible answer. So each verdict has to say **which photo showed what**, and rules written as code then check that answer.

| What the rule asks | If it fails |
|---|---|
| Does the cited photo exist? | The verdict is lowered |
| Did the judge **actually open** that photo? | The verdict is lowered |
| The case asks for the result of a tap — did it pass without one? | The verdict is lowered |

"Did it actually open it" is checked against the AI's own session record of which files it read — **a stated reason, checked against a record of what it did.** The rules can lower a verdict; they can never raise one.

There is one more guard. If a button's coordinates were **corrected after the run**, the verdict gets a warning: the photo can look right while the run actually pressed a different button. Without that warning, one false pass would have gone out.

## Against the hand-made verdicts, 170 of 171 matched

On the first day (2026-09-11) I ran the judge over 171 cases that had already been judged by hand. **170 matched, and it passed nothing that should not have passed.** The one miss was the judge being more cautious than the hand verdict. It also caught **two mistakes in the hand verdicts** — a criterion read after it had been cut off mid-sentence, and a value left over in an input box taken as "typed".

On 2026-09-23 I moved to a newer model and **stopped loading every judging session with baggage** it never used, such as tool lists and settings. The same 171 cases went from **$40.51 to $16.00, and from about 15 minutes to 8**, still with zero false passes. The judge now **follows the newest Opus on its own**.

## A second eye — another company's model re-checks "pass" and "not applicable"

Pass and not-applicable are the verdicts **nobody looks at again**; fails and can't-judges get opened anyway. So only those two get a second look.

The second eye is **Jev**, an evaluation model from TypeSafe. It picks one option from a given set and reports how confident it is as a number. Jev cannot see images, so another AI first writes down what is in that case's own photos **without being told the criterion**, and Jev reads that description together with the criterion.

When the two disagree, the case lands in a "second eye" table at the top of the report and **a person looks there first.** The verdict itself is never changed.

## The judge was wrong because a note it was handed was wrong

After the rules were settled (below) and the answer key corrected, one **wrong "not applicable"** was left.

The cause was not the judge but **a note handed to it.** For one screen the note said "the model in the middle only shows when you own one." The design spec says the selected item's model is shown, and later builds showed it whether you owned it or not. The judge **took the note as fact** and called an empty middle "precondition not met" instead of "fail".

With the note deleted, the same photos came back **fail**. Notes to the judge now carry **requirements only** — what has to be owned or prepared — and never claims about how a screen behaves, because the judge reads those as facts.

## What photos cannot fix — the tap that never happened

When I counted why so many cases came back "can't judge" (2026-09-10), **97 of 126 were "right screen, no result of the tap."** The automation reached the screen and **never pressed the thing the case was about.**

No judge and no rerun fixes that. **Adding the step** is the only fix.

"Can you type into the ID box?" was always "can't judge": the automation tapped the box and typed nothing, and the text sitting in the box was **left over from the previous run.** On 2026-09-28 I added two steps — take one photo before typing, then type this run's ID. With the text visibly changing between the two photos the judge passed it, and the second eye agreed.

## A side note from the judge turned out to be a bug

The judge also writes down oddities unrelated to the criterion as **side notes**. One of them was a real bug.

On one screen the name slots showed an **internal key** such as `Not Found '…'` instead of a name. Checking the data, the name keys that screen points to were missing from the translation table. The same thing showed on two phone builds and on the PC version in the editor, and it was filed on 2026-09-28.

## What I haven't done

- **The answer key was also made by an AI going through the photos one by one.** So 170 of 171 measures how well the judge *reproduces hand judging*, not how accurate it is.
- **The second eye has not caught a real error yet.** In the range I measured (31 passes on the phone, 17 on PC) it caught none, and most alarms meant "the judge borrowed a neighbouring case's photo — check it is the same screen." Whether to keep it gets decided after one full run.
- **A single photo cannot see time.** "Is it still there after you reconnect?" or "does the motion play?" needs a before and an after. Cases where the automation takes only one photo still end as can't-judge.
- Sending "not applicable" to the second eye too (2026-09-28) **has not run in a full test run yet** — only in partial runs.

## The detailed record starts here

`shot_judge` runs on its own when the runner — the program that plays the sheet's test list on the phone — finishes. Its input is the runner's verdicts, repro steps and photos; its output is a report (`report.md`) and an AI verdict per case. Pushing to the sheet is a separate single command that lays the AI verdict over the runner's; run them in the other order and the judging is overwritten.

## Five stages, and the gates are code

| Stage | What it does |
|---|---|
| 1 Index | A cheap model reads a montage per 8 photos (thumbnail plus cropped title, coordinates and build stamp) into a screen / coordinates / build table. Cached in the run folder |
| 2 Targets | What the runner could not decide from the log (EVIDENCE, FAIL, BLOCKED, SKIP) and has a photo. A PASS decided from the log is never touched |
| 3 Judging | Consecutive cases on the same screen share one session. The criterion column in the sheet is the source of truth; the repro steps are generated from the runner's steps |
| 4 Gates | G1 missing · G2 format · G3 cited photo exists · G4 the cited photo was really read (file reads in the session record) · G5 an action criterion passed without a result. All of them only lower |
| 5 Cross-check and report | Judge PASS and N/A go to the second eye; the report gets one headline line, and disagreements go in a table |

A visibility criterion passes if the thing is visible; an action criterion passes only if the *result of the tap* is visible. "Partly confirmed" is not a PASS — it is BLOCKED with N/M attached. The LLM only judges; the gates decide what stands.

## It came out of three automation rules set on 2026-09-11

| Rule | What |
|---|---|
| 1 Repro steps and a criterion | A case runs only when it is clear what gets pressed and what to look at. Repro steps are generated from the steps, and a case whose sheet asks for an action while its steps only reach the screen is flagged as "action missing" before the run |
| 2 Same screen, no second shot | 111 of 248 cases repeated a screen — they now share one photo (about 9 minutes and 45% of the photos saved per run) |
| 3 Judge from the image | The photo judge — this page |

## Numbers

- **First version, 2026-09-11** — 7 runs, 171 cases, 193 photos. Against hand judging **170/171 (99.4%), 0 false passes**. 33 sessions, about 15 minutes wall-clock at 3 in parallel.
  A mis-aim warning (it restores "the coordinates at run time" from coordinate-profile backups and flags taps moved more than 59px after the run) blocked one false pass on a shared toast case. So **coordinate fixes always leave a backup** — the backup is what the warning is made of.
- **A/B on 2026-09-23 (same 171)** — Opus 5 with the session baggage, $40.51, about 15 minutes → **Opus 5.5, medium effort, baggage removed: $16.00, 8.0 minutes**, 0 false passes.
  The 17 cases that disagreed with the old answer key came from precondition notes added to cases **after** the key was made ("precondition not met means N/A"). That meant the key was stale, so the rules were settled before blaming the model.
- **2026-09-28** — with the rules settled and the key corrected (13 cases to N/A, 1 to BLOCKED) it scores **168/171 with 0 false passes**. The three left: two whose answer sits in photos outside the judged runs (a supplementary run, photos taken by hand) and the note incident below.
- The judge model is set as the `opus` alias, and only the judging sessions resolve that alias to the CLI's newest Opus. Runs made on different versions are told apart by the stamp on every result (model, effort, code revision).

## Two rules were set by a person (2026-09-28)

- 1 **A neighbouring case's photo of the same screen in the same state may be used** — when the case's own photo came too early (a cutscene, loading) or was covered.
- 2 **A case whose precondition the automation could not create (currency, ownership, number of characters) is N/A, not BLOCKED.**
- For motion, two stills (right after the tap, one second later) with different poses count as a PASS. No video is needed.

## In the range measured, the second eye has not caught a real error yet

- Flow: judge PASS or N/A → sonnet writes down **that case's own photos only**, without the criterion → Jev (`jev-1.13.0`, TypeSafe API) reads it with the criterion and the precondition (only the requirement part of the note) and returns PASS, FAIL, BLOCKED or NA with a confidence.
- Alarms: a PASS where Jev says anything else · an N/A where Jev says PASS or FAIL, or **where the judge reached N/A from someone else's photo.** The last one is computed from the citations regardless of Jev's answer — Jev sees only the case's own photos and cannot tell.
- After rule 1 was settled, the measured range (31 PASS on the phone, 17 on PC) held 0 real catches. 10 of the 15 alarms were "evidence outside the case's own photos" — the alarm stays as a prompt to check that a borrowed photo really shows the same screen in the same state.
- On the N/A side: of 22 N/A verdicts in the 2026-09-23 run, 8 leaned on someone else's photos and 1 was actually wrong (the note incident below).
- Speed: Jev takes about 0.24 seconds per case. The bottleneck is turning photos into text (14.4 minutes for 171 phone cases).
- ⚠ Once, when the photo descriptions were requested in a batch, **one case's slot received the neighbouring case's description.** A "Jev caught it" measured from that was an illusion. The description step checks that a photo was opened, not that the text landed in the right slot.

## The note incident — the judge reads precondition notes as facts

- A "setup" note is the precondition written in the overlay (the file that adds steps to the runner) when the sheet leaves it blank. The judge receives it as the precondition.
- The setup note written on 2026-09-11 for one screen — "the model in the middle only shows when you own one" — contradicted the design spec (show the selected item's model) and two later builds. It had been written after a server data reset, while the photos being judged were from **the day before** it (an equipped marker, yet an empty middle: a FAIL).
- The judge trusted the note and returned a false N/A. With the text removed, the same input (7 runs) came back FAIL. Setup notes now hold requirements only (materials, ownership).
- The "N/A from someone else's photo" alarm in the cross-check was added because of this case.

## A tap that never happened is fixed only by steps

- On 2026-09-10, 97 of 126 BLOCKED verdicts were "right screen, no result of the tap." Neither the judge nor a rerun fixes that — rule 1's "action missing" check came from here.
- The ID-input case: its steps went from "tap the box" to "tap the box → one photo before typing → type this run's ID". It does not press "Done" — submitting the login belongs to the next case, which clears the box and types again. The two photos show different text, so PASS, and the second eye agreed (2026-09-28).

## The bug that came out of a side note

- The judging instructions say to record oddities unrelated to the criterion as side notes, and to leave out the build stamp and rendering warnings that show on every build — otherwise the same note piles up every run.
- The screen whose name slots showed `Not Found '<key>'`: 6 name keys referenced by the data table were missing from the translation table, which held 24 keys from a different number range. The same text on two phone builds and the PC editor → filed on 2026-09-28.
- A case of the same kind (name keys on another screen) had shown up on 2026-09-10 too; in the current data it is fixed (all 40 keys have translations).
