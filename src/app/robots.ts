import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://high-rise-website.vercel.app";

    return {
            rules: {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            sitemap: `${baseUrl}/sitemap.xml`,
        }
}

// rules: [
//     {
//       userAgent: 'Googlebot',
//       allow: ['/'],
//       disallow: '/private/',
//     },
//     {
//       userAgent: ['Applebot', 'Bingbot'],
//       disallow: ['/'],
//     },
//   ],