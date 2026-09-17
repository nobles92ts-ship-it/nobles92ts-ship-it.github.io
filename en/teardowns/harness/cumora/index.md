# cumora

> The only hold among eight. The adversarial pass found that my own deploy was leaking too — and both the diagnosis and the prescription were wrong.

- Headline number: 2 takeaways → 0
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/cumora/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/cumora/index.md
- Repository: https://github.com/yetone/cumora
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**On the surface a team chat app; the real centre of gravity is machinery that stops several AIs in one room from talking over each other. The only hold among eight. And the most expensive part was not the target — my own diagnosis and my own prescription were both wrong.**

> **[도판]** It isn't a central picker deciding who speaks next. Everyone fires first, and the server catches them afterwards.
>
> The path an agent takes to say one thing. A cloud brain and a BYOA daemon on my own PC share the same coordination-rules constant and enter through a single pipe, the cumora CLI shim, then have to clear three gates — a freshness preflight, a hold token, and an in-transaction identity check — before the message is stored. If it is caught, a HELD envelope carrying the messages it missed comes back.

## The real problem it solves

Picture a chat room with **several AIs** in it. A person asks one question and **all three wake at once and start writing an answer.**

The trouble starts here. All three write **based on what they saw as the last message.** While they were writing, the other two already posted.

**Result: three of them separately answer something already answered.** And having not seen each other's answers, **their contents conflict.**

In a human meeting this resolves by reading the room. **AIs cannot read the room.**

## Their answer — "everyone fires, the server catches them afterwards"

The usual approach is **to decide the order centrally** — *you go next.*

This goes the other way. **Everyone fires, and the server catches them after the fact.**

| Device | What it does |
|---|---|
| **A marker of what each has seen** | The server remembers the newest message each AI was actually shown |
| **When it catches you, it hands back what you missed** | Not a bare refusal — **it returns the body of what you have not seen** |
| **Showing it advances the marker** | You have seen it now → **resend and it passes** |

The second is the good one. A bare *not right now* leaves the AI **not knowing what changed, so it sends the same answer again.** **Hand it what it missed** and it reads that and writes something different.

## And the comments carry accident reports

The most valuable thing in this repository was not code but **comments.**

**One.** The bypass token's lifetime is capped at two minutes, with this attached:

> **Long lifetimes turn a yielded hold into future bypass ammunition.**

That line came from a real incident. An AI **accepted being caught and yielded**, then **banked the token and spent it three minutes later in a different turn.**

**Two.** On the backstop that breaks a loop:

> **This backstop has been deleted twice "for AI-native elegance" and loops regressed both times — do NOT remove it.**

Because *deleted twice, regressed twice* is written down, **the third person does not delete it.** A bare rule gets deleted; **an incident history does not.**

## But all three of its self-declared defences failed

The repository advertises three defences. **I checked each one for real.**

**One — the CI guard cannot catch its own idioms.** I imported the judging function and called it directly. The rule **matches only one particular written form**, and **all seven places in their own code use a different one.** The only match in the whole repository is **a single probe line.**

**Two — the benchmark has never run.** The harness exists and **the automation is switched off, with zero run history.** The missing results folder is not *not built yet* — **the only job that would build it is off.**

**Three — what users receive is three weeks old.** Thirty fixes landed in five days and **none of them are in the published build.** One of them was **a bug that stalls every agent indefinitely.**

And here is the worst part: **the publish workflow is green both times.** Because **the version did not change, so it did nothing — and reports that as success.**

**Four — a flagship gate behaves differently from its own comment.** The comment asserts *this check runs with no exceptions*, and **the code immediately below is wrapped in a condition** that means **it never runs at all in a two-person conversation.**

## So I laid the same ruler on my own deploy — this is the actual subject

I took **"commits daily, users get a three-week-old build"** and held it against my own pipeline.

Two search-engine files on the live site were **both missing (404).** They exist perfectly well on my machine.

I read that as: **the deploy claimed to upload and did not.**

So I wrote the prescription. **Build something that reads the live site back and confirms.** I ranked it my number one takeaway.

## Both the diagnosis and the prescription were wrong

Re-verified, it collapsed.

| | Their disease | My state |
|---|---|---|
| Symptom | Ran, did nothing, **reported green** | Files absent from live |
| The name of it | **A false success signal** | **No signal at all** (no CI; deployed by hand) |

**The same medicine prescribed for a different disease.**

Theirs is **a signal that lies**; mine is **no signal existing.** A read-back check treats the first and does nothing for the second.

→ What I took: **similar symptoms are not the same illness.** And **putting someone else's diagnosis on your symptom produces the wrong medicine.**

## Two takeaways became zero

