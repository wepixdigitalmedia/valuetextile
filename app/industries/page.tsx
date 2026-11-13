import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries & Markets | Value Textiles",
  description: "Serving international fashion labels, department stores, sportswear brands, and corporate private label programs.",
};

const industries = [
  {
    title: "Global Fashion & Retail Brands",
    desc: "Fast-turn seasonal garment and fabric orders, trend-forward colours, and retail-ready finished garments delivered with rigorous consistency.",
  },
  {
    title: "Private Label & Direct-to-Consumer (DTC)",
    desc: "End-to-end manufacturing partnerships for modern apparel labels seeking premium fabric hand-feel and direct factory transparency.",
  },
  {
    title: "Corporate & Promotional Apparel",
    desc: "High-volume polos, tees, and uniform knits manufactured to exact pantone codes with durable wash resistance.",
  },
  {
    title: "Kids & Infant Wear",
    desc: "Oeko-Tex compliant, non-toxic dyes, baby-safe trims, and ultra-soft combed cotton fabrics passing strict chemical and physical tests.",
  },
];

export default function IndustriesPage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <Eyebrow>MARKETS SERVED</Eyebrow>
          <h1 className="font-heading text-[42px] sm:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.0] tracking-[-0.04em] mb-6">
            Trusted by global fashion and apparel partners.
          </h1>
          <div className="w-12 h-[2px] bg-[#F29B52] mb-8" />
          <p className="font-body text-[17px] text-[#5F5B55] leading-relaxed">
            With over 40 active buyers worldwide across North America, Europe, the Middle East, and Asia-Pacific, Value Textiles understands the nuances of international compliance, export logistics, and retail calendars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#E6E2DB] mb-16">
          {industries.map((ind, idx) => (
            <div
              key={ind.title}
              className="p-8 border-b border-r border-[#E6E2DB]"
            >
              <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.18em] uppercase mb-2 block">
                0{idx + 1} SECTOR
              </span>
              <h2 className="font-heading text-[21px] sm:text-[22px] font-bold text-[#1F1F1F] mb-2.5 tracking-tight">
                {ind.title}
              </h2>
              <p className="font-body text-[15px] text-[#5F5B55] leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button href="/contact" variant="primary">
            Partner With Us
          </Button>
          <Button href="/quality" variant="secondary">
            Our Quality Standards
          </Button>
        </div>
      </Container>
    </section>
  );
}

