import Image from "next/image";
import Link from "next/link";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import { SITE } from "@/lib/site";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt: string;
  showCtas?: boolean;
};

export default function PageHero({
  title,
  subtitle,
  imageSrc = "/media/hero-home.jpg",
  imageAlt,
  showCtas = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 text-white md:pt-32">
      <Image
        src={imageSrc}
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
        {showCtas ? (
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CalendlyPopupButton event="showing" label="Book a tour" variant="light" />
            <a
              href={`tel:${SITE.phoneTel}`}
              className="rounded-lg bg-primary-600 px-6 py-3 font-semibold hover:bg-primary-500"
            >
              Call {SITE.phoneDisplay}
            </a>
            <Link
              href="/homes-for-sale"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              Search listings
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
