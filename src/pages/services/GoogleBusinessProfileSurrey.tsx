import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const GoogleBusinessProfileSurrey = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("GBP audit form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
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

      <div className="container mx-auto px-4 py-24 mt-20">
        <div className="text-center mb-16">
          <Link to="/services" className="text-orange hover:underline mb-4 inline-block">← Back to Services</Link>
          <h1 className="headline-xl text-navy mb-8">
            GOOGLE BUSINESS PROFILE<br />
            DOMINATION
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            78% of local searches happen on Google Maps. If your Google Business Profile 
            isn't optimized, you're invisible to Surrey customers looking for your services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Complete GBP Setup & Optimization</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Google Posts Management</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Review Generation System</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Q&A Management</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Photo Optimization</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Competitor Tracking</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="headline-lg text-navy">Maps Ranking Success</h3>
              {[
                {
                  business: "Woking Emergency Plumber",
                  challenge: "Invisible on Google Maps",
                  result: "#1 Maps ranking + 67 emergency calls/month",
                  time: "45 days"
                },
                {
                  business: "Surrey Landscaping Co",
                  challenge: "Lost to competitors on Maps",
                  result: "Top 3 Maps + £120k new contracts",
                  time: "60 days" 
                },
                {
                  business: "Guildford Dental Practice",
                  challenge: "No Maps visibility",
                  result: "#2 Maps + 300% new patient increase",
                  time: "30 days"
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
              <div className="data-mono text-4xl font-bold mb-4">£497/month</div>
              <p className="mb-6">Top 3 Maps ranking in 90 days guaranteed</p>
              <Button className="brutal-button w-full bg-white text-orange border-white">
                Claim Your Free GBP Audit
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
                GOOGLE MAPS?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Claim your free GBP audit and see who's beating you on Google Maps
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
                Claim My Free GBP Audit
              </Button>
            </form>
          </div>
        </section>
      </div>

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
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2">
                <Link to="/services/seo-agency-surrey" className="block hover:text-orange">SEO Agency Surrey</Link>
                <Link to="/services/google-business-profile-surrey" className="block hover:text-orange">Google Business Profile</Link>
                <Link to="/services/local-seo-surrey" className="block hover:text-orange">Local SEO Surrey</Link>
                <Link to="/services/ai-powered-automation" className="block hover:text-orange">AI Automation</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Industries</h4>
              <div className="space-y-2">
                <Link to="/industries/seo-for-plumbers" className="block hover:text-orange">SEO for Plumbers</Link>
                <Link to="/industries/seo-for-electricians" className="block hover:text-orange">SEO for Electricians</Link>
                <Link to="/industries/seo-for-builders" className="block hover:text-orange">SEO for Builders</Link>
                <Link to="/industries/seo-for-roofers" className="block hover:text-orange">SEO for Roofers</Link>
                <Link to="/industries/seo-for-hvac" className="block hover:text-orange">SEO for HVAC</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
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

export default GoogleBusinessProfileSurrey;