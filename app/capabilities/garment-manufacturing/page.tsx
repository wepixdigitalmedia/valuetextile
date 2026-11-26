import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    text: "TQM initiatives embedded across every stage—from incoming yarn verification and 4-point fabric inspection to in-line stitching checks and final AQL garment QC.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Ethical Fashion",
    text: "Responsible manufacturing with Zero Liquid Discharge (ZLD) water recycling, BCI, GRS, GOTS, and OEKO-TEX® certified production practices.",
  },
];

export default function GarmentManufacturingCapabilitiesPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      {/* ============================================================ */}
      {/* 01. GARMENT DIVISION HERO                                    */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)] overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <Eyebrow>
              CAPABILITIES · GARMENT DIVISION · <Tiruppur />, INDIA
            </Eyebrow>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
              Garment Manufacturing
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Value Textiles manufactures knitted and woven garments for the
              domestic and global markets with its vertically-integrated
              infrastructural facilities, hi-tech machinery and skilled
              personnel. A quality-centric company, Value Textiles has adopted
              Total Quality Management initiatives in all its processes.
            </p>
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Our commitment to sustainability extends to every stage of
              production, ensuring responsible manufacturing processes and
              promoting ethical fashion. Discover our collection that combines
              style and sustainability, making a positive impact on the
              environment and the world we live in.
            </p>

            <div className="pt-1 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>
                <strong className="text-[var(--black)]">Garmenting Unit:</strong>{" "}
                {siteConfig.contact.addressFull}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button href="/contact#quote" variant="primary">
                <span>Request Garment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/capabilities/knitting-division" variant="secondary">
                <span>Knitting Division</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. PRODUCTION LINE & SEWING SPECIFICATION TABLE             */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl mb-8 sm:mb-10">
            <Eyebrow>PRODUCTION LINEUP &amp; STANDARDS</Eyebrow>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
              Cut, Stitch &amp; Export Finishing Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[var(--surface)] border-b border-[var(--line)] text-[var(--black)] text-sm font-bold">
                  <th className="py-4 px-6">Production Stage</th>
                  <th className="py-4 px-6">Machinery &amp; Setup</th>
                  <th className="py-4 px-6">Operation Capability</th>
                  <th className="py-4 px-6">Standard / Parameter</th>
                  <th className="py-4 px-6">Quality Gate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] text-sm sm:text-[15px] text-[var(--text-muted)]">
                {GARMENT_LINE_SPECS.map((row, idx) => (
                  <tr
                    key={row.stage}
                    className={idx % 2 === 1 ? "bg-[var(--surface)]/60" : "bg-[var(--white)]"}
                  >
                    <td className="py-3.5 px-6 font-semibold text-[var(--black)]">
                      {row.stage}
                    </td>
                    <td className="py-3.5 px-6">{row.machinery}</td>
                    <td className="py-3.5 px-6">{row.capability}</td>
                    <td className="py-3.5 px-6 text-xs sm:text-sm font-medium text-[var(--black)]">
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
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <Eyebrow>INSIDE OUR GARMENT DIVISION</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
              Made for international brands, from our own fabric.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GARMENT_GALLERY.map((item, idx) => (
              <div
                key={item.src}
                className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] overflow-hidden flex flex-col justify-between hover:border-[var(--black)] transition-colors duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--white)]">
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
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 04. HIGHLIGHTS & CTA                                         */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {GARMENT_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] space-y-4"
                >
                  <div className="w-11 h-11 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--black)]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-[12px] bg-[var(--surface)] border border-[var(--line)] text-[var(--black)] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2.5">
              <Eyebrow>FULL PACKAGE &amp; CUT-AND-MAKE PROGRAMS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] leading-[1.1]">
                Start your next garment program with our Tirupur team.
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                Share your tech pack, target quantity, and delivery schedule.
                Our export desk replies within 24 working hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button href="/contact#quote" variant="primary">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/garments" variant="secondary">
                <span>Explore Garments</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
