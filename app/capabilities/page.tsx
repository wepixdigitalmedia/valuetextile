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
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <Eyebrow>OUR CAPABILITIES</Eyebrow>
          <h1 className="font-heading text-[42px] sm:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.0] tracking-[-0.04em] mb-6">
            From yarn to garment, under one roof.
          </h1>
          <div className="w-12 h-[2px] bg-[#F29B52] mb-8" />
          <p className="font-body text-[17px] text-[#5F5B55] leading-relaxed">
            By operating our own garmenting, circular knitting, soft-flow
            dyeing, and fabric testing/inspection divisions, Value Textiles
            delivers complete traceability, stringent quality management, and
            dependable production schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {DIVISIONS.map((div, idx) => (
            <Link
              key={div.id}
              id={div.id}
              href={div.href}
              className="group bg-[#FAF8F5] border border-[#E6E2DB] hover:border-[#C8741F] p-8 rounded-[24px] flex flex-col justify-between transition-all shadow-2xs"
            >
              <div>
                <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.18em] uppercase mb-2 block">
                  0{idx + 1} DIVISION
                </span>
                <h2 className="font-heading text-[22px] sm:text-[26px] font-bold text-[#1F1F1F] group-hover:text-[#C8741F] mb-3 tracking-tight transition-colors">
                  {div.title}
                </h2>
                <p className="font-body text-[15px] text-[#5F5B55] leading-relaxed mb-6">
                  {div.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E2DB] flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-medium text-[#5F5B55]">
                  {div.highlights}
                </span>
                <span className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[#C8741F] shrink-0 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
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
