import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SEOWebDesign = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Link to="/services" className="text-orange hover:underline mb-4 inline-block">← Back to Services</Link>
          <h1 className="headline-xl text-navy mb-8">
            WEBSITES BUILT<br />
            TO RANK
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike typical Surrey web designers, we build with SEO at the core. 
            Every element optimized for visibility and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li>• SEO-Optimized Website Design</li>
                  <li>• Local Landing Pages</li>
                  <li>• Mobile Optimization</li>
                </ul>
                <ul className="space-y-3">
                  <li>• Website Speed Optimization</li>
                  <li>• Schema Markup</li>
                  <li>• Technical SEO</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="headline-lg text-navy">Success Stories</h3>
              {[
                {
                  business: "Surrey Legal Practice",
                  challenge: "Beautiful site, zero visitors",
                  result: "SEO rebuild = 500% traffic increase",
                  time: "90 days"
                },
                {
                  business: "Woking Home Services",
                  challenge: "Slow, unresponsive website",
                  result: "Lightning fast + #1 Google rankings",
                  time: "60 days"
                },
                {
                  business: "Epsom Restaurant",
                  challenge: "No online bookings",
                  result: "Conversion-optimized = 200% bookings",
                  time: "45 days"
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
            <div className="brutal-card bg-orange text-white sticky top-8">
              <h3 className="headline-lg mb-6">Investment</h3>
              <div className="data-mono text-3xl font-bold mb-4">£2,500-5,000</div>
              <p className="mb-6">Complete SEO-optimized website + 3 months optimization</p>
              <Button className="brutal-button w-full bg-white text-orange border-white">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOWebDesign;