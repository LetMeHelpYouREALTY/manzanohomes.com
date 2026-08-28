"use client";

import { useEffect } from "react";
import { calendlyUrl } from "@/lib/calendly";
import { scheduleCalendlyIdleLoad } from "@/lib/load-calendly";
import "@/lib/calendly-window";

export default function CalendlyBadge() {
  useEffect(() => {
    let cancelled = false;

    function mount() {
      if (document.querySelector(".calendly-badge-widget")) return;
      if (!window.Calendly?.initBadgeWidget) return;
      window.Calendly.initBadgeWidget({
        url: calendlyUrl("conversation"),
        text: "Schedule time with me",
        color: "#0284c7",
        textColor: "#ffffff",
        branding: false,
      });
    }

    scheduleCalendlyIdleLoad();
    const timer = window.setInterval(() => {
      if (cancelled) return;
      if (window.Calendly?.initBadgeWidget) {
        mount();
        window.clearInterval(timer);
      }
    }, 400);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return null;
}
