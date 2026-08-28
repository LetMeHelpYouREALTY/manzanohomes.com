import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Homes for Sale in Manzano Peak | Las Vegas 89121 MLS",
  description:
    "Search live MLS homes for sale in Manzano Peak and Las Vegas 89121. Filter by price, beds, and property type.",
  path: "/homes-for-sale",
});

export default function HomesForSalePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
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
        <RealScoutSearch />
        <RealScoutListings priceMin="300000" priceMax="800000" />
        <p className="text-sm text-slate-500">
          Listing data is supplied by RealScout / MLS and may change without notice. Confirm status
          before writing an offer.
        </p>
      </section>
    </>
  );
}
