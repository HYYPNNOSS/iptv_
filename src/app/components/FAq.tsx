"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  // const [openIndex, setOpenIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const faqData = [
    {
      question: "Comment fonctionne l'IPTV France en 2025 ?",
      answer: "Notre service IPTV France vous permet de regarder plus de 20 000 chaînes françaises et internationales en direct via Internet. Compatible avec Smart TV, Android Box, PC, smartphone et tablette. Installation simple en 5 minutes avec notre guide détaillé."
    },
    {
      question: "Quel est le prix d'un abonnement IPTV pas cher ?",
      answer: "Nos tarifs débutent à 9,99€/mois pour l'abonnement IPTV France. Offres spéciales : 6 mois à 49,99€ et 12 mois à 79,99€. Paiement sécurisé par PayPal, carte bancaire. Garantie satisfait ou remboursé 7 jours."
    },
    {
      question: "Sur quels appareils puis-je regarder l'IPTV ?",
      answer: "Compatible avec Smart TV Samsung, LG, Sony, Android TV, Fire TV Stick, PC Windows/Mac, smartphones Android/iPhone, tablettes iPad. Applications dédiées pour chaque plateforme. Streaming HD et 4K disponible."
    },
    {
      question: "Quelles chaînes françaises sont incluses ?",
      answer: "Toutes les chaînes françaises populaires : TF1, France 2, France 3, Canal+, M6, Arte, C8, W9, TMC, TFX, NRJ12, LCI, BFMTV, France Info, Eurosport, RMC Sport, plus les chaînes régionales et internationales."
    },
    {
      question: "L'IPTV est-il légal en France ?",
      answer: "Oui, notre service IPTV respecte la législation française. Nous proposons uniquement des chaînes légales avec les droits de diffusion appropriés. Service déclaré auprès des autorités compétentes."
    },
    {
      question: "Quelle connexion Internet faut-il pour l'IPTV ?",
      answer: "Connexion Internet stable de 10 Mbps minimum recommandée pour la HD, 25 Mbps pour la 4K. Fonctionne avec ADSL, fibre optique, 4G/5G. Pas de limitation de bande passante."
    },
    {
      question: "Puis-je regarder sur plusieurs appareils simultanément ?",
      answer: "Formule standard : 1 appareil. Formule Famille : 3 appareils simultanés. Formule Premium : 5 appareils. Changement d'appareil possible à tout moment via votre espace client."
    },
    {
      question: "Y a-t-il un guide TV (EPG) français ?",
      answer: "Oui, guide TV électronique (EPG) complet en français avec programme détaillé sur 7 jours. Recherche par genre, rappels automatiques, enregistrement possible selon formule choisie."
    },
    {
      question: "Comment installer l'IPTV sur Smart TV ?",
      answer: "Installation facile : téléchargez l'application depuis le store de votre Smart TV (Samsung, LG, Sony), entrez vos identifiants, et profitez immédiatement de vos chaînes. Guide d'installation vidéo fourni."
    },
    {
      question: "Que faire si l'IPTV ne fonctionne pas ?",
      answer: "Support technique 24h/24 par chat, email, téléphone. Solutions rapides : redémarrage box Internet, changement de serveur, mise à jour application. Taux de disponibilité 99,9%."
    },
    {
      question: "Puis-je regarder Netflix et Amazon Prime ?",
      answer: "Notre service IPTV inclut un accès aux plateformes VOD populaires selon votre abonnement. Catalogue mis à jour régulièrement avec les derniers films et séries français et internationaux."
    },
    {
      question: "Comment regarder le sport en direct ?",
      answer: "Accès aux chaînes sport : RMC Sport, Eurosport, beIN Sports, Canal+ Sport. Tous les matchs de Ligue 1, Champions League, Premier League, tennis, formule 1 en direct et en replay."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  return (
    <section className="bg-[#141414] text-white py-8 xs:py-12 sm:py-16 px-3 xs:px-4 sm:px-6">
      <div className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl lg:max-w-5xl mx-auto">
        <div className="text-center mb-8 xs:mb-12">
          <span className="text-[#E50914] border border-[#E50914] px-3 xs:px-4 py-1 rounded-full text-xs xs:text-sm uppercase tracking-wide">
            FAQ IPTV France
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mt-4 xs:mt-6 mb-4">
            Questions Fréquentes sur l&apos;IPTV France 2025
          </h2>
          <p className="text-gray-300 text-sm xs:text-base max-w-2xl mx-auto">
            Trouvez toutes les réponses à vos questions sur notre service IPTV France. 
            Support technique disponible 24h/24 pour vous accompagner.
          </p>
        </div>

        <div className="space-y-3 xs:space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 xs:px-6 py-4 xs:py-5 flex items-center justify-between text-left hover:bg-[#252525] transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base xs:text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#E50914] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 xs:px-6 pb-4 xs:pb-5">
                  <p className="text-gray-300 text-sm xs:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 xs:mt-12 text-center">
          <div className="bg-[#1a1a1a] rounded-lg p-6 xs:p-8 border border-gray-800">
            <h3 className="text-xl xs:text-2xl font-semibold mb-4 text-white">
              Besoin d&apos;aide supplémentaire ?
            </h3>
            <p className="text-gray-300 mb-6 text-sm xs:text-base">
              Notre équipe support est disponible 24h/24 pour répondre à toutes vos questions sur l&apos;IPTV France
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#E50914] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d40813] transition-colors duration-200"
              >
                Contacter le Support
              </a>
              <a
                href="/guide-installation"
                className="border border-[#E50914] text-[#E50914] px-6 py-3 rounded-lg font-semibold hover:bg-[#E50914] hover:text-white transition-colors duration-200"
              >
                Guide d&apos;Installation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 xs:mt-10 text-center">
          <a
            href="/faq"
            className="inline-flex items-center text-[#E50914] hover:text-red-500 font-semibold text-base xs:text-lg transition duration-300"
          >
            Voir toutes les questions IPTV
            <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
}