/**
 * Utility to preload React.lazy components
 * @param componentImports - Array of import functions for React.lazy components
 */
export const preloadComponents = (componentImports: (() => Promise<any>)[]) => {
  componentImports.forEach(importFn => {
    // Start loading the chunk in the background
    importFn();
  });
};

/**
 * Preload related components - used to preload components that are likely
 * to be visited next based on the current route
 */
export const preloadRelatedComponents = (routePath: string) => {
  // Service pages preloading
  if (routePath === '/services') {
    preloadComponents([
      () => import('../pages/services/SEOAgencySurrey'),
      () => import('../pages/services/LocalSEOSurrey'),
      () => import('../pages/services/GoogleBusinessProfileSurrey')
    ]);
  }

  // Industry pages preloading
  else if (routePath === '/industries') {
    preloadComponents([
      () => import('../pages/industries/SEOForPlumbers'),
      () => import('../pages/industries/SEOForElectricians'),
      () => import('../pages/industries/SEOForBuilders')
    ]);
  }

  // Areas pages preloading
  else if (routePath === '/areas') {
    preloadComponents([
      () => import('../pages/areas/SEOGuildford'),
      () => import('../pages/areas/SEOWoking'),
      () => import('../pages/areas/SEOEpsom')
    ]);
  }

  // Home page - preload main section pages
  else if (routePath === '/') {
    preloadComponents([
      () => import('../pages/Services'),
      () => import('../pages/About'),
      () => import('../pages/Contact')
    ]);
  }
};