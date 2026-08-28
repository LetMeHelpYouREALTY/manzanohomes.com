import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import InfoCardGrid from "@/components/sections/InfoCardGrid";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

const path = "/neighborhood";
const visual = getPageVisual(path);

export const metadata = pageMetadata({
  title: "Manzano Neighborhood Las Vegas 89121 | Homes, Parks, Commute",
  description:
    "Manzano neighborhood real estate in Southeast Las Vegas 89121. 150+ homes, 89121 ZIP median near $315K (verify MLS), 15-minute Strip commute, parks and named schools nearby.",
  path: "/neighborhood",
});

const faqs = [
  {
    question: "Where is the Manzano neighborhood?",
    answer:
      "Southeast Las Vegas, NV 89121, around 3693 Manzano Peak Ave. It is 12 miles from the Strip and near I-515 and I-215.",
  },
  {
    question: "Which schools are near Manzano Peak?",
    answer:
      "Manzano Elementary School (0.3 miles), Southeast Career Technical Academy (1.2 miles), Green Valley High School (2.1 miles), and Coronado High School (2.8 miles). CCSD zoning is still street-specific.",
  },
  ...contactFaqs,
];

export default function NeighborhoodPage() {
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
            { name: "Neighborhood", url: "/neighborhood" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero {...getHeroProps(path)} />
      <PageVisualBlock path={path} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">Neighborhood overview</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
            Manzano sits in Southeast Las Vegas zip 89121, about 12 miles from the Strip and 10
            minutes from Harry Reid International Airport via I-515 and I-215. Homes typically
            run 1,500–3,500 square feet with attached garages. Recent list prices cluster from
            $350,000 to $750,000 — confirm on live MLS.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Location", body: "Southeast Las Vegas, 89121, around 3693 Manzano Peak Ave." },
              { title: "Highway access", body: "I-515, I-215, and the airport connector." },
              { title: "Commute", body: "15 min to the Strip · 10 min to Harry Reid International." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-slate-50 p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Live MLS listings near 3693 Manzano Peak Ave
          </h2>
          <RealScoutListings priceMin="500000" priceMax="600000" />
        </div>
      </section>

      <InfoCardGrid
        title="Named schools nearby"
        subtitle="Distances from 3693 Manzano Peak Ave. Ask for the current CCSD assignment on the street you tour."
        items={[
          {
            name: "Manzano Elementary School",
            type: "Elementary",
            distance: "0.3 miles",
            description: "CCSD elementary 0.3 miles from the office pin.",
            href: "/homes-near-manzano-elementary",
            image: "/media/hero-school-elem.jpg",
            imageAlt: "Elementary campus exterior near Manzano Peak Las Vegas 89121",
          },
          {
            name: "Southeast Career Technical Academy",
            type: "High school",
            distance: "1.2 miles",
            description: "Career and technical campus 1.2 miles from Manzano Peak.",
            href: "/homes-near-southeast-career-technical-academy",
            image: "/media/hero-school-secta.jpg",
            imageAlt: "Southeast Career Technical Academy campus in Las Vegas 89120",
          },
          {
            name: "Green Valley High School",
            type: "High school",
            distance: "2.1 miles",
            description: "Henderson high school 2.1 miles from Manzano Peak.",
            href: "/homes-near-green-valley-high-school",
            image: "/media/hero-school-hs.jpg",
            imageAlt: "Henderson Nevada high school campus exterior",
          },
        ]}
        tone="white"
      />

      <InfoCardGrid
        title="Shopping and dining"
        items={[
          {
            name: "Green Valley Ranch Resort & Casino",
            type: "Entertainment & shopping",
            distance: "3.2 miles",
            description: "Resort retail, dining, and entertainment.",
            image: "/media/h3-shopping.jpg",
            imageAlt: "Open-air shopping plaza with palms in the Las Vegas valley",
          },
          {
            name: "The District at Green Valley Ranch",
            type: "Shopping center",
            distance: "3.5 miles",
            description: "Open-air restaurants and retail.",
            image: "/media/h3-grocery.jpg",
            imageAlt: "Grocery and retail interior typical of southeast Las Vegas",
          },
          {
            name: "Henderson Pavilion",
            type: "Outdoor venue",
            distance: "4.1 miles",
            description: "Amphitheater for concerts and events.",
            image: "/media/h3-strip.jpg",
            imageAlt: "Las Vegas valley venue lighting at dusk",
          },
        ]}
        tone="slate"
      />

      <InfoCardGrid
        title="Parks and recreation"
        items={[
          {
            name: "Manzano Park",
            type: "Neighborhood park",
            distance: "0.1 miles",
            features: ["Playground", "Walking trails", "Picnic areas", "Basketball court"],
            image: "/media/h3-park.jpg",
            imageAlt: "Pocket park with playground and walking path in southeast Las Vegas 89121",
          },
          {
            name: "Sunset Park",
            type: "Regional park",
            distance: "2.8 miles",
            features: ["Lake", "Walking trails", "Sports fields", "Dog park"],
            image: "/media/h3-park.jpg",
            imageAlt: "Regional park walking path in Las Vegas",
          },
          {
            name: "Coronado Park",
            type: "Community park",
            distance: "1.5 miles",
            features: ["Tennis courts", "Soccer fields", "Playground", "Walking paths"],
            image: "/media/h3-park.jpg",
            imageAlt: "Community park fields in southeast Las Vegas",
          },
        ]}
        tone="white"
      />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Street-level facts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Floor plans", body: "1,500–3,500 sq ft with attached garages." },
              { title: "Build years", body: "Manzano Peak pocket dates to 2015-era construction." },
              { title: "Daily retail", body: "Vons 0.8 miles · Target 1.5 miles." },
              { title: "Parks", body: "Manzano Park 0.1 miles; Sunset Park 2.8 miles." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-white p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-700 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Market snapshot</h2>
          <p className="mb-8 text-center text-primary-100">
            Figures are recent list context. Live MLS still beats any web snippet.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { value: "$316K+", label: "Vales builder from (verify)" },
              { value: "$315K", label: "89121 ZIP median SFR" },
              { value: "$185", label: "Approx. $/sq ft" },
              { value: "28", label: "Days on market" },
              { value: "+3.2%", label: "Recent price change" },
              { value: "12", label: "Nearby actives" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand title="Tour Manzano Peak this week" />
    </>
  );
}
