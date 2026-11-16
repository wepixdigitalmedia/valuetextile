import { GARMENT_CATEGORY_DETAILS } from "./garmentsData";
import { PRODUCTS_DATA } from "./productsData";
import { siteConfig } from "./siteContent";

export type SearchItemGroup =
  | "Quick Actions"
  | "Garment Programs"
  | "Fabrics & Yarns"
  | "Capabilities & Units"
  | "Company & Quality";

export interface SearchIndexItem {
  id: string;
  title: string;
  subtitle: string;
  group: SearchItemGroup;
  href: string;
  external?: boolean;
  badge?: string;
  keywords: string[];
}

const STATIC_ACTIONS: SearchIndexItem[] = [
  {
    id: "action-bulk-quote",
    title: "Request Bulk Production Quote (FOB / CMT)",
    subtitle: "Send quantities, GSM & target delivery for 24-hour export costing",
    group: "Quick Actions",
    href: "/contact?q=Bulk%20Production%20Quote%20Request#quote",
    badge: "Quote",
    keywords: [
      "bulk",
      "quote",
      "rfq",
      "pricing",
      "price",
      "cost",
      "fob",
      "cmt",
      "moq",
      "wholesale",
      "production",
      "order",
      "export",
      "enquiry",
      "inquiry",
    ],
  },
  {
    id: "action-samples",
    title: "Order Fit Samples & Fabric Swatches",
    subtitle: "Request proto samples, custom Pantone lab dips & hanger swatches",
    group: "Quick Actions",
    href: "/contact?type=samples&q=Sample%20%26%20Swatch%20Request#quote",
    badge: "Samples",
    keywords: [
      "sample",
      "samples",
      "swatch",
      "swatches",
      "lab dip",
      "proto",
      "fit",
      "size set",
      "pp sample",
      "trial",
    ],
  },
  {
    id: "action-factory-visit",
    title: "Book a Tiruppur Factory Visit",
    subtitle: "Tour our garmenting, Mayer & Cie knitting, and Perundurai dyeing units",
    group: "Quick Actions",
    href: "/contact?q=Factory%20Visit%20Booking%20Request#quote",
    badge: "Visit",
    keywords: [
      "visit",
      "factory",
      "tour",
      "tirupur",
      "tiruppur",
      "perundurai",
      "audit",
      "unit",
      "meet",
    ],
  },
  {
    id: "action-whatsapp",
    title: "Chat on WhatsApp Export Desk",
    subtitle: `Direct buyer support · ${siteConfig.contact.phoneDisplay}`,
    group: "Quick Actions",
    href: siteConfig.contact.whatsapp,
    external: true,
    badge: "WhatsApp",
    keywords: ["whatsapp", "chat", "message", "instant", "talk", "support"],
  },
  {
    id: "action-call",
    title: `Call Export Desk (${siteConfig.contact.phoneDisplay})`,
    subtitle: "Mon–Sat · 9:00 AM – 6:30 PM IST · Tiruppur, India",
    group: "Quick Actions",
    href: `tel:${siteConfig.contact.phoneTel}`,
    external: true,
    badge: "Call",
    keywords: ["call", "phone", "number", "telephone", "contact", "ring"],
  },
];

const GARMENT_CATEGORY_ITEMS: SearchIndexItem[] = [
  {
    id: "garments-hub",
    title: "All Garment Categories",
    subtitle: "Explore all private-label OEM & export knitwear collections",
    group: "Garment Programs",
    href: "/garments",
    badge: "Directory",
    keywords: [
      "garments",
      "apparel",
      "clothing",
      "knitwear",
      "collection",
      "catalog",
      "catalogue",
      "categories",
    ],
  },
  ...GARMENT_CATEGORY_DETAILS.map((cat) => ({
    id: `garment-cat-${cat.slug}`,
    title: cat.title,
    subtitle: cat.tagline,
    group: "Garment Programs" as const,
    href: `/garments/${cat.slug}`,
    badge: cat.sizeRange.split(" ")[0],
    keywords: [
      cat.title.toLowerCase(),
      cat.eyebrow.toLowerCase(),
      cat.specsSummary.toLowerCase(),
      ...cat.fabrics.map((f) => f.toLowerCase()),
      ...cat.styles.map((s) => s.toLowerCase()),
      ...cat.finishes.map((f) => f.toLowerCase()),
    ],
  })),
];

