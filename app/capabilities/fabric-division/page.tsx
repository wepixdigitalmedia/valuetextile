import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { DivisionHero } from "@/components/capabilities/DivisionHero";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Fabric Lab, Inspection and Despatch",
  description:
    "An 11-test in-house fabric lab, 4-point and 10-point inspection, and scheduled fabric despatch from Tiruppur.",
};

const LAB_TESTS = [
  { sno: "1", test: "FABRIC WEIGHT" },
  { sno: "2", test: "COUNT" },
  { sno: "3", test: "CONSTRUCTION" },
  { sno: "4", test: "COLOR FASTNESS TO WASHING" },
  { sno: "5", test: "COLOR FASTNESS TO RUBBING" },
  { sno: "6", test: "COLOR FASTNESS TO PERSPIRATION" },
  { sno: "7", test: "COLOR FASTNESS TO WATER" },
  { sno: "8", test: "COLOR FASTNESS TO SALIVA" },
  { sno: "9", test: "DIMENSIONAL STABILITY" },
  { sno: "10", test: "SPIRALITY" },
  { sno: "11", test: "APPEARANCE AFTER WASH" },
];

const LAB_IMAGES = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/te1.jpg",
    title: "Physical & GSM Verification",
    subtitle: "Precision fabric weight, yarn count & construction testing",
    alt: "Fabric testing laboratory equipment at Value Textiles",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/te2.jpg",
    title: "Colour Fastness Testing",
    subtitle: "Washing, rubbing, water, saliva & perspiration fastness",
    alt: "Colour fastness testing instruments in Value Textiles laboratory",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/te4.jpg",
    title: "Dimensional Stability & Spirality",
    subtitle: "Shrinkage and appearance-after-wash evaluation",
    alt: "Dimensional stability and wash testing in fabric laboratory",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/te3.jpg",
    title: "Shade & Spectrophotometer Analysis",
    subtitle: "Batch-to-batch shade continuity and lab dip verification",
    alt: "Laboratory shade matching and quality testing workstation",
  },
];

const INSPECTION_LOT_SAMPLING = [
  { totalRolls: "100 & above", checkedRolls: "As per Square Root system" },
  { totalRolls: "50 - 99 Rolls", checkedRolls: "Min : 10 Rolls" },
  { totalRolls: "25 - 49 Rolls", checkedRolls: "Min : 7 Rolls" },
  { totalRolls: "11 - 24 Rolls", checkedRolls: "Min : 5 Rolls" },
  { totalRolls: "1 - 10 Rolls", checkedRolls: "All rolls" },
];

const POINTS_ALLOWED = [
  { points: "Upto 30", decision: "Pass" },
  { points: "31 - 40", decision: "Should be got Approval from THE HOD" },
  { points: "41 & Above", decision: "Rejected" },
];

const STICKER_IDENTIFICATION = [
  {
    color: "RED",
    dotClass: "bg-[var(--accent)]",
    badgeClass: "bg-[var(--white)] text-[var(--black)] border-[var(--accent)]",
    meaning: "Not OK",
  },
  {
    color: "ORANGE",
    dotClass: "bg-[var(--accent)] opacity-60",
    badgeClass: "bg-[var(--white)] text-[var(--black)] border-[var(--line)]",
    meaning: "Conditionally Approved (Cut This Rolls First)",
  },
  {
    color: "YELLOW",
    dotClass: "bg-[var(--text-muted)]",
    badgeClass: "bg-[var(--white)] text-[var(--black)] border-[var(--line)]",
    meaning: "Accepted (Cut This Rolls after Orange)",
  },
  {
    color: "GREEN",
    dotClass: "bg-[var(--black)]",
    badgeClass: "bg-[var(--white)] text-[var(--black)] border-[var(--black)]",
    meaning: "Passed (Cut This Rolls after Yellow)",
  },
];

