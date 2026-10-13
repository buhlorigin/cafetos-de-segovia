
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Farms from "./pages/Farms";
import Nicaragua from "./pages/Nicaragua";
import Contact from "./pages/Contact";
import ScrollEffects from "./components/ScrollEffects";
import NotFound from "./pages/NotFound";
import { LocaleLayout } from "./lib/locale";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollEffects />
        <Routes>
          {(['en', 'es'] as const).map((lang) => {
            const pre = lang === 'es' ? '/es' : '';
            return (
              <Route key={lang} element={<LocaleLayout lang={lang} />}>
                <Route path={pre || '/'} element={<Index />} />
                <Route path={`${pre}/about`} element={<About />} />
                <Route path={`${pre}/services`} element={<Services />} />
                <Route path={`${pre}/farms`} element={<Farms />} />
                <Route path={`${pre}/nicaragua`} element={<Nicaragua />} />
                <Route path={`${pre}/contact`} element={<Contact />} />
                <Route path={`${pre}/*`} element={<NotFound />} />
              </Route>
            );
          })}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
