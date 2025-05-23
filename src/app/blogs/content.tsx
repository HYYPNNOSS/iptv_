import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      category: "Sports",
      title: "Derniers résultats de la Ligue",
      date: "04 Mai 2025",
      image: "/movies_67.jpg",
      description: "Découvrez les scores marquants et les faits saillants des derniers matchs."
    },
    {
      category: "Sports",
      title: "Top 5 matchs à revoir",
      date: "03 Mai 2025",
      image: "/movies_67.jpg",
      description: "Revivez les moments les plus palpitants des matchs incontournables."
    },
    {
      category: "Sports",
      title: "Les JO 2025 en streaming",
      date: "02 Mai 2025",
      image: "/movies_67.jpg",
      description: "Comment suivre les Jeux Olympiques en direct avec notre plateforme IPTV."
    },

    {
      category: "Films",
      title: "Nouveautés Netflix Mai",
      date: "04 Mai 2025",
      image: "/movies_67.jpg",
      description: "Un tour d'horizon des nouveautés à ne pas manquer ce mois-ci sur Netflix."
    },
    {
      category: "Films",
      title: "Séries incontournables 2025",
      date: "03 Mai 2025",
      image: "/movies_67.jpg",
      description: "Découvrez les séries à binge-watcher en 2025 selon les critiques."
    },
    {
      category: "Films",
      title: "Classement des thrillers",
      date: "02 Mai 2025",
      image: "/movies_67.jpg",
      description: "Top des thrillers à suspense pour les amateurs d'adrénaline."
    },

    {
      category: "Actu",
      title: "Actu Tech du mois",
      date: "04 Mai 2025",
      image: "/movies_67.jpg",
      description: "Les dernières nouvelles tech, gadgets et tendances numériques."
    },
    {
      category: "Actu",
      title: "IPTV & légalité",
      date: "03 Mai 2025",
      image: "/movies_67.jpg",
      description: "Tout ce qu'il faut savoir sur la légalité autour de l'IPTV en 2025."
    },
    {
      category: "Actu",
      title: "Nouvelle mise à jour IPTV",
      date: "02 Mai 2025",
      image: "/movies_67.jpg",
      description: "Découvrez les nouveautés de la dernière mise à jour de notre service."
    },
  ];

  const sectionGroups = [
    { title: "Articles Sports", key: "Sports" },
    { title: "Films & Séries", key: "Films" },
    { title: "Actu & News", key: "Actu" },
  ];

  return (
    <div className="bg-[#141414] text-white space-y-12 sm:space-y-16 md:space-y-24 py-12 px-3 sm:px-4 md:px-6">

      <section className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl md:max-w-4xl lg:max-w-6xl py-[64px] mx-auto text-center">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">Notre Blog</h1>
        <p className="text-gray-400 mt-2 sm:mt-4 text-sm xs:text-base">
          Retrouvez les dernières actualités, conseils et classements IPTV.
        </p>
      </section>

      {sectionGroups.map((section) => (
        <section key={section.key} className="max-w-[280px] xs:max-w-[300px] sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold">{section.title}</h2>
            <a
              href={`/blog/${section.key.toLowerCase()}`}
              className="text-red-500 hover:underline text-sm xs:text-base"
            >
              Tous les articles →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {posts
              .filter((post) => post.category === section.key)
              .map((post, index) => (
                <article
                  key={index}
                  className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-32 xs:h-36 sm:h-40 object-cover"
                  />
                  <div className="p-3 sm:p-4 space-y-2">
                    <h3 className="font-bold text-base xs:text-lg">{post.title}</h3>
                    <p className="text-xs xs:text-sm text-gray-400">{post.date}</p>
                    <p className="text-xs xs:text-sm text-gray-300">{post.description}</p>
                    <a
                      href="#"
                      className="inline-block mt-2 text-red-500 text-xs xs:text-sm underline"
                    >
                      Lire plus
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
