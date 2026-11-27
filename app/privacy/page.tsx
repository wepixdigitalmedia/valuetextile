import React from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/config/siteContent";
import { factText, factValue } from "@/config/ownerFacts";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Value Textiles collects, uses and protects the details you send through this website.",
};

export default function PrivacyPage() {
  const { contact } = siteConfig;
  const name = factText("legalName");
  const registration = factValue("registration");

  return (
    <LegalPage
      title="Privacy Policy"
      updated="27 November 2026"
      intro={
        <p>
          This policy explains what personal information {name} collects through this website, why we collect it, and
          the choices you have. We keep it short because we collect very little.
        </p>
      }
      sections={[
        {
          heading: "Who we are",
          body: (
            <>
              <p>
                This website is run by {name}, {contact.addressFull}, India.
                {registration ? ` Registration: ${registration}.` : ""} You can reach us at{" "}
                <a className="underline underline-offset-2 hover:text-[var(--accent)]" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What we collect",
          body: (
            <>
              <p>
                When you send a quote request, sample request or enquiry, we collect what you type into the form: your
                name, work email, and optionally your company, country, phone number, the products you are interested
                in, quantities and any notes or tech-pack details.
              </p>
              <p>
                Our hosting provider may also record basic technical information such as your IP address and browser
                type in server logs. This site does not currently use advertising or analytics cookies. If that
                changes, we will update this page first.
              </p>
            </>
          ),
        },
        {
          heading: "Why we use it",
          body: (
            <p>
              We use your details to reply to your request, prepare costing and samples, and manage any business
              relationship that follows. We do this because you asked us to, and because it is in our legitimate
              interest to answer business enquiries. We do not use your details for unrelated marketing, and we do not
              sell them.
            </p>
          ),
        },
        {
          heading: "Where it is stored and who can see it",
          body: (
            <>
              <p>
                Enquiries are saved in a database provided by Google (Firebase, Cloud Firestore), which acts as our
                service provider. Your information may therefore be processed on servers outside India and outside your
                own country.
              </p>
              <p>
                Only our merchandising and management team read enquiries. We share details with other companies only
                where needed to deliver what you asked for, for example logistics partners once an order is placed, or
                where the law requires it.
              </p>
            </>
          ),
        },
        {
          heading: "How long we keep it",
          body: (
            <p>
              We keep an enquiry for as long as needed to respond and to manage any business relationship that follows.
              After that we delete it or remove the personal details.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You can ask us to show you the information we hold about you, correct it, delete it, or stop using it. To
              do this, email{" "}
              <a className="underline underline-offset-2 hover:text-[var(--accent)]" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              . If you are in the European Economic Area or the United Kingdom, you may also complain to your local data
              protection authority.
            </p>
          ),
        },
        {
          heading: "Security",
          body: (
            <p>
              We use reputable providers and restrict who can read enquiries. No system is perfectly secure, so please
              do not send passwords or payment details through the forms.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          body: <p>If we change this policy, we will update the date at the top of this page.</p>,
        },
      ]}
    />
  );
}
