'use client'

import { Mail, MessageSquare, Phone } from 'lucide-react'
import { useState } from 'react'



export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle sending form data (e.g. via EmailJS, backend API, etc.)
    console.log('Submitted:', formData)
  }

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <div className="max-w-[1920px] mx-auto py-32 px-6 md:px-16 2xl:px-32">
        <div className="flex flex-col xl:flex-row gap-16">
          {/* Left Side */}
          <div className="w-full xl:w-[60%] space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">Support IPTV en France</h1>
              <p className="text-gray-400 mt-4 text-lg">
                Besoin d&apos;aide avec votre service IPTV ? Notre équipe de support technique est disponible 24/7 pour vous assister.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* WhatsApp Card */}
              <div className="bg-[#1f1f1f] rounded-xl p-8 w-full hover:bg-[#2a2a2a] transition">
                <div className="w-12 h-12 rounded-md mb-5 flex items-center justify-center bg-green-500 text-white">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold">Support WhatsApp</h3>
                <p className="text-base text-gray-400 mt-3">
                  Assistance technique IPTV rapide et efficace via WhatsApp.
                </p>
                <a
                  className="text-base text-green-400 mt-5 inline-block hover:text-green-300 transition"
                  href="https://wa.me/+33756757174"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacter le support →
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-[#1f1f1f] rounded-xl p-8 w-full hover:bg-[#2a2a2a] transition">
                <div className="w-12 h-12 rounded-md mb-5 flex items-center justify-center bg-blue-500 text-white">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-semibold">Support Email</h3>
                <p className="text-base text-gray-400 mt-3">
                  Service client IPTV disponible par email pour toute question.
                </p>
                <a 
                  className="text-base text-blue-400 mt-5 inline-block hover:text-blue-300 transition" 
                  href="mailto:support@iptv-france.com"
                >
                  Envoyer un email →
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-[#1f1f1f] rounded-xl p-8 w-full hover:bg-[#2a2a2a] transition">
                <div className="w-12 h-12 rounded-md mb-5 flex items-center justify-center bg-red-500 text-white">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-semibold">Support Téléphonique</h3>
                <p className="text-base text-gray-400 mt-3">
                  Service client IPTV fiable à Paris et partout en France.
                </p>
                <a 
                  className="text-base text-red-400 mt-5 inline-block hover:text-red-300 transition" 
                  href="tel:+33123456789"
                >
                  Appeler le support →
                </a>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[700px] md:p-10">
            <h2 className="text-3xl font-semibold mb-8">Contactez notre support IPTV</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base font-medium mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-[#141414] border border-[#333] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition text-lg"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-2">Adresse Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-[#141414] border border-[#333] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition text-lg"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-[#141414] border border-[#333] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition text-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-4 px-6 rounded-md text-lg"
              >
                Envoyer au support IPTV
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
