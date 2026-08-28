import Image from "next/image";
import Link from "next/link";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

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
    answer: "Use /homes-for-sale for the RealScout MLS search, or call for a saved search on 89121 streets.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            name: "Manzano Homes Las Vegas",
            description: SITE.description,
            path: "/",
          }),
          breadcrumbSchema([{ name: "Home", url: "/" }]),
          faqSchema(faqs),
        ]}
      />

      <section className="relative overflow-hidden pt-24 text-white md:pt-32">
        <Image
          src="/hero-manzano.jpg"
          alt="Manzano Peak neighborhood homes in Las Vegas 89121"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="mb-3 text-sm uppercase tracking-wide text-primary-200">
            {SITE.address.street} · {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Las Vegas homes in Manzano Peak, 89121
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Live MLS search, same-week tours, and pricing from current comps — not last year&apos;s
            average.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/homes-for-sale"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900"
            >
              Search listings
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="rounded-lg bg-primary-600 px-6 py-3 font-semibold"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

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
    </>
  );
}
