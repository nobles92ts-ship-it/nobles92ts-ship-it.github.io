# REA

> REA helps agents investigate executables and applications. I inspected its implementation and tried a Windows binary and a small JavaScript fixture, keeping static findings separate from runtime claims.

- Headline number: 2 static probes
- Rendered page: https://aitryed.com/en/teardowns/qa/rea/
- Other language: https://aitryed.com/ko/teardowns/qa/rea/index.md
- Repository: https://github.com/morluto/rea
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**REA, or Reverse Engineer Anything, helps an AI agent investigate how a program works.** Reverse engineering means examining a finished artifact to understand its structure. REA accepts several kinds of artifacts and observations, then returns analysis with evidence and limitations.

For this review I read implementation paths and ran two static probes: a real Windows `whoami.exe` and a tiny JavaScript fixture I wrote. **I did not execute either target or observe its network traffic.** That boundary matters throughout the account.

> **[도판]** REA organizes several analysis tools into investigation workflows. Provider support and the meaning of each returned observation still need inspection.
>
> An agent or terminal calls REA's shared investigation workflows. Target-specific analyzers produce results that REA returns with artifact identity, provenance, and limitations.

## A finished application can reveal more than its screen

Suppose you want to understand how an application's search feature is connected. Its screen shows that results appear. Inspecting its artifacts can reveal input handlers, module relationships, and addresses embedded in code.

An embedded address still does not establish that a request reached it. File analysis can narrow the first question; an execution observation is needed for the second. REA provides several routes through these different kinds of evidence.

## Different targets need different analysis machinery

One interface connects the agent, but the tools behind it vary. A native executable and a JavaScript module do not have the same prerequisites.

| Target | Documented route and prerequisites |
|---|---|
| Native binary | Assembly, pseudocode, references; a provider such as Ghidra |
| JavaScript or Electron artifact | Modules, imports, static relationships; no native decompiler required |
| Website and running page | Page, script, and network observations; browser connection |
| .NET assembly | Static metadata and intermediate instructions |
| Android APK | Declarations, classes, methods; JADX and a full JDK |

These are documented routes. Only the first two were exercised here. A long catalog is not evidence that every operation works on every host.

## The evidence envelope helps frame the next question

REA wraps results in an `Evidence` record. Think of a label identifying the file, the analyzer, the method, and the remaining limitations.

That makes follow-up questions precise. Which artifact and source location support the answer? Which links are inferred? What remains unresolved? The envelope helps preserve those distinctions, but its existence does not make the conclusion true. Its contents still deserve review.

## Even a three-file fixture left important unknowns

I supplied a small JavaScript fixture. One function contains a fixed URL. Another receives its destination as an argument. REA located the literal URL and its code position; it retained uncertainty around the dynamic request.

The more useful observation was about completion. **The application graph said `complete`, while the deeper semantic graph reported `unknown`.** Those labels referred to different scopes. Finishing one graph did not establish a complete understanding of the program.

## A binary investigation continued beyond the API names

Windows `whoami.exe` displays user information. I opened its local file, searched for account-related APIs, queried references, and requested pseudocode for two functions.

Pseudocode is an analyzer's readable rendering of machine code. It is not a recovery of the developer's exact original source. One returned function included a type-propagation warning. I therefore report visible references and code representations, not an observed execution of Windows account services.

## My QA use would begin with a narrowly framed cause investigation

A failed test raises a second question: why did it behave that way? Artifact inspection and runtime evidence can help investigate that question together.

The return from this review is a way to preserve evidence while narrowing possible causes. No game tests were added and no production judge was improved. A practical adoption trial would start with one real question and a declared evidence requirement.

## The detailed record starts here

