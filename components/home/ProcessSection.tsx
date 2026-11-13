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
    title: "Our own fabric",
    description: "Knitted and dyed in our units, tested in our in-house lab, and inspected under the standard 4-point system.",
    highlight: "In-house knitting & lab",
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
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / OUR PROCESS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            From your tech pack to your port.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
            From yarn testing to carton sealing, each step is managed in-house so quality standards and delivery dates stay with one team.
          </p>
        </div>

        {/* 8-Stage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-14">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="p-6 rounded-2xl bg-white border border-[#E8E2D9] flex flex-col justify-between space-y-4 shadow-2xs hover:border-[#C8741F] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-[#C8741F]">
                  {stage.number}
                </span>
                <span className="font-mono text-[11px] font-semibold text-[#78716C] bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#E8E2D9]">
                  {stage.highlight}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#1F1F1F] mb-1.5">
                  {stage.title}
                </h3>
                <p className="font-body text-sm text-[#554F47] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-8 text-center text-sm font-medium text-[#78716C] max-w-2xl mx-auto">
          Every stage is managed by our own team, so a delay or a defect can be traced to its source.
        </p>
      </Container>
    </section>
  );
}
