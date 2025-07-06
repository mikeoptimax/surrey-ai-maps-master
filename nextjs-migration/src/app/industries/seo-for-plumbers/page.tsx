'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SiteLayout from "@/components/site-layout"

export default function SEOForPlumbersPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    postcode: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Plumber SEO form submitted:", formData);
  };

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Link href="/industries" className="text-orange hover:underline mb-4 inline-block">← Back to Industries</Link>
          <h1 className="headline-xl text-navy mb-8">
            SEO FOR PLUMBERS<br />
            THAT GENERATES CALLS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Emergency plumbing calls are worth £150-£500 each. Our SEO service puts your 
            plumbing business at the top of Google when homeowners need you most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="brutal-card mb-12">
              <h2 className="headline-lg text-navy mb-6">Why Plumbers Need Specialized SEO</h2>
              <div className="space-y-6">
                <p>
                  Most plumbers rely on expensive pay-per-click ads or aggregator sites that take a huge commission. 
                  But homeowners with emergency plumbing issues overwhelmingly choose businesses that appear in 
                  Google Maps results or organic search.
                </p>
                <p>
                  Our plumber-specific SEO strategy focuses on emergency keywords that convert into immediate jobs,
                  not just rankings for general terms like "plumber Surrey" that rarely convert.
                </p>
              </div>
            </div>

            <h3 className="headline-lg text-navy mb-6">How We Help Plumbers Get More Calls</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Emergency Keyword Focus",
                  description: "Target phrases people use when they have a burst pipe or blocked drain and need help NOW."
                },
                {
                  title: "Google Maps Domination",
                  description: "Complete GBP optimization for visibility when people search for 'plumber near me'."
                },
                {
                  title: "Review Generation",
                  description: "Automated system to collect 5-star reviews from happy customers."
                },
                {
                  title: "Before/After Showcasing",
                  description: "Visual content strategy that demonstrates your quality work."
                }
              ].map((feature, index) => (
                <div key={index} className="brutal-card h-full">
                  <h4 className="font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <h3 className="headline-lg text-navy mb-6">Real Results for Plumbers</h3>
            <div className="brutal-card mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "Avg. Monthly Calls", value: "47" },
                  { metric: "Google Maps Position", value: "#1-3" },
                  { metric: "Cost Per Lead", value: "£14.83" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="data-mono text-3xl font-bold text-orange">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="brutal-card bg-navy text-white sticky top-24">
              <h3 className="headline-lg mb-6">Get Your Free Plumber SEO Audit</h3>
              <p className="mb-6">
                See exactly how many calls you're missing out on and how quickly we can get you ranking.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="brutal-input"
                  required
                />
                <Input 
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="brutal-input"
                  required
                />
                <Input 
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="brutal-input"
                  required
                />
                <Input 
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="brutal-input"
                  required
                />
                <Input 
                  placeholder="Business Postcode"
                  value={formData.postcode}
                  onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                  className="brutal-input"
                  required
                />
                <Button type="submit" className="brutal-button w-full bg-orange">
                  Get My Free Plumber SEO Audit
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Case Study Section */}
        <section className="py-24 bg-gray-light -mx-4 px-4 mt-12">
          <div className="container mx-auto">
            <h2 className="headline-xl text-navy mb-12 text-center">
              PLUMBER SEO CASE STUDY
            </h2>
            
            <div className="brutal-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="headline-lg text-navy mb-4">Emergency Plumber | Guildford</h3>
                  <p className="mb-4"><strong>Challenge:</strong> Local plumber stuck on page 3 of Google with expensive PPC campaigns and poor-quality leads from directories.</p>
                  <p className="mb-4"><strong>Solution:</strong> Complete Google Business Profile optimization, emergency keyword targeting, and review automation system.</p>
                  <div className="space-y-2 mb-4">
                    <p className="font-bold text-orange">Results:</p>
                    <p>• #1 Google Maps position in 42 days</p>
                    <p>• 47 direct calls per month</p>
                    <p>• £180+ average job value</p>
                    <p>• PPC spend reduced by 60%</p>
                  </div>
                  <div className="data-mono">ROI: 1,124%</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white p-6 border-2 border-navy max-w-md">
                    <div className="text-center mb-4">
                      <p className="text-lg font-bold">"My phone rings all day now with quality jobs. Best marketing investment I've ever made."</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">- Dave Wilson</p>
                      <p className="text-sm text-muted-foreground">Wilson's Plumbing Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}