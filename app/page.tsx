import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FullChainSection } from "@/components/home/FullChainSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { RangeCarouselSection } from "@/components/home/RangeCarouselSection";
import { WaysToWorkSection } from "@/components/home/WaysToWorkSection";
import { TrustStatsAndLogosSection } from "@/components/home/TrustStatsAndLogosSection";
import { FaqSection } from "@/components/home/FaqSection";
import { QuoteRequestSection } from "@/components/home/QuoteRequestSection";
import { ImageSlot } from "@/components/ui/ImageSlot";

/**
 * Homepage order is built around the quote: convince, show the range, then ask.
 * The "One partner" band (it repeats the four division cards) was cut to keep it short.
 * Two banners stay (knitting floor, team); the despatch banner moved to the How to order page.
 */
export default function HomePage() {
  return (
    <>
      {/* 01. Hero, with quote and samples buttons */}
      <HeroSection />

      {/* 02. Brand logo strip: proof right under the hero */}
      <TrustStatsAndLogosSection />

      {/* 03. Platform statement and four division cards */}
      <FullChainSection />

      {/* Banner A: the knitting floor, a visual break after the division cards */}
      <ImageSlot
        bleed
        label="Banner A · Knitting floor"
        hint="Wide shot of the circular knitting floor with machines running and a technician at work."
        desktop={{ w: 1920, h: 800, src: "/images/home/banner-a-knitting-floor-desktop.webp" }}
        mobile={{ w: 900, h: 1100, src: "/images/home/banner-a-knitting-floor-mobile.webp" }}
        alt="Circular knitting machines running in a knitting hall"
      />

      {/* 04. Certificates (real logos) */}
      <CertificationsSection />

      {/* 05. Garment range: what the buyer came to see */}
      <RangeCarouselSection />

      {/* 06. Three ways to order */}
      <WaysToWorkSection />

      {/* Banner B: the people, a trust cue right above the form */}
      <ImageSlot
        bleed
        label="Banner B · The team"
        hint="Merchandisers and floor supervisors at work: a tech-pack review at a table, or supervisors on the stitching line."
        desktop={{ w: 1920, h: 700, src: "/images/home/banner-b-team-desktop.webp" }}
        mobile={{ w: 900, h: 1000, src: "/images/home/banner-b-team-mobile.webp" }}
        alt="Merchandisers and production staff reviewing a garment tech pack"
      />

      {/* 07. Quote form, straight after the buyer has chosen how to start */}
      <QuoteRequestSection />

      {/* 08. The eight stages: proof for buyers who are still comparing factories, below the form on purpose */}
      <ProcessSection />

      {/* 09. FAQ: answers the last doubts, and carries the search-friendly questions */}
      <FaqSection />
    </>
  );
}
