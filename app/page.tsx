import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";

import {
  ShieldCheck,
  Building2,
  Siren,
  Users,
  Store,
  PartyPopper,
  CheckCircle2,
  MonitorSmartphone,
  FileText,
  Radar,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Construction Site Security",
      desc: "Protect your sites, equipment and workforce from theft and unauthorised access.",
      icon: Building2,
      image: "/construction.png",
    },
    {
      title: "Mobile Patrols",
      desc: "Visible deterrence with random or scheduled patrols to keep sites secure.",
      icon: ShieldCheck,
      image: "/patrol.png",
    },
    {
      title: "Static Guards",
      desc: "Professional on-site guards providing access control and monitoring.",
      icon: Users,
      image: "/staticguards.png",
    },
    {
      title: "Event Protection",
      desc: "Crowd management and safety protection for events of any scale.",
      icon: Siren,
      image: "/hero-v2.webp",
    },
    {
      title: "Retail Security",
      desc: "Reduce theft and shrinkage with proactive in-store protection.",
      icon: Store,
      image: "/retail.png",
    },
    {
      title: "Private Parties",
      desc: "Professional security for private events, parties and gatherings of any size.",
      icon: PartyPopper,
      image: "/alarmresponse.png",
    },
  ];

  return (
    <main className="bg-white dark:bg-[#020817] text-slate-900 dark:text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#020817]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <Image
            src="/logo.svg"
            alt="NexGuard"
            width={150}
            height={40}
            priority
          />

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-zinc-300">
            <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#advantages" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Our Advantage</a>
            <a href="#contact-form" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact-form"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Get a Quote
            </a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">

        <Image
          src="/hero-v2.webp"
          alt="Security"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.18),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">

          <div className="max-w-2xl">

            <p className="tracking-widest text-cyan-400 font-medium text-sm mb-5 uppercase">
              Reliable Security. Trusted Service.
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Securing What&apos;s{" "}
              <span className="text-blue-400">Next.</span>
            </h1>

            <p className="text-slate-300 text-base leading-relaxed mb-10">
              Nexguard Protection is a Western Australia-based, fully licensed security company
              delivering professional security services across WA. From retail and commercial
              properties to construction sites and events, we provide dependable security solutions
              backed by professionalism, integrity, and a commitment to keeping people and assets secure.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+61491215175"
                className="border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors px-7 py-3.5 rounded-lg font-semibold"
              >
                Call Now — 24/7
              </a>
            </div>

          </div>

          {/* FEATURE BAR */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
            {[
              "Fully Licensed",
              "Police Checked",
              "Fully Insured",
              "24/7 Service",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center gap-4"
              >
                <ShieldCheck className="w-7 h-7 text-cyan-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm">{item}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Professional Protection</p>
                </div>
              </div>
            ))}
          </div>

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
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg dark:hover:border-cyan-500/30 hover:border-blue-200"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 mb-5 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Why Choose NexGuard
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              Your Safety.{" "}
              <span className="text-blue-600 dark:text-blue-400">Our Priority.</span>
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base leading-relaxed mt-6">
              We combine professional guards with smart systems to deliver reliable,
              accountable and proactive protection.
            </p>
            <div className="space-y-4 mt-8">
              {[
                "Highly Trained Guards",
                "GPS Tracking & Reporting",
                "Real-Time Incident Updates",
                "Tailored Protection Plans",
                "24/7 Operational Support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <p className="font-medium text-slate-700 dark:text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Live Guard Tracking", icon: Radar, desc: "Real-time GPS visibility over all active guards and patrol routes." },
              { title: "Instant Reports", icon: FileText, desc: "Automated incident reports delivered immediately after any event." },
              { title: "Client Portal", icon: MonitorSmartphone, desc: "Access logs, reports and guard activity from any device, anytime." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-7 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-100 dark:border-cyan-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-24 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-12">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              Contact Us
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <form className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Full Name</label>
              <input
                type="text"
                placeholder="John Smith"
                className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Phone Number</label>
              <input
                type="tel"
                placeholder="+61 000 000 000"
                className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Service Required</label>
              <select className="bg-slate-50 dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-700 dark:text-zinc-300 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors">
                <option value="">Select a service...</option>
                <option value="construction">Construction Site Security</option>
                <option value="patrols">Mobile Patrols</option>
                <option value="static">Static Guards</option>
                <option value="events">Event Protection</option>
                <option value="retail">Retail Security</option>
                <option value="parties">Private Parties</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your security needs..."
                className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-200 dark:border-white/10 py-16 bg-white dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12">

          <div>
            <Image
              src="/logo.svg"
              alt="NexGuard"
              width={160}
              height={42}
            />
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mt-5">
              Professional security solutions for businesses, construction sites and events across Western Australia.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Quick Links</h4>
            <div className="space-y-2.5 text-sm text-slate-500 dark:text-zinc-400">
              <p><a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</a></p>
              <p><a href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</a></p>
              <p><a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About Us</a></p>
              <p><a href="#contact-form" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Services</h4>
            <div className="space-y-2.5 text-sm text-slate-500 dark:text-zinc-400">
              <p>Construction Site Security</p>
              <p>Mobile Patrols</p>
              <p>Event Protection</p>
              <p>Retail Security</p>
              <p>Private Parties</p>
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

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-slate-100 dark:border-white/5">
          <p className="text-xs text-slate-400 dark:text-zinc-600 text-center">
            © {new Date().getFullYear()} NexGuard Protection. All rights reserved.
          </p>
        </div>

      </footer>

    </main>
  );
}
