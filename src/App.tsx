import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import Services from "./pages/Services";
import SEOAgencySurrey from "./pages/services/SEOAgencySurrey";
import GoogleBusinessProfileSurrey from "./pages/services/GoogleBusinessProfileSurrey";
import LocalSEOSurrey from "./pages/services/LocalSEOSurrey";
import AIPoweredAutomation from "./pages/services/AIPoweredAutomation";

// Industry Pages
import Industries from "./pages/Industries";
import SEOForPlumbers from "./pages/industries/SEOForPlumbers";
import SEOForElectricians from "./pages/industries/SEOForElectricians";
import SEOForBuilders from "./pages/industries/SEOForBuilders";
import SEOForRoofers from "./pages/industries/SEOForRoofers";
import SEOForHVAC from "./pages/industries/SEOForHVAC";

// Area Pages
import Areas from "./pages/Areas";
import SEOGuildford from "./pages/areas/SEOGuildford";
import SEOWoking from "./pages/areas/SEOWoking";
import SEOEpsom from "./pages/areas/SEOEpsom";
import SEORedhill from "./pages/areas/SEORedhill";
import SEOCamberley from "./pages/areas/SEOCamberley";

// Company Pages
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo-agency-surrey" element={<SEOAgencySurrey />} />
          <Route path="/services/google-business-profile-surrey" element={<GoogleBusinessProfileSurrey />} />
          <Route path="/services/local-seo-surrey" element={<LocalSEOSurrey />} />
          <Route path="/services/ai-powered-automation" element={<AIPoweredAutomation />} />
          
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
