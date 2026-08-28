import { SITE, canonicalUrl } from "@/lib/site";
import type { Metadata } from "next";

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = canonicalUrl(input.path);
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE.name,
      images: [{ url: canonicalUrl(SITE.ogImage) }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [canonicalUrl(SITE.ogImage)],
    },
  };
}
