import { HeroSection } from "@/components/ui/hero-section-dark"

function HeroSectionDemo() {
  return (
    <div className="animate-fade-in">
      <HeroSection
        title="Sites profissionais que colocam sua empresa"
        subtitle={{
          regular: "na frente no ",
          gradient: "Google",
        }}
        description="e dos seus clientes"
        ctaText="Solicitar Orçamento"
        ctaHref="#contact"
        bottomImage={undefined}
        gridOptions={{
          angle: 65,
          opacity: 0.1,
          cellSize: 50,
          lightLineColor: "#2a2a2a",
          darkLineColor: "#1a1a1a",
        }}
      />
    </div>
  )
}

export { HeroSectionDemo }