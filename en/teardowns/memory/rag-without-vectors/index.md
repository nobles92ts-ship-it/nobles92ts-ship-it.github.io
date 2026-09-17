# RAG without a vector DB

> Every structural claim held up and everything that failed was a specific number — the characteristic failure of secondhand write-ups.

- Headline number: structure 6/6 · numbers 1/5
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/rag-without-vectors/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/rag-without-vectors/index.md
- Source (source): https://www.threads.com/@gptaku_ai/post/DbpB3WZE6p6
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A write-up arguing you don't need a special search system to let an AI read your own files. I checked it claim by claim against the primary sources. Everything that failed was in one category.**

> **[도판]** The real output of the piece. "There's no universal recipe" is a common conclusion; cutting that along a scale axis and naming the boundaries is the valuable part.
>
> Four bands along a document-scale axis. Up to a few hundred pages you put everything in context; a few hundred to a few thousand needs only YAML front matter and file traversal; thousands to tens of thousands needs a vector database with reranking; beyond that needs a vector, graph and SQL hybrid. My own document assets sit in the second band.

## First — why letting an AI read your files is hard

An AI doesn't know what's on your computer. So when you ask a question, **you have to attach the relevant material.**

The difficulty is **choosing what to attach.** With a thousand documents you cannot attach a thousand. You have to pick the few that relate.

The fashionable way to pick is this: **convert every document into a block of numbers and store it, convert the question into numbers too, and find the nearest ones.** It needs a dedicated store.

This write-up argues: **most of the time you don't need to go that far.**

## Its value was not the conclusion but the boundary line

*There is no universal answer* is a common thing to say. This one **actually drew where the line falls.**

| What decides | How it splits |
|---|---|
| **Was the document born digital** | A PDF made straight from a document or slide deck already contains text. **Reading letters out of a photograph is unnecessary** |
| **What kind of question** | *Find me something similar* → the number method / *what connects to what* → a graph / *what matches these conditions* → a plain table lookup |
| **What do you convert into numbers** | Not the full text but **a short note saying which document and which part this fragment is** |

The last row was the best part. Instead of converting the whole text, it stores **a short description and a file location** — *this is the conclusion section of document A.* Searching uses the description, and **the AI opens the file and reads the content itself.**

## Claim by claim against the sources — the failures clustered in one category

This is a piece assembled from other sources, so I chased each source down.

| Kind of claim | Verdict |
|---|---|
| **Structural claims**, 6 | **All 6 held** |
| **Specific numbers**, 4 | **All 4 unreliable** |
| A year | 1 typo |

A clean split. **Every *this is better in that situation* survived; every *N percent* collapsed.**

That is a pattern worth knowing when reading other people's summaries. **The person summarising understands the structure and carries it over correctly; they carry numbers over without chasing the source.** So structure survives and numbers die.

## Incidentally — the whole thing lived inside images

Something odd came up while reading. The body had **two lines** of text, and **all of the content sat inside ten images, as text.**

Scrape the page mechanically and **you get nothing.** You have to download each image and read it to reach the content.

## Held against mine — I was already standing there

I measured my own setup against their boundary line. It was unexpected.

| What I have | In their taxonomy |
|---|---|
| **1,021 wiki documents** (15MB) | Exactly the *no special system needed* size |
| 156 memory drawers + **a one-page index** | **Precisely the arrangement they recommend** |
| Keyword search, no numbers involved | Already running |
| The cross-reference step in my pipeline | **Already running in real work** |
| The spec documents I handle | **All born digital** — the photo-reading discussion does not apply |

So it was not a case of learning from someone's write-up — **someone described a place I had arrived at separately.**

## But the real finding was one number of mine

The largest output of this research was not their architecture but **a blank on my side.**

The arrangement I built has **one precondition**, and I had never measured how much of it was filled. Measured: **4.6%.**

The structure was right and **the thing that gives the structure its power was 95% empty.**

That is **invisible when you look at structure and visible only when you measure.** And it never occurred to me to measure until someone else's ruler was laid against it.

## Verdict

**Zero tools adopted.** Number stores, graphs, re-rankers — **all overkill at my current scale.**

More precisely: **I have not yet reached the boundary the source itself drew.** There is no reason to buy equipment for a place you have not arrived at.

## The detailed record starts here

**The structure was adopted and the numbers were barred from quotation.** Checking its ten claims against primary sources one at a time: **all six structural claims held, and everything untrustworthy clustered in four specific numbers** (plus one wrong year). It's a clean view of where a secondhand write-up fails. And holding its boundary line against my own environment — **I was already standing in that band, with the precondition only 4.6% filled in.**



## What I was actually reading

**A secondhand write-up: a community discussion plus the author's own research.** The format is unusual — the post body is two lines and **all of the content lives as text inside ten images.** Text crawling finds nothing; you have to download the images and read them to reach the content.

