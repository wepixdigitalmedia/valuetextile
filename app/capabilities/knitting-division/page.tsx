import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { siteConfig } from "@/config/siteContent";
import { ArrowRight, CheckCircle2, Cog, Layers, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Knitting Division | Value Textiles — Capabilities, Tirupur",
  description:
    "Value Textiles Knitting Division is equipped with advanced Mayer & Cie circular knitting machines, multi-colour yarn feeders, and 2-shift operations in Tirupur.",
};

const KNITTING_GALLERY = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn1.jpg",
    title: "Circular Knitting Floor",
    subtitle: "High-precision Mayer & Cie knitting machines",
    alt: "Circular knitting machinery floor at Value Textiles Tirupur",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn2.jpg",
    title: "Multi-Colour Yarn Feeders",
    subtitle: "Auto-striper creels for 4 to 10 colour patterns",
    alt: "Multi-colour yarn feeder creels on circular knitting machine",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn3.jpg",
    title: "Mini Jacquard & Self-Design",
    subtitle: "72-feeder jacquard engineering for custom textures",
    alt: "Mini jacquard circular knitting machine producing patterned fabric",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn4.jpg",
    title: "Single Jersey & Lycra Knits",
    subtitle: "Consistent GSM, gauge accuracy & stretch recovery",
    alt: "Single jersey and Lycra jersey fabric knitting in progress",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn5.jpg",
    title: "Rib & Interlock Structures",
    subtitle: "18/24 GG rib and interlock auto-striper production",
    alt: "Rib and interlock circular knitting machine setup",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn6.jpg",
    title: "In-Process Fabric Inspection",
    subtitle: "Supervised 2-shift operations for defect-free output",
    alt: "Knitted fabric inspection and quality control at Value Textiles",
  },
];

const MACHINE_SPECS = [
  {
    make: "Mayer & Cie Machine",
    fabricType: "S/J Auto Striper",
    dia: "26",
    gg: "20/24",
    feeders: "42",
    colour: "4",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "S/J Auto Striper",
    dia: "30",
    gg: "20/24",
    feeders: "48",
    colour: "4",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "S/J Auto Striper",
    dia: "30",
    gg: "24/28",
    feeders: "48",
    colour: "4",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "S/J Auto Striper",
    dia: "34",
    gg: "24",
    feeders: "54",
    colour: "4",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "S/J Auto Striper",
    dia: "34",
    gg: "24",
    feeders: "54",
    colour: "5 to 10",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "Mini Jacquard Stripers",
    dia: "30",
    gg: "24",
    feeders: "72",
    colour: "All Self Design",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "Mini Jacquard Stripers",
    dia: "30",
    gg: "28",
    feeders: "72",
    colour: "All Self Design",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "Rib & I/L Auto Striper",
    dia: "30",
    gg: "18/24",
    feeders: "48",
    colour: "4",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "Rib & I/L Auto Striper",
    dia: "34",
    gg: "18/24",
    feeders: "54",
    colour: "4",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "Lycra Jersey",
    dia: "30",
    gg: "28",
    feeders: "–",
    colour: "Plain",
  },
  {
    make: "Mayer & Cie Machine",
    fabricType: "Lycra Jersey",
    dia: "32",
    gg: "28",
    feeders: "–",
    colour: "Plain",
  },
];

const KNITTING_HIGHLIGHTS = [
  {
    icon: Cog,
    title: "Multi-Colour Yarn Feeders",
    text: "Equipped with 4 to 10 colour auto-stripers and 72-feeder mini jacquard machines for intricate yarn-dyed stripes and self-designs.",
  },
  {
    icon: Layers,
    title: "2-Shift Supervised Operations",
    text: "A dedicated team working 2 shifts a day under an experienced Manager ensures consistent workmanship, efficiency, and on-time fabric delivery.",
  },
  {
    icon: CheckCircle2,
    title: "Built for Garment Integration",
    text: "Every roll knitted in our SIDCO Tiruppur unit feeds directly into our dyeing, testing, and garmenting divisions with full batch traceability.",
  },
];

export default function KnittingDivisionPage() {
  return (
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* 01. KNITTING DIVISION HERO                                   */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] pt-14 sm:pt-20 pb-14 sm:pb-20 border-b border-[#E8E2D9] overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-[-5%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/35 blur-[150px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / CAPABILITIES · KNITTING DIVISION · <Tiruppur />, INDIA
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1F1F1F] leading-[1.05] tracking-tight">
              Knitting Division
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Knitting Division of Value Textiles is well equipped with advanced knitting machinery with multiple colour yarn feeders for producing various kinds of fabrics.
            </p>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              A dedicated team of members under the supervision of a highly experienced Manager contributes to the success of the organization by working 2 shifts a day, resulting in enhanced quality and efficiency of our workmanship.
            </p>

            <div className="pt-1 flex items-center gap-2 text-sm font-mono text-[#554F47]">
              <MapPin className="w-4 h-4 text-[#C8741F] shrink-0" />
              <span>
                <strong className="text-[#1F1F1F]">Knitting Unit:</strong>{" "}
                {siteConfig.contact.knittingAddress}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Enquire About Fabric &amp; Garments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/capabilities/garment-manufacturing"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white text-sm font-semibold transition-all"
              >
                <span>Garment Manufacturing</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. MACHINE SPECIFICATION TABLE                              */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl mb-8 sm:mb-10">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / MACHINERY LINEUP
            </p>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Mayer &amp; Cie Circular Knitting Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[22px] border border-[#E8E2D9] bg-white shadow-2xs">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E8E2D9] text-[#1F1F1F] font-heading text-sm font-bold">
                  <th className="py-4 px-6">Machine Make</th>
                  <th className="py-4 px-6">Fabric Type</th>
                  <th className="py-4 px-6">Dia</th>
                  <th className="py-4 px-6">GG</th>
                  <th className="py-4 px-6">Feeders</th>
                  <th className="py-4 px-6">Colour</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D9] font-body text-sm sm:text-[15px] text-[#3B3631]">
                {MACHINE_SPECS.map((row, idx) => (
                  <tr
                    key={`${row.fabricType}-${row.dia}-${row.gg}-${row.colour}-${idx}`}
                    className={idx % 2 === 1 ? "bg-[#FAF8F5]/60" : "bg-white"}
                  >
                    <td className="py-3.5 px-6 font-medium text-[#1F1F1F]">
                      {row.make}
                    </td>
                    <td className="py-3.5 px-6">{row.fabricType}</td>
                    <td className="py-3.5 px-6 font-mono text-sm">{row.dia}</td>
                    <td className="py-3.5 px-6 font-mono text-sm">{row.gg}</td>
                    <td className="py-3.5 px-6 font-mono text-sm">
                      {row.feeders}
                    </td>
                    <td className="py-3.5 px-6">{row.colour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 03. KNITTING DIVISION GALLERY (kn1.jpg - kn6.jpg)            */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / INSIDE OUR KNITTING UNIT
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Precision circular knitting for export garments.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {KNITTING_GALLERY.map((item, idx) => (
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
      {/* 04. HIGHLIGHTS & CTA                                         */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {KNITTING_HIGHLIGHTS.map((item) => {
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
                / FROM KNITTED FABRIC TO FINISHED GARMENT
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Need custom stripe, jacquard, or Lycra knit garments?
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Share your fabric GSM, stripe repeat, or garment tech pack. We knit, dye, test, and stitch under one roof.
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

