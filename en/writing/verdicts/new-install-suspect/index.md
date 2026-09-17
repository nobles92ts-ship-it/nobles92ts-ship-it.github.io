# The newest install looked like the culprit

> The home network started dropping and I was ready to uninstall Tailscale, which I had put on days earlier. Timing the install and the symptoms separately put the fault markers 18 to 127 days ahead of it.

- Headline number: cleared · 18–127 days
- Rendered page: https://nobles92ts-ship-it.github.io/en/writing/verdicts/new-install-suspect/
- Other language: https://nobles92ts-ship-it.github.io/ko/writing/verdicts/new-install-suspect/index.md
- Site guide for agents: https://nobles92ts-ship-it.github.io/en/llms.txt

---

**The home network started dropping and I was about to uninstall something I had installed days earlier. Timing the two separately put the symptoms *18 to 127 days ahead* of the install.**

## The ordinary inference

The internet went strange. And **I had installed something new a few days earlier.**

> **"That will be it."**

A very natural inference. **And usually correct** — which is what makes it dangerous.

## So I measured the timing

Before uninstalling I measured **both times separately.**

| What | When |
|---|---|
| **When I installed it** | A few days ago |
| **When the symptoms first appeared** | **18 to 127 days *earlier*** |

**The symptoms came first.** Up to four months earlier.

A cause cannot come after its effect. **Cleared.**

## What it cost — "a file date is not an install date"

Something learned while measuring.

To establish *when did I install it* I looked at **the file dates in the folder.** Plausible.

**Wrong.**

| When a file date changes |
|---|
| On install |
| **On update** |
| **When a settings screen is opened once** |
| When antivirus scans it |

So a file date is **"when something last happened"**, not **"when it was first installed."**

I had to find the actual install record separately. **And its value differed from the file date.**

> **A plausible proxy differs from the real value, and because both are "dates" you do not think to doubt it.**

## I did not write "nothing happened" where nothing could be measured

There were stretches with no records. Whether symptoms occurred then **is unknowable.**

There is a temptation here — **writing "no records, so nothing happened"** makes a cleaner story.

I did not. I wrote **"could not be measured for this period."**

**An absent record is not evidence of absence.** It is simply unknown. And mixing the two **makes the conclusion look firmer than it is.**

## The one conclusion that flipped, flipped because of *method*

A conclusion flipped mid-investigation. And the cause was **not new evidence but how I was measuring.**

The first method carried a bias. Changing the method produced **a different answer from the same data.**

> **When a conclusion flips, separate whether it was new facts or a new method.** If it is the second, **every other number taken the old way has to be doubted with it.**

## Verdict — cleared, and *cause unknown*

The most important part of this piece.

The conclusion is **that thing is not the culprit.** Which **does not mean I found the cause.**

**The real cause is still unknown.**

And that is stated plainly. Without it:

| | Later |
|---|---|
| **Write only the acquittal** | Reads as **"so it is resolved"** → confusion when it drops again |
| **Acquittal plus cause unknown** | **Everyone knows it is not finished** |

*Who it was not* and *who it was* are **different answers.** Present only the first as though it were the second and **the investigation stops there.**

## What I did not do

**I did not find the cause.** So this is **a record of clearing one suspect**, not of solving the case.

And I wrote down **not to propose uninstalling that thing again** — the acquittal is settled, so **the same inference does not get to resurface in six months.**

> **[도판]** This figure is here for one reason. You cannot read an acquittal without knowing what was acquitted.
>
> What Tailscale does. Before installing, the home PC and the work PC each sit behind their own router and cannot find each other. After installing, each machine gets a private address reachable only by the others, and they connect directly without touching router settings.

## The detailed record starts here

The tool that gets cleared in this piece is called **Tailscale**. It makes machines that sit far apart behave **as if they were in the same room**. Install it on the PC at home and the PC at work and the two find each other without opening any router settings or punching holes through a firewall; each machine gets **a private address** that only the other installed machines can reach. I move files and connect remotely over those addresses. I installed it to carry the same work between home and office.



Days after installing it, the home network started dropping several times a day. Wireless got slow, wired got slow with it, and for about thirty seconds nothing moved at all before it came back. The suspect was obvious — **the thing installed a few days earlier.** When only one thing is new, the new thing did it.

So before removing it I did one thing. **I timed the install and the symptoms separately.** With both timed, the order turned out to be backwards.

## A file date is not an install date

My first install date was wrong. I read it off the file timestamps in the program folder, and those say **when the vendor built it**, not when I installed it. The gap was three weeks, and the symptoms lived inside those three weeks. That one fooled me once.

A real install time only holds when three sources agree — the service-registration event, the registry install stamp, and the moment the network adapter first appeared. Only when all three pointed at **the same day and hour** did I have a baseline.

**Never let the subject supply the baseline you judge it by.** A file date is a number the subject brought with it.

## The symptoms predated the install by 18 to 127 days

With a baseline, comparison became possible. The wired-side error events first appeared **18 days before the install**, with zero in the four months before that. A separate exhaustion marker went back **127 days before the install**.

The rate settled it. Before: 3.17 events a day. **After: 2.15 a day.** Down 32 percent. Symptoms got **less** frequent after the accused arrived.

The tool itself was idle too. Zero external routing configured, its name-interception rule scoped to its own address space only, and across 134 days of connectivity checks the adapter was classified as the internet path **not once.** The daemon's cumulative CPU time was zero seconds.

**"It's the newest thing" builds a suspect list; it does not close a case.** Until the ordering is measured, it is only a name on the list.

## I did not write "nothing happened" where nothing could be measured

The wireless symptoms could not be checked on this machine at all. **It has no wireless adapter.** The relevant services are stopped and the log holds zero records. Zero here does not mean clean — it means there is no instrument.

The thirty-second drops were the same. This operating system polls connectivity every 15 seconds, treats a result as stale at 30, and declares a verdict at 35. **A thirty-second outage ends before the verdict is reached.** The low-level packet log was switched off as well. Finding nothing afterwards is the expected result, not a finding.

**Using a window where the instrument was off as proof of innocence gives you no record, not an acquittal.** So both windows were excluded from the verdict and written down as "not measured."

## The one conclusion that flipped, flipped because of method

Midway I concluded the name servers were broken. The average came back at 590ms, which looked like evidence enough. But that measurement asked for **randomly generated addresses that do not exist.** Lookups for names that do not exist take a different path than real ones, and that path varies by tens of times between servers.

I measured again with addresses actually in use, with warm-up, rotating the order. **Median 5ms** — the same as the comparison servers. Only the tail was real, and a tail is a hygiene issue, not a cause.

**A wrong method still returns a number.** That a number came out is not evidence that the number is right.

## Verdict — cleared, cause still unknown

The accused tool is cleared. I did not remove it. And **I still do not know the cause.** Three suspects remain — the router's wireless side, the segment beyond the router, and the line itself — and none of them are visible from this PC.

Half of this piece exists to carry that second sentence. **Clearing a suspect and finding the cause are different jobs, and finishing one without the other keeps undoing the first.** The next time symptoms appear, the newest install gets suspected first again, and whoever looks will redo every measurement from scratch unless the measurements are written down. So the acquittal is recorded as **do not propose this again** — with the evidence attached.

## What I did not do

- **I did not find the cause.** This is the record of clearing one suspect, not of catching one.
- **I opened none of the three remaining suspects.** All of them sit outside the PC and need a different observation point.
- **I do not know the line's contracted ceiling.** Without it there is no way to say whether the measured throughput is normal or half.
- **The wireless segment was never measured.** Short of changing machines, this PC will never measure it.
