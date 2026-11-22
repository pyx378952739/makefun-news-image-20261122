# NOTES — news-image-20261122 audit trail

Entry: one 1024×1024 PNG (`entry.png`, 126,400 bytes) summing up the world
news of Sunday 22 November 2026, rendered deterministically with Python/PIL
(render script kept outside the repo: `~/workspace/makefun/render_news_image_20261122.py`).
Two independent renders produced identical bytes:

- SHA-256: `b6a3006cf2183823b748f20a333219f66dc6016d82120a6b76f8373ed211f0ab`
- `main.ts` (Node 22, stdlib only) copies `entry.png` to the grader's output
  directory, refusing to run if it is over the 1 MiB limit; no network,
  no shell, no subprocess.

## The six stories — each verified against a live wire page on 2026-11-22

1. **Houthis launch revenge strikes on Saudi capital**
   — 22 Nov first report. AFP via The Manila Times, 2026-11-22:
   https://www.manilatimes.net/world (headline, 22 Nov 2026)
   Yemen's Iran-backed Houthis launched revenge strikes on the Saudi capital
   after Saudi airstrikes hit a power station in the Red Sea coastal city of
   Mocha; footage released by Ansarullah Media Centre on 20 Nov shows the
   aftermath of the Saudi strike.
2. **Cargo ship catches fire after drone strike in Baltic**
   — 22 Nov first report. AFP via Dawn, 2026-11-22:
   https://www.dawn.com/authors/119/afp/1 (headline, published 22 Nov 05:10)
   A cargo ship caught fire after a drone strike in the Baltic; a Russian
   helicopter was also suspected of violating Finnish airspace.
3. **Israeli fire kills four more in Gaza**
   — 22 Nov first report. AFP via Dawn, 2026-11-22:
   https://www.dawn.com/authors/119/afp/1 (headline, published 22 Nov 05:11)
   Israeli fire killed four people on Saturday, including three in a strike
   on a vehicle carrying food aid.
4. **Fossil fuel dispute threatens to scupper climate deal**
   — 22 Nov first report. AFP via Dawn / The Manila Times, 2026-11-22:
   https://www.dawn.com/authors/119/afp/1 (published 22 Nov 05:10)
   A fight over fossil fuels threatened to derail UN climate talks (COP31,
   Antalya) on Saturday as nations pushed back against a phase-out.
5. **Nvidia faces US accounting probe amid deepening turmoil**
   — 22 Nov first report. AFP via The Manila Times, 2026-11-22:
   https://www.manilatimes.net/world (headline, 22 Nov 2026)
   The chip giant faces a US accounting probe as turmoil deepens after its
   chief Jensen Huang's exit and a widening scandal around a suspected
   Chinese spy.
6. **6.7-magnitude quake hits Peru, no report of deaths**
   — 22 Nov first report. AFP via The Manila Times, 2026-11-22:
   https://www.manilatimes.net/world (headline, 22 Nov 2026)
   A 6.7-magnitude earthquake struck Peru's Junín region (20 Nov, per the
   handout photo caption); a fallen tree was pictured, no deaths reported.

## First-publication split

- 22 Nov first reports: items 1–5.
- Item 6: quake on 20 Nov, first reported in this wire round on 22 Nov.
