# pstack

> One developer's working habits, written down as a manual for AI. I didn't adopt the bundle — I kept one skill as a candidate, the one that writes "how to launch it and check it yourself".

- Headline number: 61 skills · 1 candidate
- Rendered page: https://aitryed.com/en/teardowns/harness/pstack/
- Other language: https://aitryed.com/ko/teardowns/harness/pstack/index.md
- Source (Source video (Kim Flip, Korean)): https://www.youtube.com/watch?v=u2oDdU6z4Bw
- Source (pstack repository): https://github.com/cursor/plugins/tree/main/pstack
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**pstack is a bundle of skills in which developer Lauren Tan (handle: poteto) wrote down how she works, so that an AI can work the same way. It is not a program — it is a stack of instruction files, and its point is a single one: getting the AI to say "here is the evidence it's fixed" instead of "it should be fixed now".** I didn't install the bundle. I kept one skill from it as a candidate.

> **[도판]** Drawn by checking the video's description against the repository itself (2026-10-29: 23 playbooks · 2 subagent definitions · 61 SKILL.md files).
>
> When a request comes in, the poteto-mode router looks at what kind of work it is and picks one of 23 playbooks; the playbook calls principle and task skills in order, and every playbook ends with a step asking whether there is evidence it actually works.

## What a "skill bundle" is

AI coding tools such as Claude Code and Cursor read **text files that say "in this situation, work like this"** and then act on them. One such file is called a skill.

When one person ties a few dozen skills together around one way of working and gives it a name, you get a "something-stack". pstack is about 30,000 English words of these files — roughly a book. It doesn't swap the model and it doesn't install a separate program.

## Think of it as a meticulous senior's notebook

Picture the most careful engineer on your team. When a bug comes in she never fixes it straight away. She reproduces it first, clicks through it herself after the fix, and changes as little code as possible.

Write all of those habits down and hand them to a new hire, and the new hire works — not as well as her, but a lot like her. **pstack is that notebook. The new hire is the AI.**

| | A similar trending bundle (gstack) | pstack |
|---|---|---|
| Imitates | A company — CEO, QA lead, and so on | One craftsperson |
| Splits work by | Who is looking | What the job is (bug, feature, refactor) |
| Asks at the end | Are we building the right thing? | Does what we built actually work? |

## The most important skill writes the "launch it and check it" manual

It's called `create-verification-skill`, and its author calls it the most important skill in the toolbox. I opened its source in the repository to confirm what it does.

Think of the note you'd leave a new part-timer: where the lights switch on, how you know the shop is open, what to check, where to post the photos, how to lock up. **Here the AI writes that note itself, by reading your code.** Before handing it over, it walks through the note once, end to end.

| | Without the note | With it |
|---|---|---|
| The AI's last line | "Build succeeded, should work" | "I launched it, clicked through, screenshot attached" |

## I still didn't take the whole bundle

Three reasons. First, several of its core rules **were already in my setup** — "label anything you didn't check as a guess", "write down why you skipped a step". Second, pstack **splits work its own way**, and I already have a workflow that would collide with it. Third, it always opens a pull request, which doesn't fit solo work pushed straight to main.

So what I kept is the verification skill above — **and I haven't run it yet.** It's a candidate, nothing more.

## Move repeated nagging to a stronger layer

The part of the video that stayed with me longest: if you keep telling the AI the same thing, **where you put that instruction decides how well it works.**

Write "no comments" in a rules file and it sometimes gets ignored. Block it with a linter and it almost never slips. Make it impossible in the code structure and there is no way around it. The author's team took the last route — the AI **copies what it can see** in the codebase, so anything it shouldn't copy was removed from sight.

## The detailed record starts here

**pstack is a set of SKILL.md files in Cursor's official plugin repository.** One router, `poteto-mode`, reads the request and picks one of 23 playbooks; the playbook then calls principle skills and task skills in order. I came in through Kim Flip's Korean walkthrough video (24 minutes, 2026-10-23) and checked the counts and the skill source against the repository separately. **Verdict: not adopted as a bundle; `create-verification-skill` is the one candidate.**

## What I took apart

| Item | Value | Source |
|---|---|---|
| Author | Lauren Tan (@poteto) — previously Meta, Netflix, Cursor | Video |
| Form | Markdown skill bundle, ~30,000 English words | Video |
| Playbooks | **23** | Counted in the repo |
| Subagent definitions | **2** | Counted in the repo |
| SKILL.md files | **61** | Counted in the repo |
| Reference version | 0.15.28 (2026-10-18) | Video description |
| 10k uses a week · 2k PRs a month | The author's own claim — it varies from 1k to 2.5k depending on when she said it | Video |

The plugin's defaults hand code-writing to Grok and judgement, writing and the hard tasks to Claude Opus 5.5. An install path for Claude Code was added on 2026-10-16. Claude Code has no Grok, so the current session model fills that role — **which means the skills where "models from different vendors review each other's code" can collapse into one model reviewing itself.** The video flags this, and it is exactly where the information in a cross-check disappears.

## A single router file enforces the order

`poteto-mode` is one long markdown file (about 17,000 words with the playbooks). It has three parts.

| Part | What it does |
|---|---|
| Router | Reads the request and chooses a playbook. The user never spells out the steps |
| Working rules | Which skill when, which principle when. Proceed without asking on anything reversible |
| Answer rules | Tag every claim as measured, inferred or guessed. "Agreement is not the default" |

