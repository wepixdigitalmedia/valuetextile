import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Fact } from "@/components/ui/Fact";
import { CompanyProfile } from "@/components/ui/CompanyProfile";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { BrandStrip } from "@/components/home/TrustStatsAndLogosSection";
import { siteConfig } from "@/config/siteContent";
import { factValue } from "@/config/ownerFacts";
import { StageIcon, type StageIconName } from "@/components/ui/StageIcon";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Value Textiles has made knitwear in Tiruppur, India for more than 20 years. We buy yarn, then knit, dye, test, stitch and pack in our own three units for international brands.",
};

const IK = "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure";

const AT_A_GLANCE = [
  { v: "20+", l: "years making knitwear" },
  { v: "3", l: "own units, Tiruppur and Perundurai" },
  { v: "40+", l: "buyers worldwide" },
  { v: "60,000+", l: "garments a month" },
];

const UNITS: { title: string; place: string; text: string; href: string; icon: StageIconName }[] = [
  {
    icon: "garments",
    title: "Garment unit",
    place: "Parapalayam, Tiruppur",
    text: "Cutting, stitching, finishing and export packing. This is also our registered office.",
    href: "/capabilities/garment-manufacturing",
  },
  {
    icon: "knitting",
    title: "Knitting unit",
    place: "SIDCO, Tiruppur",
    text: "Mayer & Cie circular knitting machines running two shifts a day.",
    href: "/capabilities/knitting-division",
  },
  {
    icon: "dyeing",
    title: "Dyeing unit",
    place: "SIPCOT, Perundurai",
    text: "Soft-flow dyeing, finishing, colour lab and the effluent treatment plant.",
    href: "/capabilities/dyeing-division",
  },
];

const primaryBtn =
  "group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";
const secondaryBtn =
  "inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";

