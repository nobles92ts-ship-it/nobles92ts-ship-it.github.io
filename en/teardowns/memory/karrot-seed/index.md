# Karrot SEED

> The design system had nothing to do with my work. The value was in how the repository is arranged so agents can read it.

- Headline number: 7 → 2
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/karrot-seed/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/karrot-seed/index.md
- Repository: https://github.com/daangn/seed-design
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**I opened a design system a company published. The design part had nothing to do with my work, and the value was somewhere else entirely — in how the repository is arranged so an AI can read it.**

> **[도판]** An Instagram post was the entrance; the verdict came from checking the official docs and all 8,100 entries of the repository tree directly.
>
> The repository serves two kinds of reader. The upper half is for people, flowing from token definitions through generated output to consumer libraries; the lower half is for agents, with an LLM-only index, a single-source skills directory, hook guards and inspection-only agents.

## What a design system is

When you build an app or a site, you **decide the buttons, type sizes and colours once and reuse them** instead of choosing each time.

Think of it as **a Lego parts manual.** Fix *the blue button is this colour, this size, these corners* once, and a hundred screens later every button still matches.

This company built one and **published it for anyone to look at.**

## And that part was useless to me

Plainly: I do not build app screens. **Button colours and type sizes have no slot in my work.**

The teardown still paid, because **the repository itself was unusual.**

## The unusual part — an AI entrance built alongside the human docs

Most repositories contain **documentation for people** and nothing else. This one built **an entrance for AI** next to it.

| | For people | For AI |
|---|---|---|
| Form | A readable docs site | A channel the AI can query directly |
| Why | So a person can look things up | **So the AI can check the rules while writing code** |

Why that matters: **a lot of code is now written by AI.** If the AI does not know the team's design rules, **it picks any colour and any size.** At which point having rules was pointless.

So they built **a place the AI can ask.** Not *a person reads it and tells the AI* but **the AI reads it directly.**

## And here I got it badly wrong

The most valuable part of this piece.

Having read the repository I wrote down **seven things worth learning.** I was pleased.

**Four days later I measured my own environment. I deleted five of the seven.**

Why: five were **either already present in my setup, or things that cannot apply to my setup at all.** Reading the repository they looked *good*; **placed next to my own thing, there was nowhere for them to go.**

The two survivors are below. Both are **a single line of automatic triggering.**

| What stayed | What accident it prevents |
|---|---|
| Edit the source and **the conversion step runs automatically** | **Forgetting to regenerate the output** after editing |
| At the end of a task, **one line asking "did you check"** | **Mistaking "passed with no errors" for "works"** |

Neither is glamorous. And **out of seven glamorous candidates these two are what actually remained.**

## So I wrote a rule

> **A verdict that says "I harvested a technique from an outside repository" is not valid until I have measured my own environment.**

*This looks good while reading* and *there is a slot for it in my setup* are **completely different questions.** And the difference is **invisible while reading.**

## A note on the entry point — one sentence in the summary misleads

I found this repository through a social post.

The post was **largely accurate.** Most of it was **lifted from the official docs**, so there were no factual errors.

But **one sentence would mislead a practitioner.** A condition dropped out during summarising, and without that condition it reads as **anyone can use this**, which is not the case.

→ **A summary can mislead while containing nothing false.** So I use summaries as an entrance only, and **take the verdict from the primary source.**

## The detailed record starts here

**The components and tokens had nothing to do with my work, and the value was somewhere else entirely.** What this repository actually demonstrates isn't a design system — it's **a way of running a repository where an agent-facing entrance sits right next to the human-facing docs.** I wrote down seven techniques as harvested, and **four days later I measured my own environment and deleted five of them.** The two that survived are one hook each.



## What got taken apart

**Karrot's public design system.** Tokens and components defined in YAML, CSS generated from them, exported as React and Lynx libraries. Apache-2.0, 1,023 stars, 3,488 commits.

The token design itself taught me little — **separate intent (`color.primary`) from value (`color.carrot500`) and you can swap values without touching the schema when the environment changes.** I already have the same shape elsewhere: rules separated from the machine that runs them, coordinates held as ratios rather than absolute pixels. **It's a label for a pattern I already use, more than something new.**

The layer underneath was the real find.

## Checking secondhand reporting against the primary source

The entrance was an Instagram post. It's largely accurate — most of it transcribes the official docs, so there are no factual errors. **But one sentence misleads a practitioner.**

> One token source delivers consistent design across React, iOS, Android and Lynx

Read literally, that's wrong. Searching all 8,100 tree entries: **zero Swift files, zero Kotlin files, no iOS or Android directories.** None of the 26 public packages produces mobile-native output.

Going to the source, it says iOS and Android enums **"could be generated"** from this preset. A statement of possibility, not a shipped artifact.

**It's the shape that makes a roadmap sentence read as current status.** The post didn't lie; it rendered the source's conditional as a declarative — and that alone flips the verdict.

## The novelty here wasn't components

It's placing agent-facing wiring **beside** the human-facing docs. The post mentioned two MCP servers; the reality was broader.

**The LLM entrance is three tiers deep.** A root index lists only areas → an area index lists documents → a per-document URL serves the body. **An agent descends exactly as far as it needs and reads that much.**

**Skills live in one source with links.** Three consumers, one copy of the files, everything else a link into that directory. The source says: *"create and edit only in this directory. Because these are links, no separate synchronisation is needed."* **They didn't write "remember to sync" as a rule — they made it structurally impossible to need one.**

**A hook blocks edits to generated files.** And **it doesn't just block: it prints the source location and the regeneration command.** That's the design point — **the guard is a signpost, not a dead end.**

**Hooks are placed at three moments.** Before an edit, generated files are protected. After an edit, it reads which paths changed and runs the builds that need running. And **when you try to end the session, it checks the files you touched against risk patterns and stops you from finishing without verifying.**

**There are inspection-only agents.** Of four, **three have no editing tools at all** — they judge and never fix. Not agents that write code, but **agents that check whether structure and documentation have drifted apart.**

One more thing the post missed: the MCP server has a **mode option**, and the docs give the reason — *"registering only the tools available in that mode reduces context size."* **An MCP server designed as a context budget rather than a bundle of tools.**

## And then my harvest verdict broke

> **[도판]** The verdict from reading the repo and the verdict from measuring my setup differed. The second is canonical.
>
> Seven techniques recorded as harvested on the first pass; four days later, after measuring my own environment, five were deleted as already-held or causally wrong. Two survived, each a single hook.

On the first pass I recorded seven techniques as harvested, each paired with an incident of my own, which made them look well-grounded. **Four days later I measured my environment and deleted five.** Already held, or false leads.

**One was especially bad.** I had paired a past incident with one of these techniques in a way that sounded right, and **the causation didn't hold** — that incident's cause wasn't the thing that technique prevents.

**No amount of careful reading of the repository catches that error.** Only opening my own config file does. However deeply you read the subject's material, **"what the cause was on my side" isn't in there.**

Two survived, each a single hook.

| The task | The incident it prevents |
|---|---|
| Auto-run the build when the source changes | Fixing the source and forgetting to sync the generated output |
| One verification reminder at session end | Mistaking "passes statically" for verified behaviour |

Both run first in **warn-only mode, not blocking.** A hook that fires at the end of every session becomes noise, and then it backfires immediately.

## The sentence that stays

> **"I harvested a technique from an external repository" isn't a valid verdict until I've measured my own environment.**

On this page that verdict shrank from seven to two. The five that went weren't the repository's fault — **they went because I wrote them down without looking at my own setup.**
