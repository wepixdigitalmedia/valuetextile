import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Tiruppur } from "../ui/Tiruppur";
import { ArrowRight } from "lucide-react";

interface DivisionCard {
  number: string;
  name: string;
  stat: string;
  statLabel: string;
  text: string;
  href: string;
}

const DIVISIONS: DivisionCard[] = [
  {
    number: "01",
    name: "Knitting",
    stat: "2 shifts",
    statLabel: "Mayer & Cie circular knitting, every day",
    text: "Single jersey, rib, interlock, striper, mini jacquard and Lycra jersey, knitted from yarn we have tested.",
    href: "/capabilities/knitting-division",
  },
  {
    number: "02",
    name: "Dyeing",
    stat: "1,500 kg",
    statLabel: "largest soft-flow batch",
    text: "Seven machine sizes from 25 kg to 1,500 kg, so a sample lot and a bulk lot are dyed in the same house.",
    href: "/capabilities/dyeing-division",
  },
  {
    number: "03",
    name: "Fabric lab and finishing",
    stat: "250+ tons",
    statLabel: "fabric a month",
    text: "Stenter and tubular finishing, lab testing and 4-point inspection before any fabric is cut.",
    href: "/capabilities/fabric-division",
  },
  {
    number: "04",
    name: "Garments",
    stat: "60,000+",
    statLabel: "garments a month",
    text: "Cutting, stitching, finishing and export packing on our own lines, to your tech pack.",
    href: "/capabilities/garment-manufacturing",
  },
];

export function FullChainSection() {
  return (
    <section className="relative w-full bg-[var(--surface)] py-16 lg:py-24 overflow-hidden border-t border-b border-[var(--line)]">
      <Container className="space-y-12 lg:space-y-16">
        {/* TOP BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-3 flex lg:flex-col justify-between items-start gap-4">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[var(--accent)] uppercase"><span>
                KNIT TO PACKED · <Tiruppur />
              </span>
            </p>

          </div>

          <div className="lg:col-span-9 flex flex-col space-y-6 sm:space-y-7">
            <h2 className="font-extrabold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[50px] leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              One team runs the whole chain, from{" "}
              <span className="text-[var(--accent)]">knit</span> to packed carton.
            </h2>

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-8 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center items-start gap-3.5 sm:gap-4 max-w-[500px]">
                <div
                  className="flex -space-x-3 shrink-0"
                  aria-label="Production and export leadership team"
                >
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-[var(--white)] bg-[var(--surface)]">
                    <Image
                      src="/images/team-1.webp"
                      alt="Export Manager"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-[var(--white)] bg-[var(--surface)]">
                    <Image
                      src="/images/team-2.webp"
                      alt="Merchandiser"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-[44px] sm:size-[48px] rounded-full overflow-hidden border-2 border-[var(--white)] bg-[var(--surface)]">
                    <Image
                      src="/images/team-3.webp"
                      alt="Quality Head"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-[15px] sm:text-[16px] text-[var(--text-muted)] leading-[1.6]">
                  Based in <Tiruppur />, we buy vetted yarn and test it ourselves. Knitting, dyeing, finishing, lab testing, garmenting and packing then stay in our own units, so one team decides shade, fit and dates.
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 xl:shrink-0">
                <Link
                  href="#quote"
                  className="group inline-flex items-center justify-between gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  <span>Get a quote</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>

                <Link
                  href="/capabilities"
                  className="group inline-flex items-center justify-between gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full border-[1.5px] border-[var(--black)] bg-transparent hover:bg-[var(--black)] text-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  <span>See all capabilities</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--black)] text-[var(--white)] group-hover:bg-[var(--white)] group-hover:text-[var(--black)] flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DIVISION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIVISIONS.map((d) => (
            <Link
              key={d.number}
              href={d.href}
              className="group flex flex-col justify-between rounded-[12px] bg-[var(--white)] border border-[var(--line)] p-6 hover:border-[var(--black)] transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[13px] font-bold text-[var(--accent)]">{d.number}</span>
                  <span className="text-[13px] font-semibold text-[var(--black)] text-right">{d.name}</span>
                </div>
                <p className="mt-6 sm:mt-8 text-[32px] sm:text-[40px] xl:text-[44px] font-extrabold leading-none tracking-[-0.02em] text-[var(--black)]">
                  {d.stat}
                </p>
                <p className="mt-1.5 text-[13px] font-medium text-[var(--text-muted)]">{d.statLabel}</p>
                <p className="mt-5 text-[15px] leading-[1.6] text-[var(--text-muted)]">{d.text}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                See this division
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </span>
            </Link>
          ))}
        </div>

        <p className="text-[15px] text-[var(--text-muted)] max-w-3xl">
          Only yarn is bought in. We test every lot ourselves before it reaches the knitting floor.
        </p>
      </Container>
    </section>
  );
}
