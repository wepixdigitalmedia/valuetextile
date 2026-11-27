import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Fact } from "@/components/ui/Fact";
import { CERTIFICATES, FABRIC_LAB_TESTS, YARN_TESTS } from "@/config/qualityData";
import { factValue } from "@/config/ownerFacts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality and Certificates",
  description:
    "Yarn tested before knitting, 11 in-house fabric lab tests, 4-point and 10-point inspection, and certificates with numbers you can check: OEKO-TEX Class 1, GOTS, OCS, BCI and GRS.",
};

const CERT_REQUEST = "/contact?q=Certificate%20copies#quote";

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="inline-flex items-center rounded-[6px] border border-[var(--line)] bg-[var(--white)] px-2.5 py-1 text-[13px] text-[var(--black)]"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function QualityPage() {
  const needle = factValue("needleDetection");

  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
              <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
              <span>QUALITY AND CERTIFICATES</span>
            </p>
            <h1 className="mt-3 text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              Tested at every stage, with{" "}
              <span className="text-[var(--accent)]">certificates you can check.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              Yarn is tested before knitting. Fabric is tested in our own lab and graded roll by roll. Garments are
              inspected before packing. Our certificate numbers are listed below so your team can verify them.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={CERT_REQUEST}
                className="group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                <span>Request certificate copies</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
              <Link
                href="/contact#quote"
                className="inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
              >
                Get a quote
              </Link>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--line)]">
            {[
              { v: String(YARN_TESTS.length), l: "Yarn tests before knitting" },
              { v: String(FABRIC_LAB_TESTS.length), l: "Fabric lab tests" },
              { v: "4-point + 10-point", l: "Fabric inspection systems" },
              { v: String(CERTIFICATES.length), l: "Certificates and programmes" },
            ].map((s) => (
              <div key={s.l} className="bg-[var(--white)] px-5 py-5">
                <dt className="text-[12px] font-semibold text-[var(--text-muted)]">{s.l}</dt>
                <dd className="mt-1 text-[22px] sm:text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* CHECKPOINTS */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
            Four checkpoints before it ships
          </h2>

          <ol className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            <li className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7">
              <div className="lg:col-span-4 flex gap-4">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-1.5">01</span>
                <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">Yarn</h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
                  Yarn is bought in, so we test it before any fabric is produced. Ten tests run on every yarn we
                  accept.
                </p>
                <Chips items={YARN_TESTS} />
              </div>
            </li>

            <li className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7">
              <div className="lg:col-span-4 flex gap-4">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-1.5">02</span>
                <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                  Fabric lab
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
                  Our own lab tests each fabric lot before it moves on. Eleven tests cover weight, construction,
                  colour fastness, shrinkage and spirality.
                </p>
                <Chips items={FABRIC_LAB_TESTS} />
                <Link
                  href="/capabilities/fabric-division"
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                >
                  See the lab and inspection floor <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </Link>
              </div>
            </li>

            <li className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7">
              <div className="lg:col-span-4 flex gap-4">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-1.5">03</span>
                <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                  Fabric inspection
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
                  Rolls are graded under the 4-point and 10-point systems. Up to 30 points passes, 31 to 40 needs sign-off
                  from the head of department, and 41 or more is rejected. Colour-coded tags then set the cutting order:
                  red is not OK, orange is cut first, yellow next, green last.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 py-7">
              <div className="lg:col-span-4 flex gap-4">
                <span className="text-[13px] font-bold text-[var(--accent)] pt-1.5">04</span>
                <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                  Finished garments
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
                  <Fact k="aqlLevel" />
                  {needle ? ` ${needle}.` : ""}
                </p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                  Packing follows your labelling, folding and carton instructions.
                </p>
              </div>
            </li>
          </ol>
        </Container>
      </section>

      {/* CERTIFICATES */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              The certificates we hold
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-[var(--text-muted)]">
              Reference numbers are printed below so you can check them with the issuing body.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATES.map((c) => (
              <article key={c.id} className="flex flex-col rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6">
                <div className="flex h-16 items-center">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={200}
                      height={64}
                      sizes="200px"
                      className="max-h-16 w-auto object-contain object-left"
                    />
                  ) : (
                    <span className="inline-flex h-12 items-center rounded-[8px] border border-[var(--line)] px-4 text-[20px] font-extrabold tracking-[0.04em] text-[var(--black)]">
                      {c.short}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[18px] font-bold leading-[1.25] text-[var(--black)]">{c.name}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">{c.scope}</p>
                <dl className="mt-4 space-y-1.5 border-t border-[var(--line)] pt-4 text-[13.5px]">
                  <div className="flex gap-2">
                    <dt className="w-20 shrink-0 text-[var(--text-muted)]">Reference</dt>
                    <dd className="font-semibold text-[var(--black)] break-words">
                      {c.reference ?? "On request"}
                    </dd>
                  </div>
                  {c.issuer && (
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 text-[var(--text-muted)]">Issued by</dt>
                      <dd className="font-semibold text-[var(--black)]">{c.issuer}</dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>

          <p className="mt-6 text-[14.5px] leading-[1.6] text-[var(--text-muted)] max-w-3xl">
            <Fact k="certificateValidity" />{" "}
            <Link
              href={CERT_REQUEST}
              className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              Request certificate copies
            </Link>
          </p>
        </Container>
      </section>

      {/* WATER */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <h2 className="lg:col-span-5 text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              Dye house water, <span className="text-[var(--accent)]">recycled.</span>
            </h2>
            <div className="lg:col-span-7">
              <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
                Our dye house treats its effluent in its own plant: biological treatment, reverse osmosis, ozone colour
                removal and multi-effect evaporation. It recycles both water and salt to meet Zero Liquid Discharge
                norms.
              </p>
              <Link
                href="/capabilities/dyeing-division"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                See the effluent plant <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20">
        <Container>
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Need our certificates for your audit?
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                Tell us what your compliance team needs. A merchandiser replies within 24 working hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href={CERT_REQUEST}
                className="group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors"
              >
                <span>Request certificate copies</span>
                <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </Link>
              <Link
                href="/contact#quote"
                className="inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
