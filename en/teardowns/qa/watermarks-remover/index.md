# watermarks-remover

> I opened a tool that erases AI fingerprints in order to audit my own publish gate. Then the metric built to catch AI caught something I had written by hand.

- Headline number: 4 takeaways → 1.5
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/qa/watermarks-remover/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/qa/watermarks-remover/index.md
- Repository: https://github.com/guillaumemeyer/watermarks-remover
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A tool that strips the "made by AI" marks out of AI-generated files. I opened it not to strip anything but to audit my own publish gate. Then the metric built to catch AI caught something I had written by hand.**

> **[도판]** Counting twenty formats tells you nothing about this thing. Splitting the verifiable layer from the unverifiable one at the code path is what it is.
>
> This tool sends every input through a router that decides the kind first, and unknown bytes are refused rather than passed through. From there it splits three ways: the deterministic layer that removes invisible Unicode and the file metadata layer are both verifiable, while the layer that attacks token-sampling watermarks by LLM rewriting is declared unverifiable by the repository itself. The same engine ships as a CLI, as a dependency-free HTTP service, and as an agent skill that contains no code.

## First — what an "AI fingerprint" is

When AI writes text or draws an image, the output can carry **a hidden marker saying it was AI-made.** Three ways.

| Method | The analogy |
|---|---|
| **Invisible characters** | Ghost letters of zero width woven between the words |
| **Baked into word choice** | Probabilities nudged at generation time so a pattern emerges |
| **A label inside the file** | A note in the corner of an image file saying who made it and when |

This tool finds and removes all three. It gathered **16,619 likes in 11 days.**

## I did not open it to strip anything

To be clear about motive: I opened it **to audit the check that runs before I publish this site.** Two questions.

1. Is there **a leak** in my check
2. There is one rule I have **written down but never built a checker for** — can a machine measure it

The short version: the tool is **rejected outright**, one of the two questions got answered, and **something I did not expect came out.**

## What is well made — the posture toward not knowing

The valuable part is not the erasing code but **how it handles situations it cannot classify.** Four things.

**One — an unknown file is left alone and the program dies.** It used to guess *probably text* when it could not identify something. Now it **writes nothing and exits with an error.** Better to stop than to touch and corrupt.

**Two — the same character is treated differently depending on its neighbours.** Some of those invisible characters are **legitimately used** — the one that joins emoji together, for instance. So the rule is not *always delete this character* but **keep it when it sits between emoji** — it looks at position.

One comment in particular stood out: **"classifying by category destroys genuine, newly-assigned characters."** The trace of having had that accident and fixed it is in the file.

**Three — it re-checks after erasing.** It does not stop at *erased*; it **feeds the output back through the detector.** So **clean** and **erased but residue remains** come out as different results.

**Four — it distrusts its own findings.** Findings are graded **four ways**, and the crudest detection method is **demoted to the lowest grade by the tool itself.** The comment says why: **"a scanner hit is a signal, not a verdict."**

## Run against my own corpus, there was nothing to catch

This settled the rejection. I imported their scanner and ran it **over everything I publish.**

| Measured | Result |
|---|---|
| 196 documents + 238 built pages (6.1MB) | **0 findings** |
| Ran the cleaner and diffed before and after | **All 196 byte-identical** |
| 14 published images | **All 14 carry no label** |

**There was nothing to strip in the first place.** Not a bad tool — **a problem I do not have.**

→ What I took: **run a detector against your own data before adopting it.** Adopt one that finds zero and you have installed a cost with no benefit.

## Then I ran the one metric I wanted against my own writing

The line in the title.

The tool ships a separate scorer for **AI smell.** It weighs three things; the one I wanted was **how uneven the sentence lengths are.**

The reasoning: **human writing varies wildly in sentence length.** A three-word sentence next to a forty-word one. **AI writing tends toward evenness.**

I wanted it because my own writing rules carry *do not let the rhythm flatten* **as a rule with no checker behind it.**

