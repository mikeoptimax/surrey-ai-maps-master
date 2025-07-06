/**
 * This component provides additional SEO content for bots
 * Similar to the Netlify Edge Function behavior, it adds hidden content for crawlers
 */

export function BotContent() {
  return (
    <div style={{
      position: 'absolute',
      left: '-9999px',
      width: '1px',
      height: '1px',
      overflow: 'hidden'
    }}>
      <h1>OptiMAX-ai - SEO Agency Surrey</h1>
      
      <p>
        OptiMAX-ai is Surrey&apos;s premier digital marketing agency specializing in Google Business 
        Profile optimization and local SEO. We help Surrey businesses increase their visibility 
        on Google Maps using AI-powered strategies and proven optimization techniques.
      </p>
      
      <h2>Our SEO Services</h2>
      <ul>
        <li>Google Business Profile Optimization</li>
        <li>Local SEO Services</li>
        <li>AI-Powered SEO Strategy</li>
        <li>Review Generation & Management</li>
        <li>Competitor Analysis</li>
        <li>Local Citation Building</li>
      </ul>
      
      <h2>Areas We Serve</h2>
      <ul>
        <li>Epsom</li>
        <li>Guildford</li>
        <li>Woking</li>
        <li>Redhill</li>
        <li>Camberley</li>
        <li>All Surrey and surrounding areas</li>
      </ul>
      
      <h2>Contact Us</h2>
      <p>
        Address: 38 Sunnymede Avenue, West Ewell, Surrey, KT19 9TJ<br />
        Phone: +447867075691<br />
        Email: info@optimax-ai.com
      </p>
    </div>
  );
}