# AI foldering

> In folders I share with AI, programs find files by their address. So I don't design a folder shape — I ask four questions about where each new file should go.

- Headline number: 4 questions · 7 sources
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/ai-foldering/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/ai-foldering/index.md
- Source (Theory PARA): https://fortelabs.com/blog/para/
- Source (Theory Johnny.Decimal): https://johnnydecimal.com/
- Source (Standard FHS 3.0): https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html
- Source (Repo cookiecutter-data-science): https://cookiecutter-data-science.drivendata.org/
- Source (Repo simonw/til): https://github.com/simonw/til
- Source (Video Jeff Su): https://www.youtube.com/watch?v=MM-MPS57qKA
- Source (Article project-layout critique): https://dev.to/gabrielanhaia/golang-standardsproject-layout-is-not-a-standard-russ-cox-said-so-4kjh
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**AI foldering is the set of rules I use to organise the folders and files on the machine where I work alongside AI. It comes down to one idea: I don't draw the folder tree first. Every time a new file appears, I ask four questions about where it belongs, and the answers decide its place.**

> **[도판]** Instead of drawing a folder shape, I fixed the questions that decide where a new file goes. The shape follows from the answers.
>
> When a new file appears, four questions are asked from left to right. A secret goes to the secrets folder, a photo or video goes outside the work folder, everything else goes under the folder of the tool that made it, and if it doesn't need to reach the cloud it goes into a _no_sync folder right there. When something's status changes, the folder is not moved; only its entry in an index file changes.

## In a folder you share with AI, the address is everything

Most folder-organising methods were built for documents a person will come back and read. If a file ends up in a different drawer, a person looks around for a minute and finds it.

Working with AI changes that. A large share of my work folder is **read and written by programs, not by me**: the instruction files that teach the AI a job (skills), scripts that run on a timer, the results those scripts leave behind, scratch files that live for an hour.

Programs find a file by its **path** — its address, the chain of folder names like `C:\work\site\docs\a.md`. When the address changes, a program doesn't look around. It stops.

| | A folder only people use | A folder you share with AI |
|---|---|---|
| Who finds things | a person, scanning by eye | a program, going straight to the address |
| If you move a folder | someone is briefly lost | **whatever used that address stops working** |
| So "tidying" means | re-sorting so it looks neat | **putting it in the right place the first time** |

## Four questions decide where a file lives

When a new file appears, I ask from the top down. The first question that gives an answer settles it.

1. **Is it a secret?** A secret is a key into some service — an API key or a token. It goes to the `secrets` folder. Both of my PCs use it, but it sits apart from any folder that gets pushed to a public repository on GitHub.
2. **Is it a big file, like a photo or a video?** Then it lives outside the work folder, in my documents. The work folder is backed up to the cloud wholesale, and big files turn straight into a bill.
3. **Which tool made it?** It goes directly under that tool's folder. Put the tool in one place and its output somewhere far away, and nobody will ever connect the two again.
4. **Does it need to reach the cloud?** If not, I make a subfolder called `_no_sync` right there and drop it in. That one name is enough to keep it out of the backup.

## One name does the work of a rule

The fourth question has outlived every other rule I've tried. It asks exactly one thing, and the only answers are yes and no.

My first instinct was to decide by size. When I actually measured, the largest folder worth keeping was 849MB, and one of the folders safe to delete was 404MB. **A size threshold would have made exactly the wrong call.**

Nobody has to remember this rule, either. The backup configuration has a single line telling it to skip anything named `_no_sync`, and that line catches the folder at whatever depth it sits. It already covers tools I haven't written yet.

> Why the rule exists: the backup tool's default was "upload everything", so 11GB of output that nobody had ever decided to keep had piled up in the cloud (cleaned up on 2026-07-27).

## Nothing moves on disk; things move in the index

PARA, a popular method, says to move a finished project into an archive folder. I don't. Moving it breaks the address.

Instead I change its status in an **index file** — a table of contents that says what is where and what state it's in. The AI's memory index works this way. An entry unused for 45 days drops into a "graduated" section at the bottom of the list, but the file itself never moves, and the moment anything reads it again, it goes straight back up.

The index has a fixed capacity too. The AI reads it at the start of every conversation, and past a certain size it **silently fails to read the tail.** So each line has a character limit, and a check script measures it every time.

## The AI's settings folder splits into "always read" and "open when needed"

The AI I use (Claude Code) reads the rules in its settings folder at the start of every conversation. The longer the always-read rules get, the more each conversation costs — and the more the rules that matter get buried. So there are two layers.

| Layer | What goes there | Today |
|---|---|---|
| Rules it always reads | things that hold whatever the task is | 5 |
| Guides it opens when the situation calls for it | things tied to a moment — writing code, making a commit | 13 |

One table says which situation opens which guide. Lessons from a particular field live inside that field's skill folder. **Keep the same rule in two places and the two copies will eventually disagree** — there is one canonical copy, and only one.

## What I took from other people's theories, and what I left

These rules came from reading other people's methods and holding them up against my own setup. The source links at the top of the page are the originals.

