import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { GARMENT_CATEGORY_DETAILS } from "@/config/garmentsData";
import { ArrowRight, Shirt } from "lucide-react";

export const metadata: Metadata = {
  title: "Garments | Value Textiles — Export Knitwear & Apparel, Tirupur",
  description:
    "Explore Value Textiles garment categories: T-Shirts & Polos, Kids & Baby Wear, Men's & Women's Knitwear, Activewear & Loungewear, and Made to Your Requirements.",
};

export default function GarmentsOverviewPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      {/* ============================================================ */}
      {/* 01. GARMENTS HUB HERO                                        */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)] overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <Eyebrow>
              GARMENT CATEGORIES · <Tiruppur />, INDIA
            </Eyebrow>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
              Export-grade garments, tailored to your brand.
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Select a garment program below to review fabric options, silhouettes, size ranges, and quality standards—all knitted, dyed, and stitched in our own Tiruppur units.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button href="/contact#quote" variant="primary">
                <span>Request Garment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/capabilities/garment-manufacturing" variant="secondary">
                <span>Garment Manufacturing Capabilities</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. FIVE INDIVIDUAL GARMENT CATEGORY CARDS                   */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
            {GARMENT_CATEGORY_DETAILS.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/garments/${cat.slug}`}
                className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] overflow-hidden flex flex-col justify-between hover:border-[var(--black)] transition-colors duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface)]">
                    <Image
                      src={cat.heroImage}
                      alt={cat.title}
                      fill
                      priority={idx < 4}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3.5 sm:p-5 lg:p-6 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[var(--accent)] leading-snug">
                        {cat.eyebrow}
                      </span>
                      <Shirt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent)] shrink-0" />
                    </div>
                    <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 sm:px-5 lg:px-6 pb-3.5 sm:pb-5 pt-3 border-t border-[var(--line)] flex items-center justify-between gap-2">
                  <span className="hidden sm:inline text-xs font-semibold text-[var(--text-muted)] truncate">
                    {cat.specsSummary}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--black)] group-hover:text-[var(--accent)] shrink-0">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
