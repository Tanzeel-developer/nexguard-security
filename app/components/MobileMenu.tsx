"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "../data/services";
import { industries } from "../data/industries";
import {
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

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

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
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-[#020817] border-b border-slate-200 dark:border-white/10 shadow-xl z-40 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 flex flex-col gap-1">

            <Link
              href="/"
              onClick={close}
              className="py-3 px-3 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors"
            >
              Home
            </Link>

            {/* SERVICES ACCORDION */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full flex items-center justify-between py-3 px-3 text-sm font-medium rounded-xl transition-colors ${
                  servicesOpen
                    ? "text-blue-600 dark:text-cyan-400 bg-slate-50 dark:bg-white/5"
                    : "text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="mt-1 ml-3 border-l-2 border-blue-100 dark:border-blue-500/20 pl-3 flex flex-col gap-0.5">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={close}
                      className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                        <service.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors font-medium">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* INDUSTRIES ACCORDION */}
            <div>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className={`w-full flex items-center justify-between py-3 px-3 text-sm font-medium rounded-xl transition-colors ${
                  industriesOpen
                    ? "text-blue-600 dark:text-cyan-400 bg-slate-50 dark:bg-white/5"
                    : "text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5"
                }`}
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              {industriesOpen && (
                <div className="mt-1 ml-3 border-l-2 border-blue-100 dark:border-blue-500/20 pl-3 flex flex-col gap-0.5">
                  {industries.map((industry) => {
                    const Icon = industryIconMap[industry.slug] ?? ShoppingBag;
                    return (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={close}
                        className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-md bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm text-slate-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors font-medium">
                          {industry.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/#advantages"
              onClick={close}
              className="py-3 px-3 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors"
            >
              Why Us
            </Link>

            <Link
              href="/contact"
              onClick={close}
              className="py-3 px-3 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors"
            >
              Contact
            </Link>

            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                onClick={close}
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center transition-colors px-5 py-3 rounded-xl text-sm font-semibold"
              >
                Get a Free Quote
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
