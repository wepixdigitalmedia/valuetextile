import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBlock() {
  return (
    <Link
      href="/contact#quote"
      className="group relative flex items-center justify-between w-[170px] sm:w-[200px] lg:w-[220px] min-h-[72px] sm:min-h-[84px] lg:min-h-[92px] rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] px-5 sm:px-6 py-3 transition-colors duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
      aria-label="Get a Quote for production"
    >
      <span className="font-bold text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[var(--on-accent)] tracking-[-0.02em]">
        Get a<br />Quote
      </span>

      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[var(--white)] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
        <ArrowUpRight
          className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent)] transition-transform duration-200 group-hover:rotate-45"
          strokeWidth={2.5}
        />
      </div>
    </Link>
  );
}
