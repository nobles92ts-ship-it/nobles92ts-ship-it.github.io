# Clawd on Desk

> I tried to justify installing it with measurements and failed. The record says so, in place.

- Headline number: 1.5 net of 7
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/clawd-on-desk/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/clawd-on-desk/index.md
- Repository: https://github.com/rullerzhou-afk/clawd-on-desk
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A pixel character that lives in the corner of the screen and changes behaviour according to what the AI is doing. It is the only one of twenty-one that actually got installed on my machine — and it is not justified on productivity grounds. I wrote that down where it happened.**

> **[도판]** It never modifies the agent. It only registers its own script against the hook interface each agent already publishes.
>
> A three-layer structure. An installer plants hooks in the config files of twenty-one agents; the agent spawns the hook script on every event and that script posts state over local HTTP; the app collapses many sessions into one animation. Only permission requests travel backwards, from app to agent.

## How it differs from an ordinary desktop pet

Programs that put a character on your screen are old. They follow the cursor and occasionally say something.

This one is different. It **subscribes, live, to what the AI is doing.**

| What the AI is doing | What the character does |
|---|---|
| Nothing | Wanders and looks around |
| Thinking | A thought bubble |
| Working | Mimes typing |
| **Three or more things at once** | **Busy, like a construction site** |
| Running sub-workers | Headphones on, juggling |
| **Waiting for permission** | **A bubble, plus it pulls the window to the front** |
| Finished | Celebrates, with a sound |

The interesting part is that **it is not a flat one-to-one mapping.** The same *working* state **counts how many things are running at once** and picks a different picture.

And one thing is genuinely useful: **when it needs permission it brings the window forward by itself.** That removes the ten minutes lost to being elsewhere while a *may I* sits unseen.

## But the real value of this thing was not the character

It looks like a pixel pet. **What was actually worth learning is how it installs itself.**

To work it has to **write its wiring into 26 of someone else's configuration files.** Those files are **ones I already use.** Touch them wrongly and my working environment breaks.

How they handled that was the lesson.

| Method | What accident it prevents |
|---|---|
| **Append, do not overwrite** | Losing the settings that were already there |
| **Mark the lines it inserted** | **Deleting someone else's lines along with its own** when uninstalling |
| **The installer also plants the uninstaller** | Ending up unable to remove it later |

The third is the good one. Most installers **only build the way in.** Removal becomes *later*, and later never comes.

**Building the way out while you build the way in** — I took that as a standard.

## I verified it — and one thing was broken

I checked whether it does what the documentation says, specifically **"two or more sub-workers switches it to three balls."**

I set the evidence on **two tracks — the log and the screen.** The reference images came from the original repository.

| Sub-workers | In the log | On screen | |
|---|---|---|---|
| 1 | Juggling | Headphones | As specified |
| **2** | Juggling | **Still headphones** | **Violates the spec** |

**The log was right and the screen did not change.**

That is why this method of checking exists. **Had I looked only at the log it would have passed.** Without looking at the screen I would never have known.

## Held against my setup, four of seven were already there

I matched the seven things it sells against my environment.

- **Four were already** running in another form
- The remaining three, measured, came down to **one and a half**

## I measured before and after to prove nothing broke

Since it edits 26 of someone else's config files, I **snapshotted the state before installing and compared afterwards.**

| Measured | Result |
|---|---|
| Number of guards | **15 → 30** (only grew) |
| **Anything lost** | **0** |
| Status bar | Unchanged |

**Zero lost** is the key line. It is proof that *mark your own lines and touch only those* actually worked.

## Verdict — I wrote down that it was taste

The most important part of this piece.

**I installed it.** The only one of twenty-one.

And as shown above, **four of seven were already there and the rest came to one and a half.** There is no evidence of a productivity gain.

So I wrote it down honestly.

> **I did not add this for the productivity. I added it because I wanted it.**

Why bother writing that? **Because memory changes later.**

Give it a few months and people rationalise their own choices. It becomes *I added that for the efficiency.* And then **the next similar decision gets made on a false basis.**

**Writing the reason down where it happened is the only defence.**

## The detailed record starts here

**I installed it, and that install was not justified on productivity grounds.** Held against my own setup, four of the seven things this app sells **were already running**, and measurement cut the remaining three down to **one and a half.** The value came from somewhere else entirely — this repository is a machine for **injecting its own wiring into twenty-six other people's config files, without breaking them, in a way that can be undone**, and three of those methods came home as specifications.



## What the thing actually is

**A desktop pet.** Not the kind that follows your cursor — it **subscribes to the lifecycle events of AI coding agents.** Send a prompt and it thinks; run a tool and it types; spawn a subagent and it juggles; hit a permission request and it raises a speech bubble; leave it alone and it sleeps.

It supports **twenty-one agents**: Claude Code, Codex CLI, Copilot CLI, Gemini CLI, Cursor Agent, Kiro, opencode and more. Their config schemas differ wildly — JSON, JSON-with-comments, plugin packages, Python plugins — so it carries **twenty-six separate installers.**

It isn't toy-sized. Hooks and source JavaScript alone come to 5.8 MB, and there are 384 test files **with a set per adapter.** 5,894 stars, 1,906 commits, 91 contributors.

### How events become state

Not a 1:1 mapping. **It counts concurrent sessions and subagents and raises a tier** — the same event becomes a different animation depending on how many sessions are running.

