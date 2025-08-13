import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech-workspace.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformamos sua{" "}
              <span className="text-primary">infraestrutura</span>{" "}
              em um motor de{" "}
              <span className="text-primary">produtividade</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Especialistas em workstations personalizadas, manutenção de computadores, 
              infraestrutura de redes e sistemas de monitoramento CFTV para empresas 
              que buscam excelência tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="gradient-primary text-white shadow-button hover:opacity-90 text-lg px-8 py-6"
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
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-tech">
              <img 
                src={heroImage} 
                alt="Workspace tecnológico moderno da Techmig"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-card border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
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