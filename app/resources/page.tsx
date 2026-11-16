import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ArrowRight, FileText, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Technical Guides | Value Textiles",
  description:
    "Yarn count converters, GSM guides, 4-point fabric inspection standards, and our Garment & Knitwear Sourcing Blog.",
};

const resources = [
  {
    title: "Knit Fabric GSM & Yarn Count Reference",
    desc: "Reference mapping single jersey, interlock, pique, and rib yarn counts to finished fabric GSM weights and constructions.",
    href: "/capabilities/knitting-division",
    ctaLabel: "View Knitting Specs",
  },
  {
    title: "International Fabric Quality: 4-Point & 10-Point Inspection",
    desc: "Standard operating criteria for defect points per 100 metres, roll sampling ratios, and colour-coded cutting stickers.",
    href: "/capabilities/fabric-division",
    ctaLabel: "View Inspection System",
  },
  {
    title: "Eco-Dyeing Fastness & ZLD Compliance",
    desc: "Technical compliance matrix for wash, rubbing, perspiration, and light fastness alongside Zero Liquid Discharge processing.",
    href: "/capabilities/dyeing-division",
    ctaLabel: "View Dyeing & Lab Standards",
  },
];

export default function ResourcesPage() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mb-12">
          <Eyebrow>SOURCING RESOURCES &amp; BLOG</Eyebrow>
          <h1 className="font-heading text-[38px] sm:text-[50px] font-extrabold text-[#1F1F1F] leading-[1.04] tracking-[-0.04em] mb-5">
            Technical guides, quality standards &amp; blog.
          </h1>
          <div className="w-12 h-[2px] bg-[#F29B52] mb-6" />
          <p className="font-body text-[16px] sm:text-[17px] text-[#5F5B55] leading-relaxed">
            Explore our manufacturing specifications, 4-point quality
            checklists, and practical knitwear sourcing articles from our
            Tiruppur production team.
          </p>
        </div>

        {/* Connected Blog Banner */}
        <div className="mb-12 rounded-[28px] bg-[#FAF4EA] border border-[#E6D7BE] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6DFD3] text-[11px] font-mono font-bold uppercase tracking-wider text-[#C8741F]">
              <FileText className="w-3.5 h-3.5" />
              <span>Value Textiles Blog &amp; Journal</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] tracking-tight">
              Garment &amp; Knitwear Sourcing Insights
            </h2>
            <p className="font-body text-sm sm:text-[15px] text-[#554F47] leading-relaxed">
              Read in-depth articles on Tiruppur knitwear production, GSM &amp;
              shrinkage control, soft-flow dyeing, and private-label export
              planning.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 h-[48px] px-7 rounded-full bg-[#1F1F1F] hover:bg-[#C8741F] text-white text-sm font-semibold transition-colors"
            >
              <span>Read the Blog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Technical Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {resources.map((item, idx) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-[#FAF8F5] border border-[#E6E2DB] hover:border-[#C8741F] p-7 rounded-[24px] flex flex-col justify-between transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.18em] uppercase">
                    GUIDE 0{idx + 1}
                  </span>
                  <BookOpen className="w-4 h-4 text-[#C8741F]" />
                </div>
                <h2 className="font-heading text-[19px] sm:text-[20px] font-bold text-[#1F1F1F] group-hover:text-[#C8741F] mb-3 leading-snug tracking-tight transition-colors">
                  {item.title}
                </h2>
                <p className="font-body text-[14px] text-[#5F5B55] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6E2DB] flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-[#1F1F1F] group-hover:text-[#C8741F]">
                <span>{item.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="primary">
            Get a Quote
          </Button>
          <Button href="/products" variant="secondary">
            Browse Products
          </Button>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#78716C] ml-auto">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C8741F]" />
            Technical spec sheets available on request
          </span>
        </div>
      </Container>
    </section>
  );
}
