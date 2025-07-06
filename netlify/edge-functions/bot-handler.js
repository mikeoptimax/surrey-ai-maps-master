// Bot detection and SEO content injection Edge Function for OptiMAX-ai

export default async function handler(request, context) {
  // Check if the request is from a search bot by examining the user-agent
  const userAgent = request.headers.get('user-agent') || '';
  const isCrawler = /bot|crawl|spider|google|bing|facebook|twitter|linkedin/i.test(userAgent);
  
  // If it's not a crawler, simply pass the request through unchanged
  if (!isCrawler) {
    return context.next();
  }
  
  // For crawlers, we need to modify the response
  const response = await context.next();
  
  // Check if we have an HTML response to modify
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response; // Not HTML, return unchanged
  }
  
  // Clone the response and get the HTML content
  const originalHtml = await response.text();
  
  // Prepare the SEO-friendly content to inject (hidden for human visitors)
  const seoContent = `
<div style="position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden;">
  <h1>OptiMAX-ai - SEO Agency Surrey</h1>
  
  <p>
    OptiMAX-ai is Surrey's premier digital marketing agency specializing in Google Business 
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
    Address: 38 Sunnymede Avenue, West Ewell, Surrey, KT19 9TJ<br>
    Phone: +447867075691<br>
    Email: info@optimax-ai.com
  </p>
</div>
`;

  // Inject the SEO content after the opening <body> tag
  const modifiedHtml = originalHtml.replace(
    /(<body[^>]*>)/i,
    '$1' + seoContent
  );
  
  // Create a new response with the modified HTML and preserve the original headers
  return new Response(modifiedHtml, {
    headers: response.headers,
    status: response.status,
    statusText: response.statusText,
  });
}