import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { siteConfig } from "@/config/siteContent";
import {
  ArrowRight,
  Factory,
  Leaf,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Manufacturing Division | Value Textiles — Capabilities, Tirupur",
  description:
    "Value Textiles Garment Manufacturing Division in Tirupur manufactures knitted and woven garments for domestic and global markets with vertically integrated facilities, Total Quality Management, and sustainable production.",
};

const GARMENT_GALLERY = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g1.jpg",
    title: "T-Shirts & Casual Knits",
    subtitle: "Crew neck, V-neck & everyday single jersey programs",
    alt: "Knitted casual garment produced at Value Textiles Garment Division",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g2.jpg",
    title: "Polos & Structured Collars",
    subtitle: "Pique, interlock & yarn-dyed auto-striper polos",
    alt: "Export-grade polo and knitwear garment from Value Textiles",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g3.jpg",
    title: "Kids & Baby Wear",
    subtitle: "Soft, skin-safe knits with pull-tested baby-safe trims",
    alt: "Children's and baby knitwear garment manufactured in Tirupur",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g4.jpg",
    title: "Men's & Women's Knitwear",
    subtitle: "Tops, hoodies, sweatshirts & seasonal fashion styles",
    alt: "Men's and women's knitwear collection made with in-house fabric",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g5.jpg",
    title: "Activewear & Loungewear",
    subtitle: "Flatlock stretch performance & breathable lounge sets",
    alt: "Activewear and loungewear garment stitched on dedicated lines",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g6.jpg",
    title: "Private Label & Export Packing",
    subtitle: "Custom trims, branding, needle detection & master cartons",
    alt: "Private label finished garment ready for international export",
  },
];

const GARMENT_LINE_SPECS = [
  {
    stage: "CAD Pattern & Grading",
    machinery: "Digital CAD Pattern & Marker System",
    capability: "Custom Brand Grading (Infant to 3XL)",
    spiOrStandard: "±0.5 cm Spec Tolerance",
    qcCheck: "Proto & Size-Set Fit Approval",
  },
  {
    stage: "Fabric Relaxation & Spreading",
    machinery: "Relaxation Racks & Precision Lay Tables",
    capability: "Tubular & Open-Width Knit Spreading",
    spiOrStandard: "24-Hr Tension-Free Rest",
    qcCheck: "4-Point Fabric & Shade Lot Check",
  },
  {
    stage: "Cutting & Panel Matching",
    machinery: "Straight Knife & Precision Band Knife Cutters",
    capability: "Auto-Striper & Jacquard Stripe Alignment",
    spiOrStandard: "100% Die / Template Accuracy",
    qcCheck: "100% Cut-Panel & Bundle Audit",
  },
  {
    stage: "Overlock & Seam Assembly",
    machinery: "JUKI / Pegasus 4-Thread & 5-Thread Overlock",
    capability: "Shoulder Taping, Side Seams & Rib Attach",
    spiOrStandard: "11–13 SPI (Stitches Per Inch)",
    qcCheck: "In-Line Roaming QC Inspection",
  },
  {
    stage: "Flatlock & Coverstitch",
    machinery: "3-Needle 5-Thread Flatbed & Cylinder Interlock",
    capability: "Bottom Hem, Sleeve Hem & Activewear Flatseams",
    spiOrStandard: "Stretch Recovery Calibrated",
    qcCheck: "Seam Elasticity & Unravelling Test",
  },
  {
    stage: "Lockstitch, Placket & Trims",
    machinery: "Computerised Single-Needle, Bartack & Snap Attach",
    capability: "Polo Plackets, Collar Topstitch & Baby Snaps",
    spiOrStandard: "90N Pull-Force Snap Standard",
    qcCheck: "Symmetry & Pull-Test Verification",
  },
  {
    stage: "Finishing & Steam Pressing",
    machinery: "Vacuum Steam Ironing Tables & Spot Cleaning",
    capability: "Dimensional Shaping, Thread Trimming & Tagging",
    spiOrStandard: "Buyer Folding & Presentation Spec",
    qcCheck: "100% Piece-by-Piece Measurement & Visual QC",
  },
  {
    stage: "Needle Detection & Carton Packing",
    machinery: "9-Point Conveyor Ferrous Metal Detector",
    capability: "Polybag, Barcode, Hanger & Master Carton Packing",
    spiOrStandard: "1.0 mm Fe Sensitivity Calibration",
    qcCheck: "AQL 1.5 / 2.5 Final Statistical Audit",
  },
];

