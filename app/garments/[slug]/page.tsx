import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tiruppur } from "@/components/ui/Tiruppur";
import {
  GARMENT_CATEGORY_DETAILS,
  getGarmentCategoryBySlug,
} from "@/config/garmentsData";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return GARMENT_CATEGORY_DETAILS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getGarmentCategoryBySlug(slug);

  if (!item) {
    return {
      title: "Garment Category | Value Textiles",
    };
  }

  return {
    title: `${item.title} | Value Textiles`,
    description: item.tagline,
  };
}

export default function GarmentCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <GarmentCategoryContent params={params} />
    </Suspense>
  );
}

async function GarmentCategoryContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getGarmentCategoryBySlug(slug);

  if (!item) {
    notFound();
  }

  const gridImages =
    item.showcaseImages && item.showcaseImages.length > 0
      ? item.showcaseImages
      : item.galleryImages;

  const provideRows = [
    { label: "Fabrics", value: item.fabrics.join(" · ") },
    { label: "Styles", value: item.styles.join(" · ") },
    { label: "Sizing", value: item.sizeRange },
    { label: "Finishing", value: item.finishes.join(" · ") },
    { label: "Quality", value: item.qualityHighlights.join(" · ") },
  ];

  return (
    <main className="w-full bg-[var(--white)]">
      {/* ============================================================ */}
      {/* 01. HERO SECTION                                             */}
      {/* ============================================================ */}
      <section className="w-full py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            <Link
              href="/garments"
              className="inline-flex items-center gap-1.5 text-[var(--black)] hover:text-[var(--accent)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Garments</span>
            </Link>
            <span>/</span>
            <span className="text-[var(--black)] font-bold">{item.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-3">
                <Eyebrow>
                  {item.eyebrow} · <Tiruppur />, INDIA
                </Eyebrow>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                  {item.title}
                </h1>
                <p className="text-base font-medium text-[var(--black)] leading-relaxed">
                  {item.tagline}
                </p>
                <p className="text-base text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  href={`/contact?program=${encodeURIComponent(item.title)}#quote`}
                  variant="primary"
                >
                  <span>Request Export Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href={`/contact?type=samples&program=${encodeURIComponent(item.title)}#quote`}
                  variant="secondary"
                >
                  <span>Order Fit Sample</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full max-w-[380px] lg:ml-auto rounded-[12px] overflow-hidden border border-[var(--line)] bg-[var(--white)]">
                <Image
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. OUR PRODUCT GRIDS                                        */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {gridImages.map((imgSrc, idx) => (
              <div
                key={`${imgSrc}-${idx}`}
                className="relative aspect-[4/5] w-full rounded-[12px] overflow-hidden border border-[var(--line)] bg-[var(--white)]"
              >
                <Image
                  src={imgSrc}
                  alt={`${item.title} ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 03. WHAT WE WILL PROVIDE                                     */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4 space-y-3">
              <Eyebrow>WHAT WE WILL PROVIDE</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                Tailored to your tech pack and brand standards.
              </h2>
            </div>

            <div className="lg:col-span-8 border-t border-[var(--line)] divide-y divide-[var(--line)]">
              {provideRows.map((row) => (
                <div
                  key={row.label}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8"
                >
                  <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    {row.label}
                  </span>
                  <span className="text-base text-[var(--black)] leading-relaxed">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 04. ABOUT US ON THESE GARMENTS                               */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24">
        <Container>
          <div className="rounded-[12px] bg-[var(--surface)] border border-[var(--line)] text-[var(--black)] p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Eyebrow>
                ABOUT VALUE TEXTILES · <Tiruppur />
              </Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] leading-[1.1]">
                Knitted, dyed, tested, and tailored in our own facilities.
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3.5">
              <Button
                href={`/contact?program=${encodeURIComponent(item.title)}#quote`}
                variant="primary"
              >
                <span>Start a Program</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href="/capabilities/garment-manufacturing"
                variant="secondary"
              >
                <span>Our Capabilities</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
