# DSH better-sidebar

> The headline number — a ~325KB core — broke under measurement. But the gate I was using to judge someone else's ungated repository had never once been committed in my own.

- Headline number: 4 takeaways → 1
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/dsh-better-sidebar/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/dsh-better-sidebar/index.md
- Repository: https://github.com/omdsh-dev/DSH-better-sidebar
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**An add-on that puts a file browser, an editor and a terminal into an AI coding tool's screen. The headline number did not survive measurement. But the reason this piece is worth keeping is elsewhere — the gate I was using to judge someone else had never once been committed in my own repository.**

> **[도판]** Counting tabs does not show you this thing. What it is, is pushing even the built-ins through the same door.
>
> This plugin is one npm package split into a host half and a client half. The host opens sidebar routes scoped by session id, and the client mounts a workbench that cuts the right and bottom panels with a recursive split tree. Exactly two extension points are open to outsiders — tab registration and file viewer registration — and its own seven built-in tabs and six viewers pass through the same two methods.

## What it is

Using an AI coding tool in a browser normally gives you **a conversation pane and nothing else.** Looking at a file means opening another program.

Install this and **it all arrives in one screen** — file list, editor, terminal, change history, preview.

Fifteen days old, 250 commits, 2,575 likes.

## The best thing — "its own features come through the same door as outsiders"

The most instructive design here.

Normally a program like this gives **its own features a private entrance** and receives **third-party extensions through a narrow one.** Then third-party things never work as well as the built-ins.

This repository pushes **its own thirteen built-in features through the exact same door** as outsiders. The comment calls it **eating its own dog food.**

Which means **a narrow door inconveniences them first.** So the door does not get narrow.

## Another good one — "a broken part does not take the whole down"

The second-best thing.

Some components **may or may not be present on a given machine.** Normally when one is missing **the whole program fails to start.**

Here:

| Situation | Usual | This repository |
|---|---|---|
| A component fails to load | **Everything stops** | **It mounts, degraded** |
| The tools offered to the AI | — | **That capability is simply not registered** |
| For the human | An error | **A repair command to paste** |

The second row is good. **Telling the AI a broken feature exists** makes it keep trying and failing. **Telling it the feature does not exist** makes it find another route.

## But the headline number did not hold

The first line of the documentation boasts: **"only a ~325KB core is fetched at startup."**

I **downloaded all five published versions and measured them.**

| Version | Actual |
|---|---|
| First | **405KB** |
| … | 424 → 459 → 482 |
| Nine days later | **585KB (+45%)** |

**It was never 325KB.**

*Surely that's the compressed figure* does not rescue it either — it was **12,283 uncompressed lines.**

The funnier part is that **another comment in the same repository states a third number.**

## But one other number was exactly right

The most interesting thing in this piece.

The same documentation also claims **a certain component is 7MB.** Measured, **it was exactly right.**

So **it is not that this author cannot measure.**

The difference: **the 7MB side has an automatic check on it and the 325KB side does not.**

> **Only ungated numbers go stale.** They are not kept current by diligence — **they are kept current by a machine complaining.**

## And I found a defect not in the issue tracker

Found while reading. Nobody had reported it.

**The situation**: I have a file open in the editor. Meanwhile **the AI rewrites the same file.**

**And I press save.**

| What happens |
|---|
| My editor holds **the old content from when I opened it** |
| Saving **wipes out what the AI just wrote** |
| **No warning** |

The cause is that on save it **never checks whether anyone else edited since I opened it.** It takes a path and content and overwrites.

And the repository **admits itself that it has no file-change detection.** Put the two together and you get the above.

It stings because **that situation is the product's entire reason to exist** — it was built so a person and an AI could work on the same files together.

## One place the tests create an illusion

The preview feature has a problem. The address handling is fine, but **two entries are missing from the table that declares file types**, so **all page styling fails to apply.**

**And the tests pass.**

The tests **check only the address handling and never look at the file type.** So the light is green and the screen is broken.

→ **Having tests and those tests seeing this defect are different things.**

## The adoption call was three lines of measurement, not a review

There was nothing to deliberate. **Three commands ended it.**

- **The host program this attaches to is not on my machine**
- Its configuration folder: **absent**
- Packages from that ecosystem in my global install: **zero**

