"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const CONTACT_EMAIL = "thedevspark@gmail.com";

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _subject: `Portfolio Inquiry: ${form.subject.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = (await response.json()) as { success?: string | boolean; message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          text: result.message ?? "Message send nahi ho saka. Dobara try karein.",
        });
        return;
      }

      setStatus({
        type: "success",
        text: "Message sent! Main aapko jaldi reply karunga.",
      });
      setForm(INITIAL_FORM);
    } catch {
      setStatus({
        type: "error",
        text: "Network issue aya hai. Please thori dair baad try karein.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="site-container section-space">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.26em] text-emerald-300 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
            Contact
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Let’s create something unforgettable.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            If you want a sleek portfolio, a new personal brand site, or a
            polished product landing page, I’m ready to help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_0_50px_rgba(16,185,129,0.08)] backdrop-blur sm:rounded-4xl sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
              required
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-emerald-300/50"
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
              required
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-emerald-300/50"
              placeholder="Email address"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={(event) => setForm((previous) => ({ ...previous, subject: event.target.value }))}
            required
            className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-emerald-300/50"
            placeholder="Project subject"
          />
          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) => setForm((previous) => ({ ...previous, message: event.target.value }))}
            required
            className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-emerald-300/50"
            placeholder="Tell me about your idea"
          />

          {status ? (
            <p
              className={`mt-4 text-sm ${
                status.type === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
              role="status"
            >
              {status.text}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-2xl bg-linear-to-r from-emerald-300 to-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
