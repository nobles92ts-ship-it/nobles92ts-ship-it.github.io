# Harness2

> A research framework that changes prompts, tools, and working procedures while keeping model weights fixed. I traced its two improvement loops and paper claims, then tested where the unmodified Windows demo stops.

- Headline number: Records how it improves
- Rendered page: https://aitryed.com/en/teardowns/harness/harness2/
- Other language: https://aitryed.com/ko/teardowns/harness/harness2/index.md
- Repository: https://github.com/google-research/harness2
- Source (arxiv.org/abs/2610.14224): https://arxiv.org/abs/2610.14224
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**Harness2 is a research framework for improving how an AI model works without retraining the model.** Its harness is the surrounding bundle of instructions, tools, memory, and working procedures. The premise is that the same model can produce different results when that surrounding machinery changes.

It tries several ways of doing a task, revises the working manual, and **records what it learned about revising that manual** for later tasks. The paper reports performance gains. My own unmodified Windows demo runs did not complete. Those are different kinds of evidence, so this record keeps the paper's claims, source observations, and local results separate.

> **[도판]** The upper level changes how to solve the current task. The lower level retains experience from making those changes. Comparing executions and grading against ground truth are separate operations.
>
> Harness2 has two levels. For the current task, it runs a base harness, proposes and probes candidates, composes changes, and selects a final. A successful selection and evidence-supported reflection can enter the library for selective reuse in later improvement. Model weights remain fixed.

## It gives the model a different working manual

Suppose an AI produces a document but misses required sections. Instead of training a new model, you could add an instruction to check the outline before writing, or provide a script that checks the output. These are the sorts of execution conditions Harness2 edits.

The editable surface goes beyond a prompt sentence. It includes when tools should be used, how work should be delegated, and which skills and scripts should be available. **Fixed weights leave plenty of room to change the machinery around the model.**

## Improving this task and remembering the experience are separate loops

The first loop works on the current task. It inspects a base execution, proposes alternatives, runs them on that task, and uses the resulting artifacts and traces to compose supported changes. Keeping the original harness is also an option.

The second loop stores the experience: what changed, when it was useful, and which evidence supported it. A later task starts from the base harness and consults earlier experience during improvement. **The previous winner does not automatically overwrite every future task's setup.**

## Self-improvement does not promise that every revision is better

The improvement process is not given ground-truth answers or grading rubrics. It works from observable signals such as whether a requested file was delivered or whether more requirements were covered. Those judgments can be wrong.

The paper's performance figures come from separate evaluation afterward. In the default configuration, a single valid final can even pass through without a selector-model comparison. **Producing a candidate and demonstrating a gain over the original are different achievements.**

## Completing the workflow remains the first test here

I ran the credential-free demo in two modes on Windows. The small Python programs actually executed, but both tasks in each mode ended in failure. There was no final adopted result.

The documented platform is Linux. This does not refute the research results, and it does not establish a successful local run. My adoption decision is **deferred**, pending an unmodified Linux run and independent evaluation.

## The detailed record starts here

