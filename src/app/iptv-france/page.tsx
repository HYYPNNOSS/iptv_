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
    "@type": "WebPage",
    "name": "IPTV France - Meilleur Service de Streaming TV en France",
    "description": "Découvrez le meilleur service IPTV en France avec des chaînes françaises et internationales.",
    "provider": {
      "@type": "Organization",
      "name": "IPTV France",
      "description": "Service de streaming TV en France"
    }
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