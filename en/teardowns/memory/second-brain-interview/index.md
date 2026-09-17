# A second-brain interview

> Why someone who had built two hundred automation workflows threw them all away and focused on one context instead. The structure is ordinary; the way it connects was not.

- Headline number: 200 workflows → 0
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/second-brain-interview/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/second-brain-interview/index.md
- Source (Source video): https://www.youtube.com/watch?v=ejlk74hWogc
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Someone who had built two hundred automation workflows threw them all away and focused on one knowledge store instead. A 33-minute interview, and the value is in why he discarded them, not in what he built.**

> **[도판]** Splitting static from dynamic is the skeleton. The remaining folders are closer to pipes running between those two.
>
> The vault structure. Static and dynamic information are separated, with an intake and a refinement layer alongside. Its distinguishing feature is a rules file in every folder.

## Why he does this — the motive is unusually sharp

Interviews like this usually open with *to be more productive.* Not here.

> **Human-level AI is not far off. To survive that, I need something that can replicate the real me.**

So the goal is **making an AI able to answer "how would this person judge it."** Not collecting information — **collecting a way of judging.**

Agree or not, **a sharp motive produces a sharp artefact.** This interview is the evidence.

## The structure itself is ordinary

Six folders, split two ways.

| Side | What |
|---|---|
| **Things that don't change** | Values, judgement criteria, principles — the durable stuff |
| **Things that do** | Work in progress, recent notes — constantly moving |

That split is common. I already use it — my memory drawers run **person, feedback, project, reference**, where the first two are the unchanging side and the last two the changing one.

## The new part was not the structure, it was the connection

Where he went one step further.

Most people keep the knowledge store **on their own machine only.** Then it helps only when using AI on that machine.

He **put the folder on a server and built a channel the AI can query**, then attached it.

So **whatever he uses — web, phone, desktop — every AI sees the same brain.**

## But I rejected it

It looks good and I did not take it. Two reasons.

1. **My folders already sync between machines**, so whichever computer I open, the material is the same. **The problem is already solved**
2. Putting it on a server **adds one more hop**, and placing my material on an external server is **a separate decision**

The condition to revisit: **when not being able to reach it from the web actually becomes a friction.**

## He drew his own limits first

The best thing about the interview. **He says up front that this does not work for everyone.**

That normally drops out. **In a venue where you are describing something you built, drawing the boundary yourself is rare.** It raises the credibility of everything else.

## What I took — one posture

No technique. **One posture.**

> **Context before automation.**

That is why he discarded two hundred. **Plenty of machinery, and nowhere recording the criteria for judging** — so the more machinery accumulates, the more there is only to maintain.

Looking at my own setup: the same. **Several pipelines, and a thin record of the judgement criteria.**

## What I will not cite

**None of this interview's numbers.** Neither the scale nor the effect is **a measured value.**

## What this piece cost me

**In a story about going from two hundred to zero, what actually disappeared was the tools, and what stayed was the eye.**

He says it precisely: **what remained from the automation platform was the eye for breaking work into small pieces.**

So building two hundred was not waste. **The instinct formed while building them stayed, and only the tools went.** Discarding a tool does not discard what you learned using it.

## The detailed record starts here

**The value of these 33 minutes is why a man who built two hundred workflows discarded all of them.** It is an interview with someone who stacked automation workflows up to two hundred and then **threw the lot away to concentrate on a single second brain.** The vault structure itself is ordinary — a static/dynamic split across six folders. **What was new was the connection**: he put the vault on a server and wrapped it as an MCP endpoint, so **whichever model shows up sees the same brain.** And **he drew the limits of his own approach himself.**

## What the interview says

**The motive is stated sharply.** *"AGI isn't far off — to survive I need something that can replicate the real me."* So the goal is **making a model able to answer "how would the founder think about this."**

