import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech-workspace.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const Hero = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-left">
              Transformamos sua{" "}
              <span className="text-primary relative inline-block animate-text-highlight">
                infraestrutura
              </span>{" "}
              em um motor de{" "}
              <span className="text-primary relative inline-block animate-text-highlight">
                produtividade
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-blur-in delay-200">
              Especialistas em workstations personalizadas, manutenção de computadores, 
              infraestrutura de redes e sistemas de monitoramento CFTV para empresas 
              que buscam excelência tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in delay-400">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="gradient-primary text-white shadow-button hover:opacity-90 text-lg px-8 py-6 animate-shimmer"
              >
                Solicitar Orçamento
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
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div 
                ref={yearsCount.elementRef} 
                className="text-center animate-fade-in delay-600"
              >
                <div className="text-3xl font-bold text-primary">{yearsCount.count}+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center animate-fade-in delay-700">
                <div className="text-3xl font-bold text-primary">{projectsCount.count}+</div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
              <div className="text-center animate-fade-in delay-800">
                <div className="text-3xl font-bold text-primary">{satisfactionCount.count}%</div>
                <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right delay-300">
            <div className="relative overflow-hidden rounded-2xl shadow-tech">
              <img 
                src={heroImage} 
                alt="Workspace tecnológico moderno da Techmig"
                className="w-full h-[500px] object-cover animate-zoom-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-card border animate-bounce-in delay-800 animate-float animate-pulse-glow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-semibold">Suporte 24/7</div>
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
