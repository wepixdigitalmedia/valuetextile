"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Check, X } from "lucide-react";

export function DirectManufacturerSection() {
  const comparisons = [
    {
      criterion: "Who makes it",
      agent: "Partner factories",
      direct: "Our own units in Tirupur",
    },
    {
      criterion: "Range",
      agent: "Depends on which factory is free",
      direct: "Fabrics and garments from one source",
    },
    {
      criterion: "Quality control",
      agent: "Checks split across multiple factories",
      direct: "One in-house lab and 4-point inspection",
    },
    {
      criterion: "Traceability",
      agent: "Depends on each sub-contractor",
      direct: "Yarn to finished garment in one place",
    },
    {
      criterion: "Lead time",
      agent: "Depends on third-party factory availability [CONFIRM]",
      direct: "Planned and scheduled in-house [CONFIRM]",
    },
    {
      criterion: "Price",
      agent: "Agent margin added [CONFIRM]",
      direct: "Factory-direct pricing [CONFIRM]",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / WHY SOURCE FROM US
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            A manufacturer, not a middleman.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
            Every stage from yarn to finished garment happens in our own units in Tirupur. That means one quality standard, one team to talk to and no agent margin in the price.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 sm:mt-14 overflow-hidden rounded-[28px] border border-[#E8E2D9] bg-[#FAF8F5]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-[#E8E2D9] bg-white">
                  <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-[#78716C] w-1/3">
                    Attribute
                  </th>
                  <th className="py-4 px-6 text-sm font-heading font-bold text-[#78716C] w-1/3">
                    Through a sourcing agent
                  </th>
                  <th className="py-4 px-6 text-sm font-heading font-bold text-[#1F1F1F] bg-[#FAF8F5] border-l border-[#E8E2D9] w-1/3">
                    Direct from Value Textiles
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D9] text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#1F1F1F]">
                      {row.criterion}
                    </td>
                    <td className="py-4 px-6 text-[#78716C] flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{row.agent}</span>
                    </td>
                    <td className="py-4 px-6 font-medium text-[#1F1F1F] bg-[#FAF8F5] border-l border-[#E8E2D9]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#C8741F] shrink-0" />
                        <span>{row.direct}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

