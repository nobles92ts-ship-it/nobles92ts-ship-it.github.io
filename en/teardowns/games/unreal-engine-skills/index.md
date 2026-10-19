# Unreal Engine Skills

> Three skills explain how Claude reaches Unreal Editor tools. I inspected the repository, exercised its startup hook, and reproduced a Windows timeout outside an Unreal project.

- Headline number: Editor untested
- Rendered page: https://aitryed.com/en/teardowns/games/unreal-engine-skills/
- Other language: https://aitryed.com/ko/teardowns/games/unreal-engine-skills/index.md
- Repository: https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**Unreal Engine Skills for Claude Code is a plugin that teaches an AI assistant how to work inside Unreal Editor, the application used to build game worlds, assets, and interfaces.** It guides Claude through finding and calling editor tools. The engine must supply the machinery that performs those actions.

For this review I read the repository and ran its project-detection script against temporary folders. **I did not connect an editor or execute game tests.** The useful finding is where the instructions end and a working integration still has to begin.

> **[도판]** Instructions, transport, and executable tools must meet. Downloading this repository alone does not fill the editor side of the diagram.
>
> Claude reads the plugin's instructions and calls Unreal Editor tools through MCP. Instructions in this repository and executable tools in the engine are separate layers.

## The assistant chooses work inside the game-making application

Ask for the objects in the current level, and the intended flow is to find a suitable query tool, inspect its inputs, and request the information from the editor. Asset edits follow the same route. MCP is the protocol carrying those requests and their results.

The advertised surface covers many editing domains. Its breadth should not be confused with how much implementation this particular repository contains. The connected engine and its enabled plugins decide which tools are available.

| Task | Guidance supplied here |
|---|---|
| Inspect a level or its assets | Discover relevant editor queries |
| Edit a Blueprint or material | Check the schema before dispatch |
| Expose another capability | Read the tool-authoring skill |
| Follow a project's working conventions | Discover its registered Agent Skills |

## Check the engine before treating installation as completion

The checked-out revision contains three skills: using the editor, authoring tools, and authoring project instructions. A Bash startup hook detects Unreal project markers above the working directory.

**The engine plugins and their binaries are not shipped in this repository.** Whether a particular engine installation has them remains a separate question. I cannot infer a minimum supported engine release or compatibility with every launcher build from the files I read.

## A visible connection still needs a live query

An optional proxy can preserve the client-facing session when Unreal stops. A displayed tool catalog may therefore be cached. Seeing the menu is not enough to establish that the kitchen is open.

Before requesting an edit, ask the editor to return a small piece of information and check the response. This is a useful integration habit even outside game tools: connection state and successful work are different observations.

## I exercised the startup script with temporary project markers

I arranged six folder conditions without opening Unreal. Four project-bearing conditions returned the expected context. Two folders without project markers exceeded a six-second limit.

Tracing the script led to its file expansion at the filesystem root. A controlled variation completed after changing that root spelling. **These are observations from one Windows Git Bash environment.** They do not establish a failure of Unreal Editor, or behavior on every supported operating system.

## The first useful adoption step is small enough to inspect

My proposed pilot starts with an isolated, version-controlled project: establish the connection, perform a query, change one asset, and read the resulting state back. Batch editing comes later.

QA needs an additional distinction. An interface that launches automation tests does not by itself establish coverage of player input, backend processing, or final game outcomes. Each test still needs its own completion condition and evidence.

## The detailed record starts here

The review is pinned to commit `a6aa73ada02a9fb1f5415bec491f9942c519b297`, retrieved on 2026-10-19. The manifest reports version `3.1.1`. [Repository at the reviewed revision](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/tree/a6aa73ada02a9fb1f5415bec491f9942c519b297)

## The twelve tracked files reveal an implementation boundary

`git ls-files` returned 12 paths, including three `SKILL.md` files and no `.uplugin` descriptor. Those are repository counts, not a measurement of the engine's tool catalog.

| Location | Observed responsibility |
|---|---|
| `skills/unreal-mcp/SKILL.md` | Discover and invoke live editor tools |
| `skills/create-toolset/SKILL.md` | Design, implement, and test tool interfaces |
| `skills/unreal-skill/SKILL.md` | Author Agent Skills registered inside Unreal |
| `hooks/unreal-context.sh` | Recognize project markers and emit session context |

