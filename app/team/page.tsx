import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import JsonLd from "@/components/seo/JsonLd";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/team";
const visual = getPageVisual(path);

export const metadata = pageMetadata({
  title: "Our Team | Manzano Homes Las Vegas",
  description:
    "Meet Dr. Jan Duffy and the Manzano Homes team at Berkshire Hathaway HomeServices Nevada Properties in Las Vegas 89121.",
  path,
});

const team = [
  {
    name: "Dr. Jan Duffy",
    role: "REALTOR®, BHHS Nevada Properties",
    email: SITE.email,
    phone: SITE.phoneDisplay,
    bio: "Nevada license S.0197614.LLC. Hyperlocal listing and buyer work in Manzano Peak and 89121.",
  },
  {
    name: "Eugene Boyle",
    role: "Senior Real Estate Agent",
    email: "HomeSales@ManzanoHomes.com",
    phone: SITE.phoneDisplay,
    bio: "Buyer and listing support across 89121, 89178, 89179, and 89138.",
  },
  {
    name: "Chance Fuller",
    role: "Client Relations Manager",
    email: "Info@ManzanoHomes.com",
    phone: SITE.phoneDisplay,
    bio: "Transaction coordination and showing logistics for Manzano Peak tours.",
  },
];

export default function TeamPage() {
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
            { name: "Team", url: path },
          ]),
        ]}
      />
      <PageHero {...getHeroProps(path)} />
      <PageVisualBlock path={path} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-primary-700">{member.role}</p>
            <p className="mt-3 text-slate-600">{member.bio}</p>
            <p className="mt-4 text-sm">
              <a className="text-primary-700" href={`mailto:${member.email}`}>
                {member.email}
              </a>
            </p>
            <p className="text-sm">
              <a href={`tel:${SITE.phoneTel}`}>{member.phone}</a>
            </p>
          </article>
        ))}
      </section>
      <CtaBand title="Talk with the Manzano Homes team" calendlyEvent="conversation" primaryLabel="Book a time" />
    </>
  );
}
