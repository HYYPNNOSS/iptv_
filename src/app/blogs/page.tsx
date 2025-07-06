import BlogPage from "./content";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blog IPTV - Actualités, Conseils et Guides',
  description: 'Découvrez les dernières actualités IPTV, conseils d\'utilisation, guides d\'installation et articles sur le streaming TV en France.',
  keywords: 'blog IPTV, actualités IPTV, guides IPTV, streaming TV, conseils IPTV',
  openGraph: {
    title: 'Blog IPTV - Actualités, Conseils et Guides',
    description: 'Découvrez les dernières actualités IPTV, conseils d\'utilisation, guides d\'installation et articles sur le streaming TV en France.',
    type: 'website',
  },
  alternates: {
    canonical: "https://iptvfrances.com/blogs"
  }
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog IPTV - Actualités, Conseils et Guides",
    "description": "Découvrez les dernières actualités IPTV, conseils d'utilisation, guides d'installation et articles sur le streaming TV en France.",
    "publisher": {
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
      <BlogPage />
    </main>
  );
}