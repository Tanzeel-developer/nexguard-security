import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Construction Site Protection",
      desc: "Protect your sites, equipment and workforce with reliable on-site protection services.",
    },
    {
      title: "Mobile Patrols",
      desc: "Scheduled and random patrols designed to deter threats and maintain safety.",
    },
    {
      title: "Static Guards",
      desc: "Professional personnel providing access control, monitoring and site protection.",
    },
    {
      title: "Event Protection",
      desc: "Crowd management and event monitoring solutions tailored for any scale.",
    },
    {
      title: "Retail Protection",
      desc: "Reduce loss and create safer retail environments with proactive protection systems.",
    },
    {
      title: "Alarm Response",
      desc: "Rapid response solutions available around the clock for urgent incidents.",
    },
  ];

  return (
    <main className="bg-white text-zinc-900 overflow-hidden">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">

  <Image
    src="logo.svg"
    alt="NexGuard Protection"
    width={260}
    height={70}
    priority
  />

</div>

          {/* MENU */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">

            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>

            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>

            <a href="#about" className="hover:text-blue-600 transition">
              About Us
            </a>

            <a href="#advantages" className="hover:text-blue-600 transition">
              Advantages
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-2xl font-semibold shadow-xl shadow-blue-500/20">
            Get A Quote
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative h-[720px] overflow-hidden rounded-[32px] mx-6 lg:mx-10 mt-6">

  <Image
    src="/hero-image.webp"
    alt="NexGuard Protection"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />

  <div className="absolute inset-0 flex items-center">

    <div className="max-w-2xl px-10 lg:px-20">

      <p className="text-blue-600 font-semibold tracking-[0.3em] uppercase mb-6">
        Premium Protection Services
      </p>

      <h1 className="text-6xl lg:text-7xl font-black leading-[0.95] text-zinc-900 mb-8">
        Professional Protection
        <br />
        For Modern Businesses
      </h1>

      <p className="text-xl text-zinc-600 leading-relaxed mb-10">
        Reliable protection solutions for construction sites,
        commercial properties, events and retail environments.
      </p>

      <div className="flex gap-5">

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-xl">
          Get A Quote
        </button>

        <button className="border border-zinc-300 bg-white/80 backdrop-blur-md hover:border-zinc-500 transition px-8 py-4 rounded-2xl font-semibold">
          Learn More
        </button>

      </div>

    </div>

  </div>

</section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 bg-zinc-50 border-t border-zinc-200"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-blue-600 font-bold text-sm mb-5">
              Our Services
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Protection Solutions That Keep Businesses Moving
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-100 mb-8 flex items-center justify-center">

                  <div className="w-7 h-7 rounded-lg bg-blue-600" />

                </div>

                <h3 className="text-2xl font-black mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed">
                  {service.desc}
                </p>

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

            <p className="uppercase tracking-[0.35em] text-blue-600 font-bold text-sm mb-5">
              Why NexGuard
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">

              Reliable.
              <br />

              Smart.
              <br />

              <span className="text-blue-600">
                Responsive.
              </span>

            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mt-8">
              We combine trained professionals with modern reporting,
              monitoring and rapid-response systems to create dependable
              protection experiences for every client.
            </p>

            <div className="space-y-5 mt-10">

              {[
                "Highly Trained Personnel",
                "Rapid Incident Response",
                "GPS Monitoring Systems",
                "Tailored Protection Plans",
                "24/7 Operational Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-6 h-6 rounded-full bg-blue-600" />

                  <p className="font-medium text-lg">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          <div className="grid gap-6">

            {[
              "Real-Time Tracking",
              "Digital Reporting",
              "Client Dashboard",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-10"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-100 mb-6 flex items-center justify-center">

                  <div className="w-7 h-7 rounded-lg bg-blue-600" />

                </div>

                <h3 className="text-3xl font-black mb-4">
                  {item}
                </h3>

                <p className="text-zinc-600 leading-relaxed">
                  Modern systems designed for visibility, accountability and
                  operational efficiency.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-[40px] p-14 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-blue-500/20">

            <div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Need Professional Protection Services?
              </h2>

              <p className="text-blue-100 text-lg mt-5">
                Fast response. Reliable professionals. Trusted solutions.
              </p>

            </div>

            <button className="bg-white text-blue-700 hover:bg-zinc-100 transition px-8 py-5 rounded-2xl font-bold whitespace-nowrap">
              Request A Quote
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-zinc-200 py-16"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-14">

          <div>

            <div className="mb-6">

  <Image
    src="logo.svg"
    alt="NexGuard Protection"
    width={220}
    height={60}
  />

</div>

            <p className="text-zinc-600 leading-relaxed">
              Professional protection solutions designed for businesses,
              construction sites, events and commercial environments.
            </p>

          </div>

          <div>

            <h4 className="font-black text-lg mb-5">
              Quick Links
            </h4>

            <div className="space-y-3 text-zinc-600">

              <p>Home</p>
              <p>Services</p>
              <p>About Us</p>
              <p>Contact</p>

            </div>

          </div>

          <div>

            <h4 className="font-black text-lg mb-5">
              Services
            </h4>

            <div className="space-y-3 text-zinc-600">

              <p>Construction Protection</p>
              <p>Mobile Patrols</p>
              <p>Event Protection</p>
              <p>Alarm Response</p>

            </div>

          </div>

          <div>

            <h4 className="font-black text-lg mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-zinc-600">

              <p>1300 123 456</p>
              <p>info@nexguard.com.au</p>
              <p>Perth WA 6000</p>
              <p>24/7 Availability</p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}