import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Knitting, dyeing, fabric lab, inspection, garment stitching and packing in our own units in Tiruppur and Perundurai. Only yarn is bought in.",
};

const STAGES = [
  {
    number: "01",
    title: "Knitting",
    href: "/capabilities/knitting-division",
    stat: "2 shifts a day",
    text: "Mayer & Cie circular knitting: single jersey, rib, interlock, striper, mini jacquard and Lycra jersey.",
    place: "SIDCO, Tiruppur",
  },
  {
    number: "02",
    title: "Dyeing",
    href: "/capabilities/dyeing-division",
    stat: "25 to 1,500 kg batches",
    text: "Soft-flow dyeing with SETEX and ORGATEX control, a colour lab, finishing and an effluent plant that recycles water and salt.",
    place: "SIPCOT, Perundurai",
  },
  {
    number: "03",
    title: "Fabric lab and inspection",
    href: "/capabilities/fabric-division",
    stat: "11 lab tests",
    text: "Every lot tested, then graded under the 4-point and 10-point systems before cutting or despatch.",
    place: "Tiruppur",
  },
  {
    number: "04",
    title: "Garments",
    href: "/capabilities/garment-manufacturing",
    stat: "60,000+ garments a month",
    text: "Cutting, stitching, finishing and export packing on our own lines, from our own fabric.",
    place: "Parapalayam, Tiruppur",
  },
];

const PHOTOS = [
  { n: 15, alt: "Exterior of a Value Textiles unit in Tiruppur" },
  { n: 12, alt: "Operator at a fabric inspection machine" },
  { n: 14, alt: "Operator at a cutting table with fabric and pattern pieces" },
  { n: 8, alt: "Stacked bundles of white fabric in storage" },
  { n: 11, alt: "Hands trimming white knitted fabric with scissors" },
  { n: 10, alt: "Operator at a fabric processing station under inspection light" },
  { n: 5, alt: "Sewing machine stitching a maroon garment" },
  { n: 3, alt: "Cones of cotton yarn" },
];

export default function CapabilitiesPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>CAPABILITIES</span>
            </p>
            <h1 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              Every stage after yarn, <span className="text-[var(--accent)]">under one roof.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              Yarn is bought in and tested. Knitting, dyeing, the fabric lab, stitching and packing are run by our own
              teams across units in Tiruppur and Perundurai, so one company answers for the result.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact#quote"
                className="group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                <span>Get a quote</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
              <Link
                href="/contact?type=samples#quote"
                className="inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                Request samples
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <p className="text-[13px] font-semibold text-[var(--text-muted)]">
            Start: vetted yarn is bought from outside mills and tested by us before it enters knitting.
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {STAGES.map((s) => (
              <Link
                key={s.number}
                href={s.href}
                className="group flex flex-col justify-between rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6 sm:p-7 hover:border-[var(--black)] transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[13px] font-bold text-[var(--accent)]">{s.number}</span>
                    <span className="text-[12px] font-semibold text-[var(--text-muted)]">{s.place}</span>
                  </div>
                  <h2 className="mt-3 text-[24px] sm:text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-[34px] font-extrabold leading-none tracking-[-0.02em] text-[var(--black)]">
                    {s.stat}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.6] text-[var(--text-muted)]">{s.text}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                  See this stage
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[15px] text-[var(--text-muted)]">
            Need fabric only? We take fabric and yarn-dyed fabric orders on request.{" "}
            <Link
              href="/capabilities/fabric-division"
              className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              See what we knit and dye
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
            Inside our units
          </h2>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PHOTOS.map((p) => (
              <div
                key={p.n}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--white)]"
              >
                <Image
                  src={`https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/${p.n}.webp`}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Tell us what you need made.
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                A merchandiser replies within 24 working hours with costing and a sampling plan.
              </p>
            </div>
            <Link
              href="/contact#quote"
              className="group inline-flex w-fit shrink-0 items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors"
            >
              <span>Get a quote</span>
              <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