const INSPECTION_IMAGES = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/fi1.jpg",
    title: "Illuminated 4-Point Inspection",
    subtitle: "Full-width backlit roll inspection machines",
    alt: "Fabric inspection machine at Value Textiles",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/fi2.jpg",
    title: "Defect Grading & Scoring",
    subtitle: "4-Point and 10-Point system defect evaluation",
    alt: "Operator inspecting knitted fabric roll for surface defects",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/fi3.jpg",
    title: "Width, GSM & Lot Verification",
    subtitle: "Roll-by-roll width uniformity and shade batching",
    alt: "Fabric roll quality verification and measurement",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/fi4.jpg",
    title: "Sticker Identification & Tagging",
    subtitle: "Colour-coded Red, Orange, Yellow & Green cutting priority tags",
    alt: "Inspected fabric rolls tagged for garment cutting or despatch",
  },
];

const DESPATCH_LEAD_TIMES = [
  { fabricType: "Solid", leadTime: "30 Days From L/D approval" },
  { fabricType: "Yarn dyed", leadTime: "45 Days From Y/D approval" },
  { fabricType: "Melange", leadTime: "35 Days" },
  { fabricType: "All Over Print", leadTime: "45 Days" },
];

const DESPATCH_IMAGES = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/d4.jpg",
    title: "Protective Roll Wrapping & Batching",
    subtitle: "Neat, moisture-safe packing sorted by lot and colourway",
    alt: "Packed fabric rolls ready for despatch at Value Textiles",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/d1.jpg",
    title: "Time & Action Scheduled Despatch",
    subtitle: "Timely delivery of right quantity with full lot documentation",
    alt: "Fabric despatch and logistics bay at Value Textiles",
  },
];

