import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

const LINKS = [
  { label: "Garments", href: "/garments" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality and certificates", href: "/quality" },
  { label: "How to order", href: "/how-to-order" },
];

export default function NotFound() {
  return (
    <main className="w-full bg-[var(--white)]">
      <section className="w-full py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">404</p>
            <h1 className="mt-3 text-[34px] sm:text-[46px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              We could not find that page.
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)]">
              The address may have changed. These pages will get you back on track.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center rounded-full border border-[var(--line)] px-4 py-2 text-[14px] font-semibold text-[var(--black)] hover:border-[var(--black)] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact#quote"
              className="group mt-8 inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors"
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
