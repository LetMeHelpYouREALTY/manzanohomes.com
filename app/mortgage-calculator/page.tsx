import MortgageCalculator from "@/components/tools/MortgageCalculator";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";
import PageVisualBlock from "@/components/sections/PageVisualBlock";
import JsonLd from "@/components/seo/JsonLd";
import { getHeroProps, getPageVisual } from "@/lib/content/page-visuals";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const path = "/mortgage-calculator";
const visual = getPageVisual(path);

export const metadata = pageMetadata({
  title: "Mortgage Calculator | Manzano Peak Las Vegas 89121",
  description:
    "Estimate monthly principal and interest for a Manzano Peak / 89121 home purchase. Taxes and HOA not included.",
  path,
});

export default function MortgagePage() {
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
            { name: "Mortgage Calculator", url: path },
          ]),
        ]}
      />
      <PageHero {...getHeroProps(path)} />
      <PageVisualBlock path={path} />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <MortgageCalculator />
      </section>
      <CtaBand
        title="Want this payment run on a specific 89121 address?"
        calendlyEvent="conversation"
        primaryLabel="Book a call"
      />
    </>
  );
}
