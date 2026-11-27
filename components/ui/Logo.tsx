import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

/**
 * Temporary text wordmark. Replace with the new logo file when it is ready:
 * swap the inner <span> block for an <Image /> and keep the <Link /> wrapper.
 */
export function Logo({ className = "", inverted = false }: LogoProps) {
  const main = inverted ? "text-[var(--white)]" : "text-[var(--black)]";
  const sub = inverted ? "text-[var(--white)]/70" : "text-[var(--text-muted)]";

  return (
    <Link
      href="/"
      aria-label="Value Textiles Home"
      className={`inline-flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] rounded-xs ${className}`}
    >
      <span className="flex flex-col leading-none">
        <span
          className={`text-[20px] sm:text-[24px] lg:text-[26px] font-extrabold tracking-[-0.03em] uppercase ${main}`}
        >
          Value Textiles<span className="text-[var(--accent)]">.</span>
        </span>
        <span
          className={`mt-1.5 flex items-center gap-2 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.22em] ${sub}`}
        >
          <span className="inline-block h-[2px] w-5 bg-[var(--accent)]" aria-hidden="true" />
          Knit to shipped
        </span>
      </span>
    </Link>
  );
}
