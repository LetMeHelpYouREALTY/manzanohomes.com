import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Manzano Homes | Las Vegas Real Estate | 89121",
  description:
    "Manzano Homes is Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties, serving 3693 Manzano Peak Ave and Las Vegas 89121.",
  path: "/about",
});

const values = [
  {
    title: "Local inventory work",
    description: "89121, 89178, 89179, and 89138 — street-level comps, not valley-wide slogans.",
  },
  {
    title: "Client-first contracts",
    description: "Deadlines, HOA docs, and inspection credits before marketing copy.",
  },
  {
    title: "Live MLS tools",
    description: "RealScout search, saved alerts, and a human pricing call on the same file.",
  },
  {
    title: "Documented results",
    description: "We quote recent closed files, not a lifetime trophy count.",
  },
];

const stats = [
  { number: "500+", label: "Homes sold" },
  { number: "15+", label: "Years in market" },
  { number: "98%", label: "Client return / referral" },
  { number: SITE.hoursDisplay, label: "Office hours" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "About Manzano Homes",
            description: metadata.description ?? "",
            path: "/about",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
          faqSchema(contactFaqs),
        ]}
      />
      <PageHero
        title="About Manzano Homes"
        subtitle={`Dr. Jan Duffy · ${SITE.brokerage} · License# ${SITE.license}`}
        imageAlt="Manzano Homes Las Vegas office area near Manzano Peak Ave"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Our story</h2>
          <p className="mt-4 text-lg text-slate-700">
            Manzano Homes is the hyperlocal brand for {SITE.agent}, REALTOR®, {SITE.brokerage}.
            The office pin is {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
            {SITE.address.postalCode}. Call {SITE.phoneDisplay}.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            Work focuses on Manzano Peak and nearby zips: tours, pricing, and listing alerts rather
            than valley-wide slogans.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary-700 md:text-3xl">{stat.number}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">How we work</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Current Manzano-area listings
          </h2>
          <RealScoutListings priceMin="450000" priceMax="550000" />
        </div>
      </section>

      <section className="bg-primary-700 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Mission</h2>
          <p className="mt-4 text-lg text-primary-100">
            Get 89121 buyers and sellers to a recorded closing with clean docs, live comps, and a
            reachable agent at {SITE.phoneDisplay}.
          </p>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} />
      <CtaBand title="Ready to work with us?" />
    </>
  );
}
