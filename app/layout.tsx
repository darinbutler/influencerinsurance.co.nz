import type { Metadata } from "next"
import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { siteConfig } from "../data/site-config"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Influencer Insurance NZ | Cover for Content Creators",
    template: "%s | Influencer Insurance NZ",
  },
  description: siteConfig.description,
  keywords: ["influencer insurance NZ", "content creator insurance New Zealand", "public liability influencer", "equipment insurance creator", "cyber insurance influencer NZ"],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Influencer Insurance NZ | Cover for Content Creators",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Insurance NZ | Cover for Content Creators",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.schema.organizationName,
    url: siteConfig.schema.organizationUrl,
    logo: siteConfig.schema.organizationLogo,
    description: siteConfig.schema.organizationDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NZ",
    },
    areaServed: "NZ",
    serviceType: "Insurance Referral Service",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-NZ",
    publisher: {
      "@type": "Organization",
      name: siteConfig.schema.organizationName,
      url: siteConfig.schema.organizationUrl,
    },
  }

  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
