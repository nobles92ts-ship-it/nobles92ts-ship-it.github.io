# attention-span — the note that told Claude to bold line one, and what the number counted

> Three style notes that make Claude's answers shorter and clearer up front. Recounting the README's numbers from the raw data, the 43% length cut held up, but "the answer is in line one, 3% to 75%" turned out to count whether line one starts in bold.

- Headline number: 43% shorter · line one 3→75%
- Rendered page: https://aitryed.com/en/teardowns/harness/attention-span/
- Other language: https://aitryed.com/ko/teardowns/harness/attention-span/index.md
- Repository: https://github.com/alexgreensh/attention-span
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**attention-span is three short notes that change how Claude Code, the coding AI assistant, talks.** The notes say "answer first, keep it short, go long only where it matters." That is all they are, plain text, not a program. They leave how the assistant writes code alone and change **only how it speaks**. The source is [github.com/alexgreensh/attention-span](https://github.com/alexgreensh/attention-span).

> **[도판]** The repo ships text to be read, not code to be run. So the release machinery is half the product.
>
> How attention-span is built. On the left, three style notes are written in one place. In the middle, a script makes the skill copies and stops the release if they drift. On the right, they are used in three places: a Claude Code output style, a slash skill in the chat apps, and the rules file of other agents.

## There are three notes, and each talks differently

| Name | In one line |
|---|---|
| Attention-kind | Conclusion on line one, short, and the **bold words alone** carry the answer |
| Spartan | Same frame with the warmth removed, blunt |
| Rundown | A one-line summary on top, status as a ✅🟡⬜❔ list, numbered choices at the end |

Two small extras ride along. `/style` switches between them, and `/tldr` shrinks someone else's long text.

## I recounted the two numbers it brags about

The README leans on two numbers. **Answers got 43% shorter**, and **the share of answers with the conclusion on line one went from 3% to 75%**.

The repo ships the raw data (24 questions, three answers each), so I counted again myself.

- **Length** held. Adding up every character gives a **42.9% cut**.
- **Line one** meant something else. The code behind that number counts whether line one *starts in bold* (`**`).

But "start line one in bold" is exactly what the note orders. The number counts **whether the order was followed.** It is like writing "put your name in big letters at the top" on an exam, then announcing that students with big names rose from 3% to 75%. It proves the rule was followed. It does not prove the answers read better.

The raw data holds a counter-example too. One answer opens with "Monorepo." and gives its verdict right there, but without bold, so it scored zero.

## "The work stays the same" has a narrow reach

The second boast is that **coding ability is unchanged**. Twelve coding problems were solved and graded by hidden tests. With the style on or off, both scored the same 35 out of 36.

One step happens before grading, though. It **throws away the prose and keeps only the code blocks.** So whether "be brief" made the assistant *do less work* cannot show up, by design.

A user did report exactly that. In an issue they described the assistant posting unchecked guesses and then stopping, and read "keep the report short" as "keep the work short." The author accepted it and added two sentences. That came **26 days** after the benchmark passed, on September 6, against August 11.

## The cost line is from before the note tripled

The README says the note costs "about 650 tokens at the start." That sentence went in on August 5, when Attention-kind was **439 words**. Today it is **1,327 words**, three times as long, and the sentence is unchanged. In tokens that is around 1,900 now (an estimate, not a tokenizer count).

## Against my setup: not turning it on for now

- My output style is the **default**. I never changed it.
- Every measurement in this repo is in **English**. I talk in Korean. The note itself carries English style rules ("no dashes", "no *it's not X, it's Y*"), so I do not know whether it works the same in Korean.
- It collides with my own rules in **two places**. I restate a question in one line before answering. The note says "don't restate, line one is the verdict."
- Forcing one format on every reply is something I looked at once and dropped, because small talk gets formatted too.
- Two of the repo's good rules were already mine: "a blocking question goes last" and "mark unknown state as unknown."

The verdict is **hold**. Trying it costs one line to switch on and one line to switch off, so it is cheap. But I would have to settle the rule clash first, and without a way to measure in Korean I would only get a feeling of "better." What I took was not the note but **one measuring structure**: measure the work and the wording separately. Because the repo split them, it was easy to see which number is weak.

## What I don't know yet

- I did not measure **length in Korean**. There is no basis for carrying 24 English questions over.
- The app's built-in **Concise style** I only saw by name. "Why not just use that" has no answer yet.
- This entry is not a verdict on the repo's worth. It records **what a number actually counted.**

## The detailed record starts here

**The length cut of 43% reproduces from the raw data, and "answer in line one, 3% to 75%" was the share of answers whose line one starts in bold.** attention-span is an AGPL-3.0 repo that ships three Claude Code output styles (Attention-kind, Spartan, Rundown) plus `/style` and `/tldr`. Created 2026-08-04, last push 2026-10-21, 1,484 stars. I checked six claims: length, the line-one metric, the skim metric, work unchanged, the cost line, and the benchmark's history. The evidence is the metric code, the raw data, issues and PRs, and the commit log. The verdict is **hold on always-on use, keep only the measuring structure.**

## What it is

**Three markdown files that plug into Claude Code's `output-styles` feature.** The line `keep-coding-instructions: true` at the top of each file means "leave the coding instructions as they are."

| Part | Size (English words) | What it does |
|---|---|---|
| Attention-kind | 1,327 | Verdict on line one, short by default, expand only what matters, `→` markers so bold alone gives the answer |
| Spartan | 618 | Same frame, warmth and cushioning removed, imperative |
| Rundown | 460 | One-line summary, status list, numbered choices |
| `/style` | — | Edits the single `outputStyle` key. Write access is limited to two `settings.json` files |
| `/tldr` | — | Squeezes someone else's text into a summary line, 3 to 7 points, and action items. "No new claims" |

## Techniques, and when each one holds

| Technique | Holds only when |
|---|---|
| **Answer first, length as a signal** | The reader will not finish. Whatever comes after their attention runs out counts as not delivered |
| **Bold alone carries the answer** | A rendered markdown screen, read by skimming |
| **Brevity switches off when asked to go deep** | A safety valve so "short" does not become "left something out" |
| **A blocking question goes in the last block** | Notifications and skimming, where a buried question hides that work has stopped |
| **Deliverables come bare** | Requests for an email or commit message you will paste as is |
| **One source, a generator, a release check** | Copies must never drift. A mismatch in tag, `VERSION`, in-file marker or byte-identity of copies stops the release |
| **Porting to other agents** | The header is Claude Code only, so everything after the `body-start` marker is cut out with `sed` |

The source-and-copy identity gate has the same shape as the one in the [anti-slop entry](/en/teardowns/harness/anti-slop/index.md). This one is far smaller and simpler.

There are four conditions overall. It assumes answers in English, one question with one answer, use in the main conversation only (the README says sub-agents are not covered), and a note that is loaded as input every session.

## What broke when I opened it — six places

> **[도판]** Neither number is false. The name on each does not match what was counted.
>
> Two contrasts. Top: the share of answers whose first line starts in bold is 3 percent with the style off and 75 percent with it on. Bottom: the Attention-kind note grew from 439 words on August 5 to 1,327 words on October 21, three times as long, while the README's 650-token line stayed the same.

| # | Claim | What I checked | Result |
|---|---|---|---|
| 1 | Length down ~43%, median 41% | Recounted `gen2.jsonl`, 24 questions × 3 runs. Pooled **42.9%**, per-question mean 40.9%, median 40.6%, range 7.2 to 71.2%. Lookups (52%) and explanations (46%) shrink most, **writing (26%)** least | Reproduced |
| 2 | Answer on line one, 75% vs 3% | The metric (`answer_first`) asks whether line one starts with `**`. 54/72 vs 2/72 reproduces, but it is compliance. The "6 words vs 40" figure uses the same family (`words_to_emphasis`), and its **median is 0.0 vs 26.0** | A shape metric |
| 3 | Easy to skim | The same file's own numbers: anchors per 100 words **6.9 → 5.7 (down)**, mean paragraph **35.9 → 32.6 words (almost flat)**. What shrank is the longest block (37 → 15) | Half supported |
| 4 | Work unchanged, 97% vs 97% | Before grading, `extract_code` drops the prose and keeps code. Any effect on how much work gets done is invisible by design. Issue/PR #7 (merged Sep 6) is the counter-example | Counter-example outside its reach |
| 5 | Cost ~650 tokens | The line dates from the 2026-08-05 commit (439 words). Now 1,327 words. About 1,900 tokens [estimated] | Stale |
| 6 | The benchmark's history | The first benchmark drew the criticism "Claude generates, Claude grades, and the rubric restates the style's rules" (issue #4). The author rebuilt it on Aug 11 with hidden tests and judge-free metrics. An Aug 12 commit removed five old result files from the public tree (git history keeps them) | A fact |

The author's response was good. After the criticism they rebuilt it with **metrics that need no judge**, and their limits section states the small samples and the coding-only scope. What this entry points at is not a weak response. It is that some of the new metrics **came back to the shape of rule-following.**

The [conclusion that recurs in this category](/en/teardowns/harness/index.md) shows up again: the name on a number and what it counted come apart. It is the same kind of gap as "944 vs 1" in the [eli5 entry](/en/teardowns/harness/eli5/index.md).

## Against my setup → what to take → verdict

| Technique | Where it would go | Verdict | Gain | Cost to adopt | Cost to undo | Confidence |
|---|---|---|---|---|---|---|
| Attention-kind, always on | One `outputStyle` line | **Hold** | Length −10 to −45% [estimated, middle band of the English per-question range] | One line plus two rule clashes to settle | One line | Low (no Korean measurement) |
| **Measure the work and the wording separately** | Checking the effect after I change a response rule | **Take** | "Did it get better" as a number, not a feeling | Half a day of scripting [estimated] | 0 | Medium. Wording metrics rise when the rule is followed, so the work metric must be separate |
| Hide manual-only skills (`disable-model-invocation`) | Two skills | **Hold** | 1,052 of 29,405 description characters (3.6%) | One line each | One line | High (official docs). But the spoken way to trigger them goes away |
| Blocking question last, mark unknown | Existing rules | **Drop, already solved** | 0 | — | — | High |
| Source-and-copy check | (no copy folder on this PC) | **Drop, nowhere to apply** | 0 | — | — | High |

**Reopen when.** I measure 10 to 20 Korean questions with and without the style and the drop is at least 20%, I have settled the rule clash, and I have confirmed small-talk turns do not get the format. Measuring it next to the built-in Concise style would also do.

## What I didn't do

- **Korean measurement.** I did not turn the style on and ask the same questions. Running it as a child process would carry my personal settings along and contaminate the comparison.
- I **did not open the built-in Concise text.**
- **Independent-lens adversarial checks** (refute, already solved, condition violated, each run without seeing my conclusion) and the "what survives" stage were skipped. This is the basic depth.
- The 1,900 tokens is a conversion. The description total counts only the first line of each skill's description, so multi-line descriptions may be undercounted.
- The verdict reflects **one person on one PC**.
