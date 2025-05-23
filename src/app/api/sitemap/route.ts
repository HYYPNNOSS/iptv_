import { NextResponse } from 'next/server';

export function GET() {
  const pages = [
    { url: '', priority: 1.0, changefreq: 'daily', lastmod: '2025-05-23' },
    { url: 'channels', priority: 0.9, changefreq: 'weekly', lastmod: '2025-05-20' },
    { url: 'plans', priority: 0.9, changefreq: 'weekly', lastmod: '2025-05-22' },
    { url: 'about', priority: 0.5, changefreq: 'weekly', lastmod: '2025-05-10' },
    { url: 'contact', priority: 0.5, changefreq: 'weekly', lastmod: '2025-05-10' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${pages
    .map(
      (page) => `
    <url>
      <loc>https://iptvfrances.com/${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
