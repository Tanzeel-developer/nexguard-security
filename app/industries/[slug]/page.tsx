import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";
import { industries, getIndustryBySlug } from "../../data/industries";
import { services } from "../../data/services";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const url = `https://www.nexguard.au/industries/${industry.slug}`;

  return {
    title: industry.seoTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: industry.seoTitle,
      description: industry.metaDescription,
      url,
      images: [{ url: industry.image, width: 1200, height: 630, alt: industry.title }],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.seoTitle,
      description: industry.metaDescription,
      images: [industry.image],
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const relatedServices = services.filter((s) =>
    industry.relatedServiceSlugs.includes(s.slug)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.title,
    serviceType: industry.title,
    description: industry.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "NexGuard Protection",
      telephone: "+61491215175",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressRegion: "WA",
        addressCountry: "AU",
      },
    },
    areaServed: { "@type": "State", name: "Western Australia" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
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
        <div className="relative h-[380px] md:h-[480px]">
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.2),transparent_60%)]" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-300 mb-5">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/#industries" className="hover:text-cyan-400 transition-colors">Industries</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{industry.title}</span>
            </nav>

            <span className="inline-block bg-blue-600/80 backdrop-blur-sm text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
              {industry.heroBadge}
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-5">
              {industry.heroTagline}
            </h1>

            <p className="text-slate-300 text-base max-w-xl leading-relaxed mb-8">
              {industry.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#quote-form"
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
                Call 24/7
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-blue-600 dark:bg-blue-700 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {industry.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
                Who We Protect
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug mb-6">
                Security Built for{" "}
                <span className="text-blue-600 dark:text-blue-400">Your Industry</span>
              </h2>
              <div className="space-y-5">
                {industry.intro.map((para, i) => (
                  <p key={i} className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#quote-form"
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2 text-sm"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+61491215175"
                  className="border border-slate-200 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us 24/7
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Fully Licensed", sub: "WA Security Licence Holders" },
                { label: "Police Checked", sub: "All Guards Vetted & Cleared" },
                { label: "Fully Insured", sub: "Complete Liability Coverage" },
                { label: "24/7 Response", sub: "Always On Call For You" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{item.label}</p>
                    <p className="text-slate-400 dark:text-zinc-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              The Risks You Face
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              Security Challenges in{" "}
              <span className="text-blue-600 dark:text-blue-400">Your Sector</span>
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              We understand the specific threats facing your industry — and we build our security plans around them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.challenges.map((challenge, i) => (
              <div
                key={i}
                className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-orange-300 dark:hover:border-orange-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-600/10 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{challenge.title}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{challenge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES FOR THIS INDUSTRY */}
      <section className="py-20 md:py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              How We Help
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              Security Services for{" "}
              <span className="text-blue-600 dark:text-blue-400">{industry.title.split(" ")[0]} {industry.title.split(" ")[1]}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industry.services.map((service, i) => (
              <Link
                key={i}
                href={`/services/${service.slug}`}
                className="group bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-cyan-500/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{service.title}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-cyan-400 group-hover:gap-2.5 transition-all">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              Why NexGuard
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              The NexGuard Advantage for{" "}
              <span className="text-blue-600 dark:text-blue-400">{industry.title.split(" ")[0]}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-300 dark:hover:border-cyan-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base mt-4">
              Common questions about {industry.title.toLowerCase()} services in Perth.
            </p>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6"
              >
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2.5">{faq.q}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="py-20 md:py-24 bg-slate-50 dark:bg-[#050B1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug mb-4">
                Request a Free Quote for{" "}
                <span className="text-blue-600 dark:text-blue-400">{industry.title}</span>
              </h2>
              <p className="text-slate-500 dark:text-zinc-400 text-base leading-relaxed mb-8">
                Tell us about your {industry.title.toLowerCase().split(" ")[0]} and we&apos;ll provide a tailored security proposal. No obligation. No lock-in contracts.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Free Security Assessment", sub: "We assess your site and risks at no cost" },
                  { label: "Tailored Security Plan", sub: "Built specifically for your industry and site" },
                  { label: "Transparent Pricing", sub: "No hidden fees, no surprises on your invoice" },
                  { label: "Fast Deployment", sub: "Guards deployed promptly once your agreement is in place" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
                      <p className="text-xs text-slate-400 dark:text-zinc-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
                <p className="text-sm text-slate-500 dark:text-zinc-400 mb-3">Or call us directly:</p>
                <a
                  href="tel:+61491215175"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold text-lg hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  +61 491 215 175
                </a>
                <p className="text-xs text-slate-400 dark:text-zinc-500 mt-1">Available 24/7, including weekends</p>
              </div>
            </div>

            <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-24 bg-white dark:bg-[#020817]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="tracking-widest text-blue-600 dark:text-cyan-400 font-medium text-xs uppercase mb-4">
                Our Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
                Services We Provide for{" "}
                <span className="text-blue-600 dark:text-blue-400">{industry.title.split(" ")[0]}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg dark:hover:border-cyan-500/30 hover:border-blue-200"
                >
                  <div className="h-36 relative">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
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
      )}

      {/* BOTTOM CTA BANNER */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Secure Your {industry.title.split(" ")[0]} in Perth?
          </h2>
          <p className="text-blue-100 text-base mb-8">
            Get a free, no-obligation security assessment from Perth&apos;s trusted security team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#quote-form"
              className="bg-white hover:bg-slate-100 text-blue-700 transition-colors px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
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
