import "@/lib/calendly-window";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

let calendlyPromise: Promise<void> | null = null;

function injectStylesheet(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function injectScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (window.Calendly) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

/** Load Calendly CSS + widget.js once. Call on idle, hover, or first click — never from the document head. */
export function loadCalendly() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (!calendlyPromise) {
    injectStylesheet(CALENDLY_CSS);
    calendlyPromise = injectScript(CALENDLY_JS);
  }
  return calendlyPromise;
}

export function scheduleCalendlyIdleLoad() {
  if (typeof window === "undefined") return;

  const start = () => {
    void loadCalendly();
  };

  const afterLoad = () => {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(start, { timeout: 4000 });
      return;
    }
    window.setTimeout(start, 2500);
  };

  if (document.readyState === "complete") {
    afterLoad();
    return;
  }
  window.addEventListener("load", afterLoad, { once: true });
}
