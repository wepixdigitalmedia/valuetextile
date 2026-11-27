import React from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/config/siteContent";
import { factText } from "@/config/ownerFacts";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using the Value Textiles website and for quotes and enquiries made through it.",
};

export default function TermsPage() {
  const { contact } = siteConfig;
  const name = factText("legalName");

  return (
    <LegalPage
      title="Terms of Use"
      updated="27 November 2026"
      intro={
        <p>
          By using this website you agree to these terms. They cover the website itself and how quotes and enquiries
          made through it work. If you do not agree, please do not use the site.
        </p>
      }
      sections={[
        {
          heading: "About this site",
          body: (
            <p>
              This website is operated by {name}, {contact.addressFull}, India. It describes our garment manufacturing
              and lets you send us enquiries.
            </p>
          ),
        },
        {
          heading: "Information on the site",
          body: (
            <p>
              We work to keep the information accurate, but specifications, capacities and lead times shown here are
              general. They are not a guarantee for any particular order and may change. Always confirm the details of
              your order with us in writing.
            </p>
          ),
        },
        {
          heading: "Quotes and orders",
          body: (
            <p>
              Sending an enquiry does not create an order, and a quote is not a binding offer until we confirm it in
              writing. An order is binding only when both sides have agreed its quantity, price, delivery and payment
              terms in writing, for example in an order confirmation or contract.
            </p>
          ),
        },
        {
          heading: "Your designs and files",
          body: (
            <p>
              Designs, tech packs and samples you send remain yours. We use them only to answer your enquiry or to
              carry out an order you have placed, and we treat them as confidential.
            </p>
          ),
        },
        {
          heading: "Our content and other brands",
          body: (
            <p>
              The text, photographs and design of this site belong to {name} unless stated otherwise. Brand names and
              logos of other companies belong to their owners and appear here only to show who we work with.
            </p>
          ),
        },
        {
          heading: "Limits of liability",
          body: (
            <p>
              We provide this website as it is. To the extent the law allows, we are not liable for loss that comes from
              using the site or relying on its general information. Nothing in these terms limits liability that cannot
              be limited by law.
            </p>
          ),
        },
        {
          heading: "Links to other sites",
          body: <p>Where we link to other websites, we do not control them and are not responsible for their content.</p>,
        },
        {
          heading: "Governing law",
          body: <p>These terms are governed by the laws of India.</p>,
        },
        {
          heading: "Changes and contact",
          body: (
            <p>
              We may update these terms and will change the date at the top when we do. Questions can be sent to{" "}
              <a className="underline underline-offset-2 hover:text-[var(--accent)]" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
