import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Fale conosco
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <p className="text-muted-foreground">(62)981221474 - Edilson Morais</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">edilsonrota50ia@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-foreground">Localização</p>
                  <p className="text-muted-foreground">Goiânia - GO</p>
                </div>
              </div>
            </div>

            <div className="bg-primary p-6 rounded-xl">
              <h4 className="text-xl font-bold text-primary-foreground mb-2">
                Consultoria Gratuita
              </h4>
              <p className="text-primary-foreground/80 mb-4">
                Agende uma conversa de 30 minutos para discutir seu projeto
              </p>
              <Button variant="secondary" className="w-full">
                Agendar Consultoria
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 p-8 rounded-xl border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input placeholder="Nome da empresa" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea placeholder="Conte-nos sobre seu projeto..." rows={4} />
              </div>
              
              <Button className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};