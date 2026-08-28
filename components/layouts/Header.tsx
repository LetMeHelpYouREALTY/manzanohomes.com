"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-lg font-bold text-primary-800 sm:text-xl">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  current
                    ? "bg-primary-50 text-primary-700"
                    : "text-slate-700 hover:text-primary-700",
                )}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="text-sm font-semibold text-primary-700"
            aria-label={`Call Manzano Homes at ${SITE.phoneDisplay}`}
          >
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
          >
            Get Started
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="text-sm font-semibold text-primary-700"
            aria-label={`Call Manzano Homes at ${SITE.phoneDisplay}`}
          >
            {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            className="text-slate-800"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t bg-white px-4 py-4 shadow-lg md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-slate-800 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 block rounded-md bg-primary-600 px-3 py-2 text-center font-medium text-white"
          >
            Get Started
          </Link>
        </div>
      ) : null}
    </header>
  );
}
