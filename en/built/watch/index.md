# /watch

> Hand it a video and you get back a buildable design spec, not a summary.

- Headline number: video → spec
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/watch/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/watch/index.md
- Source (Starting point YouTube Summary): https://youtubesummary.com/
- Source (How the starting point works): https://youtubesummary.com/blog/youtube-summary-key-points-accuracy
- Source (Original code): https://github.com/bradautomates/claude-video
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**/watch is a skill that lets an AI (Claude) *watch* a video. It started from a site called YouTube Summary — paste a YouTube link and it reads the captions and summarises them. /watch adds eyes and ears to that, and changes what comes back from a summary into a spec you can actually build from.**

A skill is a folder holding instructions that tell the AI how to do one particular job, plus the scripts that do it. Hand this one a video URL and what comes back is not a summary but *a spec you can build from*.

## First, what YouTube Summary does — the yardstick for this skill

YouTube Summary (youtubesummary.com) is a free site: paste a YouTube link and a summary comes back in under thirty seconds, no account needed. Its own blog lays out the steps.

1. Fetch the video's **captions** — the words spoken in the video, written out with timestamps
2. Split a long transcript into chunks
3. Pick the video's **type** from the title and the opening — lecture, product review, cooking, news and so on
4. Summarise with a question sheet that depends on the type: ingredients and steps for a recipe, pros, cons and a verdict for a review
5. Merge the chunk summaries into one

It also names two limits of its own. **It doesn't look at the screen**, so charts, demos and text that only appears on screen are invisible to it. **And without captions it stops** — transcribing the audio costs too much time and money to do by default, it says.

## /watch adds eyes and ears

> **[도판]** Built to fill the two gaps YouTube Summary admits to: it doesn't see the screen, and it stops when there are no captions.
>
> The same video link, read differently. YouTube Summary reads only the caption text, stops if there are no captions, and returns a summary. /watch reads captions plus screenshots of the video, transcribes the audio when there are no captions, and returns a spec. What was added is eyes and ears; what changed is the question sheet.

| | YouTube Summary | /watch |
|---|---|---|
| What it reads | captions (text) only | captions **plus screenshots** |
| No captions | stops | **transcribes the audio** into a transcript |
| Where it runs | that site's servers | **my own machine** — the video file never leaves it |
| What comes back | a summary | answers to your question, and **a spec** |

A screenshot here is a single still taken from the video at a fixed interval — a frame. The AI opens each one and looks at it.

## How it runs

Give it an address and it:

1. Fetches the video
2. Pulls frames **at an even interval set by the video's length** — dense for a short clip, sparse for a long one, and never more than 100 however long it runs
3. Gets **a transcript** from the captions — and if there are none, **transcribes the audio**
4. **Lines frames and transcript up by time** and hands them over — the AI opens the frames one by one and answers

## The first version was useless

Stated plainly. Like YouTube Summary, the first build produced **a summary.**

A summary tells you **what happened.** That is what someone who is *not going to watch it* needs.

But I watch a video **in order to build something.** For that, a summary **carries nothing.**

| | What a summary gives | What I need |
|---|---|---|
| Content | *They explained the combat system* | ***There is one health bar and two people push it*** |
| Can I use it | **No** | **I can build that** |

So I **dropped summaries and made it produce a spec** — what does what, what the numbers are, what sits where on screen.

> **The same video gives two different artefacts depending on whether you ask "what was it about" or "how was it built."**

## Three problems

| | What the problem is |
|---|---|
| **Frame budget** | **Almost all the cost is in frames**, and video length grows without limit |
| **Transcript** | Having captions and not having them are **entirely different routes** |
| **Boundary and failure** | **A tool handling other people's videos** — what leaves the machine |

## Where it goes

**Sixteen runs so far.** The output goes to two places.

- **The analysis archive** on this site
- **The game project** — specs pulled out of someone's talk get implemented and tested there

The second is why the tool exists. **Watching a video and thinking *nice* leaves nothing.** It has to come out as a spec before there is a next step.

## Want to build one? Four ingredients

The skill is simpler than it sounds. It's a script that calls three existing tools in order, plus one instruction sheet telling the AI when and how to call it.

