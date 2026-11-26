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
    "Explore our complete 16-product catalog across knitted fabrics, specialty yarns on cone, and manufactured garments from our integrated units in Tiruppur, India.",
};

export default function ProductsPage() {
  return (
    <div className="w-full bg-[var(--white)]">
      {/* ============================================================ */}
      {/* PAGE HERO HEADER                                              */}
      {/* ============================================================ */}
      <section className="relative w-full py-16 lg:py-24 bg-[var(--surface)] border-b border-[var(--line)] overflow-hidden">
        <Container className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>PRODUCTS &amp; SOURCING CATALOG</Eyebrow>
            <span className="text-[12px] font-semibold text-[var(--black)] bg-[var(--white)] px-3 py-1 rounded-full border border-[var(--line)]">
              16 Core Items Available for Specification
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
              Knitted fabrics, specialty yarns &amp; private label apparel.
            </h1>
            <p className="text-base sm:text-[18px] text-[var(--text-muted)] leading-relaxed max-w-3xl">
              Manufactured in our own integrated units in <Tiruppur />. Every item shown is produced to your exact technical specifications—custom blend ratios, yarn counts, GSM weights, lab dip pantones, and finishes.
            </p>
          </div>

          {/* Quick Pillars Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-[14px] text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span>1:1 Swatch Kits &amp; Lab Dips</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span>In-House Testing &amp; 4-Point Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
              <span>Integrated Knitting, Dyeing &amp; Garmenting</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* MAIN CATALOG SECTION                                          */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 bg-[var(--white)]">
        <Container>
          <ProductsCatalog />
        </Container>
      </section>

      {/* ============================================================ */}
      {/* CUSTOM DEVELOPMENT & SOURCING GUIDANCE BLOCK                 */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-t border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Eyebrow>Custom Development &amp; Sampling</Eyebrow>
              <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                Need a specific blend ratio, custom GSM, or strike-off?
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
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

            <div className="lg:col-span-4 bg-[var(--white)] p-6 sm:p-7 rounded-[12px] border border-[var(--line)] space-y-3">
              <div className="flex items-center gap-3 text-[var(--black)]">
                <ShieldCheck className="w-6 h-6 text-[var(--accent)] shrink-0" />
                <h3 className="font-bold text-[17px]">
                  Specification Verification
                </h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Exact fibre percentages, yarn grades, construction, GSM, width, and MOQs are customized to match your collection&apos;s commercial requirements.
              </p>
              <p className="text-[12px] font-semibold text-[var(--black)] px-3 py-2 rounded-[12px] border border-[var(--line)]">
                Direct pricing &amp; specs with no broker markup.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
