import { Tv, Wifi, Shield, Smartphone, Clock, Zap,  Users, Globe, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const features = [
    {
      icon: <Tv className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Qualité 4K/HD Premium",
      description: "Streaming en Ultra HD 4K et Full HD sur toutes les chaînes françaises et internationales"
    },
    {
      icon: <Wifi className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Serveur Français Stable",
      description: "Serveurs optimisés en France pour une connexion ultra-stable 99.9% du temps"
    },
    {
      icon: <Shield className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Installation Gratuite",
      description: "Configuration gratuite et support technique français pour tous vos appareils"
    },
    {
      icon: <Smartphone className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Compatible Tous Appareils",
      description: "Smart TV Samsung/LG, Android Box, Firestick, iPhone, iPad, PC et MAG"
    },
    {
      icon: <PlayCircle className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "VOD Illimitée",
      description: "Bibliothèque de +50 000 films et séries français et internationaux"
    },
    {
      icon: <Users className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Multi-Connexions",
      description: "Regardez simultanément sur 2 appareils avec un seul abonnement"
    }
  ];

  const stats = [
    { number: "120k+", label: "Chaînes TV", icon: <Tv className="w-5 h-5" /> },
    { number: "50k+", label: "Films & Séries", icon: <PlayCircle className="w-5 h-5" /> },
    { number: "99.9%", label: "Disponibilité", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support FR", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <section className="bg-[#141414] text-white py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 md:px-16">
      <div className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl lg:max-w-7xl mx-auto">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <span className="text-[#E50914] border border-[#E50914] px-3 xs:px-4 py-1 rounded-full text-xs xs:text-sm uppercase tracking-wide">
            Service IPTV France
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mt-4 xs:mt-6 mb-3 xs:mb-4">
            Pourquoi Choisir Notre <span className="text-[#E50914]">Abonnement IPTV Premium</span> ?
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            <strong>IPTV France Premium</strong> est le service de streaming TV français le plus complet avec 
            un accès instantané à plus de <strong>120 000 chaînes TV françaises</strong> et internationales, 
            films récents et séries populaires. Notre <strong>abonnement IPTV pas cher</strong> fonctionne 
            parfaitement sur Smart TV Samsung, LG, Android Box, Firestick et tous appareils.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-xl p-4 text-center border border-[#333] hover:border-[#E50914] transition-all duration-300">
              <div className="flex justify-center mb-2 text-[#E50914]">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-center">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E50914]/20 to-[#E50914]/30 rounded-full blur-xl opacity-20"></div>
            <Image
              width={250}
              height={250}
              src="/iptv-about.png"
              alt="IPTV France Premium - Service streaming TV français compatible tous appareils"
              className="w-[250px] xs:w-[300px] sm:w-[400px] md:w-[500px] h-auto relative z-10"
              // SEO Improvement: Removed 'unoptimized' prop for better image optimization (2025-09-25)
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-4 xs:p-5 sm:p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-[#333] hover:border-[#E50914]/50"
              >
                <div className="text-[#E50914] mb-3 xs:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg xs:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-xs xs:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="mt-12 sm:mt-16 bg-[#1a1a1a] rounded-xl p-6 sm:p-8 border border-[#333]">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center text-white">
            Abonnement IPTV France : La Solution Complète
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-[#E50914] mb-2">Chaînes TV Françaises</h4>
              <p>TF1, France 2, M6, Canal+, BeIN Sports, RMC Sport et toutes les chaînes TNT en HD/4K</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#E50914] mb-2">Compatible Tous Opérateurs</h4>
              <p>Fonctionne avec Orange, SFR, Bouygues, Free et toutes les connexions Internet françaises</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#E50914] mb-2">Installation Facile</h4>
              <p>Configuration en 5 minutes sur Smart TV, Android Box, Firestick ou application mobile</p>
            </div>
          </div>
        </div>

        <div className="mt-8 xs:mt-12 sm:mt-16 flex flex-col xs:flex-row items-center justify-center gap-4 xs:gap-8 text-gray-400">
          <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-lg">
            <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-[#E50914]" />
            <span className="text-sm xs:text-base">Support technique français 24/7</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-lg">
            <Zap className="w-4 h-4 xs:w-5 xs:h-5 text-[#E50914]" />
            <span className="text-sm xs:text-base">Activation instantanée</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-lg">
            <Globe className="w-4 h-4 xs:w-5 xs:h-5 text-[#E50914]" />
            <span className="text-sm xs:text-base">Serveurs français optimisés</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;