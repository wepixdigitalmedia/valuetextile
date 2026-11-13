"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RangeItem } from "@/config/rangeData";
import { Columns2, Maximize2 } from "lucide-react";

interface RangeCardProps {
  item: RangeItem;
  onOpenSpecs: (item: RangeItem) => void;
}

export function RangeCard({ item, onOpenSpecs }: RangeCardProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const images = item.galleryImages && item.galleryImages.length > 0 
    ? item.galleryImages 
    : [item.mainImage];

  const currentImage = images[activeImgIndex] || item.mainImage;

  return (
    <article className="group relative bg-white rounded-[28px] sm:rounded-[32px] border border-[#E8E2D9] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full select-none">
      {/* 1. Image Area */}
      <div className="p-3 sm:p-3.5 pb-0">
        <div className="relative aspect-[4/3] rounded-[20px] sm:rounded-[22px] overflow-hidden bg-[#FAF8F5]">
          <Image
            src={currentImage}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 340px, 380px"
          />

          {/* Action Overlay Buttons (Top Right) */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenSpecs(item);
              }}
              title="Compare specifications"
              className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-sm flex items-center justify-center text-[#1F1F1F] hover:bg-white hover:scale-110 active:scale-95 transition-all"
              aria-label="Compare specifications"
            >
              <Columns2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenSpecs(item);
              }}
              title="View specifications"
              className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-sm flex items-center justify-center text-[#1F1F1F] hover:bg-white hover:scale-110 active:scale-95 transition-all"
              aria-label="View specifications"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Dash Pagination Indicators */}
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
                      ? "w-8 bg-[#C8741F] shadow-xs"
                      : "w-4 bg-white/80 hover:bg-white"
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div className="flex flex-col gap-2">
          {/* Card Type Tag (Neutral outline chip as specified in content file) */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#1F1F1F] bg-[#FAF8F5] border border-[#E8E2D9] px-2.5 py-0.5 rounded-full font-semibold">
              {item.type}
            </span>
            <span className="text-[11px] text-[#78716C] line-clamp-1">
              {item.detail}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpenSpecs(item)}
            className="font-heading text-[17px] sm:text-[18px] font-bold text-[#1F1F1F] group-hover:text-[#C8741F] transition-colors leading-snug line-clamp-1 cursor-pointer"
          >
            {item.name}
          </h3>

          {/* Spec Line */}
          <p className="font-body text-[13px] text-[#736C63] leading-normal line-clamp-1">
            {item.specLine}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#FAF8F5] text-[#554F47] border border-[#E8E2D9] text-[11px] font-medium px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Bottom Row: MOQ & View specs */}
        <div className="pt-3 border-t border-[#F0ECE5]">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-bold text-[#1F1F1F] tracking-tight">
              {item.moq}
            </span>

            {/* Desktop View Specs Link */}
            <button
              type="button"
              onClick={() => onOpenSpecs(item)}
              className="hidden sm:inline-flex text-[#C8741F] hover:text-[#A25F18] font-semibold text-[14px] items-center gap-1 transition-colors cursor-pointer group-hover:underline"
            >
              <span>View specs</span>
              <span className="text-xs">→</span>
            </button>
          </div>

          {/* Mobile Full-width Button */}
          <div className="sm:hidden pt-2">
            <button
              type="button"
              onClick={() => onOpenSpecs(item)}
              className="w-full py-2.5 px-4 bg-[#FAF8F5] text-[#C8741F] border border-[#E8E2D9] text-[14px] font-semibold rounded-xl hover:bg-[#F3EFEA] transition-colors text-center"
            >
              View specs
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

