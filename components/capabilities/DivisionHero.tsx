import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface DivisionHeroProps {
  /** Short label, e.g. "KNITTING DIVISION". */
  eyebrow: string;
  /** The outcome for the buyer, not just the department name. */
  title: string;
  intro: string[];
  /** Where this unit is, e.g. "Knitting unit: Shed No. 61, SIDCO, Tiruppur". */
  location?: string;
  /** Three or four hard facts shown as a strip under the intro. */
  stats: { value: string; label: string }[];
  quoteHref?: string;
}

export function DivisionHero({
  eyebrow,
  title,
  intro,
  location,
  stats,
  quoteHref = "/contact#quote",
}: DivisionHeroProps) {
  return (
    <section className="w-full bg-[var(--surface)] py-12 lg:py-20 border-b border-[var(--line)]">
      <Container>
        <Link
          href="/capabilities"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--black)] hover:text-[var(--accent)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Capabilities</span>
        </Link>

        <div className="mt-6 max-w-4xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>{eyebrow}</span>
          </p>
          <h1 className="mt-3 text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
            {title}
          </h1>
          <div className="mt-5 space-y-3 text-[16px] sm:text-[17px] leading-[1.65] text-[var(--text-muted)] max-w-3xl">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {location && <p className="mt-4 text-[14px] text-[var(--text-muted)]">{location}</p>}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={quoteHref}
              className="group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
            >
              <span>Get a quote</span>
              <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </Link>
            <Link
              href="/contact?type=samples#quote"
              className="inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
            >
              Request samples
            </Link>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--line)]">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--white)] px-3.5 py-4 sm:px-5 sm:py-5 min-w-0">
              <dt className="text-[12px] font-semibold text-[var(--text-muted)]">{s.label}</dt>
              <dd className="mt-1 text-[18px] sm:text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] break-words">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
