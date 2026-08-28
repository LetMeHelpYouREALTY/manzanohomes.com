import type { MediaCard } from "@/components/sections/MediaCardGrid";
import { SITE_ROUTES } from "@/lib/site";

export type PageVisual = {
  h1: string;
  subtitle: string;
  hero: { src: string; alt: string };
  h2: string;
  h2Body: string;
  h2Image: { src: string; alt: string };
  h3Heading: string;
  h3s: MediaCard[];
};

const park: MediaCard = {
  title: "Manzano Park at 0.1 miles",
  body: "Playground, trails, picnic ramada, and a basketball court from 3693 Manzano Peak Ave.",
  image: "/media/h3-park.jpg",
  imageAlt: "Pocket park with playground and walking path in southeast Las Vegas 89121",
};

const highway: MediaCard = {
  title: "I-515 and I-215 access",
  body: "About 12 miles to the Strip and about 10 minutes to Harry Reid International — confirm at the hour you actually drive.",
  image: "/media/h3-highway.jpg",
  imageAlt: "Las Vegas freeway interchange near southeast valley 89121",
};

const plans: MediaCard = {
  title: "1,100–2,500 sq ft plans",
  body: "KB Home lists Vales at Manzano from about $316,000 (1,104–2,069 sq ft). Confirm today's price on live MLS.",
  image: "/media/h3-plans.jpg",
  imageAlt: "Two-story beige stucco home with attached garage in Manzano Peak Las Vegas",
};

const grocery: MediaCard = {
  title: "Daily retail within 1.5 miles",
  body: "Grocery and department stores sit on the 89121 / Henderson edge. Time the drive from the exact address.",
  image: "/media/h3-grocery.jpg",
  imageAlt: "Grocery aisle interior typical of southeast Las Vegas retail",
};

const strip: MediaCard = {
  title: "Under 15 minutes to the Strip",
  body: "Realtor.com and KB Home both place this pocket under 15 minutes to the Las Vegas Strip via I-515 / I-215.",
  image: "/media/h3-strip.jpg",
  imageAlt: "Las Vegas Strip skyline viewed from a southeast valley overpass at dusk",
};

const airport: MediaCard = {
  title: "Harry Reid International",
  body: "About 8 miles / 10 minutes from 3693 Manzano Peak Ave, depending on Tropicana and I-215 traffic.",
  image: "/media/h3-airport.jpg",
  imageAlt: "Harry Reid International Airport terminal exterior in Las Vegas",
};

const school: MediaCard = {
  title: "Named CCSD campuses nearby",
  body: "Manzano Elementary, SECTA (5710 Mountain Vista St), Green Valley High (460 Arroyo Grande Blvd), Coronado High (1001 Coronado Center Dr). Zoning is street-specific.",
  image: "/media/h3-school.jpg",
  imageAlt: "Empty Las Vegas elementary campus walkway and parking lot",
};

const hoa: MediaCard = {
  title: "HOA packet before you write",
  body: "Ask for the current dues, rental rules, and assessments. We do not guess HOA numbers on this site.",
  image: "/media/h3-hoa.jpg",
  imageAlt: "HOA documents and house keys on a table in a Las Vegas home",
};

const shopping: MediaCard = {
  title: "Henderson retail loop",
  body: "District at Green Valley Ranch is about 3.5 miles; Galleria at Sunset about 5.2 miles from the office pin.",
  image: "/media/h3-shopping.jpg",
  imageAlt: "Open-air shopping plaza with palms in the Las Vegas valley",
};

const closing: MediaCard = {
  title: "30–45 day financed close",
  body: "Typical Clark County financed resale window. Cash can be faster if title and HOA docs are clean.",
  image: "/media/h3-closing.jpg",
  imageAlt: "Buyers signing closing documents at a Las Vegas title table",
};

function visual(input: PageVisual): PageVisual {
  return input;
}

