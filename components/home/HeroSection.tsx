import React from "react";
import { Container } from "../ui/Container";
import { Tiruppur } from "../ui/Tiruppur";
import { HeroMedia } from "./HeroMedia";
import { QuoteLink } from "../ui/QuoteLink";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteContent";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative w-full bg-[var(--white)] pt-6 sm:pt-8 lg:pt-12 pb-16 lg:pb-24">
      <Container>
        {/* Eyebrow Label */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
            <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
            <span>
              INTEGRATED KNITWEAR PRODUCTION · <Tiruppur />, INDIA
            </span>
          </span>
        </div>

        {/* Top Headline & Description Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-12">
          <h1 className="font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] text-[36px] sm:text-[48px] lg:text-[54px] xl:text-[62px]">
            <span className="block">{hero.headlineLine1}</span>
            <span className="block">{hero.headlineLine2}</span>
          </h1>

          <div className="w-full max-w-[540px] lg:max-w-[400px] xl:max-w-[450px] shrink-0 pb-1">
            <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[var(--text-muted)]">
              {hero.descriptionPrefix}
              <strong className="font-semibold text-[var(--black)]">
                {hero.descriptionHighlight}
              </strong>
              {hero.descriptionSuffix}
            </p>

            {/* Primary actions */}
            <div className="flex flex-wrap items-center gap-3 pt-5">
              <QuoteLink className="group inline-flex items-center justify-between gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]">
                <span>Get a quote</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </QuoteLink>
              <QuoteLink
                choose="samples"
                className="inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                Request samples
              </QuoteLink>
            </div>

            {/* Quick facts tags */}
            <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-[var(--black)] pt-3">
              {hero.quickFacts.map((fact) => (
                <span
                  key={fact}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] border border-[var(--line)]"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 1px Full-Width Hairline */}
        <div
          className="w-full h-px bg-[var(--line)] my-6 sm:my-7"
          aria-hidden="true"
        />

        {/* Two-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          <div className="order-2 lg:order-1 lg:col-span-3 xl:col-span-3 flex flex-col justify-between py-1 space-y-5 lg:space-y-0">
            <dl className="space-y-4 text-[14px] leading-[1.5]">
              <div>
                <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">Knitting</dt>
                <dd className="mt-1 text-[var(--black)]">SIDCO, Tiruppur</dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">Dyeing</dt>
                <dd className="mt-1 text-[var(--black)]">SIPCOT, Perundurai</dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">Quotes and samples</dt>
                <dd className="mt-1 text-[var(--black)]">
                  <a href={siteConfig.contact.whatsapp} className="font-semibold underline underline-offset-2 hover:text-[var(--accent)]">WhatsApp {siteConfig.contact.phoneDisplay}</a>
                </dd>
              </div>
            </dl>

            <div className="pt-1 border-t border-[var(--line)]">
              <div className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold leading-[1.1] text-[var(--black)] tracking-[-0.02em] pt-3">
                Full accountability<span className="text-[var(--accent)]">.</span>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[var(--text-muted)] font-medium mt-1 leading-[1.5]">
                Knit, dyed, tested, stitched &amp; packed in our own units.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-9 xl:col-span-9 flex flex-col justify-end">
            <HeroMedia />
          </div>
        </div>
      </Container>
    </section>
  );
}
