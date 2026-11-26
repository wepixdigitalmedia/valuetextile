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
    eyebrow: "WAYS TO WORK WITH US",
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
    eyebrow: "WAYS TO WORK WITH US",
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
    eyebrow: "WAYS TO WORK WITH US",
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
    <section className="relative w-full overflow-hidden bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        {/* TOP PILL TABS */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {SLIDES.map((s, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer rounded-full text-sm sm:text-[15px] px-4 sm:px-6 py-2 transition-colors duration-200 border ${isActive
                    ? "border-[var(--black)] bg-[var(--surface)] text-[var(--black)] font-bold"
                    : "border-[var(--line)] bg-[var(--white)] text-[var(--text-muted)] hover:border-[var(--black)] hover:text-[var(--black)] font-medium"
                  }`}
              >
                <span>{s.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN SPLIT CONTENT */}
        <div className="pt-8 lg:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.14em] font-bold text-[var(--black)]">
                <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>{slide.eyebrow}</span>
              </p>

              <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                {slide.heading}
              </h2>

              <p className="text-[16px] text-[var(--text-muted)] leading-[1.6] max-w-[420px]">
                {slide.text}
              </p>
            </div>

            <div className="pt-1">
              <Link
                href={slide.buttonHref}
                className="group inline-flex items-center justify-between gap-3.5 min-h-[48px] pl-6 pr-1.5 py-1 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                <span>{slide.buttonLabel}</span>
                <span className="size-9 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-[640px] lg:ml-auto w-full">
              <div className="group/card relative h-[210px] sm:h-[245px] lg:h-[265px] rounded-[12px] overflow-hidden bg-[var(--surface)] border border-[var(--line)]">
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

              <div className="group/card relative h-[210px] sm:h-[245px] lg:h-[265px] rounded-[12px] overflow-hidden bg-[var(--surface)] border border-[var(--line)]">
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

            <div className="flex items-center justify-between pt-1 max-w-[640px] lg:ml-auto w-full">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="size-10 rounded-full border-[1.5px] border-[var(--black)] bg-[var(--white)] text-[var(--black)] flex items-center justify-center hover:bg-[var(--black)] hover:text-[var(--white)] transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="size-10 rounded-full border-[1.5px] border-[var(--black)] bg-[var(--white)] text-[var(--black)] flex items-center justify-center hover:bg-[var(--black)] hover:text-[var(--white)] transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </button>
              </div>

              <div className="flex-1 h-[2px] bg-[var(--line)] relative mx-4 sm:mx-6">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-[var(--accent)] transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeTab + 1) / SLIDES.length) * 100}%`,
                  }}
                />
              </div>

              <span className="font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-[var(--accent)] tracking-[-0.02em] min-w-[42px] text-right select-none leading-none">
                0{activeTab + 1}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
