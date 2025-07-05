const CaseStudies = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="headline-xl text-navy mb-16 text-center">
          CASE STUDIES<br />
          SURREY SUCCESS STORIES
        </h1>
        <div className="space-y-12">
          {[
            {
              business: "Surrey Architect | Epsom",
              industry: "Architecture",
              challenge: "Invisible on Google, losing clients to competitors",
              solution: "Complete GMB optimization + local authority building",
              results: "#2 in Maps + £50k project within 30 days",
              time: "30 days"
            },
            {
              business: "Emergency Plumber | Guildford",
              industry: "Plumbing",
              challenge: "Page 3 rankings, minimal emergency calls",
              solution: "24/7 optimization + review automation",
              results: "#1 ranking + 47 calls/month increase",
              time: "42 days"
            },
            {
              business: "Roofer | Woking",
              industry: "Roofing",
              challenge: "Only 2 calls per week, seasonal struggles",
              solution: "AI booking system + storm season optimization",
              results: "5 calls/day + automated booking system",
              time: "60 days"
            }
          ].map((study, index) => (
            <div key={index} className="brutal-card">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="headline-lg text-navy mb-4">{study.business}</h2>
                  <div className="data-mono text-orange font-bold mb-2">{study.industry}</div>
                  <div className="data-mono text-sm">Completed in {study.time}</div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Challenge:</h3>
                  <p className="mb-4">{study.challenge}</p>
                  <h3 className="font-bold mb-2">Solution:</h3>
                  <p>{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Results:</h3>
                  <p className="text-lg font-bold text-orange">{study.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;