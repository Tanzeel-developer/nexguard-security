import Image from "next/image";

import {
  ShieldCheck,
  Building2,
  Siren,
  Users,
  Store,
  BellRing,
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
    icon: BellRing,
    image: "/alarmresponse.png",
  },
];

  return (
    <main className="bg-[#020817] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#020817]/80 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

          <Image
            src="/logo.svg"
            alt="NexGuard"
            width={170}
            height={45}
            priority
          />

          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-zinc-300">

            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About Us
            </a>

            <a href="#advantages" className="hover:text-cyan-400 transition">
              Our Advantage
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-4 lg:px-7 py-3 rounded-2xl text-sm lg:text-base font-semibold shadow-2xl shadow-blue-500/30">
            Get A Quote
          </button>

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

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
              Reliable Security. Trusted Service.
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8 uppercase">

              Securing Whats

              <br />

              <span className="text-blue-500">
                Next.
              </span>

            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mb-10">
              Nexguard Protection is a Western Australia-based, fully licensed security company delivering professional security services across WA. From retail and commercial properties to construction sites and events, we provide dependable security solutions backed by professionalism, integrity, and a commitment to keeping people and assets secure.
            </p>

            <div className="flex flex-wrap gap-5">

              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-5 rounded-2xl font-semibold flex items-center gap-3">

                Get A Quote

                <ArrowRight className="w-5 h-5" />

              </button>

              <button className="border border-white/15 bg-white/5 hover:bg-white/10 transition px-8 py-5 rounded-2xl font-semibold">
                Call Now — 24/7
              </button>

            </div>

          </div>

          {/* FEATURE BAR */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-20">

            {[
              "Fully Licensed",
              "Police Checked",
              "Fully Insured",
              "24/7 Service",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-4"
              >

                <ShieldCheck className="w-8 h-8 text-cyan-400" />

                <div>

                  <p className="font-bold">
                    {item}
                  </p>

                  <p className="text-sm text-zinc-400">
                    Professional Protection
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 bg-[#050B1A]"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold text-sm mb-5">
              Our Services
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">
              Security Solutions That Protect What Matters
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-cyan-500/40"
              >

                <div className="h-52 relative">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-8 flex items-center justify-center">

                    <service.icon className="w-8 h-8 text-blue-500" />

                  </div>

                  <h3 className="text-2xl font-black mb-4 uppercase">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ADVANTAGES */}
      <section
        id="advantages"
        className="py-28"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold text-sm mb-5">
              Why Choose NexGuard
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">

              Your Safety.
              <br />

              <span className="text-blue-500">
                Our Priority.
              </span>

            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              We combine professional guards with smart systems to deliver
              reliable, accountable and proactive protection.
            </p>

            <div className="space-y-5 mt-10">

              {[
                "Highly Trained Guards",
                "GPS Tracking & Reporting",
                "Real-Time Incident Updates",
                "Tailored Protection Plans",
                "24/7 Operational Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />

                  <p className="font-medium text-lg">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          <div className="grid gap-6">

            {[
              {
                title: "Live Guard Tracking",
                icon: Radar,
              },
              {
                title: "Instant Reports",
                icon: FileText,
              },
              {
                title: "Client Portal",
                icon: MonitorSmartphone,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6 flex items-center justify-center">

                  <item.icon className="w-8 h-8 text-cyan-400" />

                </div>

                <h3 className="text-3xl font-black mb-4 uppercase">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Modern systems designed for visibility and operational efficiency.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-28 bg-[#050B1A]">

        <div className="max-w-4xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold text-sm mb-5">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">
              Contact Us
            </h2>

            <p className="text-zinc-400 text-lg mt-5">
              Fill out the form below and our team will get back to you shortly.
            </p>

          </div>

          <form className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10 grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-300">Full Name</label>
              <input
                type="text"
                placeholder="John Smith"
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-300">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-300">Phone Number</label>
              <input
                type="tel"
                placeholder="+61 000 000 000"
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-300">Service Required</label>
              <select className="bg-[#0a1628] border border-white/10 rounded-xl px-5 py-4 text-zinc-300 focus:outline-none focus:border-cyan-500 transition">
                <option value="">Select a service...</option>
                <option value="construction">Construction Site Security</option>
                <option value="patrols">Mobile Patrols</option>
                <option value="static">Static Guards</option>
                <option value="events">Event Protection</option>
                <option value="retail">Retail Security</option>
                <option value="parties">Private Parties</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-zinc-300">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your security needs..."
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 py-20 bg-[#030712]"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-14">

          <div>

            <Image
              src="/logo.svg"
              alt="NexGuard"
              width={220}
              height={60}
            />

            <p className="text-zinc-400 leading-relaxed mt-6">
              Professional protection solutions for businesses, construction sites and events.
            </p>

          </div>

          <div>

            <h4 className="font-black text-lg mb-5 uppercase">
              Quick Links
            </h4>

            <div className="space-y-3 text-zinc-400">

              <p>Home</p>
              <p>Services</p>
              <p>About Us</p>
              <p>Contact</p>

            </div>

          </div>

          <div>

            <h4 className="font-black text-lg mb-5 uppercase">
              Services
            </h4>

            <div className="space-y-3 text-zinc-400">

              <p>Construction Protection</p>
              <p>Mobile Patrols</p>
              <p>Event Protection</p>
              <p>Alarm Response</p>

            </div>

          </div>

          <div>

            <h4 className="font-black text-lg mb-5 uppercase">
              Contact
            </h4>

            <div className="space-y-4 text-zinc-400">

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <p>+61 491 215 175</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <p>Info@nexguard.au</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <p>Perth WA 6000</p>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="w-5 h-5 text-cyan-400" />
                <p>24/7 Availability</p>
              </div>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}