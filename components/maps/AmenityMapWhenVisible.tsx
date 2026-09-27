"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { loadGoogleMaps } from "@/lib/load-google-maps";

type AmenityMapWhenVisibleProps = {
  children: ReactNode;
  /** Reserve space to avoid CLS before the map loads. */
  minHeightClass?: string;
};

export default function AmenityMapWhenVisible({
  children,
  minHeightClass = "min-h-[520px]",
}: AmenityMapWhenVisibleProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          io.disconnect();
          setVisible(true);
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(host);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
    if (!apiKey) return;
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
    void loadGoogleMaps(apiKey, mapId).catch(() => {
      /* AmenityMap handles fallback UI */
    });
  }, [visible]);

  return (
    <div ref={hostRef} className={minHeightClass}>
      {visible ? (
        children
      ) : (
        <div
          className="flex h-full min-h-[420px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-500"
          aria-hidden
        >
          Map loads when scrolled into view
        </div>
      )}
    </div>
  );
}