And **it summarises primary sources in prose instead of linking them.** So using any of its numbers requires verification first — which is half of this page.

Three axes run through it, and the argument is that **on each axis the deciding variable is the nature of the documents.**

| Axis | Deciding variable | The fork |
|---|---|---|
| **Parsing** | Is it born-digital | A PDF exported straight from a word processor already has a text layer, so **OCR isn't needed at all** |
| **Chunking / embedding** | What gets vectorised | ⚠**Not the text itself, but a 50–100 token summary of "which document and what context this fragment belongs to," plus the file path.** The actual text is handled by an LLM handed that path |
| **Retrieval** | The kind of question | What's similar = vector / how are these connected = graph / what matches these conditions = SQL |

The second axis is the most valuable turn in the piece. **You don't embed the document — you embed the description and hand over the path.**

## Verification — structure survives, numbers don't

> **[도판]** This picture is where a secondhand write-up fails. The failures aren't scattered — they cluster in one kind of claim.
>
> Ten cited claims checked against primary sources. All six structural claims were confirmed; of five specific numbers only one was confirmed, three had no findable primary source, and one had the wrong year.

**All six structural claims held.** That the two parsers divide labour rather than compete, that retrieval architecture converges on three kinds, the scale boundaries, and that the knowledge-wiki pattern is real — **including that its own boundary line matches exactly.**

**Exactly one number was trustworthy.** That attaching a context description to each chunk before embedding drops top-20 retrieval failure **from 5.7% to 3.7%** — matching the announcement precisely. **There's even a reason to add credit:** the same announcement reports better figures with a hybrid search (2.9%) and with reranking (1.9%), and **the write-up conservatively quoted only the standalone figure.**

**The other four are unusable.**

- **Three OCR accuracy figures** — no primary source found. The standard benchmark in that area reports **error rates rather than accuracy percentages**, so **numbers from different benchmarks were probably mixed**
- **Chunk size and "overlap doesn't help"** — no source. The latter especially **contradicts the received wisdom**, which makes adopting it sourceless risky
- **Reranker latency** — no source found, and that latency is normally **reported per batch, not per chunk**
- **A cost-reduction figure** — the value is right and **the year of publication is off by one**

**The pattern deserves a name: structure survives being relayed, specific numbers don't.** The person relaying carries the structure over intact but pulls numbers from memory or another source. **So adopt the structure and bar the numbers** — that's the right way to use a piece like this.

## And then I measured my own environment

I held its boundary line against my own setup. **Surprisingly, I was already standing in that band — and running the pattern, having reinvented it independently.**

| My asset | Measured | Verdict |
|---|---|---|
| Wiki vault | **1,021** markdown files · 15 MB | Scale is exactly the sweet spot |
| Memory drawer | 156 files + **one master index** (a line each, plus when to open it) | ✅ **already live** — the knowledge-wiki pattern itself |
| Full-text index | keyword index, no vectors | ✅ already live — a step above the `grep` in the source |
| The cross-reference stage in my pipeline | queries the index, extracts references, hands them on | ✅ **in production** — vector-free retrieval already runs in working jobs |
| The spec documents I work with | all born-digital | **The parser discussion doesn't apply at all** |

The memory drawer especially. **One pointer line per item, plus one line saying when to open that document** — that is precisely the routing hint of the master index this piece describes. I built it because I needed it, and **the piece supplies the theory for why it works.**

## But the precondition was only 4.6% filled

The biggest find in this investigation wasn't someone else's architecture. It was one of my own numbers.

> **Of 1,021 markdown files in the vault, 47 have front matter. That's 4.6%.**

The pattern works **because front matter acts as retrieval's semantic hook.** And the source's diagnosis is that **"much of retrieval failure happens at the finding stage, not the generation stage,"** with the prescription being **"state the path, the tags and the summary explicitly."**

My vault **sits at exactly the scale where that prescription works best, with the prescription applied to 47 files.** Right now it isn't a structured wiki — it's **a pile of markdown plus human memory.**

So when retrieval fails there, the cause is likely **not "no tool" but "empty metadata."** Filling in front matter is far cheaper and more effective than bolting on a vector database.

⚠ **That's still a hypothesis, though.** I have **not measured whether retrieval is actually failing.** The order matters — **sample a few failure cases first and confirm the cause is missing metadata, before filling anything in.** Otherwise I pay the full cost of going from 4.6% to 100% and can only ever describe the benefit as an estimate.

## Verdict

**Zero tools adopted.** A vector database, a graph store, a reranker — all overkill at this scale, and **the boundary the source drew itself hasn't been reached.**

**Two principles came across.** One is **"index only summaries and metadata, and hand the actual work the path to the original"** — three places on my side had each reinvented this separately with different conventions, and now that it has a name they can be unified. The other is this page's title.

> **Adopt the structure. Bar the numbers.**
