import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Fact } from "@/components/ui/Fact";
import { factValue } from "@/config/ownerFacts";
import { BrandStrip } from "@/components/home/TrustStatsAndLogosSection";
import { StageIcon, type StageIconName } from "@/components/ui/StageIcon";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Work With",
  description:
    "Fashion and private-label brands, kids and baby wear labels, activewear brands, retailers and buying houses, and online sellers. See how we work with each.",
};

const SEGMENT_ICONS: StageIconName[] = ["tag", "heart", "bolt", "store", "globe"];

const SEGMENTS: {
  title: string;
  need: string;
  how: React.ReactNode;
  href: string;
  cta: string;
}[] = [
  {
    title: "Fashion and private-label brands",
    need: "You have the design and the label. You need it made to your fit and fabric specification.",
    how: "We work from your tech pack or a reference sample, send fit and pre-production samples for approval, then make the garment in our own fabric.",
    href: "/garments/mens-and-womens-knitwear",
    cta: "See men's and women's knitwear",
  },
  {
    title: "Kids and baby wear brands",
    need: "Your customers are parents. Safety and softness decide whether they buy again.",
    how: "Our OEKO-TEX Standard 100 certificate is Class 1, the class for baby articles, and cotton and organic cotton knits are made in-house.",
    href: "/garments/kids-and-baby-wear",
    cta: "See kids and baby wear",
  },
  {
    title: "Activewear and loungewear brands",
    need: "Stretch, recovery and repeat shade across seasons.",
    how: "We knit cotton-Lycra, poly-cotton and modal blends on our own Lycra jersey machines and dye them in our own dye house.",
    href: "/garments/activewear-and-loungewear",
    cta: "See activewear and loungewear",
  },
  {
    title: "Retailers, buying houses and corporate programs",
    need: "Larger programs with consistent shade, size sets and planned shipping, including polos and tees for corporate and promotional use.",
    how: "Fabric and garment run under one team, so one merchandiser plans the whole program and one delivery date covers it.",
    href: "/contact?q=Retail%20or%20corporate%20program#quote",
    cta: "Discuss a program",
  },
  {
    title: "Online sellers and start-ups",
    need: "A first order that is small enough to test the market.",
    how: factValue("moq") ? (
      `Our minimum order is ${factValue("moq")}. Tell us your style and quantity and we say what is possible.`
    ) : (
      <Fact k="moq" />
    ),
    href: "/contact?q=Start-up%20or%20online%20seller%20order#quote",
    cta: "Start with our team",
  },
];

const WAYS = [
  {
    title: "Full package",
    text: "You send a tech pack or sample. We make the garment in our own fabric, with one price and one delivery date.",
    href: "/contact?type=full-package#quote",
  },
  {
    title: "Cut and make",
    text: "You send the fabric and trims. We cut, stitch, finish and pack to your specification.",
    href: "/contact?type=cut-and-make#quote",
  },
  {
    title: "Samples first",
    text: "Not sure yet? Start with fit samples or fabric swatches and decide after you have seen them.",
    href: "/contact?type=samples#quote",
  },
];

export default function WhoWeWorkWithPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>WHO WE WORK WITH</span>
            </p>
            <h1 className="mt-3 text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              Built for brands <span className="text-[var(--accent)]">that export.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              More than 40 buyers worldwide, from private-label start-ups to retailers running year-round programs. Find
              the description closest to you, then start with a quote or samples.
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

      {/* BRANDS */}
      <section className="w-full bg-[var(--white)] py-10 lg:py-12 border-b border-[var(--line)]">
        <Container className="space-y-5">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>Brands we make for</span>
          </p>
          <BrandStrip />
        </Container>
      </section>

      {/* SEGMENTS */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
            Which one sounds like you?
          </h2>
          <ol className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {SEGMENTS.map((s, i) => (
              <li key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 py-7">
                <div className="lg:col-span-4 flex gap-4">
                  <StageIcon name={SEGMENT_ICONS[i]} className="w-7 h-7 shrink-0 text-[var(--accent)] mt-0.5" />
                  <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[16px] leading-[1.6] font-medium text-[var(--black)]">{s.need}</p>
                  <p className="mt-2 text-[15px] leading-[1.65] text-[var(--text-muted)]">{s.how}</p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                  >
                    {s.cta} <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* WAYS TO START */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
            Three ways to start
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {WAYS.map((w) => (
              <div key={w.title} className="flex flex-col rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6">
                <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[var(--black)]">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">{w.text}</p>
                <Link
                  href={w.href}
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                >
                  Get a quote <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Ready to discuss your next collection?
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                Share your tech pack, target GSM or order volume. A merchandiser replies within 24 working hours.
              </p>
            </div>
            <Link
              href="/contact#quote"
              className="group inline-flex w-fit shrink-0 items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors"
            >
              <span>Get a quote</span>
              <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
