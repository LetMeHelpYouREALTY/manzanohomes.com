"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const light = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        light ? "bg-white shadow-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href={`tel:${SITE.phoneTel}`}
          className={cn(
            "text-lg font-bold sm:text-xl",
            light ? "text-primary-700" : "text-white",
          )}
          aria-label={`Call Manzano Homes at ${SITE.phoneDisplay}`}
        >
          {SITE.phoneDisplay}
        </a>

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
                    : light
                      ? "text-slate-700 hover:text-primary-700"
                      : "text-white hover:text-primary-100",
                )}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          className={cn("md:hidden", light ? "text-slate-800" : "text-white")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t bg-white px-4 py-4 shadow-lg md:hidden">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mb-3 block font-bold text-primary-700"
          >
            {SITE.phoneDisplay}
          </a>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-slate-800 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
