# anti-slop

> I ran 15 rules over all of my own code, got 27 hits, and decided to fix none of them. Looking for somewhere to attach them instead, I found that my own leak-defence gate can switch itself off in silence.

- Headline number: 15 rules → 0
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/anti-slop/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/anti-slop/index.md
- Repository: https://github.com/dmmulroy/anti-slop
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A checker that catches fifteen bad habits AI falls into when writing code carelessly. I ran it over all of my own code, got 27 hits, and decided to fix none of them. Then, looking for somewhere to attach it, I found something far more expensive.**

> **[도판]** Both axes are unusual — distribution and judgement. And between the two, the thing itself is missing.
>
> The two axes of anti-slop. Distribution is not npm but a source copy: CI binds the canonical and the copy byte for byte, and an install skill copies the source into your repository. Judgement never calls the type checker, using only one file's syntax tree and a hand-built alias table, and there is not a single autofix. Yet this repository has no oxlint config file, so the plugin has never once run on its own source.

## What it catches — "code that knows and pretends not to"

When you write code you can **declare in advance what a value is** — *a number goes here.*

Then putting the wrong thing in **is caught at build time**, before you ever run it.

But when you are rushed there is a temptation to write **"anything can go here."** The check stops firing, so you move on. **And it explodes later, at run time.**

That is what this catches — **places that know what the value is and wrote down that they do not.**

| What it blocks | In plain terms |
|---|---|
| Letting "anything" flow across a boundary | Writing *unknown* when you know |
| "Any key at all is fine" | Not labelling the box |
| Forcing a shape by assertion | **Insisting it is right when it is not** |
| "Just trust me" | **Claiming safety without writing down why** |

The last row is clever. Rather than **forbidding** the forced assertion, it **requires a comment explaining why it is safe.** A ban gets routed around, so it **demands an explanation instead.**

## The unusual thing — it never calls the type checker

Technically distinctive.

This kind of check normally requires **understanding the whole program.** That is slow.

This one **looks only at the shape of a single file.** It does not ask what anything means — **only what it looks like.** So it is very fast.

The trade is that **looking only at shape means missing things.** Speed bought with accuracy.

## What was worth learning was not the rules but the distribution

I did not open this repository for the rules. It was for **the wording it uses to report results to an AI.**

Most checkers say only **"this is wrong."** A person reads that and works out the fix.

This one writes **"fix it like this."** Phrased for an AI to **act on directly.** They spent **an entire commit** on that work.

Something else impressed me — **they wrote constraints on the AI's behaviour into the installation procedure itself.**

| Written into the install steps | What accident it prevents |
|---|---|
| **"Do not trust the version you remember — look it up"** | The AI typing a remembered, stale version |
| **"Do not switch rules off to make the lint pass"** | The AI **turning the check off** when blocked |

The second is good. It is the same family as the AI **deleting the tests** when told to make them pass — and it is **pre-empted inside the procedure.**

## They deleted every auto-fix

This tool has **zero auto-fixes.** There were some. **They removed all of them.**

There was a reason. An auto-fix had **turned "omit this field" into "set this field to empty."** They look similar and **behave differently.**

On that report they switched **all sixteen rules to report-only.**

→ What I took: **auto-fixing is convenient and when it is wrong it breaks things quietly.** Reporting only lets a person look and decide.

## Run against my code — except the target was 770 lines

What I measured first was not the rules but **the surface area.**

Across my entire working folder, **the code this tool can see is 770 lines.** Everything else is in other languages and out of scope.

For reference, this tool **was built for large projects.** One external adoption report covered **568,443 lines.**

**770 against 568,443.** That gap decides the verdict.

I enabled all fifteen rules over those 770 lines. **27 hits, and I decided to fix none of them.** There is no reason to apply large-project rules to a 770-line surface.

## And the repository exempts itself

The key refutation. **This repository has never once run its own checker over its own source.**

Built and not used by its author. **Nine of eleven self-claims did not hold.**

## And looking for somewhere to attach it, I found something worse

The centre of this piece.

To find where this would attach, **I opened my own publish gate chain.** And saw something else.

I have a check that blocks **internal terms that must not be published.** It is the only defence.

That check **depends on one reference file.** And **if the file is missing it skips the check** — **silently, with no output.**

So **one file disappearing switches the leak defence off without a sound.** And the screen **looks exactly as it always does.**

## Hence the line that runs through both

The same thing appeared on their side and mine.

> **A gate is counted by whether it runs, not by whether it exists.**

They built one and never ran it on themselves; mine was built and can switch itself off in silence. **Counted by existence, both pass.**

## What actually came home — not the plugin but the floor under it

I wrote down three takeaways and **one survived.** And it was not this tool but **the plain linter it sits on top of.**

**My site had no ordinary code linter at all.** My three quality gates are **specific to my site**, so **nobody was looking at generic defects** like unused variables.

So I put the plain linter into the publish chain. **It immediately found two real defects in my pipeline code.**

The other two shrank. On checking, **what I had written down as absent was already present, or the problem pointed the other way.**

## The detailed record starts here

**I ran 15 rules over all of my own code, got 27 hits, and decided to fix none of them.** anti-slop is an Oxlint plugin that bans 16 TypeScript constructs which **throw type evidence away**. What makes it what it is: it judges **without ever calling the type checker**, from the syntax tree of one file alone. I opened it for the diagnostics rather than the rules — **wording written so an agent reads it and acts immediately** — and while hunting for somewhere to attach that, I opened my own publish-gate chain and saw something far more expensive: **the only scan standing between me and leaked internal vocabulary sits on an `if` that gets skipped, without printing a single line, the moment one reference file goes missing.** The same shape turned up on the target's side. This repository has **never once run its own plugin on its own source.** One line runs through both — **a gate is counted by execution, not by existence.**



## What it is

**A rule set that bans "syntax which discards what you already know about a value."** It sits on the JS plugin API that Oxlint 1.78 newly opened, and splits into **15 general rules** you can switch on anywhere plus **1 opt-in rule** that only makes sense inside one framework.

| What it blocks | Which construct |
|---|---|
| Leaking a wide type past a boundary | `unknown` · `any` · `object` · `{}` in parameter, return and type-alias positions |
| Open dictionary types | `Record<string, unknown>` and kin — any key passes |
| Type laundering | `x as unknown as T` chained assertions |
| Widening, then narrowing back | declaring a known value wide and later asserting it back |
| Escaping to runtime | `typeof` branches · `Reflect.get` · `Reflect.apply` · module mocking |
| Unjustified assertions | forces a `SAFETY:` comment stating the invariant before the assertion |

**The unusual part is how it does this — it never calls the type checker.** From the syntax tree of a single file it **reads top-level declarations only and builds its own type-alias table**, then substitutes aliases recursively using that table. Eight builtins — `Record`, `Partial` and the rest — are hardcoded as name constants, and even type equality is approximated by **comparing source strings with the whitespace stripped out.** The price is explicit: imported types are invisible, and so are aliases declared inside a block.

| Item | Measured 2026-08-22 |
|---|---|
| Scale | 66 files · 62KB · 1 runtime dependency |
| Stars · forks | 3,313 · 63 (the feed logged 2,871 on 08-20 — +442 in two days) |
| Commits | **13. All of them 08-12 to 08-18** · 0 releases · 0 tags |
| Contributors | 1. And **pull requests are disabled** |
| Tests | **3 of the 16 rules have no test file at all** |
| Autofixes | **0.** After a report that autofix changed runtime meaning, every fixer was deleted |

**Distribution is no more ordinary.** It is never published to npm — the package is `private` and its entry point is a source file, not a build artifact. Installation is **an agent skill that copies the source `.ts` into your repository**, and the README states why: don't pin it as a dependency, copy it, read it, and edit it to your team's standard.

## The techniques — the value is in the distribution, not the rules

Vendoring itself is above. Five things sit on top of it.

| Technique | What |
|---|---|
| **The skill is the installer** | Only 21 lines are deterministic (one copy). The other five steps — detect the package manager · look up the latest version · merge config · enable rules · verify — are **written as prose for an LLM to carry out** |
| **Agent behaviour constraints embedded in the procedure** | "Don't trust the version you remember, look it up" and "do not silence a rule or unsafe-cast your way past the linter" are steps of the install procedure |
| **A CI byte-identity gate between canonical and copy** | It compares both the file list and the utf8 contents, and stops the chain on any difference. Vendoring's signature failure, closed in CI |
| **Autofix abandoned entirely** | After a fixer turned "omit the key" into "set the key to undefined", all 16 rules went report-only |
| **Diagnostics aimed at agents** | Not "this is wrong" but "parse at the boundary and return a named domain type". One whole commit went into this |

