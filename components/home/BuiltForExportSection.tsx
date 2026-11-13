"use client";

import React from "react";
import { Container } from "../ui/Container";

const TILES = [
  {
    number: "01",
    title: "Private label & custom programs",
    copy: "Your label, your specification, our production. We work from your tech pack or develop one with you. Custom neck labels, care tags, and polybag packaging.",
    badge: "Tech packs & trims",
  },
  {
    number: "02",
    title: "Minimum order quantity",
    copy: "Knitted fabric: [MOQ, CONFIRM] per colour. Garments: [MOQ, CONFIRM] per style. Flexible initial trial orders for emerging brands [CONFIRM].",
    badge: "Fabric & Garment MOQs",
  },
  {
    number: "03",
    title: "Sampling & development",
    copy: "Lab dips formulated on SPI Autolab and spectrophotometer. Fabric swatches and pre-production garment samples before bulk cutting. Sample time: [DAYS, CONFIRM].",
    badge: "SPI Autolab matching",
  },
  {
    number: "04",
    title: "Confirmed production lead times",
    copy: "Fabric: Solid shades 30 days (from lab dip approval), Melange 35 days, Yarn-dyed and all-over print 45 days. Garments: [DAYS, CONFIRM] after sample and trim approval.",
    badge: "30–45 days fabric",
  },
  {
    number: "05",
    title: "Shipping & export ports",
    copy: "Terms: FOB / CIF to buyer choice. Ocean shipping via Tuticorin and Chennai ports, air shipments via Coimbatore and Bangalore international airports.",
    badge: "Tuticorin & Chennai",
  },
  {
    number: "06",
    title: "Payment & commercial terms",
    copy: "Commercial terms: [TERMS, e.g. LC / Advance against documents, CONFIRM]. Invoicing in USD, EUR, or GBP with complete export documentation.",
    badge: "USD / EUR / GBP",
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
            What overseas buyers ask us first.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
            Straight answers on order size, samples, lead times and shipping, so you can plan before you write to us.
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
