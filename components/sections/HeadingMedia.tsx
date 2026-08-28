import Image from "next/image";

type HeadingMediaProps = {
  as?: "h2" | "h3";
  title: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
  reverse?: boolean;
};

export default function HeadingMedia({
  as = "h2",
  title,
  image,
  imageAlt,
  children,
  reverse = false,
}: HeadingMediaProps) {
  const Tag = as;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
        <div className={reverse ? "md:order-2" : undefined}>
          <Image
            src={image}
            alt={imageAlt}
            width={800}
            height={560}
            className="h-64 w-full rounded-xl object-cover md:h-80"
          />
        </div>
        <div>
          <Tag className={as === "h2" ? "text-3xl font-bold text-slate-900" : "text-2xl font-bold text-slate-900"}>
            {title}
          </Tag>
          {children ? <div className="mt-4 space-y-3 text-lg text-slate-700">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
