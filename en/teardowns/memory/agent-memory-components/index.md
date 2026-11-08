# The components of agent memory

> Anthropic published research on splitting an AI agent's memory into four layers and fixing it after the fact with a process called dreaming. Held against my own setup, the layers already matched. The fixing step had not run in 86 days.

- Headline number: 4 layers match · consolidation idle 86 days
- Rendered page: https://aitryed.com/en/teardowns/memory/agent-memory-components/
- Other language: https://aitryed.com/ko/teardowns/memory/agent-memory-components/index.md
- Source (Original (Anthropic Engineering, 2026-11-06)): https://www.anthropic.com/research/components-of-agent-memory
- Source (Where I first saw it (Instagram summary, ai.asap.kr)): https://www.instagram.com/p/DfdWN35j1Dx/
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**Anthropic published a research post on how to build memory for AI agents — AIs that carry out multi-step work on someone's behalf. Memory is split into four layers, and after the work is done a separate pass checks the notes against the record and fixes them. They call that pass dreaming. I held it against my own memory setup. The four layers were already the same shape. The fixing pass had not run once in 86 days.**

> **[도판]** Figures 13 and 1 of the original, merged and redrawn. Layer names paraphrase the original (Injected context · Memory representations · Memory notes · Transcripts).
>
> Agent memory has four layers. The top, injected layer is loaded at the start of every session. Below it, the map layer is a wiki that links notes and records. Below that, the notes layer holds what the agent judged worth writing down while working. At the bottom is the record layer, the full session log. Dreaming runs after the session ends: it checks notes against the record and fixes them, builds the map, and promotes important notes to the top.

## In plain terms — a notebook and a recording

An AI forgets a conversation once it ends. The next one starts blank. So whatever it should still know next time gets **written to files and read back in later.** That is agent memory.

Think of a class you once took.

| Layer | Like | What it does |
|---|---|---|
| ① Injected | A sticky note on your pencil case | You see it every time, so it must stay small |
| ② Map | The contents page of your notebook | Tells you which page holds what |
| ③ Notes | What you scribbled during class | Written in the moment. Sometimes written wrong |
| ④ Record | A recording of the lecture | Long and dull, but **exactly what happened** |

**Dreaming is replaying the recording at night and correcting your notebook.** During class you are too busy writing to check anything. So you set time aside afterwards and compare. The name comes from neuroscience, where sleep is when the day's experiences get consolidated.

## What the post showed — choosing matters more than volume

The sharpest scene in the research was a Pokémon game. Two Claude models played the same game, each with a memory folder.

| | Memory files | Badges |
|---|---|---|
| Older model | **413** (225 folders) | 1 |
| Newer model | **9** plus one dashboard file | 4 |

The older model made a file for every battle and every item. Eventually it spent more time searching its own memory than playing. The newer model **skipped whatever it could read off the screen.** It wrote down only the rules it had worked out for itself.

Then they handed the models a fixed rule: record only failures. Scores went down. The stronger the model, the better it did when **left to judge what was worth keeping.**

## Against my setup — same layers, idle hands

I also give Claude a memory folder to work with. I checked each of the four layers.

| Layer | Original | Mine | Verdict |
|---|---|---|---|
| ① Injected | Keep small, push overflow down | Index file at 171 lines, under the stated 200-line cap | Same |
| ② Map | A wiki linking notes | Index → hub → note; **all 255 notes within two hops** | Same |
| ③ Notes | Let the model choose | Not failure-only (lessons 95 · project 88 · reference 72) | Same |
| ④ Record | Ground truth | 958 session logs kept as-is | Same |
| Dreaming | Check notes against record | **Last run 2026-08-14, 86 days ago** | **Stopped** |

The four layers already lined up. The trouble is the bottom-right cell. A scheduled task reminded me every week to consolidate memory, and it reported success every week. The consolidation itself never ran. No alarm went off either, because **I had built the alarm to stand down while new notes kept arriving.**

## And when it did run, it never looked at the answer key

There is a deeper difference. My consolidation procedure compares notes with **other notes and the index.** It merges duplicates and drops stale ones. **There is no step that checks a note against the session log.**

