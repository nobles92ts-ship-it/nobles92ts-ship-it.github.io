# Delivery

> Putting the tool on somebody else's machine turned out to be harder than building it.

- Headline number: OK/NG
- Rendered page: https://nobles92ts-ship-it.github.io/en/built/qa-widget/delivery/
- Other language: https://nobles92ts-ship-it.github.io/ko/built/qa-widget/delivery/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**Putting the tool on someone else's machine turned out to be harder than building it.**

## Problems that did not exist while I was the only user

It ran fine on my machine. Handed to the team, **the code was identical and some machines did not run it.**

The cause is not in the code. **It is in the environment** — something not installed, a missing permission, a different path.

## And then the exact thing this widget exists to prevent happened

I first shipped **a setup document.** *Download this, put it here, fill in that.*

And precisely the same failure occurred.

> **A document has to be read, and nobody reads it.**

The reason this widget exists is **"a dashboard has to be visited and nobody visits it"** — and **I repeated the same mistake in delivery.**

So the document became **an installer.** Run it and it checks and fills things in, and **when something fails it says what, in one line.**

## It speaks only in OK and NG

The installer does not explain at length. Per item, **it says whether it worked.**

| Item | State |
|---|---|
| Required program | **OK** |
| Account link | **NG** ← the only line that matters |
| Sheet access | OK |

Why that format: **the person who is stuck usually only needs to know where.** A long explanation is **unnecessary for the people it works for and unread by the people it does not.**

## Credentials are not shared

Each team member **enters their own account key.** **It does not run on one shared account.**

Shared would be far easier. Configure once, everyone uses it.

Two reasons it does not.

| Reason | |
|---|---|
| **Permissions differ per person** | On a shared account **you see things you have no right to see** |
| **Who did what disappears** | Everything is recorded under the shared name |

The second is worse. Later, **"who changed this?" has no answer.**

## What is shared and what is personal

A clear boundary **shortens the instructions.**

| | Who supplies it |
|---|---|
| App authentication key | **Shared** — issued once |
| Notification and deploy keys | **Shared** — team resources |
| **Issue-tracker account** | **Personal — your own** |
| **Sheet access** | **Personal — must be on your account** |

With that table, the setup instructions collapse to **"I'll give you the top two, put in your own for the bottom two."**

**A blurry boundary makes the instructions long, and long instructions go unread.** Which lands back at the first problem.

## The detailed record starts here

Every problem that didn't exist while I used it alone appeared when it went to the team. The code is identical and **some machines just don't run it.**

## A setup script instead of a setup document

I started with a guide document. And **exactly the thing this widget exists to fix** happened — **a document has to be read, and nobody reads it.**

So it became a setup script. Run it and every item prints OK or NG, and an NG says what to fill in and how. You run it until everything is OK.

Writing "put this file here" in a document and having a script say "this file is missing" **do not reach people at the same rate.** The first requires the reader to compare it against their own state; in the second, the comparison is already done.

## Credentials are not shared

When a teammate runs it, they supply **their own account's token.** It does not run on one shared service account.

Which means somebody without read access to the sheet sees no data. That is intended, not a bug — the widget must never become **a channel for seeing things you aren't permitted to see.**

A shared account would have made setup far easier: hand out one token and you're done. But then **everything anyone looked at collapses into that one account**, and there's no way to revoke access later.

Per-person credentials do add **one more setup step** — which is part of why the script above was needed.

## What is shared and what is personal

Making the boundary explicit is what makes the instructions short.

| | Who provides it |
|---|---|
| App auth key | Shared — obtained once |
| Notification · deploy tokens | Shared — team resources |
| **Issue tracker account** | **Personal — your own** |
| **Sheet read access** | **Personal — has to be on your account** |

Putting that table at the top of the document halved the questions on its own. Without it you get "send me the token," and **which token isn't attached to it.**

And shared tokens carry an explicit **do not commit these** note. Personal config files have to stay outside the repository, and left unsaid, somebody will always commit them for convenience.
