"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { createBlogPost } from "@/lib/firebase";
import { ArrowLeft, Send, Loader2 } from "lucide-react";

const DEFAULT_IMAGES = [
  {
    label: "Garment Production Floor",
    url: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/15.webp",
  },
  {
    label: "Circular Knitting Division",
    url: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/12.webp",
  },
  {
    label: "Quality Inspection Line",
    url: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/11.webp",
  },
  {
    label: "Yarn Cones & Preparation",
    url: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/18.webp",
  },
];

export default function NewBlogPostPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Garment Manufacturing",
    author: "Value Textiles Export Desk",
    readTime: "4 min read",
    coverImage: DEFAULT_IMAGES[0].url,
    excerpt: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const { slug } = await createBlogPost(formData);
      router.push(`/blog/${slug}`);
    } catch (err) {
      console.error("Failed to publish blog post to Firestore:", err);
      setErrorMsg(
        "Unable to publish article to Firestore. Check your Firestore rules for the 'blogs' collection."
      );
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#FAF8F5] py-12 sm:py-16 lg:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#554F47] hover:text-[#C8741F] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Blog</span>
        </Link>

        <div className="bg-white border border-[#E8E2D9] rounded-[28px] p-7 sm:p-10 shadow-xs">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#C8741F]">
            / PUBLISH TO FIRESTORE
          </p>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1F1F] mt-1.5 mb-2">
            Write a New Article
          </h1>
          <p className="font-body text-sm text-[#554F47] mb-8">
            Articles published here are saved directly to your Cloud Firestore{" "}
            <code className="font-mono text-xs bg-[#FAF8F5] px-1.5 py-0.5 rounded-sm border border-[#E8E2D9]">
              blogs
            </code>{" "}
            collection.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. How to Prepare a Knitwear Tech Pack for Tirupur Production"
                className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                >
                  <option value="Garment Manufacturing">Garment Manufacturing</option>
                  <option value="Fabric & Yarn">Fabric &amp; Yarn</option>
                  <option value="Quality & Compliance">Quality &amp; Compliance</option>
                  <option value="Export & Logistics">Export &amp; Logistics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                  Read Time
                </label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  placeholder="4 min read"
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                Cover Image URL
              </label>
              <input
                type="url"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                placeholder="https://ik.imagekit.io/..."
                className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {DEFAULT_IMAGES.map((img) => (
                  <button
                    key={img.url}
                    type="button"
                    onClick={() => setFormData({ ...formData, coverImage: img.url })}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-full border cursor-pointer transition-colors ${
                      formData.coverImage === img.url
                        ? "bg-[#1F1F1F] text-white border-[#1F1F1F]"
                        : "bg-[#FAF8F5] text-[#554F47] border-[#E8E2D9] hover:border-[#C8741F]"
                    }`}
                  >
                    {img.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                Short Excerpt *
              </label>
              <textarea
                required
                rows={2}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="A concise 1–2 sentence summary shown on the blog listing card..."
                className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                Full Article Content *
              </label>
              <textarea
                required
                rows={10}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Write your full article here. Separate paragraphs with a blank line."
                className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-600 font-medium">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full bg-[#C8741F] hover:bg-[#b56618] disabled:opacity-60 text-white font-semibold text-sm transition-all shadow-xs cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Publishing to Firestore...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Publish Article</span>
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </main>
  );
}

