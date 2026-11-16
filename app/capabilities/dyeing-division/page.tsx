import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/siteContent";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  FlaskConical,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dyeing Division | Value Textiles — Capabilities, Perundurai & Tirupur",
  description:
    "Value Textiles Dyeing Division features Brazzoli & Dilmenler HTHP soft-flow dyeing machines with SETEX & ORGATEX automation, THIES dispensing, TubeTex & Mario Crosta finishing, and SIMEM Zero Liquid Discharge (ZLD).",
};

const DYEING_GALLERY = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/dy3.jpg",
    title: "Soft-Flow Fabric & Yarn Dyeing Floor",
    subtitle:
      "Brazzoli & Dilmenler HTHP soft-flow machines with SETEX & ORGATEX centralized dyehouse management",
    alt: "Soft-flow dyeing machines at Value Textiles Dyeing Division in Perundurai",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/dy5.jpg",
    title: "Tubular & Open-Width Finishing Line",
    subtitle:
      "TubeTex compacting, Stenter 8-chamber dryer, Dilmenler & STRAHM relax dryers, and Mario Crosta raising & peach finishing",
    alt: "Fabric finishing, compacting, and stenter machinery at Value Textiles Dyeing Division",
  },
];

const DYEING_MACHINES = [
  { make: "BRAZZOLI", capacity: "1500 kgs", type: "HTHP" },
  { make: "DILMENLER", capacity: "900 kgs", type: "–" },
  { make: "DILMENLER", capacity: "600 kgs", type: "–" },
  { make: "DILMENLER", capacity: "450 kgs", type: "HTHP" },
  { make: "DILMENLER", capacity: "300 kgs", type: "–" },
  { make: "PRANAV AQUA", capacity: "50 kgs", type: "HTHP" },
  { make: "NUVAS", capacity: "25 kgs X 2", type: "HTHP" },
];

const DYEING_CERTIFICATIONS = [
  "OEKO-Tex Standard 100 Certified (Class 1)",
  "TEST-NO. 09. HIN . 70527",
  "GOTS-Annex To Certificate No: CU828190GOTS-01.2013",
  "OCS-CB-CUI-828190",
  "ZDHC-CLEAR STREAM",
];

const COLOR_LAB_EQUIPMENTS = [
  { brand: "KONICA MINOLTA", equipment: "SPECTRO PHOTOMETER" },
  { brand: "STARLET", equipment: "LAB DYEING M/C" },
  { brand: "SPI", equipment: "LAB DYEING M/C" },
  { brand: "SPI", equipment: "LAB DYEING M/C" },
  { brand: "SPI AUTOLAB", equipment: "LAB DYEING M/C" },
  { brand: "SPI", equipment: "DYE & CHEMICAL DISPENSER" },
  { brand: "VERIVIDE", equipment: "Colour Matching Cabinet" },
];

const QUALITY_LAB_EQUIPMENTS = [
  "LAUNDROMETER",
  "CROCKMETER",
  "PERSPIROMETER",
  "STRETCH & RECOVERY TESTER",
  "BURSTING STRENGTH TESTER",
  "WASHING M/C",
  "TUMBLE DRYER",
];

const FINISHING_MACHINES = [
  { no: "1", spec: "Bianco - Tubular Double padder - 1 No" },
  { no: "2", spec: "Stenter Dryer - TEXSINGH MFG.CO - 8 CHAMBER 1 No" },
  { no: "3", spec: "Dilmenler - 4 Chamber Relax Drier - 1 No" },
  { no: "4", spec: "STRAHM - 3 Chamber Relax Drier - 1 No" },
  { no: "5", spec: "Corino (Italy) Slit Opener Machine - 1 No" },
  { no: "6", spec: "TubeTex (Pak nit II Delta Plus) Tubular Compacting - 1 No" },
  {
    no: "7",
    spec: "TubeTex (C 2500- USA) open Width Compacting - 1 No Open Width compactor with MAHLO Weft Straightener.",
  },
  { no: "8", spec: "Mario Crosta (Italy) Raising - 1 No" },
  { no: "9", spec: "Mario Crosta (Italy) Peach Finishing - 1 No" },
];

