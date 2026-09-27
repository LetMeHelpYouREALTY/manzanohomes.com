import { SITE } from "@/lib/site";

/** Map center for Manzano Peak / Vales at Manzano (3693 Manzano Peak Ave sales office). */
export const COMMUNITY_MAP_CENTER = {
  latitude: 36.14074,
  longitude: -115.09437,
  label: "Manzano Peak",
  addressLine: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`,
  coordinateSource:
    "Community sales office at 3693 Manzano Peak Ave (Vales at Manzano); public index pin 36.14074, -115.09437",
} as const;

export type AmenityCategoryId =
  | "grocery"
  | "parks"
  | "restaurants"
  | "schools"
  | "healthcare"
  | "pharmacies"
  | "fitness"
  | "shopping"
  | "cafes"
  | "golf"
  | "parking";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[];
  ariaLabel: string;
};

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "grocery",
    label: "Grocery",
    placeTypes: ["grocery_store", "supermarket"],
    ariaLabel: "Show grocery stores near Manzano Peak",
  },
  {
    id: "parks",
    label: "Parks",
    placeTypes: ["park"],
    ariaLabel: "Show parks near Manzano Peak",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    placeTypes: ["restaurant"],
    ariaLabel: "Show restaurants near Manzano Peak",
  },
  {
    id: "schools",
    label: "Schools",
    placeTypes: ["school", "primary_school", "secondary_school"],
    ariaLabel: "Show schools near Manzano Peak",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    placeTypes: ["hospital", "doctor"],
    ariaLabel: "Show healthcare near Manzano Peak",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    placeTypes: ["pharmacy"],
    ariaLabel: "Show pharmacies near Manzano Peak",
  },
  {
    id: "fitness",
    label: "Fitness",
    placeTypes: ["gym"],
    ariaLabel: "Show fitness centers near Manzano Peak",
  },
  {
    id: "shopping",
    label: "Shopping",
    placeTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near Manzano Peak",
  },
  {
    id: "cafes",
    label: "Cafes",
    placeTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near Manzano Peak",
  },
  {
    id: "golf",
    label: "Golf",
    placeTypes: ["golf_course"],
    ariaLabel: "Show golf courses near Manzano Peak",
  },
  {
    id: "parking",
    label: "Parking",
    placeTypes: ["parking"],
    ariaLabel: "Show parking near Manzano Peak",
  },
];

export type CuratedPlace = {
  name: string;
  /** Official business, agency, or government page used to verify the listing. */
  sourceUrl: string;
  schemaType:
    | "Place"
    | "Restaurant"
    | "Park"
    | "Hospital"
    | "GolfCourse"
    | "School"
    | "Store"
    | "Pharmacy";
  streetAddress?: string;
  locality: string;
  region: string;
  postalCode: string;
  categories: AmenityCategoryId[];
  note?: string;
};

/** Verified anchors for fallback map list and ItemList schema (no invented ratings or distances). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: "Harmony Park",
    sourceUrl: "https://parkslocator.clarkcountynv.gov/Search/ParkDetail?parkId=100",
    schemaType: "Park",
    streetAddress: "4530 S Pearl St",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89121",
    categories: ["parks"],
  },
  {
    name: "Sunset Park",
    sourceUrl:
      "https://www.clarkcountynv.gov/government/departments/parks___recreation/services/area_reservations/sunset-park-webpage",
    schemaType: "Park",
    streetAddress: "2601 E Sunset Rd",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89120",
    categories: ["parks"],
    note: "Clark County regional park (324 acres per county site).",
  },
  {
    name: "Albertsons",
    sourceUrl: "https://local.albertsons.com/nv/las-vegas/7271-s-eastern-ave.html",
    schemaType: "Store",
    streetAddress: "7271 S Eastern Ave",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89119",
    categories: ["grocery"],
  },
  {
    name: "Target",
    sourceUrl: "https://www.target.com/sl/las-vegas-silverado-ranch/1171",
    schemaType: "Store",
    streetAddress: "9725 S Eastern Ave",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89183",
    categories: ["grocery", "shopping"],
  },
  {
    name: "The District at Green Valley Ranch",
    sourceUrl: "https://shopthedistrictgvr.com/contact-us/",
    schemaType: "Store",
    streetAddress: "2240 Village Walk Dr",
    locality: "Henderson",
    region: "NV",
    postalCode: "89052",
    categories: ["shopping", "restaurants"],
  },
  {
    name: "Green Valley Ranch Resort Spa and Casino",
    sourceUrl: "https://greenvalleyranch.com/",
    schemaType: "Place",
    streetAddress: "2300 Paseo Verde Pkwy",
    locality: "Henderson",
    region: "NV",
    postalCode: "89052",
    categories: ["shopping", "restaurants"],
  },
  {
    name: "Southern Hills Hospital and Medical Center",
    sourceUrl: "https://www.sunrisehealthinfo.com/locations/southern-hills-hospital",
    schemaType: "Hospital",
    streetAddress: "9300 W Sunset Rd",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89148",
    categories: ["healthcare"],
  },
  {
    name: "Dignity Health-St. Rose Dominican, San Martín Campus",
    sourceUrl:
      "https://www.dignityhealth.org/las-vegas/st-rose-dominican-san-martin-general-hospital",
    schemaType: "Hospital",
    streetAddress: "8280 W Warm Springs Rd",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89113",
    categories: ["healthcare"],
  },
  {
    name: "Las Vegas National Golf Club",
    sourceUrl: "https://lasvegasnational.com/",
    schemaType: "GolfCourse",
    streetAddress: "1911 E Desert Inn Rd",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89169",
    categories: ["golf"],
  },
  {
    name: "Southeast Career Technical Academy",
    sourceUrl: "https://www.secta.us/",
    schemaType: "School",
    streetAddress: "5710 Mountain Vista St",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89120",
    categories: ["schools"],
  },
  {
    name: "Green Valley High School",
    sourceUrl: "https://greenvalleyhs.org/",
    schemaType: "School",
    streetAddress: "460 N Arroyo Grande Blvd",
    locality: "Henderson",
    region: "NV",
    postalCode: "89014",
    categories: ["schools"],
  },
  {
    name: "Coronado High School",
    sourceUrl: "https://www.cityofhenderson.com/Home/Components/FacilityDirectory/FacilityDirectory/115/2216",
    schemaType: "School",
    streetAddress: "1001 Coronado Center Dr",
    locality: "Henderson",
    region: "NV",
    postalCode: "89052",
    categories: ["schools"],
  },
];

export const AMENITIES_PAGE_PATH = "/nearby-amenities" as const;

export const AMENITIES_FAQS = [
  {
    question: "What grocery stores are near Manzano Peak?",
    answer:
      "Albertsons on S Eastern Ave (Warm Springs intersection) and Target on S Eastern Ave in Silverado Ranch are common full-service options; confirm drive time from your lot on a weekday.",
  },
  {
    question: "How far is Manzano Peak from the Las Vegas Strip?",
    answer:
      "About 12 miles — roughly a 15-minute drive via I-515 and I-215 when traffic is light (approximate).",
  },
  {
    question: "Are there hospitals near Manzano Peak?",
    answer:
      "Southern Hills Hospital on W Sunset Rd and St. Rose Dominican San Martín Campus on W Warm Springs Rd serve southeast Las Vegas and Henderson.",
  },
  {
    question: "Which parks are close to Manzano Peak?",
    answer:
      "Harmony Park on S Pearl St is in the 89121 area; Sunset Park on E Sunset Rd is the larger Clark County regional park a short drive north.",
  },
  {
    question: "What schools are near Manzano Peak?",
    answer:
      "Southeast Career Technical Academy, Green Valley High School, and Coronado High School are named CCSD campuses within a few miles — verify zoning for the exact lot you tour.",
  },
  {
    question: "How long is the drive to Harry Reid International Airport?",
    answer:
      "About 10 minutes via I-515 and the airport connector when traffic is light (approximate).",
  },
  {
    question: "Where do residents shop and dine nearby?",
    answer:
      "The District at Green Valley Ranch and Green Valley Ranch Resort add restaurants, retail, and entertainment a few miles south in Henderson.",
  },
  {
    question: "Is there golf near Manzano Peak?",
    answer:
      "Las Vegas National Golf Club on E Desert Inn Rd is a public 18-hole course KB Home lists for Vales at Manzano buyers (drive time varies with traffic).",
  },
] as const;

export function curatedPlacesForCategory(categoryId: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((place) => place.categories.includes(categoryId));
}

export function googleMapsEmbedUrl(lat: number, lng: number, zoom = 14): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

export function directionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export function formatPlaceAddress(place: CuratedPlace): string {
  if (place.streetAddress) {
    return `${place.streetAddress}, ${place.locality}, ${place.region} ${place.postalCode}`;
  }
  return `${place.locality}, ${place.region} ${place.postalCode}`;
}
