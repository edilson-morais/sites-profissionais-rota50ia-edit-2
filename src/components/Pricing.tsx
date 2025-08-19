import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 897",
    period: "pagamento único",
    description: "Ideal para pequenos negócios",
    features: [
      "Site responsivo até 5 páginas",
      "Domínio grátis por 1 ano",
      "Certificado SSL incluído",
      "Otimização básica SEO",
      "Suporte por 3 meses"
    ],
    highlighted: false
  },
  {
    name: "Profissional",
    price: "R$ 1.497",
    period: "pagamento único",
    description: "Para empresas em crescimento",
    features: [
      "Site responsivo até 10 páginas",
      "Domínio grátis por 1 ano",
      "Certificado SSL incluído",
      "SEO avançado",
      "Blog integrado",
      "Analytics configurado",
      "Suporte por 6 meses"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    price: "R$ 2.497",
    period: "pagamento único",
    description: "Solução completa",
    features: [
      "Site responsivo ilimitado",
      "Domínio grátis por 1 ano",
      "Certificado SSL incluído",
      "SEO premium",
      "E-commerce básico",
      "Sistema de agendamento",
      "Analytics avançado",
      "Suporte por 12 meses"
    ],
    highlighted: false
  }
]

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos e Preços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-background rounded-2xl border p-8 ${
                plan.highlighted 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                Escolher Plano
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}