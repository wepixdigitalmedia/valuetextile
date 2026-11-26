"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RangeItem } from "@/config/rangeData";
import { ArrowRight, Maximize2 } from "lucide-react";

interface RangeCardProps {
  item: RangeItem;
  onOpenSpecs: (item: RangeItem) => void;
}

export function RangeCard({ item, onOpenSpecs }: RangeCardProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const images =
    item.galleryImages && item.galleryImages.length > 0
      ? item.galleryImages
      : [item.mainImage];

  const currentImage = images[activeImgIndex] || item.mainImage;

  return (
    <article
      onClick={() => onOpenSpecs(item)}
      className="group relative bg-[var(--white)] rounded-[12px] border border-[var(--line)] overflow-hidden transition-colors duration-200 hover:border-[var(--black)] flex flex-col h-full select-none cursor-pointer"
    >
      <div className="p-3 pb-0">
        <div className="relative aspect-[4/5] rounded-[8px] overflow-hidden bg-[var(--surface)]">
          <Image
            src={currentImage}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenSpecs(item);
            }}
            title="View specifications"
            aria-label={`View specifications for ${item.name}`}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--black)] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:border-[var(--black)] transition-all cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {images.length > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImgIndex(idx);
                  }}
                  className={`h-1 rounded-full transition-all duration-200 cursor-pointer ${
                    activeImgIndex === idx
                      ? "w-7 bg-[var(--accent)]"
                      : "w-3.5 bg-[var(--white)]/80 hover:bg-[var(--white)]"
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-1.5">
          <h3 className="text-[18px] font-bold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors leading-[1.2]">
            {item.name}
          </h3>

          <p className="text-[14px] text-[var(--text-muted)] leading-[1.55] line-clamp-2">
            {item.detail}
          </p>
        </div>

        <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between">
          <span className="text-[14px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5">
            <span>View specs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
