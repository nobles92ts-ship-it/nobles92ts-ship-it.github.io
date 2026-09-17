# public-apis

> The link check on a 477k-star list had failed 400 days running. And the list I went looking for was already sitting in my own folder.

- Headline number: 1,756 entries · gate dead 400 days
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/public-apis/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/public-apis/index.md
- Repository: https://github.com/public-apis/public-apis
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A list gathering public data services into one table. It carries 477,000 likes. The check that was supposed to verify those links daily had not looked at a link in 400 days. And the list I went looking for was already sitting in my own folder.**

> **[도판]** There is no API server, no search UI, no package inside. One table and three gates, that is all.
>
> The repository is really just one markdown table. A contributor opens a pull request adding one row, a format check and a new-link check run, and once it merges the README file itself is the release. There are three gates: the first two only look at formatting and the newly changed lines, and only the third sweeps every link, once a day at midnight. There is no build, no release, no version.

## First — what a public API is

When you build something, **you can pull in data someone else has prepared** — weather, exchange rates, public holidays.

The counter they open for that is called an API. Think of it as **a phone number**: dial the agreed number and an answer comes back in an agreed format.

This repository is **1,756 of those counters gathered into one table.**

## But the name and the thing differ

*A list of APIs* suggests **addresses you can call.** It is not.

The first column is **a link to a documentation page.** So it is **a "go here and read" list**, not a "call this address" list.

Download the whole repository and you get **one description file (247KB) and two checking programs.** No server, no search.

## Only one in five is actually usable

To judge usefulness you have to set conditions. Practically, it must be callable **without signing up, straight from a browser, over a secure connection.**

Filtering on those three leaves **341 of 1,756 — 19.4%.**

By category it splits hard.

| Category | Total | Actually callable |
|---|---|---|
| Development tools | 160 | 42 |
| Games and comics | 103 | 34 |
| Government data | 106 | 15 |
| Photography | 31 | **0** |
| Documents and productivity | 39 | **1** |

A row reading *31, of which 0* tells you what this list is. **In some categories it is effectively empty.**

## The daily check has not looked at a link in 400 days

The centre of this piece.

The repository runs **an automatic link check at midnight every day.** The contributing guide says a full link validation runs when you submit an entry.

I pulled the entire run history. **It had failed 400 days running.**

The cause was unexpected. Not too many links, not a slow server.

**Four duplicate addresses existed in the table, and the step that checks for duplicates sits *before* the link check.** Dying at the earlier step meant **the later step never started once.**

→ This is the trap I took from the piece.

> **Put a cheap check in front of an expensive one and the expensive one can go unrun forever while the whole thing still looks like it is checking.**

On screen there is **one identical "check failed" line.** Whether the earlier or the later step failed does not appear.

## So I called 300 of them myself

With the check dead, nobody knows the real state. I **sampled 300 at random and connected to each.**

| Result | Count |
|---|---|
| Fine | 247 (82.3%) |
| **Definitely dead** (missing page, address gone, refused) | **27 (9.0%)** |
| Bot-blocked — **must not be counted as dead** | 14 |
| Ambiguous (timeouts and so on) | 11 |

**One in nine was definitively dead.**

The third row is called out for a reason. **"You don't look like a human, blocked" means the service is alive.** Count those as dead and the rate inflates. Their own checker treats them as fine too.

## "Surely the famous ones are better" was also wrong

Suspecting my random sample, I **hand-picked 16 well-known ones** and called them — this time hitting **the real data addresses**, not the documentation pages.

**13 survived (81%).** Effectively identical to the random sample's 82.3%.

**Picking by reputation made no difference to the death rate.**

A few live ones were useful to me:

| What | Where I would use it |
|---|---|
| Generated pixel avatars | **Character art that touches nobody's copyright** |
| Public holidays | Working-day maths, in-game seasonal events |
| Weather and sunrise/sunset | Day/night behaviour for a desktop companion |
| **A server that fails on purpose** | **Testing whether my retry logic actually works** |

The last is the good one. Testing *does it retry properly when the server dies* requires **a server that dies on demand**, and that stands in for it.

## And the sharpest fact — what I went looking for was already mine

After writing all of the above I opened my own folder.

**Something I had built a month earlier was sitting there.** A generator that reads the same table and **bakes it into a single page with search, categories and filters**, plus its output — **a catalogue of 1,791 entries.**

Compared:

| | Value | Meaning |
|---|---|---|
| Of the 1,756, **already in my catalogue** | **1,466 (83.5%)** | No reason to adopt anything |
| Only in theirs | 290 | Recent additions |
| **Only in mine** | **619** | **Korean public data** — absent from their list entirely |

