// "use client"
import Link from 'next/link';
import React from 'react';

export default function IntegrationIPTVPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Guide d'Installation IPTV France",
    "description": "Guide complet pour installer l'IPTV sur différents appareils en France",
    "step": [
      {
        "@type": "HowToStep",
        "name": "IPTV pour Fire Stick France",
        "text": "Installation de l'application IPTV Smarters ou Tivimate sur Fire TV Stick",
        "url": "https://www.iptvsmarters.com/smarters.apk"
      },
      {
        "@type": "HowToStep",
        "name": "IPTV pour Android Box France",
        "text": "Installation de IPTV Smarters sur appareils Android",
        "url": "https://www.iptvsmarters.com/smarters.apk"
      },
      {
        "@type": "HowToStep",
        "name": "IPTV pour Apple TV et iPhone France",
        "text": "Installation de IPTV Smarters sur appareils Apple",
        "url": "https://apps.apple.com/in/app/smarters-player-lite/id1628995509"
      },
      {
        "@type": "HowToStep",
        "name": "IPTV pour Windows 10 et MacBook France",
        "text": "Installation sur ordinateurs Windows et Mac"
      },
      {
        "@type": "HowToStep",
        "name": "IPTV pour Xbox et PlayStation France",
        "text": "Configuration sur consoles de jeux"
      },
      {
        "@type": "HowToStep",
        "name": "IPTV pour Chromecast, Nvidia Shield et Roku France",
        "text": "Configuration sur appareils de streaming"
      }
    ]
  };

  return (
    <div className="bg-[#141414] text-white min-h-screen px-2 py-6 sm:px-4 md:px-8">
      <div className="max-w-[320px] sm:max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12 text-center text-red-600">Comment configurer <Link href="/iptv-france" className="hover:text-red-400 transition">IPTV en France</Link></h2>

        <Section title="📺 IPTV pour Fire Stick France" color="text-red-500">
          <Steps items={[
            "Depuis l'écran d'accueil, allez sur Rechercher.",
            "Cliquez sur Rechercher.",
            "Recherchez et sélectionnez Downloader.",
            "Cliquez sur Télécharger.",
            "Ouvrez l'application Downloader après installation.",
            "Allez dans Paramètres > Mon Fire TV > Options du développeur.",
            "Cliquez sur Installer des applications inconnues.",
            "Activez-le pour Downloader.",
            "Retournez sur Downloader et cliquez sur Autoriser.",
            "Entrez l'URL suivante : https://www.iptvsmarters.com/smarters.apk",
            "Téléchargez, installez et ouvrez l'application IPTV Smarters.",
            `Sélectionnez Connexion avec l'API Xtream Codes et entrez vos informations. Consultez notre <Link href="/faq" className="text-red-500 hover:text-red-400 transition">FAQ</Link> pour plus de détails.`
          ]} />

          <Subsection title="🔥 Pour Tivimate :">
            <Steps items={[
              "Entrez : https://tivimates.com/tiviapk",
              "Téléchargez, installez, puis ouvrez l'application.",
              "Cliquez sur Ajouter une playlist > Codes Xtream.",
              `Entrez vos identifiants IPTV reçus par WhatsApp, Email ou Chat. Besoin d'aide ? <Link href="/contact" className="text-red-500 hover:text-red-400 transition">Contactez-nous</Link>.`
            ]} />
          </Subsection>
        </Section>

        <Section title="📱 IPTV pour Android Box France" color="text-red-500">
          <Steps items={[
            "Téléchargez l'app via : https://www.iptvsmarters.com/smarters.apk",
            "Ouvrez l'application et entrez les identifiants reçus.",
            "Cliquez sur AJOUTER UN UTILISATEUR.",
            "Cliquez sur Live TV.",
            "Sélectionnez un groupe de chaînes.",
            `Cliquez sur la chaîne, puis double-cliquez pour plein écran. Découvrez nos <Link href="/chaines-iptv" className="text-red-500 hover:text-red-400 transition">chaînes disponibles</Link>.`
          ]} />
        </Section>

        <Section title="🍏 IPTV pour Apple TV et iPhone France" color="text-red-500">
          <Steps items={[
            "Téléchargez IPTV Smarters depuis l'App Store : https://apps.apple.com/in/app/smarters-player-lite/id1628995509",
            "Ouvrez l'application et saisissez les identifiants reçus.",
            "Cliquez sur AJOUTER UN UTILISATEUR.",
            "Cliquez sur Live TV.",
            "Sélectionnez un groupe de chaînes et double-cliquez sur une chaîne pour passer en plein écran.",
            `Pour l'EPG, cliquez simplement sur Installer EPG. Consultez nos <Link href="/offres-iptv" className="text-red-500 hover:text-red-400 transition">offres IPTV</Link> pour plus d'informations.`
          ]} />
        </Section>

        <Section title="🎮 IPTV pour Xbox et PlayStation France" color="text-red-500">
          <Steps items={[
            "Téléchargez l'application IPTV Smarters depuis le Microsoft Store (Xbox) ou le PlayStation Store",
            "Ouvrez l'application et entrez vos identifiants",
            "Configurez les paramètres de streaming selon vos préférences",
            `Profitez de vos chaînes IPTV sur votre console. Découvrez nos <Link href="/blogs" className="text-red-500 hover:text-red-400 transition">articles</Link> pour plus d'astuces.`
          ]} />
        </Section>

        <Section title="🖥️ IPTV pour Windows 10 et MacBook France" color="text-red-500">
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-300 text-sm sm:text-base">
            <li>Pour Windows 10 : <a className="text-red-500 hover:text-red-400 transition-colors" href="https://www.iptvsmarters.com/download?download=windows">Télécharger ici</a></li>
            <li>Pour MacBook : <a className="text-red-500 hover:text-red-400 transition-colors" href="https://www.iptvsmarters.com/download?download=mac">Télécharger ici</a></li>
          </ul>
          <p className="mt-4 text-gray-300">Besoin d&apos;aide ? Consultez notre <Link href="/faq" className="text-red-500 hover:text-red-400 transition">FAQ</Link> ou <Link href="/contact" className="text-red-500 hover:text-red-400 transition">contactez-nous</Link>.</p>
        </Section>

        <Section title="📺 IPTV pour Chromecast, Nvidia Shield et Roku France" color="text-red-500">
          <Steps items={[
            "Pour Chromecast : Utilisez l'application IPTV Smarters sur votre téléphone et diffusez sur votre Chromecast",
            "Pour Nvidia Shield : Installez IPTV Smarters depuis le Google Play Store",
            "Pour Roku : Utilisez l'application IPTV Smarters via le Roku Channel Store"
          ]} />
          <p className="mt-4 text-gray-300">Découvrez nos <Link href="/offres-iptv" className="text-red-500 hover:text-red-400 transition">offres IPTV</Link> adaptées à tous vos appareils.</p>
        </Section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

function Section({ title, color, children }: SectionProps) {
  return (
    <section className="mb-8 sm:mb-16 bg-[#1f1f1f] p-3 sm:p-6 rounded-lg shadow-lg">
      <h2 className={`text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${color}`}>{title}</h2>
      {children}
    </section>
  );
}

interface SubsectionProps {
  title: string;
  children: React.ReactNode;
}

function Subsection({ title, children }: SubsectionProps) {
  return (
    <div className="mt-4 sm:mt-6 bg-[#2a2a2a] p-3 sm:p-4 rounded-lg">
      <h3 className="text-lg sm:text-xl font-semibold text-red-500 mb-2">{title}</h3>
      {children}
    </div>
  );
}

interface StepsProps {
  items: string[];
}

function Steps({ items }: StepsProps) {
  return (
    <ol className="list-decimal pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
      {items.map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ol>
  );
}
