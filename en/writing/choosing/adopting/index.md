# Forty rejections, and the reason was rarely the tool

> I took apart forty tools other people built and installed exactly one. What pays is not the 1-in-40 ratio — it is the reasons for the other thirty-nine.

- Headline number: 40 pieces · 1 tool installed
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/choosing/adopting/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/choosing/adopting/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Forty of someone else's tools taken apart and *one* brought in. And what is worth something is not the 1-in-40 ratio but the *rejection reasons*.**

## The most common rejection reason was not what I expected

I gathered the forty rejection reasons and counted. The most common was **not "this thing is poor."**

| Reason | Who is the subject |
|---|---|
| **There is nothing in my setup to mount it on** | **Me** |
| **I already have it** | **Me** |
| **That problem does not exist in my work** | **Me** |
| The thing itself is poor | The thing |

**Mostly the subject was me.**

Which matters because **subject-the-thing gives "that is a bad tool" and subject-me gives "it does not suit me."** **Completely different statements**, especially when handed to someone else.

## And the adoption call was often not a long review

In several cases what I expected to take days **ended in three commands.**

> **The *host* the tool attaches to was not on my machine.**

Before any question of good or bad, **there was nowhere to install it.**

So I reversed the order. **Before checking whether it is good, count whether it can enter my environment at all.** Caught there, the rest does not need reading.

## The unit of stocktaking was not a list

Judging *I already have that*, you normally **look at a list.** Present means present.

And **a great many were present and had never been switched on.** That is **identical to absent.**

> **The unit of stocktaking is not the list, it is the last-run date.**

## Adversarial checking uses *the target's own material*, not critical articles

The most entertaining repeated pattern across the forty.

**In eight cases, the decisive evidence that overturned my verdict was inside material the target published** — a promotional table, a rule the authors set for themselves, a changelog, their own source. [The eight are listed in the harness bucket](/en/teardowns/harness/index.md).

What makes that repeatable rather than lucky is where the two halves of a pitch sit. **The selling is written at the front and the caveats at the back**, and attention runs out somewhere in between.

So the adversarial pass rarely needs an outside critic. **It needs reading the whole thing.**

## Popularity and adoption were uncorrelated

I checked *surely more likes means a better tool* for real.

**No correlation.** I rejected something with 180,000 likes and learned from something with a few thousand.

And there is a reason this check is trustworthy: **I did not pick the sample.** The last five came from **a machine-gathered feed, taken in order, in full.** Picking them myself **would have mixed in my taste.**

## The first pass almost always inflated the harvest

The honest numbers.

| | Count |
|---|---|
| Written down as *learned* on the first pass | **58** |
| **Surviving verification** | **5.5** |

**Nine in ten were deleted.**

Because **while reading it looks good, and placed next to my own thing it becomes "already present" or "does not apply here."**

And that difference is **invisible while reading.**

## Three verdict boxes were not enough — there are four

It started as **adopt / reject / hold.** Not enough.

**"Not applicable"** had to be separate.

| Box | What it means |
|---|---|
| Adopt | Using it |
| **Reject** | **Judged, and not using it** |
| Hold | Look again later |
| **Not applicable** | **There was never anywhere for it to go — not a judgement** |

Merge reject and not-applicable and **"I judged this" and "there was nothing to judge" land in the same box.** Later, **the investigation gets redone to find out which.**

## Conditions were written and still repeated — because the subject was wrong

I wrote *look at this again later* and **still repeated the investigation.** The cause was **conditions whose subject was the target.**

| Written like this | Six months later |
|---|---|
| *When it has more stars* | **Nothing fires** — stars accrue on their own and no count is given |
| *When the version goes up* | **Nothing fires** — versions keep rising |
| ***When I actually start generating images*** | **Fires when that happens** |

The first two are not conditions, they are **an open-ended deferral.**

## And the zero-harvest investigations were worth the most

The conclusion.

Several investigations produced **zero takeaways.** That looks like failure.

