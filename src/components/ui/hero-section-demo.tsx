
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

function HeroSectionDemo() {
  return (
    <div className="animate-fade-in">
      <HeroGeometric
        badge="Rota50IA"
        title1="Sites profissionais que colocam sua empresa"
        title2="na frente no Google"
        description="e dos seus clientes"
        ctaText="Solicitar Orçamento"
        ctaHref="#contact"
      />
    </div>
  )
}

export { HeroSectionDemo }
