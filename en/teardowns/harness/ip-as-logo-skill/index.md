# ip-as-logo

> A skill with not one line of code. One of the two pillars I took for its core invention lives only in a file the agent never reads, and the other was a number that flipped four times in 45 hours.

- Headline number: 7 techniques → 0
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/ip-as-logo-skill/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/ip-as-logo-skill/index.md
- Repository: https://github.com/s1dashu/ip-as-logo-skill
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A tool with not one line of code. Five files, zero executable lines — the substance is 114 lines of instruction. Which makes it the best specimen I have opened for seeing how small a tool can be.**

> **[도판]** Counting five files tells you nothing about this thing. One instruction sheet is the product, and every executing party is the host agent.
>
> The structure of this skill. The product body is a single instruction sheet holding a thirteen-step workflow and a set of hand-off rules. The six candidate images are not free generation but three directions times two variants, with lower-left and lower-right pre-assigned by label. One of its headline inventions, however, lives only in the README and never runs.

## What it does

**It gets an AI to draw a mascot character** for a company or service.

Here is everything you receive:

| File | What |
|---|---|
| A sheet of instructions (114 lines) | **This is the entire product** |
| A showcase image | 713KB — **96% of the repository's weight** |
| The other three | Description and so on |

**Zero executable code, zero dependencies.** Which makes "installing" **a file copy**, "fixing a bug" **editing a sentence**, and **a release** a concept that does not exist here.

## The most instructive thing — it wrote "make it look good" as numbers

Design instructions are normally adjectives. *Clean. Simple.* **People read those differently and AIs read them more differently still.**

This instruction sheet **wrote them as numbers.**

| What | Number |
|---|---|
| Large shapes making up the silhouette | **4–7** |
| Features identifying the species | **1 or fewer** |
| Interior colour regions | **2 or fewer** |
| Share of the canvas filled | **85–95%** |

And it closes with a test: **"if it is unreadable when shrunk right down, enlarge it, merge it, or delete it."**

This works because **anyone looking reaches the same answer.** *Nine shapes, so it violates* leaves nothing to argue about.

## And the cleverest thing — it never tells the model this is a logo

The repository has *logo* in its name and **it never once calls the output a logo when talking to the model.**

The reason: ask for *a logo* and the AI tries to make **something that looks like a logo** — adding a border, a background card, lettering. **All of which has to be stripped later.**

So it **hides the purpose and asks only for the drawing.** What comes back is the character and nothing else.

→ **Tell an AI *what* to make and the conventions attached to that word come along with it.**

## The most unusual thing — "do not inspect it"

Normally you check the output and retry if it is poor. This instruction sheet **forbids all of that.**

| Forbidden |
|---|
| Inspecting the output |
| Grading it |
| Retrying |
| Fixing it in post |

What comes back is **passed along with a label attached and nothing else.**

The grounds: **"treat generation as a stochastic draw, not a conformance test."**

And it was not always so. **There was an inspection loop and they removed it themselves after two days.** A decision made after trying.

## But what I called its core invention was an illusion

Where this piece cost something.

I wrote down one rule as the heart of this thing: **"95–100% of open placements must be familiar animals."**

Checking, **that rule appears nowhere in the file the AI reads.**

| Where it is | Does the AI read it |
|---|---|
| The description file (README) | **No** |
| The instruction file | Yes — **and the rule is not in it** |

Worse, the instruction file **leans the other way**, listing animals, robots, ghosts, plants and objects **as equals.**

So: **present in the description, absent from the artefact, effect zero.**

This is the recurring lesson on this shelf — **"written down" and "running" are different.** And this time it came down to **which file it was written in.**

## The other pillar collapsed too

My other pick was **the numeric budgets above.** Looking at the change history, **those numbers moved four times in 45 hours.**

**A number that moved four times is not evidence, it is a number not yet settled.** Not citable.

To add: this repository's 29 commits **all sit inside 45 hours**, and **it has been still since.** Likes: 3,481. **People actually watching it: 3.**

## And the rejection was not a matter of taste

**There are zero image-generation tools on my machine.**

How I checked, for the record: I swept **the full text of all 99 of my tools** for image-generation vocabulary. **Eight hits, all false positives** — the letters happened to appear inside other words.