Most of the skills carry `disable-model-invocation: true`, so the model can't pull a refactoring principle into an unrelated job just because the word "refactor" appeared. The price is that **nothing happens unless you call the router.** The gap between "installed" and "switched on" is the same shape I found in the [eli5](/en/teardowns/harness/eli5/index.md) piece.

The device users credit most is a different one. **The playbook's steps are copied verbatim into the to-do list, and a skipped step stays in the list with a reason next to it.** Models quietly drop tedious steps like verification; when dropping one means writing down why, they can't slide past it.

## Where the principles kicked in during the to-do app demo

The video ran a single to-do app through seven stages. There is no playbook for building an app from scratch — this is a one-to-n tool, not a zero-to-one tool.

| Stage | Principle at work |
|---|---|
| Mock-ups | The only place the quality rules flip. The goal is a decision, not code, so compare throwaway HTML fast |
| Feature | Don't add an "overdue" boolean next to "done". State is open or done; overdue is computed from the date (model-the-domain) |
| Bug | No fix before a reproduction. **"A belt-and-braces guard added just in case is a hypothesis, not a fix"** |
| Refactor | Subtract before you add. If it isn't easier to read, it was a move, not a refactor |
| Overnight run | One table row per decision. Stop only for irreversible things — force-push, deploy, deletion |

## The verification skill's source is stricter than the video

Reading `create-verification-skill` itself turned up a bar the video didn't mention. The flow has four steps: interview the repository (ask the human only what the code can't tell you), write a skill with five sections — launch, doctor, drive, evidence, cleanup — seed a feature map of three to five pages, then run the whole thing once before handing it over.

The extra bar sits in the evidence and cleanup sections.

| Rule in the source | What it prevents |
|---|---|
| Drive the **real user path**, not internal setters or test-only endpoints | Passing via a shortcut |
| Capture **the action and the resulting state**, not just the last screen | One convincing final screenshot |
| Don't trust a dry-run's name — **observe what it actually skips** | A "dry run" that still touches the network |
| After cleanup, **confirm the evidence still exists** — cleanup that eats the proof fails | Saying "verified" with the proof deleted |
| Never kill by process name; **kill only what you started** | Closing the user's other windows |
| If a precondition is missing, **report a failure** instead of weakening the journey | Trimming the test until it passes |

My setup already has incident notes under nearly the same names as the last two rows. Same conclusion, reached by a different road.

## Put the nagging in the strongest layer you can

> **[도판]** The video's "five layers of nagging". "No comments" usually lives in layer 3; the author's team blocked it in layer 1.
>
> Five layers where a repeated instruction to an AI can live, strongest at the top: layer 1 code structure, layer 2 linters and CI, layer 3 rules files and review bots, layer 4 skills, layer 5 style guides. The bars get shorter going down to show weakening force.

The author's team banned comments outright in their internal framework. Their reason: when the AI saw comments like "temporary hack, fix later", it concluded that sloppy was fine here and followed suit. For the same reason they deleted old half-done code and kept exactly one way of doing each thing. pstack's `cut` skill does this job — it finds the mistakes you keep pointing out and fixes them in the strongest layer available.

By the same logic, **automation comes last.** Wiring bug reports straight into an AI that fixes them looks great, but bolt it on before the repository is mature and you just mass-produce sloppy pull requests. The video's line for it: a Michelin kitchen, not a software factory — run a hundred agents before you can trust one and you get a hundred times the garbage.

## The honest limits are in the author's own history

| Limit | Evidence |
|---|---|
| The gap shrinks as models improve | A 2026-09-23 commit is titled "remove 19 more pieces of knowledge Opus 5.5 doesn't need". The value is moving from teaching how to work to enforcing order and demanding evidence |
| It's slower | In one case a 30-minute task took an hour — and caught the AI misreporting |
| Most of it is prose, not enforcement | Even "no merge without verification" is a sentence, not code — layer 4 on the ladder above |

The third row is the most interesting thing in this piece. **pstack teaches "move your nagging to a stronger layer" while living mostly in layer 4 itself.** It is one more case of something this section keeps finding: the tool that breaks the claim is carried by the subject itself.

## Verdict — not the bundle, one candidate

| Subject | Verdict | Why |
|---|---|---|
| poteto-mode as a whole | Not adopted | The answer tags and "write down skipped steps" already exist here; the router collides with my existing workflow; always-a-PR doesn't fit solo work |
| `create-verification-skill` | **Candidate** | The gap between "the code went in" and "it runs on screen" has actually been empty in my setup before, and the source's evidence rules aim right at it |
| The five layers | Checklist only | For finding rules that sit only in a rules file (layer 3), keep getting broken, and could move down into a hook or gate (layer 2) |

## What I didn't do

- **I didn't install pstack.** The verdict comes from reading the video and the repository, not from running anything.
- **I haven't run the verification skill even once.** By its own standard this verdict is still a draft — until it runs, it's a candidate and no more.
- Usage per week, PRs per month and the "30 minutes to an hour" case are all someone else's numbers. I didn't reproduce them.
- The video's captions were auto-generated and mangled most proper nouns. Names and numbers were corrected from the video description and the repository.

## The line that stays

> **"A skill that has never been run is a draft, not a deliverable."** — the bar set in the verification skill's own source, and it applies to this piece's verdict too.