And **those are where my own defects surfaced.** [The same thing happened in the memory bucket](/en/teardowns/memory/second-brain-4steps/index.md) — with nothing worth taking, the comparison ran all the way down, and a step of mine turned out to be installed and never once run.

Which means **the size of the harvest and the worth of the investigation moved in opposite directions** in several cases. And **a ledger that counts only harvests records those as zero.**

> **The ruler that measured my own thing earned its keep not by being excellent but by having *different* markings.**

> **[도판]** The skeleton of the verdict procedure. Counts are over all forty published pieces as of 2026-08-23; reopen conditions and do-not-repropose were counted by regex over the bodies.
>
> The skeleton of the verdict procedure. A subject enters, gets checked against its own material for self-contradiction, then measured against my environment, then assigned one of four verdict columns, then given a reopen condition and a tracking point. The four columns are adopt, hold, reject and not applicable, and without the fourth the reason nowhere to mount it never gets recorded.

## The detailed record starts here

I took apart forty tools other people built, and **exactly one got installed**. What pays in this ledger is not the 1-in-40 ratio but the rejection reasons. Across the forty, the most common reason was not "the tool is bad" but <strong>"there is nowhere on my side to mount it"</strong>. An image-mascot skill was rejected not on quality but because this machine has zero image-generation tools, so there is nothing to call even after installing. A provenance scanner was rejected not on performance but because running it over my 6.1MB published corpus returned **zero detections** — the detector had no target to find. That means the subject of the verdict is my environment, not the tool, and three columns — adopt, hold, reject — cannot record that reason. Without a fourth column, **not applicable**, "nowhere to put it" gets filed as "not good enough", and six months later the same investigation opens again. One piece is literally the third round of the same question. Second conclusion: headline numbers almost never survived measurement, and **what broke them was not someone else's critique but the subject's own material**. Third: first-pass harvests were almost always inflated — the ten published pieces whose kpi line still reads "N → M" add up to **58 becoming 5.5**. This is the procedure reverse-engineered from that ledger of forty.

## Questions this answers

