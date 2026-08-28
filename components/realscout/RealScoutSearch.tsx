import MlsDisclaimer from "@/components/realscout/MlsDisclaimer";
import { SITE } from "@/lib/site";

export default function RealScoutSearch() {
  const html = `<realscout-advanced-search agent-encoded-id="${SITE.realScoutAgentId}"></realscout-advanced-search>`;
  return (
    <div>
      <div className="realscout-search" dangerouslySetInnerHTML={{ __html: html }} />
      <MlsDisclaimer />
    </div>
  );
}