The source review is pinned to [commit e4c3d72396bf925a45724ce8b18b238b0d23d787](https://github.com/morluto/rea/tree/e4c3d72396bf925a45724ce8b18b238b0d23d787), retrieved on 2026-10-19. Its package manifest says `6.7.0`. **The connected server used for the probes was `rea-agents 6.5.0`**, reporting 207 MCP tools. Source findings and installed-release behavior are kept separate.

## The terminal and agent adapters share investigation code

In the feature-tracing path I read, the CLI and MCP entry points call the same application service. Domain logic derives the relationships, and a producer constructs the resulting Evidence. Two entry points do not imply two independent analysis engines. [Shared workflow service](https://github.com/morluto/rea/blob/e4c3d72396bf925a45724ce8b18b238b0d23d787/src/application/javascript/JavaScriptApplicationWorkflowService.ts#L37)

The useful design rule is to give an interpretation one owner. If a terminal result and an agent result reinterpret the same facts differently, comparing them becomes harder. I inspected the named tracing path; I did not verify adapter parity for the entire product.

## Record integrity does not guarantee a true conclusion

The Evidence schema validates artifact identity, provider, operation, parameters, raw and normalized results, confidence, authority, and limitations. Construction and parsing also calculate and verify content-derived identifiers. An internally consistent record can still contain a mistaken inference.

The implementation defaults confidence to `observed` and permits an empty limitations array. A reader must therefore inspect what the producer supplied. The feature-trace producer explicitly uses `inferred`, `analyst-inference`, and links to its input evidence. The format and its interpretation both matter. [Evidence contract](https://github.com/morluto/rea/blob/e4c3d72396bf925a45724ce8b18b238b0d23d787/src/domain/evidence.ts#L127), [derived-result producer](https://github.com/morluto/rea/blob/e4c3d72396bf925a45724ce8b18b238b0d23d787/src/application/javascript/JavaScriptApplicationWorkflowEvidence.ts#L13)

## The native probe finished with the input bytes unchanged

The environment was Windows x64, REA `6.5.0`, and Ghidra `12.1.4`. The input was a 98,304-byte x86-64 PE `whoami.exe`. The sequence was open, overview, symbol search, reference queries, two pseudocode requests, and close. The target was not launched.

| Check | Returned observation |
|---|---|
| Provider inventories | 341 procedures and 308 strings |
| Account-related API search | `OpenProcessToken`, `GetTokenInformation`, `LookupAccountSidW`, `GetUserNameExW` |
| Reference queries | Addresses referring to token and SID APIs |
| Pseudocode | Functions at `0x140003bc0` and `0x140005e1c` |
| Preservation | Input SHA-256 unchanged; session closed |

The input digest was `23240ef9f8b0a9a324110b1c2331de31dc1b0e08f5359cb707e51a939af56cd3`. Overview Evidence ID: `ev_e2a77bec26ce4055d8c40d4469bfff07516e243d2ddc236abd15218219a1444c`. Procedure counts describe the provider's inventory, not a recovered original function count.

The `observed` label on a pseudocode result means the representation was obtained from the analyzer. It does not mean the function ran. This probe established neither DLL internals nor registry or network behavior. [Windows Ghidra boundary](https://github.com/morluto/rea/blob/e4c3d72396bf925a45724ce8b18b238b0d23d787/docs/windows-ghidra-p0.md#L9)

## The JavaScript probe returned completion and uncertainty together

My fixture comprised `package.json`, `main.js`, and `store.js`. The two JavaScript files contained a literal fetch destination, a destination supplied as input, and a call to a file-saving function. The analyzer read 586 text bytes and reported zero parse failures.

It located `https://example.invalid/health` at line 11 of `main.js`. The `fetch(endpoint)` expression at line 4 retained a partially resolved request unknown. No request was sent and the save function was not invoked.

| Scope being assessed | Reported state | Interpretation in this review |
|---|---|---|
| Application graph | `complete`, zero omitted | Completion within that graph's reported scope |
| Semantic graph | `unknown`, 22 unknown records | Unresolved details in values, calls, and relationships |
| Actual execution | Not tested | Cannot be established from visible syntax |

The 22 records are not 22 application defects. They preserve unresolved input values, dynamic calls, external behavior, and related static boundaries. Probe Evidence ID: `ev_5db40f819569c3d83934d078a0d0ce1e8b6251c62cc8e4113addc5bd8f59bfc5`; top-level confidence: `derived`. [Graph evidence rules](https://github.com/morluto/rea/blob/e4c3d72396bf925a45724ce8b18b238b0d23d787/docs/javascript-application-graph.md#L129)

> **[도판]** Completing a graph, resolving meaning, and observing behavior are separate achievements. The first label cannot substitute for the other two.
>
> The same JavaScript fixture returned a complete application graph, an unknown semantic graph, and no runtime test. These labels answer different questions.

## Installed instructions and available tools have separate identities

The documented setup entry point is `npx rea-agents setup`. Its workflow presents configuration changes, registers MCP and matching instructions, and requires reconnecting the agent. A skill file alone does not establish a server connection. Native work also needs an analysis provider. [Installation guide](https://github.com/morluto/rea/blob/e4c3d72396bf925a45724ce8b18b238b0d23d787/docs/installation.md)

I used the existing connection and did not upgrade tools or rewrite configuration. Calls followed the connected server's actual schemas. The repository itself warns that main's skill may describe features absent from an older release. [Version boundary in the skill](https://github.com/morluto/rea/blob/e4c3d72396bf925a45724ce8b18b238b0d23d787/.agents/skills/reverse-engineer-anything/SKILL.md#L18)

## The return is an evidence-preserving investigation method

An ordinary repository with sufficient source can be investigated through normal searches and code reading. REA becomes useful when the question depends on shipped artifacts, or on connecting code with an execution observation that the available material does not yet establish.

My verdict is that static exploration and cause investigation are useful adoption candidates. Those routes worked on the two supplied probes. Browser and Electron runtime observation, APK and firmware analysis, other native engines, the complete source test suite, and production game QA integration remain untested. I measured neither a speed improvement nor an accuracy gain.

**The rule worth carrying over is to preserve the target, method, and unknowns with every answer.** This review checked that rule in source and two probes. It did not validate the whole catalog or integrate a QA pipeline.