- [How do I check whether installation is even possible](#adoption-verdicts-came-from-three-lines-of-measurement-not-a-long-review)
- [How do I decide whether a library is worth it for us](#the-most-common-reason-for-rejection-was-nowhere-to-mount-it-not-a-bad-tool)
- [Why is a popular open-source project useless to me](#stars-had-no-relationship-to-adoption--i-checked-by-letting-a-machine-pick-the-sample)
- [What should the verdict "we already have this" rest on](#the-unit-of-an-inventory-check-is-the-date-you-last-ran-it-not-the-list)
- [Where do I start when adversarially checking someone else's repo](#adversarial-verification-runs-on-the-material-the-subject-published-about-itself)
- [How many first-pass adoption candidates survive](#first-pass-harvests-were-almost-always-inflated--58-became-55)
- [Do I need verdict columns beyond adopt, hold and reject](#there-are-four-verdict-columns-not-three--not-applicable-needs-its-own)
- [Does a rejection have an expiry date](#writing-the-condition-down-was-not-enough--it-was-written-against-the-tool-changing)
- [How do I write the condition for revisiting something I rejected](#writing-the-condition-down-was-not-enough--it-was-written-against-the-tool-changing)
- [Was an investigation that yielded nothing a waste of time](#the-investigations-that-harvested-nothing-were-worth-the-most)



## The most common reason for rejection was nowhere to mount it, not a bad tool

Collect the rejection reasons across forty pieces and the most frequent one is not a quality problem with the tool. **Nothing to call after installing, no target to fix on my side, or something already doing the same job** — none of the three changes when the tool ships a new version or gains stars.

| Rejection reason | Pieces where the body states it |
|---|---|
| **No mount point** — nothing to call after installing | [ip-as-logo](/en/teardowns/harness/ip-as-logo-skill/index.md) · [DSH better-sidebar](/en/teardowns/harness/dsh-better-sidebar/index.md) · [dsh-anchored-standard](/en/teardowns/memory/dsh-anchored-standard/index.md) · [ASIDE](/en/teardowns/harness/aside/index.md) |
| **No target** — nothing on my side to fix | [watermarks-remover](/en/teardowns/qa/watermarks-remover/index.md) · [Headroom](/en/teardowns/memory/headroom/index.md) · [Toss Nebula](/en/teardowns/qa/toss-nebula/index.md) · [Graph engineering](/en/teardowns/memory/graph-engineering/index.md) |
| **Already have it** — net gain is zero | [obra/superpowers](/en/teardowns/harness/superpowers/index.md) · [ECC](/en/teardowns/harness/ecc/index.md) · [Second-brain course](/en/teardowns/memory/second-brain-course/index.md) · [Karrot SEED](/en/teardowns/memory/karrot-seed/index.md) |
| **Its own numbers do not add up** | [OmniRoute](/en/teardowns/harness/omniroute/index.md) · [ponytail](/en/teardowns/harness/ponytail/index.md) · [Odysseus](/en/teardowns/harness/odysseus/index.md) · [Four plugins](/en/teardowns/harness/four-plugins/index.md) |

This table is not a partition of the forty. **The four rows are not mutually exclusive, and one piece can sit in two of them** — dsh-anchored-standard had no mount point *and* already had the two-stage catalogue. That is why each row lists piece names instead of leading with a count. The length of the list is the size of the axis.

Concretely: the image-mascot skill was five files with zero executable code, and the rejection was not about the prose but about **zero image-generation tools on this machine**. The provenance scanner had 16,619 stars, but running it over my published corpus — 196 documents + 238 static HTML pages + 7 drafts, 6.1MB — returned **zero detections**, and a round-trip through its cleaning function left all **196/196 bytes identical**, a pure no-op. A device farm's UI dump really did take 2,350ms as measured, but my pipeline makes **zero calls** to it. [On my screens that dump comes back empty](/en/teardowns/qa/toss-nebula/index.md) — there was no target for a 10× speedup to act on, and that fact was already sitting in my own project docs. A context-compression layer advertised "60–95% compression" while my cache reuse rate was already **92.5–96.3%** with uncached input at 1.8–2.0 tokens per call — **there was nothing left to compress**. A talk called a loop-back edge "the heart of graphs"; in my 52 runs the trigger condition occurred **once**.

The five have something in common. **None of the verdicts came from reading the subject more closely.** All came from measuring my side once, and measuring took a small fraction of the time reading took. Reverse the order — read the subject at length first — and that time leaks into the verdict.

**The lesson that cost something here is the shelf life of a reason.** "Not good enough" stays valid as long as the tool does not change; "nowhere to put it" flips the moment my environment changes. Filed in the same column, the shelf life disappears entirely, and six months later the same investigation runs again.

## The unit of an inventory check is the date you last ran it, not the list

"We already have this" gives three different answers at three layers. The first two — possession (is it installed) and function (does pressing it produce a result) — are covered in [the baselines piece](/en/writing/measurement/baselines/index.md). What this section adds is **only the third layer**: the date you last ran it. All three layers and how to count them are covered separately in [You don't have it if it has never run](/en/writing/choosing/already-have-it/index.md).

> **[도판]** Another post owns the top two layers. This section builds only the third, and only there do adoption and execution come apart.
>
> The claim we already have this split into three layers. Layer one possession and layer two function are covered by another post; layer three run history is the subject here. At layer three three measurements appear: a measurement skill unused for 24 days, a formula overcounting by 37.6 times, and 127 observation files piling up while the distiller never ran. Stopping at layer one yields the conclusion we already have it so no adoption is needed; going down to layer three yields we have it but it never ran, so the answer is execution not adoption.

All three measurements came from layer three. **A measurement skill brought in to size context budgets was installed on 07-29 and had zero runs through 08-22 — 24 days**, and the slash command meant to back it was never created, confirmed against all 37 commands. Worse, its formula overcounts skill overhead by **37.6×**: it counts 890,428 characters of skill documentation when only the 23,671 characters of description front-matter are actually always loaded. In a different harness, when five techniques were being harvested and three died, **both skills that killed them also had zero run history** — one had nothing but a one-line adoption memo, the other's own mandated log file and trash folder both did not exist. My own build was the same: a pipeline that observes sessions and distils patterns had **127 observation files and 20.6MB piled up while the distiller never ran once, producing zero instincts**.

All three are gaps caused not by *not having* something but by **not running what was already there**. And all three invert if you judge at layer one — the name is on the list, so "already have it, no adoption needed". I have actually written that. Mapping my operation onto someone else's four-stage ladder, I wrote "equivalent" in four cells, and **the evidence for every one of them was "it is installed"**. Pressing the last cell produced zero accumulated items, zero files, zero observer hooks.

**The lesson that cost something here is which way an inventory table points.** Acquiring an instrument and reading it are separate acts, and the acquiring one is always the easier one to do today. If the table has only a "have it" column, it does not block adoption — it **justifies** adoption, because a long list reads as "we are already well equipped". One column for "date last run" flips that. An empty date is not an asset; it is **an open item**.

## Adoption verdicts came from three lines of measurement, not a long review

Almost no verdict here came from a long feature-comparison table. What actually decided them was **a few shell commands**.

One npm plugin had 2,575 stars and 250 commits, and the verdict ended in three lines. `where dsh` returned nothing, `~/.dsh` did not exist, and of nine global npm packages **zero** belonged to that ecosystem. With 15 of its 18 peer dependencies inside that ecosystem, [the install path itself did not exist](/en/teardowns/harness/dsh-better-sidebar/index.md). Not "it does not fit right now" but "there is no host". For the image-mascot skill I [scanned the full text of 99 skill documents for image-generation vocabulary](/en/teardowns/harness/ip-as-logo-skill/index.md) and got 8 hits, all false — `dall` matching inside `ReadAll` and `findAll`. Zero local generation stack, zero generation tools in the session roster. One desktop agent [required macOS 15 or newer while both of my machines run Windows 11](/en/teardowns/harness/aside/index.md), and its command-line tool was definitively blocked: the install script exits immediately on anything but macOS.

Even when measurement took more than three lines, the verdict still came out of command output. For [a harness with 181,214 stars](/en/teardowns/harness/deepseek-harness/index.md), running the README's first install command in an isolated folder with a 300-second cap produced **zero bytes of log and a timeout (EXIT=124)**. Adding `--legacy-peer-deps` finished in 30 seconds, so the cause was the peer dependency graph rather than the network — and installing that way pulls 430 packages, 260MB, after which the first run dies with `ERR_MODULE_NOT_FOUND`, because all nine packages required for boot are declared as `peerDependencies` and that flag is exactly what skips peers. Filling the missing dependencies by hand booted it in **884ms, EXIT=0** — a path documented nowhere. Measuring the install three times took far less time than a feature-comparison table would have.

**The lesson that cost something here is sunk cost.** Review something long enough and you start wanting to adopt it, because the time spent leaks into the verdict. Measure first and that time never accumulates, and the rejection survives as **command output** rather than taste. The reasoning behind asking "is there anything to improve" before "how much does it improve" lives in [the baselines piece](/en/writing/measurement/baselines/index.md).

## Adversarial verification runs on the material the subject published about itself

The decisive evidence against a headline number was almost always **inside the subject's own material**. There was no need to go looking for outside criticism.

- One plugin's README opened with "~325KB core at startup". [Opening five published npm tarballs and measuring](/en/teardowns/harness/dsh-better-sidebar/index.md) gave 405 · 424 · 459 · 482 · **585KB**. Not one of the five published versions matched the headline. The same repo's chunk loader comment offers a third number (`~1MB`).
- [A gateway advertised "89.2% average token reduction"](/en/teardowns/harness/omniroute/index.md), which is one multiplication: `1 − (1−0.80) × (1−0.46)`. That holds only if the two compressors eat different redundancy, and the repo has no data measuring that independence.
- The same repo's "500+ contributors" came to **368** on full pagination. The API cap is 500, so it was not truncation. Of 6,225 commits, 3,822 (**61%**) are one person.
- The same repo's "291 providers · 25,000+ tests" contains only e2e 42 · integration 124 that amount to round-trip verification.
- [One report's headline "−54% code volume"](/en/teardowns/harness/ponytail/index.md) recomputes to **−35.4%** under the definition the report itself declares (per-task average). Of that −54%, 17.7 points come from two tasks, and the six backend tasks alone give −22.2%.
- Several secondary write-ups about [a project with 84,277 stars](/en/teardowns/harness/odysseus/index.md) listed the licence as MIT when it is **AGPL-3.0**, and forks as 10,000 when there were **187**. That is an error that inverts the adoption decision outright.
- [A promotional table carried its own counterexample](/en/teardowns/harness/four-plugins/index.md) — code volume fell to 80% while tokens rose to **107%**. Told to write shorter, the total grew. The table was made by the people selling the tool.
- [Turning a subject's own stated verification method back on itself](/en/teardowns/harness/superpowers/index.md) collapsed my top-ranked adoption. "Always include a no-guidance control" was its own rule; building that control showed my corpus was in fact *less* skewed than the reference.

It is not only numbers. **Traces of a subject never applying its own rule to itself** were also sitting in the subject's repository. [One linter plugin had never once run its own plugin on its own source](/en/teardowns/harness/anti-slop/index.md), and [one harness had gates among its 39 that were wired into no CI at all, with those unwired ones red on the default branch](/en/teardowns/harness/deepseek-harness/index.md) — 39 meant "exists", not "runs". [One chat stack had its benchmark workflow set to `disabled_manually` with zero run history](/en/teardowns/harness/cumora/index.md): the results directory was not "not built yet", the only job that builds it was switched off.

**The lesson that cost something here is verification order.** Someone else's critique has unclear provenance and timing, so verifying it costs as much as the original investigation. The subject's own material is first-hand evidence that cannot be argued with, and it is free. So the order is fixed: **start by checking whether the subject's own statements agree with each other** — do that and most of adversarial verification finishes by reading alone.

## Stars had no relationship to adoption — I checked by letting a machine pick the sample

Eleven of the forty pieces state a star count in the body. Drop those eleven into order-of-magnitude bands and no relationship to adoption appears. The largest, at 181,214, was rejected, and **the one tool that actually came in sits at 5,894 — right in the middle.**

> **[도판]** Measured 2026-08. Exact values live in each piece — 181,214 · 84,277 · 41,856 · 16,619 · 5,894 · 3,481 · 3,313 · 2,858 · 2,575 · 1,023 · 481.
>
> Eleven pieces that state a star count, dropped onto order-of-magnitude bands. There is no vertical axis. One piece in the hundreds, six in the thousands, three in the ten-thousands, one in the hundred-thousands, and the single tool that was actually adopted sits inside the thousands band while the largest one was rejected.

Why stars cannot serve as grounds was demonstrated by [the 181,214-star harness](/en/teardowns/harness/deepseek-harness/index.md) itself. My collector caught 170,925 at 07:11 on 08-20, the morning I started taking it apart on 08-22 it was 181,170, filling in the table it was 181,214, and while writing the paragraph it was **181,723**. That is +10,798 in two days and +553 in the few hours of writing. To use a star count as evidence you have to record when you measured it, and **the moment you record the time, it becomes obvious the value moves by the hour**. [84,277 stars against 187 forks](/en/teardowns/harness/odysseus/index.md) — 450 to 1 — points the same way: healthy open source usually runs 5–20 to 1, and 450 to 1 means people starred it without touching the code.

Up to here the sample is mine, which could be confirmation bias. So **I changed who picks.** I took the five most recent items from the collector's feed in order and took all of them apart — meaning I did not choose what to open. Their stars add to more than 190,000, and [the verdicts came out harsher](/en/teardowns/harness/index.md) — zero adopted, one held, four rejected. The single hold, [a five-day-old repo with 2,858 stars](/en/teardowns/harness/cumora/index.md), had genuinely interesting arbitration machinery, but all three defences it named for itself (CI guard, benchmark reproduction, release channel) broke under measurement.

One clarification. **Harvesting a technique is a different axis from adopting a tool.** Zero tools does not mean nothing came out of the investigation; when this section says "zero adoption" it is counting installed things.

There is one more thing stars do not do. **They do not even guarantee which repository they belong to.** While taking apart [the 16,619-star provenance scanner](/en/teardowns/qa/watermarks-remover/index.md), my candidate list had surfaced a repository of the same name **under a different account**. The item in the feed and the item in the candidate list were different projects, and watching stars alone would not have caught it.

**The lesson that cost something here is what stars are for.** In this ledger a star count is not a verdict input but **a stamp saying when this investigation happened**. Used as a stamp, a moving value stops being a problem and becomes the point — a reader six months later immediately knows the number is from then. Why version documents always go stale is covered in [the version-docs piece](/en/writing/verdicts/version-docs/index.md).

## First-pass harvests were almost always inflated — 58 became 5.5

Ten published pieces still carry "N → M" in their kpi line. The left number is how many adoption candidates the first pass produced; the right is how many survived. Together they run **58 to 5.5**, a **90.5%** reduction.

> **[도판]** The numbers come straight from each piece's published kpi line. The two excluded are 1 → 43 (which grew) and workflows 200 → 0 (not a harvest count).
>
> Ten pieces with their first-pass and final harvest counts drawn as paired bars. The pale bar is the first pass and the darker bar overlaid on it is the final count. Six of the ten have no darker bar at all because the final count is zero. The totals run from 58 to 5.5, a 90.5 percent reduction.

What broke them was not outside criticism but my own measurement. In [one design-system repo I wrote down seven techniques as harvest](/en/teardowns/memory/karrot-seed/index.md), attaching "an incident I have already had" to each so they looked well-grounded, and **four days later I measured my environment and deleted five.** Either I already had them or the causality was wrong. One was particularly bad — I had paired a past incident with a technique plausibly, and **that incident was not caused by anything the technique prevents.** No amount of reading the subject catches that error. Only opening my own config files catches it, because "what caused it on my side" is nowhere in the subject's documentation. The two survivors were both single-hook items, and even those I first ran in warn-only mode rather than blocking.

Corrections were not limited to the harvest side — in [one linter-plugin piece I counted 2 false positives when there were 3](/en/teardowns/harness/anti-slop/index.md). I had missed a file and written "exhaustive". In the same piece I had said a sync gate "cannot catch a stale copy", and measurement showed **zero stale copies**: the assembly step re-copies everything each time, so that failure mode was already gone. Turning it on as written would have produced ten false alarms on the first run. The reason these corrections stay in the final version rather than being deleted is the one recorded in [the evidence-grades piece](/en/writing/verdicts/evidence-grades/index.md). There, a repo summarised from its README alone turned out wrong in two places in opposite directions, and **the README had not lied** — I had read grade-six evidence as grade one.

How these ten were selected is worth recording. They are **every published piece whose kpi line reads "N → M"**, and two of that shape were excluded: one where a single rule grew into 43 places (the opposite direction), and one reading workflows 200 → 0 (not counting harvest). I note the exclusion because otherwise the next reader greps "N → M", gets twelve, and concludes the total does not add up.

**The lesson that cost something here is not deleting the first pass.** Delete it and keep only the final version, and the reduction rate itself disappears as a measurable thing. Then the next investigation believes its own list of seven again, and "I wrote down seven, so there is seven-ish of value here" gets reused as grounds for starting. That is exactly what 90.5% does — **it makes a first-pass list unusable as grounds for starting.**

## There are four verdict columns, not three — not applicable needs its own

Adopt / hold / reject cannot record "there is nowhere on my side to mount it". Real verdict tables make the shortfall visible. [One preset bundle's table](/en/teardowns/memory/dsh-anchored-standard/index.md) lists "no mount point" and "already have it, zero gain" side by side as distinct reasons. Compress both into one "reject" and **a distinction whose reopen conditions are opposites disappears** — the first opens when my harness gains a hook, the second opens only if my harness *loses* the capability.

Some tables grew instead. [One desktop agent's table](/en/teardowns/harness/aside/index.md) used five columns in earnest — reject (platform) / decide after inspection / hold / already have / ⚠ forbidden (a self-scored benchmark cannot be cited). Of the forty, **two carry a separate do-not-repropose entry** (regex `재제안`, full sweep). Both spell out **why no change would move the verdict** — "more stars or more modes will not change the fact that it cannot be installed".

I have also seen what happens when a column is missing. "I already have this" got compressed to "the tool is not good", and an investigation launched to fill the same gap with a different repo. The direction of the compression is the bad part — "circumstances on my side" cannot be reconstructed by the next reader (me, six months later), while "the tool is not good" looks like it needs no reconstruction. So **the value of the fourth column is not the verdict but the preservation of the reason.**

One distinction. **These four columns are a different axis from the five verdicts used on test results.** An adoption verdict decides whether a thing enters my environment; a test verdict decides what to call an execution result. The latter is covered in [the threshold piece](/en/writing/verdicts/threshold/index.md). Mix the two axes in one table and the column names start looking alike, which makes both unusable.

**The lesson that cost something here is what a column costs.** Too few columns and what survives is the conclusion, not the reason. A rejection with only a conclusion tells future me nothing, and with nothing to read the investigation repeats. Adding a column is far cheaper than running the investigation twice.

## Writing the condition down was not enough — it was written against the tool changing

I counted the pieces with a reopen condition. Sixteen use the phrase "reopen condition" literally; adding two other phrasings brings it to **21** (regex `재개 ?조건|(다시 )?여는 조건`, full sweep 2026-08-23). Because the wording was never standardised, the narrower regex misses five pieces. That is not a trivial formatting issue — **a condition you cannot find is the same as a condition you never wrote.** Whoever goes looking six months from now runs the regex once.

But the count was not the problem. **The same question reopened even in pieces that had a condition written down.** [One piece is the third round of "should I adopt someone else's preset bundle wholesale"](/en/teardowns/memory/dsh-anchored-standard/index.md), and the previous round's verdict table did state a reopen condition. It did not repeat for lack of a condition. It repeated because **the condition was written against the tool changing** — "when more modes ship", "when it gains stars". Those sentences become slightly more true every day and fire nothing.

Conditions written against my environment look different. The three in that same piece are the example: ① when a hook that *removes* context or tool catalogue opens up in the assembly step ② when a head-to-head against the official default preset reaches n≥20 per cell with the confidence-interval floor above zero ③ when an untreated holdout lets me build a control on my side. None of the three opens no matter what the tool does; all three require my side to change. One piece went further — [a macOS-only tool](/en/teardowns/harness/aside/index.md) got five reopen conditions plus **tracking points**: does the install script gain a branch, does a button appear on the download page. Reading the full changelog turned up Windows three times; the verdict stayed rejected, but the condition changed character from "someday" to <strong>"plausibly soon"</strong>.

**The lesson that cost something here is the subject of the condition.** A reopen condition is written against a change in my environment, not the tool. "When it gets more stars" or "when the version goes up" is a deferral with no deadline, and that sentence fires nothing six months later. The test is simple — **if reading the sentence does not immediately tell you what to go check, it is not a condition.** "When a hook that removes context opens in the assembly step" points at one place in my harness config; "when more modes ship" points nowhere.

## The investigations that harvested nothing were worth the most

Seven investigations brought back nothing at all. And those seven **arrived at the same conclusion independently of each other** — fill in the comparison table to the end and what surfaces is a blank on my side, not the subject. The individual cases are not what is new; the tally of seven independent arrivals at the same place is.

- [Zero techniques](/en/teardowns/qa/toss-nebula/index.md) — using one of that system's principles as a ruler on my own code found **two separate gateways**, with 7 files and 14 call sites bypassing the gateway to invoke commands directly.
- [Zero harvest](/en/teardowns/memory/second-brain-course/index.md) — applying someone else's six-item self-assessment across my 99 skills surfaced **one skill with no description, so it could never be auto-invoked**, plus 16 over 500 lines.
- [Zero installs](/en/teardowns/harness/mattpocock-skills/index.md) — using that repo's doctrine document as a ruler on my 96 skills, **one** had an invocation axis, and the other 95 carried 20,672 characters of description loaded on every turn.
- [One technique harvested](/en/teardowns/harness/superpowers/index.md) — but the actual output was acceptance gates added to two of my other pipelines. All 10 failing cases caught, all 12 passing cases through, zero false positives. The design reasoning is in [the unattended-regression piece](/en/writing/agents/silent-success/index.md).
- [One adoption out of 285 skills](/en/teardowns/harness/ecc/index.md) — a tool for the one axis I did not have, and that tool did not run in my environment.
- [The feature a talk called "the heart"](/en/teardowns/memory/graph-engineering/index.md) fired once across my 52 runs, and the real gain was the parallel execution mentioned in passing — a median of **9.9 minutes** saved per run.
- [Taking apart a 16,619-star scanner](/en/teardowns/qa/watermarks-remover/index.md) left exactly **one self-comparison**: a line in my own deploy script was violating a line in my own rules document.

The shared structure of the seven is this. **There is nothing to take, but a ruler comes out.** Put that ruler against my code and things appear that were invisible while looking at the subject, because someone else's principle has none of the blind spots my own principles have. It paid even when the ruler did not run — from a repo of 285 skills I picked the one tool that filled the one axis I lacked, it failed to run in my environment, and **the leading hypothesis for why was a collapse mode the repo itself had tabulated**.

**The lesson that cost something here is a column in the ledger.** The less there is to learn from a source, the further you fill in the comparison table, and the blanks show up there. So the ledger has a separate column for "things I no longer need to build" — without it, the seven highest-yield investigations all record as "harvest 0", and the next time a similar source appears, "it was zero last time, do not open it" becomes the decision to skip.

## What I could not do

- **An adoption rate of 1/40 is not a report card on the tools.** The sample is one environment — mine — and the claim of this piece is that in all forty the verdict turned on my side, not theirs. Measure the same forty in a different environment and a different list is the expected result. This piece cannot be cited as evidence that these tools are bad.
- **Twenty-one reopen conditions are written down and none has ever fired.** Whether they are drawn well — too tight to ever open, or too loose to mean anything — is unknown. What is supported is "conditions written against the tool changing do not fire"; "conditions written against my environment do fire" is not yet supported.
- **I took apart all forty and graded all forty myself.** Producer and grader are the same person. I counted the 58 → 5.5 reduction and I defined "first-pass harvest" after the fact. There is no independent re-verification, and this is exactly where grade-six evidence — self-report — sits in this ledger.
- **The rejection-reason classification has no formula.** The first table lists piece names across four axes, but how those axes were cut is my judgement. Ask "which axis is this piece" again and someone else will file them differently, which is why each row lists names rather than leading with a count. A list is verifiable; a classification is not.
- **I cannot measure whether the thirty-nine rejections actually had no value.** Measuring opportunity cost would require a holdout that adopts some of them untreated, and I have never built such a control. Not "adopting would have been a loss" but **"I could not find grounds to adopt"** — that is the whole claim.
- **Star figures are a 2026-08 snapshot.** The proposition "stars do not predict adoption" holds regardless of the snapshot, but the individual numbers in the caption are already wrong by the time you read them. That is why the figure is drawn in order-of-magnitude bands.
- **I am not yet counting the cases where the procedure was followed and still got it wrong.** This piece supports "measure first and the verdict gets more accurate" with forty cases, but I have not counted how many pieces measured first and still had the verdict overturned. If that number is not zero, this procedure has a hole too.
