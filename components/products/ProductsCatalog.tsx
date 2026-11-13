"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_DATA, ProductItem, ProductCategory } from "@/config/productsData";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { 
  Search, 
  Layers, 
  Sparkles, 
  Shirt, 
  Maximize2, 
  ArrowRight, 
  X, 
  Check, 
  Info,
  SlidersHorizontal
} from "lucide-react";

export function ProductsCatalog() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories: { label: string; value: "All" | ProductCategory; count: number }[] = [
    { label: "All Items", value: "All", count: PRODUCTS_DATA.length },
    { label: "Knitted Fabrics", value: "Fabric", count: PRODUCTS_DATA.filter(p => p.category === "Fabric").length },
    { label: "Yarns on Cone", value: "Yarn", count: PRODUCTS_DATA.filter(p => p.category === "Yarn").length },
    { label: "Manufactured Garments", value: "Garments", count: PRODUCTS_DATA.filter(p => p.category === "Garments").length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        product.name.toLowerCase().includes(query) ||
        product.productType.toLowerCase().includes(query) ||
        product.composition.toLowerCase().includes(query) ||
        product.cardDescription.toLowerCase().includes(query) ||
        product.features.some(f => f.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full space-y-10">
      {/* ============================================================ */}
      {/* CONTROLS: Category Tabs + Search Input                        */}
      {/* ============================================================ */}
      <div className="bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#1F1F1F] text-white shadow-xs"
                      : "bg-white text-[#55504A] border border-[#E8E2D9] hover:border-[#C8741F] hover:text-[#1F1F1F]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#C8741F] text-white"
                        : "bg-[#FAF8F5] text-[#78716C] border border-[#E8E2D9]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C827A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, blends, specs..."
              className="w-full h-10 pl-10 pr-9 rounded-full bg-white border border-[#E8E2D9] text-[13.5px] text-[#1F1F1F] placeholder:text-[#8C827A] focus:outline-hidden focus:border-[#C8741F] focus:ring-2 focus:ring-[#C8741F]/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#1F1F1F]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Status / Active Filter Bar */}
        <div className="flex items-center justify-between text-[12.5px] text-[#78716C] pt-2 border-t border-[#E8E2D9]/60">
          <span>
            Showing <strong className="text-[#1F1F1F]">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} products
          </span>
          {searchQuery && (
            <span className="italic">
              Matching &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* PRODUCT GRID: 16 Products with 1:1 Images                     */}
      {/* ============================================================ */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#FAF8F5] rounded-3xl border border-dashed border-[#E8E2D9] space-y-4">
          <SlidersHorizontal className="w-8 h-8 text-[#C8741F] mx-auto opacity-70" />
          <h3 className="font-heading text-[20px] font-bold text-[#1F1F1F]">No products match your search</h3>
          <p className="text-[14px] text-[#78716C] max-w-md mx-auto">
            Try resetting your search query or selecting a different product category.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-5 py-2 rounded-full bg-[#1F1F1F] text-white text-[13px] font-medium hover:bg-black cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-[26px] border border-[#E8E2D9] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 1:1 Square Product Image */}
                <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={product.coverImage}
                    alt={product.altText || product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge (Top Left) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#E8E2D9] text-[#1F1F1F] shadow-xs">
                      {product.category}
                    </span>
                  </div>

                  {/* Quick Inspect Button (Top Right) */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-[#E8E2D9] text-[#1F1F1F] flex items-center justify-center shadow-xs hover:bg-[#1F1F1F] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    title="View specifications"
                    aria-label={`View specifications for ${product.name}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <p className="text-[11.5px] font-mono text-[#C8741F] font-semibold uppercase tracking-wider">
                      {product.productType}
                    </p>
                    <h3 className="font-heading font-bold text-[18px] text-[#1F1F1F] leading-snug group-hover:text-[#C8741F] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-[13px] text-[#6B655D] leading-relaxed line-clamp-2">
                    {product.cardDescription}
                  </p>

                  {/* Micro Specs List */}
                  <div className="pt-2 border-t border-[#EFEBE4] space-y-1.5 text-[12px]">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[#8C827A] shrink-0">Composition:</span>
                      <span className="text-[#1F1F1F] font-medium text-right line-clamp-1">
                        {product.composition}
                      </span>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                      <span className="text-[#8C827A]">MOQ:</span>
                      <span className="text-[#8C531B] font-mono text-[11px] bg-[#FAF4EA] px-2 py-0.5 rounded-full border border-[#ECDDC3]">
                        {product.moq}
                      </span>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-[#55504A] bg-[#FAF8F5] border border-[#E8E2D9] px-2 py-0.5 rounded-md"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="w-full h-9 rounded-full border border-[#E8E2D9] bg-white hover:bg-[#FAF8F5] hover:border-[#1F1F1F] text-[12px] font-medium text-[#1F1F1F] transition-all cursor-pointer flex items-center justify-center"
                >
                  View Specs
                </button>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}#quote`}
                  className="w-full h-9 rounded-full bg-[#1F1F1F] hover:bg-black text-[12px] font-semibold text-white transition-all shadow-2xs flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ============================================================ */}
      {/* PRODUCT SPECS MODAL                                           */}
      {/* ============================================================ */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#E8E2D9]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#E8E2D9] flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-mono uppercase tracking-wider text-[#1F1F1F] bg-white border border-[#E8E2D9] px-2.5 py-0.5 rounded-full font-semibold">
                  {selectedProduct.category} Specifications
                </span>
                <span className="text-[12px] text-[#78716C] hidden sm:inline">
                  Direct production in <Tiruppur />
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="w-9 h-9 rounded-full bg-white border border-[#E8E2D9] flex items-center justify-center text-[#55504A] hover:text-[#1F1F1F] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-5 sm:p-8 flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* 1:1 Product Image */}
                <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D9]">
                  <Image
                    src={selectedProduct.coverImage}
                    alt={selectedProduct.altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>

                {/* Details Column */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-[12px] font-mono uppercase tracking-wider text-[#C8741F] font-bold">
                      {selectedProduct.productType}
                    </span>
                    <h2 className="font-heading font-black text-[24px] sm:text-[28px] text-[#1F1F1F] leading-tight pt-1">
                      {selectedProduct.name}
                    </h2>
                  </div>

                  <p className="text-[14px] text-[#55504A] leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[12px] font-mono uppercase tracking-wider text-[#1F1F1F] font-semibold">
                      Key Capabilities:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#4A4742]">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#C8741F] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E2D9] p-5 space-y-3">
                <h4 className="font-heading font-bold text-[15px] text-[#1F1F1F]">
                  Production Specifications Summary
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                  <div className="flex justify-between p-2.5 rounded-lg bg-white border border-[#E8E2D9]">
                    <span className="text-[#78716C]">Composition:</span>
                    <span className="font-medium text-[#1F1F1F] text-right">{selectedProduct.composition}</span>
                  </div>

                  {selectedProduct.construction && (
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-[#E8E2D9]">
                      <span className="text-[#78716C]">Construction:</span>
                      <span className="font-medium text-[#1F1F1F]">{selectedProduct.construction}</span>
                    </div>
                  )}

                  {selectedProduct.yarnCount && (
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-[#E8E2D9]">
                      <span className="text-[#78716C]">Yarn Count:</span>
                      <span className="font-medium text-[#1F1F1F]">{selectedProduct.yarnCount}</span>
                    </div>
                  )}

                  {selectedProduct.garmentType && (
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-[#E8E2D9]">
                      <span className="text-[#78716C]">Garment Type:</span>
                      <span className="font-medium text-[#1F1F1F]">{selectedProduct.garmentType}</span>
                    </div>
                  )}

                  <div className="flex justify-between p-2.5 rounded-lg bg-white border border-[#E8E2D9]">
                    <span className="text-[#78716C]">Weight / GSM:</span>
                    <span className="font-medium text-[#8C531B]">{selectedProduct.weightGsm}</span>
                  </div>

                  <div className="flex justify-between p-2.5 rounded-lg bg-white border border-[#E8E2D9]">
                    <span className="text-[#78716C]">MOQ:</span>
                    <span className="font-medium text-[#8C531B]">{selectedProduct.moq}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 text-[12px] text-[#78716C]">
                  <Info className="w-4 h-4 text-[#C8741F] shrink-0 mt-0.5" />
                  <p>
                    Exact blend percentages, GSM weights, yarn count, width, finish, and MOQ are developed according to your buyer tech pack. Confirm specifications directly with our technical team in Tiruppur.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[12px] text-[#78716C]">
                Ready to review swatches or pricing?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/contact?type=samples&product=${encodeURIComponent(selectedProduct.name)}`}
                  className="flex-1 sm:flex-initial h-10 px-5 rounded-full border border-[#1F1F1F] bg-white hover:bg-[#FAF8F5] text-[13px] font-semibold text-[#1F1F1F] transition-all flex items-center justify-center"
                >
                  Request Swatch Kit
                </Link>
                <Link
                  href={`/contact?type=quote&product=${encodeURIComponent(selectedProduct.name)}#quote`}
                  className="flex-1 sm:flex-initial h-10 px-6 rounded-full bg-[#1F1F1F] hover:bg-black text-[13px] font-semibold text-white transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

