import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDMFDfSaxt3UjclB7x_-TRB5G2j1Ot49PI",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "value-textile.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "value-textile",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "value-textile.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "386129720190",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:386129720190:web:1c87eb00e61fba1e21392f",
};

// Initialize Firebase (singleton pattern for Next.js SSR & HMR)
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore
export const db = getFirestore(app);

export interface EnquiryPayload {
  source: "homepage-quote" | "contact-page" | "enquiry-drawer";
  fullName: string;
  company?: string;
  email: string;
  country?: string;
  location?: string;
  phone?: string;
  lookingFor?: string;
  garmentType?: string;
  inquiryType?: string;
  quantity?: string;
  targetDelivery?: string;
  message?: string;
}

/**
 * Saves a buyer enquiry or quote request to the "enquiries" collection in Firestore.
 */
export async function submitEnquiry(payload: EnquiryPayload) {
  const docRef = await addDoc(collection(db, "enquiries"), {
    ...payload,
    status: "new",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

/* ============================================================================ */
/* BLOG MODULE (Firestore "blogs" collection)                                   */
/* ============================================================================ */

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  coverImage: string;
  published: boolean;
  publishedAt: string;
}

export const STARTER_BLOG_POSTS: BlogPost[] = [
  {
    id: "starter-1",
    slug: "how-in-house-fabric-controls-garment-lead-times",
    title: "How Making Our Own Fabric Cuts Garment Lead Times in Tiruppur",
    excerpt:
      "Why sourcing knitwear from a vertically integrated Tiruppur manufacturer eliminates fabric mill delays, shade variations, and split accountability.",
    content: `For international apparel brands, the single biggest cause of late garment shipments isn't the sewing line—it's waiting on third-party fabric mills and dye houses.

When a cut-and-sew factory buys fabric on the open market, every shade lot variation, shrinkage failure, or dyeing queue pushes back your ex-factory date.

At Value Textiles, circular knitting, soft-flow dyeing, lab testing, and garment stitching happen under our own management across Tiruppur and Perundurai.

What this means for your buying team:
1. Consistent Shade Continuity: Lab dips are formulated on automated dispensers and verified on spectrophotometer before bulk dyeing.
2. Verified Shrinkage & GSM Before Cutting: Every fabric lot passes our 11-parameter physical lab checks and 4-point inspection prior to reaching the cutting table.
3. Single-Team Accountability: One export desk tracks your program from yarn procurement to Tuticorin or Chennai port despatch.`,
    category: "Garment Manufacturing",
    author: "Value Textiles Export Desk",
    readTime: "4 min read",
    coverImage: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/15.webp",
    published: true,
    publishedAt: "2026-11-10",
  },
  {
    id: "starter-2",
    slug: "4-point-fabric-inspection-before-garment-cutting",
    title: "Why 4-Point Fabric Inspection Before Cutting Matters for Export Knitwear",
    excerpt:
      "A practical look at how systematic roll-by-roll defect scoring protects AQL garment inspection outcomes and reduces cutting waste.",
    content: `Catching a knitting or dyeing defect after a T-shirt or polo is already stitched is the most expensive mistake in apparel manufacturing.

Before any fabric roll enters our cutting room in Parapalayam, Tiruppur, it goes through standard 4-point inspection:
- Every 100 square yards is scored for slubs, holes, barre, colour streaks, and contamination.
- Rolls exceeding buyer defect thresholds are isolated or flagged before spreading.
- Width, GSM, and bowing/skewing are logged alongside colour-coded lot tags.

By enforcing strict fabric quality gates upstream, our stitching lines maintain cleaner AQL final inspection pass rates and predictable yield across bulk orders.`,
    category: "Quality & Compliance",
    author: "Quality Assurance Team",
    readTime: "3 min read",
    coverImage: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/11.webp",
    published: true,
    publishedAt: "2026-11-04",
  },
  {
    id: "starter-3",
    slug: "choosing-cotton-modal-tencel-blends-for-knitwear",
    title: "Cotton, Modal & Tencel Blends: Choosing the Right Knit for Your Collection",
    excerpt:
      "Comparing handfeel, drape, breathability, and colourfastness across 100% combed cotton, cotton-modal, and performance blends.",
    content: `Selecting the right yarn and knit structure defines how a garment feels on the rack and performs after ten washes.

Here is how international brands typically pair our specialized knits by garment category:
- T-Shirts & Polos: 100% Combed Cotton Single Jersey (160–220 GSM) or Cotton Pique for crisp structure and breathability.
- Loungewear & Premium Tops: Cotton-Modal and 100% Modal blends for silky drape, low pilling, and rich reactive dye depth.
- Activewear & Performance: Cotton-Polyester, Cotton-Lycra, and engineered Tencel blends offering stretch recovery and moisture management.
- Kids & Baby Wear: Ultra-soft OEKO-TEX certified cotton interlock and rib knits tested for skin safety and dimensional stability.

Need physical swatches before finalizing your tech pack? Our merchandising desk can ship development swatches or counter-samples directly from Tiruppur.`,
    category: "Fabric & Yarn",
    author: "Technical Merchandising",
    readTime: "5 min read",
    coverImage: "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/18.webp",
    published: true,
    publishedAt: "2026-10-28",
  },
];

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function formatFirestoreDate(val: unknown): string {
  if (val instanceof Timestamp) {
    return val.toDate().toISOString().split("T")[0];
  }
  if (typeof val === "string" && val.length > 0) {
    return val;
  }
  return new Date().toISOString().split("T")[0];
}

/**
 * Fetches published blog posts from Firestore "blogs" collection.
 * Falls back to STARTER_BLOG_POSTS if collection is empty.
 */
export async function fetchPublishedBlogs(): Promise<{
  posts: BlogPost[];
  fromFirestore: boolean;
}> {
  try {
    const q = query(
      collection(db, "blogs"),
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const snap = await getDocs(q);
    if (snap.empty) {
      return { posts: STARTER_BLOG_POSTS, fromFirestore: false };
    }
    const posts: BlogPost[] = snap.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        slug: String(d.slug || doc.id),
        title: String(d.title || "Untitled"),
        excerpt: String(d.excerpt || ""),
        content: String(d.content || ""),
        category: String(d.category || "Garment Manufacturing"),
        author: String(d.author || "Value Textiles"),
        readTime: String(d.readTime || "4 min read"),
        coverImage: String(
          d.coverImage ||
            "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/15.webp"
        ),
        published: Boolean(d.published),
        publishedAt: formatFirestoreDate(d.publishedAt || d.createdAt),
      };
    });
    return { posts, fromFirestore: true };
  } catch (err) {
    console.warn("Firestore blogs fetch fallback:", err);
    return { posts: STARTER_BLOG_POSTS, fromFirestore: false };
  }
}

