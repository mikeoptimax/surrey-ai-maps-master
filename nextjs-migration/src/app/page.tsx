'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"

console.log('Supabase client:', supabase)
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

export default function Home() {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    postcode: "",
    serviceType: ""
  })
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      business: "THE PLUMBER | SHOREDITCH",
      type: "Plumbing Services",
      before: "Page 5 on Google",
      after: "#1 in Maps + 450% more calls",
      time: "47 days",
      quote: "OptiMAX-ai completely transformed our online presence. We went from invisible to #1 in Maps in under 2 months.",
      author: "James Mitchell"
    },
    {
      business: "EMERGENCY PLUMBER | GUILDFORD",
      type: "Emergency Services",
      before: "Page 3 rankings",
      after: "#1 + 47 calls/month",
      time: "42 days",
      quote: "The ROI has been incredible. Our phone hasn't stopped ringing since they optimized our GBP.",
      author: "Sarah Johnson"
    },
    {
      business: "ROOFER | WOKING",
      type: "Roofing Services",
      before: "2 calls/week",
      after: "5 calls/day + AI booking",
      time: "60 days",
      quote: "Best investment we've made. Real leads, real results, not just rankings.",
      author: "David Thompson"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Form submitted with data:', formData)
    
    const timestamp = new Date().toISOString()
    const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
    
    const dataToSend = {
      businessName: formData.businessName || '',
      phone: formData.phone || '',
      postcode: formData.postcode || '',
      serviceType: formData.serviceType || '',
      timestamp: timestamp,
      source: 'optimax-homepage',
      url: currentUrl
    }
    
    // Store locally for user experience
    if (typeof window !== 'undefined') {
      localStorage.setItem('leadFormData', JSON.stringify(formData))
    }
    
    // Save to Supabase
    try {
      console.log('Attempting Supabase insert...')
      
      if (!supabase) {
        console.log('Supabase not configured, skipping database save')
        // Still show success to the user
        // Continue with webhook and redirect
      } else {
        const { data, error } = await supabase
          .from('leads')
          .insert([{
            business_name: formData.businessName,
            phone: formData.phone,
            postcode: formData.postcode,
            service_type: formData.serviceType,
            created_at: timestamp,
            source: 'optimax-homepage',
            url: currentUrl
          }])
        
        console.log('Supabase response:', { data, error })
        
        if (error) {
          console.error('Supabase error details:', error)
        } else {
          console.log('Successfully saved to Supabase!')
        }
      }
    } catch (supabaseError) {
      console.error('Supabase insert failed:', supabaseError)
      // Continue with webhook and redirect even if Supabase fails
    }
    
    // Send to n8n webhook
    try {
      const response = await fetch('https://optimax-ai.onrender.com/webhook/optimax-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      })
      
      const responseData = await response.json()
      
      if (response.ok) {
        // Success - redirect to booking
        window.location.href = '/book-call'
      } else {
        throw new Error('Webhook failed')
      }
    } catch (error) {
      // Still redirect even if webhook fails
      window.location.href = '/book-call'
    }
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
              <Link href="/book-call">
                <Button className="brutal-button text-xl px-12 py-6">
                  Get Your Free GMB Audit → See Who&apos;s Beating You
                </Button>
              </Link>
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
              
              {/* Add stat boxes */}
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded border-l-6 border-orange shadow-md">
                  <div className="data-mono text-4xl font-bold text-orange mb-2">87%</div>
                  <p className="text-lg">of customers find businesses on Google Maps first. If you're not visible, you don't exist.</p>
                </div>
                <div className="bg-white p-6 rounded border-l-6 border-orange shadow-md">
                  <div className="data-mono text-4xl font-bold text-orange mb-2">£500+</div>
                  <p className="text-lg">in lost revenue every single day you're not ranking. That's £15,000+ per month going to your competitors.</p>
                </div>
                <div className="bg-white p-6 rounded border-l-6 border-orange shadow-md">
                  <div className="data-mono text-4xl font-bold text-orange mb-2">24/7</div>
                  <p className="text-lg">Your competitors show up first - always. While you sleep, they're stealing your customers.</p>
                </div>
              </div>
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
                    {index === 0 && (
                      <Link href="/book-call" className="block mt-6">
                        <Button className="brutal-button w-full py-3">
                          Start →
                        </Button>
                      </Link>
                    )}
                    {index === 1 && (
                      <Link href="/book-call" className="block mt-6">
                        <Button className="brutal-button w-full py-3">
                          Dominate →
                        </Button>
                      </Link>
                    )}
                    {index === 2 && (
                      <Link href="/book-call" className="block mt-6">
                        <Button className="brutal-button bg-navy border-2 border-orange text-white w-full py-3">
                          Strategy →
                        </Button>
                      </Link>
                    )}
                    {index === 3 && (
                      <Link href="/book-call" className="block mt-6">
                        <Button className="brutal-button bg-orange w-full py-3">
                          AI →
                        </Button>
                      </Link>
                    )}
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
            RESULTS THAT<br />
            SPEAK LOUDER
          </h2>
          
          <div className="relative max-w-6xl mx-auto px-20">
            {/* Main carousel card with brutal border */}
            <div className="bg-white border-4 border-charcoal shadow-[8px_8px_0_rgba(0,0,0,1)] p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left side - Case study details */}
                <div>
                  <h3 className="headline-lg text-navy mb-2">{testimonials[currentTestimonial].business}</h3>
                  <p className="text-gray-600 mb-12 text-lg">{testimonials[currentTestimonial].type}</p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-1 h-20 bg-red-500 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-gray-600 mb-1">Before:</p>
                        <p className="text-2xl font-semibold">{testimonials[currentTestimonial].before}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                      <div className="w-1 h-20 bg-green-500 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-gray-600 mb-1">After:</p>
                        <p className="text-2xl font-semibold">{testimonials[currentTestimonial].after}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                      <div className="w-1 h-20 bg-orange flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-gray-600 mb-1">Timeframe:</p>
                        <p className="text-2xl font-semibold text-orange">{testimonials[currentTestimonial].time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Testimonial */}
                <div className="bg-navy p-10 border-4 border-charcoal shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange text-3xl">★</span>
                    ))}
                  </div>
                  <p className="text-white italic text-xl mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="text-orange text-lg">— {testimonials[currentTestimonial].author}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons - brutal style, outside the card */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange text-white w-16 h-16 border-4 border-charcoal shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:-translate-x-1 transition-all font-bold text-2xl"
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            >
              ‹
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange text-white w-16 h-16 border-4 border-charcoal shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:translate-x-1 transition-all font-bold text-2xl"
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            >
              ›
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-orange' : 'bg-gray-400'}`}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{cursor: 'pointer'}}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="headline-xl text-navy mb-4 text-center">
            DEAD SIMPLE
          </h2>
          <h2 className="headline-xl text-orange mb-16 text-center">
            PROCESS
          </h2>
          
          <div className="flex justify-center items-center max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center w-full">
              {/* Card 1 */}
              <div className="md:col-span-1 bg-white p-6 text-center border-4 border-orange h-[280px] flex flex-col justify-center">
                <div className="text-3xl mb-3">🔍</div>
                <div className="data-mono text-2xl font-bold mb-2">01</div>
                <h3 className="text-xl font-bold mb-3">AUDIT</h3>
                <p className="text-xs text-gray-600 leading-tight">Complete analysis of your current Google Business Profile and local search presence</p>
              </div>
              
              <div className="hidden md:flex justify-center text-3xl font-bold">+</div>
              
              {/* Card 2 */}
              <div className="md:col-span-1 bg-white p-6 text-center border-4 border-charcoal h-[280px] flex flex-col justify-center">
                <div className="text-3xl mb-3">⚙️</div>
                <div className="data-mono text-2xl font-bold mb-2">02</div>
                <h3 className="text-xl font-bold mb-3">OPTIMIZE</h3>
                <p className="text-xs text-gray-600 leading-tight">Full optimization of your profile, content, and local SEO strategy</p>
              </div>
              
              <div className="hidden md:flex justify-center text-3xl font-bold">+</div>
              
              {/* Card 3 */}
              <div className="md:col-span-1 bg-white p-6 text-center border-4 border-orange h-[280px] flex flex-col justify-center">
                <div className="text-3xl mb-3">📈</div>
                <div className="data-mono text-2xl font-bold mb-2">03</div>
                <h3 className="text-xl font-bold mb-3">DOMINATE</h3>
                <p className="text-xs text-gray-600 leading-tight">Watch your rankings climb to the top 3 positions in Google Maps</p>
              </div>
              
              <div className="hidden md:flex justify-center text-3xl font-bold">+</div>
              
              {/* Card 4 */}
              <div className="md:col-span-1 bg-white p-6 text-center border-4 border-charcoal h-[280px] flex flex-col justify-center">
                <div className="text-3xl mb-3">⚡</div>
                <div className="data-mono text-2xl font-bold mb-2">04</div>
                <h3 className="text-xl font-bold mb-3">SCALE</h3>
                <p className="text-xs text-gray-600 leading-tight">Continuous optimization and scaling to maximize your local market share</p>
              </div>
            </div>
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
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormData({...formData, businessName: e.target.value})
                }}
                className="brutal-input"
                required
              />
              <Input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
                className="brutal-input"
                required
              />
              <Input
                name="postcode"
                placeholder="Postcode"
                value={formData.postcode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, postcode: e.target.value})}
                className="brutal-input"
                required
              />
              <div className="relative">
                <label htmlFor="service-type" className="sr-only">Service Type</label>
                <select
                  name="serviceType"
                  id="service-type"
                  value={formData.serviceType}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({...formData, serviceType: e.target.value})}
                  className="brutal-input"
                  required
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
            <button
              type="submit"
              className="brutal-button text-xl px-12 py-6 bg-charcoal"
            >
              Claim Your Area First
            </button>
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