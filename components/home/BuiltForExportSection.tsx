"use client";

import React from "react";
import { Container } from "../ui/Container";

const TILES = [
  {
    number: "01",
    title: "Private label & custom design",
    copy: "Your label, your specification, our production. We work from your tech pack or develop one with you. Custom neck labels, care tags, and polybag packing.",
    badge: "Tech packs & trims",
  },
  {
    number: "02",
    title: "Minimum order quantity",
    copy: "Clear MOQs per style and per colour, with scalable volume tiers and flexible trial orders for emerging brands and new collections.",
    badge: "Scalable volumes",
  },
  {
    number: "03",
    title: "Sampling & fit approval",
    copy: "Fit sample, pre-production sample and size-set sample before bulk cutting. Colour lab dips formulated with spectrophotometer precision.",
    badge: "Fit & pre-production",
  },
  {
    number: "04",
    title: "Confirmed production lead times",
    copy: "Predictable production schedules after approval of samples, trims and fabric colour. Planned repeat orders and seasonal collection runs.",
    badge: "Planned delivery dates",
  },
  {
    number: "05",
    title: "Quality & inspection",
    copy: "Our own in-house fabric tests and 4-point inspection, followed by in-line and final garment inspection. Third-party buyer audits welcomed.",
    badge: "4-point & garment QC",
  },
  {
    number: "06",
    title: "Shipping & export documents",
    copy: "FOB or CIF terms via Tuticorin, Chennai, or Cochin ports. Complete export documentation, packing lists, and certificates of origin prepared.",
    badge: "Tuticorin & Chennai",
  },
];

export function BuiltForExportSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / BUILT FOR EXPORT
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            What overseas garment buyers ask us first.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
            Straight answers on order size, samples, timing and shipping, so you can plan before you write to us.
          </p>
        </div>

        {/* 6 Grid Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-14">
          {TILES.map((tile) => (
            <div
              key={tile.number}
              className="p-7 rounded-[28px] bg-[#FAF8F5] border border-[#E8E2D9] flex flex-col justify-between space-y-4 hover:border-[#C8741F] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#C8741F] uppercase tracking-wider">
                  Question #{tile.number}
                </span>
                <span className="font-mono text-[11px] font-semibold text-[#78716C] bg-white px-2 py-0.5 rounded-full border border-[#E8E2D9]">
                  {tile.badge}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#1F1F1F] mb-2">
                  {tile.title}
                </h3>
                <p className="font-body text-sm text-[#554F47] leading-relaxed">
                  {tile.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
