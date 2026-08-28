import Image from "next/image";

export type MediaCard = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export default function MediaCardGrid({
  heading,
  items,
}: {
  heading: string;
  items: MediaCard[];
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">{heading}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={640}
                height={420}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
