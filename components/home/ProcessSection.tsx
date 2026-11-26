"use client";

import React from "react";
import { Container } from "../ui/Container";

interface ProcessStage {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Tech pack & quote",
    description: "You send your design, tech pack or reference sample, and our export desk quotes with detailed fabric and production specs.",
    highlight: "Design & quote",
  },
  {
    number: "02",
    title: "Sampling",
    description: "Fit sample, fabric lab dips, and pre-production samples delivered for your approval before bulk cutting begins.",
    highlight: "Pre-production approval",
  },
  {
    number: "03",
    title: "In-house fabric production",
    description: "Knitted from vetted yarns, dyed in our processing unit, tested in our lab, and graded under the 4-point inspection system.",
    highlight: "Knitting, dyeing & lab",
  },
  {
    number: "04",
    title: "Precision cutting",
    description: "Fabric is relaxed and precision-cut to approved patterns, grading, and complete size sets.",
    highlight: "Pattern & size sets",
  },
  {
    number: "05",
    title: "Stitching",
    description: "Made on our dedicated garment lines in Tirupur with in-line supervisors and continuous production checks.",
    highlight: "In-line production checks",
  },
  {
    number: "06",
    title: "Finishing & QC",
    description: "Thread trimming, pressing, needle detection, labelling, and 100% final garment inspection.",
    highlight: "Final garment inspection",
  },
  {
    number: "07",
    title: "Custom packing",
    description: "Packed strictly to your labelling, barcode, folding, polybag, and carton export instructions.",
    highlight: "Custom packing specs",
  },
  {
    number: "08",
    title: "Export shipping",
    description: "Export documentation prepared and goods despatched via Tuticorin, Chennai, or Cochin ports on the agreed date.",
    highlight: "On-schedule shipping",
  },
];

export function ProcessSection() {
  return (
    <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
            <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
            <span>OUR PROCESS</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-3">
            From your tech pack to your{" "}
            <span className="text-[var(--accent)]">port.</span>
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[var(--text-muted)] leading-[1.6] mt-4">
            Every production milestone—from incoming yarn inspection to final AQL carton audit—follows documented technical gates across our integrated departments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-12">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="p-6 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex flex-col justify-between space-y-4 hover:border-[var(--black)] transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl font-extrabold text-[var(--accent)]">
                  {stage.number}
                </span>
                <span className="text-[11px] font-semibold text-[var(--text-muted)] px-2.5 py-0.5 rounded-[6px] border border-[var(--line)]">
                  {stage.highlight}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[var(--black)] leading-[1.2] mb-2">
                  {stage.title}
                </h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-[1.6]">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-[var(--text-muted)] max-w-2xl mx-auto">
          Documented lot tracking across knitting, dyeing, laboratory testing, and sewing keeps measurements, shades, and timelines accountable.
        </p>
      </Container>
    </section>
  );
}
