import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { useFavicon } from "../hooks/useFavicon";

export default function App() {
  // Set up favicon and meta tags
  useFavicon();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
