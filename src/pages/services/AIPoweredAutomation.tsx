const AIPoweredAutomation = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="headline-xl text-navy mb-16 text-center">
          AI-POWERED AUTOMATION<br />
          SCALE YOUR BUSINESS
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="brutal-card mb-12">
            <h2 className="headline-lg text-navy mb-6">Automate Everything with AI</h2>
            <p className="text-lg mb-6">
              Stop manually managing leads, reviews, and customer communications. Our AI-powered 
              automation handles everything while you focus on delivering great service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">AI Automation Features:</h3>
                <ul className="space-y-2">
                  <li>• Lead capture & qualification</li>
                  <li>• Review generation automation</li>
                  <li>• Customer follow-up sequences</li>
                  <li>• Appointment booking system</li>
                  <li>• Social media management</li>
                  <li>• Custom n8n workflows</li>
                </ul>
              </div>
              <div className="brutal-card bg-orange text-white">
                <h3 className="font-bold mb-4">Investment:</h3>
                <div className="data-mono text-2xl font-bold mb-2">£997-2,500/month</div>
                <p>Based on complexity and integrations needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredAutomation;