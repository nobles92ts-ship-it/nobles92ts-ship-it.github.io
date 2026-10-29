# Sync and backup

> My work PC and home PC keep the same folders in step with Syncthing, and once a day a copy goes up to AWS S3. Sync copies your mistakes too, so the backup has to be a separate thing.

- Headline number: 2 PCs · 3 layers
- Rendered page: https://aitryed.com/en/writing/sync-backup/
- Other language: https://aitryed.com/ko/writing/sync-backup/index.md
- Source (Docs Syncthing versioning): https://docs.syncthing.net/users/versioning.html
- Source (Docs Syncthing ignore list): https://docs.syncthing.net/users/ignoring.html
- Source (Docs rclone sync): https://rclone.org/commands/rclone_sync/
- Source (Docs S3 lifecycle): https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
- Site guide for agents: https://aitryed.com/en/llms.txt

---

**I work on two computers, one at the office and one at home. A free program called Syncthing keeps the same folders identical on both, in real time, and once a day a copy goes up to AWS S3, Amazon's cloud storage. The two look alike but do opposite jobs, which is why I run both.**

> **[도판]**
>
> Three layers protect the files. First, versioning inside each PC brings back a single file deleted by mistake. Second, the other PC, kept identical by Syncthing in real time, covers a dead disk. Third, a one-way S3 backup made once a day covers the case where both PCs are hit. The further right, the slower but the longer it lasts.

## Sync is a photocopier; backup is a safe

Syncthing connects two computers directly over the internet. When a file changes on one, the other gets the same change within seconds. Nothing is parked on a server in between — the two PCs talk to each other. That is how a document I edit at the office is waiting for me at home.

The catch is the word "same". Delete a file by mistake and the mistake arrives on the other PC within seconds too. So would ransomware. Sync does not protect anything; **it copies**.

S3 is cloud storage that Amazon rents out. Every morning at 8:00 the work PC pushes its folders there. If I break something today, yesterday's copy is still sitting in S3.

| | Sync (Syncthing) | Backup (S3) |
|---|---|---|
| When | the moment a file changes | once a day, 08:00 |
| Direction | both PCs, both ways | work PC to the cloud only |
| Delete something by accident | it vanishes on both | yesterday's copy survives |
| Cost | free | under a dollar a month (calculated) |

## Each accident has its own layer

Deleted one file by mistake? That is layer one, **versioning**. Whenever a change arriving from the other PC overwrites or removes a file, Syncthing first tucks the old copy into a hidden folder. Mine keeps them for up to a year. It ships switched off, so you have to turn it on yourself.

If a whole disk dies, layer two is simply **the other PC**, which holds every file.

Layer three, **S3**, is for the day both machines are hit at once: a mistake that already spread, or both needing a wipe. Put differently, you need S3 not when sync breaks but when **sync works too well**.

## Only one PC uploads, and only in one direction

The work PC does all the S3 uploading on its own. If the same script starts on the home PC, it switches its own scheduled task off and exits.

There is a reason. A one-way backup runs on the rule "if the source no longer has it, remove it from the backup". Let two PCs push into one bucket and each will see the other's files as missing from its source and delete them. Changes made at home reach the work PC through Syncthing anyway, so one uploader misses nothing.

The reverse — pulling from S3 back onto a PC — is never automatic. If it were, an accident on the PC could roll straight into the backup. Restoring is a command a person types on purpose.

## Some files are kept out on purpose

Syncing everything is not the goal. These four stay out of Syncthing deliberately:

| Left out | Why |
|---|---|
| Per-PC settings and sign-in files | they contain that machine's user name in their paths, so each PC would overwrite the other |
| A database a program is writing to | copying it mid-write corrupts it |
| Indexes that can be rebuilt any time | both PCs build their own, so every run looks like "both sides edited it" |
| Transcripts of my AI conversations | they keep growing, and versioning copied them whole until the archive hit 22GB |

It also runs the other way. Folders named `_no_sync` are left out of S3 but deliberately included in Syncthing. What that name is for is covered in [AI foldering](/en/writing/ai-foldering/index.md).

## Not done yet

**Nothing tells me when Syncthing quietly stops.** It happened once in August, and all I have since is a person checking now and then.

**AI transcripts from the home PC exist only on the home PC.** They are out of Syncthing, and only the work PC uploads to S3, so conversations held at home have no second copy anywhere.

**There is no billing alarm either.** The backup account only has storage permissions and cannot read invoices, which is why the monthly cost above is a calculation.

