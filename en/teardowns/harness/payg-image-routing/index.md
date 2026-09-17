# One skill, ad images, pay-as-you-go routing

> The skill design is a well-built real thing. The conclusion in the title, though, falls apart on a table the video itself puts on screen.

- Headline number: 1 takeaway · 4 refutations
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/payg-image-routing/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/payg-image-routing/index.md
- Source (Video): https://www.youtube.com/watch?v=4ujqu2VGBpU
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A seven-minute demo: one tool makes ad images, turns one into a video, pulls the colours out of it and codes a web page. The tool design is a well-built real thing. The conclusion in the title falls apart on a table the video itself puts on screen.**

> **[도판]** The point of this design isn't the model list — it's which step the budget check sits in.
>
> The skill splits into one orchestration document and a file per model. The overall procedure and model criteria live at the top while the actual call recipes are pushed down into the model files. Execution is five steps: parse the request, plan the shots, route and compute the budget, write prompts and generate, then file the results. The budget check sits before any call is made.

## What the demo does — one line in, everything out

The human does one thing: **"make me some ad images."** After that it runs:

1. Produces six images
2. Picks one and **turns it into a video**
3. **Pulls the colours out of that image** and codes a web page

The last step is the good one. **Rather than a person choosing the colours, they are extracted from the artefact.** So the image and the page match in mood automatically.

Cost was $0.73 for stage one and about $1.16 for stage two.

## The good design — "where in the flow does the budget check sit"

The most instructive part.

When you give an AI a job that spends money, **checking the budget *after* the call is too late.** It has already gone.

This tool **adds up unit price × count *before* calling** and checks whether it exceeds. If it does, it **reduces the count or switches to a cheaper model.**

| When you check | Result |
|---|---|
| After the call | **Money already spent** |
| **Before the call** | **You can stop it going out** |

## Another one — "the tool pre-empts the most common misdiagnosis"

Small and good.

The error code returned when your balance is zero **is the same one returned when your credentials are wrong.** So people **spend hours looking in the wrong place** — *is my key bad?*

This tool, on that error, says **"this is not a key problem, it is a balance problem."**

**The most common misdiagnosis, pre-empted by the tool.**

## And what I actually took — "state quality in one word"

I took one thing. It cost nothing, so it went straight in.

When you ask an AI for quality, **"do it well" has no effect.** Instead, write this:

| What to write instead |
|---|
| **"Treat this as a showcase piece"** |
| **"Don't fake art with gradients — use a real image"** |
| **"Pull the colours from the result"** |

The second is especially good. **It names the cheap trick an AI reaches for when it is phoning it in.** Naming the trick to avoid is far stronger than *please do a good job.*

## But the title's premise is refuted by the video's own table

The subject of the piece.

The title is **"I cancelled my subscription"** — the claim being that paying per use beats a flat subscription.

And **in a comparison table the video puts on screen**, for video generation **the subscription was cheaper than all three pay-as-you-go options.**

**The presenter concedes it near the end.**

So **the title says cancel and the video contains the case for not cancelling.**

## And something heavier

The **motivating reason** for the video was a terms-of-service problem with a particular service.

**The terms text they put on screen says the opposite.**

So it was **put on screen and not read.** And that was **the starting point for the whole video.**

→ What I took: **putting evidence on screen and that evidence supporting your claim are different things.** Surprisingly few people read what is shown.

## Reproducibility, stated first

The limits of this source, written down.

| Item | State |
|---|---|
| Cost measurement | **One of five platforms verified against an actual invoice.** The rest are computed from public price lists |
| The tool's code | **Not in a public repository** — shared conditionally |

Because of the second, **I cannot try it.** So everything here reaches **as far as what was visible on screen.**

## The rest of the verdict

| What | Verdict | Why |
|---|---|---|
| Image → video → colour extraction as a unified look | **Parked** | Revisit **after the deployment decision** |
| Pay-as-you-go image APIs | **Parked** | Revisit **when I actually generate assets in bulk.** ⚠ The cheapest of them **is off the list until its terms question resolves** |
| Budget ceiling and retry | **Rejected** | I am on a flat rate, so no cost pressure, and **retry is already handled elsewhere** |

And **two things I was already doing** came out of the takeaway count — my video-analysis tool already uses pay-as-you-go, and listing trigger conditions in a tool's description was already standard for me.

**Counting "newly learned" without subtracting what you already do inflates the number.**

## The detailed record starts here

**The skill design itself is a well-built real thing** — provider routing, a budget ceiling and output chaining are baked into the procedure, and the user writes not one line of image prompt. **The problem is the title.** The basis for *"I cancelled my subscription"* **collapses on a table the video itself puts on screen** — for video generation the subscription beats all three pay-as-you-go providers. The presenter concedes it near the end. And there is a heavier one. **The stated reason this video exists contradicts the very screenshot it displays.** What comes across is not the cost conclusion but **one prompt-design technique.**

## What it is

**A seven-minute tutorial** showing one skill produce several ad images, turn one of them into video, pull colours out of that image, and code a one-page site — as a single chain. The claim is that the generation APIs behind it should be **routed to three pay-as-you-go providers instead of a subscription.**

