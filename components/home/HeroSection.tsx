import React from "react";
import { Container } from "../ui/Container";
import { Tiruppur } from "../ui/Tiruppur";
import { TestimonialChip } from "./TestimonialChip";
import { HeroMedia } from "./HeroMedia";
import { siteConfig } from "@/config/siteContent";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative w-full bg-white pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
      <Container>
        {/* Eyebrow Label with Tamil Script for Tiruppur */}
        <div className="mb-2">
          <span className="text-[11px] sm:text-[12px] font-heading font-bold uppercase tracking-[0.16em] text-[#C8741F]">
            GARMENT MANUFACTURER & EXPORTER · <Tiruppur />, INDIA
          </span>
        </div>

        {/* Top Headline & Description Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-12">
          {/* Headline (Left): Two tight, bold lines */}
          <h1 className="font-heading font-extrabold text-[#1F1F1F] leading-[1.04] tracking-[-0.03em] text-[36px] sm:text-[48px] lg:text-[54px] xl:text-[62px]">
            <span className="block">{hero.headlineLine1}</span>
            <span className="block">{hero.headlineLine2}</span>
          </h1>

          {/* Description (Right): Compact paragraph + quick facts */}
          <div className="w-full max-w-[540px] lg:max-w-[400px] xl:max-w-[450px] shrink-0 pb-1">
            <p className="font-body text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.55] text-[#5F5B55]">
              {hero.descriptionPrefix}
              <strong className="font-bold text-[#1F1F1F]">
                {hero.descriptionHighlight}
              </strong>
              {hero.descriptionSuffix}
            </p>

            {/* Quick facts line from Garments-First Specification */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] sm:text-[13px] text-[#5F5B55] pt-2">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8741F]" />
                Private label
              </span>
              <span className="text-[#D9D3CA]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8741F]" />
                Samples before bulk
              </span>
              <span className="text-[#D9D3CA]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8741F]" />
                Export quality
              </span>
              <span className="text-[#D9D3CA]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8741F]" />
                Scalable volumes
              </span>
            </div>
          </div>
        </div>

        {/* 1px Full-Width Hairline with refined margin */}
        <div
          className="w-full h-px bg-[#E6E2DB] my-4 sm:my-5 lg:my-6"
          aria-hidden="true"
        />

        {/* Two-Column Row:
            - Desktop: Left 25% (Stats, Testimonial), Right 75% (HeroMedia) -> fits in 1 screen height
            - Mobile: HeroMedia first (order-1), then Testimonial & Stats (order-2) like ref Img 3
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Column (Desktop) / Bottom Column (Mobile): Testimonial chip, Buyer Quote, Big Stat */}
          <div className="order-2 lg:order-1 lg:col-span-3 xl:col-span-3 flex flex-col justify-between py-1 space-y-5 lg:space-y-0">
            {/* Testimonial Chip: Real circular avatar photo + ochre arrow circle */}
            <TestimonialChip />

            {/* Buyer Quote & Verified Label */}
            <div className="py-1">
              <blockquote className="font-body italic text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.45] text-[#1F1F1F] max-w-[280px]">
                &ldquo;{hero.buyerQuote}&rdquo;
              </blockquote>
              <p className="text-[11px] font-heading font-bold uppercase tracking-[0.14em] text-[#8C827A] mt-2.5">
                Verified global buyer
              </p>
            </div>

            {/* Non-numeric Factory-Direct Proof Callout */}
            <div className="pt-1 border-t border-[#E6E2DB]/70">
              <div className="font-heading text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold leading-tight text-[#1F1F1F] tracking-[-0.02em] pt-3">
                Factory-Direct<span className="text-[#C8741F]">.</span>
              </div>
              <p className="font-body text-[13.5px] sm:text-[14.5px] text-[#C8741F] font-semibold mt-1 leading-snug">
                Knitting, dyeing &amp; stitching in our own units.
              </p>
            </div>
          </div>

          {/* Right Column (Desktop) / Top Column (Mobile): HeroMedia with silk flow banner and embedded CTA */}
          <div className="order-1 lg:order-2 lg:col-span-9 xl:col-span-9 w-full flex items-center">
            <HeroMedia />
          </div>
        </div>
      </Container>
    </section>
  );
}
