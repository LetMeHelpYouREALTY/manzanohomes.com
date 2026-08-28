"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("We could not send that message. Call (702) 500-1942 and we will help you now.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-900">Message sent</h3>
        <p className="mt-2 text-green-800">
          We will reply within one business day. For a faster reply, call (702) 500-1942.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-800">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-800">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-primary-600 px-4 py-3 font-semibold text-white hover:bg-primary-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
