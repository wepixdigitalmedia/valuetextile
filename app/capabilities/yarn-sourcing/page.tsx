import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import { StageHero } from "@/components/capabilities/StageHero";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StageIcon, type StageIconName } from "@/components/ui/StageIcon";
import { CAPABILITY_IMAGES } from "@/config/capabilityImages";
import { YARN_TESTS, YARN_TEST_GROUPS } from "@/config/qualityData";
import { factValue } from "@/config/ownerFacts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Yarn Sourcing and Testing",
  description:
    "We do not spin yarn. We buy cotton and man-made yarn to your specification from vetted mills, and ten tests decide which yarn goes onto our knitting machines.",
};

const FLOW: { title: string; text: string; icon: StageIconName }[] = [
  { icon: "specify", title: "Specify", text: "Count, fibre and blend are agreed with you for each order." },
  { icon: "source", title: "Source", text: "Yarn is bought to that specification from vetted mills across India." },
  { icon: "lab", title: "Test", text: "Ten tests run on every lot, before any fabric is produced." },
  { icon: "release", title: "Release", text: "Only yarn that passes goes onto our knitting machines." },
];

/** What each group of tests protects. Plain explanations; no figures. */
const PROTECTS: Record<string, string> = {
  "Size and strength":
    "Keeps fabric weight consistent from lot to lot, and the yarn strong enough to knit and to sew.",
  "Evenness and faults":
    "Keeps streaks, thick and thin places and fuzzy surfaces out of the fabric, and helps dyed colour come out even.",
  "Twist and condition":
    "Helps the fabric hold its shape after washing, and keeps weight readings honest.",
};

/** Which yarns end up in which garment program. Taken from the fabrics listed on each garment page. */
const FIBRE_TO_GARMENT = [
  {
    fibres: "Cotton and organic cotton",
    garments: [
      { title: "T-Shirts & Polos", href: "/garments/t-shirts-and-polos" },
      { title: "Kids & Baby Wear", href: "/garments/kids-and-baby-wear" },
    ],
  },
  {
    fibres: "Modal, Tencel and viscose",
    garments: [{ title: "Men's & Women's Knitwear", href: "/garments/mens-and-womens-knitwear" }],
  },
  {
    fibres: "Lycra and polyester blends",
    garments: [{ title: "Activewear & Loungewear", href: "/garments/activewear-and-loungewear" }],
  },
  {
    fibres: "Bamboo-cotton blends",
    garments: [{ title: "Kids & Baby Wear", href: "/garments/kids-and-baby-wear" }],
  },
];

export default function YarnSourcingPage() {
  const image = CAPABILITY_IMAGES.yarn;
  const standards = factValue("yarnTestStandards");
  const reports = factValue("yarnTestReports");

  return (
    <main className="w-full bg-[var(--white)]">
      <StageHero
        eyebrow="Yarn sourcing and testing"
        title="We don't spin yarn. We make every lot earn its place."
        intro="Spinning is a specialist business, so we buy from vetted mills against your specification. Then ten tests decide which yarn is allowed onto our knitting machines."
        big={{ value: String(YARN_TESTS.length), caption: "tests on every yarn lot, before knitting" }}
        current="yarn"
      />

      {/* HOW YARN REACHES YOUR GARMENT: four steps on one line */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
            How yarn reaches your garment
          </h2>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-x-8">
            {FLOW.map((s, i) => (
              <li key={s.title} className="relative md:pt-6 md:border-t md:border-[var(--black)]">
                <span
                  className={`hidden md:block absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full ${
                    i === 2 ? "bg-[var(--accent)]" : "bg-[var(--black)]"
                  }`}
                  aria-hidden="true"
                />
                <p className="flex items-center gap-2.5">
                  <StageIcon name={s.icon} className="w-6 h-6 shrink-0 text-[var(--accent)]" />
                  <span className="text-[20px] font-extrabold tracking-[-0.02em] text-[var(--black)]">{s.title}</span>
                </p>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* WHAT THE TESTS PROTECT: three groups, each with what it does for the fabric */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
              What the ten tests protect
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
              A yarn problem found after knitting or dyeing costs a whole batch. These tests find it first.
            </p>
          </div>

          <div className="mt-8 border-t border-[var(--black)]">
            {YARN_TEST_GROUPS.map((g) => (
              <div
                key={g.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-2 py-6 border-b border-[var(--line)]"
              >
                <div className="md:col-span-5">
                  <h3 className="text-[19px] font-extrabold tracking-[-0.02em] text-[var(--black)]">{g.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-[var(--text-muted)]">{g.tests.join(" · ")}</p>
                </div>
                <p className="md:col-span-7 text-[16px] leading-[1.65] text-[var(--black)]">{PROTECTS[g.title]}</p>
              </div>
            ))}
          </div>

          {standards && (
            <p className="mt-6 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--black)]">Methods: </span>
              {standards}
            </p>
          )}
        </Container>
      </section>

      {/* FIBRES AND WHERE THEY GO: ties the yarn to the garments */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                Which yarn goes into which garment
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)] max-w-xl">
                Cotton and man-made yarn, including rayon, from mills across India.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FIBRE_TO_GARMENT.map((row) => (
                  <li key={row.fibres} className="rounded-[12px] bg-[var(--surface)] p-5">
                    <p className="text-[17px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--black)]">
                      {row.fibres}
                    </p>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                      Goes into
                    </p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      {row.garments.map((g) => (
                        <Link
                          key={g.href}
                          href={g.href}
                          className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                        >
                          {g.title} <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <ImageSlot
                label={image.label}
                hint={image.hint}
                desktop={image.desktop}
                mobile={image.mobile}
                alt={image.alt}
              />
            </div>
          </div>
        </Container>
      </section>

      <DivisionNext
        current="yarn"
        quoteHeading={reports ? "Want to see how your yarn tested?" : "Have a yarn or fabric specification?"}
        quoteText={
          reports ??
          "Share your yarn count, fibre and fabric GSM. We tell you what we can source, test and knit."
        }
        quoteHref="/contact?q=Yarn%20testing#quote"
      />
    </main>
  );
}
