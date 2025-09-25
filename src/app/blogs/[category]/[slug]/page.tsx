import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";

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
  params: Promise<{ category: string; slug: string }>;
};

function truncate(str: string, max: number) {
  return str.length > max ? str.substring(0, max - 1) + '…' : str;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const filePath = path.join(
    process.cwd(),
    "public",
    "blogs",
    resolvedParams.category,
    `${resolvedParams.slug}.json`
  );

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent) as BlogData;

    return {
      title: `${truncate(data.title, 50)} | IPTV Frances`,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: [{ url: data.image }],
      },
      alternates: {
        canonical: `https://iptvfrances.com/blogs/${resolvedParams.category}/${data.slug}`
      }
    };
  } catch (error) {
    console.error("Error loading metadata:", error);
    return {
      title: "Not found",
      description: "This blog post does not exist.",
    };
  }
}

export async function generateStaticParams(): Promise<
  Array<{ category: string; slug: string }>
> {
  const categories = ["sports", "films", "news"];
  const params: Array<{ category: string; slug: string }> = [];

  for (const category of categories) {
    const dir = path.join(process.cwd(), "public", "blogs", category);
    let files: string[] = [];
    try {
      files = await fs.readdir(dir);
    } catch (error) {
      console.warn(`No directory found for category: ${category}`, error);
      continue;
    }
    for (const file of files) {
      if (file.endsWith(".json")) {
        const slug = file.replace(".json", "");
        params.push({ category, slug });
      }
    }
  }

  return params;
}

export default async function BigBlogPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  const filePath = path.join(
    process.cwd(),
    "public",
    "blogs",
    category,
    `${slug}.json`
  );

  let data: BlogData;
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    data = JSON.parse(fileContent) as BlogData;
  } catch (error) {
    console.log(error);
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-white">
        <h1 className="text-3xl font-bold">Blog post not found</h1>
        <p>Please check the URL or try again later.</p>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iptvfrances.com/blogs/${category}/${slug}`,
    },
    headline: data.title,
    description: data.description,
    image: `https://iptvfrances.com${data.image}`,
    author: {
      "@type": "Person",
      name: "IPTV Frances",
    },
    publisher: {
      "@type": "Organization",
      name: "IPTV Frances",
      logo: {
        "@type": "ImageObject",
        url: "https://iptvfrances.com/iptv_rectangle.png",
      },
    },
    datePublished: data.date,
    dateModified: data.date // SEO Improvement: Updated publisher logo and @id URL (2025-09-25)

  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white space-y-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-400">{data.date}</p>
      <Image
        src={data.image}
        alt={data.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-lg"
      />
      <div className="prose prose-invert mt-6">{data.content || "No content."}</div>

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
