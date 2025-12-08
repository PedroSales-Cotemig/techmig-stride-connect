import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech-workspace.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const yearsCount = useCountUp({ end: 10, duration: 2000, delay: 800 });
  const projectsCount = useCountUp({ end: 200, duration: 2500, delay: 1000 });
  const satisfactionCount = useCountUp({ end: 98, duration: 2000, delay: 1200 });

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              <span className="text-primary relative inline-block">
                Techmig
                <span className={`absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full transition-all duration-1000 delay-500 ${
                  isLoaded ? 'w-full' : 'w-0'
                }`} />
              </span>{" "}
              soluções de redes e{" "}
              <span className="text-primary relative inline-block">
                conectividade
                <span className={`absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full transition-all duration-1000 delay-700 ${
                  isLoaded ? 'w-full' : 'w-0'
                }`} />
              </span>
            </h1>
            
            <p 
              className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              Especialistas em workstations personalizadas, manutenção de computadores, 
              infraestrutura de redes e sistemas de monitoramento CFTV para empresas 
              que buscam excelência tecnológica.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="gradient-primary text-primary-foreground shadow-button hover:opacity-90 hover:scale-105 text-lg px-8 py-6 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 pt-8 border-t border-border transition-all duration-700 delay-600 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div ref={yearsCount.elementRef} className="text-center group">
                <div className="text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                  {yearsCount.count}+
                </div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                  {projectsCount.count}+
                </div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                  {satisfactionCount.count}%
                </div>
                <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-tech group">
              <img 
                src={heroImage} 
                alt="Workspace tecnológico moderno da Techmig"
                className={`w-full h-[500px] object-cover transition-transform duration-[2s] ease-out ${
                  isLoaded ? 'scale-100' : 'scale-110'
                } group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div 
              className={`absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-card border transition-all duration-700 delay-700 ease-out hover:shadow-tech ${
                isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}
              style={{ animation: isLoaded ? 'float 4s ease-in-out infinite 1s' : 'none' }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Suporte 24/7</div>
                  <div className="text-sm text-muted-foreground">Disponível sempre</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
