import { SITE } from "@/lib/site";

/** Stable lastmod so Google does not see a new sitemap on every fetch. */
export const CONTENT_UPDATED_AT = "2026-08-28T12:00:00+00:00";

export const SITEMAP_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=300, s-maxage=300",
};

export function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function sitemapUrlEntry(input: {
  path: string;
  changefreq: "daily" | "weekly";
  priority: number;
}): string {
  const loc = input.path === "/" ? SITE.url : `${SITE.url}${input.path}`;
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${CONTENT_UPDATED_AT}</lastmod>`,
    `    <changefreq>${input.changefreq}</changefreq>`,
    `    <priority>${input.priority}</priority>`,
    "  </url>",
  ].join("\n");
}
