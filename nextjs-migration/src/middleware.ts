import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware to handle bot requests and inject SEO content
 * This replaces the Netlify Edge Function for bot handling
 */
export function middleware(request: NextRequest) {
  // Check if the request is from a search bot by examining the user-agent
  const userAgent = request.headers.get('user-agent') || '';
  const isCrawler = /bot|crawl|spider|google|bing|facebook|twitter|linkedin/i.test(userAgent);
  
  // If it's not a crawler, simply pass the request through unchanged
  if (!isCrawler) {
    return NextResponse.next();
  }
  
  // For crawlers, continue with the request but rewrite the response later
  const response = NextResponse.next();
  
  // Add a header to identify bot requests for further processing in a Server Component
  response.headers.set('x-is-bot', 'true');
  
  return response;
}

/**
 * Configure which paths the middleware should run on
 */
export const config = {
  // Apply to all routes
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     * - api (API routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
};