import React from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export function TestimonialChip() {
  return (
    <div className="relative flex items-center select-none" aria-label="Buyer testimonial avatar">
      {/* Real circular avatar photo */}
      <div
        className="relative z-20 w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] lg:w-[82px] lg:h-[82px] rounded-full overflow-hidden bg-[#FAF8F5] border-2 border-white shadow-sm shrink-0 group"
      >
        <Image
          src="/images/buyer-avatar.jpg"
          alt="Verified global buyer"
          fill
          sizes="82px"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Ochre/Golden outlined circle with down-right arrow, overlapping, z-10 behind avatar */}
      <div className="-ml-[10px] sm:-ml-[12px] relative z-10 w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] lg:w-[78px] lg:h-[78px] rounded-full border-[1.5px] border-[#C8741F] bg-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 hover:scale-105">
        <ArrowDownRight
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#C8741F]"
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
