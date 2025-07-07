import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Index = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    postcode: "",
    serviceType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-2 border-charcoal">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              OptiMAX<span className="text-orange">-ai</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/services" className="hover:text-orange transition-colors">Services</Link>
              <Link to="/industries" className="hover:text-orange transition-colors">Industries</Link>
              <Link to="/areas" className="hover:text-orange transition-colors">Areas</Link>
              <Link to="/about" className="hover:text-orange transition-colors">About</Link>
              <Link to="/case-studies" className="hover:text-orange transition-colors">Case Studies</Link>
              <Link to="/contact" className="hover:text-orange transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="data-mono text-sm">07867 075691</span>
              <Button className="brutal-button">Get Free Audit</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center pt-32">
        <div className="hero-content container mx-auto px-4 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="headline-giant text-white mb-8">
                <span className="block">Get 3X More Customers</span>
                <span className="block text-orange">with Surrey's</span>
                <span className="block">First AI-Powered SEO</span>
              </h1>
              <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed">
                Looking for an SEO agency Surrey businesses trust? We're the only SEO company 
                in Surrey that guarantees top 3 Google Maps rankings in 90 days. We focus on 
                what drives calls - not blogs, not backlinks - real local visibility.
              </p>
              <Button className="brutal-button text-xl px-12 py-6">
                Get Your Free GMB Audit → See Who's Beating You
              </Button>
            </div>
            <div className="lg:col-span-4 text-white text-right">
              <div className="space-y-8">
                <div>
                  <div className="data-mono text-4xl font-bold text-orange">+312%</div>
                  <div className="text-lg">Average Lead Increase</div>
                </div>
                <div>
                  <div className="text-xl font-bold">Surrey's AI SEO Specialists</div>
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
                <h3 className="headline-lg text-navy mb-4">You're Invisible Where It Matters</h3>
              </div>
              <div>
                <h3 className="headline-lg text-navy mb-4">Paying for Reports, Not Results</h3>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-lg">
                Other SEO companies Surrey businesses hire focus on blogs. But your customers 
                search 'plumber near me' on Google Maps.
              </p>
              <p className="text-lg">
                If your Google Business Profile is weak, you're losing 78% of local searches 
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
                title: "GMB-FOCUSED SEO",
                features: [
                  "Complete Google Business Profile overhaul",
                  "Local keyword optimization", 
                  "Review generation system",
                  "Competitor tracking"
                ],
                price: "£497/month"
              },
              {
                title: "LOCAL SEO COMPLETE",
                features: [
                  "Everything in GMB-Focused",
                  "50+ local citations",
                  "NAP consistency audit",
                  "Schema markup"
                ],
                price: "£697/month"
              },
              {
                title: "ENTERPRISE SEO",
                features: [
                  "Full SEO agency Surrey services",
                  "Multi-location management",
                  "AI-powered content",
                  "White-glove service"
                ],
                price: "£1,200/month"
              },
              {
                title: "AI AUTOMATION",
                features: [
                  "Lead automation",
                  "Review management",
                  "Workflow optimization",
                  "Custom n8n solutions"
                ],
                price: "£997-2,500/month"
              }
            ].map((service, index) => (
              <div key={index} className="brutal-card">
                <h3 className="headline-lg text-navy mb-6">{service.title}</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm">• {feature}</li>
                  ))}
                </ul>
                <div className="data-mono text-xl font-bold text-orange">{service.price}</div>
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
              <Link key={index} to={industry.link} className="brutal-card block group">
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
              <Link key={index} to={area.link} className="brutal-card block">
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
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                className="brutal-input"
              />
              <Input 
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="brutal-input"
              />
              <Input 
                placeholder="Postcode"
                value={formData.postcode}
                onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                className="brutal-input"
              />
              <div className="relative">
                <label htmlFor="service-type" className="sr-only">Service Type</label>
                <select 
                  id="service-type"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
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
                <Link to="/services/seo-agency-surrey" className="block hover:text-orange">SEO Agency Surrey</Link>
                <Link to="/services/google-business-profile-surrey" className="block hover:text-orange">Google Business Profile</Link>
                <Link to="/services/local-seo-surrey" className="block hover:text-orange">Local SEO Surrey</Link>
                <Link to="/services/ai-powered-automation" className="block hover:text-orange">AI Automation</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Industries</h3>
              <div className="space-y-2">
                <Link to="/industries/seo-for-plumbers" className="block hover:text-orange">SEO for Plumbers</Link>
                <Link to="/industries/seo-for-electricians" className="block hover:text-orange">SEO for Electricians</Link>
                <Link to="/industries/seo-for-builders" className="block hover:text-orange">SEO for Builders</Link>
                <Link to="/industries/seo-for-roofers" className="block hover:text-orange">SEO for Roofers</Link>
                <Link to="/industries/seo-for-hvac" className="block hover:text-orange">SEO for HVAC</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <div className="space-y-2">
                <Link to="/about" className="block hover:text-orange">About</Link>
                <Link to="/case-studies" className="block hover:text-orange">Case Studies</Link>
                <Link to="/blog" className="block hover:text-orange">Blog</Link>
                <Link to="/contact" className="block hover:text-orange">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm">
            <p>SEO Agency Surrey | SEO Services Surrey | Local SEO Surrey | AI Automation Surrey</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;