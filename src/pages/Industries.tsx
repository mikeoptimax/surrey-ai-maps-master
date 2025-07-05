import { Link } from "react-router-dom";

const Industries = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="headline-xl text-navy mb-16 text-center">
          INDUSTRY-SPECIFIC<br />
          SEO EXPERTISE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "SEO for Plumbers",
              description: "Emergency visibility, local rankings, and 24/7 lead generation for plumbing services.",
              link: "/industries/seo-for-plumbers"
            },
            {
              title: "SEO for Electricians", 
              description: "Safety-focused SEO, trust signals, and local authority for electrical contractors.",
              link: "/industries/seo-for-electricians"
            },
            {
              title: "SEO for Builders",
              description: "Project showcases, area coverage, and reputation management for construction companies.",
              link: "/industries/seo-for-builders"
            },
            {
              title: "SEO for Roofers",
              description: "Storm season optimization, instant quotes, and emergency visibility for roofers.",
              link: "/industries/seo-for-roofers"
            },
            {
              title: "SEO for HVAC",
              description: "Seasonal optimization, maintenance plans, and energy efficiency focus for HVAC services.",
              link: "/industries/seo-for-hvac"
            }
          ].map((industry, index) => (
            <Link key={index} to={industry.link} className="brutal-card block">
              <h2 className="headline-lg text-navy mb-4">{industry.title}</h2>
              <p className="text-muted-foreground">{industry.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;