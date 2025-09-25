import Hero from "../components/Hero/integration-iptv";
import IntegrationIPTVPage from "./content";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Guide d\'Installation IPTV - Tutoriel Complet 2025',
  description: 'Découvrez comment installer facilement votre IPTV sur tous vos appareils. Guide étape par étape avec support vidéo et tutoriels détaillés.',
  keywords: 'installation IPTV, guide IPTV, tutoriel IPTV, configuration IPTV, support IPTV',
  openGraph: {
    title: 'Guide d\'Installation IPTV - Tutoriel Complet 2025',
    description: 'Découvrez comment installer facilement votre IPTV sur tous vos appareils. Guide étape par étape avec support vidéo et tutoriels détaillés.',
    type: 'website',
  },
  alternates: {
    canonical: "https://iptvfrances.com/integration-iptv"
  }
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Guide d'Installation IPTV - Tutoriel Complet 2025",
    "description": "Découvrez comment installer facilement votre IPTV sur tous vos appareils. Guide étape par étape avec support vidéo et tutoriels détaillés.",
    "url": "https://iptvfrances.com/integration-iptv",
    "image": "https://iptvfrances.com/iptv_rectangle.png",
    "supply": {
      "@type": "HowToSupply",
      "name": "Abonnement IPTV Premium"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choisir votre appareil",
        "text": "Smart TV, Android, iOS, PC/Mac, FireStick..."
      },
      {
        "@type": "HowToStep",
        "name": "Télécharger une application IPTV",
        "text": "Tivimate, Smarters, iPlayTV, VLC..."
      },
      {
        "@type": "HowToStep",
        "name": "Entrer votre lien M3U",
        "text": "Renseignez le lien fourni après l'achat"
      }
    ] // SEO Improvement: Enhanced HowTo schema (2025-09-25)
  };

  return (
    <main>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <IntegrationIPTVPage />
    </main>
  );
}