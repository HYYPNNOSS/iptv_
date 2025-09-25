import Hero from "../components/Hero/iptv-france";
import IPTVFrancePage from "./content";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'IPTV France - Meilleur Service de Streaming TV en France',
  description: 'Découvrez le meilleur service IPTV en France avec des chaînes françaises et internationales. Installation facile, prix abordables et support 24/7.',
  keywords: 'IPTV France, streaming TV, chaînes françaises, IPTV français, télévision en streaming',
  openGraph: {
    title: 'IPTV France - Meilleur Service de Streaming TV en France',
    description: 'Découvrez le meilleur service IPTV en France avec des chaînes françaises et internationales. Installation facile, prix abordables et support 24/7.',
    type: 'website',
  },
  alternates: {
    canonical: "https://iptvfrances.com/iptv-france"
  }
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Meilleur Service IPTV en France",
    "description": "Découvrez le meilleur service IPTV en France avec des chaînes françaises et internationales. Installation facile, prix abordables et support 24/7.",
    "url": "https://iptvfrances.com/iptv-france",
    "image": "https://iptvfrances.com/iptv_rectangle.png",
    "serviceType": "IPTV Subscription",
    "provider": {
      "@type": "Organization",
      "name": "Smarter IPTV Pro",
      "url": "https://iptvfrances.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "19.00",
      "availability": "https://schema.org/InStock"
    } // SEO Improvement: Enhanced Service schema (2025-09-25)
  };

  return (
    <main>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <IPTVFrancePage />
    </main>
  );
}