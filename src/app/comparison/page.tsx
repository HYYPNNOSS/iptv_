"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ComparisonPage() {
  const [selectedService, setSelectedService] = useState('premium');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Comparatif IPTV France - Meilleur service IPTV",
    "description": "Comparaison complète des services IPTV France avec avis, analyse fonctionnalités et évaluation qualité prix",
    "url": "https://iptvfrances.com/comparison",
    "image": "https://iptvfrances.com/images/iptv-comparison-france.jpg",
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "IPTV Frances"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1250"
    }
  };

  const services = [
    {
      id: 'premium',
      name: 'IPTV Premium France',
      price: '19.99€/mois',
      channels: '8000+',
      quality: '4K/HD',
      support: '24/7',
      rating: 4.8,
      features: ['VOD illimité', 'Replay 7 jours', 'Multi-écrans', 'EPG complet']
    },
    {
      id: 'standard',
      name: 'IPTV Standard France',
      price: '12.99€/mois',
      channels: '5000+',
      quality: 'HD/SD',
      support: '12/7',
      rating: 4.3,
      features: ['VOD limité', 'Replay 3 jours', '2 écrans', 'EPG basique']
    },
    {
      id: 'basic',
      name: 'IPTV Basic France',
      price: '8.99€/mois',
      channels: '3000+',
      quality: 'HD/SD',
      support: '8/5',
      rating: 4.0,
      features: ['VOD restreint', 'Replay 1 jour', '1 écran', 'EPG partiel']
    }
  ];

  return (
    <>
      <Head>
        <title>Comparatif IPTV France - Meilleur service IPTV avis | IPTV Frances</title>
        <meta name="description" content="Comparatif IPTV France complet avec avis. Choisir IPTV France facilement grâce à notre analyse fonctionnalités et évaluation qualité prix." />
        <meta name="keywords" content="Comparatif IPTV France, Meilleur service IPTV France avis, Choisir IPTV France, Analyse fonctionnalités IPTV, Évaluation service IPTV, IPTV qualité prix France" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://iptvfrances.com/comparison" />
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
              Comparatif IPTV France
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meilleur service IPTV France avis - Choisir IPTV France avec notre analyse complète
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/guide" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Guide débutant
              </Link>
              <Link href="/setup" className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Configuration
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              Comment choisir IPTV France - Évaluation service IPTV
            </h2>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Notre <strong>comparatif IPTV France</strong> vous aide à trouver le <strong>meilleur service IPTV France</strong> 
                selon vos besoins. Grâce à notre <strong>analyse fonctionnalités IPTV</strong> détaillée et notre 
                <strong>évaluation service IPTV</strong>, vous pouvez <strong>choisir IPTV France</strong> en toute confiance.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analyse complète</h3>
                  <p className="text-gray-400">Évaluation détaillée de chaque service</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Avis vérifiés</h3>
                  <p className="text-gray-400">Retours d&apos;expérience authentiques</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Rapport qualité-prix</h3>
                  <p className="text-gray-400">Meilleur IPTV qualité prix France</p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              IPTV qualité prix France - Tableau comparatif
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-zinc-900 rounded-lg overflow-hidden">
                <thead className="bg-red-600">
                  <tr>
                    <th className="p-4 text-left">Service</th>
                    <th className="p-4 text-center">Prix</th>
                    <th className="p-4 text-center">Chaînes</th>
                    <th className="p-4 text-center">Qualité</th>
                    <th className="p-4 text-center">Support</th>
                    <th className="p-4 text-center">Note</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={service.id} className={index % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-900'}>
                      <td className="p-4">
                        <div className="font-semibold text-red-400">{service.name}</div>
                        <div className="text-sm text-gray-400">
                          {service.features.slice(0, 2).join(', ')}
                        </div>
                      </td>
                      <td className="p-4 text-center font-semibold">{service.price}</td>
                      <td className="p-4 text-center">{service.channels}</td>
                      <td className="p-4 text-center">{service.quality}</td>
                      <td className="p-4 text-center">{service.support}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span>{service.rating}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => setSelectedService(service.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                        >
                          Détails
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              Analyse fonctionnalités IPTV détaillée
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-red-400">
                  Critères d&apos;évaluation service IPTV
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Nombre de chaînes</span>
                    <span className="text-white font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Support client</span>
                    <span className="text-white font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-red-400">
                  Meilleur service IPTV France avis
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-semibold text-white mb-2">IPTV Premium France</h4>
                    <p className="text-gray-300 text-sm">
                      &quot;Excellent service avec une qualité 4K exceptionnelle et un support réactif. 
                      Le meilleur rapport qualité-prix du marché français.&quot;
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-400 mr-2">★★★★★</span>
                      <span className="text-sm text-gray-400">- Jean M.</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">IPTV Standard France</h4>
                    <p className="text-gray-300 text-sm">
                      &quot;Bon compromis entre prix et fonctionnalités. Parfait pour un usage familial 
                      sans besoin de 4K.&quot;
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-400 mr-2">★★★★☆</span>
                      <span className="text-sm text-gray-400">- Marie L.</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">IPTV Basic France</h4>
                    <p className="text-gray-300 text-sm">
                      &quot;Solution économique idéale pour découvrir l&apos;IPTV. Fonctionnalités limitées 
                      mais prix très attractif.&quot;
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-400 mr-2">★★★★☆</span>
                      <span className="text-sm text-gray-400">- Pierre R.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              Comparaison des fonctionnalités IPTV
            </h2>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.id} className={`p-6 rounded-lg border-2 ${
                    selectedService === service.id ? 'border-red-600 bg-zinc-800' : 'border-zinc-700 bg-zinc-800'
                  }`}>
                    <h3 className="text-xl font-semibold mb-4 text-red-400">{service.name}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Prix</span>
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Chaînes</span>
                        <span className="font-semibold">{service.channels}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Qualité</span>
                        <span className="font-semibold">{service.quality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Support</span>
                        <span className="font-semibold">{service.support}</span>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2 text-red-400">Fonctionnalités:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full mt-6 py-2 rounded font-semibold transition-colors ${
                        selectedService === service.id
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-zinc-700 hover:bg-zinc-600 text-white'
                      }`}
                    >
                      {selectedService === service.id ? 'Sélectionné' : 'Sélectionner'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Decision Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              Guide pour choisir IPTV France
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-red-400">
                  Facteurs de décision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Budget disponible</h4>
                      <p className="text-gray-300 text-sm">
                        Définissez votre budget mensuel pour l&apos;IPTV
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Nombre d&apos;appareils</h4>
                      <p className="text-gray-300 text-sm">
                        Combien d&apos;écrans simultanés nécessaires?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Qualité souhaitée</h4>
                      <p className="text-gray-300 text-sm">
                        HD suffit ou besoin du 4K?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contenu préféré</h4>
                      <p className="text-gray-300 text-sm">
                        Sport, films, séries, actualités?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-red-400">
                  Recommandations par profil
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-400 mb-2">Débutant / Budget limité</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      IPTV Basic France - Idéal pour découvrir l&apos;IPTV sans engagement important
                    </p>
                    <Link href="/guide" className="text-red-400 hover:text-red-300 text-sm">
                      → Voir le guide débutant
                    </Link>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-400 mb-2">Famille / Usage standard</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      IPTV Standard France - Parfait équilibre fonctionnalités/prix
                    </p>
                    <Link href="/channels" className="text-red-400 hover:text-red-300 text-sm">
                      → Voir les chaînes disponibles
                    </Link>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-400 mb-2">Passionné / Qualité maximale</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      IPTV Premium France - Toutes les fonctionnalités avancées
                    </p>
                    <Link href="/features" className="text-red-400 hover:text-red-300 text-sm">
                      → Découvrir les fonctionnalités
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-500">
              Spécifications techniques - Analyse détaillée
            </h2>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left p-4 text-red-400">Caractéristique</th>
                      <th className="text-center p-4 text-red-400">Premium</th>
                      <th className="text-center p-4 text-red-400">Standard</th>
                      <th className="text-center p-4 text-red-400">Basic</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 font-semibold">Résolution maximale</td>
                      <td className="text-center p-4">4K UHD</td>
                      <td className="text-center p-4">Full HD</td>
                      <td className="text-center p-4">HD</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 font-semibold">Codecs supportés</td>
                      <td className="text-center p-4">H.264, H.265, AV1</td>
                      <td className="text-center p-4">H.264, H.265</td>
                      <td className="text-center p-4">H.264</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 font-semibold">Débit requis</td>
                      <td className="text-center p-4">25 Mbps</td>
                      <td className="text-center p-4">15 Mbps</td>
                      <td className="text-center p-4">10 Mbps</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 font-semibold">Connexions simultanées</td>
                      <td className="text-center p-4">5</td>
                      <td className="text-center p-4">3</td>
                      <td className="text-center p-4">1</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 font-semibold">Compatibilité</td>
                      <td className="text-center p-4">Tous appareils</td>
                      <td className="text-center p-4">Tous appareils</td>
                      <td className="text-center p-4">Limité</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <Link href="/setup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Guide configuration technique
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
              <Link href="/guide" className="block bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-red-400">Guide</h3>
                <p className="text-gray-300 text-sm">Instructions d&apos;installation et aide débutant</p>
              </Link>
              <Link href="/setup" className="block bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-red-400">Configuration</h3>
                <p className="text-gray-300 text-sm">Installation technique et dépannage</p>
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