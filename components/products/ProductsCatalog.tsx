"use client";

import React, { useState, useMemo, useEffect } from "react";
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

  // Apply URL filters when navigated from header search (e.g. /products?category=fabric&search=jersey)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category")?.toLowerCase();
    const q = params.get("search");
    if (cat === "fabric") setActiveCategory("Fabric");
    else if (cat === "yarn") setActiveCategory("Yarn");
    else if (cat === "garments") setActiveCategory("Garments");
    if (q) setSearchQuery(q);
  }, []);

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
      <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[12px] p-4 sm:p-6 space-y-4">
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
                  className={`px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] ${
                    isActive
                      ? "bg-[var(--black)] text-[var(--white)]"
                      : "bg-[var(--white)] text-[var(--black)] border border-[var(--line)] hover:border-[var(--black)]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[var(--accent)] text-[var(--on-accent)]"
                        : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--line)]"
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
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, blends, specs..."
              className="w-full h-11 pl-10 pr-9 rounded-full bg-[var(--white)] border border-[var(--line)] text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/30 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--black)]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Status / Active Filter Bar */}
        <div className="flex items-center justify-between text-[13px] text-[var(--text-muted)] pt-2 border-t border-[var(--line)]">
          <span>
            Showing <strong className="text-[var(--black)]">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} products
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
        <div className="text-center py-20 bg-[var(--surface)] rounded-[12px] border border-dashed border-[var(--line)] space-y-4">
          <SlidersHorizontal className="w-8 h-8 text-[var(--accent)] mx-auto" />
          <h3 className="text-[20px] font-bold text-[var(--black)]">No products match your search</h3>
          <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
            Try resetting your search query or selecting a different product category.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="min-h-[48px] px-6 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-sm font-semibold cursor-pointer transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-[var(--white)] rounded-[12px] border border-[var(--line)] overflow-hidden hover:border-[var(--black)] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 1:1 Square Product Image */}
                <div className="relative aspect-square w-full bg-[var(--surface)] overflow-hidden">
                  <Image
                    src={product.coverImage}
                    alt={product.altText || product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge (Top Left) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[11px] uppercase tracking-[0.14em] font-bold px-2.5 py-1 rounded-full bg-[var(--white)] border border-[var(--line)] text-[var(--black)]">
                      {product.category}
                    </span>
                  </div>

                  {/* Quick Inspect Button (Top Right) */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[var(--white)] border border-[var(--line)] text-[var(--black)] flex items-center justify-center hover:bg-[var(--black)] hover:text-[var(--white)] transition-colors cursor-pointer"
                    title="View specifications"
                    aria-label={`View specifications for ${product.name}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs text-[var(--accent)] font-bold uppercase tracking-[0.14em]">
                      {product.productType}
                    </p>
                    <h3 className="font-bold text-[18px] text-[var(--black)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                    {product.cardDescription}
                  </p>

                  {/* Micro Specs List */}
                  <div className="pt-2 border-t border-[var(--line)] space-y-1.5 text-[12px]">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[var(--text-muted)] shrink-0">Composition:</span>
                      <span className="text-[var(--black)] font-medium text-right line-clamp-1">
                        {product.composition}
                      </span>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                      <span className="text-[var(--text-muted)]">MOQ:</span>
                      <span className="text-[var(--black)] font-semibold text-[11px] px-2 py-0.5 rounded-full border border-[var(--line)]">
                        {product.moq}
                      </span>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-[var(--text-muted)] border border-[var(--line)] px-2 py-0.5 rounded-md"
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
                  className="w-full h-10 rounded-full border-[1.5px] border-[var(--black)] bg-transparent hover:bg-[var(--black)] hover:text-[var(--white)] text-xs font-semibold text-[var(--black)] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  View Specs
                </button>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}#quote`}
                  className="w-full h-10 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-xs font-semibold text-[var(--on-accent)] transition-colors flex items-center justify-center gap-1.5 group/btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[var(--white)] rounded-[12px] overflow-hidden flex flex-col max-h-[92vh] border border-[var(--line)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[var(--line)] flex items-center justify-between bg-[var(--surface)]">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--black)] bg-[var(--white)] border border-[var(--line)] px-2.5 py-0.5 rounded-full font-bold">
                  {selectedProduct.category} Specifications
                </span>
                <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
                  Direct production in <Tiruppur />
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="w-9 h-9 rounded-full bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--black)] hover:border-[var(--black)] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-5 sm:p-8 flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* 1:1 Product Image */}
                <div className="md:col-span-5 relative aspect-square rounded-[12px] overflow-hidden bg-[var(--surface)] border border-[var(--line)]">
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
                    <span className="text-xs uppercase tracking-[0.14em] text-[var(--accent)] font-bold">
                      {selectedProduct.productType}
                    </span>
                    <h2 className="font-extrabold text-[24px] sm:text-[28px] text-[var(--black)] leading-[1.1] tracking-[-0.02em] pt-1">
                      {selectedProduct.name}
                    </h2>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 pt-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--black)] font-bold">
                      Key Capabilities:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[var(--black)]">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="bg-[var(--surface)] rounded-[12px] border border-[var(--line)] p-5 space-y-3">
                <h4 className="font-bold text-[15px] text-[var(--black)]">
                  Production Specifications Summary
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                  <div className="flex justify-between p-2.5 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                    <span className="text-[var(--text-muted)]">Composition:</span>
                    <span className="font-medium text-[var(--black)] text-right">{selectedProduct.composition}</span>
                  </div>

                  {selectedProduct.construction && (
                    <div className="flex justify-between p-2.5 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                      <span className="text-[var(--text-muted)]">Construction:</span>
                      <span className="font-medium text-[var(--black)]">{selectedProduct.construction}</span>
                    </div>
                  )}

                  {selectedProduct.yarnCount && (
                    <div className="flex justify-between p-2.5 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                      <span className="text-[var(--text-muted)]">Yarn Count:</span>
                      <span className="font-medium text-[var(--black)]">{selectedProduct.yarnCount}</span>
                    </div>
                  )}

                  {selectedProduct.garmentType && (
                    <div className="flex justify-between p-2.5 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                      <span className="text-[var(--text-muted)]">Garment Type:</span>
                      <span className="font-medium text-[var(--black)]">{selectedProduct.garmentType}</span>
                    </div>
                  )}

                  <div className="flex justify-between p-2.5 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                    <span className="text-[var(--text-muted)]">Weight / GSM:</span>
                    <span className="font-semibold text-[var(--black)]">{selectedProduct.weightGsm}</span>
                  </div>

                  <div className="flex justify-between p-2.5 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                    <span className="text-[var(--text-muted)]">MOQ:</span>
                    <span className="font-semibold text-[var(--black)]">{selectedProduct.moq}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 text-xs text-[var(--text-muted)]">
                  <Info className="w-4 h-4 text-[var(--black)] shrink-0 mt-0.5" />
                  <p>
                    Exact blend percentages, GSM weights, yarn count, width, finish, and MOQ are developed according to your buyer tech pack. Confirm specifications directly with our technical team in Tiruppur.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-[var(--surface)] border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[var(--text-muted)]">
                Ready to review swatches or pricing?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/contact?type=samples&product=${encodeURIComponent(selectedProduct.name)}`}
                  className="flex-1 sm:flex-initial min-h-[48px] px-5 rounded-full border-[1.5px] border-[var(--black)] bg-transparent hover:bg-[var(--black)] hover:text-[var(--white)] text-sm font-semibold text-[var(--black)] transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  Request Swatch Kit
                </Link>
                <Link
                  href={`/contact?type=quote&product=${encodeURIComponent(selectedProduct.name)}#quote`}
                  className="flex-1 sm:flex-initial min-h-[48px] px-6 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-sm font-semibold text-[var(--on-accent)] transition-colors flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
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

