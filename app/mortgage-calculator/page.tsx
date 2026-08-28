import MortgageCalculator from "@/components/tools/MortgageCalculator";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Mortgage Calculator | Manzano Peak Las Vegas 89121",
  description:
    "Estimate monthly principal and interest for a Manzano Peak / 89121 home purchase. Taxes and HOA not included.",
  path: "/mortgage-calculator",
});

export default function MortgagePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Mortgage Calculator",
            description: metadata.description ?? "",
            path: "/mortgage-calculator",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Mortgage Calculator", url: "/mortgage-calculator" },
          ]),
        ]}
      />
      <section className="bg-primary-800 px-4 pb-12 pt-28 text-center text-white">
        <h1 className="text-4xl font-bold">Mortgage calculator</h1>
        <p className="mt-3">Principal and interest only — verify taxes, insurance, and HOA separately.</p>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <MortgageCalculator />
      </section>
      <CtaBand title="Want this payment run on a specific 89121 address?" />
    </>
  );
}
