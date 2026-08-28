import type { CalendlyEvent } from "@/lib/calendly";
import { calendlyUrl } from "@/lib/calendly";
import { loadCalendly } from "@/lib/load-calendly";

type CalendlyApi = {
  initPopupWidget: (opts: { url: string }) => void;
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
  initBadgeWidget: (opts: {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

export function openCalendlyPopup(event: CalendlyEvent = "conversation"): void {
  const url = calendlyUrl(event);
  void loadCalendly()
    .then(() => {
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url });
        return;
      }
      window.open(url, "_blank", "noopener,noreferrer");
    })
    .catch(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    });
}
