import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="headline-xl text-navy mb-16 text-center">
          OUR SEO SERVICES<br />
          FOR SURREY BUSINESSES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "SEO Agency Surrey",
              description: "Complete SEO services for Surrey businesses looking to dominate local search.",
              link: "/services/seo-agency-surrey"
            },
            {
              title: "Google Business Profile Surrey",
              description: "Specialized optimization for your Google Business Profile to rank #1 on Google Maps.",
              link: "/services/google-business-profile-surrey"
            },
            {
              title: "Local SEO Surrey",
              description: "Target customers in your exact service areas across Surrey with precision local SEO.",
              link: "/services/local-seo-surrey"
            },
            {
              title: "AI-Powered Automation",
              description: "Automate your lead generation, review management, and customer workflows with AI.",
              link: "/services/ai-powered-automation"
            },
            {
              title: "Marketing Strategy",
              description: "Strategic marketing planning designed to accelerate Surrey business growth with AI insights.",
              link: "/services/marketing-strategy"
            }
          ].map((service, index) => (
            <Link key={index} to={service.link} className="brutal-card block group hover:transform hover:-translate-y-1">
              <h2 className="headline-lg text-navy mb-4 group-hover:text-orange transition-colors">{service.title}</h2>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="mt-4 text-orange font-bold">Learn More →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;