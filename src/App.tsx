import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Core components - loaded eagerly
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import components
import PageLoader from "./components/PageLoader";
import RouteChangeListener from "./components/RouteChangeListener";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy-loaded pages

// Service Pages
const Services = lazy(() => import("./pages/Services"));
const SEOAgencySurrey = lazy(() => import("./pages/services/SEOAgencySurrey"));
const GoogleBusinessProfileSurrey = lazy(() => import("./pages/services/GoogleBusinessProfileSurrey"));
const LocalSEOSurrey = lazy(() => import("./pages/services/LocalSEOSurrey"));
const AIPoweredAutomation = lazy(() => import("./pages/services/AIPoweredAutomation"));
const MarketingStrategy = lazy(() => import("./pages/services/MarketingStrategy"));
const InternetMarketing = lazy(() => import("./pages/services/InternetMarketing"));
const SEOConsultant = lazy(() => import("./pages/services/SEOConsultant"));
const BusinessAutomation = lazy(() => import("./pages/services/BusinessAutomation"));
const SEOWebDesign = lazy(() => import("./pages/services/SEOWebDesign"));

// Industry Pages
const Industries = lazy(() => import("./pages/Industries"));
const SEOForPlumbers = lazy(() => import("./pages/industries/SEOForPlumbers"));
const SEOForElectricians = lazy(() => import("./pages/industries/SEOForElectricians"));
const SEOForBuilders = lazy(() => import("./pages/industries/SEOForBuilders"));
const SEOForRoofers = lazy(() => import("./pages/industries/SEOForRoofers"));
const SEOForHVAC = lazy(() => import("./pages/industries/SEOForHVAC"));

// Area Pages
const Areas = lazy(() => import("./pages/Areas"));
const SEOGuildford = lazy(() => import("./pages/areas/SEOGuildford"));
const SEOWoking = lazy(() => import("./pages/areas/SEOWoking"));
const SEOEpsom = lazy(() => import("./pages/areas/SEOEpsom"));
const SEORedhill = lazy(() => import("./pages/areas/SEORedhill"));
const SEOCamberley = lazy(() => import("./pages/areas/SEOCamberley"));

// Company Pages
const About = lazy(() => import("./pages/About"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Route change listener for preloading components */}
        <RouteChangeListener />
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
            {/* Home and Not Found - eagerly loaded */}
            <Route path="/" element={<Index />} />
            
            {/* Service Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo-agency-surrey" element={<SEOAgencySurrey />} />
            <Route path="/services/google-business-profile-surrey" element={<GoogleBusinessProfileSurrey />} />
            <Route path="/services/local-seo-surrey" element={<LocalSEOSurrey />} />
            <Route path="/services/ai-powered-automation" element={<AIPoweredAutomation />} />
            <Route path="/services/marketing-strategy" element={<MarketingStrategy />} />
            <Route path="/services/internet-marketing-surrey" element={<InternetMarketing />} />
            <Route path="/services/seo-consultant-surrey" element={<SEOConsultant />} />
            <Route path="/services/business-automation-surrey" element={<BusinessAutomation />} />
            <Route path="/services/seo-web-design-surrey" element={<SEOWebDesign />} />
            
            {/* Industry Routes */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/seo-for-plumbers" element={<SEOForPlumbers />} />
            <Route path="/industries/seo-for-electricians" element={<SEOForElectricians />} />
            <Route path="/industries/seo-for-builders" element={<SEOForBuilders />} />
            <Route path="/industries/seo-for-roofers" element={<SEOForRoofers />} />
            <Route path="/industries/seo-for-hvac" element={<SEOForHVAC />} />
            
            {/* Area Routes */}
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/seo-guildford" element={<SEOGuildford />} />
            <Route path="/areas/seo-woking" element={<SEOWoking />} />
            <Route path="/areas/seo-epsom" element={<SEOEpsom />} />
            <Route path="/areas/seo-redhill" element={<SEORedhill />} />
            <Route path="/areas/seo-camberley" element={<SEOCamberley />} />
            
            {/* Company Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