So **installing it leaves nothing to call.** That comes before good or bad.

## Held against mine — all three were already ahead

| Their technique | What I have | Result |
|---|---|---|
| Numeric ceilings | My publish gate — **ten numeric ceilings** + **a comment re-deriving why each number is what it is** + blocks the deploy when exceeded | **Mine is ahead** |
| Removing output inspection | My generator — **three checks** on a stochastic output, and it cannot enter the report without passing | **Opposite direction** |
| A cap on questions | My explain tool — **at most one question**, and none at all when it is obvious | **Mine is stronger** |

The second row is interesting. **They concluded the answer was removing inspection; I concluded it was adding it.**

Both are right. **Their output is pictures**, where there is no right or wrong; **mine are diagrams**, where a wrong coordinate is simply wrong. **When the nature of the output differs, opposite prescriptions are both correct.**

## The detailed record starts here

**There is not one line of code in this repository.** Five files, zero executable code, zero tests, zero dependencies. The substance is a single 114-line instruction sheet telling an image-generation agent how to draw a mascot, which makes it the best specimen I have torn down for seeing **the minimum unit of a skill**. But one of the two pillars I had called its core invention **lives only in `README.md` and appears nowhere in `SKILL.md`** — and `SKILL.md` is the only file the agent loads, so its runtime effect is zero. The other pillar, a set of numeric budgets, was a value that flipped four times inside 45 hours. The verdict is rejection, and the ground is not taste: **this machine has zero image-generation tools, so installing it leaves nothing to call.**

## What it is — the product is 114 lines of prose

**One skill in the Agent Skills format.** `SKILL.md` plus its frontmatter is the whole of it — no parser, no validator, no post-processor, no style reference images. So "installing" is copying a file, "fixing a bug" is editing a sentence, and the concept of a release does not exist.

| Item | Measured 2026-08-22 |
|---|---|
| Files | 5 · 739,374 B checked out — **96% of that is one showcase image** (713 KB, zero runtime role) |
| The product | `SKILL.md`, 114 lines / 16,976 B. A 13-step workflow plus an 8-line prompt skeleton |
| Code | **0 lines.** The GitHub languages API answers with `{}` |
| Dependencies | 0. The one runtime dependency is "the host agent owns an image generator" |
| Scale | 3,481 stars · 171 forks · **3 watchers** · 1 contributor · 0 external PRs |
| Versioning | 0 releases · 0 tags · 0 changelog — users tell versions apart by commit timestamp |
| Lifespan | 29 commits packed into **45 hours**, then a stop |

**The operating rules all sit in those 13 steps.** With no subject given and the current workspace being a product repo, it read-only skims the README, the package metadata and the landing copy → if that still isn't enough it fires background questions in **exactly one round** (a second questionnaire is forbidden) → it offers three one-line directions and **generates nothing before agreement.** On approval it makes two variants per direction, six images in total.

The prompt is pinned down too, as a fixed eight-line format: `Background / Subject / Complexity / Color behavior / Composition / Style / Finish / Constraints`. So what this repository actually is, is **one hardened prompt plus a procedure for when and how to fire it.**

## The techniques — aesthetics written as numbers, not adjectives

| Technique | What it says |
|---|---|
| **Complexity budget** | Outer silhouette = 4–7 large shapes, ≤1 species-identifying feature, ≤2 interior colour regions, 85–95% canvas coverage. It closes with a shrink test: "if it doesn't read at 32×32, enlarge, merge or delete" |
| **Three-colour semantic palette** | Colours are counted **as meanings, not pixels.** Value and saturation variation is explicitly declared incidental drift inside one colour family, not a violation |
| **Corner emergence + deterministic assignment** | The character rises out of the lower-left or lower-right corner rather than the centre, and placement is fixed by label rather than by feel (A1·B1·C1 = left, A2·B2·C2 = right). An odd count must have its imbalance written into the report |
| **Purpose-hiding prompts** | Even though the repo is named ip-as-logo, the model is **never** told the output is a `logo`, `brand mark` or `app icon`. The reasoning is that naming the purpose drags the model toward cards, frames, masks and text |
| **Constraint routing** | Negative constraints travel by a different channel per model generation — newer models get one inline `Constraints:` line, older ones exposing `negative_prompt` get the dedicated parameter and the inline line is deleted (no double delivery) |
| **One-pass unvetted hand-off** | The most unusual part. Inspecting, grading, retrying or post-processing the output is **entirely forbidden**; whatever came back is labelled and passed through |

