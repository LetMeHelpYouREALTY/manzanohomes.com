import { SITEMAP_HEADERS } from "@/lib/seo";
import { sitemapIndexXml } from "@/lib/sitemap-xml";

export function GET() {
  return new Response(sitemapIndexXml(), { headers: SITEMAP_HEADERS });
}
