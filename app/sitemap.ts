import type { MetadataRoute } from "next";
import { CONTENT_UPDATED_AT } from "@/lib/seo";
import { SITE, SITE_ROUTES } from "@/lib/site";

const lastModified = new Date(`${CONTENT_UPDATED_AT}T12:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((path) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/homes-for-sale" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
