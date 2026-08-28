import CalendlyEmbed from "@/components/calendly/CalendlyEmbed";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import JsonLd from "@/components/seo/JsonLd";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/contact";
const visual = getPageVisual(path);

export const metadata = pageMetadata({
  title: "Contact Manzano Homes | 3693 Manzano Peak Ave Las Vegas",
  description: `Contact Dr. Jan Duffy at Manzano Homes. ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}. Call ${SITE.phoneDisplay}.`,
  path,
});

const faqs = [
  {
    question: "What are the office hours?",
    answer: SITE.hoursDisplay,
  },
  {
    question: "How do I book a tour or a call?",
    answer: `Use the Calendly widget on this page, the sitewide “Schedule time with me” badge, or call ${SITE.phoneDisplay}.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: visual.h1,
            description: metadata.description ?? "",
            path,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: path },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero {...getHeroProps(path)} showCtas={false} />

      <section className="bg-white py-10">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-4">
          <CalendlyPopupButton event="showing" label="Book a tour" />
          <a className="rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </a>
          <a
            className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
          <a
            className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800"
            href={SITE.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Google Reviews
          </a>
        </div>
      </section>

      <PageVisualBlock path={path} />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="mb-6 text-2xl font-bold">Book a time with {SITE.agent}</h2>
            <p className="mb-6 text-slate-600">
              Calendly books the slot. Call {SITE.phoneDisplay} if you need a same-hour callback.
            </p>
            <div className="mb-6">
              <CalendlyPopupButton event="conversation" label="Book a time" />
            </div>
            <CalendlyEmbed event="conversation" />
          </div>
          <div className="space-y-6">
            <div className="rounded-xl bg-white p-8 shadow">
              <h2 className="text-2xl font-bold">Office</h2>
              <p className="mt-3">{SITE.name}</p>
              <p>{SITE.brokerage}</p>
              <p className="mt-2">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              </p>
              <p className="mt-2">{SITE.hoursDisplay}</p>
              <p className="mt-2">
                <a className="text-primary-700" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
            <iframe
              title="Map to 3693 Manzano Peak Ave Las Vegas"
              src={SITE.mapsEmbed}
              className="h-72 w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <FaqSection faqs={faqs} />
    </>
  );
}
