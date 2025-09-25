import Hero from "../components/Hero/chaines-iptv";
import ChainesIPTVPage from "./content";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Chaînes IPTV - Toutes Vos Chaînes Préférées en Streaming',
  description: 'Explorez notre catalogue complet de chaînes IPTV. Des chaînes françaises, sportives, cinéma, enfants, et internationales réunies dans un seul abonnement.',
  keywords: 'IPTV, chaînes TV, streaming, chaînes françaises, sport, cinéma, séries',
  openGraph: {
    title: 'Chaînes IPTV - Toutes Vos Chaînes Préférées en Streaming',
    description: 'Explorez notre catalogue complet de chaînes IPTV. Des chaînes françaises, sportives, cinéma, enfants, et internationales réunies dans un seul abonnement.',
    type: 'website',
  },
  alternates: {
    canonical: "https://iptvfrances.com/chaines-iptv"
  }
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Chaînes IPTV - Toutes Vos Chaînes Préférées en Streaming",
    "description": "Explorez notre catalogue complet de chaînes IPTV. Des chaînes françaises, sportives, cinéma, enfants, et internationales réunies dans un seul abonnement.",
    "url": "https://iptvfrances.com/chaines-iptv",
    "image": "https://iptvfrances.com/iptv_rectangle.png",
    "mainEntity": {
      "@type": "Service",
      "name": "Service IPTV Premium France",
      "description": "Accès à des milliers de chaînes TV françaises et internationales en HD/4K.",
      "serviceType": "IPTV Subscription",
      "provider": {
        "@type": "Organization",
        "name": "Smarter IPTV Pro",
        "url": "https://iptvfrances.com"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "19.00",
        "availability": "https://schema.org/InStock"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      }
    } // SEO Improvement: Enhanced WebPage schema (2025-09-25)
  };

  return(
    <main>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <ChainesIPTVPage />
    </main>
  )
}