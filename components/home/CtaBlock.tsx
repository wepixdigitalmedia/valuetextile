import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBlock() {
  return (
    <Link
      href="/contact#quote"
      className="group relative flex items-center justify-between w-[170px] sm:w-[200px] lg:w-[220px] h-[84px] sm:h-[98px] lg:h-[108px] rounded-[22px] sm:rounded-[26px] bg-[#C8741F] hover:bg-[#b86617] px-4 sm:px-5 py-3 shadow-md transition-all duration-300 active:scale-[0.98] select-none cursor-pointer"
      aria-label="Get a Quote for production"
    >
      {/* 1px Inner Outline inset */}
      <div
        className="pointer-events-none absolute inset-2 sm:inset-2.5 rounded-[16px] sm:rounded-[20px] border border-white/30 transition-colors group-hover:border-white/50"
        aria-hidden="true"
      ></div>

      {/* CTA Text */}
      <span className="relative z-10 font-heading font-bold text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.08] text-white tracking-tight">
        Get a<br />Quote
      </span>

      {/* White circle containing ochre arrow */}
      <div className="relative z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <ArrowUpRight
          className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8741F] transition-transform duration-300 ease-out group-hover:rotate-45"
          strokeWidth={2.5}
        />
      </div>
    </Link>
  );
}
