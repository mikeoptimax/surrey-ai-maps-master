# Next.js 14 Migration

This project is a migration of the original React+Vite website to Next.js 14 with App Router. The migration preserves all functionality and visual appearance while taking advantage of Next.js features.

## Migration Summary

### Key Changes

- Migrated from Vite to Next.js 14
- Switched from React Router to Next.js App Router
- Converted from client-side routing to hybrid routing with server components
- Migrated metadata from `index.html` to Next.js Metadata API
- Replaced Netlify Edge Function with Next.js Middleware
- Maintained all UI components and styling

### Structure Changes

- `/src/pages/*` → `/src/app/*` (App Router structure)
- React Router routes → Next.js file-based routing
- Client-side components now use 'use client' directive where needed
- Preserved component structure in `/src/components`
- Utilities moved to `/src/lib`

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Key Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Radix UI Components

## Project Structure

```
/src
  /app                  # App Router pages
    /services           # Service pages
    /industries         # Industry pages
    /areas              # Area pages
    /layout.tsx         # Root layout with metadata
    /page.tsx           # Homepage
  /components           # Reusable components
    /ui                 # UI components
    /seo                # SEO-related components
  /lib                  # Utilities and libraries
    utils.ts            # Helper functions
    schema.ts           # Structured data schemas
```

## SEO Improvements

The migration enhances SEO through:

- Server-side rendering for improved crawlability
- Next.js Metadata API for better SEO control
- Structured data using JSON-LD
- Bot detection middleware
- Optimized routing and page loading

## Deployment

This project is configured for deployment on Netlify with the included `netlify.toml` configuration.

```bash
# Deploy to Netlify
npm run build
netlify deploy --prod