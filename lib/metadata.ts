import { SITE, canonicalUrl } from "@/lib/site";
import type { Metadata } from "next";

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = canonicalUrl(input.path);
  const fullTitle = /\| Manzano Homes$/i.test(input.title)
    ? input.title
    : input.title.startsWith("Manzano Homes")
      ? input.title
      : `${input.title} | Manzano Homes`;
  return {
    title: { absolute: fullTitle },
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url,
      siteName: SITE.name,
      images: [{ url: canonicalUrl(SITE.ogImage) }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [canonicalUrl(SITE.ogImage)],
    },
  };
}
