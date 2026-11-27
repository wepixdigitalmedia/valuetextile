import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Fact } from "@/components/ui/Fact";
import { siteConfig } from "@/config/siteContent";
import { factValue } from "@/config/ownerFacts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const { contact } = siteConfig;
  const profile = factValue("companyProfilePdf");

  return (
    <main className="w-full bg-[var(--white)]">
      <section className="w-full pt-14 sm:pt-20 pb-16 lg:pb-24">
        <Container>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
              <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>REQUEST RECEIVED</span>
            </p>
            <h1 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              Thank you. <span className="text-[var(--accent)]">We have your request.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)]">
              A merchandiser in Tiruppur will reply within 24 working hours, Monday to Saturday.
            </p>
          </div>

          <ol className="mt-10 max-w-3xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
            <li className="flex gap-5 py-5">
              <span className="text-[13px] font-bold text-[var(--accent)] pt-1">01</span>
              <div>
                <h2 className="text-[18px] font-bold text-[var(--black)]">We read your request</h2>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                  We check the style, fabric, GSM and quantity against what we can make.
                </p>
              </div>
            </li>
            <li className="flex gap-5 py-5">
              <span className="text-[13px] font-bold text-[var(--accent)] pt-1">02</span>
              <div>
                <h2 className="text-[18px] font-bold text-[var(--black)]">You get costing and a sample plan</h2>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                  Sample lead time: <Fact k="sampleLeadTime" />
                </p>
              </div>
            </li>
            <li className="flex gap-5 py-5">
              <span className="text-[13px] font-bold text-[var(--accent)] pt-1">03</span>
              <div>
                <h2 className="text-[18px] font-bold text-[var(--black)]">You approve the sample, we start bulk</h2>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                  Bulk lead time: <Fact k="bulkLeadTime" />
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={contact.whatsapp}
              className="group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
            >
              <span>Message us on WhatsApp</span>
              <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </a>
            <Link
              href="/garments"
              className="inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
            >
              Browse our garments
            </Link>
            {profile && (
              <a
                href={profile}
                className="inline-flex items-center min-h-[48px] px-2 py-2 text-[14px] font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
              >
                Download company profile (PDF)
              </a>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
