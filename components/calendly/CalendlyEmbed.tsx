"use client";

import { useEffect, useRef } from "react";
import { assertCalendlyEvent, calendlyUrl, type CalendlyEvent } from "@/lib/calendly";
import { loadCalendly } from "@/lib/load-calendly";
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

    let cancelled = false;
    let started = false;

    const start = () => {
      if (started || cancelled) return;
      started = true;
      void loadCalendly().then(() => {
        if (cancelled || !window.Calendly?.initInlineWidget) return;
        node.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: node });
      });
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return () => {
        cancelled = true;
        node.innerHTML = "";
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(node);

    return () => {
      cancelled = true;
      io.disconnect();
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
