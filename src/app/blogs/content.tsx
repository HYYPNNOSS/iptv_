
import fs from "fs";
import path from "path";
import { BlogCard } from "../components/BlogCard";




async function getPosts() {
  const categories = ["sports", "films", "news"];
  const posts = [];

  for (const category of categories) {
    const dirPath = path.join(process.cwd(), "public", "blogs", category);
    const files = fs.readdirSync(dirPath).slice(0, 3); 
    for (const file of files) {
      const data = JSON.parse(
        fs.readFileSync(path.join(dirPath, file), "utf-8")
      );
      posts.push({ ...data, category });
    }
  }

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  const sectionGroups = [
    { title: "Articles Sports", key: "sports" },
    { title: "Films & Séries", key: "films" },
    { title: "Actu & News", key: "news" },
  ];

  return (
    <div className="w-full bg-[#141414] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Blog</h1>
        <p className="text-xl text-gray-600">Retrouvez les dernières actualités...</p>
      </section>

      {sectionGroups.map(({ key, title }) => {
        const filtered = posts.filter((p) => p.category === key);
        return (
          <section key={key} className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <a 
                href={`/blogs/${key}`} 
                className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                Tous les articles →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
