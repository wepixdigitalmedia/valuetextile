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

const primaryBtn =
  "group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";
const secondaryBtn =
  "inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((t) => (
        <li key={t} className="text-[14px] leading-[1.45] text-[var(--black)]">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function GarmentsOverviewPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO */}
      <section className="w-full bg-[var(--surface)] pt-14 lg:pt-20 pb-10 lg:pb-14 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">Garments</p>
              <h1 className="mt-4 text-[36px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.05] tracking-[-0.025em] text-[var(--black)]">
                Four garment programs, one chain behind all of them.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
                Every style is knitted, dyed and stitched in our own units. Choose a program to see its fabrics, styles
                and certificates.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact#quote" className={primaryBtn}>
                  <span>Get a quote</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>
                <Link href="/contact?type=samples#quote" className={secondaryBtn}>
                  Request samples
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* THE FOUR PROGRAMS: image cards you can scan in one look */}
      <section className="w-full bg-[var(--white)] py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-5 gap-y-8">
            {GARMENT_CATEGORY_DETAILS.map((cat, idx) => (
              <article key={cat.slug} className="flex flex-col">
                <Link
                  href={`/garments/${cat.slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--black)]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-[var(--surface)]">
                    <Image
                      src={cat.heroImage}
                      alt={cat.title}
                      fill
                      priority={idx < 4}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h2 className="mt-4 text-[18px] sm:text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {cat.title}
                  </h2>
                  <p className="mt-1 text-[13px] sm:text-[14px] leading-[1.5] text-[var(--text-muted)]">
                    {cat.specsSummary}
                  </p>
                </Link>
                <Link
                  href={quoteHref(cat.title)}
                  className="mt-3 inline-flex w-fit items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                >
                  Get a quote <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* THE RANGE AT A GLANCE: so a buyer can compare programs without opening four pages */}
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-y border-[var(--line)]">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
              The range at a glance
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
              What each program is made from, what we make, and what it is certified to.
            </p>
          </div>

          <div className="mt-8 border-t border-[var(--black)]">
            <div className="hidden md:grid md:grid-cols-12 gap-6 py-3 border-b border-[var(--line)] text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              <span className="col-span-3">Program</span>
              <span className="col-span-3">Fabrics</span>
              <span className="col-span-3">Styles</span>
              <span className="col-span-2">Certificates</span>
              <span className="col-span-1" aria-hidden="true" />
            </div>

            {GARMENT_CATEGORY_DETAILS.map((cat) => (
              <div
                key={cat.slug}
                className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-5 py-7 border-b border-[var(--line)]"
              >
                <div className="md:col-span-3">
                  <Link
                    href={`/garments/${cat.slug}`}
                    className="group inline-block text-[20px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                  >
                    {cat.title}
                  </Link>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--text-muted)]">{cat.headline}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="md:hidden mb-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Fabrics
                  </p>
                  <List items={cat.fabrics} />
                </div>
                <div className="md:col-span-3">
                  <p className="md:hidden mb-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Styles
                  </p>
                  <List items={cat.styles} />
                </div>
                <div className="md:col-span-2">
                  <p className="md:hidden mb-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Certificates
                  </p>
                  <List items={cat.certificates} />
                </div>
                <div className="md:col-span-1 md:text-right">
                  <Link
                    href={`/garments/${cat.slug}`}
                    aria-label={`See ${cat.title}`}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="md:sr-only">See details</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NOT ON THE LIST + CHAIN: one closing band */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Not on the list? Send the style.
              </h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-[var(--text-muted)] max-w-xl">
                A different style, volume or fabric is fine. Send your tech pack or a reference sample and we tell you
                what is possible and what it costs. Replies come within 24 working hours.
              </p>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)] max-w-xl">
                New to us? See{" "}
                <Link
                  href="/how-to-order"
                  className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
                >
                  how an order works
                </Link>{" "}
                or the{" "}
                <Link
                  href="/capabilities"
                  className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
                >
                  chain behind every style
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap items-center gap-3 lg:justify-end">
              <Link href="/contact#quote" className={primaryBtn}>
                <span>Get a quote</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
              <Link href="/contact?type=samples#quote" className={secondaryBtn}>
                Request samples
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
