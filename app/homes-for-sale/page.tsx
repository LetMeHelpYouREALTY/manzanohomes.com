import Link from "next/link";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const path = "/homes-for-sale";
const visual = getPageVisual(path);

export const metadata = pageMetadata({
  title: "Homes for Sale in Manzano Peak | Las Vegas 89121 MLS",
  description:
    "Search live MLS homes for sale in Manzano Peak and Las Vegas 89121. Filter by price, beds, and property type.",
  path,
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
            name: visual.h1,
            description: metadata.description ?? "",
            path,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Homes for Sale", url: path },
          ]),
        ]}
      />
      <PageHero {...getHeroProps(path)} />
      <PageVisualBlock path={path} />
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
