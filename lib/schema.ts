import { SITE, canonicalUrl } from "./site";

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;
const AGENT_ID = `${SITE.url}/#agent`;
const WEBSITE_ID = `${SITE.url}/#website`;

const OFFICE_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
} as const;

export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": AGENT_ID,
    name: SITE.agent,
    jobTitle: "REALTOR®",
    url: canonicalUrl("/about"),
    telephone: SITE.phoneTel,
    email: SITE.email,
    image: canonicalUrl(SITE.ogImage),
    address: OFFICE_ADDRESS,
    worksFor: { "@id": ORG_ID },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real estate license",
      identifier: SITE.license,
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
    },
    knowsAbout: [
      "Manzano Peak real estate",
      "Las Vegas 89121 homes",
      "89178 real estate",
      "89179 real estate",
      "89138 real estate",
    ],
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    image: canonicalUrl(SITE.ogImage),
    logo: canonicalUrl("/logo-manzano.png"),
    telephone: SITE.phoneTel,
    email: SITE.email,
    priceRange: "$$",
    currenciesAccepted: "USD",
    hasMap: SITE.mapsUrl,
    address: OFFICE_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      {
        "@type": "Place",
        name: "Manzano Peak",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: "89121",
          addressCountry: SITE.address.country,
        },
      },
      {
        "@type": "Place",
        name: "89121",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: "89121",
          addressCountry: SITE.address.country,
        },
      },
      {
        "@type": "Place",
        name: "89178",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: "89178",
          addressCountry: SITE.address.country,
        },
      },
      {
        "@type": "Place",
        name: "89179",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: "89179",
          addressCountry: SITE.address.country,
        },
      },
      {
        "@type": "Place",
        name: "89138",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: "89138",
          addressCountry: SITE.address.country,
        },
      },
      {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
    ],
    knowsAbout: [
      "Manzano Peak homes for sale",
      "Las Vegas 89121 real estate",
      "Home valuation",
      "Buyer and seller representation",
    ],
    employee: { "@id": AGENT_ID },
    founder: { "@id": AGENT_ID },
    parentOrganization: {
      "@type": "Organization",
      name: SITE.brokerage,
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
    about: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : canonicalUrl(item.url),
    })),
  };
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webPageSchema(input: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl(input.path)}#webpage`,
    url: canonicalUrl(input.path),
    name: input.name,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function residenceSchema(input: {
  name: string;
  description: string;
  path: string;
  streetAddress: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    "@id": `${canonicalUrl(input.path)}#place`,
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.path),
    address: {
      "@type": "PostalAddress",
      streetAddress: input.streetAddress,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  path: string;
  totalTime: string;
  steps: Array<{ name: string; text: string }>;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.path),
    totalTime: input.totalTime,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

type EmploymentType = "FULL_TIME" | "PART_TIME";

export function jobPostingSchema(input: {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: EmploymentType;
  minSalary?: number;
  maxSalary?: number;
}): JsonLd {
  const salary =
    input.minSalary !== undefined && input.maxSalary !== undefined
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: {
              "@type": "QuantitativeValue",
              minValue: input.minSalary,
              maxValue: input.maxSalary,
              unitText: "YEAR",
            },
          },
        }
      : {};

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: input.title,
    description: input.description,
    datePosted: input.datePosted,
    validThrough: input.validThrough,
    employmentType: input.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.name,
      sameAs: SITE.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
    },
    ...salary,
  };
}
