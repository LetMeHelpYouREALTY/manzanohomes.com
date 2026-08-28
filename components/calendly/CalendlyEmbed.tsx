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
    let pollTimer: number | undefined;
    let stopTimer: number | undefined;

    const start = () => {
      if (started || cancelled) return;
      started = true;
      void loadCalendly().then(() => {
        const tryInit = () => {
          if (cancelled) return true;
          if (!window.Calendly?.initInlineWidget) return false;
          if (!node.querySelector("iframe")) {
            window.Calendly.initInlineWidget({ url, parentElement: node });
          }
          return true;
        };

        if (tryInit()) return;
        pollTimer = window.setInterval(() => {
          if (tryInit()) {
            if (pollTimer) window.clearInterval(pollTimer);
          }
        }, 150);
        stopTimer = window.setTimeout(() => {
          if (pollTimer) window.clearInterval(pollTimer);
        }, 8000);
      });
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return () => {
        cancelled = true;
        if (pollTimer) window.clearInterval(pollTimer);
        if (stopTimer) window.clearTimeout(stopTimer);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(node);

    return () => {
      cancelled = true;
      io.disconnect();
      if (pollTimer) window.clearInterval(pollTimer);
      if (stopTimer) window.clearTimeout(stopTimer);
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-slate-200 bg-white"
      style={{ minWidth: 320, height }}
      data-calendly-event={resolved}
    />
  );
}
