"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    <main className="w-full bg-[var(--surface)] min-h-[70vh]">
      {/* ============================================================ */}
      {/* HEADER SECTION                                               */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <Eyebrow>
                INSIGHTS &amp; TECHNICAL BLOG · <Tiruppur />
              </Eyebrow>
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                Garment &amp; Knitwear Journal
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                Practical guides on knitwear production, fabric development, 4-point quality control, and direct apparel sourcing from Tirupur, India.
              </p>
            </div>

            <Button href="/blog/new" variant="primary" className="shrink-0 w-fit">
              <Plus className="w-4 h-4" />
              <span>Write Article</span>
            </Button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 pt-6 border-t border-[var(--line)]">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] ${
                    active
                      ? "bg-[var(--black)] text-[var(--white)]"
                      : "bg-[var(--white)] text-[var(--black)] border border-[var(--line)] hover:border-[var(--black)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            {!loading && (
              <span className="ml-auto text-xs text-[var(--text-muted)] hidden sm:inline">
                {fromFirestore ? "Synced with Firestore" : "Starter Articles (Add yours to Firestore)"}
              </span>
            )}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* ARTICLES GRID                                                */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24">
        <Container>
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center text-[var(--text-muted)] gap-3">
              <Loader2 className="w-7 h-7 animate-spin text-[var(--accent)]" />
              <p className="text-xs font-bold uppercase tracking-[0.14em]">
                Loading articles from Firestore...
              </p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-16 text-center bg-[var(--white)] rounded-[12px] border border-[var(--line)] p-8">
              <p className="text-xl font-bold text-[var(--black)]">
                No articles in this category yet.
              </p>
              <p className="text-sm text-[var(--text-muted)] mt-2 mb-6">
                Publish a new article or switch to another category.
              </p>
              <Button href="/blog/new" variant="primary">
                <Plus className="w-4 h-4" />
                <span>Create First Article</span>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-[var(--white)] rounded-[12px] border border-[var(--line)] overflow-hidden flex flex-col justify-between hover:border-[var(--black)] transition-colors duration-300"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] w-full bg-[var(--surface)] overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[var(--white)] border border-[var(--line)] text-[11px] font-bold text-[var(--black)]">
                        {post.category}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                          {post.publishedAt}
                        </span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-extrabold text-[var(--black)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs font-semibold text-[var(--black)]">
                    <span>By {post.author}</span>
                    <span className="inline-flex items-center gap-1 text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
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

