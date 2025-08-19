import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo demora para criar um site?",
    answer: "O prazo varia conforme a complexidade do projeto. Sites básicos ficam prontos em 7-10 dias úteis, enquanto projetos mais complexos podem levar de 2-4 semanas."
  },
  {
    question: "O site será responsivo?",
    answer: "Sim! Todos os nossos sites são desenvolvidos com design responsivo, funcionando perfeitamente em computadores, tablets e smartphones."
  },
  {
    question: "Vocês fazem manutenção do site?",
    answer: "Oferecemos suporte gratuito durante o período especificado em cada plano. Após esse período, temos planos de manutenção mensal disponíveis."
  },
  {
    question: "O site vai aparecer no Google?",
    answer: "Sim! Fazemos toda a otimização SEO básica e configuramos o Google Analytics. Para campanhas de marketing digital, oferecemos serviços adicionais."
  },
  {
    question: "Posso fazer alterações no site depois?",
    answer: "Claro! Você receberá um tutorial completo para fazer pequenas alterações. Para mudanças maiores, nossa equipe está sempre disponível."
  },
  {
    question: "Vocês hospedam o site?",
    answer: "Indicamos os melhores provedores de hospedagem e ajudamos na configuração. O domínio do primeiro ano está incluso em todos os planos."
  }
]

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}