import Link from "next/link";
import AmenityMap from "@/components/maps/AmenityMap";
import AmenityMapWhenVisible from "@/components/maps/AmenityMapWhenVisible";
import { AMENITIES_PAGE_PATH } from "@/lib/content/amenities";

type NearbyAmenitiesSectionProps = {
  /** Defaults to homepage-style heading */
  title?: string;
  subtitle?: string;
  tone?: "white" | "slate";
};

export default function NearbyAmenitiesSection({
  title = "Life near Manzano Peak",
  subtitle = "Switch categories to see groceries, parks, schools, healthcare, and more around 3693 Manzano Peak Ave.",
  tone = "slate",
}: NearbyAmenitiesSectionProps) {
  const bg = tone === "white" ? "bg-white" : "bg-slate-50";

  return (
    <section className={`${bg} py-16`} aria-labelledby="nearby-amenities-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="nearby-amenities-heading" className="text-3xl font-bold text-slate-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{subtitle}</p>
          <p className="mt-3">
            <Link
              href={AMENITIES_PAGE_PATH}
              className="font-semibold text-primary-700 underline-offset-2 hover:underline"
            >
              Nearby amenities guide →
            </Link>
          </p>
        </div>
        <div className="mt-10">
          <AmenityMapWhenVisible>
            <AmenityMap variant="compact" showCuratedList={false} />
          </AmenityMapWhenVisible>
        </div>
      </div>
    </section>
  );
}
