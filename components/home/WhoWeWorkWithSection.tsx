"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function WhoWeWorkWithSection() {
  const segments = [
    {
      title: "Fashion and private-label brands",
      desc: "Your design and label, made to your fit and fabric specification.",
    },
    {
      title: "Kids and baby wear brands",
      desc: "Soft knits made to your safety, tenderness and labelling requirements.",
    },
    {
      title: "Activewear and sportswear brands",
      desc: "Stretch and performance knits engineered for active, repeat programs.",
    },
    {
      title: "Online sellers and startups",
      desc: "Smaller starting orders on selected styles with room to scale.",
    },
    {
      title: "Retailers and buying houses",
      desc: "Larger programs with consistent shade, size sets and planned shipping.",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Send your brief",
      desc: "Garment type, quantity, target market and your tech pack or reference sample.",
    },
    {
      num: "2",
      title: "We quote and sample",
      desc: "You receive factory-direct pricing and pre-production samples for review.",
    },
    {
      num: "3",
      title: "You approve",
      desc: "We confirm the specification, trims, labels and delivery date.",
    },
    {
      num: "4",
      title: "We produce and ship",
      desc: "In-house fabric production, stitching, final QC and export despatch.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container className="space-y-16 sm:space-y-20">
        {/* ===================== PART 1: WHO WE WORK WITH ===================== */}
        <div>
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / WHO WE WORK WITH
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Brands at every stage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-12">
            {segments.map((seg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8E2D9] flex flex-col justify-between space-y-3 shadow-2xs hover:border-[#C8741F] transition-all"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8741F] shrink-0" />
                  <h3 className="font-heading font-bold text-base text-[#1F1F1F]">
                    {seg.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-[#554F47] leading-relaxed">
                  {seg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== PART 2: HOW TO START ===================== */}
        <div className="pt-8 border-t border-[#E8E2D9]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / HOW TO START
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              From first message to shipment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-12">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-2xl bg-white border border-[#E8E2D9] flex flex-col justify-between space-y-3 shadow-2xs"
              >
                <span className="font-mono text-2xl font-extrabold text-[#C8741F]">
                  0{st.num}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#1F1F1F] mb-1.5">
                    {st.title}
                  </h3>
                  <p className="font-body text-sm text-[#554F47] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="/contact#quote"
              className="h-[50px] px-8 rounded-full bg-[#1F1F1F] text-white hover:bg-black font-semibold text-sm transition-all shadow-xs flex items-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?type=samples"
              className="h-[50px] px-8 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white font-semibold text-sm transition-all"
            >
              <span>Request Samples</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

