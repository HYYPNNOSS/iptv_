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
  openGraph: {
    title: "Smarter IPTV Pro - Meilleur Service IPTV en France 2025",
    description: "Smarter IPTV Pro vous offre +15000 chaînes TV, films et séries en HD/4K. Installation facile sur Smart TV, Android, Firestick, iPhone. Support 24/7.",
    type: "website",
    url: "https://smarteriptvpro.fr",
    siteName: "Smarter IPTV Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smarter IPTV Pro - Service IPTV Premium"
      }
    ],
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Smarter IPTV Pro - Meilleur Service IPTV en France 2025",
    description: "Smarter IPTV Pro vous offre +15000 chaînes TV, films et séries en HD/4K. Installation facile sur Smart TV, Android, Firestick, iPhone.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://smarteriptvpro.fr"
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <About />
      <Bento />
      <Reviews />
      <Price />
      <FAq />
      <Blogs /> 
    </main>   
  )
}