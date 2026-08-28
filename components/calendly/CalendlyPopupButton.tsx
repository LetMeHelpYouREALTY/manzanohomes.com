"use client";

import { assertCalendlyEvent, type CalendlyEvent } from "@/lib/calendly";
import { openCalendlyPopup } from "@/lib/calendly-window";
import { loadCalendly } from "@/lib/load-calendly";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline" | "header" | "footer";

type CalendlyPopupButtonProps = {
  event?: CalendlyEvent;
  label?: string;
  variant?: Variant;
  className?: string;
};

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-500",
  light: "rounded-lg bg-white px-6 py-3 font-semibold text-primary-800 hover:bg-slate-100",
  outline:
    "rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10",
  header: "rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700",
  footer: "rounded border border-slate-600 px-3 py-2 hover:bg-slate-800",
};

export default function CalendlyPopupButton({
  event = "conversation",
  label = "Book a time",
  variant = "primary",
  className,
}: CalendlyPopupButtonProps) {
  const resolved = assertCalendlyEvent(event);
  return (
    <button
      type="button"
      className={cn(VARIANT_CLASS[variant], className)}
      onMouseEnter={() => {
        void loadCalendly();
      }}
      onFocus={() => {
        void loadCalendly();
      }}
      onClick={() => openCalendlyPopup(resolved)}
    >
      {label}
    </button>
  );
}
