# Kkaeal

> A free Windows desktop game where pixel creatures live in the corner of your screen. Catch them, raise them, send them into gyms. No game window, it runs while you work.

- Headline number: v0.2.0 beta · Windows · free
- Rendered page: https://aitryed.com/en/built/moon-studio/pixling/
- Other language: https://aitryed.com/ko/built/moon-studio/pixling/index.md
- Site guide for agents: https://aitryed.com/en/llms.txt

---

<section class="getbox" aria-label="Download Kkaeal">
<div class="gb-img"><img src="/games/pixling/hero.webp" width="720" height="320" alt="Pikachu and Charizard with a Poké Ball on the Pokémon gym side; Gabumon and WarGreymon with a Digivice on the Digimon arena side — Kkaeal key art"></div>
<div class="gb-b">
<div class="gb-row"><a class="gb-btn" href="https://github.com/nobles92ts-ship-it/pixling-download/releases/latest/download/Kkaeal.zip">Download — Windows</a><div class="gb-meta"><b>Kkaeal.zip</b><span>v0.2.0 beta · about 67 MB · free</span><a class="gb-alt" href="https://nobles92ts-ship-it.itch.io/pixling">Not working? Get it on itch.io →</a></div></div>
<div class="gb-mo"><p>It won't run on a phone. <b>Open this page on a PC</b> to download.</p><button type="button" class="gb-copy" data-done="Copied" onclick="const u=location.origin+location.pathname;navigator.clipboard.writeText(u).then(()=>this.textContent=this.dataset.done,()=>this.textContent=u)">Copy link</button></div>
<ol class="gb-steps"><li><i>1</i>Unzip the download</li><li><i>2</i>Double-click <b>깨알.exe</b> in the <b>깨알</b> folder</li><li><i>3</i>If a blue box appears: <b>More info → Run anyway</b></li></ol>
</div>
</section>

**Kkaeal (깨알) is a Windows game where pixel creatures live in the corner of your desktop, and you catch them, raise them and send them into gyms.** While you work, they wander around, fight and grow on their own.

The name is a Korean pun. 깨알 is a sesame seed, something tiny; read as 깨 + 알 it also means "crack the egg", which is how every creature here is born.

## It doesn't take over your screen

Most games open a window and you play inside it. Kkaeal **has no game window.** The creatures walk around on your desktop, near the taskbar.

