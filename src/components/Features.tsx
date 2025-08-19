import { Globe, Search, BarChart3, Smartphone, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Sites Responsivos",
    description: "Sites que funcionam perfeitamente em todos os dispositivos e navegadores."
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Otimização completa para mecanismos de busca para melhor posicionamento."
  },
  {
    icon: BarChart3,
    title: "Analytics Integrado",
    description: "Acompanhe o desempenho do seu site com relatórios detalhados."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Design pensado primeiro para dispositivos móveis."
  },
  {
    icon: Shield,
    title: "Segurança SSL",
    description: "Certificados de segurança incluídos para proteger seus dados."
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Atendimento contínuo para resolver qualquer problema."
  }
]

export const Features = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para colocar sua empresa no topo do Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}