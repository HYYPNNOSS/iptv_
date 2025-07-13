// pages/setup.js or app/setup/page.js (depending on your Next.js structure)
import Head from 'next/head';
import Link from 'next/link';

export default function Setup() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Configuration IPTV France - Guide Installation et Dépannage",
    "description": "Guide complet pour la configuration IPTV France, compatibilité appareils, dépannage et installation. Solutions pour tous vos problèmes IPTV.",
    "url": "https://iptvfrances.com/setup",
    "mainEntity": {
      "@type": "HowTo",
      "name": "Configuration IPTV France",
      "description": "Guide d'installation et configuration IPTV pour tous appareils en France",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Vérifier la compatibilité de votre appareil",
          "text": "Assurez-vous que votre Smart TV, box Android ou autre appareil est compatible avec notre service IPTV France."
        },
        {
          "@type": "HowToStep", 
          "name": "Télécharger l'application IPTV",
          "text": "Installez l'application IPTV recommandée sur votre appareil."
        },
        {
          "@type": "HowToStep",
          "name": "Configurer les paramètres",
          "text": "Entrez vos identifiants et configurez les paramètres selon votre abonnement IPTV France."
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Configuration IPTV France | Guide Installation et Dépannage | IPTVFrances</title>
        <meta name="description" content="Guide complet configuration IPTV France, compatibilité appareils, dépannage et installation. Solutions pour Smart TV, Android, iOS. Support technique IPTV." />
        <meta name="keywords" content="Configuration IPTV France, Compatibilité appareils IPTV France, Dépannage IPTV France, Guide installation IPTV France, Problème IPTV solution France, IPTV sur Smart TV configuration" />
        <link rel="canonical" href="https://iptvfrances.com/setup" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900 to-black py-30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Configuration IPTV France
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Guide complet d&apos;installation et de dépannage IPTV France
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-red-600 px-4 py-2 rounded-full text-sm">Compatibilité appareils IPTV France</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Dépannage IPTV France</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Guide installation IPTV France</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Device Compatibility Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Compatibilité Appareils IPTV France
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-500">Smart TV</h3>
                <p className="text-gray-300 mb-4">
                  Configuration IPTV sur Smart TV Samsung, LG, Sony et autres marques compatibles.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Samsung Tizen OS</li>
                  <li>• LG webOS</li>
                  <li>• Android TV</li>
                  <li>• Sony Bravia</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-500">Box Android</h3>
                <p className="text-gray-300 mb-4">
                  Installation IPTV France sur box Android et appareils mobiles.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Nvidia Shield</li>
                  <li>• Xiaomi Mi Box</li>
                  <li>• Amazon Fire TV</li>
                  <li>• Smartphones Android</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-500">Autres Appareils</h3>
                <p className="text-gray-300 mb-4">
                  Compatibilité étendue pour une expérience IPTV optimale.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Apple TV</li>
                  <li>• iPhone/iPad</li>
                  <li>• PC/Mac</li>
                  <li>• Décodeurs MAG</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Installation Guide Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Guide Installation IPTV France
            </h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-500">
                    Étapes d&apos;Installation
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold mb-2">Vérification Compatibilité</h4>
                        <p className="text-gray-400">Assurez-vous que votre appareil supporte les applications IPTV et dispose d&apos;une connexion internet stable.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold mb-2">Téléchargement Application</h4>
                        <p className="text-gray-400">Installez l&apos;application IPTV recommandée depuis le store officiel de votre appareil.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold mb-2">Configuration Paramètres</h4>
                        <p className="text-gray-400">Entrez vos identifiants IPTV France et configurez les paramètres selon votre abonnement.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-500">
                    Configuration Recommandée
                  </h3>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center space-x-3">
                        <span className="text-red-500">✓</span>
                        <span>Connexion internet minimum 10 Mbps</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-red-500">✓</span>
                        <span>Résolution 4K supportée</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-red-500">✓</span>
                        <span>Buffer optimisé pour streaming</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-red-500">✓</span>
                        <span>Support multi-écrans</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Dépannage IPTV France
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  Problèmes Courants
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-semibold mb-2">Problème de Connexion</h4>
                    <p className="text-gray-400 text-sm">
                      Vérifiez votre connexion internet et redémarrez votre routeur.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-semibold mb-2">Qualité Vidéo</h4>
                    <p className="text-gray-400 text-sm">
                      Ajustez les paramètres de qualité selon votre débit internet.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-semibold mb-2">Chaînes Manquantes</h4>
                    <p className="text-gray-400 text-sm">
                      Mettez à jour la liste des chaînes ou contactez le support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  Solutions Rapides
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">Redémarrage Application</h4>
                    <p className="text-gray-400 text-sm">
                      Fermez complètement l&apos;application et relancez-la.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">Vider le Cache</h4>
                    <p className="text-gray-400 text-sm">
                      Supprimez le cache de l&apos;application dans les paramètres.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">Mise à Jour</h4>
                    <p className="text-gray-400 text-sm">
                      Vérifiez les mises à jour disponibles pour l&apos;application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Problème IPTV Solution France
            </h2>
            <div className="bg-gradient-to-r from-red-900 to-gray-900 p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Support Technique 24/7
                </h3>
                <p className="text-gray-300 mb-6">
                  Notre équipe d&apos;experts est disponible pour résoudre tous vos problèmes IPTV France.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Contacter le Support
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Guide Vidéo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">
              Ressources Utiles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/channels" className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                <h3 className="text-xl font-semibold mb-4 text-red-500 group-hover:text-red-400">
                  Chaînes IPTV France
                </h3>
                <p className="text-gray-400">
                  Découvrez notre liste complète de chaînes françaises et internationales disponibles.
                </p>
              </Link>
              
              <Link href="/features" className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                <h3 className="text-xl font-semibold mb-4 text-red-500 group-hover:text-red-400">
                  Fonctionnalités IPTV
                </h3>
                <p className="text-gray-400">
                  Explorez toutes les fonctionnalités avancées de notre service IPTV France.
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