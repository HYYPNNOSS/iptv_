import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smarter IPTV Pro - Meilleur Service IPTV en France 2025",
  description: "Smarter IPTV Pro vous offre +15000 chaînes TV, films et séries en HD/4K. Installation facile sur Smart TV, Android, Firestick, iPhone. Support 24/7.",
  keywords: 'smarter iptv pro, iptv france, iptv smart tv, iptv android, iptv firestick, iptv iphone, streaming tv, chaînes françaises, sport en direct',
  openGraph: {
    title: "Smarter IPTV Pro - Meilleur Service IPTV en France 2025",
    description: "Smarter IPTV Pro vous offre +15000 chaînes TV, films et séries en HD/4K. Installation facile sur Smart TV, Android, Firestick, iPhone. Support 24/7.",
    type: "website",
    url: "https://iptvfrances.com",
    siteName: "Smarter IPTV Pro",
    images: [
      {
        url: "/movies_67.jpg",
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
    images: ["/movies_67.jpg"]
  },
  alternates: {
    canonical: "https://iptvfrances.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
