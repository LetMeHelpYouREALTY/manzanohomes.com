export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  link: string;
  originalDate: string;
};

const RSS_URL = "https://www.simplifyingthemarket.com/en/feed";
const AFFILIATE_ID = "956758-ef2edda2f940e018328655620ea05f18";

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstMatch(source: string, pattern: RegExp): string {
  const match = source.match(pattern);
  return (match?.[1] || match?.[2] || "").trim();
}

function extractImage(itemContent: string, description: string): string | undefined {
  const encoded = firstMatch(
    itemContent,
    /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>|<content:encoded>([\s\S]*?)<\/content:encoded>/,
  );
  const haystack = encoded || description;
  const imgMatch = haystack.match(/<img[^>]+src=["']([^"']+)["']/i);
  const image = imgMatch?.[1]?.trim();
  return image || undefined;
}

function withAffiliate(link: string): string {
  if (!link.startsWith("http")) return link;
  try {
    const url = new URL(link);
    if (!url.searchParams.has("a")) {
      url.searchParams.set("a", AFFILIATE_ID);
    }
    return url.toString();
  } catch {
    return link;
  }
}

export const LOCAL_POSTS: BlogPost[] = [
  {
    id: 101,
    title: "Home staging punch list for 89121 listings",
    excerpt:
      "Paint, lighting, and a 3D tour move 89121 list-to-sale faster than vague curb-appeal talk. Walk the rooms we actually stage.",
    author: "Dr. Jan Duffy",
    date: "August 12, 2026",
    category: "Selling",
    image: "/media/blog-staging.jpg",
    readTime: "5 min read",
    link: "/selling-guide",
    originalDate: "2026-08-12T00:00:00.000Z",
  },
  {
    id: 102,
    title: "89121 market notes: days on market and list bands",
    excerpt:
      "Treat printed medians as stale. Pull live MLS for Manzano Peak and adjacent 89121 streets before you price or bid.",
    author: "Dr. Jan Duffy",
    date: "August 8, 2026",
    category: "Market Report",
    image: "/media/blog-market.jpg",
    readTime: "8 min read",
    link: "/market-reports",
    originalDate: "2026-08-08T00:00:00.000Z",
  },
  {
    id: 103,
    title: "Eight steps to buy in Manzano Peak",
    excerpt:
      "Pre-approval, offer strategy, 10–15 day inspection windows, and a 30–45 day close for financed 89121 resales.",
    author: "Dr. Jan Duffy",
    date: "August 4, 2026",
    category: "Buying",
    image: "/media/blog-buying.jpg",
    readTime: "12 min read",
    link: "/buying-guide",
    originalDate: "2026-08-04T00:00:00.000Z",
  },
  {
    id: 104,
    title: "Manzano Peak neighborhood briefing",
    excerpt:
      "150+ homes, 2015-era plans, Manzano Park at 0.1 miles, and named CCSD campuses within 3 miles of 3693 Manzano Peak Ave.",
    author: "Dr. Jan Duffy",
    date: "August 1, 2026",
    category: "Neighborhood",
    image: "/media/blog-neighborhood.jpg",
    readTime: "6 min read",
    link: "/neighborhood",
    originalDate: "2026-08-01T00:00:00.000Z",
  },
  {
    id: 105,
    title: "Mortgage payment math for 89121",
    excerpt:
      "Principal and interest only. Verify taxes, insurance, and HOA on the exact address before you lock a payment.",
    author: "Dr. Jan Duffy",
    date: "July 28, 2026",
    category: "Financing",
    image: "/media/blog-mortgage.jpg",
    readTime: "7 min read",
    link: "/mortgage-calculator",
    originalDate: "2026-07-28T00:00:00.000Z",
  },
  {
    id: 106,
    title: "Compare 89121 with 89178, 89179, and 89138",
    excerpt:
      "Commute, HOA, and lot-size differences between Manzano Peak, Mountains Edge, Southern Highlands, and Summerlin West.",
    author: "Dr. Jan Duffy",
    date: "July 22, 2026",
    category: "Investing",
    image: "/media/blog-compare.jpg",
    readTime: "10 min read",
    link: "/89121-real-estate",
    originalDate: "2026-07-22T00:00:00.000Z",
  },
];

export async function fetchMarketFeed(): Promise<BlogPost[]> {
  const response = await fetch(RSS_URL, {
    headers: {
      "User-Agent": "ManzanoHomes-Bot/1.0 (Real Estate Blog Integration)",
      Accept: "application/rss+xml, application/xml, text/xml",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`RSS feed fetch failed: ${response.status}`);
  }

  const xmlText = await response.text();
  const posts: BlogPost[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match = itemRegex.exec(xmlText);
  let index = 0;

  while (match !== null && index < 10) {
    const itemContent = match[1];
    const title = firstMatch(
      itemContent,
      /<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/,
    ) || "Untitled";
    const link = withAffiliate(firstMatch(itemContent, /<link>(.*?)<\/link>/) || "#");
    const description = firstMatch(
      itemContent,
      /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/,
    );
    const pubDate = firstMatch(itemContent, /<pubDate>(.*?)<\/pubDate>/) || new Date().toISOString();
    const category =
      firstMatch(
        itemContent,
        /<category><!\[CDATA\[(.*?)\]\]><\/category>|<category>(.*?)<\/category>/,
      ) || "Market Update";
    const image = extractImage(itemContent, description) || "/property-placeholder.jpg";
    const cleanDescription = `${stripHtml(description).slice(0, 200)}...`;
    const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const wordCount = cleanDescription.split(" ").length;
    const readTime = `${Math.max(2, Math.ceil(wordCount / 200))} min read`;

    posts.push({
      id: index + 1,
      title,
      excerpt: cleanDescription,
      author: "Simplifying the Market",
      date: formattedDate,
      category,
      image,
      readTime,
      link,
      originalDate: pubDate,
    });

    index += 1;
    match = itemRegex.exec(xmlText);
  }

  if (posts.length === 0) {
    throw new Error("RSS feed returned no items");
  }

  return posts.sort(
    (a, b) => new Date(b.originalDate).getTime() - new Date(a.originalDate).getTime(),
  );
}
