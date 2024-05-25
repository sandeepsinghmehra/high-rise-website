import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://high-rise-website.vercel.app";
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            //   changeFrequency: 'yearly',
            //   priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            //   changeFrequency: 'monthly',
            //   priority: 0.8,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/research`,
            lastModified: new Date(),
        },
    ]
}