# A file management system

> Five conclusions matched a design I'd built separately, and not one of the reasons overlapped. It also named three gaps in mine exactly.

- Headline number: 5 agree · 3 I missed
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/memory/file-management/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/memory/file-management/index.md
- Source (Source video): https://youtu.be/MM-MPS57qKA
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A nine-minute video about organising files. Five of its conclusions matched rules I had built separately, and not one of the reasons overlapped.**

> **[도판]** The sharpest part of this system is that how precisely you write the date is itself the boundary of findability.
>
> The system's skeleton. Top-level folders are numbered and 99 is reserved for the archive. Date naming has four levels, with a boundary: year and quarter can be found by search, while month and day can only be found if you already know the parent folder.

## The tension it works with — tidy and findable pull against each other

Filing has two forces working against each other.

| | Keep it tidy | Keep it findable |
|---|---|---|
| What you do | Split into fine folders | Pack information into the name |
| The cost | **You forget where you put it** | **The folder looks a mess** |

The video picks a position between them and sets two ceilings.

- **Folder depth: five**
- **Ninety-nine items in one folder**

The reasoning behind five is the interesting bit — **"past five levels, we get lost."** Not a technical limit but **a human one.**

## The sharpest part — how precisely to write a date

The best idea in the system.

When you put a date in a filename it is easy to pick between *2026*, *2026-09* and *2026-09-17* on taste. The video treats that choice as **where findability is decided.**

Finer dates **sort more precisely and group less easily.** Coarser is the reverse. So it depends on **which you will need to do more often.**

## Five conclusions matched mine, and none of the reasons did

The heart of this piece.

My own folder rules, built separately, **agreed with the video on five points.** And **why each of us chose them was completely different.**

| | Their reason | Mine |
|---|---|---|
| The kind of grounds | **People** — complexity exhausts them and they stop | **Machines** — a path tied to the classification breaks when the classification changes |

Different routes, same destination.

**That is worth more than the conclusions matching.** Same reason, same conclusion is hearing one thing twice. **Different reasons converging means the conclusion is not tied to a condition** — it holds for the human reason and the machine reason both.

## And the video named three blanks in mine, precisely

Three things I took.

**One — things that belong nowhere had nowhere to go.**

I had a holding folder, but I had defined it as **"things that can be regenerated."** A place for things it is safe to delete.

Which left **things that matter but resist classification** with nowhere to sit. The delete-safe folder is wrong, and the proper shelves reject them. **So they piled up on my desktop.**

**Two — put a quota on the index.**

Important-markers in my index kept growing. One line of the video hit it exactly:

> **If everything is starred, nothing is starred.**

I had **no mechanism capping the count** of important markers.

**Three — my depth ceiling had no basis.**

Mine said **three levels.** Asked why three, **I had no answer.** I had just picked it.

The video recommends three inside a folder, five overall. **And it gives a reason.** So I changed mine. The number changing matters less than **the number acquiring a reason.**

## One thing I corrected in myself

I had a rule saying **never use tags.** Too strong.

Stated properly: **tags must not replace the primary structure, but for things whose names you cannot change, tags are the only instrument.** Files handed to you, files a system generates — you cannot rename them. Tags are all that is left.

## There is a half of my problem this video cannot cover

Stated plainly.

Its subject is **100% documents that people read.** No code repositories, no caches, no pipeline outputs.

A large share of my working folders are **directories machines write to.** So this video **covers less than half** of my situation. A good source applied outside its range starts producing wrong answers.

## And I do not leave rules to willpower

The video says set rules and **keep to them.** I rejected that part.

Rules kept by willpower **are the first thing to fall when you are busy.** And busy is exactly when the rules matter most.

So mine go to **automatic checks.** Break a rule and **a machine complains before a person notices.**

## The detailed record starts here

**The value of this piece is arriving at the same answers for entirely different reasons.** A nine-minute video about organising files **agreed with my own folder design on five conclusions.** And **the reasoning does not overlap at all** — he arrives via human factors, *"make it complicated and people run away"*; I arrived via systems, *"a path that depends on a taxonomy breaks."* The video also **named three gaps in my design precisely.** One of them was **a number I had picked with nothing behind it.**

## What the video says

