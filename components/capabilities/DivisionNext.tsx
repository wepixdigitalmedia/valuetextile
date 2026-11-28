import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const DIVISION_CHAIN = [
  { key: "yarn", title: "Yarn sourcing and testing", href: "/capabilities/yarn-sourcing", line: "Bought to spec and tested before knitting." },
  { key: "knitting", title: "Knitting", href: "/capabilities/knitting-division", line: "Where the fabric starts." },
  { key: "dyeing", title: "Dyeing", href: "/capabilities/dyeing-division", line: "Colour, finishing and effluent treatment." },
  { key: "fabric", title: "Fabric lab and inspection", href: "/capabilities/fabric-division", line: "Testing, grading and despatch." },
  { key: "garment", title: "Garments", href: "/capabilities/garment-manufacturing", line: "Cutting, stitching and packing." },
] as const;

export type DivisionKey = (typeof DIVISION_CHAIN)[number]["key"];

interface DivisionNextProps {
  current: DivisionKey;
  quoteHeading: string;
  quoteText: string;
  quoteHref?: string;
}

/** Bottom of every division page: one quote block, then previous and next stage in the chain. */
export function DivisionNext({ current, quoteHeading, quoteText, quoteHref = "/contact#quote" }: DivisionNextProps) {
  const i = DIVISION_CHAIN.findIndex((d) => d.key === current);
  const prev = i > 0 ? DIVISION_CHAIN[i - 1] : null;
  const next = i < DIVISION_CHAIN.length - 1 ? DIVISION_CHAIN[i + 1] : null;

  return (
    <section className="w-full bg-[var(--white)] py-14 lg:py-20">
      <Container>
        <div className="rounded-[12px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              {quoteHeading}
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">{quoteText}</p>
          </div>
          <Link
            href={quoteHref}
            className="group inline-flex w-fit shrink-0 items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors"
          >
            <span>Get a quote</span>
            <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
              <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={prev.href}
              className="group rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-5 hover:border-[var(--black)] transition-colors"
            >
              <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                <ArrowLeft className="w-3.5 h-3.5" /> Before this stage
              </span>
              <p className="mt-1.5 text-[18px] font-bold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                {prev.title}
              </p>
              <p className="text-[14px] text-[var(--text-muted)]">{prev.line}</p>
            </Link>
          ) : (
            <span aria-hidden="true" className="hidden sm:block" />
          )}
          {next && (
            <Link
              href={next.href}
              className="group rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-5 hover:border-[var(--black)] transition-colors sm:text-right"
            >
              <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Next stage <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <p className="mt-1.5 text-[18px] font-bold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                {next.title}
              </p>
              <p className="text-[14px] text-[var(--text-muted)]">{next.line}</p>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
