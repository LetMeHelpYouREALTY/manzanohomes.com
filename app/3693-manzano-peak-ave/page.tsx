import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "3693 Manzano Peak Ave Las Vegas NV 89121 | Listing Context",
  description:
    "3693 Manzano Peak Ave, Las Vegas NV 89121 — office address, map, hours, and nearby listing context with Dr. Jan Duffy.",
  path: "/3693-manzano-peak-ave",
});

export default function PropertyPinPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "3693 Manzano Peak Ave",
            description: metadata.description ?? "",
            path: "/3693-manzano-peak-ave",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "3693 Manzano Peak Ave", url: "/3693-manzano-peak-ave" },
          ]),
          faqSchema(contactFaqs),
        ]}
      />
      <PageHero
        title="3693 Manzano Peak Ave"
        subtitle="Las Vegas, NV 89121 — office, tours, and nearby listings"
        imageAlt="3693 Manzano Peak Ave Las Vegas NV 89121"
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Office pin</h2>
            <p className="mt-4 text-lg text-slate-700">
              3693 Manzano Peak Ave is the NAP address for Manzano Homes and the map pin we use for
              nearby 89121 inventory.
            </p>
            <address className="mt-6 not-italic text-slate-700">
              <p className="font-semibold">{SITE.name}</p>
              <p>{SITE.brokerage}</p>
              <p className="mt-2">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              </p>
              <p className="mt-2">{SITE.hoursDisplay}</p>
              <p className="mt-2">
                <a className="text-primary-700" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
              </p>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white"
                href={`tel:${SITE.phoneTel}`}
              >
                Call
              </a>
              <a
                className="rounded-lg border border-primary-600 px-5 py-3 font-semibold text-primary-800"
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
              <a
                className="rounded-lg border border-primary-600 px-5 py-3 font-semibold text-primary-800"
                href={SITE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Reviews
              </a>
            </div>
          </div>
          <iframe
            title="Map to 3693 Manzano Peak Ave Las Vegas"
            src={SITE.mapsEmbed}
            className="h-80 w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
            Listings near this street
          </h2>
          <RealScoutListings />
        </div>
      </section>

      <FaqSection faqs={contactFaqs} />
      <CtaBand title="Tour this street this week" />
    </>
  );
}