So I ran it on my writing. **It flagged text I had written by hand.**

The tool is not broken. **"Sentence lengths are even" and "AI wrote this" are not the same claim**, and this metric measures only the first. Prose that a person tidied up gets flagged exactly the same.

→ **Check that what the ruler measures and what you want to judge are the same thing.**

## So I took half of it

I took the rhythm metric **with conditions attached.**

- **Long-form only.** With few sentences there is no unevenness to measure
- **No threshold for short pieces** until I measure a short-form corpus of my own
- **Never used to judge whether AI wrote something.** Only to see whether my own prose has flattened

## The real harvest was a defect in my own code

The actual output of this research was not someone's technique but **one violation of my own rule.**

The first line of my global rules reads **when it is ambiguous or it fails, the default is not to act.** And the header comment on my publish gate states that it behaves that way.

**The code did the opposite.**

| | What was written | What ran |
|---|---|---|
| On meeting an unknown file type | Stop | **Wave it through** |

It selected files to check by **known extension only.** Unknown extensions fall silently out of scope.

Nothing leaks today. But **the moment one new kind of file appears in the output it passes unchecked, with no warning** — and **that appears on no screen at all.**

## A bonus — my collector fetched the clone, not the original

One more thing fell out.

My automated collector put this tool on the candidate list, and **it had fetched a clone rather than the original.**

| | Original | Clone |
|---|---|---|
| Created | 11 Aug | **19 Aug** (8 days later) |
| Likes | 16,619 | 929 (**in 3 days**) |
| Description file | 1,120 lines | 1,063 lines, of which **1,058 match the original** |

It is a clone **with no clone marker on it.** Copied wholesale and re-uploaded, so the platform counts it as a separate artifact. **Without a human comparing them, they do not separate.**

## Conditions to reopen

Rejected, but not forever. Any one of four.

1. The twice-yearly rescan **turns up a marker for the first time**
2. **A detector validated for Korean** appears — right now there is no way to validate at all
3. The known defects are fixed and a new release lands — ⚠ but **a fixed tool with no target is still a rejection**, so condition 1 gets measured again first
4. I start **distributing images or documents externally**

## The detailed record starts here

**I erased nothing, and instead found my own deploy script breaking my own rule.** watermarks-remover is a Python engine that strips provenance markers out of AI-generated files. 16,619 stars in eleven days. I opened it not to strip anything but **to audit the inspection gate in my publishing pipeline** — is the pre-deploy marker scan leaking anywhere, and can "even sentence rhythm", a rule of mine with exactly zero checkers behind it, be turned into deterministic code. I rejected the tool wholesale. Running this repository's scanner over my 6.1MB publishing corpus returned **zero markers**. But when I ran the one metric I did want over my own writing, the most expensive fact of the piece came out — **the metric built to catch AI caught what I had written by hand, first.**



## What it is — it refuses to add "verified" and "best-effort" together in one report

**An engine that strips the evidence of "an AI made this" out of files an AI made.** It treats that evidence as three separate species. Carriers planted as invisible Unicode, statistical watermarks planted by skewing token-selection probability at generation time, and provenance metadata embedded as structure inside the file.

**The design centres on admitting that those three are not the same kind of thing.** Unicode is removed by deterministic code and the count removed is handed back. File metadata is removed and then the tool rescans its own output and reports what survived. The statistical watermark, by contrast, has no attack other than asking an external LLM to rewrite the prose, and that cannot be verified. The repository policy says so: *"reports must separate verifiable work from best-effort work."* **That single line is the most valuable sentence in here.**

