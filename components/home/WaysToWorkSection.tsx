"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ImageSlot } from "../ui/ImageSlot";
import { ArrowRight } from "lucide-react";

interface WayToWork {
  id: "full-package" | "cut-and-make" | "custom";
  number: string;
  title: string;
  bestFor: string;
  points: string[];
  slotLabel: string;
  slotHint: string;
  imageSrc: string;
  imageAlt: string;
}

const WAYS: WayToWork[] = [
  {
    id: "full-package",
    number: "01",
    title: "Full package",
    bestFor: "You send a tech pack or sample. We deliver finished garments.",
    points: [
      "Our own knitted and dyed fabric",
      "Sampling, production, inspection, shipping",
      "One price, one delivery date",
    ],
    imageSrc: "/images/home/ways-full-package.webp",
    imageAlt: "Finished knitwear garments folded, tagged and boxed on a packing table",
    slotLabel: "Full package",
    slotHint: "Finished garments from one of your orders: folded, tagged and boxed, with our fabric visible.",
  },
  {
    id: "cut-and-make",
    number: "02",
    title: "Cut and make",
    bestFor: "You already have the fabric and trims. We cut and stitch.",
    points: [
      "Your fabric, cut to your patterns",
      "In-line checks and final garment inspection",
      "Packed to your labelling and carton rules",
    ],
    imageSrc: "/images/home/ways-cut-and-make.webp",
    imageAlt: "Knitted fabric lays being cut on a cutting table",
    slotLabel: "Cut and make",
    slotHint: "Cutting table or stitching line working on buyer-supplied fabric.",
  },
  {
    id: "custom",
    number: "03",
    title: "Something else",
    bestFor: "A different style, volume or request. Tell us what you need.",
    points: [
      "Your size sets and tech packs",
      "Fabric-only or yarn-dyed fabric orders on request",
      "We reply with what is possible and what it costs",
    ],
    imageSrc: "/images/home/ways-something-else.webp",
    imageAlt: "Custom garment sample with a spec sheet and fabric swatches on a merchandiser's desk",
    slotLabel: "Something else",
    slotHint: "Tech pack and sample on the merchandising desk, or a fabric-only order being prepared.",
  },
];

function chooseWay(id: WayToWork["id"]) {
  window.dispatchEvent(new CustomEvent("vt:choose-way", { detail: { id } }));
}

export function WaysToWorkSection() {
  return (
    <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>HOW TO ORDER</span>
          </p>
          <h2 className="mt-3 text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
            Three ways to start. Pick the one that fits.
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WAYS.map((way) => (
            <div
              key={way.id}
              className="flex flex-col rounded-[12px] border border-[var(--line)] bg-[var(--white)] overflow-hidden"
            >
              <ImageSlot
                label={way.slotLabel}
                hint={way.slotHint}
                desktop={{ w: 800, h: 500, src: way.imageSrc }}
                mobile={{ w: 800, h: 500, src: way.imageSrc }}
                alt={way.imageAlt}
                bleed
              />

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[13px] font-bold text-[var(--accent)]">{way.number}</p>
                <h3 className="mt-1 text-[24px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                  {way.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">{way.bestFor}</p>

                <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-5">
                  {way.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[14.5px] leading-[1.5] text-[var(--black)]">
                      <span className="mt-[6px] size-1.5 shrink-0 bg-[var(--accent)]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  onClick={() => chooseWay(way.id)}
                  className="group mt-auto pt-6 inline-flex"
                >
                  <span className="inline-flex w-full items-center justify-between gap-3 min-h-[48px] pl-6 pr-1.5 py-1 rounded-full bg-[var(--accent)] group-hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors">
                    <span>Get a quote</span>
                    <span className="size-9 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[15px] text-[var(--text-muted)]">
          Want the full process, from first message to shipment?{" "}
          <Link
            href="/how-to-order"
            className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
          >
            See how to order
          </Link>
        </p>
      </Container>
    </section>
  );
}
