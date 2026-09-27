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
import { loadGoogleMaps } from "@/lib/load-google-maps";
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
  rating?: number;
  lat: number;
  lng: number;
};

const MAP_HEIGHT_CLASS = "min-h-[420px] h-[min(70vh,520px)] w-full";

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

  const openInfo = useCallback((content: string, position: google.maps.LatLngLiteral) => {
    if (!mapRef.current) return;
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    infoWindowRef.current.setContent(content);
    infoWindowRef.current.setPosition(position);
    infoWindowRef.current.open({ map: mapRef.current });
  }, []);

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
      openInfo(
        `<div style="max-width:240px"><strong>${COMMUNITY_MAP_CENTER.label}</strong><br/>${COMMUNITY_MAP_CENTER.addressLine}</div>`,
        center,
      );
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
        const ratingLine =
          place.rating !== undefined ? `<br/>Rating: ${place.rating.toFixed(1)}` : "";
        const directions = directionsUrl(`${place.lat},${place.lng}`);
        marker.addListener("click", () => {
          openInfo(
            `<div style="max-width:260px"><strong>${place.name}</strong>${ratingLine}<br/>${place.address}<br/><a href="${directions}" target="_blank" rel="noopener noreferrer">Directions</a></div>`,
            { lat: place.lat, lng: place.lng },
          );
        });
        placeMarkersRef.current.push(marker);
      });
    },
    [clearPlaceMarkers, openInfo],
  );

  const searchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current) return;
      const category = AMENITY_CATEGORIES.find((item) => item.id === categoryId);
      if (!category) return;

      try {
        const placesLibrary = (await google.maps.importLibrary(
          "places",
        )) as google.maps.PlacesLibrary;
        const { Place } = placesLibrary;
        const primaryType = category.placeTypes[0];
        const { places } = await Place.searchNearby({
          fields: [
            "displayName",
            "formattedAddress",
            "location",
            "rating",
            "googleMapsURI",
          ],
          locationRestriction: {
            center,
            radius: 8000,
          },
          includedPrimaryTypes: [primaryType],
          maxResultCount: 15,
          rankPreference: google.maps.places.SearchNearbyRankPreference.POPULARITY,
        });

        const mapped: PlaceResult[] = [];
        places.forEach((place, index) => {
          const loc = place.location;
          if (!loc) return;
          const rawName = place.displayName;
          const name =
            typeof rawName === "string"
              ? rawName
              : rawName && typeof rawName === "object" && "text" in rawName
                ? String((rawName as { text: string }).text)
                : "Place";
          mapped.push({
            id: `${categoryId}-${index}-${name}`,
            name,
            address: place.formattedAddress ?? "",
            rating: place.rating ?? undefined,
            lat: loc.lat(),
            lng: loc.lng(),
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
        setLoadError(true);
        setMode("fallback");
      }
    },
    [center, plotPlaceMarkers],
  );

  useEffect(() => {
    if (!apiKey) {
      setMode("fallback");
      return;
    }

    let cancelled = false;
    setMode("loading");

    void loadGoogleMaps(apiKey, mapId)
      .then(async () => {
        if (cancelled || !mapHostRef.current) return;
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
        await searchNearby(activeCategory);
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError(true);
          setMode("fallback");
        }
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
      void searchNearby(activeCategory);
    }
  }, [activeCategory, mode, searchNearby]);

  const embedSrc = googleMapsEmbedUrl(center.lat, center.lng);

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
            className="h-full w-full border-0"
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

      {loadError && mode === "fallback" && apiKey ? (
        <p className="text-sm text-amber-800" role="status">
          Live Places search is unavailable; showing the embedded map and curated list below.
        </p>
      ) : null}

      {!apiKey ? (
        <p className="text-sm text-slate-600" role="status">
          Add <code className="text-xs">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in Vercel for
          interactive markers; the embedded map and list work without a key.
        </p>
      ) : null}

      {showCuratedList ? (
        <CuratedList
          categoryId={activeCategory}
          places={mode === "interactive" && livePlaces.length > 0 ? livePlaces : null}
          curated={curated}
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
}: {
  categoryId: AmenityCategoryId;
  places: PlaceResult[] | null;
  curated: ReturnType<typeof curatedPlacesForCategory>;
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
              {place.rating !== undefined ? (
                <p className="text-slate-600">Google rating: {place.rating.toFixed(1)}</p>
              ) : null}
              <p>{place.address}</p>
              <a
                className="mt-2 inline-block font-medium text-primary-700 hover:underline"
                href={directionsUrl(`${place.lat},${place.lng}`)}
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
