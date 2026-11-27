"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { rangeItems, RangeItem } from "@/config/rangeData";
import { RangeCard } from "./RangeCard";
import { RangeSpecsModal } from "./RangeSpecsModal";
import { ArrowRight, ChevronLeft, ChevronRight, Shirt } from "lucide-react";

export function RangeCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<RangeItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    <section className="w-full bg-[var(--white)] py-16 lg:py-24 relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
          <div className="flex flex-col justify-between shrink-0 lg:w-[240px] xl:w-[260px]">
            <div className="flex items-center justify-between lg:block">
              <p className="text-[13px] font-bold leading-tight uppercase tracking-[0.14em] text-[var(--accent)]"><span>OUR GARMENTS</span>
              </p>

              <div className="lg:hidden flex items-center gap-1 text-[var(--black)]">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollLeft}
                  className="p-1 rounded-full text-[var(--black)] disabled:opacity-30 disabled:pointer-events-none hover:bg-[var(--surface)] transition-colors"
                  aria-label="Previous item"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs sm:text-sm font-semibold text-[var(--black)] min-w-[44px] text-center">
                  0{currentIndex + 1}/0{rangeItems.length}
                </span>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollRight}
                  className="p-1 rounded-full text-[var(--black)] disabled:opacity-30 disabled:pointer-events-none hover:bg-[var(--surface)] transition-colors"
                  aria-label="Next item"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block mt-8">
              <Link
                href="/garments"
                className="group min-h-[48px] pl-[25px] pr-[6px] py-1 rounded-full inline-flex items-center justify-between gap-3 bg-[var(--accent)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)] transition-colors font-semibold text-[15px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                <span>Explore our garments</span>
                <span className="w-9 h-9 rounded-full bg-[var(--white)] flex items-center justify-center text-[var(--black)] group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-5 xl:gap-6 flex-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 xl:w-14 xl:h-14 shrink-0 mt-1 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)]">
              <Shirt className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 flex-1">
              <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[52px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                Garments we make for international brands.
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[var(--text-muted)] leading-[1.6] max-w-3xl">
                Four categories, made in our own units to your design, tech pack or reference sample.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-12 lg:mt-14">
          <div
            ref={carouselRef}
            className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 overflow-x-auto lg:overflow-visible scrollbar-none scroll-smooth pb-6 lg:pb-0 pt-1 px-1 lg:px-0 snap-x snap-mandatory lg:snap-none"
          >
            {rangeItems.map((item) => (
              <div
                key={item.id}
                className="w-[85vw] sm:w-[320px] lg:w-auto shrink-0 lg:shrink min-w-0 snap-start"
              >
                <RangeCard
                  item={item}
                  onOpenSpecs={(it) => setSelectedItem(it)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex justify-center w-full pt-4">
          <Link
            href="/garments"
            className="group min-h-[48px] pl-[25px] pr-[6px] py-1 rounded-full inline-flex items-center justify-between gap-3 bg-[var(--accent)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)] transition-colors font-semibold text-[15px]"
          >
            <span>Explore our range</span>
            <span className="w-9 h-9 rounded-full bg-[var(--white)] flex items-center justify-center text-[var(--black)]">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </Container>

      <RangeSpecsModal
        key={selectedItem?.id ?? "closed"}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