| Ingredient | What it does |
|---|---|
| **yt-dlp** | downloads the video and its captions (free) |
| **ffmpeg** | pulls frames out of the video, and strips out the audio when needed (free) |
| **Whisper** (Groq or OpenAI) | transcribes the audio when there are no captions — the only part that costs money |
| **SKILL.md** | the instructions the AI reads: when to use this skill and how to read its output |

The step-by-step order, the numbers and the traps are in the "Building it" sections of the detailed record below. The original code is bradautomates/claude-video (MIT licence), linked at the top.

## The detailed record starts here

Give it a URL and it fetches the video, samples frames at an interval set by the video's length, pulls the transcript from captions — or transcribes it directly when there are none — and hands the whole thing over as one readable object.

## The first version was useless

It produced summaries. A summary tells you **what happened.** For someone watching in order to build something, that is worth nothing.

The fix was to ask what the video *demands*. Not "what is this about" but **"what would I have to build to produce this behaviour"** — mechanisms, state transitions, failure cases, the parts the presenter skipped. The output changed from a description into an input.

That one line determines the whole design. If you're producing a description, a transcript alone would do. **Producing a spec means you have to see the screen** — and the moment you look at the screen, the cost problem starts.

## Three problems

| | The problem |
|---|---|
| [Frame budget](/en/built/watch/budget/index.md) | Almost all the cost is frames, and video length grows without limit |
| [Transcript](/en/built/watch/transcript/index.md) | Having captions and not having them are entirely different paths |
| [Boundary and failure](/en/built/watch/boundary/index.md) | What a tool handling other people's videos sends outside |

## Where it goes

Sixteen so far, flowing to two places: this site's analysis archive, and [the game project](/en/built/moon-studio/index.md) — a spec pulled out of somebody else's talk gets implemented and tested there.

The loop is the point. Watch, extract, build, break.

## Sources and lineage — the yardstick is YouTube Summary, the code is claude-video

This skill has two originals.

