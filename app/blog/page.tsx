"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { fetchPublishedBlogs, BlogPost } from "@/lib/firebase";
import { ArrowRight, Calendar, Clock, Plus, Loader2 } from "lucide-react";

const CATEGORIES = [
  "All",
  "Garment Manufacturing",
  "Fabric & Yarn",
  "Quality & Compliance",
  "Export & Logistics",
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fromFirestore, setFromFirestore] = useState(false);

  useEffect(() => {
    let active = true;
    fetchPublishedBlogs().then((res) => {
      if (!active) return;
      setPosts(res.posts);
      setFromFirestore(res.fromFirestore);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <main className="w-full bg-[#FAF8F5] min-h-[70vh]">
      {/* ============================================================ */}
      {/* HEADER SECTION                                               */}
      {/* ============================================================ */}
      <section className="w-full bg-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-b border-[#E8E2D9]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                / INSIGHTS &amp; TECHNICAL BLOG · <Tiruppur />
              </p>
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.06] tracking-tight">
                Garment &amp; Knitwear Journal
              </h1>
              <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
                Practical guides on knitwear production, fabric development, 4-point quality control, and direct apparel sourcing from Tirupur, India.
              </p>
            </div>

            <Link
              href="/blog/new"
              className="inline-flex items-center gap-2 h-[48px] px-6 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs shrink-0 w-fit"
            >
              <Plus className="w-4 h-4" />
              <span>Write Article</span>
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 pt-6 border-t border-[#E8E2D9]">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-[#1F1F1F] text-white shadow-2xs"
                      : "bg-[#FAF8F5] text-[#554F47] border border-[#E8E2D9] hover:border-[#C8741F] hover:text-[#1F1F1F]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            {!loading && (
              <span className="ml-auto font-mono text-[11px] text-[#78716C] hidden sm:inline">
                {fromFirestore ? "Synced with Firestore" : "Starter Articles (Add yours to Firestore)"}
              </span>
            )}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* ARTICLES GRID                                                */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center text-[#78716C] gap-3">
              <Loader2 className="w-7 h-7 animate-spin text-[#C8741F]" />
              <p className="font-mono text-xs uppercase tracking-wider">
                Loading articles from Firestore...
              </p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[28px] border border-[#E8E2D9] p-8">
              <p className="font-heading text-xl font-bold text-[#1F1F1F]">
                No articles in this category yet.
              </p>
              <p className="font-body text-sm text-[#554F47] mt-2 mb-6">
                Publish a new article or switch to another category.
              </p>
              <Link
                href="/blog/new"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8741F] text-white text-sm font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Create First Article</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-[24px] border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] w-full bg-[#FAF8F5] overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-mono font-bold text-[#C8741F] shadow-xs">
                        {post.category}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#78716C]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C8741F]" />
                          {post.publishedAt}
                        </span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#C8741F]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading text-xl font-extrabold text-[#1F1F1F] leading-snug group-hover:text-[#C8741F] transition-colors">
                        {post.title}
                      </h2>

                      <p className="font-body text-sm text-[#554F47] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[#E8E2D9]/70 flex items-center justify-between text-xs font-semibold text-[#1F1F1F]">
                    <span>By {post.author}</span>
                    <span className="inline-flex items-center gap-1 text-[#C8741F] group-hover:translate-x-0.5 transition-transform">
                      Read article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}

