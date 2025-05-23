// import FAQSection from "../components/FAq";
import FaqPage from './content';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'FAQ IPTV - Questions Fréquentes et Guide Complet',
  description: 'Trouvez toutes les réponses à vos questions sur l\'IPTV : installation, compatibilité, sécurité, et tendances 2025. Guide complet et questions fréquentes.',
  keywords: 'FAQ IPTV, questions IPTV, guide IPTV, installation IPTV, support IPTV',
  openGraph: {
    title: 'FAQ IPTV - Questions Fréquentes et Guide Complet',
    description: 'Trouvez toutes les réponses à vos questions sur l\'IPTV : installation, compatibilité, sécurité, et tendances 2025.',
    type: 'website',
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV avec EPG intégré en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV avec EPG intégré en France offre un guide électronique des programmes complet, permettant aux utilisateurs de consulter facilement les grilles de programmes et de planifier leurs visionnages."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV avec VOD inclus en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV avec VOD inclus en France permet d'accéder à une large bibliothèque de films et séries à la demande, en plus des chaînes en direct."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV avec enregistrement en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV avec fonction d'enregistrement en France permet aux utilisateurs d'enregistrer leurs émissions préférées pour les regarder ultérieurement."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV avec contrôle parental en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV avec contrôle parental en France offre des fonctionnalités permettant aux parents de restreindre l'accès à certains contenus pour protéger les enfants."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV avec support technique en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV avec support technique en France garantit une assistance clientèle réactive pour résoudre les problèmes techniques et répondre aux questions des utilisateurs."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV avec mise à jour automatique en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV avec mise à jour automatique en France assure que le service reste à jour avec les dernières fonctionnalités et améliorations sans intervention manuelle."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV avec application mobile en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV avec application mobile en France permet aux utilisateurs d'accéder à leurs chaînes et contenus préférés depuis leur smartphone ou tablette."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV sans engagement en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV sans engagement en France offre la flexibilité de souscrire et d'annuler l'abonnement à tout moment, sans période d'engagement minimale."
        }
      }
    ]
  };

  return (
    <main>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FaqPage />
    </main>
  );
}