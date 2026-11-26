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
        !isLast ? "md:border-r md:border-[var(--line)]" : ""
      } ${className}`}
    >
      <div className="text-[42px] sm:text-[48px] lg:text-[54px] font-extrabold leading-none text-[var(--black)] tracking-[-0.02em] mb-2">
        {value}
      </div>
      <div className="text-sm sm:text-[15px] text-[var(--text-muted)] font-normal leading-snug">
        {label}
      </div>
    </div>
  );
}