| Source | What I took | What I left |
|---|---|---|
| **PARA** (Tiago Forte) — sort by how alive something is, not by topic | marking finished things separately | moving whole folders around |
| **Johnny.Decimal** — at most ten per level, a number on every folder | too many on one level and you can't scan it | the numbers (they get baked into paths) |
| **Linux Filesystem Hierarchy Standard (FHS)** — each kind of thing has its own place | a separate place for "safe to delete" | — |
| **cookiecutter-data-science** — raw data is fixed, processed data can be rebuilt any time | the question "can this be regenerated?" | — |
| **simonw/til** — keep folders shallow, let a machine build the index | the index is canonical | — |
| **Jeff Su's video** — a nine-minute file system for people | a holding area · a cap on the index · a depth limit | relying on willpower to keep it up |
| **project-layout critique** — copy someone's whole structure and you get empty folders | never copy a structure wholesale | — |

The side-by-side comparison of Jeff Su's video with my design is its own page: [File management system](/en/teardowns/memory/file-management/index.md).

## What isn't done yet

**The folder side still runs on human eyesight.** The memory index has a check script that measures its size and line lengths every time; a script that checks folder layout was designed and never written. I wrote "rules don't run on willpower" and then didn't hold myself to it here.

A table of contents for the whole work folder, and a "holding area" where an unclassifiable file can wait, also exist only in a design document.

## The detailed record starts here

**On 2026-08-03 my work folder had 72 entries at the top level.** That was past what anyone can scan at a glance; the same idea existed under a Korean name and an English name; folders literally named "temp" had been sitting there for months. That day I gathered twenty references (ten videos, ten repos) and wrote a prescription. An adversarial review of my own answer ruled **half of it wrong.** What follows is what survived that review and is in use today. Things that were designed but never built are listed separately at the end.

## Why the first prescription failed — a method for people, applied to a workshop for machines

The famous methods (PARA, Johnny.Decimal, Zettelkasten) are all personal knowledge management: ways to organise **notes a person will read again.** But about 70% of my work folder was owned by machines — code repositories, pipelines, caches, run output.

| Family | The problem it solves | Fit for a machine workshop |
|---|---|---|
| Personal knowledge management (PARA, Johnny.Decimal) | classifying documents people will reread | **poor** — assumes you move folders when status changes |
| OS and code (FHS, monorepos) | laying out things tools find by path | **good** — assumes paths never change |
| Data (raw vs processed, date-partitioned folders) | output that piles up over time | **good** — splits by time, not by category |

The famous methods all come from the first family because that market is big, not because they're the general answer. Linux's `/usr`, `/etc` and `/var` have survived for decades on an enormous number of machines, and nobody calls them a "methodology". They're infrastructure, not a trend.

## Rule 1 — where something is saved depends on what made it

