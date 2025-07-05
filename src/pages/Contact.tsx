import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="headline-xl text-navy mb-16 text-center">
          GET YOUR FREE<br />
          SEO AUDIT TODAY
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-4">Ready to Dominate Surrey?</h2>
              <p className="text-lg mb-6">
                Book your free GMB audit and see exactly why your competitors are beating you. 
                We'll show you the gaps and how to fix them.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="data-mono text-orange font-bold">📞</div>
                  <div>
                    <div className="font-bold">Phone</div>
                    <div className="data-mono">07867 075691</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="data-mono text-orange font-bold">📍</div>
                  <div>
                    <div className="font-bold">Location</div>
                    <div>Ewell, Epsom, Surrey</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="data-mono text-orange font-bold">⏰</div>
                  <div>
                    <div className="font-bold">Response Time</div>
                    <div>Within 2 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
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
              <textarea
                placeholder="Tell us about your SEO challenges..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="brutal-input min-h-[120px] resize-none"
                required
              />
              <Button type="submit" className="brutal-button w-full">
                Get My Free SEO Audit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;