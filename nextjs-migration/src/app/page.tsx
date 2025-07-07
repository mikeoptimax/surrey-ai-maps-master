'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    postcode: "",
    serviceType: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

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
            </div>
            <div className="flex items-center space-x-4">
              <span className="data-mono text-sm">07867 075691</span>
              <Button className="brutal-button">Get Free Audit</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center pt-40">
        <div className="hero-content container mx-auto px-4 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="headline-giant text-white mb-4">
                <span className="block">Get 3X More Customers</span>
                <span className="block text-orange">with Surrey&apos;s</span>
                <span className="block">First AI-Powered SEO</span>
              </h1>
              <h2 className="text-2xl text-white/90 mb-6 max-w-2xl font-medium">
                While others promise rankings, we deliver real customers to your business
              </h2>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <span className="text-orange mr-2">✓</span>
                  <span className="text-white text-sm">27 Surrey Businesses Transformed</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange mr-2">✓</span>
                  <span className="text-white text-sm">Average 312% More Customers</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange mr-2">✓</span>
                  <span className="text-white text-sm">Results You Can Track Daily</span>
                </div>
              </div>
              <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed">
                Looking for an SEO agency Surrey businesses trust? We&apos;re the only SEO company
                in Surrey that guarantees top 3 Google Maps rankings in 90 days. We focus on
                what drives calls - not blogs, not backlinks - real local visibility.
              </p>
              <Button className="brutal-button text-xl px-12 py-6">
                Get Your Free GMB Audit → See Who&apos;s Beating You
              </Button>
              <p className="text-sm text-white/70 mt-4 max-w-md">
                See exactly how we&apos;ll grow your business - no fluff, no jargon
              </p>
            </div>
            <div className="lg:col-span-4 text-white text-right">
              <div className="space-y-8">
                <div>
                  <div className="data-mono text-4xl font-bold text-orange">GETS YOU 3X MORE</div>
                  <div className="data-mono text-3xl font-bold text-white">CUSTOMERS</div>
                </div>
                <div>
                  <div className="data-mono text-4xl font-bold text-orange">+312%</div>
                  <div className="text-lg">More Customers for Our Clients</div>
                </div>
                <div>
                  <div className="text-xl font-bold">Surrey&apos;s First AI-Powered SEO Agency</div>
                </div>
                <div>
                  <div className="data-mono text-2xl">5.0★ Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="headline-xl text-navy mb-16 text-left">
            WHY CHOOSE OUR<br />
            SEO SERVICES SURREY?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="headline-lg text-navy mb-4">Traditional SEO Agencies Are Stuck in 2010</h3>
              </div>
              <div>
                <h3 className="headline-lg text-navy mb-4">You&apos;re Invisible Where It Matters</h3>
              </div>
              <div>
                <h3 className="headline-lg text-navy mb-4">Paying for Reports, Not Results</h3>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-lg">
                Other SEO companies Surrey businesses hire focus on blogs. But your customers 
                search &apos;plumber near me&apos; on Google Maps.
              </p>
              <p className="text-lg">
                If your Google Business Profile is weak, you&apos;re losing 78% of local searches 
                to competitors.
              </p>
              <p className="text-lg">
                Most Surrey SEO agencies show keyword rankings. We show phone calls and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="headline-xl text-navy mb-16 text-center">
            SEO SERVICES THAT<br />
            ACTUALLY WORK.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "QUICK WINS",
                subtitle: "For Solo Trades & Small Teams",
                features: [
                  "Fix why you're invisible on Google Maps",
                  "Get your phone ringing within 30 days",
                  "Rank above competitors for '[trade] near me'",
                  "Turn on review collection (build trust fast)",
                  "Weekly ranking reports you understand"
                ],
                outcomes: "Expect 5-10 more calls per week",
                idealFor: "Solo plumbers, electricians, handymen who need steady local work",
                price: "£697/month",
                tag: "Most Popular"
              },
              {
                title: "MARKET LEADER",
                subtitle: "For Growing Teams (2-5 vans)",
                features: [
                  "Everything in Quick Wins PLUS:",
                  "Dominate multiple postcodes",
                  "24/7 emergency search visibility",
                  "Automated quote requests",
                  "Competitor conquest campaigns"
                ],
                outcomes: "Expect 20-30 quality leads per week",
                idealFor: "Established trades ready to expand territory and hire more staff",
                price: "£997/month",
                tag: "Best Value"
              },
              {
                title: "DOMINATE SURREY",
                subtitle: "For Established Businesses",
                features: [
                  "Complete digital transformation",
                  "Multi-location/service domination",
                  "AI-powered content at scale",
                  "Sales team integration",
                  "Dedicated account strategist"
                ],
                outcomes: "Become the obvious choice in your market",
                idealFor: "5+ van operations, professional services, medical practices",
                price: "£2,997/month",
                tag: "White Glove"
              },
              {
                title: "FULL AI TRANSFORMATION",
                subtitle: "Complete Business Automation",
                features: [
                  "Everything in Dominate Surrey PLUS:",
                  "24/7 AI customer service",
                  "Intelligent lead scoring & routing",
                  "Automated job scheduling",
                  "Revenue optimization AI",
                  "Custom automation workflows"
                ],
                outcomes: "Run your business on autopilot while growing 50% YoY",
                idealFor: "Ambitious businesses ready to leap ahead with AI",
                price: "£4,997/month",
                tag: "Innovation Leader"
              }
            ].map((service, index) => (
              <div key={index} className="brutal-card relative flex flex-col h-full">
                {service.tag && (
                  <span className="absolute top-4 right-4 bg-orange text-white px-3 py-1 text-sm font-bold rounded z-10">
                    {service.tag}
                  </span>
                )}
                
                {/* Fixed height top section */}
                <div className="mb-4">
                  <h3 className="headline-lg text-navy mb-2 pr-32 min-h-[80px] flex items-start">{service.title}</h3>
                  <p className="text-sm font-semibold text-gray-600 h-6">{service.subtitle}</p>
                </div>
                
                {/* Flexible middle section */}
                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-orange mr-2 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Fixed height bottom section */}
                <div>
                  <div className="border-t pt-4 mb-4">
                    <p className="text-sm font-semibold text-navy mb-2">Expected Results:</p>
                    <p className="text-sm text-gray-700 h-10">{service.outcomes}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-navy mb-2">Perfect For:</p>
                    <p className="text-sm text-gray-700 h-20">{service.idealFor}</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="data-mono text-xl font-bold text-orange">{service.price}</div>
                    <p className="text-sm text-gray-600 mt-2 h-10">Founding Client Rate - Save £200/month</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="headline-xl text-white mb-16 text-center">
            SURREY BUSINESSES<br />
            WINNING WITH US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                business: "Surrey Architect | Epsom",
                before: "Invisible on Google",
                after: "#2 in Maps + £50k project",
                time: "30 days"
              },
              {
                business: "Emergency Plumber | Guildford", 
                before: "Page 3 rankings",
                after: "#1 + 47 calls/month",
                time: "42 days"
              },
              {
                business: "Roofer | Woking",
                before: "2 calls/week", 
                after: "5 calls/day + AI booking",
                time: "60 days"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white p-8 border-l-6 border-orange">
                <h3 className="font-bold text-lg mb-4">{study.business}</h3>
                <div className="space-y-2">
                  <div><strong>Before:</strong> {study.before}</div>
                  <div><strong>After:</strong> {study.after}</div>
                  <div className="data-mono text-orange font-bold">Time: {study.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="headline-xl text-navy mb-16 text-center">OUR PROVEN PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Audit", "Optimize GBP", "Build Authority", "Automate & Scale"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="data-mono text-4xl font-bold text-orange mb-4">{index + 1}</div>
                <h3 className="headline-lg text-navy">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="headline-xl text-navy mb-16 text-center">
            WE SPECIALIZE IN<br />
            YOUR INDUSTRY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Plumbers", desc: "Emergency calls, 24/7 visibility", link: "/industries/seo-for-plumbers" },
              { name: "Electricians", desc: "Safety searches, trust signals", link: "/industries/seo-for-electricians" },
              { name: "Builders", desc: "Project showcases, area coverage", link: "/industries/seo-for-builders" },
              { name: "Roofers", desc: "Storm season prep, instant quotes", link: "/industries/seo-for-roofers" },
              { name: "HVAC", desc: "Seasonal optimization, maintenance plans", link: "/industries/seo-for-hvac" },
              { name: "More Industries", desc: "See all our specialized services", link: "/industries" }
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="brutal-card block group">
                <h3 className="headline-lg text-navy mb-2">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="headline-xl text-navy mb-16 text-center">
            DOMINATING SURREY<br />
            ONE TOWN AT A TIME
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "Guildford", clients: "12 clients ranking #1", link: "/areas/seo-guildford" },
              { area: "Woking", clients: "8 clients dominating", link: "/areas/seo-woking" },
              { area: "Epsom", clients: "15 businesses transformed", link: "/areas/seo-epsom" },
              { area: "Redhill", clients: "6 trades crushing it", link: "/areas/seo-redhill" },
              { area: "Camberley", clients: "9 services winning", link: "/areas/seo-camberley" }
            ].map((area, index) => (
              <Link key={index} href={area.link} className="brutal-card block">
                <h3 className="headline-lg text-navy mb-2">{area.area}</h3>
                <p className="data-mono text-orange">{area.clients}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="headline-xl text-white mb-8">
            READY TO BEAT<br />
            YOUR COMPETITORS?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            We only work with one business per trade per Surrey postcode
          </p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Input 
                placeholder="Business Name"
                value={formData.businessName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, businessName: e.target.value})}
                className="brutal-input"
              />
              <Input 
                placeholder="Phone"
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
                className="brutal-input"
              />
              <Input 
                placeholder="Postcode"
                value={formData.postcode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, postcode: e.target.value})}
                className="brutal-input"
              />
              <div className="relative">
                <label htmlFor="service-type" className="sr-only">Service Type</label>
                <select 
                  id="service-type"
                  value={formData.serviceType}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({...formData, serviceType: e.target.value})}
                  className="brutal-input"
                >
                  <option value="">Service Type</option>
                  <option value="plumber">Plumber</option>
                  <option value="electrician">Electrician</option>
                  <option value="builder">Builder</option>
                  <option value="roofer">Roofer</option>
                  <option value="hvac">HVAC</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <Button type="submit" className="brutal-button text-xl px-12 py-6 bg-charcoal">
              Claim Your Area First
            </Button>
          </form>
        </div>
      </section>

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