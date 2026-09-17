# ASIDE

> It won't install on my machines. That should have been a one-line rejection, except the "no plans" part of my own judgement fell apart on three lines of changelog.

- Headline number: rejected · 5 triggers
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/aside/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/aside/index.md
- Source (Official site): https://aside.com/
- Source (Permissions doc): https://docs.aside.com/help/security
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A browser where an AI drives the web for you. It will not install on my machines. That should have been a one-line rejection — except the "no plans" part of my own judgement fell apart on three lines of their changelog.**

> **[도판]** The feature list isn't the substance; the permission design is. Operate someone's logged-in session and that's the first question you have to answer.
>
> This is not a browser extension but a browser in its own right. With no separate integration it operates sites you are already logged into. Permissions are set across four domains with three-valued rules, and a per-task layer sits on top of the agent defaults. Models attach through three routes: subscription reuse, your own API key, and a reverse connection.

## What it is

Not a browser extension — **a browser built from scratch.** The documentation is blunt: **"there is no minimum browser version. Aside *is* the browser."**

An AI moves around the web on your behalf. It finds material, fills forms, clicks what needs clicking.

Built by **a team of five**, with free, $20 and $200 tiers.

## What is worth learning here is not the features — it is the permission design

An AI driving the web on your behalf means **moving while logged in.** Which raises the question immediately: **do you show the AI your passwords?**

Their answer was good.

| Decision | How |
|---|---|
| **Never hand a password to the model** | Stored values are **hidden from the AI**; after checking the address and policy it is **injected straight into the page** |
| **Three permission tiers** | Read-only / **only inside approved folders** (default) / full |
| **Deny wins** | Allow, ask, deny — deny takes precedence. And **a per-task setting layers over the agent default** |
| History becomes memory | It learns *for this job, that site* on its own |

The first row is the core. **Letting the AI use a logged-in state without ever seeing the password** is effectively the only way to do this.

## But the "number one" claim was self-scored

The homepage advertises **"first place on three agent benchmarks, ahead of the large labs"** with a figure of 99.0%.

Following it: that number is **a self-report, posted to their own repository using their own scoring setup.**

- **No independent reproduction**
- **Not listed on any independent leaderboard at all**

"Number one" only means something with **who ranked it** attached. **A ranking you did of yourself is not a ranking.**

## Held against my setup

| Item | Required | Mine | |
|---|---|---|---|
| Operating system | One specific OS | **Windows, both machines** | **Cannot install** |
| Account | Needed | Have one | Met |
| **The core feature** — driving the web while logged in | The thing it sells | **Already happening** | **Redundant** |
| Work tools | Click the screen like a person | **Connected directly** | **Mine is better** |

Rows three and four matter.

The core feature it sells **I already have by another route.** And for work tools, **a direct connection beats clicking a screen** — screens break when they change and connections do not.

## And my "no plans" was wrong

Where this piece cost something.

I first wrote: **no plans for Windows support.** My basis was that **the download page has no Windows build.**

Then I opened the **changelog.** **Windows builds appear three times.**

So: absent from the download page, **present in the changelog.**

→ What I took:

> **Do you read "there isn't one" off the download page, or off the changelog?**

The download page shows **what you can get today.** The changelog shows **what is being built.** Asking about **plans** meant reading the second.

## Overall verdict — still a rejection, but the clock moved up

The conclusion stands: **rejected.** It will not install, the core feature is already covered, and my work tools are better served directly.

What changed is **when to look again.** *No plans* means never; **actively being built** is a different matter.

So I wrote down **five conditions to reopen** and closed it.

## The detailed record starts here

**It won't install.** macOS 15 or newer only, and both of my machines run Windows. If it ended there this would be a one-line rejection — except **the "no Windows plans" I wrote down turned out to be wrong.** It isn't on the download page, but **Windows builds appear three times in the changelog.** And the *"first place on agent benchmarks"* they lead with is **a self-reported number, scored by themselves, in their own repository.** The overall verdict is unchanged — rejected — but **the clock on the reopening condition moved a long way forward.**

## What it is

**An AI agent browser.** Not an extension — they built the browser, and the docs nail it down: *"There is no separate minimum browser version because Aside is the browser."*

What it sells is **operating sites you are already logged into, with no separate integration.** No API to wire up; it does the clicking a person used to do.

