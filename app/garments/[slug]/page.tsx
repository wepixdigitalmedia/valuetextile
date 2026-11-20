import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
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
    <main className="w-full bg-[#FFFDF9]">
      {/* ============================================================ */}
      {/* 01. HERO SECTION                                             */}
      {/* ============================================================ */}
      <section className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 border-b border-[#E8E2D9]">
        <Container>
          <div className="mb-5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#78716C]">
            <Link
              href="/garments"
              className="inline-flex items-center gap-1.5 hover:text-[#1F1F1F] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Garments</span>
            </Link>
            <span>/</span>
            <span className="text-[#1F1F1F] font-semibold">{item.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2.5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#C8741F]">
                  / {item.eyebrow} · <Tiruppur />, INDIA
                </p>
                <h1 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1F1F1F] leading-[1.08] tracking-tight">
                  {item.title}
                </h1>
                <p className="font-body text-sm sm:text-base font-medium text-[#1F1F1F] leading-relaxed">
                  {item.tagline}
                </p>
                <p className="font-body text-sm text-[#554F47] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={`/contact?program=${encodeURIComponent(item.title)}#quote`}
                  className="inline-flex items-center gap-2 h-[44px] px-6 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Request Export Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/contact?type=samples&program=${encodeURIComponent(item.title)}#quote`}
                  className="inline-flex items-center gap-2 h-[44px] px-6 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Order Fit Sample</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full max-w-[380px] lg:ml-auto rounded-[20px] overflow-hidden border border-[#E8E2D9] bg-white shadow-2xs">
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
      <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 border-b border-[#E8E2D9]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {gridImages.map((imgSrc, idx) => (
              <div
                key={`${imgSrc}-${idx}`}
                className="relative aspect-[4/5] w-full rounded-[20px] overflow-hidden border border-[#E8E2D9] bg-white"
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
      <section className="w-full bg-white py-14 sm:py-20 border-b border-[#E8E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4 space-y-3">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#C8741F]">
                / WHAT WE WILL PROVIDE
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] leading-tight">
                Tailored to your tech pack and brand standards.
              </h2>
            </div>

            <div className="lg:col-span-8 border-t border-[#E8E2D9] divide-y divide-[#E8E2D9]">
              {provideRows.map((row) => (
                <div
                  key={row.label}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8"
                >
                  <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-wider text-[#78716C]">
                    {row.label}
                  </span>
                  <span className="font-body text-sm sm:text-[15px] text-[#1F1F1F] leading-relaxed">
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
      <section className="w-full bg-white py-16 sm:py-20">
        <Container>
          <div className="rounded-[28px] bg-[#1F1F1F] text-white p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#F7C08A]">
                / ABOUT VALUE TEXTILES · <Tiruppur />
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Knitted, dyed, tested, and tailored in our own facilities.
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3.5">
              <Link
                href={`/contact?program=${encodeURIComponent(item.title)}#quote`}
                className="inline-flex items-center gap-2.5 h-[50px] px-7 rounded-full bg-[#C8741F] hover:bg-[#b56618] text-white text-sm font-semibold transition-all"
              >
                <span>Start a Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/capabilities/garment-manufacturing"
                className="inline-flex items-center gap-2 h-[50px] px-6 rounded-full border border-white/25 hover:border-white text-white text-sm font-semibold transition-all"
              >
                <span>Our Capabilities</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
