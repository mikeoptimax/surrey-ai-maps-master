import { Link } from "react-router-dom";

const Areas = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="headline-xl text-navy mb-16 text-center">
          SEO SERVICES<br />
          ACROSS SURREY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              area: "SEO Guildford",
              description: "Complete SEO services for Guildford businesses targeting local customers.",
              clients: "12 clients ranking #1",
              link: "/areas/seo-guildford"
            },
            {
              area: "SEO Woking",
              description: "Local SEO domination for Woking-based home service businesses.",
              clients: "8 clients dominating",
              link: "/areas/seo-woking"
            },
            {
              area: "SEO Epsom",
              description: "Epsom SEO specialists helping local businesses get found on Google.",
              clients: "15 businesses transformed",
              link: "/areas/seo-epsom"
            },
            {
              area: "SEO Redhill",
              description: "Redhill local SEO services for trades and service businesses.",
              clients: "6 trades crushing it",
              link: "/areas/seo-redhill"
            },
            {
              area: "SEO Camberley",
              description: "Camberley SEO agency services for maximum local visibility.",
              clients: "9 services winning",
              link: "/areas/seo-camberley"
            }
          ].map((area, index) => (
            <Link key={index} to={area.link} className="brutal-card block">
              <h2 className="headline-lg text-navy mb-4">{area.area}</h2>
              <p className="text-muted-foreground mb-4">{area.description}</p>
              <div className="data-mono text-orange font-bold">{area.clients}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;