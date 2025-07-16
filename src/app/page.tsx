import type { Metadata } from "next";
import Price from "./components/price";
import Hero from "./components/Hero/accueil";
import About from "./components/About";
import Reviews from "./components/Reviews";
import FAq from "./components/FAq";
import Blogs from "./components/Blogs";
import Bento from "./components/bento";

export const metadata: Metadata = {
  title: "Abonnement IPTV Premium France 2025 - Smarter IPTV Pro +120k Chaînes HD/4K",
  description: "Meilleur service IPTV France 2025 avec +120 000 chaînes HD/4K, films et séries. Installation gratuite sur Smart TV, Android, iOS. Support 24/7. Essai gratuit disponible.",
  keywords: 'abonnement iptv france, iptv premium france, iptv pas cher, iptv légal france, iptv sport france, iptv 4k france, streaming tv france, chaînes françaises hd, iptv android box, iptv firestick france, iptv smart tv samsung, iptv bouygues, iptv orange, iptv free, smarter iptv pro',
  alternates: {
    canonical: "https://iptvfrances.com/"
  },
  openGraph: {
    title: "Abonnement IPTV Premium France 2025 - +120k Chaînes HD/4K",
    description: "Service IPTV Premium France avec installation gratuite et support 24/7. Découvrez nos offres d'abonnement IPTV pas cher.",
    url: "https://iptvfrances.com",
    siteName: "IPTV France Premium",
    images: [{
      url: "https://iptvfrances.com/iptv_rectangle.png",
      width: 1200,
      height: 630,
      alt: "IPTV France Premium - Service de streaming TV"
    }],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abonnement IPTV Premium France 2025 - +120k Chaînes HD/4K",
    description: "Service IPTV Premium France avec installation gratuite et support 24/7.",
    images: ["https://iptvfrances.com/iptv_rectangle.png"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  // Change the main type from "Service" to "Product"
  "@type": "Product",
  name: "Abonnement IPTV Premium France 2025", // More specific product name
  description: "Meilleur service IPTV France 2025 avec +120 000 chaînes HD/4K, films et séries. Installation gratuite sur Smart TV, Android, iOS. Support 24/7. Essai gratuit disponible.",
  url: "https://iptvfrances.com",
  image: "https://iptvfrances.com/iptv_rectangle.png", // Use 'image' for Product
  // 'brand' is more appropriate for Product than 'provider' for this context
  brand: {
    "@type": "Organization",
    name: "Smarter IPTV Pro",
    url: "https://iptvfrances.com",
    logo: "https://iptvfrances.com/iptv_rectangle.png"
  },
  // Keep offers as they are, but they are nested under the Product
  offers: [{
    "@type": "Offer",
    name: "Abonnement IPTV 3 Mois",
    priceCurrency: "EUR",
    price: "19.00",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
    category: "IPTV Subscription"
  }, {
    "@type": "Offer",
    name: "Abonnement IPTV 12 Mois",
    priceCurrency: "EUR",
    price: "39.00",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
    category: "IPTV Subscription"
  }],
  // The aggregateRating should refer to the Product
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2500",
    bestRating: "5",
    worstRating: "1"
    // No need for itemReviewed when it's directly within the Product schema
  },
  // You can still keep hasOfferCatalog if it helps describe variations or related offers
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chaînes IPTV France",
    itemListElement: [{
      "@type": "Offer",
      itemOffered: {
        "@type": "Service", // This can remain Service if it's describing a specific service component
        name: "Chaînes Sport France",
        description: "Accès aux chaînes sportives françaises en HD/4K"
      }
    }, {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Films et Séries VOD",
        description: "Bibliothèque de films et séries français et internationaux"
      }
    }]
  },
  // If you want to include contact information for the product/service provider,
  // it's better placed under the 'brand' (Organization) or as a separate ContactPoint
  // on the page, rather than directly under Product unless it's for the product itself.
  // For now, let's remove it from the main Product scope to simplify.
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-756-757-174",
    contactType: "customer service",
    availableLanguage: "French",
    hoursAvailable: "24/7"
  },
  // 'areaServed' is also more typically associated with LocalBusiness or Service,
  // but if your product is strictly for France, you can keep it.
  areaServed: {
    "@type": "Country",
    name: "France"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [{
    "@type": "Question",
    name: "Qu'est-ce que l'IPTV et comment ça fonctionne ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "L'IPTV (Internet Protocol Television) est un service de diffusion de télévision par Internet. Il permet de regarder des chaînes TV, films et séries en streaming via votre connexion Internet sur tous vos appareils."
    }
  }, {
    "@type": "Question",
    name: "L'IPTV est-il légal en France ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Oui, l'IPTV est légal en France quand il est fourni par des services autorisés et respectant les droits d'auteur. Notre service IPTV France Premium respecte toutes les réglementations françaises."
    }
  }, {
    "@type": "Question",
    name: "Combien coûte un abonnement IPTV en France ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Nos abonnements IPTV France commencent à partir de 19€ pour 3 mois. Nous proposons des formules adaptées à tous les budgets avec des tarifs dégressifs sur les abonnements longue durée."
    }
  }]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Hero />
        <About />
        <Bento />
        <Reviews />
        <Price />
        <FAq />
        <Blogs />
      </main>
    </>
  )
}