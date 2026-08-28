import type { CalendlyEvent } from "@/lib/calendly";
import { calendlyUrl } from "@/lib/calendly";

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
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
