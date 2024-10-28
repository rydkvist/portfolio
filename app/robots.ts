import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://www.rydkvist.com',
    sitemap: 'https://www.rydkvist.com/sitemap.xml',
  };
}
