import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BLOG_POSTS, formatPostDate, getBlogPost, type BlogBlock } from "@/config/blogPosts";
import { siteConfig } from "@/config/siteContent";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-[24px] sm:text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[10px] size-1.5 shrink-0 bg-[var(--accent)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="w-full max-w-full overflow-x-auto rounded-[12px] border border-[var(--line)]">
          <table className="w-full min-w-[420px] border-collapse text-left text-[14px] sm:text-[15px]">
            <thead>
              <tr className="bg-[var(--surface)] text-[var(--black)]">
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)]">
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-3 sm:px-4 py-3 align-top ${i === 0 ? "w-[38%] font-semibold text-[var(--black)]" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: post.coverImage,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <main className="w-full bg-[var(--white)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="w-full bg-[var(--surface)] pt-10 sm:pt-14 pb-10 border-b border-[var(--line)]">
        <Container className="max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--black)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Blog</span>
          </Link>
          <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{post.category}</p>
          <h1 className="mt-2 text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
            {post.title}
          </h1>
          <p className="mt-4 text-[17px] sm:text-[19px] leading-[1.6] text-[var(--text-muted)]">{post.excerpt}</p>
          <p className="mt-5 text-[13px] text-[var(--text-muted)]">
            {post.author} · {formatPostDate(post.publishedAt)} · {post.readTime}
          </p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-4xl space-y-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--surface)]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <article className="min-w-0 max-w-3xl space-y-5 text-[16px] sm:text-[17px] leading-[1.75] text-[var(--text-muted)]">
            {post.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>

          <div className="max-w-3xl rounded-[12px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
            <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[var(--black)]">{post.cta.heading}</h2>
            <p className="mt-1.5 text-[15px] leading-[1.6] text-[var(--text-muted)]">{post.cta.text}</p>
            <Link
              href={post.cta.href}
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
            >
              {post.cta.label} <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[var(--surface)] py-12 lg:py-16 border-t border-[var(--line)]">
        <Container className="max-w-4xl space-y-10">
          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="max-w-xl">
              <h2 className="text-[24px] sm:text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
                Planning a knitwear order?
              </h2>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                Send your tech pack or a brief. A merchandiser replies within 24 working hours.
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

          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">More from the blog</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-5 hover:border-[var(--black)] transition-colors"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{r.category}</p>
                  <p className="mt-1.5 text-[16px] font-bold leading-[1.3] text-[var(--black)] group-hover:text-[var(--accent)] transition-colors">
                    {r.title}
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
