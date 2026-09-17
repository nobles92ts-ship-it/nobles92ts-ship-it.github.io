# Toss Nebula device farm

> Nothing transferred. What it gave me instead was a ruler — and held against my own code, it found a crack.

- Headline number: 0 techniques taken
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/qa/toss-nebula/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/qa/toss-nebula/index.md
- Source (source): https://toss.tech/article/device-farm-nebula
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A company put hundreds of phones in a server room so any employee can borrow one over the network. It is well built, and the number of techniques I took was zero. The research still paid.**

> **[도판]** Hundreds of real devices racked and powered around the clock, with anyone in the company able to occupy and drive one through a single API call.
>
> A four-layer structure. Clients use one public API, a server orchestrates occupancy and execution, an agent on each host relays, and a resident controller on every device does the actual pressing. The fourth layer is the part they built themselves and the heart of the article.

## They built a phone library inside the company

Build an app and you have to check it **works across many handsets** — different screen sizes, different OS versions, different manufacturers.

So companies buy test phones and pile them up. Pile them up **per team** and this happens:

- You need a model that sits with the next team over and **nobody knows where it is**
- You go ask **who is currently using it**
- Each team buys the same handset separately

These people **put them all in one place and made them borrowable, like a library.** From your desk you say *give me one of those* and you are connected remotely. They started with 15 phones and **passed 100 within a year.**

## The biggest decision — "build the device layer from scratch instead of growing someone else's"

Ready-made tools existed. They didn't use them. Three reasons.

| What they cut | Why |
|---|---|
| A per-use "session" handshake | **15–40 seconds every time.** Failures climb as device count grows |
| Assuming the screen goes to a desktop app | They needed **many people watching through a browser** |
| A capture path that monopolises the cable | Monopolise it and **you cannot watch and drive at the same time** |

The third is the interesting one. Non-monopolising options exist, but then the screen becomes **a 10–15 frames-per-second slideshow.** Dragging with a finger becomes effectively impossible.

## "13.5× faster" is not a number to quote as-is

Their headline is **"element click, 52ms versus 702ms — 13.5×."**

It is genuinely faster. But reading it as *ours is 13.5× better* is wrong, because **the two sides are not doing the same work.** One performs a handshake every time and one does not. **It is as fast as the removed handshake** — not 13.5× better at the same job.

## I adopted one thing, then rejected it myself in the next revision

This is where the piece paid.

In the first pass I wrote down **one thing to take**: targeting elements by name instead of by coordinate. It really is far more reliable.

Writing the second pass, I re-read my own code. **There were zero calls to that method in my work.**

There was a reason. What I drive is **a game screen.** An ordinary app has buttons and labels placed on screen as separate parts you can name; **a game paints the whole screen as one picture.** There are no named parts to find.

The sharper part: **that fact was already written in my project documents.** I was trying to import something whose impossibility I had already recorded and not read.

## So the harvest was zero and a repair came out

No techniques transferred. But I took one principle they had set and used it **as a ruler** against my own code:

> **Every tool acts through one published entrance.**

One entrance means you only have to guard one entrance. Measured against mine:

| | Duplicate-run guard | Error classification | **Is this the path real runs take?** |
|---|---|---|---|
| The official entrance I built | Yes | Yes | **✗ Not used** |
| The other path actually in use | No | No | **✓ This one only** |

In short: **I had built the safety properly, and the actual runs were not going through that door.**

This kind of defect is **silent.** The guard exists, so nothing warns that it is missing; it isn't traversed, so it never fires. **It was invisible until someone else's principle was laid against it.**

## The detailed record starts here

**Zero techniques, zero adoptions.** The one thing I adopted in the first pass **was rejected in the second** — the measurement behind it was correct, and **that call appears zero times in my pipeline.** A game client paints the whole screen into a single native surface, so there is no accessibility tree to read, and **that fact was already written in my own project docs.** The investigation still wasn't wasted: using one of this system's principles as a ruler against my own code turned up **two gateways where there should have been one.**



## What they built

**It started by consolidating the small farms each team ran on a Mac mini with half a dozen phones plugged in.** Five Mac minis, fifteen devices and one developer at the start; **past a hundred devices within a year.**

This is all a user sees.

```
POST /device/occupy   { platform: "android", tags: ["smoke"] }
POST /actions/click   { x: 540, y: 1200 }
```

**"Grab me a device → press (540,1200) on it."** You never need to know which Mac mini it's attached to, or how the driver is configured.

