import Image from "next/image";
import Link from "next/link";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import CalendlySection from "@/components/calendly/CalendlySection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import FaqSection from "@/components/sections/FaqSection";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import JsonLd from "@/components/seo/JsonLd";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { STREET_PROPERTIES } from "@/lib/content/properties";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  realEstateListingListSchema,
  webPageSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

const visual = getPageVisual("/");
const hero = getHeroProps("/");

export const metadata = pageMetadata({
  title: "Manzano Homes | Las Vegas 89121 Real Estate | Expert Buying & Selling",
  description:
    "Manzano Peak and 89121 Las Vegas homes. Live MLS search, valuations, and tours with Dr. Jan Duffy, BHHS Nevada Properties. 3693 Manzano Peak Ave.",
  path: "/",
});

const faqs = [
  {
    question: "Where is Manzano Homes located?",
    answer: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}. Hours: ${SITE.hoursDisplay}.`,
  },
  {
    question: "How do I search live listings?",
    answer:
      "Use the live MLS search on the Homes for Sale page, book a tour on Calendly, or call for a saved search on 89121 streets.",
  },
];

const featuredProperties = STREET_PROPERTIES.map((property) => ({
  name: property.fullAddress,
  path: property.path,
  streetAddress: `${property.streetNumber} Manzano Peak Ave`,
  description: property.subtitle,
}));

const exploreLinks: Array<{ href: string; label: string }> = [
  { href: "/89121-real-estate", label: "89121 homes for sale" },
  { href: "/89178-real-estate", label: "89178 Mountains Edge real estate" },
  { href: "/89179-real-estate", label: "89179 Southern Highlands real estate" },
  { href: "/89138-real-estate", label: "89138 Summerlin West real estate" },
  { href: "/manzano-peak-neighborhood", label: "Manzano Peak neighborhood guide" },
  { href: "/homes-near-manzano-elementary", label: "Homes near Manzano Elementary School" },
  { href: "/homes-near-green-valley-high-school", label: "Homes near Green Valley High School" },
  { href: "/homes-near-coronado-high-school", label: "Homes near Coronado High School" },
  { href: "/buying-guide", label: "89121 buying guide" },
  { href: "/selling-guide", label: "Manzano Peak selling guide" },
  { href: "/market-reports", label: "89121 market reports" },
  { href: "/mortgage-calculator", label: "Las Vegas mortgage calculator" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: visual.h1,
            description: SITE.description,
            path: "/",
          }),
          breadcrumbSchema([{ name: "Home", url: "/" }]),
          realEstateListingListSchema(featuredProperties),
          faqSchema(faqs),
        ]}
      />

      <section className="relative overflow-hidden pt-24 text-white md:pt-32">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          quality={70}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="mb-3 text-sm uppercase tracking-wide text-primary-200">
            {SITE.address.street} · {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">{visual.h1}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{visual.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">Live MLS</span>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">Same-week tours</span>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">89121 comps</span>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CalendlyPopupButton event="showing" label="Book a tour" variant="light" />
            <Link
              href="/homes-for-sale"
              className="rounded-lg bg-white/15 px-6 py-3 font-semibold"
            >
              Search listings
            </Link>
            <Link href="/home-valuation" className="rounded-lg bg-secondary-500 px-6 py-3 font-semibold">
              Free valuation
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="rounded-lg bg-primary-600 px-6 py-3 font-semibold"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/mortgage-calculator" className="rounded-full bg-green-600 px-4 py-2">
              Mortgage calculator
            </Link>
            <Link href="/buying-guide" className="rounded-full bg-blue-600 px-4 py-2">
              Buying guide
            </Link>
            <Link href="/market-reports" className="rounded-full bg-purple-700 px-4 py-2">
              Market reports
            </Link>
          </div>
        </div>
      </section>

      <PageVisualBlock path="/" />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            { href: "/homes-for-sale", title: "Homes for sale", body: "Live MLS in 89121 and nearby zips." },
            { href: "/home-valuation", title: "Home valuation", body: "Widget plus a human pricing call." },
            { href: "/neighborhood", title: "Neighborhood guide", body: "Parks, commute, and named schools." },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-xl border border-slate-200 p-6 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-2 text-slate-600">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold">Current Manzano-area listings</h2>
          <RealScoutListings />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Featured Manzano Peak addresses
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Street files for the 89121 block around {SITE.address.street}. Live MLS status,
            price, and square footage are confirmed on request — not frozen on these pages.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredProperties.map((property) => (
              <Link
                key={property.path}
                href={property.path}
                className="rounded-xl border border-slate-200 p-6 transition hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-slate-900">{property.streetAddress}</h3>
                <p className="mt-2 text-sm text-slate-600">{property.description}</p>
                <span className="mt-4 inline-block font-semibold text-primary-700">
                  View street file →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-700 py-12 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold">$315K</div>
            <div className="text-primary-100">ZIP median SFR (verify MLS)</div>
          </div>
          <div>
            <div className="text-4xl font-bold">15 min</div>
            <div className="text-primary-100">Drive to the Strip</div>
          </div>
          <div>
            <div className="text-4xl font-bold">72</div>
            <div className="text-primary-100">Walk Score</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Visit the Manzano Peak office</h2>
            <p className="mt-4 text-lg text-slate-700">
              {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
              {SITE.address.postalCode}. {SITE.agent}, {SITE.brokerage} — license {SITE.license}.
            </p>
            <p className="mt-2 text-slate-600">Hours: {SITE.hoursDisplay}.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white hover:bg-primary-500"
                href={`tel:${SITE.phoneTel}`}
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                className="rounded-lg border border-primary-600 px-5 py-3 font-semibold text-primary-800 hover:bg-primary-50"
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
              <a
                className="rounded-lg border border-primary-600 px-5 py-3 font-semibold text-primary-800 hover:bg-primary-50"
                href={SITE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Google Reviews
              </a>
            </div>
          </div>
          <iframe
            title={`Map to ${SITE.address.street} ${SITE.address.city} ${SITE.address.postalCode}`}
            src={SITE.mapsEmbed}
            className="h-80 w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Explore 89121 &amp; nearby Las Vegas
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Neighborhood guides, zip-code pages, and buyer/seller resources across Manzano Peak
            and the southeast valley.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary-500 hover:text-primary-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <CalendlySection
        title="Get in touch"
        event="conversation"
        body={`${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}. Pick a time or call ${SITE.phoneDisplay}.`}
      />
    </>
  );
}
