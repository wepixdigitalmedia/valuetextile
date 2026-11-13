import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Capabilities | Value Textiles",
  description: "End-to-end manufacturing infrastructure: Yarn sourcing, circular knitting, dyeing, finishing, testing, and garment making.",
};

const divisions = [
  {
    id: "yarn",
    title: "Yarn Sourcing & Prep",
    desc: "Rigorous yarn selection from certified mills: combed cotton, organic cotton, viscose, modal, Tencel, and custom blended yarns.",
  },
  {
    id: "knitting",
    title: "Knitting Division",
    desc: "Advanced circular and flat knitting machines producing single jersey, rib, interlock, pique, fleece, French terry, and jacquards.",
  },
  {
    id: "dyeing",
    title: "Dyeing & Finishing",
    desc: "Eco-conscious soft-flow dyeing, Mercerizing, stenter finishing, and compacting with precise colour matching and high wash fastness.",
  },
  {
    id: "garment",
    title: "Garment Division",
    desc: "Precision cutting, computerised sewing lines, embellishments (printing/embroidery), and steam finishing for global retail readiness.",
  },
];

export default function CapabilitiesPage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <Eyebrow>OUR INFRASTRUCTURE</Eyebrow>
          <h1 className="font-heading text-[42px] sm:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.0] tracking-[-0.04em] mb-6">
            From yarn to garment, under one roof.
          </h1>
          <div className="w-12 h-[2px] bg-[#F29B52] mb-8" />
          <p className="font-body text-[17px] text-[#5F5B55] leading-relaxed">
            By operating our own knitting, dyeing, finishing, and garmenting divisions, Value Textiles delivers complete traceability, stringent quality management, and dependable production schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {divisions.map((div, idx) => (
            <div
              key={div.id}
              id={div.id}
              className="bg-[#FAF8F5] border border-[#E6E2DB] p-8 rounded-[2px]"
            >
              <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.18em] uppercase mb-2 block">
                0{idx + 1} DIVISION
              </span>
              <h2 className="font-heading text-[22px] sm:text-[24px] font-bold text-[#1F1F1F] mb-3 tracking-tight">
                {div.title}
              </h2>
              <p className="font-body text-[15px] text-[#5F5B55] leading-relaxed mb-4">
                {div.desc}
              </p>
              <div className="font-mono text-[11px] text-[#5F5B55]/70 bg-white p-3 border border-[#E6E2DB]">
                [CAPACITY & MACHINERY SPECIFICATIONS: To be provided]
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button href="/contact" variant="primary">
            Get a Quote
          </Button>
          <Button href="/products" variant="secondary">
            View Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

