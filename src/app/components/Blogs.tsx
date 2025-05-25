import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "Les 5 raisons d'opter pour notre IPTV",
    excerpt: "Découvrez pourquoi notre service IPTV se démarque : qualité HD, stabilité, support réactif et plus encore.",
    date: "16 Jan 2025",
    image: "/movies_67.webp",
  },
  {
    id: 2,
    title: "Comment configurer l'IPTV sur Smart TV",
    excerpt: "Un guide rapide et simple pour installer votre abonnement IPTV sur votre télé connectée en quelques minutes.",
    date: "16 Jan 2025",
    image: "/movies_67.webp",
  },
  {
    id: 3,
    title: "Les erreurs à éviter avec l'IPTV",
    excerpt: "Évitez les pièges courants comme les liens instables, les VPN mal configurés ou les applications obsolètes.",
    date: "16 Jan 2025",
    image: "/movies_67.webp",
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#141414] text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-0 mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Nos derniers articles</h2>
          <Link href="/blogs" className="text-red-600 hover:text-red-500 inline-flex items-center font-medium text-xs xs:text-sm sm:text-base">
            Voir plus d&apos;articles <ArrowRight className="ml-1 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition hover:transform hover:scale-[1.02] duration-300">
              <div className="relative w-full h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold">{post.title}</h3>
                <p className="text-gray-300 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between text-xs xs:text-sm sm:text-base px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  {post.date}
                </div>
                <Link href={`/blogs/${post.id}`} className="text-red-600 hover:text-red-500 inline-flex items-center">
                  Lire la suite <ArrowRight className="ml-1 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
