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
  tagline: "Knitwear garments, made in Tiruppur from our own fabric.",
  description:
    "Tiruppur garment manufacturer and exporter. T-shirts, polos, kids wear, knitwear and activewear for international brands, made with our own fabric and in-house dyeing.",
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
    resourcesHref: "/resources",
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
      label: "Infrastructure",
      href: "/infrastructure",
    },
    {
      label: "Capabilities",
      href: "/capabilities",
      dropdown: [
        { label: "Garment Manufacturing", href: "/capabilities/garment-manufacturing" },
        { label: "Knitting Division", href: "/capabilities/knitting-division" },
        { label: "Dyeing Division", href: "/capabilities/dyeing-division" },
        { label: "Fabric Division", href: "/capabilities/fabric-division" },
      ],
    },
    {
      label: "Quality",
      href: "/quality",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ] as NavItem[],
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Garments", href: "/garments" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Capabilities", href: "/capabilities" },
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
    eyebrow: "GARMENT MANUFACTURER & EXPORTER · TIRUPPUR",
    headlineLine1: "Knitwear garments,",
    headlineLine2: "made in Tiruppur from our own fabric.",
    title: "Knitwear garments, made in Tiruppur from our own fabric.",
    descriptionPrefix: "T-shirts, polos, kids wear, knitwear and activewear for international brands. ",
    descriptionHighlight: "In-house circular knitting, soft-flow dyeing and lab testing",
    descriptionSuffix: " back every production run.",
    description:
      "T-shirts, polos, kids wear, knitwear and activewear for international brands. In-house circular knitting, soft-flow dyeing and lab testing back every production run.",
    quickFacts: [
      "Private label",
      "Samples before bulk",
      "Export quality",
      "Scalable volumes",
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
        href: "/products#knitted-fabrics",
      },
      {
        title: "T-Shirts & Polos",
        description: "Private label and custom programs",
        placeholder: "[PHOTO]",
        href: "/products#t-shirts-polos",
      },
      {
        title: "Kids & Baby Wear",
        description: "Soft, tested, buyer-compliant",
        placeholder: "[PHOTO]",
        href: "/products#kids-baby-wear",
      },
      {
        title: "Yarn-Dyed Fabrics",
        description: "Neppy, melange and special fibre blends",
        placeholder: "[PHOTO]",
        href: "/products#yarn-dyed-fabrics",
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
