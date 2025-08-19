import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Silva Advocacia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "O site aumentou nossa visibilidade online em 300%. Agora recebemos muito mais clientes através do Google.",
    rating: 5
  },
  {
    name: "Maria Santos",
    company: "Clínica Vida",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    text: "Profissionais excelentes! O site ficou moderno e o sistema de agendamento facilitou muito nossa rotina.",
    rating: 5
  },
  {
    name: "João Oliveira",
    company: "Restaurante Sabor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Nosso delivery cresceu 250% após o lançamento do site. Recomendo para todos os restaurantes.",
    rating: 5
  }
]

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de empresários que transformaram seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-muted/50 p-8 rounded-xl border border-border"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}