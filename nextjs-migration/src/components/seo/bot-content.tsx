/**
 * This component provides structured data for search engines
 * Using proper schema.org markup instead of hidden content
 */

export function BotContent() {
  return (
    <>
      {/* Structured data for local business */}
      <div itemScope itemType="https://schema.org/ProfessionalService" style={{ display: 'none' }}>
        <meta itemProp="name" content="OptiMAX-ai - SEO Agency Surrey" />
        <meta itemProp="description" content="Surrey's premier digital marketing agency specializing in Google Business Profile optimization and local SEO" />
        <meta itemProp="telephone" content="+447867075691" />
        <meta itemProp="email" content="info@optimax-ai.com" />
        <meta itemProp="priceRange" content="£497-£1997" />
        
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content="38 Sunnymede Avenue" />
          <meta itemProp="addressLocality" content="West Ewell" />
          <meta itemProp="addressRegion" content="Surrey" />
          <meta itemProp="postalCode" content="KT19 9TJ" />
          <meta itemProp="addressCountry" content="GB" />
        </div>
        
        <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
          <meta itemProp="latitude" content="51.3536892" />
          <meta itemProp="longitude" content="-0.261261" />
        </div>
      </div>
    </>
  );
}