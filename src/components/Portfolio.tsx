import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const portfolioItems = [{
  title: "E-commerce Moderno",
  category: "Loja Virtual",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
  description: "Plataforma completa de e-commerce com sistema de pagamento integrado."
}, {
  title: "Clínica Médica",
  category: "Saúde",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
  description: "Site institucional com sistema de agendamento online."
}, {
  title: "Restaurante Gourmet",
  category: "Gastronomia",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
  description: "Site responsivo com cardápio digital e delivery online."
}, {
  title: "Advocacia Digital",
  category: "Jurídico",
  image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
  description: "Portal jurídico com blog e área de clientes."
}, {
  title: "Academia Fitness",
  category: "Esportes",
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  description: "Site com sistema de matrícula e aulas online."
}, {
  title: "Imobiliária Prime",
  category: "Imóveis",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
  description: "Portal imobiliário com busca avançada e tour virtual."
}];
export const Portfolio = () => {
  return <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fazemos  sites para diversos tipos de negócios</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">entre em contato conosco</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-muted">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" size="sm" className="bg-background/10 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-sm text-primary font-medium">
                    {item.category}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};