**And that goal determines the structure.** The static folder holds **speaking voice, sentence style, favourite phrases, even call-to-action wording.** In practice it reads his mail each morning and **drafts replies in his own voice**, with the human only checking and sending. In the consulting case, **per-student folders accumulate transcripts of one-to-one recordings**, and he asks *"what has this student done, and where should they go, from my point of view."*

**He nails the purpose down in one sentence.**

> The point is that whichever AI I use, it produces a consistent answer through this brain.

## The technique — the substance is the connection

**He didn't leave the vault local.** A sync plugin pushes the local folder to a server, and **he wrapped that server in an MCP server he wrote himself**, registered as a custom connector. From then on, **web, app or command line, whatever shows up sees the same brain.**

The reason is practical — *"there are moments when you can't be bothered and you just go in through the web."* **The server exists so the brain is still attached in that moment.**

**His warning about how to start was good.**

> Don't look at the graph view and think "that's cool, maybe I'll build one" — that's a waste of time.

Read **why you need it** first, he says, and step one is **documenting and reviewing your own work.** Content before tools.

**The maintenance rule is one line too** — *"if insights overlap, don't write them down twice"*, pinned into the rules file.

## What broke — he drew the limits first

> **[도판]** It's a story about going from 200 to 0, and what actually vanished was the tool. What stayed was the eye he earned using it.
>
> The three reasons two hundred workflows were discarded and what survived. Debugging fell to a human, one workflow became replaceable by one skill, and the decider was scheduling moving inside the tool. What remained is a single asset: the eye for decomposition.

**The most striking line isn't technical, it's a confession.**

> Automating everything left me hollow. Nothing held the centre. I realised I needed my own context.

**And he draws the limits of his approach before anyone asks** — *"this is an easier step than the retrieval-based route, and I'd only recommend it for teams of five to ten. Past that you need a different approach."* **It is rare for someone selling a method to state its ceiling first.**

⚠ **Almost nothing here is verifiable, though.** No vault size, no document count, no numbers on how much more accurate anything got. Every case is **his own account**, with output flashing on screen. **Cite it as far as "this is the approach used" and no further.**

⚠ **The connection wasn't verified either.** The sync plugin's single-user free policy, hosting costs, the security boundary when a vault passes through a server — **all outside the video.** It is a configuration that puts personal material on an external server, so **you cannot copy it before checking that boundary.**

## Held against my own setup

**I already use the static/dynamic split.** My memory is divided into person, feedback, project and reference, and the first two are static while the last two are dynamic. **A rules file per folder is already how I work too.**

**I am not copying the connection.** **Two of my machines already see the same material through file sync.** Standing up another server and wrapping it as an endpoint is **one more path to maintain**, and what it buys is *"access from the web"* — **a friction I don't have.** Putting material on an external server is also a separate approval question.

**What's left is one attitude.** *"Automating everything left me hollow"* — I already run several pipelines, and the question **whether I manage the context they stand on separately** was a fair one. The tools multiplied; the place where *"how do I decide things"* is written down is thin.

## Verdict

| What | Verdict |
|---|---|
| **Static/dynamic split** | **already doing it.** My memory is already divided that way |
| A rules file per folder | **already doing it** |
| **Vault on a server, wrapped as MCP** | **rejected.** Sync already gives both machines the same material. It only adds a path, and an external server is a separate approval<br>Reopens: when web access **actually** becomes a friction |
| **"Context before automation"** | **adopt — as an attitude.** Several pipelines, thin documentation of how I judge |
| Citing its numbers | ⛔ **don't.** Neither scale nor effect was measured |

**The lesson I paid for here: in a story about going from 200 to 0, what vanished was the tool and what stayed was the eye.** He says it exactly — *"the asset left from that platform is the eye for breaking things down."* **Discarding a tool does not discard what you learned using it.**

And ⚠ **when someone selling a method states its ceiling first, the rest of the story gets more credible.** *"Five to ten people only"* was the single most valuable sentence in this interview.
