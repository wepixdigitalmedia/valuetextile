"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Check, X } from "lucide-react";

const AGENT_POINTS = [
  { label: "Partner factories" },
  { label: "Bought from whoever is available" },
  { label: "Checks split across multiple factories" },
  { label: "Depends on each factory" },
  { label: "Depends on factory availability" },
  { label: "Agent margin added" },
];

const DIRECT_POINTS = [
  { label: "Our own units in Tiruppur" },
  { label: "Our own knitting, dyeing and lab testing" },
  { label: "Unified standard: 4-point fabric inspection plus in-line & final garment QC" },
  { label: "Integrated fabric and garment production in one system" },
  { label: "Planned and scheduled in-house" },
  { label: "Factory-direct pricing" },
];

export function DirectManufacturerSection() {
  return (
    <section className="relative w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)] overflow-hidden">
      <Container>
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
            <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
            <span>WHY SOURCE FROM US</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-3">
            A manufacturer, not a{" "}
            <span className="text-[var(--accent)]">middleman.</span>
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[var(--text-muted)] leading-[1.6] mt-4">
            Yarns are procured externally to exact specs, while every subsequent stage—knitting, dyeing, lab testing, cutting, and stitching—runs inside our own Tiruppur and Perundurai facilities with direct production oversight and no agent margin.
          </p>
        </div>

        {/* COMPARISON + 2x3 BENEFIT CARDS */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div className="lg:col-span-8 relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {/* CARD 1: Through a sourcing agent */}
            <div className="rounded-[12px] bg-[var(--white)] border border-[var(--line)] p-5 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-4 px-1">
                <h3 className="text-[18px] font-bold text-[var(--black)]">
                  Through a sourcing agent
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] border border-[var(--line)] px-2.5 py-1 rounded-full">
                  Middleman
                </span>
              </div>

              <div className="flex-1 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] px-4 sm:px-5 py-1.5 flex flex-col justify-between divide-y divide-[var(--line)]">
                {AGENT_POINTS.map((point) => (
                  <div
                    key={point.label}
                    className="py-3.5 flex items-center gap-3 text-[14px] text-[var(--text-muted)] leading-[1.5]"
                  >
                    <span className="w-6 h-6 rounded-full border border-[var(--line)] bg-[var(--white)] text-[var(--text-muted)] flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[2.2]" />
                    </span>
                    <span>{point.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER "VS" BADGE */}
            <div
              aria-hidden="true"
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[var(--white)] border-2 border-[var(--black)] items-center justify-center font-extrabold text-xs tracking-wider text-[var(--black)]"
            >
              VS
            </div>
            <div
              aria-hidden="true"
              className="flex md:hidden mx-auto -my-2 z-20 w-11 h-11 rounded-full bg-[var(--white)] border-2 border-[var(--black)] items-center justify-center font-extrabold text-xs tracking-wider text-[var(--black)]"
            >
              VS
            </div>

            {/* CARD 2: Direct from Value Textiles */}
            <div className="relative rounded-[12px] bg-[var(--white)] border-2 border-[var(--accent)] p-5 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-fit rounded-full bg-[var(--accent)] text-[var(--on-accent)] pl-2 pr-4 py-1.5 inline-flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <h3 className="text-[16px] font-bold text-[var(--on-accent)]">
                    Direct from Value Textiles
                  </h3>
                </div>
              </div>

              <div className="flex-1 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] px-4 sm:px-5 py-1.5 flex flex-col justify-between divide-y divide-[var(--line)]">
                {DIRECT_POINTS.map((point) => (
                  <div
                    key={point.label}
                    className="py-3.5 flex items-center gap-3 text-[14px] font-semibold text-[var(--black)] leading-[1.5]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-[var(--on-accent)] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                    </span>
                    <span>{point.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x3 Benefit Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
            {/* 1 */}
            <div className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 36H40M12 36V28H22V22H14V14H36V36" stroke="var(--black)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 22V27M15 29H19" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
                  <circle cx="31" cy="21" r="3" fill="var(--accent)" stroke="var(--black)" strokeWidth="1.8" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-[var(--black)] leading-tight">
                In-house
                <br />
                Manufacturing
              </span>
            </div>

            {/* 2 */}
            <div className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11L38 18.5L24 26L10 18.5L24 11Z" stroke="var(--black)" strokeWidth="2.4" strokeLinejoin="round" />
                  <path d="M10 25L24 32.5L38 25" stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 31.5L24 39L38 31.5" stroke="var(--black)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-[var(--black)] leading-tight">
                End-to-End
                <br />
                Control
              </span>
            </div>

            {/* 3 */}
            <div className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 9L37 14V23.5C37 31.8 31.4 37.9 24 40C16.6 37.9 11 31.8 11 23.5V14L24 9Z" stroke="var(--black)" strokeWidth="2.4" strokeLinejoin="round" />
                  <path d="M18.5 24.5L22.2 28.2L30 20.5" stroke="var(--accent)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-[var(--black)] leading-tight">
                Consistent
                <br />
                Quality
              </span>
            </div>

            {/* 4 */}
            <div className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="13" width="28" height="25" rx="4" stroke="var(--black)" strokeWidth="2.4" />
                  <path d="M10 20H38M17 10V15M31 10V15" stroke="var(--black)" strokeWidth="2.4" strokeLinecap="round" />
                  <rect x="15" y="25" width="7" height="3" rx="1" fill="var(--accent)" />
                  <rect x="25" y="25" width="8" height="3" rx="1" fill="var(--accent)" />
                  <rect x="15" y="31" width="12" height="3" rx="1" fill="var(--accent)" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-[var(--black)] leading-tight">
                Reliable
                <br />
                Lead Time
              </span>
            </div>

            {/* 5 */}
            <div className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="20" cy="24" rx="9" ry="4" stroke="var(--black)" strokeWidth="2.2" />
                  <path d="M11 24V30C11 32.2 15 34 20 34C25 34 29 32.2 29 30V24" stroke="var(--black)" strokeWidth="2.2" />
                  <path d="M11 30V35C11 37.2 15 39 20 39C25 39 29 37.2 29 35V30" stroke="var(--black)" strokeWidth="2.2" />
                  <ellipse cx="29" cy="16" rx="8" ry="3.5" stroke="var(--accent)" strokeWidth="2.2" />
                  <path d="M21 16V21.5M37 16V26C37 27.8 33.8 29.2 29.5 29.5" stroke="var(--black)" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-[var(--black)] leading-tight">
                No Agent
                <br />
                Margin
              </span>
            </div>

            {/* 6 */}
            <div className="group rounded-[12px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 38V22L19 27V22L28 27V13H37V38H10Z" stroke="var(--black)" strokeWidth="2.4" strokeLinejoin="round" />
                  <rect x="15" y="31" width="4" height="4" rx="0.8" fill="var(--accent)" />
                  <rect x="22" y="31" width="4" height="4" rx="0.8" fill="var(--accent)" />
                  <rect x="29" y="31" width="4" height="4" rx="0.8" fill="var(--accent)" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-[var(--black)] leading-tight">
                Better
                <br />
                Value
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