The last row is decisive. **Mine is better.** Those 619 do not exist on their side.

What stings more: **I had taken the rule "one source lives in exactly one place" from another piece and written it down** — and **never looked in that one place.**

## So what this research actually did

It was not about adopting a tool. It was **about switching on a gauge I already had.**

My catalogue has the same hole. **Link liveness has only been verified for the 300 Korean entries**; the other 1,491 are unchecked. Which means **the 9% death rate measured above is sitting inside my catalogue too.**

I went to take apart someone else's warehouse and **found the same defect in my own.**

## The detailed record starts here

**The list is real. A *live* list it is not.** This 477,000-star repository collects public APIs anyone can call into a single markdown table. A link check runs against that table every day — and it had **failed 400 days in a row**. Not because there are too many links: **four duplicate URLs kill the script before the liveness check, so that check has never actually run.** With the gate stuck open like that, I pulled 300 entries at random and called them myself: **one in nine is definitively dead.** But the most expensive fact in this teardown was about me, not about the target — <strong>83.5% of the list I went looking for was already inside a catalogue in my own folder</strong>, and the 619 Korean public APIs that catalogue has do not exist upstream at all.

## It is not a list of APIs, it is a list of links to API docs

The name and the substance differ. The first cell of each row is not an endpoint you can call — it is **a documentation page URL**. Clone the repository and you get `README.md` (247KB) and two Python scripts. Nothing else.

| Item | Measured (2026-09-09) |
|---|---|
| Entries parsed from the table | **1,756 across 51 categories** |
| Repo contents | README 247KB + `format.py` 8.5KB · `links.py` 8.0KB |
| Stars / forks / contributors | 477,439 / 52,699 / 422 |
| Created / last push | 2016-03-20 / 2026-09-05 — this is not an abandoned repo |
| PRs merged / open | 3,695 / **1,877** |
| Licence | MIT — I may re-process the data into my own catalogue |
| Sponsorship | The entire top of the README is an APILayer ad, and so is the repo homepage link |

There are three metadata columns. The one that actually drives a decision is CORS — and **more than half of it says "unknown."**

| Column | Distribution |
|---|---|
| Auth | none 834 (47.5%) · apiKey 765 (43.6%) · OAuth 150 (8.5%) |
| HTTPS | yes 1,664 (94.8%) — effectively everything, so it filters nothing |
| CORS | Yes 606 (34.5%) · No 162 (9.2%) · **Unknown 988 (56.3%)** |

**The lesson this section paid for:** self-declared metadata with no refresh mechanism decays toward "unknown," not toward "wrong." Decaying that direction is invisible — nothing on screen ever looks broken.

## Across 51 categories, only one in five is something you can actually call

To be practical it has to work from a browser with no key. Filter on no-auth + CORS yes + HTTPS yes and **341 of 1,756 (19.4%)** survive. By category:

| Category | Total | Callable from a browser |
|---|---|---|
| Development | 160 | 42 |
| Government | 106 | 15 |
| Games & Comics | 103 | 34 |
| Geocoding | 96 | 17 |
| Transportation | 80 | 9 |
| Cryptocurrency | 79 | 12 |
| Finance | 71 | 10 |
| Open Data | 56 | 19 |
| Social | 51 | 4 |
| Video | 49 | 10 |
| Security | 48 | 7 |
| Sports & Fitness | 48 | 12 |
| Science & Math | 41 | 8 |
| Health | 39 | 14 |
| Weather | 39 | 9 |
| Documents & Productivity | 39 | 1 |
| Machine Learning | 36 | 8 |
| Music | 35 | 1 |
| Business | 32 | 3 |
| Photography | 31 | **0** |
| Test Data | 31 | 6 |
| Animals | 26 | 12 |
| Food & Drink | 26 | 3 |
| Books | 25 | 12 |
| Personality | 25 | 6 |
| Art & Design · Email | 24 · 24 | 6 · 6 |
| Environment · Jobs · News | 23 · 23 · 23 | 4 · 6 · 4 |
| Currency Exchange | 22 | 6 |
| URL Shorteners | 20 | 4 |
| Anime · Text Analysis | 19 · 19 | 8 · **0** |
| Calendar · Cloud Storage · Shopping | 18 · 18 · 18 | 4 · 1 · 1 |
| Entertainment | 17 | 6 |
| Anti-Malware | 16 | 1 |
| Blockchain | 15 | 3 |
| Dictionaries | 13 | 1 |
| Tracking | 11 | **0** |
| Data Validation · Vehicle | 10 · 10 | **0** · 1 |
| Open Source Projects | 9 | 4 |
| Auth · Phone | 7 · 7 | **0** · 1 |
| CI · Programming · Patent · Events | 6 · 5 · 4 · 3 | all **0** |

