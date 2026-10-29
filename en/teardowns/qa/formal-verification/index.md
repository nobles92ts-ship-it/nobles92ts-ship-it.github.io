# Claude formal verification — copying finished proofs

> Anthropic had Claude prove that 239 fuzzing entry points in 123 open-source libraries never crash. I took one idea from it, letting agents copy each other's finished work, and measured it before and after in my game studio's art team.

- Headline number: time −21% · cost flat
- Rendered page: https://aitryed.com/en/teardowns/qa/formal-verification/
- Other language: https://aitryed.com/ko/teardowns/qa/formal-verification/index.md
- Source (Anthropic research post (2026-10-22)): https://www.anthropic.com/research/formal-verification
- Source (Instagram post that pointed me to it (ai.asap.kr)): https://www.instagram.com/p/De5VM-zE0Xz/
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**Anthropic asked Claude to prove, mathematically, that 239 test entry points across 123 open-source libraries never crash on any input smaller than 64 MB.** That kind of proof is called formal verification. One detail in the report caught my eye: when agents could copy each other's finished proofs, they spent 17% fewer tokens. I tried that idea on the AI art team in my own game studio. Work got 21% faster. The bill stayed the same.

> **[도판]**
>
> Fuzzing versus formal verification. Fuzzing keeps feeding random inputs into a test entry point and looks for one that crashes. Formal verification turns the same entry point into a specification; Claude writes the proof and Rocq checks it.

## Trying lots of inputs is not the same as proving all inputs are fine

The usual way to hunt bugs is **fuzzing**. You throw random inputs at a program, again and again, and wait for it to crash. Run it longer and you find more. But the space of inputs never ends, so there is always an input nobody tried.

Formal verification goes the other way. Instead of trying inputs one by one, you write a mathematical proof that **no input at all can make this program crash**. A checker program — Rocq, here — grades the proof line by line, so no human has to read it.

The catch has always been size. One operating system kernel took two person-years to build and twenty to prove. So proofs were kept for code where failure is unthinkable, like flight control.

## What changed: Claude wrote the proofs

Anthropic took fuzz tests that projects already had and turned each into a promise: "this entry point never crashes on any input under 64 MB." Then Claude wrote the proof of that promise.

| Number | Meaning |
|---|---|
| 123 · 239 | libraries proven · test entry points |
| ~180 million lines | total proof written; a typical one runs ~600,000 lines |
| a few weeks | how long it took |
| hundreds | bugs found while proving, some missed by trillions of fuzz runs |

When a proof gets stuck, there is probably a bug at that spot. Claude fixed the bug and proved the fixed code. One bug only fired on a rare input of about 20 MB. Fuzzers usually stop at 1 MB, so they never reached it.

## "Proven" does not mean "zero bugs"

The post draws this line itself. A proof says the program keeps its promise. It does not say the promise matches the real world.

This promise assumes a single-threaded program, a RISC-V chip and Linux. Most people run these libraries on x86 or ARM. That gap sits outside the proof. What the work does buy is **knowing where to look** for any remaining bug: the promise, the models of chip and OS, and the checker.

## What I took was not the proofs but the copying

I have no proofs to write. What stuck with me was an experiment near the end.

Agents working on different proofs were given a shared workspace where they could **copy each other's finished proofs**. They used 17% fewer tokens than agents working alone, and a few succeeded where solo attempts had failed. The reason was spelled out: most of any proof covers code every program has, so borrowing and adapting beats starting over.

My studio has the same shape. When the AI makes a pixel animation, it writes scripts for the drawing — and also scripts to build comparison sheets, zoom in, and run checks. Those exist for every character.

## Measured first: 84% of every script was written from scratch

I compared every art script so far, line by line, against the scripts written before it.

| | Lines | Share |
|---|---|---|
| Written from scratch | 18,012 | 84% |
| Reused as is or with edits | 3,306 | 16% |

Almost all of that 16% was **one session continuing its own work**. Scripts from other sessions were barely touched. And 7,450 of the fresh lines were not drawing at all — they were viewing, comparing and checking tools.

