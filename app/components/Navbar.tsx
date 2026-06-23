"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { services } from "../data/services";
import { industries } from "../data/industries";
import {
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  HardHat,
  Siren,
  HeartPulse,
  Landmark,
  Home,
  type LucideIcon,
} from "lucide-react";

const industryIconMap: Record<string, LucideIcon> = {
  "retail-commercial": ShoppingBag,
  "construction-mining": HardHat,
  "events-hospitality": Siren,
  "healthcare-education": HeartPulse,
  "government-corporate": Landmark,
  "residential-strata": Home,
};

type DropdownKey = "services" | "industries" | null;

function useDropdown() {
  const [open, setOpen] = useState<DropdownKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = useCallback((key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  }, []);

  const leave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }, []);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return { open, enter, leave, close };
}

export function Navbar() {
  const { open, enter, leave, close } = useDropdown();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#020817]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between relative">

        {/* LOGO */}
        <Link href="/" onClick={close}>
          <Image src="/logo-light.svg" alt="NexGuard Protection" width={150} height={40} priority className="block dark:hidden" />
          <Image src="/logo-dark.svg" alt="NexGuard Protection" width={150} height={40} priority className="hidden dark:block" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-zinc-300">

          <Link href="/" onClick={close} className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => enter("services")}
            onMouseLeave={leave}
          >
            <button
              onClick={() => open === "services" ? close() : enter("services")}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors ${open === "services" ? "text-blue-600 dark:text-cyan-400 bg-slate-50 dark:bg-white/5" : ""}`}
              aria-expanded={open === "services"}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "services" ? "rotate-180" : ""}`} />
            </button>

            {/* SERVICES MEGA MENU */}
            <div
              onMouseEnter={() => enter("services")}
              onMouseLeave={leave}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] transition-all duration-200 origin-top ${
                open === "services"
                  ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {/* Arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-[#0d1829] border-l border-t border-slate-200 dark:border-white/10" />

              <div className="relative bg-white dark:bg-[#0d1829] border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-2">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={close}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-100 dark:group-hover:bg-blue-600/20 transition-colors">
                          <service.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                            {service.title}
                          </p>
                          <p className="text-xs text-slate-400 dark:text-zinc-500 mt-0.5 leading-relaxed line-clamp-2">
                            {service.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer bar */}
                <div className="px-4 py-3 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <p className="text-xs text-slate-400 dark:text-zinc-500">Fully licensed · Police checked · 24/7 Perth WA</p>
                  <Link
                    href="/#services"
                    onClick={close}
                    className="text-xs font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1 hover:underline"
                  >
                    All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* INDUSTRIES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => enter("industries")}
            onMouseLeave={leave}
          >
            <button
              onClick={() => open === "industries" ? close() : enter("industries")}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors ${open === "industries" ? "text-blue-600 dark:text-cyan-400 bg-slate-50 dark:bg-white/5" : ""}`}
              aria-expanded={open === "industries"}
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "industries" ? "rotate-180" : ""}`} />
            </button>

            {/* INDUSTRIES MEGA MENU */}
            <div
              onMouseEnter={() => enter("industries")}
              onMouseLeave={leave}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] transition-all duration-200 origin-top ${
                open === "industries"
                  ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {/* Arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-[#0d1829] border-l border-t border-slate-200 dark:border-white/10" />

              <div className="relative bg-white dark:bg-[#0d1829] border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-2">
                  <div className="grid grid-cols-2 gap-1">
                    {industries.map((industry) => {
                      const Icon = industryIconMap[industry.slug] ?? ShoppingBag;
                      return (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          onClick={close}
                          className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-600/20 transition-colors">
                            <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                            {industry.title}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Footer bar */}
                <div className="px-4 py-3 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <p className="text-xs text-slate-400 dark:text-zinc-500">Tailored security for every sector in Perth WA</p>
                  <Link
                    href="/#industries"
                    onClick={close}
                    className="text-xs font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1 hover:underline"
                  >
                    All Industries <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/#advantages" onClick={close} className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Why Us
          </Link>
          <Link href="/contact" onClick={close} className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white transition-colors px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Get a Quote
          </Link>
          <MobileMenu />
        </div>

      </div>
    </nav>
  );
}
