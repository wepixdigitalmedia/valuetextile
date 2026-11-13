import React from "react";
import { StatItemData } from "@/config/siteContent";

interface StatItemProps extends StatItemData {
  className?: string;
  isLast?: boolean;
}

export function StatItem({ value, label, className = "", isLast = false }: StatItemProps) {
  return (
    <div
      className={`flex flex-col justify-center px-4 md:px-8 py-6 md:py-8 ${
        !isLast ? "md:border-r md:border-[#E6E2DB]" : ""
      } ${className}`}
    >
      <div className="font-heading text-[42px] sm:text-[48px] lg:text-[54px] font-extrabold leading-none text-[#1F1F1F] tracking-[-0.04em] mb-2">
        {value}
      </div>
      <div className="font-body text-[14px] sm:text-[15px] text-[#5F5B55] font-normal leading-snug">
        {label}
      </div>
    </div>
  );
}
