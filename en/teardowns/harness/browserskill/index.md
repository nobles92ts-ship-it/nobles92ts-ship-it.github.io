# BrowserSkill — lending an agent my browser

> Tencent's tool lets an agent drive the Chromium I am already signed into. The design is good. Then I opened the source and found the doorman checking the costume instead of the face — and a comment where the authors admit it.

- Headline number: on hold · 2 harvested
- Rendered page: https://nobles92ts-ship-it.github.io/en/teardowns/harness/browserskill/
- Other language: https://nobles92ts-ship-it.github.io/ko/teardowns/harness/browserskill/index.md
- Repository: https://github.com/Tencent/BrowserSkill
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**BrowserSkill is a tool Tencent open-sourced in June 2026, and it lets an AI assistant drive the browser on my own machine.** The interesting word is not *browser*, it is **my** — it does not launch a clean one, it uses the Chromium I am already signed into.

Which creates an immediate problem. While the agent is using my browser, **what am I supposed to do?** A tab that wanders off mid-sentence is not an assistant, it is an interruption. The problem this tool actually solves is not "drive the web" — it is **"two parties share one browser."**

> **[도판]** The chain is long for compatibility, not for safety — cutting it at a shell command is what made the tool indifferent to which assistant you run.
>
> How BrowserSkill is wired. The top row is a chain of five boxes: the AI assistant, a bsk shell command, a relay process, the browser extension, and finally my own Chrome with its logins intact. The bottom row shows the browser split in two: an agent-only window where the agent works, and my own windows which it cannot touch until it borrows a tab.

## Anything behind a login was the part agents could never reach

Driving the web from an agent is not new. But most approaches spin up **a clean browser nobody has signed into**. Public pages work. My inbox, my order history, anything that exists only after a login — those do not.

Two workarounds existed. **Give the agent its own test account** — useless, because the thing I want to see lives in *my* account. Or **hand over my username and password** — a line I do not cross.

BrowserSkill takes a third route: **use the session that is already open.** No credential ever changes hands, because no login ever has to happen again.

## So instead of a new browser, it builds a new window

This is the part the project got right. Rather than handing the agent the whole browser, it **opens a separate window and confines the agent to it.** Sign-in state belongs to the browser profile, so it survives into that window; the windows I was reading stay untouched.

|  | Usually | Here |
|---|---|---|
| Browser the agent drives | a fresh one, signed into nothing | **mine, still signed in** |
| The screen I was reading | shared, so it gets taken | **a different window, so it does not** |
| When the job ends | the mess stays | that window closes |

**The lesson is that partitioning comes before scheduling.** When two parties need one resource, the first move is making them invisible to each other — taking turns is the second.

## To touch a tab of mine, it has to borrow it — and put it back

Sometimes the request really is *"this page I am looking at right now."* Then the agent **names that tab and borrows it.** A confirmation appears, and nothing proceeds until I say yes.

A borrowed tab is **physically moved** into the agent window. When the work ends it comes home — and the implementation **records which window and which slot it came from** beforehand, then restores it there.

That last clause is where I spent the most time. Everyone thinks of borrowing. Almost nobody **writes down the seat**. Skip it and the return becomes "somewhere, roughly," which means a human goes looking.

## But "it has to borrow" only covers writing

Here is where the reading cost me something. The pitch says, in so many words, that the agent **must borrow a tab explicitly**. I read that as *my tabs are untouchable until I allow it*.

The source says otherwise. Tools are **sorted into three kinds by effect**, and the ones that **only look, never poke, skip the check entirely.** Lifting the structure of a page, pulling its error log or its network log — none of that needs a borrow.

<div class="ex">
<p class="bad"><b>What I read</b> — nothing happens to my tabs without permission</p>
<p class="good"><b>What is true</b> — permission gates <i>changing</i> things; <i>looking</i> is free</p>
</div>

**This is undocumented design, not a bug.** The developer docs carry a line about it and the code comments state the intent. What breaks is **the sentence on the front page**.

**The lesson: a safety rule compressed into one sentence has to be read together with its scope.** "It must borrow" was true. The word *touch* was narrower than I assumed.

