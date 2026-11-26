"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
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
    <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>EXPORT MARKETS</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
            Shipping garments from Tirupur to global markets.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mt-4">
            We supply finished knitwear garments to apparel brands, retailers and buying houses across Europe, the UK, North America, Australia and the Middle East.
          </p>
        </div>

        {/* Region Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {regions.map((r, idx) => (
            <div
              key={idx}
              className="p-5 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-bold text-base text-[var(--black)]">
                  {r.name}
                </span>
              </div>
              <span className="text-xs text-[var(--text-muted)]">{r.detail}</span>
            </div>
          ))}
        </div>

        {/* Time Zone Line */}
        <div className="mt-8 p-5 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
          <span>
            Our export desk operates 9:00 AM – 6:30 PM IST, providing convenient daily overlap with European, UK, and Asian trading hours.
          </span>
        </div>
      </Container>
    </section>
  );
}

