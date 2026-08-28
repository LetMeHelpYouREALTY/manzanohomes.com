export const CALENDLY_EVENTS = {
  conversation: "dr-duffy-private-15-min-conversation",
  showing: "showing",
  tour: "open-house-tour",
  listing: "listing-consultation",
  buyer: "buyer-consultation-30-min",
  inPerson: "in-person-real-estate-consultation",
} as const;

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS;

export const CALENDLY_PROFILE = "https://calendly.com/drjanduffy";

export function calendlyUrl(event: CalendlyEvent = "conversation"): string {
  const slug = CALENDLY_EVENTS[event];
  return `${CALENDLY_PROFILE}/${slug}?hide_gdpr_banner=1&primary_color=0284c7`;
}

export function assertCalendlyEvent(event: CalendlyEvent): CalendlyEvent {
  switch (event) {
    case "conversation":
    case "showing":
    case "tour":
    case "listing":
    case "buyer":
    case "inPerson":
      return event;
    default: {
      const _exhaustive: never = event;
      return _exhaustive;
    }
  }
}
