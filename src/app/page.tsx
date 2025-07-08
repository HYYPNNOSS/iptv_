import type { Metadata } from "next";
import Price from "./components/price";
import Hero from "./components/Hero/accueil";
import About from "./components/About";
import Reviews from "./components/Reviews";
import FAq from "./components/FAq";
import Blogs from "./components/Blogs";
import Bento from "./components/bento";

export const metadata: Metadata = {
  title: "Smarter IPTV Pro - Meilleur Service IPTV en France 2025",
  description: "Smarter IPTV Pro vous offre +15000 chaînes TV, films et séries en HD/4K. Installation facile sur Smart TV, Android, Firestick, iPhone. Support 24/7.",
  keywords: 'smarter iptv pro, iptv france, iptv smart tv, iptv android, iptv firestick, iptv iphone, streaming tv, chaînes françaises, sport en direct',
  alternates: {
    canonical: "https://iptvfrances.com/"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IPTV France Premium",
  description:
    "Service IPTV Premium avec +120 000 chaînes TV, films et séries HD/4K",
  url: "https://iptvfrances.com",
  logo: "https://iptvfrances.com/iptv_rectangle.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-756-757-174",
    contactType: "customer service",
    availableLanguage: "French",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "19.00",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
  },
  // aggregateRating: {
  //   "@type": "AggregateRating",
  //   ratingValue: "4.9",
  //   reviewCount: "2500",
  // },
};


export default function Home() {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
