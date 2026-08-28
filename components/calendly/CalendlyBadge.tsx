"use client";

import { useEffect } from "react";
import { calendlyUrl } from "@/lib/calendly";
import "@/lib/calendly-window";

export default function CalendlyBadge() {
  useEffect(() => {
    function mount() {
      if (document.querySelector(".calendly-badge-widget")) return true;
      if (!window.Calendly?.initBadgeWidget) return false;
      window.Calendly.initBadgeWidget({
        url: calendlyUrl("conversation"),
        text: "Schedule time with me",
        color: "#0284c7",
        textColor: "#ffffff",
        branding: false,
      });
      return true;
    }

    if (mount()) return undefined;
    const timer = window.setInterval(() => {
      if (mount()) window.clearInterval(timer);
    }, 250);
    return () => window.clearInterval(timer);
  }, []);

  return null;
}
