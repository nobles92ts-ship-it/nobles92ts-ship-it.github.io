# Mixing human speech flavor into AI scripts

> Why short video scripts written by AI sound read aloud, found by comparing 533 thousand sentences of real Korean speech, and a 0–4 dial for how much human flavor to mix back in.

- Headline number: Spice 0–4
- Rendered page: https://aitryed.com/en/together/malmat/
- Other language: https://aitryed.com/ko/together/malmat/index.md
- Source (Korean AI-writing checker skill used as the last step (MIT)): https://github.com/daleseo/korean-skills
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**Why do short video scripts written by AI sound like someone reading a document? This post looks for the answer in 533 thousand sentences of real Korean speech, then sets a 0-to-4 dial, called spice, for how much human flavor to mix back in. Yeojin made it, working with Claude to analyze and write it up. Moon Hyeonggeun moved it onto this site and published it.**

A quick word on the name first. "Malmat" is Korean for the taste of talking. "This method is efficient" and "Honestly, this is so much easier, just try it" mean the same thing, but they sound nothing alike. The first is a voice reading. The second is a voice talking. This post is about getting AI to produce the second.

## AI scripts end almost every sentence the same way

> **[도판]** Share of sentence endings, counted the same way for both. Real speech mixes casual, polite and formal; AI scripts pile up on the polite form.
>
> Bar chart of how sentences end. Polite casual endings: 36 percent of real speech, 88 percent of AI scripts. Banmal, the casual form: 46 percent of real speech, 8 percent of AI scripts. Formal endings: 14 percent of real speech, 4 percent of AI scripts.

Korean marks politeness in how a sentence ends, so the ending is a good place to count. The speech side is 533,443 sentences of clean auto-captions taken from long videos made between 2014 and 2026. The AI side is 520 sentences of short-video script that Claude wrote from scratch, without seeing any of the speech. Both were counted the same way.

The polite -yo ending closes 36% of the speech and 88% of the AI scripts. Casual endings run the other way, 46% against 8%. Real speech here is a chat among several people, so its share of casual endings is not a number to copy. What to copy is the beat that comes from the endings keeping changing.

Word choice differs too. The AI uses "core" 14.5 times as often as the speech does, "efficiency" 9.7 times, and "in the end" 7.0 times. Fillers that are everywhere in speech, such as "ah", "well", "kind of", "just", "really" and "but anyway", almost never appear in the AI scripts. If a script is full of "core", "efficiency", "possible", "important" and "utilize", suspect the AI first.

## Human flavor comes from six devices

A device is one of six handles that make a line sound spoken. Count how many sit in a sentence and you get a number for how much was mixed in.

| Device | A new example (Korean, glossed) |
|---|---|
| ① A question: asking and answering yourself, or asking back | "But what if nobody comes in? Then we just decorate and wait, right?" |
| ② A quoted thought or someone else's words | "They see that and go, 'Oh, people care about this place.'" |
| ③ A sentence that ends casual | "Mom, I wasn't slacking back then, I told you!" |
| ④ A short cut sentence, three words or fewer | "If it's bad, turn it off. Just turn it off. Done." |
| ⑤ A trailing ellipsis | "Office workers over here, dieters over there… you want to know it all." |
| ⑥ An opening filler or exclamation | "But looking back, it all connected in the end." |

## The spice dial sets how much to mix

Spice is a dial from 0 to 4. At 0 the line stays as written. At 4 a sentence carries about 1.5 devices, the strongest flavor. The default is 2. When Yeojin wrote the same scene at three strengths and picked with the labels showing, she chose spice 2 in all four scenes.

Scenes that explain information could go up to 3, and only a line that calms the viewer's fear won at 4. When she picked again with the labels hidden, "this is too much" never came up. One note did stay in the margin: "The flavor really does come alive. As long as it isn't the casual endings."

## The key finding: do not insert, mix from the start

A version made by inserting devices one at a time into sentences that were already finished was picked 0 times out of 18. A version made another way was picked 4 times out of 4. For that one, she first read a few pieces of real speech that perform the same move, wrote two or three lines on where it turns, how often it repeats and what it closes with, and then rewrote the whole thing from the top.

Inserted devices stick out of smooth explanation and break the flow. Mixing from the start changes the sentence length and the beat itself.

## How I took this into my own social posts

The part below is not Yeojin's writing. It is a note from the person publishing. I received this write-up on October 22, 2026 and made it the default way I write social posts, not just reference material.

- For Threads, Instagram captions and Korean posts on X, I first name the speech move of each block, then write from that flow, starting over. A draft without that table counts as unfinished.
- The default spice is 2. Only blocks packed with information drop to 1.5.
- LinkedIn gets none. Spice 0.
- My own rules outrank the examples. I do not use stock connectors such as "looking back" or "in the end". The example in device ⑥ above is exactly that sentence, and in my posts I swap it for a concrete fact. One self-question per post.
- Posts that introduce a game use only the rhythm devices: repetition, mixing short and long sentences, trailing ellipses, and a very short last sentence.
- I do not run the spice-measuring tool on my writing. I once decided not to filter style by a score, and I stop at using this as a technique.

