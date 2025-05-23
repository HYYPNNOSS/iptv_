import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-400 py-10 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* Section 1 */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-semibold mb-4 text-lg">SMARTERIPTV</h3>
          <p className="max-w-md">
            La meilleure plateforme IPTV pour accéder à vos chaînes préférées avec qualité et simplicité.
          </p>
        </div>

        {/* Section 2 - Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Liens utiles</h3>
          <ul className="space-y-2">
            <li><Link href="/offres-iptv" className="hover:text-red-500 transition-colors">Offres IPTV</Link></li>
            <li><Link href="/chaines-iptv" className="hover:text-red-500 transition-colors">Chaînes IPTV</Link></li>
            <li><Link href="/iptv-france" className="hover:text-red-500 transition-colors">IPTV France</Link></li>
            <li><Link href="/integration-iptv" className="hover:text-red-500 transition-colors">Intégration IPTV</Link></li>
            <li><Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3 - Contact / Social */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Email : support@SMARTERIPTV.com</p>
              <p>Télégram : @SMARTERIPTV</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-500 transition-colors">Facebook</a>
                <a href="#" className="hover:text-red-500 transition-colors">Twitter</a>
                <a href="#" className="hover:text-red-500 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} SMARTERIPTV. Tous droits réservés.
      </div>
    </footer>
  )
}
