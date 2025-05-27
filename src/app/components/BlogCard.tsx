import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  image: string;
  title: string;
  date: string;
  description: string;
  category: string;
  slug: string;
  content?: string;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-400">{post.date}</p>
        <p className="text-sm text-gray-300">{post.description}</p>
        <Link
          href={`/blogs/${post.category}/${post.slug}`}
          className="text-red-500 text-sm underline"
        >
          Lire plus
        </Link>
      </div>
    </article>
  );
}
