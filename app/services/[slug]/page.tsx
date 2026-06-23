import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { services, getServiceBySlug } from "../../data/services";
import { ArrowRight, CheckCircle2, Phone, ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `https://www.nexguard.au/services/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Nexguard Protection Security",
      telephone: "+61491215175",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressRegion: "WA",
        addressCountry: "AU",
      },
    },
    areaServed: { "@type": "City", name: "Perth" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="bg-white dark:bg-[#020817] text-slate-900 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[340px] md:h-[420px]">
          <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-10 w-full">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-300 mb-4">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/#services" className="hover:text-cyan-400 transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{service.title}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              {service.heroTagline}
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {service.intro.map((para, i) => (
            <p key={i} className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed mb-5">
              {para}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+61491215175"
              className="border border-slate-200 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us 24/7
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              {service.title} Benefits
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-300 dark:hover:border-cyan-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{b.title}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              Our Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="relative">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{p.step}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Explore More
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              Related Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg dark:hover:border-cyan-500/30 hover:border-blue-200"
              >
                <div className="h-40 relative">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-cyan-400 group-hover:gap-2.5 transition-all">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Secure Your {service.title.includes("Site") || service.title.includes("Property") ? "Property" : "Business"}?
          </h2>
          <p className="text-blue-100 text-base mb-8">
            Get a free, no-obligation quote from Perth&apos;s trusted security team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-blue-700 transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+61491215175"
              className="border border-white/30 hover:bg-white/10 text-white transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us 24/7
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
