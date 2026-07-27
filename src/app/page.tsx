import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FeaturedFavorites } from "@/components/sections/FeaturedFavorites";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PromoSection } from "@/components/sections/PromoSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedFavorites />
        <PromoSection />
        <BenefitsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