I had written **two partial adoptions** in the first pass. **Verification deleted both.**

| Candidate | Why it went |
|---|---|
| A deploy read-back check | **The diagnosis collapsed** (above) |
| Splitting out the judging logic | **The same thing already runs in another of my pipelines, with 16 tests** |
| The token scheme | Not wrong in principle — **I have only one writer**, so there is no contention |
| Pacing | **The one piece I do not have** — but their constants come from **a single incident**, so they do not port |

The last row is the only thing I lack here. So it is **held**, and when **the situation is recorded even once on my side**, I will **derive the numbers from my own curve.**

## Which is why this is a hold, not a rejection

The only one of eight. Because **the machinery itself really is well built.**

What broke is **the deploy discipline**, not the design. So **when the release channel catches up with the code, I look again.**

## What I did not do

Stated plainly. **I did not run the benchmark myself.**

Coordination is this project's only differentiator, and **the automation that would catch a regression in it is off.** Which leaves **running it myself as the only way to judge it.**

Their own stated estimate was **$58–101 per cycle.** I did not spend it this time.

So everything here about coordination reaches **as far as reading the code**, and **whether it actually coordinates well is unmeasured.**

## The detailed record starts here

**The only hold among eight.** On the surface cumora is a cross-platform team chat app, but the centre of mass in the code is <strong>a server-side arbitration stack that keeps N agents — each waking up independently in the same room — from stepping on each other</strong>. 2,858 stars, five days old in public. The arbitration machinery itself was worth reading — the seen-cursor, the hold token, the dependency-free triage core — while the three things the project puts forward as its own defences (CI guards, benchmark reproducibility, the release channel) all broke when I measured them. **But the most expensive part of this piece isn't the target.** I turned the same lens on my own deploy, got <strong>"mine is leaking too"</strong>, and **both the diagnosis and the prescription were wrong.**

## What it actually is

**A team chat that seats agents in the same chairs as people.** An agent is not a separate bot account — it is a row in `participants` exactly like a human, and it uses DMs, groups, kanban cards, the calendar and real email from the same surface. Postgres is the source of truth, Redis is the pub/sub and presence bus, the server is stateless, a React renderer sits on that, and four shells — desktop, mobile, web, admin — sit on top of that again.

| Item | Measured 2026-08-22 |
|---|---|
| Scale | 2,858 stars · 346 forks · 686 files, 33MB — **26MB of that is PNG**, so the actual code is about 6MB |
| The heart | `server/src/agents/` — 280KB of server-side CLI · 170KB cloud turn loop · 159KB BYOA daemon |
| Tests | 52 unit · 26 integration files, roughly a third of the server source. But **zero front-end unit tests** |
| History | Repo created 2026-08-17 · 48 commits · 0 tags · 0 releases — **five days of observable history** |
| Licence | MIT. Though 111 anime emoji PNGs with no attribution or rights notice sit in the tree |

**There are two brains.** In the cloud, the server runs a multi-hop tool-call loop on the OpenAI Responses API and keeps the body in a per-agent pod. BYOA (Bring Your Own Agent) runs a daemon on the user's own machine that uses four local CLIs — claude, codex, grok, cursor — as the brain. Isolation is by directory and token only, and **the engine's login config directory is never relocated**, because moving it breaks the credentials.

**The one-line operating rule is "fire optimistically, let the server catch you."** That is the opposite of the mainstream answer, where a central selector decides who speaks next, and the price it pays is gates stacked in layers. An empty database is seeded with 6 agents, 3 humans and 9 conversations, but **zero messages** — every conversation you see on screen was generated on the spot, and that is the user's spend.

One thing this section cost me. **Quote scale in file counts or megabytes and you end up counting assets as code.** I first wrote "686 files, 33MB", and only after recounting by extension did the real size of this repository appear.

## The techniques — gates stacked in layers, with numbers laid under the AI's judgement

| Technique | What it is |
|---|---|
| **seen-cursor freshness preflight** | For each agent, Redis holds a monotonically increasing "highest sequence I was actually shown" (TTL 600s). Before a reply, it queries for anyone else's messages newer than that, and if there are any it returns them **with their bodies included** |
| **HELD envelope** | The refusal hands back "the state you haven't seen" in full, and **advances the cursor the moment it shows it.** That is why the resend passes without any flag |
| **In-transaction identity check** | The preflight alone leaves a TOCTOU window. It uses the fact that the row lock on sequence allocation is held until COMMIT: inside the same transaction it re-reads the last message from someone else and rolls back if it is identical |
| **Hold token** | It demotes the bypass flag to <strong>"consent to a state the server just showed you."</strong> TTL 120 seconds, consumption is atomic. If the room moved on in the meantime, the consent is void |
| **Dependency-free triage core** | The gate that decides only "is this my turn to speak" imports nothing but types. That is what makes it possible for the server to build the prompt, a small local model to run it, and **the same parser to judge the result** |
| **A deterministic floor under the loop** | Numbers are laid under the AI's judgement. A claimed thread hard-caps at 20 messages after the last human interest; an unclaimed thread uses **messages > participating agents** as a self-scaling bar instead of a fixed number |
| **Two CI architecture guards** | "Big models only inside agent turns" and "every LLM call goes in the ledger" are enforced with a line-level scanner, an allowlist, and exit 1 |

