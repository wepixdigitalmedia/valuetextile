"use client";

import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { EnquiryDrawer } from "./EnquiryDrawer";

export function EnquiryTab() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Side Docked Vertical Tab (Right Edge for both Desktop & Mobile) */}
      <aside aria-label="Quick Enquiry Tab">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="fixed right-0 top-[50%] -translate-y-1/2 z-40 w-[36px] sm:w-[46px] md:w-[54px] h-[126px] sm:h-[155px] md:h-[170px] bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white rounded-l-[12px] sm:rounded-l-[16px] shadow-2xl flex flex-col items-center justify-between py-3 sm:py-4 transition-all duration-200 hover:-translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8741F] cursor-pointer group select-none"
          aria-label="Open Quick Enquiry Drawer"
        >
          {/* Chevron Left icon at the top */}
          <ChevronLeft
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/80 group-hover:text-[#C8741F] transition-transform duration-200 group-hover:-translate-x-0.5"
            strokeWidth={2.2}
          />

          {/* Vertical text ENQUIRY reading top-to-bottom */}
          <span
            className="text-[11px] sm:text-[13px] md:text-[14px] font-sans font-semibold tracking-[0.14em] uppercase text-white/95 group-hover:text-white"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            ENQUIRY
          </span>

          {/* Subtle bottom indicator dot */}
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#C8741F] opacity-80 group-hover:opacity-100" />
        </button>
      </aside>

      {/* Enquiry Drawer Modal */}
      <EnquiryDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
