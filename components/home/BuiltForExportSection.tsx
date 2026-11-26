"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

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
    <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>BUILT FOR EXPORT</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
            What overseas garment buyers ask us first.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mt-4">
            Straight answers on order size, samples, timing and shipping, so you can plan before you write to us.
          </p>
        </div>

        {/* 6 Grid Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-14">
          {TILES.map((tile) => (
            <div
              key={tile.number}
              className="p-7 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between space-y-4 hover:border-[var(--black)] transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--black)] uppercase tracking-[0.14em]">
                  <span>Question</span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--accent)] text-[var(--on-accent)]">
                    #{tile.number}
                  </span>
                </span>
                <span className="text-xs font-semibold text-[var(--text-muted)] px-2.5 py-0.5 rounded-full border border-[var(--line)]">
                  {tile.badge}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--black)] mb-2">
                  {tile.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
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
