// pages/channels.js or app/channels/page.js
import Head from 'next/head';
import Link from 'next/link';

export default function Channels() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chaînes IPTV France - Liste Complète Chaînes Françaises et Internationales",
    "description": "Découvrez la liste complète des chaînes IPTV France : chaînes françaises, sport, films, séries, programmes internationaux. Contenu IPTV premium.",
    "url": "https://iptvfrances.com/channels",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Chaînes IPTV France",
      "description": "Liste des chaînes IPTV disponibles en France",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Chaînes françaises",
          "description": "TF1, France 2, M6, Canal+, etc."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Chaînes sport",
          "description": "RMC Sport, Canal+ Sport, beIN Sports, etc."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Chaînes internationales",
          "description": "CNN, BBC, Discovery, National Geographic, etc."
        }
      ]
    }
  };

  const channelCategories = [
    {
      title: "Chaînes Françaises",
      channels: ["TF1", "France 2", "France 3", "Canal+", "M6", "W9", "TMC", "TFX", "France 5", "Arte"],
      description: "Toutes les chaînes françaises populaires en haute définition"
    },
    {
      title: "IPTV Sport France",
      channels: ["RMC Sport", "Canal+ Sport", "beIN Sports", "Eurosport", "L'Équipe", "Sport en France"],
      description: "Tous les sports en direct : football, rugby, tennis, F1"
    },
    {
      title: "Films et Séries",
      channels: ["OCS", "Netflix", "Canal+ Cinéma", "TCM Cinéma", "Paramount Channel", "13ème Rue"],
      description: "Le meilleur du cinéma et des séries TV"
    },
    {
      title: "Chaînes Internationales",
      channels: ["CNN", "BBC World", "Discovery", "National Geographic", "MTV", "Cartoon Network"],
      description: "Contenu international en plusieurs langues"
    },
    {
      title: "Jeunesse",
      channels: ["Disney Channel", "Nickelodeon", "Cartoon Network", "Boomerang", "Gulli", "France 4"],
      description: "Programmes pour enfants et adolescents"
    },
    {
      title: "Documentaires",
      channels: ["Discovery Channel", "National Geographic", "Histoire", "Planète+", "Ushuaïa TV"],
      description: "Documentaires et programmes éducatifs"
    }
  ];

  return (
    <>
      <Head>
        <title>Chaînes IPTV France | Liste Complète Chaînes Françaises et Sport | IPTVFrances</title>
        <meta name="description" content="Liste chaînes IPTV France : chaînes françaises, sport, films séries, programmes internationaux. Contenu IPTV premium 4K. + de 10000 chaînes disponibles." />
        <meta name="keywords" content="Chaînes IPTV France, Liste chaînes IPTV France, Contenu IPTV France, Programmes IPTV France, IPTV chaînes françaises, IPTV chaînes internationales, IPTV sport France, IPTV films séries France" />
        <link rel="canonical" href="https://iptvfrances.com/channels" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900 to-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chaînes IPTV France
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Plus de 10,000 chaînes françaises et internationales en HD/4K
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-red-600 px-4 py-2 rounded-full text-sm">IPTV chaînes françaises</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">IPTV sport France</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">IPTV films séries France</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">10,000+</h3>
                <p className="text-gray-400">Chaînes Disponibles</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">4K</h3>
                <p className="text-gray-400">Qualité Ultra HD</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">24/7</h3>
                <p className="text-gray-400">Disponibilité</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">50+</h3>
                <p className="text-gray-400">Pays Couverts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Channel Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Liste Chaînes IPTV France
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {channelCategories.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-red-500">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.channels.map((channel, channelIndex) => (
                      <div key={channelIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-300">{channel}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold transition-colors">
                    Voir Plus
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Content Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Contenu IPTV France Premium
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-semibold mb-6 text-red-500">
                  Programmes IPTV France
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">Journal Télévisé</h4>
                    <p className="text-gray-400 text-sm">
                      Toutes les actualités françaises et internationales en direct
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">Divertissement</h4>
                    <p className="text-gray-400 text-sm">
                      Talk-shows, jeux télévisés, émissions de variétés
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">Culture</h4>
                    <p className="text-gray-400 text-sm">
                      Documentaires, théâtre, concerts, programmes éducatifs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-semibold mb-6 text-red-500">
                  Avantages Exclusifs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">Qualité 4K/HD</h4>
                      <p className="text-gray-400 text-sm">Image cristalline sur tous vos appareils</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">EPG Complet</h4>
                      <p className="text-gray-400 text-sm">Guide des programmes détaillé</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">Catch-up TV</h4>
                      <p className="text-gray-400 text-sm">Replay des programmes jusqu&apos;7 jours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">Multi-écrans</h4>
                      <p className="text-gray-400 text-sm">Regardez sur plusieurs appareils simultanément</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sports Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              IPTV Sport France - Tous les Sports en Direct
            </h2>
            <div className="bg-gradient-to-r from-red-900 to-gray-900 p-8 rounded-lg mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Football</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Ligue 1</p>
                    <p>Champions League</p>
                    <p>Premier League</p>
                    <p>La Liga</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Autres Sports</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Tennis (Roland Garros)</p>
                    <p>Rugby (Top 14)</p>
                    <p>Formule 1</p>
                    <p>Basketball</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Événements Spéciaux</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Jeux Olympiques</p>
                    <p>Coupe du Monde</p>
                    <p>Euro Football</p>
                    <p>Wimbledon</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* International Channels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              IPTV Chaînes Internationales
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Anglais</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• BBC One/Two</li>
                  <li>• CNN International</li>
                  <li>• Discovery Channel</li>
                  <li>• National Geographic</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Allemand</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• ARD</li>
                  <li>• ZDF</li>
                  <li>• RTL Deutschland</li>
                  <li>• Pro7</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Italien</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• RAI Uno</li>
                  <li>• Mediaset</li>
                  <li>• Sky Italia</li>
                  <li>• La7</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Espagnol</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• La 1 (TVE)</li>
                  <li>• Antena 3</li>
                  <li>• Telecinco</li>
                  <li>• Canal+ España</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Movies & Series */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              IPTV Films Séries France
            </h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-500">
                    Cinéma Premium
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2">Nouveautés Cinéma</h4>
                      <p className="text-gray-400 text-sm">
                        Les derniers blockbusters et films d&apos;auteur
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2">Cinéma Français</h4>
                      <p className="text-gray-400 text-sm">
                        Le meilleur du cinéma français contemporain et classique
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2">Films Internationaux</h4>
                      <p className="text-gray-400 text-sm">
                        Hollywood, Bollywood, cinéma européen et asiatique
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-500">
                    Séries TV
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2">Séries Françaises</h4>
                      <p className="text-gray-400 text-sm">
                        Productions originales et séries populaires françaises
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2">Séries Américaines</h4>
                      <p className="text-gray-400 text-sm">
                        Netflix, HBO, Amazon Prime originals
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2">Séries Internationales</h4>
                      <p className="text-gray-400 text-sm">
                        K-dramas, anime, séries européennes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Channel Search */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Recherche de Chaînes
            </h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Rechercher une chaîne..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold transition-colors">
                    Chaînes Françaises
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-semibold transition-colors">
                    Sport
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-semibold transition-colors">
                    Cinéma
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Ressources Connexes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/setup" className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                <h3 className="text-xl font-semibold mb-4 text-red-500 group-hover:text-red-400">
                  Configuration IPTV
                </h3>
                <p className="text-gray-400">
                  Apprenez à configurer votre IPTV pour accéder à toutes ces chaînes sur vos appareils.
                </p>
              </Link>
              
              <Link href="/features" className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                <h3 className="text-xl font-semibold mb-4 text-red-500 group-hover:text-red-400">
                  Fonctionnalités Avancées
                </h3>
                <p className="text-gray-400">
                  Découvrez les fonctionnalités qui améliorent votre expérience de visionnage.
                </p>
              </Link>
            </div>
          </section>
        </main>

        {/* Footer */}
        
      </div>
    </>
  );
}