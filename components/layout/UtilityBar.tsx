"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  BookOpen,
  FileText,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SearchPill } from "./SearchPill";
import { siteConfig } from "@/config/siteContent";

export function UtilityBar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setResourcesOpen(false);
      }
    };

    if (resourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [resourcesOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 150);
  };

  return (
    <div className="relative w-full bg-[var(--black)] text-[var(--white)] pt-3 sm:pt-3.5 pb-[38px] sm:pb-[44px] -mb-[26px] sm:-mb-[30px]">
      <Container className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Functional Global Search & Action Pill */}
        <div className="flex-1 max-w-[380px]">
          <SearchPill />
        </div>

        {/* Right: Resources Menu (Blog + Guides) & Export Enquiries */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* 1. Resources Dropdown Menu connecting Blog & Technical Resources */}
          <div
            ref={resourcesRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setResourcesOpen((prev) => !prev)}
              aria-expanded={resourcesOpen}
              aria-haspopup="menu"
              className={`flex items-center gap-2 h-[38px] px-3.5 rounded-full border text-[13px] font-medium transition-colors cursor-pointer text-[var(--white)] ${
                resourcesOpen
                  ? "bg-white/20 border-white/60"
                  : "bg-white/10 border-white/25 hover:bg-white/20 hover:border-white/50"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[var(--white)]" strokeWidth={1.8} />
              <span>Resources</span>
              <ChevronDown
                className={`w-3 h-3 text-[var(--white)]/80 transition-transform duration-200 ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {resourcesOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-60 rounded-[12px] bg-[var(--white)] border border-[var(--line)] shadow-sm p-1.5 z-[60]"
                role="menu"
                aria-label="Resources and Blog navigation"
              >
                <Link
                  href="/blog"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                  className="group flex items-start justify-between gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[var(--surface)] transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                        Blog &amp; Insights
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)] leading-snug">
                        Garment sourcing &amp; knitwear articles
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] shrink-0 mt-0.5" />
                </Link>

                <Link
                  href="/how-to-order"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                  className="group flex items-start justify-between gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[var(--surface)] transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                        How to order
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)] leading-snug">
                        Process, samples and lead times
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] shrink-0 mt-0.5" />
                </Link>
              </div>
            )}
          </div>

          {/* 2. Export enquiries pill */}
          <a
            href={siteConfig.utilityBar.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-[38px] px-3.5 rounded-full border border-white/25 bg-white/10 text-[13px] font-medium text-[var(--white)] transition-colors hover:bg-white/20 hover:border-white/50"
            aria-label="Export enquiries on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[var(--white)]" strokeWidth={2} />
            <span className="hidden sm:inline">Export enquiries</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
