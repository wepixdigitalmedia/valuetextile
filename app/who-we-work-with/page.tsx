import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhoWeWorkWithSection } from "@/components/home/WhoWeWorkWithSection";
import { BrandLogoGrid } from "@/components/home/TrustStatsAndLogosSection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Work With | Value Textiles — Global Knitwear & Garment Partner",
  description:
    "Partnering with fashion & private-label brands, kids & baby wear labels, activewear brands, online startups, and international retail buying houses.",
};

export default function WhoWeWorkWithPage() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      {/* 01. Who We Work With — 5 Buyer Segments */}
      <WhoWeWorkWithSection />

      {/* 02. Brands We Supply & Direct Export Desk CTA */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-16">
          <div>
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F] text-center">
              / GLOBAL RETAIL &amp; APPAREL PARTNERS
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] text-center mt-2 mb-8">
              Brands we supply
            </h2>
            <BrandLogoGrid />
          </div>

          <div className="rounded-[32px] bg-[#1F1F1F] text-white p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-[#F7C08A]">
                / START A PROGRAM
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Ready to discuss your next collection?
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Share your tech pack, target fabric GSM, or order volume with our Tiruppur merchandising desk.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#C8741F] hover:bg-[#b56618] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <span>Contact Export Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

