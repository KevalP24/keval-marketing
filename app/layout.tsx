import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const SITE_URL = "https://kevalmarketing.com"
const SITE_NAME = "Keval Marketing"
const SITE_DESCRIPTION =
  "Keval Marketing — Vadodara's trusted electrical solutions partner since 2017. Premium wires, cables, switches, lighting, fans and more from RR Kabel, LAPP, Schneider, Trinity Touch, Dowell's, Mean Well, Jigo & Almonard."

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Electrical Solutions in Vadodara`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "electrical shop Vadodara",
    "Keval Marketing",
    "electrical products Vadodara",
    "wires cables Vadodara",
    "RR Kabel distributor Vadodara",
    "LAPP cables Vadodara",
    "Schneider electric Vadodara",
    "Trinity Touch Vadodara",
    "Dowell's Vadodara",
    "Mean Well SMPS Vadodara",
    "Almonard fans Vadodara",
    "Jigo cable accessories Vadodara",
    "industrial electrical supplier Vadodara",
    "electrical wholesaler Subhanpura",
    "cable glands Vadodara",
    "DIN rail components Vadodara",
    "power supply Vadodara",
    "electrical accessories Gujarat",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Electrical Products & Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Electrical Solutions in Vadodara`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Keval Marketing — Electrical Solutions in Vadodara",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Electrical Solutions in Vadodara`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@kevalmarketing",
    site: "@kevalmarketing",
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara",
    "geo.position": "22.325580;73.157350",
    ICBM: "22.325580, 73.157350",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD: LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#localbusiness`,
              name: "Keval Marketing",
              alternateName: "Keval Marketing Vadodara",
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              telephone: "+91-7096038481",
              email: "kevalmarketing2017@gmail.com",
              foundingDate: "2017",
              priceRange: "$$",
              image: `${SITE_URL}/og-image.jpg`,
              logo: `${SITE_URL}/logos/KMLogoMain.png`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "7, Sitaram Complex, Near Gorwa Workshop, New IPCL Road, Subhanpura",
                addressLocality: "Vadodara",
                addressRegion: "Gujarat",
                postalCode: "390023",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.32558,
                longitude: 73.15735,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "22:00",
                },
              ],
              sameAs: [
                "https://g.co/kgs/kevalmarketing",
              ],
              hasMap: "https://maps.google.com/?q=22.32558,73.15735",
              areaServed: {
                "@type": "City",
                name: "Vadodara",
              },
              knowsAbout: [
                "Electrical Wires",
                "Cables",
                "Cable Glands",
                "Switches",
                "Fans",
                "Power Supplies",
                "DIN Rail Components",
                "Industrial Electrical Products",
              ],
            }),
          }}
        />

        {/* JSON-LD: WebSite Schema with Sitelinks Searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              inLanguage: "en-IN",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
