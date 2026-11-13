"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { NavDropdownItem } from "@/config/siteContent";

interface NavDropdownProps {
  label: string;
  href: string;
  items?: NavDropdownItem[];
  compact?: boolean;
}

export function NavDropdown({
  label,
  href,
  items,
  compact = false,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!items || items.length === 0) {
    return (
      <Link
        href={href}
        className="font-heading font-semibold text-[15px] tracking-tight text-[#1F1F1F] hover:text-[#C8741F] transition-colors py-1.5"
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-1 font-heading font-semibold text-[#1F1F1F] hover:text-[#C8741F] transition-all py-1.5 px-2 rounded-lg hover:bg-black/[0.03] focus:outline-hidden ${
          compact ? "text-[14px]" : "text-[15px]"
        }`}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#5F5B55] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#C8741F]" : ""
          }`}
          strokeWidth={2}
        />
      </Link>

      {/* Modern floating menu panel */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 min-w-[230px] rounded-xl bg-white/98 backdrop-blur-md border border-[#E6E2DB] shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          role="menu"
          aria-label={`${label} submenu`}
        >
          {items.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between px-3 py-2 text-[13px] font-body font-medium text-[#1F1F1F] rounded-lg hover:bg-[#FAF8F5] hover:text-[#C8741F] transition-colors"
            >
              <span>{subItem.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#C8741F]" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
