import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { businessSchema, websiteSchema, faqSchema, serviceAreaSchema, breadcrumbSchema, organizationSchema, aggregateRatingSchema } from '@/lib/schema'
import { BotContent } from '@/components/seo/bot-content'

export const metadata: Metadata = {
  title: 'SEO Agency Surrey | Google Maps Rankings in 90 Days | OptiMAX-ai',
  description: 'Surrey SEO agency guaranteeing top 3 Google Maps rankings. Get 3X more customers with AI-powered local SEO. Trusted by 27 Surrey businesses. Call 07867075691',
  metadataBase: new URL('https://optimax-ai.com'),
  openGraph: {
    title: 'SEO Agency Surrey | Google Maps Rankings in 90 Days | OptiMAX-ai',
    description: 'Surrey SEO agency guaranteeing top 3 Google Maps rankings. Get 3X more customers with AI-powered local SEO. Trusted by 27 Surrey businesses. Call 07867075691',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@optimaxai',
    images: ['/og-image.jpg'],
  },
  authors: [{ name: 'OptiMAX-ai' }],
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
      'x-default': '/',
    },
  },
  // JSON-LD structured data
  other: {
    'business': JSON.stringify(businessSchema),
    'website': JSON.stringify(websiteSchema),
    'faq': JSON.stringify(faqSchema),
    'service': JSON.stringify(serviceAreaSchema),
    'breadcrumb': JSON.stringify(breadcrumbSchema),
    'organization': JSON.stringify(organizationSchema),
    'rating': JSON.stringify(aggregateRatingSchema),
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1f4e', // navy color
}

// Add custom Google fonts
const workSans = Inter({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Typography Load Order */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:wght@400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet" />
        
        {/* Geo Meta Tags */}
        <meta name="geo.region" content="GB-SRY" />
        <meta name="geo.placename" content="West Ewell, Surrey" />
        <meta name="geo.position" content="51.3536892;-0.261261" />
        <meta name="ICBM" content="51.3536892, -0.261261" />
        <meta name="DC.title" content="Optimax Ai - Google Business Profile Optimization Surrey" />
        
        {/* Additional Local SEO Meta Tags */}
        <meta name="city" content="West Ewell" />
        <meta name="state" content="Surrey" />
        <meta name="country" content="United Kingdom" />
        <meta name="zipcode" content="KT19 9TJ" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        
        {/* Business Hours Meta */}
        <meta name="business:contact_data:street_address" content="38 Sunnymede Avenue" />
        <meta name="business:contact_data:locality" content="West Ewell" />
        <meta name="business:contact_data:region" content="Surrey" />
        <meta name="business:contact_data:postal_code" content="KT19 9TJ" />
        <meta name="business:contact_data:country_name" content="United Kingdom" />
        <meta name="business:contact_data:phone_number" content="+447867075691" />
        <meta name="business:contact_data:website" content="https://optimax-ai.com" />

        {/* JSON-LD Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
      </head>
      <body className={`${workSans.variable}`}>
        {/* Add bot content for SEO */}
        <BotContent />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}