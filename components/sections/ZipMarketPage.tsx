import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import InfoCardGrid from "@/components/sections/InfoCardGrid";
import PageHero from "@/components/sections/PageHero";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import type { ZipMarketContent } from "@/lib/content/zips";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export default function ZipMarketPage({ content }: { content: ZipMarketContent }) {
  const schemas = [
    webPageSchema({
      name: content.h1,
      description: content.description,
      path: content.path,
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: `${content.zip} Real Estate`, url: content.path },
    ]),
    faqSchema(content.faqs),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero title={content.h1} subtitle={content.subtitle} imageAlt={content.imageAlt} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">{content.area} overview</h2>
          <p className="mt-4 text-lg text-slate-700">{content.overview}</p>
          <p className="mt-4 text-slate-600">
            Established {content.established}. Home types: {content.homeTypes.join(", ")}.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {content.stats.map((stat) => (
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
            Why buyers compare {content.zip}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.features.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content.schools.length ? (
        <InfoCardGrid
          title={`Named schools near ${content.zip}`}
          subtitle="Distances are from 3693 Manzano Peak Ave unless noted. CCSD zoning is still street-specific."
          items={content.schools}
          tone="slate"
        />
      ) : (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-slate-900">School zoning in {content.zip}</h2>
            <p className="mt-4 text-lg text-slate-700">
              CCSD zoning is street-specific and can change. We pull the current assignment for the
              exact address before you tour. Named campuses are not listed here because they vary
              by street — enrollment is never guaranteed by proximity.
            </p>
          </div>
        </section>
      )}

      <InfoCardGrid title="Shopping and dining" items={content.shopping} tone="white" />

      {content.parks.length ? (
        <InfoCardGrid title="Parks and recreation" items={content.parks} tone="slate" />
      ) : null}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Live listings in and near {content.zip}
          </h2>
          <RealScoutListings />
        </div>
      </section>

      <FaqSection faqs={content.faqs} />
      <CtaBand title={`Tour ${content.zip} this week`} />
    </>
  );
}
