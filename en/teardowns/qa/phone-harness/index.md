# phone-harness

> An open-source tool that lets an AI agent such as Claude Code look at and tap a real smartphone. I read an introduction video alongside the repository code. Game screens — my actual work — are invisible to it too, so I put it on hold. Usage telemetry is on by default, which I confirmed in the code.

- Headline number: On hold · blind to game screens
- Rendered page: https://aitryed.com/en/teardowns/qa/phone-harness/
- Other language: https://aitryed.com/ko/teardowns/qa/phone-harness/index.md
- Source (Source video (Korean, 개발동생)): https://www.youtube.com/watch?v=-7akHqSkpzE
- Source (Repository github.com/phone-harness/phone-harness): https://github.com/phone-harness/phone-harness
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**phone-harness is an open-source tool that lets an AI coding agent — Claude Code, Codex and the like — use a real smartphone the way a person does: look at the screen, tap, swipe and type.** Nothing gets installed on the phone and no jailbreak is needed. An iPhone is reached through the Mac's iPhone Mirroring window; an Android phone through USB debugging (adb).

I watched a 13-minute Korean introduction video, then checked its claims one by one against the repository code. I did not install or run the tool myself.

> **[도판]** Pressing works almost the same everywhere. Accuracy is decided by what reads the screen.
>
> How phone-harness is built. The agent speaks through 51 functions such as open_app, tap_text, type_text and screen. Behind them sit three kinds of phone. An iPhone is read through the Mac mirroring window with Apple OCR; its weak spots are icons without text and misread Korean. An Android phone is read through adb and the accessibility tree; its weak spot is screens with no tree, such as games. A cloud phone does the same remotely as a paid beta. One script runs on all three; what differs is how accurately the screen is read.

## Using a phone, turned into a few functions

What you do on a phone is not much: open an app, find some text and tap it, scroll, type. The tool writes each move down as a **function** — a one-line command that does one fixed job.

| What a person does | What the agent calls |
|---|---|
| Find the app icon and open it | `open_app("Notes")` |
| Find the words "New Note" and tap them | `tap_text("New Note")` |
| Type on the keyboard | `type_text("hello")` |
| Skim what text is on screen | `screen()` |

The agent strings these into a short script and sends it. The helper file in the repository holds 51 of them.

## Each phone has different eyes, and accuracy splits there

Tapping is similar on every phone. The difference is in **reading the screen**.

On an iPhone, the tool photographs the mirroring window and runs Apple's text recognition (OCR — turning text in a picture into actual text). Because it reads a picture, it can be wrong; in the video one coffee-chain app name and one restaurant name came back garbled.

Android is different. The tool pulls the **parts list** the app itself reports to the operating system — the accessibility tree, the list of button and label names kept for screen readers. The app wrote those names, so nothing gets misread. The video reaches the same conclusion: Android is the steadier of the two.

## Three models, one errand — the cheapest was the slowest

This comparison was measured by the video's presenter, not by me. He gave Haiku, Sonnet and Opus the same errand: open a delivery app, find the best-rated chicken place and list three menu items.

He expected Haiku to be fastest. It took the longest — 7 min 48 s — and repeated the same attempts, calling tools 56 times. It also reported the restaurant name wrong. Sonnet finished correctly in 3 min 46 s. Haiku had the lowest per-token price, but once you add the time a person spends re-checking its mistakes, the presenter said he would not hand it phone work; his pick was Sonnet.

## The whole phone becomes visible to the agent

With this tool attached, the agent can see messages, texts, payment screens and photos. So the video suggests a **spare phone or a cloud phone** rather than the one you live on.

It also says to switch one thing off right after installing: **usage telemetry**, where a program sends usage records back to its makers. The code confirms it is on by default, and it sends more than the video implies — up to 20,000 characters of the script the agent sent, plus up to 20,000 characters of what that script printed. What a script prints often includes text read off the phone.

## Game screens stop it for my work, so it stays on hold

My work is testing Android games by machine. A game draws its whole screen as a single picture, so pulling the parts list gives an empty shell — exactly what I wrote in [the adb-based game QA server](/en/built/android-qa/index.md).

phone-harness knows about this and keeps a separate picture-OCR function for screens without a tree, such as games and canvases. But that recogniser is **Apple's, so it only switches on on a Mac.** My work PC runs Windows, which leaves only one way to read a game screen: let the model look at the screenshot itself. My own tool already does that.

## The detailed record starts here

