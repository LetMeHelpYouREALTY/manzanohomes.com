import { SITE } from "@/lib/site";

export const contactFaqs = [
  {
    question: "How do I reach Manzano Homes?",
    answer: `Call ${SITE.phoneDisplay}, email ${SITE.email}, or book a Calendly time. Office hours are ${SITE.hoursDisplay} at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}.`,
  },
  {
    question: "What services does Manzano Homes provide?",
    answer:
      "Buying, selling, home valuations, listing alerts, and market reports for Manzano Peak and nearby 89121, 89178, 89179, and 89138 inventory.",
  },
];
