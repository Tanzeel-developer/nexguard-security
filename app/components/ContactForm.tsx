"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FORMSPREE_ID = "mjgdjwkg";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Message Sent!
          </h3>
          <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
            Thank you for reaching out. Our team will get back to you shortly.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-blue-600 dark:text-cyan-400 font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="John Smith"
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="john@example.com"
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+61 000 000 000"
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
          Service Required
        </label>
        <select
          name="service"
          className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-700 dark:text-zinc-300 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
        >
          <option value="">Select a service...</option>
          <option value="Construction Site Security">Construction Site Security</option>
          <option value="Mobile Patrols">Mobile Patrols</option>
          <option value="Static Guards">Static Guards</option>
          <option value="Event Security & Crowd Control">Event Security & Crowd Control</option>
          <option value="Retail Security & Loss Prevention">Retail Security & Loss Prevention</option>
          <option value="Alarm Response">Alarm Response</option>
          <option value="Concierge & Corporate Security">Concierge & Corporate Security</option>
          <option value="Private Parties & Functions">Private Parties & Functions</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your security needs, location and any specific requirements..."
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="md:col-span-2 flex items-center gap-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
          <p className="text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again or call us at +61 491 215 175.
          </p>
        </div>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-colors px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs text-center text-slate-400 dark:text-zinc-500 mt-3">
          We respond promptly. Available 24/7 for urgent enquiries.
        </p>
      </div>
    </form>
  );
}
