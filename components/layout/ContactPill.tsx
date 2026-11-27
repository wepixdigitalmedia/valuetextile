import React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

interface ContactPillProps {
  compact?: boolean;
}

export function ContactPill({ compact = false }: ContactPillProps) {
  return (
    <>
      {/* Mobile view: Compact circular button */}
      <Link
        href="/contact#quote"
        className="md:hidden size-10 sm:size-11 shrink-0 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
        aria-label="Get a quote from Value Textiles"
      >
        <PhoneCall className="w-4 h-4 text-[var(--on-accent)]" strokeWidth={2.2} />
      </Link>

      {/* Desktop / Tablet view: Primary pill CTA */}
      <Link
        href="/contact#quote"
        className={`hidden md:inline-flex group relative items-center rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] select-none ${
          compact ? "min-h-[40px] pl-4 pr-1.5 gap-2.5" : "min-h-[48px] pl-6 pr-2 gap-3"
        }`}
        aria-label="Get a quote from Value Textiles"
      >
        <span
          className={`font-bold ${
            compact ? "text-[14px]" : "text-[15px]"
          }`}
        >
          <span className="xl:hidden">Quote</span>
          <span className="hidden xl:inline">Get a quote</span>
        </span>

        <span
          className={`rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
            compact ? "w-7 h-7" : "w-8 h-8"
          }`}
        >
          <PhoneCall
            className={`${
              compact ? "w-3.5 h-3.5" : "w-4 h-4"
            } text-[var(--black)] transition-transform duration-200 group-hover:rotate-12`}
            strokeWidth={2.2}
          />
        </span>
      </Link>
    </>
  );
}
