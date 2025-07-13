import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://iptvfrances.com';

  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', priority: 1.0, changefreq: 'daily', lastmod: today },
    { url: 'offres-iptv', priority: 0.9, changefreq: 'weekly', lastmod: '2025-05-20' },
    { url: 'chaines-iptv', priority: 0.9, changefreq: 'weekly', lastmod: '2025-05-20' },
    { url: 'iptv-france', priority: 0.9, changefreq: 'weekly', lastmod: '2025-05-22' },
    { url: 'integration-iptv', priority: 0.5, changefreq: 'weekly', lastmod: '2025-05-10' },
    { url: 'contact', priority: 0.5, changefreq: 'weekly', lastmod: '2025-05-10' },
    { url: 'comparison', priority: 0.1, changefreq: 'weekly', lastmod: '2025-06-10' },
    { url: 'channels', priority: 0.1, changefreq: 'weekly', lastmod: '2025-06-10' },
    { url: 'features', priority: 0.1, changefreq: 'weekly', lastmod: '2025-06-10' },
    { url: 'guide', priority: 0.1, changefreq: 'weekly', lastmod: '2025-06-10' },
    { url: 'setup', priority: 0.1, changefreq: 'weekly', lastmod: '2025-06-10' },






  ];

  const blogUrls: {
    url: string;
    priority: number;
    changefreq: string;
    lastmod: string;
  }[] = [];

  const categories = ['sports', 'films', 'news'];

  for (const category of categories) {
    const blogDir = path.join(process.cwd(), 'public', 'blogs', category);
    let files: string[] = [];

    try {
      files = fs.readdirSync(blogDir);
    } catch (e) {
      console.warn(`No blog directory found for category '${category}':`, e);
      continue;
    }

    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const slug = file.replace('.json', '');
      const filePath = path.join(blogDir, file);
      let lastmod = today;

      try {
        const stats = fs.statSync(filePath);
        lastmod = stats.mtime.toISOString().split('T')[0];
      } catch (e) {
        console.warn(`Unable to read last modified date for ${filePath}:`, e);
      }

      blogUrls.push({
        url: `blogs/${category}/${slug}`,
        priority: 0.7,
        changefreq: 'monthly',
        lastmod,
      });
    }
  }

  const allPages = [...staticPages, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
