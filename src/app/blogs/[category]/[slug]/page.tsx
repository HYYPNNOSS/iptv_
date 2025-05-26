import fs from "fs";
import path from "path";
import Image from "next/image";
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const filePath = path.join(
    process.cwd(),
    'public',
    'blogs',
    params.category,
    `${params.slug}.json`
  );

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    return {
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: [{ url: data.image }],
      },
    };
  } catch (e) {
    console.log(e);
    return {
      title: 'Not found',
      description: 'This blog post does not exist.',
    };
  }
}

export async function generateStaticParams() {
  const categories = ["sports", "films", "news"];
  const params = [];

  for (const category of categories) {
    const dir = path.join(process.cwd(), "public", "blogs", category);
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const slug = file.replace(".json", "");
      params.push({ category, slug });
    }
  }

  return params;
}

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), "public", "blogs", resolvedParams.category, `${resolvedParams.slug}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://iptvfrances.com/blog/${resolvedParams.category}/${resolvedParams.slug}`
    },
    "headline": data.title,
    "description": data.description,
    "image": data.image,
    "author": {
      "@type": "Person",
      "name": data.author || "IPTV Frances"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Frances",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iptvfrances.com/logo.png"
      }
    },
    "datePublished": data.date,
    "dateModified": data.date
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white space-y-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-400">{data.date}</p>
      <Image src={data.image} alt={data.title} width={800} height={400} className="w-full h-auto rounded-lg" />
      <div className="prose prose-invert mt-6">{data.content}</div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