**The zeroes are the information.** Photography, text analysis, tracking, data validation and auth have nothing you can call directly. That domain does not sustain free public access — so skip the list and go straight to paid.

## Each of the four design decisions carries one condition it depends on

| Decision | Why | Breaks when |
|---|---|---|
| A markdown table instead of a database | Drive contribution friction to zero — click the pencil, add a row, done | **Only holds if the reader is human.** A machine has to re-parse it every time |
| One link per pull request | Minimise the review unit, minimise the cost of judging | **Only holds while intake is smaller than throughput.** 1,877 open PRs says it broke |
| Auth · HTTPS · CORS columns | Let you filter on "can I use this right now" at list level | **Only holds while the values are current.** 56.3% unknown means half the filter is dead |
| Check links, never the response | Without a key you cannot make a real call | **Only holds if doc alive means service alive.** A domain that got sold and became something else is structurally invisible |

The price of the fourth one shows up in a recent PR title: *"Removed repurposed site domains."* The checker cannot catch those, so a human sweeps them out by hand.

## The daily link check has not looked at a link in 400 days

The repo has `validate_links.yml` on `cron: '0 0 * * *'`. The contributing guide says *"opening a pull request will trigger a build to check the validity of all links."* So I pulled the full run history.

- Last **400 runs — zero successes.** Every one from 2025-08-05 to 2026-09-08 is `failure`
- The failing step is #5, `Validate all links from README.md`
- Job start `00:29:49` → failure `00:30:03`. **Fourteen seconds.** That is not the time it takes to check 1,756 links

The last five lines of the log say exactly what happened.

```
Checking for duplicate links...
Found duplicate links:
https://isitdownstatus.com
https://tastedive.com/read/api
https://api.nasa.gov
https://open-meteo.com
##[error]Process completed with exit code 1.
```

`main()` in `links.py` calls the duplicate check **first**, and that function ends the process with `sys.exit(1)` when it finds one. The liveness check on the very next line **is never reached.**

```py
links = find_links_in_file(filename)
start_duplicate_links_checker(links)      # duplicates → sys.exit(1) right here
if not only_duplicate_links_checker:
    start_links_working_checker(links)    # reached zero times in 400 days
```

Two of those four URLs are still in the README twice as of today. **Put a cheap check in front of an expensive one and exit on failure, and the expensive one looks like it "runs daily" while never running at all.** Nobody fixed it because the cause — four duplicates — looks trivial. A blocked gate is worse than a silent one: the silent one gives you no signal, while the blocked one gives you a signal every single day and teaches you that the signal means nothing.

## So I called 300 of them myself — one in nine is dead

I sampled 300 of the 1,756 with a fixed seed and issued a GET with a browser user agent (9s timeout, redirects followed, 30 concurrent).

| Result | Count | Verdict |
|---|---|---|
| 2xx/3xx | 247 (82.3%) | alive |
| 404 · DNS gone · connection refused | 16 · 9 · 2 | **definitively dead: 27 = 9.0% ±3.2pp** |
| 403 | 14 | mostly bot blocking — the repo's own checker treats these as fine. Do not count them as dead |
| timeout · expired cert · 5xx · 400 | 11 | grey zone |

The convention of attaching a confidence interval and a label to a measurement comes from the [Headroom](/en/teardowns/memory/headroom/index.md) teardown. Counting the 403s as dead would push the rate to 13.7% — **a number that makes the target look worse without being true.**

The spread by category is wide. Crypto 50% (9/18), sports 50% (3/6), social 30%, geocoding 25% and development 24% came back broken, while open data 0% (0/11), health 0% (0/7) and games 6% (1/17) were nearly clean. **The categories that smell of money die fastest.** That is not a defect in the list; it is the lifespan of that market.

The official JSON API at `api.publicapis.org` — the first thing anyone reaches for when they want to consume this by machine — **does not even resolve in DNS.** At the same moment `raw.githubusercontent.com` answered 200, so this is not my connection. Every guide still saying *"just call the entries endpoint"* is stale.

> **[도판]** The death rate matters less than the fact that it went 400 days without being caught.
>
> Why the daily link check failed 400 days running. The main function in links.py calls the duplicate check first, and on finding four duplicates it ends the process on the spot, so the liveness check behind it never runs. With the list in that state, calling 300 random entries returned 247 alive, 27 definitively dead, and 26 in a grey zone.

## Picking only the famous ones gave exactly the same death rate

