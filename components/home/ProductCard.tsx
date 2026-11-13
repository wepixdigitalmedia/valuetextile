import React from "react";
import Link from "next/link";
import { Layers, Shirt, Sparkles, Palette, ArrowUpRight } from "lucide-react";
import { ProductItemData } from "@/config/siteContent";

interface ProductCardProps {
  item: ProductItemData;
}

export function ProductCard({ item }: ProductCardProps) {
  const getProductIcon = (title: string) => {
    if (title.toLowerCase().includes("knit")) return Layers;
    if (title.toLowerCase().includes("shirt") || title.toLowerCase().includes("polo")) return Shirt;
    if (title.toLowerCase().includes("kid") || title.toLowerCase().includes("baby")) return Sparkles;
    return Palette;
  };

  const IconComponent = getProductIcon(item.title);

  const CardContent = (
    <article className="group flex flex-col h-full">
      {/* Tall ivory photo placeholder */}
      <div className="relative w-full aspect-[4/5] bg-[#FAF8F5] border border-[#E6E2DB] rounded-xl flex flex-col items-center justify-center p-6 mb-4 transition-all duration-300 group-hover:border-[#F29B52]/60 group-hover:bg-[#F7F4EE] shadow-2xs group-hover:shadow-md">
        <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2DB] flex items-center justify-center mb-3 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:border-[#F29B52]/40">
          <IconComponent className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#F29B52] transition-colors" strokeWidth={1.8} />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#5F5B55]/75 text-center select-none">
          {item.placeholder}
        </span>
      </div>

      {/* Card Info */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-[19px] sm:text-[21px] font-bold text-[#1F1F1F] leading-snug group-hover:text-[#C8741F] transition-colors mb-1 tracking-tight">
            {item.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[#5F5B55] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#C8741F]" />
        </div>
        <p className="font-body text-[14px] sm:text-[15px] text-[#5F5B55] leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F29B52] rounded-xl"
      >
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