| Agent event | State | Animation |
|---|---|---|
| idle | idle | cursor-tracking · random patrol |
| prompt submitted | thinking | thought bubble |
| tool running — 1 session | working | typing |
| tool running — **3+ sessions** | working (building) | construction |
| 1 subagent | juggling | headphones |
| **2+ subagents** | juggling (tier 2) | **three-ball juggle** |
| permission request | attention | permission card + terminal auto-focus |
| task complete | celebration | celebrating + sound |

That second-to-last row becomes a problem later.

## The wiring method is what this repo really is

It looks like a pixel crab; what's actually valuable is **how it avoids breaking other people's config files.** For anyone who installs hooks and cron jobs by hand, that part is a textbook.

**① The installer plants its own uninstaller.** At install time it copies a removal script **into the install folder** and records **the user's home directory as it was at that moment** into a marker file. On removal it reads that file, restores the environment it was installed under, and strips only its own wiring out of twenty-one configs. Two points — **recovery still works if the repository disappears, and it finds the right target even if the environment has changed since.** It runs the removal script through the app binary used as a Node runtime, so it works even where Node isn't installed.

**② Append, never overwrite.** The comment at the top of the installer states the contract: *"Does NOT overwrite existing hooks — appends to arrays."* Write to a temp file, swap atomically, back up **only files that already existed**, and cap how many backups are kept. If a non-array value turns up, wrap it in an array rather than replacing it.

**③ Decide ownership by marker.** If a status line already exists, check the marker string and **if it belongs to someone else, leave it alone and just log.** Chaining happens only on an explicit request.

All three came across as **specifications, not code.** It's AGPL-3.0, and since the thing runs a local HTTP server the network clause isn't a dead letter — one copied line would put the whole derivative under a disclosure obligation.

## A confirmed defect — the tier the docs promise never rises

I checked that "2+ subagents → three-ball juggle" row directly, judging from **two independent sources, the log and the screen**, with the reference artwork pulled from the repository to fix what each animation looks like.

| Subagents | Log | Screen | |
|---|---|---|---|
| 1 | `state=juggling` | headphones | as specified |
| **2** | `state=juggling` | **still headphones** | **violates spec** |
| after exit | back to `state=working` | typing | as specified |

**The events arrive precisely and the logical state transitions; the artwork stays on the one-subagent tier.** Reproduced twice, with the one-subagent control behaving correctly.

This is where I nearly got it wrong. **Seeing `state=juggling` in the log, I could have closed it as "juggling works."** The tier isn't logged — **which asset got picked exists only on screen.** Judge a visual state without a screenshot and you verify half of it and pass.

There was a wrong answer to rule out too. Per the docs, "two concurrent sessions" uses the same headphone artwork, so what I saw could have been **session count** rather than subagents. Confirming the log said `juggling` (not `working`) at capture time ruled it out. **Skip that check and the conclusion inverts.**

Filed upstream, with the three exclusions and a suggestion: log the tier and the asset name.

There's a trap in the docs, too. One investigation document says that with the app not running, the agent auto-denies every file edit, and closes by saying it's waiting on an upstream fix. **That upstream issue was closed three months earlier.** Only the document stopped there — read it cold and you'd conclude it still breaks today.

## Measured against my setup, four were already there

I took a pre-install snapshot and diffed. **Hooks 15 → 30, zero lost, status line untouched.** That's ③ above working as advertised, and it's what ruled out the destructive risk.

> **[도판]** Judged against what was in my <code>settings.json</code> before installing. Four of the seven were already running.
>
> The seven things this app sells overlap heavily with what my setup already had. Four overlap — completion alerts, status display, away notifications, session-end handling — and only three are new. Measurement later cut those three to 1.5.

The four duplicates, specifically. **Completion alerts** — a stop hook was already raising a toast. **Current state** — the status line already showed it, permanently. **Away notification** — that was already going to Slack automatically. **Session-end handling** — two hooks already did it.

**I went looking for a tool because I felt I needed completion alerts, and the thing doing that already existed.** The real yield here is that comparison table, not the app — fill it in first next time and an adoption decision takes minutes.

## The verdict — I wrote down that it was taste

| | |
|---|---|
| The app | Kept — destructive risk ruled out by measurement. The case is thin, as below |
| The three specifications (uninstaller, safe config write, marker ownership) | **Adopted** — each maps 1:1 to an incident of my own |
| Copying code | ⛔ Forbidden — AGPL-3.0. No conditions, no revisit |

> This install was not justified on productivity grounds. I installed it because I wanted to.

Writing that sentence down, in place, was the most useful thing this investigation produced. **Because later the memory rewrites itself into "I added it for the efficiency."**

The cost gets the same honesty. The hook **spawns an extra process per tool call**, so a pipeline run could slow down — but **I didn't measure it.** That's deduced from the wiring, not observed, so it stays an estimate. Promoting it means running the same input before and after and comparing stage times.

The safety verdict has an expiry date too. What I checked was **one snapshot immediately after install**, and this app **re-syncs its hooks on every launch.** The same merge repeats from now on, and if an update changes that logic it changes quietly. Re-checking the hook count and my own hooks after the next update is what keeps this verdict alive.

⚠ And a standing guard. **If a tool use comes back denied when I never denied it, suspect the app being closed while its permission hook is still wired.** That single dashed line in the diagram above is the path — and the symptom is quiet enough to lose an entire unattended run.