Rather than trust the metadata, I picked sixteen and called the **actual data endpoint**, not the doc page. Thirteen survived (81%) — statistically the same as the 82.3% from the random sample. **The ones I hand-picked as "well known" died at the same rate.**

| API | Result | Where it would go |
|---|---|---|
| DiceBear `pixel-art` | 200 · 358ms · CORS `*` | Pixel-art avatars generated from a seed — the only candidate that touches no character copyright |
| Nager.Date holidays | 200 · 418ms | Working-day arithmetic · in-game seasonal events |
| Open-Meteo | 200 · 1,881ms | Weather reactions in a desktop companion |
| Sunrise-Sunset | 200 · 907ms | Day/night state for the same thing |
| httpbin | 503/200 · ~850ms | **Retry and timeout regression for a test runner** — arbitrary status codes as a real target |
| RandomUser · DummyJSON · JSONPlaceholder | 200 | Mock data |
| Lorem Picsum · UUID · FX · GitHub | 200 · 276–1,545ms | Supporting |
| **FakerAPI** | **502** | dead |
| **Random Data API** | **DNS gone** | dead |

**Both dead ones were in `Test Data`.** That 31-entry category is the first place anyone doing QA opens. I picked two plausible names out of it and both were services that no longer exist. Which is the practical conclusion of this teardown: **the thirty seconds it takes to call something is cheaper than trusting the list.**

## The list I went looking for was already in my own folder

Having written all of the above, I opened my own generator folder. **What I had built a month earlier was sitting right there** — a script that parses the markdown tables and bakes them into one self-contained HTML page with search, category, auth and link-state filters, plus its 1,791-entry output. The rule that one document lives in exactly one place came out of the [Obsidian LLM wiki](/en/teardowns/memory/llm-wiki-obsidian/index.md) teardown; I just never looked in that place.

I measured the overlap.

| Comparison | Value | Meaning |
|---|---|---|
| Of the 1,756 upstream, already in my catalogue | **1,466 · 83.5%** | there is no reason to adopt it as new |
| Upstream only | 290 · 16.5% | everything added since mid-August |
| Catalogue only | **619** | weather forecasts, property transaction prices, financial public data — **Korean public APIs** |
| Link liveness actually measured in my catalogue | the 300 Korean rows only | the other 1,491 are unverified — the 9% death rate above is hiding in there |

**This is where the verdict flipped.** Not "upstream is bigger, so use upstream." Measured against what I actually build, **my catalogue beats upstream** — upstream carries exactly one line for Korea's public data portal. What is worth taking from upstream is not the list but **one delta: the 290 entries added since August.** And the Korean derivative my catalogue reads from has effectively frozen its global half, so simply pulling it does not bring those 290 across.

## Verdict — this was not about adopting a tool, it was about switching on a gauge I already had

| Item | Verdict | Reason · cost to undo |
|---|---|---|
| Adopt upstream as a new reference | ⛔ **rejected** | zero gain — 83.5% already held |
| Add a direct upstream parser to the catalogue | ✅ **adopted** | pulls the missing 290 in and stays in sync · **undo cost 0** (delete one source) |
| Extend liveness measurement to every row | ✅ **adopted** | surfaces roughly **134 dead entries**[estimated] currently hidden · **undo cost 0** |
| Pixel avatars · weather · holidays · httpbin | **held** | verified alive. But nothing hurts right now |
| Borrowing the link-checker code | ⛔ **rejected** | there is no code here worth copying. What survives is one trap: **gate ordering** |

**The lesson this teardown paid for is about sequence, not about the target.** Confirming that an existing gate actually reaches the end is worth more than adding another gate. Upstream spent 400 days that way. I found out that the link check in the catalogue I built a month ago only covers **17% of its rows**. Same defect, same shape: **a signal that it is running is not evidence that it is working.**

## What I did not do

⚠ **I could not resolve the fourteen 403s.** They look like bot blocking, but genuinely dead ones may be hiding among them. Separating them means a human opening each in a browser, and that costs more than the accuracy it buys. So I left them grey and reported the death rate as a **lower bound (9.0%).**

⚠ **300 is a small sample, so per-category figures have wide intervals.** Crypto's 50% is 9 of 18; sports' 50% is 3 of 6. "It varies by category" is supportable; "exactly this percent" is not.

⚠ **I did not sweep all 1,756.** It is feasible, but that is precisely the job the target repository committed to doing daily and is not doing, and **there is no reason for me to do it on their behalf.** Measuring only what sits in my own catalogue satisfies my purpose.

Two conditions would reopen this. First, the four duplicates get fixed and the daily check starts passing — then their results become trustworthy and I can measure less. Second, the official JSON API comes back, at which point I consume that instead of parsing. Checking once a month is enough for both.
