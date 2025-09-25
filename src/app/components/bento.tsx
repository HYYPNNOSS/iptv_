import { Film, Globe, Trophy, BookOpen, Baby, Lock } from 'lucide-react';
import Image from 'next/image';

export default function Bento() {
  const hoverAnimation = "transition-all duration-300 hover:scale-[1.02] cursor-pointer";
  
  return (
    <div className="mx-auto px-3 sm:px-6 py-6 min-h-[100vh] font-sans bg-[#141414]">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-200">IPTV Bento Box</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 p-2 sm:p-4 rounded-xl">
        <div className={`${hoverAnimation} h-[250px] xs:h-[300px] sm:h-[350px] sm:col-span-2 lg:col-span-6 bg-[#101010] rounded-lg relative overflow-visible`}>
          <div className="p-3 sm:p-4 h-1/2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-200">Films & Séries</h3>
              <div className="bg-[#141414] p-2 rounded-full">
                <Film className="text-gray-300" size={20} />
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">Profitez des derniers blockbusters et séries populaires en français.</p>
          </div>
          <div className="h-1/2 relative">
            <Image 
              src="/charcters-movie.png" 
              alt="Films et séries"
              width={400}
              height={300}
              className="absolute right-0 bottom-0 w-[200px] xs:w-[300px] sm:w-[400px] h-fit object-cover z-10" 
            />
          </div>
        </div>
        
        <div className={`${hoverAnimation} h-[200px] xs:h-[250px] sm:h-[300px] lg:col-span-3 bg-[#121212] rounded-lg relative overflow-visible`}>
          <div className="p-3 h-1/2">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-200">Actualités</h3>
              <div className="bg-[#141414] p-1.5 rounded-full">
                <Globe className="text-gray-300" size={16} />
              </div>
            </div>
            <p className="text-gray-400 text-xs">Chaînes d&apos;information en continu françaises et internationales.</p>
          </div>
          <div className="h-1/2 relative">
            <Image 
              src="/news.png" 
              alt="Actualités" 
              width={250}
              height={200}
              className="absolute right-5 bottom-5 w-[150px] xs:w-[200px] sm:w-[250px] h-fit object-cover"
            />
          </div>
        </div>
        
        <div className={`${hoverAnimation} h-[200px] xs:h-[250px] sm:h-[300px] lg:col-span-3 bg-[#121212] rounded-lg relative overflow-visible`}>
          <div className="p-3 h-1/2">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-200">Sport</h3>
              <div className="bg-[#141414] p-1.5 rounded-full">
                <Trophy className="text-gray-300" size={16} />
              </div>
            </div>
            <p className="text-gray-400 text-xs">Football, tennis, rugby et plus encore en direct.</p>
          </div>
          <div className="h-1/2 relative">
            <Image 
              src="/4026.png" 
              alt="Sport" 
              width={300}
              height={200}
              className="absolute right-0 bottom-0 w-[150px] xs:w-[200px] sm:w-[300px] h-fit object-cover"
            />
          </div>
        </div>
        
        <div className={`${hoverAnimation} h-[200px] xs:h-[250px] sm:h-[300px] lg:col-span-4 bg-[#121212] rounded-lg relative overflow-visible`}>
          <div className="p-3 h-1/2">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-200">Documentaires</h3>
              <div className="bg-[#141414] p-1.5 rounded-full">
                <BookOpen className="text-gray-300" size={16} />
              </div>
            </div>
            <p className="text-gray-400 text-xs">Contenus enrichissants sur la nature, l&apos;histoire et la science.</p>
          </div>
          <div className="h-1/2 relative">
            <Image 
              src="/animal.png" 
              alt="Documentaires" 
              width={350}
              height={250}
              className="absolute right-5 bottom-0 w-[150px] xs:w-[250px] sm:w-[350px] h-fit object-cover"
            />
          </div>
        </div>
        
        <div className={`${hoverAnimation} h-[200px] xs:h-[250px] sm:h-[300px] lg:col-span-4 bg-[#121212] rounded-lg relative overflow-visible`}>
          <div className="p-3 h-1/2">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-200">Enfants/Famille</h3>
              <div className="bg-[#141414] p-1.5 rounded-full">
                <Baby className="text-gray-300" size={16} />
              </div>
            </div>
            <p className="text-gray-400 text-xs">Dessins animés et programmes éducatifs pour tous les âges.</p>
          </div>
          <div className="h-1/2 relative">
            <Image 
              src="/SpongeBob.png" 
              alt="Enfants" 
              width={200}
              height={150}
              className="absolute right-5 bottom-5 w-[100px] xs:w-[150px] sm:w-[200px] h-fit object-cover"
            />
          </div>
        </div>
        
        <div className={`${hoverAnimation} h-[200px] xs:h-[250px] sm:h-[300px] lg:col-span-4 bg-[#121212] rounded-lg relative overflow-visible`}>
          <div className="p-3 h-1/2">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-200">Multi-appareils</h3>
              <div className="bg-[#141414] p-1.5 rounded-full">
                <Lock className="text-gray-300" size={16} />
              </div>
            </div>
            <p className="text-gray-400 text-xs">Disponible sur Smart TV, Android, iOS, PC et plus — profitez de l’IPTV sur tous vos appareils.</p>
          </div>
          <div className="h-1/2 relative">
            <Image 
              src="/Devices_colletion.png" 
              alt="Multi-appareils" // SEO Improvement: Updated alt attribute for better description (2025-09-25)


              width={250}
              height={200}
              className="absolute right-0 bottom-0 w-[150px] xs:w-[200px] sm:w-[250px] h-fit object-cover z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}