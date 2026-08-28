import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";

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
  const faqs = [
    {
      question: `How far is ${name} from Manzano Peak?`,
      answer: `${distance} from 3693 Manzano Peak Ave.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({ name: `Homes near ${name}`, description, path }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: `Homes near ${name}`, url: path },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="bg-primary-800 px-4 pb-12 pt-28 text-center text-white">
        <h1 className="text-4xl font-bold">Homes near {name}</h1>
        <p className="mt-3">
          {type} · {distance} · {address}
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <RealScoutListings />
      </section>
    </>
  );
}
