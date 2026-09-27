"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  AMENITY_CATEGORIES,
  AMENITIES_PAGE_PATH,
  COMMUNITY_MAP_CENTER,
  curatedPlacesForCategory,
  directionsUrl,
  formatPlaceAddress,
  googleMapsEmbedUrl,
  type AmenityCategoryId,
} from "@/lib/content/amenities";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/load-google-maps";
import { searchCategory } from "@/lib/places-search";
import { cn } from "@/lib/utils";

type AmenityMapProps = {
  variant?: "compact" | "full";
  /** Show curated list beside/below map (always shown in fallback mode). */
  showCuratedList?: boolean;
  className?: string;
};

type PlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUri?: string;
};

const MAP_HEIGHT_CLASS = "min-h-[420px] h-[min(70vh,520px)] w-full";

function placeDisplayName(rawName: google.maps.places.Place["displayName"]): string {
  if (typeof rawName === "string") return rawName;
  if (rawName && typeof rawName === "object" && "text" in rawName) {
    return String((rawName as { text: string }).text);
  }
  return "Place";
}

function openInfoWindowDom(
  infoWindow: google.maps.InfoWindow,
  map: google.maps.Map,
  position: google.maps.LatLngLiteral,
  options: { title: string; lines: string[]; directionsHref?: string },
) {
  const container = document.createElement("div");
  container.style.maxWidth = "260px";

  const titleEl = document.createElement("strong");
  titleEl.textContent = options.title;
  container.appendChild(titleEl);

  options.lines.forEach((line) => {
    container.appendChild(document.createElement("br"));
    const span = document.createElement("span");
    span.textContent = line;
    container.appendChild(span);
  });

  if (options.directionsHref) {
    container.appendChild(document.createElement("br"));
    const link = document.createElement("a");
    link.href = options.directionsHref;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Directions";
    container.appendChild(link);
  }

  infoWindow.setContent(container);
  infoWindow.setPosition(position);
  infoWindow.open({ map });
}

