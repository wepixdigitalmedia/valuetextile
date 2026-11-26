"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Tiruppur } from "../ui/Tiruppur";
import { MapPin, Truck, Anchor, CheckCircle } from "lucide-react";

export function WhyTirupurSection() {
  return (
    <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <Eyebrow>WHY TIRUPPUR</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
            Knitwear sourcing in India starts in Tiruppur.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mt-4">
            Tiruppur, in Tamil Nadu (also spelled <Tiruppur />), is India&apos;s main knitwear export cluster. Yarn, knitting, dyeing, printing, embroidery and garment units sit close together, providing an integrated ecosystem for global garment manufacturing.
          </p>
        </div>

        {/* 3 Cluster Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
          {/* Point 1 */}
          <div className="p-7 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--black)] mb-2">
                A short supply chain
              </h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                Trims, printing, embroidery and specialist washing are integrated directly within the cluster, cutting transit times and keeping schedules on track.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="p-7 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)]">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--black)] mb-2">
                Export experience
              </h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                The cluster has shipped knitwear to global brands for decades, and our team works to buyer specifications and export paperwork every week.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="p-7 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)]">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--black)] mb-2">
                Reachable ports
              </h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                Direct containerized freight corridors to Tuticorin, Chennai, and Cochin sea ports, plus air cargo via Coimbatore.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-8 p-5 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
          <span>
            Our units are located in Parapalayam, Tiruppur. Factory visits and live video tours are welcome by appointment.
          </span>
        </div>
      </Container>
    </section>
  );
}

