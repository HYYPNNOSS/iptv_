import fs from "fs";
import path from "path";
import { BlogCard } from "../../components/BlogCard";

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const dir = path.join(process.cwd(), "public", "blogs", params.category);
  const files = fs.readdirSync(dir);
  const posts = files.map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
    return { ...data, category: params.category };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold capitalize mb-8">Tous les articles {params.category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
