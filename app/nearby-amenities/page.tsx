import Link from "next/link";
import AmenityMap from "@/components/maps/AmenityMap";
import AmenityMapWhenVisible from "@/components/maps/AmenityMapWhenVisible";
import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  AMENITIES_FAQS,
  AMENITIES_PAGE_PATH,
  COMMUNITY_MAP_CENTER,
  CURATED_NEARBY_PLACES,
  formatPlaceAddress,
} from "@/lib/content/amenities";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  communityPlaceSchema,
  faqSchema,
  nearbyPlacesItemListSchema,
  webPageSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = AMENITIES_PAGE_PATH;

export const metadata = pageMetadata({
  title: "Nearby Amenities in Manzano Peak, Las Vegas | Groceries, Parks, Schools",
  description:
    "Interactive map and hyperlocal guide to groceries, parks, schools, healthcare, shopping, and commute times near Manzano Peak and 3693 Manzano Peak Ave, Las Vegas 89121.",
  path,
});

const writtenSections = [
  {
    id: "dining",
    title: "Dining & coffee",
    body: [
      "Day-to-day meals start on Eastern Ave and Horizon Ridge — fast casual chains, local spots, and drive-through options sit between Manzano Peak and Henderson.",
      "For a night out, The District at Green Valley Ranch stacks sit-down restaurants and patio dining about four miles south in Henderson.",
      "Green Valley Ranch Resort adds casino dining rooms and steakhouses without a Strip parking hunt.",
    ],
  },
  {
    id: "parks",
    title: "Parks & recreation",
    body: [
      "Manzano Park is the pocket park inside the Manzano Peak streets — playground, paths, and picnic space within a short walk of many lots.",
      "Sunset Park (2601 E Sunset Rd) is the regional lake-and-trails park locals use for weekend walks and sports fields.",
      "Coronado Park in Henderson adds tennis, soccer, and additional playground space south of the 215 belt.",
    ],
  },
  {
    id: "golf",
    title: "Golf",
    body: [
      "Las Vegas National Golf Club on E Desert Inn Rd is the named 18-hole public course northeast of the Strip that KB Home lists for Vales at Manzano buyers.",
      "Practice facilities and additional courses spread toward Henderson and the west side — drive time depends on tee time and traffic.",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & pharmacies",
    body: [
      "Southern Hills Hospital and Medical Center (9300 W Sunset Rd) and Dignity Health-St. Rose Dominican, San Martín Campus (8280 W Warm Springs Rd) anchor emergency and specialty care for southeast Las Vegas.",
      "Retail pharmacies cluster on Eastern Ave with the grocers — confirm your insurance network before choosing a primary care office.",
    ],
  },
  {
    id: "shopping",
    title: "Shopping & groceries",
    body: [
      "Vons (7250 S Eastern Ave) and Target (7450 S Eastern Ave) cover weekly groceries and household runs east of Manzano Peak.",
      "The District at Green Valley Ranch and Green Valley Ranch Resort add fashion, home goods, and entertainment retail in Henderson.",
    ],
  },
  {
    id: "schools",
    title: "Schools",
    body: [
      "Manzano Elementary School (4350 E Russell Rd) is the CCSD elementary campus named on Manzano Peak marketing materials.",
      "Southeast Career Technical Academy, Green Valley High School, and Coronado High School sit within a few miles — CCSD still assigns by street, so verify zoning for the exact lot you tour.",
    ],
  },
  {
    id: "commute",
    title: "Commute & regional access",
    body: [
      "Harry Reid International Airport is about 10 minutes north via I-515 when traffic is light (approximate).",
      "The Las Vegas Strip is about 12 miles — roughly 15 minutes on I-515 and I-215 under light traffic (approximate).",
      "Downtown Summerlin and the Summerlin master plan sit northwest across the valley; plan 25–35 minutes depending on time of day (approximate).",
    ],
  },
] as const;

export default function NearbyAmenitiesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Nearby Amenities in Manzano Peak, Las Vegas",
            description: metadata.description ?? "",
            path,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Nearby Amenities", url: path },
          ]),
          faqSchema([...AMENITIES_FAQS]),
          communityPlaceSchema({
            name: COMMUNITY_MAP_CENTER.label,
            latitude: COMMUNITY_MAP_CENTER.latitude,
            longitude: COMMUNITY_MAP_CENTER.longitude,
            streetAddress: SITE.address.street,
          }),
          nearbyPlacesItemListSchema(CURATED_NEARBY_PLACES),
        ]}
      />

      <section className="bg-primary-800 pb-12 pt-28 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm uppercase tracking-wide text-primary-200">
            {SITE.address.postalCode} · Southeast Las Vegas
          </p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Nearby Amenities in Manzano Peak, Las Vegas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
            Groceries, parks, schools, healthcare, and Henderson retail — mapped from{" "}
            {SITE.address.street}. Drive times are approximate; tour on your schedule.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/neighborhood" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25">
              Neighborhood guide
            </Link>
            <Link href="/homes-for-sale" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25">
              Homes for sale
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="rounded-full bg-secondary-500 px-4 py-2 font-semibold text-slate-900"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900">Interactive amenity map</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Center pin: {COMMUNITY_MAP_CENTER.label} at {COMMUNITY_MAP_CENTER.addressLine}. Filter
            by category to explore places Google Maps returns near the community.
          </p>
          <div className="mt-8">
            <AmenityMapWhenVisible minHeightClass="min-h-[640px]">
              <AmenityMap variant="full" />
            </AmenityMapWhenVisible>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-12">
          {writtenSections.map((section) => (
            <article key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
              <div className="mt-4 space-y-3 text-slate-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Verified place names &amp; addresses
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {CURATED_NEARBY_PLACES.map((place) => (
              <li
                key={place.name}
                className="rounded-lg border border-slate-200 p-4 text-sm text-slate-700"
              >
                <p className="font-semibold text-slate-900">{place.name}</p>
                <p>{formatPlaceAddress(place)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Your Manzano Peak REALTOR®</h2>
          <p className="mt-4 text-lg text-slate-700">
            {SITE.agent} with {SITE.brokerage} lists and tours Manzano Peak daily. License{" "}
            {SITE.license}. Office: {SITE.address.street}, {SITE.address.city},{" "}
            {SITE.address.region} {SITE.address.postalCode}.
          </p>
          <p className="mt-3 text-slate-600">
            <a className="font-semibold text-primary-700" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
            {" · "}
            <a className="font-semibold text-primary-700" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-500">{SITE.hoursDisplay}</p>
        </div>
      </section>

      <FaqSection faqs={[...AMENITIES_FAQS]} heading="Amenities FAQ" />
      <CtaBand
        title="Tour Manzano Peak with a hyperlocal guide"
        body={`Ask about groceries, schools, and commute times from ${SITE.address.street}.`}
        secondaryHref="/homes-for-sale"
        secondaryLabel="Search listings"
      />
    </>
  );
}
