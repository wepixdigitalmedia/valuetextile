import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resources & Technical Guides | Value Textiles",
  description: "Yarn count converters, GSM calculation charts, fabric testing standards, and knitwear sourcing guides.",
};

const resources = [
  {
    title: "Knit Fabric GSM & Yarn Count Conversion Chart",
    desc: "A technical reference guide mapping single jersey, interlock, and rib yarn counts (Ne) to finished fabric GSM.",
  },
  {
    title: "International Fabric Quality: 4-Point Inspection Guide",
    desc: "Standard operating procedure for evaluating defect points per 100 square yards according to ASTM D5430.",
  },
  {
    title: "Eco-Dyeing Fastness & Wash Care Standards",
    desc: "Technical compliance matrix for wash fastness, rubbing fastness, perspiration, and light fastness across natural and regenerated fibers.",
  },
];

export default function ResourcesPage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <Eyebrow>SOURCING RESOURCES</Eyebrow>
          <h1 className="font-heading text-[42px] sm:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.0] tracking-[-0.04em] mb-6">
            Technical guides and sourcing tools.
          </h1>
          <div className="w-12 h-[2px] bg-[#F29B52] mb-8" />
          <p className="font-body text-[17px] text-[#5F5B55] leading-relaxed">
            Download our free technical whitepapers, knit structure swatches guides, and export compliance checklists to assist your merchandising team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#FAF8F5] border border-[#E6E2DB] p-7 rounded-[4px] flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.18em] uppercase mb-2 block">
                  RESOURCE 0{idx + 1}
                </span>
                <h2 className="font-heading text-[19px] sm:text-[20px] font-bold text-[#1F1F1F] mb-3 leading-snug tracking-tight">
                  {item.title}
                </h2>
                <p className="font-body text-[14px] text-[#5F5B55] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="font-mono text-[11px] text-[#5F5B55]/70 bg-white p-2.5 border border-[#E6E2DB] rounded-xs text-center">
                [PDF DOWNLOAD COMING SOON]
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button href="/contact" variant="primary">
            Get a Quote
          </Button>
          <Button href="/products" variant="secondary">
            Browse Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