The sentence behind the unvetted hand-off is this one — *"Treat generation as a stochastic draw, not a conformance test."* It was not that way from the start: **the author tore his own review loop out within two days.**

**What this section cost me to learn — writing a number and enforcing a number are different jobs.** The 4–7 and the 85–95% are targets thrown at a probabilistic model in natural language, and the lines of code that count compliance number zero. The author himself renamed the section from "What it enforces" to **"What it guides"**, conceding that it does not enforce.

## What broke — a core invention sat in a file the agent never reads

**The rule that "95–100% of open briefs should be a familiar animal" is not in `SKILL.md`.** Grepping, `animal` appears in two places: the frontmatter lists animals, robots, ghosts, plants and objects as **equals**, and line 18 of the body says the opposite — *"don't line up three animals with no reason."* `95`, `clock` and `vehicle` appear zero times. That rule lives only in `README.md`, and as the README itself states, the agent loads exactly one file: `SKILL.md`. **In the docs and absent from the artifact means zero runtime effect.**

**The "must read at 32×32" requirement doesn't lack a judging device — it had one and it was deleted.** An earlier revision carried an eleven-item "when to mark as not recommended" checklist whose first line was *"it collapses at small sizes."* One commit removed that section and the retry loop wholesale and replaced them with the hand-off rules. Today, inside the same file, line 41 (merge or delete if it's small) and line 113 (never block hand-off over detail or composition) **cancel each other out.**

**The compatibility claim didn't hold either.** The README lists seven supported agents, but the canonical target list of the **one install command the same README prescribes** is missing four of them. Conversely, most of the installable targets lack the "built-in generator that returns images as assets" the README declares mandatory. The real intersection is about two, which matches the field reports in the open issues.

**And there is one place where it shot its own foot.** The author scoped his own "never name the purpose" rule with *"this rule applies to generation prompts only"* — and then, in the same commit, **stripped logo, mascot and app-icon out of the frontmatter `description`.** That sentence is the only text an agent reads when deciding whether to auto-invoke the skill. Not one keyword is left for "make me a logo" to catch on.

**What held up is worth recording too.** 3,481 stars · 171 forks · 3 watchers matched my measurement, and so did the 739 KB checkout. My first-pass line that *"all three external issues went unanswered"* **I retract** — the maintainer replied to all three, but engaged only with the collaboration offer and **selectively skipped the two technical defects.** That is not neglect, it is selective avoidance, and the distinction is what sharpens the verdict.

> **[도판]** What broke was not whether the numbers were true, but whether they run at all. Two sources of truth always drift apart.
>
> Five rules the repository advertises, checked directly against the executable artifact. The animal rule appears zero times in SKILL.md and lives only in the README, the 32 by 32 requirement had its review checklist deleted by the author, four of the seven supported agents are absent from the install CLI target list, the canvas coverage number changed four times in 45 hours, and while it asks for the saved path to be reported no sentence says where to save.

## Held against my own setup — installing it leaves nothing to call

**This skill's single runtime dependency does not hold on my machine.** I swept the full text of all 99 of my `SKILL.md` files for image-generation vocabulary and got eight hits — **every one a false positive**, `dall` matching inside `ReadAll` and `findAll`. Zero local diffusion stack, zero generation tools in the session tool roster. Install it and there is no call site.

Held against the remaining intellectual assets, my side was already stronger.

| Their technique | My counterpart | Result |
|---|---|---|
| Complexity budget (numeric ceilings) | This site's `scripts/check-weight.mjs` — 10 numeric ceilings, **the derivation of each number re-derived in a comment**, and `exit 1` blocking the deploy on breach | strict superset |
| Output review gate (which they deleted) | The mindmap generator's `check.py` — three deterministic checks over a probabilistic artifact; without `RESULT: PASS` it cannot enter a report | opposite direction |
| One-round question ceiling | My comprehension skill's `SKILL.md` — **at most one** calibration question, none if the answer is obvious. And it is explicit-invocation only, so the ordinary question count is zero | already stronger |
| Absorbing repo context first | 15 global rule documents injected in full at session start, plus the project `CLAUDE.md` importing `DESIGN.md` | wiring, not instruction |

