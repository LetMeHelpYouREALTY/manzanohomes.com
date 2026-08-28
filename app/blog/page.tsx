import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { fetchMarketFeed, LOCAL_POSTS, type BlogPost } from "@/lib/blog";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Las Vegas Real Estate Blog | Manzano Homes 89121",
  description:
    "Market notes, buying steps, and Manzano Peak listing alerts from Dr. Jan Duffy in Las Vegas 89121.",
  path: "/blog",
});

function PostCard({ post }: { post: BlogPost }) {
  const isExternal = post.link.startsWith("http");
  const isLocalImage = post.image.startsWith("/");
  const image = isLocalImage ? (
    <Image
      src={post.image}
      alt={post.title}
      width={400}
      height={240}
      className="h-48 w-full object-cover"
    />
  ) : (
    // Third-party RSS hosts vary; keep a plain img instead of remotePatterns for every feed.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={post.image}
      alt={post.title}
      width={400}
      height={240}
      loading="lazy"
      className="h-48 w-full object-cover"
    />
  );

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm">
      {isExternal ? (
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      ) : (
        <Link href={post.link}>{image}</Link>
      )}
      <div className="p-5">
        <p className="text-sm text-primary-700">
          {post.category} · {post.readTime}
        </p>
        <h2 className="mt-2 text-xl font-bold text-slate-900">
          {isExternal ? (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          ) : (
            <Link href={post.link}>{post.title}</Link>
          )}
        </h2>
        <p className="mt-2 text-slate-600">{post.excerpt}</p>
        <p className="mt-3 text-sm text-slate-500">
          {post.author} · {post.date}
        </p>
      </div>
    </article>
  );
}

export default async function BlogPage() {
  let feedPosts: BlogPost[] = [];
  try {
    feedPosts = await fetchMarketFeed();
  } catch {
    feedPosts = [];
  }

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            name: "Manzano Peak Market Notes",
            description: metadata.description ?? "",
            path: "/blog",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
          faqSchema(contactFaqs),
        ]}
      />
      <PageHero
        title="Real estate insights blog"
        subtitle="89121 market notes, buying steps, and listing alerts"
        imageAlt="Manzano Peak Las Vegas real estate market notes"
      />

      <section className="bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-4">
          <a className="rounded-lg bg-primary-600 px-5 py-2 font-semibold text-white" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </a>
          <a className="rounded-lg bg-secondary-500 px-5 py-2 font-semibold text-white" href={`sms:${SITE.phoneTel}`}>
            Text us
          </a>
          <a className="rounded-lg bg-slate-800 px-5 py-2 font-semibold text-white" href={`mailto:${SITE.email}`}>
            Email
          </a>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Manzano Peak notes</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {LOCAL_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {feedPosts.length ? (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Market feed</h2>
            <p className="mb-8 text-slate-600">
              Syndicated from Simplifying the Market. Images and headlines are from the source feed.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {feedPosts.map((post) => (
                <PostCard key={`${post.id}-${post.link}`} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FaqSection faqs={contactFaqs} />
      <CtaBand title="Want a custom 89121 pull?" />
    </>
  );
}