**It starts from a balance** — between *"how tidy is it"* and *"how findable is it."* The ceilings are **five levels deep and ninety-nine folders wide.** The reasoning is simple: *"past five, we get lost."*

**It opens by openly mocking one numbering scheme.** It puts an official *"two digits, decimal point, two digits"* rule on screen and says *"memorise this not-at-all-complicated numbering system and… wait, where are you going?"* **Complicated systems don't get used** is this video's consistent axis.

**One folder is his own invention.** *"Temp sharing"* — a place to isolate the parts you've carved out of confidential material to share. **A legitimate temporary home for things that belong nowhere.**

**The first of five tips matters most.**

> Organise by where you'll use it, not by where you found it.

The other four: **learn your file manager's search syntax**, **plant keywords in the description field for shared files you can't rename**, **at most five stars** (*"if everything is starred, nothing is"*), and **when something is shared with you, choose one of copy, shortcut, or ignore** — a shortcut lets you **file it into your own system without moving the original.**

**The conclusion is modest** — *"there is no perfect file system. Over-optimising actually costs you productivity. Pick one and stick to it."*

## What broke — same answers, different reasons

> **[도판]** Separate agreement, conflict and gaps, and the question stops being "who is right" and becomes "right under which conditions".
>
> Held against my design, the material split into three groups: five conclusions that agree, three where the answers diverge, and four areas the video never touches.

**The important conflict is the number prefix.** He uses them. I banned them. **Both are right** — the conditions differ.

He is on **ID-based storage**. Rename a folder and the links survive. I am on **local absolute paths.** The moment a number enters a path, **the path becomes dependent on the taxonomy.** The same technique is **harmless on one side and fatal on the other.** Folded into a rule: **numbers are fine on ID-based storage and banned on path-based storage.**

**And he is paying for it too.** His own screen shows **the archive containing folders with duplicate numbers.** The numbers have lost their meaning. **His system's failure is captured on his own screen.**

**I got two things wrong.** Depth 3 was **a number I picked on instinct**, and his 5 has real usage behind it. But the levels were different — his 5 is document depth, my 3 is root-rule depth. **Correction: root rules at 3, free below that, 5 as the overall recommended ceiling.** And calling tags an anti-pattern was **too broad a statement** — **for things you cannot rename, tags are the only tool available.**

## Held against my own setup — the half this video can't cover

**Everything this video addresses is a document a human reads.** No code repositories, no caches, no lock files, no pipeline output. A large share of my working folders are **directories machines use**, so **this video doesn't cover half of it.**

**There is no "is this safe to delete" judgement.** There is a backup folder but no concept of **something being regenerable.** Which is why the archive becomes a graveyard for *"things I can't bring myself to delete"* — **he says so himself.** My design asks *"can I rebuild this"* first, which blocks that graveyard at the source.

**There is no answer for time-series output either.** Dates go only in filenames. **When results accumulate automatically by the hundred or thousand**, a naming convention alone collapses — you have to partition into folders.

**And the only enforcement is human willpower.** *"Pick one and stick to it"* is all there is. **The result is printed on his screen as disorder.** Without a script that checks the rules, rules decay with time.

## Verdict

| What | Verdict |
|---|---|
| **A temporary home for things that belong nowhere** | **adopt.** My temp folder is defined to take only regenerable things, so **anything unclassifiable had nowhere to go** |
| **Cap the index** | **adopt.** "If everything is starred, nothing is" — a discipline device my design lacked |
| **Correct the depth ceiling** | **adopt.** Root rules at 3, 5 overall. My 3 had nothing behind it |
| Tags as anti-pattern | **corrected.** They must not replace primary structure, but **for things you can't rename they're the only tool** |
| Number prefixes | **still rejected — conditionally.** Fine on ID-based storage, banned on path-based |
| Enforcement by willpower | **rejected.** This goes to automated checks |

**The lesson I paid for here: that the reasons differed mattered more than that the conclusions agreed.** Five matched, and not one reason overlapped. **Reach the same point down different roads and the odds that the point is right go up.**

And ⚠ **a technique that "works for them but not for me" usually has a hidden condition.** The number prefix was exactly that. Stopping at *"it works for him, not for me"* would have produced no rule; **asking why it splits produced one — the kind of storage.** Find the condition and you get a rule; miss it and you're left with a preference.
