import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";
import { MobileMenu } from "./components/MobileMenu";

import {
  ShieldCheck,
  Building2,
  Siren,
  Users,
  Store,
  PartyPopper,
  BellRing,
  Briefcase,
  CheckCircle2,
  MonitorSmartphone,
  FileText,
  Radar,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Star,
  HardHat,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Home,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      title: "Construction Site Security",
      desc: "Protect your sites, equipment and workforce from theft and unauthorised access.",
      icon: Building2,
      image: "/construction.png",
    },
    {
      title: "Mobile Patrols",
      desc: "Visible deterrence with random or scheduled patrols to keep your property secure around the clock.",
      icon: ShieldCheck,
      image: "/patrol.png",
    },
    {
      title: "Static Guards",
      desc: "Professional on-site guards providing access control, monitoring and a visible security presence.",
      icon: Users,
      image: "/staticguards.png",
    },
    {
      title: "Event Security & Crowd Control",
      desc: "Crowd management, access control and safety planning for events of any scale across Perth.",
      icon: Siren,
      image: "/hero-v2.webp",
    },
    {
      title: "Retail Security & Loss Prevention",
      desc: "Reduce theft and shrinkage with proactive in-store protection and loss prevention strategies.",
      icon: Store,
      image: "/retail.png",
    },
    {
      title: "Alarm Response",
      desc: "Fast 24/7 response to alarm activations and urgent security incidents across the Perth metro area.",
      icon: BellRing,
      image: "/alarmresponse.png",
    },
    {
      title: "Concierge & Corporate Security",
      desc: "Professional front-of-house security for office buildings, hotels, strata and corporate campuses.",
      icon: Briefcase,
      image: "/staticguards.png",
    },
    {
      title: "Private Parties & Functions",
      desc: "Experienced security personnel for private events, parties and social gatherings of any size.",
      icon: PartyPopper,
      image: "/alarmresponse.png",
    },
  ];

  const industries = [
    { title: "Retail & Commercial", icon: ShoppingBag },
    { title: "Construction & Mining", icon: HardHat },
    { title: "Events & Hospitality", icon: Siren },
    { title: "Healthcare & Education", icon: HeartPulse },
    { title: "Government & Corporate", icon: Landmark },
    { title: "Residential & Strata", icon: Home },
  ];

  const stats = [
    { value: "24/7", label: "Always Available" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "Perth", label: "WA Based & Operated" },
    { value: "Fast", label: "Rapid Response Time" },
  ];

  const testimonials = [
    {
      name: "James R.",
      role: "Construction Project Manager",
      text: "NexGuard has been protecting our construction sites across Perth for months. Professional, reliable and always on time. Highly recommended.",
      stars: 5,
    },
    {
      name: "Sarah M.",
      role: "Event Organiser",
      text: "We used NexGuard for crowd control at our annual gala. Their team was calm, professional and handled everything flawlessly.",
      stars: 5,
    },
    {
      name: "David K.",
      role: "Retail Store Owner",
      text: "Since hiring NexGuard for our store, theft has dropped significantly. Their guards are visible, proactive and great with customers.",
      stars: 5,
    },
  ];

  return (
    <main className="bg-white dark:bg-[#020817] text-slate-900 dark:text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#020817]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between relative">

          <div className="bg-[#020817] dark:bg-transparent rounded-lg px-3 py-1.5 dark:px-0 dark:py-0">
            <Image src="/logo.svg" alt="NexGuard Protection" width={150} height={40} priority />
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-zinc-300">
            <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</a>
            <a href="#industries" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Industries</a>
            <a href="#advantages" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Why Us</a>
            <a href="#contact-form" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact-form"
              className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white transition-colors px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Get a Quote
            </a>
            <MobileMenu />
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <Image src="/hero-v2.webp" alt="NexGuard Protection Perth Security" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.18),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
          <div className="max-w-2xl">

            <p className="tracking-widest text-cyan-400 font-medium text-sm mb-5 uppercase">
              Perth WA — Reliable Security. Trusted Service.
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Securing What&apos;s{" "}
              <span className="text-blue-400">Next.</span>
            </h1>

            <p className="text-slate-300 text-base leading-relaxed mb-10">
              NexGuard Protection is a fully licensed, Perth-based security company delivering
              professional security services across Western Australia. From construction sites and
              retail stores to corporate events and private functions — we protect what matters most
              with professionalism, integrity and rapid response.
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
              { label: "24/7 Response", sub: "Always On Call for You" },
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
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg dark:hover:border-cyan-500/30 hover:border-blue-200"
              >
                <div className="h-44 relative">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 mb-4 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
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
              <div
                key={index}
                className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-blue-300 dark:hover:border-cyan-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-zinc-200 leading-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-slate-50 dark:bg-[#050B1A]">
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
              We are a Perth-based, locally owned and operated security company. Unlike large national
              chains, we give every client direct access to our management team, tailored security plans
              and rapid response — every time.
            </p>
            <div className="space-y-4 mt-8">
              {[
                "Fully Licensed WA Security Professionals",
                "GPS Tracked Guards & Real-Time Reporting",
                "Tailored Security Plans for Every Client",
                "Rapid Response — No Delays, No Excuses",
                "24/7 Operational Support & Communication",
                "Perth-Based Team with Local Knowledge",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <p className="font-medium text-slate-700 dark:text-zinc-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Live Guard Tracking", icon: Radar, desc: "Real-time GPS visibility over all active guards and patrol routes so you always know what's happening." },
              { title: "Instant Incident Reports", icon: FileText, desc: "Automated reports delivered immediately after any incident — full transparency, every time." },
              { title: "Client Dashboard", icon: MonitorSmartphone, desc: "Access guard logs, incident reports and patrol activity from any device, at any time." },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-100 dark:border-cyan-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
              Trusted by Businesses Across Perth
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-7">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-slate-400 dark:text-zinc-500 text-xs mt-0.5">{t.role}</p>
                </div>
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
              Fill out the form below and our team will get back to you within 2 hours.
            </p>
          </div>

          <form className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Full Name</label>
              <input type="text" placeholder="John Smith"
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Email Address</label>
              <input type="email" placeholder="john@example.com"
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Phone Number</label>
              <input type="tel" placeholder="+61 000 000 000"
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Service Required</label>
              <select className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-700 dark:text-zinc-300 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors">
                <option value="">Select a service...</option>
                <option value="construction">Construction Site Security</option>
                <option value="patrols">Mobile Patrols</option>
                <option value="static">Static Guards</option>
                <option value="events">Event Security & Crowd Control</option>
                <option value="retail">Retail Security & Loss Prevention</option>
                <option value="alarm">Alarm Response</option>
                <option value="concierge">Concierge & Corporate Security</option>
                <option value="parties">Private Parties & Functions</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Message</label>
              <textarea rows={5} placeholder="Tell us about your security needs, location and any specific requirements..."
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors resize-none" />
            </div>

            <div className="md:col-span-2">
              <button type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-slate-400 dark:text-zinc-500 mt-3">
                We respond within 2 hours. Available 24/7 for urgent enquiries.
              </p>
            </div>

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-200 dark:border-white/10 py-16 bg-slate-50 dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12">

          <div>
            <div className="bg-[#020817] dark:bg-transparent rounded-lg px-3 py-2 dark:px-0 dark:py-0 inline-block">
              <Image src="/logo.svg" alt="NexGuard Protection" width={140} height={38} />
            </div>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mt-5">
              Perth&apos;s trusted security partner. Fully licensed, police checked and insured security services across Western Australia.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Quick Links</h4>
            <div className="space-y-2.5 text-sm text-slate-500 dark:text-zinc-400">
              <p><a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</a></p>
              <p><a href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</a></p>
              <p><a href="#industries" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Industries</a></p>
              <p><a href="#advantages" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Why NexGuard</a></p>
              <p><a href="#contact-form" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Services</h4>
            <div className="space-y-2.5 text-sm text-slate-500 dark:text-zinc-400">
              <p>Construction Site Security</p>
              <p>Mobile Patrols</p>
              <p>Static Guards</p>
              <p>Event Security & Crowd Control</p>
              <p>Retail Security & Loss Prevention</p>
              <p>Alarm Response</p>
              <p>Concierge & Corporate Security</p>
              <p>Private Parties & Functions</p>
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

    </main>
  );
}
