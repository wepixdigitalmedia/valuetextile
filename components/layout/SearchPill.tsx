"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  CornerDownLeft,
  Sparkles,
  ExternalLink,
  Layers,
  Shirt,
  Cog,
  Building2,
  Zap,
} from "lucide-react";
import {
  searchSite,
  SUGGESTED_SEARCH_CHIPS,
  type SearchIndexItem,
  type SearchItemGroup,
} from "@/config/searchIndex";

function getGroupIcon(group: SearchItemGroup) {
  switch (group) {
    case "Quick Actions":
      return Zap;
    case "Garment Programs":
      return Shirt;
    case "Fabrics & Yarns":
      return Layers;
    case "Capabilities & Units":
      return Cog;
    case "Company & Quality":
    default:
      return Building2;
  }
}

export function SearchPill() {
  const router = useRouter();
  const barInputRef = useRef<HTMLInputElement>(null);
  const modalInputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => searchSite(query), [query]);

  // Append custom enquiry action whenever user has typed text
  const allItems = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return results;

    const customAction: SearchIndexItem = {
      id: "custom-enquiry-action",
      title: `Send bulk or sample enquiry for "${trimmed}"`,
      subtitle: "Pre-fill our Tiruppur export enquiry form with this requirement",
      group: "Quick Actions",
      href: `/contact?q=${encodeURIComponent(trimmed)}#quote`,
      badge: "Direct Enquiry",
      keywords: [],
    };
    return [...results, customAction];
  }, [results, query]);

  // Global Cmd+K / Ctrl+K shortcut & body scroll lock
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        modalInputRef.current?.focus();
      }, 30);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const executeItem = (item: SearchIndexItem) => {
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

  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (allItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % allItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = allItems[activeIndex] ?? allItems[0];
      if (target) executeItem(target);
    }
  };

  // Group results for structured visual display while preserving flat index lookup
  const groupedResults = useMemo(() => {
    const groups: { name: SearchItemGroup; items: { item: SearchIndexItem; flatIndex: number }[] }[] = [];
    const map = new Map<SearchItemGroup, { item: SearchIndexItem; flatIndex: number }[]>();

    allItems.forEach((item, flatIndex) => {
      const existing = map.get(item.group);
      if (existing) {
        existing.push({ item, flatIndex });
      } else {
        const arr = [{ item, flatIndex }];
        map.set(item.group, arr);
        groups.push({ name: item.group, items: arr });
      }
    });

    return groups;
  }, [allItems]);

  return (
    <>
      {/* ============================================================ */}
      {/* TOP BAR SEARCH TRIGGER PILL                                  */}
      {/* ============================================================ */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center w-full max-w-[380px] h-[42px] rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.09] hover:border-white/30 px-3 transition-all duration-200 focus-within:border-[#C8741F] focus-within:bg-white/[0.09] focus-within:ring-2 focus-within:ring-[#C8741F]/20 cursor-pointer select-none shadow-xs"
      >
        <div className="w-7 h-7 rounded-full bg-[#C8741F] text-white flex items-center justify-center shrink-0 mr-2 shadow-xs transition-transform duration-200 group-hover:scale-105">
          <Search className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
        </div>

        <input
          ref={barInputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          placeholder="Search products, bulk quotes, samples..."
          className="flex-1 bg-transparent border-none outline-hidden text-[13.5px] sm:text-[14px] text-white placeholder:text-white/60 font-body font-normal cursor-pointer"
          aria-label="Search products, bulk quotes, samples, or capabilities"
        />

        <div className="hidden sm:flex items-center gap-1.5 shrink-0 pl-2">
          <span className="flex items-center gap-1 rounded-[5px] border border-white/20 bg-white/[0.08] px-1.5 py-0.5 text-[11px] font-mono text-white/75 shadow-xs">
            <span className="text-[10px]">⌘</span>K
          </span>
        </div>
      </form>

      {/* ============================================================ */}
      {/* COMMAND PALETTE SEARCH & ACTION MODAL                        */}
      {/* ============================================================ */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-start justify-center pt-[8vh] sm:pt-[11vh] px-3 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Search Value Textiles"
        >
          {/* Blurred Scrim */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#14110E]/65 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <div
            data-lenis-prevent
            className="relative z-10 w-full max-w-[680px] rounded-[24px] bg-[#FFFDF9] border border-[#E6DFD3] shadow-[0_30px_90px_rgba(20,17,14,0.35)] overflow-hidden text-[#1F1F1F]"
          >
            {/* Search Input Header */}
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 bg-white border-b border-[#EAE3D8]">
              <div className="w-8 h-8 rounded-full bg-[#C8741F] text-white flex items-center justify-center shrink-0">
                <Search className="w-4 h-4" strokeWidth={2.4} />
              </div>

              <input
                ref={modalInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleModalKeyDown}
                placeholder="Search products, bulk quotes, samples, dyeing, ZLD, about, contact..."
                className="flex-1 bg-transparent border-none outline-hidden text-[15px] sm:text-[16px] text-[#111111] placeholder:text-[#8E857B] font-body"
                autoComplete="off"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    modalInputRef.current?.focus();
                  }}
                  className="px-2.5 py-1 rounded-full bg-[#FAF4EA] text-[#8C531B] hover:bg-[#F3E7D3] text-[11px] font-semibold cursor-pointer transition-colors"
                >
                  Clear
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close search"
                className="size-8 rounded-full border border-[#E6DFD3] bg-[#FAF6EE] hover:border-[#C8741F] text-[#554F47] flex items-center justify-center cursor-pointer transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 sm:px-5 py-2.5 bg-[#FAF6EE]/80 border-b border-[#EAE3D8] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#9A9086] shrink-0 mr-1">
                Try:
              </span>
              {SUGGESTED_SEARCH_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setQuery(chip);
                    modalInputRef.current?.focus();
                  }}
                  className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                    query.toLowerCase() === chip.toLowerCase()
                      ? "bg-[#1F1F1F] text-white border-[#1F1F1F]"
                      : "bg-white text-[#4A433C] border-[#E4DDD3] hover:border-[#C8741F] hover:text-[#C8741F]"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="max-h-[56vh] overflow-y-auto p-3 sm:p-4 space-y-4">
              {groupedResults.map((group) => {
                const GroupIcon = getGroupIcon(group.name);
                return (
                  <div key={group.name} className="space-y-1.5">
                    <div className="flex items-center gap-1.5 px-2.5 text-[10.5px] font-mono font-bold uppercase tracking-[0.14em] text-[#8E857B]">
                      <GroupIcon className="w-3.5 h-3.5 text-[#C8741F]" />
                      <span>{group.name}</span>
                    </div>

                    <div className="space-y-1">
                      {group.items.map(({ item, flatIndex }) => {
                        const isSelected = flatIndex === activeIndex;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onMouseEnter={() => setActiveIndex(flatIndex)}
                            onClick={() => executeItem(item)}
                            className={`w-full text-left flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-[#FAF4EA] border-[#C8741F]/45 shadow-2xs"
                                : "bg-transparent border-transparent hover:bg-[#FAF6EE]"
                            }`}
                          >
                            <div className="min-w-0 flex-1 space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-heading text-[14px] sm:text-[14.5px] font-bold truncate ${
                                    isSelected
                                      ? "text-[#111111]"
                                      : "text-[#1F1F1F]"
                                  }`}
                                >
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-white border border-[#E6DFD3] font-mono text-[10px] font-semibold text-[#8C531B]">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="font-body text-xs text-[#6B645C] truncate">
                                {item.subtitle}
                              </p>
                            </div>

                            <span
                              className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "bg-[#C8741F] text-white"
                                  : "bg-[#F3EDE3] text-[#6B645C]"
                              }`}
                            >
                              {item.external ? (
                                <ExternalLink className="w-3.5 h-3.5" />
                              ) : item.id === "custom-enquiry-action" ? (
                                <Sparkles className="w-3.5 h-3.5" />
                              ) : (
                                <ArrowRight className="w-3.5 h-3.5" />
                              )}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Keyboard Hints Footer */}
            <div className="px-4 sm:px-5 py-2.5 bg-white border-t border-[#EAE3D8] flex items-center justify-between text-[11px] font-mono text-[#8E857B]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[#FAF6EE] border border-[#E6DFD3] text-[#1F1F1F]">
                    ↑↓
                  </kbd>{" "}
                  Navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#FAF6EE] border border-[#E6DFD3] text-[#1F1F1F]">
                    <CornerDownLeft className="w-2.5 h-2.5" />
                  </kbd>{" "}
                  Go / Trigger
                </span>
              </div>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-[#FAF6EE] border border-[#E6DFD3] text-[#1F1F1F]">
                  ESC
                </kbd>{" "}
                Close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
