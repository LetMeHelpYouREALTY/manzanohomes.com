import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Las Vegas 89121 Market Reports | Manzano Homes",
  description:
    "89121 and Manzano Peak market snapshots: days on market, list-to-sale context, and live MLS listings.",
  path: "/market-reports",
});

const stats = [
  { value: "32–46", label: "Days on market (ZIP 2026)" },
  { value: "$315K", label: "Median SFR (verify MLS)" },
  { value: "12", label: "Nearby actives (varies)" },
  { value: "+3%", label: "YoY ZIP context" },
];

export default function MarketReportsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: getPageVisual("/market-reports").h1,
            description: metadata.description ?? "",
            path: "/market-reports",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Market Reports", url: "/market-reports" },
          ]),
          faqSchema(contactFaqs),
        ]}
      />
      <PageHero {...getHeroProps("/market-reports")} />
      <PageVisualBlock path="/market-reports" />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg text-slate-700">
            Treat any printed median as stale the day it ships. The listings widget below is the
            live check. Recent 89121 resales in this pocket have sat about 28 days. That number
            moves with rate news — ask for this week&apos;s pull.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary-300">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">Live inventory check</h2>
          <RealScoutListings />
        </div>
      </section>

      <FaqSection faqs={contactFaqs} />
      <CtaBand title="Ask for this week's 89121 pull" />
    </>
  );
}
