import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import { StageHero } from "@/components/capabilities/StageHero";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { CAPABILITY_IMAGES } from "@/config/capabilityImages";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fabric Lab, Inspection and Despatch",
  description:
    "An 11-test in-house fabric lab, 4-point and 10-point inspection, and scheduled fabric despatch from Tiruppur.",
};

/** The eleven lab tests in three groups. */
const TEST_GROUPS = [
  {
    title: "Physical",
    note: "Confirms the fabric is what you specified.",
    tests: ["Fabric weight", "Count", "Construction"],
  },
  {
    title: "Colour fastness",
    note: "Shows how the colour behaves in wash, rubbing, sweat, water and saliva.",
    tests: [
      "To washing",
      "To rubbing",
      "To perspiration",
      "To water",
      "To saliva",
    ],
  },
  {
    title: "Stability and look",
    note: "Shows how the fabric holds its shape and looks after washing.",
    tests: ["Dimensional stability", "Spirality", "Appearance after wash"],
  },
];

/** Points allowed per 100 metres under the 4-point system. */
const VERDICTS = [
  { range: "Up to 30", result: "Pass", accent: false },
  { range: "31 to 40", result: "Needs approval from the head of department", accent: false },
  { range: "41 and above", result: "Rejected", accent: true },
];

const SAMPLING = [
  "1 to 10 rolls: all checked",
  "11 to 24 rolls: at least 5",
  "25 to 49 rolls: at least 7",
  "50 to 99 rolls: at least 10",
  "100 or more: square-root system",
];

const STICKERS = [
  { colour: "#D93025", name: "Red", meaning: "Not OK" },
  { colour: "#F28C28", name: "Orange", meaning: "Conditionally approved, cut first" },
  { colour: "#F4C430", name: "Yellow", meaning: "Accepted, cut after orange" },
  { colour: "#2E9E5B", name: "Green", meaning: "Passed, cut after yellow" },
];

/** Fabric lead times, for fabric-only orders. */
const LEAD_TIMES = [
  { type: "Solid", days: "30", note: "days, from lab dip approval" },
  { type: "Yarn dyed", days: "45", note: "days, from yarn-dyed approval" },
  { type: "Melange", days: "35", note: "days" },
  { type: "All over print", days: "45", note: "days" },
];

export default function FabricDivisionPage() {
  const image = CAPABILITY_IMAGES.lab;

  return (
    <main className="w-full bg-[var(--white)]">
      <StageHero
        eyebrow="Fabric lab and inspection"
        title="Every lot is tested, then every roll is graded."
        intro="Our lab runs 11 tests on fabric. Rolls are then graded under the 4-point system, or the 10-point system on request, before they reach the cutting table or go out to a buyer."
        big={{ value: "11", caption: "lab tests on fabric" }}
        current="fabric"
      />

      {/* THE TESTS: three groups of chips, with the stage photo */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                  The eleven tests
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)] max-w-xl">
                  Run in our own lab on each fabric lot, before it moves on.
                </p>
              </div>

              {TEST_GROUPS.map((g) => (
                <div key={g.title}>
                  <h3 className="text-[19px] font-extrabold tracking-[-0.02em] text-[var(--black)]">{g.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.5] text-[var(--text-muted)]">{g.note}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.tests.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center rounded-[6px] border border-[var(--line)] bg-[var(--white)] px-3 py-1.5 text-[14px] text-[var(--black)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
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

      {/* DARK BAND: how rolls are graded */}
      <section className="w-full bg-[var(--black)] py-14 lg:py-20">
        <Container>
          <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--white)]">
            How rolls are graded
          </h2>
          <p className="mt-3 text-[15.5px] leading-[1.65] text-[var(--white)]/75 max-w-2xl">
            The 4-point system is used across the apparel industry, and we also run the 10-point system when a buyer asks
            for it. The score is points per 100 metres.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {VERDICTS.map((v) => (
              <div key={v.range} className="rounded-[12px] border border-[var(--white)]/25 p-6">
                <p
                  className={`text-[34px] font-extrabold leading-none tracking-[-0.03em] ${
                    v.accent ? "text-[var(--accent)]" : "text-[var(--white)]"
                  }`}
                >
                  {v.range}
                </p>
                <p className="mt-3 text-[15px] leading-[1.5] text-[var(--white)]/80">{v.result}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--white)]/60">
                How many rolls we check
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SAMPLING.map((s) => (
                  <li
                    key={s}
                    className="inline-flex items-center rounded-[6px] border border-[var(--white)]/25 px-3 py-1.5 text-[14px] text-[var(--white)]/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--white)]/60">
                Roll tags set the cutting order
              </h3>
              <ul className="mt-3 space-y-2.5">
                {STICKERS.map((s) => (
                  <li key={s.name} className="flex items-center gap-3 text-[15px] text-[var(--white)]/90">
                    <span
                      className="h-3.5 w-3.5 shrink-0 rounded-full"
                      style={{ backgroundColor: s.colour }}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="font-bold text-[var(--white)]">{s.name}</span>: {s.meaning}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FABRIC-ONLY ORDERS AND LEAD TIMES */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                Need fabric only?
              </h2>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--text-muted)] max-w-md">
                Garments are our main product, but we take fabric and yarn-dyed fabric orders on request. Rolls are wrapped
                and sorted by lot and colourway, and despatch follows a time and action plan.
              </p>
              <Link
                href="/contact?type=fabric#quote"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                Ask about fabric only <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Fabric lead times
              </p>
              <ul className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {LEAD_TIMES.map((l) => (
                  <li key={l.type} className="rounded-[12px] bg-[var(--white)] p-4 sm:p-5">
                    <p className="text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[var(--black)]">
                      {l.days}
                    </p>
                    <p className="mt-1 text-[12px] leading-[1.4] text-[var(--text-muted)]">{l.note}</p>
                    <p className="mt-3 text-[14.5px] font-bold text-[var(--black)]">{l.type}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[13px] text-[var(--text-muted)]">
                For fabric orders only. Garment lead times are confirmed with your quote.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <DivisionNext
        current="fabric"
        quoteHeading="Ready to test your fabric with us?"
        quoteText="Send your fabric specification or tech pack. We tell you what we can knit, dye and test, and how long it takes."
      />
    </main>
  );
}
