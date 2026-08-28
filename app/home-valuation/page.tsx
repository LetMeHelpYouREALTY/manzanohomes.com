import RealScoutHomeValue from "@/components/realscout/RealScoutHomeValue";
import MarketingPage from "@/components/sections/MarketingPage";
import { pageMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const content = PAGES["/home-valuation"];

export const metadata = pageMetadata(content);

export default function HomeValuationPage() {
  return (
    <>
      <MarketingPage content={content} />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h2 className="mb-4 text-2xl font-bold">Instant estimate widget</h2>
        <RealScoutHomeValue />
      </section>
    </>
  );
}
