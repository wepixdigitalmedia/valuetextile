import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Fact } from "@/components/ui/Fact";
import { CompanyProfile } from "@/components/ui/CompanyProfile";
import { BrandStrip } from "@/components/home/TrustStatsAndLogosSection";
import { siteConfig } from "@/config/siteContent";
import { factValue } from "@/config/ownerFacts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Value Textiles has made knitwear in Tiruppur, India for more than 20 years. We buy yarn, then knit, dye, test, stitch and pack in our own three units for international brands.",
};

const IK = "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure";

const UNITS = [
  {
    title: "Garment unit",
    place: "Parapalayam, Tiruppur",
    text: "Cutting, stitching, finishing and export packing. This is also our registered office.",
    href: "/capabilities/garment-manufacturing",
  },
  {
    title: "Knitting unit",
    place: "SIDCO, Tiruppur",
    text: "Mayer & Cie circular knitting machines running two shifts a day.",
    href: "/capabilities/knitting-division",
  },
  {
    title: "Dyeing unit",
    place: "SIPCOT, Perundurai",
    text: "Soft-flow dyeing, finishing, colour lab and the effluent treatment plant.",
    href: "/capabilities/dyeing-division",
  },
];

const PHOTOS = [
  { n: 12, alt: "Operator at a fabric inspection machine" },
  { n: 8, alt: "Stacked bundles of white fabric in storage" },
  { n: 11, alt: "Hands trimming white knitted fabric with scissors" },
  { n: 14, alt: "Operator at a cutting table with fabric and pattern pieces" },
];

export default function AboutPage() {
  const { contact } = siteConfig;
  const story = factValue("companyStory");
  const leadership = factValue("leadership");
  const registration = factValue("registration");

  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>ABOUT VALUE TEXTILES</span>
              </p>
              <h1 className="mt-3 text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
                A Tiruppur knitwear maker that{" "}
                <span className="text-[var(--accent)]">runs its own chain.</span>
              </h1>
              <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
                We have made knitwear in Tiruppur for more than 20 years. We buy yarn, then knit, dye, test, stitch and
                pack in our own units for international brands.
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

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--white)]">
                <Image
                  src={`${IK}/15.webp`}
                  alt="Exterior of a Value Textiles unit in Tiruppur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--line)]">
            {[
              { v: "20+", l: "Years making knitwear" },
              { v: "40+", l: "Buyers worldwide" },
              { v: "3", l: "Units in Tiruppur and Perundurai" },
              { v: "60,000+", l: "Garments a month" },
            ].map((s) => (
              <div key={s.l} className="bg-[var(--white)] px-5 py-5">
                <dt className="text-[12px] font-semibold text-[var(--text-muted)]">{s.l}</dt>
                <dd className="mt-1 text-[24px] sm:text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                A manufacturer, <span className="text-[var(--accent)]">not a middleman.</span>
              </h2>
              {story && <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-muted)]">{story}</p>}
              <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-muted)]">
                We make T-shirts and polos, kids and baby wear, men&apos;s and women&apos;s knitwear, and activewear and
                loungewear. There is no sourcing agent between you and the factory: the team that quotes your order is
                the team that runs the units.
              </p>
            </div>

            <ol className="lg:col-span-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {[
                ["Our own chain", "Only yarn is bought in, and we test it first. Knitting, dyeing, the fabric lab, stitching and packing are all in our own units."],
                ["Tested at every stage", "Yarn tests, an 11-test fabric lab, 4-point and 10-point inspection, and certificates with numbers you can check."],
                ["One accountable team", "One merchandiser from sample to shipment, one standard for fabric and garment, one delivery date."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-5 py-5">
                  <span className="text-[13px] font-bold text-[var(--accent)] pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[19px] font-bold text-[var(--black)]">{title}</h3>
                    <p className="mt-1 text-[15px] leading-[1.6] text-[var(--text-muted)]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* UNITS */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
            Three units, one team
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {UNITS.map((u) => (
              <Link
                key={u.title}
                href={u.href}
                className="group flex flex-col justify-between rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6 hover:border-[var(--black)] transition-colors"
              >
                <div>
                  <p className="text-[12px] font-semibold text-[var(--text-muted)]">{u.place}</p>
                  <h3 className="mt-1 text-[22px] font-extrabold tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">{u.text}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                  See this unit <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PHOTOS.map((p) => (
              <div
                key={p.n}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--white)]"
              >
                <Image
                  src={`${IK}/${p.n}.webp`}
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

      {/* LEADERSHIP (only when the owner supplies it) */}
      {leadership && (
        <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <h2 className="lg:col-span-5 text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                The people behind it
              </h2>
              <p className="lg:col-span-7 text-[16px] leading-[1.65] text-[var(--text-muted)]">{leadership}</p>
            </div>
          </Container>
        </section>
      )}

      {/* BRANDS + CERTIFICATES */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container className="space-y-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>Brands we make for</span>
          </p>
          <BrandStrip />
          <p className="text-[15px] text-[var(--text-muted)]">
            Certified to OEKO-TEX Standard 100 Class 1, GOTS and OCS, with BCI and GRS programmes.{" "}
            <Link
              href="/quality"
              className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              See certificate numbers
            </Link>
          </p>
        </Container>
      </section>

      {/* COMPANY DETAILS */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Company details
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                For your supplier checks and onboarding forms.
              </p>
            </div>
            <dl className="lg:col-span-8 border-t border-[var(--line)] divide-y divide-[var(--line)] bg-[var(--white)] rounded-[12px] border">
              {[
                ["Company", <Fact key="n" k="legalName" />],
                ["Registered office", contact.addressFull],
                ["Knitting unit", contact.knittingAddress],
                ["Dyeing unit", contact.dyeingAddress],
                ["Phone and WhatsApp", contact.phoneDisplay],
                ["Email", contact.email],
                ...(registration ? [["Registration", registration] as [string, string]] : []),
              ].map(([label, value]) => (
                <div key={String(label)} className="px-5 py-4 flex flex-col sm:flex-row gap-1 sm:gap-8">
                  <dt className="w-40 shrink-0 text-[13px] font-semibold text-[var(--text-muted)]">{label}</dt>
                  <dd className="text-[15px] font-semibold text-[var(--black)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <CompanyProfile className="mb-6" />
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Ready to start a garment program?
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                Send your tech pack or a reference sample. A merchandiser replies within 24 working hours.
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
