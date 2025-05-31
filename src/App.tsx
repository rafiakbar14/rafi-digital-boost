
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LandingPage from "./pages/LandingPage";
import WebCompro from "./pages/WebCompro";
import WebsiteCompro from "./pages/WebsiteCompro";
import Ecommerce from "./pages/Ecommerce";
import DigitalAds from "./pages/DigitalAds";
import Portfolio from "./pages/Portfolio";
import LpPaket15 from "./pages/LpPaket15";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering');
  console.log('Current pathname:', window.location.pathname);
  
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/landing-page" element={<LandingPage />} />
              <Route path="/land" element={<LandingPage />} />
              <Route path="/web-compro" element={<WebCompro />} />
              <Route path="/webpaket15juta" element={<WebsiteCompro />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/digital-ads" element={<DigitalAds />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/lppaket15" element={<LpPaket15 />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