## The doorman checks the costume, not the face

The architecture doc says connections are screened by an **extension allow-list**. "Allow-list" reads as *only our extension gets in*.

The actual check asks one question: **is this name 32 characters long, and are they all letters between a and p?** That is the whole test. Every browser extension ID looks like that. So **anything shaped like an extension walks through.**

The part that stopped me was the next line. **Directly above that function, the authors left a comment admitting it** — that it should be narrowed to an ID obtained from config or pairing, that it is not, and that **a side-loaded extension on the same machine currently passes the gate**. Someone outside filed the same finding a day before I looked. It is still open.

**The lesson: the word "allow-list" and the expression that implements it are two different objects.** And in this case **the code comment was more honest than the marketing line** — I would have got there faster by opening the source instead of reading more docs.

## I decided not to install it, because it is already handled

Good tool, wrong slot. The reason is not performance, it is **overlap**.

I already run two browser automations, and between them they cover **almost everything** this one offers. One leaves my browser alone; the other uses my real sign-in state. **The only cell BrowserSkill owns by itself is "both at once."**

The price tag on that one cell is the problem. Using it means **planting somebody else's extension, with access-every-site permission, into the Chrome profile where all of my work is signed in.** And the doorman from the previous section is that house's front door.

| | What I gain | What I pay |
|---|---|---|
| Today | one cell sits empty | nothing |
| If I install | that cell fills | a third-party extension inside a signed-in profile · uninstalling **cannot un-expose what already passed through** |

**The lesson is that giving "cost to undo" its own column makes this call fast.** An extension is trivial to delete. **The sessions it saw in the meantime cannot be deleted.** Splitting reversible from irreversible answered the question on its own.

## So I wrote down what would reopen it

A hold with no conditions guarantees the same investigation from scratch in six months. So there are three: **when what I use today fails to open something** · **when a job genuinely requires my Chrome's sign-in state** · **when the doorman issue closes.** Any one of them flips it back onto the table.

## Two things came home anyway

Rejecting a tool does not mean rejecting its design. This is the actual harvest.

**First: return three values, not two — with "unknown" as a first-class citizen.** Browser operations here report **nothing happened / definitely committed / unknown**, and retrying on *unknown* is **forbidden by the written protocol.** If the operation was a file upload, one more click on "not sure" means the file goes up twice.

I have paid for this three times already: **reading "dispatched" as "succeeded."** Every time I wrote a warning note about it. And every time, **the value being returned stayed two-valued.** A warning only works if a human reads it. A value works whether anyone reads it or not.

**Second: default-deny, borrow one at a time, hand it back.** My own dangerous automations do sit behind approval gates — but re-reading them, **the handing-back is missing.** There are doors that were opened once and never closed.

## And one principle that survives the rejection

A permission split into *can* and *cannot* pushes everything that actually needed **"just this one, and I will return it"** into the *can* pile.

A browser is an especially bad fit for that split. Grant everything and the screen I was reading disappears; grant nothing and the sign-in state — the whole point — is unusable. **One at a time, time-boxed, returned was the only answer left.**

## What I did not do

- **I never installed it.** Every judgement here comes from **reading source and issues**; I did not measure whether it works well even once. The reason I did not install is "installing is the risk," so the verification path is closed by my own conclusion.
- **I did not run the evaluation suite they ship.** It was the one route to a measured success rate, and I skipped it.
- **I only read the remote mode.** Everything I say about security applies **to running it on one machine.**
- **I did not line up the alternatives.** Putting two competing automations side by side would have made the verdict sturdier. I did not.

## The detailed record starts here

**What this repository is worth is its boundary design, not its binary.** BrowserSkill is an MIT project Tencent published on 2026-06-22: a **local bridge** between an agent harness (Claude Code, Cursor, Codex and others) and the user's signed-in Chromium. The pitch is "use the browser you are already logged into without interrupting your own work," delivered through three mechanisms — **agent-window isolation, tab borrow/return, and a human-handoff call**. The design holds up. Reading the source, however, turns up the fact that **the local daemon authenticates extensions by shape rather than identity**, a gap **the code comments concede outright**. Verdict: adoption **on hold**, **two techniques adopted**.

