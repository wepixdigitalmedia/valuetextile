import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { DivisionHero } from "@/components/capabilities/DivisionHero";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import { factValue, factText } from "@/config/ownerFacts";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/config/siteContent";

export const metadata: Metadata = {
  title: "Garment Manufacturing",
  description:
    "Cutting, stitching, finishing and export packing from our own fabric in Tiruppur. T-shirts, polos, kids wear, knitwear and activewear.",
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
    subtitle: "Interlock and striped polos",
    alt: "Export-grade polo and knitwear garment from Value Textiles",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g3.jpg",
    title: "Kids & Baby Wear",
    subtitle: "Soft cotton knits for babies and children",
    alt: "Children's and baby knitwear garment manufactured in Tiruppur",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g4.jpg",
    title: "Men's & Women's Knitwear",
    subtitle: "Tops, pullovers and layering pieces",
    alt: "Men's and women's knitwear collection made with in-house fabric",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g5.jpg",
    title: "Activewear & Loungewear",
    subtitle: "Stretch and lounge knits",
    alt: "Activewear and loungewear garment stitched on dedicated lines",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g6.jpg",
    title: "Private Label & Export Packing",
    subtitle: "Private label packing and master cartons",
    alt: "Private label finished garment ready for international export",
  },
];

export default function GarmentManufacturingCapabilitiesPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      <DivisionHero
        eyebrow="GARMENT DIVISION"
        title="Garments cut and stitched from our own fabric."
        intro={[
          "Cutting, stitching, finishing and export packing happen in our own garment unit, using fabric we knitted, dyed and tested ourselves.",
          "We make T-shirts and polos, kids and baby wear, men's and women's knitwear, and activewear and loungewear for international brands.",
        ]}
        location={`Garment unit: ${siteConfig.contact.addressFull}`}
        stats={[
          { value: "60,000+", label: "Garments a month" },
          { value: "4", label: "Garment programs" },
          { value: "Own fabric", label: "Knitted, dyed and tested in-house" },
          { value: "OEKO-TEX Class 1", label: "Certified for baby articles" },
        ]}
      />

      {/* ============================================================ */}
      {/* 02. HOW AN ORDER MOVES THROUGH THE UNIT                      */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                How an order moves <span className="text-[var(--accent)]">through the unit.</span>
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                The same steps for every style, from your tech pack to the carton.
              </p>
            </div>
            <ol className="lg:col-span-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {[
                ["Fit and pre-production samples", "We work from your tech pack or a reference sample and send samples for your approval before bulk cutting."],
                ["Fabric from our own lots", "Cutting starts only from fabric that passed our lab and 4-point inspection."],
                ["Cutting and stitching", "Panels are cut to your patterns and stitched on our own lines with checks along the line."],
                ["Finishing and final inspection", factText("aqlLevel")],
                ["Packing to your instructions", "Labelling, folding, polybags and master cartons follow your packing specification."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-5 py-5">
                  <span className="text-[13px] font-bold text-[var(--accent)] pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[18px] font-bold text-[var(--black)]">{title}</h3>
                    <p className="mt-1 text-[15px] leading-[1.6] text-[var(--text-muted)]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {(factValue("garmentUnitDetails") || factValue("needleDetection")) && (
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--line)]">
              {factValue("garmentUnitDetails") && (
                <div className="bg-[var(--white)] px-5 py-5">
                  <dt className="text-[12px] font-semibold text-[var(--text-muted)]">Sewing lines and machines</dt>
                  <dd className="mt-1 text-[16px] font-bold text-[var(--black)]">{factValue("garmentUnitDetails")}</dd>
                </div>
              )}
              {factValue("needleDetection") && (
                <div className="bg-[var(--white)] px-5 py-5">
                  <dt className="text-[12px] font-semibold text-[var(--text-muted)]">Needle detection</dt>
                  <dd className="mt-1 text-[16px] font-bold text-[var(--black)]">{factValue("needleDetection")}</dd>
                </div>
              )}
            </dl>
          )}
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

      <DivisionNext
        current="garment"
        quoteHeading="Ready to start your garment program?"
        quoteText="Send your tech pack or a reference sample. A merchandiser replies within 24 working hours with costing and a sampling plan."
      />
    </main>
  );
}
