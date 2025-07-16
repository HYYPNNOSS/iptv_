'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Shield, Clock, Users, CheckCircle2, Play, Tv, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      
      <Image
        src="/movies_67.webp" 
        alt="IPTV France Premium - Service de streaming TV français avec +120k chaînes HD/4K"
        fill
        priority
        className="object-cover object-center z-0"
      />

      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-10"></div>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-full max-w-4xl text-center text-white px-4"
      >
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-xs sm:text-sm">Abonnement Garanti</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-xs sm:text-sm">Support 24/7</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-xs sm:text-sm">+15,000 Clients</span>
          </div>
        </div>

        {/* Single H1 Tag - SEO Optimized */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Abonnement <span className="text-[#E50914]">IPTV Premium France</span> 2025
          <br className="hidden sm:block" />
          <span className="text-2xl sm:text-3xl md:text-4xl block mt-2 text-gray-300">
            +120k Chaînes HD/4K • Installation Gratuite
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
          Découvrez le <strong>meilleur service IPTV France</strong> avec plus de 120 000 chaînes TV françaises et internationales, 
          films récents et séries populaires en qualité <strong>HD/4K</strong>. 
          <span className="text-[#E50914] font-semibold"> Installation gratuite</span> sur Smart TV Samsung/LG, Android Box, 
          Firestick, iPhone et tous appareils. Support technique français 24/7 inclus.
        </p>

        {/* Key Features for SEO */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 sm:mb-8 text-sm">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
            <Tv className="w-4 h-4 text-[#E50914]" />
            <span>Smart TV</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
            <Smartphone className="w-4 h-4 text-[#E50914]" />
            <span>Android Box</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
            <Play className="w-4 h-4 text-[#E50914]" />
            <span>Firestick</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
            <span>4K/HD</span>
          </div>
        </div>

        {/* Reviews with Schema markup context */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
        <div className="flex" itemScope itemType="https://schema.org/AggregateRating">
  <meta itemProp="ratingValue" content="4.9" />
  <meta itemProp="reviewCount" content="2500" />
  <meta itemProp="bestRating" content="5" />
  <meta itemProp="worstRating" content="1" />
  
  {/* CORRECTED PART: Define the itemReviewed as a Product */}
  <span itemProp="itemReviewed" itemScope itemType="https://schema.org/Product">
    <meta itemProp="name" content="IPTV France Premium" />
    {/* You can add more properties for the Product here if applicable,
        e.g., description, brand, offers, image, productID (SKU/MPN/GTIN) */}
    {/* Example if you have an offer: */}
    {/* <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="priceCurrency" content="EUR" />
        <meta itemProp="price" content="29.99" />
        <meta itemProp="availability" content="https://schema.org/InStock" />
    </span> */}
  </span>

  {[...Array(5)].map((_, i) => (
    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
  ))}
</div>
          <span className="text-xs sm:text-sm text-gray-300">
            <span itemProp="ratingValue">4.9</span>/5 basé sur <span itemProp="reviewCount">2,500+</span> avis clients français
          </span>
        </div>

        {/* CTA Buttons with keyword optimization */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
          <Link href="/offres-iptv" className="group w-full sm:w-auto">
            <div className="bg-[#E50914] hover:bg-[#b0060f] transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white text-base sm:text-lg flex items-center justify-center gap-2 group-hover:scale-105 shadow-lg">
              <Play className="w-5 h-5" />
              Voir nos Offres IPTV
              <span className="text-lg sm:text-xl">→</span>
            </div>
          </Link>
          <Link href="/contact" className="group w-full sm:w-auto">
            <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white text-base sm:text-lg flex items-center justify-center gap-2 group-hover:scale-105 border border-white/20">
              <CheckCircle2 className="w-5 h-5" />
              Essai Gratuit
              <span className="text-lg sm:text-xl">→</span>
            </div>
          </Link>
        </div>

        {/* Trust indicators with French market focus */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Installation gratuite</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Compatible tous appareils</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Satisfait ou remboursé</span>
          </div>
        </div>

        {/* Additional SEO content */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Service IPTV français compatible avec <strong>Smart TV Samsung, LG, Android Box, Firestick, iPhone, iPad</strong> et PC. 
            Abonnement IPTV pas cher avec chaînes sport, films et séries. Installation et configuration gratuites.
          </p>
        </div>
      </motion.div>
    </section>
  );
}