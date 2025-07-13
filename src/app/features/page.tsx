import { Metadata } from 'next';
import { 
  Play, 
  Tv, 
  Monitor, 
  Smartphone, 
  Wifi,
  Shield, 
  Settings, 
  Users, 
  Building, 
  Star,
  Check,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fonctionnalités IPTV France - Capacités Techniques et Usage Professionnel | IPTV Frances',
  description: 'Découvrez les fonctionnalités avancées IPTV France : 4K, multi-écrans, usage professionnel, capacités techniques et différenciation service IPTV.',
  keywords: 'fonctionnalités IPTV France, capacités techniques IPTV France, IPTV usage professionnel France, fonctionnalité avancée IPTV France, différenciation service IPTV, IPTV 4K France, IPTV multi-écrans France',
  openGraph: {
    title: 'Fonctionnalités IPTV France - Capacités Techniques Avancées',
    description: 'Services IPTV professionnels avec fonctionnalités 4K, multi-écrans et capacités techniques avancées pour la France.',
    url: 'https://iptvfrances.com/features',
    type: 'website',
  },
  alternates: {
    canonical: 'https://iptvfrances.com/features',
  },
};

const FeaturePage = () => {
  const technicalCapabilities = [
    {
      icon: <Play className="w-8 h-8 text-red-500" />,
      title: "Streaming 4K Ultra HD",
      description: "Profitez d'une qualité d'image exceptionnelle avec notre technologie IPTV 4K France pour une expérience visuelle immersive.",
      features: ["Résolution 4K native", "HDR10 et Dolby Vision", "Débit adaptatif intelligent"]
    },
    {
      icon: <Wifi className="w-8 h-8 text-red-500" />,
      title: "Technologie de Streaming Avancée",
      description: "Nos capacités techniques IPTV France garantissent une diffusion fluide et sans interruption.",
      features: ["Protocoles de diffusion optimisés", "Cache intelligent", "Compression vidéo avancée"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Sécurité et Fiabilité",
      description: "Infrastructure sécurisée avec redondance complète pour assurer la continuité du service.",
      features: ["Chiffrement de bout en bout", "Serveurs redondants", "Sauvegarde automatique"]
    }
  ];

  const professionalFeatures = [
    {
      icon: <Building className="w-8 h-8 text-red-500" />,
      title: "IPTV Usage Professionnel France",
      description: "Solutions adaptées aux entreprises, hôtels, restaurants et établissements commerciaux.",
      features: ["Gestion multi-sites", "Tableau de bord administrateur", "Support technique dédié"]
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Gestion Multi-Utilisateurs",
      description: "Contrôle complet des accès utilisateurs avec profils personnalisés.",
      features: ["Profils utilisateur illimités", "Contrôle parental avancé", "Statistiques d'utilisation"]
    },
    {
      icon: <Settings className="w-8 h-8 text-red-500" />,
      title: "Configuration Personnalisée",
      description: "Adaptez le service selon vos besoins spécifiques avec nos outils de configuration.",
      features: ["API de configuration", "Interface personnalisable", "Intégration système"]
    }
  ];

  const multiScreenFeatures = [
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,
      title: "IPTV Multi-écrans France",
      description: "Regardez sur tous vos appareils simultanément avec notre technologie multi-écrans.",
      devices: ["Smart TV", "Ordinateur", "Smartphone", "Tablette"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: "Applications Mobiles",
      description: "Applications natives iOS et Android pour une expérience optimale sur mobile.",
      devices: ["iPhone/iPad", "Android", "Android TV", "Apple TV"]
    },
    {
      icon: <Tv className="w-8 h-8 text-red-500" />,
      title: "Compatibilité Universelle",
      description: "Compatible avec tous les appareils et systèmes d'exploitation populaires.",
      devices: ["MAG Box", "Enigma2", "Kodi/VLC", "Navigateurs web"]
    }
  ];

  const differentiationPoints = [
    "Qualité 4K native sans compression",
    "Serveurs dédiés en France",
    "Support technique 24/7",
    "Interface utilisateur intuitive",
    "Mise à jour automatique des contenus",
    "Garantie de disponibilité 99.9%"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "IPTV Frances - Fonctionnalités Avancées",
    "description": "Service IPTV France avec fonctionnalités 4K, multi-écrans et capacités techniques avancées",
    "url": "https://iptvfrances.com/features",
    "applicationCategory": "Entertainment",
    "operatingSystem": "Android, iOS, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "À partir de 15€/mois",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    },
    "featureList": [
      "IPTV 4K France",
      "Multi-écrans simultanés",
      "Usage professionnel",
      "Capacités techniques avancées",
      "Interface personnalisable",
      "Support 24/7"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-900/20 to-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                Fonctionnalités IPTV France
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Découvrez nos capacités techniques IPTV France et fonctionnalités avancées pour une expérience de streaming exceptionnelle
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="bg-red-600/20 px-3 py-1 rounded-full">4K Ultra HD</span>
                <span className="bg-red-600/20 px-3 py-1 rounded-full">Multi-écrans</span>
                <span className="bg-red-600/20 px-3 py-1 rounded-full">Usage Professionnel</span>
                <span className="bg-red-600/20 px-3 py-1 rounded-full">Streaming Avancé</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                Capacités Techniques IPTV France
              </h2>
              <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Notre infrastructure technique avancée offre des performances exceptionnelles avec une différenciation service IPTV unique sur le marché français.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {technicalCapabilities.map((capability, index) => (
                  <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center mb-4">
                      {capability.icon}
                      <h3 className="text-xl font-semibold ml-3">{capability.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-red-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* IPTV 4K Section */}
              <div className="bg-gradient-to-r from-red-900/30 to-transparent p-8 rounded-lg border border-red-500/30">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Star className="w-6 h-6 text-red-500 mr-2" />
                  IPTV 4K France - Qualité Premium
                </h3>
                <p className="text-gray-300 mb-6">
                  Profitez d&apos;une expérience visuelle incomparable avec notre technologie IPTV 4K France, 
                  offrant une résolution ultra-haute définition et des couleurs éclatantes.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">4K</div>
                    <div className="text-sm text-gray-400">Ultra HD</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">60fps</div>
                    <div className="text-sm text-gray-400">Fluidité</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">HDR10</div>
                    <div className="text-sm text-gray-400">Contraste</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">5.1</div>
                    <div className="text-sm text-gray-400">Son Surround</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Use Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                IPTV Usage Professionnel France
              </h2>
              <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Solutions professionnelles adaptées aux entreprises, établissements commerciaux et infrastructures nécessitant des fonctionnalités avancées.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {professionalFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-red-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Professional Benefits */}
              <div className="bg-gray-900/30 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Avantages pour les Professionnels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-red-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Hôtels & Restaurants</h4>
                        <p className="text-sm text-gray-400">Diffusion centralisée avec contrôle par zone</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-red-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Bureaux & Entreprises</h4>
                        <p className="text-sm text-gray-400">Espaces communs et salles de réunion</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Settings className="w-5 h-5 text-red-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Centres Commerciaux</h4>
                        <p className="text-sm text-gray-400">Affichage digital et divertissement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-red-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Établissements de Santé</h4>
                        <p className="text-sm text-gray-400">Diffusion sécurisée et contrôlée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Screen Features */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                IPTV Multi-écrans France
              </h2>
              <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Regardez vos contenus préférés sur tous vos appareils simultanément avec notre technologie multi-écrans avancée.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {multiScreenFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.devices.map((device, idx) => (
                        <div key={idx} className="bg-gray-800/50 p-2 rounded text-sm text-center">
                          {device}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Multi-Screen Capabilities */}
              <div className="bg-gradient-to-r from-red-900/30 to-transparent p-8 rounded-lg border border-red-500/30">
                <h3 className="text-2xl font-bold mb-6">
                  Fonctionnalité Avancée IPTV France
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">5</div>
                    <div className="text-sm text-gray-400">Écrans simultanés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">∞</div>
                    <div className="text-sm text-gray-400">Appareils connectés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Disponibilité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Differentiation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                Différenciation Service IPTV
              </h2>
              <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Découvrez ce qui fait la différence de nos services IPTV France par rapport à la concurrence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {differentiationPoints.slice(0, 3).map((point, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                      <Check className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {differentiationPoints.slice(3).map((point, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                      <Check className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Prêt à Découvrir nos Fonctionnalités Avancées ?
                  </h3>
                  <p className="text-gray-100 mb-6">
                    Testez gratuitement toutes nos capacités techniques IPTV France pendant 24 heures
                  </p>
                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                    Essai Gratuit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Questions Fréquentes sur nos Fonctionnalités
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold mb-3">
                    Qu&apos;est-ce qui différencie vos capacités techniques IPTV France ?
                  </h3>
                  <p className="text-gray-400">
                    Nos serveurs dédiés en France, notre technologie 4K native et notre infrastructure redondante 
                    garantissent une qualité de service supérieure avec une latence minimale.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold mb-3">
                    Comment fonctionne l&apos;IPTV multi-écrans France ?
                  </h3>
                  <p className="text-gray-400">
                    Notre technologie permet de diffuser simultanément sur 5 écrans différents avec une 
                    synchronisation parfaite et une qualité optimisée pour chaque appareil.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold mb-3">
                    Quelles sont les options pour l&apos;IPTV usage professionnel France ?
                  </h3>
                  <p className="text-gray-400">
                    Nous proposons des solutions sur-mesure avec gestion centralisée, API dédiée, 
                    support technique prioritaire et facturation adaptée aux besoins professionnels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturePage;