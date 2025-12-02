import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-md shadow-md py-2' 
          : 'bg-background/95 backdrop-blur-sm py-4'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img 
              src="/lovable-uploads/977ca011-a060-447d-a52b-594a19290765.png" 
              alt="TECHMIG" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['hero', 'services', 'benefits', 'team', 'testimonials'].map((section, index) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-foreground hover:text-primary transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                {section === 'hero' ? 'Início' : 
                 section === 'services' ? 'Serviços' : 
                 section === 'benefits' ? 'Benefícios' : 
                 section === 'team' ? 'Equipe' : 'Depoimentos'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`gradient-primary text-primary-foreground shadow-button hover:opacity-90 hover:scale-105 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="py-4 border-t border-border space-y-1">
            {[
              { id: 'hero', label: 'Início' },
              { id: 'services', label: 'Serviços' },
              { id: 'benefits', label: 'Benefícios' },
              { id: 'team', label: 'Equipe' },
              { id: 'testimonials', label: 'Depoimentos' }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`w-full mt-4 gradient-primary text-primary-foreground shadow-button transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}
            >
              Contato
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