**Not "it does not suit me right now" but "there is nothing to attach it to."**

## And here my own side surfaced

The subject of the piece.

Above, I judged someone for **letting a number go stale because it had no automatic check.**

I checked **the gates I judged them with.**

**They had never been committed to my repository.**

Five checking scripts were **outside version control entirely.** Not deliberately excluded either — **they were not on the exclusion list.** They had simply **never been added.**

The sharpest part: one of those files carries a header I wrote saying **"this file is the canonical source,"** along with **a history of recurrences.**

And **that file's change history is empty.**

> **A file declared canonical had no history.**

Which means if it is deleted **there is no way to recover it**, and **no way to know who changed what, when, or why.**

## Verdict

| Item | Verdict | Why |
|---|---|---|
| Adopt the product | **No** | Nothing to attach it to |
| The size gate | **Zero gain** | Already present in a better form |
| Degraded mount | **No** | The place it would apply was an unused relic |
| **Yield to yourself at boot** | **Taken** | When a second copy appears, **it stands down by itself** |

I took only the last one. And I set the verification to **"is there a heartbeat record"** rather than **"how many processes are running"** — **counting processes counts a zombie as one.**

## The detailed record starts here

**It is sold as an extension base, and its headline number is off from the measurement.** DSH better-sidebar is an npm plugin that attaches to the web mode of an agent CLI called DeepSeek Harness and lays a file explorer, editor, terminal, Git and preview onto one screen. 2,575 stars, 250 commits in the 15 days since the repository was created. What the first line of the README boasts is "only a ~325KB core is downloaded at startup" — and measuring the npm artifacts myself, **not one of the five published versions was that value**: 0.12.1 is 405KB, and nine days later 0.15.0 is 585KB (+45%). The cause is simple. CI has no size gate. **But that is not why this piece stays** — the same gate I used to judge someone else's repository for leaking a number was, on my side, outside version control.

## An extension base is not the sidebar — it is the two doors that hand the sidebar to someone else

**One package splits into a server half and a browser half.** The server half registers a `/sidebar/api/*` JSON dispatch table (file tree, read, write, search; 12 Git operations; subagent status), media / HTML preview / lazy chunk routes, and a terminal WebSocket. Every request scopes the working directory by sessionId, but for the first paint before a session is attached there is a **three-step fallback that descends all the way to the process cwd**, so "every feature is isolated per session" is not an accurate description. The browser half mounts two workbenches — right and bottom — as portals, cuts each panel with a recursive split tree, then saves the layout in localStorage under a per-session key and, on restore, runs structural validation, viewport clamping and reissue of duplicate pane ids. The terminal is not an imitation but a real shell, and switching it on injects 8 tools into the model so the agent drives a long-lived PTY.

| Item | Measured 2026-08-22 |
|---|---|
| Scale | 227 files 2.4MB · tests 82 files 672KB · 21 design documents |
| Dependencies | 27 runtime · **15 of the 18 peers are prereleases** |
| Activity | created 08-07 → pushed 08-21. 250 commits · **17 releases / 11 days** |
| Bus factor | **1** — top contributor 217 commits (87%), second 7 |
| PRs | 68 merged · 35 closed · **78 open** (open PRs exceed every merge ever made) |

**What I paid for here was nearly reading "22 contributors" as distribution.** 19 of them have one or two commits, and most of those are PRs adding their own plugin to a recommendation list. Contributor count had nothing to do with how core development is distributed.

## The best thing here is pushing even its own built-ins through the same door as outsiders

| Technique | What |
|---|---|
| **Eating its own dogfood** | The 7 built-in tabs and 6 viewers pass through the **same** `registerTab`/`registerFileViewer` as outsiders. A comment calls this *"eating its own dogfood"* |
| **detect → exts, two-stage matching** | Viewer choice sniffs content first, extension second. A catch-all match that carries `detect` is demoted to sniff-only and yields — the structure stops a magic-number viewer from swallowing every file first |
| **dedupeKey** | Three hardcoded tab-opening strategies (single, per-path, per-id) absorbed into one function field. It splits "create" from "focus" and fires the callbacks separately |
| **A build purity gate** | Importing a package outside the whitelist **as a value** breaks the build. The message reads *"collaborate through cordis services"* — one collaboration path, enforced |
| **Degraded mount** | A native dependency failing to load does not kill the server. It mounts degraded, **the model-facing tools are simply never registered**, and a human gets a repair command to paste |
| **Automatic yield on double mount** | If the same package comes up under two entry points, duplicate routes fail the whole boot. It switches its own row off not with a runtime singleton but **in the loader expression** |
| **Side-conversation seeding** | Handing a parent log to a child session, it honestly closes the turn that was in flight with a synthetic event and nails down *"this is reference context, not the current task."* A test pins that sentence |

