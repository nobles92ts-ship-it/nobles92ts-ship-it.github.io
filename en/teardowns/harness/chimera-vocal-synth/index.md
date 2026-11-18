# CHIMERA — a voice built from a simulated throat, with no recordings

> A short video called CHIMERA an "AI vocal model." I opened the source. No AI makes the sound. The program calculates how air moves through lungs, vocal folds, mouth and nose, and AI worked on tuning the result.

- Headline number: 0 samples · 2,660 stars
- Rendered page: https://aitryed.com/en/teardowns/harness/chimera-vocal-synth/
- Other language: https://aitryed.com/ko/teardowns/harness/chimera-vocal-synth/index.md
- Source (Intro short (channel 평양냉면, 42 s)): https://www.youtube.com/shorts/kksmXPe5kVA
- Source (github.com/jamesondh/chimera-vocal-synth): https://github.com/jamesondh/chimera-vocal-synth
- Source (Design doc architecture.md): https://github.com/jamesondh/chimera-vocal-synth/blob/main/docs/architecture.md
- Source (Singer comparison csd-comparison.md): https://github.com/jamesondh/chimera-vocal-synth/blob/main/docs/csd-comparison.md
- Source (Speech comparison speech-comparison.md): https://github.com/jamesondh/chimera-vocal-synth/blob/main/docs/speech-comparison.md
- Source (Tuning rules hill-climb/README.md): https://github.com/jamesondh/chimera-vocal-synth/blob/main/docs/hill-climb/README.md
- Source (Official site chimera.audio): https://www.chimera.audio/
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**CHIMERA does not stitch together recordings of human voices. It builds the inside of a throat in software and blows air through it to make the sound.** It is the thing the video calls an "AI vocal model." It runs in a web browser, and the source is open under the MIT license.

## Where does a voice come from?

You breathe out, and air rises from the lungs. Two folds in the throat make that air flutter, and the flutter is a raw buzz. The buzz is not speech yet. It passes through the mouth, and the shape of the tongue and lips turns it into "ah" or "ee."

Think of a guitar. The string vibrates the same way every time, and the shape of the body decides the color of the sound. In a human voice, the mouth and throat are the guitar body.

## How is this different from the usual AI voice?

| | Usual AI voice | CHIMERA |
|---|---|---|
| Method | Listen to huge amounts of human voice and learn what it sounds like | Calculate the shape of the throat and how air moves in it |
| Like a parrot or a luthier? | A parrot repeating what it heard | Someone who builds the instrument and plays it |
| Recordings | Needed | Not used |
| Distance from a human | Very close, depending on the model | Getting closer, still a gap |

The README says "no samples, no neural audio." So the video's line that AI "copied it perfectly" does not hold. Nothing was copied, and nothing shows it is perfect.

## So where is the AI?

In two places: the people who wrote the code, and the tuning. The design doc says the owner wrote the engine working with AI coding agents. A folder called `hill-climb` holds the rules under which an agent improves the sound one small step at a time.

## The video asked: can it really sing like that?

Singing works. Type words, press Sing, and it sings them to a tune in English, Korean or Russian. In Korean each Hangul block gets one note.

I could not find the yodel or the four-part "Mr. Sandman" from the video in the source. The section on what I did not do says more.

## The detailed record starts here

I read the repository directly and separate what I checked from what I did not. I watched the 42-second short as frames plus captions, and I did not hear the audio.

## What is in it

The repository is `jamesondh/chimera-vocal-synth`. It was created on 2026-11-05. On 2026-11-18 it had 2,660 stars, an MIT license, Rust as its language and about 270 commits. The engine is Rust compiled to WebAssembly and runs in the browser's audio worklet. The same code runs as a command-line tool (`chimera`).

It does six jobs.

| Feature | What it does |
|---|---|
| Play | Drag the tongue, lips and jaw in a cutaway of the head |
| Speak | Turn English text or phonetic symbols into speech |
| Sing | Sing lyrics to a tune; can record a 9:16 video |
| Beatbox | Every drum is a mouth gesture |
| Bestiary | Songbird, seal, alligator and elephant |
| Duet | Two 3D heads replay a pre-rendered song |

