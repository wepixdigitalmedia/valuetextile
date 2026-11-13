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
  tagline: "From yarn to garment, under one roof.",
  description:
    "Tirupur-based vertically integrated knitwear manufacturer and exporter. Knitted fabrics and garments for international brands with in-house dyeing, lab testing, and inspection.",
  url: "https://valuetextiles.com",
  contact: {
    addressShort: "Parapalayam, Tirupur 641607, India",
    addressFull: "No. 3/197 H, Parapalayam, Tirupur 641607",
    phoneDisplay: "+91 93456 30303",
    phoneTel: "+919345630303",
    email: "export@valuetextiles.com",
    whatsapp: "https://wa.me/919345630303",
  },
  utilityBar: {
    searchPlaceholder: "Search fabrics, blends, GSM…",
    language: "EN",
    resourcesHref: "/resources",
    whatsappHref: "https://wa.me/919345630303",
    exportEnquiriesHref: "/contact#quote",
  },
  navigation: [
    {
      label: "Fabrics",
      href: "/products#fabrics",
      dropdown: [
        { label: "Single Jersey & Rib", href: "/products#single-jersey" },
        { label: "Interlock & Pique", href: "/products#interlock-pique" },
        { label: "Fleece & French Terry", href: "/products#fleece-terry" },
        { label: "Modal & Tencel Blends", href: "/products#modal-tencel" },
        { label: "Lycra & Stretch Knits", href: "/products#lycra-stretch" },
        { label: "Yarn-Dyed & Melange", href: "/products#yarn-dyed" },
      ],
    },
    {
      label: "Garments",
      href: "/products#garments",
      dropdown: [
        { label: "Private Label T-Shirts", href: "/products#t-shirts" },
        { label: "Polo Shirts", href: "/products#polos" },
        { label: "Hoodies & Sweatshirts", href: "/products#hoodies" },
        { label: "Kids & Infant Wear", href: "/products#kids-wear" },
        { label: "Custom Sourcing Programs", href: "/products#custom" },
      ],
    },
    {
      label: "Capabilities",
      href: "/capabilities",
      dropdown: [
        { label: "Yarn Sourcing Division", href: "/capabilities#yarn" },
        { label: "Knitting Division", href: "/capabilities#knitting" },
        { label: "Dyeing & Finishing", href: "/capabilities#dyeing" },
        { label: "In-House Testing Lab", href: "/capabilities#lab" },
        { label: "Garment Manufacturing", href: "/capabilities#garment" },
      ],
    },
    {
      label: "Quality",
      href: "/quality",
      dropdown: [
        { label: "4-Point Fabric Inspection", href: "/quality#inspection" },
        { label: "Physical & Chemical Testing", href: "/quality#testing" },
        { label: "AQL 1.5 / 2.5 Audits", href: "/quality#aql" },
        { label: "Compliance & Certifications", href: "/quality#certifications" },
      ],
    },
  ] as NavItem[],
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Products", href: "/products" },
    { label: "Quality", href: "/quality" },
  ] as NavItem[],
  divisions: [
    { label: "Yarn Division", href: "/capabilities#yarn" },
    { label: "Knitting Division", href: "/capabilities#knitting" },
    { label: "Dyeing Division", href: "/capabilities#dyeing" },
    { label: "Garment Division", href: "/capabilities#garment" },
  ] as DivisionItem[],
  hero: {
    eyebrow: "KNITWEAR MANUFACTURER & EXPORTER · TIRUPUR",
    headlineLine1: "From yarn to garment,",
    headlineLine2: "under one roof.",
    title: "From yarn to garment, under one roof.",
    descriptionPrefix: "Knitted fabrics and garments for international brands, with ",
    descriptionHighlight: "in-house dyeing, lab testing and inspection",
    descriptionSuffix: ", all in one place.",
    description:
      "Knitted fabrics and garments for international brands, with in-house dyeing, lab testing and inspection, all in one place.",
    quickFacts: [
      "Private label & custom programs",
      "Low minimum orders",
      "Sampling before bulk",
    ],
    buyerQuote: "We deal with one factory team, one quality standard and direct pricing from yarn to garment export.",
    statNumber: "40+",
    statCaption: "Buyers worldwide. And counting.",
    primaryCta: {
      label: "Get a Quote",
      href: "/contact#quote",
    },
    secondaryCta: {
      label: "Request Fabric Samples",
      href: "/contact?type=samples",
    },
    imagePlaceholder: "PREMIUM KNITTED TEXTILES",
    imageSrc: "/images/hero-fabric-flow.jpg",
    imageUrl: "/images/hero-fabric-flow.jpg",
    imageAlt: "Luxurious flowing silk and premium knitted textiles banner",
  },
  stats: [
    { value: "20+", label: "Years of experience" },
    { value: "40+", label: "Buyers worldwide" },
    { value: "250+", label: "Tons of fabric per month" },
    { value: "60,000+", label: "Garments per month" },
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
    title: "Every stage, under our own roof",
    steps: [
      { step: "01", title: "Yarn" },
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
        title: "One roof, full traceability",
        description:
          "From yarn to finished garment, every stage is managed in-house.",
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
