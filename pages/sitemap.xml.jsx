const createSitemap = (host, routes) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>http://www.example.com/</loc>
            <lastmod>2005-01-01</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
    </urlset>`;

const Sitemap = () => {};

Sitemap.getInitialProps = ({ res, req }) => {
    const routes = ["", "/about", "/products"];
    const sitemap = createSitemap(req.headers.host, routes);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return res;
};

export default Sitemap;
