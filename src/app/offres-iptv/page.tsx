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
  alternates: {
    canonical: "https://iptvfrances.com/offres-iptv"
  }
};

export default function OffresIPTV() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Offres d'Abonnement IPTV Premium France",
    description: "Découvrez nos offres IPTV avec des abonnements flexibles et sans engagement. Accès à des milliers de chaînes en direct et à la demande.",
    url: "https://iptvfrances.com/offres-iptv",
    image: "https://iptvfrances.com/iptv_rectangle.png",
    brand: {
      "@type": "Organization",
      name: "Smarter IPTV Pro",
      url: "https://iptvfrances.com",
      logo: "https://iptvfrances.com/iptv_rectangle.png"
    },
    offers: [
      {
        "@type": "Offer",
        name: "Abonnement IPTV 3 Mois",
        priceCurrency: "EUR",
        price: "19.00",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        category: "IPTV Subscription"
      },
      {
        "@type": "Offer",
        name: "Abonnement IPTV 12 Mois",
        priceCurrency: "EUR",
        price: "39.00",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        category: "IPTV Subscription"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1"
    } // SEO Improvement: Enhanced Product schema (2025-09-25)
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