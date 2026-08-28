import type { MarketingContent } from "@/components/sections/MarketingPage";
import { SITE } from "./site";

const contactFaq = [
  {
    question: "How do I reach Manzano Homes?",
    answer: `Call ${SITE.phoneDisplay}, email ${SITE.email}, or use the contact form. Office hours are ${SITE.hoursDisplay} at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}.`,
  },
  {
    question: "What services does Manzano Homes provide?",
    answer:
      "Buying, selling, home valuations, listing alerts, and market reports for Manzano Peak and nearby 89121, 89178, 89179, and 89138 inventory.",
  },
];

export const PAGES: Record<string, MarketingContent> = {
  "/neighborhood": {
    path: "/neighborhood",
    title: "Manzano Neighborhood Las Vegas 89121 | Homes, Parks, Commute",
    description:
      "Manzano neighborhood real estate in Southeast Las Vegas 89121. 150+ homes, 89121 ZIP median near $315K (verify MLS), 15-minute Strip commute, parks and named schools nearby.",
    h1: "Manzano neighborhood real estate, Las Vegas 89121",
    subtitle: "Southeast valley pocket around 3693 Manzano Peak Ave — parks, named campuses, I-515",
    imageAlt: "Manzano Peak homes and landscaping in Las Vegas 89121",
    paragraphs: [
      "Manzano sits in Southeast Las Vegas zip 89121, about 12 miles from the Strip and 10 minutes from Harry Reid International Airport via I-515 and I-215.",
      "Homes typically run 1,500–3,500 square feet with attached garages. Recent list prices cluster from $350,000 to $750,000 — confirm on live MLS, not this page.",
      "Daily needs: Manzano Park is 0.1 miles from 3693 Manzano Peak Ave. Sunset Park, Coronado Park, and Pecos Legacy Park sit 1.5–3.1 miles out. Grocery and retail include Vons (0.8 miles) and Target (1.5 miles).",
    ],
    stats: [
      { value: "150+", label: "Homes in Manzano Peak" },
      { value: "$315K", label: "ZIP median SFR (verify MLS)" },
      { value: "15 min", label: "Drive to the Strip" },
      { value: "89121", label: "Zip code" },
    ],
    faqs: [
      {
        question: "Where is the Manzano neighborhood?",
        answer:
          "Southeast Las Vegas, NV 89121, around 3693 Manzano Peak Ave. It is 12 miles from the Strip and near I-515 and I-215.",
      },
      {
        question: "Which schools are near Manzano Peak?",
        answer:
          "Manzano Elementary School (0.3 miles), Southeast Career Technical Academy (1.2 miles), Green Valley High School (2.1 miles), and Coronado High School (2.8 miles).",
      },
      ...contactFaq,
    ],
    showListings: true,
  },
  "/manzano-peak-neighborhood": {
    path: "/manzano-peak-neighborhood",
    title: "Manzano Peak Neighborhood Las Vegas | 89121 Real Estate",
    description:
      "Manzano Peak neighborhood in Las Vegas 89121: modern homes, named schools, parks, and $350K–$750K list bands. Tour with Dr. Jan Duffy.",
    h1: "Manzano Peak neighborhood | 2015-era 89121 homes",
    subtitle: "Vales and Glades at Manzano — new construction and resale on the same streets",
    imageAlt: "Street view of Manzano Peak neighborhood Las Vegas homes",
    paragraphs: [
      "Manzano Peak is a 2015-era pocket of 150+ homes in 89121. Inventory mixes single-family houses, townhomes, and newer construction.",
      "Walk Score 72 means some errands are on foot; most residents still drive. Commute to the Strip is about 15 minutes.",
      `Office and listing tours start at ${SITE.address.street}. Call ${SITE.phoneDisplay} to walk a floor plan this week.`,
    ],
    stats: [
      { value: "$316K+", label: "Vales from (verify)" },
      { value: "72", label: "Walk Score" },
      { value: "12 mi", label: "To the Strip" },
      { value: "2015+", label: "Build years" },
    ],
    faqs: [
      {
        question: "What is the median home price in Manzano Peak?",
        answer:
          "Recent 89121 ZIP medians for existing homes clustered near $315,000. KB Home lists Vales at Manzano from about $315,990. Live MLS prices still beat any web snippet.",
      },
      {
        question: "How far is Manzano Peak from the Las Vegas Strip?",
        answer: "About 12 miles, roughly a 15-minute drive via I-515 and I-215.",
      },
      ...contactFaq,
    ],
    showListings: true,
  },
  "/manzano-specialist": {
    path: "/manzano-specialist",
    title: "Manzano Specialist | HOA, Commute, and 89178 Area Guide",
    description:
      "Manzano Peak specialist guide: HOA notes, commute times, nearby retail, and 89178/89121 listing context from Dr. Jan Duffy.",
    h1: "Manzano Peak Specialist Guide",
    subtitle: "HOA, commute, retail distances, and resale context for 89121/89178",
    imageAlt: "Manzano Peak community exterior in Southeast Las Vegas",
    paragraphs: [
      "This page is the long-form briefing for buyers comparing Manzano Peak to nearby 89178 and 89121 streets.",
      "Ask for the current HOA packet before writing an offer — assessments and rental rules change, and we do not guess them here.",
      "Use the listings widget for today's inventory, then request a same-week tour.",
    ],
    faqs: contactFaq,
    showListings: true,
  },
  "/about": {
    path: "/about",
    title: "About Manzano Homes | Las Vegas Real Estate | 89121",
    description:
      "Manzano Homes is Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties, serving 3693 Manzano Peak Ave and Las Vegas 89121.",
    h1: "About Manzano Homes",
    subtitle: "Local listing work in 89121 with BHHS Nevada Properties",
    imageAlt: "Manzano Homes Las Vegas office area near Manzano Peak Ave",
    paragraphs: [
      `Manzano Homes is the hyperlocal brand for ${SITE.agent}, REALTOR®, ${SITE.brokerage}, license ${SITE.license}.`,
      `The office address is ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}. Call ${SITE.phoneDisplay}.`,
      "Work focuses on Manzano Peak and nearby zip codes 89121, 89178, 89179, and 89138 — tours, pricing, and listing alerts rather than valley-wide slogans.",
    ],
    faqs: contactFaq,
    showForm: true,
  },
  "/buying-guide": {
    path: "/buying-guide",
    title: "Las Vegas Buying Guide | Manzano Peak 89121",
    description:
      "Step-by-step home buying guide for Manzano Peak and Las Vegas 89121: pre-approval, offers, inspections, and closing timelines.",
    h1: "Buying a Home in Manzano Peak",
    subtitle: "Pre-approval, offer strategy, and a 30–60 day close in 89121",
    imageAlt: "Buyers touring a Manzano Peak Las Vegas home",
    paragraphs: [
      "Start with a local lender pre-approval, then we match live MLS inventory in 89121 to your payment range — not a brochure price.",
      "Typical inspection and appraisal windows in Clark County are 10–15 days. New construction adds builder punch-list time.",
      `Call ${SITE.phoneDisplay} before you bid. Same-day showing windows fill up when 89121 inventory is thin.`,
    ],
    faqs: [
      {
        question: "How long does a Manzano Peak purchase take?",
        answer:
          "Most financed resales close in 30–45 days. Cash can close faster if title and HOA docs are clean.",
      },
      ...contactFaq,
    ],
    showListings: true,
  },
  "/selling-guide": {
    path: "/selling-guide",
    title: "Selling a Home in Manzano Peak | Las Vegas 89121",
    description:
      "Seller guide for Manzano Peak and 89121: prep, pricing, and listing timeline with Dr. Jan Duffy.",
    h1: "Selling in Manzano Peak",
    subtitle: "Pricing from live comps, not last year's average",
    imageAlt: "Manzano Peak Las Vegas home staged for sale",
    paragraphs: [
      "We price from the last 90 days of 89121 comps plus active competition within a mile of Manzano Peak Ave.",
      "Pre-list work that moves the needle: paint, lighting, and a 3D tour. Skip vague 'curb appeal' claims — bring a punch list.",
      "Request a valuation on the Home Valuation page or call for a walkthrough.",
    ],
    faqs: contactFaq,
    showForm: true,
  },
  "/market-reports": {
    path: "/market-reports",
    title: "Las Vegas 89121 Market Reports | Manzano Homes",
    description:
      "89121 and Manzano Peak market snapshots: days on market, list-to-sale context, and live MLS listings.",
    h1: "Manzano Peak Market Reports",
    subtitle: "89121 days on market, list bands, and current inventory",
    imageAlt: "Las Vegas 89121 housing market context near Manzano Peak",
    paragraphs: [
      "Treat any printed median as stale the day it ships. The listings widget below is the live check.",
      "Recent 89121 resales in this pocket have sat about 28 days. That number moves with rate news — ask for this week's pull.",
    ],
    stats: [
      { value: "28", label: "Days on market (recent)" },
      { value: "$185", label: "Approx. $/sq ft" },
      { value: "12", label: "Nearby actives (varies)" },
    ],
    faqs: contactFaq,
    showListings: true,
  },
  "/blog": {
    path: "/blog",
    title: "Las Vegas Real Estate Blog | Manzano Homes 89121",
    description:
      "Market notes, buying steps, and Manzano Peak listing alerts from Dr. Jan Duffy in Las Vegas 89121.",
    h1: "Manzano Peak Market Notes",
    subtitle: "Practical 89121 updates — not recycled valley averages",
    imageAlt: "Manzano Peak Las Vegas real estate market notes",
    paragraphs: [
      "This feed is for 89121 buyers and sellers who want street-level context: new listings, price cuts, and tour windows.",
      "For a custom pull, use the Market Reports page or call the office.",
    ],
    faqs: contactFaq,
  },
  "/home-valuation": {
    path: "/home-valuation",
    title: "Home Valuation | Manzano Peak Las Vegas 89121",
    description:
      "Request a Manzano Peak / 89121 home valuation from Dr. Jan Duffy. Live widget plus a human pricing call.",
    h1: "89121 home valuation for Manzano Peak",
    subtitle: "Widget first pass, then a human pricing call on your street",
    imageAlt: "Kitchen island with keys and tablet used for a home valuation",
    paragraphs: [
      "Use the RealScout widget for a first pass, then we reconcile with the last 90 days of solds on Manzano Peak Ave and adjacent streets.",
      "Automated values miss HOA, upgrades, and lot quirks. ZIP-wide medians near $315,000 in 2026 do not price a specific plan. That is why the call still matters.",
    ],
    faqs: contactFaq,
    showForm: true,
    showHomeValue: true,
  },
  "/3693-manzano-peak-ave": {
    path: "/3693-manzano-peak-ave",
    title: "3693 Manzano Peak Ave Las Vegas NV 89121 | Listing Context",
    description:
      "3693 Manzano Peak Ave, Las Vegas NV 89121 — office address and nearby listing context with Dr. Jan Duffy.",
    h1: "3693 Manzano Peak Ave",
    subtitle: "Las Vegas, NV 89121 — office, tours, and nearby listings",
    imageAlt: "3693 Manzano Peak Ave Las Vegas NV 89121",
    paragraphs: [
      "3693 Manzano Peak Ave is the NAP address for Manzano Homes and a useful pin for nearby 89121 inventory.",
      `Call ${SITE.phoneDisplay} to tour this street or set listing alerts inside a half-mile.`,
    ],
    faqs: contactFaq,
    showListings: true,
  },
  "/89121-real-estate": {
    path: "/89121-real-estate",
    title: "89121 Real Estate | Southeast Las Vegas Homes",
    description:
      "89121 Las Vegas homes for sale: Southeast valley inventory, $350K–$850K list bands, I-515 access, named schools.",
    h1: "89121 Las Vegas Real Estate",
    subtitle: "Southeast Las Vegas · 3,800+ homes · I-515 / I-215 access",
    imageAlt: "Homes for sale in Las Vegas zip code 89121",
    paragraphs: [
      "Zip 89121 covers established Southeast Las Vegas streets including Manzano Peak. List bands commonly run $350,000–$850,000 depending on plan and lot.",
      "Commute: about 15 minutes to the Strip. Retail includes the District at Green Valley Ranch (about 3.5 miles) and Galleria at Sunset (about 5.2 miles).",
    ],
    faqs: contactFaq,
    showListings: true,
  },
  "/89178-real-estate": {
    path: "/89178-real-estate",
    title: "89178 Real Estate | Southwest Las Vegas Homes",
    description:
      "89178 Las Vegas homes near Mountains Edge and southwest employment corridors. Compare with Manzano Peak 89121.",
    h1: "89178 Las Vegas Real Estate",
    subtitle: "Southwest Las Vegas inventory compared with Manzano Peak",
    imageAlt: "Homes for sale in Las Vegas zip code 89178",
    paragraphs: [
      "89178 sits southwest of the Strip with newer tracts and longer desert commutes than 89121.",
      "Use this page to compare commute and price with Manzano Peak, then tour both in one afternoon.",
    ],
    faqs: contactFaq,
    showListings: true,
  },
  "/89179-real-estate": {
    path: "/89179-real-estate",
    title: "89179 Real Estate | Northwest Las Vegas Homes",
    description:
      "89179 Northwest Las Vegas homes for sale. Newer construction pockets and highway access versus 89121 Manzano Peak.",
    h1: "89179 Las Vegas Real Estate",
    subtitle: "Northwest Las Vegas · newer construction compared with 89121",
    imageAlt: "Homes for sale in Las Vegas zip code 89179",
    paragraphs: [
      "89179 is a northwest growth zip with more new-build streets than inner 89121.",
      "Median list context near $435K has been typical — verify on MLS before you bid.",
    ],
    faqs: contactFaq,
    showListings: true,
  },
  "/89138-real-estate": {
    path: "/89138-real-estate",
    title: "89138 Real Estate | Summerlin West / Southwest Las Vegas",
    description:
      "89138 Las Vegas homes — Summerlin West adjacency, compared with Manzano Peak 89121 inventory.",
    h1: "89138 Las Vegas Real Estate",
    subtitle: "Southwest / Summerlin West zip compared with Manzano Peak",
    imageAlt: "Homes for sale in Las Vegas zip code 89138",
    paragraphs: [
      "89138 sits closer to Summerlin West employment and Red Rock access than 89121.",
      "Buyers often tour 89138 and Manzano Peak the same weekend to compare HOA, commute, and lot size.",
    ],
    faqs: contactFaq,
    showListings: true,
  },
  "/careers": {
    path: "/careers",
    title: "Real Estate Careers | Manzano Homes Las Vegas",
    description:
      "Join Manzano Homes / BHHS Nevada Properties in Las Vegas 89121. Licensed agent roles with Dr. Jan Duffy.",
    h1: "Careers at Manzano Homes",
    subtitle: "Licensed agent work in 89121 with BHHS Nevada Properties",
    imageAlt: "Real estate careers at Manzano Homes Las Vegas",
    paragraphs: [
      "We hire Nevada-licensed agents who want hyperlocal 89121 work, not a generic valley floor desk.",
      `Email ${SITE.email} with your license number. Office: ${SITE.address.street}.`,
    ],
    faqs: contactFaq,
    showForm: true,
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Manzano Homes",
    description:
      "Privacy policy for ManzanoHomes.com: how Manzano Homes handles contact-form, valuation, and listing-alert data.",
    h1: "Privacy policy for ManzanoHomes.com",
    subtitle: "How contact-form, valuation, and listing-alert data is used",
    imageAlt: "Manzano Homes Las Vegas privacy information",
    paragraphs: [
      "Manzano Homes collects name, email, phone, and message content when you submit a form or request a valuation.",
      "We use that data to respond to your inquiry and, when configured, to create or update a Follow Up Boss contact. We do not sell personal information.",
      `Questions: ${SITE.email} or ${SITE.phoneDisplay}.`,
    ],
    faqs: contactFaq,
    cta: "contact",
  },
  "/terms-of-service": {
    path: "/terms-of-service",
    title: "Terms of Service | Manzano Homes",
    description: "Terms of use for ManzanoHomes.com, listings widgets, and market content.",
    h1: "Terms of service | ManzanoHomes.com listings",
    subtitle: "MLS widgets, estimates, and site use for Las Vegas 89121",
    imageAlt: "Manzano Homes Las Vegas terms of service",
    paragraphs: [
      "Listing data is supplied by third-party MLS widgets and may lag the live market. Confirm every number before you offer.",
      "This site is an advertisement for Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Equal Housing Opportunity.",
    ],
    faqs: contactFaq,
    cta: "contact",
  },
  "/disclaimer": {
    path: "/disclaimer",
    title: "MLS Disclaimer | Manzano Homes",
    description: "MLS and brokerage disclaimer for ManzanoHomes.com listings and market figures.",
    h1: "MLS disclaimer | Manzano Homes Las Vegas",
    subtitle: "Listing attribution, estimate limits, and Equal Housing Opportunity",
    imageAlt: "Manzano Homes Las Vegas MLS disclaimer",
    paragraphs: [
      "RealScout and MLS content is for consumers' personal, non-commercial use. It may not be copied or redistributed.",
      "Price, status, and square footage can change without notice. Dr. Jan Duffy / BHHS Nevada Properties is not responsible for third-party data errors.",
    ],
    faqs: contactFaq,
    cta: "contact",
  },
  "/accessibility": {
    path: "/accessibility",
    title: "Accessibility | Manzano Homes",
    description: "Accessibility statement for ManzanoHomes.com. Request an alternate format.",
    h1: "Accessibility at ManzanoHomes.com",
    subtitle: "Request an alternate format if a form, widget, or map blocks you",
    imageAlt: "Manzano Homes Las Vegas accessibility statement",
    paragraphs: [
      `If a form, widget, or map blocks you, email ${SITE.email} or call ${SITE.phoneDisplay} and we will provide the same information another way.`,
    ],
    faqs: contactFaq,
    cta: "contact",
  },
};
