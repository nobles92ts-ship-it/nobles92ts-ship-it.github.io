# Pixling

> A Windows game where pixel creatures live in the corner of your desktop and you catch and raise them. Free to download.

- Headline number: Windows · free
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/moon-studio/pixling/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/moon-studio/pixling/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

<section class="getbox" aria-label="Download Pixling">
<div class="gb-img"><img src="/games/pixling/hero.webp" width="720" height="320" alt="Pikachu and Charizard with a Poké Ball on the Pokémon gym side; Gabumon and WarGreymon with a Digivice on the Digimon arena side — Pixling key art"></div>
<div class="gb-b">
<div class="gb-row"><a class="gb-btn" href="https://github.com/nobles92ts-ship-it/pixling-download/releases/latest/download/Pixling.zip">Download — Windows</a><div class="gb-meta"><b>Pixling.zip</b><span>about 38 MB · free</span><a class="gb-alt" href="https://nobles92ts-ship-it.itch.io/pixling">Not working? Get it on itch.io →</a></div></div>
<div class="gb-mo"><p>It won't run on a phone. <b>Open this page on a PC</b> to download.</p><button type="button" class="gb-copy" data-done="Copied" onclick="const u=location.origin+location.pathname;navigator.clipboard.writeText(u).then(()=>this.textContent=this.dataset.done,()=>this.textContent=u)">Copy link</button></div>
<ol class="gb-steps"><li><i>1</i>Unzip the download</li><li><i>2</i>Double-click <b>Pixling.exe</b></li><li><i>3</i>If a blue box appears: <b>More info → Run anyway</b></li></ol>
</div>
</section>

**Pixling is a Windows game where pixel creatures live in the corner of your desktop, and you catch them, raise them and send them into gyms.** While you work, they wander around, fight and grow on their own.

## It doesn't take over your screen

Most games open a window and you play inside it. Pixling **has no game window.** The creatures walk around on your desktop, near the taskbar.

| | A typical game | Pixling |
|---|---|---|
| Where | Inside its window | **On your desktop** |
| When | Only while you play | **Left running all day** — different creatures show up at different times of day |
| When you need it gone | Minimise the window | **One press of the `\` key** hides everything; press again to bring it back |

You can change the hide key in the settings. Pixling **doesn't take that key away from other programs** — typing `\` elsewhere still types it, and the game hides along with it.

## Catch, raise, send — that's the whole game

| What you do | How |
|---|---|
| **Catch** | Grab the wild ones walking by. Pokémon get a Poké Ball **thrown** at them; Digimon get a Digivice **shone** on them |
| **Raise** | Your partner grows and digivolves: Rookie → Champion → Ultimate → Mega |
| **Send** | Build a team and send it into gyms and the tower |

## It's quicker to see it move

<div class="shorts">
<a href="https://www.instagram.com/munbanggu100w/reel/DdYvoduuVKo/" target="_blank" rel="noopener"><img src="/games/pixling/catch.webp" width="320" height="569" alt="" loading="lazy"><span>Two ways to catch</span></a>
<a href="https://www.instagram.com/munbanggu100w/reel/DdpALGzN714/" target="_blank" rel="noopener"><img src="/games/pixling/evolve.webp" width="320" height="569" alt="" loading="lazy"><span>Digivolving</span></a>
<a href="https://www.instagram.com/munbanggu100w/reel/DdarLgaxzCH/" target="_blank" rel="noopener"><img src="/games/pixling/gym.webp" width="320" height="569" alt="" loading="lazy"><span>Gym battle</span></a>
<a href="https://www.instagram.com/munbanggu100w/reel/DdlFvarhd9L/" target="_blank" rel="noopener"><img src="/games/pixling/hide.webp" width="320" height="569" alt="" loading="lazy"><span>The hide key</span></a>
</div>

Each one opens a short clip on Instagram. The captions in the clips are in Korean.

## It grows as you type — and never knows what you typed

Your partner grows **as much as you use the computer.** Each key press is worth 1 experience point; each mouse click is worth 2.

Which raises the obvious question: **is it reading my keystrokes?**

No. The only thing Pixling counts is **how many times** something was pressed.

| Counted | Never counted |
|---|---|
| **How many** keys were pressed | **Which** key it was |
| **How many** mouse clicks | What you typed · which window · where the cursor was |

That was settled by the method, not by a promise. Pixling doesn't **intercept** keystrokes on their way to other programs. It just asks, many times a second, **"is anything held down right now?"** With that method, **rebuilding what you typed is impossible in principle.** The save file holds two numbers and nothing else.

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

The save isn't next to the game file; it's in `%APPDATA%\Pixling`. When a new version comes out, **download the new zip and overwrite the old files.** Your creatures stay.

## What it can't do yet

| Can't | Why |
|---|---|
| Run on Mac or phones | It relies on Windows window features |
| Update itself | The game never goes online. New versions come from this page |
| Skip the blue box | No code signature |
| Vouch for antivirus behaviour | How antivirus tools view the "is a key held down?" polling **hasn't been measured yet** |

## Sprite credits

This is a non-commercial fan game. The Digimon sprites belong to Bandai; the Pokémon sprites belong to Nintendo, Game Freak and Creatures. The full notice is in the in-game credits window and in `OUTPUT_NOTICE.md` inside the zip.

## The detailed record starts here

## Three sessions built it, and the line between them is whose sentence it is

Pixling is built by three AI sessions. The **planning session** writes the design and the spec, and decides what comes next. The **development session** owns code, tests, building the executable and the verification tools. The **art session** only makes pictures. Orders arrive two ways: as a stage table in the spec, pass conditions included, landing in a commit — or as a message between sessions.

At first the boundary looked like a **list of prohibitions**: development doesn't edit the spec, and so on. But on the day the line actually broke, nothing prohibited had happened. The development session handed planning **"the line you should add to the spec" as a ready-made quote.** It never touched the spec — but it **decided the sentence**, which is the same line crossed.

So the line was redrawn. **Measuring and handing over is development's job; deciding with that number is planning's.** "Doing this gives that value" is fine. "So let's write this in the document" is not.

The messaging itself leaked too. **Three of four messages** between sessions went by unread. So the design stopped trusting the sender: **the receiving side now checks for itself every turn.**

## All-green checks still don't tell you whether it runs on screen

Every executable build runs four checks: was it stamped, have no commits landed since the build, is nothing left uncommitted, and was the game not running while it was built. One day all four were green, and the intended commit was confirmed to be in the build.

Then the game was launched, and the new feature **didn't show at all.** Only the code that positions the fighters had shipped. **The battle animation itself was missing entirely.**

The four checks were perfect at **"what went in"** and looked at none of **"does it run on screen."** Those are different questions. Since then, before saying a feature works, the rule is **to launch it and look at that screen** — and if it can't be launched, to make the check look at the resulting screen before saying anything.