/**
 * Fetches a single blog post by slug from Firestore (or starter posts fallback).
 */
export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(
      collection(db, "blogs"),
      where("slug", "==", slug),
      where("published", "==", true),
      limit(1)
    );
    const snap = await getDocs(q);
    if (!snap.empty) {
      const doc = snap.docs[0];
      const d = doc.data();
      return {
        id: doc.id,
        slug: String(d.slug || doc.id),
        title: String(d.title || "Untitled"),
        excerpt: String(d.excerpt || ""),
        content: String(d.content || ""),
        category: String(d.category || "Garment Manufacturing"),
        author: String(d.author || "Value Textiles"),
        readTime: String(d.readTime || "4 min read"),
        coverImage: String(
          d.coverImage ||
            "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/15.webp"
        ),
        published: Boolean(d.published),
        publishedAt: formatFirestoreDate(d.publishedAt || d.createdAt),
      };
    }
  } catch (err) {
    console.warn("Firestore single blog fetch fallback:", err);
  }
  return STARTER_BLOG_POSTS.find((p) => p.slug === slug) || null;
}

/**
 * Creates a new published blog post in Firestore "blogs" collection.
 */
export async function createBlogPost(
  post: Omit<BlogPost, "id" | "publishedAt" | "published" | "slug"> & {
    slug?: string;
  }
) {
  const cleanSlug =
    post.slug && post.slug.trim().length > 0
      ? slugifyTitle(post.slug)
      : `${slugifyTitle(post.title)}-${Date.now().toString().slice(-4)}`;

  const docRef = await addDoc(collection(db, "blogs"), {
    slug: cleanSlug,
    title: post.title.trim(),
    excerpt: post.excerpt.trim(),
    content: post.content.trim(),
    category: post.category.trim(),
    author: post.author.trim() || "Value Textiles Team",
    readTime: post.readTime.trim() || "4 min read",
    coverImage:
      post.coverImage.trim() ||
      "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure/15.webp",
    published: true,
    publishedAt: new Date().toISOString().split("T")[0],
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id, slug: cleanSlug };
}

