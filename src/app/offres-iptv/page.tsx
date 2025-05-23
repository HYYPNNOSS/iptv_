import Hero from "../components/Hero/offres-iptv";
import Price from "../components/price";
import { Metadata } from 'next';
import Script from 'next/script';
import FAq from "../components/FAq";
import Blogs from "../components/Blogs";

export const metadata: Metadata = {
  title: 'Offres IPTV - Abonnements et Tarifs 2025',
  description: 'Découvrez nos offres IPTV avec des abonnements flexibles et sans engagement. Accès à des milliers de chaînes en direct et à la demande.',
  keywords: 'offres IPTV, tarifs IPTV, abonnement IPTV, prix IPTV, forfait IPTV',
  openGraph: {
    title: 'Offres IPTV - Abonnements et Tarifs 2025',
    description: 'Découvrez nos offres IPTV avec des abonnements flexibles et sans engagement. Accès à des milliers de chaînes en direct et à la demande.',
    type: 'website',
  },
};

export default function OffresIPTV() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Abonnement IPTV",
    "description": "Service de streaming TV avec accès à des milliers de chaînes",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
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
      <Price />
      <FAq />
      <Blogs />
    </main>
  );
}