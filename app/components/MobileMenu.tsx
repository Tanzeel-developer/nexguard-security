"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Why Us", href: "/#advantages" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="absolute top-20 left-0 right-0 bg-white dark:bg-[#020817] border-b border-slate-200 dark:border-white/10 px-6 py-4 flex flex-col gap-1 shadow-lg">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 border-b border-slate-100 dark:border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-center transition-colors px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Get a Quote
          </a>
        </div>
      )}
    </div>
  );
}
