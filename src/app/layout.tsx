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
  title: "IPTV France Premium 2025 | +120 000 Chaînes HD/4K | Abonnement dès 19€",
  description: "✅ IPTV France Premium : +120 000 chaînes TV, films et séries HD/4K. Compatible Smart TV, Android, iOS. Installation gratuite. Support 24/7. Essai gratuit disponible.",
  keywords: [
    'iptv france',
    'iptv premium france',
    'abonnement iptv',
    'chaînes tv françaises',
    'iptv smart tv',
    'iptv android',
    'iptv pas cher',
    'streaming tv france',
    'chaînes premium',
    'iptv 4k',
    'iptv firestick',
    'iptv mag',
    'iptv m3u',
    'télévision streaming',
    'iptv stable'
  ].join(', '),
  authors: [{ name: 'IPTV France Team' }],
  creator: 'IPTV France',
  publisher: 'IPTV France',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "IPTV France Premium 2025 | +120 000 Chaînes HD/4K",
    description: "✅ Service IPTV Premium avec +120 000 chaînes TV, films et séries HD/4K. Compatible tous appareils. Installation gratuite. Support 24/7.",
    type: "website",
    url: "https://iptvfrances.com",
    siteName: "IPTV France Premium",
    images: [
      {
        url: "/movies_67.webp",
        width: 1200,
        height: 630,
        alt: "IPTV France Premium - Service de streaming TV"
      }
    ],
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV France Premium 2025 | +120 000 Chaînes HD/4K",
    description: "✅ Service IPTV Premium France. +120 000 chaînes TV, films et séries HD/4K. Compatible Smart TV, Android, iOS.",
    images: ["/iptv_rectangle.png"],
    creator: "@iptvfrances_"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'clkyNCQH9teGEJ4f6vGrNMn-rkjRmblDuenbYtz2GJM',
  },
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
