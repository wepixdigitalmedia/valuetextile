"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Tiruppur } from "../ui/Tiruppur";

const HERO_SLIDES = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Stacked%20Neutral%20Knit%20Sweaters.webp",
    alt: "Stacked neutral knit sweaters crafted at Value Textiles",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Cozy%20Layered%20Knitwear%20Flat%20Lay.webp",
    alt: "Layered knitwear flat lay in warm neutral tones",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Neutral-Tone%20Sweatshirt%20Trio.webp",
    alt: "Three folded sweatshirts in neutral organic tones",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/Minimalist%20Neutral-Tone%20Sweatsuit%20Rack.webp",
    alt: "Minimalist garment rack showcasing neutral sweatsuit collection",
  },
];

export function AboutHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
      {/* Clean Auto-Playing 4:5 Image Carousel (No Nav Buttons / No Dots) */}
      <div className="relative w-full aspect-[4/5] rounded-[28px] sm:rounded-[34px] overflow-hidden border border-[#E8E2D9] bg-[#F5F0E7] shadow-sm">
        {HERO_SLIDES.map((slide, idx) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={idx === 0}
            sizes="(max-width: 1024px) 100vw, 580px"
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Floating Warm Ochre Badge */}
      <div className="absolute top-5 right-4 sm:top-6 sm:right-6 z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-[32px] rotate-3 bg-[#C8741F] text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border-4 border-white">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">
          <Tiruppur />, India
        </span>
        <p className="font-heading text-lg sm:text-xl font-extrabold leading-tight -rotate-3">
          Welcome to Value Textiles
        </p>
      </div>
    </div>
  );
}

