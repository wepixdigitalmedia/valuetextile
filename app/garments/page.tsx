import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
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
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* 01. GARMENTS HUB HERO                                        */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] pt-14 sm:pt-20 pb-14 sm:pb-20 border-b border-[#E8E2D9] overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-[-5%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/35 blur-[150px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / GARMENT CATEGORIES · <Tiruppur />, INDIA
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1F1F1F] leading-[1.05] tracking-tight">
              Export-grade garments, tailored to your brand.
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Select a garment program below to review fabric options, silhouettes, size ranges, and quality standards—all knitted, dyed, and stitched in our own Tiruppur units.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Request Garment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/capabilities/garment-manufacturing"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white text-sm font-semibold transition-all"
              >
                <span>Garment Manufacturing Capabilities</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. FIVE INDIVIDUAL GARMENT CATEGORY CARDS                   */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GARMENT_CATEGORY_DETAILS.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/garments/${cat.slug}`}
                className="group rounded-[26px] bg-[#FAF8F5] border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                    <Image
                      src={cat.heroImage}
                      alt={cat.title}
                      fill
                      priority={idx < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 sm:p-7 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#C8741F]">
                        {cat.eyebrow}
                      </span>
                      <Shirt className="w-4 h-4 text-[#C8741F] shrink-0" />
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1F1F1F] group-hover:text-[#C8741F] transition-colors">
                      {cat.title}
                    </h2>
                    <p className="font-body text-sm text-[#554F47] leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#E8E2D9] flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#78716C] truncate">
                    {cat.specsSummary}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F1F1F] group-hover:text-[#C8741F] shrink-0">
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
