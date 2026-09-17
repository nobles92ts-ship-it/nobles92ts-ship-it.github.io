# Transcript

> Having captions and not having them are entirely different routes. And what leaves the machine is audio, never video.

- Headline number: two paths
- Status: wip
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/watch/transcript/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/watch/transcript/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Turning speech into text. Having captions and not having them are *entirely different routes*.**

## Why it leans on the transcript

As established, **frames are expensive and transcripts are cheap.** A ten-minute video's transcript costs a few thousand units.

So the principle is: **fill as much as possible from the transcript and save the frames.**

The difficulty is **where the transcript comes from.** There are two routes and **they behave completely differently.**

## Route one — platform captions

Take the captions the video site has already produced.

| Advantage | |
|---|---|
| **Free** | Nothing is spent |
| **Timings already attached** | *At 3:20 this was said* is already there |

The second matters more than it sounds. **Knowing what was said at what minute** is what lets you **line the transcript up against the frame from that moment.** Without timings the two drift apart.

## Route two — transcribe it directly

With no captions, or for a file on my own machine, **only the audio is extracted and sent to a transcription service.**

One thing matters here. **What leaves is audio, never video.** And **re-encoded at reduced quality** at that.

It is not *the whole video goes somewhere.* **Only the minimum needed leaves.**

## Why the two differ

| | Captions | Transcription |
|---|---|---|
| Cost | **Free** | **Costs money** |
| Timings | **Present** | Approximate |
| Accuracy | **Usually touched by a human** | Whatever the machine heard |
| Always available | **Frequently absent** | **Almost always works** |

So it **tries captions first and falls back to transcription.** The order matters — **reversed, you pay for something you could have had free.**

## When there is neither — it says so

Captions absent and transcription failed means **going on frames alone.**

**And that fact is written into the result.**

This matters. An analysis produced without a transcript **is missing everything explained in speech.** Leave that unsaid and **a reader takes it as the whole picture.**

> **If something is missing, the result has to say so.** Unsaid, it reads as complete.

## And there is a wall — the upload limit

Transcription services cap **how much you can upload at once.**

For a very long video, **the audio alone exceeds it.**

That is a constraint I cannot fix. So **long videos get split, or only the relevant stretch is processed.**

**A wall set by someone else's service cannot be climbed with my code.** What is left is **going around it, or saying you cannot.**

## The detailed record starts here

As expensive as frames are, transcripts are cheap — a few thousand tokens for ten minutes of video. So **wherever possible, fill in with transcript and spend fewer frames.**

The question is where the transcript comes from. There are two routes, and they behave nothing alike.

## Route one — platform captions

Captions from the source platform get tried first. **They're free, and already timestamped.**

The timestamps are the point. Each frame has a time, so if the transcript has times too, **the two can be read against each other.** "At 3:12 this is what was on screen while they said this" becomes a statement you can make, and that's the form a spec needs.

Auto-generated captions are fine. A few wrong words don't matter if the timing is right, and **the frames correct the wrong words.**

## Route two — transcribe it directly

With no captions — or a local file — the audio is extracted and sent to a transcription API.

What leaves the machine here is **audio, not video.** The picture is never uploaded anywhere. And even the audio isn't the original: it's **re-encoded to mono 16 kHz**, around 0.5 MB per minute. That's enough to understand speech, and there's no reason to send more.

It uses whichever provider has a key configured. If one fails you can force the other, and there's **a switch to skip it entirely.** With transcription off it proceeds on frames alone and records in the output that there is no transcript.

## When there is none, it says so

No captions and no transcription means **frames only.** And that fact gets stated in the result.

The reason this has to be a rule is that a transcript-less result looks perfectly fine. Eighty frames still produce a plausible summary. But **everything the presenter only explained out loud is missing entirely**, and the reader has no way to know.

One line saying "no transcript" makes the reader treat the result differently. Without that line, nobody knows what isn't there.

## The 25 MB wall

The transcription API has an upload limit. A long enough video exceeds it on audio alone.

Downsampling to mono 16 kHz earns its keep here too — at 0.5 MB per minute, **fifty minutes fits in one request.** Anything longer is a video you should be watching by range in the first place, not transcribing whole.

On failure the error is passed through as-is. Whether it was the size limit, a bad key, or a rate limit shows up in the message, and **not hiding the cause is what makes the retry decision possible.**