## What the thing actually is

**It is a shell CLI, not an MCP server.** That is the first design decision and the reason it carries no harness lock-in: the precondition is "any agent that can call a shell." Harnesses get a single 15.4KB instruction file that teaches the command surface.

Four layers, and the agent never addresses the browser directly.

| Layer | Role | Link |
|---|---|---|
| `bsk` CLI | verb-noun subcommands (`bsk session start`, `bsk click`) | invoked from a shell |
| `bsk daemon` | session routing · **one serialized queue per session** · idle shutdown | CLI ↔ daemon over local IPC |
| extension (MV3) | 21 tool handlers · session manager · element-reference store | daemon ↔ extension over loopback WebSocket |
| browser | agent window · borrowed tabs | extension → Chrome over the DevTools protocol |

Size is **47,773 lines of Rust plus 98,924 of TypeScript** (measured 2026-09-18, tests included). **4,439 stars**, **16 contributors** — but six of them account for nearly every commit, which makes this an internal team's project released publicly rather than a community one. 31 issues open, 61 closed. Releases land **two weeks apart** (0.2.0 on 09-02, 0.2.1 on 09-09, 0.3.0 on 09-16): energetic, and also a sign the surface has not settled.

⚠ **The repository publishes no performance numbers at all.** No benchmark boast, no "N% success." Instead it ships deterministic local pages and an agent-neutral capability evaluation. That is the honest posture — and inverted, it means **nobody over there has the number either.**

## The design decisions, each with its precondition

A technique moved without its precondition does not survive the move. So the question for each is: what constraint forced this?

| Decision | Implementation | Holds only when |
|---|---|---|
| **Agent-window isolation** | a write tool whose target window differs from the session's agent window returns `permission_denied` | the browser can **partition by window**. In tab-centric interfaces the boundary becomes invisible to the human — there is an open request for exactly that |
| **Borrow / return** | borrowing **physically moves** the tab; the original window and slot index are recorded and restored on return | **the seat is written down first.** Otherwise returning becomes a human's job |
| **The switch of record lives in the browser, not the CLI** | 0.3.0 **neutered rather than deleted** the unattended flags — still accepted, no longer able to beat the saved browser settings | **a human is in front of that screen.** It does not hold unattended, which is why unattended use was pushed to "turn the switch off in the extension" |
| **Human handoff** | captcha, sign-in, OTP and payment hand control back, then resume; five distinct outcome values | **"refused" and "feature disabled" are different values.** The docs nail down that disabled means no human confirmed anything and no permission was granted |
| **Three-valued results** | operations report `none` / `committed` / `unknown`; `unknown` **survives** timeout and transport loss, and blind retry is prohibited | **retry cost is asymmetric.** Over-engineering for idempotent reads |
| **Reference table discarded per page** | each observation rebuilds the element references and reusing stale ones is forbidden by protocol | **the page can change between looking and acting.** Unnecessary on static pages |

## What broke — four findings from source and issues

### 1. The extension allow-list screens shape, not identity

The gate function checks only whether the text after `chrome-extension://` is **32 characters, all within a–p**. Every MV3 extension ID matches that, so **any extension-shaped origin passes**. And **the comment immediately above records the gap**: it should be narrowed to an ID from config or pairing, it is not, and a side-loaded extension on the same machine walks through. An external report of the same issue was filed on 2026-09-17 and remains open.

The listener is bound to loopback, so **this is not a remote attack.** It does mean that one more extension on the same machine can drive the browser — the browser holding every login the user has.

### 2. Borrowing gates writes only

Tools are classified by effect into three kinds, and the policy is a single line: **passive reads, locally, skip the check.** So lifting a static accessibility tree, or pulling console and network records, **reaches a user tab without borrowing** (checked exhaustively in both files — zero window-scope calls).

