import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src https://widgetbe.com https://*.widgetbe.com 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://www.googletagmanager.com https://assets.calendly.com https://calendly.com",
              "style-src 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
              "img-src https://widgetbe.com https://*.widgetbe.com 'self' data: blob: https:",
              "font-src 'self' data: https://assets.calendly.com",
              "connect-src https://widgetbe.com https://*.widgetbe.com 'self' https://em.realscout.com https://www.realscout.com https://www.google-analytics.com https://calendly.com https://api.calendly.com https://*.calendly.com",
              "frame-src https://widgetbe.com https://*.widgetbe.com 'self' https://em.realscout.com https://www.realscout.com https://www.google.com https://maps.google.com https://*.google.com https://calendly.com https://*.calendly.com",
            ].join("; "),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
