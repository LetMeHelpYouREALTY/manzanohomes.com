import MarketingPage from "@/components/sections/MarketingPage";
import { pageMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const content = PAGES["/home-valuation"];

export const metadata = pageMetadata(content);

export default function HomeValuationPage() {
  return <MarketingPage content={content} />;
}
