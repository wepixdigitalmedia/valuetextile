import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "../ui/Container";
import { StageChain } from "./StageChain";
import type { DivisionKey } from "./DivisionNext";

interface StageHeroProps {
  /** Short label, e.g. "Yarn sourcing and testing". */
  eyebrow: string;
  /** A statement, not just the department name. */
  title: string;
  intro: string;
  /** The one number that carries the page, with a short caption. */
  big?: { value: string; caption: string };
  /** Which stage of the chain this page is. */
  current: DivisionKey;
}

/** Shared hero for the capability stage pages: a statement, one big number, and the chain strip. */
export function StageHero({ eyebrow, title, intro, big, current }: StageHeroProps) {
  return (
    <section className="w-full bg-[var(--surface)] pt-10 lg:pt-14 pb-12 lg:pb-16 border-b border-[var(--line)]">
      <Container>
        <Link
          href="/capabilities"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--black)] hover:text-[var(--accent)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Capabilities</span>
        </Link>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className={big ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl"}>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">{eyebrow}</p>
            <h1 className="mt-4 text-[34px] sm:text-[46px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.025em] text-[var(--black)]">
              {title}
            </h1>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.65] text-[var(--text-muted)] max-w-2xl">{intro}</p>
          </div>

          {big && (
            <div className="lg:col-span-4 border-t border-[var(--black)] lg:border-t-0 lg:border-l lg:border-[var(--black)] pt-6 lg:pt-0 lg:pl-10">
              <p
                className={`font-extrabold leading-[0.95] tracking-[-0.04em] text-[var(--accent)] whitespace-nowrap ${
                  big.value.length > 3
                    ? "text-[56px] sm:text-[72px] lg:text-[80px]"
                    : "text-[72px] sm:text-[96px] lg:text-[112px]"
                }`}
              >
                {big.value}
              </p>
              <p className="mt-3 text-[15px] leading-[1.5] text-[var(--black)] font-semibold max-w-[240px]">
                {big.caption}
              </p>
            </div>
          )}
        </div>

        <StageChain current={current} className="mt-10" />
      </Container>
    </section>
  );
}
