import type { APIRoute } from 'astro';

const BASE_URL = "https://ufw-italy.web.app"; // We can set the base URL or leave it empty, but absolute is best for SEO.

export const GET: APIRoute = async () => {
  const entries = [
    { path: "/", priority: "1.0" },
    { path: "/about", priority: "0.8" },
    { path: "/events", priority: "0.9" },
    { path: "/gallery", priority: "0.7" },
    { path: "/partners", priority: "0.7" },
    { path: "/certifications", priority: "0.8" },
    { path: "/news", priority: "0.6" },
    { path: "/contact", priority: "0.7" },
  ];

  const urls = entries.map(
    (e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: { 
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600" 
    },
  });
};
