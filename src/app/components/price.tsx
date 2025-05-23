'use client';
import { motion } from 'framer-motion';

export default function Price() {
  const plans = [
    {
      name: "IPTV - 3 Mois",
      price: "19.00€",
      duration: "3 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/3m-sp/"
    },
    {
      name: "IPTV - 6 Mois",
      price: "22.00€",
      duration: "6 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/6m-sp/"
    },
    {
      name: "IPTV - 12 Mois",
      price: "39.00€",
      duration: "12 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/12m-sp/"
    },
    {
      name: "IPTV - 24 Mois",
      price: "59.00€",
      duration: "24 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/24m-sp/"
    },
    {
      name: "IPTV PREMIUM - 3 Mois",
      price: "27.00€",
      duration: "3 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/3m-sp-2/"
    },
    {
      name: "IPTV PREMIUM - 6 Mois",
      price: "42.00€",
      duration: "6 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/3m-sp-3/"
    },
    {
      name: "IPTV PREMIUM - 12 Mois",
      price: "69.00€",
      duration: "12 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/12m-sp-2/"
    },
    {
      name: "IPTV PREMIUM - 24 Mois",
      price: "100.00€",
      duration: "24 mois",
      features: [
        "Activation instantanée",
        "Mise à jour gratuite (TV et VOD)",
        "120 000+ chaînes et VOD",
        "Chaînes 4K FHD HD",
        "Chaînes Premium",
        "Rapide et stable",
        "Formats M3U, MAG, Enigma",
        "Compatible Smart TV / Smartphone / PC",
        "Serveur disponible en continu",
        "Assistance 24h/24 7j/7"
      ],
      url: "https://smartpro.agency/secure/24m-sp-2/"
    }
  ];

  return (
    <main className="min-h-screen bg-[#141414] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">IPTV Premium</h1>
        <p className="text-lg text-center mb-12 text-gray-400">
          Choisissez votre plan et profitez du meilleur de la télévision
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#141414] border border-[#333] rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2 text-white">{plan.name}</h2>
              <div className="text-3xl font-extrabold text-[#E50914] mb-1">{plan.price}</div>
              <div className="text-sm text-gray-500 mb-4 uppercase tracking-wide">{plan.duration}</div>
              <ul className="mb-6 space-y-2 text-sm text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-[#E50914]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.url}
                className="block w-full bg-[#E50914] hover:bg-[#b20710] text-white font-bold py-3 px-4 rounded text-center transition-colors duration-300"
                target="_blank"
              >
                Souscrire Maintenant
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