The README's Contents section lists only the first skill. The checked-out tree contains the other two as well. Comparing the inventory with the introduction prevented an incomplete description of the package. [Pinned file tree](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/tree/a6aa73ada02a9fb1f5415bec491f9942c519b297)

## Tool discovery makes the current interface the source of truth

Default search mode begins with `list_toolsets`, `describe_toolset`, and `call_tool`. A known toolset can go directly to schema inspection. Project Agent Skills have their own discovery path. [Runtime instructions](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/blob/a6aa73ada02a9fb1f5415bec491f9942c519b297/skills/unreal-mcp/SKILL.md)

The lesson I would carry over is to inspect the callable interface immediately before using it. I did not benchmark the stated context or cache benefits, and the advertised catalog size should not be read as a locally verified count.

## Transport and tool providers require separate setup

The setup guide pairs the engine's `ModelContextProtocol` transport with `AllToolsets`, or selected individual toolsets. Client configuration is generated from the editor. No static `.mcp.json` is included here. [Setup guide](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/blob/a6aa73ada02a9fb1f5415bec491f9942c519b297/skills/unreal-mcp/references/setup.md)

The guide also names Codex as a configuration target. That does not establish that Claude Code's installation command and hook mechanism install unchanged in another client. Generating transport settings is one part of an integration; loading client-specific instructions is another.

## Four original-hook conditions completed and two timed out

I ran the unmodified hook under Git Bash `5.2.37`, checking exit status and the emitted JSON context. The project files were empty markers in temporary directories.

| Fixture | Result |
|---|---|
| Project root, `.uproject` filename containing a space | Correct project name; exit 0 |
| Nested `Source` directory | Ancestor project found; exit 0 |
| `Content` directory under a project with `.mcp.json` | Configuration-presence note; exit 0 |
| Deep engine module below `GenerateProjectFiles.bat` | Engine-tree context; exit 0 |
| Ordinary folder without Unreal markers | Exceeded 6,000ms |
| Bare `Engine` folder without root markers | Exceeded 6,000ms |

A minimal comparison finished the `/*.uproject` expansion in 49ms. The `//*.uproject` form exceeded 3,500ms. Replacing the root-glob expression only in an in-memory copy made the two previously timed-out fixtures exit silently in 370ms and 400ms.

This isolates a reproducible relationship between root spelling and the delay on this machine. It does not prove the underlying network behavior or a Windows-wide defect. I neither modified upstream nor opened an issue. The registered hook has a five-second timeout, so starting outside an Unreal project deserves attention in this environment. [Hook source](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/blob/a6aa73ada02a9fb1f5415bec491f9942c519b297/hooks/unreal-context.sh), [hook registration](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/blob/a6aa73ada02a9fb1f5415bec491f9942c519b297/hooks/hooks.json)

> **[도판]** The script was executed. The editor and the game were not. The controlled variation is diagnostic evidence, not a released fix.
>
> Original hook: four completed fixtures and two timeouts. In-memory root-normalized control: two completed fixtures. Live editor and game tests were not run.

## A QA integration still needs a result it can read back

The authoring guides separate callable tools from reusable project knowledge. They ask tool authors to avoid duplication, use concrete types, handle errors, and provide tests. [Tool-authoring guide](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/blob/a6aa73ada02a9fb1f5415bec491f9942c519b297/skills/create-toolset/SKILL.md), [Agent Skill guide](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin/blob/a6aa73ada02a9fb1f5415bec491f9942c519b297/skills/unreal-skill/SKILL.md)

My proposed QA sequence is to read the initial state, request a small action, inspect its completion result, and query the changed state. A server-authoritative feature would need evidence from that side as well. This sequence is a design proposal; no new QA capability was delivered in this review.

## Compatibility and practical benefit remain open

I did not exercise editor startup, a live MCP round trip, Blueprint compilation, asset persistence, or proxy recovery. Supported engine builds and cross-client behavior remain unverified. Mutation trials should begin with a recoverable project state, particularly for execution paths that allow Python inside the editor.

**My current verdict is a candidate for a connection-and-query pilot.** The concrete return from the review is a sequence of checks, plus one narrowly reproduced hook problem. It is not a completed installation or a measured improvement in game testing.
