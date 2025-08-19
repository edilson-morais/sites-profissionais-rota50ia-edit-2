import { HeroSectionDemo } from "@/components/ui/hero-section-demo"
import { Header } from "@/components/Header"
import { Features } from "@/components/Features"
import { Stats } from "@/components/Stats"
import { Portfolio } from "@/components/Portfolio"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSectionDemo />
        <Features />
        <Stats />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
