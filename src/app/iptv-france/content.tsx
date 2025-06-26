"use client"
import Image from "next/image"
import Link from "next/link"

export default function IPTVFrancePage() {
    return (
      <div className="bg-[#141414] text-white space-y-12 sm:space-y-16 md:space-y-24 px-3 sm:px-4 py-24 lg:px-8 xl:px-12">
        
        {/* Pourquoi Choisir */}
        <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Pourquoi Choisir l&apos;IPTV en France ?</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm xs:text-base lg:text-lg">
              <li>
                <Link href="/offres-iptv" className="hover:text-red-500 transition">
                  <strong>IPTV sans buffering</strong> en France
                </Link>
              </li>
              <li>
                <Link href="/integration-iptv" className="hover:text-red-500 transition">
                  <strong>IPTV multi-écrans</strong> pour toute la famille
                </Link>
              </li>
              <li>
                <Link href="/chaines-iptv" className="hover:text-red-500 transition">
                  <strong>IPTV avec replay inclus</strong> pour ne rien manquer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-500 transition">
                  <strong>IPTV sport en direct</strong> France
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Link 
                href="/offres-iptv" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Voir nos offres
              </Link>
              <Link 
                href="/contact" 
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Nous contacter
              </Link>
            </div>
          </div>
          <Image src="/FRANCE-IPTV.png" alt="IPTV en France" width={500} height={300} className="w-full rounded-lg" />
        </section>

        {/* Compatibilité */}
        <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          <Image src="/Devices_colletion.png" alt="Compatibilité IPTV" width={500} height={300} className="w-full rounded-lg" />
          <div>
            <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Compatibilité Universelle</h2>
            <p className="text-gray-300 text-sm xs:text-base lg:text-lg">
              Notre service IPTV fonctionne sur tous vos appareils : <Link href="/integration-iptv" className="hover:text-red-500 transition"><strong>IPTV pour Smart TV Samsung</strong></Link>, <Link href="/integration-iptv" className="hover:text-red-500 transition"><strong>IPTV pour Android Box France</strong></Link>, iPhone, Firestick, ordinateur et plus encore. Consultez notre <Link href="/faq" className="hover:text-red-500 transition">FAQ</Link> pour plus d&apos;informations.
            </p>
            <div className="flex gap-4 mt-6">
              <Link 
                href="/integration-iptv" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Guide d&apos;installation
              </Link>
              <Link 
                href="/blogs" 
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Lire nos articles
              </Link>
            </div>
          </div>
        </section>

        {/* Chaînes Françaises */}
        <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold text-red-500 mb-4 sm:mb-6">Chaînes Françaises Incluses</h2>
          <p className="text-gray-300 text-sm xs:text-base lg:text-lg mb-4 sm:mb-6">Accédez à vos chaînes nationales et premium préférées avec <strong>IPTV en France</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: 'TF1', url: 'https://www.tf1.fr' },
              { name: 'M6', url: 'https://www.6play.fr/m6' },
              { name: 'Canal+', url: 'https://www.canalplus.com' },
              { name: 'Arte', url: 'https://www.arte.tv' },
              { name: 'France 2', url: 'https://www.france.tv/france-2' },
              { name: 'W9', url: 'https://www.6play.fr/w9' },
              { name: 'France 3', url: 'https://www.france.tv/france-3' },
              { name: 'France 4', url: 'https://www.france.tv/france-4' },
              { name: 'France 5', url: 'https://www.france.tv/france-5' },
              { name: 'C8', url: 'https://www.c8.fr' },
              { name: 'CStar', url: 'https://www.cstar.fr' },
              // { name: 'NRJ 12', url: 'https://www.nrj-play.fr/nrj12' },
              { name: 'BFM TV', url: 'https://www.bfmtv.com' },
              { name: 'LCI', url: 'https://www.tf1info.fr/lci' },
              { name: 'CNEWS', url: 'https://www.cnews.fr' },
              { name: 'RMC Story', url: 'https://rmcstory.bfmtv.com' },
              { name: 'RMC Découverte', url: 'https://rmcdecouverte.bfmtv.com' },
              { name: 'Gulli', url: 'https://www.gulli.fr' },
              { name: 'TMC', url: 'https://www.tf1.fr/tmc' },
              // { name: 'TFX', url: 'https://www.tfx.fr' },
              { name: 'TF1 Séries Films', url: 'https://www.tf1.fr/tf1-series-films' },
              { name: '6ter', url: 'https://www.6play.fr/6ter' },
              { name: 'RMC Sport', url: 'https://rmcsport.bfmtv.com' },
              { name: 'beIN SPORTS', url: 'https://www.beinsports.com/france' },
              { name: 'Eurosport', url: 'https://www.eurosport.fr' },
              { name: 'Canal+ Sport', url: 'https://www.canalplus.com/sport' },
              { name: 'Canal+ Cinéma', url: 'https://www.canalplus.com/cinema' },
              { name: 'Canal+ Séries', url: 'https://www.canalplus.com/series' }
            ].map(channel => (
              <a 
                key={channel.name} 
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg px-4 py-3 xs:px-5 xs:py-4 lg:px-6 lg:py-5 text-xs xs:text-sm lg:text-base font-semibold hover:bg-gray-700 transition-colors"
              >
                {channel.name}
              </a>
            ))}
          </div>
        </section>
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
        {/* Rest of the sections remain unchanged */}
        {/* ... */}
      </div>
    )
  }