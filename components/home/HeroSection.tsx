import React from "react";
import { Container } from "../ui/Container";
import { Tiruppur } from "../ui/Tiruppur";
import { TestimonialChip } from "./TestimonialChip";
import { HeroMedia } from "./HeroMedia";
import { siteConfig } from "@/config/siteContent";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative w-full bg-[var(--white)] pt-6 sm:pt-8 lg:pt-12 pb-16 lg:pb-24">
      <Container>
        {/* Eyebrow Label */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
            <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
            <span>
              GARMENT MANUFACTURER &amp; EXPORTER · <Tiruppur />, INDIA
            </span>
          </span>
        </div>

        {/* Top Headline & Description Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-12">
          <h1 className="font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] text-[36px] sm:text-[48px] lg:text-[54px] xl:text-[62px]">
            <span className="block">{hero.headlineLine1}</span>
            <span className="block">{hero.headlineLine2}</span>
          </h1>

          <div className="w-full max-w-[540px] lg:max-w-[400px] xl:max-w-[450px] shrink-0 pb-1">
            <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[var(--text-muted)]">
              {hero.descriptionPrefix}
              <strong className="font-semibold text-[var(--black)]">
                {hero.descriptionHighlight}
              </strong>
              {hero.descriptionSuffix}
            </p>

            {/* Quick facts tags */}
            <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-[var(--black)] pt-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] border border-[var(--line)]">
                Private label
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] border border-[var(--line)]">
                Samples before bulk
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] border border-[var(--line)]">
                Export quality
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] border border-[var(--line)]">
                Scalable volumes
              </span>
            </div>
          </div>
        </div>

        {/* 1px Full-Width Hairline */}
        <div
          className="w-full h-px bg-[var(--line)] my-6 sm:my-7"
          aria-hidden="true"
        />

        {/* Two-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          <div className="order-2 lg:order-1 lg:col-span-3 xl:col-span-3 flex flex-col justify-between py-1 space-y-5 lg:space-y-0">
            <TestimonialChip />

            <div className="py-1">
              <blockquote className="italic text-[16px] leading-[1.6] text-[var(--black)] max-w-[280px]">
                &ldquo;{hero.buyerQuote}&rdquo;
              </blockquote>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] mt-2.5">
                Verified global buyer
              </p>
            </div>

            <div className="pt-1 border-t border-[var(--line)]">
              <div className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold leading-[1.1] text-[var(--black)] tracking-[-0.02em] pt-3">
                Factory-Direct<span className="text-[var(--accent)]">.</span>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[var(--text-muted)] font-medium mt-1 leading-[1.5]">
                Knitting, dyeing &amp; stitching in our own units.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-9 xl:col-span-9 flex flex-col justify-end">
            <HeroMedia />
          </div>
        </div>
      </Container>
    </section>
  );
}
