"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { loadRealScout } from "@/lib/load-realscout";

export function RealScoutWhenVisible({ children }: { children: ReactNode }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    const start = () => {
      void loadRealScout().then(() => {
        if (!cancelled) setReady(true);
      });
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return () => {
        cancelled = true;
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { rootMargin: "500px 0px" },
    );
    io.observe(host);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return (
    <div ref={hostRef}>
      {ready ? children : <div className="min-h-[240px] rounded-xl bg-stone-100" aria-hidden />}
    </div>
  );
}
