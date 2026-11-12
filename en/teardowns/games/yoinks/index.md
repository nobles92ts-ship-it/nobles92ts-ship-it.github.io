# yoinks — the size on the button wasn't the file it downloaded

> A terminal tool that turns a pasted video link into a file. I read the code and ran its format-picking logic on a real video, and the size shown on screen did not match what it actually downloads. I skipped the tool and moved three ideas into my own script.

- Headline number: tool rejected · 3 harvested
- Rendered page: https://aitryed.com/en/teardowns/games/yoinks/
- Other language: https://aitryed.com/ko/teardowns/games/yoinks/index.md
- Repository: https://github.com/pablostanley/yoinks
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**yoinks is a terminal tool: paste a video link from YouTube, X, Instagram and similar sites, and it saves the video as a file on your computer.** It does not download anything itself. A well-known program called yt-dlp does the real work, and yoinks puts **a resolution picker** in front of it.

When I build games I sometimes need another game's footage for a long time, stepping through frame by frame to study how an effect is staged. So I opened "a clean way to keep a video as a file".

## The screen looks nice, but two separate rules make the choice
The best idea in this tool is that **it shows the options before it downloads**. You paste a link and see lines like "1080p · ~85MB", "720p · ~40MB", "audio only · mp3". Reading the code, that list is built by two different rules.

| | What it does | Who decides |
|---|---|---|
| **The size printed on the line** | Picks the top-scoring candidate and prints its size | yoinks' own scoring formula |
| **The file actually downloaded** | Passes only the height to yt-dlp and lets it choose | yt-dlp's default ordering |

Nothing guarantees the top-scoring candidate and the downloaded file are **the same file**. That is the whole article.

## On a real video the size was 36% short
I ran yoinks' own selection code, unchanged, on the oldest video on YouTube, a 19-second clip.

| The 240p line | Value |
|---|---|
| Size shown on screen | **~302 KB** |
| What it actually downloads | AV1 video + Opus audio, **476 KB** |

302 KB was not the video. It was **the size of the audio track alone**. The top-scoring video stream had no size field, the code treats a missing size as 0, and it adds the audio size. The video's share vanished without a sound.

There is more. The 144p line and the "audio only" line both said "~302 KB" too. Three lines shared one number.

And the scoring likes H.264, yet AV1 is what got picked. The tool's open issues include "HD videos won't play in QuickTime", which fits this mismatch (I did not check playback myself).

## So I skipped the tool and kept three ideas
yoinks itself is **no use to me**. A human picks with the keyboard, an AI can't, and the "just download, no questions" option is still only on the roadmap. Instead I took three ideas from the design and wrote them fresh as one script of mine (`ref_video.py`).

| Kept | How I changed it |
|---|---|
| **Read video info once, reuse it** | As is. Skipping the second read makes starting faster |
| **A height ladder for choosing** | Codec order is now H.264 first, falling back to others only if missing |
| **Clean up half-written files on cancel** | Download only inside a temp folder and delete the whole folder on failure |

And I wrote the lesson in. **The size I print comes from the combination that would actually be downloaded.** On the same video, 240p resolved to H.264+AAC at 725 KB, and the real file was 727 KB (744,413 bytes). File names carry the video id, so two videos with the same title never overwrite each other.

## The principle that survives
**The rule that shows and the rule that chooses must come from one place.** If one code path chooses and a different scoring formula describes, the screen lies quietly. No error appears. My script asks yt-dlp, with the exact selector used for downloading, even when it only prints the list.

## What I did not do
- **I did not install or run yoinks.** It is a screen-driven tool, so I read it and ran only the selection function. I know nothing about how the screen behaves.
- **One video, one site (YouTube).** I did not measure how often the size field is missing. In this video, two of seven 240p candidates had none.
- **I did not open the downloaded file in QuickTime or an editor.** I only confirmed the codecs differ.
- **I did not check whether /watch keeps the files it downloads.** If it does, my script mostly overlaps. For now I treat it as "temporary analysis folder" versus "long-term reference library".

## The detailed record starts here
**yoinks is a single-author project that puts an Ink (React for terminals) screen on top of yt-dlp. Verdict: reject adopting the tool, adopt three techniques.** The key finding came from the implementation. The README says it shows per-resolution sizes, but the candidate used for the size (top score) and the real `-f` selector follow different rules, so **the size and codec on screen do not guarantee the actual file.**

## What the thing does
MIT licensed, about 1,900 lines of TypeScript. Four steps.
| Step | What happens | Function |
|---|---|---|
| 1. Get the tool | System `yt-dlp`, then `~/.yoinks/bin`, otherwise download from GitHub releases | `ensureYtDlp` |
| 2. Read | `yt-dlp -J --no-playlist` once, saved to a temp file | `probe` |
| 3. Options | One line per height (max 8) plus an audio-only mp3 line | `buildChoices` |
| 4. Download | `--load-info-json` to skip re-extraction; progress parsed from `--progress-template` | `download` |

ffmpeg is found on PATH, with `ffmpeg-static` as fallback. The save folder is fixed at `~/Downloads`.

