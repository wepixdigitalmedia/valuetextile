import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import { StageChain } from "@/components/capabilities/StageChain";
import { Fact } from "@/components/ui/Fact";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StageIcon, type StageIconName } from "@/components/ui/StageIcon";
import { CAPABILITY_IMAGES } from "@/config/capabilityImages";
import { GARMENT_CATEGORY_DETAILS } from "@/config/garmentsData";
import { factValue } from "@/config/ownerFacts";
import { siteConfig } from "@/config/siteContent";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Manufacturing",
  description:
    "Cutting, stitching, finishing and export packing from our own fabric in Tiruppur. T-shirts, polos, kids wear, knitwear and activewear.",
};

const primaryBtn =
  "group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";
const secondaryBtn =
  "inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";

export default function GarmentManufacturingCapabilitiesPage() {
  const image = CAPABILITY_IMAGES.garments;
  const needle = factValue("needleDetection");
  const unitDetails = factValue("garmentUnitDetails");

  /** Five checkpoints. Final inspection is the one marked: it gets the wide dark tile. */
  const checkpoints: { title: string; text: React.ReactNode; icon: StageIconName; mark?: boolean }[] = [
    {
      title: "Sample approval",
      icon: "specify",
      text: "We work from your tech pack or a reference sample, and send fit and pre-production samples for your approval before bulk cutting.",
    },
    {
      title: "Fabric release",
      icon: "fabric",
      text: "Cutting starts only from fabric that passed our lab and 4-point inspection.",
    },
    {
      title: "Cutting and stitching",
      icon: "cut",
      text: "Panels are cut to your patterns, size chart and grading, then stitched on our own lines with checks along the line.",
    },
    {
      title: "Final inspection",
      icon: "lab",
      mark: true,
      text: (
        <>
          <Fact k="aqlLevel" />
          {needle ? ` ${needle}.` : ""}
        </>
      ),
    },
    {
      title: "Packing",
      icon: "pack",
      text: "Labelling, folding, polybags and master cartons follow your packing specification.",
    },
  ];

  const unitFacts = [
    { label: "Address", value: siteConfig.contact.addressFull, show: true },
    {
      label: "Certified to",
      value: "OEKO-TEX Standard 100 Class 1, GOTS and OCS. Certificate numbers are on the Quality page.",
      show: true,
    },
    { label: "Sewing lines and machines", value: unitDetails, show: Boolean(unitDetails) },
    { label: "Needle detection", value: needle, show: Boolean(needle) },
  ].filter((f) => f.show);

  return (
    <main className="w-full bg-[var(--white)]">
      {/* 1. HERO: the chain ends here. The chain is a row of pills, last one filled. */}
      <section className="w-full bg-[var(--surface)] pt-10 lg:pt-14 pb-12 lg:pb-16 border-b border-[var(--line)]">
        <Container>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--black)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Capabilities</span>
          </Link>

          <div className="mt-6 max-w-4xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Garment manufacturing
            </p>
            <h1 className="mt-4 text-[34px] sm:text-[46px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.025em] text-[var(--black)]">
              Your garment is made here, from fabric we made ourselves.
            </h1>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.65] text-[var(--text-muted)] max-w-2xl">
              Everything before this page, from yarn tests to the fabric lab, exists so this unit can cut and stitch your
              order without surprises.
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

          <StageChain current="garment" className="mt-10" />
        </Container>
      </section>

      {/* 2. FROM TECH PACK TO CARTON: five tiles, one wide dark tile for the checkpoint that matters */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
            From tech pack to carton
          </h2>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {checkpoints.map((c) => (
              <li
                key={c.title}
                className={`rounded-[12px] p-6 sm:p-7 ${
                  c.mark
                    ? "md:col-span-2 bg-[var(--black)] text-[var(--white)]"
                    : "bg-[var(--surface)] text-[var(--black)]"
                }`}
              >
                <StageIcon
                  name={c.icon}
                  className={`block w-10 h-10 ${c.mark ? "text-[var(--accent)]" : "text-[var(--black)]/70"}`}
                />
                <h3
                  className={`mt-4 text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] ${
                    c.mark ? "text-[var(--white)]" : "text-[var(--black)]"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`mt-2 text-[15px] leading-[1.6] max-w-xl ${
                    c.mark ? "text-[var(--white)]/75" : "text-[var(--text-muted)]"
                  }`}
                >
                  {c.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 3. TWO WAYS TO START: a dark band with two open panels, the choice a buyer makes */}
      <section className="w-full bg-[var(--black)] py-14 lg:py-20">
        <Container>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--white)]">
            Two ways to start
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {[
              {
                title: "Full package",
                text: "You send a tech pack or sample. We make the garment in our own fabric, with one price and one delivery date.",
                href: "/contact?type=full-package#quote",
                primary: true,
              },
              {
                title: "Cut and make",
                text: "You send the fabric and trims. We cut, stitch, finish and pack to your specification.",
                href: "/contact?type=cut-and-make#quote",
                primary: false,
              },
            ].map((o) => (
              <div
                key={o.title}
                className="flex flex-col justify-between rounded-[12px] border border-[var(--white)]/25 p-6 sm:p-8"
              >
                <div>
                  <h3 className="text-[26px] sm:text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--white)]">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[var(--white)]/75 max-w-md">{o.text}</p>
                </div>
                <Link
                  href={o.href}
                  className={`mt-8 w-fit inline-flex items-center gap-2 min-h-[46px] px-6 rounded-full text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--white)] ${
                    o.primary
                      ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)]"
                      : "border-[1.5px] border-[var(--white)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)]"
                  }`}
                >
                  Get a quote <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHAT WE MAKE: photo on the left, the four programs as large links on the right */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ImageSlot
                label={image.label}
                hint={image.hint}
                desktop={image.desktop}
                mobile={image.mobile}
                alt={image.alt}
              />
            </div>

            <div className="lg:col-span-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                <span>WHAT WE MAKE</span>
              </p>
              <ul className="mt-5 space-y-5">
                {GARMENT_CATEGORY_DETAILS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/garments/${c.slug}`}
                      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--black)]"
                    >
                      <span className="flex items-center gap-3 text-[26px] sm:text-[32px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                        {c.title}
                        <ArrowRight className="w-6 h-6 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" strokeWidth={2.4} />
                      </span>
                      <span className="mt-1 block text-[14px] text-[var(--text-muted)]">{c.specsSummary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. THE UNIT: a plain row of facts, label above value, no rules */}
      <section className="w-full bg-[var(--surface)] py-12 lg:py-16">
        <Container>
          <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            The garment unit
          </h2>
          <dl className="mt-6 flex flex-wrap gap-x-14 gap-y-7">
            {unitFacts.map((f) => (
              <div key={f.label} className="min-w-[220px] max-w-[420px] flex-1">
                <dt className="text-[12px] font-semibold text-[var(--text-muted)]">{f.label}</dt>
                <dd className="mt-1.5 text-[17px] font-bold leading-[1.4] text-[var(--black)] break-words">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <DivisionNext
        current="garment"
        quoteHeading="Ready to start your garment program?"
        quoteText="Send your tech pack or a reference sample. A merchandiser replies within 24 working hours with costing and a sampling plan."
      />
    </main>
  );
}
