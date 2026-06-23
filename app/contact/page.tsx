import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Nexguard Protection Security - Perth",
  description:
    "Get in touch with Nexguard Protection Security for professional security guards service across Perth, WA. Call 24/7 or request a free quote online.",
  alternates: { canonical: "https://www.nexguard.au/contact" },
  openGraph: {
    title: "Contact Nexguard Protection Security - Perth",
    description:
      "Get in touch with Nexguard Protection Security for professional security guards service across Perth, WA. Call 24/7 or request a free quote online.",
    url: "https://www.nexguard.au/contact",
    locale: "en_AU",
    type: "website",
  },
};

const serviceAreas = [
  "Perth CBD", "Fremantle", "Joondalup", "Rockingham",
  "Mandurah", "Midland", "Armadale", "Stirling",
  "Subiaco", "Cannington", "Osborne Park", "Regional WA",
];

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-[#020817] text-slate-900 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#020817] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="tracking-widest text-cyan-400 font-medium text-xs uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Contact Perth&apos;s Trusted Security Team
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Whether you need a free quote, have a question about our services, or require urgent
            security support, our Perth-based team is available 24/7.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">

          {/* Info column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Call Us 24/7</h3>
                <a href="tel:+61491215175" className="text-slate-500 dark:text-zinc-400 text-sm hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  +61 491 215 175
                </a>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Email Us</h3>
                <a href="mailto:Info@nexguard.au" className="text-slate-500 dark:text-zinc-400 text-sm hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Info@nexguard.au
                </a>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Based In</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm">Perth, WA 6000</p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                <Clock3 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Availability</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm">24/7, including weekends and public holidays</p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-300 text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug mb-3">
                Request a Free Quote
              </h2>
              <p className="text-slate-500 dark:text-zinc-400 text-base">
                Fill out the form below and our team will get back to you within 2 hours.
              </p>
            </div>
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
