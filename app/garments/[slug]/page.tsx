import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Fact } from "@/components/ui/Fact";
import { GARMENT_CATEGORY_DETAILS, getGarmentCategoryBySlug } from "@/config/garmentsData";
import { factValue } from "@/config/ownerFacts";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return GARMENT_CATEGORY_DETAILS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getGarmentCategoryBySlug(slug);
  if (!item) return { title: "Garments" };
  return { title: item.title, description: item.headline + " " + item.description };
}

const quoteHref = (title: string, samples = false) =>
  `/contact?${samples ? "type=samples&" : ""}category=${encodeURIComponent(title)}#quote`;

const CHAIN = ["Yarn tested", "Knitted", "Dyed", "Lab tested", "Stitched", "Packed"];

export default async function GarmentCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getGarmentCategoryBySlug(slug);
  if (!item) notFound();

  const others = GARMENT_CATEGORY_DETAILS.filter((c) => c.slug !== item.slug);
  const needle = factValue("needleDetection");

  const specRows: { label: string; value: React.ReactNode }[] = [
    { label: "Fabrics", value: item.fabrics.join(", ") },
    { label: "Styles", value: item.styles.join(", ") },
    { label: "Sizes", value: <Fact k="sizeRanges" /> },
    { label: "Colour", value: "Dyed in our own dye house and matched to your reference." },
    {
      label: "Checks",
      value: (
        <>
          Yarn tested before knitting. Fabric graded under the 4-point system. <Fact k="labTests" />{" "}
          <Fact k="aqlLevel" />
          {needle ? ` ${needle}.` : ""}
        </>
      ),
    },
  ];

  const faqs: { q: string; a: React.ReactNode }[] = [
    { q: "What is the minimum order?", a: <Fact k="moq" /> },
    { q: "How long do samples take?", a: <Fact k="sampleLeadTime" /> },
    {
      q: "Can you work from my own fabric?",
      a: "Yes. That is our cut and make option. You send the fabric and trims, we cut, stitch, finish and pack to your specification.",
    },
    {
      q: "Can you make a style that is not shown here?",
      a: "Yes. Send a tech pack or a reference sample and we tell you what is possible and what it costs.",
    },
  ];

  return (
    <main className="w-full bg-[var(--white)]">
      {/* HERO */}
      <section className="w-full py-12 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            <Link
              href="/garments"
              className="inline-flex items-center gap-1.5 text-[var(--black)] hover:text-[var(--accent)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Garments</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
                <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>{item.eyebrow}</span>
              </p>
              <h1 className="mt-3 text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
                {item.headline}
              </h1>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-[var(--text-muted)] max-w-xl">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.certificates.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-[6px] border border-[var(--line)] px-2.5 py-1 text-[12.5px] text-[var(--black)]"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={quoteHref(item.title)}
                  className="group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  <span>Get a quote</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>
                <Link
                  href={quoteHref(item.title, true)}
                  className="inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  Request samples
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-[420px] lg:ml-auto rounded-[12px] overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                <Image
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE MAKE */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {item.showcaseImages.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="relative aspect-[4/5] w-full rounded-[12px] overflow-hidden border border-[var(--line)] bg-[var(--white)]"
              >
                <Image
                  src={src}
                  alt={`${item.title} sample ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SPECS */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                What goes into it
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                Bring your tech pack. These are the fabrics and styles we work with in this category.
              </p>
            </div>
            <dl className="lg:col-span-8 border-t border-[var(--line)] divide-y divide-[var(--line)]">
              {specRows.map((row) => (
                <div key={row.label} className="py-4 sm:py-5 flex flex-col sm:flex-row gap-1.5 sm:gap-8">
                  <dt className="w-28 shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="text-[16px] leading-[1.6] text-[var(--black)]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* CHAIN + ORDER OPTIONS */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                One team from yarn test to <span className="text-[var(--accent)]">packed carton.</span>
              </h2>
              <ol className="mt-6 flex flex-wrap gap-2">
                {CHAIN.map((step, i) => (
                  <li
                    key={step}
                    className="inline-flex items-center gap-2 rounded-[6px] border border-[var(--line)] bg-[var(--white)] px-3 py-1.5 text-[13px] font-semibold text-[var(--black)]"
                  >
                    <span className="text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link
                href="/capabilities"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                See how we do it
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6">
                <h3 className="text-[18px] font-bold text-[var(--black)]">Full package</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">
                  You send a tech pack or sample. We make the garment in our own fabric, with one price and one
                  delivery date.
                </p>
                <Link
                  href={quoteHref(item.title)}
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                >
                  Get a quote <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </Link>
              </div>
              <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6">
                <h3 className="text-[18px] font-bold text-[var(--black)]">Cut and make</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">
                  You send the fabric and trims. We cut, stitch, finish and pack to your specification.
                </p>
                <Link
                  href={quoteHref(item.title)}
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                >
                  Get a quote <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <h2 className="lg:col-span-4 text-[28px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              Questions buyers ask
            </h2>
            <div className="lg:col-span-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-[var(--black)]">
                    <span>{f.q}</span>
                    <span className="text-[var(--accent)] text-xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-[15px] leading-[1.65] text-[var(--text-muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA + OTHER CATEGORIES */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20">
        <Container>
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Ready to quote {item.title}?
              </h2>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                A merchandiser replies within 24 working hours with costing and a sampling plan.
              </p>
            </div>
            <Link
              href={quoteHref(item.title)}
              className="group inline-flex w-fit shrink-0 items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors"
            >
              <span>Get a quote</span>
              <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">Other garments</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/garments/${o.slug}`}
                  className="group rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-5 hover:border-[var(--black)] transition-colors"
                >
                  <p className="text-[16px] font-bold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {o.title}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-[1.5] text-[var(--text-muted)]">{o.specsSummary}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
