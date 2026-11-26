"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setVisible(scrollY > 260);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number) => void } }).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top"
      title="Scroll to top"
      className={`fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 size-10 sm:size-11 rounded-full bg-[var(--white)] border border-[var(--line)] text-[var(--black)] flex items-center justify-center transition-all duration-300 hover:border-[var(--black)] hover:text-[var(--accent)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.4} />
    </button>
  );
}
