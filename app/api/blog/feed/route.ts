import { fetchMarketFeed, LOCAL_POSTS } from "@/lib/blog";
import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const posts = await fetchMarketFeed();
    return NextResponse.json({
      success: true,
      posts,
      lastUpdated: new Date().toISOString(),
      source: "Simplifying the Market RSS Feed",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({
      success: false,
      error: message,
      posts: LOCAL_POSTS,
      lastUpdated: new Date().toISOString(),
      source: "Fallback Content",
    });
  }
}
