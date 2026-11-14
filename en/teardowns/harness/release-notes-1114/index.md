# Two vendors' coding agents, one week of changelogs, counted

> I read the full release notes for Claude Code and Codex and counted the lines. My first summary used 1.7% of one release, and the security lines sat outside it.

- Headline number: 294 items · 52% fixes
- Rendered page: https://aitryed.com/en/teardowns/harness/release-notes-1114/
- Other language: https://aitryed.com/ko/teardowns/harness/release-notes-1114/index.md
- Source (Claude Code v2.1.323 release): https://github.com/anthropics/claude-code/releases/tag/v2.1.323
- Source (Claude Code v2.1.325 release): https://github.com/anthropics/claude-code/releases/tag/v2.1.325
- Source (Codex rust-v0.169.0 release): https://github.com/openai/codex/releases/tag/rust-v0.169.0
- Source (Claude Code Code Mode docs): https://code.claude.com/docs/en/code-mode
- Source (Anthropic Python SDK releases): https://github.com/anthropics/anthropic-sdk-python/releases
- Source (OpenAI Python SDK releases): https://github.com/openai/openai-python/releases
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**Claude Code and Codex are programs that let an AI read and edit code on your own computer. I read the full changelogs both vendors published in the second week of November and counted the lines. The headline features turned out to be a thin slice.**

## What is a changelog

Every time a program ships a new version, its makers list what changed. That list is called release notes. Think of a building's notice board: the elevator replacement gets one line, and the rest is dozens of small repairs.

## What the count showed

| | Claude Code v2.1.323 | Codex 0.169.0 |
|---|---|---|
| All items | 294 | 259 |
| New things | 16 (5%) | 6 |
| Fixes | 154 (52%) | 6 |
| The rest | changes, improvements, other | docs 2, chores 2, commit list 243 |

**New features are about 5%. Fixes are half.** The news only ever covers that 5%.

## The two vendors do not write notes the same way

Claude Code puts every line into one flat list. Codex puts twelve hand-picked lines on top (six features, six fixes) and attaches 243 commit titles below them.

So counting items to see who works harder gives a wrong answer. The two numbers come from different rulers.

## What my first summary missed

I first pulled only the opening 700 characters of each recent release. For v2.1.323 the full text is 41,650 bytes, so I had read **1.7%** of it. New features sit at the top and were caught. The lines about closing sandbox gaps sit in the middle and were missed entirely.

## The detailed record starts here

A release note is easiest to read at the top and least representative there. This entry is a line-by-line tally of notes downloaded from public repositories on 2026-11-14. It does not declare either tool better.

## What I counted, and how

Three documents: Claude Code v2.1.323 (11-12), v2.1.325 (11-13), and Codex rust-v0.169.0 (11-13). One line starting with `- ` is one item.

For Claude Code I sorted by the first word of each line. `Added` counts as an addition, `Fixed` as a fix, and `Changed`, `Improved`, `Renamed`, `Removed` or `Deprecated` as a change. That is a **first-word match**, not a judgment from reading each sentence.

| Claude Code | Total | Added | Fixed | Changed | Other |
|---|---|---|---|---|---|
| v2.1.323 | 294 | 16 | 154 | 62 | 62 |
| v2.1.325 | 139 | 3 | 79 | 40 | 17 |

Fixes are 52% and 57%. Both clear half, and that is as far as two documents let me go. It is too small a sample to say what a typical release looks like.

Codex 0.169.0 is built differently: New Features 6, Bug Fixes 6, Documentation 2, Chores 2, then a separate Changelog of 243 lines. Only the first sixteen are written as sentences. The other 243 are commit titles, so its "6 added" is not comparable with the Claude Code figure.

## What actually happened that week

Read for content rather than count, two things stood out.

**Sandbox lines were frequent.** The word `sandbox` appears 14 times in v2.1.323 and 11 times in v2.1.325. It is a keyword match, so not every hit is a security fix. Still, v2.1.325 opens with a fix for how zstd-compressed responses are decoded, and another line tells Claude when an isolated checkout cannot update protected files such as `.claude`.

**The extension model got a contract.** v2.1.323 lets a plugin declare which Claude Code versions it supports under `engines["claude-code"]`, and blocks install, update and load outside that range. The same version adds **Code Mode**, an experimental opt-in where Claude writes JavaScript to call its tools instead of calling them one by one.

Codex 0.169.0 leads with terminal features: several side-chat tabs, searching older tasks, folding finished activity, adding a model provider from the terminal, and handling cloud conversations from the terminal.

## A quick look at the SDKs

In November the Python SDKs reached v2.5 to v2.8 on Anthropic's side and v3.48 to v3.51 on OpenAI's. Many Anthropic fixes reject empty values, `.` and `..` in cloud request paths such as Bedrock and Vertex. OpenAI added typed async function tools and agent-session options. I read only the release titles and the opening of each for these.

## What it cost me to learn

**A summary built from the top of a document leans toward new features.** Release notes put the newest thing first, so the first 700 characters are structurally the most novel. Only after counting the full text did I see that my first summary had skipped about half of the fix lines.

**Item counts measure writing habits, not effort.** You cannot read 294 against 259 as workload. One is a flat list. The other is twelve curated lines plus a commit dump.

## What I did not do

- I did not read and classify each line. First-word matching and keyword counts are all I have, and 14 mentions of `sandbox` does not mean 14 security fixes.
- Two Claude Code releases and one Codex release are the whole sample. "Claude Code is half fixes" is not a claim I can make.
- I counted Codex's 243 commit lines but did not classify what they say.
- The 0.171.0 alpha releases have a title and no body, so there was nothing to read.
- Model quality and real-world speed are outside this entry. A changelog does not say.
- I did not open any source diff. Nothing the notes call "fixed" was checked against the code.

## Verdict

**Nothing to adopt.** I already use both tools. What this leaves is one reading habit: skip past the new features at the top and scan the middle for **fix lines that mention isolation, permissions or tokens**. You find new features by using the tool, but you only hear about a closed hole if somebody tells you.
