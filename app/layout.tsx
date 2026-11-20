import React, { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import {
  Plus_Jakarta_Sans,
  Figtree,
  Noto_Sans_Tamil,
} from "next/font/google";
import "./globals.css";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EnquiryTab } from "@/components/layout/EnquiryTab";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/config/siteContent";

const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-vt-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const fontBody = Figtree({
  variable: "--font-vt-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fontTamil = Noto_Sans_Tamil({
  variable: "--font-vt-tamil",
  subsets: ["tamil"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1F1F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Value Textiles | Knitted Fabric & Garment Manufacturer in Tirupur",
    template: "%s | Value Textiles",
  },
  description:
    "Tirupur-based integrated knitwear manufacturer and exporter. In-house circular knitting, soft-flow dyeing, lab testing, finishing, and garment manufacturing for global brands.",
  keywords: [
    "Value Textiles",
    "Knitwear manufacturer Tirupur",
    "Fabric manufacturer India",
    "Garment exporter",
    "Knitted fabric supplier",
    "Cotton viscose modal blends",
    "T-shirts private label",
    "Mayer & Cie circular knitting",
    "Zero Liquid Discharge",
    "OEKO-TEX Class 1",
    "GOTS organic cotton",
  ],
  authors: [{ name: "Value Textiles" }],
  creator: "Value Textiles",
  publisher: "Value Textiles",
  metadataBase: new URL("https://valuetextiles.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Value Textiles | Knitted Fabric & Garment Manufacturer in Tirupur",
    description:
      "Integrated knitwear manufacturing, soft-flow dyeing, laboratory testing, and apparel production in Tirupur, India for international brands.",
    url: "https://valuetextiles.com",
    siteName: "Value Textiles",
    images: [
      {
        url: "/images/Value%20Textiles%20Cotton%20Flame%20Logo.png",
        width: 2172,
        height: 724,
        alt: "Value Textiles Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Textiles | Knitted Fabric & Garment Manufacturer in Tirupur",
    description:
      "Integrated knitwear fabric and garment manufacturing in Tirupur, India.",
    images: ["/images/Value%20Textiles%20Cotton%20Flame%20Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: "https://valuetextiles.com/images/Value%20Textiles%20Cotton%20Flame%20Logo.png",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 3/197 H, Parapalayam",
      addressLocality: "Tirupur",
      postalCode: "641607",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneTel,
      contactType: "sales and inquiries",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Tamil"],
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontHeading.variable} ${fontBody.variable} ${fontTamil.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1F1F1F] font-body selection:bg-[#C8741F]/20 selection:text-[#1F1F1F]"
      >
        <SmoothScroll />
        <UtilityBar />
        <Suspense
          fallback={
            <div className="h-[76px] sm:h-[84px] md:h-[92px] lg:h-[98px] bg-white border-b border-[#E6E2DB]" />
          }
        >
          <SiteHeader />
        </Suspense>
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <SiteFooter />
        <EnquiryTab />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
