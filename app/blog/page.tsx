import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BLOG_POSTS, formatPostDate } from "@/config/blogPosts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes from a Tiruppur knitwear factory: fabric inspection, lab tests, yarn testing and how to order garments.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="w-full bg-[var(--white)]">
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>BLOG</span>
            </p>
            <h1 className="mt-3 text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              Practical notes on <span className="text-[var(--accent)]">knitwear quality and sourcing.</span>
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[var(--text-muted)] max-w-2xl">
              Short, plain explanations from the people who run our knitting, dyeing, lab and garment units.
            </p>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[var(--white)] py-14 lg:py-20">
        <Container className="space-y-10">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[12px] border border-[var(--line)] hover:border-[var(--black)] transition-colors"
            >
              <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:min-h-[340px] bg-[var(--surface)]">
                <Image
                  src={featured.coverImage}
                  alt={featured.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center p-6 sm:p-9">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                  {featured.category}
                </p>
                <h2 className="mt-2 text-[26px] sm:text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[15.5px] leading-[1.65] text-[var(--text-muted)]">{featured.excerpt}</p>
                <p className="mt-4 text-[13px] text-[var(--text-muted)]">
                  {formatPostDate(featured.publishedAt)} · {featured.readTime}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                  Read article <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </span>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[12px] border border-[var(--line)] hover:border-[var(--black)] transition-colors"
              >
                <div className="relative aspect-[16/10] w-full bg-[var(--surface)] border-b border-[var(--line)]">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{post.category}</p>
                  <h2 className="mt-2 text-[20px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">{post.excerpt}</p>
                  <p className="mt-auto pt-4 text-[13px] text-[var(--text-muted)]">
                    {formatPostDate(post.publishedAt)} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-t border-[var(--line)]">
        <Container>
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Have a question this does not answer?
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]">
                Send it with your tech pack. A merchandiser replies within 24 working hours.
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