## What is not known

- **Every judgment is one person's, picked once.** Only the upper-limit test hid the spice labels. The other trials were picked with the labels showing.
- **The defaults for captions, threads and on-screen text rest on few samples.** Treat them as provisional.
- **The shared version has no store of real speech.** The version Yeojin actually uses finds similar pieces from a store of broadcast lines for each scene, reads them, and mixes. That store is left out because it cannot be redistributed. A version written without the store has not been compared blind.
- **I do not yet know whether this works in my own posts.** I am checking as I write, and there is no result to put a number on.
- **One line of the original summary and its table disagree.** The summary said the AI script's sentences are long, but the table shows the AI average at 22.5 characters against 33.2 for speech. This post follows the table.

## The detailed record starts here

What follows is Yeojin's write-up carried over almost as it was, in the same plain spoken tone.

## Sixteen speech moves: what a scene is doing

Name the move in each scene and you can pick a flow that does that move well.

| Move | Meaning |
|---|---|
| Hard line | A conclusion or a flat claim, short and strong. The line for a hook |
| Naming the problem | Pointing at the exact problem of a person or situation |
| Ask and answer | Asking yourself and answering right away |
| Giving a reason | One line of why |
| Explain or compare | Unpacking a concept, or comparing it to something |
| Concrete example | Showing with a number, a scene or a case |
| Personal story | Something that happened to you, in first person |
| Throwing a question | Asking the listener |
| Taking a side | Pushing an opinion or backing one side |
| Flipping it | Turning the assumed view upside down ("but actually") |
| Prescription | Recommending what to try |
| Taking the fear out | Reassuring ("it's nothing") |
| Reaction | An instant reaction like surprise, delight or grumbling |
| Hitting back | Answering the other person's words on the spot |
| Closing line | Ending with a one-line conclusion or a bodily metaphor |
| Host line | Introducing, or handing over to the next part |

When real speech from broadcasts and consulting recordings was laid next to newly written AI lines and picked from, real speech won ask-and-answer 3 of 3 and closing line 2 of 2, and lost naming the problem and giving a reason 0 of 2. Most of the flavor comes from the rhythm moves.

## Spice 0 to 4, as numbers

| Spice | Devices per sentence | Sentence length | Feel | Picked |
|---|---|---|---|---|
| 0 | 0.19 | 24.7 chars | As written | 0 of 4 |
| 1 | 0.54 | 19.9 chars | A little | 0 of 4 |
| 2 | 0.77 to 0.86 | 16.5 chars | A lot, the default | 4 of 4; 5 of 8 in the upper-limit test |
| 3 | 1.14 | 11.8 chars | More, for scenes that explain | 2 of 8 in the upper-limit test |
| 4 | 1.53 | 11.0 chars | Strongest, only for a calming line | 1 of 8 in the upper-limit test |

Three rules hold at every spice level.

1. Casual endings aimed at the viewer stay to one or two lines per scene. A quoted thought in casual speech is fine. What set the limit was not the number of devices but the casual endings.
2. One ask-and-answer per post. When it appeared several times, the post came back with "too many self-questions."
3. When a draft is sent back, look at the core before the spice. If there is no single reason for the viewer to stop, writing it hotter will not bring it to life.

## Where to use it: default spice by kind of writing

| Kind | Default | Status |
|---|---|---|
| Short-video spoken script (prescriptions, stories, endings) | 2 | Confirmed: 4 of 4, 5 of 8 |
| ↳ Scenes that explain information | 3 | Confirmed: 2 of 8 |
| ↳ A line that takes the fear out | 4 | One scene only |
| Recruiting and promo scripts | 1.5 | Provisional: dates, prices and sign-up details leave little room for filler |
| Instagram captions | 1.5 | Confirmed: 1.1 and 0.5 were sent back with "is this really in that host's voice?", while 1.5 got "this is about right" |
| Threads | 2 | Provisional |
| Card news and on-screen text | 1 | Provisional: so few characters that there is little room for devices |
| LinkedIn | 0 | Not mixed |

**Where not to use it.** Writing that goes out in someone else's voice, such as a client's ad copy, reports and messages to a client, has its own voice already. Formal channels are out too.

## The order to write in: never content and voice at once

| Step | What to do | Why |
|---|---|---|
| 0 | Check the core: can one reason for the viewer to stop be said in a line? | Flavor cannot rescue a missing core |
| 1 | Open your own voice ledger, a table of verbal habits pulled from 10 to 15 of your own posts | The speaker is you. The broadcasts only lend a rhythm |
| 2 | Write only a plain note of what to say, for each scene | Writing content and voice at once makes both clumsy |
| 3 | Name the speech move of each scene | Each move has its own flow |
| 4 | Write from the top, once, mixed to the spice you chose | Inserted version 0 of 18, mixed from the start 4 of 4 |
| 5 | Measure the spice; rewrite if it is more than 0.5 off target | Match by number, not by feel |
| 6 | Run a checker for AI traces and spelling | Below |

