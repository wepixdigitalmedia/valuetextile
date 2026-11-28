export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export interface StatItemData {
  value: string;
  label: string;
}

export interface ProductItemData {
  title: string;
  description: string;
  placeholder: string;
  href?: string;
}

export interface ProcessStepData {
  step: string;
  title: string;
}

export interface FeatureItemData {
  number: string;
  title: string;
  description: string;
}

export interface CertificateData {
  name: string;
  image: string;
  issuer: string;
  scope: string;
  number?: string;
  placeholder?: string;
}

export interface DivisionItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Value Textiles",
  tagline: "One partner, from knit to shipped.",
  description:
    "Integrated knitwear production in Tiruppur. Knitting, dyeing, finishing, lab testing, garmenting and export packing under one accountable team, for international brands.",
  url: "https://valuetextiles.net",
  contact: {
    addressShort: "Parapalayam, Tiruppur 641607, India",
    addressFull: "No. 3/197 H, Parapalayam, Tiruppur - 641607",
    knittingAddress: "Shed No. 61, SIDCO, Tiruppur - 641606",
    dyeingAddress: "K6, K7, K8, K9, SIPCOT Industrial Growth Centre, P.V. Palayam (P.O), Perundurai - 638052",
    phoneDisplay: "+91 93456 30303",
    phoneTel: "+919345630303",
    email: "key@valuetextiles.net",
    emails: [
      "eswarasamy@valuetextiles.net",
      "sundaram@valuetextiles.net",
      "key@valuetextiles.net",
    ],
    whatsapp: "https://wa.me/919345630303",
  },
  utilityBar: {
    searchPlaceholder: "Search products, bulk quotes, samples...",
    resourcesHref: "/blog",
    blogHref: "/blog",
    whatsappHref: "https://wa.me/919345630303",
    exportEnquiriesHref: "/contact#quote",
  },
  navigation: [
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Who We Work With", href: "/who-we-work-with" },
      ],
    },
    {
      label: "Garments",
      href: "/garments",
      dropdown: [
        { label: "T-Shirts & Polos", href: "/garments/t-shirts-and-polos" },
        { label: "Kids & Baby Wear", href: "/garments/kids-and-baby-wear" },
        { label: "Men's & Women's Knitwear", href: "/garments/mens-and-womens-knitwear" },
        { label: "Activewear & Loungewear", href: "/garments/activewear-and-loungewear" },
      ],
    },
    {
      label: "Capabilities",
      href: "/capabilities",
      dropdown: [
        { label: "Garment manufacturing", href: "/capabilities/garment-manufacturing" },
        { label: "Yarn sourcing & testing", href: "/capabilities/yarn-sourcing" },
        { label: "Knitting", href: "/capabilities/knitting-division" },
        { label: "Dyeing", href: "/capabilities/dyeing-division" },
        { label: "Fabric Lab & Inspection", href: "/capabilities/fabric-division" },
      ],
    },
    {
      label: "Quality",
      href: "/quality",
    },
    {
      label: "How to order",
      href: "/how-to-order",
    },
  ] as NavItem[],
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Garments", href: "/garments" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "How to order", href: "/how-to-order" },
    { label: "Blog", href: "/blog" },
    { label: "Quality", href: "/quality" },
  ] as NavItem[],
  divisions: [
    { label: "Garment Division", href: "/capabilities/garment-manufacturing" },
    { label: "Knitting Division", href: "/capabilities/knitting-division" },
    { label: "Dyeing Division", href: "/capabilities/dyeing-division" },
    { label: "Fabric Division", href: "/capabilities/fabric-division" },
  ] as DivisionItem[],
  hero: {
    eyebrow: "INTEGRATED KNITWEAR PRODUCTION · TIRUPPUR",
    headlineLine1: "One partner,",
    headlineLine2: "from knit to shipped.",
    title: "One partner, from knit to shipped.",
    descriptionPrefix: "We control every stage after yarn: ",
    descriptionHighlight: "circular knitting, soft-flow dyeing, finishing, lab testing, garmenting and export packing",
    descriptionSuffix: ". One team answers for the result.",
    description:
      "We control every stage after yarn: circular knitting, soft-flow dyeing, finishing, lab testing, garmenting and export packing. One team answers for the result.",
    quickFacts: [
      "60,000+ garments / month",
      "250+ tons fabric / month",
      "OEKO-TEX Class 1",
      "GOTS · BCI · GRS",
    ],
    buyerQuote: "Direct manufacturing oversight from fabric knitting to final AQL audit keeps shade consistency, stitching quality, and schedules dependable.",
    statNumber: "40+",
    statCaption: "Buyers worldwide. And counting.",
    primaryCta: {
      label: "Get a Quote",
      href: "/contact#quote",
    },
    secondaryCta: {
      label: "Request Samples",
      href: "/contact?type=samples",
    },
    imagePlaceholder: "GARMENT MANUFACTURING IN TIRUPPUR",
    imageSrc: "/images/hero-fabric-flow.jpg",
    imageUrl: "/images/hero-fabric-flow.jpg",
    imageAlt: "Garment manufacturing and clothing production in Tiruppur",
  },
  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "40+", label: "Buyers Worldwide" },
  ] as StatItemData[],
  whatWeMake: {
    eyebrow: "WHAT WE MAKE",
    title: "Fabrics and garments, crafted for your brand",
    items: [
      {
        title: "Knitted Fabrics",
        description: "Cotton, viscose, modal, Tencel and Lycra blends",
        placeholder: "[PHOTO]",
        href: "/capabilities/fabric-division",
      },
      {
        title: "T-Shirts & Polos",
        description: "Private label and custom programs",
        placeholder: "[PHOTO]",
        href: "/garments/t-shirts-and-polos",
      },
      {
        title: "Kids & Baby Wear",
        description: "Soft, tested, buyer-compliant",
        placeholder: "[PHOTO]",
        href: "/garments/kids-and-baby-wear",
      },
      {
        title: "Yarn-Dyed Fabrics",
        description: "Neppy, melange and special fibre blends",
        placeholder: "[PHOTO]",
        href: "/capabilities/fabric-division",
      },
    ] as ProductItemData[],
  },
  process: {
    eyebrow: "OUR PROCESS",
    title: "Structured production control from fabric to dispatch",
    steps: [
      { step: "01", title: "Yarn Procurement" },
      { step: "02", title: "Knitting" },
      { step: "03", title: "Dyeing" },
      { step: "04", title: "Finishing" },
      { step: "05", title: "Lab Testing" },
      { step: "06", title: "Inspection" },
      { step: "07", title: "Garmenting" },
      { step: "08", title: "Despatch" },
    ] as ProcessStepData[],
  },
  whyPartner: {
    eyebrow: "WHY VALUE TEXTILES",
    title: "Why global brands partner with us",
    items: [
      {
        number: "01",
        title: "Integrated in-house operations",
        description:
          "Vetted yarns are knitted, dyed, tested, cut, and stitched inside our own units.",
      },
      {
        number: "02",
        title: "Flexible order sizes",
        description:
          "[CONFIRM MOQ RANGE] for start-ups and established brands.",
      },
      {
        number: "03",
        title: "In-house lab and inspection",
        description:
          "Fabric is tested and checked to the 4-point system before it ships.",
      },
      {
        number: "04",
        title: "Reliable despatch",
        description:
          "The right quantity, at the right time, packed safely for export.",
      },
    ] as FeatureItemData[],
  },
  certifications: {
    eyebrow: "CERTIFICATIONS",
    items: [
      {
        name: "OEKO-TEX® Standard 100",
        image: "/images/certifications/cert-1.jpg",
        issuer: "Hohenstein Institute",
        scope: "Class 1 (Baby Articles) • Test no. 09.HIN.70527",
      },
      {
        name: "Better Cotton Initiative (BCI)",
        image: "/images/certifications/cert-2.jpg",
        issuer: "Better Cotton",
        scope: "Sustainably Farmed Cotton Fiber Sourcing",
      },
      {
        name: "Global Recycled Standard (GRS)",
        image: "/images/certifications/cert-3.jpg",
        issuer: "Textile Exchange",
        scope: "Recycled Polyester & Blended Fiber Traceability",
      },
      {
        name: "GOTS (Global Organic)",
        image: "/images/certifications/cert-4.jpg",
        issuer: "Control Union",
        scope: "Organic Knitting & Dyeing • CU828190",
      },
    ] as CertificateData[],
  },
  ctaBand: {
    title: "Ready to start your next collection?",
    buttonLabel: "Get a Quote",
    buttonHref: "/contact",
  },
};
