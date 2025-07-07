'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-2 border-charcoal">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              OptiMAX<span className="text-orange">-ai</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
              <Link href="/industries" className="hover:text-orange transition-colors">Industries</Link>
              <Link href="/areas" className="hover:text-orange transition-colors">Areas</Link>
              <Link href="/about" className="hover:text-orange transition-colors">About</Link>
              <Link href="/case-studies" className="hover:text-orange transition-colors">Case Studies</Link>
              <Link href="/contact" className="hover:text-orange transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="data-mono text-sm">07867 075691</span>
              <Button className="brutal-button">Get Free Audit</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                OptiMAX<span className="text-orange">-ai</span>
              </div>
              <p className="data-mono">07867 075691</p>
              <p>Ewell, Epsom, Surrey</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <div className="space-y-2">
                <Link href="/services/seo-agency-surrey" className="block hover:text-orange">SEO Agency Surrey</Link>
                <Link href="/services/google-business-profile-surrey" className="block hover:text-orange">Google Business Profile</Link>
                <Link href="/services/local-seo-surrey" className="block hover:text-orange">Local SEO Surrey</Link>
                <Link href="/services/ai-powered-automation" className="block hover:text-orange">AI Automation</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Industries</h3>
              <div className="space-y-2">
                <Link href="/industries/seo-for-plumbers" className="block hover:text-orange">SEO for Plumbers</Link>
                <Link href="/industries/seo-for-electricians" className="block hover:text-orange">SEO for Electricians</Link>
                <Link href="/industries/seo-for-builders" className="block hover:text-orange">SEO for Builders</Link>
                <Link href="/industries/seo-for-roofers" className="block hover:text-orange">SEO for Roofers</Link>
                <Link href="/industries/seo-for-hvac" className="block hover:text-orange">SEO for HVAC</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block hover:text-orange">About</Link>
                <Link href="/case-studies" className="block hover:text-orange">Case Studies</Link>
                <Link href="/blog" className="block hover:text-orange">Blog</Link>
                <Link href="/contact" className="block hover:text-orange">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm">
            <p>SEO Agency Surrey | SEO Services Surrey | Local SEO Surrey | AI Automation Surrey</p>
          </div>
        </div>
      </footer>
    </div>
  )
}