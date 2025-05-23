'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/offres-iptv', label: 'Offres IPTV' },
    { href: '/chaines-iptv', label: 'Chaînes IPTV' },
    { href: '/iptv-france', label: 'IPTV France' },
    { href: '/integration-iptv', label: 'Intégration IPTV' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? '' : 'bg-transparent md:bg-transparent'
      } text-white py-4 px-6`}
    >
      <div className={`max-w-7xl mx-auto flex items-center gap-10 px-4 py-4 justify-between bg-[rgba(0,0,0,0.35)] rounded-[15px] border border-[#1f1f1f] backdrop-blur-md transition-all duration-300 ${
        isOpen ? 'rounded-b-none' : ''
      }`}>
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          SMARTERIPTV
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 text-sm">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-red-500">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buy Button */}
        <Link
          href="/offres-iptv"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition"
        >
          Acheter maintenant
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden space-y-2 text-sm bg-[rgba(0,0,0,0.35)] backdrop-blur-md border border-[#1f1f1f] border-t-0 rounded-b-[15px] px-4 py-2">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-red-600 rounded"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/acheter"
            onClick={() => setIsOpen(false)}
            className="block mt-2 bg-red-600 hover:bg-red-700 text-center text-white font-medium py-2 px-4 rounded"
          >
            Acheter maintenant
          </Link>
        </div>
      )}
    </header>
  )
}