const GARMENT_HIGHLIGHTS = [
  {
    icon: Factory,
    title: "Vertically Integrated Facilities",
    text: "Our own knitting, soft-flow dyeing, testing lab, and garment stitching lines eliminate third-party delays and protect shade consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Total Quality Management",
    text: "TQM initiatives embedded across every stage—from yarn testing and 4-point fabric inspection to in-line stitching checks and final AQL garment QC.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Ethical Fashion",
    text: "Responsible manufacturing with Zero Liquid Discharge (ZLD) water recycling, BCI, GRS, GOTS, and OEKO-TEX® certified production practices.",
  },
];

export default function GarmentManufacturingCapabilitiesPage() {
  return (
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* 01. GARMENT DIVISION HERO (Matching Knitting Division Layout) */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] pt-14 sm:pt-20 pb-14 sm:pb-20 border-b border-[#E8E2D9] overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-[-5%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/35 blur-[150px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / CAPABILITIES · GARMENT DIVISION · <Tiruppur />, INDIA
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1F1F1F] leading-[1.05] tracking-tight">
              Garment Manufacturing
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Value Textiles manufactures knitted and woven garments for the
              domestic and global markets with its vertically-integrated
              infrastructural facilities, hi-tech machinery and skilled
              personnel. A quality-centric company, Value Textiles has adopted
              Total Quality Management initiatives in all its processes.
            </p>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Our commitment to sustainability extends to every stage of
              production, ensuring responsible manufacturing processes and
              promoting ethical fashion. Discover our collection that combines
              style and sustainability, making a positive impact on the
              environment and the world we live in.
            </p>

            <div className="pt-1 flex items-center gap-2 text-sm font-mono text-[#554F47]">
              <MapPin className="w-4 h-4 text-[#C8741F] shrink-0" />
              <span>
                <strong className="text-[#1F1F1F]">Garmenting Unit:</strong>{" "}
                {siteConfig.contact.addressFull}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Request Garment Quote</span>
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
      {/* 02. PRODUCTION LINE & SEWING SPECIFICATION TABLE             */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl mb-8 sm:mb-10">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / PRODUCTION LINEUP &amp; STANDARDS
            </p>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Cut, Stitch &amp; Export Finishing Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                  <th className="py-4 px-6">Production Stage</th>
                  <th className="py-4 px-6">Machinery &amp; Setup</th>
                  <th className="py-4 px-6">Operation Capability</th>
                  <th className="py-4 px-6">Standard / Parameter</th>
                  <th className="py-4 px-6">Quality Gate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D9] font-body text-sm sm:text-[15px] text-[#3B3631]">
                {GARMENT_LINE_SPECS.map((row, idx) => (
                  <tr
                    key={row.stage}
                    className={idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"}
                  >
                    <td className="py-3.5 px-6 font-medium text-[#1F1F1F]">
                      {row.stage}
                    </td>
                    <td className="py-3.5 px-6">{row.machinery}</td>
                    <td className="py-3.5 px-6">{row.capability}</td>
                    <td className="py-3.5 px-6 font-mono text-xs sm:text-sm">
                      {row.spiOrStandard}
                    </td>
                    <td className="py-3.5 px-6">{row.qcCheck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 03. GARMENT DIVISION GALLERY (g1.jpg - g6.jpg)               */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / INSIDE OUR GARMENT DIVISION
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Made for international brands, from our own fabric.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GARMENT_GALLERY.map((item, idx) => (
              <div
                key={item.src}
                className="group rounded-[26px] bg-white border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={idx < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
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
      {/* 04. HIGHLIGHTS & CTA (Matching Knitting Division Layout)     */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {GARMENT_HIGHLIGHTS.map((item) => {
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
                / FULL PACKAGE &amp; CUT-AND-MAKE PROGRAMS
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Start your next garment program with our Tirupur team.
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Share your tech pack, target quantity, and delivery schedule.
                Our export desk replies within 24 working hours.
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
