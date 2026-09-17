# ponytail

> Four lines shortlisted out of a rule set with 92,000 stars; one held up. The more valuable finding came from my own rules.

- Headline number: 1 line of 4
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/ponytail/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/ponytail/index.md
- Repository: https://github.com/DietrichGebert/ponytail
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**A rule set that continually tells an AI "don't build anything yet." It carries 92,000 likes. I shortlisted four lines, one survived the evidence, and what the investigation actually found was a contradiction inside my own rules.**

> **[도판]** Not a code tool but prompt distribution infrastructure. What it sells is this one text; everything else is plumbing that pushes it into twenty hosts.
>
> A seven-rung ladder. Does it need to exist, is it already here, does the standard library cover it, does the platform cover it, does an installed dependency cover it, does one line do it — you stop at the first rung that catches. Only at rung seven do you write code.

## What it sells

Ask an AI to build something and **it starts writing code immediately.** Sometimes that is the problem — it rebuilds what exists, or builds what was never needed.

So this rule set makes the AI **climb a ladder before building.**

1. **Can this be skipped entirely?**
2. **Does something already exist that does it?**
3. Can the platform's own features do it?
4. Only if none of the above: build it

The idea is good. And the product itself is **one 120-line text file.** Everything else is plumbing that pushes that file into various AI tools.

## Opened up, it is not "one file"

A small finding. *One sheet of rules* is the impression; in reality the **rules are scattered across three or four places.**

Besides the file it calls canonical there is a separate convention file (**more than half of the twenty supported tools read that one instead**), a fallback copy, and rules embedded in five helper tools.

If you use one specific tool, the canonical file is correct. But **across the whole repository it does not match the "single sheet" impression.**

## The headline number swapped definitions

The face of the repository is **"54% less code."**

Both the report and the README declare that figure to be **an average per task.** So I **recomputed it using their own declared definition.**

**It came to −35.4%.** Not 54.

So **the method they state and the number they advertise do not agree.**

## But the bigger problem was how "correct" was measured

More serious than the number.

Comparing performance requires **judging whether the job was done right.** In this comparison, the correctness criterion was **"did it write even one line of code."**

Which means **the side that built nothing wins automatically.** And this tool's whole purpose is **telling the AI not to build.**

**The ruler and the instruction point the same way.** A comparison like that has its result decided before it starts.

## And yet running this author down would be wrong

To be fair: **this author is far more honest than the field average.**

| What they did |
|---|---|
| **Found a contamination bug in their own measurement themselves**, published it, and **discarded all prior results** |
| **Published data unfavourable to themselves** — on some models it is **slower**, on another the **cost went up 38.7%** |
| Built **a gate that refuses to spend money at all** if the measurement rig fails its own self-check |

The second is rare. **Almost nobody puts the cases where their product is slower into their own report.**

One thing does nag: **the errors all lean the same way.** Honest, but **when mistakes tilt consistently in one direction** that may not be chance.

## Three of four lines came off

Reasons, written down.

| Dropped | Why |
|---|---|
| **"Check whether it already exists"** | **Their own comparison failed to demonstrate the value of the behaviour.** Both sides reused existing helpers |
| **"See if the platform can do it"** | The effect **clusters in building web screens.** My work is game engine and automation; it does not apply |
| **"One line if one line will do"** | **Already covered by my rules** — *if 200 lines become 50, rewrite it* |

The survivor:

> **Before changing a function, find every place that calls it.**

It survived because **it is a procedural instruction, not a claim about effect.** Effect claims collapse when the measurement collapses; **a procedure has nothing to collapse.** Looking is never worse than not looking.

## But the real find was on my side

The centre of this piece.

While considering wholesale adoption I **counted the places it collides with my existing rules.** Three.

And in doing so **something bigger surfaced — my rules already carried three self-contradictions, independent of this tool.**

| About | One rule | The other |
|---|---|---|
| Configurability | **Do not build configuration nobody asked for** | Pull tunables out as config **even when they equal the code default** |
| Error handling | **Do not handle situations that cannot occur** | Handle **comprehensively, at every level** |
| Building ahead | **Do not build speculatively** | **All three kinds of test mandatory**, 80% coverage |

**All three pairs say opposite things.**

