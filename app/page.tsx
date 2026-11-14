import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FullChainSection } from "@/components/home/FullChainSection";
import { RangeCarouselSection } from "@/components/home/RangeCarouselSection";
import { OneTeamSection } from "@/components/home/OneTeamSection";
import { WaysToWorkSection } from "@/components/home/WaysToWorkSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TrustStatsAndLogosSection } from "@/components/home/TrustStatsAndLogosSection";
import { FaqSection } from "@/components/home/FaqSection";
import { QuoteRequestSection } from "@/components/home/QuoteRequestSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Top Bar & Hero */}
      <HeroSection />

      {/* 02. About Statement & Full-Chain Card */}
      <FullChainSection />

      {/* 03. Our Garments Carousel (4:5 Ratio) */}
      <RangeCarouselSection />

      {/* 04. One Team, From Fabric to Shipment */}
      <OneTeamSection />

      {/* 05. Ways to Work with Us: Tabs Slider */}
      <WaysToWorkSection />

      {/* 06. Our Process: 8 Stages Under One Roof */}
      <ProcessSection />

      {/* 07. Brands We Supply */}
      <TrustStatsAndLogosSection />

      {/* 08. Frequently Asked Questions */}
      <FaqSection />

      {/* 09. Request a Quote Form & Contact */}
      <QuoteRequestSection />
    </>
  );
}
