import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, howToSchema, webPageSchema } from "@/lib/schema";

const path = "/buying-guide";
const visual = getPageVisual(path);

export const metadata = pageMetadata({
  title: "Las Vegas Buying Guide | Manzano Peak 89121",
  description:
    "Step-by-step home buying guide for Manzano Peak and Las Vegas 89121: pre-approval, offers, inspections, and closing timelines.",
  path: "/buying-guide",
});

const buyingSteps = [
  {
    title: "Get pre-approved",
    description:
      "Secure financing before you tour. Sellers take a letter seriously, and you learn the payment range — not a brochure price.",
    details: [
      "Pull credit and repair what you can",
      "Gather W-2s, returns, and bank statements",
      "Compare rates from more than one lender",
      "Get a letter valid 60–90 days",
    ],
  },
  {
    title: "Find your agent",
    description:
      "Work with someone who already walks 89121 streets and can get you into a showing the same week.",
    details: [
      "Ask for recent 89121 comps they priced",
      "Read reviews, then interview two agents",
      "Confirm communication hours",
      "Confirm they can write Clark County contracts",
    ],
  },
  {
    title: "Start house hunting",
    description:
      "Tour homes in your payment range. Photograph floor plans and note commute times to work, not slogans.",
    details: [
      "Use live MLS, not screenshots",
      "Schedule showings with your agent",
      "Note square footage, HOA, and lot quirks",
      "Time the drive at the hour you actually commute",
    ],
  },
  {
    title: "Make an offer",
    description:
      "Your agent drafts terms from the last 90 days of nearby solds plus current actives within a mile.",
    details: [
      "Research comps on the same street when possible",
      "Match inspection, appraisal, and financing windows to inventory speed",
      "Be ready to counter once",
    ],
  },
  {
    title: "Home inspection",
    description:
      "Hire an inspector inside the contingency period. Typical Clark County windows are 10–15 days.",
    details: [
      "Attend if you can",
      "Read the full report, not the summary",
      "Negotiate repairs or credit — not both on every item",
    ],
  },
  {
    title: "Finalize financing",
    description: "Answer lender conditions fast. Rate locks expire.",
    details: [
      "Return docs the same day",
      "Lock the rate when your loan officer says to",
      "Do not open new credit before closing",
    ],
  },
  {
    title: "Final walkthrough",
    description: "Confirm the house matches the contract: repairs, appliances, and vacant condition.",
    details: [
      "Test HVAC, water, and garage",
      "Check agreed repairs",
      "Confirm inclusions from the contract",
    ],
  },
  {
    title: "Closing day",
    description: "Most financed 89121 resales close in 30–45 days. Cash can close faster if title and HOA docs are clean.",
    details: [
      "Bring ID and certified funds",
      "Review the closing disclosure the day before",
      "Get keys after recording",
    ],
  },
];

const firstTimeTips = [
  "Save early: 3–5% down is common; 20% avoids PMI on conventional.",
  "Ask about Nevada first-time programs before you lock a loan product.",
  "Do not max the pre-approval. Leave room for HOA, taxes, and a water heater.",
  "Count the monthly total: principal, interest, taxes, insurance, HOA.",
  "Tour more than one street in 89121 before you write.",
];

const mistakes = [
  "Touring without a pre-approval letter",
  "Skipping inspection to 'save money'",
  "Ignoring HOA docs until after you are in contract",
  "Forgetting closing costs and move costs in the cash-to-close number",
  "Writing on the first showing because inventory felt scarce",
];

const faqs = [
  {
    question: "How long does a Manzano Peak purchase take?",
    answer:
      "Most financed resales close in 30–45 days. Cash can close faster if title and HOA docs are clean.",
  },
  ...contactFaqs,
];

export default function BuyingGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: visual.h1,
            description: metadata.description ?? "",
            path,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Buying Guide", url: "/buying-guide" },
          ]),
          faqSchema(faqs),
          howToSchema({
            name: "How to buy a home in Las Vegas 89121",
            description: "Eight steps from pre-approval to closing in Manzano Peak.",
            path: "/buying-guide",
            totalTime: "P45D",
            steps: buyingSteps.map((step) => ({ name: step.title, text: step.description })),
          }),
        ]}
      />
      <PageHero {...getHeroProps(path)} />
      <PageVisualBlock path={path} />

      <section className="bg-slate-50 py-16" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-4xl px-4">
          <h2 id="steps-heading" className="mb-8 text-3xl font-bold text-slate-900">
            8 steps to closing
          </h2>
          <div className="space-y-6">
            {buyingSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg bg-white p-6 shadow-sm md:p-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-slate-600">{step.description}</p>
                    <ul className="mt-4 space-y-2 text-slate-700">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
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
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
          <div className="rounded-lg bg-primary-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">First-time buyer notes</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {firstTimeTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Mistakes to skip</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {mistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Financing options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Conventional",
                body: "3–20% down. PMI if under 20%. 15- or 30-year terms.",
              },
              {
                title: "FHA",
                body: "3.5% down on qualifying credit. Mortgage insurance applies.",
              },
              {
                title: "VA",
                body: "Eligible veterans and active military: $0 down, no monthly PMI.",
              },
            ].map((loan) => (
              <article key={loan.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{loan.title}</h3>
                <p className="mt-2 text-slate-600">{loan.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            89121 listings in a first-time payment band
          </h2>
          <RealScoutListings priceMin="350000" priceMax="500000" />
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand title="Ready to start in 89121?" />
    </>
  );
}
