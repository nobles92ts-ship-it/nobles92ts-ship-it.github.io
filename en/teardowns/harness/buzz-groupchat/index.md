# Buzz group chat

> Slack where the channel members are people and local CLIs. Two demos, one worked — and the presenter admitting which one didn't is what this video is worth.

- Headline number: 1 of 2 demos
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/buzz-groupchat/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/buzz-groupchat/index.md
- Source (Source video): https://www.youtube.com/watch?v=py3PdGg0-jw
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**An app that looks like Slack, except the channel members are the AI tools installed on my own computer. Two demos of the same shape, one worked — and the presenter admitting which one did not is the most valuable sentence in the fifteen minutes.**

> **[도판]** Think of these two as one thing and the per-agent keys make no sense. Split them and everything explains itself.
>
> One agent is a binding of one identity and one harness. The identity axis puts people and agents in the same address space; the harness axis has no model of its own and drives CLIs already installed on my machine.

## What it is

The screen looks exactly like a work messenger. Channels, invite members, mention with `@`.

The difference is **the members are not people.** **Three AI tools on my machine are registered as separate "staff."**

Mention **`@lead`** and **the lead AI splits the work and throws pieces to the others.**

On invite they first appear as **"waking up"** — the program is actually starting.

## The app contains no AI of its own

An important distinction. **This app has no AI in it.**

It only **wires a screen around the AI tools already on my machine.** Which is why **each AI uses its own account** — the app is not paying on their behalf.

Without that distinction, **"why do I have to sign in separately for each AI"** makes no sense. With it, everything does.

## The lead's instruction is one sentence

The part that surprised me technically.

There is a **lead** AI that splits and distributes work, and **there is no code driving it.** The instruction given to the lead is **a single sentence.**

No elaborate allocation logic. **One sentence, and the AI handles the rest.**

That is characteristic of current tooling — **write prose instead of building machinery.** When it works it is remarkable; when it fails it is hard to see why.

## One of two demos worked

The talk tried two things.

| The task | Result |
|---|---|
| **Stock analysis** | **34 exchanges, came out right** |
| Building a web page | 24 exchanges, **about the same as one AI alone** |

Here is the lesson. **34 is not better than 24 because it is larger.**

The difference was **whether there was anything genuinely divisible.**

- **Stock analysis**: *research this ticker*, *research that one*, *compare* — **splits naturally.** Three can research different things simultaneously
- **Building a page**: splitting one screen **makes the pieces disagree.** One person carrying it end to end is better

→ What I took: **some work gains from being split among several AIs and some loses.** It is not a question of the tool being good.

## And the most valuable sentence in fifteen minutes

**The presenter admits the second demo did not go well.**

That is rare. Demos normally **show only what works.** Leaving a failure in and saying *this one did not work* is **hard to do in a venue where you are selling your own thing.**

And because of it, **I could reach the conclusion above.** Had both succeeded, I would have wrongly learned *more AIs is always better.*

**A failed example sometimes teaches more than a successful one.**

## My verdict — I did not install it

Parked. The reason is **this approach is not yet supported in the environment I work in.** Before good or bad, **the conditions for it to run where I stand are not there.**

## But one thing came out of the research

There is a practice of **asking several AIs the same thing and trusting an answer they agree on.** Cross-validation.

It comes with a condition.

> **Asking several instances given different personalities does not count. The models themselves have to differ for agreement to carry information.**

Ask the same AI as *you are a sceptical reviewer* and *you are an optimistic reviewer* and **three agreeing answers are worth one.** The same brain carries the same blind spots.

**Three genuinely different models agreeing** is what gives the agreement value.

## The detailed record starts here

**Two demos with identical structure, one worked, and the presenter says so out loud — that single sentence is the most valuable thing in these fifteen minutes.** Buzz is a Slack-shaped desktop app where **the channel members are not only people but the coding CLIs installed on my machine.** Claude Code, Codex and Kimi are each registered as a separate "staff member"; call `@lead` and the lead splits the work across the rest. The stock analysis came out properly after 34 turns. The web page build ran 24 turns and landed at single-model quality. **The difference was not the tool — it was whether there was anything real to divide.**

## What it actually is

**A Slack UI with no LLM of its own.** You make a channel, invite people and agents, and call them with `@`. An invited agent first appears as **waking** — its harness process is starting.

