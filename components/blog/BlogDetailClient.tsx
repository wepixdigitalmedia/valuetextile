"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { fetchBlogBySlug, BlogPost } from "@/lib/firebase";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Loader2 } from "lucide-react";

export function BlogDetailClient() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || "";
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    let active = true;
    fetchBlogBySlug(slug).then((data) => {
      if (!active) return;
      setPost(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="w-full bg-[var(--white)] py-28">
        <Container className="flex flex-col items-center justify-center gap-3 text-[var(--text-muted)]">
          <Loader2 className="w-7 h-7 animate-spin text-[var(--accent)]" />
          <p className="text-xs font-bold uppercase tracking-[0.14em]">Loading article...</p>
        </Container>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="w-full bg-[var(--surface)] py-24">
        <Container className="max-w-2xl text-center space-y-5">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
            404 · ARTICLE NOT FOUND
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--black)]">
            We couldn&apos;t find this article.
          </h1>
          <p className="text-base text-[var(--text-muted)]">
            It may have been moved or unpublished. Browse all insights from our Tiruppur export desk.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </Container>
      </main>
    );
  }

  const paragraphs = post.content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="w-full bg-[var(--white)]">
      {/* Article Header */}
      <section className="w-full bg-[var(--surface)] pt-12 sm:pt-16 pb-12 border-b border-[var(--line)]">
        <Container className="max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)] hover:text-[var(--accent)] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--white)] border border-[var(--line)] text-xs font-semibold text-[var(--black)]">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
              {post.title}
            </h1>

            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[var(--black)]" />
                {post.author}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--black)]" />
                {post.publishedAt}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--black)]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover Image & Body */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-4xl space-y-10">
          <div className="relative aspect-[16/9] w-full rounded-[12px] overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <article className="space-y-6 text-base sm:text-[17px] text-[var(--text-muted)] leading-relaxed">
            {paragraphs.map((block, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {block}
              </p>
            ))}
          </article>

          {/* Bottom Export CTA */}
          <div className="mt-14 p-8 sm:p-10 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] text-[var(--black)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
                <span className="inline-block w-7 h-[3px] bg-[var(--accent)]" aria-hidden="true" />
                DIRECT GARMENT MANUFACTURING
              </p>
              <h2 className="text-2xl font-extrabold text-[var(--black)]">
                Planning your next knitwear collection?
              </h2>
              <p className="text-sm text-[var(--text-muted)]">
                Send your tech pack or sample brief to our merchandising desk in Tiruppur.
              </p>
            </div>
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 min-h-[48px] px-7 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-sm font-semibold transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

