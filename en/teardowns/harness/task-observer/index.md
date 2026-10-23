# task-observer — the skill that improves your skills but never edits them

> A skill that jots down what you correct while you work and, once a week, hands you proposed edits to your skills. The video sold it as a token saver. The repo is not one, and it reads 45.6KB at the start of every session.

- Headline number: 103 credited · 45.6KB core
- Rendered page: https://aitryed.com/en/teardowns/harness/task-observer/
- Other language: https://aitryed.com/ko/teardowns/harness/task-observer/index.md
- Repository: https://github.com/rebelytics/one-skill-to-rule-them-all
- Source (Intro video (신영선의 AI탐구, 33-second Short, in Korean)): https://www.youtube.com/shorts/EA7-dTFEKKc
- Source (Author's page): https://www.rebelytics.com/task-observer/
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**task-observer is a skill that watches Claude while you work, writes down what you corrected and what you keep repeating, and once a week asks "should these skills change?"** A skill is a text file that tells the AI how to do a job. This one reads your sessions, drafts edits to your other skills, and then stops. It does not apply them. The source is [github.com/rebelytics/one-skill-to-rule-them-all](https://github.com/rebelytics/one-skill-to-rule-them-all).

> **[도판]** Writing the notes is automatic; changing the skills is not. A side folder for staged edits sits between the two, and that folder is the whole design.
>
> How task-observer flows. On the left, while you work, corrections and repeated jobs are written as one observation file each. In the middle, once a week, similar ones are merged and a staged edit of the skill is saved. On the right, a person reviews it and installs it by hand. Until then the real skill is unchanged.

## The video and the repo disagree in three places
The video (33 seconds) is titled "Two open-source tools that save Claude tokens." The first is Headroom, a compression tool; my own teardown is in [the Headroom entry](/en/teardowns/memory/headroom/index.md). The second is this skill. The video says: every time I fix Claude's output it records it beside me, stores those as rules, and for months of corrections I no longer have to repeat myself. The direction is right. Opening the repo, three things differ.

| The video | The repo |
|---|---|
| A token saver | There is no token-saving feature. It does the opposite and **reads a 45.6KB core file every session.** Any saving would be indirect, fewer rounds of repeating yourself, and the repo never measured that |
| Stores rules | What it stores is **observation notes**. A note becomes a rule (a skill edit) only after a person reviews it |
| No more repeating yourself | A goal, not a promise. The author writes that with only a few skills, **the AI's built-in memory may cover much of the same ground.** The repo also says installing is not enough: you add an activation line to your settings file |

## The problem it tackles is skills freezing in place
Once you write a skill, it stays as it was unless you go back and edit it. You feel "this part falls short" all the time while using one, but in that moment few people open the skill file. So task-observer takes one job only: **catch that moment as a note.** It looks for three things.

- Where you corrected the AI's output
- Work you repeat that no skill covers (a new-skill candidate)
- What this skill itself missed

## I counted, and "over 90 contributors" holds up
The README says over 90 contributors are credited in the commit history. GitHub's contributors tab shows **5**, which made me doubt it. I pulled all 344 commits and counted.

| What I counted | Number |
|---|---:|
| Names that wrote commits | 6 |
| Names in "Co-authored-by" lines | 104 |
| Both combined, minus 5 AI model names | **103** |

So the claim holds. It counts name strings, though, and someone using two names would be counted twice. Only **18** pull requests were merged and the maintainer wrote nearly every commit. Most of the credited people look like issue authors the maintainer added as co-authors (that last sentence is read off the numbers; I did not open the issues one by one).

## The biggest number cannot be checked
"Over 1,900 observations across 83 skills" comes from the author's private workspace. What is public is the tool, not the log, so **I could not recount it.** For the same reason the line "most of my 83 skills started from the skill's own observations" can be neither believed nor refuted.

## It spends tokens, it does not save them
That is the opposite of the video's title, so it gets its own section. The core file `SKILL.md` alone is **45.6KB**. At roughly four English characters per token that is about 11,000 tokens (an estimate, not a tokenizer count), and the file is written to be **read before the first tool call of every session.** On top of that sit 8 reference documents at **468KB** and 5 helper scripts at **146KB**. The references load only when needed, but the core already sets the floor for what adopting this costs.

## Against my setup: not adopting it for now
- My skills folder has 113 entries and my memory folder 238 files. I am past the scale where the author says it starts to pay off.
- But I already have a path in the same spot. Repeated corrections pile up as **memory notes**, and a weekly `weekly-learn` check turns them into changes after my approval. Adding task-observer would give me two paths for one job.
- This is not my first time here. In July I hooked my PC to "observe everything automatically," and later found the summarizing step had never run: **127 files and 20.6MB of observations, and zero lessons.** What survived was the plain memory notes I write by hand. task-observer reads to me like a design aimed at that same failure, writing quietly stopping, using rules such as "write to disk after every third finished to-do" (my reading, not something the docs say). The direction is right, but every added rule also grows the core.
- The skill's principle "when a rule is broken twice, stop rewording it and build a barrier" **is already in my notes** (a rule that lives only in a document is not a gate). Nothing new there.

## What I don't know yet
- **I did not run it.** I don't know how good the observations are after two weeks of use, or how reliably the activation line works.
- **I did not read the 8 reference documents.** I read only the first 30,000 characters of the core file. The weekly review procedure is not covered here.
- The video's claims come from auto-captions, and no repo address appears in it. I picked the repo that best matches what the video describes. There is a small chance the video meant a different tool.

## The detailed record starts here
**task-observer automates the writing and leaves the changing to a person.** It was created on 2026-02-15, last pushed 2026-10-16, is at version 3.7.0 and has 3,512 stars (as of 2026-10-23). The license is CC BY 4.0, which lets you use and modify it if you credit the source. Six releases shipped in the 25 days from 3.3.0 on 09-21 to 3.7.0 on 10-16. I checked four things: the contributor count, the 1,900 observations, size and adoption cost, and three sentences from the video. The verdict is **hold, nothing harvested.**

## What it is
**A meta-skill that sits on top of Claude's skill system.** While you use other skills it watches the session, writes observations as files, and from those builds edits to existing skills or candidates for new ones.

| Part | Size | What it does |
|---|---:|---|
| `SKILL.md` (core) | 45,556B | Start-up procedure, what to log, how to log. Written to be read before the first tool call of a session |
| `references/`, 8 files | 468,312B | Weekly review, skill-writing rules, log format, environment setup. Read only when needed |
| `scripts/`, 5 files | 145,582B | Start-up scan, new-observation file creator, bundle validator |
| Observation log | — | An `observation-log/` folder with **one file per observation** (status, target skill and title in the header) |

The log is split into one file per note so a session can **scan only the headers** at start and keep the cost down. I could not check whether that scan still holds up at 1,900 entries.

## Techniques, and when each one holds
| Technique | When it holds |
|---|---|
| **Write to disk after every third finished to-do** | Sessions that use a to-do list. A chat with no list has no trigger (the doc admits this) |
| **Start-up scan reads headers only** | When the log is one file per note. An empty scan reads as "the command is broken," not "nothing there" |
| **If it's the same finding, extend the old note** | On the author's log, roughly 40 of 91 open entries were one finding restated |
| **Broken twice, build a barrier, not a sentence** | When a rule fails twice with no fix in between. The proposal must be a hook or a checker |
| **Install only after human approval** | The weekly review writes edits to a separate folder, and a person installs them outside the session |
| **Two-layer activation** | The skill's description triggers, plus a line in a settings file, plus an optional session-start hook |

## What broke when I opened it — three numbers and three sentences
> **[도판]** The repo's numbers held up where they could be checked. What did not hold was the label the video put on it, "saves tokens."
>
> Four claims checked and the result. Over 90 contributors was reproduced with 103 names. 1,900 observations across 83 skills cannot be checked because it is a private record. The video's token-saving tool label did not hold because the skill reads 45.6KB every session. The video's stores-rules line did not hold because what is stored is notes and a person does the changing.

| # | Claim | What I checked | Verdict |
|---|---|---|---|
| 1 | Over 90 contributors | 344 commits via API: 6 authors + 104 co-authors = 108 names, minus 5 AI model names = **103**. The contributors tab shows 5 | Reproduced (by name) |
| 2 | 1,900 observations, 83 skills | A record in the author's private folder. No log in the public repo | Can't check |
| 3 | 220+ issues and PRs closed | **238** closed issues, **18** merged PRs (search API) | Reproduced |
| 4 | Video title "saves tokens" | No token-saving feature, and a 45.6KB core is read each session. The indirect effect was not measured | Off |
| 5 | Video: "stores rules" | What is stored is observation notes; skill edits come after human approval | Off |
| 6 | Video: "no more repeating yourself" | The README admits built-in memory may be enough at small scale, and asks for an activation line beyond installing | Overstated |

## Against my setup → what to take → verdict
| Technique | Applies to | Verdict | Gain | Adoption cost | Undo | Confidence |
|---|---|---|---|---|---|---|
| All of task-observer, always on | A settings line plus the skills folder | **Hold** | Speed at which repeated corrections harden into skills [can't estimate — not run] | About 11,000 tokens per session [estimate] plus overlap with the weekly check | Delete the folder and one line | Low |
| Barrier after a second break | Existing rule | **Rejected — already solved** | 0 | — | — | High |
| One file per note, scan headers only | Memory index | **Rejected — already solved** | 0 | — | — | High |
| Two-layer activation | Skill invocation | **Rejected — nowhere to apply** | 0 | — | — | Medium |
**When to look again.** If the same correction shows up three or more times as separate memory notes (the signal the repo itself names), or if my skills grow enough that editing them by hand stops being manageable. I would start by installing it for two weeks and counting how many observations were usable.

## What I didn't do
- **Install and run it.** This is the biggest gap. The verdict rests on reading and counting only.
- **The 8 reference documents and the back of the core file.** A tool limit stopped me at the first 30,000 characters of the core, and I did not open the weekly review procedure.
- **The 1,900 observations.** They sit in a private folder, so I could not count them.
- **The 11,000 tokens** is converted from character count. I did not run a tokenizer.
- **Identifying the tool in the video.** I matched the repo from captions and the 33 seconds of footage. I could not check the video's description box.
- **Independent adversarial verification** (refutation, already-solved, broken-precondition, each run without being shown the conclusion) was not run. This is the default depth.
- The verdict is for **one PC and one person.**
