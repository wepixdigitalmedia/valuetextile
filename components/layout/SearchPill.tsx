"use client";

import React, { useRef, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteContent";

export function SearchPill() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="group relative flex items-center w-full max-w-[380px] h-[42px] rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.08] hover:border-white/30 px-3 transition-all duration-200 focus-within:border-[#C8741F] focus-within:bg-white/[0.09] focus-within:ring-2 focus-within:ring-[#C8741F]/20 cursor-text select-none shadow-xs"
    >
      {/* Search icon */}
      <div className="w-7 h-7 rounded-full bg-[#C8741F] text-white flex items-center justify-center shrink-0 mr-2 shadow-xs transition-transform duration-200 group-hover:scale-105">
        <Search className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search fabrics, blends, GSM..."
        className="flex-1 bg-transparent border-none outline-hidden text-[14px] text-white placeholder:text-white/60 font-body font-normal"
        aria-label="Search fabrics and specifications"
      />

      {/* AI Sparkle + Command Keycap Badge */}
      <div className="hidden sm:flex items-center gap-1.5 shrink-0 pl-2">
        <span className="flex items-center gap-1 rounded-[5px] border border-white/20 bg-white/[0.08] px-1.5 py-0.5 text-[11px] font-mono text-white/75 shadow-xs">
          <span className="text-[10px]">⌘</span>K
        </span>
      </div>
    </div>
  );
}