export default function AboutPage() {
  const { contact } = siteConfig;
  const story = factValue("companyStory");
  const leadership = factValue("leadership");
  const registration = factValue("registration");

  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO: headline on the left, plain facts on the right, one wide photo below */}
      <section className="w-full bg-[var(--surface)] pt-14 lg:pt-24 pb-10 lg:pb-16 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">About us</p>
              <h1 className="mt-4 text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.025em] text-[var(--black)]">
                A knitwear maker in Tiruppur, with its own chain.
              </h1>
              <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.65] text-[var(--text-muted)] max-w-xl">
                We buy yarn, then knit, dye, test, stitch and pack in our own units for international brands.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <dl className="lg:col-span-5 border-t border-[var(--black)]">
              {AT_A_GLANCE.map((s) => (
                <div
                  key={s.l}
                  className="flex items-baseline justify-between gap-6 border-b border-[var(--line)] py-3.5"
                >
                  <dt className="text-[14px] text-[var(--text-muted)]">{s.l}</dt>
                  <dd className="text-[26px] sm:text-[30px] font-extrabold leading-none tracking-[-0.02em] text-[var(--black)]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mt-10 lg:mt-14 aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden rounded-[12px] bg-[var(--white)]">
            <Image
              src={`${IK}/15.webp`}
              alt="Exterior of a Value Textiles unit in Tiruppur"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* WHO WE ARE: plain prose, label on the left */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <h2 className="lg:col-span-4 text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] lg:sticky lg:top-28 lg:self-start">
              Who we are
            </h2>
            <div className="lg:col-span-7 space-y-9">
              {story && <p className="text-[18px] leading-[1.7] text-[var(--black)]">{story}</p>}
              <div>
                <h3 className="text-[17px] font-bold text-[var(--black)]">What we make</h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[var(--text-muted)]">
                  T-shirts and polos, kids and baby wear, men&apos;s and women&apos;s knitwear, and activewear and
                  loungewear for international brands.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[var(--black)]">How the chain works</h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[var(--text-muted)]">
                  Only yarn is bought in, and we test it before it enters knitting. Knitting, dyeing, the fabric lab,
                  stitching and packing all happen in our own units, so the fabric in your garment was knitted, dyed and
                  tested by us.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[var(--black)]">Who you deal with</h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[var(--text-muted)]">
                  There is no sourcing agent between you and the factory. One merchandiser takes your order from sample
                  to shipment, and the team that quotes it is the team that runs the units.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[var(--black)]">How we check it</h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[var(--text-muted)]">
                  Yarn tests, an 11-test fabric lab, and 4-point and 10-point inspection.{" "}
                  <Link
                    href="/quality"
                    className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
                  >
                    See tests and certificate numbers
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* UNITS: a ruled list, not cards */}
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-y border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <h2 className="lg:col-span-4 text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
              Our three units
            </h2>
            <ul className="lg:col-span-8 border-t border-[var(--black)]">
              {UNITS.map((u) => (
                <li key={u.title} className="border-b border-[var(--line)]">
                  <Link
                    href={u.href}
                    className="group grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-1 items-baseline py-6 hover:bg-[var(--white)] transition-colors sm:px-3 -mx-3 px-3 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--black)]"
                  >
                    <span className="sm:col-span-4 flex items-start gap-3">
                      <StageIcon name={u.icon} className="w-7 h-7 shrink-0 text-[var(--accent)] mt-0.5" />
                      <span>
                        <span className="block text-[20px] font-extrabold tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                          {u.title}
                        </span>
                        <span className="block text-[13px] text-[var(--text-muted)]">{u.place}</span>
                      </span>
                    </span>
                    <span className="sm:col-span-7 text-[15px] leading-[1.6] text-[var(--text-muted)]">{u.text}</span>
                    <ArrowRight
                      className="hidden sm:block sm:col-span-1 w-4 h-4 justify-self-end text-[var(--black)] group-hover:text-[var(--accent)] transition-colors"
                      strokeWidth={2.2}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* PEOPLE: text plus a team photo slot */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                The people behind it
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-[var(--text-muted)]">
                {leadership ??
                  "Every enquiry goes to a merchandiser in our Tiruppur team, who replies within 24 working hours with costing and a sampling plan."}
              </p>
              <Link
                href="/contact#quote"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                Talk to the team <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <ImageSlot
                label="Leadership and team"
                hint="The owner or directors with the merchandising team, in the office or on the floor. Real faces, not posed. Photo of people matters more than the place."
                desktop={{ w: 1000, h: 640 }}
                mobile={{ w: 900, h: 640 }}
                alt="The Value Textiles leadership and merchandising team"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* BRANDS AND CERTIFICATES */}
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-y border-[var(--line)]">
        <Container className="space-y-8">
          <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
            Brands we make for
          </h2>
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

      {/* COMPANY DETAILS: plain ruled list for supplier checks */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                Company details
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                For your supplier checks and onboarding forms.
              </p>
            </div>
            <dl className="lg:col-span-8 min-w-0 border-t border-[var(--black)]">
              {[
                ["Company", <Fact key="n" k="legalName" />],
                ["Registered office", contact.addressFull],
                ["Knitting unit", contact.knittingAddress],
                ["Dyeing unit", contact.dyeingAddress],
                ["Phone and WhatsApp", contact.phoneDisplay],
                ["Email", contact.email],
                ...(registration ? [["Registration", registration] as [string, string]] : []),
              ].map(([label, value]) => (
                <div
                  key={String(label)}
                  className="py-4 flex flex-col sm:flex-row gap-1 sm:gap-8 border-b border-[var(--line)]"
                >
                  <dt className="w-44 shrink-0 text-[13px] font-semibold text-[var(--text-muted)]">{label}</dt>
                  <dd className="min-w-0 text-[15px] font-semibold text-[var(--black)] break-words">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
        <Container>
          <CompanyProfile className="mb-6" />
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Ready to start a garment program?
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                Send your tech pack or a reference sample. A merchandiser replies within 24 working hours.
              </p>
            </div>
            <Link href="/contact#quote" className={`${primaryBtn} w-fit shrink-0`}>
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