## So I added a list and ran the same job twice

I generated one page listing 111 finished scripts, grouped by job. Then I gave the same job to four agents.

- Job: a four-frame faint animation for Arcanine (four legs) and Machamp (two legs)
- Group A, two agents: the current way
- Group B, two agents: "before writing a script, find one in this list that did the same job, copy it, then adapt it"
- Same model, same effort level, same moment, run separately

## Less writing, faster finish, same bill

> **[도판]**
>
> Group A versus group B. Fresh script lines fell from 86 percent to 19 percent, time from 10 minutes 30 seconds to 8 minutes 14 seconds, output tokens from 58 thousand to 48 thousand. Total relative cost barely moved, from 93 to 91.

Group B's fresh lines dropped from 86% to 19%. Time fell 21%, and the text the AI produced (output tokens) fell 19% — almost exactly the 17% Anthropic reported.

Total cost, though, barely moved. Reading the copied scripts **raised the input side**, and that gave back nearly everything saved on output. All four animations passed the machine checks. Each had a flaw or two by eye (group B's Arcanine looks like its body floats when lying down), but neither group was clearly better.

I kept the change in the studio, because the same money now buys a faster finish. As a way to save tokens, this run did not prove it.

## What I could not do

- **Only two pairs.** Even the two A agents differed 1.7× in cost. Anthropic ran 36 tasks three times each. My numbers show a direction, not a size.
- **No human has judged the art yet.** Passing machine checks means "no defects," nothing more.
- **I fixed two flaws group B reported before adopting the list** — one job's scripts were scattered across sections, and copied defaults gave no hint they were tuned to a different reference. I have not re-measured with the fixed list.

## The detailed record starts here

**This is research published on 2026-10-22 by Anthropic's Frontier Red Team with Theorem.** They turned OSS-Fuzz entry points into the specification "no crash on any input below 64 MB," and Claude wrote the proofs against RISC-V executables. 123 libraries and 239 entry points were proven. I picked one experiment from the post — proof reuse — moved it to my studio's pixel-animation agents, and measured it with two species × two groups.

## What the source claims — numbers and conditions

The thesis is that LLMs are making formal verification feasible at much larger scale. The supporting figures, as stated:

| Item | Value |
|---|---|
| Targets | 123 OSS-Fuzz libraries · 239 fuzz entry points |
| Spec | no crash for every input under 64 MB and every modeled Linux response and memory layout |
| Assumptions | single-threaded static binary · fixed memory budget · RISC-V · Linux · musl libc |
| Proof size | ~180M lines of Rocq · ~600k per proof · median binary 18k instructions |
| Duration | a few weeks |
| Trusted base | RISC-V and Linux process models · the exact theorem statements · the Rocq checker |

A crash means a fault, a failed assertion, or any unmodeled behavior. The binaries were interpreted directly rather than translating fuzz tests into Rocq, to avoid translation errors.

### Bugs came out of the proving

Each time a proof stalled, Claude patched the code, the spec was regenerated, and Claude proved again. Hundreds of bugs surfaced. The post names four: a counter underflow in a decompressor that only fires on a rare ~20 MB layout; an out-of-bounds read in an image decoder needing a 64 MB input and over 2 GB of memory; a read needing a particular call order across two handles to one file; and a rediscovered libexpat CVE needing deep nesting. Fuzzers typically cap inputs at 1 MB.

### The post flags reward hacking first

"Patch, then prove" has a hole: rewrite the program into one that does nothing and anything becomes provable. The authors penalized every patch, gave extra credit for proving how few inputs a patch changed, and logged and audited patches. I have hit the same shape running my own gates — once passing becomes the goal, the target drifts toward whatever passes.

### Two kinds of efficiency — newer models, and reuse

- On 36 small verification tasks built from real OSS-Fuzz code, Opus 5.5 proved half of them with about 40% fewer tokens than Opus 5 (three single-agent attempts per task, 5M-token budget).
- In a shared workspace where agents could copy each other's proofs, they needed 17% fewer tokens than working alone. 30 of the 34 finished proofs were cheaper than the solo average, and two that solo agents never finished got done.
- The reason given: most of a proof covers parts every program has, such as C runtime start-up and AddressSanitizer.

## Tried on my setup — script reuse in the art team

My studio's art team makes pixel animation with Python scripts and leaves them in a `_scripts` folder per job. The rule even said "the next species reuses these." I measured whether that happens.

**Method.** For each script file, compare it line by line with every script from an earlier, different job folder and keep the best match. Buckets follow the source's Figure 6: identical (99%+) · lightly edited (80–99%) · heavily edited (40–80%) · new (under 40%).

| Bucket | Lines | Share |
|---|---|---|
| New | 18,012 | 84% |
| Heavily edited | 1,599 | 8% |
| Identical | 1,024 | 5% |
| Lightly edited | 683 | 3% |

115 scripts, 21,318 lines. Every "identical" case was the same session's next batch — one effects toolkit carried through batches 1, 2, 4 and 5. Between body animation and effects, or between sessions, reuse sat at 2–10%: effectively none. Split by file name, 7,450 of the new lines were viewing, comparison, checking and measuring tools — my equivalent of "parts every program has."

## The change — one shared-workspace list

I wrote a script that copies each finished script's first docstring line and usage line, untouched, into a single list. I did not summarize by hand: the moment a list is summarized, it starts drifting from the scripts. The first version grouped 111 scripts by purpose (compare, view, measure, deliver, rig, drawing).

### Experiment design

| | |
|---|---|
| Task | faint animation · facing right · about 4 frames · move-the-parts method · hold last frame |
| Subjects | Arcanine (four legs) · Machamp (two legs, four arms) — neither has an original faint |
| Bar | Charizard's original faint · machine check · five numeric filters · comparison sheet |
| Group A | current way |
| Group B | one paragraph at the top of the brief: find a matching script in the list, copy it, adapt it |
| Controls | same agent definition · model · effort level · start time · each told not to open the others' folders |

Tokens are the per-call usage summed from each agent's transcript. Relative cost weights input 1, cache write 1.25, cache read 0.1, output 5.

### Results

| | A Arcanine | A Machamp | B Arcanine | B Machamp |
|---|---|---|---|---|
| New script lines | 86% | 86% | 17% | 21% |
| Time | 9m 25s | 11m 36s | 8m 50s | 7m 37s |
| Output tokens | 54,385 | 62,494 | 50,544 | 44,622 |
| Cache writes | 123,167 | 149,208 | 161,935 | 147,529 |
| Relative cost | 698k | 1,168k | 1,001k | 816k |
| Machine check | pass | pass | pass | pass |

By group mean, B was −21% time, −19% output, −3% relative cost. Cache writes rose 13%; that is the cost of reading the copied scripts in, and it nearly cancelled the output savings. Both B agents copied from the same place: an earlier Blastoise faint job with the same motion, method and reference.

### Two flaws group B reported

- One job's scripts were scattered across five purpose sections. Both agents ended up copying a whole job anyway, so the list's unit was wrong. → regrouped by job.
- A copied tolerance default was tuned to the earlier job's reference (another sprite's 4 px). Left alone, it would have failed this run's 2 px check, and nothing in the script said where the value came from. → the list header now says to re-measure copied defaults against the current reference.

## Verdict: adopted, for time

I added one line to the agent definition and the working guide — "before writing a new script, find a whole job in the list and copy it" — and put the list generator next to them. Cost was the same, time dropped, and I found no sign of worse output.

One thing harvested, and one lesson paid for. **"Writing less" and "paying less" are different numbers.** Looking only at output, I would have reported a 19% saving. Adding the input side pushed it into the noise. Anthropic's 17% is a total-token figure, so I cannot claim I reproduced it here; my tasks are far shorter than proofs, which makes the reading cost a bigger share.

Three things remain: re-measure with the fixed list, add more samples, and have a human judge the art.
