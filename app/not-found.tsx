import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 pb-20 pt-32 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-600">That URL is not on ManzanoHomes.com.</p>
      <Link href="/" className="mt-6 inline-block text-primary-700 underline">
        Back to home
      </Link>
    </section>
  );
}
