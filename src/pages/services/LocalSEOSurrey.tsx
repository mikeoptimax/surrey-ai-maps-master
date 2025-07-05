import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const LocalSEOSurrey = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Local SEO form submitted:", formData);
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
            LOCAL SEO THAT<br />
            DRIVES CALLS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just rank in one area. Our local SEO Surrey service gets you visible 
            across Guildford, Woking, Epsom, Redhill, Camberley and every town between.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Local Citation Building</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> NAP Consistency Audit</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Local Content Creation</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Directory Submissions</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Mobile Optimization</li>
                  <li className="flex items-center"><span className="text-orange mr-2">✓</span> Voice Search Optimization</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="headline-lg text-navy">Local Success Stories</h3>
              {[
                {
                  business: "Surrey Multi-Location Plumber",
                  challenge: "Only visible in one town",
                  result: "Dominating 5 Surrey areas + 400% leads",
                  time: "4 months"
                },
                {
                  business: "Guildford to Redhill Electrician",
                  challenge: "Scattered local presence",
                  result: "Consistent #1-3 rankings across Surrey",
                  time: "3 months"
                },
                {
                  business: "Epsom Home Services",
                  challenge: "Losing to single-location competitors",
                  result: "£250k revenue from expanded coverage",
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
              <p className="mb-6">Dominate multiple Surrey areas simultaneously</p>
              <Button className="brutal-button w-full bg-white text-orange border-white">
                Dominate Your Local Area
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
                ALL OF SURREY?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Stop being invisible in profitable areas. Dominate your entire service area.
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
                Dominate My Local Area
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

export default LocalSEOSurrey;