**The real difference from existing orchestration is the direction of the relationship.** Subagents, or my own [tc-team](/en/built/tc-team/index.md), have **a parent calling children inside one process.** Buzz inverts that — **an agent has an address, not a process.** They are peers rather than parent and child, so agents naming and questioning each other is natural, and **the conversation log is the work record.** Who asked whom for what, and how many times it was sent back, is simply the reply count on a thread.

**And models mix inside one channel.** The Warren Buffett seat runs on Kimi, Peter Lynch on Claude, Benjamin Graham on GPT. As we'll see, **that is the most important design decision in the video.**

There is an economic axis too. **It bills against a subscription you already pay for rather than metering an API key.** Running five agents costs subscription usage, not extra API spend.

## The technique — the lead's instruction is one sentence

**The orchestration logic isn't in code.** This is the lead agent's entire system prompt:

> You will not do the work yourself. You will use the specialists in this channel and manage the task to completion.

No routing logic, no tool definitions. The lead **queries the channel membership at runtime with a CLI command** and divides accordingly — the observation panel literally shows that command running. **Team composition lives in channel membership, not in code.**

**The observation window being open is good too.** Clicking an agent shows thinking blocks, the commands it ran, **context burn as a real figure (26,537 / 258,400)**, the number of commands available, and inline permission requests.

**How they unstuck the install was the fun part.** When an installed CLI didn't appear in the list, they pasted the harness configuration block **into that CLI itself** and said *"this isn't connecting — fix the path if you can and apply it."* **Having an agent repair its own wiring** generalises nicely as an environment-troubleshooting move.

## What the demos showed

> **[도판]** Turn count is not a quality metric. 34 beat 24 because there was something to divide, not because there were more turns.
>
> The two demos contrasted. Stock analysis worked because three specialists ran on different models and looked at genuinely different data; the web build failed to benefit because the request was shallow and there was nothing to divide.

**The best moment in the stock case is the lead waiting.** One specialist reported first, and rather than finalising, the lead **explicitly declared the result incomplete and held.** Then it sent the gap back to the same specialist. **A completeness gate that emerged from one line of prose.** It was induced by writing, not enforced by code, so **reproducibility isn't guaranteed** — but for something obtained at zero cost, it's worth a lot.

**And "the three specialists did not contradict each other" only means something under one condition.** Because the three ran on **different models**, their agreement carries information. Three instances of one model wearing different personas would agree almost automatically, and that is not verification — it is **an echo.**

**The web case was the inverse.** The instruction was one line — *"a modern web page referencing Apple and Tesla design"* — and with no detail, the designer settled the concept itself. The output was fine, but **there was little for three roles to divide.** The presenter says it directly: *"when you actually build a web page, just using a single model might well be better."*

## Held against my own setup — and I didn't install it

**The only build confirmed is macOS on Apple Silicon.** Windows support is outside the video's scope and unverified. That one line made measurement impossible.

**Even if I could install it, three things needed answers first.**

- **Execution permission scope.** The observation panel showed a permission-bypass mode, and the approval options include *"allow all commands starting with this prefix."* **Prefix approval widens the blast radius.**
- **A third-party relay.** Communities are relayed by an external service. **Work content cannot go in until I know how far a channel conversation travels.**
- **Secret count.** One identity key plus one per agent, and **each is revealed exactly once at creation.** Five agents means six secrets. That is **an operational burden to be counted, not a convenience feature.**

## Verdict — skipped the tool, took three principles

| What | Call |
|---|---|
| **Heterogeneous model panel** — split models, not personas, for verification passes | **Adopt.** Applies directly to adversarial review design |
| **A conductor that declares incompleteness and waits** — a gate made from one line of prose | **Adopt.** Zero cost on ad-hoc work with no code gate |
| **Have an agent repair its own wiring** | **Adopt.** Generalises as environment troubleshooting |
| Adopt the tool | **On hold.** Platform unsupported, permissions and relay unresolved |

**The first row is the big one.** I have been running verification passes by **giving one model several roles**, and this video showed me why that is weak. **For agreement to carry information, the ways of being wrong must differ.** Swapping personas leaves the way of being wrong identical.

**In fairness, the video admitting its own limit is what raised my confidence in it.** Had it shown only the demo that worked, I would have read "34 turns, must be good." **Turn count is not a quality metric, and nothing in the video argues that more turns are better.** Cost savings and accuracy gains over a single agent are **not measured anywhere** — any quotation stops there.
