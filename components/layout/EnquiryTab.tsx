"use client";

import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { EnquiryDrawer } from "./EnquiryDrawer";

export function EnquiryTab() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <aside aria-label="Quick Enquiry Tab">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="fixed right-0 top-[50%] -translate-y-1/2 z-40 w-[30px] sm:w-[46px] md:w-[54px] h-[112px] sm:h-[155px] md:h-[170px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] rounded-l-[10px] sm:rounded-l-[12px] flex flex-col items-center justify-between py-2.5 sm:py-4 transition-all duration-200 hover:-translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] cursor-pointer group select-none"
          aria-label="Open Quick Enquiry Drawer"
        >
          <ChevronLeft
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[var(--on-accent)] transition-transform duration-200 group-hover:-translate-x-0.5"
            strokeWidth={2.2}
          />

          <span
            className="text-[10px] sm:text-[13px] md:text-[14px] font-semibold tracking-[0.14em] uppercase text-[var(--on-accent)]"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            ENQUIRY
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-[var(--on-accent)]" />
        </button>
      </aside>

      <EnquiryDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
