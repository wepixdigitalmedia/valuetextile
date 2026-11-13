"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Globe, Clock } from "lucide-react";

export function ExportMarketsSection() {
  const regions = [
    { name: "Europe", detail: "[COUNTRIES, CONFIRM]" },
    { name: "United Kingdom", detail: "Direct shipping to UK hubs" },
    { name: "North America", detail: "[COUNTRIES, CONFIRM]" },
    { name: "Australia & New Zealand", detail: "Ocean & air freight" },
    { name: "Middle East", detail: "[COUNTRIES, CONFIRM]" },
    { name: "Other Global Destinations", detail: "[CONFIRM]" },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / EXPORT MARKETS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            Shipping from Tirupur to [N] countries
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
            We supply knitted fabrics and garments to brands, retailers and buying houses in [REGIONS, e.g. Europe, the UK, North America, Australia, the Middle East].
          </p>
        </div>

        {/* Region Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {regions.map((r, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex flex-col justify-between space-y-2 shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C8741F]" />
                <span className="font-heading font-bold text-base text-[#1F1F1F]">
                  {r.name}
                </span>
              </div>
              <span className="font-mono text-xs text-[#78716C]">{r.detail}</span>
            </div>
          ))}
        </div>

        {/* Time Zone Line */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-center gap-3 text-sm text-[#554F47]">
          <Clock className="w-4 h-4 text-[#C8741F] shrink-0" />
          <span>
            Our export desk works [HOURS] IST, which overlaps with UK and European mornings and [US HOURS, CONFIRM].
          </span>
        </div>
      </Container>
    </section>
  );
}

