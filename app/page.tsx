import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FullChainSection } from "@/components/home/FullChainSection";
import { RangeCarouselSection } from "@/components/home/RangeCarouselSection";
import { OneTeamSection } from "@/components/home/OneTeamSection";
import { WaysToWorkSection } from "@/components/home/WaysToWorkSection";
import { WhyTirupurSection } from "@/components/home/WhyTirupurSection";
import { ExportMarketsSection } from "@/components/home/ExportMarketsSection";
import { DirectManufacturerSection } from "@/components/home/DirectManufacturerSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BuiltForExportSection } from "@/components/home/BuiltForExportSection";
import { WhoWeWorkWithSection } from "@/components/home/WhoWeWorkWithSection";
import { TrustStatsAndLogosSection } from "@/components/home/TrustStatsAndLogosSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { QuoteRequestSection } from "@/components/home/QuoteRequestSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Top Bar & Hero (Part A, Section 1) */}
      <HeroSection />

      {/* 02. About Statement & Full-Chain Card (Part B, Block A / Screenshot 2) */}
      <FullChainSection />

      {/* 03. Our Range Carousel: Fabrics & Garments (Part B, Block B / Screenshot 3) */}
      <RangeCarouselSection />

      {/* 04. One Team, From Yarn to Shipment (Part B, Block C / Screenshot 4) */}
      <OneTeamSection />

      {/* 05. Ways to Work with Us: Tabs Slider (Part B, Block D / Screenshot 5) */}
      <WaysToWorkSection />

      {/* 06. Why Tirupur: Cluster Advantages (Part A, Section 3) */}
      <WhyTirupurSection />

      {/* 07. Export Markets & Regions (Part A, Section 2) */}
      <ExportMarketsSection />

      {/* 08. Why Source Directly from Us: Comparison (Part A, Section 6) */}
      <DirectManufacturerSection />

      {/* 09. Our Process: 8 Stages Under One Roof (Part A, Section 7) */}
      <ProcessSection />

      {/* 10. Built for Export: What Buyers Ask First (Part A, Section 8) */}
      <BuiltForExportSection />

      {/* 11. Who We Work With & How to Start (Part A, Section 9) */}
      <WhoWeWorkWithSection />

      {/* 12. Trust Stats & Buyer Logos (Part B, Blocks E & F / Screenshots 6 & 7) */}
      <TrustStatsAndLogosSection />

      {/* 13. Certifications & Compliance (Part A, Section 10) */}
      <CertificationsSection />

      {/* 14. Frequently Asked Questions (Part A, Section 11) */}
      <FaqSection />

      {/* 15. Request a Quote Form & Contact (Part A, Section 12) */}
      <QuoteRequestSection />
    </>
  );
}
