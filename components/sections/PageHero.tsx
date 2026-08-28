import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageAlt: string;
};

export default function PageHero({ title, subtitle, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 text-white md:pt-32">
      <Image
        src="/hero-manzano.jpg"
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-4xl font-bold drop-shadow-lg md:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 md:text-xl">{subtitle}</p>
        ) : null}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="rounded-lg bg-primary-600 px-6 py-3 font-semibold hover:bg-primary-500"
          >
            Call {SITE.phoneDisplay}
          </a>
          <Link
            href="/homes-for-sale"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100"
          >
            Search listings
          </Link>
        </div>
      </div>
    </section>
  );
}
