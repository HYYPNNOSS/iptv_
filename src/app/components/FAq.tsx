// import { ChevronRight } from 'lucide-react'

export default function FAQSection() {
  return (
    <section className="bg-[#141414] text-white py-8 xs:py-12 sm:py-16 px-3 xs:px-4 sm:px-6">
      <div className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl lg:max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-6 xs:mb-8 sm:mb-12">Questions Fréquemment Posées</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          <div className="border-b border-gray-700 pb-3 xs:pb-4">
            <h3 className="text-lg xs:text-xl font-semibold text-white">Comment fonctionne votre service IPTV ?</h3>
            <p className="text-gray-300 mt-2 text-sm xs:text-base">Notre service IPTV vous permet de regarder des chaînes en direct via Internet, sans antenne ni câble.</p>
          </div>
          <div className="border-b border-gray-700 pb-3 xs:pb-4">
            <h3 className="text-lg xs:text-xl font-semibold text-white">Sur quels appareils puis-je regarder ?</h3>
            <p className="text-gray-300 mt-2 text-sm xs:text-base">Vous pouvez regarder sur Smart TV, PC, smartphone, tablette ou box Android.</p>
          </div>
          <div className="border-b border-gray-700 pb-3 xs:pb-4">
            <h3 className="text-lg xs:text-xl font-semibold text-white">Fournissez-vous un guide TV (EPG) ?</h3>
            <p className="text-gray-300 mt-2 text-sm xs:text-base">Oui, la plupart de nos bouquets incluent un guide TV électronique mis à jour régulièrement.</p>
          </div>
          <div className="border-b border-gray-700 pb-3 xs:pb-4">
            <h3 className="text-lg xs:text-xl font-semibold text-white">Puis-je utiliser mon abonnement sur plusieurs appareils ?</h3>
            <p className="text-gray-300 mt-2 text-sm xs:text-base">L&apos;abonnement est valable pour un seul appareil à la fois, sauf mention contraire.</p>
          </div>
          <div className="border-b border-gray-700 pb-3 xs:pb-4">
            <h3 className="text-lg xs:text-xl font-semibold text-white">Quelles chaînes sont incluses ?</h3>
            <p className="text-gray-300 mt-2 text-sm xs:text-base">Nous proposons un large choix de chaînes internationales, francophones et premium.</p>
          </div>
          <div className="border-b border-gray-700 pb-3 xs:pb-4">
            <h3 className="text-lg xs:text-xl font-semibold text-white">Que faire si ma connexion est lente ?</h3>
            <p className="text-gray-300 mt-2 text-sm xs:text-base">Nous recommandons une connexion stable de 10 Mbps minimum. Essayez aussi de redémarrer votre box ou de changer de lien.</p>
          </div>
        </div>

        <div className="mt-8 xs:mt-10 text-center">
          <a
            href="/faq"
            className="inline-flex items-center text-red-600 hover:text-red-500 font-semibold text-base xs:text-lg transition duration-300"
          >
            Voir toutes les questions
            {/* <ChevronRight className="ml-2 h-5 w-5" /> */}
          </a>
        </div>
      </div>
    </section>
  )
}
