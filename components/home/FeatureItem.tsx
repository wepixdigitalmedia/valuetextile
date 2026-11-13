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
    <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-start group hover:bg-[#FAF8F5]/50 transition-colors ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.18em] uppercase">
          {item.number}
        </span>
        <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E6E2DB] flex items-center justify-center text-[#5F5B55] group-hover:text-[#F29B52] group-hover:border-[#F29B52]/40 transition-colors">
          <IconComponent className="w-4 h-4" strokeWidth={1.8} />
        </div>
      </div>
      <h3 className="font-heading text-[20px] sm:text-[22px] font-bold text-[#1F1F1F] leading-tight mb-2 tracking-tight group-hover:text-[#C8741F] transition-colors">
        {item.title}
      </h3>
      <p className="font-body text-[14px] sm:text-[15px] text-[#5F5B55] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
