import CtaBand from "@/components/sections/CtaBand";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/content/shared-faqs";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  jobPostingSchema,
  webPageSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Real Estate Careers | Manzano Homes Las Vegas",
  description:
    "Join Manzano Homes / BHHS Nevada Properties in Las Vegas 89121. Licensed agent and admin roles with Dr. Jan Duffy.",
  path: "/careers",
});

const faqs = [
  {
    question: "What experience do I need to become a real estate agent?",
    answer:
      "An active Nevada real estate license is required for agent roles. Sales, customer-service, or business backgrounds help. We still train on 89121 comps, FUB, and showing logistics.",
  },
  {
    question: "What training do you provide?",
    answer:
      "Onboarding covers Nevada agency, 89121 CMA work, client communication, and our systems. Weekly team meetings and monthly workshops continue after that.",
  },
  {
    question: "What's the earning potential?",
    answer:
      "Agents here typically land between $50,000 and $150,000+ depending on production. Commission splits are quoted in the interview, not on this page.",
  },
  {
    question: "Do you offer part-time positions?",
    answer:
      "Yes. Administrative support is posted as part-time. Most agent seats are full-time; we can discuss schedule constraints on the call.",
  },
  ...contactFaqs,
];

const reasons = [
  {
    title: "89121 inventory work",
    body: "Hyperlocal listing and buyer work in Manzano Peak and nearby zips — not a generic valley floor desk.",
  },
  {
    title: "Training and splits",
    body: "CMA, showing, and CRM training with commission splits quoted after we see your license number.",
  },
  {
    title: "BHHS Nevada Properties",
    body: `You hang your license with ${SITE.brokerage}. Office: ${SITE.address.street}.`,
  },
];

const benefits = [
  { title: "Commission", body: "Splits quoted in writing after the interview." },
  { title: "Training", body: "Onboarding plus weekly 89121 market huddles." },
  { title: "Office", body: `Desk time at ${SITE.address.street}, Las Vegas 89121.` },
  { title: "Tech", body: "RealScout, Follow Up Boss, and listing-alert tools." },
  { title: "Marketing", body: "Site, GBP, and listing copy support for your book." },
  { title: "Mentorship", body: "Deal review with Dr. Jan Duffy on live 89121 files." },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: getPageVisual("/careers").h1,
            description: metadata.description ?? "",
            path: "/careers",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Careers", url: "/careers" },
          ]),
          faqSchema(faqs),
          jobPostingSchema({
            title: "Real Estate Agent — Manzano Peak / 89121",
            description:
              "Licensed Nevada agent specializing in Manzano Peak and nearby Las Vegas zip codes. Buyer and listing work with BHHS Nevada Properties.",
            datePosted: "2026-08-01",
            validThrough: "2026-12-31",
            employmentType: "FULL_TIME",
            minSalary: 50000,
            maxSalary: 150000,
          }),
          jobPostingSchema({
            title: "Administrative Assistant",
            description:
              "Part-time office support: phones, showing calendars, marketing prep, and transaction coordination at Manzano Homes.",
            datePosted: "2026-08-01",
            validThrough: "2026-12-31",
            employmentType: "PART_TIME",
          }),
        ]}
      />

      <PageHero {...getHeroProps("/careers")} />
      <PageVisualBlock path="/careers" />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
            Why Manzano Homes
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-slate-600">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions" className="bg-white py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">Current openings</h2>

          <article className="rounded-lg border border-slate-200 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-primary-900">
                  Real Estate Agent — Homes Specialist
                </h3>
                <p className="text-slate-600">Full-time · Las Vegas, NV 89121</p>
              </div>
              <span className="self-start rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Hiring now
              </span>
            </div>
            <p className="mt-4 text-slate-700">
              Nevada-licensed agent for Manzano Peak and nearby 89121, 89178, 89179, and 89138
              inventory. Buyer tours, CMAs, and listing work.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Responsibilities</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  <li>Buyer and listing representation</li>
                  <li>89121 market analysis and pricing</li>
                  <li>Lead follow-up in Follow Up Boss</li>
                  <li>Stay current on Las Vegas list/sale data</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Requirements</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  <li>Active Nevada real estate license</li>
                  <li>2+ years preferred, not required</li>
                  <li>Clear written and phone communication</li>
                  <li>Working knowledge of the Las Vegas MLS</li>
                </ul>
              </div>
            </div>
            <a
              href={`mailto:${SITE.email}?subject=Real%20Estate%20Agent%20Application`}
              className="mt-6 inline-block rounded-lg bg-primary-600 px-6 py-2 font-semibold text-white hover:bg-primary-700"
            >
              Apply now
            </a>
          </article>

          <article className="rounded-lg border border-slate-200 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-primary-900">Administrative Assistant</h3>
                <p className="text-slate-600">Part-time · Las Vegas, NV 89121</p>
              </div>
              <span className="self-start rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                Part-time
              </span>
            </div>
            <p className="mt-4 text-slate-700">
              Phones, showing calendars, marketing prep, and transaction coordination.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Responsibilities</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  <li>Answer phones and route inquiries</li>
                  <li>Schedule appointments and showings</li>
                  <li>Prepare listing marketing</li>
                  <li>Assist with transaction files</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Requirements</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  <li>High school diploma or equivalent</li>
                  <li>Office experience preferred</li>
                  <li>Clear phone and email etiquette</li>
                  <li>Comfortable with Google Workspace / Microsoft 365</li>
                </ul>
              </div>
            </div>
            <a
              href={`mailto:${SITE.email}?subject=Administrative%20Assistant%20Application`}
              className="mt-6 inline-block rounded-lg bg-primary-600 px-6 py-2 font-semibold text-white hover:bg-primary-700"
            >
              Apply now
            </a>
          </article>
        </div>
      </section>

      <section id="benefits" className="bg-primary-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
            Benefits and support
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-slate-600">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">How we work</h2>
            <p className="mt-4 text-lg text-slate-600">
              Manzano Homes is the hyperlocal brand for {SITE.agent}, REALTOR®, {SITE.brokerage},
              license {SITE.license}. We hire people who want street-level 89121 work.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>Client-first: comps and contracts before slogans.</li>
              <li>Continuous learning: weekly huddles, not a one-day orientation.</li>
              <li>Collaborative: listing coverage when you are in contract.</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Send a resume</h3>
            <p className="mt-3 text-slate-600">
              We review applications within 48 hours. Include your Nevada license number for agent
              roles.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${SITE.email}?subject=Career%20Inquiry`}
                className="block rounded-lg bg-primary-600 px-6 py-3 text-center font-semibold text-white hover:bg-primary-700"
              >
                Email {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="block rounded-lg border border-primary-600 px-6 py-3 text-center font-semibold text-primary-700"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand title="Questions about a role?" primaryHref="/contact" primaryLabel="Contact the office" />
    </>
  );
}
