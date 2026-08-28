import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { canonicalUrl } from "@/lib/site";

const CANONICAL_HOST = "www.manzanohomes.com";

function isDocumentPath(pathname: string): boolean {
  if (pathname.startsWith("/api/")) return false;
  if (pathname === "/robots.txt" || pathname === "/llms.txt") return false;
  if (pathname.endsWith(".xml")) return false;
  return true;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  if (host === "manzanohomes.com") {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  if (!isDocumentPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.headers.set("Link", `<${canonicalUrl(request.nextUrl.pathname)}>; rel="canonical"`);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
