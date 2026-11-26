import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { siteConfig } from "@/config/siteContent";
import { ArrowRight, CheckCircle2, Cog, Layers, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Knitting Division | Value Textiles — Capabilities, Tiruppur",
  description:
    "Value Textiles Knitting Division is equipped with advanced Mayer & Cie circular knitting machines, multi-colour yarn feeders, and 2-shift operations in Tiruppur.",
};

const KNITTING_GALLERY = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/knitting/kn1.jpg",
    title: "Circular Knitting Floor",
    subtitle: "High-precision Mayer & Cie knitting machines",
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
    <main className="w-full bg-[var(--white)]">
      {/* ============================================================ */}
      {/* 01. KNITTING DIVISION HERO                                   */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)] overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <Eyebrow>
              CAPABILITIES · KNITTING DIVISION · <Tiruppur />, INDIA
            </Eyebrow>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
              Knitting Division
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Knitting Division of Value Textiles is well equipped with advanced knitting machinery with multiple colour yarn feeders for producing various kinds of fabrics.
            </p>
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              A dedicated team of members under the supervision of a highly experienced Manager contributes to the success of the organization by working 2 shifts a day, resulting in enhanced quality and efficiency of our workmanship.
            </p>

            <div className="pt-1 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>
                <strong className="text-[var(--black)]">Knitting Unit:</strong>{" "}
                {siteConfig.contact.knittingAddress}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button href="/contact#quote" variant="primary">
                <span>Enquire About Fabric &amp; Garments</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/capabilities/garment-manufacturing" variant="secondary">
                <span>Garment Manufacturing</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

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
              Precision circular knitting for export garments.
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

      {/* ============================================================ */}
      {/* 04. HIGHLIGHTS & CTA                                         */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {KNITTING_HIGHLIGHTS.map((item) => {
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
              <Eyebrow>FROM KNITTED FABRIC TO FINISHED GARMENT</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] leading-[1.1]">
                Need custom stripe, jacquard, or Lycra knit garments?
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                Share your fabric GSM, stripe repeat, or garment tech pack. We knit, dye, test, and stitch inside our own Tiruppur and Perundurai facilities.
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

