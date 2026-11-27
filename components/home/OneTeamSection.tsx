import React from "react";
import { Container } from "../ui/Container";
import { QuoteLink } from "../ui/QuoteLink";
import { ArrowRight } from "lucide-react";

const POINTS = [
  {
    number: "01",
    title: "One contact",
    text: "One merchandiser from sample to shipment. You do not chase five vendors.",
  },
  {
    number: "02",
    title: "One standard",
    text: "Fabric and garment are held to the same shade, GSM and fit rules.",
  },
  {
    number: "03",
    title: "One date",
    text: "Nothing after yarn is outsourced, so the delivery date we confirm stays in our hands.",
  },
];

export function OneTeamSection() {
  return (
    <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
              One partner.{" "}
              <span className="text-[var(--accent)]">Full accountability.</span>
            </h2>
            <p className="mt-4 text-[16px] sm:text-[17px] text-[var(--text-muted)] leading-[1.6] max-w-[460px]">
              When something is wrong, there is no vendor to blame. We fix it.
            </p>
            <QuoteLink className="group mt-7 inline-flex w-fit items-center justify-between gap-3.5 min-h-[48px] pl-6 pr-1.5 py-1 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]">
              <span>Get a quote</span>
              <span className="size-9 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </QuoteLink>
          </div>

          <ol className="lg:col-span-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {POINTS.map((p) => (
              <li key={p.number} className="flex gap-5 py-5">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-1">{p.number}</span>
                <div>
                  <h3 className="text-[20px] font-bold text-[var(--black)] tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-[1.6] text-[var(--text-muted)]">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
