import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MarketingStrategy = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Link to="/services" className="text-orange hover:underline mb-4 inline-block">← Back to Services</Link>
          <h1 className="headline-xl text-navy mb-8">
            MARKETING STRATEGY<br />
            THAT DELIVERS GROWTH
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic marketing planning designed to accelerate Surrey business growth. 
            We combine traditional marketing wisdom with AI-powered insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li>• Marketing Strategy Consultation</li>
                  <li>• Business Growth Planning</li>
                  <li>• Marketing Audit Services</li>
                </ul>
                <ul className="space-y-3">
                  <li>• Competitor Analysis Reports</li>
                  <li>• Monthly Marketing Reports</li>
                  <li>• Marketing Automation Setup</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="headline-lg text-navy">Success Stories</h3>
              {[
                {
                  business: "Surrey Property Developer",
                  challenge: "No clear marketing direction",
                  result: "£2.3M in sales pipeline within 6 months",
                  time: "90 days"
                },
                {
                  business: "Guildford Home Services",
                  challenge: "Inconsistent lead generation",
                  result: "300% increase in qualified leads",
                  time: "4 months"
                },
                {
                  business: "Epsom Restaurant Chain",
                  challenge: "Low brand awareness",
                  result: "85% increase in foot traffic",
                  time: "3 months"
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
              <div className="data-mono text-4xl font-bold mb-4">£897/month</div>
              <p className="mb-6">Complete marketing strategy and ongoing optimization</p>
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

export default MarketingStrategy;