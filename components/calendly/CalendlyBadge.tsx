"use client";

import { openCalendlyPopup } from "@/lib/calendly-window";
import { loadCalendly } from "@/lib/load-calendly";

export default function CalendlyBadge() {
  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-500"
      onMouseEnter={() => {
        void loadCalendly();
      }}
      onFocus={() => {
        void loadCalendly();
      }}
      onClick={() => openCalendlyPopup("conversation")}
    >
      Schedule time with me
    </button>
  );
}
