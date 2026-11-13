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
      src: "/images/ways-export-garments.jpg",
      alt: "Folded export-ready cotton knitwear garments and dyed fabric swatches in Tirupur"
    },
    photo2: {
      src: "/images/ways-export-cartons.jpg",
      alt: "Export-ready sealed master cartons and polybagged garments prepared for international shipment"
    }
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
      src: "/images/slider/cut-and-sew.webp",
      alt: "In-house garment cutting and stitching line in Tirupur"
    },
    photo2: {
      src: "/images/slider/lab-qc.webp",
      alt: "In-line garment quality control and inspection floor"
    }
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
      src: "/images/fabric-rack-showcase.jpg",
      alt: "Custom fabric and garment specification samples prepared for buyers"
    },
    photo2: {
      src: "/images/slider/fabric-sourcing.webp",
      alt: "Knitted fabric swatches and custom developments on request"
    }
  }
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
      className="relative w-full overflow-hidden bg-cover bg-center py-12 sm:py-16 lg:py-20 border-b border-[#E8E2D9]"
      style={{
        backgroundImage: `url("/images/ways-to-work-backdrop.webp")`,
        backgroundColor: "#FAF7F2",
      }}
    >
      <Container className="relative z-10">
        {/* ============================================================ */}
        {/* TOP PILL TABS                                                */}
        {/* ============================================================ */}
        <div className="flex items-center gap-2 sm:gap-4 md:space-x-4">
          {SLIDES.map((s, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative cursor-pointer rounded-full text-base lg:text-[19px] leading-[140%] px-5 sm:px-7 lg:px-8 py-2 sm:py-2.5 transition-all duration-200 ${isActive
                    ? "border border-[#1F1F1F] bg-transparent text-[#1F1F1F] font-medium shadow-2xs"
                    : "text-[#1F1F1F]/70 hover:text-[#1F1F1F] font-normal border border-transparent"
                  }`}
              >
                <span>{s.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* MAIN SPLIT CONTENT                                           */}
        {/* ============================================================ */}
        <div className="pt-8 sm:pt-12 lg:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (Col 5): Eyebrow + Headline + Paragraph + Button */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-7">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[13px] sm:text-[14px] uppercase tracking-[0.14em] font-heading font-semibold text-[#6E675F]">
                {slide.eyebrow}
              </p>

              <h2 className="text-[44px] sm:text-[52px] lg:text-[58px] xl:text-[64px] font-black text-[#1F1F1F] leading-[1.08] tracking-[-0.035em] font-heading">
                {slide.heading}
              </h2>

              <p className="text-[15.5px] sm:text-[17px] text-[#3D3A35] leading-[1.6] max-w-[440px] font-body">
                {slide.text}
              </p>
            </div>

            {/* Pill Action Button with Arrow Inside Circle */}
            <div className="pt-2">
              <Link
                href={slide.buttonHref}
                className="group inline-flex items-center justify-between gap-4 h-[52px] lg:h-[56px] pl-6 pr-2 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-[16px] font-medium transition-all shadow-xs cursor-pointer"
              >
                <span>{slide.buttonLabel}</span>
                <span className="size-10 lg:size-11 rounded-full bg-white text-[#1F1F1F] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4 lg:w-4.5 lg:h-4.5" strokeWidth={2.4} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column (Col 7): Two Floating Stadium Cards + Bottom Controls */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            {/* Two Stadium Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="group/card relative aspect-[3/4] sm:aspect-[4/5] rounded-[38px] sm:rounded-[48px] lg:rounded-[58px] overflow-hidden bg-white/40 shadow-[0px_16px_36px_rgba(0,0,0,0.08)] border border-white/60">
                <Image
                  key={`photo1-${slide.id}`}
                  src={slide.photo1.src}
                  alt={slide.photo1.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 380px"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-104"
                />
              </div>

              {/* Card 2 */}
              <div className="group/card relative aspect-[3/4] sm:aspect-[4/5] rounded-[38px] sm:rounded-[48px] lg:rounded-[58px] overflow-hidden bg-white/40 shadow-[0px_16px_36px_rgba(0,0,0,0.08)] border border-white/60">
                <Image
                  key={`photo2-${slide.id}`}
                  src={slide.photo2.src}
                  alt={slide.photo2.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 380px"
                  className="object-cover transition-transform duration-700 group-hover/card:scale-104"
                />
              </div>
            </div>

            {/* Bottom Slider Navigation Strip: Arrows + Track Bar + Counter */}
            <div className="flex items-center justify-between pt-2">
              {/* Left Circular Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="size-11 sm:size-13 lg:size-14 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-5 h-5" strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="size-11 sm:size-13 lg:size-14 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-5 h-5" strokeWidth={2.2} />
                </button>
              </div>

              {/* Middle Horizontal Track Line with Slide Progress */}
              <div className="flex-1 h-[1.5px] bg-[#1F1F1F]/20 relative mx-5 sm:mx-8">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-[#1F1F1F] transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeTab + 1) / SLIDES.length) * 100}%`,
                  }}
                />
              </div>

              {/* Right Slide Counter Number */}
              <span className="font-heading font-medium text-[36px] sm:text-[46px] lg:text-[56px] text-[#1F1F1F] tracking-tight min-w-[50px] text-right select-none leading-none">
                0{activeTab + 1}
              </span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
