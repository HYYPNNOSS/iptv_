import fs from "fs/promises";
import path from "path";
import { BlogCard } from "../../components/BlogCard";
import type { Metadata } from "next";

interface BlogData {
  slug: string;
  title: string;
  date: string;
  description: string;
  content?: string;
  image: string;
  category: string;
}

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Articles ${resolvedParams.category} - Blog IPTV`,
    description: `Découvrez tous nos articles sur ${resolvedParams.category}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dir = path.join(process.cwd(), "public", "blogs", resolvedParams.category);
  
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch (error) {
    console.error(`Error reading directory: ${dir}`, error);
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-white">
        <h1 className="text-3xl font-bold">Catégorie non trouvée</h1>
        <p>Cette catégorie n&apos;existe pas ou n&apos;a pas encore d&apos;articles.</p>
      </div>
    );
  }

  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.json'))
      .map(async (file) => {
        const filePath = path.join(dir, file);
        const content = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(content) as BlogData;
        return { ...data, category: resolvedParams.category };
      })
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold capitalize mb-8">Tous les articles {resolvedParams.category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
