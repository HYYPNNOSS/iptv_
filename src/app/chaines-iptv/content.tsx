import Image from 'next/image';
import { Tv, Globe, Smartphone, Trophy, Film, Music, Newspaper, Users } from 'lucide-react';
import Link from 'next/link';

export default function ChainesIPTVPage() {
    return (
      <div className="bg-[#141414] text-white space-y-8 sm:space-y-16 px-3 py-24  sm:px-4">
        
        {/* Catégories de chaînes */}
        <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-5xl mx-auto text-center lg:max-w-7xl">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Catégories Disponibles</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 xs:gap-4 sm:gap-6 text-gray-300">
            {[
              { name: 'Actualités', icon: <Newspaper className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> },
              { name: 'Sport', icon: <Trophy className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> },
              { name: 'Films & Séries', icon: <Film className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> },
              { name: 'Jeunesse', icon: <Users className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> },
              { name: 'Documentaires', icon: <Tv className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> },
              { name: 'Divertissement', icon: <Tv className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> },
              { name: 'Musique', icon: <Music className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> },
              { name: 'Internationales', icon: <Globe className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-red-500" /> }
            ].map(category => (
              <Link href="/" key={category.name}>
                <div className="bg-[#1f1f1f] p-3 xs:p-4 sm:p-6 rounded-lg font-semibold hover:bg-[#2a2a2a] transition text-xs xs:text-sm sm:text-base border border-transparent hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20">
                  {category.icon}
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
        </section>
  
        {/* Chaînes Populaires */}
        <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-5xl mx-auto lg:max-w-7xl">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Chaînes Françaises Populaires</h2>
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 items-center text-center">
            {[
              { name: 'TF1', image: '/chaines/tfi.png' },
              { name: 'France 2', image: '/chaines/f2.png' },
              { name: 'M6', image: '/chaines/M6.png' },
              { name: 'Canal+', image: '/chaines/cplus.png' },
              { name: 'C8', image: '/chaines/c8.png' },
              { name: 'RMC Sport', image: '/chaines/rmc.png' }
            ].map(channel => (
              <div key={channel.name} className="bg-[#1f1f1f] rounded-lg py-2 xs:py-3 sm:py-4 text-xs xs:text-sm font-semibold hover:bg-[#2a2a2a] transition flex-[1_1_100%] xs:flex-[1_1_45%] sm:flex-[1_1_30%] md:flex-[1_1_15%] lg:flex-[1_1_12%] border border-transparent hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20">
                <Image 
                  src={channel.image}
                  alt={`Logo ${channel.name}`}
                  width={60}
                  height={60}
                  className="mx-auto mb-2 w-10 h-fit xs:w-12 sm:w-16 hover:scale-110 transition-transform"
                />
                {channel.name}
              </div>
            ))}
          </div>
        </section>
  
        {/* Chaînes Sportives */}
        <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-5xl mx-auto text-center lg:max-w-7xl">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Chaînes de Sport</h2>
          <p className="text-gray-300 mb-6 text-sm xs:text-base sm:text-lg">Accès aux plus grands événements sportifs en direct.</p>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 text-gray-300">
            {[
              { name: 'beIN SPORTS', image: '/chaines-s/bein-sports.png' },
              { name: 'RMC Sport', image: '/chaines-s/rmc.png' },
              { name: 'Eurosport', image: '/chaines-s/euro.png' },
              { name: 'Canal+ Sport', image: '/chaines-s/canalspo.png' }
            ].map(channel => (
              <div key={channel.name} className="bg-[#1f1f1f] p-3 xs:p-4 sm:p-6 rounded-lg font-semibold hover:bg-[#2a2a2a] transition border border-transparent hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20">
                <Image 
                  src={channel.image}
                  alt={`Logo ${channel.name}`}
                  width={80}
                  height={80}
                  className="mx-auto mb-2 w-12 xs:w-16 sm:w-20 h-fit hover:scale-110 transition-transform"
                />
                <span className="text-xs xs:text-sm sm:text-base">{channel.name}</span>
              </div>
            ))}
          </div>
        </section>
  
        {/* Chaînes Internationales */}
        <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-center lg:max-w-7xl">
          <div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">Chaînes du Monde Entier</h2>
            <p className="text-gray-300 text-sm xs:text-base sm:text-lg">
              L&apos;IPTV vous donne accès à des chaînes d&apos;Europe, Afrique, Moyen-Orient, Asie et Amérique.
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1 text-sm xs:text-base sm:text-lg">
              <li><Link href="/iptv-france" className="hover:text-red-500 transition">Chaînes Arabes</Link></li>
              <li><Link href="/iptv-france" className="hover:text-red-500 transition">Chaînes Africaines</Link></li>
              <li><Link href="/iptv-france" className="hover:text-red-500 transition">Chaînes Canadiennes</Link></li>
              <li><Link href="/iptv-france" className="hover:text-red-500 transition">Chaînes Asiatiques</Link></li>
            </ul>
          </div>
          <div className="relative h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <Image 
              src="/map.png"
              alt="Chaînes internationales"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </section>
  
        {/* Compatibilité Appareils */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 lg:max-w-7xl">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image 
              src="/Devices_colletion.png"
              alt="Appareils compatibles"
              fill
              className="rounded-xl object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">Disponible sur Tous les Appareils</h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Profitez de toutes vos chaînes sur Smart TV, Android, iPhone, ordinateur, et plus encore.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6 text-base sm:text-lg">
              {['Smart TV', 'Android', 'iPhone', 'Ordinateur'].map(device => (
                <div key={device} className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 text-red-500" />
                  <span>{device}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/integration-iptv" 
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Guide d&apos;installation
            </Link>
          </div>
        </section>
  
        {/* Qualité HD */}
        <section className="bg-[#1f1f1f] py-12 px-6 rounded-xl max-w-5xl mx-auto text-center lg:max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-semibold text-red-500 mb-4">Qualité d&apos;Image HD et 4K</h2>
          <p className="text-gray-300 lg:text-lg">
            Regardez vos chaînes avec une qualité optimale sans interruption.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {['HD', 'Full HD', '4K', 'HDR'].map(quality => (
              <div key={quality} className="bg-[#2a2a2a] p-4 rounded-lg">
                <span className="font-bold text-red-500">{quality}</span>
              </div>
            ))}
          </div>
        </section>
  
        {/* Questions fréquentes */}
        <section className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-4">FAQ sur les Chaînes IPTV</h2>
          <p className="text-gray-300 mb-6">Tout ce que vous devez savoir sur notre catalogue IPTV.</p>
          <Link href="/faq" className="inline-flex items-center text-red-500 hover:underline">
            Voir toutes les questions <span className="ml-2">→</span>
          </Link>
        </section>
  
        {/* Call to Action */}
        <section className="text-center bg-red-600 py-12 px-6 rounded-xl max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-white">Des milliers de chaînes à portée de main</h2>
          <p className="text-white mb-6">Sans engagement. Qualité garantie.</p>
          <Link href="/offres-iptv" className="bg-white text-red-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Voir les Offres
          </Link>
        </section>
      </div>
    );
  }
  