That is **invisible one rule at a time.** Read individually they all sound right. **Lining them up to insert someone else's rules made it visible.**

## So: into one agent, not globally

Where to put the surviving line was also **measured, not assumed.**

The result was bad. **A global instruction survives into child processes that replace the system prompt wholesale.** And **there is no way to switch it off.**

So globally it would also catch test-case generation and QA automation — **work whose entire purpose is to build things.**

Hence: **into a single agent, not globally.**

## The detailed record starts here

**The headline number collapsed, and one line got adopted.** This repository's face is "−54% code"; recomputed under the definition its own report declares, it's −35.4% — and there is **no correctness gate** to begin with, since "did it write any code at all" is what counts as correct. Of four shortlisted lines, the only one whose evidence held is **"grep every call site,"** and even that went into a single agent rather than globally. What this investigation actually found wasn't a problem with their rule set but **three contradictions inside mine.**



## What it actually sells

**A prompt rule set that keeps "don't build it yet" resident in an agent's context.** It doesn't inspect or modify code — the product is **one 120-line text file** containing the ladder above, and the rest of the repository is plumbing that installs that text into twenty agent hosts and keeps it current.

**92,133 stars**, 5,069 forks, 9,166 weekly npm downloads. Seven weeks old.

Two conditions attached to the ladder separate this from plain "build less."

- **The ladder runs *after* you understand the problem** — reverse that order and it's just carelessness
- **Laziness means writing less answer, not doing less reading** — bug fixes are nailed down as "root cause, not symptom; grep every call site"

There's also a **do-not-cut list**: trust-boundary input validation, data-loss error handling, security, accessibility, hardware calibration knobs. It marks the places where minimalism turns dangerous itself.

### Two things that looked different up close

**The rule text isn't in one place.** Besides the file called canonical, rules are spread across a separate conventions file (which more than half of the twenty hosts actually load), a JS fallback copy, and five auxiliary skills. **Three or four locations.** Narrowed to one host the canonical file holds, but across the repository it doesn't match the "one page" impression.

**The intensity levels barely differ.** Three tiers are sold — lite, full, ultra — and the actual injected text is 5,202 / 5,229 / 5,267 characters. **A 65-character spread, 1.2%.** That's rhetoric, not content. Diffing full against ultra at runtime gives **three lines out of a hundred**, and none of those three says anything about handling fewer edge cases.

## The headline number swapped definitions

**"−54% code"** is this repository's face. Both the report and the README declare that figure to be a **per-task average.**

Computing it from the published twelve-task table, the per-task average is **−35.4%.** The −54% is a **total weighted by baseline line count.** The definition declared and the arithmetic performed are not the same.

And of that −54%, **17.7 points come from two tasks** — a date picker and a colour picker. Drop those two and it's −36.5%; take only the six backend tasks and it's **−22.2%.**

But there's a more fundamental problem underneath. **There is no correctness gate.**

```python
sc = {"correct": 1 if stats.get("total_loc", 0) > 0 else 0, "safe": 1, "reason": "git-diff"}
```

`correct` means **"did it write any code at all"** and `safe` is a **hardcoded constant 1.** Nothing anywhere in this benchmark shows that a 23-line date picker actually satisfied the ticket.

The author knows about the hole. There's a separate script for it, with a comment calling *"you wrote less because you did less" the most credible attack on the headline number.* It has **never been reported.**

**The instrument is flawed too.** Counting code volume requires excluding tests, and the detector recognises only Python conventions and certain folder names — so frontend `*.test.tsx` files get **counted as source.** The harness declares that *"tests are counted separately, never as bloat"*, and that fails in exactly one language — **which happens to be the language of all six of its biggest wins.**

## The honesty is real; what's tilted all tilts one way

It's easy to dismiss this repository, and that would be wrong. The author **self-reported a contamination bug and superseded the entire earlier result set**, and published the unflattering data — that the effect converges on backend work, that one model gets **slower**, that another costs **38.7% more.** There's even a gate that **refuses to spend API budget at all** if the instrument fails its own self-test. That is well above the average for this genre.

**So what collapses isn't the honesty.** It's that **the aggregation method, the instrument choice, the task selection and the unreported items all lean the same direction.** One of those is a mistake; four in the same direction is a structure that produces a result.

