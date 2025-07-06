/**
 * This file contains the structured schema.org data for the site
 * These are used in the metadata and as JSON-LD scripts
 */

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Optimax Ai",
  "alternateName": ["OptiMAX-ai", "Optimax AI", "OptiMAX AI"],
  "description": "OptiMAX-ai is Surrey's premier digital marketing agency specializing in Google Business Profile optimization and local SEO. We help Surrey businesses increase their visibility on Google Maps using AI-powered strategies and proven optimization techniques. Our services include complete GBP management, local SEO, review generation, and competitor analysis. With transparent pricing starting at £497/month and no long-term contracts, we focus on delivering measurable results through increased calls and leads. Based in Epsom, we serve businesses across Surrey including Guildford, Woking, Redhill, and Camberley. Our team combines 10+ years of experience with cutting-edge AI tools to help your business dominate local search results.",
  "@id": "https://optimax-ai.com/#business",
  "url": "https://optimax-ai.com",
  "logo": "https://optimax-ai.com/logo.png",
  "image": [
    "https://optimax-ai.com/office-image.jpg",
    "https://optimax-ai.com/team-image.jpg",
    "https://optimax-ai.com/results-image.jpg"
  ],
  "telephone": "+447867075691",
  "email": "info@optimax-ai.com",
  "priceRange": "£497-£1997",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "PayPal"],
  "currenciesAccepted": "GBP",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "38 Sunnymede Avenue",
    "addressLocality": "West Ewell",
    "addressRegion": "Surrey",
    "postalCode": "KT19 9TJ",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.3536892,
    "longitude": -0.261261
  },
  "hasMap": "https://www.google.com/maps/place/Optimax+Ai/@51.3536892,-0.2638359,17z/data=!3m1!4b1!4m6!3m5!1s0x4876090700bee32d:0x2e3ba453229f78b!8m2!3d51.3536892!4d-0.261261!16s%2Fg%2F11ycqrp4nk",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
};

export const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Local SEO Services",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Optimax Ai",
    "@id": "https://optimax-ai.com/#business"
  },
  "areaServed": [
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.3536892,
        "longitude": -0.261261
      },
      "geoRadius": "50000"
    }
  ],
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Surrey and Greater London"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas do you serve for SEO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve businesses throughout Surrey including Epsom, Guildford, Woking, Redhill, Camberley, and all surrounding areas. We also serve Greater London areas including Kingston, Richmond, Sutton, Croydon, and Merton, as well as parts of Hampshire, West Sussex, Berkshire, and Kent."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Google Business Profile optimization cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Google Business Profile optimization service starts at £497 per month with no long-term contracts. We offer transparent pricing with packages ranging from £497 to £1997 depending on your business needs, competition level, and target areas."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will I see results from local SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With our AI-powered approach and Google Business Profile optimization, many clients see initial improvements within 2-4 weeks. Significant results including increased calls and leads typically occur within 3-6 months, though this varies based on competition and current optimization levels."
      }
    },
    {
      "@type": "Question",
      "name": "What makes OptiMAX-ai different from other SEO agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We combine 10+ years of SEO experience with cutting-edge AI tools to deliver faster, more effective results. Our focus on Google Business Profile optimization and local SEO, transparent pricing, no long-term contracts, and proven track record of increasing calls and leads sets us apart from traditional agencies."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with all types of businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work with businesses of all sizes across Surrey and Greater London, from local service providers to multi-location enterprises. Our AI-powered strategies are customized for each industry, whether you're a plumber in Epsom, a restaurant in Guildford, or a law firm in Woking."
      }
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://optimax-ai.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "SEO Services Surrey",
      "item": "https://optimax-ai.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Google Business Profile Optimization",
      "item": "https://optimax-ai.com/services/google-business-profile-surrey"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Optimax Ai - Surrey SEO & Digital Marketing Agency",
  "alternateName": "OptiMAX-ai",
  "url": "https://optimax-ai.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://optimax-ai.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@id": "https://optimax-ai.com/#business"
  }
};

// Function to generate schema for service areas
export function generateServiceAreaSchema(areaName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `SEO Services ${areaName}`,
    "provider": {"@id": "https://optimax-ai.com/#business"},
    "areaServed": areaName
  };
}

// Function to generate schema for industry pages
export function generateIndustrySchema(industryName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `SEO Services for ${industryName}`,
    "provider": {"@id": "https://optimax-ai.com/#business"},
    "serviceType": `${industryName} SEO Services`
  };
}