import Image from 'next/image';

const Hero = () => {
    return (
      <section className="relative bg-[#141414] text-white h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden">
        <Image 
          src="/simple-bg.png" 
          alt="background" 
          fill
          priority
          className="object-cover z-0"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 z-0"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Votre télévision. <span className="text-[#E50914]">Instantanément.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Profitez de chaînes en direct, de films et de séries, partout, à tout moment. Sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#E50914] hover:bg-red-700 transition px-8 py-3 rounded-lg font-semibold text-white text-lg shadow-md">
              Acheter maintenant
            </button>
            <button className="bg-white text-black hover:bg-gray-200 transition px-8 py-3 rounded-lg font-semibold text-lg shadow-md">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;