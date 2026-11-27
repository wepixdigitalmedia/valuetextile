"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { NavDropdown } from "./NavDropdown";
import { ContactPill } from "./ContactPill";
import { siteConfig } from "@/config/siteContent";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>("Garments");
  const pathname = usePathname();
  // The mobile menu is open only for the page it was opened on, so it closes by itself on navigation.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const mobileMenuOpen = menuPath !== null && menuPath === pathname;
  const setMobileMenuOpen = (open: boolean) => setMenuPath(open ? pathname : null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          setIsScrolled(scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuPath(null);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleAccordion = (label: string) => {
    setExpandedGroup((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[76px] sm:h-[84px] md:h-[92px] lg:h-[98px] transition-[border-radius,background-color,border-color] duration-300 ease-out bg-[var(--white)] ${isScrolled
          ? "border-b border-[var(--line)] rounded-t-none"
          : "rounded-t-[26px] sm:rounded-t-[30px] border-t border-b border-[var(--line)]"
          }`}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Left: Hamburger Button (Mobile) + Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="size-10 -ml-1 inline-flex items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--black)] hover:border-[var(--black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] md:hidden cursor-pointer transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" strokeWidth={2.2} />
            </button>
            <Logo />
          </div>

          {/* Center: Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-7"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => (
              <NavDropdown
                key={item.label}
                label={item.label}
                href={item.href}
                items={item.dropdown}
              />
            ))}
          </nav>

          {/* Right: Contact Pill (Desktop & Mobile) */}
          <div className="flex items-center shrink-0">
            <ContactPill />
          </div>
        </Container>
      </header>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-100 md:hidden transition-visibility duration-300 ${mobileMenuOpen
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none"
          }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-[var(--black)]/50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        <aside
          data-lenis-prevent
          aria-label="Mobile Navigation Drawer"
          className={`fixed top-0 left-0 bottom-0 w-[86vw] max-w-[360px] bg-[var(--white)] border-r border-[var(--line)] flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Drawer Top Header */}
          <div className="h-[76px] px-5 flex items-center justify-between border-b border-[var(--line)] bg-[var(--white)] shrink-0">
            <div onClick={() => setMobileMenuOpen(false)}>
              <Logo />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="size-9 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--black)] hover:border-[var(--black)] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-4.5 h-4.5" strokeWidth={2.2} />
            </button>
          </div>

          {/* Scrollable Navigation List */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)] mb-3 px-2">
              <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)]" aria-hidden="true" />
              <span>Navigation</span>
            </p>

            <nav className="space-y-1.5" aria-label="Mobile Navigation">
              {siteConfig.navigation.map((item) => {
                const hasDropdown =
                  item.dropdown && item.dropdown.length > 0;
                const isExpanded = expandedGroup === item.label;
                const isActive =
                  pathname === item.href ||
                  item.dropdown?.some((sub) => pathname === sub.href);

                return (
                  <div
                    key={item.label}
                    className="rounded-[12px] border border-transparent transition-colors"
                  >
                    {hasDropdown ? (
                      <>
                        <div
                          className={`flex items-center justify-between rounded-[10px] px-3 py-2.5 transition-colors ${isActive
                            ? "bg-[var(--surface)] border-l-2 border-[var(--accent)] text-[var(--black)]"
                            : "hover:bg-[var(--surface)] text-[var(--black)]"
                            }`}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[16px] font-bold flex-1"
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleAccordion(item.label)}
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isExpanded}
                            className="size-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--line)]/50 cursor-pointer"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${isExpanded
                                ? "rotate-180 text-[var(--black)]"
                                : ""
                                }`}
                            />
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mt-1 ml-4 pl-3.5 border-l-2 border-[var(--accent)] space-y-1 py-1">
                            {item.dropdown!.map((sub) => {
                              const subActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block px-3 py-2 rounded-[8px] text-[14px] transition-colors ${subActive
                                    ? "bg-[var(--surface)] text-[var(--black)] font-bold"
                                    : "text-[var(--text-muted)] hover:text-[var(--black)] hover:bg-[var(--surface)]"
                                    }`}
                                >
                                  {sub.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-[10px] px-3 py-2.5 text-[16px] font-bold transition-colors ${isActive
                          ? "bg-[var(--surface)] border-l-2 border-[var(--accent)] text-[var(--black)]"
                          : "text-[var(--black)] hover:bg-[var(--surface)]"
                          }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Drawer Bottom Footer */}
          <div className="p-5 border-t border-[var(--line)] bg-[var(--surface)] space-y-4 shrink-0">
            <div className="space-y-1.5 text-xs text-[var(--black)]">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--black)]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--black)]" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <Link
                href="/contact#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 min-h-[48px] px-4 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] font-semibold text-xs uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center min-h-[48px] px-4 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] font-semibold text-xs uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
