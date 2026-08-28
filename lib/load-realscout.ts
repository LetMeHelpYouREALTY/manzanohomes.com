const REALSCOUT_SRC =
  "https://em.realscout.com/widgets/realscout-web-components.umd.js";

let realscoutPromise: Promise<void> | null = null;

function injectScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true" || customElements.get("realscout-office-listings")) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.type = "module";
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

/** Load RealScout UMD once — only when a listing/search/value widget is about to show. */
export function loadRealScout() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (!realscoutPromise) {
    realscoutPromise = injectScript(REALSCOUT_SRC);
  }
  return realscoutPromise;
}
