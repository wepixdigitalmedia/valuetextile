import React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

interface ContactPillProps {
  compact?: boolean;
}

export function ContactPill({ compact = false }: ContactPillProps) {
  return (
    <>
      {/* Mobile view: Only the icon as a clean, tactile circular button */}
      <Link
        href="/contact"
        className="md:hidden size-10 rounded-full bg-[#1F1F1F] hover:bg-black text-white flex items-center justify-center shadow-xs transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8741F]"
        aria-label="Contact Value Textiles"
      >
        <PhoneCall className="w-4 h-4 text-white" strokeWidth={2.2} />
      </Link>

      {/* Desktop / Tablet view: Full branded pill with text label + icon badge */}
      <Link
        href="/contact"
        className={`hidden md:inline-flex group relative items-center rounded-full bg-[#1F1F1F] text-white transition-all duration-200 hover:bg-[#2A2A2A] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8741F] select-none ${
          compact ? "h-[40px] pl-4 pr-1.5 gap-2.5" : "h-[44px] pl-5 pr-1.5 gap-3"
        }`}
        aria-label="Contact Value Textiles"
      >
        <span
          className={`font-heading font-bold tracking-tight ${
            compact ? "text-[14px]" : "text-[15px]"
          }`}
        >
          Contact
        </span>

        {/* White circle holding phone icon */}
        <span
          className={`rounded-full bg-white text-[#1F1F1F] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-xs ${
            compact ? "w-7 h-7" : "w-8 h-8"
          }`}
        >
          <PhoneCall
            className={`${
              compact ? "w-3.5 h-3.5" : "w-4 h-4"
            } text-[#1F1F1F] transition-transform duration-200 group-hover:rotate-12`}
            strokeWidth={2.2}
          />
        </span>
      </Link>
    </>
  );
}