Task selection especially. Rung four of the ladder **literally names a native date input as its example**, and the top headline task is "add a date picker." What's being measured isn't general minimalism — it's **the recall rate of that one sentence.** And of twelve tasks, the number where **minimalism costs you something** — accessibility requirements, hardware calibration — is **zero.**

The safety tier is the same story. The README says seven safety tasks and the reproduction command lists seven, and **the report presents six.** The missing one happens to be **the task the author built to answer a critic.**

The raw data isn't published. The re-scoring reproduction path the report advertises is **not executable by a third party.**

⇒ What survives in defensible form is roughly this: *on one small model, on frontend tickets replaceable by a native HTML input, **unverified** code volume drops a lot.*

## The one line that stayed, and why it survived

What got adopted is one line: **"grep every call site."**

The repo's own benchmark has this task. Two functions **share an internal debit routine**, the bug report names only one of them, and the scorer checks for an overdraft in **the one the report never mentions.** Fix only what the report names and you fail.

> **[도판]** This line survived because there was a control group. What transferred was the shape of the sentence, not its meaning.
>
> Success rate when the same instruction is reworded. With no rule, one in six; as flowing prose, zero in three; as an imperative work instruction, six out of six.

**The control group is what decides it.** The same meaning written as flowing prose — "trace the flow all the way through" — scored **zero in three.** Only the imperative form moved it to six out of six.

Why is this the only survivor on this page? Everything knocked down above is an aggregation problem on the **code-volume axis**, and this sits on the **quality axis**, where that problem doesn't apply. And two reviews arguing opposite conclusions **converged independently on this one item.**

Its limits go on the record too: **the repo's own benchmark, n=6, a single task, raw data unpublished.** It doesn't transfer to small models — that's a ceiling region where the baseline fails as well.

### Why the other three were dropped

- **Rung 2 (already here)** — **the repo's own benchmark failed to demonstrate any behavioural value.** Baseline and ponytail both reused the helper, and the duplication failure didn't reproduce
- **Rung 4 (platform native)** — the effect concentrates on replacing HTML form controls. My work is game-engine C#, Python tests and pipeline JS, where it doesn't apply
- **The one-liner reflex** — my own rules already cover it ("if you write 200 lines and it could be 50, rewrite it")

## What the investigation found was my own rule set, not theirs

Working through a wholesale adoption, I counted the places it collides with my rules. Three. But **something bigger turned up — my rule set already contradicts itself in three places, with no help from ponytail.**

| Axis | One side | The other |
|---|---|---|
| Configurability | **no configurability** that wasn't requested | tuning knobs go in config keys **even when equal to the code default** |
| Error handling | **no error handling for impossible scenarios** | **always, comprehensively, at every level** |
| Speculation | **nothing speculative** | unit, integration and E2E **all required**, 80% coverage |

All three are permanently loaded, and **nowhere is it defined which one wins.** So every turn, the model decides for itself.

**Settling those three comes before adding another clause.** And it hasn't been done — **the homework this investigation created is bigger than the one line it brought home.**

## So: not globally, but into a single agent

Rather than guessing how far a global rule reaches, I measured it. The result was bad: **global instructions survive into child processes even when the system prompt is replaced wholesale.** Put this in globally and it reaches test-case generation and QA automation without exception, and **there is no way to switch it off.**

Over there, "build less" *is* the coverage hole. In particular the line **"never stop for something you could answer with a default"** directly inverts my own rule, which is to stop and mark it "needs confirmation" when the spec doesn't say.

So it narrowed in three steps. **Global ❌ → project ❌ → one agent, the one that writes game code ✅.** Project scope failed because it doesn't isolate — the QA agents in that same project get caught with it. The content-authoring agent was excluded too: over there **volume is the value**, and on the verification side **the harness and fixtures are the asset.**

Even in that one agent, two lines were dropped. **"As few files as possible"** runs straight into my rule to split files small, and **"never stop"** runs into the first rule I have, which is to stop when something is unclear. **A collision that survives narrowing the target isn't fixed by narrowing the target.**

⚠ I got one measurement wrong along the way. The first probe reported that global rules *don't* propagate to children — a false negative caused by **asking two things in one question.** A same-question control corrected it. **Probes ask one thing at a time.**
