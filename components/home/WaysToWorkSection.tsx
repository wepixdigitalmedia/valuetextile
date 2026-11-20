"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface TabSlide {
  id: string;
  tabLabel: string;
  eyebrow: string;
  heading: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
  photo1: { src: string; alt: string };
  photo2: { src: string; alt: string };
}

const SLIDES: TabSlide[] = [
  {
    id: "full-package",
    tabLabel: "Full package",
    eyebrow: "/ WAYS TO WORK WITH US",
    heading: "Full Package",
    text: "We make the garment with our own fabric, from your design, tech pack or reference sample. Sampling, production, inspection and shipping in one order, with one price and one delivery date.",
    buttonLabel: "Start a full-package order",
    buttonHref: "/contact?type=full-package#quote",
    photo1: {
      src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/Seven%20Folded%20Sweatshirts%20in%20Neutral%20Tones.webp",
      alt: "Folded export-ready knitwear garments in neutral tones",
    },
    photo2: {
      src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/Garment%20Boxes%20in%20Warehouse%20Packing%20Area.webp",
      alt: "Export-ready garment boxes in warehouse packing area",
    },
  },
  {
    id: "cut-and-make",
    tabLabel: "Cut and make",
    eyebrow: "/ WAYS TO WORK WITH US",
    heading: "Cut and Make",
    text: "You supply the fabric and trims; we cut, stitch, finish and pack to your specification with in-line production supervision and final garment checks.",
    buttonLabel: "Ask about cut and make",
    buttonHref: "/contact?type=cut-and-make#quote",
    photo1: {
      src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/Layered%20Neutral%20T-Shirts%20on%20Hangers.webp",
      alt: "Layered neutral t-shirts on hangers ready for quality inspection",
    },
    photo2: {
      src: "/images/cut-make-production.jpg",
      alt: "Cut and make garment panels stacked beside brass tailor shears, thread cones, and sewing workstations",
    },
  },
  {
    id: "made-to-requirements",
    tabLabel: "Made to your requirements",
    eyebrow: "/ WAYS TO WORK WITH US",
    heading: "Made to Your Requirements",
    text: "Different style, volume or a special request? Send your brief. We work to your size sets and tech packs. We also take fabric-only or yarn-only orders on request.",
    buttonLabel: "Send your brief",
    buttonHref: "/contact#quote",
    photo1: {
      src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/Fashion%20Technical%20Sketch%20Sheets.webp",
      alt: "Fashion technical sketch sheets and custom garment tech packs",
    },
    photo2: {
      src: "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/Fabric%20Swatch%20Studio%20Desk.webp",
      alt: "Fabric swatch studio desk for custom textile developments",
    },
  },
];

export function WaysToWorkSection() {
  const [activeTab, setActiveTab] = useState(0);
  const slide = SLIDES[activeTab];

  const prevSlide = () => {
    setActiveTab((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveTab((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full overflow-hidden py-9 sm:py-11 lg:py-13 border-b border-[#E8E2D9]"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      {/* Atelier Background Image Layer (Smooth matte ivory left, draped cotton knit right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/ways-atelier-backdrop.jpg")`,
        }}
      />

      <Container className="relative z-10">
        {/* ============================================================ */}
        {/* TOP PILL TABS (Compact)                                      */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {SLIDES.map((s, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative cursor-pointer rounded-full text-sm sm:text-[15px] leading-snug px-4 sm:px-6 py-1.5 sm:py-2 transition-all duration-200 ${
                  isActive
                    ? "border border-[#1F1F1F] bg-white/45 backdrop-blur-xs text-[#1F1F1F] font-semibold shadow-2xs"
                    : "text-[#1F1F1F]/70 hover:text-[#1F1F1F] font-normal border border-transparent"
                }`}
              >
                <span>{s.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* MAIN SPLIT CONTENT (Compact Height & Clean Proportions)      */}
        {/* ============================================================ */}
        <div className="pt-6 sm:pt-7 lg:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column (Col 5): Eyebrow + Headline + Paragraph + Button */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5">
            <div className="space-y-2.5 sm:space-y-3">
              <p className="text-[11.5px] sm:text-xs uppercase tracking-[0.14em] font-heading font-semibold text-[#6E675F]">
                {slide.eyebrow}
              </p>

              <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-black text-[#1F1F1F] leading-[1.06] tracking-[-0.035em] font-heading">
                {slide.heading}
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#3D3A35] leading-[1.58] max-w-[420px] font-body">
                {slide.text}
              </p>
            </div>

            {/* Pill Action Button with Arrow Inside Circle */}
            <div className="pt-1">
              <Link
                href={slide.buttonHref}
                className="group inline-flex items-center justify-between gap-3.5 h-[46px] pl-5 pr-1.5 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-[14px] font-medium transition-all shadow-xs cursor-pointer"
              >
                <span>{slide.buttonLabel}</span>
                <span className="size-8.5 rounded-full bg-white text-[#1F1F1F] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column (Col 7): Two Compact Floating Stadium Cards + Bottom Controls */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Two Compact Stadium Cards */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 max-w-[640px] lg:ml-auto w-full">
              {/* Card 1 */}
              <div className="group/card relative h-[210px] sm:h-[245px] lg:h-[265px] rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden bg-white/40 shadow-[0px_12px_28px_rgba(0,0,0,0.08)] border border-white/60">
                <Image
                  key={`photo1-${slide.id}`}
                  src={slide.photo1.src}
                  alt={slide.photo1.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-104"
                />
              </div>

              {/* Card 2 */}
              <div className="group/card relative h-[210px] sm:h-[245px] lg:h-[265px] rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden bg-white/40 shadow-[0px_12px_28px_rgba(0,0,0,0.08)] border border-white/60">
                <Image
                  key={`photo2-${slide.id}`}
                  src={slide.photo2.src}
                  alt={slide.photo2.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-104"
                />
              </div>
            </div>

            {/* Bottom Slider Navigation Strip: Arrows + Track Bar + Counter */}
            <div className="flex items-center justify-between pt-1 max-w-[640px] lg:ml-auto w-full">
              {/* Left Circular Arrow Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="size-9.5 sm:size-10.5 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="size-9.5 sm:size-10.5 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </button>
              </div>

              {/* Middle Horizontal Track Line with Slide Progress */}
              <div className="flex-1 h-[1.5px] bg-[#1F1F1F]/20 relative mx-4 sm:mx-6">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-[#1F1F1F] transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeTab + 1) / SLIDES.length) * 100}%`,
                  }}
                />
              </div>

              {/* Right Slide Counter Number */}
              <span className="font-heading font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#1F1F1F] tracking-tight min-w-[42px] text-right select-none leading-none">
                0{activeTab + 1}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
