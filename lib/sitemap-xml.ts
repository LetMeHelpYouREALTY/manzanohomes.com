import { CONTENT_UPDATED_AT, sitemapUrlEntry, xmlEscape } from "@/lib/seo";
import { STREET_PROPERTIES } from "@/lib/content/properties";
import { SITE } from "@/lib/site";

export function propertiesSitemapXml(): string {
  const urls = STREET_PROPERTIES.map((property) =>
    sitemapUrlEntry({
      path: property.path,
      changefreq: "weekly",
      priority: 0.7,
    }),
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function sitemapIndexXml(): string {
  const sitemaps = [`${SITE.url}/sitemap.xml`, `${SITE.url}/sitemap-properties.xml`];
  const body = sitemaps
    .map(
      (loc) =>
        `  <sitemap>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${CONTENT_UPDATED_AT}</lastmod>\n  </sitemap>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>
`;
}