| | A typical game | Kkaeal |
|---|---|---|
| Where | Inside its window | **On your desktop** |
| When | Only while you play | **Left running all day** — different creatures show up at different times of day |
| When you need it gone | Minimise the window | **One press of the `\` key** hides everything; press again to bring it back |

You can change the hide key in the settings. Kkaeal **doesn't take that key away from other programs** — typing `\` elsewhere still types it, and the game hides along with it.

## Catch, raise, send is the core — and the gaps in your workday filled up around it

The first builds had only those three. Each version since has added something to do around them.

| What you do | How |
|---|---|
| **Catch** | Grab the wild ones walking by. Pokémon get a Poké Ball **thrown** at them; Digimon get a Digivice **shone** on them |
| **Raise** | Your partner grows and digivolves: Rookie → Champion → Ultimate → Mega |
| **Send** | Build a team and send it into gyms and the tower. There are 32 gyms on the Pokémon side and 32 on the Digimon side; clear one side of Season 1 and a tougher **Season 2** opens. Your first badge from each gym pays gym number × 50 gold |
| **Fill the Dex** | 627 Pokémon and 294 Digimon, **921** in all. A first catch flips in as a card, and caught species show a **tier** from 1 to 10 |
| **Life Yard** | Seat up to 10 creatures you aren't using and they **work by type** for gold: Water types fish, Electric types charge batteries. They only earn while you're active at the PC, and the Digivice reports the take every hour |
| **Shop gacha** | Spend that gold on pulls (300 a pull) to fill the Dex |
| **Daily gift** | Once a day, five minutes after you start, a creature walks in wearing a ribbon. Click it to keep it |
| **Mini-games** | **Gomoku** against your partner, with four skill levels plus «Random», where a card deck decides who moves · **Picture match** in three stages · a silhouette quiz |
| **Link Battle** | Turn your team into one line of code and fight a friend's team. No rewards, and both sides need the same version |

Numbers in the table are as of v0.1.6.

## It's quicker to see it move

<div class="shorts">
<a href="https://www.instagram.com/munbanggu100w/reel/DeTHl7sO_cI/" target="_blank" rel="noopener"><img src="/games/pixling/cute.webp" width="320" height="569" alt="" loading="lazy"><span>Partner being cute</span></a>
<a href="https://www.instagram.com/munbanggu100w/reel/DeEMfVxB2DU/" target="_blank" rel="noopener"><img src="/games/pixling/office.webp" width="320" height="569" alt="" loading="lazy"><span>A Gyarados at work</span></a>
<a href="https://www.instagram.com/munbanggu100w/reel/DeIqUwLBTDd/" target="_blank" rel="noopener"><img src="/games/pixling/tower.webp" width="320" height="569" alt="" loading="lazy"><span>Tower floor 100</span></a>
<a href="https://www.instagram.com/munbanggu100w/reel/DeEyZ4RhnpD/" target="_blank" rel="noopener"><img src="/games/pixling/digivice.webp" width="320" height="569" alt="" loading="lazy"><span>Digivice and DNA Digivolve</span></a>
</div>

Each one opens a short clip on Instagram. The captions in the clips are in Korean.

## It grows as you type — and never knows what you typed

Your partner grows **as much as you use the computer.** Each key press is worth 1 experience point; each mouse click is worth 2.

Which raises the obvious question: **is it reading my keystrokes?**

No. The only thing Kkaeal counts is **how many times** something was pressed.

| Counted | Never counted |
|---|---|
| **How many** keys were pressed | **Which** key it was |
| **How many** mouse clicks | What you typed · which window · where the cursor was |

That was settled by the method, not by a promise. Kkaeal doesn't **intercept** keystrokes on their way to other programs. It just asks, many times a second, **"is anything held down right now?"** With that method, **rebuilding what you typed is impossible in principle.** The save file holds two numbers and nothing else.

Some PCs run security software that blocks even that question. On those, from v0.1.4 on, Kkaeal looks only at **when the last input happened** and counts each change as one key press. It still can't tell which key it was.

Creatures also only show up **while you're at the keyboard.** The next one comes after enough time has passed *and* enough input has piled up since the last. Step away and nothing queues up to pour out when you return.

## The first launch shows one blue box

It's the **"Windows protected your PC"** box. Nothing is broken. It appears because the file has no **code signature** — a publisher's stamp.

<div class="smartscreen" aria-label="Where to click in the blue box">
<p class="ss-h">Windows protected your PC</p>
<p class="ss-l"><span class="ss-u">More info</span><em>① click here</em></p>
<p class="ss-b"><span class="ss-run">Run anyway</span><em>② and this button appears</em><span class="ss-no">Don't run</span></p>
</div>

A signature costs money every year, and these days a signed file still gets the box until enough people have downloaded it. For a free game, it wasn't worth it.

## Your save lives elsewhere, so new versions keep it

The save isn't next to the game file; it's in `%APPDATA%\Pixling` (the folder keeps the old name on purpose — renaming it would lose your creatures). When a new version comes out, **download the new zip and overwrite the old files.** Your creatures stay.

Usually the game does even that for you. **It tells you when a new version is out.** Once at start it asks GitHub (the download repository) whether a newer version exists — it sends only its version number — and downloads only if you agree. If you don't want to wait, press **«⬆ Update»** in the menu and it checks right away (from v0.1.6).

The notice has been in the game since v0.1.3. If you're on something older, it won't come, so download from this page once and overwrite.

## What it can't do yet

| Can't | Why |
|---|---|
| Run on Mac or phones | It relies on Windows window features |
| Skip the blue box | No code signature |
| Vouch for antivirus behaviour | How antivirus tools view the "is a key held down?" polling **hasn't been measured yet** |

## Sprite credits

This is a non-commercial fan game. The Digimon sprites belong to Bandai; the Pokémon sprites belong to Nintendo, Game Freak and Creatures. The full notice is in the in-game credits window and in `OUTPUT_NOTICE.md` inside the zip.

## The detailed record starts here

## Production now uses a v3 director, owners, and verifier

This describes the operating records checked on 2026-10-19. A main director manages the board and cards for the game. Each feature owner handles the scoped design details, code, data, and headless tests. A different agent verifies the integrated build. Claude or Codex can take over the director role.

Art01 handles characters, motion, and arena artwork; Art02 handles skills, effects, and presentation. Some tasks split a Claude draft from Codex production work. Delivering artwork to staging, integrating it, and checking the integrated result are separate steps. The full process is described in [MOON Studio v3](/en/built/moon-studio/index.md).

The [studio coordination update](/en/built/moon-studio/index.md) keeps the director, owners assigned to cards, fresh verifiers, and persistent art sessions while strengthening handoffs, duplicate prevention, and resource reservations. Extra development or QA coordinators require a demonstrated bottleneck. On 2026-10-22 the Kkaeal director seat changed hands through this guard's handover, and that director shipped v0.2.0.

| Version | State confirmed on 2026-10-23 |
|---|---|
| v0.2.0 | Latest public download (2026-10-23); the download instructions on this page describe this release |
| v0.1.7 | Never released on its own; folded into v0.2.0 |
| v0.1.6 | Previous public release; the feature table on this page describes it |

This is a comparison of the operating board with the [public release](https://github.com/nobles92ts-ship-it/pixling-download/releases/tag/v0.2.0). I did not rerun the game's regression suite while updating this page.

## What the three-session v2 process taught about boundaries

Before the 2026-10-08 transition, three AI sessions divided the work. **Planning** owned design and specifications; **development** owned code, tests, packaging, and verification tools; **art** made the pictures. Orders arrived through specifications with acceptance conditions or messages between sessions. The following lessons belong to that earlier process.

At first the boundary looked like a **list of prohibitions**: development doesn't edit the spec, and so on. But on the day the line actually broke, nothing prohibited had happened. The development session handed planning **"the line you should add to the spec" as a ready-made quote.** It never touched the spec — but it **decided the sentence**, which is the same line crossed.

So the line was redrawn. **Measuring and handing over is development's job; deciding with that number is planning's.** "Doing this gives that value" is fine. "So let's write this in the document" is not.

The messaging itself leaked too. **Three of four messages examined at the time** went by unread. The earlier repair made **the receiving side check every turn**. v3 instead aims to reduce those cross-discipline handoffs.

## All-green checks still don't tell you whether it runs on screen

Every executable build runs four checks: was it stamped, have no commits landed since the build, is nothing left uncommitted, and was the game not running while it was built. One day all four were green, and the intended commit was confirmed to be in the build.

Then the game was launched, and the new feature **didn't show at all.** Only the code that positions the fighters had shipped. **The battle animation itself was missing entirely.**

The four checks were perfect at **"what went in"** and looked at none of **"does it run on screen."** Those are different questions. Since then, before saying a feature works, the rule is **to launch it and look at that screen** — and if it can't be launched, to make the check look at the resulting screen before saying anything.
