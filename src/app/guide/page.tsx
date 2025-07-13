import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function GuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Guide IPTV débutant France - Installation facile",
    "description": "Tutoriel configuration IPTV France complet avec aide et questions fréquentes",
    "url": "https://iptvfrances.com/guide",
    "image": "https://iptvfrances.com/images/iptv-guide-france.jpg",
    "totalTime": "PT30M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Connexion Internet"
      },
      {
        "@type": "HowToSupply", 
        "name": "Smart TV ou appareil compatible"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Application IPTV"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choisir un service IPTV",
        "text": "Sélectionnez un service IPTV adapté à vos besoins",
        "url": "https://iptvfrances.com/comparison"
      },
      {
        "@type": "HowToStep",
        "name": "Configuration technique",
        "text": "Configurez votre appareil selon les instructions",
        "url": "https://iptvfrances.com/setup"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Guide IPTV débutant France - Installation facile | IPTV Frances</title>
        <meta name="description" content="Tutoriel configuration IPTV France complet. Guide installation facile avec aide IPTV France et questions fréquentes pour débutants." />
        <meta name="keywords" content="IPTV installation facile France, Guide IPTV débutant France, Tutoriel configuration IPTV France, Comment installer IPTV Smart TV France, Questions fréquentes IPTV France, Aide IPTV France" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://iptvfrances.com/guide" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900 to-zinc-900 py-30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Guide IPTV débutant France
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              IPTV installation facile France avec notre tutoriel configuration IPTV France complet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/comparison" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Choisir un service
              </Link>
              <Link href="/setup" className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Configuration technique
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              Comment installer IPTV Smart TV France
            </h2>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                L&apos;<strong>IPTV installation facile France</strong> est à la portée de tous grâce à notre guide complet. 
                Que vous soyez débutant ou expérimenté, notre <strong>tutoriel configuration IPTV France</strong> vous 
                accompagne étape par étape pour une installation réussie.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Avantages IPTV France</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Accès à des milliers de chaînes</li>
                    <li>• Qualité HD et 4K disponible</li>
                    <li>• Compatible tous appareils</li>
                    <li>• Prix abordable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Prérequis installation</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Connexion Internet stable</li>
                    <li>• Smart TV ou appareil compatible</li>
                    <li>• Application IPTV</li>
                    <li>• Abonnement IPTV valide</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-step Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              Tutoriel configuration IPTV France étape par étape
            </h2>
            <div className="space-y-8">
              <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">
                  Étape 1: Choisir votre service IPTV
                </h3>
                <p className="text-gray-300 mb-4">
                  Sélectionnez un service IPTV adapté à vos besoins. Notre section comparatif vous aide à faire le bon choix.
                </p>
                <Link href="/comparison" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                  Voir le comparatif →
                </Link>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">
                  Étape 2: Configuration technique
                </h3>
                <p className="text-gray-300 mb-4">
                  Configurez votre appareil selon les instructions détaillées de notre guide technique.
                </p>
                <Link href="/setup" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                  Guide configuration →
                </Link>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">
                  Étape 3: Explorer les chaînes
                </h3>
                <p className="text-gray-300 mb-4">
                  Découvrez toutes les chaînes disponibles et organisez votre liste selon vos préférences.
                </p>
                <Link href="/channels" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                  Voir les chaînes →
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              Questions fréquentes IPTV France
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Qu&apos;est-ce que l&apos;IPTV et comment ça fonctionne?
                </h3>
                <p className="text-gray-300">
                  L&apos;IPTV (Internet Protocol Television) diffuse du contenu télévisuel via Internet. 
                  Notre <strong>guide IPTV débutant France</strong> explique tout en détail pour une 
                  compréhension facile.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Quels appareils sont compatibles?
                </h3>
                <p className="text-gray-300">
                  Smart TV, Android TV, Fire TV Stick, smartphones, tablettes, ordinateurs. 
                  Consultez notre section <Link href="/setup" className="text-red-400 hover:text-red-300">configuration</Link> pour plus de détails.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Quelle vitesse Internet est nécessaire?
                </h3>
                <p className="text-gray-300">
                  Minimum 10 Mbps pour HD, 25 Mbps pour 4K. Notre <strong>aide IPTV France</strong> 
                  vous guide pour optimiser votre connexion.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Comment choisir le meilleur service?
                </h3>
                <p className="text-gray-300">
                  Considérez le nombre de chaînes, la qualité, le prix et le support client. 
                  Notre <Link href="/comparison" className="text-red-400 hover:text-red-300">comparatif détaillé</Link> vous aide dans ce choix.
                </p>
              </div>
            </div>
          </section>

          {/* Help Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              Aide IPTV France - Support technique
            </h2>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Problèmes courants</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Coupures fréquentes</li>
                    <li>• Qualité d&apos;image médiocre</li>
                    <li>• Chaînes qui ne s&apos;ouvrent pas</li>
                    <li>• Problèmes de son</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Solutions rapides</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Vérifier la connexion Internet</li>
                    <li>• Redémarrer l&apos;application</li>
                    <li>• Mettre à jour le firmware</li>
                    <li>• Contacter le support</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/setup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Guide dépannage complet
                </Link>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-red-500">
              Sections connexes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/comparison" className="block bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-red-400">Comparatif</h3>
                <p className="text-gray-300 text-sm">Évaluation et analyse des services IPTV</p>
              </Link>
              <Link href="/setup" className="block bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-red-400">Configuration</h3>
                <p className="text-gray-300 text-sm">Installation et dépannage technique</p>
              </Link>
              <Link href="/channels" className="block bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-red-400">Chaînes</h3>
                <p className="text-gray-300 text-sm">Contenu et programmation disponible</p>
              </Link>
              <Link href="/features" className="block bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-red-400">Fonctionnalités</h3>
                <p className="text-gray-300 text-sm">Capacités techniques avancées</p>
              </Link>
            </div>
          </section>
        </main>

        {/* Footer */}
        
      </div>
    </>
  );
}