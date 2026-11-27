"use client";

import React from "react";

interface QuoteLinkProps {
  /** Which option to pre-select in the quote form on the homepage. */
  choose?: "full-package" | "cut-and-make" | "samples" | "custom";
  className?: string;
  children: React.ReactNode;
}

/**
 * Link to the homepage quote form (#quote). Optionally pre-selects an option in the form.
 */
export function QuoteLink({ choose, className = "", children }: QuoteLinkProps) {
  return (
    <a
      href="#quote"
      className={className}
      onClick={() => {
        if (choose) {
          window.dispatchEvent(new CustomEvent("vt:choose-way", { detail: { id: choose } }));
        }
      }}
    >
      {children}
    </a>
  );
}