**The valuable part is the comments.** The lifetime limit on the hold token carries `Long TTLs turn yielded holds into future bypass ammunition.` — a line that came out of a real incident where an agent accepted being held, yielded, then **banked that consent and spent it three minutes later on a different turn.** The loop floor carries `REGRESSION GUARD: this backstop has been deleted twice "for AI-native elegance" and loops regressed — do NOT remove it.`

What is worth learning is the idea of giving consent **a lifetime**. Define the bypass flag not as "the client's opinion" but as "a response to the state the server just displayed", and consent becomes something you cannot bank.

## What broke — all three of its self-declared defences

- **The CI guard cannot catch the repository's own idiom.** The checker function is exported, so I called it directly. The regex for the engine-spawn rule only fires when the first argument is a **string literal**, and all seven spawns in the engine adapter use variables — the only line that matches anywhere in the repo is a single probe. The hardcoded model list is stale too, so three model names actually in use pass straight through, and because the comment stripper cuts a line at `//`, **any line containing a URL disappears entirely.**
- **The benchmark has never run once.** The harness exists, but the workflow is `disabled_manually` with zero run history. The results directory and the history branch are not "not made yet" — **the only job that would make them is switched off.**
- **The daemon users receive is a three-week-old build.** There have been zero npm publishes since open-sourcing. The roughly thirty fixes merged in those five days — a fetch without a timeout that stalls every agent indefinitely, a `--stop` that silently skips and reports success, a Windows spawn failure — are **in none of it.** And yet the publish workflow is green both times. The version never bumps, so it ends as a no-op, and that no-op is reported as success.
- **The headline gate behaves differently from its own comment.** The comment on the in-transaction identity check asserts that "this check alone ignores even the two-person DM bypass", while the implementation directly below it is wrapped entirely in a participant-count-greater-than-two condition. **In a two-person DM it never runs at all.**
- **If Redis dies, three fail-opens stack.** Cursor lookup, hold consumption and the re-check condition each open up, and the bypass flag reverts to **exactly the unconditional free pass the hold token was built to remove.** Each individual fail-open has a test; there is **no test and no alert for the composed degraded mode.**

The headline number is the same story. The representative figure is one trial in which a seven-member team completed an eight-character relay in order — not only n=1, but the trial the docs call "today's verified state" runs on a build from **two and a half months and eight versions earlier, against a commit hash that does not resolve.**

The lesson this section cost. **The denser a repository's comments, the less you may use them as evidence.** In my first pass I copied the source comment "no bypass can get through this one gate" straight into the evidence column. Twenty lines below, the code was contradicting it.

## Held against my own setup — four were already there, one wasn't

| Their piece | My side |
|---|---|
| Line-level scanner + single source of truth + exit 1 | **Already have it.** On this site `scripts/lib/markers.mjs` is the single regex source and `deploy.mjs` sweeps the whole build output, stopping before push on a single hit. My publish skill goes further and **scans the entire history** |
| TTL seen-store + fail-open | **Already have it.** The dedup in my [Slack worker](/en/built/loki/index.md) is the same structure at TTL 3600s. Only the axis differs — mine is idempotency, theirs is freshness |
| Concurrency ceiling · regression-guard comments | **Already have it.** The job worker has its concurrency cap in the same place, and comments of the "do not delete this for elegance" genre are pinned in two files |
| **Adaptive outbound pacing** | **Don't have it.** Drop random jitter, double deterministically from 500ms up to 8 seconds, halve on consecutive successes — this piece alone is missing from my side |

So the first-pass verdict was "two partial adoptions". **The adversarial pass erased both.**

> **[도판]** Turning the lens on my own work was worth more than breaking someone else's defences. Though I read it wrong at first.
>
> Re-measuring the three defences the project claims for itself, and the same lens applied to my own deploy. The CI guard misses the repository's own idiom, the benchmark workflow is switched off, and npm publishing stopped three weeks ago while the release job stays green. On my side the live files really are 404, but the source and the deploy commit pointed at exactly the same revision, and 59 changes were sitting uncommitted.

