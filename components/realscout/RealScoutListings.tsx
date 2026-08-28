import { SITE } from "@/lib/site";

type RealScoutListingsProps = {
  priceMin?: string;
  priceMax?: string;
};

export default function RealScoutListings({
  priceMin = "400000",
  priceMax = "600000",
}: RealScoutListingsProps) {
  const html = `<realscout-office-listings agent-encoded-id="${SITE.realScoutAgentId}" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF" price-min="${priceMin}" price-max="${priceMax}"></realscout-office-listings>`;

  return (
    <div
      className="realscout-listings"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
