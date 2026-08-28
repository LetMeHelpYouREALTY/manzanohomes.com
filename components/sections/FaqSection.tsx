type Faq = {
  question: string;
  answer: string;
};

export default function FaqSection({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">{heading}</h2>
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-slate-200 p-6">
              <dt className="font-semibold text-slate-900">{faq.question}</dt>
              <dd className="mt-2 text-slate-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
