import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fabrics, Yarns & Garments Catalog | Value Textiles Tiruppur",
  description:
    "Explore our complete 16-product catalog across knitted fabrics, specialty yarns on cone, and manufactured garments from our integrated units in Tirupur, India.",
};

export default function ProductsPage() {
  return (
    <div className="w-full bg-white">
      {/* ============================================================ */}
      {/* PAGE HERO HEADER                                              */}
      {/* ============================================================ */}
      <section className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 bg-[#FFFDF9] border-b border-[#E8E2D9] overflow-hidden">
        {/* Ambient Warm Atmosphere */}
        <div
          className="pointer-events-none absolute top-0 left-[-5%] w-[580px] h-[580px] rounded-full bg-[#FCE1CA]/35 blur-[160px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-[-5%] w-[480px] h-[480px] rounded-full bg-[#FBF1DF]/40 blur-[140px]"
          aria-hidden="true"
        />

        <Container className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>/ PRODUCTS &amp; SOURCING CATALOG</Eyebrow>
            <span className="text-[12px] font-mono text-[#8C531B] bg-[#FAF4EA] px-3 py-1 rounded-full border border-[#ECDDC3]">
              16 Core Items Available for Specification
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-heading text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-black text-[#1F1F1F] leading-[1.05] tracking-[-0.035em]">
              Knitted fabrics, specialty yarns &amp; private label apparel.
            </h1>
            <p className="font-body text-[16px] sm:text-[18px] text-[#55504A] leading-relaxed max-w-3xl">
              Manufactured in our own integrated units in <Tiruppur />. Every item shown is produced to your exact technical specifications—custom blend ratios, yarn counts, GSM weights, lab dip pantones, and finishes.
            </p>
          </div>

          {/* Quick Pillars Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-[13px] text-[#6B655D]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8741F]" />
              <span>1:1 Swatch Kits &amp; Lab Dips</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8741F]" />
              <span>In-House Testing &amp; 4-Point Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8741F]" />
              <span>Integrated Knitting, Dyeing &amp; Garmenting</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* MAIN CATALOG SECTION                                          */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white">
        <Container>
          <ProductsCatalog />
        </Container>
      </section>

      {/* ============================================================ */}
      {/* CUSTOM DEVELOPMENT & SOURCING GUIDANCE BLOCK                 */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#E8E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[12.5px] font-mono text-[#C8741F] font-bold uppercase tracking-wider">
                Custom Development &amp; Sampling
              </span>
              <h2 className="font-heading text-[28px] sm:text-[36px] font-black text-[#1F1F1F] leading-tight tracking-[-0.03em]">
                Need a specific blend ratio, custom GSM, or strike-off?
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#55504A] leading-relaxed max-w-2xl">
                Our in-house technical team in <Tiruppur /> assists buyers in dialing in exact fabric constructions, bio-wash finishes, reactive dye lab dips, and garment fit samples before bulk commitment.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact?type=samples" variant="primary">
                  Request Swatch Kit
                </Button>
                <Button href="/contact?type=quote" variant="secondary">
                  Get a Production Quote
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E2D9] shadow-xs space-y-3">
              <div className="flex items-center gap-3 text-[#1F1F1F]">
                <ShieldCheck className="w-6 h-6 text-[#C8741F] shrink-0" />
                <h3 className="font-heading font-bold text-[17px]">
                  Specification Verification
                </h3>
              </div>
              <p className="text-[13.5px] text-[#6B655D] leading-relaxed">
                Exact fibre percentages, yarn grades, construction, GSM, width, and MOQs are customized to match your collection&apos;s commercial requirements.
              </p>
              <p className="text-[12px] font-mono text-[#8C531B] bg-[#FAF4EA] p-2.5 rounded-xl border border-[#ECDDC3]">
                Direct pricing &amp; specs with no broker markup.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
