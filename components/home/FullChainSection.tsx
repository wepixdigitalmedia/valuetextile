"use client";

import React, { useState, useEffect } from "react";
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
    id: "knitting-dyeing",
    pillLabel: "Knitting & Dyeing",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/Colorful%20Yarn%20Skeins%20in%20Warm%20Light.png",
    alt: "In-house yarn dyeing, circular knitting, and soft-flow fabric processing in our Tiruppur and Perundurai units",
  },
  {
    id: "cutting-sewing",
    pillLabel: "Cutting & Sewing",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/JUKI%20Stitching%20Satin%20Fabric%20(1).png",
    alt: "Precision industrial JUKI stitching and garment assembly lines at Value Textiles",
  },
  {
    id: "finished-shipping",
    pillLabel: "Finished Shipping",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Brand/Global%20Container%20Shipping%20Network.png",
    alt: "Finished export garments packed and shipped globally via container freight",
  },
];

export function FullChainSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const active = CAPABILITY_SLIDES[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAPABILITY_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAPABILITY_SLIDES.length);
  };

  const goToSlide = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide(idx);
  };

  return (
    <section className="relative w-full bg-[var(--surface)] py-16 lg:py-24 overflow-hidden border-t border-b border-[var(--line)]">
      <Container className="space-y-12 lg:space-y-16">
        {/* TOP BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-3 flex lg:flex-col justify-between items-start gap-4">
            <p className="inline-flex items-center gap-3 text-[13px] font-bold tracking-[0.14em] text-[var(--black)] uppercase">
              <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>
                MADE IN <Tiruppur />
              </span>
            </p>

            <div className="lg:mt-16 xl:mt-20">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-[var(--line)] bg-[var(--white)] text-[13px] font-semibold text-[var(--black)] transition-colors hover:border-[var(--black)] hover:text-[var(--accent)]"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span>About us</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-9 flex flex-col space-y-6 sm:space-y-7">
            <h2 className="font-extrabold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              <span className="text-[var(--accent)]">Knitting, dyeing,</span>{" "}
              and{" "}
              <span className="text-[var(--accent)]">stitching</span>{" "}
              in-house for durable garments.
            </h2>

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-8 pt-2">
              <div className="flex items-center gap-4 max-w-[500px]">
                <div
                  className="flex -space-x-3 shrink-0"
                  aria-label="Production and export leadership team"
                >
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-[var(--white)] bg-[var(--surface)]">
                    <Image
                      src="/images/team-1.webp"
                      alt="Export Manager"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-[var(--white)] bg-[var(--surface)]">
                    <Image
                      src="/images/team-2.webp"
                      alt="Merchandiser"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-[var(--white)] bg-[var(--surface)]">
                    <Image
                      src="/images/team-3.webp"
                      alt="Quality Head"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-[15px] sm:text-[16px] text-[var(--text-muted)] leading-[1.6]">
                  Based in <Tiruppur />, we source certified yarns externally and execute all knitting, processing, lab verification, and apparel assembly in our own facilities.
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  <span>Book a factory visit</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="group inline-flex items-center justify-between gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full border-[1.5px] border-[var(--black)] bg-transparent hover:bg-[var(--black)] text-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  <span>About us</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--black)] text-[var(--white)] group-hover:bg-[var(--white)] group-hover:text-[var(--black)] flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BLOCK */}
        <div className="relative w-full rounded-[12px] bg-[var(--white)] border border-[var(--line)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px] items-stretch">
            <div className="relative lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-fit px-3.5 py-1 rounded-full border border-[var(--line)] text-[12px] text-[var(--text-muted)] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span>Knitted &amp; finished in-house</span>
                </div>

                <h3 className="text-[32px] sm:text-[40px] lg:text-[42px] xl:text-[48px] text-[var(--black)] leading-[1.1] tracking-[-0.02em] font-extrabold pt-5 sm:pt-6">
                  Garments Made With{" "}
                  <span className="text-[var(--accent)]">Our Fabric</span>
                </h3>
              </div>

              <div className="relative z-10 flex items-start gap-3.5 sm:gap-4 pt-6 sm:pt-8 pb-4">
                <div className="size-[42px] sm:size-[48px] shrink-0 mt-0.5 rounded-[8px] border border-[var(--line)] p-1.5 bg-[var(--surface)]">
                  <Image
                    src="/images/swatch-icon.png"
                    alt="Textile Swatch Icon"
                    width={48}
                    height={48}
                    className="w-full h-auto object-contain grayscale contrast-125"
                  />
                </div>
                <p className="text-[16px] leading-[1.6] text-[var(--text-muted)] max-w-[440px]">
                  Every fabric lot moves from circular knitting and soft-flow dyeing through laboratory testing before cutting and assembly—protecting shade continuity and shrinkage tolerance.
                </p>
              </div>
            </div>

            <div className="relative lg:col-span-7 min-h-[380px] sm:min-h-[440px] lg:min-h-full overflow-hidden bg-[var(--surface)]">
              <div
                onClick={nextSlide}
                className="group relative w-full h-full cursor-pointer select-none"
                title="Click to view next capability"
              >
                <Image
                  key={active.id}
                  src={active.image}
                  alt={active.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 750px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />

                <div className="absolute left-1/2 -translate-x-1/2 bottom-5 sm:bottom-6 z-20 w-auto px-4 max-w-[90%]">
                  <div className="bg-[var(--white)] rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-5 sm:gap-7 border border-[var(--line)]">
                    <span className="text-[14px] font-semibold text-[var(--black)] whitespace-nowrap">
                      {active.pillLabel}
                    </span>

                    <div className="flex items-center gap-1.5 shrink-0" aria-label="Slide indicators">
                      {CAPABILITY_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => goToSlide(idx, e)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`rounded-full transition-all duration-300 cursor-pointer ${
                            currentSlide === idx
                              ? "w-8 sm:w-10 h-2 bg-[var(--accent)]"
                              : "size-2 bg-[var(--line)] hover:bg-[var(--black)]"
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
