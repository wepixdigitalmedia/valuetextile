import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { CheckCircle2, ArrowRight, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Infrastructure | Value Textiles — Garment & Textile Manufacturing, Tirupur",
  description:
    "Explore Value Textiles' vertically integrated infrastructure in Tirupur & Perundurai: circular knitting, soft-flow dyeing, compactors, in-house testing lab, and garmenting units.",
};

const INFRASTRUCTURE_PILLARS = [
  {
    id: "knitting",
    title: "Knitting",
    description:
      "Testing various quality parameters of knitted fabrics and garments. Analysis of fabric faults and assessing the performance of hosiery yarns across our circular knitting division.",
  },
  {
    id: "dyeing",
    title: "Dyeing",
    description:
      "Our Dyeing division is fortified with high-end supporting machines such as Compactors, Heat Setting Machines, Dryers, Slitting Machines, and centralized process controls.",
  },
  {
    id: "fabric",
    title: "Fabric & Finishing",
    description:
      "Fabric Perfect Printing, World Class Execution, Impeccable Finishing Quality, Knitting & Finishing, Tested For Finish, Color Fastness, Durability, and Pattern precision.",
  },
];

const SPECIALIZED_FABRICS = [
  "100% Cotton",
  "Cotton Viscose",
  "Cotton Modal",
  "Cotton Polyester",
  "Cotton Poly Viscose",
  "100% Viscose, 100% Modal Cotton",
  "Polyester, Tencel, Modal",
  "Lycra and various blends",
  "Yarn Dyed all Blends",
  "Neppy & Special Fibre Fabrics",
];

const INFRASTRUCTURE_GALLERY = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/15.webp",
    alt: "Value Textiles garment stitching and assembly production floor in Tirupur",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/18.webp",
    alt: "Combed cotton yarn cones prepared for circular knitting",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/14.webp",
    alt: "Dedicated sewing lines and garment assembly workstations",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/13.webp",
    alt: "Industrial garment stitching machine operator during production",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/12.webp",
    alt: "High-speed circular knitting machine creel and feeders",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/16.webp",
    alt: "Tubular knitted fabric takeoff on circular knitting machine",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/8.webp",
    alt: "Soft-flow dyeing and fabric processing unit",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/23.webp",
    alt: "Modern textile processing and finishing machinery",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/5.webp",
    alt: "Compacting and heat-setting finishing equipment",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/11.webp",
    alt: "In-house fabric inspection and quality control line",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/6.webp",
    alt: "Dyeing plant and centralized process automation",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/4.webp",
    alt: "Fabric slitting, drying, and finishing line",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/10.webp",
    alt: "Testing and laboratory quality verification equipment",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/3.webp",
    alt: "Production floor and fabric roll storage",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/19.webp",
    alt: "Yarn and knitted fabric preparation division",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/1.webp",
    alt: "Value Textiles vertically integrated manufacturing facility",
  },
];

export default function InfrastructurePage() {
  return (
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* TOP HERO & TWO-COLUMN INFRASTRUCTURE OVERVIEW                */}
      {/* (Matching valuetextiles.net/infrastructure.php layout)       */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-14 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column (Col 8): Heading, Intro, 3 Core Pillars + Highlight Grid */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                  / INFRASTRUCTURE · <Tiruppur /> &amp; PERUNDURAI
                </p>
                <h1 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.06] tracking-tight">
                  Our Infrastructure
                </h1>
                <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
                  At Value Textiles, we have been backed and supported by ultra-modern infrastructure that is spread over a vast area. Our infrastructure comprises manufacturing/designing and in-house quality testing equipped with state-of-the-art imported machinery for fabric to garmenting.
                </p>
              </div>

              {/* Knitting, Dyeing, Fabric Pillars */}
              <div className="space-y-7 pt-2">
                {INFRASTRUCTURE_PILLARS.map((pillar) => (
                  <div
                    key={pillar.id}
                    id={pillar.id}
                    className="flex items-start gap-4 scroll-mt-28"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center text-[#C8741F] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5">
                      <h2 className="font-heading text-xl font-bold text-[#1F1F1F]">
                        {pillar.title}
                      </h2>
                      <p className="font-body text-[15px] text-[#554F47] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured 6-Photo Preview Grid matching reference placement */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                {INFRASTRUCTURE_GALLERY.slice(0, 6).map((img, idx) => (
                  <div
                    key={img.src}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D9] group"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={idx < 3}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Col 4): "We specialized in Following fabrics" Card */}
            <aside
              id="specialized-fabrics"
              className="lg:col-span-4 scroll-mt-28"
            >
              <div className="relative rounded-[24px] bg-[#FAF8F5] border-t-4 border-t-[#C8741F] border border-[#E8E2D9] p-7 sm:p-8 shadow-2xs overflow-hidden">
                {/* Subtle corner accent matching reference */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 w-20 h-20 bg-[#C8741F]/15 rotate-45"
                  aria-hidden="true"
                />

                <h2 className="font-heading text-2xl sm:text-[26px] font-extrabold text-[#C8741F] leading-snug mb-6">
                  We specialized in
                  <br />
                  Following fabrics
                </h2>

                <ul className="space-y-4">
                  {SPECIALIZED_FABRICS.map((fabric) => (
                    <li key={fabric} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C8741F]/15 text-[#C8741F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-heading text-[15px] font-semibold text-[#1F1F1F]">
                        {fabric}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[#E8E2D9]">
                  <Link
                    href="/contact#quote"
                    className="w-full inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all"
                  >
                    <span>Request Fabric or Garment Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* FULL MACHINERY & FACILITY PHOTO GALLERY (All 16 Images)      */}
      {/* ============================================================ */}
      <section
        id="gallery"
        className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 scroll-mt-24"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                / INSIDE OUR UNITS
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
                Production Floor &amp; Machinery Gallery
              </h2>
              <p className="font-body text-base text-[#554F47] mt-2">
                A closer look at our circular knitting, dyeing, compacting, testing lab, and garment stitching lines across Tirupur and Perundurai.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8E2D9] hover:border-[#C8741F] text-sm font-semibold text-[#1F1F1F] transition-colors shrink-0 w-fit"
            >
              <Factory className="w-4 h-4 text-[#C8741F]" />
              <span>Book a Factory Visit</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {INFRASTRUCTURE_GALLERY.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-2xs group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