⚠ In fairness this is **undocumented design rather than a defect**; the developer docs carry the line "passive reads may inspect user tabs." What breaks is **the front-page sentence**. Note also that the main observation tool is classified as transient *input* rather than a passive read — because its hover probe genuinely touches the live page — and is therefore forced inside the agent window. That distinction was drawn correctly.

### 3. Windows is the soft spot

Scanning the 31 open issues, Windows reports cluster visibly: an auto-spawned daemon dying with its parent process tree, the diagnostic command hanging forever when no extension is connected, an unsigned executable blocked by OS security, session stop unable to kill a wedged command. **Four of the six fixes in 0.2.1 are Windows.** Evidence of repair, and equally evidence of where the pain lives.

### 4. A background click reports success while delivering nothing

With the agent window left unfocused, click **reports success without dispatching input** — an open issue from 2026-09-14.

⚠ The irony is that **the same repository documents three-valued results down to "never retry on unknown"**, and then, at this one return site, reports *unknown* as *success*. ⇒ **Writing the protocol down and having every return site obey it are separate pieces of work.**

> **[도판]** The column that decided it was not the benefit, it was the cost to undo. The extension can be deleted; the sessions it saw cannot.
>
> A comparison of three tools. The first tool I already use leaves my browser alone but needs its own separate login. The second uses my real login but shares the tabs I was reading. BrowserSkill does both, at the cost of planting a third-party extension in a signed-in profile. The verdict is on hold, with three conditions written down that would reopen it.

## Measured against my own setup — one new cell

Two browser automations are already in place, and together they cover nearly all of this. One is **a separate application, so it leaves my browser alone, but it carries its own profile and therefore its own logins.** The other **runs in my real Chrome and shares the tabs I was reading.**

**The cell BrowserSkill holds alone is "both at once."** Its price is **planting a third-party extension holding all-sites and debugger permissions into the profile where every work login lives** — with finding 1 above serving as that profile's front door.

| Item | Verdict | Benefit | Cost to adopt | Cost to undo | Confidence |
|---|---|---|---|---|---|
| The tool itself | **on hold** | one new cell | three components · Windows issues cluster | ⛔ **asymmetric** — delete the extension, the exposed sessions stay exposed | high (source and issues measured) |
| **Three-valued results** | **adopt** | large — same misread three times already | one return type plus call-site branches | cheap | high |
| **Borrow/return protocol** | **adopt** | medium — my own rules have no "return" | one section of prose | cheap | medium |
| Neutering old flags | on hold | low | — | cheap | **low (unverified)** — I never counted whether such flags exist |

⚠ **An adoption verdict deserves to be attacked too.** For three-valued results the fair objection is *isn't this already handled?* My rules do carry "dispatched ≠ succeeded" — **as a warning note**. Whether the runner's **return value** is three-valued I never opened and checked (**unverified**). ⇒ So the first task under "adopt" is not implementation, it is **establishing the current state.** A warning works when a human reads it; a value works whether anyone reads it or not.

## The principle that survives

**Draw the boundary around "what is lent out until when," not around "who may do what."**

Permission split into *can* and *cannot* sweeps everything that needed **"this one, then returned"** into the *can* pile. A browser is a particularly bad resource for that split — grant it all and the user's screen vanishes, grant nothing and the sign-in state, the entire point, is unusable. One at a time, time-boxed, returned was the only remaining answer, and this repository carries it far enough to make session stop **mandatory** while calling idle cleanup a safety net only.

On my side the exposure is **doors opened once and never closed**: the approval step exists, the return point is unwritten.

## What I did not do

- **I never installed and ran it.** All judgements come from source reading and issue measurement; success rate and speed were never measured. Whether particular sites open through it is **unverified** — the reason for the hold is that installing is itself the risk, so the verification path is closed by the conclusion.
- **I did not run `evals/browser`.** It was the one path to a measured success rate.
- **I only read the remote mode.** Pairing and device credentials were not verified in code, and the security judgement here **applies to local mode only**.
- **I ran no side-by-side comparison.** Two other candidates solving the same problem were never lined up next to it. All three are available to me, so **that comparison is where the next value sits.**
