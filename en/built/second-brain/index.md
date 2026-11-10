# Second brain

> My own documents in one index that any AI session can search with the same command. tc-team runs fully only when it is connected.

- Headline number: docs → evidence
- Rendered page: https://aitryed.com/en/built/second-brain/
- Other language: https://aitryed.com/ko/built/second-brain/index.md
- Repository: https://github.com/nobles92ts-ship-it/AI_GAME_QA_TestCase/tree/main/brain
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**The second brain is one index of the documents I own — the design wiki, past TC analyses, work notes, reviews — that any AI session can search with the same command, whatever folder it was opened in.** Like a second brain for a person, it remembers what I do not.

It gets its own page for one reason. [tc-team](/en/built/tc-team/index.md) (the pipeline that turns a spec into test cases) runs without it. But **it only runs fully when the second brain is connected.** The tools to build one now ship in the public repo, and this page is the setup I actually use.

## Specs never write down every value — the second brain fills the gaps

A spec page always leans on values it does not contain. A drop rate lives in a table doc. A status effect is defined on another team's page. A planner answered the question in a thread last week.

| | Without a brain | Connected |
|---|---|---|
| Defined in another doc | "needs spec confirmation" row | found and folded into the design (`apply`) |
| Value lives in a data table | "needs spec confirmation" row | table location written on the TC (`locate`) |
| An area the design missed entirely | passes unnoticed | added to coverage (`discover`) |
| No evidence anywhere | "needs spec confirmation" row | still "needs spec confirmation" (`keep`) |

The last row matters most. The brain **does not invent.** When it finds nothing, the item goes to a person exactly as if the brain were off. So a rough brain never breaks a run; a better one just hands fewer rows to people.

## Three rules — layers, latest version, your own docs

**One: split the layers.** Every document gets a heading tag such as `# [D/…] path`. `D` is the design wiki, and it is the only layer the pipeline may cite as evidence. `R` (past TC output), `P` (personal notes) and `E` (reviews) show up when a person searches but are never cited. Without layers, an old TC's sentence gets quoted back as if it were the spec — a wrong TC becomes the evidence for the next one.

**Two: index only the latest version.** Re-running a feature leaves `feature`, `feature_v2`, `feature_v3` folders behind. Index all of them and a value that has since changed comes back next to the current one. So only the highest version per feature goes in, and the folders that archive an old version (`retired_*`) stay out.

**Three: your project's docs only.** This step checks a TC against the design world it belongs to. Anyone else's wiki — mine included — adds nothing.

## Planner answers come back into the brain

When TC writing hits a gap, the question goes into a panel next to the sheet. Once a planner answers, in my setup the answer travels like this:

1. Every 15 minutes, answers are collected at the end of that feature's **latest** analysis.
2. They are then woven into the matching lines of the analysis **body**. An answer such as "to be decided later" is only marked as undecided.
3. At the nightly re-index, the woven answers become searchable in the brain.
4. When a new version of the same feature is run, the answers from earlier versions are handed straight to the design step as a file.

Step 4 does not go through search. The analysis is in the `R` layer and cannot be cited, so carrying answers forward has its own path. What ships in the public repo is **the tooling to build the brain**, not steps 1–4 — the collecting and weaving is tied to my sheet and Slack and is not published yet.

## Follow along — five steps

Two tools are in the public repo's [`brain/`](https://github.com/nobles92ts-ship-it/AI_GAME_QA_TestCase/tree/main/brain) folder.

| Step | What to do |
|---|---|
| 1 | Copy `brain_manifest.example.json` to `brain_manifest.json`; list your design wiki as layer `D` and your past TC folders as layer `R` with `latest_version_only: true` |
| 2 | See what goes in with `python brain/build_bundle.py --dry-run`, then run it without the flag |
| 3 | Three lines in `team/tc_config.json`: `crossref_brain: "on"`, `crossref_source` (index name), `crossref_bundle` (bundle path) |
| 4 | To search it yourself: `python brain/brain_search.py --build`, then `python brain/brain_search.py "respawn delay" "revive timer"` |
| 5 | Rebuild steps 1–2 nightly when docs change. When the bundle is newer, the pipeline re-indexes it on its own |

There is a reason step 4 passes two or three phrasings. The published search matches **words**, not meaning. On twelve questions it had never seen, one phrasing found 5; adding reworded phrasings found 7. In my own setup I have since removed that limit.

## Different words now find the same document — meaning search is mixed in

Word search works like a librarian who only reads spines. The words of the question have to appear in the document. Ask "what happens when a player leaves?" and a page that says "on exit" stays hidden, even though both mean the same thing.

So a second librarian joined, one who reads for meaning. Ahead of time, every chunk of every document gets a card: 1,024 numbers that describe what the chunk is about. A question is turned into the same kind of card, and the chunks whose cards sit closest come back. Making those cards is called **embedding**.

| | Spine reader only | Spine + meaning reader |
|---|---|---|
| 39 unseen questions — right document in the top 5 | 28 | **37** |
| Newly found / lost | — | 9 / **0** |
| 826 questions the TC pipeline once answered, asked again | 436 | **522** |
| Time per search | 0.02 s | 0.2 s |

