import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    <main className="w-full bg-[var(--surface)]">
      {/* 01. Who We Work With — 5 Buyer Segments */}
      <WhoWeWorkWithSection />

      {/* 02. Brands We Supply & Direct Export Desk CTA */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container className="space-y-16">
          <div className="flex flex-col items-center">
            <Eyebrow>GLOBAL RETAIL &amp; APPAREL PARTNERS</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--black)] text-center mt-2 mb-8">
              Brands we supply
            </h2>
            <div className="w-full">
              <BrandLogoGrid />
            </div>
          </div>

          <div className="rounded-[12px] bg-[var(--surface)] border border-[var(--line)] text-[var(--black)] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <Eyebrow>START A PROGRAM</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em]">
                Ready to discuss your next collection?
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                Share your tech pack, target fabric GSM, or order volume with our Tiruppur merchandising desk.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button href="/contact" variant="primary">
                <span>Contact Export Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

