import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Fact } from "@/components/ui/Fact";
import { CompanyProfile } from "@/components/ui/CompanyProfile";
import { isConfirmed } from "@/config/ownerFacts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Order",
  description:
    "How an order works with Value Textiles: send your request, get costing and a sample plan, approve the sample, then production, inspection and shipping from Tiruppur.",
};

const STEPS: { title: string; text: React.ReactNode }[] = [
  {
    title: "Send your request",
    text: "Share a tech pack, a reference sample or just a brief through the quote form. A merchandiser replies within 24 working hours.",
  },
  {
    title: "Get costing and a sample plan",
    text: "We cost the style by yarn count, fabric GSM, trims and quantity, and tell you how we would sample it.",
  },
  {
    title: "Approve lab dips and samples",
    text: (
      <>
        We match colour to your reference in our own dye house and send fit and pre-production samples. Sample lead
        time: <Fact k="sampleLeadTime" />
      </>
    ),
  },
  {
    title: "Confirm the order in writing",
    text: (
      <>
        Quantity, price, delivery and payment terms are agreed in an order confirmation. Payment terms:{" "}
        <Fact k="paymentTerms" />
      </>
    ),
  },
  {
    title: "Production and checks",
    text: (
      <>
        We knit, dye, test, stitch and finish in our own units, with checks at every stage.{" "}
        <Link href="/quality" className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors">
          See our quality checks
        </Link>
        . Bulk lead time: <Fact k="bulkLeadTime" />
      </>
    ),
  },
  {
    title: "Packing and shipping",
    text: (
      <>
        Goods are packed to your labelling, folding and carton instructions, and we prepare the export documents.{" "}
        <Fact k="ports" />
      </>
    ),
  },
];

const TO_SEND = [
  "A tech pack or a reference sample",
  "Target fabric and GSM, if you have them",
  "Quantity per style and colour",
  "Target delivery date",
  "Pantone references for colour",
  "Labelling and packing requirements",
];

const TERM_KEYS = ["moq", "sampleLeadTime", "bulkLeadTime", "paymentTerms", "ports"] as const;

export default function HowToOrderPage() {
  // Show the key-terms table once at least three terms are confirmed (always in development).
  const confirmed = TERM_KEYS.filter((k) => isConfirmed(k)).length;
  const showTerms = confirmed >= 3 || process.env.NODE_ENV === "development";

  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>HOW TO ORDER</span>
            </p>
            <h1 className="mt-3 text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              From first message <span className="text-[var(--accent)]">to shipment.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              Six steps, one merchandiser, the same process for every style. Here is what happens and what we need from
              you at each stage.
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

      {/* STEPS */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7">
                <div className="lg:col-span-4 flex gap-4">
                  <span className="text-[13px] font-bold text-[var(--accent)] pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                    {s.title}
                  </h2>
                </div>
                <p className="lg:col-span-8 text-[16px] leading-[1.65] text-[var(--text-muted)]">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* WHAT TO SEND + KEY TERMS */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                What to send us
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                Whatever you have is enough to start. The more you share, the faster the costing.
              </p>
              <ul className="mt-5 divide-y divide-[var(--line)] border-y border-[var(--line)] bg-[var(--white)] rounded-[12px] border">
                {TO_SEND.map((t) => (
                  <li key={t} className="flex gap-3 px-5 py-3.5 text-[15px] text-[var(--black)]">
                    <span className="mt-[8px] size-1.5 shrink-0 bg-[var(--accent)]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {showTerms ? (
            <div>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Key terms
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                The figures buyers ask for first.
              </p>
              <dl className="mt-5 divide-y divide-[var(--line)] border border-[var(--line)] bg-[var(--white)] rounded-[12px]">
                {[
                  ["Minimum order", <Fact key="a" k="moq" />],
                  ["Sample lead time", <Fact key="b" k="sampleLeadTime" />],
                  ["Bulk lead time", <Fact key="c" k="bulkLeadTime" />],
                  ["Payment terms", <Fact key="d" k="paymentTerms" />],
                  ["Shipping", <Fact key="e" k="ports" />],
                ].map(([label, value]) => (
                  <div key={String(label)} className="px-5 py-4 flex flex-col sm:flex-row gap-1 sm:gap-6">
                    <dt className="w-36 shrink-0 text-[13px] font-semibold text-[var(--text-muted)]">{label}</dt>
                    <dd className="text-[15px] font-semibold text-[var(--black)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            ) : (
              <div>
                <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                  Terms
                </h2>
                <p className="mt-3 text-[16px] leading-[1.65] text-[var(--text-muted)] max-w-md">
                  Minimum order, lead times and payment terms depend on the style, so we confirm them with your quote.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* TWO WAYS + PROFILE + CTA */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6">
              <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[var(--black)]">Full package</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                You send the design. We make the garment in our own fabric, with one price and one delivery date.
              </p>
              <Link
                href="/contact?type=full-package#quote"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                Get a quote <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>
            <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6">
              <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[var(--black)]">Cut and make</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                You send the fabric and trims. We cut, stitch, finish and pack to your specification.
              </p>
              <Link
                href="/contact?type=cut-and-make#quote"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                Get a quote <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>
          </div>

          <CompanyProfile />

          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Ready to start?
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                Send your tech pack or a brief. A merchandiser replies within 24 working hours.
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