**What I learned is not the technique but where the contract is hung.** The purity gate hung the collaboration contract on the **build**, not on a human comment. As we will see, the same contract on my side was hung on a comment — and it did split once.

## Three headline claims all failed, and one defect is not even in the issue tracker

- **"~325KB core" — broken.** Measuring five tarballs myself: 405 → 424 → 459 → 482 → **585KB**. It is 12,283 lines and not even minified, so "that's the minified figure" is not available as an excuse. A chunk-loader comment in the same repository says *"only the ~1MB core bundle"*, producing **a third number**. Meanwhile the "7MB mermaid chunk" measured 6,996,658 B — **exactly right**. The author is not incapable of measuring; only the numbers with no gate behind them went un-updated.
- **"built-in and third-party are fully equal" — broken.** The registration path is the same, true, but **an external plugin cannot expand a panel.** The service exposes no expand or toggle method, so an external tab opens and then hides behind a collapsed panel, and an open issue is alive saying the only remaining means is DOM hacking.
- **"the same trust fence as /api" — same function, different scope.** Upstream applies that check only to privileged methods; this plugin applies it to every route. So on a `127.0.0.1` connection where Chrome sends an Origin with no port, every sidebar route is 403 **while the host-side conversation runs fine.** That is over-blocking, not under-blocking.
- **HTML preview — the URL is right, the headers kill the assets.** Encoding everything into the path rather than the query so relative references do not lose session scope is an excellent design, but the media type table has neither `.css` nor `.js`, so everything ships as `octet-stream` and the same route attaches `nosniff`. ⚠ **The tests create an illusion** — they assert URL decoding only and never look at content-type.
- **A defect not even in the issues — file writes have no optimistic concurrency check.** The save API takes a path and contents, nothing else: no mtime, no hash. On top of that sits the "no file watcher" the repository itself admits. **Leave a tab open, have the agent rewrite that file, and the moment the human saves, the agent's latest contents vanish without a warning** — a classic lost update, in exactly the scenario this product exists for.
- **"3 platforms supported" — both CI jobs are ubuntu only.** And the most painful of the unresolved P0s happen to cluster on Windows. Installing it makes resuming an existing session fail every time, removing it restores things immediately, and the maintainer cannot reproduce it on mac.

**What held, for the record.** "A real shell" is true, and the outside criticism that "the README still advertises a built-in Office preview" **has already been fixed and no longer holds** — outside criticism goes stale too. And **what I paid for in this section was reading comment density as maturity.** This repository has the rare comment culture of writing down why it was not done the other way, and on the first pass I stood that up as evidence of maturity — but a comment pointing at a tab name that does not exist, and a notice that never caught up with an upstream relicensing, are both alive at HEAD. **Unverified high-density comments are worth the same as wrong documentation.**

> **[도판]** Less that the number is wrong than that nobody holds it. Where one line of size gate is missing, 45% leaked in nine days.
>
> I measured the core bundle size of all five published versions myself. The 325KB the documentation claims matches no version, and it grew 45 percent from 405KB in 0.12.1 to 585KB in 0.15.0 in nine days. The same repository holds three different numbers at once, and CI has no size gate.

## The adoption call ended in three lines of measurement, not a review

`where dsh` returns nothing. No `~/.dsh`. Of the 9 global npm packages, **zero** from that ecosystem. 15 of the 18 peers are plugins from that ecosystem, so **the install path itself does not exist.** It is not "this does not fit right now" but "there is no host." That leaves porting techniques — and of four candidates, only one actually survived.