## The detailed record starts here

**On 21 May 2026 the two PCs were tied together by S3 alone.** Each machine ran a two-way sync against the same bucket. Over three months the bill climbed and phantom conflicts piled up, and on 7 August Syncthing took over the PC-to-PC job while S3 was demoted to backup only. Below is the setup running today (29 October 2026) and the things that cost me something on the way.

## The setup today

| Item | Value |
|---|---|
| Syncthing | v2.1.7, with the two PCs connected directly (no relay server) |
| Folders kept in step | started as the work folder and the AI settings folder; two more tool-settings folders joined later, four in all |
| Wait before sending a change | 10 seconds for the work folder · 300 seconds for the AI settings folder |
| Versioning | staggered — every 30 seconds for the first hour, sparser after that, removed after one year |
| Conflict watcher | every 15 minutes it finds conflict copies, tidies logs and caches, and keeps real work files while sending an alert. Runs on the work PC only |
| Upload tool | rclone `sync`, work PC → S3, one way, daily at 08:00 |
| Flags | `--checksum` (compare by content) · `--max-delete 300` (stop rather than delete more than 300 files in one run) |
| Bucket | versioning on · server-side encryption · public access blocked · Seoul region |
| Lifecycle rule | after a day, keep only the newest old version of each file; clear unfinished upload parts after 7 days |
| rclone config file | encrypted; each PC reads the password from a local file |
| Git history of the game repo | not uploaded as a folder; a daily `git bundle` file (about 10MB) goes up instead |

## Two sync tools on one folder invent conflicts

The day Syncthing went in, 7 August, the conflict alerts would not stop. Every one turned out to be fake. One side of each conflict copy was byte-for-byte the current file; the other was the day-old copy still sitting in S3.

The cause was the layout. Syncthing had just made both PCs identical, and then the once-a-day two-way S3 sync arrived holding a day-old version and read it as "the other PC edited this". No exclude rule could stop it. That same day I switched S3 to a one-way push from the work PC alone, and the very idea of a conflict disappeared from the backup side.

**When two sync tools share a folder, each reads the other's writes as someone else's edit.** One has to do the syncing; the other should only take notes.

## The money leaked through questions, not storage

The S3 bill went from $20 in May to $47 in June and $75 in July. I assumed old versions were piling up. Storage, though, came to $1.70 a month — deleting every old version would have saved $1.50.

The real cost was requests. A file listing does not tell rclone when each file was modified, so it asks about every file separately. With about 26,000 files synced 144 times a day, that was over a hundred million questions a month.

| Change | Effect |
|---|---|
| 144 runs a day → one | that many fewer questions |
| two-way → one-way plus `--checksum` | compares with the content fingerprint already in the listing, so no per-file question (measured on 35 files: 36 requests → 1) |
| Result | one run went from 2.1 minutes to 12 seconds |

I fell hard once along the way. I first tried a different flag for the same saving (`--use-server-modtime`). Tested as a single command it was fine, but inside the normal two-way cycle it decided every file had changed and aborted itself. Sync between the PCs stood still for seven hours. **One command passing told me nothing about the whole cycle passing.**

## A brake can mistake ordinary work for an accident

The S3 backup has a brake: if a run wants to delete more than 300 files at once, it stops. It is there so that wiping a folder by mistake does not wipe it from the backup too. Yet from 2 to 29 October the backup hit that brake on 26 of the 28 days and ended in "failure".

Counting what it wanted to delete, day by day, 240 to 300 files came from one place: the git history folder (`.git`) of the game I am building. Git writes a small file for each piece of work, and once thousands pile up it packs them into one large file and deletes the small ones. October brought 927 commits to that repo, close to a thousand small files went up each day, and every packing left the backup with thousands to delete. Three hundred a day could not keep up; by the 29th, 7,332 files were waiting in S3 to be removed.

The brake was not broken. It counts deletions and nothing else, so it cannot tell routine work from an accident. I left the brake alone and changed the shape of what moves. That repo's `.git` is now out of the backup; instead, `git bundle` packs everything — all 314 branches and each working folder's position — into a single file every day. Packing took four seconds. Downloading it back from S3 and restoring gave the same branch count and the same latest commit as the original. Then I removed the 10,816 old `.git` files left in S3, and a backup run the same day finished clean.

**A brake that counts files does not know which files.** Turning thousands of daily changes into one file kept the brake intact and removed the cause, which loosening the brake would not have done.

## The last copy of a deleted file is kept on purpose