**They wrote numbers down; I enforce numbers.** Where the difference comes from is visible in the measurements too — this repository deleted its most quantitative element, the colour band (OKLCH ranges, contrast-ratio targets), **12.5 hours after introducing it**, with no stated reason anywhere. Whether it was dropped for having no effect or because the model ignored it is unknowable, which means someone repeats the same investigation six months from now.

**There is also no slot for the output.** This site's design contract is locked with *"no photographs on cards"* and *"every body figure is inline SVG"*, and the real contents of `public/` are a 327 B favicon and two share cards. There is nowhere to hang a 1536×1536 raster mascot. One side risk as well: this skill's `description` runs 415 characters and contains **none** of `logo`, `mascot`, `brand` or `icon`. It would cost standing tokens and never fire.

## And then the last takeaway vanished — my own log had already answered it

**In the first pass I kept one.** I wrote that I would add "when fanning out candidates, move one variable and pre-assign the slots by label" as a section of my own hook playbook. The stated benefit was *"today only the chosen sentence survives, not what I changed to win, so after thirty-odd issues I still can't count performance by hook type."*

**That statement was false.** Opening the publishing log, every issue already records its hook type as a label, marks first-time types with an `(unused)` tag 25 times over, runs an explicit single-variable discipline in lines like *"format and length changed together — not a single variable"*, and **already aggregates performance by sentence form** in a top-ten table. There is even a recorded rejected hypothesis: seeing reach fall as star counts rose, I had written *"the strategy of using stars as social proof is rejected."* Worse, the experimental axis I was proposing was **an axis already judged low-yield** — two deliberately matched replications, aligned item by item on hook, format, length and topic, came out **18,000 against 423, a factor of 43.**

**The most expensive fact in this piece is not about the target but about my own assets — what I was trying to learn from someone else's repository, I had already been doing for thirty-odd issues, and what that accumulation concluded was "changing the hook doesn't help."** The same disease shows on both sides. They deleted their own numbers without a line of reasoning; I kept my records and then failed to read them, so I went shopping for someone else's. **Keeping a record and reading that record are different jobs.**

## Verdict

| Item | Call |
|---|---|
| Install the skill | **Rejected** — its one runtime dependency (an image generator) is zero on this machine |
| Complexity budget | **Rejected** — `check-weight.mjs` is a strict superset (enforcing code plus stated derivation) |
| One-round question ceiling · absorbing context first | **Rejected** — already wired more strongly |
| One-pass unvetted hand-off | **Cautionary example** — every gate of mine is fail-closed |
| Purpose-hiding prompts | **On hold** — not a duplicate, but **there is no surface to apply it to.** My card pipeline is HTML rendering, so the prompt surface itself is zero |
| Candidate fan-out labelling | **Adopted → rejected** — my publishing log was already doing it, and that axis is already low-yield |

**Zero action items.** What remains is only the reopen conditions. ① When an image-generation path exists on this machine. What I would measure then is the difference between "paste the prompt skeleton only" and "install the skill." ② When my game work actually needs mascots or icons. Games sit outside this site's figure policy, which releases one of the rejection grounds. ③ When upstream acquires a concept of versions. Conversely, **a rising star count is not a reopen signal** — stars ticked from 3,480 to 3,487 over this teardown while watchers stayed at 3, contributors at 1, and external PRs at 0.

**Here is what I did not do.** I **never generated a single image.** So this repository's central claim — whether 4–7 shapes, three colours and 85–95% canvas coverage actually hold — **stands at a sample size of zero.** They didn't measure it and neither did I; what this page established is "is the rule in the executable artifact", not "does the rule land in the picture." The deployed site renders client-side, so I could not machine-fetch the text of its terms of service, and the site source is split into a private repository and cannot be audited. **The rights to a generated image are decided not by the repository's MIT licence but by the terms of whichever image model you attached** — and that fact is disclosed nowhere in the repository.
