# Recent Unity releases

> Draw the week honestly and it was five release builds, nothing else. Inside them, though, was not a feature addition but a move.

- Headline number: 188 breaking
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/games/unity-releases/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/games/unity-releases/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A sweep of recent news for the tool I build games in. Drawing "this week" honestly left five items — and inside them was not a new feature but a house move.**

Unity is the program I build games with. Tools like this ship new versions constantly, and **a new version is not automatically good news.**

> **[도판]** Listing five items produces no meaning. You have to see the four-track layout to know where to stand.
>
> Four tracks are rolling at once. Long-term support, the current release, beta and alpha produced five builds in three days. Only the beta track carries 188 breaking changes.

## Drawing "this week" honestly was itself the work

Search for recent news and you get a pile of announcements. Cut the window to **exactly one week** and count only what actually happened inside it: **five items.**

The big announcements sat **outside** that week.

That sounds like a dull result. It isn't. **"It was a quiet week" is itself information.** With only five items left, the shape underneath became visible — **this company is running four tracks at once.**

## What's underway is a renovation, not a feature

Two of the five were preview builds. By version number that reads as *two previews shipped*. Opening them said otherwise.

**The engine is being rewired internally in how it labels objects.** In house terms this is not new wallpaper — **it is new plumbing.**

Which changes the question you should be asking.

| | An ordinary update | A renovation like this |
|---|---|---|
| What I ask | *"What's new?"* | **"Does my code still compile?"** |
| What it touches | Only the new parts | **Hundreds of existing places** |

The count of **breaking changes so far is 188.**

## But quoting that 188 as-is would be wrong

Here is where this piece cost something. **Ask where the number comes from.**

- It is **an accumulated count on the preview track.**
- **Nobody knows how much of it survives to release.** Some may be reverted, more may be added.
- For someone on the stable track today, **it is not a number that applies at all.**

So citing it requires the qualifier *"accumulated on preview."* Drop the qualifier and say "188 things break" and you have said **something untrue.**

## I don't ride the preview track — and not out of nerves

My verdict is **stay on stable.** Two reasons.

First, the vendor explicitly says **do not use preview in production.**

Second, and this matters more: **my game is mid-build.** If the floor shifts while I'm building, then when something breaks **I cannot tell whether the cause is my mistake or the floor.** Not being able to tell is the expensive state.

## So I wrote a timing rule — "move house after the boxes are packed"

I can't refuse forever. Eventually the move happens. So I fixed **when**.

> **Upgrade to a renovation version not mid-development, but immediately after finishing a chunk.**

The end of a chunk is **the moment where "what worked yesterday" is unambiguous.** Upgrade there and if something breaks, **you know the move did it.** Upgrade mid-chunk and your own work and the move are mixed forever.

## The detailed record starts here

**Drawing "this week's news" honestly gave me five release builds and nothing else.** No announcements, no keynotes inside that window. And yet **what looks from the version numbers like "two beta builds shipped"** turns out, on opening, to contain **construction work replacing the engine's foundations. 188 breaking changes.** That is not a *"shall I try the new feature"* question but a *"does my code still compile"* one.

## What was there

**Drawing the window honestly is where this material starts.** The request was *"the last week"*, and what actually happened inside that window was **five release builds and nothing else.** The big news — announcements, keynotes — was **outside it.**

**So it is written in two parts** — what actually shipped inside the window, and separately the **immediately preceding context** needed to understand it. **The window was not widened to drag big news in.**

Five builds across four tracks in three days. **Running long-term support, current, beta and alpha simultaneously** shows up plainly.

## The main change — a move, not a feature

**Object identifiers are being replaced systematically across the whole engine.** Animation, physics, graphics and more — **hundreds of APIs affected**, and **188 breaking changes** accumulated on the beta track.

**Why matters here** — it is **groundwork to merge the entity-based workflow with the existing object workflow**, raising the entity concept **into a shared identifier for the entire engine**. Which makes this **a moving version, not a feature version.**

**Alongside it, one long-awaited feature lands.** Dictionary serialisation goes **built-in.** Until now this needed callbacks, custom wrappers or third-party assets.

| Item | Detail |
|---|---|
| Target | the declared type must be **exactly that** — inheritance and wrapping don't count |
| Mode | **opt-in.** Each field must be marked to serialise |
| Inspector | a dedicated two-column view (key / value) |
| Duplicate keys | tolerated while editing, with an icon and a notice on each duplicate row |

**And the whole entity package moves into the core.** Its version rides with the engine release, so **separate version management disappears.** In exchange **managed components are being deprecated**, so class-based components must become structs — **another breaking change.**

## What broke

**You have to ask what "188" is a count of.** It is **a beta-track cumulative figure**, and whether it survives intact into the stable release is unknown. **For someone on the current release today, it is not a number that applies.**

**The dictionary serialisation has tight conditions too.** The declared type must be exact, and **inheritance and wrapping are out.** Most existing projects go through a wrapper, and **removing that wrapper comes first.** Between *"finally built in"* and *"usable tomorrow"* sits that work.

**And this material is different in kind from the other pieces here.** What is being taken apart is neither a repository nor a video but **release notes.** **There are few claims to break**, and the one there is amounts to conceding *"this week was quiet."* ⚠ So this piece is **closer to locating myself than to reaching a verdict.**

> **[도판]** Reading release notes isn't about "what shipped" but about sorting which of it is arriving for you now.
>
> Of this week's five items only one, the stability patch on the current release, applies to me today. The 188 breaking changes and the dictionary serialisation are each not-now for different reasons.

## Held against my own setup

**I should be standing on the current release.** Beta is **not for production**, and my game is mid-build, so **the engine must not move underneath it.** Of this week's releases, the one that applies to me is **a single stability patch.**

**Knowing in advance that a moving version is coming is what this material is worth.** I will have to upgrade eventually, and knowing it is **major construction rather than a feature drop** means **I pick a different moment** — after a chunk of work closes, not mid-development.

**Dictionary serialisation is genuinely something I've been waiting for.** My project has a wrapper in it, and removing it would shrink the code. ⚠ **But that is a post-stable conversation, and the wrapper has to come out first.**

## Verdict

| What | Verdict |
|---|---|
| Track to stand on | **stay on current.** Beta is not for production |
| **Preparing for the moving version** | **adopt — as a timing rule.** When I upgrade, it is **after a chunk closes**, not mid-development |
| Dictionary serialisation | **wait.** Post-stable, and wrapper removal first |
| Entity workflow | **not applicable.** My game's scale doesn't call for it |
| Citing "188" | ⚠ **qualify it.** It is a beta cumulative and may not survive to stable |

**The lesson I paid for here is about reading rather than the material — draw the window honestly and a "quiet week" becomes information in itself.** The fact that there were only five items made the structure — **four tracks running at once** — clearer, not less clear.

And ⚠ **version numbers hide major construction.** *"Two beta builds"* and *"188 breaking changes"* are the same event, and skipping past the first phrasing means **meeting those 188 for the first time on upgrade day.**