The lifecycle rule deletes an old version only if a newer old version exists. A file that has already been deleted has nothing newer after its last version, so that copy is never removed. In August there were 11,472 of them, 4.75GiB.

At first I filed it as a defect. Looking again, it was the only way back for anything deleted by mistake. At $0.12 a month, it stays. I also weighed a purely date-based rule and dropped it: the important files that rarely change would lose their restore points first.

## Syncthing can stop without a single error

On the afternoon of 29 August, not one change from this PC reached the other. No warning on screen, none in the logs. A folder had been stuck at "scanning" for hours, and since the scan never finished, the exchange step never began.

What told me was not the status text but **how much was left to move**. If the bytes still needed do not drop by a single byte for tens of minutes, it has stalled. Requests about the connection still answered instantly, which makes "it's alive" an easy thing to believe.

| Tried | Outcome |
|---|---|
| Restart the program | took effect after 4 minutes, ran about 15, stalled again |
| Force-kill | refused to die for 45 seconds; once relaunched, spent 14 minutes opening its database, then stalled again |
| Reboot | back to normal the next day |

Nothing was lost — it was a fault that stops, not one that deletes. The rule now: if two restarts land in the same place, reboot.

## Versioning keeps whole files, not differences

On 14 September a disk warning came in. The version archive was 22.04GB, and 22.02GB of that was AI transcripts. A single conversation's file had grown to 287MB, and every 30 to 60 seconds while it was going, the archive took another complete copy of it. That one conversation alone left 36 copies, 8.2GB.

The 3GB of attached images in the same folder are written once and never change, so they built up no copies at all. The culprit was not size but "a big file that keeps growing". I took transcripts out of Syncthing and deleted only the old copies whose original still exists (21.66GB). The 125 copies whose original was already gone are the only copies left, so they stayed.

Before that, in August, I had put an alert on this folder's size and it cried wolf twice. The archive prunes itself every hour, so its size rises and falls like a saw blade, and my check happened to land at the peak just before each prune. I moved the alert to **free disk space**. Measuring the number I actually care about, instead of a number in the middle, ended the false alarms.

## When AI on both PCs edits one file, one edit vanishes

On 22 September an AI session on this PC and another on the other PC took turns editing the same code file a few seconds apart. Syncthing does not merge. It picks one version and moves the loser aside as `name.sync-conflict-date-time-device`. My edit disappeared from the working file and came back three times in one minute.

There were two signals: a conflict copy appearing next to the file I had edited, and code inside it that I had not written. The rule now is to let go of the file, save the current version and the copies somewhere else, and ask a person who should edit first. One side at a time.

## The ignore list has to be edited on each PC

Syncthing treats its ignore file (`.stignore`) as its own configuration and does not send it to the other PC. While S3 was two-way the file hitched a ride that way; since S3 went one-way, nothing carries it. So when I change the ignore list, I change it on the work PC and the home PC separately. Change one and they drift apart without any error.

Exclusions are written wide, not as exact names. The first time I excluded the sign-in file by its exact name, per-account copies and `.bak` copies went straight into the backup — even the copy I had just made to recover from the problem went up on the next run. Now it is blocked with a wildcard like `.credentials*`, and after blocking I query S3 directly to confirm the count really is zero.

Letter case collided too. Windows treats `C--Users` and `c--Users` as the same folder; Syncthing and S3 do not. That held 34 files stuck until a case-insensitive exclude pattern cleared it.

## Wiping one PC has a required order

When reinstalling Syncthing, **never restore the old settings and database from a backup.** The database says "there were N files"; if the disk is empty, every one of them is judged deleted, and the deletions go out to the other PC. Syncthing has no brake on mass deletion.

Starting with a fresh database is safe: the machine joins as a new device and only downloads. The order is: switch the S3 backup task off → wipe → install Syncthing fresh → accept the folder names the other PC proposes → wait until everything matches → switch the backup back on.

**The lesson this record paid for: a quiet sync means nothing.** The fake conflicts were loud, and the real fault (the 29 August stall) never made a sound. That is why I now watch how much is left to move instead of the status text, and free disk space instead of folder size.

## Still open

| Item | Status |
|---|---|
| Automatic stall detection for Syncthing | none — a person checks the remaining bytes now and then |
| Versioning period: one year → 7–30 days | on hold, because it would also affect the work folder |
| Second copy of home-PC transcripts | none — they live only on the home PC since leaving sync |
| Cloud billing alarm | none — the backup account cannot read invoices |
