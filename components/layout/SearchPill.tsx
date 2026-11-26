"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, ExternalLink } from "lucide-react";
import { searchSite, type SearchIndexItem } from "@/config/searchIndex";

const QUICK_POPULAR_LINKS: { label: string; href: string }[] = [
  { label: "T-Shirts & Polos", href: "/garments/t-shirts-and-polos" },
  { label: "Kids & Baby Wear", href: "/garments/kids-and-baby-wear" },
  { label: "Fabrics & Yarns", href: "/products" },
  { label: "Request Bulk Quote", href: "/contact#quote" },
  { label: "Order Samples", href: "/contact?type=samples#quote" },
  { label: "Dyeing & Knitting", href: "/capabilities" },
];

export function SearchPill() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchSite(query).slice(0, 6);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navigateToItem = (item: SearchIndexItem) => {
    setIsOpen(false);
    setQuery("");
    if (item.external) {
      if (item.href.startsWith("tel:") || item.href.startsWith("mailto:")) {
        window.location.href = item.href;
      } else {
        window.open(item.href, "_blank", "noopener,noreferrer");
      }
      return;
    }
    router.push(item.href);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setIsOpen(true);
      inputRef.current?.focus();
      return;
    }
    if (results.length > 0) {
      navigateToItem(results[0]);
      return;
    }
    setIsOpen(false);
    setQuery("");
    router.push(`/contact?q=${encodeURIComponent(trimmed)}#quote`);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[380px]">
      <form
        onSubmit={handleSubmit}
        className="group relative flex items-center w-full h-[42px] rounded-full border border-[var(--line)] bg-[var(--white)] px-2.5 transition-colors duration-200 focus-within:border-[var(--black)] focus-within:ring-2 focus-within:ring-[var(--accent)]/20"
      >
        <button
          type="submit"
          aria-label="Search"
          className="w-7 h-7 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] flex items-center justify-center shrink-0 mr-2.5 transition-colors cursor-pointer"
        >
          <Search className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          placeholder="Search products, bulk quote, samples..."
          className="flex-1 min-w-0 bg-transparent border-none outline-hidden text-[13.5px] sm:text-[14px] text-[var(--black)] placeholder:text-[var(--text-muted)] font-sans"
          aria-label="Search Value Textiles"
          autoComplete="off"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="w-6 h-6 rounded-full text-[var(--text-muted)] hover:text-[var(--black)] hover:bg-[var(--surface)] flex items-center justify-center shrink-0 cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-[min(92vw,440px)] rounded-[12px] bg-[var(--white)] border border-[var(--line)] shadow-sm text-[var(--black)] z-[80] overflow-hidden">
          {!query.trim() ? (
            <div className="p-4 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
                Quick Access
              </p>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_POPULAR_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-[8px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] text-[13px] font-medium text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="truncate">{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="divide-y divide-[var(--line)]">
              {results.length > 0 ? (
                <div className="p-2 space-y-0.5 max-h-[340px] overflow-y-auto">
                  {results.map((item) => {
                    const rowContent = (
                      <>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[14px] text-[var(--black)] group-hover:text-[var(--accent)] truncate transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-[var(--text-muted)] truncate">
                            {item.subtitle}
                          </p>
                        </div>
                        <span className="shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-muted)] group-hover:text-[var(--accent)]">
                          {item.badge && (
                            <span className="px-2 py-0.5 border border-[var(--line)] rounded-full">
                              {item.badge}
                            </span>
                          )}
                          {item.external ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                        </span>
                      </>
                    );

                    return item.external ? (
                      <a
                        key={item.id}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                        className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[var(--surface)] transition-colors"
                      >
                        {rowContent}
                      </a>
                    ) : (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                        className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[var(--surface)] transition-colors"
                      >
                        {rowContent}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 text-sm text-[var(--text-muted)]">
                  No exact page found for{" "}
                  <strong className="text-[var(--black)]">&ldquo;{query}&rdquo;</strong>.
                </div>
              )}

              <div className="p-2 bg-[var(--surface)] flex flex-col sm:flex-row gap-1.5">
                <Link
                  href={`/contact?q=${encodeURIComponent(query.trim())}#quote`}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="flex-1 flex items-center justify-between gap-2 px-3 py-2 rounded-[8px] bg-[var(--white)] border border-[var(--line)] hover:border-[var(--black)] text-xs font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                >
                  <span className="truncate">
                    Send enquiry for &ldquo;{query.trim()}&rdquo;
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
