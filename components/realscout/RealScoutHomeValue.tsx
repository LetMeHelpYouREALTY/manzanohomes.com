import MlsDisclaimer from "@/components/realscout/MlsDisclaimer";
import { SITE } from "@/lib/site";

export default function RealScoutHomeValue() {
  const html = `<realscout-home-value agent-encoded-id="${SITE.realScoutAgentId}"></realscout-home-value>`;
  return (
    <div>
      <div className="realscout-home-value" dangerouslySetInnerHTML={{ __html: html }} />
      <MlsDisclaimer />
    </div>
  );
}
