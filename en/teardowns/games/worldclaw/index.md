# Hunyuan3D-WorldClaw

> A paper about building an editable 3D open world from one line of prompt. The repository has no code and the paper has no numbers.

- Headline number: 0 code · 0 numbers
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/games/worldclaw/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/games/worldclaw/index.md
- Repository: https://github.com/Tencent-Hunyuan/Hunyuan3D-WorldClaw
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A research claim that one line of text can build a whole 3D game world. There is nothing you can download and run.**

It comes from a research team at Tencent. The claim: type one sentence — *"a small village in snowy mountains"* — and the AI lays the terrain and places the houses and trees, producing **a 3D map you could drop straight into a game.**

> **[도판]** The pipeline itself is well designed. The problem is that the only evidence for this diagram is the paper's prose, and you can't run it.
>
> A three-stage pipeline. It extracts a scene spec from the prompt, builds global terrain, then generates and places objects region by region. A render, inspect and repair loop is attached to the end of each stage.

## Why that claim would matter

"Text into a picture" is old news. This goes one step further.

| | What you usually get | What this claims |
|---|---|---|
| Output | A photo-like image | **Actual 3D objects inside a game** |
| Can you edit it | No — it's a picture | **You can grab one tree and move it** |

"You can edit it" is the whole point. For someone building a game, **an output you cannot edit is close to useless.** An ugly tree you can move beats a beautiful picture you cannot.

## Then I opened the warehouse and found a photo album

Research releases usually come with **a repository anyone can download and run.** I opened it.

Here is what was inside:

- One description file (1,333 characters — about as long as this paragraph)
- An images folder
- **Zero program files**

The repository is 180MB, and **all of that weight is images.** So this is less "the program is public" and closer to **"photographs of the program are public."**

## 481 stars did not mean the thing exists

The repository carried **481 "likes."** Normally a number like that reads as *this has been vetted.* Here is what it cost me to learn otherwise.

**Those 481 arrived within five days of the repository being created.** There is no world in which 481 people downloaded it, ran it and approved — **there was nothing to download.**

So what were they responding to? The repository settings left a trace. A repository that people find by searching fills in its description and topic tags so it can be found. **This one had both blank and only a homepage link.** Which means the visitors did not arrive by search — **they came straight from the paper and from social posts.**

→ What I took: **a popularity number says "many people looked," not "the thing exists."**

## The design itself is good — and that is all I took

No program doesn't make the write-up worthless. The **order of operations** in the paper is well thought out, and I took two things from it.

**First, settle the big things before the small ones.** Before deciding where a single tree goes, it fixes **the broad zones and the shape of the land**. That way zone boundaries don't jar, and later stages can't break earlier ones.

**Second, leave intermediate results in a form a human can open.** If the AI does everything in its head and emits only the final output, there is no way to see where it went wrong. Writing down *"here is how I understood it"* midway means **you can point at the wrong line and fix it.**

Neither of those has anything to do with 3D, so both apply to my own work.

## It says "at Scale" in the title and contains no numbers

The paper's title claims scale. **There is not one table of numbers in the whole paper.**

That matters because **"at scale" is a comparative.** Larger than what, faster than what — without that, the phrase carries nothing a reader can check.

To be precise, this isn't my criticism so much as **a quotation**: the authors wrote the grounds for rejection **into their own limitations section.**

## My verdict

| On what | Verdict |
|---|---|
| Use the tool | **No** — there is nothing to get |
| The two ordering rules | **Taken** — they work outside 3D |
| Cite the paper's numbers | **No** — there are no numbers to cite |
| Reopen when | Code actually lands, and the dependency on one company's closed service is gone |

## The detailed record starts here

**The repository has no code and the paper has no numbers.** The system translates one line of text prompt into a structured spec of regions, terrain, assets and materials, then has **an agent drive 3D tools directly** to lay terrain and seat objects on it. The claim rests on the output being **an editable mesh at instance granularity** rather than a panorama or a point cloud. But what you can actually download from the repository is **a 1,333-byte README and some images**, and while the title promises *"at Scale"*, **the entire paper contains not one numeric table.**



