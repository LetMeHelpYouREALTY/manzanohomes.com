import Link from "next/link";
import { SITE } from "@/lib/site";

type CtaBandProps = {
  title: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBand({
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Request a tour",
  secondaryHref = "/homes-for-sale",
  secondaryLabel = "Search listings",
}: CtaBandProps) {
  return (
    <section className="bg-primary-800 py-16 text-center text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        {body ? <p className="mt-3 text-primary-100">{body}</p> : null}
        <p className="mt-3 text-sm text-primary-200">
          {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-primary-800 hover:bg-slate-100"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
