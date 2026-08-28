import Image from "next/image";
import Link from "next/link";

export type InfoCard = {
  name: string;
  type: string;
  distance: string;
  description?: string;
  features?: string[];
  href?: string;
  image?: string;
  imageAlt?: string;
};

type InfoCardGridProps = {
  title: string;
  subtitle?: string;
  items: InfoCard[];
  tone?: "slate" | "white";
};

export default function InfoCardGrid({
  title,
  subtitle,
  items,
  tone = "slate",
}: InfoCardGridProps) {
  const sectionClass = tone === "slate" ? "bg-slate-50" : "bg-white";
  const cardClass = tone === "slate" ? "bg-white" : "bg-slate-50";

  return (
    <section className={`${sectionClass} py-16`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          {subtitle ? <p className="mt-3 text-lg text-slate-600">{subtitle}</p> : null}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const inner = (
              <>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.name}
                    width={640}
                    height={360}
                    quality={70}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
                    className="-mx-6 -mt-6 mb-4 h-40 w-[calc(100%+3rem)] object-cover"
                  />
                ) : null}
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-800">
                    {item.type}
                  </span>
                  <span className="text-sm text-slate-500">{item.distance}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                {item.description ? <p className="mt-2 text-slate-600">{item.description}</p> : null}
                {item.features?.length ? (
                  <ul className="mt-4 space-y-2 text-slate-600">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1 text-secondary-600">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </>
            );

            return item.href ? (
              <Link
                key={item.name}
                href={item.href}
                className={`${cardClass} rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md`}
              >
                {inner}
              </Link>
            ) : (
              <article key={item.name} className={`${cardClass} rounded-lg p-6 shadow-sm`}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
