export default function handler(req, res) {
  const baseUrl = 'https://www.maxvanwijnen.nl';
  const lastMod = new Date().toISOString().split('T')[0]; // Vandaag als laatste wijzigingsdatum
  
  // Definieer pagina's met hun metadata
  const pages = [
    { path: '', priority: '1.0', changefreq: 'daily' }, // Homepage
    // Hoofdpagina's
    { path: 'fotoshoot', priority: '0.9', changefreq: 'weekly' },
    { path: 'fotostudio', priority: '0.8', changefreq: 'monthly' },
    { path: 'prijzen', priority: '0.8', changefreq: 'monthly' },
    { path: 'over-mij', priority: '0.7', changefreq: 'monthly' },
    { path: 'portfolio', priority: '0.8', changefreq: 'weekly' },
    { path: 'contact', priority: '0.7', changefreq: 'monthly' },
    { path: 'blog', priority: '0.7', changefreq: 'weekly' },
    
    // Fotoshoot locaties
    { path: 'fotoshoot-hillegom', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot-leiden', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot-noordwijk', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot-zandvoort', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot-lisse', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot-strand', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot-buiten', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot-haarlem', priority: '0.8', changefreq: 'weekly' },
    
    // Fotoshoot types
    { path: 'fotoshoot/familie', priority: '0.7', changefreq: 'monthly' },
    { path: 'fotoshoot/fashion', priority: '0.9', changefreq: 'weekly' },
    { path: 'fotoshoot/model', priority: '0.7', changefreq: 'monthly' },
    { path: 'fotoshoot/kinderen', priority: '0.7', changefreq: 'monthly' },
    { path: 'fotoshoot/loveshoot', priority: '0.7', changefreq: 'monthly' },
    { path: 'fotoshoot/portret', priority: '0.8', changefreq: 'weekly' },
    { path: 'fotoshoot/trouwen', priority: '0.7', changefreq: 'monthly' },
    { path: 'fotoshoot/zwangerschap', priority: '0.7', changefreq: 'monthly' },
    
    // Boekingspagina's
    { path: 'boek-een-fotoshoot', priority: '0.9', changefreq: 'weekly' },
    
    // Blogartikelen
    { path: 'blog/5-tips-voor-effectieve-fashion-fotografie', priority: '0.6', changefreq: 'monthly' },
    { path: 'blog/fashion-fotografie-soluzione', priority: '0.6', changefreq: 'monthly' },
    { path: 'blog/fashion-fotoshoot-leiden-mannelijk-model', priority: '0.6', changefreq: 'monthly' },
    { path: 'blog/modefotografie-voor-webshops', priority: '0.6', changefreq: 'monthly' },
  ];

  // Genereer de XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages.map(({ path, priority, changefreq }) => {
    // Verwijder dubbele slashes in URL's
    const url = `${baseUrl}/${path}`.replace(/([^:]\/)\/+/g, '$1');
    
    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
