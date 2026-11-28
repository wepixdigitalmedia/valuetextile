import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StageIcon, type StageIconName } from "@/components/ui/StageIcon";
import { GARMENT_CATEGORY_DETAILS } from "@/config/garmentsData";
import { CAPABILITY_IMAGES, type CapabilityImageKey } from "@/config/capabilityImages";
import { isConfirmed } from "@/config/ownerFacts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Garment manufacturing in our own units in Tiruppur and Perundurai, backed by yarn testing, knitting, dyeing and a fabric lab. Only yarn is bought in.",
};

/** The stages that feed the garment, in the order the fabric moves. */
const BEHIND: {
  title: string;
  href: string;
  stat: string;
  text: string;
  place: string;
  image: CapabilityImageKey;
  icon: StageIconName;
}[] = [
  {
    title: "Yarn sourcing and testing",
    href: "/capabilities/yarn-sourcing",
    stat: "10 yarn tests",
    text: "Bought to your specification from vetted mills, tested on every lot before knitting.",
    place: "Before knitting",
    image: "yarn",
    icon: "yarn",
  },
  {
    title: "Knitting",
    href: "/capabilities/knitting-division",
    stat: "2 shifts a day",
    text: "Mayer & Cie circular knitting: jersey, rib, interlock, striper, jacquard and Lycra.",
    place: "SIDCO, Tiruppur",
    image: "knitting",
    icon: "knitting",
  },
  {
    title: "Dyeing",
    href: "/capabilities/dyeing-division",
    stat: "25 to 1,500 kg batches",
    // Recycling and ZLD are only claimed once the owner confirms (ownerFacts.zldStatus).
    text: isConfirmed("zldStatus")
      ? "Soft-flow dyeing, a colour lab, finishing and an effluent plant that recycles water and salt."
      : "Soft-flow dyeing, a colour lab, finishing and our own effluent treatment plant.",
    place: "SIPCOT, Perundurai",
    image: "dyeing",
    icon: "dyeing",
  },
  {
    title: "Fabric lab and inspection",
    href: "/capabilities/fabric-division",
    stat: "11 lab tests",
    text: "Every lot tested, then graded under the 4-point and 10-point systems.",
    place: "Tiruppur",
    image: "lab",
    icon: "lab",
  },
];

const PROOF = [
  { v: "Own units", l: "Tiruppur and Perundurai" },
  { v: "OEKO-TEX, GOTS, OCS", l: "Certificate numbers on the Quality page", href: "/quality" },
  { v: "24 working hours", l: "Merchandiser reply to every enquiry" },
];

const primaryBtn =
  "group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";
const secondaryBtn =
  "inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";

export default function CapabilitiesPage() {
  const garments = CAPABILITY_IMAGES.garments;

  return (
    <main className="w-full bg-[var(--white)]">
      {/* 1. HERO: the garment is the point */}
      <section className="w-full bg-[var(--surface)] pt-14 lg:pt-20 pb-12 lg:pb-16 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">Capabilities</p>
              <h1 className="mt-4 text-[36px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.05] tracking-[-0.025em] text-[var(--black)]">
                Garments made start to finish in our own units.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
                Only yarn is bought in. Everything that turns it into your garment is run by our own teams, so one
                company answers for the result.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE LEAD: garment manufacturing */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <ImageSlot
                label={garments.label}
                hint={garments.hint}
                desktop={garments.desktop}
                mobile={garments.mobile}
                alt={garments.alt}
              />
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                <span>WHAT WE MAKE</span>
              </p>
              <h2 className="mt-3 text-[30px] sm:text-[40px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
                Garment manufacturing
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-muted)] max-w-xl">
                Cutting, stitching, finishing and export packing on our own lines, from fabric we knitted, dyed and
                tested ourselves.
              </p>

              <p className="mt-5 text-[26px] sm:text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                60,000+ garments a month
              </p>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
                {GARMENT_CATEGORY_DETAILS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/garments/${c.slug}`}
                      className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                    >
                      {c.title} <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/capabilities/garment-manufacturing" className={primaryBtn}>
                  <span>See garment manufacturing</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>
                <Link href="/contact#quote" className={secondaryBtn}>
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHAT STANDS BEHIND IT: four stages, one photo each */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              What stands behind every garment
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
              Four stages come before stitching. Each is ours and each is checked, so the garment you approve in the
              sample is the garment we ship.
            </p>
          </div>

          <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BEHIND.map((s) => {
              const img = CAPABILITY_IMAGES[s.image];
              return (
                <li key={s.title}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--black)]"
                  >
                    <ImageSlot
                      label={img.label}
                      hint={img.hint}
                      desktop={img.desktop}
                      mobile={img.mobile}
                      alt={img.alt}
                    />
                    <div className="mt-4 flex items-baseline justify-between gap-3">
                      <StageIcon name={s.icon} className="w-7 h-7 text-[var(--accent)]" />
                      <span className="text-[12px] font-semibold text-[var(--text-muted)] text-right">{s.place}</span>
                    </div>
                    <h3 className="mt-1.5 text-[20px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[16px] font-extrabold leading-[1.2] text-[var(--black)]">{s.stat}</p>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">{s.text}</p>
                    <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                      See this stage
                      <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>

          <p className="mt-8 flex items-center gap-2 text-[14px] font-semibold text-[var(--black)]">
            <ArrowRight className="w-4 h-4 text-[var(--accent)]" strokeWidth={2.4} />
            Then cutting, stitching, finishing and packing into your garment.
          </p>
          <p className="mt-3 text-[14.5px] text-[var(--text-muted)]">
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

      {/* 4. CLOSE: three proof facts and the one quote action, in a single band */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Send us your style. We will quote it.
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)] max-w-xl">
                Share a tech pack or an idea. A merchandiser replies within 24 working hours with costing and a sampling
                plan.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
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

            <dl className="lg:col-span-5 border-t border-[var(--black)]">
              {PROOF.map((p) => (
                <div key={p.v} className="py-4 border-b border-[var(--line)]">
                  <dt className="text-[12px] font-semibold text-[var(--text-muted)]">{p.l}</dt>
                  <dd className="mt-0.5 text-[19px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--black)]">
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
          </div>
        </Container>
      </section>
    </main>
  );
}
