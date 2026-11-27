import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Fact } from "@/components/ui/Fact";
import { siteConfig } from "@/config/siteContent";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Send your style to Value Textiles in Tiruppur, India. A merchandiser replies within 24 working hours with costing and sampling lead times.",
};

const UNITS = [
  {
    title: "Registered office and garment unit",
    address: "No. 3/197 H, Parapalayam, Tiruppur - 641607, Tamil Nadu, India",
  },
  {
    title: "Knitting unit",
    address: "Shed No. 61, SIDCO, Tiruppur - 641606, Tamil Nadu, India",
  },
  {
    title: "Dyeing and finishing unit",
    address: "K6, K7, K8, K9, SIPCOT Industrial Growth Centre, P.V. Palayam (P.O), Perundurai - 638052",
  },
];

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <main className="w-full bg-[var(--white)]">
      <section className="w-full pt-12 sm:pt-16 pb-16 lg:pb-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>GET A QUOTE</span>
            </p>
            <h1 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              Send us your style.{" "}
              <span className="text-[var(--accent)]">We reply within 24 working hours.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              Share a tech pack, a sample or just a brief. A merchandiser in Tiruppur answers with costing and a sampling plan.
            </p>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">What happens next</h2>
                <ol className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  <li className="flex gap-4 py-4">
                    <span className="text-[13px] font-bold text-[var(--accent)] pt-0.5">01</span>
                    <div>
                      <h3 className="text-[15px] font-bold text-[var(--black)]">We read your request</h3>
                      <p className="mt-0.5 text-[14px] leading-[1.6] text-[var(--text-muted)]">
                        A merchandiser checks the style, fabric, GSM and quantity against what we can make.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 py-4">
                    <span className="text-[13px] font-bold text-[var(--accent)] pt-0.5">02</span>
                    <div>
                      <h3 className="text-[15px] font-bold text-[var(--black)]">You get costing and a sample plan</h3>
                      <p className="mt-0.5 text-[14px] leading-[1.6] text-[var(--text-muted)]">
                        Sample lead time: <Fact k="sampleLeadTime" />
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 py-4">
                    <span className="text-[13px] font-bold text-[var(--accent)] pt-0.5">03</span>
                    <div>
                      <h3 className="text-[15px] font-bold text-[var(--black)]">Approve the sample, we start bulk</h3>
                      <p className="mt-0.5 text-[14px] leading-[1.6] text-[var(--text-muted)]">
                        Bulk lead time: <Fact k="bulkLeadTime" />
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">Prefer to talk?</h2>
                <dl className="mt-4 space-y-4 text-[15px]">
                  <div>
                    <dt className="text-[12px] text-[var(--text-muted)]">WhatsApp or call</dt>
                    <dd className="mt-0.5 font-bold text-[var(--black)]">
                      <a href={contact.whatsapp} className="hover:text-[var(--accent)] transition-colors">
                        {contact.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] text-[var(--text-muted)]">Email</dt>
                    <dd className="mt-0.5 font-bold text-[var(--black)] break-words">
                      <a href={`mailto:${contact.email}`} className="hover:text-[var(--accent)] transition-colors">
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] text-[var(--text-muted)]">Export desk hours</dt>
                    <dd className="mt-0.5 font-bold text-[var(--black)]">Mon to Sat, 9:00 am to 6:30 pm IST</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div
              id="quote"
              className="lg:col-span-7 min-w-0 order-1 lg:order-2 scroll-mt-28 bg-[var(--white)] p-5 sm:p-9 lg:p-10 rounded-[12px] border border-[var(--line)]"
            >
              <QuoteForm source="contact-page" />
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
        <Container>
          <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">Our units</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {UNITS.map((unit) => (
              <div key={unit.title} className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6">
                <h3 className="text-[16px] font-bold text-[var(--black)]">{unit.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--text-muted)]">{unit.address}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
