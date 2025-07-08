'use client'

import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import { Button } from "../../components/ui/button"

export default function BookCallPage() {
  return (
    <div className="min-h-screen">
      {/* Urgency Banner */}
      <div className="bg-orange text-white py-2 text-center font-semibold text-sm md:text-base sticky top-0 z-50">
        🚀 Limited Time: Founding Client Rates - Only 7 Spots Left for August - Save £200/month
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 bg-white z-40 border-b-2 border-charcoal">
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
              <Link href="/book-call" className="hover:text-orange transition-colors font-semibold">Book a Call</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="data-mono text-sm">07867 075691</span>
              <Link href="/book-call">
                <Button className="brutal-button">Get Your Free Analysis →</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-slate-950 text-white pt-40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="headline-xl text-white mb-6">
              Book Your Free <span className="text-orange">SEO Strategy Call</span>
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto font-medium">
              No obligation • No hard sell • Just honest advice on growing your Surrey business
            </p>
          </div>

          {/* Benefits Box */}
          <div className="bg-slate-900 rounded-lg p-8 mb-8 border-2 border-orange/30">
            <h2 className="headline-lg text-orange mb-6">
              What You&apos;ll Get in Your 30-Minute Call:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-start">
                <span className="text-orange text-2xl mr-3">✓</span>
                <div>
                  <h3 className="text-white font-bold mb-1">Competitor Analysis</h3>
                  <p className="text-gray-300">See exactly who&apos;s stealing your customers and how to beat them</p>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-start">
                <span className="text-orange text-2xl mr-3">✓</span>
                <div>
                  <h3 className="text-white font-bold mb-1">Custom SEO Roadmap</h3>
                  <p className="text-gray-300">Step-by-step plan tailored to YOUR business and market</p>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-start">
                <span className="text-orange text-2xl mr-3">✓</span>
                <div>
                  <h3 className="text-white font-bold mb-1">ROI Projections</h3>
                  <p className="text-gray-300">Real numbers on leads and revenue you can expect</p>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-start">
                <span className="text-orange text-2xl mr-3">✓</span>
                <div>
                  <h3 className="text-white font-bold mb-1">Founding Client Pricing</h3>
                  <p className="text-gray-300">Lock in 50% off if you&apos;re one of our first 10 clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="text-center mb-12 bg-slate-900 rounded-lg p-6 border border-slate-700">
            <p className="text-lg text-orange mb-6 font-semibold">Trusted by Surrey businesses:</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="data-mono text-4xl font-bold text-orange">27</div>
                <div className="text-sm text-gray-300">Surrey Businesses Transformed</div>
              </div>
              <div className="text-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="data-mono text-4xl font-bold text-orange">312%</div>
                <div className="text-sm text-gray-300">Average Lead Increase</div>
              </div>
              <div className="text-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="data-mono text-3xl font-bold text-white">5.0★</div>
                <div className="text-sm text-gray-300">Google Rating</div>
              </div>
            </div>
          </div>

          {/* Calendar Embed */}
          <div className="bg-white rounded-lg p-2 shadow-2xl">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/LGdeOh1Jiq7aOl3DbAhx" 
              style={{ 
                width: '100%', 
                border: 'none', 
                overflow: 'hidden',
                minHeight: '600px'
              }}
              scrolling="no" 
              id="LGdeOh1Jiq7aOl3DbAhx_1751879626420"
            />
          </div>

          {/* CTA Below Calendar */}
          <div className="text-center mt-8 p-6 bg-slate-900 rounded-lg border border-slate-700">
            <p className="text-lg mb-2">
              <span className="font-bold text-orange">Can&apos;t find a time that works?</span>
            </p>
            <p className="text-gray-300">
              Call us directly at{' '}
              <a href="tel:07867075691" className="text-orange font-bold hover:underline data-mono">
                07867 075691
              </a>
            </p>
          </div>

          {/* Back Link */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-orange hover:text-orange/80 font-bold text-lg transition-colors"
            >
              <span className="mr-2">←</span> Back to Homepage
            </Link>
          </div>
        </div>
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

      {/* Required Script */}
      <Script 
        src="https://link.msgsndr.com/js/form_embed.js" 
        strategy="afterInteractive" 
      />
    </div>
  )
}