**The user writes not one line of image prompt.** Give it *"what (the product) + a reference (images) + constraints (rules)"* and **the skill handles concept planning, model choice, prompt writing and the API calls.**

| | |
|---|---|
| Step 1, six images | **$0.73** against a $2 budget |
| Step 2, site plus video | **~$1.16** against $2 |
| Final artifact | a 1.1MB single HTML file with a five-second muted loop as background |
| Measurement scope | ⚠ **only one of five platforms has a real invoice.** The rest is arithmetic on public rate cards |
| Reproducibility | ⚠ **low.** The skill code isn't in a public repository; it's shared conditionally |

## The design decisions

| Name | What it does |
|---|---|
| **Trigger words piled into the blurb** | Normally only the blurb is in view; when a request matches, the whole body gets read. So **stuffing trigger words into the blurb** is the trick |
| **Procedure and calls, separated** | The top document holds procedure and model criteria; **the actual call syntax lives in per-model files.** New models copy a template |
| **Budget is part of the procedure** | Unit price × count is summed **before** any call. Over budget, it cuts shots or drops to a cheaper model |
| Key lookup order + a prohibition | env var → folder file → ask the user. **Never store a key in the skill file** — it's a shared object |
| **Pre-empting a misdiagnosis** | The 403 you get at zero balance is explained as **"not a bad key, an empty account."** The most common misread, headed off by the skill |
| **Quality bar in one word** | *"treat it as a showcase piece"* · *"don't fake art with gradients, use real images"* · **pull the palette out of the result** |

## What broke — four things

**❶ The title's premise is refuted by the video's own table.**

> **[도판]** Two tables in one talk point opposite ways. The title was made from the first of them.
>
> Put the two cost tables the video built side by side and the conclusion reverses. Per image, one pay-as-you-go provider is six times cheaper than the subscription. Per video, the subscription is cheaper than all three pay-as-you-go providers. And the cheapest pay-as-you-go figure is one the presenter says he does not trust.

**❷ The heaviest one — the stated motive contradicts the evidence on screen.** The narration says *"even your private content may be used for AI training"*, but **the official post displayed on screen says precisely the opposite** — private stays private, only material posted to public pages is used. **The reason this video exists conflicts with its own screenshot.**

**❸ The cheapest figure is one the presenter doesn't trust.** *"I think it doesn't go through the API but rides an actual subscription. I'll look into it and share."* ⚠ That reservation isn't small — if true, it means **a terms-of-service risk is hidden inside the price.** Layered on top is his own admission that *"the servers are unstable."*

**❹ One real invoice, four rate-card calculations.** And **the decisive number is not the measured one.**

## Held against my own setup

**First I struck out what was already handled.** My [video analysis tool](/en/built/watch/index.md) already uses a pay-as-you-go transcription API, and piling trigger words into a blurb is already standard across several of my skills. **Neither counts as something this video teaches me.**

| Technique | Where it would go | Verdict |
|---|---|---|
| **Quality bar declared in one word** | report generation in the video tool · writing prompts | **adopt — zero cost, immediate** |
| Image → video background + palette extraction | this site's landing / the game page | **hold.** Reopens **after the domain and deploy decision** |
| Pay-as-you-go image and video APIs | [game asset generation](/en/built/moon-studio/index.md) | **hold.** Reopens when assets are actually generated in bulk. ⚠ The cheapest provider is out until the ToS reservation clears |
| Budget ceiling + single retry | — | **rejected.** Flat-rate, so no cost pressure, and retries are already a pipeline gate's job |
| Per-model recipes + template | — | **rejected.** There is no multi-provider routing to do in the first place |
| Gallery + spend log file | — | **rejected.** The library index and the run-folder convention already do this |

## Verdict

**One adoption — and even that one is still an estimate.**

⚠ **This video has no control.** It never shows the run with *"showcase"* removed. The output is genuinely good, but whether that came from **the word, the four reference images, or the model** was never separated. **With a sample size of one there is no confidence interval to give.**

So it is adopted and labelled `[estimated]`, **with the promotion path written down** — hold back **10% of future reports** built without that sentence, and compare. That is when it becomes `[measured]`.

**And the weakest link in this teardown, stated plainly.** ⚠ **I never saw the skill code.** Every structural claim was reconstructed by reading the presenter's screen out of the frames, and **whether the real file behaves as the screen says was not verified.** The verdicts above are about *"is this a good design"*, not *"does this implementation work."*

**Three things I didn't do** — ① I never checked the terms of service directly; I read the screenshot they displayed. **Anyone citing refutation ❷ has to start from the original.** ② What the cheapest provider actually rides can't be confirmed. ③ ⚠ **The five rate cards are a snapshot.** Image generation prices move quarterly, so **do not cite them at adoption time without re-checking.**

**The lesson I paid for here is: read the tables to the end of the same talk.** The first table makes the title right and the second makes it wrong. The presenter honestly concedes it near the end, and yet **the title and thumbnail were built from the first table.**

And ⚠ **a good design and a good conclusion do not arrive as one package.** The skill structure has things worth taking; the cost conclusion is unusable. **Accept them as a bundle and you buy a wrong conclusion along with the design.**
