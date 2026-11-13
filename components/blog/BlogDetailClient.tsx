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
      <main className="w-full bg-white py-28">
        <Container className="flex flex-col items-center justify-center gap-3 text-[#78716C]">
          <Loader2 className="w-7 h-7 animate-spin text-[#C8741F]" />
          <p className="font-mono text-xs uppercase tracking-wider">Loading article...</p>
        </Container>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="w-full bg-[#FAF8F5] py-24">
        <Container className="max-w-2xl text-center space-y-5">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#C8741F]">
            404 · ARTICLE NOT FOUND
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1F1F1F]">
            We couldn&apos;t find this article.
          </h1>
          <p className="font-body text-base text-[#554F47]">
            It may have been moved or unpublished. Browse all insights from our Tirupur export desk.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1F1F] text-white text-sm font-semibold"
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
    <main className="w-full bg-white">
      {/* Article Header */}
      <section className="w-full bg-[#FAF8F5] pt-10 sm:pt-14 pb-12 border-b border-[#E8E2D9]">
        <Container className="max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#554F47] hover:text-[#C8741F] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#E8E2D9] font-mono text-xs font-bold text-[#C8741F]">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <p className="font-body text-lg text-[#554F47] leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs font-mono text-[#78716C]">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C8741F]" />
                {post.author}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C8741F]" />
                {post.publishedAt}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C8741F]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover Image & Body */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl space-y-10">
          <div className="relative aspect-[16/9] w-full rounded-[28px] overflow-hidden border border-[#E8E2D9] bg-[#FAF8F5] shadow-xs">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <article className="space-y-6 font-body text-base sm:text-[17px] text-[#33302C] leading-[1.78]">
            {paragraphs.map((block, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {block}
              </p>
            ))}
          </article>

          {/* Bottom Export CTA */}
          <div className="mt-14 p-8 sm:p-10 rounded-[28px] bg-[#1F1F1F] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="font-mono text-xs uppercase tracking-wider text-[#F7C08A]">
                / DIRECT GARMENT MANUFACTURING
              </p>
              <h2 className="font-heading text-2xl font-extrabold">
                Planning your next knitwear collection?
              </h2>
              <p className="font-body text-sm text-white/80">
                Send your tech pack or sample brief to our merchandising desk in Tirupur.
              </p>
            </div>
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 h-[48px] px-7 rounded-full bg-[#C8741F] hover:bg-[#b56618] text-white text-sm font-semibold transition-colors shrink-0"
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