export default function AmenityMap({
  variant = "full",
  showCuratedList = true,
  className,
}: AmenityMapProps) {
  const mapHostRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const placeMarkersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("grocery");
  const [mode, setMode] = useState<"idle" | "loading" | "interactive" | "fallback">("idle");
  const [loadError, setLoadError] = useState(false);
  const [livePlaces, setLivePlaces] = useState<PlaceResult[]>([]);
  const [searchFailed, setSearchFailed] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  const mapLabelId = useId();
  const filterLabelId = useId();

  const center = useMemo(
    () => ({
      lat: COMMUNITY_MAP_CENTER.latitude,
      lng: COMMUNITY_MAP_CENTER.longitude,
    }),
    [],
  );

  const curated = curatedPlacesForCategory(activeCategory);

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((marker) => marker.setMap(null));
    placeMarkersRef.current = [];
  }, []);

  const enterFallback = useCallback(() => {
    clearPlaceMarkers();
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    mapRef.current = null;
    setLivePlaces([]);
    setLoadError(true);
    setMode("fallback");
  }, [clearPlaceMarkers]);

  const openInfo = useCallback(
    (
      position: google.maps.LatLngLiteral,
      options: { title: string; lines: string[]; directionsHref?: string },
    ) => {
      if (!mapRef.current) return;
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      openInfoWindowDom(infoWindowRef.current, mapRef.current, position, options);
    },
    [],
  );

  const renderCommunityMarker = useCallback(() => {
    if (!mapRef.current) return;
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = new google.maps.Marker({
      map: mapRef.current,
      position: center,
      title: COMMUNITY_MAP_CENTER.label,
      zIndex: 1000,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: "#1d4ed8",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 3,
      },
    });
    communityMarkerRef.current.addListener("click", () => {
      openInfo(center, {
        title: COMMUNITY_MAP_CENTER.label,
        lines: [COMMUNITY_MAP_CENTER.addressLine],
      });
    });
  }, [center, openInfo]);

  const plotPlaceMarkers = useCallback(
    (places: PlaceResult[]) => {
      if (!mapRef.current) return;
      clearPlaceMarkers();
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map: mapRef.current!,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        const directions = place.mapsUri ?? directionsUrl(`${place.lat},${place.lng}`);
        marker.addListener("click", () => {
          openInfo(
            { lat: place.lat, lng: place.lng },
            {
              title: place.name,
              lines: place.address ? [place.address] : [],
              directionsHref: directions,
            },
          );
        });
        placeMarkersRef.current.push(marker);
      });
    },
    [clearPlaceMarkers, openInfo],
  );

  const runCategorySearch = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current) return;
      const category = AMENITY_CATEGORIES.find((item) => item.id === categoryId);
      if (!category) return;

      setSearchFailed(false);

      try {
        const places = await searchCategory(center, categoryId, category.placeTypes);

        const mapped: PlaceResult[] = [];
        places.forEach((place, index) => {
          const loc = place.location;
          if (!loc) return;
          const name = placeDisplayName(place.displayName);
          const json = loc.toJSON?.() ?? { lat: loc.lat(), lng: loc.lng() };
          mapped.push({
            id: `${categoryId}-${index}-${name}`,
            name,
            address: place.formattedAddress ?? "",
            lat: json.lat,
            lng: json.lng,
            mapsUri: place.googleMapsURI ?? undefined,
          });
        });

        setLivePlaces(mapped);
        plotPlaceMarkers(mapped);

        if (mapped.length > 0) {
          const bounds = new google.maps.LatLngBounds();
          bounds.extend(center);
          mapped.forEach((place) => bounds.extend({ lat: place.lat, lng: place.lng }));
          mapRef.current.fitBounds(bounds, 48);
        } else {
          mapRef.current.setCenter(center);
          mapRef.current.setZoom(14);
        }
      } catch {
        setSearchFailed(true);
        setLivePlaces([]);
        clearPlaceMarkers();
        mapRef.current.setCenter(center);
        mapRef.current.setZoom(14);
      }
    },
    [center, clearPlaceMarkers, plotPlaceMarkers],
  );

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  useEffect(() => {
    if (!apiKey || mapsAuthFailed) {
      setMode("fallback");
      return;
    }

    let cancelled = false;
    setMode("loading");

    void loadGoogleMaps(apiKey)
      .then(async () => {
        if (cancelled || mapsAuthFailed) {
          if (!cancelled) enterFallback();
          return;
        }
        if (!mapHostRef.current) return;
        const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
        mapRef.current = new Map(mapHostRef.current, {
          center,
          zoom: 14,
          mapId: mapId || undefined,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: variant === "full",
        });
        renderCommunityMarker();
        setMode("interactive");
        await runCategorySearch(activeCategory);
      })
      .catch(() => {
        if (!cancelled) enterFallback();
      });

    return () => {
      cancelled = true;
      clearPlaceMarkers();
      communityMarkerRef.current?.setMap(null);
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once per mount
  }, [apiKey, mapId, variant]);

  useEffect(() => {
    if (mode === "interactive") {
      void runCategorySearch(activeCategory);
    }
  }, [activeCategory, mode, runCategorySearch]);

  const embedSrc = googleMapsEmbedUrl(center.lat, center.lng);

  const showLiveList =
    mode === "interactive" && livePlaces.length > 0 && !searchFailed;

  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <p id={filterLabelId} className="sr-only">
          Filter nearby places by category
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-labelledby={filterLabelId}
        >
          {AMENITY_CATEGORIES.map((category) => {
            const selected = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={category.ariaLabel}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                  selected
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-primary-400",
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm",
          MAP_HEIGHT_CLASS,
        )}
        aria-labelledby={mapLabelId}
      >
        <p id={mapLabelId} className="sr-only">
          Interactive map of amenities near {COMMUNITY_MAP_CENTER.label}, Las Vegas
        </p>
        {mode === "fallback" ? (
          <iframe
            title={`Map of ${COMMUNITY_MAP_CENTER.label} Las Vegas`}
            src={embedSrc}
            className={MAP_HEIGHT_CLASS}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div ref={mapHostRef} className={MAP_HEIGHT_CLASS} />
        )}
        {mode === "loading" ? (
          <p className="sr-only" aria-live="polite">
            Loading map
          </p>
        ) : null}
      </div>

      {loadError && mode === "fallback" ? (
        <p className="text-sm text-amber-800" role="status">
          Live Places search is unavailable; showing the embedded map and curated list below.
        </p>
      ) : null}

      {showCuratedList ? (
        <CuratedList
          categoryId={activeCategory}
          places={showLiveList ? livePlaces : null}
          curated={curated}
          searchFailed={searchFailed}
        />
      ) : null}

      {variant === "compact" ? (
        <p className="text-center text-sm text-slate-600">
          <Link
            href={AMENITIES_PAGE_PATH}
            className="font-semibold text-primary-700 underline-offset-2 hover:underline"
          >
            View full nearby amenities guide
          </Link>
        </p>
      ) : null}
    </div>
  );
}

function CuratedList({
  categoryId,
  places,
  curated,
  searchFailed,
}: {
  categoryId: AmenityCategoryId;
  places: PlaceResult[] | null;
  curated: ReturnType<typeof curatedPlacesForCategory>;
  searchFailed: boolean;
}) {
  const category = AMENITY_CATEGORIES.find((item) => item.id === categoryId);

  if (places && places.length > 0) {
    return (
      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          {category?.label ?? "Places"} near Manzano Peak
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {places.map((place) => (
            <li
              key={place.id}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"
            >
              <p className="font-semibold text-slate-900">{place.name}</p>
              {place.address ? <p>{place.address}</p> : null}
              <a
                className="mt-2 inline-block font-medium text-primary-700 hover:underline"
                href={place.mapsUri ?? directionsUrl(`${place.lat},${place.lng}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">
        Featured {category?.label?.toLowerCase() ?? "places"} near Manzano Peak
      </h3>
      {searchFailed ? (
        <p className="mt-2 text-sm text-slate-600" role="status">
          Live results are unavailable for this category; showing verified nearby places.
        </p>
      ) : null}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {curated.map((place) => (
          <li
            key={place.name}
            className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"
          >
            <p className="font-semibold text-slate-900">{place.name}</p>
            <p>{formatPlaceAddress(place)}</p>
            {place.note ? <p className="mt-1 text-slate-600">{place.note}</p> : null}
            <a
              className="mt-2 inline-block font-medium text-primary-700 hover:underline"
              href={directionsUrl(formatPlaceAddress(place))}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </li>
        ))}
      </ul>
      {curated.length === 0 ? (
        <p className="mt-2 text-sm text-slate-600">
          No curated anchors in this category yet — use the map filters or contact us for a
          street-specific list.
        </p>
      ) : null}
    </div>
  );
}
