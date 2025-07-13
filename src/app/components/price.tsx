"use client"
// import { useState } from 'react';
import { Check, Star, Zap, Shield, Headphones } from 'lucide-react';

export default function SEOOptimizedPricing() {
  // const [selectedPlan, setSelectedPlan] = useState('12m');

  const plans = [
    {
      id: '3m',
      name: "IPTV France - 3 Mois",
      price: "19.00€",
      originalPrice: "27.00€",
      duration: "3 mois",
      savings: "30% d'économie",
      popular: false,
      features: [
        "Activation instantanée en 5 minutes",
        "120 000+ chaînes françaises et internationales",
        "Qualité 4K/FHD/HD garantie",
        "Chaînes Premium : Canal+, BeIN Sports",
        "Compatible tous appareils (Smart TV, Android, iOS)",
        "Serveurs français ultra-rapides",
        "Support technique français 24h/24",
        "Guide TV (EPG) intégré",
        "Mise à jour automatique quotidienne",
        "Garantie remboursement 48h"
      ],
      url: "https://smartpro.agency/secure/3m-sp/",
      badge: "Essai Parfait"
    },
    {
      id: '6m',
      name: "IPTV France - 6 Mois",
      price: "22.00€",
      originalPrice: "33.00€",
      duration: "6 mois",
      savings: "35% d'économie",
      popular: false,
      features: [
        "Activation instantanée en 5 minutes",
        "120 000+ chaînes françaises et internationales",
        "Qualité 4K/FHD/HD garantie",
        "Chaînes Premium : Canal+, BeIN Sports, OCS",
        "Compatible tous appareils (Smart TV, Android, iOS)",
        "Serveurs français ultra-rapides",
        "Support technique français 24h/24",
        "Guide TV (EPG) intégré",
        "Mise à jour automatique quotidienne",
        "Garantie remboursement 48h"
      ],
      url: "https://smartpro.agency/secure/6m-sp/",
      badge: "Bon Rapport"
    },
    {
      id: '12m',
      name: "IPTV France - 12 Mois",
      price: "39.00€",
      originalPrice: "60.00€",
      duration: "12 mois",
      savings: "50% d'économie",
      popular: true,
      features: [
        "Activation instantanée en 5 minutes",
        "120 000+ chaînes françaises et internationales",
        "Qualité 4K/FHD/HD garantie",
        "Chaînes Premium : Canal+, BeIN Sports, OCS, RMC",
        "Compatible tous appareils (Smart TV, Android, iOS)",
        "Serveurs français ultra-rapides",
        "Support technique français 24h/24",
        "Guide TV (EPG) intégré",
        "Mise à jour automatique quotidienne",
        "Garantie remboursement 7 jours"
      ],
      url: "https://smartpro.agency/secure/12m-sp/",
      badge: "Plus Populaire"
    },
    {
      id: '24m',
      name: "IPTV France - 24 Mois",
      price: "59.00€",
      originalPrice: "120.00€",
      duration: "24 mois",
      savings: "60% d'économie",
      popular: false,
      features: [
        "Activation instantanée en 5 minutes",
        "120 000+ chaînes françaises et internationales",
        "Qualité 4K/FHD/HD garantie",
        "Chaînes Premium : Canal+, BeIN Sports, OCS, RMC",
        "Compatible tous appareils (Smart TV, Android, iOS)",
        "Serveurs français ultra-rapides",
        "Support technique français 24h/24",
        "Guide TV (EPG) intégré",
        "Mise à jour automatique quotidienne",
        "Garantie remboursement 15 jours"
      ],
      url: "https://smartpro.agency/secure/24m-sp/",
      badge: "Meilleure Valeur"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Streaming Ultra-Rapide",
      desc: "Serveurs optimisés en France pour un streaming sans interruption"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité Garantie",
      desc: "Connexion cryptée et paiements sécurisés par SSL"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Support Français",
      desc: "Équipe technique française disponible 24h/24"
    }
  ];

  return (
    <main className="min-h-screen bg-[#141414] text-white py-12">
      <div className="container mx-auto px-4">
        {/* SEO-optimized headers */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Abonnement IPTV France Pas Cher - Offres 2025
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Découvrez nos tarifs IPTV France premium avec +120 000 chaînes françaises et internationales. 
            Service légal, compatible Smart TV, Android, iOS - Support français 24h/24.
          </p>
        </div>

        {/* Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4 bg-[#1a1a1a] p-6 rounded-lg">
              <div className="text-[#E50914] flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#1a1a1a] border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-[#E50914] shadow-lg shadow-[#E50914]/20' 
                  : 'border-[#333] hover:border-[#E50914]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#E50914] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-[#E50914]">{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">{plan.duration}</div>
                  <div className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {plan.savings}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-[#E50914] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open(plan.url, '_blank')}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#E50914] hover:bg-[#b20710] text-white'
                    : 'bg-[#333] hover:bg-[#E50914] text-white'
                }`}
              >
                Choisir ce Plan
              </button>
            </div>
          ))}
        </div>

        {/* Additional SEO content */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Pourquoi Choisir Notre Service IPTV France ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Légal et Sécurisé</h4>
              <p className="text-gray-400 text-sm">
                Service IPTV 100% légal avec licences officielles. Vos données personnelles sont protégées.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Installation Facile</h4>
              <p className="text-gray-400 text-sm">
                Guide d&apos;installation complet fourni. Compatible avec tous les appareils populaires.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Qualité Premium</h4>
              <p className="text-gray-400 text-sm">
                Streaming 4K disponible, serveurs français optimisés, pas de coupures.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ section for SEO */}
        <div className="bg-[#1a1a1a] rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Questions Fréquentes - IPTV France
          </h3>
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-4">
              <h4 className="font-semibold text-white mb-2">Notre service IPTV est-il légal en France ?</h4>
              <p className="text-gray-400 text-sm">
                Oui, notre service respecte la législation française et dispose des licences nécessaires.
              </p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h4 className="font-semibold text-white mb-2">Quelle connexion internet est nécessaire ?</h4>
              <p className="text-gray-400 text-sm">
                Minimum 10 Mbps pour HD, 25 Mbps recommandés pour 4K. Compatible fibre, ADSL, 4G.
              </p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h4 className="font-semibold text-white mb-2">Puis-je tester avant d&apos;acheter ?</h4>
              <p className="text-gray-400 text-sm">
                Garantie satisfait ou remboursé selon la durée de votre abonnement choisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}