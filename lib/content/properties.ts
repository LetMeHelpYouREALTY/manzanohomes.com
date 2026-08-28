import { SITE } from "@/lib/site";

export type StreetProperty = {
  slug: string;
  path: string;
  streetNumber: string;
  fullAddress: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  heroSrc: string;
  heroAlt: string;
  h2: string;
  paragraphs: string[];
  facts: Array<{ label: string; value: string }>;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ href: string; label: string }>;
};

const CITY_LINE = `${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;

export const STREET_PROPERTIES: StreetProperty[] = [
  {
    slug: "3675-manzano-peak",
    path: "/property/3675-manzano-peak",
    streetNumber: "3675",
    fullAddress: `3675 Manzano Peak Ave, ${CITY_LINE}`,
    title: "3675 Manzano Peak Ave Las Vegas NV 89121 | Street File",
    description:
      "3675 Manzano Peak Ave, Las Vegas NV 89121 — Vales at Manzano street file, 89121 comps, and same-week tours with Dr. Jan Duffy. Confirm live MLS status before you bid.",
    h1: "3675 Manzano Peak Ave, Las Vegas NV 89121",
    subtitle:
      "Street file for this address in Vales at Manzano — live MLS status is not frozen on this page",
    heroSrc: "/media/hero-listings.jpg",
    heroAlt: "Two-story stucco homes on a southeast Las Vegas 89121 street like Manzano Peak Ave",
    h2: "Where 3675 sits on Manzano Peak Ave",
    paragraphs: [
      "3675 Manzano Peak Ave is on the same 89121 block as the Manzano Homes office pin at 3693 Manzano Peak Ave. This page is a street file, not a live listing card: price, beds, and status change in MLS and are not quoted here.",
      "The pocket is the 2015-era Vales at Manzano / Manzano Peak group of 150+ homes in southeast Las Vegas. Builder ranges for the community have listed from about $315,990 (KB Home). That is a community starting point, not a bid on 3675.",
      "Daily distances from this block: Manzano Park about 0.1 miles, Manzano Elementary School about 0.3 miles, Southeast Career Technical Academy about 1.2 miles, Green Valley High School about 2.1 miles. CCSD zoning is still street-specific — we confirm the assignment before you write.",
      `Call ${SITE.phoneDisplay} to tour this address or the houses next door. ${SITE.agent}, ${SITE.brokerage}, license ${SITE.license}.`,
    ],
    facts: [
      { label: "Address", value: "3675 Manzano Peak Ave" },
      { label: "Zip", value: "89121" },
      { label: "Community", value: "Vales at Manzano / Manzano Peak" },
      { label: "Office pin", value: "3693 Manzano Peak Ave (same street)" },
    ],
    faqs: [
      {
        question: "Is 3675 Manzano Peak Ave for sale?",
        answer:
          "This page does not publish a list price or status. Call the office for today's MLS status, or search the Homes for Sale widget.",
      },
      {
        question: "How far is 3675 from the Manzano Homes office?",
        answer:
          "It is on the same street as 3693 Manzano Peak Ave, the NAP / KB Home Vales at Manzano sales-office pin.",
      },
    ],
    related: [
      { href: "/property/3687-manzano-peak", label: "3687 Manzano Peak Ave" },
      { href: "/3693-manzano-peak-ave", label: "3693 Manzano Peak Ave office" },
      { href: "/homes-for-sale", label: "Live 89121 listings" },
    ],
  },
  {
    slug: "3687-manzano-peak",
    path: "/property/3687-manzano-peak",
    streetNumber: "3687",
    fullAddress: `3687 Manzano Peak Ave, ${CITY_LINE}`,
    title: "3687 Manzano Peak Ave Las Vegas NV 89121 | Street File",
    description:
      "3687 Manzano Peak Ave, Las Vegas NV 89121 — mid-block street file between 3675 and the 3693 office pin. Tours and 89121 comps with Dr. Jan Duffy.",
    h1: "3687 Manzano Peak Ave, Las Vegas NV 89121",
    subtitle:
      "Mid-block street file between 3675 and 3693 Manzano Peak Ave — confirm availability on live MLS",
    heroSrc: "/media/hero-neighborhood.jpg",
    heroAlt: "Desert-landscaped sidewalk and beige homes in a Las Vegas 89121 pocket neighborhood",
    h2: "3687 is mid-block on Manzano Peak Ave",
    paragraphs: [
      "3687 Manzano Peak Ave sits between 3675 and 3693 on the same 89121 street. Use this page for orientation, commute notes, and a tour request — not as a substitute for the current MLS sheet.",
      "Manzano Peak is a 2015-era production pocket. Plans in the community commonly run about 1,100–2,500 square feet with attached garages. ZIP 89121 median single-family resales have printed near $315,000 in 2026 reporting; that ZIP figure does not price 3687.",
      "From this block: I-515 / I-215 for the Strip (about 12 miles) and Harry Reid International (about 8 miles / 10 minutes, traffic dependent). Grocery and retail sit on the 89121 / Henderson edge within about 1.5 miles.",
      `Same-week tours: ${SITE.phoneDisplay}. ${SITE.agent} at ${SITE.brokerage}.`,
    ],
    facts: [
      { label: "Address", value: "3687 Manzano Peak Ave" },
      { label: "Zip", value: "89121" },
      { label: "Block", value: "Between 3675 and 3693 Manzano Peak Ave" },
      { label: "Commute", value: "About 10 minutes to Harry Reid International" },
    ],
    faqs: [
      {
        question: "Does this page list beds, baths, or a price for 3687?",
        answer:
          "No. Those fields belong on the live MLS sheet. We pull them when you ask for a tour or a CMA.",
      },
      {
        question: "Can I compare 3687 with other 89121 streets?",
        answer:
          "Yes. Use the Homes for Sale search and the 89121, 89178, 89179, and 89138 zip pages, then we tour in one loop.",
      },
    ],
    related: [
      { href: "/property/3675-manzano-peak", label: "3675 Manzano Peak Ave" },
      { href: "/3693-manzano-peak-ave", label: "3693 Manzano Peak Ave office" },
      { href: "/89121-real-estate", label: "89121 zip page" },
    ],
  },
  {
    slug: "3693-manzano-peak",
    path: "/property/3693-manzano-peak",
    streetNumber: "3693",
    fullAddress: `3693 Manzano Peak Ave, ${CITY_LINE}`,
    title: "3693 Manzano Peak Ave Las Vegas NV 89121 | Property File",
    description:
      "3693 Manzano Peak Ave, Las Vegas NV 89121 — property file for the Vales at Manzano sales-office pin and Manzano Homes NAP. Hours and map are on the office page.",
    h1: "3693 Manzano Peak Ave property file, Las Vegas 89121",
    subtitle:
      "The Vales at Manzano sales-office pin and Manzano Homes NAP — office hours live on the dedicated office page",
    heroSrc: "/media/hero-3693.jpg",
    heroAlt: "Beige stucco home elevation matching 3693 Manzano Peak Ave Las Vegas",
    h2: "This address is the community pin, not a mystery listing",
    paragraphs: [
      "3693 Manzano Peak Ave is the published address for Manzano Homes and the KB Home Vales at Manzano sales office. The office page has hours, the map embed, and Google review links. This URL is the property-path Google already discovered, kept live so the street file 200s instead of 404s.",
      "Treat 3693 as the comparable pin for nearby 89121 inventory: 3675 and 3687 on the same street, Manzano Park at 0.1 miles, and named CCSD campuses within 3 miles. Do not copy a builder starting price onto this lot without a current MLS sheet.",
      `Office hours: ${SITE.hoursDisplay}. Phone ${SITE.phoneDisplay}. Email ${SITE.email}. License ${SITE.license}.`,
    ],
    facts: [
      { label: "Address", value: SITE.address.street },
      { label: "Use", value: "NAP + Vales at Manzano sales office" },
      { label: "Hours", value: SITE.hoursDisplay },
      { label: "Phone", value: SITE.phoneDisplay },
    ],
    faqs: [
      {
        question: "Is 3693 Manzano Peak Ave a home for sale?",
        answer:
          "It is the office / sales-office pin for this pocket. For current resale inventory on the street, use Homes for Sale or call the office.",
      },
      {
        question: "Where are hours and directions?",
        answer:
          "On the 3693 Manzano Peak Ave office page, which has the map embed, directions link, and Google reviews.",
      },
    ],
    related: [
      { href: "/3693-manzano-peak-ave", label: "Office hours, map, reviews" },
      { href: "/property/3675-manzano-peak", label: "3675 Manzano Peak Ave" },
      { href: "/property/3687-manzano-peak", label: "3687 Manzano Peak Ave" },
    ],
  },
];

const BY_SLUG = new Map(STREET_PROPERTIES.map((property) => [property.slug, property]));

export function getStreetProperty(slug: string): StreetProperty | undefined {
  return BY_SLUG.get(slug);
}
