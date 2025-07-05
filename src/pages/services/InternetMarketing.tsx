import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InternetMarketing = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Link to="/services" className="text-orange hover:underline mb-4 inline-block">← Back to Services</Link>
          <h1 className="headline-xl text-navy mb-8">
            DOMINATE LOCAL<br />
            SEARCH RESULTS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive internet marketing services. We specialize in Google Business Profile 
            optimization, ensuring Surrey businesses appear where customers search.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li>• Google Business Profile Optimization</li>
                  <li>• GMB Management</li>
                  <li>• Local SEO Services</li>
                  <li>• Google Maps Ranking</li>
                </ul>
                <ul className="space-y-3">
                  <li>• Voice Search Optimization</li>
                  <li>• Mobile SEO</li>
                  <li>• Review Management</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="headline-lg text-navy">Success Stories</h3>
              {[
                {
                  business: "Woking Emergency Plumber",
                  challenge: "Invisible on Google Maps",
                  result: "#1 ranking + 67 emergency calls/month",
                  time: "45 days"
                },
                {
                  business: "Surrey Landscaping Co",
                  challenge: "Lost to competitors online",
                  result: "Top 3 Maps + £120k new contracts",
                  time: "60 days" 
                },
                {
                  business: "Guildford Dental Practice",
                  challenge: "No online visibility",
                  result: "300% increase in new patients",
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
            <div className="brutal-card bg-orange text-white sticky top-8">
              <h3 className="headline-lg mb-6">Investment</h3>
              <div className="data-mono text-4xl font-bold mb-4">£697/month</div>
              <p className="mb-6">Complete internet marketing dominance</p>
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

export default InternetMarketing;