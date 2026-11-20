"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight, Factory, Scale, Headphones, Clock, Check } from "lucide-react";
import { Tiruppur } from "../ui/Tiruppur";

export function OneTeamSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        {/* ===================== SECTION HEADER ===================== */}
        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[46px] font-black text-[#1F1F1F] leading-[1.12] tracking-[-0.035em]">
            Integrated operations, engineered for reliability.
          </h2>
          <p className="font-body text-[16px] sm:text-[18px] lg:text-[19px] text-[#6B655D] leading-relaxed">
            Direct production oversight, dedicated stitching capacity, and structured technical merchandising across our facilities.
          </p>
        </div>

        {/* ===================== THREE CARDS GRID (EQUAL COLUMNS) ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-12 items-stretch">

          {/* ============================================================ */}
          {/* CARD 1: In-house production                                  */}
          {/* ============================================================ */}
          <div className="flex flex-col gap-3">
            {/* Pill 1 */}
            <div className="w-fit px-3.5 py-1.5 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold text-[#1F1F1F]">
              <Factory className="w-3.5 h-3.5 text-[#C8741F]" />
              <span>In-house production</span>
            </div>

            {/* Dark Image Card with White Text */}
            <div className="relative flex-1 min-h-[440px] sm:min-h-[460px] lg:min-h-[480px] rounded-[30px] sm:rounded-[36px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xs group border border-black/5 bg-[#1F1F1F]">
              {/* Background Photo: Real Stitching Line & Garment Production */}
              <Image
                src="/images/slider/cut-and-sew.webp"
                alt="Value Textiles stitching and garment production line in Tirupur"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Rich Multi-stop Scrim Overlay for Clean Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 pointer-events-none" />

              {/* Top Tag: Tirupur Units */}
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11.5px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8741F]" />
                  <span>Own Units in <Tiruppur /></span>
                </span>
              </div>

              {/* Bottom Text Content */}
              <div className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-[21px] sm:text-[23px] lg:text-[25px] text-white font-bold leading-[1.25] tracking-tight">
                    Direct production oversight at every step.
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-white/90 leading-relaxed">
                    Procurement to quality control—circular knitting, soft-flow dyeing, finishing, and apparel assembly run inside our own units.
                  </p>
                </div>

                {/* Workflow Strip */}
                <div className="pt-3 border-t border-white/20">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-white/75 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>Knitting</span>
                    <span className="text-[#C8741F]">·</span>
                    <span>Dyeing</span>
                    <span className="text-[#C8741F]">·</span>
                    <span>Cutting</span>
                    <span className="text-[#C8741F]">·</span>
                    <span>Stitching</span>
                    <span className="text-[#C8741F]">·</span>
                    <span>Inspection</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: Capacity                                             */}
          {/* ============================================================ */}
          <div className="flex flex-col gap-3">
            {/* Pill 2 */}
            <div className="w-fit px-3.5 py-1.5 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold text-[#1F1F1F]">
              <Scale className="w-3.5 h-3.5 text-[#C8741F]" />
              <span>Capacity</span>
            </div>

            {/* Ivory Centred Stat Card */}
            <div className="relative flex-1 min-h-[440px] sm:min-h-[460px] lg:min-h-[480px] rounded-[30px] sm:rounded-[36px] bg-[#FFFDF9] border border-[#E8E2D9] p-6 sm:p-8 flex flex-col justify-between shadow-2xs overflow-hidden">
              {/* Subtle ambient peachy glow */}
              <div
                className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#FCE1CA]/30 blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-44 h-44 rounded-full bg-[#FBF1DF]/40 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Tag: In-House Capacity */}
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF4EA] border border-[#ECDDC3] text-[#8C531B] text-[11.5px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8741F]" />
                  <span>In-House Capacity</span>
                </span>
              </div>

              {/* Middle: Clean Two-Pillar Capability Stack (No Metric Numbers) */}
              <div className="relative z-10 space-y-5 my-auto py-4">
                {/* Pillar 1: Garment Production */}
                <div className="space-y-1.5">
                  <h3 className="font-heading text-[22px] sm:text-[24px] lg:text-[26px] font-extrabold text-[#C8741F] tracking-tight leading-snug">
                    Dedicated Garment Lines
                  </h3>
                  <p className="text-[13.5px] text-[#55504A] leading-relaxed">
                    Scalable cut, stitch, and finishing lines built for both trial runs and bulk export programs.
                  </p>
                </div>

                <div className="w-full h-px bg-[#E8E2D9]" />

                {/* Pillar 2: Fabric Backing */}
                <div className="space-y-1.5">
                  <h4 className="font-heading text-[20px] sm:text-[22px] font-bold text-[#1F1F1F] tracking-tight leading-snug">
                    Backed by In-House Fabric Control
                  </h4>
                  <p className="text-[13.5px] text-[#55504A] leading-relaxed">
                    Dedicated circular knitting, soft-flow dyeing, and laboratory verification keep shade and GSM consistent across repeat programs.
                  </p>
                </div>
              </div>

              {/* Bottom Clarifying Statement */}
              <div className="relative z-10 pt-3 border-t border-[#E8E2D9]">
                <p className="text-[13px] sm:text-[13.5px] text-[#55504A] leading-relaxed">
                  Produced in our own units, so repeat and bulk orders stay on schedule.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: Export desk                                          */}
          {/* ============================================================ */}
          <div className="flex flex-col gap-3">
            {/* Pill 3 */}
            <div className="w-fit px-3.5 py-1.5 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold text-[#1F1F1F]">
              <Headphones className="w-3.5 h-3.5 text-[#C8741F]" />
              <span>Export desk</span>
            </div>

            {/* Charcoal Card with White Text, Merchandiser Profile & Action */}
            <div className="relative flex-1 min-h-[440px] sm:min-h-[460px] lg:min-h-[480px] rounded-[30px] sm:rounded-[36px] bg-[#1F1F1F] text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xs overflow-hidden group border border-black/10">

              {/* Subtle ambient accent glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#C8741F]/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Top: Merchandiser Avatar & Timezone Pill */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 rounded-full overflow-hidden border-2 border-white/20 bg-neutral-800 shrink-0 shadow-sm">
                    <Image
                      src="/images/expert-1.jpg"
                      alt="Value Textiles Export Desk Manager"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-semibold text-white leading-tight">
                      Export Desk Team
                    </p>
                    <p className="text-[11.5px] text-neutral-400 font-mono">
                      <Tiruppur /> Merchandising
                    </p>
                  </div>
                </div>

                {/* Overlap Status Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-[#F7C08A]">
                  <span className="size-1.5 rounded-full bg-[#34D399] animate-pulse" />
                  <span>IST Desk</span>
                </div>
              </div>

              {/* Middle: Headline & Core Role */}
              <div className="relative z-10 space-y-3 my-auto py-4">
                <h3 className="font-heading text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-white leading-snug tracking-tight">
                  Dedicated technical merchandising desk.
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-neutral-300 leading-relaxed">
                  Our Tiruppur coordinators manage tech-pack reviews, lab-dip approvals, production scheduling, and export documentation.
                </p>
              </div>

              {/* Bottom: Action Button inside the card */}
              <div className="relative z-10 pt-3 border-t border-white/15">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-between h-[48px] px-5 rounded-full bg-white text-[#1F1F1F] hover:bg-[#FAF4EA] transition-all font-semibold text-[13.5px] shadow-sm group-hover:border-[#C8741F] cursor-pointer"
                >
                  <span>Talk to us</span>
                  <span className="size-7 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
