
'use client';
import { motion } from 'framer-motion';

export default function Home() {
  const plans = [
    {
      name: "Plan Découverte",
      price: "9.99€",
      duration: "1 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support 24/7"],
      url: "https://smartpro.agency/secure/3m-sp/"
    },
    {
      name: "Plan Essentiel",
      price: "24.99€",
      duration: "3 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support 24/7", "HD & FHD"],
      url: "https://smartpro.agency/secure/6m-sp/"
    },
    {
      name: "Plan Premium",
      price: "39.99€",
      duration: "6 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support 24/7", "HD & FHD", "4K"],
      url: "https://smartpro.agency/secure/12m-sp/"
    },
    {
      name: "Plan Annuel",
      price: "69.99€",
      duration: "12 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support 24/7", "HD & FHD", "4K"],
      url: "https://smartpro.agency/secure/24m-sp/"
    },
    {
      name: "Plan Famille",
      price: "89.99€",
      duration: "12 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support 24/7", "4 connexions"],
      url: "https://smartpro.agency/secure/3m-sp-2/"
    },
    {
      name: "Plan Business",
      price: "129.99€",
      duration: "12 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support prioritaire", "10 connexions"],
      url: "https://smartpro.agency/secure/3m-sp-3/"
    },
    {
      name: "Plan Elite",
      price: "149.99€",
      duration: "12 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support VIP", "Connexions illimitées"],
      url: "https://smartpro.agency/secure/12m-sp-2/"
    },
    {
      name: "Plan Ultime",
      price: "199.99€",
      duration: "24 mois",
      features: ["4000+ chaînes", "VOD inclus", "Support VIP", "Tout inclus"],
      url: "https://smartpro.agency/secure/24m-sp-2/"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">IPTV Premium</h1>
        <p className="text-xl text-center mb-12">Choisissez votre plan et profitez du meilleur de la télévision</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <div className="text-3xl font-bold mb-2">{plan.price}</div>
              <div className="text-gray-300 mb-6">{plan.duration}</div>
              <ul className="mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.url}
                className="block w-full  bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300"
                target='_blank'
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
