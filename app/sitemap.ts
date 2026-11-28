import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteContent";
import { GARMENT_CATEGORY_DETAILS } from "@/config/garmentsData";
import { BLOG_POSTS } from "@/config/blogPosts";

/** Public pages only. The thank-you page is left out on purpose. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/garments", priority: 0.9 },
    ...GARMENT_CATEGORY_DETAILS.map((c) => ({ path: `/garments/${c.slug}`, priority: 0.8 })),
    { path: "/capabilities", priority: 0.8 },
    { path: "/capabilities/yarn-sourcing", priority: 0.7 },
    { path: "/capabilities/knitting-division", priority: 0.7 },
    { path: "/capabilities/dyeing-division", priority: 0.7 },
    { path: "/capabilities/fabric-division", priority: 0.7 },
    { path: "/capabilities/garment-manufacturing", priority: 0.7 },
    { path: "/quality", priority: 0.8 },
    { path: "/how-to-order", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/who-we-work-with", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/blog", priority: 0.5 },
    ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.5 })),
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return pages.map((p) => ({ url: `${base}${p.path}`, priority: p.priority }));
}
