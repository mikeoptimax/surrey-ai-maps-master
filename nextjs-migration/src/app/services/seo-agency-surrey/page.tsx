'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SiteLayout from "@/components/site-layout"

export default function SEOAgencySurreyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SEO audit form submitted:", formData);
  };

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Link href="/services" className="text-orange hover:underline mb-4 inline-block">← Back to Services</Link>
          <h1 className="headline-xl text-navy mb-8">
            SURREY&apos;S TOP-RATED<br />
            SEO AGENCY
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete SEO services for Surrey businesses looking to dominate local search. 
            We deliver end-to-end SEO that gets your business ranking #1 and driving real leads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-6">What&apos;s Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Complete SEO Audit</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Keyword Research & Strategy</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> On-Page Optimization</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Content Creation</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Link Building</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Monthly Reporting</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="headline-lg text-navy">Success Stories</h3>
              {[
                {
                  business: "Surrey Heating Company",
                  challenge: "Page 2 rankings, minimal leads",
                  result: "#1 rankings + 312% increase in calls",
                  time: "90 days"
                },
                {
                  business: "Guildford Accountant",
                  challenge: "Lost to big firms online",
                  result: "Outranking national competitors locally",
                  time: "4 months"
                },
                {
                  business: "Epsom Home Services",
                  challenge: "No organic visibility",
                  result: "£180k additional revenue from SEO",
                  time: "6 months"
                }
              ].map((study, index) => (
                <div key={index} className="brutal-card">
                  <h4 className="font-bold text-lg mb-2">{study.business}</h4>
                  <p className="mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                  <p className="text-orange font-bold">{study.result}</p>
                  <span className="data-mono text-sm">Delivered in {study.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="brutal-card bg-orange text-white sticky top-24">
              <h3 className="headline-lg mb-6">Investment</h3>
              <div className="data-mono text-4xl font-bold mb-4">£697/month</div>
              <p className="mb-6">Complete SEO agency services with 90-day ranking guarantee</p>
              <Button className="brutal-button w-full bg-white text-orange border-white">
                Get Your SEO Audit
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-24 bg-gray-light -mx-4 px-4 mt-24">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline-xl text-navy mb-8">
                READY TO DOMINATE<br />
                SURREY SEARCH?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get your free SEO audit and see exactly what&apos;s holding you back
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Input 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
              </div>
              <Button type="submit" className="brutal-button text-xl px-12 py-6 mx-auto block">
                Get My Free SEO Audit
              </Button>
            </form>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}