"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";

const BRAND_LOGOS = [
  { name: "Jack & Jones", src: "/images/brands/jac.png" },
  { name: "LC Waikiki", src: "/images/brands/lc.png" },
  { name: "Desigual", src: "/images/brands/des.png" },
  { name: "Pepco", src: "/images/brands/pep.png" },
  { name: "s.Oliver", src: "/images/brands/so.png" },
  { name: "OVS", src: "/images/brands/ov.png" },
  { name: "HE", src: "/images/brands/he.png" },
  { name: "KappAhl", src: "/images/brands/ke.png" },
];

export function TrustStatsAndLogosSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container className="space-y-12">
        {/* ===================== BLOCK E: EXPORT OVERVIEW ===================== */}
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Proof Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="px-4 py-1.5 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] text-xs font-semibold text-[#1F1F1F]">
              Capacity
            </span>
            <span className="px-4 py-1.5 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] text-xs font-semibold text-[#1F1F1F]">
              Quality control
            </span>
            <span className="px-4 py-1.5 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] text-xs font-semibold text-[#1F1F1F]">
              Delivery
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
            Built for repeat export orders.
          </h2>

          <p className="text-base sm:text-lg text-[#554F47] max-w-2xl font-body">
            Direct knitwear manufacturing with in-house fabric production, dependable lead times, and single-desk accountability.
          </p>
        </div>

        {/* ===================== BLOCK F: BUYER LOGOS ===================== */}
        <div className="pt-8 border-t border-[#E8E2D9]">
          <h3 className="font-heading text-xl font-bold text-[#1F1F1F] text-center mb-8">
            Brands we supply
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {BRAND_LOGOS.map((brand, idx) => (
              <div
                key={idx}
                className="h-20 sm:h-24 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center p-4 transition-all duration-300 hover:border-[#C8741F] hover:shadow-2xs group"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={60}
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="max-h-12 w-auto object-contain filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
