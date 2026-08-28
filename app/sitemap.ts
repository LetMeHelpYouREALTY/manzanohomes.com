import type { MetadataRoute } from "next";
import { SITE, SITE_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((path) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" || path === "/homes-for-sale" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
