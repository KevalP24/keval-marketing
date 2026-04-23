import type { MetadataRoute } from "next"

const SITE_URL = "https://kevalmarketing.com"

// Brand slugs matching the products page filter
const brandSlugs = [
  "rrkabel",
  "lapp",
  "trinitytouch",
  "dowells",
  "schneider",
  "meanwell",
  "jigo",
  "almonard",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Brand-filtered product pages
  const brandPages: MetadataRoute.Sitemap = brandSlugs.map((slug) => ({
    url: `${SITE_URL}/products?brand=${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...brandPages]
}
