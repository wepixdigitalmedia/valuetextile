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
      {/* Tall surface photo placeholder */}
      <div className="relative w-full aspect-[4/5] bg-[var(--surface)] border border-[var(--line)] rounded-[12px] flex flex-col items-center justify-center p-6 mb-4 transition-colors duration-300 group-hover:border-[var(--black)]">
        <div className="w-12 h-12 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--black)]">
          <IconComponent className="w-6 h-6 text-[var(--black)] group-hover:text-[var(--accent)] transition-colors" strokeWidth={1.8} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] text-center select-none">
          {item.placeholder}
        </span>
      </div>

      {/* Card Info */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[19px] sm:text-[21px] font-bold text-[var(--black)] leading-snug group-hover:text-[var(--accent)] transition-colors mb-1 tracking-[-0.02em]">
            {item.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--accent)]" />
        </div>
        <p className="text-sm sm:text-[15px] text-[var(--text-muted)] leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] rounded-[12px]"
      >
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