That comparison is exactly where dreaming earned its keep in the original. In the game, Claude wrote down that a building sat on the east side of a mountain. It was wrong. Trusting that note, Claude dropped off the same ledge three times. Dreaming reread the log, fixed that one line, and Claude went straight on to the next city. **Notes checked against notes vouch for each other's mistakes.** Only the recording exposes them.

## What I am taking — two changes, and one I already had

| What | Why |
|---|---|
| Add "check against the log" to consolidation | Today it only compares notes with notes |
| Alarm on "did it run" separately | Fresh notes were hiding the fact that nothing was consolidated |
| ~~One writer per file~~ | Already had it — two PCs once edited the index together and old lines came back |

The last row appears in the original too. Several agents wrote to one shared table and overwrote each other, so only 41 of 57 key facts survived. One agent and one page per contract kept all 57. I had learned the same lesson from a different accident.

## The detailed record starts here

**Zero tools adopted, two procedures to change.** The four layers in the post (injected context, representations, notes, transcripts) already matched how my memory is built. The yield came from a narrower question: **what does dreaming use as its answer key?** The post uses the session transcript. My weekly consolidation compares notes with notes. And that weekly consolidation has not run since 2026-08-14 — 86 days — even though its scheduled reminder finished with success every week.

## The source — one exploratory post, run on Anthropic's own evaluations

The original is "The components of agent memory" on the Anthropic Engineering blog (2026-11-06, Lance Martin). It is not a product launch. It is **a write-up of several internal evaluations.** Dreaming exists as a research preview in Claude Managed Agents; the post does not announce a general release.

It defines agent memory narrowly: knowledge gained from experience and **kept between sessions** as readable context. Weight updates, in-context learning within one conversation, and compaction are out of scope.

| Layer (original name) | What | Who writes it |
|---|---|---|
| Injected context | Memory loaded into every session | Dreaming promotes into it |
| Memory representations | Wikis and similar, computed from logs and notes | Dreaming builds them |
| Memory notes | Salient observations written mid-session | The agent, on the spot |
| Transcripts | The searchable event log | Written automatically |

## Six techniques — all about who fixes what, and when

1. **Memory is a prediction.** Writing a rule predicts the pattern will recur. Writing a verified fact predicts the next session will rely on it without checking.
2. **Let the model decide what to write.** Say what memory is for, not how to use it.
3. **Dreaming corrects.** It tests notes against the original transcripts.
4. **Dreaming builds maps.** It links scattered notes into a wiki.
5. **Dreaming promotes.** It lifts key notes into the injected layer, and when that layer grows it moves detail down and leaves a link behind.
6. **Dreaming can be aimed.** Instructions say what matters for the task — and dreaming can rewrite those instructions after studying its own failures.

The post cites Claude Code's auto memory as an example of item 5: it loads **only the first 200 lines or 25 KB** of MEMORY.md and reads the rest on demand.

## What held up — every number checked against the original figures

I first saw this as an Instagram summary. The account is a Korean AI-news digest, not Anthropic; "Anthropic official research" in the caption was a source credit. So I matched each number in the summary to the original. Three were not in the text. They were inside the figures.

| Claim | Where in the original | Result |
|---|---|---|
| CL-Bench database task: Opus 5.5 from 0.655 to 0.838 | Figure 3, bar chart | Matches |
| "Record only failures" cut Opus 5's memory gain by 0.234 | Figure 5, right | Matches, **3 runs** |
| One shared table: 41 of 57 facts; one page per contract: 57 | Figure 14 caption | Matches |
| 24–25 questions | Body text | Matches (24 on the merger · 25 on the corpus) |

The summary left things out. The same figure gives Opus 4.7 at −0.150 (3 runs) and Sonnet 4.6 at −0.020 (**1 run**). Meanwhile the older Sonnet 4.6, when told to read its memory and test its theories before answering, nearly doubled from 0.364 to 0.641. **Whether steering helps or hurts flips with the model generation.**

The wiki results come with their own counterexamples. On 25 questions over roughly 350,000 documents, scaling dreaming from 2 to 128 sessions lifted wiki-only answers from 13% to 48% of graded criteria. But on a task where each answer sat in a single document, the wiki did no better than search. On another, the wiki grew larger than the documents it described — the post compares it to Borges's map the size of the empire. **A map is only a map while it is smaller.**

