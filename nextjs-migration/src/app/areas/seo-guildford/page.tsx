'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SiteLayout from "@/components/site-layout"

export default function SEOGuildfordPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Guildford SEO form submitted:", formData);
  };

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Link href="/areas" className="text-orange hover:underline mb-4 inline-block">← Back to Areas</Link>
          <h1 className="headline-xl text-navy mb-8">
            GUILDFORD&apos;S PREMIER<br />
            SEO AGENCY
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help Guildford businesses dominate local search results. Already 
            serving 12 Guildford companies ranking #1 on Google.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="brutal-card mb-12">
              <h2 className="headline-lg text-navy mb-6">Why Guildford Businesses Need Local SEO</h2>
              <div className="space-y-6">
                <p>
                  Guildford is one of Surrey's most competitive business markets, with over 140,000 
                  monthly local searches for businesses and services. Yet most Guildford businesses 
                  are invisible in local search results.
                </p>
                <p>
                  Our Guildford-specific SEO strategy focuses on dominating the local map pack and 
                  Google Business Profile optimization to ensure you're visible when local customers 
                  are searching.
                </p>
              </div>
            </div>

            <h3 className="headline-lg text-navy mb-6">Our Guildford SEO Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Guildford GBP Optimization",
                  description: "Specialized Google Business Profile optimization for Guildford's unique market."
                },
                {
                  title: "Local Keyword Targeting",
                  description: "Target Guildford-specific keywords and neighborhoods for maximum visibility."
                },
                {
                  title: "Competitor Analysis",
                  description: "Comprehensive analysis of top-ranking Guildford competitors."
                },
                {
                  title: "Review Generation",
                  description: "Automated system to collect 5-star reviews from happy Guildford customers."
                }
              ].map((feature, index) => (
                <div key={index} className="brutal-card h-full">
                  <h4 className="font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <h3 className="headline-lg text-navy mb-6">Guildford SEO Results</h3>
            <div className="brutal-card mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "Businesses at #1", value: "12" },
                  { metric: "Average Position Gain", value: "+14.6" },
                  { metric: "Average ROI", value: "827%" }
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
              <h3 className="headline-lg mb-6">Get Your Free Guildford SEO Audit</h3>
              <p className="mb-6">
                See exactly how your business can dominate Guildford&apos;s local search results.
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
                  placeholder="Business Name"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
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
                <div className="relative">
                  <label htmlFor="service-type" className="sr-only">Business Type</label>
                  <select 
                    id="service-type"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="brutal-input w-full"
                    required
                  >
                    <option value="">Select Your Business Type</option>
                    <option value="plumber">Plumber</option>
                    <option value="electrician">Electrician</option>
                    <option value="builder">Builder</option>
                    <option value="roofer">Roofer</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail</option>
                    <option value="professional">Professional Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Button type="submit" className="brutal-button w-full bg-orange">
                  Get My Free Guildford SEO Audit
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <section className="py-24 bg-gray-light -mx-4 px-4 mt-12">
          <div className="container mx-auto">
            <h2 className="headline-xl text-navy mb-12 text-center">
              GUILDFORD SUCCESS STORIES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  business: "Guildford Legal Services",
                  before: "Page 3 rankings, 2 leads per month",
                  after: "#1 on Maps, 17 new clients per month",
                  roi: "1,240%"
                },
                {
                  business: "Guildford Home Renovations",
                  before: "No Google visibility",
                  after: "Top 3 for all renovation terms",
                  roi: "918%"
                },
                {
                  business: "Guildford Dental Practice",
                  before: "Expensive PPC campaigns",
                  after: "35 new patients monthly from organic",
                  roi: "726%"
                }
              ].map((story, index) => (
                <div key={index} className="brutal-card h-full">
                  <h4 className="font-bold text-lg mb-3">{story.business}</h4>
                  <p className="mb-2"><strong>Before:</strong> {story.before}</p>
                  <p className="mb-2"><strong>After:</strong> {story.after}</p>
                  <p className="data-mono text-orange font-bold">ROI: {story.roi}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}