const ETP_STAGES = [
  {
    no: "1",
    spec: "1000m³ / day BIOLOGICAL pre-treatment and 626m³ / day Reverse Osmosis plant with full automation from SIMEM, Italy.",
  },
  {
    no: "2",
    spec: "Colour Removal By Ozone.",
  },
  {
    no: "3",
    spec: "125m³ / day Multi Effect Evaporation system & 50m³ / day Forced Circulator",
  },
  {
    no: "4",
    spec: "Agitated thin film drier to dry final sludge.",
  },
];

const DYEING_HIGHLIGHTS = [
  {
    icon: Droplets,
    title: "SETEX, ORGATEX & THIES Automation",
    text: "All bulk soft-flow dyeing machines operate with SETEX controllers, ORGATEX centralized dyehouse management, and THIES Germany liquid chemical & dye dispensing.",
  },
  {
    icon: FlaskConical,
    title: "Color & Quality Testing Labs",
    text: "Equipped with Konica Minolta spectrophotometer, SPI Autolab dispensing, VeriVide colour cabinet, and full physical fastness and shrinkage testing.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Liquid Discharge (ZLD)",
    text: "Automated SIMEM Italy biological & RO plant with ozone colour removal and multi-effect evaporation, recycling both water and salt per government norms.",
  },
];