const PRODUCT_CATALOG_ITEMS: SearchIndexItem[] = [
  {
    id: "products-all",
    title: "Browse All Fabrics, Yarns & Garments",
    subtitle: "Complete product catalogue for buyer specification development",
    group: "Fabrics & Yarns",
    href: "/products",
    badge: "Products",
    keywords: [
      "product",
      "products",
      "gsm",
      "blends",
      "fabric",
      "yarn",
      "catalogue",
      "catalog",
    ],
  },
  ...PRODUCTS_DATA.map((prod) => ({
    id: `product-${prod.id}`,
    title: prod.name,
    subtitle: prod.cardDescription,
    group:
      prod.category === "Garments"
        ? ("Garment Programs" as const)
        : ("Fabrics & Yarns" as const),
    href:
      prod.category === "Garments"
        ? "/garments"
        : `/products?category=${prod.category.toLowerCase()}`,
    badge: prod.category,
    keywords: [
      prod.name.toLowerCase(),
      prod.category.toLowerCase(),
      prod.productType.toLowerCase(),
      prod.composition.toLowerCase(),
      prod.construction?.toLowerCase() ?? "",
      prod.yarnCount?.toLowerCase() ?? "",
      ...prod.features.map((f) => f.toLowerCase()),
      "gsm",
      "blend",
      "moq",
    ],
  })),
];

const CAPABILITY_ITEMS: SearchIndexItem[] = [
  {
    id: "cap-garment-mfg",
    title: "Garment Manufacturing Division",
    subtitle: "CAD grading, cutting, JUKI & Pegasus sewing lines, AQL 2.5 packing",
    group: "Capabilities & Units",
    href: "/capabilities/garment-manufacturing",
    badge: "Division",
    keywords: [
      "garment manufacturing",
      "stitching",
      "sewing",
      "juki",
      "pegasus",
      "cutting",
      "cad",
      "needle detection",
      "aql",
      "tqm",
      "cmt",
      "full package",
    ],
  },
  {
    id: "cap-knitting",
    title: "Knitting Division (Mayer & Cie)",
    subtitle: "Circular knitting, 4–10 colour auto-stripers, mini jacquards, 18–28 GG",
    group: "Capabilities & Units",
    href: "/capabilities/knitting-division",
    badge: "Knitting",
    keywords: [
      "knitting",
      "mayer",
      "circular",
      "auto striper",
      "jacquard",
      "interlock",
      "rib",
      "lycra",
      "single jersey",
      "sidco",
      "gg",
      "gauge",
    ],
  },
  {
    id: "cap-dyeing",
    title: "Dyeing Division & Effluent Plant (ZLD)",
    subtitle: "Brazzoli & Dilmenler HTHP, SETEX/ORGATEX, TubeTex, SIMEM ZLD",
    group: "Capabilities & Units",
    href: "/capabilities/dyeing-division",
    badge: "Dyeing",
    keywords: [
      "dyeing",
      "brazzoli",
      "dilmenler",
      "hthp",
      "soft flow",
      "setex",
      "orgatex",
      "thies",
      "stenter",
      "tubetex",
      "compacting",
      "mario crosta",
      "peach finish",
      "raising",
      "zld",
      "zero liquid discharge",
      "etp",
      "perundurai",
      "konica minolta",
      "spectrophotometer",
    ],
  },
  {
    id: "cap-fabric",
    title: "Fabric Division (Testing, Inspection & Despatch)",
    subtitle: "11-point lab testing, 4-Point & 10-Point QC, 30–45 day lead times",
    group: "Capabilities & Units",
    href: "/capabilities/fabric-division",
    badge: "Lab & QC",
    keywords: [
      "fabric division",
      "fabric testing",
      "laboratory",
      "lab",
      "spirality",
      "shrinkage",
      "fastness",
      "4 point",
      "10 point",
      "inspection",
      "sticker",
      "despatch",
      "dispatch",
      "lead time",
      "solid",
      "melange",
      "all over print",
    ],
  },
  {
    id: "cap-overview",
    title: "All Capabilities Overview",
    subtitle: "Four vertically integrated divisions from yarn to finished export garment",
    group: "Capabilities & Units",
    href: "/capabilities",
    badge: "Hub",
    keywords: ["capabilities", "divisions", "vertical", "manufacturing"],
  },
];

