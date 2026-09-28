# S4 · Adversarial review

> Three lenses — structure, quality, source — read at once and stay out of each other's territory. One judge filters their findings into a fix plan.

- Headline number: 3 lenses
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s4/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s4/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**S4 rereads the test cases the previous stage produced, looking for faults on purpose. Three viewpoints read at the same time without entering each other's territory, and a single judge filters what they find into a fix plan that a program can apply exactly as written.**

*Adversarial* comes from that stance. This is not a review that gives the work the benefit of the doubt; it is one that **reads in order to find what is wrong.**

## Code flags, three lenses read, one judge settles

1. **Code goes first** and flags suspicious cases — exact duplicates, cases with no visible basis in the spec, cases missing a real item name. It only flags them; the AI decides what to do
2. **Three viewpoints read simultaneously** — structure, quality, comparison against the source
3. **A single judge makes the three argue against each other**, drops the findings that do not hold up, and writes the fix plan
4. If the review raised new questions, they get **looked up once more in the internal wiki** before any person sees them

At step 2 the three **cannot see each other's results.** Seeing each other makes opinions converge, and **converged opinions miss the same things together.**

## The three lenses stay out of each other's territory

There used to be **two review rounds**: the first asked *is anything missing*, the second *is the content right*. Now there are no rounds. **All three lenses run at once**, and each one is told **not to step into another lens's territory.**

| Lens | Asks | Looks at |
|---|---|---|
| **Structure** | Does it hold together | Categories, the spread of normal / negative / exception cases, identical cases |
| **Quality** | Are the sentences right | Can a person follow it as written, vague words like *properly*, one check per case |
| **Source** | Does it match the spec | Numbers and wording as written, things in the spec but missing, things the spec never says |

The reason for splitting has not changed: **ask one reader for everything and only the easy half gets done.**

*Is anything missing* means **sweeping the whole spec**, which is hard. *That sentence reads awkwardly* is **visible while reading.** Ask for both and the second kind naturally piles up. Split them, and the source lens has no way to talk about sentences — that is not its territory.

Even the current design first ran the three **one after another.** None of them needs the others' output, so since August 2026 they run side by side, and that stretch now takes roughly 9.9 minutes less per run (the middle value across measured runs).

## A finding has to come with a prescription

An important design decision.

The next stage — applying fixes — is not an AI but **a program that does exactly what it is told.** It makes no judgements of its own.

So a finding cannot stop at **"this sentence is odd."** It has to arrive as **"change this sentence to this."**

Each lens attaches a suggested fix to every finding. The **judge** gathers them into a **fix plan** shaped as *this case, this cell, from the text it holds now, to this text* — and along the way it sets the findings against each other and **throws out the wrong, the duplicated and the not worth doing.**

| | Result |
|---|---|
| Finding only | **Someone has to judge all over again** → different every time |
| **Finding plus prescription** | **Executed as given** → reproducible |

The purpose is **concentrating the judging into one seat**, and that seat is the judge. Judgement scattered across stages means **you cannot trace what changed where.**

If the judge cannot write the fix plan in the agreed format, it gets one more try. **If the second try fails as well, the run stops right there.**

## Skip the format contract and the next stage dies

What this stage cost.

Exclusion reasons were left **free-form** — *leaving this out because…*

Different AIs wrote them differently. Some wrapped them in brackets, some wrote long narrative.

**And the next stage stopped while reading them.** It was not the shape it expected.

**The price of not writing a specification.** *Write whatever seems right* **does not hold whenever there is a reader.**

## The review reads with a list of how often each mistake has recurred

Many review findings **have come up before.** So a separate list keeps the recurring ones, and that list carries **a promotion path.**

| When the same finding has occurred | Then |
|---|---|
| Once or twice | Just fix it |
| **Repeatedly** | **Promote it to a rule** — stop it being written that way at all |

Why that is needed: **catching and fixing each time costs each time.** And **the one time it is not caught, it ships.**

**A recurring finding is not something to catch in review — it is something to prevent.**

But **you cannot know what recurs without counting.** Fix it and move on and it leaves no trace in memory. So **the counting device is separate.**

The three lenses **read this list before they start**, and each checks, within its own territory, whether a listed mistake has turned up again.

To be honest about it: **the review does not write to this list itself.** The review rulebook still says *record it when you finish*, but the lenses today never receive that rulebook — they are told to **write nothing except their own result file.** Filling the list runs separately: it compares the sheets people corrected by hand while testing against the final version the pipeline delivered, and pulls out candidates. Anything goes onto the list **only when a person says so.**

## The ledger is built here too

Joining specification rules to cases happens here.

It is **not a mechanical number match** but **judging whether that case genuinely verifies that rule** — so the AI does it.

## New questions from the review get one more lookup before a person sees them

Reviewing turns up new cases where *the spec alone cannot settle the expected result.* Those get marked **needs spec confirmation**, and they end up on the list of questions that goes to the designers.

The lookup against the internal wiki used to happen **once, during design.** Questions born later, in review, went to a person **without ever being looked up.**

