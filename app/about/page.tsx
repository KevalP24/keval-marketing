import type { Metadata } from "next"
import AboutClient from "./AboutClient"

const SITE_URL = "https://kevalmarketing.com"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Keval Marketing — Vadodara's trusted electrical products dealer since 2017. Located at Sitaram Complex, Subhanpura. Serving electricians, contractors, and homeowners across Vadodara.",
  keywords: [
    "about Keval Marketing",
    "electrical shop history Vadodara",
    "electrical dealer Subhanpura",
    "Keval Marketing story",
    "electrical solutions Vadodara",
    "trusted electrical supplier Gujarat",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Keval Marketing | Electrical Solutions Since 2017",
    description:
      "Keval Marketing has been serving Vadodara with premium electrical products since 2017. Located at Sitaram Complex, Subhanpura. Trusted by electricians, contractors, and homeowners.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About Keval Marketing - Electrical Solutions in Vadodara",
      },
    ],
  },
  twitter: {
    title: "About Keval Marketing | Electrical Solutions Since 2017",
    description:
      "Keval Marketing has been serving Vadodara with premium electrical products since 2017. Located at Sitaram Complex, Subhanpura.",
  },
}

export default function AboutPage() {
  return <AboutClient />
}