- **Bundle size gate → zero gain.** The target's worst defect happens to sit exactly where I had already filled the hole. All 9 limits in `scripts/check-weight.mjs` judge against `dist`, each limit carries its derivation in a comment, and `scripts/deploy.mjs` is **four-stage fail-closed**: links and anchors → weight → glossary → markers.
- **dedupeKey → zero gain.** The TC pipeline already does the same three-way open policy off a single ownership marker — create new / idempotent rewrite if it is ours / yield with a suffix if it is someone else's.
- **Degraded mount → rejected.** The local model MCP server I meant to attach it to **was not registered in any configuration at all.** Server name, tool name and slash command diverge three ways, so reviving it would not attach anyway. **A takeaway with no place to apply is not a takeaway.**
- **Automatic yield on double mount → the only takeaway.** I opened [Loki](/en/built/loki/index.md) to see whether a counterpart existed and found **zero** lockfiles, pidfiles or singleton guards. But ⚠ **the spot I pointed at was wrong** — the watchdog path that runs every five minutes was already covered by `ensure()`, and what was not covered is that the login startup entry goes straight to the module rather than through `gateway ensure`. The minimal fix is **one line**, not a new preemption protocol.

⚠ **And the verification command I wrote down was one I had never actually run.** I wrote *"check that the process count is 1"*, but because of the venv launcher stub **a healthy single worker always looks like two** — the parent holds 1 thread and 0 sockets, and the child holds the real connection. Implement self-yield that way and a normal worker kills itself on every boot. **A fabricated verification procedure is more dangerous than a wrong number** — the wrong number you can re-measure, the fabricated procedure leaves behind the belief that you passed.

## The yardstick I judged others with was outside version control

**`git ls-files scripts/lib/` returns an empty result.** All five judgement gates — `check-links.mjs`, `check-weight.mjs`, `check-glossary.mjs`, `collect-ai-issue.mjs`, `lib/markers.mjs` — are untracked, and `git check-ignore` answers that they are not ignored: they were not excluded on purpose, they have **never once been committed.** The header of `markers.mjs` declares itself the canonical source and even records a recurrence history, yet `git log` on that file returns nothing. **A file that declares itself canonical has no history.**

The tracked `deploy.mjs` hard-depends on those five, so on a fresh clone the very first import dies instantly. Nothing leaks — it is fail-closed, so the deploy simply stops. What does happen is that **the grounds on which I killed half the target's takeaways with "I already have something better" do not reproduce in the repository.** The target's disease was an absent gate; mine is **a gate with no provenance**, and the second is more expensive. Everyone knows an absent gate is absent; a gate that exists outside the commit **makes you believe it is there.**

## Verdict — and what I did not do

| Item | Call | Why · reopen when |
|---|---|---|
| Adopt the product | ⛔ **Rejected** | There is no host. Reopen = when I actually start using this harness. Even then, look at the three unresolved P0s first |
| Size gate · dedupeKey | **Zero gain** | Already present in a better form. ⛔ Not reopening on this axis |
| Degraded mount | **Rejected** | The place to apply it was an unregistered relic. Reopen = when I actually wire that server |
| Self-yield at boot | **Adopted** | One line in the startup entry plus atomic preemption for the restart path. Verify by heartbeat record, not process count |
| Porting the boundary sentence | **Held** | Per-stage adversarial review already does that job. The real gain is on the "run the verification command once before the call and paste the output" side |
| Committing the five gates | **First priority** | Cost near zero. Verify = whether the deploy chain actually passes in a throwaway clone |

**What I did not do.** ① I **never once ran this plugin** — there is no host so it will not install, which means every call is measured from source, npm artifacts and the issue tracker, and I have never seen the screen. The bundle size is certain, but "what actually comes down at startup" I confirmed in code alone. ② Failure reports from an external install rig I used **as corroborating evidence only** — it measures by headless boot and this plugin is web-profile only, so the failures may be rig artifacts. ③ The 26 ecosystem plugins I only counted. The listing condition is a single self-declared tag, so that number is not evidence of activity. ④ The one adopted item **is still unfixed.** This piece goes as far as the call.

**The through-line of this piece is this — before doubting someone else's numbers, check that the tool doing the doubting is loaded in my own repository.** If the yardstick used to judge the target does not reproduce on my side, that judgement is not a verdict but an impression.
