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
    title: "Yarn Quality",
    description: "Cotton and engineered fibres procured nationally, tested across 10 yarn parameters (count, lea strength, CSP, twist) before knitting.",
    highlight: "10 yarn parameters",
  },
  {
    number: "02",
    title: "Circular Knitting",
    description: "Mayer & Cie circular knitting machines (single jersey auto striper, rib, interlock, mini jacquard) operating 2 shifts daily.",
    highlight: "Mayer & Cie · 18–28 GG",
  },
  {
    number: "03",
    title: "Dyeing & Finishing",
    description: "Brazzoli & Dilmenler soft-flow HTHP dyeing with ORGATEX centralized control, TubeTex compacting, and peach finishing.",
    highlight: "Soft-flow HTHP & compacting",
  },
  {
    number: "04",
    title: "In-House Lab",
    description: "Spectrophotometer colour lab and physical testing across 11 parameters: GSM, shrinkage, spirality, and wash/rub fastness.",
    highlight: "11 fabric test parameters",
  },
  {
    number: "05",
    title: "Fabric Inspection",
    description: "Every lot inspected under the standard 4-point system (10-point on request), tracked with colour-coded roll tagging.",
    highlight: "4-point inspection system",
  },
  {
    number: "06",
    title: "Cut & Stitch",
    description: "Garments cut, sewn, and assembled in our own dedicated garment units in Tirupur with in-line production supervisors.",
    highlight: "In-house garment lines",
  },
  {
    number: "07",
    title: "Garment QC",
    description: "Final measurement checks, needle detection, and packaging to buyer carton and labelling instructions.",
    highlight: "Needle detection & final QC",
  },
  {
    number: "08",
    title: "Export Despatch",
    description: "Packed to export specs and despatched via Tuticorin, Chennai, or Cochin ports on planned delivery dates.",
    highlight: "Planned port despatch",
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
            Every stage, under our own roof.
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
          Each stage is managed by our own team, so every roll and garment is traceable from yarn lot to export carton.
        </p>
      </Container>
    </section>
  );
}
