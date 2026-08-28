import ZipMarketPage from "@/components/sections/ZipMarketPage";
import { getZipPage } from "@/lib/content/zips";
import { pageMetadata } from "@/lib/metadata";

const content = getZipPage("89138");

export const metadata = pageMetadata(content);

export default function Page() {
  return <ZipMarketPage content={content} />;
}
