import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GARMENT_CATEGORY_DETAILS } from "@/config/garmentsData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Garments",
  description:
    "T-shirts and polos, kids and baby wear, men's and women's knitwear, activewear and loungewear. Knitted, dyed and stitched in our own units in Tiruppur.",
};

const quoteHref = (title: string) => `/contact?category=${encodeURIComponent(title)}#quote`;

export default function GarmentsOverviewPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>GARMENTS</span>
            </p>
            <h1 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              What we make for <span className="text-[var(--accent)]">export brands.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              Four garment programs, all knitted, dyed and stitched in our own units. Pick one to see the fabrics,
              styles and certificates behind it.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact#quote"
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
        </Container>
      </section>

      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {GARMENT_CATEGORY_DETAILS.map((cat, idx) => (
              <article
                key={cat.slug}
                className="flex flex-col overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--white)]"
              >
                <Link href={`/garments/${cat.slug}`} className="group block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)] border-b border-[var(--line)]">
                    <Image
                      src={cat.heroImage}
                      alt={cat.title}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h2 className="text-[24px] sm:text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                      {cat.title}
                    </h2>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">{cat.headline}</p>
                    <p className="mt-4 text-[13px] font-semibold text-[var(--black)]">{cat.specsSummary}</p>
                  </div>
                </Link>
                <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--line)] px-6 py-4 sm:px-7">
                  <Link
                    href={`/garments/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                  >
                    See details
                    <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                  </Link>
                  <Link
                    href={quoteHref(cat.title)}
                    className="inline-flex items-center min-h-[40px] px-5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[13px] font-semibold transition-colors"
                  >
                    Get a quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                The same chain behind <span className="text-[var(--accent)]">every style.</span>
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[var(--text-muted)] max-w-xl">
                Yarn is bought in and tested. Knitting, dyeing, finishing, lab testing, stitching and packing then stay
                in our own units, whichever garment you choose.
              </p>
              <Link
                href="/capabilities"
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                See our capabilities
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>

            <div className="lg:col-span-6 rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-7 sm:p-8">
              <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                Not on the list?
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                A different style, volume or fabric is fine. Send your tech pack or a reference sample and we tell you
                what is possible and what it costs.
              </p>
              <Link
                href="/contact#quote"
                className="group mt-5 inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors"
              >
                <span>Get a quote</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
