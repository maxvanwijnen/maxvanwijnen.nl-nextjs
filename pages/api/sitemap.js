export default function handler(req, res) {
  const baseUrl = 'https://www.maxvanwijnen.nl';
  const pages = [
    '',
    'fotoshoot-hillegom',
    'fotoshoot-leiden',
    'fotoshoot-noordwijk',
    'fotoshoot/fashion',
    'portfolio',
    'contact',
  ];
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <priority>${page === '' ? 1.0 : page === 'fotoshoot/fashion' ? 0.9 : 0.8}</priority>
  </url>
  `).join('')}
</urlset>`);
}
