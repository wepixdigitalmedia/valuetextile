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

const primaryBtn =
  "group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";
const secondaryBtn =
  "inline-flex items-center min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]";

export default async function GarmentCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getGarmentCategoryBySlug(slug);
  if (!item) notFound();

  const others = GARMENT_CATEGORY_DETAILS.filter((c) => c.slug !== item.slug);
  const needle = factValue("needleDetection");
  const photos = [item.heroImage, ...item.showcaseImages];

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
      {/* HERO: same shape as the Garments hub. Headline left, description and buttons right. */}
      <section className="w-full bg-[var(--surface)] pt-10 lg:pt-14 pb-10 lg:pb-14 border-b border-[var(--line)]">
        <Container>
          <Link
            href="/garments"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--black)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Garments</span>
          </Link>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {item.eyebrow}
              </p>
              <h1 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[var(--black)]">
                {item.headline}
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">{item.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.certificates.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center rounded-[6px] border border-[var(--line)] bg-[var(--white)] px-2.5 py-1 text-[12.5px] text-[var(--black)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href={quoteHref(item.title)} className={primaryBtn}>
                  <span>Get a quote</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </Link>
                <Link href={quoteHref(item.title, true)} className={secondaryBtn}>
                  Request samples
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PHOTOS: one scrolling strip, so nine photos take the room of one row */}
      <section className="w-full bg-[var(--white)] pt-10 lg:pt-14 pb-4">
        <Container>
          <div
            role="region"
            aria-label={`${item.title} photos, scroll sideways`}
            tabIndex={0}
            className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
          >
            {photos.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="relative shrink-0 snap-start aspect-[4/5] w-[62%] sm:w-[36%] lg:w-[23.5%] overflow-hidden rounded-[12px] bg-[var(--surface)]"
              >
                <Image
                  src={src}
                  alt={idx === 0 ? item.title : `${item.title} sample ${idx}`}
                  fill
                  priority={idx < 3}
                  sizes="(max-width: 640px) 62vw, (max-width: 1024px) 36vw, 24vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SPECS */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                What goes into it
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                Bring your tech pack. These are the fabrics and styles we work with in this category.
              </p>
            </div>
            <dl className="lg:col-span-8 min-w-0 border-t border-[var(--black)]">
              {specRows.map((row) => (
                <div
                  key={row.label}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row gap-1.5 sm:gap-8 border-b border-[var(--line)]"
                >
                  <dt className="w-28 shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="min-w-0 text-[16px] leading-[1.6] text-[var(--black)] break-words">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* HOW WE MAKE IT + TWO WAYS TO ORDER */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-y border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                How it is made
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--text-muted)]">
                {CHAIN.join(" → ")}. One team from yarn test to packed carton.
              </p>
              <Link
                href="/capabilities"
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
              >
                See how we do it <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>

            <div className="lg:col-span-8 border-t border-[var(--black)]">
              {[
                {
                  title: "Full package",
                  text: "You send a tech pack or sample. We make the garment in our own fabric, with one price and one delivery date.",
                },
                {
                  title: "Cut and make",
                  text: "You send the fabric and trims. We cut, stitch, finish and pack to your specification.",
                },
              ].map((o) => (
                <div
                  key={o.title}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-2 items-baseline py-6 border-b border-[var(--line)]"
                >
                  <h3 className="sm:col-span-3 text-[19px] font-extrabold tracking-[-0.02em] text-[var(--black)]">
                    {o.title}
                  </h3>
                  <p className="sm:col-span-6 text-[15px] leading-[1.6] text-[var(--text-muted)]">{o.text}</p>
                  <Link
                    href={quoteHref(item.title)}
                    className="sm:col-span-3 sm:justify-self-end inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                  >
                    Get a quote <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <h2 className="lg:col-span-4 text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
              Questions buyers ask
            </h2>
            <div className="lg:col-span-8 border-t border-[var(--black)] divide-y divide-[var(--line)] border-b border-[var(--line)]">
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

      {/* CLOSING QUOTE + OTHER GARMENTS */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Ready to quote {item.title}?
              </h2>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                A merchandiser replies within 24 working hours with costing and a sampling plan.
              </p>
            </div>
            <Link href={quoteHref(item.title)} className={`${primaryBtn} w-fit shrink-0`}>
              <span>Get a quote</span>
              <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </Link>
          </div>

          <div className="mt-12 lg:mt-14">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Other garments
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-5">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/garments/${o.slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--black)]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-[var(--white)]">
                    <Image
                      src={o.heroImage}
                      alt={o.title}
                      fill
                      sizes="(max-width: 640px) 33vw, 22vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-3 text-[14px] sm:text-[17px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {o.title}
                  </p>
                  <p className="mt-0.5 hidden sm:block text-[13.5px] leading-[1.5] text-[var(--text-muted)]">
                    {o.specsSummary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
