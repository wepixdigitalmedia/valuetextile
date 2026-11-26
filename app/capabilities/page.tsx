import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities | Value Textiles — Vertically Integrated Divisions",
  description:
    "Explore Value Textiles' four core manufacturing divisions: Garment Manufacturing, Circular Knitting, Soft-Flow Dyeing & Finishing, and Fabric Testing, Inspection & Despatch.",
};

const DIVISIONS = [
  {
    id: "garment",
    title: "Garment Manufacturing",
    href: "/capabilities/garment-manufacturing",
    desc: "CAD pattern grading, automated spreading, band-knife cutting, JUKI/Pegasus sewing lines, steam finishing, 9-point needle detection, and AQL export packing.",
    highlights: "T-Shirts · Polos · Kids & Baby Wear · Knitwear · Activewear",
  },
  {
    id: "knitting",
    title: "Knitting Division",
    href: "/capabilities/knitting-division",
    desc: "High-speed Mayer & Cie circular knitting machines (18–28 GG) with 4 to 10 colour auto-stripers, 72-feeder mini jacquards, rib, interlock, and Lycra jersey.",
    highlights: "Mayer & Cie · 2-Shift Supervised Operations · SIDCO Tiruppur",
  },
  {
    id: "dyeing",
    title: "Dyeing Division",
    href: "/capabilities/dyeing-division",
    desc: "Brazzoli & Dilmenler HTHP soft-flow dyeing with SETEX/ORGATEX automation, THIES dispensing, TubeTex & Mario Crosta finishing, and SIMEM Zero Liquid Discharge (ZLD).",
    highlights: "OEKO-TEX® Class 1 · GOTS · OCS · ZDHC · SIPCOT Perundurai",
  },
  {
    id: "fabric",
    title: "Fabric Division",
    href: "/capabilities/fabric-division",
    desc: "11-point in-house Fabric Testing Laboratory, 4-Point & 10-Point Fabric Inspection with colour-coded roll grading, and Time & Action scheduled Fabric Despatch.",
    highlights: "Lab Testing · 4-Point & 10-Point QC · 30–45 Day Lead Times",
  },
];

export default function CapabilitiesPage() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--white)]">
      <Container>
        <div className="max-w-3xl mb-16">
          <Eyebrow>OUR CAPABILITIES</Eyebrow>
          <h1 className="text-[42px] sm:text-[52px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2 mb-6">
            Knitting, dyeing, testing &amp; garmenting in-house.
          </h1>
          <div className="w-12 h-[3px] bg-[var(--accent)] mb-8" />
          <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">
            While yarns are procured externally to exact buyer counts, Value Textiles operates its own circular knitting, soft-flow dyeing, fabric testing, and garment manufacturing divisions for complete quality traceability and dependable delivery schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {DIVISIONS.map((div, idx) => (
            <Link
              key={div.id}
              id={div.id}
              href={div.href}
              className="group bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] p-8 rounded-[12px] flex flex-col justify-between transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-[var(--accent)] tracking-[0.14em] uppercase mb-2 block">
                  0{idx + 1} DIVISION
                </span>
                <h2 className="text-[22px] sm:text-[26px] font-bold text-[var(--black)] group-hover:text-[var(--accent)] mb-3 tracking-[-0.02em] transition-colors">
                  {div.title}
                </h2>
                <p className="text-base text-[var(--text-muted)] leading-relaxed mb-6">
                  {div.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  {div.highlights}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)] shrink-0 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Get a Quote
          </Button>
          <Button href="/garments" variant="secondary">
            Explore Garments
          </Button>
        </div>
      </Container>
    </section>
  );
}