Since September 2026, **just before the fixes are applied**, the questions the review newly added are pulled out on their own and looked up in the internal wiki again. It has to happen before the fixes, so that an answer can still fill in the case's expected result. Without a confident answer nothing gets made up — **the question goes to a person as before.**

There is a limit. The reason the reviewer wrote becomes **the search query word for word**, so a reason that never says what it is asking about finds nothing.

## The detailed record starts here

Code extracts candidates first — exact duplicates, cases with no basis in the source, missing item names. On top of that, three lenses review in parallel (structure, quality, source comparison). A judge makes their findings refute each other and emits a fix plan. The three lenses and the judge run on Sonnet; only the judge runs at high effort. If the judge's output fails format validation twice, the run fails (as of 2026-09).

## First and second passes then, three lenses now — none looks at the others

In the old version (v2), review ran as two passes, each with an **explicitly assigned set of checks.**

| | The question | What it looks at |
|---|---|---|
| **First** | Is anything missing? | Coverage, taxonomy consistency, verification-stage distribution |
| **Second** | Is the content right? | Sentence quality, duplication, one verification point per case |

Even then each **explicitly stayed out of the other's territory.** The second pass didn't re-examine structure; the first didn't examine sentence quality. The only structural work the second pass did was checking, one to one, whether the first pass's findings had actually been applied.

Now (as of 2026-09) there are no passes. The structure, quality and source-comparison lenses run at once, and every lens prompt carries *do not intrude on another lens's territory.* Their inputs and outputs are independent, so since 2026-08-09 they run in parallel — the lens stretch is a median 9.9 minutes shorter per run than it was in sequence. The between-pass *was it applied* check is gone as well: one judge settles the fix plan, and deterministic code in S5 applies it.

The reason is simple. **Told to look at everything at once, it looks at everything badly.** On a long sheet the front is thorough and the back gets blurry — narrowing the axis reduces that.

There are ratio thresholds too — carried by the first pass then, by the structure lens now. A high-risk leaf whose negative and exception cases fall below 60% raises a finding, because people drift toward writing only the happy path. The threshold lives in an excerpt of the review rulebook; the chain never reads the rulebook itself at runtime, and the lens wording is baked into the workflow code.

## A finding has to come with a prescription

The repair stage is designed as **a coder that does not make judgements.** It executes prescriptions and nothing else. As of 2026-09 that coder is deterministic code, not an LLM.

So the reviewer must write, for every issue, **a prescription the repairer can execute verbatim.** "This part is ambiguous" doesn't qualify; it has to say which row, which column, changed to what. Today every lens finding must carry a suggested fix, and the judge turns those into patches — case number, column, current value, new value. The current value is there so that at apply time a cell that no longer matches gets sent back as a conflict instead of being edited.

Without that rule, **judgement happens twice.** The reviewer decides "this is a problem," and the repairer decides "so how do I fix it." When those two judgements diverge, the fix stops matching the finding — and checking that is a human's job again.

## Failing after the work is done

The coverage ledger is built here too — semantically joining spec rules to cases.

Asking for the whole rule set in one response **hit the output token ceiling.** The mapping finishes and then it **dies without being able to emit it.** It happened on three features, and with the retry on top, one of them lost 88.3 minutes outright.

**Failing after the work is done is more expensive than failing during it.** The first leaves partial results; the second loses 100% of it, and you find out late. Now the rules are cut into batches of 50, three run in parallel, and code merges the chunk results. A validator blocks chunks that overlap or touch rules outside their assignment. It does not block gaps — uncovered rules are judged separately, and S5 fills them by writing more cases.

## Skip the format contract and the next stage dies

Exclusion reasons were free text, so different agents wrapped them or wrote prose, and **the next stage stopped on a type error.** That is the price of not writing a spec.

Now an exclusion reason is **exactly one of three values.** The justifying sentence goes in a separate field.

And **"to be implemented later" is not a valid exclusion.** That's a case you write and withhold judgement on, not a reason to skip writing it. Skip it and nobody in the next version knows it ever existed.

## Every finding is counted by how often it recurs

Patterns that get found **accumulate in a queue.** And that queue has a promotion procedure.

1. Found once → one line in the observation list
2. **Recurs twice or more** → promoted to the active pattern list
3. Every three months, active patterns are folded into the rule documents and dropped from the queue
4. Folded into the rules and **it happens again** → back to the queue, flagged as recurring

Step 4 is the point. If the rule was changed and the same thing still appears, **the rule is either unread or ambiguous** — and the next move is not to strengthen the wording but to **escalate it to a machine check.**

The queue currently holds entries at ten and thirteen recurrences. That number is itself information: **when the same finding has come up more than ten times, it is not the writer's problem, it is the rule's.**

One caveat (as of 2026-09): the review inside the chain only **reads** this queue. Each lens gets a copy and checks for recurrences in its own territory, but is told to write nothing except its output file. The review rulebook still says *add it to the queue when you finish*, yet the chain does not read that rulebook at runtime. Writing to the queue is done by a collection command outside the chain — it compares the sheets QA corrected by hand during testing against the pipeline's final version and proposes candidates, and registration happens only when a person explicitly asks.
