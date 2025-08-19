import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 w-full backdrop-blur-dark border-b border-blue-800/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Rota50IA</span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-blue-100 hover:text-blue-400 transition-colors">Início</a>
              <a href="#services" className="text-blue-100 hover:text-blue-400 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-blue-100 hover:text-blue-400 transition-colors">Portfólio</a>
              <a href="#pricing" className="text-blue-100 hover:text-blue-400 transition-colors">Preços</a>
              <a href="#contact" className="text-blue-100 hover:text-blue-400 transition-colors">Contato</a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-button hover:scale-105 transition-all duration-300 text-white border-0">
              Fale Conosco
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect border-t border-blue-800/30">
              <a href="#home" className="block px-3 py-2 text-blue-100 hover:text-blue-400 transition-colors">Início</a>
              <a href="#services" className="block px-3 py-2 text-blue-100 hover:text-blue-400 transition-colors">Serviços</a>
              <a href="#portfolio" className="block px-3 py-2 text-blue-100 hover:text-blue-400 transition-colors">Portfólio</a>
              <a href="#pricing" className="block px-3 py-2 text-blue-100 hover:text-blue-400 transition-colors">Preços</a>
              <a href="#contact" className="block px-3 py-2 text-blue-100 hover:text-blue-400 transition-colors">Contato</a>
              <div className="pt-4">
                <Button className="w-full bg-gradient-button hover:scale-105 transition-all duration-300 text-white border-0">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};