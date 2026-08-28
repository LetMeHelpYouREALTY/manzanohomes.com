import Link from "next/link";
import CtaBand from "@/components/sections/CtaBand";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Homes for Sale in Manzano Peak | Las Vegas 89121 MLS",
  description:
    "Search live MLS homes for sale in Manzano Peak and Las Vegas 89121. Filter by price, beds, and property type.",
  path: "/homes-for-sale",
});

const zipLinks = [
  { href: "/89121-real-estate", label: "89121 Southeast" },
  { href: "/89178-real-estate", label: "89178 Mountains Edge" },
  { href: "/89179-real-estate", label: "89179 Southern Highlands" },
  { href: "/89138-real-estate", label: "89138 Summerlin West" },
];

export default function HomesForSalePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Homes for Sale in Manzano Peak",
            description: metadata.description ?? "",
            path: "/homes-for-sale",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Homes for Sale", url: "/homes-for-sale" },
          ]),
        ]}
      />
      <section className="bg-primary-800 px-4 pb-12 pt-28 text-center text-white">
        <h1 className="text-4xl font-bold">Homes for Sale in Manzano Peak</h1>
        <p className="mt-3 text-lg">Live MLS search for Las Vegas 89121 and nearby streets.</p>
      </section>
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-12">
        <div className="flex flex-wrap justify-center gap-3">
          {zipLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-primary-500 hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <RealScoutSearch />
        <RealScoutListings priceMin="300000" priceMax="800000" />
      </section>
      <CtaBand title="Need a saved search on a specific street?" />
    </>
  );
}