Analysis is pinned to [commit 4bebff1](https://github.com/phone-harness/phone-harness/commit/4bebff105af853215fb74c958c2c5e78bc275be2) on `main`, read on 2026-11-10; the latest release is `0.3.3` (2026-11-02). The video is [a Korean introduction on the 개발동생 channel](https://www.youtube.com/watch?v=-7akHqSkpzE), posted in early November 2026. From the repository I read README, SKILL.md and five source files (`helpers.py`, `android.py`, `ocr.py`, `telemetry.py`, `run.py`). **Nothing was installed or run.**

## A three-month-old MIT project with a cloud business attached

| Item | Value (2026-11-10) |
|---|---|
| Created · last push | 2026-08-07 · 2026-11-09 |
| Stars · forks | 4,752 · 490 |
| Language · licence | Python · MIT |
| Integrations | Hermes plugin · OpenClaw plugin · MCP server (cloud phones only) |
| Requirements | iPhone: macOS 15+ and iOS 18+ · Android: adb on macOS, Linux or Windows |

The top of the README carries three buttons pointing to a hosted product, Phone Harness Cloud. The YC launch the video mentions belongs to that side. The open-source CLI is free; hosted real devices, phone numbers and persistent logins are the paid part.

## Most of the video's claims matched the code

| The video said | What the code shows |
|---|---|
| iPhone: mirroring plus Vision OCR | `ocr.py` reads the mirroring capture with Apple Vision and returns a tap-ready point for every string |
| Android: adb plus the accessibility tree | `android.py` fetches the tree with `uiautomator dump`; its header literally says "no OCR" |
| A few functions drive the phone | 51 public functions in `helpers.py`, including `open_app`, `tap_text`, `type_text`, `screen`, `swipe`, `scroll` |
| Weak on icons without text | README limits: OCR sees text, not icons — unlabeled controls need a screenshot and a vision-capable model |
| No multi-touch, camera or Face ID | In the README limits as stated, plus: DRM video renders black |
| Telemetry is on by default | `config.py` default `"telemetry": True`; off by default only under Hermes |

## Telemetry sends more than the video says

The video said it sends "the scripts you ran, and text." Read in the code, it is this:

| Sent | Cap |
|---|---|
| `task` — the body of the script the agent sent | 20,000 characters (`MAX_TASK_LENGTH = 20_000`) |
| `output` — the tail of what that script printed to stdout | 20,000 characters (`_MAX_OUTPUT_LENGTH = 20_000`) |
| Everything else | install ID, which agent called it, model name (if an environment variable names it), duration, error text |

It goes to the analytics service PostHog, sent by a detached process so the CLI never waits. **The `output` field is the problem.** Agents routinely print what they read — `print(screen())` — to check a screen, and then the phone's text rides along in the event. The code's header lists three ways off: `phone-harness config set telemetry false`, the variable `DO_NOT_TRACK=1`, or `PHONE_HARNESS_TELEMETRY=0` for a single call.

## On Android, a screen with no tree takes a different road

Screen reading in `android.py` has two steps. It asks for the tree first. If the tree is refused — `uiautomator` gives up on a screen that never goes idle — it falls back to picture OCR only when Apple Vision is present, and raises an error otherwise. There is also `ocr_pixels()`, which forces picture OCR for games, canvases and WebViews, but it too is defined only when Vision exists.

| Screen | Driving Android from a Mac | Driving Android from Windows |
|---|---|---|
| Ordinary app | tree — exact | tree — exact |
| Game (tree is an empty shell) | picture OCR through `ocr_pixels()` | no text recognition — the model must look at the screenshot |

**When a game's tree comes back as an empty shell, the result is an empty list, not an error.** That is how the code reads: only a refusal triggers the OCR fallback; a successful dump with no text simply returns nothing. An agent could take "no text on screen" for "still loading." I did not confirm this on a device.

## The model comparison is one run by someone else, but it points where mine do

> **[도판]** A single run, and not mine. Still, "a cheap model that wanders can flip the total cost" matches what I have seen in my own screen-judging work.
>
> The presenter's model comparison on the same errand, finding three menu items at a chicken place. Haiku 5.5: 7 min 48 s, 56 tool calls, 141k tokens, restaurant name wrong. Sonnet 5.5: 3 min 46 s, 24 tool calls, 117k tokens, correct. Opus 5.5: 4 min 18 s, 28 tool calls, 123k tokens, correct. The presenter picked Sonnet.

According to the video, Sonnet and Opus took the name the OCR had garbled, looked at the screenshot again and reported it correctly. **The model's own vision caught the OCR's mistake from behind.** So the tool's accuracy is not set by the OCR alone: the same OCR output becomes a right or wrong answer depending on which model sits on top.

One run cannot support a general claim about timing. The video shows no repeated runs, no variance, and no result for the second errand, a coffee order.

## Verdict table

Cells I could not measure are estimates, marked `[estimated]`.

| Technique | Verdict | Gain | Cost to adopt | Cost to undo | Confidence |
|---|---|---|---|---|---|
| Use the tool itself for Android game QA | **On hold** | small — game trees are empty and Windows has no OCR path | 2–5 hours to install and wire up (95% CI) `[estimated]` | cheap (remove with `uv`) | medium — confirmed in code, not on a device |
| Read ordinary app screens through the tree and tap by text | **Already have it** | — | — | — | my tool uses the tree wherever one exists |
| Attach where each read value came from (`tree` / `pixels`) | **Adopt (principle)** | separates "possibly misread" from "reported exactly" at judgment time | low `[estimated]` | cheap | medium |
| Telemetry on by default | **Turn it off if used** | — | one command | — | high — confirmed in code |

## The principle worth keeping

**Tag every value with where it was read from.** phone-harness attaches `source: "tree"` (exact, reported by the OS) or `"pixels"` (inferred from a picture) to every string on screen — the same name can be trusted in one case and doubted in the other. My screen judge currently writes verdicts from logs and from screenshots into the same result field. Splitting them would let me, when tracing a wrong verdict, rule out "misread the picture" first.

## When to revisit

- When I need to check a non-game app repeatedly (an internal app, a booking app).
- When the repository gains a picture-OCR path that works on Windows.
- When I can dedicate a spare Android phone — attaching my everyday phone stays off the table.

## Not done

- I did not install or run it. Device behaviour was checked only through the video and the code.
- Whether a game screen returns an empty list or a refusal is read from code, not measured on my device.
- I did not open the iPhone side (`ios.py`, `mirror.py`) or the cloud side (`cloud.py`, `remote.py`).
- The model numbers are one run by the video's presenter. No repeats, no variance.
