"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Tiruppur } from "../ui/Tiruppur";
import { ArrowRight } from "lucide-react";

interface CapabilitySlide {
  id: string;
  pillLabel: string;
  image: string;
  alt: string;
}

const CAPABILITY_SLIDES: CapabilitySlide[] = [
  {
    id: "finished-garments",
    pillLabel: "Finished Export Garments",
    image: "/images/garments/polos.jpg",
    alt: "Finished knitted polo shirts folded and inspected for international export",
  },
  {
    id: "cut-and-sew",
    pillLabel: "Cut & Sew Garmenting",
    image: "/images/slider/cut-and-sew.webp",
    alt: "Garment manufacturing unit with precision industrial overlock stitching lines",
  },
  {
    id: "knitting-dyeing",
    pillLabel: "In-House Knitting & Dyeing",
    image: "/images/hero-fabrics.jpeg",
    alt: "Dyed knitted cotton and blended fabrics produced in our own Tirupur & Perundurai units",
  },
  {
    id: "lab-testing",
    pillLabel: "In-House Lab & 4-Point QC",
    image: "/images/slider/lab-qc.webp",
    alt: "In-house quality control and final garment inspection table",
  },
];

export function FullChainSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const active = CAPABILITY_SLIDES[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAPABILITY_SLIDES.length);
  };

  const goToSlide = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide(idx);
  };

  return (
    <section className="relative w-full bg-[#FFFDF9] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#E8E2D9]">
      {/* Warm Ambient Peachy-Amber Radial Glow (exact luxury textile atmosphere from reference) */}
      <div
        className="pointer-events-none absolute top-12 left-[-10%] w-[680px] h-[680px] rounded-full bg-[#FCE1CA]/35 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full bg-[#FBF1DF]/40 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-10 sm:space-y-14 lg:space-y-16">
        {/* ============================================================ */}
        {/* TOP BLOCK: About statement & team strip (exact reference UI) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (Desktop): / MADE IN TIRUPUR + spaced About us pill */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between items-start gap-4">
            <div>
              <p className="text-[12px] sm:text-[13px] font-heading font-bold tracking-[0.14em] text-[#78716C] uppercase leading-tight">
                / MADE IN <span className="font-tamil font-semibold">திருப்பூர்</span> (TIRUPPUR)
              </p>
            </div>

            {/* About us pill aligned with bottom of headline on desktop */}
            <div className="lg:mt-16 xl:mt-20">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-[#E8E2D9] bg-white hover:bg-white text-[13px] font-medium text-[#1F1F1F] shadow-2xs transition-all hover:border-[#C8741F]"
              >
                <span className="w-2 h-2 rounded-full bg-[#C8741F] shrink-0" />
                <span>About us</span>
              </Link>
            </div>
          </div>

          {/* Right Area: Statement + team strip + CTA buttons */}
          <div className="lg:col-span-9 flex flex-col space-y-6 sm:space-y-7">
            {/* Impact Statement: Line 1 Charcoal + Line 2 Warm Ochre Accent */}
            <h2 className="font-heading font-black text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.08] tracking-[-0.035em]">
              <span className="text-[#1F1F1F]">
                A garment is only as good as the fabric and the stitching.{" "}
              </span>
              <span className="text-[#C8741F]">
                We control both, so quality, cost and delivery date stay with one team.
              </span>
            </h2>

            {/* Sub-row: 3 Team Photos + Narrative + Action Buttons */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-8 pt-2">
              {/* Team photos + narrative */}
              <div className="flex items-center gap-4 max-w-[500px]">
                {/* 3 Overlapping Circular Photos: Export Manager, Merchandiser, Quality Head */}
                <div
                  className="flex -space-x-3 shrink-0"
                  aria-label="Production and export leadership team"
                >
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-white shadow-xs bg-[#FAF5EE]">
                    <Image
                      src="/images/team-1.webp"
                      alt="Export Manager"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-white shadow-xs bg-[#FAF5EE]">
                    <Image
                      src="/images/team-2.webp"
                      alt="Merchandiser"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-white shadow-xs bg-[#FAF5EE]">
                    <Image
                      src="/images/team-3.webp"
                      alt="Quality Head"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Narrative text matching the rhythm of the reference */}
                <p className="text-[13.5px] sm:text-[14px] text-[#55504A] leading-[1.45]">
                  At Value Textiles in <Tiruppur />, you talk to the people who run production. Every recommendation is based on what we can make, test and ship from our own units.
                </p>
              </div>

              {/* Action Buttons: Book a factory visit [CONFIRM] & About us */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between gap-3 h-[50px] pl-6 pr-2 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-[14px] font-semibold transition-all shadow-xs"
                >
                  <span>Book a factory visit</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#1F1F1F] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="group inline-flex items-center justify-between gap-3 h-[50px] pl-6 pr-2 rounded-full border border-[#1F1F1F] bg-white hover:bg-[#1F1F1F] hover:text-white text-[#1F1F1F] text-[14px] font-semibold transition-all"
                >
                  <span>About us</span>
                  <span className="w-8 h-8 rounded-full bg-[#1F1F1F] text-white group-hover:bg-white group-hover:text-[#1F1F1F] flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM BLOCK: Full Stack Fabric & Garment Sourcing Card       */}
        {/* (Exact match to Fabriclore stadium card UI geometry)          */}
        {/* ============================================================ */}
        <div className="relative w-full rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] bg-[#FFFDF9] border border-[#C8741F]/40 shadow-[0px_8px_32px_rgba(200,116,31,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px] items-stretch">
            {/* Left Content Area (Col 5): Clean, spacious, with bold ochre title & swatch icon */}
            <div className="relative lg:col-span-5 p-7 sm:p-10 lg:p-10 xl:p-14 flex flex-col justify-between">
              {/* Subtle chevron process arrows watermark in background */}
              <div className="pointer-events-none absolute bottom-0 right-0 w-3/4 max-w-[320px] opacity-[0.06] select-none">
                <Image
                  src="/images/bg-arrow.png"
                  alt=""
                  width={320}
                  height={240}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Top Pill Tag */}
              <div className="relative z-10">
                <div className="w-fit px-4 py-1.5 rounded-full bg-[#FAF4EA] border border-[#ECDDC3] text-[12.5px] sm:text-[13px] text-[#8C531B] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8741F]" />
                  <span>From yarn to garment, in one place</span>
                </div>

                {/* Big Bold Warm Ochre Title */}
                <h3 className="text-[30px] sm:text-[38px] lg:text-[40px] xl:text-[46px] text-[#C8741F] leading-[1.1] tracking-[-0.035em] font-heading font-black pt-5 sm:pt-6">
                  Garments Made With Our Own Fabric
                </h3>
              </div>

              {/* Swatch Icon & Editorial Description (spacious, uncluttered) */}
              <div className="relative z-10 flex items-start gap-3.5 sm:gap-4 pt-6 sm:pt-8 pb-4">
                <div className="size-[42px] sm:size-[48px] shrink-0 mt-0.5">
                  <Image
                    src="/images/swatch-icon.png"
                    alt="Textile Swatch Icon"
                    width={48}
                    height={48}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-[14px] sm:text-[15.5px] lg:text-[15.5px] leading-[1.55] text-[#4A4742] max-w-[440px]">
                  The fabric is knitted, dyed and tested in our own units, then cut and stitched into your garment. One team, one standard, one delivery date.
                </p>
              </div>
            </div>

            {/* Right Media Area: Expanded Width for enhanced visibility on desktop */}
            <div className="relative lg:col-span-7 min-h-[380px] sm:min-h-[440px] lg:min-h-full overflow-hidden bg-[#FAF5EE]">
              <div
                onClick={nextSlide}
                className="group relative w-full h-full cursor-pointer select-none"
                title="Click to view next capability"
              >
                {/* Full-bleed Editorial Photograph with smooth transition */}
                <Image
                  key={active.id}
                  src={active.image}
                  alt={active.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 750px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />

                {/* Subtle soft gradient scrim at bottom so floating capsule pops cleanly */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Floating Frosted Capsule at Bottom Center (exact match to Fabriclore) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-5 sm:bottom-6 z-20 w-auto px-4 max-w-[90%]">
                  <div className="bg-white/95 backdrop-blur-md rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-5 sm:gap-7 shadow-[0px_8px_24px_rgba(0,0,0,0.14)] border border-black/5 hover:bg-white transition-all">
                    <span className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#1F1F1F] tracking-tight whitespace-nowrap">
                      {active.pillLabel}
                    </span>

                    {/* Progress Indicator: Active amber bar (#C8741F) + Inactive dots */}
                    <div className="flex items-center gap-1.5 shrink-0" aria-label="Slide indicators">
                      {CAPABILITY_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => goToSlide(idx, e)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                              ? "w-8 sm:w-10 h-2 bg-[#C8741F]"
                              : "size-2 bg-[#C8741F]/30 hover:bg-[#C8741F]/60"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