### They rebuilt from the device layer instead of extending the existing tool

That's the biggest decision in the piece. Scaling up, they kept hitting structural limits in the existing automation framework, and **judged owning it better than patching it.**

| What was removed | Why |
|---|---|
| **The session concept** | **15–40 seconds** to start a session every time, session failures climbing with scale, management cost proportional to device count |
| Desktop-oriented mirroring | Existing tools assume "device screen → desktop app," which doesn't fit **fan-out to browsers through a server** |
| Capture that monopolises USB | Monopolise it and you can't drive the device at the same time. The alternative was a **10–15 fps slideshow** |

In place of sessions they put **an always-running controller with stateless HTTP calls on top.** And **the interface is defined by one spec, from which clients are generated.**

**The side effect of that ownership is the real value.** Their own Korean input method (characters don't break), instant installs of internal builds, security policy enforced inside the driver spec itself — **owning the spec means never waiting for someone else's tool to support you.**

## What broke — 13.5× isn't a like-for-like comparison

The headline: an element click at **52 ms against 702 ms — 13.5×.**

**But the author attached his own caveat: roughly 80% of that gap is the existing tool's wait-for-idle, and turning that off narrows it to 2–3×.** So it's **a comparison between a safety mechanism on and off.** Stating that is honest; quoting "13.5×" out of the table isn't. Their choice is reasonable — driving a device while watching it live wants speed. But **it's a trade in philosophy, not a free win.**

**The bigger gap is elsewhere: there's a p50 and no p99.** What kills test automation is **the tail, not the median.** Session and command failure rates, device uptime, reduction in flakiness — **not a single stability figure appears anywhere in the article.**

The rest, for the record. The effectiveness evidence is **two testimonials** with no measurement conditions or sample. **The nearest open-source prior art** is absent from the comparison — "why not that, instead of building our own" goes unanswered. The iOS capture path is tied to one OS layer, producing **a structural cost of not being able to unify hosts**, and that isn't written up as a cost. And the driver is closed, so **no third party can verify the table.**

## I measured my own environment — and the target was wrong

One real device, read-only operations only (anything that drives the device changes its state).

> **[도판]** Read-only operations only, n=5–7. Separating out the transfer stage and process startup showed neither is the bottleneck.
>
> Stage breakdown. For both the screenshot and the UI dump, almost all of the time is spent on the device; transfer accounts for 5 percent and process startup 4 percent. Both the cable-swap and host-optimisation hypotheses were therefore rejected.

The UI dump ran **2,350 ms**, ten times slower than theirs. So the first pass adopted **the in-device resident controller as its one harvest.**

**The second pass rejected it.** Checking the code exhaustively, **that call appears zero times in my pipeline.**

The reason **was already in my project documentation.** A game client paints the entire screen into a single native surface — **there is no accessibility tree to begin with.** Which is why my screen driving is a screenshot → vision → coordinate-tap loop. Attach that tool and **an empty tree comes back.** The thing that would get ten times faster does not exist.

> **The 2,350 ms measurement was right and the target was wrong.** Before benchmarking anything, check **whether that call actually happens in my run.**

The same measurement killed two more hypotheses. **"Switch to cable and it gets faster"** — transfer is 5% of the total, so the ceiling is 5%. **"Keep a process warm and reuse it"** — the round trip is 73 ms, so the ceiling is 4%. **Their gain comes from inside the device, and reading it as a host optimisation wastes the work.**

## What stayed wasn't their technique — it was my own discipline

I took the point where the article says **"every tool was built on the one public API"** and used it as a ruler against my own code.

Places that bypass the gateway and call the command directly: **14 occurrences across 7 files.** Roughly half against the files that go through the wrapper.

**And something worse turned up. The bypassing files weren't the problem — there were two gateways.**

| | Locking | Error classification | What real runs use |
|---|---|---|---|
| The official gateway | yes | yes | ✗ |
| The other one | no | no | ✓ |

**Not one of the official gateway's defences was wired into the path a real run takes.** When I later attached instrumentation, that fact forced me to attach it to the undefended side.

## Verdict

**Zero techniques, zero adoptions.** What this investigation produced is **one finding about my own code.**

Sometimes that's the honest result of a benchmark. **Even when there's nothing to copy from someone else's system, holding its principles up as a ruler against yours shows you where yours has split.**

The rejection carries a resume condition too — **when the target becomes an ordinary app, or the build starts exposing accessibility nodes.**
