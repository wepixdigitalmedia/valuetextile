"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";

export interface BrandCardItem {
  name: string;
  src: string;
  gradient: string;
}

export const BRAND_LOGO_CARDS: BrandCardItem[] = [
  {
    name: "International Brand Partner 1",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20logo%20on%20transparent%20background.png?updatedAt=1794315540256",
    gradient:
      "radial-gradient(circle at 85% 15%, #F0A353 0%, transparent 48%), radial-gradient(circle at 86% 88%, #E68A35 0%, transparent 50%), linear-gradient(135deg, #422614 0%, #683D1F 55%, #8F5428 100%)",
  },
  {
    name: "OVS",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20OVS%20logo%20on%20transparent%20background.png?updatedAt=1794315540279",
    gradient:
      "radial-gradient(circle at 88% 18%, #B7EAE4 0%, #2D8A82 38%, transparent 65%), radial-gradient(circle at 85% 88%, #A8E2DB 0%, transparent 46%), linear-gradient(135deg, #0B4440 0%, #08322F 55%, #16665F 100%)",
  },
  {
    name: "International Brand Partner 3",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20logo%20on%20transparent%20background%20(3).png?updatedAt=1794315540168",
    gradient:
      "radial-gradient(circle at 85% 15%, #D59B58 0%, transparent 48%), radial-gradient(circle at 16% 84%, #C97A35 0%, transparent 48%), linear-gradient(145deg, #2A1B13 0%, #3E271B 55%, #22140D 100%)",
  },
  {
    name: "International Brand Partner 4",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20logo%20on%20transparent%20background%20(2).png?updatedAt=1794315540157",
    gradient:
      "radial-gradient(circle at 84% 18%, #F0BC76 0%, transparent 48%), radial-gradient(circle at 18% 82%, #BA2334 0%, transparent 52%), linear-gradient(145deg, #2C0B11 0%, #4D121C 55%, #1E070A 100%)",
  },
  {
    name: "Bernard Botue",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20Bernard%20Botue%20logo.png?updatedAt=1794315540167",
    gradient:
      "radial-gradient(circle at 82% 20%, #F48342 0%, transparent 50%), radial-gradient(circle at 20% 24%, #E01A6F 0%, transparent 56%), linear-gradient(155deg, #7C113E 0%, #A92256 55%, #4F0E29 100%)",
  },
  {
    name: "Pepco",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20Pepco%20logo%20on%20transparent%20background.png?updatedAt=1794315540174",
    gradient:
      "radial-gradient(circle at 86% 20%, #DEC99A 0%, transparent 52%), radial-gradient(circle at 82% 85%, #C6AF78 0%, transparent 48%), linear-gradient(135deg, #264728 0%, #1B351D 55%, #465F35 100%)",
  },
  {
    name: "International Brand Partner 7",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20logo%20on%20transparent%20background%20(4).png?updatedAt=1794315540128",
    gradient:
      "radial-gradient(circle at 85% 18%, #9CA3A9 0%, transparent 50%), radial-gradient(circle at 22% 88%, #BFA88F 0%, transparent 50%), linear-gradient(145deg, #0D0E10 0%, #282B30 55%, #43474D 100%)",
  },
  {
    name: "International Brand Partner 8",
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/White%20logo%20on%20transparent%20background%20(5).png?updatedAt=1794315539676",
    gradient:
      "radial-gradient(circle at 82% 22%, #9E734E 0%, transparent 48%), radial-gradient(circle at 18% 85%, #9C222D 0%, transparent 48%), radial-gradient(circle at 85% 88%, #D4B79E 0%, transparent 44%), linear-gradient(145deg, #111111 0%, #2D1F18 55%, #1A0F10 100%)",
  },
];

const NOISE_SVG_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.32'/%3E%3C/svg%3E\")";

export function BrandLogoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 max-w-5xl mx-auto">
      {BRAND_LOGO_CARDS.map((brand, idx) => (
        <div
          key={idx}
          style={{ background: brand.gradient }}
          className="group relative aspect-[4/5] rounded-[26px] sm:rounded-[32px] overflow-hidden flex items-center justify-center p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
        >
          {/* Frosted Grain Texture Overlay */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-45"
            style={{ backgroundImage: NOISE_SVG_DATA_URI }}
            aria-hidden="true"
          />

          {/* Subtle Inner Highlight Ring */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[26px] sm:rounded-[32px] ring-1 ring-inset ring-white/15"
            aria-hidden="true"
          />

          {/* Centered White Brand Logo */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={brand.src}
              alt={brand.name}
              width={220}
              height={110}
              sizes="(max-width: 640px) 42vw, 220px"
              className="max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrustStatsAndLogosSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container className="space-y-12">
        {/* Top Overview (Badges Removed) */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
            Built for repeat export orders.
          </h2>
          <p className="text-base sm:text-lg text-[#554F47] max-w-2xl font-body">
            Direct knitwear manufacturing with in-house fabric production, dependable lead times, and single-desk accountability.
          </p>
        </div>

        {/* Buyer Brand Cards Grid */}
        <div className="pt-4">
          <BrandLogoGrid />
        </div>
      </Container>
    </section>
  );
}
