import CalendlyEmbed from "@/components/calendly/CalendlyEmbed";
import CalendlyPopupButton from "@/components/calendly/CalendlyPopupButton";
import type { CalendlyEvent } from "@/lib/calendly";
import { SITE } from "@/lib/site";

type CalendlySectionProps = {
  title: string;
  event?: CalendlyEvent;
  body?: string;
};

export default function CalendlySection({
  title,
  event = "conversation",
  body,
}: CalendlySectionProps) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">{title}</h2>
        <p className="mb-6 text-center text-slate-600">
          {body ??
            `Pick a time on Calendly — no contact form. Call ${SITE.phoneDisplay} if you need us now.`}
        </p>
        <div className="mb-6 flex justify-center">
          <CalendlyPopupButton event={event} label="Book a time" />
        </div>
        <CalendlyEmbed event={event} />
      </div>
    </section>
  );
}
