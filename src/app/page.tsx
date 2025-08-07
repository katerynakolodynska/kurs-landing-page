import HeroSection from "@/sections/HeroSection/HeroSection";
import BenefitsSection from "@/sections/BenefitsSection/BenefitsSection";
import ProgramSection from "@/sections/ProgramSection/ProgramSection";
import TestimonialsSection from "@/sections/TestimonialsSection/TestimonialsSection";
import PricingSection from "@/sections/PricingSection/PricingSection";
import FAQSection from "@/sections/FAQSection/FAQSection";
import RegistrationSection from "@/sections/RegristrationSection/RegristrationSection";
import PortfolioSection from "@/sections/PortfolioSection/PortfolioSection";

export default function Home() {
  return (
    <>
      <div className="py-7">
        <HeroSection />
        <BenefitsSection />
        <ProgramSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <RegistrationSection />
        <PortfolioSection />
      </div>
    </>
  );
}
