import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { getStreetProperty, STREET_PROPERTIES } from "@/lib/content/properties";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, residenceSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return STREET_PROPERTIES.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const property = getStreetProperty(slug);
  if (!property) {
    return {};
  }
  return pageMetadata({
    title: property.title,
    description: property.description,
    path: property.path,
  });
}

export default async function PropertyStreetPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getStreetProperty(slug);
  if (!property) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: property.h1,
            description: property.description,
            path: property.path,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Homes for Sale", url: "/homes-for-sale" },
            { name: property.fullAddress, url: property.path },
          ]),
          residenceSchema({
            name: property.fullAddress,
            description: property.description,
            path: property.path,
            streetAddress: `${property.streetNumber} Manzano Peak Ave`,
          }),
          faqSchema(property.faqs),
        ]}
      />
      <PageHero
        title={property.h1}
        subtitle={property.subtitle}
        imageSrc={property.heroSrc}
        imageAlt={property.heroAlt}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">{property.h2}</h2>
          {property.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-lg text-slate-700">
              {paragraph}
            </p>
          ))}
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {property.facts.map((fact) => (
              <div key={fact.label} className="rounded-lg border border-slate-200 p-4">
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-slate-800">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-8 flex flex-wrap gap-3">
            {property.related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-lg border border-primary-600 px-4 py-2 font-semibold text-primary-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Live listings near {property.streetNumber} Manzano Peak Ave
          </h2>
          <RealScoutListings />
        </div>
      </section>

      <FaqSection faqs={property.faqs} />
      <CtaBand
        title={`Tour ${property.streetNumber} Manzano Peak Ave this week`}
        body={`Call ${SITE.phoneDisplay} for current MLS status on this address.`}
      />
    </>
  );
}