The things to watch while writing the note are the actual reasons drafts came back.

- Do not drop in metaphors or nouns the AI invented, such as "a scary answer" or "the insight disappears". Say it in plain words.
- Attach a label to every number: "purchase conversion 0.8%", not "0.8%".
- Do not wedge in a career line with no context. "Even as someone with 12 years…" followed by an instant change of subject feels awkward.
- Take the key message from a sentence you have settled yourself. If a note the AI summarized is wrong, the script stays wrong however it is written.

**The checker.** Last, run the humanizer and grammar-checker from korean-skills (MIT), a set of skills for catching AI-sounding Korean. For spoken scripts, humanizer looks only at the word-choice and translation-style patterns and leaves the punctuation and structure patterns off, because those flag a breathing comma or a formal-ending line as an AI trace by mistake. For written posts it looks at everything, and grammar-checker fixes only clear errors. Speech the checker wrongly flags goes on a "checker exception" list and is left alone.

## Examples: the same scene at different spice levels

All of these are lines newly written on Yeojin's short-video topics. None is a sentence copied from a broadcast. The ✅ marks the version she picked. The lines are in Korean in the Korean edition of this post; here they are rendered into English.

**You redid the whole product page and the ranking has not moved (explaining information)**

| Spice | Lines |
|---|---|
| 0 | However well we change things, the ranking only goes up once the search engine notices. It judges interest from people actually coming in, looking, and staying. So even if everything is ready, with no visitors the ranking stays where it is. |
| 1 | However well we change things, the ranking only goes up once the search engine notices. And what does it look at to notice? People. People who actually come in, look around and stay a while. So even if everything is ready, with no visitors the ranking stays the same. |
| ✅ 2 | However well you change things, it is no use if the search engine does not know. How does it know? People actually coming in, looking, staying a while. It sees that and thinks, "oh, someone cares about this place." But if nobody comes? We are just decorating hard and waiting. The ranking stays put. |

The flow she built: put the search engine's inner thought into a line, throw a flipping question, add one line of self-mockery, and close on a very short sentence.

**Told off for not sticking with one thing (a personal story)**

| Spice | Lines |
|---|---|
| 0 | When I was little my mother worried about me a lot. She said I could not stick with one thing and kept trying others. But I have had many experiences of what I learned deeply in many places connecting in the end. So now I am not much afraid of learning something new, or of change. |
| ✅ 2 | When I was little my mother worried a lot. "Why can't that child stick to one thing?" But looking back, what I learned deeply in all those places connected in the end. So now I'm not much afraid of learning something new, or of change. Mom, I wasn't slacking back then, I told you! |

The flow: quote the mother in her own voice, flip with "looking back", and end with one casual line arguing back at her.

**A real script, from recruiting reel v2 to v8**

| Version | Spice | Reaction |
|---|---|---|
| v2 | 1.3 | "Boring" |
| v3 | 2.4 | "Too many self-questions, and the core is weak": sent back although it was hotter |
| v7 | 1.9 | Written from the start with the malmat skill |
| v8 | 1.4 | Yeojin removed four devices from v7 herself: an agreeing tail ("right?"), an opening filler ("well,"), a short emphasis ("really."), and a tacked-on call to action |

A script packed with information, like recruiting or promo, fit best near 1.5. The devices she kept were a quoted thought, repetition ("save. And save again."), short cuts ("by hand. Yourself."), and one self-question.

## The skill that goes with it

Installed in Claude Code, it can be called with something like "write this in malmat spice 2". It holds these files.

| File | What it is |
|---|---|
| SKILL.md | The order to write in: core, own ledger, note, move, mix from the start, measure the spice, checker |
| spice-meter script | Give it a script as text and it reports the spice level as numbers (needs the kiwipiepy package) |
| speech-moves file | The sixteen moves and an example flow for each |
| spice-table file | The 0 to 4 numbers and the default for each kind of writing |
| voice-ledger template | A frame for building your own voice ledger from 10 to 15 of your posts |

No skill files are uploaded to this site. The table only shows what is in the set.

## Sources and rights

- The broadcast lines were used for analysis only, and neither this post nor the skill contains the originals. Every example line is newly written, and it was checked that none overlaps more than 8 words with the text it was inspired by. The caption source and the search index are not redistributed.
- Where the numbers come from: 533,443 clean sentences from auto-captions of long videos made from 2014 to 2026, 520 AI script sentences that Claude wrote from scratch without the originals, and Kiwi for the morphological analysis.
- These numbers were counted by Yeojin. The person publishing them did not re-measure them.
