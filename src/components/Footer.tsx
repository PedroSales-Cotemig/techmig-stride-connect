import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "@/hooks/useInView";

const Footer = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={ref} className="bg-foreground text-background py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img 
              src="/lovable-uploads/977ca011-a060-447d-a52b-594a19290765.png" 
              alt="TECHMIG" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Especialistas em soluções tecnológicas corporativas. Transformamos 
              infraestruturas em motores de produtividade com workstations personalizadas, 
              manutenção especializada, redes avançadas e sistemas CFTV.
            </p>
            
            <div className="space-y-3">
              {[
                { icon: MapPin, text: 'Av. Tech, 1234 - Belo Horizonte/MG' },
                { icon: Phone, text: '(31) 3333-4444' },
                { icon: Mail, text: 'contato@techmig.com.br' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 group transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <item.icon size={18} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-background/80 group-hover:text-background transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-background">Navegação</h3>
            <ul className="space-y-3">
              {[
                { id: 'hero', label: 'Início' },
                { id: 'services', label: 'Serviços' },
                { id: 'benefits', label: 'Benefícios' },
                { id: 'team', label: 'Equipe' },
                { id: 'contact', label: 'Contato' }
              ].map((item, index) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-background/80 hover:text-primary transition-all duration-300 group ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-background">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Workstations Personalizadas',
                'Manutenção de Computadores',
                'Infraestrutura de Redes',
                'Sistemas CFTV',
                'Consultoria Técnica',
                'Suporte 24/7'
              ].map((service, index) => (
                <li 
                  key={index}
                  className={`text-background/80 hover:text-background transition-all duration-300 cursor-default ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr 
          className={`border-background/20 my-12 transition-all duration-1000 ${
            isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} 
        />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div 
            className={`text-background/60 mb-4 md:mb-0 transition-all duration-700 delay-500 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            © 2024 Techmig. Todos os direitos reservados.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <button 
                key={index}
                className={`w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* SEO Keywords Footer Note */}
        <div 
          className={`mt-8 pt-8 border-t border-background/20 transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-xs text-background/40 text-center leading-relaxed">
            Workstations corporativas | Manutenção de computadores empresariais | 
            Infraestrutura de redes profissionais | CFTV para empresas | 
            Tecnologia corporativa Belo Horizonte | Soluções em TI | 
            Suporte técnico especializado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
