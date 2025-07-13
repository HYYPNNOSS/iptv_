"use client"
import React from 'react';

const Reviews = () => {
  const testimonials = [
    {
      name: 'Thomas M.',
      role: 'Abonné Premium IPTV',
      rating: 5,
      message: 'Service IPTV légal exceptionnel ! La qualité 4K des chaînes françaises est parfaite. Idéal pour regarder TF1, France 2 et Canal+ en streaming sans coupure.',
    },
    {
      name: 'Sophie D.',
      role: 'Abonnée IPTV pas cher depuis 2 ans',
      rating: 5,
      message: 'Parfait pour regarder Ligue 1, Champions League et mes séries Netflix en direct. Meilleur rapport qualité-prix pour un abonnement IPTV France.',
    },
    {
      name: 'Marc L.',
      role: 'Utilisateur Smart TV Samsung',
      rating: 5,
      message: 'Installation facile sur ma Smart TV. Plus de 20 000 chaînes françaises et internationales. Support client réactif 24h/24. Je recommande !',
    },
    {
      name: 'Claire R.',
      role: 'Abonnée Android Box',
      rating: 5,
      message: 'IPTV stable et fluide sur ma box Android. Parfait pour les chaînes sport français et les films VOD. Fonctionne aussi sur iPhone et iPad.',
    },
    {
      name: 'Pierre K.',
      role: 'Client Business',
      rating: 5,
      message: 'Solution IPTV professionnelle pour mon restaurant. Chaînes HD stables, idéal pour diffuser les matchs de foot. Prix compétitif comparé à la concurrence.',
    },
    {
      name: 'Amélie T.',
      role: 'Famille nombreuse',
      rating: 5,
      message: 'IPTV multi-écrans parfait pour toute la famille. Dessins animés pour les enfants, chaînes info pour les adultes. Fonctionne sur tous nos appareils.',
    },
  ];

  return (
    <section className="bg-[#141414] text-white py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl lg:max-w-7xl mx-auto text-center">
        <span className="text-[#E50914] border border-[#E50914] px-3 xs:px-4 py-1 rounded-full text-xs xs:text-sm uppercase tracking-wide">
          Avis Clients IPTV France
        </span>
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 xs:mt-6 mb-4 xs:mb-6">
          Découvrez Pourquoi Nos Clients Choisissent Notre IPTV
        </h2>
        <p className="text-gray-300 mb-8 xs:mb-12 text-sm xs:text-base sm:text-lg max-w-3xl mx-auto">
          Plus de 50 000 clients satisfaits nous font confiance pour leur abonnement IPTV France. 
          Découvrez leurs témoignages sur notre service de streaming légal et stable.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl p-4 xs:p-6 sm:p-8 shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-800"
            >
              <div className="flex mb-4">
                {Array(review.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-label="étoile"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.287-3.957z" />
                    </svg>
                  ))}
              </div>
              
              <p className="text-gray-300 mb-4 xs:mb-6 text-xs xs:text-sm sm:text-base leading-relaxed">{review.message}</p>
              
              <div className="flex items-center mt-auto pt-4 border-t border-gray-700">
                <div className="flex-1">
                  <p className="font-semibold text-xs xs:text-sm sm:text-base text-white">{review.name}</p>
                  <p className="text-xs xs:text-sm text-[#E50914]">{review.role}</p>
                </div>
                <div className="text-xs text-gray-400">
                  Vérifié ✓
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 xs:mt-12 text-center">
          <p className="text-gray-400 text-sm xs:text-base mb-4">
            Rejoignez des milliers de clients satisfaits de notre service IPTV France
          </p>
          <div className="flex flex-wrap justify-center gap-2 xs:gap-4 text-xs xs:text-sm text-gray-500">
            <span>⭐ 4.9/5 sur Trustpilot</span>
            <span>•</span>
            <span>📱 Compatible tous appareils</span>
            <span>•</span>
            <span>🔒 Paiement sécurisé</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;