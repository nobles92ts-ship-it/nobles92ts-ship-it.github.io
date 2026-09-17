# S4 · Adversarial review

> The first and second passes deliberately don't look at each other's territory. And every finding gets counted by how many times it has recurred.

- Headline number: 3 lenses
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/tc-team/s4/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/tc-team/s4/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Finished cases get reviewed adversarially. The first and second passes deliberately do not look at each other's territory. And every finding is counted by how many times it has recurred.**

## The order

1. **Code filters first** — exact duplicates, cases with no basis in the source, missing real item names
2. **Three viewpoints read simultaneously** — structure, quality, comparison against the source
3. **A judge makes the three argue against each other** and produces a fix plan

At step 2 the three **cannot see each other's results.** Seeing each other makes opinions converge, and **converged opinions miss the same things together.**

## The first and second passes do not look at each other

Two review rounds, with **territory explicitly divided.**

| | Asks | Looks at |
|---|---|---|
| **First** | **Is anything missing** | Coverage, whether categories hold, distribution across verification stages |
| **Second** | **Is the content right** | Sentence quality, duplication, one verification point per case |

Why divided: **ask for both and only the easy half gets done.**

*Is anything missing* requires **sweeping the whole thing**, which is hard. *That sentence reads awkwardly* is **visible while reading.** Asked together, **naturally the second kind piles up.**

Divided, **the first pass cannot talk about sentences.** It is not their territory.

## A finding has to come with a prescription

An important design decision.

The next stage — applying fixes — is built as **a worker that does not judge.** It **does only what it is told.**

So a finding cannot stop at **"this sentence is odd."** It has to arrive as **"change this sentence to this."**

| | Result |
|---|---|
| Finding only | **The fixing stage judges for itself** → different every time |
| **Finding plus prescription** | **Executed as given** → reproducible |

The purpose is **concentrating the judging into one seat.** Judgement scattered across stages means **you cannot trace what changed where.**

## Skip the format contract and the next stage dies

What this stage cost.

Exclusion reasons were left **free-form** — *leaving this out because…*

Different AIs wrote them differently. Some wrapped them in brackets, some wrote long narrative.

**And the next stage stopped while reading them.** It was not the shape it expected.

**The price of not writing a specification.** *Write whatever seems right* **does not hold whenever there is a reader.**

## And every finding is counted by how often it has recurred

The best device in this stage.

After a review, **the kinds of finding raised are recorded to a list.** And that list carries **a promotion path.**

| When the same finding has occurred | Then |
|---|---|
| Once or twice | Just fix it |
| **Repeatedly** | **Promote it to a rule** — stop it being written that way at all |

Why that is needed: **catching and fixing each time costs each time.** And **the one time it is not caught, it ships.**

**A recurring finding is not something to catch in review — it is something to prevent.**

But **you cannot know what recurs without counting.** Fix it and move on and it leaves no trace in memory. So **the counting device is separate.**

## The ledger is built here too

Joining specification rules to cases happens here.

It is **not a mechanical number match** but **judging whether that case genuinely verifies that rule** — so the AI does it.

## The detailed record starts here

Code extracts candidates first — exact duplicates, cases with no basis in the source, missing item names. On top of that, three lenses review in parallel (structure, quality, source comparison). A judge makes their findings refute each other and emits a fix plan.

## The first and second passes don't look at each other

Each review pass has an **explicitly assigned set of checks.**

| | The question | What it looks at |
|---|---|---|
| **First** | Is anything missing? | Coverage, taxonomy consistency, verification-stage distribution |
| **Second** | Is the content right? | Sentence quality, duplication, one verification point per case |

And each **explicitly does not look at the other's territory.** The second pass doesn't re-examine structure; the first doesn't examine sentence quality. The only structural work the second pass does is checking, one to one, whether the first pass's findings were actually applied.

The reason is simple. **Told to look at everything at once, it looks at everything badly.** On a long sheet the front is thorough and the back gets blurry — narrowing the axis reduces that.

The first pass also carries ratio thresholds. A high-risk leaf whose negative and exception cases fall below 60% raises a finding, because people drift toward writing only the happy path.

## A finding has to come with a prescription

The repair stage is designed as **a coder that does not make judgements.** It executes prescriptions and nothing else.

So the reviewer must write, for every issue, **a prescription the repairer can execute verbatim.** "This part is ambiguous" doesn't qualify; it has to say which row, which column, changed to what.

Without that rule, **judgement happens twice.** The reviewer decides "this is a problem," and the repairer decides "so how do I fix it." When those two judgements diverge, the fix stops matching the finding — and checking that is a human's job again.

## Failing after the work is done

The coverage ledger is built here too — semantically joining spec rules to cases.

Asking for the whole rule set in one response **hit the output token ceiling.** The mapping finishes and then it **dies without being able to emit it.** It happened on three features, and with the retry on top, one of them lost 88.3 minutes outright.

**Failing after the work is done is more expensive than failing during it.** The first leaves partial results; the second loses 100% of it, and you find out late. Now the rules are cut into batches of 50, three run in parallel, and code merges the chunk results. A validator blocks chunks that overlap or leave gaps.

## Skip the format contract and the next stage dies

Exclusion reasons were free text, so different agents wrapped them or wrote prose, and **the next stage stopped on a type error.** That is the price of not writing a spec.

Now an exclusion reason is **exactly one of three values.** The justifying sentence goes in a separate field.

And **"to be implemented later" is not a valid exclusion.** That's a case you write and withhold judgement on, not a reason to skip writing it. Skip it and nobody in the next version knows it ever existed.

## Every finding is counted by how often it recurs

When a review finishes, **the patterns it found go into a queue.** And that queue has a promotion procedure.

1. Found once → one line in the observation list
2. **Recurs twice or more** → promoted to the active pattern list
3. Every three months, active patterns are folded into the rule documents and dropped from the queue
4. Folded into the rules and **it happens again** → back to the queue, flagged as recurring

Step 4 is the point. If the rule was changed and the same thing still appears, **the rule is either unread or ambiguous** — and the next move is not to strengthen the wording but to **escalate it to a machine check.**

The queue currently holds entries at ten and thirteen recurrences. That number is itself information: **when the same finding has come up more than ten times, it is not the writer's problem, it is the rule's.**