**That last line is why I opened this repository.** The first reader of my publish gates is not a person, it's a session.

## What broke — nine of eleven self-claims didn't hold

**This tool is exempt from itself at the level of its own documentation.** That is the central rebuttal.

- There is **no oxlint config file anywhere in the repository.** The `lint` script runs the default rules only, and the plugin has **never once been applied to its own source.**
- As a result one 21-line shared module **breaks at least four of its own rules** — `unknown` in a parameter position, a `typeof` runtime branch, an `as unknown as` chained assertion, and no `SAFETY:` comment in front of that assertion. At 62KB, "the codebase is too large" is not available as a defence.
- The README and the install procedure tell **users, too** to add the vendored copy to their lint ignore list.

**One core rule is defeated by an empty comment.** The check behind the rule that makes you justify an assertion looks only at **whether** a `SAFETY:` marker is present, never at what it says. A bare `// SAFETY:` gets CI to approve exactly the cast the rule exists to block. The "laundering a type to get past the linter" that the install procedure forbids in prose is something an agent can **perform automatically by precisely this route.** The false negatives have the same shape — because the alias table is built from top-level declarations only, one hop through a transparent alias like `type Identity<T> = T` blinds several rules at once.

**The single `perf:` commit is contradicted by upstream documentation.** It ported 15 rules onto the new API and called that a performance improvement, but the upstream official document it rests on says, on the question of whether this is faster today, **"not right now. But it will be."** There are no before/after numbers in the repository, and the last rule, added five days later, **is back on the old API.** The distribution model has already been routed around — the day before I opened this, the community bundled the same rules and published them to npm, and that was not taste but necessity. oxlint does not support relative-path plugin specifiers in shared configs, so **an organisation on a shared config cannot adopt this by vendoring at all.**

**What held, for the record.** The canonical↔copy identity gate gave me nothing to break, and the opt-in rule's self-declared scope limits matched the code. This is **the kind of project that does dangerous things and writes the limits down.** The bad part is the supplier — stopped after 08-18, all 15 issues unanswered, six of them **reports with patches attached**, submitted as fork links only because PRs are disabled.

## Held against my own setup — the surface was 770 lines

**The first thing I measured was not the rules but the surface.** Across my entire work folder, hand-written TypeScript amounts to **7 files and 770 lines, all of it my personal site.** Every other project is Python, PowerShell or CommonJS, so TS is zero. This tool is built for large monorepos — one external adoption report covered 568,443 lines across 4,421 files. I turned all 15 rules on over those 770 lines.

> **[도판]** It's the spread that matters, not the count. 27 hits were not 27 problems but effectively two.
>
> How the 27 hits from running 15 rules over all my code split by rule. The rule requiring a SAFETY comment before an assertion accounts for 18, two thirds of the total; widening a known value accounts for 7 and runtime typeof for 2; the chained-cast rule I had called its one unique rationale, and the remaining 11 rules, all scored zero.

**18 of the 27 hits are a single pattern.** The framework hands route parameters over as "string or nothing", so every page carries one line asserting that away. The rule demands a comment at **all 18** of those sites; the assertion is forced at a boundary and cannot be removed, and 18 comments would not make the code one character safer. The group of 7 catches dictionary types whose keys are already closed — the same class as the external measurement where **117 of 150 hits were proved by the compiler to be type-identical after the fix.**

**My expected rebuttal did land, but on the wrong side.** I assumed the linter would fail to read my site's template files; in fact it parses the frontmatter and reports normally. That is 16 more files of surface — and **every bit of the increase was the 18-hit noise above.** A case where a larger surface came out as a loss rather than a gain. Speed was not a rejection ground: warm 260ms → 450ms, up 70%, but the absolute value is negligible.

## Three takeaways, and only one survived

The real output was not the plugin but **the bare oxlint underneath it.** My site has no proper linter at all — eslint, prettier, biome and typescript are all absent, and there is no `tsconfig.json`. Its three quality gates are **domain checkers I wrote myself**, so they never look at generic defects like unused variables.