Mixing both matters. The meaning reader slips when you already know the exact name: a question about a monster-setting feature's coverage, asked by its name, ranked 1st for word search and 16th for meaning search. Fusing the two rankings lets each cover the other's blind spot.

The cards are made **on my own PC only**, with a local model runner (Ollama) and a multilingual embedding model (bge-m3, 1.2 GB). No document leaves the machine. If the runner is off, search does not stop; it answers with the word side alone.

## Not done

- **Woven answers are not used as TC evidence yet.** They come up only when a person asks. New versions get them through the separate file, so for now that seemed enough.
- **Carrying answers into a new version has not been checked on a real run.** The next new-version TC run is the first check.
- **Meaning search exists only in my setup so far.** The public repo's `brain_search.py` still matches words, so a different word for the same thing is found only if someone adds that phrasing.
- **The TC pipeline has not used it on a real run yet.** What I have is the replay of past questions and one trial lookup.
- **The published cross-reference rule accepts evidence tags under the placeholder name `MYGAME`.** The manifest example uses the same name. To use your own project name, edit the rule file too.

## The detailed record starts here

## What it cost — when search looks wrong, suspect the index first

Three times the symptom was "the pipeline cites the wrong evidence" or "it finds nothing at all". All three times the cause was not the search but **what had gone into the index**.

### The index was split by folder, so there was nowhere to look

The AI session's search tool (context-mode) keeps **a separate store per working folder.** The brain was indexed in one folder's store, while the pipeline ran its lookups from another. However precise the query, everything came back "no results". Worse, that output looked exactly like the normal path — "looked, found no evidence, keep" — and for a while nobody noticed.

Two fixes. A gate now checks "is there an index to look in?" before the lookup, and if it is missing or older than the bundle, the chain re-indexes on its own. The log now prints "no match" and "nowhere to look" separately. That is what the single `crossref_bundle` line in the public repo does.

### Old-version copies showed up beside the latest one

Even after the latest-version rule, old versions still appeared in results. The new version's folder held, **inside it**, an archived copy made when the old version was retired (`retired_*`). At folder level the latest version was right; it just carried the old one whole. One `retired_*` line in the exclude list fixed it.

### A spec moved to a new page and one feature became two

Folders with the same name are treated as different features when their spec pages differ — one spec sometimes yields several feature tabs. But a feature whose spec moved to a new page got split by that same rule. Thirteen planner answers piled up in the **retired** version's analysis instead of the latest one, and search returned both versions as "latest".

When a new version retires an old one, it leaves a record that names the old tab. If that record exists, the two are now grouped as one feature even across pages. The answer collector and the indexer use the same rule — if they disagree about "latest", answers land on one side while search looks at the other.

### Without layers, TCs cite TCs

The first index had no layers. The lookup step then picked sentences from past TC designs as "spec definitions". Those sentences had been guesses awaiting confirmation, and in the next TC they were written down as settled. So every document now carries a layer tag, and the rule takes evidence only from layer `D`. The public `build_bundle.py` adds that tag.

## What it cost — adding meaning search was easy; the mixing order was not

Meaning search itself went in within a day. The time went into how to mix it, and into proving it helped.

### Three phrasings buried the meaning side

The first version built one word-search ranking per phrasing, added one meaning ranking, and fused them all at once. Pass three phrasings and the word side gets three votes against one. Measured through the real code, the 37 found out of 39 dropped to 31. Fusing the word rankings into a single list first, then mixing that 1:1 with the meaning list, brought it back. **Same fusion formula, different vote counts, different result.**

### The advice to reword flipped

With word search alone, "add reworded phrasings" was right (5 → 7). After meaning search went in, that advice found one fewer. Rewordings written by someone who did not know the answer slipped in English terms and added noise. The advice now is **put the question sentence first, as is, and add rewordings after it** — that found 38 of 39 and lost none.

### One launch flag put cmd windows on screen

When the runner is off at search time, search starts it. The first version detached it from its parent, and every model load then flashed **visible cmd windows** from its helper process. Launching the official app instead opened its chat window. Both were dropped. Starting the server with only a "no window" flag let the helper inherit the hidden console. Watching for visible windows during a search found none.

### Before touching the TC lookup, I measured against that engine's own code

The TC pipeline's lookup step uses a different search tool (context-mode). To decide whether to switch, I ran that tool's search function **unchanged** on a copy of its index, with the questions past runs actually asked. A look-alike reimplementation would have made the numbers worthless. The result is the 826-question row above. On a sample of 40 questions the pipeline once failed to answer, judged with the two lists' sources hidden, answers appeared in 8 instead of 4. In 30 of the 40, neither list had an answer — the wiki simply does not say. **Better search does not write missing documents.**

## Verdict

The second brain is less a new feature than **the half tc-team always assumed.** The public version used to present it as "optional — there is a socket", and left building the plug to each user. This release ships the tool that builds it and changes the wording to "connect it to run fully". The default is still off — a fresh clone's first run working with no setup comes first.
