const Reviews = () => {
    const testimonials = [
      {
        name: 'Thomas M.',
        role: 'Abonné Premium',
        rating: 5,
        message:
          'Service exceptionnel ! La qualité des chaînes est impeccable et le support client est très réactif. Je recommande vivement pour tous les amateurs de streaming.',
      },
      {
        name: 'Sophie D.',
        role: 'Abonnée depuis 2 ans',
        rating: 5,
        message:
          'Parfait pour regarder mes séries préférées et les matchs de foot. La stabilité du service est remarquable, même en période de forte affluence.',
      },
      {
        name: 'Marc L.',
        role: 'Abonné Family',
        rating: 5,
        message:
          'Excellent rapport qualité-prix. Le catalogue est très complet et les mises à jour sont régulières. Un must-have pour les passionnés de télévision.',
      },
    ];
  
    return (
      <section className="bg-[#141414] text-white py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl lg:max-w-7xl mx-auto text-center">
          <span className="text-[#E50914] border border-[#E50914] px-3 xs:px-4 py-1 rounded-full text-xs xs:text-sm uppercase tracking-wide">
            Avis Clients
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 xs:mt-6 mb-8 xs:mb-12">
            Découvrez Ce Que Nos Clients Pensent De Nous !
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] rounded-xl p-4 xs:p-6 sm:p-8 shadow-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-gray-300 mb-4 xs:mb-6 text-xs xs:text-sm sm:text-base">{review.message}</p>
                <div className="flex items-center mt-auto">
                  <div>
                    <p className="font-semibold text-xs xs:text-sm sm:text-base">{review.name}</p>
                    <p className="text-xs xs:text-sm text-gray-400">{review.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.287-3.957z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Reviews;