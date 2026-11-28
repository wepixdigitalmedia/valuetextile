import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { isConfirmed } from "@/config/ownerFacts";
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
    // Recycling and ZLD are only claimed once the owner confirms (ownerFacts.zldStatus).
    text: isConfirmed("zldStatus")
      ? "Soft-flow dyeing with SETEX and ORGATEX control, a colour lab, finishing and an effluent plant that recycles water and salt."
      : "Soft-flow dyeing with SETEX and ORGATEX control, a colour lab, finishing and our own effluent treatment plant.",
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

const PROOF = [
  { v: "Own units", l: "Tiruppur and Perundurai" },
  { v: "OEKO-TEX, GOTS, OCS", l: "Certificate numbers on the Quality page", href: "/quality" },
  { v: "24 working hours", l: "Merchandiser reply to every enquiry" },
];

const PHOTOS = [
  { n: 15, alt: "Exterior of a Value Textiles unit in Tiruppur" },
  { n: 12, alt: "Operator at a fabric inspection machine" },
  { n: 14, alt: "Operator at a cutting table with fabric and pattern pieces" },
  { n: 5, alt: "Sewing machine stitching a maroon garment" },
];

const primaryBtn =
  "group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";
const secondaryBtn =
  "inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";

export default function CapabilitiesPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO: text only, one clear action */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
              <span>CAPABILITIES</span>
            </p>
            <h1 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              Every stage after yarn, <span className="text-[var(--accent)]">under one roof.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              Knitting, dyeing, the fabric lab and stitching are run by our own teams, so one company answers for the
              result.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/contact#quote" className={primaryBtn}>
                <span>Get a quote</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
              <Link href="/contact?type=samples#quote" className={secondaryBtn}>
                Request samples
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* THE FOUR STAGES: text cards, each one a link */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
            Four stages, all in our own units
          </h2>
          <p className="mt-2 text-[15px] text-[var(--text-muted)]">
            Yarn is bought in and tested by us before it enters knitting.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {STAGES.map((s) => (
              <Link
                key={s.number}
                href={s.href}
                className="group flex flex-col justify-between rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6 hover:border-[var(--black)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13px] font-bold text-[var(--accent)]">{s.number}</span>
                    <span className="text-[12px] font-semibold text-[var(--text-muted)] text-right">{s.place}</span>
                  </div>
                  <h3 className="mt-3 text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[18px] font-extrabold leading-[1.2] text-[var(--black)]">{s.stat}</p>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">{s.text}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                  See this stage
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[14.5px] text-[var(--text-muted)]">
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

      {/* PROOF: three facts, no paragraphs */}
      <section className="w-full bg-[var(--surface)] py-10 lg:py-12 border-b border-[var(--line)]">
        <Container>
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-px overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--line)]">
            {PROOF.map((p) => (
              <div key={p.v} className="bg-[var(--white)] px-5 py-5">
                <dt className="text-[12px] font-semibold text-[var(--text-muted)]">{p.l}</dt>
                <dd className="mt-1 text-[20px] sm:text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                  {p.href ? (
                    <Link href={p.href} className="hover:text-[var(--accent)] transition-colors">
                      {p.v}
                    </Link>
                  ) : (
                    p.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* QUOTE: the page's one conversion block */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Send us your style. We will quote it.
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                Share a tech pack or an idea. A merchandiser replies within 24 working hours with costing and a sampling
                plan.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link href="/contact#quote" className={primaryBtn}>
                <span>Get a quote</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
              <Link href="/how-to-order" className={secondaryBtn}>
                How to order
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* PHOTOS: four small real photos, nothing to fill in */}
      <section className="w-full bg-[var(--white)] py-12 lg:py-16">
        <Container>
          <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Inside our units
          </h2>
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PHOTOS.map((p) => (
              <div
                key={p.n}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--surface)]"
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
    </main>
  );
}
