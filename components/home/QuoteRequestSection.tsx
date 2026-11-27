import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { QuoteForm } from "../forms/QuoteForm";
import { ArrowRight } from "lucide-react";

export function QuoteRequestSection() {
  return (
    <section id="quote" className="w-full bg-[var(--white)] py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
                <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>PRODUCTION ENQUIRY</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                Send us your style. We will{" "}
                <span className="text-[var(--accent)]">quote it.</span>
              </h2>
              <p className="text-[16px] text-[var(--text-muted)] leading-[1.6]">
                Send a tech pack, target GSM or expected volume. Our Tiruppur merchandising team replies within 24 working hours with costing and sampling lead times.
              </p>
            </div>

            {/* What you get */}
            <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              <li className="flex gap-4 py-4">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-0.5">01</span>
                <div>
                  <h3 className="text-sm font-bold text-[var(--black)]">A costing breakdown</h3>
                  <p className="text-[13px] text-[var(--text-muted)] mt-0.5 leading-[1.5]">
                    By yarn count, fabric GSM, trims and order quantity, within one business day.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 py-4">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-0.5">02</span>
                <div>
                  <h3 className="text-sm font-bold text-[var(--black)]">Lab dips, swatches and fit samples</h3>
                  <p className="text-[13px] text-[var(--text-muted)] mt-0.5 leading-[1.5]">
                    Colour matched to your Pantone reference in our Perundurai dyehouse, with samples before bulk.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 py-4">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-0.5">03</span>
                <div>
                  <h3 className="text-sm font-bold text-[var(--black)]">Certified production</h3>
                  <p className="text-[13px] text-[var(--text-muted)] mt-0.5 leading-[1.5]">
                    OEKO-TEX and GOTS certified, with final inspection before packing.
                  </p>
                </div>
              </li>
            </ol>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--black)] hover:text-[var(--accent)] transition-colors group"
              >
                <span>Need unit addresses or direct phone lines? Visit Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 bg-[var(--white)] p-6 sm:p-9 lg:p-10 rounded-[12px] border border-[var(--line)]">
            <QuoteForm source="homepage-quote" />
          </div>
        </div>
      </Container>
    </section>
  );
}