const COMPANY_ITEMS: SearchIndexItem[] = [
  {
    id: "page-about",
    title: "About Value Textiles",
    subtitle: "Our story, direct manufacturer vs agent comparison & Tiruppur units",
    group: "Company & Quality",
    href: "/about",
    badge: "About",
    keywords: [
      "about",
      "company",
      "who we are",
      "manufacturer",
      "middleman",
      "history",
      "tirupur",
      "tiruppur",
      "brands",
    ],
  },
  {
    id: "page-who-we-work-with",
    title: "Who We Work With",
    subtitle: "Private-label brands, startups, kids brands, activewear & buying houses",
    group: "Company & Quality",
    href: "/who-we-work-with",
    badge: "Partners",
    keywords: [
      "who we work with",
      "clients",
      "buyers",
      "brands",
      "startups",
      "private label",
      "buying house",
      "retailers",
      "online sellers",
    ],
  },
  {
    id: "page-infrastructure",
    title: "Our Infrastructure & Specialized Fabrics",
    subtitle: "Unit facilities, machinery gallery & specialized fabric compositions",
    group: "Company & Quality",
    href: "/infrastructure",
    badge: "Facilities",
    keywords: [
      "infrastructure",
      "machinery",
      "gallery",
      "facilities",
      "specialized fabrics",
      "viscose",
      "modal",
      "tencel",
    ],
  },
  {
    id: "page-quality",
    title: "Quality Assurance & Certifications",
    subtitle: "OEKO-TEX Standard 100, GOTS, GRS, BCI, 4-point QC & AQL audits",
    group: "Company & Quality",
    href: "/quality",
    badge: "Certified",
    keywords: [
      "quality",
      "certifications",
      "certificate",
      "oeko-tex",
      "oekotex",
      "gots",
      "grs",
      "bci",
      "ocs",
      "zdhc",
      "compliance",
      "audit",
      "testing",
    ],
  },
  {
    id: "page-resources",
    title: "Technical Resources & GSM Guides",
    subtitle: "Knit fabric GSM & yarn count charts, 4-point guide & compliance specs",
    group: "Company & Quality",
    href: "/resources",
    badge: "Guides",
    keywords: [
      "resources",
      "guide",
      "chart",
      "gsm",
      "yarn count",
      "conversion",
      "astm",
      "technical",
    ],
  },
  {
    id: "page-blog",
    title: "Blog & Sourcing Insights",
    subtitle: "Articles on Tiruppur knitwear sourcing, dyeing & garment exports",
    group: "Company & Quality",
    href: "/blog",
    badge: "Blog",
    keywords: ["blog", "articles", "news", "insights", "journal"],
  },
  {
    id: "page-contact",
    title: "Contact Us & Factory Addresses",
    subtitle: "Get in touch · Emails, +91 93456 30303 & all 3 Tiruppur/Perundurai units",
    group: "Company & Quality",
    href: "/contact",
    badge: "Contact",
    keywords: [
      "contact",
      "address",
      "location",
      "map",
      "email",
      "office",
      "parapalayam",
      "sidco",
      "sipcot",
      "support",
      "hours",
    ],
  },
];

export const SEARCH_INDEX: SearchIndexItem[] = [
  ...STATIC_ACTIONS,
  ...GARMENT_CATEGORY_ITEMS,
  ...CAPABILITY_ITEMS,
  ...COMPANY_ITEMS,
  ...PRODUCT_CATALOG_ITEMS,
];

export const SUGGESTED_SEARCH_CHIPS = [
  "Bulk Quote",
  "Order Samples",
  "T-Shirts & Polos",
  "Kids Wear",
  "Cotton Jersey GSM",
  "Knitting Division",
  "Dyeing & ZLD",
  "OEKO-TEX Quality",
  "About Us",
  "Contact",
];

export function searchSite(rawQuery: string): SearchIndexItem[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) {
    // Return key starting points across groups when query is empty
    return [
      STATIC_ACTIONS[0],
      STATIC_ACTIONS[1],
      STATIC_ACTIONS[3],
      GARMENT_CATEGORY_DETAILS.length > 0
        ? GARMENT_CATEGORY_ITEMS[1]
        : GARMENT_CATEGORY_ITEMS[0],
      GARMENT_CATEGORY_ITEMS[2],
      CAPABILITY_ITEMS[1],
      CAPABILITY_ITEMS[2],
      COMPANY_ITEMS[0],
      COMPANY_ITEMS[6],
    ].filter(Boolean);
  }

  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = SEARCH_INDEX.map((item) => {
    const titleLower = item.title.toLowerCase();
    const subtitleLower = item.subtitle.toLowerCase();
    const badgeLower = (item.badge ?? "").toLowerCase();
    const keywordsJoined = item.keywords.join(" ");

    let score = 0;

    // Full phrase bonus
    if (titleLower === q) score += 100;
    else if (titleLower.startsWith(q)) score += 60;
    else if (titleLower.includes(q)) score += 40;
    if (keywordsJoined.includes(q)) score += 25;
    if (subtitleLower.includes(q)) score += 15;

    // Multi-word matching: every token must match somewhere for a clean hit
    const allTokensMatch = tokens.every(
      (t) =>
        titleLower.includes(t) ||
        subtitleLower.includes(t) ||
        badgeLower.includes(t) ||
        keywordsJoined.includes(t)
    );

    if (!allTokensMatch) return { item, score: 0 };

    for (const t of tokens) {
      if (titleLower.includes(t)) score += 20;
      if (badgeLower.includes(t)) score += 12;
      if (keywordsJoined.includes(t)) score += 10;
      if (subtitleLower.includes(t)) score += 5;
    }

    // Prioritize Quick Actions when actionable keywords are searched
    if (item.group === "Quick Actions") score += 8;

    return { item, score };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);

  return scored.slice(0, 14);
}

