import { SITE, canonicalUrl } from "./site";

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;

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
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
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
    areaServed: {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: { "@type": "State", name: "Nevada" },
    },
    employee: {
      "@type": "Person",
      name: SITE.agent,
      jobTitle: "REALTOR®",
      telephone: SITE.phoneTel,
      email: SITE.email,
    },
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
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/homes-for-sale?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": ORG_ID },
  };
}
