import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";
import { services } from "./data/services";

import {
  ShieldCheck,
  Siren,
  CheckCircle2,
  ArrowRight,
  Phone,
  HardHat,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Home,
} from "lucide-react";

export default function HomePage() {
  const industries = [
    { title: "Retail & Commercial", icon: ShoppingBag, slug: "retail-commercial" },
    { title: "Construction & Industrial", icon: HardHat, slug: "construction-mining" },
    { title: "Events & Hospitality", icon: Siren, slug: "events-hospitality" },
    { title: "Healthcare & Education", icon: HeartPulse, slug: "healthcare-education" },
    { title: "Government & Corporate", icon: Landmark, slug: "government-corporate" },
    { title: "Residential & Strata", icon: Home, slug: "residential-strata" },
  ];

  const stats = [
    { value: "24/7", label: "Always Available" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "Perth", label: "WA Based & Operated" },
    { value: "Fast", label: "Rapid Response Time" },
  ];


  return (
    <main id="main-content" className="bg-white dark:bg-[#020817] text-slate-900 dark:text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
        <Image src="/hero-v3.webp" alt="NexGuard Protection Perth Security" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.18),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
          <div className="max-w-2xl">

            <p className="tracking-widest text-cyan-400 font-medium text-sm mb-5 uppercase">
              Perth WA — Reliable Security. Trusted Service.
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Securing What&apos;s{" "}
              <span className="text-blue-400">Next.</span>
            </h1>

            <p className="text-slate-300 text-base leading-relaxed mb-10">
              The best security isn&apos;t what reacts, it&apos;s what prevents. NexGuard Protection delivers experienced, professional security guards across Western Australia, protecting businesses, people and assets with professionalism, integrity and reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+61491215175"
                className="border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us 24/7
              </a>
            </div>

          </div>

          {/* TRUST BADGES */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
            {[
              { label: "Fully Licensed", sub: "WA Security Licence Holders" },
              { label: "Police Checked", sub: "All Guards Vetted & Cleared" },
              { label: "Fully Insured", sub: "Complete Liability Coverage" },
              { label: "24/7 Response", sub: "On Call Around the Clock" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center gap-4">
                <ShieldCheck className="w-7 h-7 text-cyan-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm">{item.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-blue-600 dark:bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              Security Solutions That Protect What Matters
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              Professional, licensed security services across Perth and Western Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg dark:hover:border-cyan-500/30 hover:border-blue-200 flex flex-col"
              >
                <div className="h-44 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 mb-4 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-cyan-400 group-hover:gap-2.5 transition-all">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              Protecting Every Sector Across Perth
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              We tailor our security solutions to the unique needs of each industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((item, index) => (
              <Link
                key={index}
                href={`/industries/${item.slug}`}
                className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-blue-300 dark:hover:border-cyan-500/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-zinc-200 leading-tight">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Why Choose NexGuard
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              Your Safety.{" "}
              <span className="text-blue-600 dark:text-blue-400">Our Priority.</span>
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              We are a Perth-based, locally owned and operated security company. Unlike large national
              chains, we give every client direct access to our management team, tailored security plans
              and rapid response — every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Fully Licensed WA Security Professionals", desc: "Every guard holds a current WA security licence — fully compliant and legally authorised." },
              { title: "Detailed Shift & Incident Reporting", desc: "Digital reports delivered after every shift or incident — giving you full transparency and a clear record." },
              { title: "Tailored Security Plans for Every Client", desc: "No one-size-fits-all. We assess your site and build a plan around your specific needs." },
              { title: "Reliable Response, Day or Night", desc: "We take every call seriously. When you need us, we act — day or night, weekdays or weekends." },
              { title: "24/7 Operational Support & Communication", desc: "Our operations team is reachable around the clock, keeping you informed when it matters." },
              { title: "Perth-Based Team with Local Knowledge", desc: "We know Perth. Our local expertise means smarter security decisions for your area." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-300 dark:hover:border-cyan-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{item.title}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              What You Can Expect From NexGuard
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              Every client, every site, every shift — the same standard of professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "A Response, Not Just a Quote", desc: "When you contact us, you speak to someone who understands security — not a call centre. We assess your needs and come back with a real plan." },
              { title: "Guards Who Know the Job", desc: "Our officers are licensed, vetted and briefed on your site's requirements prior to deployment. Professional standards, every engagement." },
              { title: "Transparent Shift & Incident Reporting", desc: "We provide written reports after shifts and incidents — so you have a clear record of activity on your site or at your event." },
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-7">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 mb-5 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COVERAGE AREA */}
      <section className="py-16 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
            Service Areas
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Serving Perth & All of Western Australia
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 text-base max-w-2xl mx-auto mb-8">
            We provide security services across the entire Perth metro area and regional WA including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Perth CBD", "Fremantle", "Joondalup", "Rockingham",
              "Mandurah", "Midland", "Armadale", "Stirling",
              "Subiaco", "Cannington", "Osborne Park", "Regional WA",
            ].map((area, index) => (
              <span
                key={index}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-12">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              Request a Free Quote
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              Fill out the form below and our team will be in touch shortly.
            </p>
          </div>

          <ContactForm />

        </div>
      </section>

      <Footer />

    </main>
  );
}
