import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, howToSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Selling a Home in Manzano Peak | Las Vegas 89121",
  description:
    "Seller guide for Manzano Peak and 89121: prep, pricing strategies, and a 5-step listing timeline with Dr. Jan Duffy.",
  path: "/selling-guide",
});

const sellingSteps = [
  {
    title: "Home valuation and CMA",
    description: "Price from the last 90 days of 89121 comps plus actives within a mile of Manzano Peak Ave.",
    details: [
      "Comparative market analysis",
      "Current 89121 list-to-sale context",
      "Timeline for the season you actually launch",
    ],
  },
  {
    title: "Pre-listing prep",
    description: "Paint, lighting, and a 3D tour. Bring a punch list, not 'curb appeal' talk.",
    details: [
      "Declutter and stage high-traffic rooms",
      "Fix obvious paint, lighting, and hardware",
      "Professional photos and a 3D walkthrough",
    ],
  },
  {
    title: "Listing and marketing",
    description: "MLS plus targeted outreach. Open houses only when the calendar supports them.",
    details: ["MLS with measured photos", "Digital distribution", "Buyer-agent outreach"],
  },
  {
    title: "Showings and offers",
    description: "Flexible showing windows. We screen for letters and cash-to-close before you counter.",
    details: ["Showing calendar", "Offer review", "Contract terms, not just price"],
  },
  {
    title: "Transaction to close",
    description: "Inspections, appraisal, and HOA docs. We keep the dates on one calendar.",
    details: ["Deadline tracking", "Repair negotiations", "Closing coordination"],
  },
];

const insights = [
  { value: "28 days", metric: "Average days on market", note: "Recent 89121 pocket context" },
  { value: "$485,000", metric: "Average list", note: "Verify on live MLS" },
  { value: "98.2%", metric: "List-to-sale ratio", note: "Pricing accuracy when we hit comps" },
  { value: "High", metric: "Showing activity", note: "Moves with rate news" },
];

const strategies = [
  {
    name: "Competitive pricing",
    description: "Price slightly under nearby actives to pull multiple letters.",
    bestFor: "Sellers on a deadline",
  },
  {
    name: "Market-value pricing",
    description: "Match the last 90 days of solds. Steady showings, fewer resets.",
    bestFor: "Flexible timeline",
  },
  {
    name: "Premium pricing",
    description: "Above comps only when upgrades and lot justify it. Expect a longer clock.",
    bestFor: "Distinct plans or larger lots",
  },
];

export default function SellingGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            name: "Selling Your Manzano Home",
            description: metadata.description ?? "",
            path: "/selling-guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Selling Guide", url: "/selling-guide" },
          ]),
          faqSchema(contactFaqs),
          howToSchema({
            name: "How to sell a home in Manzano Peak",
            description: "Five-step listing process for 89121 sellers.",
            path: "/selling-guide",
            totalTime: "P45D",
            steps: sellingSteps.map((step) => ({ name: step.title, text: step.description })),
          }),
        ]}
      />
      <PageHero
        title="Selling your Manzano Peak home"
        subtitle="Price from live 89121 comps, not last year's average"
        imageAlt="Manzano Peak Las Vegas home staged for sale"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Current Manzano market context
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {insights.map((insight) => (
              <article key={insight.metric} className="rounded-lg bg-slate-50 p-6 text-center">
                <div className="text-3xl font-bold text-primary-700">{insight.value}</div>
                <div className="mt-1 text-sm text-slate-600">{insight.metric}</div>
                <p className="mt-2 text-xs text-slate-500">{insight.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            5-step listing process
          </h2>
          <div className="space-y-6">
            {sellingSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-700">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-slate-600">{step.description}</p>
                    <ul className="mt-4 grid gap-2 md:grid-cols-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex gap-2 text-slate-700">
                          <span className="text-secondary-600">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Pricing strategies
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {strategies.map((strategy) => (
              <article key={strategy.name} className="rounded-lg bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">{strategy.name}</h3>
                <p className="mt-3 text-slate-600">{strategy.description}</p>
                <p className="mt-4 rounded bg-primary-50 p-3 text-sm text-primary-900">
                  <strong>Best for:</strong> {strategy.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} />
      <CtaBand
        title="Ready to list in 89121?"
        primaryHref="/home-valuation"
        primaryLabel="Get a valuation"
        secondaryHref="/contact"
        secondaryLabel="Schedule a consult"
      />
    </>
  );
}
