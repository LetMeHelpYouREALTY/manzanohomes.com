import type { Metadata } from "next";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema, personSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

import Script from "next/script";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Manzano Homes | Las Vegas 89121 Real Estate",
    template: "%s | Manzano Homes",
  },
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-900">
        <JsonLd data={[localBusinessSchema(), personSchema(), websiteSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-800"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CalendlyBadge />
      
        {/* Follow Up Boss pixel (Widget Tracker) */}
        <Script id="fub-widget-tracker" strategy="afterInteractive">{`
if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-XQHVYQWW");
window.widgetTracker("send", "pageview");}
        `}</Script>
</body>
    </html>
  );
}
