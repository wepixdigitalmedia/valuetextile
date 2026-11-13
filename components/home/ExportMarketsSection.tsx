"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Globe, Clock } from "lucide-react";

export function ExportMarketsSection() {
  const regions = [
    { name: "Europe", detail: "Germany, France, Netherlands, Italy & EU hubs" },
    { name: "United Kingdom", detail: "Direct ocean & air freight to UK ports" },
    { name: "North America", detail: "United States & Canada export destinations" },
    { name: "Australia & New Zealand", detail: "Direct ocean freight & scheduled air cargo" },
    { name: "Middle East", detail: "UAE, Saudi Arabia & regional retail markets" },
    { name: "Other Global Destinations", detail: "Worldwide shipping with complete documentation" },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / EXPORT MARKETS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            Shipping garments from Tirupur to global markets.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
            We supply finished knitwear garments to apparel brands, retailers and buying houses across Europe, the UK, North America, Australia and the Middle East.
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
            Our export desk operates 9:00 AM – 6:30 PM IST, providing convenient daily overlap with European, UK, and Asian trading hours.
          </span>
        </div>
      </Container>
    </section>
  );
}

