'use client'

import Link from "next/link"
import SiteLayout from "@/components/site-layout"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24">
        <h1 className="headline-xl text-navy mb-16 text-center">
          OUR SEO SERVICES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "SEO Agency Surrey",
              description: "Complete SEO services for Surrey businesses looking to dominate local search.",
              link: "/services/seo-agency-surrey"
            },
            {
              title: "Google Business Profile Optimization",
              description: "Get to the top of Google Maps and drive local customers to your business.",
              link: "/services/google-business-profile-surrey"
            },
            {
              title: "Local SEO Surrey",
              description: "Rank for 'near me' searches and capture local customers actively looking for your services.",
              link: "/services/local-seo-surrey"
            },
            {
              title: "AI-Powered Automation",
              description: "Leverage AI to automate your marketing, customer service, and operations.",
              link: "/services/ai-powered-automation"
            },
            {
              title: "Marketing Strategy",
              description: "Create a comprehensive digital marketing strategy that drives real business growth.",
              link: "/services/marketing-strategy"
            },
            {
              title: "Internet Marketing",
              description: "Full-spectrum digital marketing services that deliver measurable ROI.",
              link: "/services/internet-marketing-surrey"
            },
            {
              title: "SEO Consultant Surrey",
              description: "Expert SEO consultation to enhance your existing marketing efforts.",
              link: "/services/seo-consultant-surrey"
            },
            {
              title: "Business Automation",
              description: "Streamline your business processes and reduce costs with intelligent automation.",
              link: "/services/business-automation-surrey"
            },
            {
              title: "SEO Web Design",
              description: "Beautiful, conversion-focused websites built with SEO in mind from day one.",
              link: "/services/seo-web-design-surrey"
            }
          ].map((service, index) => (
            <Link key={index} href={service.link} className="brutal-card block group">
              <h3 className="headline-lg text-navy mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </SiteLayout>
  )
}