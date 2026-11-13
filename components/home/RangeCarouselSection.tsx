"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { rangeItems, RangeItem } from "@/config/rangeData";
import { RangeCard } from "./RangeCard";
import { RangeSpecsModal } from "./RangeSpecsModal";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Sparkle } from "lucide-react";

export function RangeCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<RangeItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll state and current index
  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);

    const cardWidth = 340;
    const index = Math.min(
      rangeItems.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setCurrentIndex(index);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.clientWidth < 640 ? 300 : 380;
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.clientWidth < 640 ? 300 : 380;
    carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <Container>
        {/* ===================== DESKTOP & MOBILE HEADER ===================== */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
          {/* Left Column: Eyebrow + Desktop CTA Button / Mobile Counter */}
          <div className="flex flex-col justify-between shrink-0 lg:w-[240px] xl:w-[260px]">
            {/* Top row for mobile: Eyebrow on left, Counter + arrows on right */}
            <div className="flex items-center justify-between lg:block">
              <p className="font-heading text-sm md:text-base font-bold leading-tight uppercase tracking-wider text-[#1F1F1F]">
                / OUR GARMENTS
              </p>

              {/* Mobile Counter and Navigation (< 01/05 >) */}
              <div className="lg:hidden flex items-center gap-1 text-[#1F1F1F]">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollLeft}
                  className="p-1 rounded-full text-[#1F1F1F] disabled:opacity-30 disabled:pointer-events-none hover:bg-neutral-100 transition-colors"
                  aria-label="Previous item"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#1F1F1F] min-w-[44px] text-center">
                  0{currentIndex + 1}/0{rangeItems.length}
                </span>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollRight}
                  className="p-1 rounded-full text-[#1F1F1F] disabled:opacity-30 disabled:pointer-events-none hover:bg-neutral-100 transition-colors"
                  aria-label="Next item"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Desktop Explore Range Button */}
            <div className="hidden lg:block mt-8">
              <Link
                href="/products?cat=Garments"
                className="group h-[52px] pl-[25px] pr-[6px] rounded-full inline-flex items-center justify-between gap-3 bg-[#1F1F1F] text-white hover:bg-neutral-800 transition-all font-medium text-[16px] shadow-xs"
              >
                <span>Explore our garments</span>
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1F1F1F] group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Block: Theme Sparkle + Heading + Subtitle */}
          <div className="flex items-start gap-3 sm:gap-5 xl:gap-6 flex-1">
            {/* Theme Orange Sparkle Accent */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 shrink-0 mt-1 flex items-center justify-center text-[#C8741F]">
              <Sparkle className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 fill-[#C8741F]" />
            </div>

            {/* Heading & Subtitle strictly from garments-first-homepage.md Section 3 */}
            <div className="flex flex-col gap-2 sm:gap-3 flex-1">
              <h2 className="font-heading text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.12] tracking-[-0.035em]">
                Garments we make for international brands.
              </h2>
              <p className="font-body text-[14px] sm:text-base lg:text-[17px] text-[#6B655D] leading-relaxed max-w-3xl">
                Five categories, made in our own units to your design, tech pack or reference sample.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== CAROUSEL TRACK ===================== */}
        <div className="relative mt-8 sm:mt-12 lg:mt-16">
          {/* Desktop Floating Left Navigation Button */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollPrev}
              className="hidden lg:flex absolute left-0 top-[40%] -translate-y-1/2 -translate-x-5 z-20 w-12 h-12 rounded-full bg-[#1F1F1F] text-white shadow-xl items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {/* Desktop Floating Right Navigation Button */}
          {canScrollRight && (
            <button
              type="button"
              onClick={scrollNext}
              className="hidden lg:flex absolute right-0 top-[40%] -translate-y-1/2 translate-x-5 z-20 w-12 h-12 rounded-full bg-[#1F1F1F] text-white shadow-xl items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {/* Horizontal Card Scroll Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-1 px-1 snap-x snap-mandatory"
          >
            {rangeItems.map((item) => (
              <div
                key={item.id}
                className="w-[85vw] sm:w-[320px] lg:w-[340px] xl:w-[370px] shrink-0 snap-start"
              >
                <RangeCard
                  item={item}
                  onOpenSpecs={(it) => setSelectedItem(it)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===================== MOBILE BOTTOM CTA BUTTON ===================== */}
        <div className="lg:hidden flex justify-center w-full pt-4">
          <Link
            href="/products"
            className="group h-[52px] pl-[25px] pr-[6px] rounded-full inline-flex items-center justify-between gap-3 bg-[#1F1F1F] text-white hover:bg-neutral-800 transition-all font-medium text-[16px] shadow-xs"
          >
            <span>Explore our range</span>
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1F1F1F]">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </Container>

      {/* ===================== SPECS MODAL ===================== */}
      <RangeSpecsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}

