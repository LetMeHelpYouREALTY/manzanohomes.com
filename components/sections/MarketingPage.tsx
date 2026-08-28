import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import RealScoutHomeValue from "@/components/realscout/RealScoutHomeValue";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import JsonLd from "@/components/seo/JsonLd";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

type CtaKind = "tour" | "contact" | "none";

function MarketingCta({
  showForm,
  cta = "tour",
}: {
  showForm?: boolean;
  cta?: CtaKind;
}) {
  if (showForm) {
    return (
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Talk with {SITE.agent}
          </h2>
          <ContactForm />
        </div>
      </section>
    );
  }

  switch (cta) {
    case "none":
      return null;
    case "contact":
      return (
        <section className="bg-primary-700 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Questions for the office?</h2>
          <p className="mt-3">
            {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
            {SITE.address.postalCode}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary-800"
          >
            Contact Manzano Homes
          </Link>
        </section>
      );
    case "tour":
      return (
        <section className="bg-primary-700 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Tour Manzano Peak this week</h2>
          <p className="mt-3">
            {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
            {SITE.address.postalCode}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary-800"
          >
            Request a tour
          </Link>
        </section>
      );
    default: {
      const _exhaustive: never = cta;
      return _exhaustive;
    }
  }
}

export type MarketingContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  imageAlt: string;
  paragraphs: string[];
  stats?: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
  showListings?: boolean;
  showForm?: boolean;
  showHomeValue?: boolean;
  cta?: CtaKind;
};

export default function MarketingPage({ content }: { content: MarketingContent }) {
  const visual = getPageVisual(content.path);
  const schemas = [
    webPageSchema({
      name: visual.h1,
      description: content.description,
      path: content.path,
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: visual.h1, url: content.path },
    ]),
    faqSchema(content.faqs),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero {...getHeroProps(content.path)} showCtas={content.cta !== "contact"} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-4 text-lg text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <PageVisualBlock path={content.path} />

      {content.showHomeValue ? (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
              Instant estimate widget
            </h2>
            <RealScoutHomeValue />
          </div>
        </section>
      ) : null}

      {content.stats?.length ? (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary-300">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {content.showListings ? (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
              Live listings near Manzano
            </h2>
            <RealScoutListings />
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {content.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-2 text-slate-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <MarketingCta showForm={content.showForm} cta={content.cta} />
    </>
  );
}
