# Art

> The data was complete and the visual assets were zero. And the gate I added to fix readability made readability worse.

- Headline number: ΔY 0.22
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/wuxia/art/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/wuxia/art/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The data was complete and there were *zero* pictures. And the gate I added to improve readability made it worse.**

## The situation

44 techniques, 26 artefacts. **The data was complete.** Names, numbers, relationships.

**There were zero pictures.**

That is what building alone actually looks like. **Code and data fill up reasonably fast; art does not.**

## Rule one — "value first, colour second"

Choosing colours, people start from **hue** — *this lineage is blue, that one is red.*

What actually matters on screen is **light and dark**, because **people separate objects by difference in brightness.**

Different hues with **similar brightness do not separate**, especially on a busy screen.

So **value is fixed first and colour goes on afterwards.**

## And here is where it cost something — "the gate I added made it worse"

The most important passage on this page.

Readability was poor, so **I added an automatic check** — something like *warn when the contrast between two colours is below a threshold.*

Plausible. **The result got worse.**

Here is why. That check measures **the contrast between two colours**, and the problem I was trying to fix was **whether things separate across the whole screen.**

**What it measured and what I wanted to fix were different things.**

So adjusting colours to satisfy the check **improved individual contrast and made the whole screen messier.** Everything got stronger, which meant **nothing stood out.**

> **When you pick a proxy metric, check first that it points the same way as the real problem.** Otherwise improving the metric makes the problem worse.

## And "colours were assigned, so why do they all look the same"

The same problem wearing a different face.

Each lineage had a colour assigned and **they did not look different on screen.**

The cause was **their brightness being nearly identical.** Four hues and **effectively one value.**

**You cannot see that from the colour list.** In a list the four are clearly different. **It only appears on screen.**

## So the system assigns the colours

Rather than choosing each one by hand, **a rule assigns them.**

| | Chosen by hand | Assigned by the system |
|---|---|---|
| Looking at one | Pretty | Pretty |
| **Looking at the whole set** | **Similar ones creep in** | **Evenly spread** |
| Adding a new one | **Deliberate again** | **Takes its place automatically** |

The third row matters most. Adding a lineage **no longer means reconsidering "what colour should this be."**

## Compare the declaration against the reality

The last device. **A machine compares "what we said we would do" against "is it actually so."**

Most of the time rules get set and **nobody checks that they hold.** And nothing happens when they do not — **things drift slightly and later become "why is this like this."**

## What is still not done

**There are still not enough pictures.** Everything above is **a tidying-up of *how* to make them**, not the making.

Building alone, this slot fills the slowest. And **admitting that and deciding what will not be made** is the next job.

## The detailed record starts here

The state of this project in one line: **44 forms, 26 artifacts, 30 NPCs of complete data, and zero corresponding visual assets** — for a long time.

Writing "art tone" on one line of a design document and having that tone reach the 3D world are completely different jobs.

## Value first, colour second

The order people get wrong most often. **Character readability is made by value hierarchy, not hue.**

Split the screen into three layers — player (light) / background and floor (mid) / enemies (dark). **No two layers may overlap in value.**

The measured floor is a character-to-ground value difference of **0.22.** Below 0.15 the silhouette sinks into the background.

Measuring this project, **the boss-to-floor difference was 0.009.** Effectively identical value — and of course that was the boss chapter.

Verification is simple. **Render a screenshot at 0% saturation; if the layers separate, it passes.** It has to read with the colour removed. And one pose isn't enough — idle, attack, move, hit, victory, at three distances: hero shot, gameplay, and recognition limit.

## A proxy metric made the real problem worse

The most expensive lesson in this area.

To fix "enemies sink into the background," I added a test gating **overall scene brightness** — the frame's average had to clear a threshold.

Clearing that threshold meant brightening the floor. And once the floor brightened, **it moved into the character value band**, and the boss-to-floor difference went **from 0.039 to 0.009 — worse.**

The gate was green. The actual problem was getting worse underneath it.

**A readability gate has to measure the difference between character and background, directly.** Measure something easier instead and you'll tune toward passing that proxy while growing the original problem. This isn't an art lesson. It's a **measurement** lesson.

## Colours were assigned. Why do they all look the same?

Ten stages already had hues assigned, spread from 13° to 270°. And **every one of them read as the same grey.**

The cause wasn't missing hue. It was **saturation.** Perceptual chroma averaged 0.023. Five of the nine adjacent pairs were under 0.02 apart — indistinguishable to the eye. Raising saturation 2.4× resolved all five.

**The answer to "I assigned colours, why don't they look different" is usually saturation.**

And **never measure colour difference as Euclidean distance in RGB.** Value dominates it, so it fails to measure colour at all. Measure on the hue-chroma plane with lightness removed.

Same reason you can't make faction colours look like peers by rotating hue alone. Fix saturation and value, rotate only hue, and yellow and cyan read far brighter than red and blue. **Faction saturation has to be matched too.**

## The system assigns the colours

**Let an artist pick a colour per stage and they will always cluster.** Let a system assign them and they spread automatically.

Wuxia gets this for free — **the five-elements system is already in the setting.** Map elements one-to-one onto stages and derive each stage's dominant colour and form language from that.

Saturation is managed as distribution, not total. Background and floor stay mid-to-low, **high-saturation pixels stay under 5% of the screen**, and the owners of that 5% get named on a list in advance. Leave the owners undefined and everybody spends saturation until everything is drab again.

## Compare the declaration against the reality

The document said "3D cel-shaded." Opening it up, **the floor, walls, trash mobs and elites were all on standard PBR materials**, with the toon shader attached to only some characters.

**The largest surface area and the greatest number of objects on screen were not going through the cel shader at all.**

So checking art tone doesn't start with reading the document — it starts with **counting which shader each material actually uses.** This is the same thing that keeps coming up in [QA](/en/built/moon-studio/wuxia/qa/index.md): what is written and what is running are different.

Low-poly on standard PBR is the worst combination available. Low-poly reads as **intentional only when stylised shading is there**; without it, it just reads as cheap.

## What's still not done

The methodology and the measurements now exist. What's missing is elsewhere.

Building solo, the bottleneck isn't code. [Code gets written by AI](/en/about/). The bottleneck is **one character, one set of animations** — twenty-eight forms need twenty-eight sets of motion.

So when I look at generation tools, the question isn't "is this tool good" but **how far does it get automatically and where does a person become necessary.** And answering that needs more than tools: collect only tool announcements and the conclusion is always "yes, it can be done." So **I read outsourcing quotes alongside them.** Without the price it isn't a judgement, it's a hope.

**I have never measured that ceiling.** What's collected is what the tools claim about themselves. The thing this site repeats — a subject's claims about itself are not evidence — is exactly what I haven't applied here yet.
