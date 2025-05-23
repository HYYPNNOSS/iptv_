import ContactPage from "./content";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact IPTV - Support et Assistance',
  description: 'Contactez notre équipe de support IPTV pour toute question ou assistance. Nous sommes disponibles par email, WhatsApp et formulaire de contact.',
  keywords: 'contact IPTV, support IPTV, assistance IPTV, aide IPTV',
  openGraph: {
    title: 'Contact IPTV - Support et Assistance',
    description: 'Contactez notre équipe de support IPTV pour toute question ou assistance. Nous sommes disponibles par email, WhatsApp et formulaire de contact.',
    type: 'website',
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact IPTV - Support et Assistance",
    "description": "Contactez notre équipe de support IPTV pour toute question ou assistance.",
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
      <ContactPage />
    </main>
  );
}