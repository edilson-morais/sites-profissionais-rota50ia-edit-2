import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-gradient-section border-t border-blue-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center">
              <img 
                src="/lovable-uploads/2470a09f-5cd2-4f41-8f92-433a78629e4b.png" 
                alt="Equipe Rota50IA Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200/80 mb-6 max-w-md">
              Fazemos sites profissionais que colocam sua empresa em destaque no Google e ajudam mais clientes a te encontrar online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">Criação de Sites</a></li>
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">SEO</a></li>
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">Marketing Digital</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">Portfólio</a></li>
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200/80 hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-blue-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200/70 text-sm">
              © 2024 WebPro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://politica-de-privacidade.rota50ia.com/" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};