export const PAGE_VISUALS: Record<string, PageVisual> = {
  "/": visual({
    h1: "89121 homes for sale in Manzano Peak, Las Vegas",
    subtitle: "Live MLS, same-week tours, and pricing from current comps at 3693 Manzano Peak Ave",
    hero: {
      src: "/media/hero-home.jpg",
      alt: "Manzano Peak Las Vegas 89121 stucco homes at golden hour",
    },
    h2: "What 89121 buyers actually compare",
    h2Body:
      "ZIP 89121 sits in the southeast valley. Nevada Real Estate Group puts 2026 median single-family resales near $315,000 with 32–46 days on market — still verify on MLS before you bid.",
    h2Image: {
      src: "/media/h2-listings.jpg",
      alt: "Laptop showing a Las Vegas listings map on a kitchen table",
    },
    h3Heading: "Street-level facts near 3693 Manzano Peak Ave",
    h3s: [plans, highway, park],
  }),
  "/homes-for-sale": visual({
    h1: "Manzano Peak homes for sale | Las Vegas 89121 MLS",
    subtitle: "Filter live inventory by price, beds, and property type — not a screenshot from last week",
    hero: {
      src: "/media/hero-listings.jpg",
      alt: "Las Vegas suburban home with a yard sign in desert landscaping",
    },
    h2: "Search 89121 and nearby zips on live MLS",
    h2Body:
      "Use the widget for today's status. KB Home still lists Vales at Manzano from about $315,990; Glades at Manzano has listed from about $388,000. Those are builder ranges, not a bid.",
    h2Image: {
      src: "/media/h2-listings.jpg",
      alt: "Laptop map search for Las Vegas 89121 homes",
    },
    h3Heading: "Compare inventory by commute and plan",
    h3s: [plans, strip, grocery],
  }),
  "/neighborhood": visual({
    h1: "Manzano neighborhood real estate, Las Vegas 89121",
    subtitle: "Southeast valley pocket around 3693 Manzano Peak Ave — parks, named campuses, I-515",
    hero: {
      src: "/media/hero-neighborhood.jpg",
      alt: "Manzano Park style playground and walking path in Las Vegas 89121",
    },
    h2: "Manzano Peak sits in southeast Las Vegas 89121",
    h2Body:
      "KB Home's Vales at Manzano sales office is at 3693 Manzano Peak Ave. Realtor.com notes a short drive to Clark County Wetlands Park and under 15 minutes to the Strip.",
    h2Image: {
      src: "/media/hero-manzano-peak.jpg",
      alt: "Aerial view of a compact Las Vegas pocket neighborhood of tile-roof homes",
    },
    h3Heading: "Distances from the office pin",
    h3s: [park, school, grocery],
  }),
  "/manzano-peak-neighborhood": visual({
    h1: "Manzano Peak neighborhood | 2015-era 89121 homes",
    subtitle: "Vales and Glades at Manzano — new construction and resale on the same streets",
    hero: {
      src: "/media/hero-manzano-peak.jpg",
      alt: "Compact Manzano Peak Las Vegas neighborhood of two-story stucco homes",
    },
    h2: "Builder product versus resale on the same streets",
    h2Body:
      "Vales at Manzano: 1,104–2,069 sq ft, 3–4 bedrooms, from about $315,990 (Redfin/KB Home). Glades: 3–5 bedrooms, about 2,000–2,500 sq ft, from about $388,000. Confirm today's numbers.",
    h2Image: {
      src: "/media/h3-plans.jpg",
      alt: "Two-story Manzano Peak production home with attached garage",
    },
    h3Heading: "How this pocket is laid out",
    h3s: [plans, park, highway],
  }),
  "/manzano-specialist": visual({
    h1: "Manzano Peak specialist: HOA, commute, 89121 retail",
    subtitle: "Hyperlocal briefing for buyers comparing 89121 to 89178, 89179, and 89138",
    hero: {
      src: "/media/hero-specialist.jpg",
      alt: "HOA-maintained desert landscaping and sidewalks in Manzano Peak",
    },
    h2: "HOA, commute, and retail before you write",
    h2Body:
      "Request the current HOA packet. Commute to Harry Reid is about 10 minutes; Strip about 15. Grocery and Target sit inside 1.5 miles of the office pin.",
    h2Image: {
      src: "/media/h2-commute.jpg",
      alt: "I-515 toward the Las Vegas Strip at dusk",
    },
    h3Heading: "Numbers we actually quote",
    h3s: [hoa, airport, grocery],
  }),
  "/3693-manzano-peak-ave": visual({
    h1: "3693 Manzano Peak Ave, Las Vegas NV 89121",
    subtitle: "Office pin, KB Home sales address, and nearby listing context",
    hero: {
      src: "/media/hero-3693.jpg",
      alt: "Beige stucco home elevation matching 3693 Manzano Peak Ave Las Vegas",
    },
    h2: "This address is the NAP and the sales-office pin",
    h2Body:
      "Manzano Homes / BHHS Nevada Properties uses 3693 Manzano Peak Ave. KB Home also lists this as the Vales at Manzano sales office. Tours start here.",
    h2Image: {
      src: "/media/h2-form.jpg",
      alt: "Office desk with tablet and phone for listing inquiries",
    },
    h3Heading: "What sits around the pin",
    h3s: [park, school, strip],
  }),
  "/home-valuation": visual({
    h1: "89121 home valuation for Manzano Peak",
    subtitle: "Widget first pass, then a human pricing call on your street",
    hero: {
      src: "/media/hero-valuation.jpg",
      alt: "Kitchen island with keys and tablet used for a home valuation",
    },
    h2: "Automated values miss HOA, upgrades, and lot quirks",
    h2Body:
      "We reconcile the widget with the last 90 days of 89121 solds. ZIP-wide medians near $315,000 in 2026 do not price a specific plan on Manzano Peak Ave.",
    h2Image: {
      src: "/media/hero-market.jpg",
      alt: "Printed comps and a laptop on a desk for a comparative market analysis",
    },
    h3Heading: "What we pull for the call",
    h3s: [plans, hoa, closing],
  }),
  "/contact": visual({
    h1: "Contact Manzano Homes in Las Vegas 89121",
    subtitle: "3693 Manzano Peak Ave · (702) 500-1942 · Mon–Fri 9am–6pm",
    hero: {
      src: "/media/hero-contact.jpg",
      alt: "Manzano Homes office reception in Las Vegas",
    },
    h2: "Send a message or walk in during listed hours",
    h2Body:
      "Dr. Jan Duffy, BHHS Nevada Properties, license S.0197614.LLC. Email DrDuffySells@ManzanoHomes.com. Same-business-day return during office hours.",
    h2Image: {
      src: "/media/h2-form.jpg",
      alt: "Contact form on a tablet next to an office phone",
    },
    h3Heading: "How to reach the office",
    h3s: [airport, strip, grocery],
  }),
  "/about": visual({
    h1: "About Manzano Homes | BHHS Nevada Properties 89121",
    subtitle: "Dr. Jan Duffy, REALTOR® · License S.0197614.LLC · 3693 Manzano Peak Ave",
    hero: {
      src: "/media/hero-about.jpg",
      alt: "Dr. Jan Duffy style realtor reviewing listing comps in a Las Vegas office",
    },
    h2: "Hyperlocal 89121 work, not valley-wide slogans",
    h2Body:
      "We price from live MLS and recent solds on Manzano Peak and adjacent 89121 streets. Builder ranges and ZIP medians are starting points, not a CMA.",
    h2Image: {
      src: "/media/hero-team.jpg",
      alt: "Manzano Homes team reviewing listing packets",
    },
    h3Heading: "How files actually move",
    h3s: [plans, closing, hoa],
  }),
  "/team": visual({
    h1: "Manzano Homes team | Las Vegas 89121 agents",
    subtitle: "Dr. Jan Duffy, Eugene Boyle, and Chance Fuller · BHHS Nevada Properties",
    hero: {
      src: "/media/hero-team.jpg",
      alt: "Three real estate professionals around a conference table in Las Vegas",
    },
    h2: "Who answers the 89121 file",
    h2Body:
      "Listing and buyer work, showing logistics, and transaction coordination for Manzano Peak and nearby zips. Call (702) 500-1942.",
    h2Image: {
      src: "/media/hero-about.jpg",
      alt: "Listing agent at a conference table with printed comps",
    },
    h3Heading: "Coverage on the ground",
    h3s: [highway, closing, grocery],
  }),
  "/careers": visual({
    h1: "Real estate careers at Manzano Homes, Las Vegas 89121",
    subtitle: "Licensed Nevada agents and admin support with BHHS Nevada Properties",
    hero: {
      src: "/media/hero-careers.jpg",
      alt: "Agent walking a staged Las Vegas living room with a tablet",
    },
    h2: "Hyperlocal 89121 desks, not a generic valley floor",
    h2Body:
      "Email DrDuffySells@ManzanoHomes.com with your license number. Splits are quoted in writing after the interview.",
    h2Image: {
      src: "/media/h2-steps.jpg",
      alt: "Clipboard with a numbered onboarding checklist",
    },
    h3Heading: "What the work looks like",
    h3s: [plans, closing, highway],
  }),
  "/buying-guide": visual({
    h1: "Las Vegas buying guide for Manzano Peak 89121",
    subtitle: "Pre-approval, offer strategy, 10–15 day inspections, 30–45 day close",
    hero: {
      src: "/media/hero-buying.jpg",
      alt: "Buyers touring an empty Las Vegas living room with an agent",
    },
    h2: "Eight steps from pre-approval to recorded deed",
    h2Body:
      "Start with a local lender letter, then match live MLS to the payment — not a brochure price. Clark County inspection windows are typically 10–15 days.",
    h2Image: {
      src: "/media/h2-steps.jpg",
      alt: "Numbered buying-process checklist on a clipboard",
    },
    h3Heading: "Financing paths we see on 89121 files",
    h3s: [closing, plans, highway],
  }),
  "/selling-guide": visual({
    h1: "Selling a home in Manzano Peak | Las Vegas 89121",
    subtitle: "Price from 90-day comps, not last year's ZIP average",
    hero: {
      src: "/media/hero-selling.jpg",
      alt: "Staged Las Vegas living room ready for listing photos",
    },
    h2: "Five listing steps that actually move 89121 files",
    h2Body:
      "CMA, punch list, MLS photos, offer review, then dates on one calendar. 89121 medians near $315,000 in 2026 do not replace a street-level CMA.",
    h2Image: {
      src: "/media/blog-staging.jpg",
      alt: "Staged Las Vegas bedroom ready for listing photos",
    },
    h3Heading: "Pricing postures we quote",
    h3s: [plans, hoa, closing],
  }),
  "/market-reports": visual({
    h1: "89121 market reports | Manzano Peak inventory",
    subtitle: "Days on market, list bands, and a live MLS check — dated August 2026",
    hero: {
      src: "/media/hero-market.jpg",
      alt: "Housing-market printouts and a laptop on a Las Vegas desk",
    },
    h2: "ZIP medians go stale the day they print",
    h2Body:
      "Nevada Real Estate Group: 89121 2026 median SFR about $315,000, 32–46 DOM, 3–4 months of inventory, about +3% YoY. Las Vegas metro average home value about $425,749 (Zillow). Use the widget for today.",
    h2Image: {
      src: "/media/blog-market.jpg",
      alt: "Printed CMA sheets on a desk",
    },
    h3Heading: "Context we put next to the widget",
    h3s: [plans, highway, shopping],
  }),
  "/mortgage-calculator": visual({
    h1: "Mortgage calculator for Manzano Peak 89121",
    subtitle: "Principal and interest only — taxes, insurance, and HOA are extra",
    hero: {
      src: "/media/hero-mortgage.jpg",
      alt: "Mortgage calculator, closing folder, and house keys on a kitchen island",
    },
    h2: "Run P&I, then we add taxes and HOA on the address",
    h2Body:
      "A $316,000 Vales plan and a $388,000 Glades plan do not share the same payment once HOA and Clark County taxes land. Verify with a lender.",
    h2Image: {
      src: "/media/blog-mortgage.jpg",
      alt: "Calculator and blurred rate sheet on a kitchen counter",
    },
    h3Heading: "What this tool does not include",
    h3s: [hoa, closing, plans],
  }),
  "/blog": visual({
    h1: "Las Vegas 89121 real estate notes | Manzano Peak",
    subtitle: "Street-level updates, buying steps, and listing alerts — not recycled valley averages",
    hero: {
      src: "/media/hero-blog.jpg",
      alt: "Notebook and coffee on a patio overlooking Manzano Peak homes",
    },
    h2: "Manzano Peak notes plus a live market feed",
    h2Body:
      "Local write-ups on staging, 89121 days on market, and zip comparisons. Syndicated market stories from Simplifying the Market when the feed is up.",
    h2Image: {
      src: "/media/blog-neighborhood.jpg",
      alt: "Manzano Peak street at dusk with house lights on",
    },
    h3Heading: "Topics we actually publish",
    h3s: [plans, closing, highway],
  }),
  "/89121-real-estate": visual({
    h1: "89121 Las Vegas real estate | Southeast valley homes",
    subtitle: "UNLV-adjacent southeast ZIP · I-515 · named campuses · live MLS",
    hero: {
      src: "/media/hero-89121.jpg",
      alt: "Established southeast Las Vegas 89121 streets with mature trees and stucco homes",
    },
    h2: "89121 covers more than Manzano Peak",
    h2Body:
      "Nevada Real Estate Group: roughly 9 square miles, about 50,000 residents, bounded near Eastern, Maryland, Sahara, and Tropicana. 2026 median SFR about $315,000. Manzano Peak is the 2015-era pocket inside it.",
    h2Image: {
      src: "/media/h2-commute.jpg",
      alt: "I-515 toward the Strip from southeast Las Vegas",
    },
    h3Heading: "Why buyers start in 89121",
    h3s: [school, shopping, park],
  }),
  "/89178-real-estate": visual({
    h1: "89178 Las Vegas real estate | Mountains Edge homes",
    subtitle: "Southwest master plan compared with Manzano Peak 89121",
    hero: {
      src: "/media/hero-89178.jpg",
      alt: "Mountains Edge Las Vegas 89178 homes with desert foothills",
    },
    h2: "89178 is Mountains Edge, not Manzano Peak",
    h2Body:
      "Brownell Team (July 25, 2026): 136 actives, 55 average DOM, about $237/sq ft, $520,000 median list. Redfin Mountain Edge median sale about $474,840 in May 2026. Tour both zips in one loop.",
    h2Image: {
      src: "/media/h2-retail.jpg",
      alt: "Southwest Las Vegas shopping center parking lot at late afternoon",
    },
    h3Heading: "How 89178 differs from 89121",
    h3s: [highway, hoa, shopping],
  }),
  "/89179-real-estate": visual({
    h1: "89179 Las Vegas real estate | Mountains Edge South",
    subtitle: "South-valley new construction compared with Manzano Peak 89121",
    hero: {
      src: "/media/hero-89179.jpg",
      alt: "Southern Highlands and Mountains Edge South new-construction streets",
    },
    h2: "89179 sits south of 89121 on the I-15 corridor",
    h2Body:
      "Mountains Edge also uses 89179. More 2000s–2020s product than inner 89121. Confirm CCSD zoning on the exact street. Verify list prices on MLS.",
    h2Image: {
      src: "/media/h3-plans.jpg",
      alt: "Newer two-story production home in south Las Vegas",
    },
    h3Heading: "Compare before you tour",
    h3s: [plans, highway, hoa],
  }),
  "/89138-real-estate": visual({
    h1: "89138 Las Vegas real estate | Summerlin West homes",
    subtitle: "Red Rock access and west-valley HOAs compared with Manzano Peak",
    hero: {
      src: "/media/hero-89138.jpg",
      alt: "Summerlin West Las Vegas homes with Red Rock Canyon in the background",
    },
    h2: "89138 is west-valley; Manzano Peak is southeast",
    h2Body:
      "Redfin: Summerlin West median sale about $796,982 in May 2026 (−5% YoY). Nevada Real Estate Group: 10,000+ homes since 2014, roughly $400K–$1M+. Different commute than 89121.",
    h2Image: {
      src: "/media/hero-89138.jpg",
      alt: "West Las Vegas homes with red sandstone mountains behind them",
    },
    h3Heading: "West-valley vs 89121",
    h3s: [shopping, hoa, highway],
  }),
  "/privacy-policy": visual({
    h1: "Privacy policy for ManzanoHomes.com",
    subtitle: "How contact-form, valuation, and listing-alert data is used",
    hero: {
      src: "/media/hero-legal.jpg",
      alt: "Legal documents and a fountain pen on a wood desk",
    },
    h2: "What we collect when you submit a form",
    h2Body:
      "Name, email, phone, and message content. Used to respond and, when configured, to create or update a Follow Up Boss contact. We do not sell personal information.",
    h2Image: {
      src: "/media/h2-form.jpg",
      alt: "Tablet contact form on an office desk",
    },
    h3Heading: "Questions about your data",
    h3s: [airport, grocery, closing],
  }),
  "/terms-of-service": visual({
    h1: "Terms of service | ManzanoHomes.com listings",
    subtitle: "MLS widgets, estimates, and site use for Las Vegas 89121",
    hero: {
      src: "/media/hero-legal.jpg",
      alt: "Legal documents on a desk for site terms",
    },
    h2: "Listing data can lag the live market",
    h2Body:
      "Widgets are for personal, non-commercial use. Confirm price, status, and square footage before you offer. This site is an advertisement for Dr. Jan Duffy, BHHS Nevada Properties.",
    h2Image: {
      src: "/media/h2-listings.jpg",
      alt: "Laptop showing a listings map",
    },
    h3Heading: "Equal Housing and MLS limits",
    h3s: [plans, hoa, closing],
  }),
  "/disclaimer": visual({
    h1: "MLS disclaimer | Manzano Homes Las Vegas",
    subtitle: "Listing attribution, estimate limits, and Equal Housing Opportunity",
    hero: {
      src: "/media/hero-legal.jpg",
      alt: "Disclaimer documents on a wood desk",
    },
    h2: "RealScout / MLS content is not a bid",
    h2Body:
      "Price, status, and square footage change without notice. Dr. Jan Duffy / BHHS Nevada Properties is not responsible for third-party data errors.",
    h2Image: {
      src: "/media/h2-listings.jpg",
      alt: "Laptop with listing search results",
    },
    h3Heading: "What to confirm before you write",
    h3s: [plans, hoa, closing],
  }),
  "/accessibility": visual({
    h1: "Accessibility at ManzanoHomes.com",
    subtitle: "Request an alternate format if a form, widget, or map blocks you",
    hero: {
      src: "/media/hero-access.jpg",
      alt: "Accessible office entrance with a ramp in Las Vegas",
    },
    h2: "Tell us if a page blocks you",
    h2Body:
      "Email DrDuffySells@ManzanoHomes.com or call (702) 500-1942 and we will provide the same information another way.",
    h2Image: {
      src: "/media/h2-form.jpg",
      alt: "Office phone and tablet for accessibility requests",
    },
    h3Heading: "Other ways to get the same facts",
    h3s: [airport, grocery, closing],
  }),
  "/homes-near-manzano-elementary": visual({
    h1: "Homes near Manzano Elementary School | Las Vegas 89121",
    subtitle: "About 0.3 miles from 3693 Manzano Peak Ave · CCSD zoning is street-specific",
    hero: {
      src: "/media/hero-school-elem.jpg",
      alt: "Elementary campus exterior in Las Vegas with covered walkway",
    },
    h2: "Proximity is not an enrollment guarantee",
    h2Body:
      "We pull the current CCSD assignment for the exact address before you tour. Use live MLS for inventory, then time the walk or drive at drop-off hour.",
    h2Image: {
      src: "/media/h3-school.jpg",
      alt: "Empty elementary campus parking lot in Las Vegas",
    },
    h3Heading: "What sits around this campus",
    h3s: [park, plans, grocery],
  }),
  "/homes-near-green-valley-high-school": visual({
    h1: "Homes near Green Valley High School | Henderson NV",
    subtitle: "460 Arroyo Grande Blvd, Henderson 89014 · about 2.1 miles from Manzano Peak",
    hero: {
      src: "/media/hero-school-hs.jpg",
      alt: "Henderson Nevada high school campus exterior with athletic lights",
    },
    h2: "Henderson campus, 89121 starting pin",
    h2Body:
      "Green Valley High School is at 460 Arroyo Grande Blvd, Henderson, NV 89014. Distance from 3693 Manzano Peak Ave is about 2.1 miles. Confirm zoning on the street you bid.",
    h2Image: {
      src: "/media/h2-commute.jpg",
      alt: "Southeast valley freeway commute toward Henderson",
    },
    h3Heading: "Around Green Valley High",
    h3s: [shopping, highway, plans],
  }),
  "/homes-near-coronado-high-school": visual({
    h1: "Homes near Coronado High School | Henderson NV",
    subtitle: "1001 Coronado Center Dr, Henderson 89052 · about 2.8 miles from Manzano Peak",
    hero: {
      src: "/media/hero-school-hs.jpg",
      alt: "Henderson high school campus buildings and empty parking lot",
    },
    h2: "Henderson campus, still confirm CCSD",
    h2Body:
      "Coronado High School is at 1001 Coronado Center Dr, Henderson, NV 89052. About 2.8 miles from 3693 Manzano Peak Ave. Enrollment is not guaranteed by distance.",
    h2Image: {
      src: "/media/h3-school.jpg",
      alt: "Empty school campus walkway",
    },
    h3Heading: "Around Coronado High",
    h3s: [shopping, park, plans],
  }),
  "/homes-near-southeast-career-technical-academy": visual({
    h1: "Homes near Southeast Career Technical Academy",
    subtitle: "5710 Mountain Vista St, Las Vegas 89120 · about 1.2 miles from Manzano Peak",
    hero: {
      src: "/media/hero-school-secta.jpg",
      alt: "Career technical academy campus buildings in Las Vegas",
    },
    h2: "Magnet campus on Mountain Vista, not a zoned guarantee",
    h2Body:
      "SECTA is at 5710 Mountain Vista Street, Las Vegas, NV 89120. About 1.2 miles from 3693 Manzano Peak Ave. Magnet seats are application-based — we confirm the current process before you tour.",
    h2Image: {
      src: "/media/hero-school-secta.jpg",
      alt: "Career technical high school workshop-style buildings in Las Vegas",
    },
    h3Heading: "Around SECTA",
    h3s: [highway, plans, grocery],
  }),
};

export function getPageVisual(path: string): PageVisual {
  const visualForPath = PAGE_VISUALS[path];
  if (!visualForPath) {
    throw new Error(`Missing page visual for ${path}`);
  }
  return visualForPath;
}

export function getHeroProps(path: string) {
  const visual = getPageVisual(path);
  return {
    title: visual.h1,
    subtitle: visual.subtitle,
    imageSrc: visual.hero.src,
    imageAlt: visual.hero.alt,
  };
}

for (const route of SITE_ROUTES) {
  if (!PAGE_VISUALS[route]) {
    throw new Error(`Missing page visual for ${route}`);
  }
}
