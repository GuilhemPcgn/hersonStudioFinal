import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Synchro from "./pages/Synchro";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useScrollToTop } from "./hooks/use-scroll-to-top";

const queryClient = new QueryClient();

// Composant wrapper pour utiliser le hook de scroll à l'intérieur du BrowserRouter
const AppContent = () => {
  useScrollToTop(); // Utilise le hook pour remettre le scroll en haut à chaque changement de route

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Artists />} />
        <Route path="/synchro" element={<Synchro />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