## What it is — start from the repository

**Three files in the root.** `.gitignore` (10 bytes), `README.md` (1,333 bytes), and an image folder. **Zero Python files, zero requirements files, zero licence files.** Two commits. The 180MB repository is **entirely teaser and pipeline images.**

**The README has no install, usage, roadmap or licence section.** What it has is news, one methodology image and a citation block. **There isn't even a "coming soon"** — no commitment to release exists.

**There is one issue** — *"the code was never committed. This can't be reproduced."* **Zero maintainer replies, zero labels, zero assignees.**

⚠ **No licence file does not mean "use it freely", it means the authors retain all rights** — including the image assets.

## The design is good

**It narrows in three stages.** Before touching instance detail, it **fixes the shared constraints of meaning and terrain first.** So **region boundaries don't jump, and later stages can't break earlier ones.**

**Every intermediate representation is something a person can open** — colour-encoded layout maps, asset prototype images, a structured spec. **Being able to inspect and repair mid-flight** is the line between this and one-shot black-box generation.

**The heightfield is built as a sum of named variables** — region mask × (base elevation + noise + terrain operators), the operators being peaks, dunes, terraces and erosion. **Because the parameters are named variables, the agent can go back and change them.**

**Materials take two paths at once** — generated textures and a procedural node graph. On **large surfaces like terrain, generated texture alone shows its repetition.**

**And a render-inspect-repair loop attaches to each stage**, detecting floating, intersecting and unstably supported objects and **deforming only the support region.**

## What broke

> **[도판]** This isn't criticism, it's quotation. The grounds for rejecting it were written by the authors, in their own limitations section.
>
> The state of the repository and the absence of quantitative evaluation in the paper. There are no code files and one issue is unanswered, and while the title promises scale there are no numeric tables, no user study and no generation times. The limitation the authors state themselves is that it is bound to three closed APIs.

**The title promises scale and the quantitative evaluation is zero.** No numeric tables, no user study, no generation times, no asset counts, no scene areas. To claim *"large scale"* you have to say **what is how large**, and that space is empty.

**And the limitation the authors state is decisive** — *"substituting open-source models causes procedural terrain and material generation to fail."* So **even if the code ships, it stays bound to three closed APIs.** **The grounds for rejection are not my performance critique but the paper's own limitations section.**

⚠ **To be fair, a paper and a repository are different things.** A paper announces an idea and carries no obligation to publish code. **Creating a repository and then not answering a "cannot reproduce" issue** is a separate matter.

## Held against my own setup

**There is nothing to adopt** — there is no code to take.

**Two things come across from the design.**

**One, keep intermediate representations openable by a person.** My generation pipeline also writes intermediates to files, but **whether those are in an inspectable form** is a separate question. Made **into a form where the error is visible at a glance** — like a colour-encoded layout map — after-the-fact correction gets much cheaper.

**Two, parameterise as a sum of named variables.** Express a heightfield as a weighted sum of *"base + noise + operators"* and **the agent can say which term to change and by how much.** A function that only emits a result cannot be walked back.

## Verdict

| What | Verdict |
|---|---|
| Adopt the tool | ⛔ **rejected.** There is no code to take |
| **Intermediates in an inspectable form** | **adopt.** Writing to a file and being openable are different things |
| **Parameterise as a sum of named variables** | **adopt.** A form you can walk back |
| Citing the paper's numbers | ⛔ **don't.** There are no numbers to cite |
| Reopening condition | when code is actually committed **and the closed-API dependency is lifted** |

**The lesson I paid for here: 481 stars do not guarantee the existence of code.** That was the count five days after creation, and the repository settings carry traces that the traffic came from the paper and social posts rather than search — the description and topic tags are empty, with only a homepage link set.

And ⚠ **when rejecting something, the authors' limitations section is stronger grounds than my own judgement.** *"I don't think this will work"* is far weaker than *"the authors wrote that it fails on open-source models"* — and when it comes time to write the reopening condition, **that sentence becomes the condition, verbatim.**
