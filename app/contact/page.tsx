import ContactForm from "@/components/forms/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Manzano Homes | 3693 Manzano Peak Ave Las Vegas",
  description: `Contact Dr. Jan Duffy at Manzano Homes. ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}. Call ${SITE.phoneDisplay}.`,
  path: "/contact",
});

const faqs = [
  {
    question: "What are the office hours?",
    answer: SITE.hoursDisplay,
  },
  {
    question: "How fast do you return calls?",
    answer: "Same business day during listed hours. After hours, leave a message or text the office line.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            name: "Contact Manzano Homes",
            description: metadata.description ?? "",
            path: "/contact",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 px-4 pb-16 pt-28 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">Contact Manzano Homes</h1>
        <p className="mt-4 text-lg">
          {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a className="rounded-lg bg-white px-5 py-3 font-semibold text-primary-800" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </a>
          <a
            className="rounded-lg border border-white px-5 py-3"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
          <a
            className="rounded-lg border border-white px-5 py-3"
            href={SITE.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Google Reviews
          </a>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="mb-6 text-2xl font-bold">Send a message</h2>
            <ContactForm />
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
    </>
  );
}
