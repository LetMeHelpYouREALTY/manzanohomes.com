import MlsDisclaimer from "@/components/realscout/MlsDisclaimer";
import { RealScoutWhenVisible } from "@/components/realscout/RealScoutWhenVisible";
import { SITE } from "@/lib/site";

export default function RealScoutHomeValue() {
  const html = `<realscout-home-value agent-encoded-id="${SITE.realScoutAgentId}"></realscout-home-value>`;
  return (
    <div>
      <RealScoutWhenVisible>
        <div className="realscout-home-value" dangerouslySetInnerHTML={{ __html: html }} />
      </RealScoutWhenVisible>
      <MlsDisclaimer />
    </div>
  );
}