export default function FabricDivisionPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      <DivisionHero
        eyebrow="FABRIC LAB, INSPECTION AND DESPATCH"
        title="Every fabric lot tested and graded before it is cut."
        intro={[
          "Our in-house lab runs 11 tests on fabric, and every roll is graded under the 4-point and 10-point inspection systems before it goes to the cutting table or out to a buyer.",
          "We supply our own garment lines and, on request, finished knitted fabric to buyers.",
        ]}
        stats={[
          { value: "11", label: "Lab tests on fabric" },
          { value: "4-point + 10-point", label: "Fabric inspection systems" },
          { value: "4 colours", label: "Roll tags set the cutting order" },
          { value: "30 days", label: "Solid fabric, from lab dip approval" },
        ]}
      />

      {/* ============================================================ */}
      {/* 02. FABRIC TESTING - LABORATORY (Table + te1, te2, te4, te3) */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left (6 Cols): Intro + 11-Test Table */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <Eyebrow>01 · IN-HOUSE QUALITY VERIFICATION</Eyebrow>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
                  Fabric Testing – Laboratory
                </h2>
                <p className="text-base text-[var(--text-muted)] leading-relaxed mt-3">
                  Value Textile always aims to achieve and ensure for optimum
                  quality Fabric at all times. Our exclusive Fabric Testing
                  Laboratory ensures on the quality of our Fabric undergoing the
                  following tests in our lab:
                </p>
              </div>

              <div className="overflow-x-auto rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--surface)] border-b border-[var(--line)] text-[var(--black)] text-sm font-bold">
                      <th className="py-3.5 px-6 w-20">SNo</th>
                      <th className="py-3.5 px-6">TEST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm sm:text-[15px] text-[var(--text-muted)]">
                    {LAB_TESTS.map((row, idx) => (
                      <tr
                        key={row.sno}
                        className={
                          idx % 2 === 1 ? "bg-[var(--surface)]/60" : "bg-[var(--white)]"
                        }
                      >
                        <td className="py-3 px-6 text-xs font-bold text-[var(--black)]">
                          {row.sno}
                        </td>
                        <td className="py-3 px-6 font-medium text-[var(--black)]">
                          {row.test}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right (6 Cols): 2x2 Grid of Lab Photos (te1, te2, te4, te3) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {LAB_IMAGES.map((item, idx) => (
                <div
                  key={item.src}
                  className="group rounded-[12px] bg-[var(--surface)] border border-[var(--line)] overflow-hidden flex flex-col justify-between hover:border-[var(--black)] transition-colors duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--white)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-1">
                    <h3 className="text-base font-bold text-[var(--black)]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--text-muted)]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 03. FABRIC INSPECTION (4-Point & 10-Point + Sticker ID + fi1-4) */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container className="space-y-12">
          <div className="max-w-3xl">
            <Eyebrow>02 · 4-POINT &amp; 10-POINT QUALITY SYSTEM</Eyebrow>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
              Fabric Inspection
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed mt-3">
              The 4 Point system that is widely used in apparel Industry is
              followed in Value Textile for Fabric Inspection. However,
              depending upon our customer requests and to give them utmost
              satisfaction on our Fabric quality, 10 Point System of Fabric
              Inspection is also done.
            </p>
          </div>

          {/* 3 Inspection Tables Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Table 1: Total Rolls of Lot vs No. of Rolls to be checked (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-base font-bold text-[var(--black)]">
                Roll Sampling Plan
              </h3>
              <div className="overflow-x-auto rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--surface)] border-b border-[var(--line)] text-[var(--black)] text-sm font-bold">
                      <th className="py-3.5 px-5">Total Rolls of Lot</th>
                      <th className="py-3.5 px-5">No. of Rolls to be checked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm text-[var(--text-muted)]">
                    {INSPECTION_LOT_SAMPLING.map((row, idx) => (
                      <tr
                        key={row.totalRolls}
                        className={
                          idx % 2 === 1 ? "bg-[var(--surface)]/60" : "bg-[var(--white)]"
                        }
                      >
                        <td className="py-3.5 px-5 font-medium text-[var(--black)]">
                          {row.totalRolls}
                        </td>
                        <td className="py-3.5 px-5">{row.checkedRolls}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Points Allowed / 100 Mtrs (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-base font-bold text-[var(--black)]">
                Points Allowed / 100 Mtrs
              </h3>
              <div className="overflow-x-auto rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--surface)] border-b border-[var(--line)] text-[var(--black)] text-sm font-bold">
                      <th className="py-3.5 px-5">Points</th>
                      <th className="py-3.5 px-5">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm text-[var(--text-muted)]">
                    {POINTS_ALLOWED.map((row, idx) => (
                      <tr
                        key={row.points}
                        className={
                          idx % 2 === 1 ? "bg-[var(--surface)]/60" : "bg-[var(--white)]"
                        }
                      >
                        <td className="py-3.5 px-5 text-sm font-semibold text-[var(--black)]">
                          {row.points}
                        </td>
                        <td className="py-3.5 px-5 font-medium text-[var(--black)]">
                          {row.decision}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Sticker Identification (4 Cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-base font-bold text-[var(--black)]">
                Sticker Identification
              </h3>
              <div className="overflow-x-auto rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--surface)] border-b border-[var(--line)] text-[var(--black)] text-sm font-bold">
                      <th className="py-3.5 px-5">Sticker</th>
                      <th className="py-3.5 px-5">Identification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm text-[var(--text-muted)]">
                    {STICKER_IDENTIFICATION.map((item, idx) => (
                      <tr
                        key={item.color}
                        className={
                          idx % 2 === 1 ? "bg-[var(--surface)]/60" : "bg-[var(--white)]"
                        }
                      >
                        <td className="py-3.5 px-5">
                          <span
                            className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-bold border ${item.badgeClass}`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${item.dotClass}`}
                            />
                            {item.color}
                          </span>
                        </td>
                        <td className="py-3.5 px-5 font-medium text-[var(--black)]">
                          {item.meaning}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4 Inspection Photos Grid (fi1, fi2, fi3, fi4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {INSPECTION_IMAGES.map((item) => (
              <div
                key={item.src}
                className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] overflow-hidden flex flex-col justify-between hover:border-[var(--black)] transition-colors duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--white)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="text-base font-bold text-[var(--black)]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[var(--text-muted)]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 04. FABRIC DESPATCH (Lead Time Table + d4, d1)               */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left (5 Cols): Despatch Overview + Lead Time Table */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <Eyebrow>03 · PACKING &amp; LOGISTICS</Eyebrow>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
                  Fabric Despatch
                </h2>
                <p className="text-base text-[var(--text-muted)] leading-relaxed mt-3">
                  The Organization always aims at Customer satisfaction through
                  its despatches of right quantity of Fabric at right time and
                  with utmost safety. The time and action plan followed in the
                  organization with its untiring team warrants for timely
                  delivery of materials with neat and proper packing of
                  materials.
                </p>
              </div>

              <div className="overflow-x-auto rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--surface)] border-b border-[var(--line)] text-[var(--black)] text-sm font-bold">
                      <th className="py-4 px-6">Type Of Fabric</th>
                      <th className="py-4 px-6">Lead Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-sm sm:text-[15px] text-[var(--text-muted)]">
                    {DESPATCH_LEAD_TIMES.map((row, idx) => (
                      <tr
                        key={row.fabricType}
                        className={
                          idx % 2 === 1 ? "bg-[var(--surface)]/60" : "bg-[var(--white)]"
                        }
                      >
                        <td className="py-3.5 px-6 font-bold text-[var(--black)]">
                          {row.fabricType}
                        </td>
                        <td className="py-3.5 px-6 text-sm font-medium text-[var(--black)]">
                          {row.leadTime}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right (7 Cols): 2 Despatch Photos (d4, d1) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DESPATCH_IMAGES.map((item) => (
                <div
                  key={item.src}
                  className="group rounded-[12px] bg-[var(--surface)] border border-[var(--line)] overflow-hidden flex flex-col justify-between hover:border-[var(--black)] transition-colors duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--white)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-1.5">
                    <h3 className="text-lg font-bold text-[var(--black)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* FABRICS WE MAKE (fabric catalogue folded in from /products)  */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                What we knit <span className="text-[var(--accent)]">and dye.</span>
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[var(--text-muted)] max-w-md">
                Garments are our main product. Need fabric only? We take fabric and yarn-dyed fabric orders on request.
              </p>
              <Link
                href="/contact?type=fabric#quote"
                className="mt-5 inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors"
              >
                Ask about fabric only
              </Link>
            </div>
            <dl className="lg:col-span-7 border-t border-[var(--line)] divide-y divide-[var(--line)]">
              <div className="py-4 sm:py-5 flex flex-col sm:flex-row gap-1.5 sm:gap-8">
                <dt className="w-32 shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] pt-0.5">Fibres</dt>
                <dd className="text-[16px] leading-[1.6] text-[var(--black)]">
                  Cotton and organic cotton, polyester, Lycra, viscose, rayon, Tencel, bamboo and modal, alone or blended.
                </dd>
              </div>
              <div className="py-4 sm:py-5 flex flex-col sm:flex-row gap-1.5 sm:gap-8">
                <dt className="w-32 shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] pt-0.5">Constructions</dt>
                <dd className="text-[16px] leading-[1.6] text-[var(--black)]">
                  Single jersey, rib, interlock, auto-striper, mini jacquard and Lycra jersey.
                </dd>
              </div>
              <div className="py-4 sm:py-5 flex flex-col sm:flex-row gap-1.5 sm:gap-8">
                <dt className="w-32 shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] pt-0.5">Dyeing</dt>
                <dd className="text-[16px] leading-[1.6] text-[var(--black)]">
                  Solid, yarn-dyed, melange and all-over print, in our own dye house.
                </dd>
              </div>
            </dl>
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

