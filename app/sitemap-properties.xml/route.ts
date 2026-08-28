import { SITEMAP_HEADERS } from "@/lib/seo";
import { propertiesSitemapXml } from "@/lib/sitemap-xml";

export function GET() {
  return new Response(propertiesSitemapXml(), { headers: SITEMAP_HEADERS });
}
