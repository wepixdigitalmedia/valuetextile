import React from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "../ui/Container";

interface FullSpecProps {
  /** What is inside, e.g. "Full machine list". */
  title: string;
  /** A short count or hint shown beside the title, e.g. "11 setups". */
  hint?: string;
  children: React.ReactNode;
}

/**
 * The detailed specification, closed by default. Technical buyers open it; everyone else gets a clean page.
 * The content is still in the page for search engines.
 */
export function FullSpec({ title, hint, children }: FullSpecProps) {
  return (
    <section className="w-full bg-[var(--white)] py-10 lg:py-14 border-t border-[var(--line)]">
      <Container>
        <details className="group rounded-[12px] border border-[var(--line)] bg-[var(--white)] open:border-[var(--black)] transition-colors">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] rounded-[12px]">
            <span className="flex flex-wrap items-baseline gap-x-3">
              <span className="text-[18px] sm:text-[20px] font-extrabold tracking-[-0.02em] text-[var(--black)]">
                {title}
              </span>
              {hint && <span className="text-[13px] text-[var(--text-muted)]">{hint}</span>}
            </span>
            <ChevronDown
              className="w-5 h-5 shrink-0 text-[var(--black)] transition-transform group-open:rotate-180"
              strokeWidth={2.2}
            />
          </summary>
          <div className="border-t border-[var(--line)] px-5 py-5 sm:px-7 sm:py-6">{children}</div>
        </details>
      </Container>
    </section>
  );
}