## Design decisions, each with its conditions
| Decision | Implementation | Holds only if |
|---|---|---|
| **Read info once and reuse** | JSON in a temp file, then `--load-info-json` | URLs do not expire between read and download. Sites with short-lived signed URLs can fail |
| **Height fallback selector** | `bv*[height=N]+ba/b[height=N]/bv*[height<=N]+ba/b` | That height exists. The selector never decides the codec |
| **Cleanup on cancel** | Collects destination paths yt-dlp prints, deletes them plus `.part` and `.ytdl` | The output line format stays stable; it relies on string parsing |
| **Progress parser** | A template prints `YOINK|…` lines | A drop in bytes means "next part". Only right for video+audio merges |

## What breaking it showed — four confirmed findings

### 1. The displayed size is computed apart from the actual choice
`buildChoices` picks the highest-scoring candidate per height (`tbr` plus 10,000 for an mp4 extension plus 5,000 for `avc`) as `best` and **prints its size.** But the line's `args` never contain `best`'s format id, only the height. So `best` is **label-only**.

Measured on 2026-11-12 (yt-dlp 2026.08.19, video `jNQXAC9IVRw`, `buildChoices` run verbatim):
| Line | Size shown | What actually gets picked |
|---|---|---|
| 240p | ~302 KB | `395+251` (AV1 + Opus) = 475,961 bytes |
| 144p | ~302 KB | `278+251` (VP9 + Opus) |
| audio only | ~302 KB | — |

The 240p winner is `230` (H.264) with an empty size field, so `0 + audio 309,288` = 302 KB. The real download is the AV1 stream yt-dlp's default sort prefers.

### 2. Open issues show the same symptom
I read titles only: "HD videos won't play in QuickTime" (#40), "Offer a QuickTime-compatible H.264/AAC option" (#32) and a PR for it (#33). It fits a selector that never fixes the codec, but I did not reproduce it.

### 3. It downloads an executable without verifying it
If yt-dlp is missing, it fetches a binary from `releases/latest/download`, marks it executable and runs it. No checksum or signature check. After that it **never updates it** (self-update is unchecked on the roadmap). When a site changes and yt-dlp goes stale, the tool silently stops working.

### 4. The README trails the code
The roadmap lists "clipboard URL detection" as not done, yet `src/lib/clipboard.ts` and `cli.tsx` already implement it.

## Health
Created 2026-07-16, last push 07-17 (four months before 2026-11-12). All 29 commits are by one author, 7,132 stars, 41 open issues and PRs of which 22 are PRs. Zero releases, four tags, npm latest 0.3.1 (07-17). Two test files (argument parsing, panel drawing) and **no tests for the selection or download logic.** Open PRs include offers to help maintain it and a "rewrite in Rust" suggestion.

## Alternatives side by side
| Option | Strength | Weakness | Wins when |
|---|---|---|---|
| **yoinks** | A human picks on screen | An agent can't use it; size label error | A person downloads by hand now and then |
| **yt-dlp directly** | Every option, fastest to update | You restate resolution and codec rules each time | One-off downloads |
| **/watch (my existing tool)** | Download + frames + captions in one go | Built for analysis; keeping the video is not its goal (unchecked) | You want to read a video, not keep it |

## Trying it on my setup — verdict table
| Technique | Verdict | Gain | Cost to adopt | Cost to undo | Confidence |
|---|---|---|---|---|---|
| Install yoinks | **Reject** | Low: an agent can't use it, yt-dlp and /watch exist | Global npm install plus an unverified binary download | Low | Medium |
| Read info once, reuse | Adopt | Faster start [estimated · unmeasured] | A few lines | Low | High |
| Height ladder + codec order | Adopt (modified) | Files that open in editors and QuickTime | One selector line | Low | Medium |
| Temp-folder download, delete on failure | Adopt (simplified) | No half-written files in the output folder | A few lines | Low | High |
| Score-based choice of the line to show | **Reject** | None: it caused this defect | — | — | High |

**Reopen condition** for the rejection: when no-prompt flags like `--best` and `--mp3` ship and yt-dlp self-update lands. Both are on the roadmap.

## Where it landed, and the test
It lives in `~/.claude/game-team/scripts/ref_video.py` (reference-video fetcher for MOON Studio). Tested on the same video:
| Test | Result |
|---|---|
| `--list` | 240p → H.264 · 725.0 KB, 144p → H.264 · 492.7 KB |
| Default download | 240p mp4, 744,413 bytes, ffprobe: H.264 + AAC |
| Same command again | "already exists", not overwritten |
| `--audio` | mp3, 331,053 bytes |
| Nonexistent video URL | One error line, exit code 1, no temp folder left behind |

Preferring H.264 makes the **file larger** at the same resolution (AV1 476 KB versus H.264 725 KB). I chose compatibility over size, and the table shows both numbers.

## Sources
- Original: <https://github.com/pablostanley/yoinks> (MIT). I did not copy code; I used the selection logic and design as reference and rewrote it, because the parts I changed differ.
- Download engine: <https://github.com/yt-dlp/yt-dlp>
- Reference and analysis use only. Downloads never become game assets.