The post's own caveats, carried over: dreaming costs compute, and checking every memory continuously may not be practical. It suggests focusing on information likely to change, or tuning cadence to how often memories are read.

> **[도판]** Measured 2026-11-08: index lines and characters, note types, link depth from the index, number of session logs, and the consolidation marker date.
>
> The four layers and dreaming, held against my memory setup. Injected layer: the index is 171 lines, inside the 200-line cap. Map layer: all 255 notes are reachable within two hops of the index. Notes layer: 95 lessons, 88 project notes and 72 references, so not failure-only. Record layer: 958 session logs are kept. Dreaming last ran on 14 August 2026 and has been idle for 86 days; when it ran it compared notes with notes, not with the record.

## My setup — over the cap in bytes, under it in characters

The index file is 28,788 bytes. Read "25 KB" as bytes and it is already over. Yet the copy loaded into this very session reached the last line. Counted as characters it is 18,268. My own notes had recorded the same thing earlier: the app's warning counts **characters**, and the file loaded in full even past 30,000 bytes. So the cap I am actually close to is **lines**, not kilobytes — 171 of 200, with 29 to spare.

The map layer was already following the post's advice. The index points directly at 145 notes. The other 110 sit one hub file further down. Unreachable: zero out of 255. When the index gets crowded I move a section into a hub and leave one line behind — the same move as "push detail down, leave a link."

## The yield — dreaming failed at "has it ever run", not "does it exist"

| Technique | Verdict | Gain | Cost to adopt | Cost to undo | Confidence |
|---|---|---|---|---|---|
| Add a log-check step to weekly consolidation | Adopt | Stops wrong notes from being trusted indefinitely [estimated] | One paragraph in the procedure | Delete the paragraph | Medium — the evidence is one game scene |
| Decouple the stall alarm from note activity | Adopt | An 86-day silence becomes a one-week alert | One condition in the detector | Revert the condition | High — measured directly |
| One writer per file | Already have | — | — | — | High — learned from another accident |
| Build a wiki with dreaming | Hold | Only when questions span documents | Dozens of sessions of compute | Delete the wiki folder | Low — the post has counterexamples |
| Remove fixed rules on what to save | Not applicable | — | — | — | My rules don't restrict to failures |

The first row is the core. My procedure says merge, correct, delete — but it never said what a correction is checked against. Matching notes to the index catches **a note that disagrees with the index.** It cannot catch **a note where both are wrong.** That is exactly the Pokémon scene: the note and the progress log ("Mt Moon DONE") vouched for each other, and the truth was only in the transcript.

The second row I brought on myself. The first detector fired when consolidation was more than 10 days late. It went off while I was clearly writing notes, so I called it a false alarm and changed it to fire only when note-writing had also stopped. **That made "writing notes but never consolidating" count as healthy.** By the post's own split, writing notes and dreaming are different jobs. One running is no reason to silence the other.

## Where my verdict cracked — I nearly wrote "already have it"

When I first filled in the comparison, I almost put "already have — weekly self-evolution" in the dreaming cell. There was a scheduled task, it succeeded every week, and the procedure used the word "correct." All three were evidence of **having** it. Only afterwards did I open the last-run date. It failed at layer three of [this category's fourth axis](/en/teardowns/memory/index.md) — **has it ever been switched on.**

There was an error the other way too. When I first measured the index in bytes I nearly concluded "over 25 KB, the tail gets cut." I withdrew that only after confirming the last line had loaded in this session. **Don't call a limit exceeded before checking its unit.**

## What I did not do

- **The log-check step is not in yet.** This piece stops at the verdict. When I add it, it should start with notes likely to change, as the post suggests — the logs in this folder alone are 5.8 GB, so checking everything does not pay.
- **I did not reproduce the post's numbers.** CL-Bench and the Pokémon runs are Anthropic's internal evaluations, and many cells rest on 1 to 16 runs.
- **I did not check the other PC.** Consolidation could have run at home with only the marker left stale. The marker lives in a folder both PCs sync, so I think that unlikely (unverified).
- **I did not try the wiki.** I have not measured whether my 255 notes face the cross-document questions where a wiki pays off.
