const GOOGLE_MAPS_BASE = "https://maps.googleapis.com/maps/api/js";

let mapsPromise: Promise<void> | null = null;
let mapsKeyUsed: string | null = null;

function buildSrc(apiKey: string, mapId?: string) {
  const params = new URLSearchParams({
    key: apiKey,
    v: "weekly",
    loading: "async",
    libraries: "places,marker",
  });
  if (mapId) {
    params.set("map_ids", mapId);
  }
  return `${GOOGLE_MAPS_BASE}?${params.toString()}`;
}

function injectGoogleMapsScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src^="${GOOGLE_MAPS_BASE}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true" || window.google?.maps) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Google Maps script failed to load")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve();
    };
    script.onerror = () => reject(new Error("Google Maps script failed to load"));
    document.head.appendChild(script);
  });
}

/** Load Maps JavaScript API once when the amenity map enters the viewport. */
export function loadGoogleMaps(apiKey: string, mapId?: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (mapsPromise && mapsKeyUsed === apiKey) {
    return mapsPromise;
  }
  mapsKeyUsed = apiKey;
  mapsPromise = injectGoogleMapsScript(buildSrc(apiKey, mapId));
  return mapsPromise;
}
