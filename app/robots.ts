import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const SITE_URL = "https://kevalmarketing.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
