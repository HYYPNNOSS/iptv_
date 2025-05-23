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
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chaînes IPTV - Toutes Vos Chaînes Préférées en Streaming",
    "description": "Explorez notre catalogue complet de chaînes IPTV. Des chaînes françaises, sportives, cinéma, enfants, et internationales réunies dans un seul abonnement.",
    "provider": {
      "@type": "Organization",
      "name": "IPTV France",
      "description": "Service de streaming TV en France"
    },
    "offers": {
      "@type": "Offer",
      "category": "IPTV Service",
      "availability": "https://schema.org/InStock"
    }
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