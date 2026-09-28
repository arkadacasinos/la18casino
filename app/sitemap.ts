import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://la18casino.vercel.app/',
      lastModified: new Date('2026-09-29'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
