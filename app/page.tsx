import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
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

const highlights = [
  {
    title: "Prime location",
    body: "I-515 and I-215, 12 miles from the Strip, 10 minutes to Harry Reid International.",
  },
  {
    title: "Named schools nearby",
    body: "Manzano Elementary 0.3 miles, SECTA 1.2 miles, Green Valley High 2.1 miles.",
  },
  {
    title: "2015-era plans",
    body: "1,500–3,500 sq ft with attached garages in the Manzano Peak pocket.",
  },
  {
    title: "Parks in walking distance",
    body: "Manzano Park 0.1 miles: playground, trails, picnic tables, basketball court.",
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
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">Live MLS</span>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">Same-week tours</span>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">89121 comps</span>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/homes-for-sale"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900"
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
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Why Manzano Peak</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.title} className="text-center">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-700 py-12 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold">$485K</div>
            <div className="text-primary-100">Median list (verify MLS)</div>
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

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">Get in touch</h2>
          <p className="mb-6 text-center text-slate-600">
            {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
