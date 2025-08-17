import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/977ca011-a060-447d-a52b-594a19290765.png" 
              alt="TECHMIG" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Especialistas em soluções tecnológicas corporativas. Transformamos 
              infraestruturas em motores de produtividade com workstations personalizadas, 
              manutenção especializada, redes avançadas e sistemas CFTV.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-white/80">Av. Tech, 1234 - Belo Horizonte/MG</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-white/80">(31) 3333-4444</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-white/80">contato@techmig.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-white/80">Workstations Personalizadas</li>
              <li className="text-white/80">Manutenção de Computadores</li>
              <li className="text-white/80">Infraestrutura de Redes</li>
              <li className="text-white/80">Sistemas CFTV</li>
              <li className="text-white/80">Consultoria Técnica</li>
              <li className="text-white/80">Suporte 24/7</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-white/60 mb-4 md:mb-0">
            © 2024 Techmig. Todos os direitos reservados.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram size={18} />
            </button>
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin size={18} />
            </button>
          </div>
        </div>

        {/* SEO Keywords Footer Note */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-xs text-white/40 text-center leading-relaxed">
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