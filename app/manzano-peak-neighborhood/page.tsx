import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import InfoCardGrid from "@/components/sections/InfoCardGrid";
import PageHero from "@/components/sections/PageHero";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Manzano Peak Neighborhood Las Vegas | 89121 Real Estate",
  description:
    "Manzano Peak neighborhood in Las Vegas 89121: 2015-era homes, named schools, parks, and $350K–$750K list bands. Tour with Dr. Jan Duffy.",
  path: "/manzano-peak-neighborhood",
});

const faqs = [
  {
    question: "What is the median home price in Manzano Peak?",
    answer:
      "Recent median list is about $475,000, with a $350,000–$750,000 band. Live MLS prices still beat any web snippet.",
  },
  {
    question: "How far is Manzano Peak from the Las Vegas Strip?",
    answer: "About 12 miles, roughly a 15-minute drive via I-515 and I-215.",
  },
  {
    question: "What home types are in Manzano Peak?",
    answer:
      "Single-family homes, townhomes, and newer construction from about 1,500 to 3,500 square feet.",
  },
  ...contactFaqs,
];

export default function ManzanoPeakPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Manzano Peak Neighborhood",
            description: metadata.description ?? "",
            path: "/manzano-peak-neighborhood",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Manzano Peak", url: "/manzano-peak-neighborhood" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        title="Manzano Peak Neighborhood"
        subtitle="Southeast Las Vegas 89121 · 150+ homes · 2015-era construction"
        imageAlt="Street view of Manzano Peak neighborhood Las Vegas homes"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">About Manzano Peak</h2>
          <p className="mt-4 text-lg text-slate-700">
            Manzano Peak is a 2015-era pocket of 150+ homes in 89121. Inventory mixes single-family
            houses, townhomes, and newer construction. Walk Score 72 means some errands are on
            foot; most residents still drive. Commute to the Strip is about 15 minutes.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {[
            { value: "$485K", label: "Average list" },
            { value: "72", label: "Walk Score" },
            { value: "12 mi", label: "To the Strip" },
            { value: "2015+", label: "Build years" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary-300">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
            Why buyers pick this pocket
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Highway access", body: "I-515 and I-215 for Strip, airport, and Henderson." },
              { title: "Floor plans", body: "1,500–3,500 sq ft with attached garages." },
              { title: "Parks", body: "Manzano Park 0.1 miles; Sunset Park 2.8 miles." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InfoCardGrid
        title="Named schools nearby"
        items={[
          {
            name: "Manzano Elementary School",
            type: "Elementary",
            distance: "0.3 miles",
            href: "/homes-near-manzano-elementary",
            description: "CCSD elementary 0.3 miles from 3693 Manzano Peak Ave.",
          },
          {
            name: "Southeast Career Technical Academy",
            type: "High school",
            distance: "1.2 miles",
            href: "/homes-near-southeast-career-technical-academy",
            description: "Career and technical campus 1.2 miles away.",
          },
          {
            name: "Green Valley High School",
            type: "High school",
            distance: "2.1 miles",
            href: "/homes-near-green-valley-high-school",
            description: "Henderson high school 2.1 miles away.",
          },
          {
            name: "Coronado High School",
            type: "High school",
            distance: "2.8 miles",
            href: "/homes-near-coronado-high-school",
            description: "Henderson high school 2.8 miles away.",
          },
        ]}
        tone="slate"
      />

      <InfoCardGrid
        title="Shopping and dining"
        items={[
          {
            name: "Green Valley Ranch Resort & Casino",
            type: "Entertainment",
            distance: "3.2 miles",
            description: "Resort retail and dining.",
          },
          {
            name: "The District at Green Valley Ranch",
            type: "Shopping center",
            distance: "3.5 miles",
            description: "Open-air restaurants and retail.",
          },
          {
            name: "Galleria at Sunset",
            type: "Shopping mall",
            distance: "5.2 miles",
            description: "Enclosed mall with department stores.",
          },
        ]}
        tone="white"
      />

      <InfoCardGrid
        title="Parks and recreation"
        items={[
          {
            name: "Manzano Park",
            type: "Neighborhood park",
            distance: "0.1 miles",
            features: ["Playground", "Walking trails", "Picnic areas", "Basketball court"],
          },
          {
            name: "Sunset Park",
            type: "Regional park",
            distance: "2.8 miles",
            features: ["Lake", "Walking trails", "Sports fields"],
          },
          {
            name: "Pecos Legacy Park",
            type: "Sports complex",
            distance: "3.1 miles",
            features: ["Baseball fields", "Soccer fields", "Walking trails"],
          },
        ]}
        tone="slate"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Homes for sale in Manzano Peak
          </h2>
          <RealScoutListings />
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand title="Ready to tour Manzano Peak?" />
    </>
  );
}
