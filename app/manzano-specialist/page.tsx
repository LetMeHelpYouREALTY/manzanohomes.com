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
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Manzano Specialist | HOA, Commute, and 89121 Area Guide",
  description:
    "Manzano Peak specialist guide: HOA notes, commute times, grocery distances, and 89121 listing context from Dr. Jan Duffy.",
  path: "/manzano-specialist",
});

const faqs = [
  {
    question: "What does the HOA typically cost?",
    answer:
      "Recent packets have shown monthly dues in a $45–$85 band. Assessments and rental rules change — request the current HOA packet before you write.",
  },
  {
    question: "How far is the airport?",
    answer: "About 8 miles, roughly 10 minutes to Harry Reid International.",
  },
  ...contactFaqs,
];

export default function SpecialistPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: getPageVisual("/manzano-specialist").h1,
            description: metadata.description ?? "",
            path: "/manzano-specialist",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Manzano Specialist", url: "/manzano-specialist" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero {...getHeroProps("/manzano-specialist")} />
      <PageVisualBlock path="/manzano-specialist" />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            { title: "150+ homes", body: "2015-era pocket in 89121. Single-family, townhomes, new construction." },
            { title: "$350K–$750K", body: "Recent list band. Confirm on live MLS." },
            { title: "Walk Score 72", body: "Some errands on foot; most trips still use a car." },
          ].map((item) => (
            <article key={item.title} className="rounded-lg bg-slate-50 p-6">
              <p className="text-xl font-bold text-slate-900">{item.title}</p>
              <p className="mt-2 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">HOA notes</h2>
          <p className="mt-4 text-lg text-slate-700">
            Recent packets list monthly dues around $45–$85 covering landscaping, common-area
            maintenance, and trash. That is not a quote. Ask for the current packet before writing
            an offer — rental caps and special assessments change.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Commute times</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Las Vegas Strip", time: "15 minutes", distance: "12 miles" },
              { name: "Harry Reid International", time: "10 minutes", distance: "8 miles" },
              { name: "Henderson", time: "12 minutes", distance: "via I-215" },
              { name: "Downtown Las Vegas", time: "18 minutes", distance: "via I-515" },
            ].map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-primary-700">{item.time}</p>
                <p className="text-sm text-slate-500">{item.distance}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Daily retail</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Vons", distance: "0.8 miles", type: "Grocery" },
              { name: "Smith's Food and Drug", distance: "1.2 miles", type: "Grocery" },
              { name: "Target", distance: "1.5 miles", type: "Department store" },
            ].map((item) => (
              <article key={item.name} className="rounded-lg bg-white p-5">
                <p className="text-sm text-primary-700">{item.type}</p>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-slate-600">{item.distance}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold">Live listings</h2>
          <RealScoutListings />
          <p className="mt-4 text-center text-sm text-slate-500">
            Tours start at {SITE.address.street}. Call {SITE.phoneDisplay}.
          </p>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand title="Get the current HOA packet" />
    </>
  );
}
