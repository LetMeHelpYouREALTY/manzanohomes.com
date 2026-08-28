"use client";

import { useEffect, useRef } from "react";
import { assertCalendlyEvent, calendlyUrl, type CalendlyEvent } from "@/lib/calendly";
import "@/lib/calendly-window";

type CalendlyEmbedProps = {
  event?: CalendlyEvent;
  height?: number;
};

export default function CalendlyEmbed({
  event = "conversation",
  height = 700,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resolved = assertCalendlyEvent(event);
  const url = calendlyUrl(resolved);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    node.innerHTML = "";

    function mount() {
      if (!node || !window.Calendly?.initInlineWidget) return false;
      window.Calendly.initInlineWidget({ url, parentElement: node });
      return true;
    }

    if (mount()) return undefined;
    const timer = window.setInterval(() => {
      if (mount()) window.clearInterval(timer);
    }, 200);
    return () => {
      window.clearInterval(timer);
      node.innerHTML = "";
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget overflow-hidden rounded-xl bg-white"
      style={{ minWidth: 320, height }}
      data-calendly-event={resolved}
    />
  );
}
