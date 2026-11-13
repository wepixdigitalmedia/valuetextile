"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown, BookOpen, MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { SearchPill } from "./SearchPill";
import { siteConfig } from "@/config/siteContent";

export function UtilityBar() {
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLangOpen(false);
      }
    };

    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [langOpen]);

  return (
    <div className="relative z-10 w-full bg-[#1F1F1F] text-white pt-3 sm:pt-3.5 pb-[38px] sm:pb-[44px] -mb-[26px] sm:-mb-[30px] border-b border-white/[0.06]">
      <Container className="flex items-center justify-between gap-4">
        {/* Left: Compact AI-style Search pill */}
        <div className="flex-1 max-w-[380px]">
          <SearchPill />
        </div>

        {/* Right: Three compact pill buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* 1. Language pill (EN with chevron) */}
          <div ref={langRef} className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              aria-expanded={langOpen}
              className="flex items-center gap-2 h-[38px] px-3.5 rounded-full border border-white/15 bg-white/[0.04] text-[13px] font-medium text-white/90 transition-all hover:border-white/30 hover:bg-white/[0.08] cursor-pointer shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-white/70" strokeWidth={1.8} />
              <span>{siteConfig.utilityBar.language}</span>
              <ChevronDown
                className={`w-3 h-3 text-white/60 transition-transform duration-200 ${
                  langOpen ? "rotate-180 text-[#C8741F]" : ""
                }`}
              />
            </button>

            {/* Elevated dropdown above the overlapping header */}
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-36 rounded-xl bg-[#1F1F1F]/95 backdrop-blur-md border border-white/20 shadow-2xl py-1.5 z-[60] text-[13px] animate-in fade-in duration-150"
                role="menu"
                aria-label="Language selection"
              >
                <button
                  type="button"
                  onClick={() => setLangOpen(false)}
                  className="w-full text-left px-3.5 py-1.5 hover:bg-white/10 text-white font-medium flex items-center justify-between"
                  role="menuitem"
                >
                  English <span className="text-[#C8741F] text-xs">✓</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLangOpen(false)}
                  className="w-full text-left px-3.5 py-1.5 hover:bg-white/10 text-white/70 hover:text-white"
                  role="menuitem"
                >
                  Tamil
                </button>
                <button
                  type="button"
                  onClick={() => setLangOpen(false)}
                  className="w-full text-left px-3.5 py-1.5 hover:bg-white/10 text-white/70 hover:text-white"
                  role="menuitem"
                >
                  Français
                </button>
              </div>
            )}
          </div>

          {/* 2. Resources pill */}
          <Link
            href={siteConfig.utilityBar.resourcesHref}
            className="hidden lg:flex items-center gap-2 h-[38px] px-3.5 rounded-full border border-white/15 bg-white/[0.04] text-[13px] font-medium text-white/90 transition-all hover:border-white/30 hover:bg-white/[0.08] shadow-2xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-white/70" strokeWidth={1.8} />
            <span>Resources</span>
          </Link>

          {/* 3. Export enquiries pill */}
          <a
            href={siteConfig.utilityBar.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-[38px] px-3.5 rounded-full border border-white/15 bg-white/[0.04] text-[13px] font-medium text-white/90 transition-all hover:border-white/30 hover:bg-white/[0.08] shadow-2xs"
            aria-label="Export enquiries on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C8741F]" strokeWidth={2} />
            <span className="hidden sm:inline">Export enquiries</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
