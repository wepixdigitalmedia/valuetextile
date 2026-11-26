"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight, Factory, Scale, Headphones } from "lucide-react";
import { Tiruppur } from "../ui/Tiruppur";

export function OneTeamSection() {
  return (
    <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        {/* SECTION HEADER */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
            Integrated operations, engineered for{" "}
            <span className="text-[var(--accent)]">reliability.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[var(--text-muted)] leading-[1.6]">
            Direct production oversight, dedicated stitching capacity, and structured technical merchandising across our facilities.
          </p>
        </div>

        {/* THREE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-12 items-stretch">
          {/* CARD 1: In-house production */}
          <div className="flex flex-col gap-3">
            <div className="w-fit px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--white)] flex items-center gap-2 text-[12.5px] font-semibold text-[var(--black)]">
              <Factory className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>In-house production</span>
            </div>

            <div className="flex-1 rounded-[12px] overflow-hidden bg-[var(--white)] border border-[var(--line)] flex flex-col justify-between group">
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[var(--surface)] border-b border-[var(--line)]">
                <Image
                  src="/images/slider/cut-and-sew.webp"
                  alt="Value Textiles stitching and garment production line in Tirupur"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--white)] border border-[var(--line)] text-[var(--black)] text-[11.5px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span>Own Units in <Tiruppur /></span>
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-[20px] sm:text-[22px] text-[var(--black)] font-bold leading-[1.2] tracking-[-0.02em]">
                    Direct production oversight at every step.
                  </h3>
                  <p className="text-[15px] text-[var(--text-muted)] leading-[1.6]">
                    Procurement to quality control—circular knitting, soft-flow dyeing, finishing, and apparel assembly run inside our own units.
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--line)]">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--black)] flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>Knitting</span>
                    <span className="text-[var(--accent)]">·</span>
                    <span>Dyeing</span>
                    <span className="text-[var(--accent)]">·</span>
                    <span>Cutting</span>
                    <span className="text-[var(--accent)]">·</span>
                    <span>Stitching</span>
                    <span className="text-[var(--accent)]">·</span>
                    <span>Inspection</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Capacity */}
          <div className="flex flex-col gap-3">
            <div className="w-fit px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--white)] flex items-center gap-2 text-[12.5px] font-semibold text-[var(--black)]">
              <Scale className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Capacity</span>
            </div>

            <div className="relative flex-1 rounded-[12px] bg-[var(--white)] border border-[var(--line)] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--line)] text-[var(--black)] text-[11.5px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span>In-House Capacity</span>
                </span>
              </div>

              <div className="space-y-5 my-auto py-5">
                <div className="space-y-1.5">
                  <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[var(--black)] tracking-[-0.02em] leading-[1.15]">
                    Dedicated{" "}
                    <span className="text-[var(--accent)]">Garment Lines</span>
                  </h3>
                  <p className="text-[15px] text-[var(--text-muted)] leading-[1.6]">
                    Scalable cut, stitch, and finishing lines built for both trial runs and bulk export programs.
                  </p>
                </div>

                <div className="w-full h-px bg-[var(--line)]" />

                <div className="space-y-1.5">
                  <h4 className="text-[20px] font-bold text-[var(--black)] tracking-[-0.02em] leading-[1.2]">
                    Backed by In-House Fabric Control
                  </h4>
                  <p className="text-[15px] text-[var(--text-muted)] leading-[1.6]">
                    Dedicated circular knitting, soft-flow dyeing, and laboratory verification keep shade and GSM consistent across repeat programs.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)]">
                <p className="text-[13px] text-[var(--text-muted)] leading-[1.5]">
                  Produced in our own units, so repeat and bulk orders stay on schedule.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3: Export desk */}
          <div className="flex flex-col gap-3">
            <div className="w-fit px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--white)] flex items-center gap-2 text-[12.5px] font-semibold text-[var(--black)]">
              <Headphones className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Export desk</span>
            </div>

            <div className="relative flex-1 rounded-[12px] bg-[var(--black)] border border-[var(--black)] text-[var(--white)] p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 rounded-full overflow-hidden border border-[var(--white)]/20 bg-[var(--white)]/10 shrink-0">
                    <Image
                      src="/images/expert-1.jpg"
                      alt="Value Textiles Export Desk Manager"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[var(--white)] leading-tight">
                      Export Desk Team
                    </p>
                    <p className="text-[12px] text-[var(--white)]/70">
                      <Tiruppur /> Merchandising
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--white)]/20 text-[11px] font-semibold text-[var(--white)]">
                  <span className="size-1.5 rounded-full bg-[var(--accent)]" />
                  <span>IST Desk</span>
                </div>
              </div>

              <div className="space-y-3 my-auto py-5">
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[var(--white)] leading-[1.15] tracking-[-0.02em]">
                  Dedicated technical merchandising desk.
                </h3>
                <p className="text-[15px] text-[var(--white)]/75 leading-[1.6]">
                  Our Tiruppur coordinators manage tech-pack reviews, lab-dip approvals, production scheduling, and export documentation.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--white)]/15">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-between min-h-[48px] px-6 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] transition-colors font-semibold text-[14px] group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--white)]"
                >
                  <span>Talk to us</span>
                  <span className="size-7 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5">
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