| Item | Measured 2026-08-22 |
|---|---|
| Scale | 151 files · ~1.13MB · 16,619 stars · 1,902 forks |
| Engine / tests | `service/scripts` **14,141 LOC** · 41 test files, 10,592 LOC · `def test_` **549** |
| Dependencies | **zero at runtime** (Python 3.10+ stdlib). Four dev deps, exactly pinned |
| Licence | MIT — ⚠ the pixel-side backends sit outside the umbrella (no licence upstream / non-commercial research) |
| Activity | created 08-11 → last push 08-21. **Eleven days alive**, 141 commits, 5 releases |
| Contributors | 27 people, but the owner has 63/122 — **bus factor 1** |

**This is an eleven-day sprint.** 16,619 stars is virality, not adoption, and there is no long-term maintenance record yet. CI runs a three-OS matrix with lint, dependency audit and OpenAPI schema validation, which looks solid for its age — and what that solidity fails to catch comes later.

## The techniques — the value isn't the erasing code, it's what it does when it doesn't know

| Technique | What it does |
|---|---|
| **fail-closed routing** | Input that matches neither an extension nor a magic byte used to fall back to text. Now it writes no file and dies with exit code 2. And *"it won't decode as UTF-8"* alone is not treated as proof of binary, so text in other encodings survives |
| **context-aware stripping** | The same codepoint is handled differently depending on its neighbours — ZWJ survives only between emoji, the Hangul filler only after the same jamo. Unassigned characters are matched by **explicit ranges, not** by Unicode category. The reason sits in a comment: <strong>"the Cn rule destroys freshly assigned real characters."</strong> They shipped that bug and repaired it afterwards |
| **two-stage PDF pipeline** | The metadata tool updates PDFs incrementally — exit code 0, invisible in a viewer, and **the original bytes are still there and recoverable.** The only clue is that the file gets bigger. So a re-serialisation stage was bolted on behind it to actually drop the orphaned objects |
| **rescan after cleaning** | It doesn't stop at *"removed"* — the output goes back through inspection and residue is reported. "Clean" and "cleaned but residue remains" are different exit codes |
| **four confidence grades** | Every finding maps to confirmed / probable / informational / **likely_false_positive**, and the whole-byte scan demotes itself to the lowest grade: <strong>"a scanner hit is a signal, not a verdict."</strong> |
| **tool version probing** | Being on PATH does not make a tool available — it actually runs `--version` and reads the exit code: <strong>"`which` alone answers the wrong question."</strong> |

**And there is one more — the protagonist of this piece.** Bolted alongside the watermark work is a scorer that grades **"AI smell"** statistically. It is a weighted sum of three terms: cliché-dictionary density 0.45, **coefficient of variation of sentence length** 0.45, lexical diversity 0.10. With fewer than two sentences the CV term is dropped and the rest renormalised.

## What broke — the dominant failure isn't malfunction, it's a false acquittal

**Even the half it calls certain wobbles.** The C2PA 2.x standard includes a soft-binding resolution API as a first-class feature: when the manifest embedded in the file is torn out, an invisible watermark or perceptual fingerprint queries a remote store and recovers the provenance. **What this repository removes is precisely the side the standard already designed to be removable**, and the repository says soft bindings are out of scope.

**Two of the four headline vendor-coverage cells have no live detection path.** Anthropic's marker is, per the public statement, a statistical watermark that changes the randomness source of token generation, not a Unicode carrier. Which means the deterministically verifiable layer cannot touch it at all, and the corresponding detector in the code is a reserved slot with no logic. The Gemini cell has its death certificate written by the repository itself — upstream withdrew text watermarking from the API.

**There are no efficacy numbers anywhere.** In 73,956 bytes of README there are **zero** efficacy figures in percentage form, and **zero** committed benchmark results in the bench folder. And **the owner opened two PRs that would have made results producible, then closed both unmerged.** It isn't that the numbers don't exist yet — the apparatus to produce them was brought in twice and withdrawn twice.

**The recurring defect has one shape: it failed to remove something and then certified the file clean.** Nine issues of the same shape opened in six days. A truncated audio tag is reported as zero findings and that file gets a clean certificate; a dead image scorer and a genuine absence of watermark both read as `clean`. **It folds a parse failure into "nothing found"**, it is being fixed case by case, and the remaining formats should be assumed to hold more of it. One of them is irreversible — run the in-place fix twice and the backup file is overwritten with the cleaned copy, destroying the original permanently, while the docstring of that same function promises *"the original is never partially lost."*

