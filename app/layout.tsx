import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nexguard Protection Security - Perth",
  description: "Nexguard Protection Security provides professional security guards service across Perth and Western Australia, including construction sites, retail, events and corporate security.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nexguard Protection Security",
  alternateName: "NexGuard Protection",
  description:
    "Nexguard Protection Security provides professional security guards service across Perth and Western Australia, including construction sites, retail, events and corporate security.",
  url: "https://www.nexguard.au",
  telephone: "+61491215175",
  email: "Info@nexguard.au",
  priceRange: "$$",
  image: "https://www.nexguard.au/logo-dark.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perth",
    addressRegion: "WA",
    postalCode: "6000",
    addressCountry: "AU",
  },
  areaServed: [
    "Perth CBD", "Fremantle", "Joondalup", "Rockingham",
    "Mandurah", "Midland", "Armadale", "Stirling",
    "Subiaco", "Cannington", "Osborne Park", "Western Australia",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Site Security" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Patrols" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Static Guards" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Security & Crowd Control" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retail Security & Loss Prevention" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alarm Response" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concierge & Corporate Security" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Parties & Functions" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