| Candidate | Call | Why |
|---|---|---|
| **Wire bare oxlint into the publish chain** | **adopt** | A zero-config run exits 0, so adding it today blocks no deploy. It found 2 real defects in the publish pipeline code immediately |
| Diagnostics as instructions | **cut down** | "None of the 13 sites carries an instruction" was wrong. Two already print the command to run, and the rest carry a consequence clause. Cut to polishing 4 lines |
| Canonical↔copy identity gate | **cut down · direction corrected** | The failure mode it aims at has already been eliminated by my publish procedure. The real blind spot was **in the opposite direction** |

<div class="ex">
<div class="x"><b>BAD — only says what is wrong</b>
<p>✖ 3 dead links — stopping without pushing</p></div>
<div class="o"><b>GOOD — the next action is inside the sentence</b>
<p>✖ 3 dead links. Fix the addresses below or create the missing documents, then run again <em>(deleting the link is also a fix — that is not done automatically)</em></p></div>
</div>

**The lesson I paid for is on the cut-down side.** I had written that the sync gate "can't catch a copy going stale", and when I measured, **zero copies were stale today.** The assembly step re-copies everything every time, so that failure mode was already gone. The design side is worse — the bulk of why a copy differs from the canonical is not the path substitution I had assumed but **vocabulary sanitisation with no correspondence table at all**, which means the "half a day" estimate does not hold. Switched on as written, the first run would have raised ten false alarms. The adopted item carries a correction too — I counted 2 false positives when there were in fact 3. **I missed a file and wrote "exhaustive" anyway.**

## Verdict

| Item | Call |
|---|---|
| Adopt the anti-slop plugin | **Rejected.** 770 lines of surface · 25 of 27 hits are boundary noise or a known false-positive class · 0 hits on its unique case |
| Wire in bare oxlint | **Adopted.** Adding it today blocks no publish |
| Instructional diagnostics · sync gate | **Cut down.** Half was already done, and one had the direction wrong |
| Reopen when | I start a project with more than 1,500 lines of TS · the chained-cast pattern actually appears in my code · upstream adds options to the two false-positive rules · type-aware linting ships stable |

**Supplier risk is the last layer.** Because it is vendored, adopting it means applying the abandoned patches to my own copy by hand, and from that moment I fork from upstream permanently and carry the maintenance myself. 3,313 stars cover none of that.

## What this investigation actually changed wasn't someone else's linter

**Looking for somewhere to attach the takeaways, I opened my own publish procedure and found the single point of leak defence failing open.** That procedure scans twice — before the push and after it. Both start like this.

```sh
if [ -f "<path to the domain table map>" ]; then
  grep -nE "\b(<54 table names>)_[A-Za-z]" ...
fi
```

**There is no `else`.** If the reference file disappears, the scan is skipped whole, not one line is printed, and on the next line the gate passes as though nothing happened. The post-push copy additionally silences grep's errors — silence twice over.

**Why that is expensive is something the same document already spells out.** One class of the names I have to block **looks exactly the same before and after sanitisation.** No structural regex separates them, so for that class it is **the table-map lookup alone that catches anything** — not the list of 34 patterns. And this is not theory: comparing the public copy against the canonical during this very investigation, **the items that had actually been sanitised were precisely that class.** The file is alive right now. But its path is hardcoded in two places, and I have already torn up and rebuilt my whole work-folder structure once.

**The lesson I paid for here is the mirror image of the target's.** anti-slop deleted every fixer after the autofix incident — better not to fix than to fix wrongly, and that is right. A gate is the opposite. **Not firing is far more dangerous than firing wrongly.** A false alarm gets seen and dismissed by a person; silence is seen by nobody.

## What I didn't do

- **I still haven't fixed that one line.** I only found it. Before fixing it I have to re-read the whole publish procedure and count **whether there are other fail-opens**, so I left it as separate work.
- **I never ran the community npm fork.** I wrote "published one day ago, no basis for trust" and skipped it — but that is **a reason for not measuring, not a result of measuring.**
- **Rule precision is somebody else's number.** The 568,443-line measurement was posted by an external user; my own surface is 770 lines. I cannot say "it is noise on large codebases too" — all I can say is that **the value was zero in my code.**
- **I submitted nothing upstream.** Four self-violations in one file is worth an issue, but PRs are blocked and all 15 reports sit unanswered, so I didn't file one. That was a judgement, not a check.
