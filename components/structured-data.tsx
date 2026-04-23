/**
 * Structured data components for JSON-LD schema injection.
 * Import and render these in individual pages for richer Google results.
 */

const SITE_URL = "https://kevalmarketing.com"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductPageSchema({ brandName }: { brandName?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: brandName ? `${brandName} Products at Keval Marketing` : "Electrical Products at Keval Marketing",
    description: brandName
      ? `Complete range of ${brandName} electrical products available at Keval Marketing, Vadodara.`
      : "Comprehensive range of electrical products from RR Kabel, LAPP, Schneider, Trinity Touch, Dowell's, Mean Well, Jigo and Almonard available at Keval Marketing, Vadodara.",
    url: brandName ? `${SITE_URL}/products?brand=${brandName.toLowerCase()}` : `${SITE_URL}/products`,
    provider: {
      "@type": "LocalBusiness",
      name: "Keval Marketing",
      url: SITE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
