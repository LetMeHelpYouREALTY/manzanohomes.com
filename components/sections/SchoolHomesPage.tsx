import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

type SchoolHomesPageProps = {
  name: string;
  type: string;
  distance: string;
  address: string;
  path: string;
  description: string;
};

export default function SchoolHomesPage({
  name,
  type,
  distance,
  address,
  path,
  description,
}: SchoolHomesPageProps) {
  const visual = getPageVisual(path);
  const faqs = [
    {
      question: `How far is ${name} from Manzano Peak?`,
      answer: `${distance} from 3693 Manzano Peak Ave.`,
    },
    {
      question: "Does buying near this campus guarantee a seat?",
      answer:
        "No. CCSD zoning is street-specific and can change. We pull the current assignment for the exact address before you tour.",
    },
    ...contactFaqs,
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: visual.h1, description, path }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: visual.h1, url: path },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero {...getHeroProps(path)} />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-lg text-slate-700">{description}</p>
        <p className="mt-4 text-slate-600">
          {type} · {distance} · {address}. Use the live MLS widget for today&apos;s inventory, then we
          confirm commute time and the current CCSD assignment for the street you actually bid on.
        </p>
      </section>
      <PageVisualBlock path={path} />
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <RealScoutListings />
      </section>
      <FaqSection faqs={faqs} />
      <CtaBand title={`Tour homes near ${name}`} />
    </>
  );
}
