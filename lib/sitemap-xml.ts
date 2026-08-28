import { CONTENT_UPDATED_AT, sitemapUrlEntry, xmlEscape } from "@/lib/seo";
import { STREET_PROPERTIES } from "@/lib/content/properties";
import { SITE, SITE_ROUTES } from "@/lib/site";

export function pagesSitemapXml(): string {
  const urls = SITE_ROUTES.map((path) =>
    sitemapUrlEntry({
      path,
      changefreq: path === "/" || path === "/homes-for-sale" ? "daily" : "weekly",
      priority: path === "/" ? 1 : 0.8,
    }),
  ).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export function propertiesSitemapXml(): string {
  const urls = STREET_PROPERTIES.map((property) =>
    sitemapUrlEntry({
      path: property.path,
      changefreq: "weekly",
      priority: 0.7,
    }),
  ).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export function sitemapIndexXml(): string {
  const sitemaps = [`${SITE.url}/sitemap.xml`, `${SITE.url}/sitemap-properties.xml`];
  const body = sitemaps
    .map(
      (loc) =>
        `<sitemap><loc>${xmlEscape(loc)}</loc><lastmod>${CONTENT_UPDATED_AT}</lastmod></sitemap>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</sitemapindex>`;
}