## The path a sound takes

In the design doc's diagram, the interface sends commands, the audio engine calculates the voice, and about 60 times a second it sends its state back to the screen. The head cutaway that moves on screen is that returned state, drawn live. The picture is a live feed of the engine, not decoration.

Inside the engine four layers chain together.

1. **Gesture plan.** Each sound becomes a bundle of moves such as "tongue here, lips this far." The idea comes from the linguistics framework called articulatory phonology.
2. **Anatomy.** From the moves it draws a cross-section of the mouth and works out how wide the tube is at each point along its length.
3. **Sound source.** The default is a glottal opening shape that makes the airflow flutter. Birds get a separate syrinx model.
4. **Air path.** It calculates pressure and flow along a branched tube. For an adult voice the internal rate is 96,000 steps per second.

A more detailed two-mass vocal-fold model was designed but, as the doc itself says, never built. The current sound comes without it.

## How close is it to a human? Numbers the repository measured

The repository ships tools that compare the voice with real people: `compare csd` for a singer and `compare tsp` for speakers.

**Against a singer.** It has the synth sing 50 English children's songs from a dataset sung by one professional female singer, at the same pitches with the same words, and measures every note. The 2026-11-07 baseline score is 1.433 on training songs and 1.590 on held-out songs. Zero means within the singer's own variation between songs, and bigger is farther. The largest gap was in the highs. The 4–8 kHz band was 7.5 dB brighter than hers. The synth put 35 cents of vibrato on every long note, while she used it on about two thirds.

**Against speakers.** The speech recognizer Whisper gets 2.7% of the words wrong on real recordings. On sentences the synth read it got about 37% wrong, which is more than ten times as many. The real-speaker score is 0.277 and CHIMERA's is 1.646.

After tuning batch 3, the figure in the commit message is 36.75% to 27.15%. That was measured inside the repository with the same tool, and I did not re-measure it.

## The rules for how AI fixes the sound — why this piece is filed under harness

`docs/hill-climb/README.md` says an AI agent proposes one hypothesis and one change at a time, and the change is kept only if real human voices judge it better. Three lines are worth reading.

- **Real recordings are the judge.** The recognizer is a backup guard. In batch 2 the recognizer error fell 4 points, but the owner could hardly hear the difference (3 preferred the new one, 1 the old, 4 could not tell). So from batch 3 on the order was reversed.
- **Name the cause first.** Before changing anything the agent writes down which value is wrong, because of what physics, with a source. The text says a constant turned until the score reads right is not a fix.
- **A person listens and merges.** In batch 3 the new version was picked on 10 of 16 clips heard blind, against 2 for the old. The owner merges, not the agent.

## What this cost, and what I learned

**Ask which layer the word "AI" is about.** The short's title said "AI vocal model," and the source said "no neural audio." The layer that makes the sound has no AI. It sits in writing and tuning the code. From the title alone I would have filed this as a different kind of thing, a trained voice model.

**One automatic judge alone raises the score and nothing else.** Batch 2 is the example. The recognizer improved and a human ear did not notice, so the judge became real people and the recognizer moved to guard duty.

## What I did not do

- I did not run it. I did not open the web app, listen to the sound or render from the command line. Every figure above is a value the repository's docs state.
- I could not confirm that the video's yodel and four-part "Mr. Sandman" come from this repository. The file list has no quartet or yodel name, and the README's Duet (two 3D heads, a pre-rendered song) is a different scene. It may be a separate demo by the owner or a newer version.
- "Nearly human" has no support. The numbers show it improving, and the owner states the goal as "as realistic as we can make it."
- I did not judge the quality of Korean singing. That it accepts Korean lyrics comes from the README's feature list.
- The code is MIT, but the children's-song dataset used for comparison is non-commercial (CC BY-NC-SA), and the doc says it cannot ship in a product. Treat the two separately when borrowing.

## Verdict

**Watch it for now and decide where to use it later.** I have no place to adopt it yet. I keep two things. First, recordings and training are not the only way to make a voice. Second, an agent rule that lets a human ear win when the automatic judge and the ear disagree. After I listen to it myself, I will revise this verdict.
