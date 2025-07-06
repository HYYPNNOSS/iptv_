import { Tv, Wifi, Shield, Smartphone, Clock, Zap } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const features = [
    {
      icon: <Tv className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Qualité HD",
      description: "Profitez d'une image cristalline en haute définition sur tous vos contenus"
    },
    {
      icon: <Wifi className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Stabilité Garantie",
      description: "Une connexion fluide et stable pour une expérience sans interruption"
    },
    {
      icon: <Shield className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Sans Engagement",
      description: "Flexibilité totale avec des abonnements sans engagement"
    },
    {
      icon: <Smartphone className="w-5 h-5 xs:w-6 xs:h-6" />,
      title: "Multi-Devices",
      description: "Regardez sur tous vos appareils : Smart TV, ordinateur, smartphone et tablette"
    }
  ];

  return (
    <section className="bg-[#141414] text-white py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 md:px-16">
      <div className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl lg:max-w-7xl mx-auto">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <span className="text-[#E50914] border border-[#E50914] px-3 xs:px-4 py-1 rounded-full text-xs xs:text-sm uppercase tracking-wide">
            À Propos
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mt-4 xs:mt-6 mb-3 xs:mb-4">
  Pourquoi Choisir Notre <span className="text-[#E50914]">Service IPTV France</span> ?
</h2>

<p className="text-sm xs:text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
  IPTV France Premium offre la meilleure expérience de streaming TV avec un accès 
  instantané à plus de 120 000 chaînes françaises et internationales, films récents 
  et séries populaires. Notre service IPTV stable et sécurisé fonctionne sur tous 
  vos appareils préférés.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-center">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E50914]/20 to-[#E50914]/30 rounded-full blur-xl opacity-20 rounded-full"></div>
            <Image
              width={250}
              height={250}
              src="/iptv-about.png"
              alt="IPTV Illustration"
              className="w-[250px] xs:w-[300px] sm:w-[400px] md:w-[500px] h-auto relative z-10"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] p-4 xs:p-5 sm:p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#E50914] mb-3 xs:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg xs:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs xs:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 xs:mt-12 sm:mt-16 flex flex-col xs:flex-row items-center justify-center gap-4 xs:gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 xs:w-5 xs:h-5" />
            <span className="text-sm xs:text-base">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 xs:w-5 xs:h-5" />
            <span className="text-sm xs:text-base">Mise à jour instantanée</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;