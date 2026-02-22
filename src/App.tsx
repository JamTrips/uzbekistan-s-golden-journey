import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import MultiDayTours from "./pages/MultiDayTours";
import Transfers from "./pages/Transfers";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Destinations from "./pages/Destinations";
import Samarkand from "./pages/cities/Samarkand";
import Tashkent from "./pages/cities/Tashkent";
import Bukhara from "./pages/cities/Bukhara";
import Khiva from "./pages/cities/Khiva";
import Shakhrisabz from "./pages/cities/Shakhrisabz";
import ToursPage from "./pages/ToursPage";
import TourDetail from "./pages/TourDetail";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTours from "./pages/admin/AdminTours";
import AdminBookings from "./pages/admin/AdminBookings";

import AdminSetup from "./pages/admin/AdminSetup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/samarkand" element={<Samarkand />} />
              <Route path="/destinations/tashkent" element={<Tashkent />} />
              <Route path="/destinations/bukhara" element={<Bukhara />} />
              <Route path="/destinations/khiva" element={<Khiva />} />
              <Route path="/destinations/shakhrisabz" element={<Shakhrisabz />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/tours/:id" element={<TourDetail />} />
              <Route path="/multi-day-tours" element={<MultiDayTours />} />
              <Route path="/transfers" element={<Transfers />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Admin */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="tours" element={<AdminTours />} />
                <Route path="bookings" element={<AdminBookings />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