export default function DyeingDivisionPage() {
  return (
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* 01. DYEING DIVISION HERO (Matching Knitting Division Layout) */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] pt-14 sm:pt-20 pb-14 sm:pb-20 border-b border-[#E8E2D9] overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-[-5%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/35 blur-[150px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / CAPABILITIES · DYEING DIVISION · SIPCOT PERUNDURAI, INDIA
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1F1F1F] leading-[1.05] tracking-tight">
              Dyeing Division
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Usage of wide range of exclusive dyeing machines like soft flow
              dyeing machine, yarn dyeing and fabric dyeing, stenter and tubular
              etc reveals the Organization&apos;s vast experience in
              manufacturing of fabrics and yarn dyeing.
            </p>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              For knitted fabric processing, we operate high-efficiency
              soft-flow machines equipped with SETEX controllers, ORGATEX
              centralized dyehouse management system, and automated liquid
              chemical &amp; dye dispensing from THIES Germany.
            </p>

            <div className="pt-1 flex items-start sm:items-center gap-2 text-sm font-mono text-[#554F47]">
              <MapPin className="w-4 h-4 text-[#C8741F] shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong className="text-[#1F1F1F]">Dyeing Unit:</strong>{" "}
                {siteConfig.contact.dyeingAddress}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Enquire About Dyeing &amp; Fabrics</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/capabilities/knitting-division"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white text-sm font-semibold transition-all"
              >
                <span>Knitting Division</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. DYEING DIVISION GALLERY (dy3.jpg & dy5.jpg)              */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / INSIDE OUR DYEHOUSE
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Automated soft-flow dyeing &amp; precision finishing.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {DYEING_GALLERY.map((item, idx) => (
              <div
                key={item.src}
                className="group rounded-[26px] bg-white border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={idx < 2}
                    sizes="(max-width: 768px) 100vw, 50vw"
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
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 03. FABRIC DYEING MACHINES & CERTIFICATIONS                  */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left (8 Cols): Dyeing Machines Table */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                  / FABRIC DYEING MACHINES
                </p>
                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
                  Dyeing Machines
                </h2>
                <p className="font-body text-sm sm:text-base text-[#554F47] mt-2">
                  For knitted fabric processing we have the following Soft-Flow
                  M/C&apos;s with SETEX (controller) &amp; ORGATEX (Centralised
                  Dyehouse management system):
                </p>
              </div>

              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-4 px-6">Machine Make</th>
                      <th className="py-4 px-6">Capacity</th>
                      <th className="py-4 px-6">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm sm:text-[15px] text-[#3B3631]">
                    {DYEING_MACHINES.map((row, idx) => (
                      <tr
                        key={`${row.make}-${row.capacity}-${idx}`}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-6 font-medium text-[#1F1F1F]">
                          {row.make}
                        </td>
                        <td className="py-3.5 px-6 font-mono text-sm">
                          {row.capacity}
                        </td>
                        <td className="py-3.5 px-6 font-mono text-sm">
                          {row.type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-mono text-xs text-[#6E665E]">
                * All bulk dyeing M/c&apos;s are connected to Liquid Chemical
                &amp; dye dispensing system of THIES Germany &amp; Orgatex
                centralized.
              </p>
            </div>

            {/* Right (4 Cols): Dyeing Certifications Card */}
            <aside className="lg:col-span-4">
              <div className="rounded-[24px] bg-[#FAF8F5] border-t-4 border-t-[#C8741F] border border-[#E8E2D9] p-7 sm:p-8 space-y-6">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#C8741F]">
                    / COMPLIANCE
                  </p>
                  <h3 className="font-heading text-2xl font-extrabold text-[#1F1F1F] mt-1">
                    Certifications
                  </h3>
                </div>

                <ul className="space-y-4">
                  {DYEING_CERTIFICATIONS.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C8741F]/15 text-[#C8741F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-heading text-sm sm:text-[15px] font-semibold text-[#1F1F1F]">
                        {cert}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 04. LAB EQUIPMENTS (COLOR LAB & QUALITY LAB)                 */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container className="space-y-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / IN-HOUSE TESTING &amp; SHADE MATCHING
            </p>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Lab Equipments
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Color Lab Table */}
            <div className="space-y-3">
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-[#554F47]">
                COLOR LAB is equipped with
              </h3>
              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-6">Make / System</th>
                      <th className="py-3.5 px-6">Equipment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm text-[#3B3631]">
                    {COLOR_LAB_EQUIPMENTS.map((item, idx) => (
                      <tr
                        key={`${item.brand}-${item.equipment}-${idx}`}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-6 font-semibold text-[#1F1F1F]">
                          {item.brand}
                        </td>
                        <td className="py-3.5 px-6">{item.equipment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality Lab Table */}
            <div className="space-y-3">
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-[#554F47]">
                QUALITY LAB is equipped with
              </h3>
              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-6 w-16">#</th>
                      <th className="py-3.5 px-6">Testing Instrument</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm text-[#3B3631]">
                    {QUALITY_LAB_EQUIPMENTS.map((instrument, idx) => (
                      <tr
                        key={instrument}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-6 font-mono text-xs text-[#78716C]">
                          0{idx + 1}
                        </td>
                        <td className="py-3.5 px-6 font-medium text-[#1F1F1F]">
                          {instrument}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 05. FINISHING & EFFLUENT TREATMENT PLANT (ZLD)               */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Finishing Machinery Table (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                  / COMPACTING, DRYING &amp; SURFACE FINISHING
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] mt-1">
                  Finishing
                </h2>
              </div>

              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-5 w-14">No.</th>
                      <th className="py-3.5 px-6">Machine Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm text-[#3B3631]">
                    {FINISHING_MACHINES.map((item, idx) => (
                      <tr
                        key={item.no}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-5 font-mono text-xs font-semibold text-[#C8741F]">
                          {item.no}
                        </td>
                        <td className="py-3.5 px-6 font-medium text-[#1F1F1F]">
                          {item.spec}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Effluent Treatment Plant Table (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                  / ZERO LIQUID DISCHARGE (ZLD)
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] mt-1">
                  Effluent Treatment Plant
                </h2>
              </div>

              <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                      <th className="py-3.5 px-5 w-14">Stage</th>
                      <th className="py-3.5 px-6">Process &amp; Capacity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E2D9] font-body text-sm text-[#3B3631]">
                    {ETP_STAGES.map((stage, idx) => (
                      <tr
                        key={stage.no}
                        className={
                          idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"
                        }
                      >
                        <td className="py-3.5 px-5 font-mono text-xs font-semibold text-[#C8741F]">
                          {stage.no}
                        </td>
                        <td className="py-3.5 px-6 font-medium text-[#1F1F1F] leading-relaxed">
                          {stage.spec}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-5 rounded-2xl bg-[#F2F7F1] border border-[#96BC92] text-xs sm:text-sm text-[#1A2419] font-medium leading-relaxed">
                Using the above we are recycling both water as well as salt and
                meeting the <strong>ZERO LIQUID DISCHARGE (ZLD)</strong> as per
                Government norms.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 06. HIGHLIGHTS & CTA (Matching Knitting Division Layout)     */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {DYEING_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-[26px] bg-[#FAF8F5] border border-[#E8E2D9] space-y-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#C8741F]">
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
                / PANTONE LAB DIPS TO BULK PRODUCTION
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Need OEKO-TEX® &amp; GOTS certified fabric dyeing for your garments?
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Share your Pantone shade codes, fabric GSM, and garment tech
                pack. We knit, dye, finish, test, and stitch in our own units.
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

