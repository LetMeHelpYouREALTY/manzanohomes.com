"use client";

import { useMemo, useState } from "react";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(475000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const payment = useMemo(() => {
    const principal = price * (1 - down / 100);
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    if (monthlyRate === 0) return principal / n;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  }, [price, down, rate, years]);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <form className="space-y-4 rounded-xl border border-slate-200 p-6">
        <label className="block text-sm font-medium">
          Home price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium">
          Down payment %
          <input
            type="number"
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium">
          Interest rate %
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium">
          Term (years)
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
      </form>
      <div className="rounded-xl bg-slate-900 p-8 text-white">
        <p className="text-sm text-slate-300">Estimated principal & interest</p>
        <p className="mt-2 text-4xl font-bold">
          {payment.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </p>
        <p className="mt-4 text-sm text-slate-300">
          Taxes, HOA, and insurance are not included. Confirm with your lender.
        </p>
      </div>
    </div>
  );
}
