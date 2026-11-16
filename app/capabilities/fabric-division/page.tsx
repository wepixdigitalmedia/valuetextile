import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { siteConfig } from "@/config/siteContent";
import {
  ArrowRight,
  ClipboardCheck,
  FlaskConical,
  MapPin,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fabric Division | Value Textiles — Testing, Inspection & Despatch, Tirupur",
  description:
    "Value Textiles Fabric Division features an exclusive in-house Fabric Testing Laboratory (11-point lab testing), 4-Point & 10-Point Fabric Inspection with colour-coded roll identification, and scheduled Fabric Despatch.",
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
    dotClass: "bg-red-600",
    badgeClass: "bg-red-50 text-red-800 border-red-200",
    meaning: "Not OK",
  },
  {
    color: "ORANGE",
    dotClass: "bg-orange-500",
    badgeClass: "bg-orange-50 text-orange-800 border-orange-200",
    meaning: "Conditionally Approved (Cut This Rolls First)",
  },
  {
    color: "YELLOW",
    dotClass: "bg-amber-400",
    badgeClass: "bg-amber-50 text-amber-900 border-amber-200",
    meaning: "Accepted (Cut This Rolls after Orange)",
  },
  {
    color: "GREEN",
    dotClass: "bg-emerald-600",
    badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
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

const FABRIC_HIGHLIGHTS = [
  {
    icon: FlaskConical,
    title: "11-Parameter In-House Lab",
    text: "Every fabric batch is tested in our exclusive laboratory for GSM weight, yarn count, construction, 5 colour-fastness metrics, shrinkage, and spirality.",
  },
  {
    icon: ClipboardCheck,
    title: "4-Point & 10-Point Inspection",
    text: "Strict roll sampling with <30 points/100m pass criteria and Red, Orange, Yellow, and Green sticker identification for controlled cutting and shipment.",
  },
  {
    icon: Truck,
    title: "Guaranteed Despatch Lead Times",
    text: "Disciplined Time & Action (T&A) execution delivering Solid fabrics in 30 days, Melange in 35 days, and Yarn-Dyed or All-Over Print in 45 days.",
  },
];

export default function FabricDivisionPage() {
  return (
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* 01. FABRIC DIVISION HERO (Matching Knitting Division Layout) */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] pt-14 sm:pt-20 pb-14 sm:pb-20 border-b border-[#E8E2D9] overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-[-5%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/35 blur-[150px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / CAPABILITIES · FABRIC DIVISION · <Tiruppur />, INDIA
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1F1F1F] leading-[1.05] tracking-tight">
              Fabric Division
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Value Textiles always aims to achieve and ensure optimum quality
              fabric at all times. Our Fabric Division integrates an exclusive
              in-house Fabric Testing Laboratory, 4-Point and 10-Point Fabric
              Inspection systems, and a Time &amp; Action driven Fabric Despatch
              department.
            </p>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Whether supplying our own garment stitching lines or shipping
              finished knitted fabric rolls directly to buyers, every lot is
              verified for physical stability, colour fastness, surface
              perfection, and protective packing.
            </p>

            <div className="pt-1 flex items-center gap-2 text-sm font-mono text-[#554F47]">
              <MapPin className="w-4 h-4 text-[#C8741F] shrink-0" />
              <span>
                <strong className="text-[#1F1F1F]">Fabric &amp; QC Unit:</strong>{" "}
                {siteConfig.contact.addressFull}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Enquire About Fabrics &amp; Garments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/capabilities/dyeing-division"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white text-sm font-semibold transition-all"
              >
                <span>Dyeing Division</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. FABRIC TESTING - LABORATORY (Table + te1, te2, te4, te3) */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left (6 Cols): Intro + 11-Test Table */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                  / 01 · IN-HOUSE QUALITY VERIFICATION
                </p>
                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
                  Fabric Testing – Laboratory
                </h2>
                <p className="font-body text-sm sm:text-base text-[#554F47] leading-relaxed mt-3">
                  Value Textile always aims to achieve and ensure for optimum
                  quality Fabric at all times. Our exclusive Fabric Testing
                  Laboratory ensures on the quality of our Fabric undergoing the
                  following tests in our lab:
                </p>
              </div>

              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-6 w-20">SNo</th>
                      <th className="py-3.5 px-6">TEST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm sm:text-[15px] text-[#3B3631]">
                    {LAB_TESTS.map((row, idx) => (
                      <tr
                        key={row.sno}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3 px-6 font-mono text-xs font-semibold text-[#C8741F]">
                          {row.sno}
                        </td>
                        <td className="py-3 px-6 font-medium text-[#1F1F1F]">
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
                  className="group rounded-[24px] bg-[#FAF8F5] border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
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
                    <h3 className="font-heading text-base font-bold text-[#1F1F1F]">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-[13px] text-[#554F47]">
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
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container className="space-y-12">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / 02 · 4-POINT &amp; 10-POINT QUALITY SYSTEM
            </p>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Fabric Inspection
            </h2>
            <p className="font-body text-sm sm:text-base text-[#554F47] leading-relaxed mt-3">
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
              <h3 className="font-heading text-base font-bold text-[#1F1F1F]">
                Roll Sampling Plan
              </h3>
              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-5">Total Rolls of Lot</th>
                      <th className="py-3.5 px-5">No. of Rolls to be checked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm text-[#3B3631]">
                    {INSPECTION_LOT_SAMPLING.map((row, idx) => (
                      <tr
                        key={row.totalRolls}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-5 font-medium text-[#1F1F1F]">
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
              <h3 className="font-heading text-base font-bold text-[#1F1F1F]">
                Points Allowed / 100 Mtrs
              </h3>
              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-5">Points</th>
                      <th className="py-3.5 px-5">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm text-[#3B3631]">
                    {POINTS_ALLOWED.map((row, idx) => (
                      <tr
                        key={row.points}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-5 font-mono text-xs sm:text-sm font-semibold text-[#1F1F1F]">
                          {row.points}
                        </td>
                        <td className="py-3.5 px-5 font-medium text-[#1F1F1F]">
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
              <h3 className="font-heading text-base font-bold text-[#1F1F1F]">
                Sticker Identification
              </h3>
              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-5">Sticker</th>
                      <th className="py-3.5 px-5">Identification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm text-[#3B3631]">
                    {STICKER_IDENTIFICATION.map((item, idx) => (
                      <tr
                        key={item.color}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
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
                        <td className="py-3.5 px-5 font-medium text-[#1F1F1F]">
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
                className="group rounded-[24px] bg-white border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="font-heading text-base font-bold text-[#1F1F1F]">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#554F47]">
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
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left (5 Cols): Despatch Overview + Lead Time Table */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                  / 03 · PACKING &amp; LOGISTICS
                </p>
                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
                  Fabric Despatch
                </h2>
                <p className="font-body text-sm sm:text-base text-[#554F47] leading-relaxed mt-3">
                  The Organization always aims at Customer satisfaction through
                  its despatches of right quantity of Fabric at right time and
                  with utmost safety. The time and action plan followed in the
                  organization with its untiring team warrants for timely
                  delivery of materials with neat and proper packing of
                  materials.
                </p>
              </div>

              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-4 px-6">Type Of Fabric</th>
                      <th className="py-4 px-6">Lead Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm sm:text-[15px] text-[#3B3631]">
                    {DESPATCH_LEAD_TIMES.map((row, idx) => (
                      <tr
                        key={row.fabricType}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-6 font-bold text-[#1F1F1F]">
                          {row.fabricType}
                        </td>
                        <td className="py-3.5 px-6 font-mono text-sm">
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
                  className="group rounded-[26px] bg-[#FAF8F5] border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-1.5">
                    <h3 className="font-heading text-lg font-bold text-[#1F1F1F]">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[#554F47]">
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
      {/* 05. HIGHLIGHTS & CTA (Matching Knitting Division Layout)     */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {FABRIC_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-[26px] bg-white border border-[#E8E2D9] space-y-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#C8741F]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1F1F1F]">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm sm:text-[15px] text-[#554F47] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-[32px] bg-[#1F1F1F] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2.5">
              <p className="font-mono text-xs uppercase tracking-widest text-[#F7C08A]">
                / LAB-TESTED &amp; 4-POINT INSPECTED KNITS
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Ready to source lab-verified fabrics or full-package garments?
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Share your fabric GSM, composition, or garment tech pack with
                our Tiruppur merchandising desk.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#C8741F] hover:bg-[#b56618] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/garments"
                className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border border-white/25 hover:border-white text-white font-semibold text-sm transition-all"
              >
                <span>Explore Garments</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

