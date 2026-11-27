import React, { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EnquiryTab } from "@/components/layout/EnquiryTab";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/config/siteContent";

const fontManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Value Textiles | Integrated Knitwear Production, Tirupur",
    template: "%s | Value Textiles",
  },
  description:
    "Knitting, dyeing, finishing, lab testing, garmenting and export packing under one accountable team in Tirupur, India. Private label for international brands.",
  keywords: [
    "Value Textiles",
    "Knitwear manufacturer Tirupur",
    "Fabric manufacturer India",
    "Garment exporter",
    "Knitted fabric supplier",
    "Cotton viscose modal blends",
    "T-shirts private label",
    "Mayer & Cie circular knitting",
    "OEKO-TEX Class 1",
    "GOTS organic cotton",
  ],
  authors: [{ name: "Value Textiles" }],
  creator: "Value Textiles",
  publisher: "Value Textiles",
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "./" },
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
    url: siteConfig.url,
    siteName: "Value Textiles",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
    logo: `${siteConfig.url}/Value%20Textiles%20Leaf%20Emblem%20Logo.png`,
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
      className={`${fontManrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[var(--white)] text-[var(--black)] font-sans selection:bg-[var(--accent)]/15 selection:text-[var(--black)]"
      >
        <SmoothScroll />
        <UtilityBar />
        <Suspense
          fallback={
            <div className="h-[76px] sm:h-[84px] md:h-[92px] lg:h-[98px] bg-[var(--white)] border-b border-[var(--line)]" />
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
