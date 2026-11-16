"use client";

import React from "react";
import { Container } from "../ui/Container";
import { CheckCircle2 } from "lucide-react";

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

  return (
    <section
      id="who-we-work-with"
      className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9] scroll-mt-24"
    >
      <Container>
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
      </Container>
    </section>
  );
}