**Why 549 tests don't catch this** is answered on the tracker. Asked *"are contributors using Claude"*, the owner said yes. Fourteen thousand lines of code plus 10.6k lines of tests in eleven days. **When code and tests come out of the same generator on the same pass, the tests cannot in principle cover the generator's blind spots.** That matters more than the missing coverage gate.

**In fairness, I withdraw two of my own first-pass calls.** The issue claiming the advertised video path corrupts files **was already fixed** — the box to be deleted is replaced by a zero-filled box of the same size, so the offset table stays valid. ⚠ Reading "the related string isn't in the code" as "not fixed" is a misdiagnosis. The other was that I carried over **the word SSRF from the issue title**, and that was an overstatement — the endpoint comes from an operator environment variable, not attacker input, so the real defect is not an internal-network pivot but auth tokens and bodies leaking on redirect. **An issue title is not a fact; it is somebody else's verdict.**

**What I could not do.** I could not run this repository's own benchmark — it needs a GPU and four external checkouts, and all eight corpus seeds are English. So *"how much does it actually erase"* **remains unmeasured on this page too.** I have also never pointed this tool at a file that actually carries a watermark, because there is no such file in my environment.

## Held against my own setup — there was nothing to catch

I imported the scanner from the repository HEAD as-is and ran it over my entire publishing corpus.

| What I measured | Result |
|---|---|
| Invisible Unicode — 196 documents + 238 static HTML pages + 7 drafts (6.1MB) | **zero** |
| Clean-function round trip — same 196, both default and paranoid | **196/196 byte-identical** = a pure no-op |
| C2PA and AI metadata across 14 published images | **14/14 absent** — headless-render output never carries any |
| Widened to local brain files (195 skills + 180 memory notes) | 7 hits across 5 files — all outside the publishing path, no action needed |

**There was no target.** A gate with zero risk of damage and zero changes made is not a gate, it is decoration.

**The one thing I did want, the AI-smell scorer, loses half of itself in Korean.** Of 24 cliché patterns, **zero** are non-ASCII, so a term carrying weight 0.45 is permanently zero. Scoring a matched control in both languages gave English 0.887 (HIGH) against Korean 0.438 (LOW) — **the 0.65 threshold is unreachable in Korean** (theoretical ceiling about 0.55). So I pulled out the one language-neutral term and measured again.

> **[도판]** In long-form, 2 of 98 fell below the line. Measured again on the shorts, where the gate would actually sit, it was 1 in 6.
>
> Coefficient of variation of sentence length, run over three corpora with the same script. The 98 long-form site documents have a median of 0.668, comfortably high, but one short piece I had already written and published sits at 0.298, below the 0.35 threshold. The Korean AI control is 0.055. A short human piece sits closer to the AI end than a long human piece does.

**The 98 long-form site documents have a median of 0.668, spread comfortably wide.** Only two sit below the 0.35 threshold, both short index-like pages, so the first pass wrote it off at *"2% false positives."* **But the place this gate was actually going to sit was not long-form — it was the short publishing drafts.** Measuring those six again, they were squeezed into a narrow band from 0.298 to 0.550, and one of them — **a piece I wrote by hand and had already published** — sat at 0.298, below the line. Short writing is even, even when a human does it. **What this metric measures is not who wrote it but how long they wrote.**

## Takeaways — from four down to one and a half

