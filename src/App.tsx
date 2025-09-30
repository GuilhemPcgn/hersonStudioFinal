import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import { SpeedInsights } from "@vercel/speed-insights/react";
import DeferredScripts from "./components/DeferredScripts";
import MarketingScripts from "./components/MarketingScripts";

// Lazy loading des pages
const Home = React.lazy(() => import("./pages/Home"));
const Artists = React.lazy(() => import("./pages/Artists"));
const Synchro = React.lazy(() => import("./pages/Synchro"));
const Contact = React.lazy(() => import("./pages/Contact"));
const LegalMentions = React.lazy(() => import("./pages/LegalMentions"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Composant de fallback léger pour le lazy loading
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-32"></div>
    </div>
  </div>
);

// Composant wrapper pour utiliser le hook de scroll à l'intérieur du BrowserRouter
const AppContent = () => {
  useScrollToTop(); // Utilise le hook pour remettre le scroll en haut à chaque changement de route

  return (
    <>
      <Header />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Artists />} />
          <Route path="/synchro" element={<Synchro />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />

      <SpeedInsights />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        {/* Scripts marketing différés - chargement après interaction */}
        <DeferredScripts priority="low" idle={true} delay={2000}>
          <MarketingScripts
            analytics={{
              // googleAnalytics: "GA_MEASUREMENT_ID",
              // googleTagManager: "GTM_ID",
              // facebookPixel: "FB_PIXEL_ID"
            }}
            chat={{
              // intercom: "INTERCOM_APP_ID",
              // zendesk: "ZENDESK_KEY",
              // tawk: "TAWK_PROPERTY_ID"
            }}
            priority="low"
          />
        </DeferredScripts>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
