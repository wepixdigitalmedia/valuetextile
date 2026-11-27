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


export function BrandStrip() {
  return (
    <div className="rounded-[12px] bg-[var(--black)] px-4 py-6 sm:px-10 sm:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-5 gap-y-6 sm:gap-x-6 sm:gap-y-7 items-center">
        {BRAND_LOGO_CARDS.map((brand, idx) => (
          <Image
            key={idx}
            src={brand.src}
            alt={brand.name}
            width={160}
            height={64}
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 120px"
            className="h-7 sm:h-9 w-auto max-w-full mx-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export function TrustStatsAndLogosSection() {
  return (
    <section className="w-full bg-[var(--white)] py-10 lg:py-12 border-b border-[var(--line)]">
      <Container className="space-y-5">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>Brands we make for</span>
        </p>
        <BrandStrip />
      </Container>
    </section>
  );
}