| Candidate | Call | Why |
|---|---|---|
| **The sentence-rhythm CV term** | **adopt (half)** | A deterministic rhythm checker really is at zero on my side. But **long-form only**, and no threshold for short channels gets built until I measure a separate corpus |
| The three-term weighted sum + renormalising a missing term | ⛔ **rejected** | I built a better version of this three weeks ago — the confidence scorer in my [test-case pipeline](/en/built/tc-team/index.md) has a rule table, clamped ceilings, optional inputs, a reverse-solved threshold sweep and a locked expectation table, with trap repairs like *"deductions on different axes must not cancel"* written into the comments |
| fail-closed file selection | **principle only** | Not a technique to learn from someone else — **one compliance defect of my own.** Below |
| The invisible-Unicode detection set | **conditional hold** | The measured benefit is zero, so it is justified only as insurance. A host already exists — my link checker walks all of `dist/` and loops over visible characters. This is three lines inside it, not a new file |

**The third row is the actual output of this investigation.** The first line of my global rules says *"when in doubt or on failure, the default is to not do it"*, and the header comment of my deploy gate's library describes itself as fail-closed. Yet the way that gate picks files is **an extension whitelist** — it inspects only the extensions it knows, which is fail-**open**. Real leakage today is zero, but the moment something like `.mjs` or `.rss` appears in the output, it passes uninspected **without a single warning line.**

⚠ **And here I decided not to bring in someone else's implementation.** The repository decides with 28 magic-byte signatures plus NUL plus a control-character ratio, and at a scale of 259 files that table is maintenance debt. I get the same fail-closed behaviour in three lines — if an extension appears that is on none of the known lists, just stop. **Principle adopted, implementation rejected.**

## Incidentally — my collector nominated the clone, not the original

`Leutenegger/watermarks-remover` had come up in my candidate list. What the feed actually carried was `guillaumemeyer/watermarks-remover ★16,619`. **They are different repositories.**

| | Original | Clone |
|---|---|---|
| Created | 2026-08-11 | **2026-08-19** (eight days later) |
| Stars | 16,619 | 929 (**in three days**) |
| Fork flag | false | **false** — not a GitHub fork |
| README | 1,120 lines | **1,058 of 1,063 lines identical** to the original (99.5%) |

**Fifteen links pointing back to the original author's repository are still sitting inside the clone's README** — the CI badges point at someone else's repository. It is a whole-cloth copy with only the fork relationship severed. My candidate bridge looks at star counts and word rules only, so **it cannot tell an original from a copy.** Stars accumulating fast is not a signal that the tool is good, it is a signal that the topic caught fire — and a clone only has to borrow the topic.

## Verdict

| Item | Call |
|---|---|
| Adopt the repo, service, skill or Docker image | ⛔ **Rejected.** Not one file enters my tree |
| The file-metadata / image / document paths | ⛔ **Rejected.** If I ever need them I will call the off-the-shelf tools directly — they don't edit in place, so destroying an original is structurally impossible |
| Takeaways | **1.5** — the rhythm CV term (long-form only) + restoring my own fail-closed compliance |
| Bringing it into a work pipeline | ⛔ **Inappropriate.** Separate from the technical verdict |

**Four conditions that reopen this** — ① the semiannual rescan turns up its first marker, even one. ② a text-watermark detector validated in Korean appears; until then the rewriting layer has no means of verification, so no verdict on it is possible at all. ③ the PRs for the four data-loss and false-clean defects get merged and a release follows. ⚠ Even then, **a fixed tool with no target is still a rejection**, so I go back and measure ① first. ④ a workflow appears that distributes images or PDFs externally.

**The lesson I paid for here isn't a technique, it's an order of operations — measure the false-positive rate on your own corpus before you bring in a detector.** And measure it **on the corpus where the gate will actually sit.** I measured on site long-form, wrote "2% false positives", then moved to the channel where that rule would live and it was 1 in 6 — and the piece it flagged was one I had written.

One more thing. I tore down a repository with 16,619 stars, and what I was left with was **one self-comparison: a line in my own deploy script breaks a line in my own rule document.** The value of looking at someone else's work is not only in what you carry back — hold up someone else's principle against your own code and you see what your own principle never showed you.
