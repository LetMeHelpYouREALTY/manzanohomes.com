import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: [
      `${SITE.url}/sitemap.xml`,
      `${SITE.url}/sitemap-properties.xml`,
      `${SITE.url}/sitemap-index.xml`,
    ],
    host: SITE.url,
  };
}
