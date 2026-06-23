import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { services } from "../data/services";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-16 bg-slate-50 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12">

        <div>
          <Link href="/" className="inline-block">
            <Image src="/logo-light.svg" alt="NexGuard Protection" width={140} height={38} className="block dark:hidden" />
            <Image src="/logo-dark.svg" alt="NexGuard Protection" width={140} height={38} className="hidden dark:block" />
          </Link>
          <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mt-5">
            Perth&apos;s trusted security partner. Fully licensed, police checked and insured security services across Western Australia.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Quick Links</h4>
          <div className="space-y-2.5 text-sm text-slate-500 dark:text-zinc-400">
            <p><Link href="/" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</Link></p>
            <p><Link href="/#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</Link></p>
            <p><Link href="/#industries" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Industries</Link></p>
            <p><Link href="/#advantages" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Why NexGuard</Link></p>
            <p><Link href="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</Link></p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Services</h4>
          <div className="space-y-2.5 text-sm text-slate-500 dark:text-zinc-400">
            {services.map((service) => (
              <p key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  {service.title}
                </Link>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-slate-500 dark:text-zinc-400">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
              <a href="tel:+61491215175" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">+61 491 215 175</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
              <a href="mailto:Info@nexguard.au" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Info@nexguard.au</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
              <p>Perth WA 6000</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
              <p>24/7 Availability</p>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-slate-200 dark:border-white/5">
        <p className="text-xs text-slate-400 dark:text-zinc-600 text-center">
          © {new Date().getFullYear()} NexGuard Protection. All rights reserved. | Perth, Western Australia
        </p>
      </div>

    </footer>
  );
}
