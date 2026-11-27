import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { DivisionHero } from "@/components/capabilities/DivisionHero";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/config/siteContent";

export const metadata: Metadata = {
  title: "Knitting Division",
  description:
    "Mayer & Cie circular knitting in Tiruppur: single jersey, rib, interlock, striper, mini jacquard and Lycra jersey, two shifts a day.",
};

const KNITTING_GALLERY = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn1.jpg",
    title: "Circular Knitting Floor",
    subtitle: "Mayer & Cie knitting machines",
    alt: "Circular knitting machinery floor at Value Textiles Tiruppur",
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
    subtitle: "72-feeder mini jacquard for self-design fabric",
    alt: "Mini jacquard circular knitting machine producing patterned fabric",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn4.jpg",
    title: "Single Jersey & Lycra Knits",
    subtitle: "Single jersey and Lycra jersey",
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
    subtitle: "Supervised two-shift operation",
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

export default function KnittingDivisionPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      <DivisionHero
        eyebrow="KNITTING DIVISION"
        title="Our own circular knitting, running two shifts a day."
        intro={[
          "Mayer & Cie circular knitting machines with multi-colour yarn feeders knit single jersey, rib, interlock, striper, mini jacquard and Lycra jersey for our dye house and garment lines.",
          "A dedicated team under an experienced manager works two shifts a day.",
        ]}
        location={`Knitting unit: ${siteConfig.contact.knittingAddress}`}
        stats={[
          { value: "11", label: "Machine configurations" },
          { value: "2 shifts", label: "Running every day" },
          { value: "4 to 10", label: "Colours on auto-stripers" },
          { value: "72", label: "Feeders on mini jacquards" },
        ]}
      />

      {/* ============================================================ */}
      {/* 02. MACHINE SPECIFICATION TABLE                              */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl mb-8 sm:mb-10">
            <Eyebrow>MACHINERY LINEUP</Eyebrow>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
              Mayer &amp; Cie Circular Knitting Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-[var(--surface)] border-b border-[var(--line)] text-[var(--black)] text-sm font-bold">
                  <th className="py-4 px-6">Machine Make</th>
                  <th className="py-4 px-6">Fabric Type</th>
                  <th className="py-4 px-6">Dia</th>
                  <th className="py-4 px-6">GG</th>
                  <th className="py-4 px-6">Feeders</th>
                  <th className="py-4 px-6">Colour</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] text-sm sm:text-[15px] text-[var(--text-muted)]">
                {MACHINE_SPECS.map((row, idx) => (
                  <tr
                    key={`${row.fabricType}-${row.dia}-${row.gg}-${row.colour}-${idx}`}
                    className={idx % 2 === 1 ? "bg-[var(--surface)]/60" : "bg-[var(--white)]"}
                  >
                    <td className="py-3.5 px-6 font-semibold text-[var(--black)]">
                      {row.make}
                    </td>
                    <td className="py-3.5 px-6">{row.fabricType}</td>
                    <td className="py-3.5 px-6 font-medium text-[var(--black)]">{row.dia}</td>
                    <td className="py-3.5 px-6 font-medium text-[var(--black)]">{row.gg}</td>
                    <td className="py-3.5 px-6 font-medium text-[var(--black)]">
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
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <Eyebrow>INSIDE OUR KNITTING UNIT</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
              Inside our knitting unit.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {KNITTING_GALLERY.map((item, idx) => (
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

      <DivisionNext
        current="knitting"
        quoteHeading="Need a custom stripe, jacquard or Lycra knit?"
        quoteText="Share your fabric GSM, stripe repeat or tech pack. We knit, dye, test and stitch in our own units."
      />
    </main>
  );
}