## My own deploy was leaking too — but the diagnosis was wrong

I took "ten commits a day, and what users receive is a three-week-old build" and held it against my own pipeline. The live `robots.txt` and `sitemap.xml` were **both 404**. Both files exist in the local build output. That was as far as I looked, and I read it as "the deploy pipeline said it uploaded and didn't", then wrote down a **deploy readback gate** — re-read the live URL after push and confirm 200 — as the number-one takeaway.

**Both were wrong.**

The source HEAD and the revision the deploy commit points at were **exactly equal.** The deployed build was not stale. What was stale was the commit side — `git status` showed 44 modified plus 15 untracked, **59 in all**, sitting there for a second day, and the two files returning 404 were **born after the last deploy.** Had the readback gate run that day it would have stopped on `/sitemap.xml` returning 404, and that would have been a false alarm. At that moment the route did not exist.

**The trap was that the two numbers agreed.** The deploy script stamps the source `HEAD` revision into the commit message. However dirty the working tree is, `HEAD` returns a clean revision, so that provenance stamp says <strong>not "I deployed this code" but "I deployed from somewhere after this revision."</strong> Seeing the two values line up and reading that as "in sync" is where the misdiagnosis started. The through-line is here — **when two numbers match, first check whether they are looking at the same thing.**

**The prescription wasn't new either.** "Re-read what you uploaded and judge the release by that" is a sentence I wrote myself three weeks earlier, in the adversarial review of my own publish skill — <strong>"a scan is a verdict on the tree state, not a verdict on the release."</strong> The conclusion of two days digging through someone else's repository was already sitting in my drawer, in the same words.

**And the most expensive part was stacked on top of that.** My notes read "robots.txt 404 — the generator exists but the output isn't served, need to check whether it drops out at build or at deploy", and that line was the stated reason search visibility work had been parked for three days. But the generator I had pointed at doesn't make the sitemap at all — it is **the home mind-map figure generator.** The real sitemap route came into existence two days **after** I wrote that note. The answer was three `curl` calls and one `git status`.

**The moment you write "need to check", you have already deferred it.**

## Verdict

| Item | Pass 1 → 2 | Why · what would reopen it |
|---|---|---|
| Deploy readback gate | adopt → **rejected** | The diagnosis collapsed. Their illness is **a false success signal** — it ran, it no-opped, it reported green — while my state is **no signal at all** (zero CI · hand deploys). Same medicine, different disease |
| Pure-function gate checker | adopt → **demoted** | The same pattern already runs in my [test-case pipeline](/en/built/tc-team/index.md) with 16 tests. Porting it over is fine, but **it doesn't count as a takeaway** |
| Prompt minimalism | **rejected** | All that is shared is one 2.9KB constant, and inside it sit enumerated scenarios and sample utterances. It is the very shape the project itself calls "the most expensive kind of change". Reopen = when they actually shrink it and **publish an n>1 A/B** |
| Hold token · HELD envelope | **rejected** | Not because the principle is wrong, but because **I have exactly one writer**, so there is no race. Reopen = when two agents write to the same artifact at once |
| Adaptive pacing | **hold** | The only piece I don't have. But their constants are a rule of thumb from **an n=1 incident with no account tier stated.** Reopen = the first time a 429 is recorded, and **the constants come from my own curve** |
| The project as a whole | **hold** | Not a rejection. When the npm and desktop channels are in sync with the code, I'll look at its release discipline again |

**What I didn't do — I never ran the benchmark myself.** The coordination stack is this project's only differentiator, and the automatic machinery that would catch a regression in it is switched off, so judging coordination performance requires running it and measuring. Their stated estimate is $1–25 per trial and $58–101 for one cycle of all four, so I didn't spend the money this time. Everything I say about coordination here therefore stops at **reading code and reading registry and workflow metadata**; "does it actually coordinate well" is unmeasured.

One more piece of honesty. At five days old in public, **any cited number goes stale fast** — the 2,746 stars my feed carried on 08-20 and the 2,858 I measured two days later are **4% apart**. The subject's side is worse. The commit hash the design-rationale document cites was squashed away and cannot be verified, and that document carries **a date more than two months old under a heading that calls it "today's verified state."** So not one of the verdicts above rests on "cumora did it this way". All of them are numbers measured in my own files.

Finally, an alternative. [Buzz group chat](/en/teardowns/harness/buzz-groupchat/index.md) solves the same problem with a standard protocol, so any agent that speaks it plugs straight in. cumora goes the other way and forces every act through a single in-house CLI shim, which is why adding one engine means changing eight or more places at once. **The existence of an adapter abstraction did not mean extension was cheap.**
