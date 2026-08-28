import MarketingPage from "@/components/sections/MarketingPage";
import { pageMetadata } from "@/lib/metadata";
import { PAGES } from "@/lib/pages";

const content = PAGES["/89178-real-estate"];

export const metadata = pageMetadata(content);

export default function Page() {
  return <MarketingPage content={content} />;
}

