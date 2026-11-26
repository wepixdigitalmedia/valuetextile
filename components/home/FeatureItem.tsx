import React from "react";
import { Network, SlidersHorizontal, Microscope, ClockCheck } from "lucide-react";
import { FeatureItemData } from "@/config/siteContent";

interface FeatureItemProps {
  item: FeatureItemData;
  className?: string;
}

const featureIcons: Record<string, React.ElementType> = {
  "01": Network,
  "02": SlidersHorizontal,
  "03": Microscope,
  "04": ClockCheck,
};

export function FeatureItem({ item, className = "" }: FeatureItemProps) {
  const IconComponent = featureIcons[item.number] || Network;

  return (
    <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-start group hover:bg-[var(--surface)]/60 transition-colors ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13px] font-bold text-[var(--accent)] tracking-[0.14em] uppercase">
          {item.number}
        </span>
        <div className="w-8 h-8 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--black)] group-hover:text-[var(--accent)] group-hover:border-[var(--black)] transition-colors">
          <IconComponent className="w-4 h-4" strokeWidth={1.8} />
        </div>
      </div>
      <h3 className="text-[20px] sm:text-[22px] font-bold text-[var(--black)] leading-tight mb-2 tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors">
        {item.title}
      </h3>
      <p className="text-sm sm:text-[15px] text-[var(--text-muted)] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
