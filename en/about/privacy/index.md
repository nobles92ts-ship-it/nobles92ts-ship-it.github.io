# Privacy

> The only thing this site collects from you is how many times a page has been opened. It also fetches fonts from elsewhere, and the host keeps access logs.

- Headline number: one number, nothing else
- Rendered page: https://nobles92ts-ship-it.github.io/en/about/privacy/
- Other language: https://nobles92ts-ship-it.github.io/ko/about/privacy/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**In one line — the only thing this site takes from you is a count of how many times a page has been opened. Not who opened it. It also fetches fonts from elsewhere, and the company hosting it keeps access logs.**

⚠ **The actual policy is the text below "The detailed record starts here."** What follows here is that, in plain terms.

## What I collect — one number

| What sites usually have | Here |
|---|---|
| Sign-up | **None** |
| Forms | **None** |
| Comments | **None** |
| Cookies | **Not set** |
| Anything that recognises you | **Not installed** |
| View count | ⚠ **Counted** — this one thing |

The view count is nothing more than **adding 1 to "how many times has this page been opened."** What goes up is a single number, and **nothing that points at you is stored beside it** — I do not know who opened it, where they came from, or whether the same person came back.

⚠ Which means the number is **not an accurate statistic.** Read it as roughly how many times a page has been opened, nothing more.

**One slot is kept in your browser.** It stops a refresh during the same visit from counting twice, and **it is gone when you close the tab.** It is not a cookie and it is never sent to me.

For a long time even this did not exist, because **this site has no server** — there was no way for it to count itself. Now only the counting lives elsewhere; that is the fourth row in the table below.

## But that does not mean no record exists anywhere

The part that matters. **Me not collecting is not the same as nothing being recorded.**

Opening a page sends requests to **four places.** And each of them **keeps its own records.**

| Where | What is passed | Why it is needed |
|---|---|---|
| **Where the site is hosted** | Your address, the time, browser details | **To send you the page** |
| **Font provider 1** | The same | **Latin typefaces** |
| **Font provider 2** | The same | **Korean typefaces** |
| **Where the count is kept** | The same, plus **the address of the page you are reading** | **How many times that page was opened** |

⚠ The fourth is called **only on documents and the front page.** Browsing a section index or AI news today sends no such request at all.

In other words: **to use nice typefaces, a visitor's connection details reach those companies once.**

## Why bother writing that down

I do not have to. Plenty of sites stop at **"we collect nothing,"** and **that sentence is not a lie.**

But a reader hears it as **"no record of me exists anywhere."** And that is not true.

> **Me not collecting and no record existing are different things. Leave the difference unstated and the unstated reading is the flattering one.**

So **the places I do not control are written down too.**

## The detailed record starts here

**Updated 17 September 2026**

## What this site collects — one view count

It's a static site, so there is no server. No accounts, no forms, no comments. It sets no cookies, assigns no visitor identifier, and installs no general web-analytics tool (Google Analytics and the like).

**What is collected is a per-page view count, and nothing else.** On document pages and the front page a separate counting function (`aitry-views.vercel.app`) is called, which increments the counter for that address by one. **What is stored is a pair — address and cumulative count — with no value that identifies a visitor.** There is no per-visitor separation, no return-visit detection and no behavioural tracking.

⚠ As a result the figure is **not an accurate visitor statistic.** One person opening a page five times counts five times.

**One `sessionStorage` slot is used in the browser** to avoid counting the same document twice during one visit. It is deleted when the tab closes and is never transmitted. `localStorage` and cookies are not used.

Search runs inside your browser — the index is fetched once from this site and filtered locally. **What you type is never sent anywhere.**

## Where records are kept anyway

⚠ My collecting one number does not mean **nothing is recorded anywhere.** Opening a page makes requests to the four places below.

| Where | What reaches them | Why |
|---|---|---|
| **GitHub Pages** — hosting | IP address · timestamp · browser details | To send you the page |
| **Google Fonts** | the same | Latin typefaces (Inter · IBM Plex Mono) |
| **jsDelivr** — CDN | the same | Korean typeface (Pretendard) |
| **Vercel** — view counting | the same, plus **the page address being viewed** | The view count for that page |

All four operate under their own privacy policies. **The records the first three keep, I neither see nor retain.**

⚠ **The fourth is different — that account is mine.** I deployed the counting function, and request logs exist on that platform. **All I take out of it is the cumulative count**, but this is not a place where I can say "it is recorded somewhere I cannot see," so it is written down here.

⚠ The fourth request happens **only on document pages and the front page.** Section indexes and Just out do not call it.

⚠ Something else held this fourth slot once — Hugging Face, serving card images in Just out. **It was removed on 20 August 2026** —
the images are now fetched ahead of time, shrunk, and served from here. After that there were three until 17 September 2026, when the view count made it four again. **Nothing leaves the table above while you are on this site.**

## Ads — none at present

**As of 19 August 2026, this site carries no advertising.**

If Google AdSense is served here in future, the following will apply.

- Third-party vendors, including Google, **use cookies** to serve ads based on prior visits to this site or others.
- Personalised advertising can be turned off at [Google Ad Settings](https://adssettings.google.com).
- Third-party vendor cookies can be declined in bulk at [aboutads.info](https://www.aboutads.info/choices/).

⚠ This section gets rewritten **on the day ads actually go live** — the "none at present" line comes out then. It will not claim ads are running while they are not.

## About Just out

Just out gathers titles and links from public places — arXiv, Hugging Face, GitHub, Hacker News, and company blogs.

- **It does not use anything about you.** What gets collected is decided without reference to the visitor. There is no personalisation and no recommendation.
- **Originals are not reproduced here.** Only a title, a short quote, and a link back. You read the thing where it lives.
- The "location, estimated" badge on a card is a guess from **one self-written profile string on a public account**. It has nothing to do with you.
- The image on a paper card is **the share card Hugging Face generates for that paper** — not the paper's own figures.
  Linking the original would make your browser call out to them, so **I fetch it, shrink it, and serve it from here.**
  The source is named on every card, and the title links to the original on arXiv.

## When it changes, it changes here

If a tracking tool goes in, ads start, or the list of things fetched from elsewhere grows, this page gets corrected starting with its date. **On 17 September 2026 the view count was added and this page was corrected as promised** — until then it said "three places, no tracking installed." If this document disagrees with what the site actually does, that is my fault.

## Contact

Open a GitHub issue — the link is at the bottom left.