| Original | What came from it |
|---|---|
| [YouTube Summary](https://youtubesummary.com/) | **The yardstick.** Its [public blog](https://youtubesummary.com/blog/youtube-summary-key-points-accuracy) describes five stages: fetch captions, split into chunks, classify the video type, summarise with a type-specific question sheet, merge. /watch was built to fill the two gaps that pipeline states about itself — it doesn't see the screen, and it stops without captions |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | **The code.** MIT licence. The six scripts — download, frames, transcript, transcription, preflight and entry point — were ported to run on Windows |

Three things changed in the port. Every command calls `python` instead of `python3`, because on Windows `python3` is a shortcut that sends you to the Microsoft Store and the scripts never run. Missing tools are never installed automatically — the preflight only prints the `winget` command, since an automatic install pops an administrator prompt out of nowhere. And the answer isn't left only in the chat: it's saved as an **HTML report** and registered in the video-analysis index. Pulling a game-design spec out of a video is a separate skill layered on top of /watch.

## Building it ① — a skill is one instruction sheet and six scripts

One folder (`~/.claude/skills/watch/`) holds the following.

| File | Role |
|---|---|
| `SKILL.md` | the instructions the AI reads. The one-sentence `description` at the top decides when the skill gets called — the AI picks skills by reading it |
| `scripts/setup.py` | preflight: are the three tools and a transcription key present? |
| `scripts/watch.py` | the entry point: calls the rest in order and prints everything at once |
| `scripts/download.py` | fetches video and captions with yt-dlp |
| `scripts/frames.py` | pulls frames with ffmpeg |
| `scripts/transcribe.py` · `whisper.py` | tidies the captions, or requests a transcription when there are none |

The preflight runs every time, but **when everything is in place it prints nothing.** Announcing "ready" on every call is just noise. It only speaks up through its exit code when something is missing: 2 for missing tools, 3 for a missing transcription key, 4 for both. The key goes into `~/.config/watch/.env` as a single `GROQ_API_KEY=` or `OPENAI_API_KEY=` line.

## Building it ② — decide the number of frames from the length first

Measure the length first (`ffprobe`). Then decide how many frames to take, and get the interval by dividing that count by the length. Pick the interval first instead and a long video produces frames without end.

| Video length (whole-video scan) | Frames taken |
|---|---|
| 30 seconds or less | 12–30 (roughly one per second) |
| up to 1 minute | 40 |
| up to 3 minutes | 60 |
| up to 10 minutes | 80 |
| longer | 100 — that's the ceiling. `--max-frames` can lower it but never raise it |

In every case the rate never goes above two frames per second. Extraction is one command: `ffmpeg -i video -vf fps=<rate>,scale=512:-2 -frames:v <cap> -q:v 4 frame_%04d.jpg`. Frames are 512 pixels wide by default; go to 1024 only when small on-screen text has to be read. Pass a start and end time (`--start`, `--end`) and a denser table applies inside that range. Where the cost comes from has its own page: [Frame budget](/en/built/watch/budget/index.md).

## Building it ③ — look for free captions first; spend money only when there are none

- **Fetch captions.** Give yt-dlp `--write-subs --write-auto-subs`. Human-written captions come first, auto-generated ones second. Everything is converted to VTT (a text file alternating timestamps and lines). The languages requested are `en,en-US,en-GB,en-orig` — English variants only.
- **Merge the repeats.** Auto-captions roll: the same sentence repeats across several cues. A cue identical to the one before it gets merged, and only its time range grows.
- **No captions, or a local file?** Strip the audio (`ffmpeg -vn -ac 1 -ar 16000 -b:a 64k` — mono, 16kHz, about 0.5MB a minute) and send it to Groq's `whisper-large-v3` (the default — cheaper and faster) or OpenAI's `whisper-1`. A single upload can be at most 25MB.
- **If both fail**, carry on with frames alone, and write the fact that there is no transcript into the header of the result.

## Building it ④ — the script returns a list of frame paths; the AI does the looking

The entry script prints a header (title, length, whether the transcript came from `captions` or `whisper`), the transcript, and the list of frame paths, each with a `t=MM:SS` timestamp. Up to this point nobody has looked at a single picture.

So the instructions say: **open every frame in the list, in one message.** The AI's file-reading tool renders a JPEG as an image, and this is the moment the AI actually *sees* the video. The rest of the order is in the instructions too — answer the question with timestamps, write the HTML report, then delete the working folder holding the video, frames and audio. Only the report is kept.

What to do on failure is also the instructions' job. For a video behind a login or a region lock, **don't retry; say so plainly.** The reasoning is on the [Boundary and failure](/en/built/watch/boundary/index.md) page.

## Building it ⑤ — what turns a summary into a spec is the question sheet, not the code

YouTube Summary raised its quality with type-specific question sheets: ask a cooking video for ingredients and steps, ask a review for pros, cons and a verdict. The same principle holds for /watch. What comes back is decided not by the scripts but by **what you ask.**

The skill that pulls out game-design specs has five fields to fill for every technique: its name, what it is, the timestamp it rests on, how to implement it, and a confidence level. The confidence level is one of three — seen in the video / estimated from typical values because no number appeared / reference brought in from outside the video. Those fields guard a single rule: **nothing goes in as if the video showed it when it didn't.**

## Traps when building it — four on Windows

| Symptom | Cause and fix |
|---|---|
| Calling `python3` does nothing | on Windows `python3` is a Store shortcut. Call `python` |
| A freshly installed ffmpeg or yt-dlp can't be found | right after a `winget` install the same window still has the old PATH. Reopen the terminal, or prepend the install path |
| yt-dlp warns about a JS runtime | deno isn't installed. It's only a warning; things still work |
| The video downloaded but yt-dlp returned a failure code | one blocked caption variant (429) can make it exit non-zero. Judge by **whether the video file exists**, not by the exit code |

## Not done — it doesn't pick frames by watching for scene changes

- **The frame interval is fixed.** A screen that holds still for a long time costs the same number of frames, and a split-second action can fall between two of them. Switching to ffmpeg's scene-change detection would fix that; it hasn't been done. ⚠ **This page itself said for a while that frames were pulled "at a rate matched to how fast the content moves".** Opening the code (`frames.py`) showed a fixed interval set by length, and the page was corrected on 2026-10-01.
- **Only English captions are requested.** If you mostly watch Korean videos, change `--sub-langs` first.
- **The instructions and the code disagreed on a number — fixed on 2026-10-01.** The instructions said a video over ten minutes gets 100 frames, but the entry script's default cap was 80, so 80 is what actually came out (reproduced with an eleven-minute test video). The mismatch was inherited from the original repo, which later dropped its fixed default of 80 as well, so the fix goes the same way: the code now defaults to 100. Only two cases change, from 80 to 100 frames — a whole video over ten minutes, and a named range longer than one minute. A whole video of ten minutes or less is unaffected.
