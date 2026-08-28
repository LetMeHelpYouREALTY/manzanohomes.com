import Link from "next/link";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-2xl font-bold">{SITE.name}</p>
          <p className="mt-3 max-w-md text-slate-300">
            Real estate in the Manzano neighborhood of Las Vegas, NV 89121 —
            Berkshire Hathaway HomeServices Nevada Properties. License# {SITE.license}.
          </p>
          <address className="mt-6 space-y-2 text-sm not-italic text-slate-300">
            <p>{SITE.address.street}</p>
            <p>
              {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
            </p>
            <p>
              <a className="hover:text-white" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-white" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p>{SITE.hoursDisplay}</p>
          </address>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded bg-primary-600 px-3 py-2 font-medium text-white hover:bg-primary-500"
              href={`tel:${SITE.phoneTel}`}
            >
              Call
            </a>
            <CalendlyPopupButton event="conversation" label="Schedule" variant="footer" />
            <a
              className="rounded border border-slate-600 px-3 py-2 hover:bg-slate-800"
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
            <a
              className="rounded border border-slate-600 px-3 py-2 hover:bg-slate-800"
              href={SITE.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Google Reviews
            </a>
          </div>
        </div>

        {(
          [
            ["Company", FOOTER_LINKS.company],
            ["Services", FOOTER_LINKS.services],
            ["Resources", FOOTER_LINKS.resources],
          ] as const
        ).map(([title, links]) => (
          <div key={title}>
            <h3 className="mb-4 text-lg font-semibold">{title}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="text-slate-300 hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-slate-400 md:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved. License# {SITE.license}
          </p>
          <div className="flex flex-wrap gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-4 text-center text-xs leading-relaxed text-slate-500">
          Equal Housing Opportunity. Listing data is supplied by RealScout / MLS for consumers&apos;
          personal, non-commercial use and may change without notice. Confirm status, price, and
          square footage before writing an offer.
        </p>
      </div>
    </footer>
  );
}