The source snapshot is [commit 1cfe254](https://github.com/google-research/harness2/tree/1cfe254e8d25b15f37048c3730134686abe60335), inspected on 2026-10-19. The package version is `0.1.0`; the paper is [arXiv v1](https://arxiv.org/html/2610.14224v1). This is research in a Google Research repository. Its README explicitly says it is not an officially supported Google product.

## Eight editable roles become files that can be tested in execution

OpenCode exposes eight roles, grouped below. The Codex surface combines always-on text in `AGENTS.md` and uses corresponding mechanisms such as hooks in place of plugins. The conceptual roles do not imply identical file layouts. [Editable surface](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/prompts.py#L98-L124)

| Editable roles | What they change |
|---|---|
| System prompt and guardrails | Default behavior and constraints |
| Long-term memory and tool guidance | Retained information and tool-use instructions |
| Subagents and skills | Delegation and procedures loaded when needed |
| Scripts and plugins | Executable helpers and tool-loop machinery |

The invariant candidate targets general agent problems; the domain-specific candidate addresses procedures and constraints of the current work. The composer need not merge both. It can take only supported edits or retain the existing harness. [Paper §2.2.1](https://arxiv.org/html/2610.14224v1#S2.SS2.SSS1)

## k describes an execution plan rather than an API-call count

For a fresh single-mode run, the normal plan contains `4k` rollout slots and `3k` improvement stages per task. At `k=2`, that means two base executions, four candidate executions, and two composition executions: **eight slots**. Parallel mode proposes candidates from the same base evidence; sequential mode continues improvement from the preceding composition.

Selection, reflection, grading, and retries require separate accounting. When both modes share one `run_task`, the two base executions are reused, giving 14 unique slots at `k=2`. That differs from starting two fresh runs, as I did locally. **I did not convert rollout counts into model-request counts or a cost multiplier.** [Scheduler](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/schedule.py#L619-L648), [Recursion implementation](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/recursion.py#L343-L565)

## Final selection does not enforce improvement over the base

The default `finals` pool contains compositions only. It does not include the base rollout as a separate final contender. At `k=1`, one surviving valid final is selected without a selector-model session. **That selection alone cannot establish superiority to the base execution.** This is compatible with the composer retaining the original harness. [Selection pool](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/selection.py#L93-L111), [Single-candidate path](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/selection.py#L360-L398)

A selection-error fallback is not normal success either: that path does not turn `ok` into `True`. Adding an adopted tree and experience to the library requires successful selection and a reflection with a nonempty `cue`, `lesson`, and `evidence`. An output file's existence is insufficient evidence of successful learning. [Storage conditions](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/schedule.py#L529-L563)

## The three headline gains use different models and units

These are the **authors' maximum reported increases at k=1**, each relative to the corresponding model's base harness. I did not reproduce them. [Table 1](https://arxiv.org/html/2610.14224v1#S3.T1), [Table 2](https://arxiv.org/html/2610.14224v1#S3.T2)

| Benchmark and model / executor | Base → Harness2 | Increase |
|---|---|---|
| WorkBuddy mean · GLM-5 / OpenCode | 64.2 → 75.7 | +11.5 score points |
| JobBench · Gemini 3.5 Flash / OpenCode | 31.5 → 36.0 | +4.5 score points |
| LAB Partial · GLM-5 / OpenCode | 59.6% → 71.4% | +11.8 percentage points |

LAB Partial measures criteria passed, not whole tasks fully completed. Improvement receives no ground-truth feedback; separate verifiers and judges produce the reported scores. The paper also documents mistaken selections and regressions. Its final executor `#Steps` cannot stand in for total cost, which must include candidate executions and editing. [Evaluation setup](https://arxiv.org/html/2610.14224v1#A2), [Failure cases](https://arxiv.org/html/2610.14224v1#A5.SS6), [Total-token comparison](https://arxiv.org/html/2610.14224v1#S4.F6)

## Thirty-two local Python executions produced no completed improvement task

On Windows with Python 3.13.12, I ran unmodified parallel `k=2` and sequential `k=2` demos in separate fresh output roots, without installing dependencies. **Both exited with code 1; each recorded zero completed and two failed tasks.** Each mode counted 16 local Python executions and 24 scripted-editor calls. No remote model was called.

The final exception was a missing POSIX-only `fcntl` module. Before that, a read-only check of the original `read_tree` also confirmed four rejected README stubs caused by Windows path separators. Execution answers remained at the pre-edit totals, 105.25 and 35.50. There was no final `summary.json` or selected winner. This was not a demonstrated improvement followed merely by a storage failure. [Path handling](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/tree.py#L127-L148), [Locking](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/schedule.py#L289-L329)

I also attempted the original workflow file's five test methods; the suite failed. Its four failures and three errors include subtests, so they do not mean seven independent tests. There was no running Linux Docker daemon available for an additional Linux check. **These are incomplete Windows runs, not a failure verdict for supported Linux.** The demo itself uses a predetermined local editor and does not measure a general model's ability to discover improvements. [Original tests](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/tests/test_workflow.py), [Demo implementation](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/demo.py#L86-L163)

> **[도판]** The 32 Python executions add up two separate fresh runs. They are neither remote model calls nor 32 successful improvements.
>
> Three separate evidence categories. The paper reports benchmark gains. My Windows tests completed zero tasks in each of two modes, with 16 local Python executions per mode and no final selection. Supported Linux, real model runs, and benchmark performance remain unverified here.

## Withholding a rubric does not prevent fetching it elsewhere

The official guide records **a release-validation Codex JobBench rollout downloading public `RUBRICS.json` without being instructed to do so**. The public release does not restrict network access. Its Codex launcher also bypasses the sandbox, so file validation must not be read as execution isolation. [Web-access record](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/docs/EXPERIMENTS.md#web-access), [Codex arguments](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/third_party/lab_runner/adapt_runs_cx/run_codex_lab.py#L292-L310)

I found no evidence that this was the same run used for the paper's tables. It does not establish that the paper's aggregate results were contaminated. It does establish a reproduction concern: dataset revisions and splits need to be accompanied by network restrictions and records. Excluding answers from the supplied context and preventing access through other routes require separate checks.

## The useful design keeps edits together with their reasons

Saving only harness files loses the reason they changed. Harness2 retains an adopted tree alongside applicability cues, lessons, and execution evidence. That is the design worth studying here.

For my QA work, the next step would be to complete the original Linux workflow, then compare the base and candidates on a small task set with ground truth kept separate. Total cost and regressions belong in that comparison. **I did not integrate this into QA or demonstrate better judgments in this investigation.** Those effects remain to be tested.