| | |
|---|---|
| What it is | a Chromium-based desktop browser you install |
| Origin · size | 2025 autumn accelerator batch · **five people** · shipped 2026-06-23 |
| Platform | **macOS 15+ only.** No public Windows or Linux build, and no waitlist |
| Pricing | free $0 (500 credits/mo) / Pro $20 / Max $200 |
| Claude routes | subscription reuse · API key · **reverse connection**, all three open |

⚠ **"Just use it on the web" isn't available.** The public site is a landing and download page, not the product. There is no console, no web app entry point — only a download button.

## The design decisions

The four permission decisions are what's worth reading here.

| Name | What it does | Why this decision |
|---|---|---|
| **Credentials never reach the model** | Saved password values are hidden from the agent; after policy and URL checks they are **injected straight into the page** | Effectively the only way to use a logged-in session without showing the agent the password |
| Three session modes | read-only / guard (default) / full. Guard works **only inside approved folders** and asks about anything outside | So file access can be tightened per task |
| Allow, ask, deny + **two layers** | Three-valued, deny wins. **A per-task setting overlays the agent default** | A concession to the fact that policy can't be set in one place |
| History as memory | it knows on its own which site goes with which job | Removes the cost of re-feeding context each time |

## What broke

**The first-place claim is self-scored.** The home page leads with *"first on three agent benchmarks — ahead of OpenAI, Anthropic and Browser Use"* and attaches a 99.0% figure. That number is **self-reported, using their own scoring setup, in their own repository.** No third party has reproduced it, and they don't appear on the independent leaderboards at all.

⚠ **And the comparison is asymmetric.** This benchmark compares *model + tools + policy* as a system, but the Claude entry they stand up against is **a bare model with no tooling.** That is how the sentence *"ahead of Anthropic"* got made.

**The URL handed over as a security document isn't one.** Open it and it's a permissions UI guide. Encryption, storage location, whether data is used for training, audit logging — **all absent.** The home page line about *"nothing is shared with model providers unless you use external API keys"* is currently a marketing sentence with no document behind it.

**And one of my own judgements was wrong.** The download page has no Windows, so I wrote *"no plans"* — **then read the whole changelog and found Windows three times.**

> **[도판]** Rejections come in kinds. "Never going to happen" and "the condition could actually arrive" deserve different watch intervals.
>
> Windows builds appear three times in the changelog and then go quiet for two months. Extensions bundled into Windows packages in May, profile import in June, menu work on release day, and then nine releases between late June and mid August with no mention of Windows at all. So this reads as deprioritised rather than imminent.

## Held against my own setup

| | Required | Mine | Verdict |
|---|---|---|---|
| OS | macOS 15+ | Windows 11, both machines | **impossible** |
| Claude seat | subscription or API key | have it | met |
| **"operate the logged-in web, no integration"** | the thing it sells | **already solved** — a browser connector drives my real logged-in Chrome | **duplicate** |
| Work tools | click the web UI like a person | **direct API** through dedicated connectors | **worse** |

**Only one row decides it.** The rest of the comparison is moot — it doesn't install. ⚠ **And buying a machine to gain something that already works is a return near zero.**

**The command-line route is firmly shut too.** I had marked that `estimated` at first, then opened the installer script and confirmed it — anything that isn't macOS exits immediately. What it fetches is **an app bundle**, so a port is a recompile. Across forty-odd releases the command line is mentioned **zero times**.

## Verdict

| What | Verdict |
|---|---|
| Adopt the tool | **rejected — platform.** It doesn't install |
| Credential-free injection | **check first.** I will not call my own test-account handling "improvable" **without having opened it** |
| Allow/ask/deny + task overlay | **hold.** Three-valued rules already exist. The only new part is **the per-task override** |
| History as memory | **already have it.** My notes drawer does the same job |
| Citing the benchmark | ⚠ **don't.** It is self-scored |

**The execution order is "do nothing."** The return is zero right now, so there is nowhere to spend. The permission technique gets looked at **when I next touch that gate anyway** — no standalone start.

**Five reopening conditions, written down.** ① a public Windows browser build ② **a Windows command-line tool** — that's the real one ③ if I end up with a macOS machine ④ listing on an audited third-party leaderboard ⑤ a published security white paper. The watch points are recorded too — whether the installer grows a branch, whether a button appears on the download page.

**The lesson I paid for here is about where you check that something is absent.** Look only at the download page and it isn't there; read the whole changelog and it was being built. **The verdict doesn't move, but the reopening condition changes character — from "someday" to "this could actually arrive."**

And ⚠ **half of this piece is not inflating the haul.** I wrote down two permission techniques, then held them up and found half of it was already in place. **One remained.** That is why the verdict says hold, not adopt.
