const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="headline-xl text-navy mb-16 text-center">
          ABOUT OPTIMAX<span className="text-orange">-AI</span>
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="brutal-card mb-12">
            <h2 className="headline-lg text-navy mb-6">Surrey's AI-Powered SEO Agency</h2>
            <p className="text-lg mb-6">
              We're not your typical SEO company. While other agencies focus on outdated tactics, 
              we use AI-powered automation and data-driven strategies to get Surrey businesses 
              ranking #1 on Google Maps where it actually matters.
            </p>
            <p className="text-lg">
              Based in Ewell, Epsom, we understand the Surrey market inside and out. Our local 
              expertise combined with cutting-edge AI technology delivers results other SEO 
              agencies can't match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="brutal-card">
              <h3 className="headline-lg text-navy mb-4">Our Mission</h3>
              <p>To help Surrey home service businesses dominate their local markets through 
              AI-powered SEO that delivers real leads, not just rankings.</p>
            </div>
            <div className="brutal-card">
              <h3 className="headline-lg text-navy mb-4">Our Difference</h3>
              <p>We guarantee top 3 Google Maps rankings in 90 days. No other Surrey SEO 
              agency offers this level of confidence in their results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;