import type { Metadata } from "next"
import ContactClient from "./ContactClient"

const SITE_URL = "https://kevalmarketing.com"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Keval Marketing for all your electrical needs. Visit us at 7, Sitaram Complex, Near Gorwa Workshop, New IPCL Road, Subhanpura, Vadodara. Call +91-7096038481 or email kevalmarketing2017@gmail.com.",
  keywords: [
    "contact Keval Marketing",
    "electrical shop Subhanpura Vadodara",
    "Keval Marketing phone number",
    "electrical supplier address Vadodara",
    "buy electrical products Vadodara",
    "electrical store near me Vadodara",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Keval Marketing | Electrical Shop in Vadodara",
    description:
      "Visit Keval Marketing at 7, Sitaram Complex, Subhanpura, Vadodara. Call +91-7096038481 or send an inquiry. Mon-Sat: 9AM-6PM.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Keval Marketing - Electrical Shop in Vadodara",
      },
    ],
  },
  twitter: {
    title: "Contact Keval Marketing | Electrical Shop in Vadodara",
    description:
      "Visit Keval Marketing at 7, Sitaram Complex, Subhanpura, Vadodara. Call +91-7096038481. Mon-Sat: 9AM-6PM.",
  },
}

export default function ContactPage() {
  return <ContactClient />
}
