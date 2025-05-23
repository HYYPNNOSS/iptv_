'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Shield, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      {/* Background Image with SEO optimization */}
      <Image
        src="/simple-bg.png" 
        alt="IPTV France - Guide d'intégration et configuration"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-10"></div>

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-full max-w-4xl text-center text-white px-4"
      >
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <span className="text-xs sm:text-sm">Guide Complet</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span className="text-xs sm:text-sm">Support 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            <span className="text-xs sm:text-sm">Installation Facile</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Guide d&apos;Intégration IPTV
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Configurez votre service IPTV en quelques minutes – guide étape par étape pour tous vos appareils.
        </p>

        {/* Reviews */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-300">4.9/5 basé sur 2,500+ avis</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
          <Link href="/guide-installation" className="group w-full sm:w-auto">
            <div className="bg-[#E50914] hover:bg-[#b0060f] transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white text-base sm:text-lg flex items-center justify-center gap-2 group-hover:scale-105">
              Guide d&apos;Installation
              <span className="text-lg sm:text-xl">→</span>
            </div>
          </Link>
          <Link href="/contact" className="group w-full sm:w-auto">
            <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white text-base sm:text-lg flex items-center justify-center gap-2 group-hover:scale-105">
              Besoin d&apos;Aide ?
              <span className="text-lg sm:text-xl">→</span>
            </div>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Installation en 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Guide vidéo inclus</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Support technique</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Compatibilité garantie</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
