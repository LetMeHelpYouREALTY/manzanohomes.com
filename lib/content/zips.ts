import type { InfoCard } from "@/components/sections/InfoCardGrid";
import { contactFaqs } from "./shared-faqs";

export type ZipMarketContent = {
  path: string;
  zip: string;
  area: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  imageAlt: string;
  overview: string;
  established: string;
  homeTypes: string[];
  stats: Array<{ value: string; label: string }>;
  features: Array<{ title: string; description: string }>;
  schools: InfoCard[];
  shopping: InfoCard[];
  parks: InfoCard[];
  faqs: Array<{ question: string; answer: string }>;
};

export const ZIP_PAGES: Record<string, ZipMarketContent> = {
  "89121": {
    path: "/89121-real-estate",
    zip: "89121",
    area: "Southeast Las Vegas",
    title: "89121 Real Estate | Southeast Las Vegas Homes",
    description:
      "89121 Las Vegas homes for sale: Southeast valley inventory, $350K–$850K list bands, I-515 access, named schools, parks, and live MLS search.",
    h1: "89121 Las Vegas real estate | Southeast valley homes",
    subtitle: "UNLV-adjacent southeast ZIP · I-515 · named campuses · live MLS",
    imageAlt: "Established southeast Las Vegas 89121 streets with mature trees and stucco homes",
    overview:
      "Zip 89121 covers established Southeast Las Vegas streets including Manzano Peak. Nevada Real Estate Group puts 2026 median single-family resales near $315,000. KB Home lists Vales at Manzano from about $315,990. Confirm on live MLS, not this page.",
    established: "1990s",
    homeTypes: ["Single family", "Townhomes", "Condos", "New construction"],
    stats: [
      { value: "$315K", label: "Median SFR (verify MLS)" },
      { value: "3,800+", label: "Homes in 89121" },
      { value: "15 min", label: "Drive to the Strip" },
      { value: "72", label: "Walk Score" },
    ],
    features: [
      { title: "Established streets", description: "Mature landscaping and 1990s–2010s inventory mixed with 2015-era pockets like Manzano Peak." },
      { title: "Named schools nearby", description: "Manzano Elementary (0.3 mi), SECTA (1.2 miles), Green Valley High (2.1 miles), Coronado High (2.8 miles)." },
      { title: "Highway access", description: "I-515 and I-215 for Strip, airport, and Henderson commutes." },
      { title: "Daily retail", description: "Vons 0.8 miles, Target 1.5 miles, District at Green Valley Ranch about 3.5 miles." },
    ],
    schools: [
      {
        name: "Manzano Elementary School",
        type: "Elementary",
        distance: "0.3 miles",
        description: "CCSD elementary 0.3 miles from 3693 Manzano Peak Ave.",
        href: "/homes-near-manzano-elementary",
        image: "/media/hero-school-elem.jpg",
        imageAlt: "Elementary campus exterior in Las Vegas 89121",
      },
      {
        name: "Southeast Career Technical Academy",
        type: "High school",
        distance: "1.2 miles",
        description: "Career and technical programs 1.2 miles from Manzano Peak.",
        href: "/homes-near-southeast-career-technical-academy",
        image: "/media/hero-school-secta.jpg",
        imageAlt: "Career technical academy campus in Las Vegas 89120",
      },
      {
        name: "Green Valley High School",
        type: "High school",
        distance: "2.1 miles",
        description: "Henderson high school 2.1 miles from Manzano Peak.",
        href: "/homes-near-green-valley-high-school",
        image: "/media/hero-school-hs.jpg",
        imageAlt: "Green Valley High School campus in Henderson Nevada",
      },
      {
        name: "Coronado High School",
        type: "High school",
        distance: "2.8 miles",
        description: "Henderson high school 2.8 miles from Manzano Peak.",
        href: "/homes-near-coronado-high-school",
        image: "/media/hero-school-hs.jpg",
        imageAlt: "Henderson high school campus buildings and parking lot",
      },
    ],
    shopping: [
      {
        name: "Green Valley Ranch Resort & Casino",
        type: "Entertainment & shopping",
        distance: "3.2 miles",
        description: "Resort retail, dining, and entertainment in Henderson.",
        image: "/media/h3-shopping.jpg",
        imageAlt: "Open-air shopping plaza with palms in the Las Vegas valley",
      },
      {
        name: "The District at Green Valley Ranch",
        type: "Shopping center",
        distance: "3.5 miles",
        description: "Open-air retail and restaurants.",
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
      {
        name: "Galleria at Sunset",
        type: "Shopping mall",
        distance: "5.2 miles",
        description: "Enclosed mall with department stores and dining.",
        image: "/media/h3-shopping.jpg",
        imageAlt: "Shopping center parking lot in Henderson Nevada",
      },
    ],
    parks: [
      {
        name: "Manzano Park",
        type: "Neighborhood park",
        distance: "0.1 miles",
        features: ["Playground", "Walking trails", "Picnic areas", "Basketball court"],
        image: "/media/h3-park.jpg",
        imageAlt: "Pocket park with playground and walking path in southeast Las Vegas 89121",
      },
      {
        name: "Coronado Park",
        type: "Community park",
        distance: "1.5 miles",
        features: ["Tennis courts", "Soccer fields", "Playground", "Walking paths"],
        image: "/media/h3-park.jpg",
        imageAlt: "Community park fields in southeast Las Vegas",
      },
      {
        name: "Sunset Park",
        type: "Regional park",
        distance: "2.8 miles",
        features: ["Lake", "Walking trails", "Sports fields", "Dog park"],
        image: "/media/h3-park.jpg",
        imageAlt: "Regional park walking path in Las Vegas",
      },
    ],
    faqs: [
      {
        question: "What is the typical list band in 89121?",
        answer:
          "Recent 89121 ZIP medians for existing homes clustered near $315,000. Builder ranges in Vales and Glades sit higher. Use the live MLS widget on this page before you bid.",
      },
      {
        question: "How far is 89121 from the Las Vegas Strip?",
        answer: "About 12 miles, roughly a 15-minute drive via I-515 and I-215.",
      },
      ...contactFaqs,
    ],
  },
  "89178": {
    path: "/89178-real-estate",
    zip: "89178",
    area: "Southwest Las Vegas / Mountains Edge",
    title: "89178 Real Estate | Mountains Edge Las Vegas Homes",
    description:
      "89178 Las Vegas homes near Mountains Edge. Compare commute, HOA, and list bands with Manzano Peak 89121. Live MLS search with Dr. Jan Duffy.",
    h1: "89178 Las Vegas real estate | Mountains Edge homes",
    subtitle: "Southwest master plan compared with Manzano Peak 89121",
    imageAlt: "Mountains Edge Las Vegas 89178 homes with desert foothills",
    overview:
      "89178 sits southwest of the Strip around Mountains Edge. Brownell Team (July 25, 2026) reported 136 actives, 55 average DOM, about $237/sq ft, and a $520,000 median list. Redfin Mountain Edge median sale about $474,840 in May 2026. Tour both zips the same afternoon if you are comparing HOA, lot size, and drive time.",
    established: "2000s",
    homeTypes: ["Single family", "Townhomes", "New construction"],
    stats: [
      { value: "$520K", label: "Median list (verify MLS)" },
      { value: "2,500+", label: "Homes in 89178" },
      { value: "20 min", label: "Drive to the Strip" },
      { value: "65", label: "Walk Score" },
    ],
    features: [
      { title: "Newer tracts", description: "2000s–2010s construction with HOA-managed common areas." },
      { title: "I-15 / I-215 access", description: "Southwest beltway and I-15 for Strip and employment corridors." },
      { title: "Mountains Edge parks", description: "Regional park trails, sports fields, and playgrounds inside the master plan." },
      { title: "Compare with 89121", description: "Manzano Peak is closer to Harry Reid International; 89178 trades that for newer streetscapes." },
    ],
    schools: [],
    shopping: [
      {
        name: "Mountains Edge retail",
        type: "Shopping center",
        distance: "Inside 89178",
        description: "Grocery and daily retail inside the master-planned streets.",
        image: "/media/h2-retail.jpg",
        imageAlt: "Southwest Las Vegas shopping center parking lot",
      },
      {
        name: "Red Rock Casino Resort & Spa",
        type: "Entertainment",
        distance: "About 5 miles",
        description: "Resort dining and shopping toward Summerlin.",
        image: "/media/h3-shopping.jpg",
        imageAlt: "West-valley resort retail exterior in Las Vegas",
      },
    ],
    parks: [
      {
        name: "Mountains Edge Regional Park",
        type: "Regional park",
        distance: "Inside 89178",
        features: ["Playground", "Sports fields", "Walking trails", "Fitness equipment"],
        image: "/media/h3-park.jpg",
        imageAlt: "Regional park trails and fields in southwest Las Vegas",
      },
    ],
    faqs: [
      {
        question: "Is 89178 the same as Manzano Peak?",
        answer:
          "No. Manzano Peak is in 89121 (southeast). 89178 is Mountains Edge in the southwest valley. We tour both in one loop when you want a commute comparison.",
      },
      {
        question: "How do I check school zoning in 89178?",
        answer:
          "CCSD zoning is street-specific. We pull the current assignment for the exact address before you tour.",
      },
      ...contactFaqs,
    ],
  },
  "89179": {
    path: "/89179-real-estate",
    zip: "89179",
    area: "Southern Highlands / south valley",
    title: "89179 Real Estate | Southern Highlands Las Vegas Homes",
    description:
      "89179 Las Vegas homes near Southern Highlands. Newer construction, I-15 access, compared with Manzano Peak 89121 inventory.",
    h1: "89179 Las Vegas real estate | Mountains Edge South",
    subtitle: "South-valley new construction compared with Manzano Peak 89121",
    imageAlt: "Southern Highlands and Mountains Edge South new-construction streets",
    overview:
      "89179 is a south-valley growth zip around Southern Highlands with more new-build streets than inner 89121. Median list context near $435K has been typical — verify on MLS before you bid.",
    established: "2000s",
    homeTypes: ["Single family", "Townhomes", "New construction"],
    stats: [
      { value: "$435K", label: "Median list (verify MLS)" },
      { value: "3,200+", label: "Homes in 89179" },
      { value: "18 min", label: "Drive to the Strip" },
      { value: "68", label: "Walk Score" },
    ],
    features: [
      { title: "New-build streets", description: "Larger share of 2000s–2020s construction than 89121 resale pockets." },
      { title: "I-15 south access", description: "South Strip and airport-adjacent employment via I-15." },
      { title: "Master-plan amenities", description: "Parks and trails inside Southern Highlands-area streets." },
      { title: "Compare with Manzano Peak", description: "89121 is closer to Henderson retail; 89179 is farther south on I-15." },
    ],
    schools: [],
    shopping: [
      {
        name: "Southern Highlands-area retail",
        type: "Daily retail",
        distance: "Inside 89179",
        description: "Grocery and services along the south I-15 corridor.",
        image: "/media/h3-grocery.jpg",
        imageAlt: "Grocery aisle interior typical of south Las Vegas retail",
      },
    ],
    parks: [
      {
        name: "Southern Highlands-area parks",
        type: "Community parks",
        distance: "Inside 89179",
        features: ["Playgrounds", "Walking trails", "Sports fields"],
        image: "/media/h3-park.jpg",
        imageAlt: "Community park in south Las Vegas",
      },
    ],
    faqs: [
      {
        question: "How does 89179 compare with Manzano Peak 89121?",
        answer:
          "89179 is south-valley / Southern Highlands with more new construction. Manzano Peak in 89121 is closer to Henderson retail and Harry Reid International.",
      },
      {
        question: "How do I check school zoning in 89179?",
        answer:
          "CCSD zoning is street-specific. We pull the current assignment for the exact address before you tour.",
      },
      ...contactFaqs,
    ],
  },
  "89138": {
    path: "/89138-real-estate",
    zip: "89138",
    area: "Summerlin West / southwest Las Vegas",
    title: "89138 Real Estate | Summerlin West Las Vegas Homes",
    description:
      "89138 Las Vegas homes — Summerlin West adjacency, Downtown Summerlin and Red Rock access, compared with Manzano Peak 89121.",
    h1: "89138 Las Vegas real estate | Summerlin West homes",
    subtitle: "Red Rock access and west-valley HOAs compared with Manzano Peak",
    imageAlt: "Summerlin West Las Vegas homes with Red Rock Canyon in the background",
    overview:
      "89138 sits closer to Summerlin West employment and Red Rock Canyon than 89121. Redfin: Summerlin West median sale about $796,982 in May 2026 (−5% YoY). Buyers often tour 89138 and Manzano Peak the same weekend to compare HOA, commute, and lot size.",
    established: "2000s",
    homeTypes: ["Single family", "Townhomes", "New construction"],
    stats: [
      { value: "$797K", label: "Median sale (verify MLS)" },
      { value: "4,100+", label: "Homes in 89138" },
      { value: "12 min", label: "Drive to the Strip" },
      { value: "70", label: "Walk Score" },
    ],
    features: [
      { title: "Summerlin West adjacency", description: "Closer to Downtown Summerlin retail than southeast 89121." },
      { title: "Red Rock access", description: "Red Rock Canyon National Conservation Area is the weekend hike, not a slogan." },
      { title: "I-215 beltway", description: "West-valley employment and airport via the beltway rather than I-515." },
      { title: "HOA variety", description: "Master-plan packets differ by village — we request the current docs before you offer." },
    ],
    schools: [],
    shopping: [
      {
        name: "Downtown Summerlin",
        type: "Shopping center",
        distance: "West valley",
        description: "Open-air retail, dining, and a movie theater.",
        image: "/media/h3-shopping.jpg",
        imageAlt: "Open-air shopping plaza in west Las Vegas",
      },
      {
        name: "Red Rock Casino Resort & Spa",
        type: "Entertainment",
        distance: "West valley",
        description: "Resort dining and shopping on Charleston / I-215.",
        image: "/media/h2-retail.jpg",
        imageAlt: "West Las Vegas resort and retail parking lot",
      },
    ],
    parks: [
      {
        name: "Red Rock Canyon National Conservation Area",
        type: "Conservation area",
        distance: "West of 89138",
        features: ["Hiking trails", "Scenic drive", "Visitor center"],
        image: "/media/hero-89138.jpg",
        imageAlt: "Red Rock Canyon sandstone formations west of Las Vegas",
      },
    ],
    faqs: [
      {
        question: "Is 89138 Summerlin?",
        answer:
          "89138 sits on the Summerlin West side of the valley. Village names and HOAs still vary by street — we confirm the packet before you write.",
      },
      {
        question: "How do I check school zoning in 89138?",
        answer:
          "CCSD zoning is street-specific. We pull the current assignment for the exact address before you tour.",
      },
      ...contactFaqs,
    ],
  },
};

export function getZipPage(zip: string): ZipMarketContent {
  const page = ZIP_PAGES[zip];
  if (!page) {
    throw new Error(`Unknown zip page: ${zip}`);
  }
  return page;
}