| Rule | What it says |
|---|---|
| **1-1 Output sits beside its tool** | results of a run or an analysis go under the tool or project folder that produced them. Only when no fitting folder exists do I create `C:\work\<topic>\` |
| **1-2 Never leave it in the chat** | reports, comparison tables, measurements and evidence screenshots are saved as files. The chat gets a summary and the path |
| **1-3 Content and date in the name** | the shape is `<topic>_<content>_<date>.md`, with the date as `YYYYMMDD` |
| **1-4 Secrets go in `secrets`** | a place that is backed up to the cloud (both PCs need it) but never enters a public repository |
| **1-5 Big files live outside the work folder** | recordings and videos go to my documents. The work folder keeps small things like HTML reports and JSON |

## Rule 2 — sync exclusion is done by a name

- **2-1 There is one deciding question:** "does this need to go to the cloud?" "Can it be regenerated?" is a common reason, not the definition. Test evidence screenshots can't be retaken, but they don't need to be in the cloud either, so they come here.
- **2-2 Walk down to the destination first, then create it.** I don't pile everything into one `_no_sync` at the top. I go down into the folder of the tool that made the output and create `_no_sync` there. The top-level `_no_sync` only takes one-off investigations that have no home folder at all. A single central one turns into a junk drawer whose contents share exactly one trait: "not synced".
- **2-3 The exclusion pattern has to ignore depth.** The line in the backup config is `--exclude=_no_sync/**`, and it needs no leading `/` to catch a `_no_sync` buried deep. If someone adds the `/` so it only matches at the root, **every nested one quietly starts uploading.**
- **2-4 Size is not the test.** The 849MB and 404MB folders above are why.
- **2-5 There are two syncs, and their rules are independent.** The cloud backup (S3) skips `_no_sync`; the sync between my two PCs (Syncthing) deliberately includes it. So `_no_sync` has **no off-site backup, but it does exist on two machines.** The flip side: delete that folder on one PC and **the other PC's copy goes too.**
- **2-6 Per-PC credential files stay out of the PC-to-PC sync.** If an `.env` crosses over, each PC overwrites the other's settings.

## Rule 3 — no numbers in names

- **3-1 Where things are found by path, folder names get no number prefix.** Two reasons. A number in the address means every reclassification breaks the address. And past 99, sorting breaks: compared character by character, `100_` slips in front of `10_` (the third character `0` sorts before `_`), while Windows Explorer sorts by numeric value. **What you see and what a program sees end up in different orders.** In a store that finds files by ID, like Google Drive, numbers are fine.
- **3-2 Reserved names keep their exact spelling.** `_no_sync`, `secrets` and `_archive` are words a program grabs by name. Write `no_sync` or `noSync` and the backup rule no longer recognises it. **One typo is a leak.**

## Rule 4 — don't move it; quarantine before deleting

- **4-1 Paths stay where they are by default.** When something finishes or gets archived, the folder doesn't move — the index records it.
- **4-2 I did one big move, exactly once.** On 2026-08-03 the 72 top-level entries were grouped into 28. Sixty-two items moved, none were lost. Anything with its path hard-coded into a running pipeline was frozen and left alone. The top level still has 28 folders today (measured 2026-10-01).
- **4-3 Quarantine before deleting.** The 978 items cleared out that day weren't deleted on the spot; they went to `_no_sync\_deleted_20260803\`, and they're still there.
- **4-4 Finished work goes to `_archive`.** A place for things that could be revived but won't be touched again.

## Rule 5 — the AI's settings folder: one canonical copy, and an index that routes

- **5-1 Don't touch names the program owns.** `skills`, `agents` and `rules` are fixed paths defined by Claude Code. Rename them and skills stop loading. That folder already has a by-type structure enforced on it, so my rules only apply inside it.
- **5-2 Rules come in two layers.** Always-read rules (`rules/common`, five of them) and guides opened when a situation calls for them (`guides`, thirteen). One table in `CLAUDE.md` maps situations to guides, and nothing is written into both layers.
- **5-3 The memory index (`MEMORY.md`) is a routing table, not a diary.** It records which file to open when. Three questions decide whether a line goes in.

| Question | If yes |
|---|---|
| Does it change what I do (a ban, a condition, a rule)? | the content itself goes in the index — up to 250 characters a line |
| Will I need to find it later? | one line saying when to open it, plus the link — up to 150 characters |
| Neither? | **don't create it** |

- **5-4 A field's lessons go to that field's canonical home.** Test-case rules go into the tc-team skill's rule drawer; game-making lessons go into the game team's documents. They are **moved, never copied**, into the memory folder. Two canonical copies always drift apart.
- **5-5 There are three rulers.** A check script measures the whole index (24,576 bytes), guard-line length (250 characters) and pointer-line length (150 characters). Go over the total and the tail gets cut off, breaking routing **without a single error.**
- **5-6 Graduation and revival.** A line unused for 45 days becomes a graduation candidate, and it only drops after a person approves it in the weekly review. If a graduated file is read again, it goes back up, no conditions. It's PARA's "archive" without moving a single folder.

## Rule 6 — don't merge stores; put a hub on top

Three stores with different jobs (a game wiki, the AI's operating rules and skills, and work output) were **not moved.** A thin hub called `_BRAIN` sits on top of them. It has four parts: a map of what lives where, a search that covers all three at once, an intake order for new knowledge (proposal → inbox → review), and a list of folders to leave out of the index.

Memory is split four ways: **D** (domain — facts like the game wiki), **P** (procedure — how work gets done, skills), **E** (episodes — run records) and **R** (reference material). Each has its own write rules; D, for instance, is never edited directly by the hub.

## What I rejected — five things I paid for and dropped

| Rejected | Why |
|---|---|
| **"At most seven at the top level"** | the "7±2" I leaned on is about working-memory capacity, not about browsing folders. Browsing cost is more sensitive to **depth** than to count |
| **A numbered group layout** (`00_meta`, `10_brain` …) | it covered four different kinds of thing with one scheme. And the moment I wrote "don't actually move this folder" into it, it became **a map showing ground that wasn't there** |
| **"Will this still be here in three months?"** | the judge is a person and the standard is a feeling. The rule that survived (`_no_sync`) had one question and two answers |
| **"Never use tags"** | tags must not replace the main classification — that part holds. But for shared documents you can't rename, tags are the only option, so the ban went too far and I corrected it |
| **Keeping it up by willpower** | "pick one and stick with it" erodes over time. A rule nobody checks might as well not exist |

**The lesson this record paid for: before choosing a method, I should have asked who reads this folder.** A folder people read and a folder programs read share the word "folder" and nothing else — they're different problems.

## Designed, never built

The 2026-08-03 design (v4) had more in it. As of today (2026-10-01), **none of the following has been started.**

| Design | What it is |
|---|---|
| Four drawers per work folder | docs · code · results · no-sync, created only when needed |
| `INDEX.md` | a table of contents for the whole work folder, with "current work" capped at five |
| `inbox` | a holding area for things that fit nowhere, reported once they're 30 days old |
| `check_layout.js` | flags new top-level folders, names like `-temp` or `_v2`, and misspelled reserved names |
| One rules file | today the rules are scattered across a guide, memory files and this page |

⚠ The "holding area" and "index cap" were **adopted** from Jeff Su's video and still haven't been built. Adopted and running are different words. That's also why this table is on the site at all — if it isn't written down, "we adopted it" turns into "it's running" in memory.
