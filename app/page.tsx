import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FullChainSection } from "@/components/home/FullChainSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { OneTeamSection } from "@/components/home/OneTeamSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { RangeCarouselSection } from "@/components/home/RangeCarouselSection";
import { WaysToWorkSection } from "@/components/home/WaysToWorkSection";
import { TrustStatsAndLogosSection } from "@/components/home/TrustStatsAndLogosSection";
import { FaqSection } from "@/components/home/FaqSection";
import { QuoteRequestSection } from "@/components/home/QuoteRequestSection";
import { ImageSlot } from "@/components/ui/ImageSlot";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero, with quote and samples buttons */}
      <HeroSection />

      {/* 02. Brand logo strip: proof right under the hero */}
      <TrustStatsAndLogosSection />

      {/* 03. Platform statement and four division cards */}
      <FullChainSection />

      {/* Banner A: full width, the knitting floor */}
      <ImageSlot
        bleed
        label="Banner A · Knitting floor"
        hint="Wide shot of the circular knitting floor with machines running and a technician at work. Keep the subject near the centre so it crops well on mobile."
        desktop={{ w: 1920, h: 800, src: "/images/home/banner-a-knitting-floor-desktop.webp" }}
        mobile={{ w: 900, h: 1100, src: "/images/home/banner-a-knitting-floor-mobile.webp" }}
        alt="Circular knitting machines running in a knitting hall"
      />

      {/* 04. The chain, eight stages (photo strip inside) */}
      <ProcessSection />

      {/* 05. Garment range: what the buyer came to see */}
      <RangeCarouselSection />

      {/* 06. Three ways to order */}
      <WaysToWorkSection />

      {/* 07. Certificates (real logos) */}
      <CertificationsSection />

      {/* 08. One partner, full accountability (short band) */}
      <OneTeamSection />

      {/* Banner B: full width, the people */}
      <ImageSlot
        bleed
        label="Banner B · The team"
        hint="Merchandisers and floor supervisors at work: a tech-pack review at a table, or supervisors on the stitching line. Real faces, not posed."
        desktop={{ w: 1920, h: 700, src: "/images/home/banner-b-team-desktop.webp" }}
        mobile={{ w: 900, h: 1000, src: "/images/home/banner-b-team-mobile.webp" }}
        alt="Merchandisers and production staff reviewing a garment tech pack"
      />

      {/* 09. FAQ */}
      <FaqSection />

      {/* Banner C: full width, despatch, leads into the quote form */}
      <ImageSlot
        bleed
        label="Banner C · Packing and despatch"
        hint="Labelled cartons stacked at despatch, or a container being loaded. This sits right above the quote form."
        desktop={{ w: 1920, h: 640, src: "/images/home/banner-c-despatch-desktop.webp" }}
        mobile={{ w: 900, h: 1000, src: "/images/home/banner-c-despatch-mobile.webp" }}
        alt="Export cartons being loaded into a shipping container at a despatch dock"
      />

      {/* 10. Quote form */}
      <QuoteRequestSection />
    </>
  );
}
