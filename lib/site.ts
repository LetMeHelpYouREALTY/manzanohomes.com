export const SITE = {
  name: "Manzano Homes",
  legalName: "Manzano Homes — Berkshire Hathaway HomeServices Nevada Properties",
  url: "https://www.manzanohomes.com",
  description:
    "Las Vegas real estate in the Manzano neighborhood (89121). Homes for sale, valuations, and buyer/seller guidance with Dr. Jan Duffy.",
  phoneDisplay: "(702) 500-1942",
  phoneTel: "+17025001942",
  email: "DrDuffySells@ManzanoHomes.com",
  license: "S.0197614.LLC",
  agent: "Dr. Jan Duffy",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    street: "3693 Manzano Peak Ave",
    city: "Las Vegas",
    region: "NV",
    postalCode: "89121",
    country: "US",
  },
  geo: {
    latitude: 36.0839,
    longitude: -115.0891,
  },
  hours: [
    { day: "Monday", opens: "09:00", closes: "18:00" },
    { day: "Tuesday", opens: "09:00", closes: "18:00" },
    { day: "Wednesday", opens: "09:00", closes: "18:00" },
    { day: "Thursday", opens: "09:00", closes: "18:00" },
    { day: "Friday", opens: "09:00", closes: "18:00" },
    { day: "Saturday", opens: "09:00", closes: "17:00" },
    { day: "Sunday", opens: "10:00", closes: "16:00" },
  ],
  hoursDisplay: "Mon–Fri 9am–6pm · Sat 9am–5pm · Sun 10am–4pm",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3693+Manzano+Peak+Ave+Las+Vegas+NV+89121",
  mapsEmbed:
    "https://www.google.com/maps?q=3693+Manzano+Peak+Ave,+Las+Vegas,+NV+89121&output=embed",
  reviewsUrl: "https://www.google.com/search?q=Manzano+Homes+Las+Vegas+reviews",
  ogImage: "/og-default.jpg",
  realScoutAgentId: "QWdlbnQtMjI1MDUw",
} as const;

export function canonicalUrl(path: string): string {
  if (path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/neighborhood", label: "Neighborhood" },
  { href: "/homes-for-sale", label: "Homes for Sale" },
  { href: "/home-valuation", label: "Home Valuation" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/homes-for-sale", label: "Homes for Sale" },
    { href: "/home-valuation", label: "Home Valuation" },
    { href: "/neighborhood", label: "Neighborhood Info" },
    { href: "/mortgage-calculator", label: "Mortgage Calculator" },
  ],
  resources: [
    { href: "/blog", label: "Real Estate Blog" },
    { href: "/market-reports", label: "Market Reports" },
    { href: "/buying-guide", label: "Buying Guide" },
    { href: "/selling-guide", label: "Selling Guide" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/accessibility", label: "Accessibility" },
  ],
} as const;

export const SITE_ROUTES = [
  "/",
  "/homes-for-sale",
  "/neighborhood",
  "/manzano-peak-neighborhood",
  "/manzano-specialist",
  "/3693-manzano-peak-ave",
  "/home-valuation",
  "/contact",
  "/about",
  "/team",
  "/careers",
  "/buying-guide",
  "/selling-guide",
  "/market-reports",
  "/mortgage-calculator",
  "/blog",
  "/89121-real-estate",
  "/89178-real-estate",
  "/89179-real-estate",
  "/89138-real-estate",
  "/privacy-policy",
  "/terms-of-service",
  "/disclaimer",
  "/accessibility",
  "/homes-near-manzano-elementary",
  "/homes-near-green-valley-high-school",
  "/homes-near-coronado-high-school",
  "/homes-near-southeast-career-technical-academy",
] as const;
