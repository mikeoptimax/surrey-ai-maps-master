import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessAutomation = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Link to="/services" className="text-orange hover:underline mb-4 inline-block">← Back to Services</Link>
          <h1 className="headline-xl text-navy mb-8">
            AUTOMATE YOUR<br />
            BUSINESS OPERATIONS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform operations with intelligent automation. We help Surrey businesses 
            streamline workflows and scale efficiently using AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="brutal-card mb-8">
              <h2 className="headline-lg text-navy mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li>• Business Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Lead Management Systems</li>
                </ul>
                <ul className="space-y-3">
                  <li>• Customer Journey Mapping</li>
                  <li>• Call Tracking Implementation</li>
                  <li>• Revenue Attribution</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="headline-lg text-navy">Success Stories</h3>
              {[
                {
                  business: "Camberley HVAC Company",
                  challenge: "Manual booking chaos",
                  result: "Automated system = 70% time saved",
                  time: "60 days"
                },
                {
                  business: "Surrey Property Management",
                  challenge: "Lost leads and enquiries",
                  result: "100% lead capture + instant responses",
                  time: "45 days"
                },
                {
                  business: "Guildford Construction",
                  challenge: "Project management mess",
                  result: "Streamlined operations + 40% profit increase",
                  time: "90 days"
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
              <div className="data-mono text-3xl font-bold mb-4">£1,500-3,000</div>
              <p className="mb-6">One-time setup + monthly optimization</p>
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

export default BusinessAutomation;