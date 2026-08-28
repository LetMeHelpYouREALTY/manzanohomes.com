import type { MetadataRoute } from "next";
import { STREET_PROPERTIES } from "@/lib/content/properties";
import { CONTENT_UPDATED_AT } from "@/lib/seo";
import { SITE, SITE_ROUTES } from "@/lib/site";

const lastModified = new Date(CONTENT_UPDATED_AT);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = SITE_ROUTES.map((path) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/homes-for-sale" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const properties: MetadataRoute.Sitemap = STREET_PROPERTIES.map((property) => ({
    url: `${SITE.url}${property.path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...pages, ...properties];
}
