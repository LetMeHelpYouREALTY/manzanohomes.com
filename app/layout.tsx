import type { Metadata } from "next";
import Script from "next/script";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

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
      <head>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900">
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
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
