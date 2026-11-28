import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import { FullSpec } from "@/components/capabilities/FullSpec";
import { StageHero } from "@/components/capabilities/StageHero";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { CAPABILITY_IMAGES } from "@/config/capabilityImages";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Knitting",
  description:
    "Mayer & Cie circular knitting in Tiruppur: single jersey, rib, interlock, striper, mini jacquard and Lycra jersey, two shifts a day.",
};

/** The eleven machine setups, kept in full for the collapsed specification. */
const MACHINE_SPECS = [
  { fabricType: "S/J Auto Striper", dia: "26", gg: "20/24", feeders: "42", colour: "4" },
  { fabricType: "S/J Auto Striper", dia: "30", gg: "20/24", feeders: "48", colour: "4" },
  { fabricType: "S/J Auto Striper", dia: "30", gg: "24/28", feeders: "48", colour: "4" },
  { fabricType: "S/J Auto Striper", dia: "34", gg: "24", feeders: "54", colour: "4" },
  { fabricType: "S/J Auto Striper", dia: "34", gg: "24", feeders: "54", colour: "5 to 10" },
  { fabricType: "Mini Jacquard Striper", dia: "30", gg: "24", feeders: "72", colour: "All self design" },
  { fabricType: "Mini Jacquard Striper", dia: "30", gg: "28", feeders: "72", colour: "All self design" },
  { fabricType: "Rib & I/L Auto Striper", dia: "30", gg: "18/24", feeders: "48", colour: "4" },
  { fabricType: "Rib & I/L Auto Striper", dia: "34", gg: "18/24", feeders: "54", colour: "4" },
  { fabricType: "Lycra Jersey", dia: "30", gg: "28", feeders: "–", colour: "Plain" },
  { fabricType: "Lycra Jersey", dia: "32", gg: "28", feeders: "–", colour: "Plain" },
];

/** The same machines grouped by what they make. Figures are read from the table above. */
const KNIT_GROUPS = [
  {
    name: "Single jersey auto-striper",
    use: "Everyday tees, polos and striped tops.",
    specs: [
      ["Diameter", '26", 30", 34"'],
      ["Gauge", "20/24, 24/28, 24 GG"],
      ["Feeders", "42 to 54"],
      ["Colours", "4, and 5 to 10 on one"],
    ],
  },
  {
    name: "Mini jacquard striper",
    use: "Self-design and textured fabric.",
    specs: [
      ["Diameter", '30"'],
      ["Gauge", "24 and 28 GG"],
      ["Feeders", "72"],
      ["Colours", "All self design"],
    ],
  },
  {
    name: "Rib and interlock auto-striper",
    use: "Rib and interlock for polos, kids wear and layering.",
    specs: [
      ["Diameter", '30", 34"'],
      ["Gauge", "18/24 GG"],
      ["Feeders", "48 and 54"],
      ["Colours", "4"],
    ],
  },
  {
    name: "Lycra jersey",
    use: "Stretch fabric for activewear and fitted styles.",
    specs: [
      ["Diameter", '30", 32"'],
      ["Gauge", "28 GG"],
      ["Feeders", "Plain jersey"],
      ["Colours", "Plain"],
    ],
  },
];

const BAND_POINTS = [
  "Two shifts a day, under an experienced manager.",
  "Multi-colour yarn feeders for stripes and jacquards.",
  "Our fabric goes to our own dye house and garment lines.",
];

export default function KnittingDivisionPage() {
  const image = CAPABILITY_IMAGES.knitting;

  return (
    <main className="w-full bg-[var(--white)]">
      <StageHero
        eyebrow="Knitting"
        title="We knit our own fabric, so structure and stripe are ours to set."
        intro="Mayer & Cie circular knitting machines with multi-colour yarn feeders make the jersey, rib, interlock, striper, jacquard and Lycra fabric that goes to our dye house and garment lines."
        big={{ value: String(MACHINE_SPECS.length), caption: "machine setups, all Mayer & Cie" }}
        current="knitting"
      />

      {/* WHAT WE KNIT: four machine groups as tiles, with the stage photo */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
              What we knit
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
              Four machine groups. Each is set up for a different kind of fabric.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {KNIT_GROUPS.map((g) => (
                <li key={g.name} className="rounded-[12px] bg-[var(--surface)] p-5 sm:p-6">
                  <h3 className="text-[19px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--black)]">
                    {g.name}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.5] text-[var(--text-muted)]">{g.use}</p>
                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[var(--line)] pt-4">
                    {g.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                          {k}
                        </dt>
                        <dd className="mt-0.5 text-[14.5px] font-semibold leading-[1.35] text-[var(--black)]">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <ImageSlot
                label={image.label}
                hint={image.hint}
                desktop={image.desktop}
                mobile={image.mobile}
                alt={image.alt}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* DARK BAND: what the knitting floor guarantees the rest of the chain */}
      <section className="w-full bg-[var(--black)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <h2 className="lg:col-span-6 text-[28px] sm:text-[38px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--white)]">
              Knitted here. Dyed here. Cut here.
            </h2>
            <ul className="lg:col-span-6 space-y-4">
              {BAND_POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[16px] leading-[1.55] text-[var(--white)]/80">
                  <ArrowRight className="mt-1 w-4 h-4 shrink-0 text-[var(--accent)]" strokeWidth={2.4} />
                  {p}
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/capabilities/dyeing-division"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--white)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
                >
                  See where it goes next: dyeing <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* FULL SPECIFICATION: the eleven setups, closed by default */}
      <FullSpec title="Full machine list" hint={`${MACHINE_SPECS.length} setups, all Mayer & Cie`}>
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[520px] text-left border-collapse text-[14px]">
            <thead>
              <tr className="border-b border-[var(--black)] text-[var(--black)] font-bold">
                <th className="py-2.5 pr-4">Fabric type</th>
                <th className="py-2.5 pr-4">Dia</th>
                <th className="py-2.5 pr-4">GG</th>
                <th className="py-2.5 pr-4">Feeders</th>
                <th className="py-2.5">Colour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-[var(--text-muted)]">
              {MACHINE_SPECS.map((row, i) => (
                <tr key={`${row.fabricType}-${row.dia}-${row.gg}-${i}`}>
                  <td className="py-2.5 pr-4 font-semibold text-[var(--black)]">{row.fabricType}</td>
                  <td className="py-2.5 pr-4">{row.dia}</td>
                  <td className="py-2.5 pr-4">{row.gg}</td>
                  <td className="py-2.5 pr-4">{row.feeders}</td>
                  <td className="py-2.5">{row.colour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FullSpec>

      <DivisionNext
        current="knitting"
        quoteHeading="Have a fabric in mind?"
        quoteText="Send a reference swatch or the construction and GSM. We tell you which machine knits it and how long it takes."
      />
    </main>
  );
}
